// @ts-nocheck
/** Chrome-Network-style overview timeline for focusing the trajectory ledger. */

import {
  Fragment, memo, useCallback, useEffect, useMemo, useRef, useState, type CSSProperties,
  type KeyboardEvent, type PointerEvent,
} from 'react'
import type { TrajectoryTurnModel } from './layout.ts'
import type { TrajectoryTranslate } from './locales.ts'
import type { AssistantMetricDetail, TrajectoryCellKind, TrajectoryCellProps } from './trajectory-record.ts'
import {
  deriveTrajectoryTimeline,
  type TrajectoryTimelineMode,
  type TrajectoryTimelineModel,
  type TrajectoryTimelineSpan,
  type TrajectoryTimeRange,
} from './timeline.ts'
import { HoverCard } from './HoverCard.tsx'
import css from './TrajectoryTimeline.module.css'
import { formatDurationSpan, formatTimestamp } from './format.ts'

const MINIMUM_DRAG_PX = 3
/** One arrow step moves this share of the visible window. */
const EDGE_STEP_FRACTION = 2 / 3
/** Holding an arrow waits this long before repeating, then repeats this often. */
const HOLD_DELAY_MS = 420
const HOLD_REPEAT_MS = 140
/**
 * Above this many visible spans the strip draws pixel buckets instead of one
 * element per record: at full zoom-out a 5,000-record session put 5,000
 * absolutely positioned spans (each with ten inline custom properties) inside a
 * 1,100px track, which is invisible detail at four spans per pixel. Buckets are
 * one element per (lane, column) and drop back to real spans as soon as the
 * window is zoomed in.
 */
const BUCKET_SPAN_LIMIT = 1600
const BUCKET_COLUMNS = 360
const MINIMUM_ZOOM_OPERATIONS = 4
const EDGE_PAN_ZONE_FRACTION = 0.08
const EDGE_PAN_STEP_FRACTION = 0.025
const MAXIMUM_EDGE_PAN_PX = 32

interface TimelineRecordDetail {
  decodingMs?: number
  durationMs?: number
  startedAt?: number
  ttftMs?: number
}

interface FractionRange {
  start: number
  end: number
}

interface HoverPoint {
  fraction: number
  recordIndex: number | null
  x: number
  y: number
}

interface PanGesture {
  anchorClientX: number
  anchorStart: number
  moved: boolean
  pannable: boolean
  pointerId: number
}

function assistantTimingDetail(
  metrics: AssistantMetricDetail | undefined,
): Pick<TimelineRecordDetail, 'ttftMs' | 'decodingMs'> {
  const start = metrics?.stepStartTime
  const first = metrics?.firstTokenTime
  const completed = metrics?.completedTime
  if (
    metrics?.timingRecorded !== true
    || typeof start !== 'number'
    || typeof first !== 'number'
    || typeof completed !== 'number'
    || !Number.isFinite(start)
    || !Number.isFinite(first)
    || !Number.isFinite(completed)
    || first < start
    || completed < first
  ) return {}
  return { ttftMs: first - start, decodingMs: completed - first }
}

function timelineRecordDetail(cell: TrajectoryCellProps): TimelineRecordDetail {
  const durationMs = cell.timeSeconds === null || !Number.isFinite(cell.timeSeconds)
    ? undefined
    : Math.max(0, cell.timeSeconds * 1_000)
  const startedAt = cell.startedAt === null || !Number.isFinite(cell.startedAt)
    ? undefined
    : cell.startedAt
  return {
    ...(durationMs === undefined ? {} : { durationMs }),
    ...(startedAt === undefined ? {} : { startedAt }),
    ...assistantTimingDetail(cell.assistantMetrics),
  }
}

/** Domain value in the active projection: an ordinal, a compressed offset or a clock time. */
function formatDomainValue(
  value: number,
  mode: TrajectoryTimelineMode,
  origin: number,
): string {
  if (mode === 'sequence') return `#${Math.round(value)}`
  if (mode === 'duration') return formatDurationSpan(Math.max(0, value - origin))
  return formatTimestamp(value)
}

function timelineKindLabel(kind: TrajectoryCellKind, t: TrajectoryTranslate): string {
  switch (kind) {
    case 'system': return t('kind.system')
    case 'user': return t('kind.user')
    case 'context': return t('kind.context')
    case 'compacted': return t('kind.compacted')
    case 'message': return t('kind.assistant')
    case 'tool': return t('kind.tool')
    case 'subtool': return t('kind.subtool')
  }
}

/** Props for the fixed full-domain overview above the trajectory ledger. */
export interface TrajectoryTimelineProps {
  t: TrajectoryTranslate
  /** Plugin-scoped strings (cursor card labels). */
  qt: (key: string, params?: Record<string, string | number>) => string
  turns: readonly TrajectoryTurnModel[]
  mode: TrajectoryTimelineMode
  range: TrajectoryTimeRange | null
  /** Whether the loaded timeline omits an earlier history prefix. */
  hasEarlierRecords?: boolean
  /** Load one earlier history page from the truncation control. */
  onLoadEarlier?: () => Promise<boolean>
  selectedIndex?: number | null
  /** Record indexes matching the active ledger search, or null without a query. */
  searchMatchIndexes?: ReadonlySet<number> | null
  onRangeChange: (range: TrajectoryTimeRange | null) => void
  /** Select a directly clicked timeline block. */
  onRecordSelect?: (index: number) => void
  /** Bring the nearest record into view after clicking timeline whitespace. */
  onRecordFocus?: (index: number) => void
}

function orderedRange(left: number, right: number): FractionRange {
  return left <= right ? { start: left, end: right } : { start: right, end: left }
}

function clampFraction(value: number): number {
  return Math.min(1, Math.max(0, value))
}

function centeredRange(
  center: number,
  width: number,
  minimum: number,
  maximum: number,
): FractionRange {
  const clampedWidth = Math.min(maximum - minimum, Math.max(0, width))
  const start = Math.min(
    Math.max(center - clampedWidth / 2, minimum),
    maximum - clampedWidth,
  )
  return { start, end: start + clampedWidth }
}

function rangeFraction(
  range: TrajectoryTimeRange,
  start: number,
  duration: number,
  minimum: number,
  maximum: number,
): FractionRange {
  const bounded = orderedRange(
    Math.min(maximum, Math.max(minimum, range.start)),
    Math.min(maximum, Math.max(minimum, range.end)),
  )
  return {
    start: (bounded.start - start) / duration,
    end: (bounded.end - start) / duration,
  }
}

function LaneLabels({ t }: { t: TrajectoryTranslate }) {
  return (
    <div className={css.labels} aria-hidden="true">
      <span>{t('column.input')}</span>
      <span>{t('column.model')}</span>
      <span>{t('column.tools')}</span>
    </div>
  )
}

/**
 * The span layer, memoized by low-frequency props.
 *
 * Hovering and dragging update the parent on every pointer move (hover line,
 * draft range, panning), but a span's geometry only depends on the model, the
 * domain and the selection. Passing the hovered *index* instead of the whole
 * hover point means this layer re-renders when the pointer crosses a span, not
 * on every pixel — with ~700 spans that is the difference between a smooth drag
 * and a stuttering one.
 */
const TimelineLanes = memo(function TimelineLanes({
  model,
  fullDuration,
  domainStart,
  domainDuration,
  domainStyle,
  animateViewport,
  selectedIndex,
  hoveredIndex,
  activeRange,
  searchMatchIndexes,
  detailByIndex,
  mode,
}: {
  model: TrajectoryTimelineModel
  fullDuration: number
  domainStart: number
  domainDuration: number
  domainStyle: CSSProperties | undefined
  animateViewport: boolean
  selectedIndex: number | null
  hoveredIndex: number | null
  activeRange: TrajectoryTimeRange | null
  searchMatchIndexes: Set<number> | null
  detailByIndex: Map<number, TimelineRecordDetail | undefined>
  mode: TrajectoryTimelineMode
}) {
  const domainEnd = domainStart + domainDuration
  const visibleSpans = model.spans.filter(span =>
    span.index === selectedIndex
    || (span.end >= domainStart && span.start <= domainEnd))
  const bucketed = visibleSpans.length > BUCKET_SPAN_LIMIT
  /* One representative element per (lane, pixel column): the union of the spans
     that land there, so no record disappears — only its individual rectangle. */
  const buckets = bucketed
    ? (() => {
      const map = new Map<string, {
        lane: number
        start: number
        end: number
        isError: boolean
        kind: TrajectoryCellKind
        selected: boolean
        hovered: boolean
        search: boolean
      }>()
      for (const span of visibleSpans) {
        const column = Math.floor((span.start - model.start) / fullDuration * BUCKET_COLUMNS)
        const key = `${span.lane}\u0000${column}`
        const existing = map.get(key)
        if (existing === undefined) {
          map.set(key, {
            lane: span.lane,
            start: span.start,
            end: span.end,
            isError: span.isError,
            kind: span.kind,
            selected: span.index === selectedIndex,
            hovered: hoveredIndex === span.index,
            search: searchMatchIndexes?.has(span.index) === true,
          })
          continue
        }
        if (span.start < existing.start) existing.start = span.start
        if (span.end > existing.end) existing.end = span.end
        if (span.isError) existing.isError = true
        if (span.index === selectedIndex) existing.selected = true
        if (hoveredIndex === span.index) existing.hovered = true
        if (searchMatchIndexes?.has(span.index) === true) existing.search = true
      }
      return [...map.values()]
    })()
    : null
  return (
    <>
      <div
        className={css.turnBoundaries}
        data-animate-viewport={animateViewport || undefined}
        aria-hidden="true"
        style={domainStyle}
      >
        {model.turnBoundaries
          .filter(boundary =>
            boundary.time > model.start
            && boundary.time >= domainStart
            && boundary.time <= domainStart + domainDuration)
          .map(boundary => (
            <span
              className={css.turnBoundary}
              data-turn={boundary.turn}
              key={boundary.turn}
              style={{
                '--trajectory-turn-left':
                  `${(boundary.time - model.start) / fullDuration * 100}%`,
              } as CSSProperties}
            />
          ))}
      </div>
      <div
        className={css.lanes}
        data-animate-viewport={animateViewport || undefined}
        data-timeline-domain
        style={domainStyle}
      >
        {(buckets === null ? visibleSpans : []).map((span) => {
          const left = (span.start - model.start) / fullDuration
          const width = (span.end - span.start) / fullDuration
          const widthPercent = width * 100
          const detail = detailByIndex.get(span.index)
          const ttftMs = detail?.ttftMs
          const decodingMs = detail?.decodingMs
          const ttftFraction = ttftMs === undefined
            || decodingMs === undefined
            || ttftMs + decodingMs <= 0
            ? null
            : ttftMs / (ttftMs + decodingMs)
          return (
            <Fragment key={span.index}>
              <span
                aria-hidden="true"
                className={css.span}
                data-timeline-span={span.kind}
                data-timeline-record-index={span.index}
                data-assistant-timing={ttftFraction === null ? undefined : 'true'}
                data-error={span.isError || undefined}
                data-equal-duration={mode === 'time' || undefined}
                data-current={span.index === selectedIndex || undefined}
                data-hovered={hoveredIndex === span.index || undefined}
                data-search-match={searchMatchIndexes === null
                  ? undefined
                  : searchMatchIndexes.has(span.index) ? 'true' : 'false'}
                data-selected={activeRange === null
                  ? undefined
                  : span.start <= activeRange.end && span.end >= activeRange.start
                    ? 'true'
                    : 'false'}
                style={{
                  '--trajectory-span-left': `${left * 100}%`,
                  '--trajectory-span-width': `${widthPercent}%`,
                  '--trajectory-span-gap': `min(${widthPercent * 0.08}%, 1px)`,
                  '--trajectory-span-lane': span.lane,
                  ...(ttftFraction === null
                    ? {}
                    : { '--trajectory-assistant-ttft': `${ttftFraction * 100}%` }),
                } as CSSProperties}
              />
            </Fragment>
          )
        })}
        {buckets !== null && buckets.map(bucket => (
          <span
            key={`${bucket.lane}:${bucket.start}:${bucket.end}`}
            aria-hidden="true"
            className={css.span}
            data-timeline-span={bucket.kind}
            data-bucket="true"
            data-error={bucket.isError || undefined}
            data-equal-duration={mode === 'time' || undefined}
            data-current={bucket.selected || undefined}
            data-hovered={bucket.hovered || undefined}
            data-search-match={bucket.search || undefined}
            data-selected={activeRange === null
              ? undefined
              : bucket.start <= activeRange.end && bucket.end >= activeRange.start
                ? 'true'
                : 'false'}
            style={{
              '--trajectory-span-left':
                `${(bucket.start - model.start) / fullDuration * 100}%`,
              '--trajectory-span-width':
                `${Math.max((bucket.end - bucket.start) / fullDuration * 100, 0.1)}%`,
              '--trajectory-span-gap': '1px',
              '--trajectory-span-lane': bucket.lane,
            } as CSSProperties}
          />
        ))}
      </div>
    </>
  )
})

/** Overview renderer with drag ranges, click-sized focus, and Escape reset. */
export const TrajectoryTimeline = memo(function TrajectoryTimeline({
  t,
  qt,
  turns,
  mode,
  range,
  hasEarlierRecords = false,
  onLoadEarlier,
  selectedIndex = null,
  searchMatchIndexes = null,
  onRangeChange,
  onRecordSelect,
  onRecordFocus,
}: TrajectoryTimelineProps) {
  const model = useMemo(() => deriveTrajectoryTimeline(turns, mode), [mode, turns])
  const detailByIndex = useMemo(
    () => new Map(turns.flatMap(turn =>
      turn.groups.flatMap(group =>
        group.cells.map(cell => [cell.index, timelineRecordDetail(cell)] as const),
      ),
    )),
    [turns],
  )
  const dragRef = useRef<{
    pointerId: number
    anchorTime: number
    anchorClientX: number
    recordIndex: number | null
  } | null>(null)
  const panRef = useRef<PanGesture | null>(null)
  const rootRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [draft, setDraft] = useState<TrajectoryTimeRange | null>(null)
  const [hover, setHover] = useState<HoverPoint | null>(null)
  const [loadingEarlier, setLoadingEarlier] = useState(false)
  const [panning, setPanning] = useState(false)
  const [viewport, setViewport] = useState<TrajectoryTimeRange | null>(null)
  const [animateViewport, setAnimateViewport] = useState(false)
  useEffect(() => {
    if (
      model !== null
      && range !== null
      && (range.end < model.start || range.start > model.end)
    ) {
      onRangeChange(null)
    }
  }, [model, onRangeChange, range])
  useEffect(() => {
    if (model === null) return
    setAnimateViewport(false)
    setViewport(current =>
      current !== null && (current.end < model.start || current.start > model.end)
        ? null
        : current)
  }, [model])
  useEffect(() => {
    if (model === null || selectedIndex === null) return
    const selectedSpan = model.spans.find(span => span.index === selectedIndex)
    if (selectedSpan === undefined) return
    setAnimateViewport(true)
    setViewport((current) => {
      if (current === null) return current
      if (
        selectedSpan.end > current.start
        && selectedSpan.start < current.end
      ) return current
      const duration = Math.max(1, current.end - current.start)
      const desiredStart = selectedSpan.end <= current.start
        ? selectedSpan.start
        : selectedSpan.end - duration
      const nextStart = Math.min(
        Math.max(desiredStart, model.start),
        Math.max(model.start, model.end - duration),
      )
      if (nextStart === current.start) return current
      return { start: nextStart, end: nextStart + duration }
    })
  }, [model, selectedIndex])
  const fullDuration = Math.max(1, (model?.end ?? 0) - (model?.start ?? 0))
  const viewportDuration = Math.min(
    fullDuration,
    Math.max(1, (viewport?.end ?? 0) - (viewport?.start ?? 0)),
  )
  const viewportStart = model === null || viewport === null
    ? model?.start ?? 0
    : Math.min(
      Math.max(viewport.start, model.start),
      model.end - viewportDuration,
    )
  const domainDuration = viewport === null ? fullDuration : viewportDuration
  const domainStart = viewport === null ? model?.start ?? 0 : viewportStart
  const loadEarlier = onLoadEarlier === undefined || loadingEarlier
    ? undefined
    : () => {
      setLoadingEarlier(true)
      void onLoadEarlier().finally(() => { setLoadingEarlier(false) })
    }
  const visibleEnd = domainStart + domainDuration
  const showsLaterBoundary = model !== null
    && viewport !== null
    && visibleEnd < model.end - Math.max(1e-9, fullDuration * 1e-6)
  /* Both ends are explicit arrows now. Hovering an end used to page history in
     and resize the window under the pointer, so the strip acted on its own; a
     press is a decision, a hold is a decision to keep going. */
  const panWindow = useCallback((direction: -1 | 1): boolean => {
    if (model === null || viewport === null) return false
    const span = viewport.end - viewport.start
    const nextStart = Math.min(
      Math.max(viewport.start + direction * span * EDGE_STEP_FRACTION, model.start),
      Math.max(model.start, model.end - span),
    )
    if (Math.abs(nextStart - viewport.start) < 1e-9) return false
    setAnimateViewport(false)
    setViewport({ start: nextStart, end: nextStart + span })
    return true
  }, [model, viewport])
  /* A press pans; the window keeps its size. At the loaded edge the press asks
     for the next page instead, and the pan is completed once that page lands —
     "move the window left, fetching what it uncovers". */
  /* The window size lives here, not in `domainDuration`: a fully zoomed-out
     strip reports the whole loaded range as its own size, and every page grows
     that range — recapturing it made the window swallow the log page by page,
     so every bar shrank under the reader. */
  const windowSize = useRef<number | null>(null)
  const pendingPan = useRef<{ fromStart: number; size: number | null } | null>(null)
  useEffect(() => {
    if (viewport === null) return
    const size = viewport.end - viewport.start
    if (size > 0) windowSize.current = size
  }, [viewport])
  const stepEarlier = useCallback(() => {
    if (panWindow(-1)) return
    if (model === null) return
    /* Fully zoomed out there is no window yet: take the page that arrives as the
       window (one page is the only span the reader has seen there), then keep
       that size for every later press. */
    pendingPan.current ??= { fromStart: model.start, size: windowSize.current }
    loadEarlier?.()
  }, [loadEarlier, model, panWindow])
  const stepLater = useCallback(() => { panWindow(1) }, [panWindow])
  const stepEarlierRef = useRef<() => void>(() => {})
  const stepLaterRef = useRef<() => void>(() => {})
  const canStepEarlier = viewport !== null || (hasEarlierRecords && loadEarlier !== undefined)
  /* Hold to repeat: one step on press, then a steady repeat after a short delay.
     The interval reads the *current* step from a ref: a page load re-renders and
     recreates the callback, and an interval holding the first closure would keep
     calling a step whose `loadEarlier` has gone stale (the chain died after one
     page). */
  const holdTimer = useRef<number | null>(null)
  const holdStep = useRef<() => void>(() => {})
  const holdRelease = useRef<(() => void) | null>(null)
  const stopHold = useCallback(() => {
    if (holdTimer.current !== null) window.clearTimeout(holdTimer.current)
    holdTimer.current = null
    holdRelease.current?.()
    holdRelease.current = null
  }, [])
  const startHold = useCallback((step: () => void) => {
    stopHold()
    holdStep.current = step
    step()
    /* A press released outside the button never reaches its pointerup: the page
       would keep paging after the reader let go. */
    const release = () => { stopHold() }
    window.addEventListener('pointerup', release)
    window.addEventListener('pointercancel', release)
    holdRelease.current = () => {
      window.removeEventListener('pointerup', release)
      window.removeEventListener('pointercancel', release)
    }
    holdTimer.current = window.setTimeout(() => {
      holdTimer.current = window.setInterval(() => { holdStep.current() }, HOLD_REPEAT_MS)
    }, HOLD_DELAY_MS)
  }, [stopHold])
  useEffect(() => stopHold, [stopHold])
  /* keep the ref pointing at the latest closure while a hold is running */
  stepEarlierRef.current = stepEarlier
  stepLaterRef.current = stepLater
  /* Both step arrows sit in the root's side padding, outside the plot: they are
     always there (a dimmed arrow still says which way is closed), and they never
     cover a bar or steal a gesture from the track. */
  const edgeEarlier = (
    <button
      type="button"
      className={css.edgeStep}
      data-side="earlier"
      aria-label={qt('timeline.earlier')}
      title={qt('timeline.earlier')}
      disabled={!canStepEarlier}
      data-loading={loadingEarlier || undefined}
      onPointerDown={(event) => {
        event.preventDefault()
        event.stopPropagation()
        if (event.button !== 0) return
        startHold(() => { stepEarlierRef.current() })
      }}
      onPointerUp={stopHold}
      onPointerLeave={stopHold}
      onPointerCancel={stopHold}
      onKeyDown={(event) => {
        /* a pointer gesture never fires a click, so the keyboard path is free
           to step once per keypress */
        if (event.key !== 'Enter' && event.key !== ' ') return
        event.preventDefault()
        stepEarlierRef.current()
      }}
    >
      <span aria-hidden="true">‹</span>
    </button>
  )
  const edgeLater = (
    <button
      type="button"
      className={css.edgeStep}
      data-side="later"
      aria-label={qt('timeline.later')}
      title={qt('timeline.later')}
      disabled={!showsLaterBoundary}
      onPointerDown={(event) => {
        event.preventDefault()
        event.stopPropagation()
        if (event.button !== 0) return
        startHold(() => { stepLaterRef.current() })
      }}
      onPointerUp={stopHold}
      onPointerLeave={stopHold}
      onPointerCancel={stopHold}
      onKeyDown={(event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        event.preventDefault()
        stepLaterRef.current()
      }}
    >
      <span aria-hidden="true">›</span>
    </button>
  )
  /* Complete a deferred pan once the page has landed: move by the same 2/3 step
     the window would have taken, so a third of it stays on screen and the size
     never changes. From a fully zoomed-out strip the first press adopts the
     page's own span as the window — the only size the reader has seen there. */
  useEffect(() => {
    const pending = pendingPan.current
    if (pending === null || model === null) return
    if (model.start >= pending.fromStart) return
    pendingPan.current = null
    const size = pending.size ?? (pending.fromStart - model.start)
    if (!(size > 0)) return
    windowSize.current = size
    const start = Math.max(model.start, pending.fromStart - size * EDGE_STEP_FRACTION)
    const end = Math.min(model.end, start + size)
    if (!(end > start)) return
    setAnimateViewport(false)
    setViewport({ start, end })
  }, [model])
  const projectedDomainStyle = useMemo(() => (model === null
    ? undefined
    : {
      '--trajectory-domain-left':
        `${-(domainStart - model.start) / domainDuration * 100}%`,
      '--trajectory-domain-width': `${fullDuration / domainDuration * 100}%`,
    } as CSSProperties), [domainDuration, domainStart, fullDuration, model])
  const committed = model === null || range === null
    ? null
    : rangeFraction(range, domainStart, domainDuration, model.start, model.end)
  const draftFraction = model === null || draft === null
    ? null
    : rangeFraction(draft, domainStart, domainDuration, model.start, model.end)
  const visibleRange = draftFraction ?? committed
  const activeRange = draft ?? range
  useEffect(() => {
    const root = rootRef.current
    if (root === null) return
    const onWheel = (event: globalThis.WheelEvent): void => {
      event.preventDefault()
      const track = trackRef.current
      if (track === null || model === null) return
      /* Wheel is zoom: up = zoom in, down = zoom out. The one exception is the
         bottom end — once the window already covers everything loaded, another
         wheel-down is the same "keep going back" gesture as scrolling past the
         top of the ledger, so it pages the next chunk instead of doing
         nothing. */
      setAnimateViewport(false)
      const rect = track.getBoundingClientRect()
      const anchorFraction =
        clampFraction((event.clientX - rect.left) / Math.max(1, rect.width))
      const nextDuration = Math.min(
        fullDuration,
        Math.max(
          Math.min(mode === 'sequence' ? MINIMUM_ZOOM_OPERATIONS : 20, fullDuration),
          domainDuration * Math.exp(event.deltaY * 0.0015),
        ),
      )
      if (nextDuration >= fullDuration * 0.999) {
        /* Zooming out has reached the whole loaded range. Further wheel-down is
           the same "keep going back" gesture as scrolling past the top of the
           ledger, so it pages the next chunk instead of doing nothing. */
        setViewport(null)
        if (event.deltaY > 0 && domainStart - model.start <= Math.max(1e-9, fullDuration * 1e-6)) {
          loadEarlier?.()
        }
        return
      }
      const anchorTime = domainStart + anchorFraction * domainDuration
      const nextStart = Math.min(
        Math.max(anchorTime - anchorFraction * nextDuration, model.start),
        model.end - nextDuration,
      )
      setViewport({ start: nextStart, end: nextStart + nextDuration })
    }
    root.addEventListener('wheel', onWheel, { passive: false })
    return () => { root.removeEventListener('wheel', onWheel) }
  }, [domainDuration, domainStart, fullDuration, loadEarlier, mode, model])

  if (model === null) {
    return (
      <section ref={rootRef} className={css.root} aria-label={t('timeline.aria')}>
        <div className={css.plot}>
          <LaneLabels t={t} />
          {edgeEarlier}
          <div className={css.track}>
            <span className={css.empty}>{t('timeline.noTimingData')}</span>
          </div>
          {edgeLater}
        </div>
      </section>
    )
  }

  const minimumSelectionDuration = Math.min(
    domainDuration,
    fullDuration / model.spans.length,
  )

  const fractionAt = (event: PointerEvent<HTMLDivElement>): number => {
    const rect = event.currentTarget.getBoundingClientRect()
    return clampFraction((event.clientX - rect.left) / Math.max(1, rect.width))
  }

  /** Lane under the pointer: lanes sit 14px apart, 8px tall, from 7px down. */
  const laneAt = (event: PointerEvent<HTMLDivElement>, rect: DOMRect): number | null => {
    const offset = event.clientY - rect.top - 7
    if (offset < 0) return null
    return Math.floor(offset / 14)
  }

  const recordIndexAt = (event: PointerEvent<HTMLDivElement>): number | null => {
    const target = event.target instanceof HTMLElement ? event.target : null
    const value = target?.closest<HTMLElement>('[data-timeline-record-index]')
      ?.dataset.timelineRecordIndex
    if (value !== undefined) {
      const index = Number(value)
      if (Number.isFinite(index)) return index
    }
    /* Dense windows draw pixel buckets, which carry no record index. The model
       still knows every span, so resolve the record under the pointer by time
       and lane — hovering a call must keep opening its card at any density. */
    if (model === null) return null
    const rect = event.currentTarget.getBoundingClientRect()
    const time = domainStart
      + clampFraction((event.clientX - rect.left) / Math.max(1, rect.width)) * domainDuration
    const lane = laneAt(event, rect)
    if (lane === null) return null
    let best: TrajectoryTimelineSpan | undefined
    for (const span of model.spans) {
      if (span.lane !== lane || span.start > time || span.end < time) continue
      if (best === undefined || span.end - span.start < best.end - best.start) best = span
    }
    return best?.index ?? null
  }

  const commit = (nextRange: TrajectoryTimeRange) => {
    onRangeChange(nextRange)
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button === 2) {
      panRef.current = {
        anchorClientX: event.clientX,
        anchorStart: domainStart,
        moved: false,
        pannable: viewport !== null,
        pointerId: event.pointerId,
      }
      if (viewport !== null) setAnimateViewport(false)
      setPanning(true)
      if (typeof event.currentTarget.setPointerCapture === 'function') {
        event.currentTarget.setPointerCapture(event.pointerId)
      }
      return
    }
    if (event.button !== 0) return
    const anchor = fractionAt(event)
    const anchorTime = domainStart + anchor * domainDuration
    const recordIndex = recordIndexAt(event)
    setHover({ fraction: anchor, recordIndex, x: event.clientX, y: event.clientY })
    dragRef.current = {
      pointerId: event.pointerId,
      anchorTime,
      anchorClientX: event.clientX,
      recordIndex,
    }
    if (typeof event.currentTarget.setPointerCapture === 'function') {
      event.currentTarget.setPointerCapture(event.pointerId)
    }
    setDraft({ start: anchorTime, end: anchorTime })
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const fraction = fractionAt(event)
    setHover({ fraction, recordIndex: recordIndexAt(event), x: event.clientX, y: event.clientY })
    const pan = panRef.current
    if (pan !== null && pan.pointerId === event.pointerId) {
      if (Math.abs(event.clientX - pan.anchorClientX) >= MINIMUM_DRAG_PX) {
        pan.moved = true
      }
      if (!pan.pannable) return
      const delta = (event.clientX - pan.anchorClientX) / Math.max(1, rect.width)
      const nextStart = Math.min(
        Math.max(pan.anchorStart - delta * domainDuration, model.start),
        model.end - domainDuration,
      )
      setViewport({ start: nextStart, end: nextStart + domainDuration })
      return
    }
    const drag = dragRef.current
    if (drag === null || drag.pointerId !== event.pointerId) return
    let nextDomainStart = domainStart
    if (viewport !== null) {
      const localX = event.clientX - rect.left
      const edgeWidth = Math.min(
        MAXIMUM_EDGE_PAN_PX,
        Math.max(1, rect.width * EDGE_PAN_ZONE_FRACTION),
      )
      const direction = localX < edgeWidth
        ? -1
        : localX > rect.width - edgeWidth ? 1 : 0
      if (direction !== 0) {
        const edgeDistance = direction < 0
          ? edgeWidth - localX
          : localX - (rect.width - edgeWidth)
        const strength = clampFraction(edgeDistance / edgeWidth)
        const desiredStart = domainStart
          + direction * domainDuration * EDGE_PAN_STEP_FRACTION
          * Math.max(0.2, strength)
        nextDomainStart = Math.min(
          Math.max(desiredStart, model.start),
          model.end - domainDuration,
        )
        if (nextDomainStart !== domainStart) {
          setAnimateViewport(false)
          setViewport({
            start: nextDomainStart,
            end: nextDomainStart + domainDuration,
          })
        }
      }
    }
    const pointTime = nextDomainStart + fraction * domainDuration
    setDraft(orderedRange(drag.anchorTime, pointTime))
  }

  const onPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const pan = panRef.current
    if (pan !== null && pan.pointerId === event.pointerId) {
      const moved = pan.moved
        || Math.abs(event.clientX - pan.anchorClientX) >= MINIMUM_DRAG_PX
      panRef.current = null
      setPanning(false)
      if (!moved) onRangeChange(null)
      return
    }
    const drag = dragRef.current
    if (drag === null || drag.pointerId !== event.pointerId) return
    const pointFraction = fractionAt(event)
    const pointTime = domainStart + pointFraction * domainDuration
    const selected = orderedRange(drag.anchorTime, pointTime)
    setHover({ fraction: pointFraction, recordIndex: recordIndexAt(event), x: event.clientX, y: event.clientY })
    dragRef.current = null
    setDraft(null)
    const click = Math.abs(event.clientX - drag.anchorClientX) < MINIMUM_DRAG_PX
    const clickedSpan = click && drag.recordIndex !== null
      ? model.spans.find(span => span.index === drag.recordIndex)
      : undefined
    if (clickedSpan !== undefined) {
      onRangeChange(null)
      onRecordSelect?.(clickedSpan.index)
      return
    }
    const committedRange = selected.end - selected.start < minimumSelectionDuration
      ? centeredRange(
        click ? selected.start : (selected.start + selected.end) / 2,
        minimumSelectionDuration,
        model.start,
        model.end,
      )
      : selected
    commit(committedRange)
    if (click) {
      const timelinePoint = selected.start
      const nearest = model.spans.reduce((candidate, span) => {
        const candidateDistance = timelinePoint < candidate.start
          ? candidate.start - timelinePoint
          : timelinePoint > candidate.end ? timelinePoint - candidate.end : 0
        const spanDistance = timelinePoint < span.start
          ? span.start - timelinePoint
          : timelinePoint > span.end ? timelinePoint - span.end : 0
        return spanDistance < candidateDistance ? span : candidate
      })
      onRecordFocus?.(nearest.index)
    }
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Escape' || range === null) return
    event.preventDefault()
    onRangeChange(null)
  }

  const onPointerCancel = () => {
    dragRef.current = null
    panRef.current = null
    setDraft(null)
    setHover(null)
    setPanning(false)
  }

  return (
    <>
    <section ref={rootRef} className={css.root} aria-label={t('timeline.aria')}>
      <div className={css.plot}>
        <LaneLabels t={t} />
        {edgeEarlier}
        <div
          ref={trackRef}
          className={css.track}
          data-panning={panning || undefined}
          aria-label={t('timeline.overviewAria')}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerCancel}
          onPointerLeave={() => {
            if (dragRef.current === null && panRef.current === null) setHover(null)
          }}
          onDoubleClick={(event) => {
            event.preventDefault()
            onRangeChange(null)
          }}
          onContextMenu={(event) => {
            event.preventDefault()
          }}
        >
          {hover !== null && (
            <div
              className={css.hoverLine}
              data-timeline-hover-line
              aria-hidden="true"
              style={{
                '--trajectory-hover-left': `${hover.fraction * 100}%`,
              } as CSSProperties}
            />
          )}
          {visibleRange !== null && (
            <>
              <div
                className={css.selection}
                data-dragging={draft === null ? undefined : 'true'}
                aria-hidden="true"
                style={{
                  '--trajectory-selection-left': `${visibleRange.start * 100}%`,
                  '--trajectory-selection-width': `${(visibleRange.end - visibleRange.start) * 100}%`,
                } as CSSProperties}
              />
              <div
                className={css.selectionEdges}
                data-dragging={draft === null ? undefined : 'true'}
                aria-hidden="true"
                style={{
                  '--trajectory-selection-left': `${visibleRange.start * 100}%`,
                  '--trajectory-selection-width': `${(visibleRange.end - visibleRange.start) * 100}%`,
                } as CSSProperties}
              />
            </>
          )}
          {model !== null && (
            <TimelineLanes
              model={model}
              fullDuration={fullDuration}
              domainStart={domainStart}
              domainDuration={domainDuration}
              domainStyle={projectedDomainStyle}
              animateViewport={animateViewport}
              selectedIndex={selectedIndex}
              hoveredIndex={hover?.recordIndex ?? null}
              activeRange={activeRange}
              searchMatchIndexes={searchMatchIndexes}
              detailByIndex={detailByIndex}
              mode={mode}
            />
          )}
        </div>
        {edgeLater}
      </div>
    </section>
      {hover !== null && !panning && (() => {
        const cursorValue = domainStart + hover.fraction * domainDuration
        const span = hover.recordIndex === null
          ? undefined
          : model.spans.find(candidate => candidate.index === hover.recordIndex)
        const formatValue = (value: number): string => formatDomainValue(value, mode, model.start)
        const detail = span === undefined ? undefined : detailByIndex.get(span.index)
        /* the count follows what the user is looking at: a committed or dragged
           range wins over the visible window, and the window itself is already
           the whole strip — printing its range again was a constant line */
        const counted = activeRange === null
          ? model.spans.filter(candidate =>
            candidate.end >= domainStart
            && candidate.start <= domainStart + domainDuration).length
          : model.spans.filter(candidate =>
            candidate.start <= activeRange.end && candidate.end >= activeRange.start).length
        const rows = [
          { label: qt('timeline.cursor'), value: formatValue(cursorValue) },
          /* the axis is relative in duration/sequence mode, so the absolute
             date of the record under the cursor is the only way to answer
             "when was this" — always give it when the span knows its start */
          ...(detail?.startedAt === undefined
            ? []
            : [{
              label: t('timing.started'),
              value: formatTimestamp(detail.startedAt),
            }]),
          ...(span === undefined
            ? []
            : [{
              label: qt('timeline.period'),
              value: `${formatValue(span.start)} – ${formatValue(span.end)}`,
            }]),
          ...(detail?.durationMs === undefined
            ? []
            : [{
              label: qt('chip.duration'),
              value: mode === 'sequence'
                ? qt('timeline.records', { count: Math.round(span.end - span.start) })
                : formatDurationSpan(detail.durationMs),
            }]),
          {
            label: activeRange === null ? qt('timeline.count') : qt('timeline.selected'),
            value: qt('timeline.records', { count: counted }),
          },
        ]
        return (
          <HoverCard
            x={hover.x}
            y={hover.y}
            /* no bar under the cursor → no head at all: the rows already say
               where the cursor is, and a head repeating `#7` reads as a bug */
            {...(span === undefined
              ? {}
              : {
                kind: span.kind,
                label: timelineKindLabel(span.kind, t),
                ...(span.label === '' ? {} : { name: span.label }),
              })}
            isError={span?.isError === true || undefined}
            rows={rows}
          />
        )
      })()}
    </>
  )
})
