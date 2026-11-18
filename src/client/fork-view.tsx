/**
 * 覆盖原生 `trajectory` 页签：直接用 fork 的 TrajectoryView 渲染，
 * 只在外面补一个本插件命名空间的翻译函数（新增的查询条 / 右栏文案）。
 *
 * 其余 props（sessionId、viewRequest、completeViewRequest、renderSlot、
 * t、useSession、useTrajectory、useDuration…）全部由槽位按原生条目的注入
 * face 原样传入，所以数据与交互语义不变。
 */
import { useMemo, useRef, useSyncExternalStore } from 'react'
import { TrajectoryView } from '../vendor/trajectory/TrajectoryView.tsx'
import theme from '../vendor/trajectory/theme.css'

/** One projection key's observable face, as the session controller exposes it. */
export interface ProjectionFace {
  getSnapshot(): unknown
  subscribe(listener: () => void): () => void
}

/** Resolve a session's projection face by key; undefined when unavailable. */
export type ProjectionReader = (sessionId: string, key: string) => ProjectionFace | undefined

/** The session controller's raw event window: every logged entry, in log order. */
export interface EventWindowFace {
  getSnapshot(): unknown
  subscribe(listener: () => void): () => void
}

/** Resolve a session's event window; undefined when unavailable. */
export type EventReader = (sessionId: string) => EventWindowFace | undefined

/** One event-window entry, flattened for the trajectory inspector. */
export interface SessionEventView {
  /** Durable log sequence number, or the client-only ordering key of a live chunk. */
  seq: number
  /** True for a streaming entry that has no line in the session file yet. */
  transient: boolean
  /** The event object, verbatim. */
  value: unknown
}

export interface ForkViewProps {
  qt: (key: string, params?: Record<string, string | number>) => string
  /** Session projection reader from this plugin's own context. */
  projectionFace?: ProjectionReader
  /** Raw session event window from this plugin's own context. */
  eventFace?: EventReader
  [key: string]: unknown
}

/**
 * Whole-log session statistics, read from the host's `sessionStats` projection.
 * Fields are narrowed defensively: a session written by an older host may not
 * carry the key at all, and the totals row then simply omits itself.
 */
export interface SessionStatsView {
  turns: number
  steps: number
  llmMs: number
  toolMs: number
}

const NO_SUBSCRIBE = (): (() => void) => () => {}
const NO_VALUE = (): unknown => undefined

function useProjection(
  sessionId: unknown,
  key: string,
  read: ProjectionReader | undefined,
): unknown {
  const face = typeof sessionId === 'string' && read !== undefined
    ? read(sessionId, key)
    : undefined
  /* a projection face is an object; its methods must be called through it */
  return useSyncExternalStore(
    face === undefined ? NO_SUBSCRIBE : (notify) => face.subscribe(notify),
    face === undefined ? NO_VALUE : () => face.getSnapshot(),
  )
}

const NO_EVENTS: readonly SessionEventView[] = []

interface EventCache {
  entries: readonly unknown[]
  out: readonly SessionEventView[]
  window: unknown
}

const EMPTY_CACHE: EventCache = { entries: [], out: NO_EVENTS, window: undefined }

/**
 * Flatten a window snapshot into ordered entries; tolerant of an unknown shape.
 *
 * A live session appends to the same log, so the array usually grows by a few
 * entries. Reusing the previous result when the old entries are still a prefix
 * keeps the per-append cost proportional to what arrived, not to the log.
 */
function eventsOf(window: unknown, cache: EventCache): EventCache {
  if (cache.window === window) return cache
  const entries = typeof window === 'object' && window !== null
    ? (window as { entries?: unknown }).entries
    : undefined
  if (!Array.isArray(entries)) return { ...EMPTY_CACHE, window }
  const appended = cache.entries.length > 0
    && entries.length >= cache.entries.length
    && entries[cache.entries.length - 1] === cache.entries[cache.entries.length - 1]
  const out = appended ? cache.out.slice() : []
  for (let index = appended ? cache.entries.length : 0; index < entries.length; index += 1) {
    const entry = entries[index]
    if (typeof entry !== 'object' || entry === null) continue
    const event = (entry as { event?: unknown }).event
    if (typeof event !== 'object' || event === null) continue
    const seq = (event as { seq?: unknown }).seq
    if (typeof seq !== 'number') continue
    out.push({ seq, transient: (entry as { type?: unknown }).type === 'transient', value: event })
  }
  return { entries, out, window }
}

function useSessionEvents(sessionId: unknown, read: EventReader | undefined): readonly SessionEventView[] {
  const face = typeof sessionId === 'string' && read !== undefined ? read(sessionId) : undefined
  /* the event window is a class instance: calling its methods unbound loses `this` */
  const window = useSyncExternalStore(
    face === undefined ? NO_SUBSCRIBE : (listener) => face.subscribe(listener),
    face === undefined ? NO_VALUE : () => face.getSnapshot(),
  )
  const cache = useRef<EventCache>(EMPTY_CACHE)
  return useMemo(() => {
    cache.current = eventsOf(window, cache.current)
    return cache.current.out
  }, [window])
}

function numberField(value: unknown, field: string): number {
  if (typeof value !== 'object' || value === null) return 0
  const raw = (value as Record<string, unknown>)[field]
  return typeof raw === 'number' && Number.isFinite(raw) ? raw : 0
}

/** Narrow the projection to the figures the totals row reads. */
function sessionStatsOf(value: unknown): SessionStatsView | undefined {
  if (typeof value !== 'object' || value === null) return undefined
  const stats: SessionStatsView = {
    turns: numberField(value, 'turns'),
    steps: numberField(value, 'steps'),
    llmMs: numberField(value, 'llmMs'),
    toolMs: numberField(value, 'toolMs'),
  }
  return stats.turns === 0 && stats.steps === 0 ? undefined : stats
}

let themeInstalled = false
function installTheme(): void {
  if (themeInstalled || typeof document === 'undefined') return
  themeInstalled = true
  const style = document.createElement('style')
  style.setAttribute('data-bt-theme', '')
  style.textContent = theme
  document.head.appendChild(style)
}

export function ForkView({ qt, projectionFace, eventFace, ...rest }: ForkViewProps) {
  installTheme()
  const stats = sessionStatsOf(useProjection(rest.sessionId, 'sessionStats', projectionFace))
  const events = useSessionEvents(rest.sessionId, eventFace)
  return <TrajectoryView {...rest} qt={qt} sessionStats={stats} sessionEvents={events} />
}