// @ts-nocheck
/** Turn-aware trajectory event ledger with a local record inspector. */

import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { assertNever, type JsonValue } from '../host/util-values.ts'
import { KindTag } from './KindTag.tsx'
import { DetailSection, DetailText } from './DetailSection.tsx'
import { CopyButton } from './CopyButton.tsx'
import { HoverCard } from './HoverCard.tsx'
import type { WatchToolResult } from './watch-tool-result.ts'
import { useVirtualizer } from '@tanstack/react-virtual'
import {
  CodeBlock,
  FileTypeIcon,
  fileExtension,
  fileSizeText,
  IconChevronRightOutlineRegular,
  IconCodeOutlineRegular,
  IconWrapLinesOutlineRegular,
  IconSettingsOutlineRegular,
  IconSparkleRegular,
  IconUserOutlineRegular,
  JsonTree,
  MarkdownText,
  StateDot,
  writeClipboard,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type { JsonTreeLabels, JsonTreeProps, MarkdownLabels } from '@deepseek-ai/dsh-client-ui-primitives'
import type { PropsRenderSlots } from '@deepseek-ai/dsh-client-ui-slots'
import { structuredPatch } from 'diff'
import type {
  AssistantRequestConfig, ConversationPromptSnapshot, MessageImageLoader,
} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {
  AssistantMetricDetail, TrajectoryCellKind, TrajectoryCellProps, TrajectorySourceBlock,
} from './trajectory-record.ts'
import { formatElapsedSeconds, trajectoryRecordId } from './trajectory-record.ts'
import {
  groupTrajectoryVirtualRows, trajectoryVirtualRecordKey,
} from './trajectory-virtual-rows.ts'
import type { TrajectoryVirtualRow } from './trajectory-virtual-rows.ts'
import type { TrajectoryTurnModel } from './layout.ts'
import { trajectoryPreviewText } from './trajectory-preview.ts'
import type { TrajectoryKey, TrajectoryTranslate } from './locales.ts'
import { COMPACTION_INTERRUPTED_ERROR } from './copy-codes.ts'
import { codeProgram, PTC_TOOL_NAME, type CodeProgram } from './code-program.ts'
import css from './TrajectoryTable.module.css'
import { RawDataPanel, payloadBadge } from './RawDataPanel.tsx'

const BOTTOM_FOLLOW_THRESHOLD_PX = 2
const OLDER_LOAD_THRESHOLD_PX = 48
const VIRTUALIZATION_THRESHOLD = 100
const VIRTUAL_OVERSCAN_ROWS = 12
const VIRTUAL_INITIAL_VIEWPORT_HEIGHT_PX = 600

const KIND_LABEL_KEY: Record<TrajectoryCellKind, TrajectoryKey> = {
  system: 'kind.system',
  user: 'kind.user',
  context: 'kind.context',
  compacted: 'kind.compacted',
  message: 'kind.assistant',
  tool: 'kind.tool',
  subtool: 'kind.subtool',
}

function ChevronIcon({ open }: { open: boolean }): ReactNode {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{ display: 'block' }}>
      <circle
        cx="8"
        cy="8"
        r="4"
        fill={open ? 'none' : 'currentColor'}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function ToolWrenchIcon(): ReactNode {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-role-icon="wrench"
      aria-hidden="true"
    >
      <path d="M14 3.3a3.8 3.8 0 0 1-4.8 4.8l-5.1 5.1a1.6 1.6 0 1 1-2.3-2.3l5.1-5.1A3.8 3.8 0 0 1 11.7 1l-2.3 2.3 2.3 2.3L14 3.3Z" />
    </svg>
  )
}

function InformationIcon(): ReactNode {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      data-role-icon="information"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.7" />
      <circle cx="8" cy="5.5" r=".85" fill="currentColor" stroke="none" />
      <path d="M8 7.75v3.4" strokeWidth="1.8" />
    </svg>
  )
}

function CompactedIcon(): ReactNode {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-role-icon="compacted"
      aria-hidden="true"
    >
      <path d="m2.5 2.5 3.75 3.75M3 6.25h3.25V3" />
      <path d="m13.5 2.5-3.75 3.75M13 6.25H9.75V3" />
      <path d="m2.5 13.5 3.75-3.75M3 9.75h3.25V13" />
      <path d="m13.5 13.5-3.75-3.75M13 9.75H9.75V13" />
    </svg>
  )
}

const KIND_ICON: Record<TrajectoryCellKind, ReactNode> = {
  system: <IconSettingsOutlineRegular size={13} />,
  user: <IconUserOutlineRegular size={13} />,
  context: <InformationIcon />,
  compacted: <CompactedIcon />,
  message: <IconSparkleRegular size={13} />,
  tool: <ToolWrenchIcon />,
  subtool: <ToolWrenchIcon />,
}

interface TableRecord {
  /** Children hidden by an explicit collapse, shown as +N on the parent row. */
  foldedCount?: number
  foldSummary?: { tools: number; steps: number; names: string[]; durationMs: number | null }
  childLast?: boolean
  hasChildren?: boolean
  hasFold?: boolean
  /** The turn has more than one content row, so folding it actually hides something. */
  turnCollapsible?: boolean
  turn: number | null
  section: number
  group: string
  groupIndex?: number
  groupStart: boolean
  turnStart: boolean
  cell: TrajectoryCellProps
  turnEnd: boolean
  collapsedSummary?: string
  collapsedSummaryKind?: 'turn' | 'assistant' | 'tool'
}

const COLLAPSED_SUMMARY_LABEL_KEY: Record<NonNullable<TableRecord['collapsedSummaryKind']>, TrajectoryKey> = {
  turn: 'request.collapsedTurn',
  assistant: 'request.collapsedAssistant',
  tool: 'request.collapsedTool',
}

interface VirtualRowStructure {
  height: number
  key: string
}

function useStableVirtualRowStructure(
  rows: readonly TrajectoryVirtualRow<TableRecord>[],
): readonly VirtualRowStructure[] {
  const cache = useRef<{
    rows: readonly TrajectoryVirtualRow<TableRecord>[]
    structure: readonly VirtualRowStructure[]
  }>({ rows: [], structure: [] })
  if (cache.current.rows === rows) return cache.current.structure
  const structure = cache.current.structure.length === rows.length
    && rows.every((row, index) => {
      const previous = cache.current.structure[index]
      return previous?.key === row.key && previous.height === row.height
    })
    ? cache.current.structure
    : rows.map(row => ({ key: row.key, height: row.height }))
  cache.current = { rows, structure }
  return structure
}

/**
 * One record inspector has exactly four faces: what it is, what it rendered,
 * what it cost, what it literally is. Request rows keep their own four, because
 * a request is not a record.
 */
type DetailTab = 'overview' | 'preview' | 'timing' | 'raw' | 'options' | 'usage'
type RecordState = 'complete' | 'running' | 'error'

interface DetailTabItem {
  id: DetailTab
  labelKey: TrajectoryKey
  /** Read the label from this plugin's namespace instead of the host one. */
  custom?: boolean
}

interface ParentRecords {
  message?: TableRecord
  tool?: TableRecord
}

interface ToolCallTextParts {
  program: boolean
  name: string
  args?: string
}

interface SelectedRequest {
  identity: string
}

interface DetailsResizeDrag {
  pointerId: number
  startX: number
  startWidth: number
  splitWidth: number
  startToolRequestOffset: number
}

const DETAILS_MIN_WIDTH = 360
const DETAILS_MAX_WIDTH = 720
const TABLE_MIN_WIDTH = 280
const DETAILS_RESIZE_STEP = 16
const TOOL_REQUEST_SHARE = 0.58
const TOOL_REQUEST_MIN_WIDTH = 180
const TOOL_REQUEST_MAX_WIDTH = 480
const DEFAULT_TOOL_REQUEST_SHARE = 0.36
const DEFAULT_TOOL_REQUEST_OFFSET = 56
const RECORD_TABS: readonly DetailTabItem[] = [
  { id: 'overview', labelKey: 'tab.summary', custom: true },
  { id: 'preview', labelKey: 'tab.preview', custom: true },
  { id: 'timing', labelKey: 'tab.stats', custom: true },
  { id: 'raw', labelKey: 'tab.raw', custom: true },
]
const REQUEST_TABS: readonly DetailTabItem[] = [
  { id: 'overview', labelKey: 'tab.summary' },
  { id: 'options', labelKey: 'tab.options' },
  { id: 'usage', labelKey: 'tab.usage' },
  { id: 'timing', labelKey: 'tab.stats', custom: true },
]

function jsonTreeLabels(t: TrajectoryTranslate): JsonTreeLabels {
  return {
    copyValue: t('copy.value'),
    copyJson: t('copy.json'),
    copyPath: t('copy.path'),
    copyPrettyJson: t('copy.prettyJson'),
    copyCompactJson: t('copy.compactJson'),
    copied: t('copied'),
    copyFailed: t('copy.failed'),
    collapseNode: t('collapse'),
    expandNode: t('expand'),
    copyButtonTitle: action => t('copy.optionsHint', { action }),
  }
}

function markdownLabels(t: TrajectoryTranslate): MarkdownLabels {
  return {
    code: { copyLabel: t('copy'), copiedLabel: t('copied') },
    footnotes: t('markdown.footnotes'),
  }
}

type TrajectorySplitStyle = CSSProperties & {
  '--trajectory-tool-request-width': string
}

type RequestBoundaryStyle = CSSProperties & {
  '--request-boundary-offset': string
}

type VirtualSpacerStyle = CSSProperties & {
  '--trajectory-virtual-spacer-height': string
}

interface OlderLoadAnchor {
  readonly historyStartSeq: number | undefined
  readonly scrollHeight: number
  readonly scrollTop: number
}

function clampDetailsWidth(width: number, splitWidth: number): number {
  const maxWidth = Math.max(
    DETAILS_MIN_WIDTH,
    Math.min(DETAILS_MAX_WIDTH, splitWidth - TABLE_MIN_WIDTH),
  )
  return Math.round(Math.min(Math.max(width, DETAILS_MIN_WIDTH), maxWidth))
}

function defaultToolRequestWidth(splitWidth: number): number {
  return Math.min(
    Math.max(
      splitWidth * DEFAULT_TOOL_REQUEST_SHARE - DEFAULT_TOOL_REQUEST_OFFSET,
      TOOL_REQUEST_MIN_WIDTH,
    ),
    TOOL_REQUEST_MAX_WIDTH,
  )
}

function formatDurationMs(milliseconds: number, t: TrajectoryTranslate): string {
  if (milliseconds < 1_000) return t('unit.milliseconds', { value: Math.round(milliseconds) })
  return t('unit.seconds', {
    value: (milliseconds / 1_000).toFixed(milliseconds < 10_000 ? 2 : 1),
  })
}

function compactDuration(milliseconds: number): string {
  if (milliseconds < 1000) return `${Math.round(milliseconds)}ms`
  const seconds = milliseconds / 1000
  return `${seconds < 10 ? seconds.toFixed(1) : Math.round(seconds)}s`
}

function formatClock(timestamp: number | null | undefined): string {
  if (timestamp === null || timestamp === undefined) return ''
  try {
    return new Date(timestamp).toLocaleTimeString(undefined, { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  } catch {
    return ''
  }
}

function formatStartedAt(timestamp: number | null, t: TrajectoryTranslate): string {
  if (timestamp === null || !Number.isFinite(timestamp)) return t('timing.notAvailable')
  const date = new Date(timestamp)
  const two = (value: number) => String(value).padStart(2, '0')
  const three = (value: number) => String(value).padStart(3, '0')
  const time = `${two(date.getHours())}:${two(date.getMinutes())}:${two(date.getSeconds())}.${three(date.getMilliseconds())}`
  const day = `${date.getFullYear()}-${two(date.getMonth() + 1)}-${two(date.getDate())}`
  return `${day} ${time}`
}

/** Whether a click lands on an active text selection and should keep it. */
function clickSelectsText(target: Node): boolean {
  const selection = window.getSelection()
  return selection !== null
    && !selection.isCollapsed
    && selection.rangeCount > 0
    && selection.getRangeAt(0).intersectsNode(target)
}

function StartedAtValue({ timestamp, t }: { timestamp: number | null; t: TrajectoryTranslate }) {
  const [showUnix, setShowUnix] = useState(false)
  if (timestamp === null || !Number.isFinite(timestamp)) return <dd>{t('timing.notAvailable')}</dd>
  return (
    <dd>
      <button
        type="button"
        className={css.timestampToggle}
        title={showUnix ? t('timing.showLocalTime') : t('timing.showUnixTimestamp')}
        onClick={(event) => {
          if (clickSelectsText(event.currentTarget)) return
          setShowUnix(current => !current)
        }}
      >
        {showUnix ? (timestamp / 1_000).toFixed(3) : formatStartedAt(timestamp, t)}
      </button>
    </dd>
  )
}

function totalTime(metrics: AssistantMetricDetail, t: TrajectoryTranslate): string {
  if (!metrics.timingRecorded) return t('timing.notRecorded')
  if (metrics.stepStartTime === null) return t('timing.stepStartUnavailable')
  if (metrics.completedTime === null) return t('status.pending')
  return formatDurationMs(Math.max(0, metrics.completedTime - metrics.stepStartTime), t)
}

function ttft(metrics: AssistantMetricDetail, t: TrajectoryTranslate): string {
  if (!metrics.timingRecorded) return t('timing.notRecorded')
  if (metrics.stepStartTime === null) return t('timing.stepStartUnavailable')
  if (metrics.firstTokenTime === null) return t('timing.firstTokenUnavailable')
  return formatDurationMs(Math.max(0, metrics.firstTokenTime - metrics.stepStartTime), t)
}

function generationTime(metrics: AssistantMetricDetail, t: TrajectoryTranslate): string {
  if (!metrics.timingRecorded || metrics.firstTokenTime === null) return t('timing.firstTokenUnavailable')
  if (metrics.completedTime === null) return t('status.pending')
  return formatDurationMs(Math.max(0, metrics.completedTime - metrics.firstTokenTime), t)
}

function throughput(metrics: AssistantMetricDetail, t: TrajectoryTranslate): string {
  if (!metrics.usageProvided) return t('timing.usageUnavailable')
  if (metrics.outputTokens === null) return t('timing.outputTokensUnavailable')
  if (!metrics.timingRecorded || metrics.firstTokenTime === null) return t('timing.firstTokenUnavailable')
  if (metrics.completedTime === null) return t('status.pending')
  const generationSeconds = (metrics.completedTime - metrics.firstTokenTime) / 1_000
  if (generationSeconds <= 0) return t('timing.durationTooShort')
  return t('unit.tokensPerSecond', {
    value: (metrics.outputTokens / generationSeconds).toFixed(1),
  })
}

function AssistantTimingPanel({
  metrics,
  extra,
  t,
}: { metrics: AssistantMetricDetail; extra?: ReactNode; t: TrajectoryTranslate }) {
  return (
    <dl className={css.overview}>
      <div><dt>{t('timing.started')}</dt><StartedAtValue timestamp={metrics.stepStartTime} t={t} /></div>
      <div><dt>{t('timing.totalDuration')}</dt><dd>{totalTime(metrics, t)}</dd></div>
      <div><dt>{t('timing.ttft')}</dt><dd>{ttft(metrics, t)}</dd></div>
      <div><dt>{t('timing.generation')}</dt><dd>{generationTime(metrics, t)}</dd></div>
      <div><dt>{t('timing.throughput')}</dt><dd>{throughput(metrics, t)}</dd></div>
      {extra}
    </dl>
  )
}

/** Props for the trajectory ledger. */
export interface TrajectoryTableProps {
  /** Observe the selected result while the Result tab is open. */
  watchToolResult?: WatchToolResult | undefined
  /** Wrapping control shared by all JSON inspectors. */
  stringWrapping?: JsonTreeProps['stringWrapping']
  /** Trajectory locale seat. */
  t: TrajectoryTranslate
  /** Slot-backed durable image renderer shared with the Chat gallery. */
  renderSlot: PropsRenderSlots<'conversation.trajectory.images'>['renderSlot']
  /** Session-bound loader for durable message image attachments. */
  loadImage: MessageImageLoader
  /** Session-global request numbers for the request groups visible in this context. */
  requestNumbers?: readonly TrajectoryRequestNumber[]
  /** Grouped records in display order. */
  turns: readonly TrajectoryTurnModel[]
  /** In-flight cells whose content replaces the matching structural record index. */
  streamingCells?: readonly TrajectoryCellProps[]
  /** Record indexes emphasized by the active timeline focus. */
  timelineFocusIndexes?: ReadonlySet<number> | null
  /** Record indexes retained by the active live search, or null without a query. */
  searchMatchIndexes?: ReadonlySet<number> | null
  /** Report the record currently selected in the local inspector. */
  onSelectedIndexChange?: (index: number | null) => void
  /** Report a direct user selection from a ledger row. */
  onRecordSelect?: (index: number) => void
  /** One externally requested record selection; a new object repeats the request. */
  recordSelection?: { readonly index: number } | null
  /** One externally requested record focus without changing inspector selection. */
  recordFocus?: { readonly index: number } | null
  /** Whether the initial history tail is still loading. */
  historyLoading?: boolean
  /** Whether one older history page request is pending anywhere. */
  olderHistoryLoading?: boolean
  /** First loaded raw event, used to preserve scroll position after prepending a page. */
  historyStartSeq?: number | undefined
  /** Whether one older history page can be requested. */
  hasOlderRecords?: boolean
  /** Load one older history page. */
  onLoadOlder?: () => Promise<boolean>
  /** Clear selection state owned by the ledger host. */
  onClearSelection?: () => void
  /** Turn ids whose rows after the first are folded into a summary. */
  collapsedTurns: ReadonlySet<number>
  /** Toggle one turn between folded and expanded. */
  onToggleTurn: (turn: number) => void
  /** Stable Assistant record ids whose tool calls are folded. */
  collapsedAssistants: ReadonlySet<string>
  /** Toggle tool calls under one assistant record. */
  onToggleAssistant: (id: string) => void
  /** Stable tool record ids whose nested calls are folded. */
  collapsedTools: ReadonlySet<string>
  /** Toggle nested calls under one tool record. */
  onToggleTool: (id: string) => void
  /** One-shot cross-view inspect: open and scroll to this call's record. */
  inspectCallId?: string | null
  /** Acknowledge a consumed (or unresolvable) inspect request. */
  onInspectApplied?: (() => void) | undefined
}

/** Request-inspector fields shared by ordinary generation and compaction. */
interface TrajectoryRequestNumberBase {
  group: string
  number: number
  status?: 'complete' | 'running' | 'error'
  startedAt?: number
  completedAt?: number | null
  error?: string
  errorCode?: string
  retry?: number
  maxRetries?: number
  retryDelayMs?: number
  resultSeq?: number
  provider?: string
  model?: string
  requestConfig?: AssistantRequestConfig
  usage?: TrajectoryUsage
  cumulativeUsage?: TrajectoryUsage
}

/** One purpose-discriminated request identity paired with its session-global number. */
export type TrajectoryRequestNumber = TrajectoryRequestNumberBase & (
  | {
    purpose?: 'assistant'
    /** Request anchor event sequence; absent for the currently streaming request. */
    seq?: number
    turn: number
    step: number
  }
  | {
    purpose: 'compaction'
    /** Request anchor event sequence and stable compaction identity. */
    seq: number
    turn: number | null
    step: 0
  }
)

/** Disjoint provider token buckets for one request or a session prefix. */
export interface TrajectoryUsage {
  input?: number
  cacheRead?: number
  cacheWrite?: number
  output?: number
  reasoning?: number
}

/** Indent level of a record kind: turn rows at 0, message/context at 1, calls deeper. */
function recordLevel(kind: TrajectoryCellKind): number {
  if (kind === 'subtool') return 3
  if (kind === 'tool') return 2
  if (kind === 'user' || kind === 'system' || kind === 'compacted') return 0
  return 1
}

function flattenRecords(turns: readonly TrajectoryTurnModel[]): TableRecord[] {
  let groupIndex = -1
  return turns.flatMap((turn, section) => {
    let firstInSection = true
    const records = turn.groups.flatMap((group) => {
      groupIndex += 1
      return group.cells.map((cell, index) => {
        const turnStart = firstInSection
          && cell.requestOnly !== true
          && cell.kind !== 'system'
          && (cell.kind !== 'compacted' || turn.turn === null)
        if (turnStart) firstInSection = false
        return {
          turn: turn.turn,
          section,
          group: group.title,
          groupIndex,
          groupStart: index === 0,
          turnStart,
          cell,
          turnEnd: false,
        }
      })
    })
    const last = records.at(-1)
    if (last !== undefined) last.turnEnd = true
    return records
  })
}

function filterRecords(
  records: readonly TableRecord[],
  matches: ReadonlySet<number>,
): TableRecord[] {
  const filtered = records
    .filter(record =>
      record.cell.requestOnly !== true && matches.has(record.cell.index),
    )
    .map(record => ({ ...record, groupStart: false, turnStart: false, turnEnd: false }))
  const startedSections = new Set<number>()
  for (const [index, record] of filtered.entries()) {
    const previous = filtered[index - 1]
    const next = filtered[index + 1]
    record.groupStart = previous === undefined
      || previous.section !== record.section
      || previous.group !== record.group
    record.turnStart = !startedSections.has(record.section)
      && record.cell.kind !== 'system'
      && (record.cell.kind !== 'compacted' || record.turn === null)
    if (record.turnStart) startedSections.add(record.section)
    record.turnEnd = next === undefined || next.section !== record.section
  }
  return filtered
}

function requestKey(turn: number | null, group: string): string {
  return `${turn}\u0000${group}`
}

function requestIdentity(request: TrajectoryRequestNumber): string {
  return request.purpose === 'compaction'
    ? `compaction\u0000${request.seq}`
    : `assistant\u0000${request.turn}\u0000${request.step}`
}

function indexRequestBoundaries(
  records: readonly TableRecord[],
  requestGroups: ReadonlySet<string>,
): ReadonlyMap<string, number> {
  const boundaries = new Map<string, number>()
  for (const record of records) {
    const key = requestKey(record.turn, record.group)
    if (!requestGroups.has(key)) continue
    if (boundaries.has(key)) continue
    if (record.cell.kind === 'user' || record.cell.kind === 'context' || record.cell.kind === 'system') continue
    boundaries.set(key, record.cell.index)
  }
  return boundaries
}

function sectionLabel(turn: number | null, t: TrajectoryTranslate): string {
  return turn === null ? t('section.betweenTurns') : t('turn.label', { turn })
}

function indexRequestNumbers(
  sessionNumbers: readonly TrajectoryRequestNumber[] | undefined,
): ReadonlyMap<string, number> {
  const numbers = new Map<string, number>()
  for (const request of sessionNumbers ?? []) {
    numbers.set(requestKey(request.turn, request.group), request.number)
  }
  return numbers
}

function indexRequestBoundaryRuns(
  records: readonly TableRecord[],
  requestGroups: ReadonlySet<string>,
): ReadonlyMap<number, number> {
  const indexes = new Map<number, number>()
  let runLength = 0
  for (const record of records) {
    if (record.cell.requestOnly === true) {
      indexes.set(record.cell.index, runLength++)
      continue
    }
    if (
      runLength > 0
      && record.groupStart
      && requestGroups.has(requestKey(record.turn, record.group))
    ) {
      indexes.set(record.cell.index, runLength)
    }
    runLength = 0
  }
  return indexes
}

function messageIndexesWithCalls(records: readonly TableRecord[]): Set<number> {
  const out = new Set<number>()
  let message: number | null = null
  for (const record of records) {
    const kind = record.cell.kind
    if (kind === 'message') {
      message = record.cell.index
    } else if (kind === 'tool' || kind === 'subtool') {
      if (message !== null) out.add(message)
    } else {
      message = null
    }
  }
  return out
}

function stateOf(record: TableRecord): RecordState {
  if (record.cell.isError) return 'error'
  if (record.cell.kind === 'compacted' && record.cell.timeSeconds === null) return 'running'
  if (record.cell.assistantMetrics?.completedTime === null) return 'running'
  if (
    (record.cell.kind === 'tool' || record.cell.kind === 'subtool')
    && record.cell.outputDetail === undefined
  ) return 'running'
  return 'complete'
}

function statusLabel(state: RecordState, t: TrajectoryTranslate): string {
  if (state === 'error') return t('status.failed')
  if (state === 'running') return t('status.pending')
  return t('status.completed')
}

function requestErrorMessage(
  request: Pick<TrajectoryRequestNumber, 'error' | 'errorCode'>,
  t: TrajectoryTranslate,
): string | undefined {
  if (request.errorCode === 'AUTH') return t('details.failure.auth')
  if (request.error === COMPACTION_INTERRUPTED_ERROR) return t('layout.compactionInterrupted')
  return request.error
}

function inputTotal(usage: TrajectoryUsage): number | undefined {
  if (
    usage.input === undefined
    && usage.cacheRead === undefined
    && usage.cacheWrite === undefined
  ) return undefined
  return (usage.input ?? 0) + (usage.cacheRead ?? 0) + (usage.cacheWrite ?? 0)
}

function UsageRows({ usage, t }: { usage: TrajectoryUsage | undefined; t: TrajectoryTranslate }) {
  if (usage === undefined) return <p className={css.noPayload}>{t('usage.notReported')}</p>
  const totalInput = inputTotal(usage)
  const otherOutput = usage.output !== undefined && usage.reasoning !== undefined
    ? usage.output - usage.reasoning
    : undefined
  return (
    <dl className={css.overview}>
      {totalInput !== undefined && (
        <div><dt>{t('usage.input')}</dt><dd>{t('unit.tokens', { value: totalInput })}</dd></div>
      )}
      {usage.cacheRead !== undefined && (
        <div className={css.requestTokenDetail}>
          <dt>{t('usage.cached')}</dt>
          <dd>{t('unit.tokens', { value: usage.cacheRead })}</dd>
        </div>
      )}
      {usage.cacheWrite !== undefined && (
        <div className={css.requestTokenDetail}>
          <dt>{t('usage.cacheCreated')}</dt>
          <dd>{t('unit.tokens', { value: usage.cacheWrite })}</dd>
        </div>
      )}
      {usage.input !== undefined && (
        <div className={css.requestTokenDetail}>
          <dt>{t('usage.other')}</dt>
          <dd>{t('unit.tokens', { value: usage.input })}</dd>
        </div>
      )}
      {usage.output !== undefined && (
        <div><dt>{t('usage.output')}</dt><dd>{t('unit.tokens', { value: usage.output })}</dd></div>
      )}
      {usage.reasoning !== undefined && (
        <div className={css.requestTokenDetail}>
          <dt>{t('usage.reasoning')}</dt>
          <dd>{t('unit.tokens', { value: usage.reasoning })}</dd>
        </div>
      )}
      {otherOutput !== undefined && (
        <div className={css.requestTokenDetail}>
          <dt>{t('usage.content')}</dt>
          <dd>{t('unit.tokens', { value: otherOutput })}</dd>
        </div>
      )}
    </dl>
  )
}

function RequestUsagePanel({
  usage,
  cumulative,
  t,
}: {
  usage: TrajectoryUsage | undefined
  cumulative: TrajectoryUsage | undefined
  t: TrajectoryTranslate
}) {
  return (
    <div className={css.usagePanel}>
      <section className={css.usageGroup}>
        <h4 className={css.usageHeading}>{t('usage.thisRequest')}</h4>
        <UsageRows usage={usage} t={t} />
      </section>
      <section className={css.usageGroup}>
        <h4 className={css.usageHeading}>{t('usage.sessionCumulative')}</h4>
        <UsageRows usage={cumulative} t={t} />
      </section>
    </div>
  )
}

function RequestOptions({
  options,
  preview = false,
  stringWrapping,
  t,
}: {
  options: AssistantRequestConfig | undefined
  preview?: boolean
  stringWrapping: JsonTreeProps['stringWrapping']
  t: TrajectoryTranslate
}) {
  if (options === undefined) {
    return <p className={css.noPayload}>{t('options.notRecorded')}</p>
  }
  return (
    <JsonTree
      data={options}
      stringWrapping={stringWrapping}
      collapsedStringLines={preview ? 3 : 12}
      label={t('options.json')}
      labels={jsonTreeLabels(t)}
      className={preview ? css.jsonPreview : css.jsonPayload}
    />
  )
}

function messageSourceLabel(source: unknown, t: TrajectoryTranslate): string {
  if (typeof source !== 'object' || source === null || Array.isArray(source)) {
    return t('source.unknown')
  }
  const properties = source as Record<string, unknown>
  const kind = properties.kind
  if (kind === 'user') return t('source.user')
  if (kind === 'goal') {
    const round = properties.round
    return typeof round === 'number' && round > 0
      ? t('source.goalRound', { round })
      : t('source.goal')
  }
  if (typeof kind !== 'string' || kind === '') return t('source.unknown')
  return `${kind[0]?.toUpperCase() ?? ''}${kind.slice(1)}`
}

function MessageSource({ record, stringWrapping, t }: {
  record: TableRecord
  stringWrapping: JsonTreeProps['stringWrapping']
  t: TrajectoryTranslate
}) {
  const source = record.cell.messageSource
  if (source === undefined) return <p className={css.noPayload}>{t('source.notRecorded')}</p>
  const data = typeof source === 'object' && source !== null
    ? source
    : { value: source }
  return (
    <JsonTree
      data={data}
      stringWrapping={stringWrapping}
      collapsedStringLines={12}
      label={t('source.messageJson')}
      labels={jsonTreeLabels(t)}
      className={css.jsonPayload}
    />
  )
}

function isMarkdownRecord(record: TableRecord): boolean {
  return record.cell.kind === 'user'
    || record.cell.kind === 'context'
    || record.cell.kind === 'message'
}

function parentRecords(
  records: readonly TableRecord[],
  record: TableRecord,
): ParentRecords {
  if (record.cell.kind !== 'tool' && record.cell.kind !== 'subtool') return {}
  const at = records.findIndex(candidate => candidate.cell.index === record.cell.index)
  if (at === -1) return {}
  let tool: TableRecord | undefined
  if (record.cell.kind === 'subtool') {
    for (let i = at - 1; i >= 0; i--) {
      const candidate = records[i]
      if (
        candidate === undefined
        || candidate.turn !== record.turn
        || candidate.group !== record.group
      ) break
      if (candidate.cell.kind === 'tool') {
        tool = candidate
        break
      }
    }
  }
  const parentCallId = tool?.cell.callId ?? record.cell.callId
  let message: TableRecord | undefined
  if (parentCallId !== undefined) {
    message = records.find(candidate =>
      candidate.turn === record.turn
      && candidate.cell.kind === 'message'
      && candidate.cell.sourceBlocks?.some(block => block.callId === parentCallId) === true,
    )
  }
  return { ...(message === undefined ? {} : { message }), ...(tool === undefined ? {} : { tool }) }
}

function markdownSource(record: TableRecord): string | undefined {
  if (record.cell.kind === 'user' || record.cell.kind === 'context') {
    return record.cell.inputDetail
  }
  if (record.cell.kind === 'message' || record.cell.kind === 'compacted') {
    return record.cell.outputDetail
  }
  return undefined
}

function parseMaybeJson(text: string | undefined): unknown {
  if (text === undefined || text === '') return undefined
  try { return JSON.parse(text) } catch { return text }
}

/** One-line identity for the inspector header: the command, or the record text. */
function primarySubject(record: TableRecord): string {
  const cell = record.cell
  if (cell.kind === 'tool' || cell.kind === 'subtool') {
    const args = parseMaybeJson(cell.inputDetail)
    const fromArgs = args !== null && typeof args === 'object'
      ? (args as Record<string, unknown>).command
        ?? (args as Record<string, unknown>).description
        ?? (args as Record<string, unknown>).path
      : undefined
    const text = typeof fromArgs === 'string' && fromArgs !== ''
      ? fromArgs
      : String(cell.inputDetail ?? '')
    return text.replace(/\s+/g, ' ').trim()
  }
  return String(cell.text ?? '').replace(/\s+/g, ' ').trim()
}

/**
 * 「原始」：这一条记录的全部字段，原样。Payloads are parsed so the tree can be
 * walked, and a payload that already appeared under another key is stored once.
 */
function rawDataFor(record: TableRecord): unknown {
  const cell = record.cell
  const data: Record<string, unknown> = {
    index: cell.index,
    kind: cell.kind,
    state: stateOf(record),
    turn: record.turn,
    group: record.group,
  }
  const seen = new Set<string>()
  const put = (key: string, value: unknown) => {
    if (value === undefined || value === null || value === '') return
    if (typeof value === 'string') {
      if (seen.has(value)) return
      seen.add(value)
    }
    data[key] = value
  }
  put('tool', cell.toolName)
  put('callId', cell.callId)
  put('sourceSeq', cell.sourceSeq)
  put('source', cell.messageSource)
  if (cell.startedAt != null) data.startedAt = new Date(cell.startedAt).toISOString()
  if (cell.timeSeconds !== null) data.durationMs = Math.round(cell.timeSeconds * 1_000)
  put('text', cell.text)
  put('markdown', markdownSource(record))
  put('thinking', cell.thinkingDetail)
  put('args', parseMaybeJson(cell.inputDetail))
  put('result', parseMaybeJson(cell.outputDetail ?? cell.result))
  put('schema', parseMaybeJson(cell.schemaDetail))
  put('prompt', cell.promptDetail)
  put('systemPrompt', cell.systemPromptDetail)
  put('previousPrompt', cell.previousPromptDetail)
  put('sourceBlocks', cell.sourceBlocks)
  put('outputBlocks', cell.outputBlocks)
  put('metrics', cell.assistantMetrics)
  const tokens: Record<string, number> = {}
  if (cell.input !== undefined) tokens.input = cell.input
  if (cell.cacheRead !== undefined) tokens.cacheRead = cell.cacheRead
  if (cell.cacheWrite !== undefined) tokens.cacheWrite = cell.cacheWrite
  if (cell.output !== undefined) tokens.output = cell.output
  if (cell.think !== undefined) tokens.reasoning = cell.think
  if (Object.keys(tokens).length > 0) data.tokens = tokens
  return data
}

function recordDisplayText(cell: TrajectoryCellProps, t: TrajectoryTranslate): string {
  if (isToolCallOnly(cell, t)) return ''
  const program = codeProgram(cell)
  if (program !== undefined) return `${PTC_TOOL_NAME} · ${program.description.replace(/\s+/g, ' ')}`
  if (cell.previewMarkdown !== undefined) {
    const preview = trajectoryPreviewText(cell.previewMarkdown)
    if (cell.text === '') return preview
    return preview === '' ? cell.text : `${cell.text} · ${preview}`
  }
  if (cell.text !== '') return cell.text
  const markdown = cell.kind === 'user' || cell.kind === 'context'
    ? cell.inputDetail
    : cell.kind === 'message'
      ? cell.outputDetail ?? cell.thinkingDetail
      : undefined
  return markdown === undefined ? '' : trajectoryPreviewText(markdown)
}

function recordResultText(cell: TrajectoryCellProps): string | undefined {
  return cell.resultPreviewMarkdown === undefined
    ? cell.result
    : trajectoryPreviewText(cell.resultPreviewMarkdown)
}

function toolCallTextParts(
  cell: TrajectoryCellProps,
  text: string,
): ToolCallTextParts | undefined {
  if (cell.kind !== 'tool' && cell.kind !== 'subtool') return undefined
  const program = cell.toolName === PTC_TOOL_NAME
  const separator = text.indexOf(' · ')
  if (separator === -1) return { name: text, program }
  return {
    program,
    name: text.slice(0, separator),
    args: text.slice(separator + 3),
  }
}

function isToolCallOnly(cell: TrajectoryCellProps, t: TrajectoryTranslate): boolean {
  return cell.kind === 'message'
    && !cell.outputDetail
    && !cell.thinkingDetail
    && cell.text === t('layout.toolCallOnly')
}

interface RecordPresentationValue {
  displayText: string
  listDisplayText: string
  resultText: string | undefined
  toolCallOnly: boolean
  toolCallText: ToolCallTextParts | undefined
}

function RecordPresentation({
  cell,
  children,
  t,
}: {
  cell: TrajectoryCellProps
  children: (value: RecordPresentationValue) => ReactNode
  t: TrajectoryTranslate
}) {
  const displayText = useMemo(
    () => recordDisplayText(cell, t),
    [
      cell.kind, cell.text, cell.toolName, cell.previewMarkdown,
      cell.inputDetail, cell.outputDetail, cell.thinkingDetail, t,
    ],
  )
  const resultText = useMemo(
    () => recordResultText(cell),
    [cell.result, cell.resultPreviewMarkdown],
  )
  const toolCallOnly = isToolCallOnly(cell, t)
  const toolCallText = toolCallTextParts(cell, displayText)
  const listDisplayText = toolCallOnly
    ? t('record.toolCallOnly')
    : toolCallText === undefined
      ? displayText
      : [toolCallText.name, toolCallText.args].filter(Boolean).join(' ')
  return children({
    displayText,
    listDisplayText,
    resultText,
    toolCallOnly,
    toolCallText,
  })
}

function RecordListText({
  displayText,
  toolCallOnly,
  toolCallText,
  t,
}: Pick<RecordPresentationValue, 'displayText' | 'toolCallOnly' | 'toolCallText'> & {
  t: TrajectoryTranslate
}) {
  if (toolCallOnly) {
    return <span className={css.toolCallOnly}>{t('record.toolCallOnly')}</span>
  }
  if (toolCallText === undefined) return displayText || '—'
  return (
    <>
      <span className={css.toolCallNameTypeface}>
        {toolCallText.program && <IconCodeOutlineRegular className={css.programIcon} size={12} />}
        {toolCallText.name || '—'}
      </span>
      {toolCallText.args !== undefined && (
        <span className={toolCallText.program ? css.programSummary : css.toolCallPayload}>
          {toolCallText.args}
        </span>
      )}
    </>
  )
}

function MarkdownFragment({
  text,
  rendered,
  preview,
  variant = 'body',
  t,
}: {
  text: string
  rendered: boolean
  preview: boolean
  variant?: 'body' | 'compact'
  t: TrajectoryTranslate
}) {
  const labels = useMemo(() => markdownLabels(t), [t])
  if (rendered) {
    return (
      <div className={preview ? css.markdownPreview : css.markdownPayload}>
        <MarkdownText text={text} labels={labels} variant={variant} />
      </div>
    )
  }
  return (
    <pre className={`${css.payload} ${preview ? css.payloadPreview : ''}`}>
      {text}
    </pre>
  )
}

function SourceBlocks({
  blocks,
  onOpenCall,
  t,
}: {
  blocks: readonly TrajectorySourceBlock[]
  onOpenCall: (callId: string) => void
  t: TrajectoryTranslate
}) {
  const attachments = new Map(recordAttachments(blocks, t).map(entry => [entry.index, entry]))
  return (
    <div className={css.sourceBlocks}>
      {blocks.map((block, index) => {
        const attachment = attachments.get(index)
        return attachment !== undefined ? (
          <details className={css.attachmentDisclosure} key={index}>
            <summary>
              <span className={css.sourceBlockLabel}>
                {t('block.label', { index: index + 1, type: block.type })}
              </span>
              <span className={css.attachmentName} title={attachment.name}>
                {attachment.name}
              </span>
            </summary>
            <pre className={css.sourceBlockContent}>{block.content}</pre>
          </details>
        )
          : (
            <section className={css.sourceBlock} key={index}>
              {block.callId !== undefined
                ? (
                  <button
                    type="button"
                    className={css.sourceBlockJumpTarget}
                    aria-label={t('block.openSummary', { index: index + 1 })}
                    title={t('block.openSummaryTitle')}
                    onClick={() => {
                      if (block.callId !== undefined) onOpenCall(block.callId)
                    }}
                  >
                    <span className={css.sourceBlockLabel}>
                      {t('block.label', { index: index + 1, type: block.type })}
                    </span>
                    <IconChevronRightOutlineRegular className={css.sourceBlockJumpIcon} size={12} />
                  </button>
                )
                : (
                  <div className={css.sourceBlockHeader}>
                    <span className={css.sourceBlockLabel}>
                      {t('block.label', { index: index + 1, type: block.type })}
                    </span>
                  </div>
                )}
              <pre className={css.sourceBlockContent}>{block.content}</pre>
            </section>
          )
      })}
    </div>
  )
}

function recordAttachments(
  blocks: readonly TrajectorySourceBlock[] | undefined,
  t: TrajectoryTranslate,
) {
  let imageIndex = 0
  return (blocks ?? []).flatMap((block, index) => {
    const ref = block.attachment ?? block.file
    if (ref === undefined) return []
    if (block.attachment !== undefined) imageIndex += 1
    return [{
      block,
      index,
      name: ref.name ?? t('attachment.imageName', { index: imageIndex }),
      metadata: [
        block.attachment?.mediaType ?? fileExtension(ref.name ?? '').toUpperCase(),
        fileSizeText(ref.bytes),
        ...(block.attachment === undefined ? [] : [`${block.attachment.width} × ${block.attachment.height}`]),
      ].filter(Boolean).join(' · '),
    }]
  })
}

function RecordAttachments({
  blocks,
  preview,
  renderSlot,
  loadImage,
  t,
}: {
  blocks: readonly TrajectorySourceBlock[] | undefined
  preview: boolean
  renderSlot: PropsRenderSlots<'conversation.trajectory.images'>['renderSlot']
  loadImage: MessageImageLoader
  t: TrajectoryTranslate
}) {
  const attachments = recordAttachments(blocks, t)
  if (attachments.length === 0) return null
  return (
    <ul
      className={preview ? `${css.attachments} ${css.attachmentsPreview}` : css.attachments}
      aria-label={t('attachment.list')}
    >
      {attachments.map(({ block, index, name, metadata }) => (
        <li className={css.attachmentRow} key={index}>
          {block.attachment !== undefined
            ? renderSlot('conversation.trajectory.images', {
              images: [{ attachment: block.attachment, label: name }],
              align: 'start',
              thumbnail: true,
              loadImage,
            })
            : <span className={css.attachmentIcon}><FileTypeIcon path={name} /></span>}
          <div className={css.attachmentInfo}>
            <span className={css.attachmentName} title={name}>{name}</span>
            <span className={css.attachmentMetadata}>{metadata}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

function AssistantToolCalls({
  blocks,
  preview,
  onOpenCall,
  t,
}: {
  blocks: readonly TrajectorySourceBlock[] | undefined
  preview: boolean
  onOpenCall: (callId: string) => void
  t: TrajectoryTranslate
}) {
  const calls = blocks?.filter(block => block.type === 'tool-call') ?? []
  if (calls.length === 0) return null
  return (
    <ul className={preview
      ? `${css.assistantToolCalls} ${css.assistantToolCallsPreview}`
      : css.assistantToolCalls}
    >
      {calls.map((call, index) => (
        <li key={call.callId ?? index}>
          <button
            type="button"
            className={css.assistantToolCallButton}
            title={t('block.openSummaryTitle')}
            onClick={() => {
              if (call.callId !== undefined) onOpenCall(call.callId)
            }}
          >
            <svg
              className={css.assistantToolCallIcon}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={css.assistantToolCallText}>
              <span className={css.assistantToolCallName}>
                {call.toolName ?? t('details.toolCall')}
              </span>
              {call.content !== '' && (
                <span className={css.assistantToolCallArgs}>{call.content}</span>
              )}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}

function ToolGlyph() {
  return (
    <svg
      className={css.toolCatalogIcon}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ToolCatalog({
  tools,
  stringWrapping,
  t,
}: {
  tools: ConversationPromptSnapshot['tools']
  stringWrapping: JsonTreeProps['stringWrapping']
  t: TrajectoryTranslate
}) {
  if (tools.length === 0) return <p className={css.noPayload}>{t('record.toolsMissing')}</p>
  return (
    <div className={css.toolCatalog}>
      {tools.map((tool, index) => (
        <details className={css.toolCatalogItem} key={`${tool.name}:${index}`}>
          <summary className={css.toolCatalogSummary}>
            <IconChevronRightOutlineRegular className={css.toolCatalogChevron} size={12} />
            <ToolGlyph />
            <span className={css.toolCatalogName}>{tool.name}</span>
            <span className={css.toolCatalogDescription}>{tool.description}</span>
          </summary>
          <div className={css.toolCatalogDefinition}>
            {tool.description !== '' && (
              <p className={css.toolCatalogFullDescription}>{tool.description}</p>
            )}
            <JsonTree
              data={tool.parameters}
              stringWrapping={stringWrapping}
              label={t('record.namedParametersJson', { name: tool.name })}
              labels={jsonTreeLabels(t)}
              className={css.toolCatalogTree}
            />
          </div>
        </details>
      ))}
    </div>
  )
}

interface PromptDiffLine {
  kind: 'meta' | 'context' | 'added' | 'removed'
  text: string
}

function promptDiffLines(before: string, after: string): readonly PromptDiffLine[] {
  const patch = structuredPatch('', '', before, after, undefined, undefined, { context: 3 })
  return patch.hunks.flatMap((hunk, hunkIndex) => [
    ...(hunkIndex === 0 ? [] : [{ kind: 'meta' as const, text: '' }]),
    {
      kind: 'meta' as const,
      text: `@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@`,
    },
    ...hunk.lines.flatMap((line): PromptDiffLine[] => {
      if (line.startsWith('\\')) return []
      if (line.startsWith('+')) return [{ kind: 'added', text: line }]
      if (line.startsWith('-')) return [{ kind: 'removed', text: line }]
      return [{ kind: 'context', text: line }]
    }),
  ])
}

function PromptDiffSection({
  title,
  before,
  after,
}: {
  title: string
  before: string
  after: string
}) {
  const lines = promptDiffLines(before, after)
  if (lines.length === 0) return null
  return (
    <section className={css.promptDiffSection}>
      <h3 className={css.promptDiffTitle}>{title}</h3>
      <pre className={css.promptDiff}>
        {lines.map((line, index) => (
          <span className={css[`promptDiffLine${line.kind}`]} key={index}>
            {line.text || ' '}
            {'\n'}
          </span>
        ))}
      </pre>
    </section>
  )
}

function SystemPromptDiff({
  before,
  after,
  t,
}: {
  before: ConversationPromptSnapshot
  after: ConversationPromptSnapshot
  t: TrajectoryTranslate
}) {
  const toolsBefore = JSON.stringify(before.tools, null, 2)
  const toolsAfter = JSON.stringify(after.tools, null, 2)
  return (
    <div className={css.promptDiffSections}>
      {before.system !== after.system && (
        <PromptDiffSection
          title={t('record.systemPrompt')}
          before={before.system}
          after={after.system}
        />
      )}
      {toolsBefore !== toolsAfter && (
        <PromptDiffSection
          title={t('record.tools')}
          before={toolsBefore}
          after={toolsAfter}
        />
      )}
    </div>
  )
}

function ToolOutputBlocks({
  blocks,
  error,
  errorDetail,
  preview,
  renderSlot,
  loadImage,
}: {
  blocks: readonly TrajectorySourceBlock[]
  error: boolean
  /** Failure name and code shown only when no recorded text block is non-empty. */
  errorDetail?: string | undefined
  preview: boolean
  renderSlot: PropsRenderSlots<'conversation.trajectory.images'>['renderSlot']
  loadImage: MessageImageLoader
}) {
  return (
    <div className={[
      css.resultBlocks,
      preview ? css.resultBlocksPreview : undefined,
      error ? css.errorPayload : undefined,
    ].filter((value): value is string => value !== undefined).join(' ')}
    >
      {error && errorDetail !== undefined && errorDetail !== ''
        && !blocks.some(block => block.type === 'text' && block.content !== '')
        && <pre className={css.resultBlockText}>{errorDetail}</pre>}
      {blocks.map((block, index) => (
        block.attachment !== undefined
          ? (
            <div className={css.messageImages} key={index}>
              {renderSlot('conversation.trajectory.images', { images: [{ attachment: block.attachment }], align: 'start', loadImage })}
            </div>
          )
          : block.content !== ''
            ? <pre className={css.resultBlockText} key={index}>{block.content}</pre>
            : null
      ))}
    </div>
  )
}

function MarkdownRecordContent({
  record,
  rendered,
  preview = false,
  thinkingExpanded,
  onThinkingExpandedChange,
  onOpenCall,
  renderSlot,
  loadImage,
  t,
}: {
  record: TableRecord
  rendered: boolean
  preview?: boolean
  thinkingExpanded: boolean
  onThinkingExpandedChange: (expanded: boolean) => void
  onOpenCall: (callId: string) => void
  renderSlot: PropsRenderSlots<'conversation.trajectory.images'>['renderSlot']
  loadImage: MessageImageLoader
  t: TrajectoryTranslate
}) {
  if (record.cell.sourceBlocks?.length && record.cell.sourceBlocks.every(block =>
    block.type === 'tool-addition' || block.type === 'tool-removal')) {
    return <pre className={`${css.payload} ${css.toolUpdatePayload}`}>{record.cell.inputDetail}</pre>
  }
  if (!rendered && record.cell.sourceBlocks && record.cell.sourceBlocks.length > 0) {
    return (
      <SourceBlocks
        blocks={record.cell.sourceBlocks}
        onOpenCall={onOpenCall}
        t={t}
      />
    )
  }
  if (record.cell.thinkingDetail) {
    if (!rendered) {
      const source = [
        record.cell.thinkingDetail,
        record.cell.outputDetail,
      ].filter((value): value is string => value !== undefined && value !== '').join('\n\n')
      return <MarkdownFragment text={source} rendered={false} preview={preview} t={t} />
    }
    return (
      <div className={`${css.assistantContent} ${css.assistantContentRendered}`}>
        <div className={
          preview && !record.cell.outputDetail
            ? `${css.thinkingQuote} ${css.thinkingQuoteOnlyPreview}`
            : css.thinkingQuote
        }
        >
          <button
            type="button"
            className={css.thinkingToggle}
            aria-expanded={thinkingExpanded}
            onClick={() => { onThinkingExpandedChange(!thinkingExpanded) }}
          >
            {t('record.thinking')}
            <IconChevronRightOutlineRegular className={css.thinkingChevron} size={12} />
          </button>
          {thinkingExpanded && (
            <MarkdownFragment
              text={record.cell.thinkingDetail}
              rendered={rendered}
              preview={preview}
              variant="compact"
              t={t}
            />
          )}
        </div>
        {record.cell.outputDetail && (
          <div className={css.assistantOutput}>
            <MarkdownFragment
              text={record.cell.outputDetail}
              rendered={rendered}
              preview={preview}
              t={t}
            />
          </div>
        )}
        <AssistantToolCalls
          blocks={record.cell.sourceBlocks}
          preview={preview}
          onOpenCall={onOpenCall}
          t={t}
        />
        <RecordAttachments
          blocks={record.cell.sourceBlocks}
          preview={preview}
          renderSlot={renderSlot}
          loadImage={loadImage}
          t={t}
        />
      </div>
    )
  }
  const source = markdownSource(record)
  const hasAttachments = record.cell.sourceBlocks?.some(block => block.attachment !== undefined || block.file !== undefined) === true
  const hasToolCalls = record.cell.kind === 'message'
    && record.cell.sourceBlocks?.some(block => block.type === 'tool-call') === true
  if (!source && !hasAttachments && !hasToolCalls) {
    const emptyLabel = isToolCallOnly(record.cell, t)
      ? t('record.toolCallOnly')
      : record.cell.text || t('record.noContent')
    return <p className={css.noPayload}>{emptyLabel}</p>
  }
  if (!rendered || (!hasAttachments && !hasToolCalls)) {
    return <MarkdownFragment text={source ?? ''} rendered={rendered} preview={preview} t={t} />
  }
  return (
    <div>
      {source && <MarkdownFragment text={source} rendered preview={preview} t={t} />}
      {record.cell.kind === 'message' && (
        <AssistantToolCalls
          blocks={record.cell.sourceBlocks}
          preview={preview}
          onOpenCall={onOpenCall}
          t={t}
        />
      )}
      <RecordAttachments blocks={record.cell.sourceBlocks} preview={preview}
        renderSlot={renderSlot} loadImage={loadImage} t={t} />
    </div>
  )
}

/**
 * One field of 概述: caption, value, optional trailing action, one field per
 * line. Same grid as the request overview, so a record and a request read the
 * same way.
 */
function Field({
  label,
  tone,
  mono = false,
  wrap = false,
  actions,
  children,
}: {
  label: string
  tone?: 'error' | 'warn'
  mono?: boolean
  wrap?: boolean
  actions?: ReactNode
  children: ReactNode
}) {
  return (
    <div data-copy-reveal={actions === undefined ? undefined : ''}>
      <dt>{label}</dt>
      <dd data-tone={tone} data-mono={mono || undefined} data-wrap={wrap || undefined}>
        <span className={css.fieldValue}>{children}</span>
        {actions}
      </dd>
    </div>
  )
}

function RecordTiming({
  record,
  preview = false,
  extra,
  t,
}: {
  record: TableRecord
  preview?: boolean
  /** More statistics, rendered in the same field list. */
  extra?: ReactNode
  t: TrajectoryTranslate
}) {
  return record.cell.kind === 'message' && record.cell.assistantMetrics !== undefined
    ? <AssistantTimingPanel metrics={record.cell.assistantMetrics} extra={extra} t={t} />
    : (
      <dl className={css.overview}>
        <div><dt>{t('timing.started')}</dt><StartedAtValue timestamp={record.cell.startedAt ?? null} t={t} /></div>
        <div><dt>{t('timing.duration')}</dt><dd>{formatElapsedSeconds(record.cell.timeSeconds, t)}</dd></div>
        {!preview && (
          <div><dt>{t('timing.source')}</dt><dd>{record.cell.timeSeconds === null ? t('timing.notAvailable') : t('timing.sessionTimestamps')}</dd></div>
        )}
        {extra}
      </dl>
    )
}

function RequestTiming({
  assistant,
  anchor,
  request,
  preview = false,
  t,
}: {
  assistant: TableRecord | undefined
  anchor: TableRecord | undefined
  request: TrajectoryRequestNumber | undefined
  preview?: boolean
  t: TrajectoryTranslate
}) {
  if (assistant !== undefined) return <RecordTiming record={assistant} preview={preview} t={t} />
  if (request?.startedAt !== undefined) {
    const duration = request.completedAt === null || request.completedAt === undefined
      ? null
      : Math.max(0, (request.completedAt - request.startedAt) / 1000)
    return (
      <dl className={css.overview}>
        <div><dt>{t('timing.started')}</dt><StartedAtValue timestamp={request.startedAt} t={t} /></div>
        <div><dt>{t('timing.duration')}</dt><dd>{formatElapsedSeconds(duration, t)}</dd></div>
        {!preview && (
          <div>
            <dt>{t('timing.source')}</dt>
            <dd>{duration === null ? t('timing.sessionTimestampsRunning') : t('timing.sessionTimestamps')}</dd>
          </div>
        )}
      </dl>
    )
  }
  return (
    <dl className={css.overview}>
      <div>
        <dt>{t('timing.started')}</dt>
        <StartedAtValue timestamp={anchor?.cell.startedAt ?? null} t={t} />
      </div>
      <div><dt>{t('timing.duration')}</dt><dd>{formatElapsedSeconds(null, t)}</dd></div>
    </dl>
  )
}

function RecordPayload({
  record,
  direction,
  preview = false,
  renderSlot,
  loadImage,
  stringWrapping,
  t,
}: {
  record: TableRecord
  direction: 'input' | 'output'
  preview?: boolean
  renderSlot: PropsRenderSlots<'conversation.trajectory.images'>['renderSlot']
  loadImage: MessageImageLoader
  stringWrapping: JsonTreeProps['stringWrapping']
  t: TrajectoryTranslate
}) {
  const value = direction === 'input' ? record.cell.inputDetail : record.cell.outputDetail
  const missing = direction === 'input'
    ? t('record.noPayload')
    : t('record.noResult')
  if (!value) return <p className={css.noPayload}>{missing}</p>
  const error = direction === 'output' && record.cell.isError === true
  const payloadClass = preview ? css.jsonPreview : css.jsonPayload
  const payloadClassName = error ? `${payloadClass} ${css.errorPayload}` : payloadClass

  const json = error ? undefined : parseJsonContainer(value)
  const singleTextResult = direction === 'output'
    && record.cell.outputBlocks?.length === 1
    && record.cell.outputBlocks[0]?.type === 'text'
  if (singleTextResult && json !== undefined) {
    return (
      <JsonTree
        data={json}
        stringWrapping={stringWrapping}
        collapsedStringLines={preview ? 3 : 12}
        label={t('record.resultJson')}
        labels={jsonTreeLabels(t)}
        className={payloadClassName}
      />
    )
  }

  if (
    direction === 'output'
    && record.cell.outputBlocks?.some(block =>
      block.attachment !== undefined || block.content !== '') === true
  ) {
    return (
      <ToolOutputBlocks
        blocks={record.cell.outputBlocks}
        error={error}
        errorDetail={error ? value : undefined}
        preview={preview}
        renderSlot={renderSlot}
        loadImage={loadImage}
      />
    )
  }

  const markdown = (
    direction === 'input'
    && (record.cell.kind === 'user' || record.cell.kind === 'context')
  ) || (
    direction === 'output' && record.cell.kind === 'message'
  )
  if (markdown) {
    return (
      <div className={[
        preview ? css.markdownPreview : css.markdownPayload,
        error ? css.errorPayload : undefined,
      ].filter((className): className is string => className !== undefined).join(' ')}
      >
        <MarkdownText text={value} labels={markdownLabels(t)} />
      </div>
    )
  }
  if (json !== undefined) {
    return (
      <JsonTree
        data={json}
        stringWrapping={stringWrapping}
        collapsedStringLines={preview ? 3 : 12}
        label={t(direction === 'input' ? 'record.payloadJson' : 'record.outputJson')}
        labels={jsonTreeLabels(t)}
        className={payloadClassName}
      />
    )
  }
  return (
    <pre className={[
      css.payload,
      preview ? css.payloadPreview : undefined,
      error ? css.errorPayload : undefined,
      value === t('record.noOutput') ? css.noOutputText : undefined,
    ].filter((value): value is string => value !== undefined).join(' ')}
    >
      {value}
    </pre>
  )
}

function RecordSchema({
  record,
  preview = false,
  stringWrapping,
  t,
}: {
  record: TableRecord
  preview?: boolean
  stringWrapping: JsonTreeProps['stringWrapping']
  t: TrajectoryTranslate
}) {
  if (!record.cell.schemaDetail) {
    return <p className={css.noPayload}>{t('record.schemaUnavailable')}</p>
  }
  const schema = parseToolSchema(record.cell.schemaDetail)
  if (schema !== undefined) {
    return (
      <div className={preview ? `${css.schema} ${css.schemaPreview}` : css.schema}>
        <header className={css.schemaIntro}>
          <h3 className={css.schemaName}>{schema.name}</h3>
          <p className={css.schemaDescription}>{schema.description}</p>
        </header>
        <section className={css.schemaParameters}>
          <h4 className={css.schemaParametersTitle}>{t('record.parameters')}</h4>
          <JsonTree
            data={schema.parameters}
            stringWrapping={stringWrapping}
            collapsedStringLines={preview ? 3 : 12}
            label={t('record.namedParametersJson', { name: schema.name })}
            labels={jsonTreeLabels(t)}
            className={css.schemaTree}
          />
        </section>
      </div>
    )
  }
  return (
    <pre className={`${css.payload} ${preview ? css.payloadPreview : ''}`}>
      {record.cell.schemaDetail}
    </pre>
  )
}

interface ParsedToolSchema {
  name: string
  description: string
  parameters: object
}

function parseToolSchema(value: string): ParsedToolSchema | undefined {
  try {
    const parsed: unknown = JSON.parse(value)
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return undefined
    const schema = parsed as Record<string, unknown>
    if (
      typeof schema.name !== 'string'
      || typeof schema.description !== 'string'
      || typeof schema.parameters !== 'object'
      || schema.parameters === null
      || Array.isArray(schema.parameters)
    ) return undefined
    return {
      name: schema.name,
      description: schema.description,
      parameters: schema.parameters,
    }
  } catch {
    return undefined
  }
}

function parseJsonContainer(value: string): object | undefined {
  try {
    const parsed: unknown = JSON.parse(value)
    return typeof parsed === 'object' && parsed !== null ? parsed : undefined
  } catch {
    return undefined
  }
}

/**
 * 参数 of a code-tool call: the program itself. The control strip belongs to the
 * content (wrap, original JSON, copy), the section above owns the title.
 */
function ProgramInput({ program, initialWrapped, stringWrapping, t }: {
  program: CodeProgram
  initialWrapped: boolean
  stringWrapping: JsonTreeProps['stringWrapping']
  t: TrajectoryTranslate
}) {
  const contentsId = useId()
  const [wrapped, setWrapped] = useState(initialWrapped)
  const [showJson, setShowJson] = useState(false)
  return (
    <div className={css.programPanel}>
      <div className={css.programToolbar}>
        {!showJson && program.language !== undefined && (
          <span className={css.programLanguage}>{program.language}</span>
        )}
        {!showJson && (
          <button
            type="button"
            className={css.programAction}
            aria-label={t('record.wrapLines')}
            title={t('record.wrapLines')}
            aria-pressed={wrapped}
            aria-controls={contentsId}
            onClick={() => {
              const next = !wrapped
              setWrapped(next)
              stringWrapping?.setDefault(next)
            }}
          >
            <IconWrapLinesOutlineRegular size={12} />
          </button>
        )}
        <button
          type="button"
          className={css.programAction}
          aria-label={t('code.originalJson')}
          title={t('code.originalJson')}
          aria-pressed={showJson}
          aria-controls={contentsId}
          onClick={() => { setShowJson(value => !value) }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2H5a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2 2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h1" />
            <path d="M10 2h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2h-1" />
          </svg>
        </button>
        <CopyButton
          text={showJson ? program.rawInput : program.source}
          label={t(showJson ? 'copy.json' : 'code.copySource')}
          copiedLabel={t('copied')}
          failedLabel={t('copy.failed')}
          reveal="always"
        />
      </div>
      <div id={contentsId} className={css.programContent} data-wrap={wrapped}>
        {showJson
          ? <JsonTree data={program.arguments} label={t('record.parametersJson')}
            labels={jsonTreeLabels(t)} stringWrapping={stringWrapping} />
          : <CodeBlock code={program.source} lang={program.language} lineNumbers showHeader={false}
            className={css.programSource} copyLabel={t('code.copySource')} copiedLabel={t('copied')} />}
      </div>
    </div>
  )
}

/** The code-tool result: terminal text, or a JSON document. */
function ProgramOutput({ record, stringWrapping, t }: {
  record: TableRecord
  stringWrapping: JsonTreeProps['stringWrapping']
  t: TrajectoryTranslate
}) {
  const output = record.cell.outputDetail
  const json = output === undefined || record.cell.isError === true ? undefined : parseJsonContainer(output)
  return (
    <div className={css.programContent}>
      {output === undefined || output === ''
        ? <p className={css.noPayload}>{t(stateOf(record) === 'running' ? 'code.running' : 'record.noOutput')}</p>
        : json !== undefined
          ? <JsonTree data={json} label={t('record.outputJson')} labels={jsonTreeLabels(t)}
            stringWrapping={stringWrapping} collapsedStringLines={12} />
          : <pre className={`${css.programOutput} ${record.cell.isError === true ? css.programError : ''}`}>{output}</pre>}
    </div>
  )
}

function OverviewSection({
  label,
  onOpen,
  actions,
  children,
}: {
  label: string
  onOpen: () => void
  actions?: ReactNode
  children: ReactNode
}) {
  const previewRef = useRef<HTMLDivElement>(null)
  const [hasMore, setHasMore] = useState(false)
  const measureOverflow = useCallback((preview: HTMLElement) => {
    setHasMore(preview.scrollHeight - preview.clientHeight - preview.scrollTop > 1)
  }, [])

  useLayoutEffect(() => {
    const preview = previewRef.current as HTMLDivElement
    const measure = () => { measureOverflow(preview) }
    measure()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(preview)
    for (const child of preview.children) observer.observe(child)
    return () => { observer.disconnect() }
  }, [children, measureOverflow])

  return (
    <section className={css.overviewSection}>
      <h3 className={css.overviewHeading}>
        <button
          type="button"
          className={css.overviewTitle}
          onClick={onOpen}
        >
          <span>{label}</span>
          <IconChevronRightOutlineRegular className={css.overviewTitleIcon} size={12} />
        </button>
        {actions}
      </h3>
      <div
        ref={previewRef}
        className={`${css.overviewPreview} ${css.summaryScrollRegion}`}
        data-summary-scroll-region=""
        data-scroll-more={hasMore || undefined}
        onScroll={(event) => { measureOverflow(event.currentTarget) }}
      >
        {children}
      </div>
    </section>
  )
}

/**
 * Render trajectory events as a dense ledger with turn and step separators.
 * Clicking ledger whitespace clears the active record or request selection.
 * @param props - Grouped trajectory data and whole-ledger fold state.
 * @returns The ledger and an optional local record inspector.
 */
export function TrajectoryTable({
  qt = (key: string) => key,
  watchToolResult,
  t,
  stringWrapping,
  renderSlot,
  loadImage,
  requestNumbers: sessionRequestNumbers,
  turns,
  streamingCells = [],
  timelineFocusIndexes = null,
  searchMatchIndexes = null,
  hiddenIndexes = null,
  callMeta = null,
  maxDurationMs = 1,
  initialScrollTop = null,
  showTime = true,
  onClearDescendantFolds,
  onShowAll,
  onSelectedIndexChange,
  onRecordSelect,
  recordSelection = null,
  recordFocus = null,
  historyLoading = false,
  olderHistoryLoading = false,
  historyStartSeq,
  hasOlderRecords = false,
  onLoadOlder,
  onClearSelection,
  collapsedTurns,
  onToggleTurn,
  collapsedAssistants,
  onToggleAssistant,
  collapsedTools,
  onToggleTool,
  inspectCallId = null,
  onInspectApplied,
}: TrajectoryTableProps) {
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null)
  const [selectedRequest, setSelectedRequest] = useState<SelectedRequest | null>(null)
  const [activeTab, setActiveTab] = useState<DetailTab>('overview')
  const [codeWrappingOnOpen, setCodeWrappingOnOpen] = useState(false)
  const [thinkingDisclosure, setThinkingDisclosure] = useState<{ recordId: string; expanded: boolean }>()
  const [detailsWidth, setDetailsWidth] = useState<number | null>(null)
  const [snapping, setSnapping] = useState(false)
  const [hoverCard, setHoverCard] = useState<{ x: number; y: number; record: TableRecord } | null>(null)
  const hoverTimer = useRef<number | null>(null)
  const [toolRequestOffset, setToolRequestOffset] = useState<number | null>(null)
  const detailsResizeDrag = useRef<DetailsResizeDrag | null>(null)
  const detailsResizeMoved = useRef(false)
  const appliedRecordSelection = useRef<TrajectoryTableProps['recordSelection']>(null)
  const appliedRecordFocus = useRef<TrajectoryTableProps['recordFocus']>(null)
  const tabHistory = useRef<Set<DetailTab>>(new Set(['overview']))
  const rootRef = useRef<HTMLDivElement>(null)
  const tablePaneRef = useRef<HTMLDivElement>(null)
  const followsTableTail = useRef(false)
  const tableScrollInitialized = useRef(false)
  const [tableScrollReady, setTableScrollReady] = useState(false)
  const pendingScrollRecordId = useRef<string | null>(null)
  const loadingOlder = useRef(false)
  const [olderLoading, setOlderLoading] = useState(false)
  const olderLoadAnchor = useRef<OlderLoadAnchor | null>(null)
  const allRecords = useMemo(() => {
    const records = flattenRecords(turns)
    return hiddenIndexes === null
      ? records
      : records.filter(record => !hiddenIndexes.has(record.cell.index))
  }, [turns, hiddenIndexes])
  const streamingCellsByIndex = useMemo(
    () => new Map(streamingCells.map(cell => [cell.index, cell])),
    [streamingCells],
  )
  const currentRecord = useCallback((record: TableRecord): TableRecord => {
    const cell = streamingCellsByIndex.get(record.cell.index)
    return cell === undefined ? record : { ...record, cell }
  }, [streamingCellsByIndex])
  const selectedTemplate = useMemo(() => selectedRecordId === null
    ? undefined
    : allRecords.find(record => trajectoryRecordId(record.cell) === selectedRecordId),
  [allRecords, selectedRecordId])
  const selected = selectedTemplate === undefined
    ? undefined
    : currentRecord(selectedTemplate)
  const resultSeq = activeTab === 'preview' ? selected?.cell.resultSeq : undefined
  const [liveResult, setLiveResult] = useState<{ seq: number; owner: WatchToolResult; value: JsonValue | undefined }>()
  useEffect(() => {
    setLiveResult(undefined)
    if (resultSeq === undefined || watchToolResult === undefined) return
    let active = true
    const dispose = watchToolResult(resultSeq, (value) => {
      if (active) setLiveResult({ seq: resultSeq, owner: watchToolResult, value })
    })
    return () => { active = false; dispose() }
  }, [resultSeq, watchToolResult])
  const resultValue = liveResult?.seq === resultSeq && liveResult?.owner === watchToolResult ? liveResult?.value : undefined
  const selectedProgram = selected === undefined ? undefined : codeProgram(selected.cell)
  const thinkingExpanded = thinkingDisclosure?.recordId === selectedRecordId
    ? thinkingDisclosure.expanded
    : selected?.cell.kind === 'message'
      && Boolean(selected.cell.thinkingDetail?.trim())
  const setThinkingExpanded = (expanded: boolean) => {
    if (selectedRecordId !== null) {
      setThinkingDisclosure({ recordId: selectedRecordId, expanded })
    }
  }
  const selectedIndex = selected?.cell.index ?? null
  useEffect(() => {
    onSelectedIndexChange?.(selectedIndex)
  }, [onSelectedIndexChange, selectedIndex])
  const requestGroups = useMemo(() => new Set(
    (sessionRequestNumbers ?? []).map(request => requestKey(request.turn, request.group)),
  ), [sessionRequestNumbers])
  const requestBoundaries = useMemo(
    () => indexRequestBoundaries(allRecords, requestGroups),
    [allRecords, requestGroups],
  )
  const requestNumbers = useMemo(
    () => indexRequestNumbers(sessionRequestNumbers),
    [sessionRequestNumbers],
  )
  const messagesWithCalls = useMemo(() => messageIndexesWithCalls(allRecords), [allRecords])
  const records = useMemo(() => {
    if (searchMatchIndexes !== null) return filterRecords(allRecords, searchMatchIndexes)
    type Summary = { tools: number; steps: Set<string>; names: string[]; durationMs: number | null }
    const emptySummary = (): Summary => ({ tools: 0, steps: new Set(), names: [], durationMs: null })
    const addToSummary = (summary: Summary, record: TableRecord) => {
      const cell = record.cell
      if (cell.kind === 'tool' || cell.kind === 'subtool') {
        summary.tools += 1
        const name = cell.toolName
        if (name !== undefined && !summary.names.includes(name)) summary.names.push(name)
      }
      /* a step is a group that carries a request; the system/user preamble is a
         group too, and counting it made every turn read `2 步` */
      const stepKey = requestKey(record.turn, record.group)
      if (requestGroups.has(stepKey)) summary.steps.add(stepKey)
      const meta = cell.callId === undefined ? undefined : callMeta?.get(cell.callId)
      const ms = cell.timeSeconds !== null
        ? Math.round(cell.timeSeconds * 1000)
        : meta?.durationMs
      if (typeof ms === 'number') summary.durationMs = (summary.durationMs ?? 0) + ms
    }
    const turnSummary = new Map<number, Summary>()
    /* the collapsed row is built from the turn's first *content* record: the
       initial system prompt is not a turn start, so anchoring on it produced a
       summary row without a fold control and the turn could never be expanded */
    const turnAnchor = new Map<number, TableRecord>()
    /* a turn with a single content row has nothing to hide: folding it would only
       paint a dead dot that swallows clicks and changes nothing */
    const turnContent = new Map<number, number>()
    for (const record of allRecords) {
      if (record.turn === null) continue
      const summary = turnSummary.get(record.turn) ?? emptySummary()
      addToSummary(summary, record)
      turnSummary.set(record.turn, summary)
      if (record.cell.requestOnly === true || record.cell.kind === 'system') continue
      turnContent.set(record.turn, (turnContent.get(record.turn) ?? 0) + 1)
      if (turnAnchor.has(record.turn)) continue
      turnAnchor.set(record.turn, record)
    }

    const out: TableRecord[] = []
    const seenTurns = new Set<number>()
    let assistantOpen: TableRecord | null = null
    let assistantSummary: Summary | null = null
    let toolOpen: TableRecord | null = null
    let toolCount = 0
    const flushAssistant = () => {
      if (assistantOpen !== null && assistantSummary !== null && assistantSummary.tools > 0) {
        ;(assistantOpen as TableRecord).foldSummary = {
          tools: assistantSummary.tools,
          steps: 0,
          names: assistantSummary.names,
          durationMs: assistantSummary.durationMs,
        }
      }
      assistantOpen = null
      assistantSummary = null
    }
    const flushTool = () => {
      if (toolOpen !== null && toolCount > 0) {
        ;(toolOpen as TableRecord).foldSummary = {
          tools: toolCount, steps: 0, names: [], durationMs: null,
        }
      }
      toolOpen = null
      toolCount = 0
    }
    for (const [recordIndex, record] of allRecords.entries()) {
      const isToolRow = record.cell.kind === 'tool' || record.cell.kind === 'subtool'
      if (record.turn !== null && collapsedTurns.has(record.turn)) {
        if (seenTurns.has(record.turn)) continue
        seenTurns.add(record.turn)
        flushAssistant()
        flushTool()
        const summary = turnSummary.get(record.turn) ?? emptySummary()
        const anchor = turnAnchor.get(record.turn) ?? record
        out.push({
          ...anchor,
          /* one row stands for the whole turn, so it is both its start and its
             end — otherwise the row has no chevron to unfold it again */
          turnStart: true,
          turnEnd: true,
          foldSummary: {
            tools: summary.tools,
            steps: summary.steps.size,
            names: summary.names,
            durationMs: summary.durationMs,
          },
        })
        continue
      }
      if (assistantOpen !== null && isToolRow) {
        if (assistantSummary !== null) addToSummary(assistantSummary, record)
        continue
      }
      const isMessage = record.cell.kind === 'message'
      const messageId = trajectoryRecordId(record.cell)
      if (isMessage && collapsedAssistants.has(messageId)) {
        flushAssistant()
        flushTool()
        const copy = { ...record }
        out.push(copy)
        assistantOpen = copy
        assistantSummary = emptySummary()
        continue
      }
      if (toolOpen !== null && record.cell.kind === 'subtool') {
        toolCount += 1
        continue
      }
      if (record.cell.kind === 'tool' && collapsedTools.has(trajectoryRecordId(record.cell))) {
        flushAssistant()
        flushTool()
        const copy = { ...record }
        out.push(copy)
        toolOpen = copy
        toolCount = 0
        continue
      }
      flushAssistant()
      flushTool()
      const nextRecord = allRecords[recordIndex + 1]
      const kind = record.cell.kind
      const nextKind = nextRecord?.cell.kind
      const hasChildren = (kind === 'message' || ((kind === 'user' || kind === 'system') && false))
        ? nextKind === 'tool' || nextKind === 'subtool'
        : (kind === 'user' && nextRecord?.turn === record.turn && nextKind !== undefined)
      if (hasChildren) out.push({ ...record, hasChildren: true })
      else out.push(record)
    }
    flushAssistant()
    flushTool()

    for (const [index, record] of out.entries()) {
      const kind = record.cell.kind
      const next = out[index + 1]
      const nextKind = next?.cell.kind
      // must mirror the fold control rendered below, or the connector geometry
      // (elbow stops at the dot) desynchronises from the dot that is actually there
      const turnCollapsible = record.turn !== null
        && (turnContent.get(record.turn) ?? 0) > 1
      if (turnCollapsible) (record as TableRecord).turnCollapsible = true
      const hasFold = (record.turnStart && record.turn !== null && turnCollapsible)
        || (kind === 'message' && messagesWithCalls.has(record.cell.index))
        || (kind === 'message' && collapsedAssistants.has(trajectoryRecordId(record.cell)))
        || (kind === 'tool' && nextKind === 'subtool')
      if (hasFold) (record as TableRecord).hasFold = true
      if (kind === 'subtool') {
        if (nextKind !== 'subtool') (record as TableRecord).childLast = true
        continue
      }
      if (kind === 'tool') {
        if (nextKind !== 'subtool') (record as TableRecord).childLast = true
        continue
      }
      if (kind === 'message' || kind === 'context') {
        const endsTurn = next === undefined || next.turn !== record.turn
          || nextKind === 'user' || nextKind === 'system' || nextKind === 'compacted'
        if (endsTurn) (record as TableRecord).childLast = true
      }
    }
    return out
  }, [allRecords, collapsedAssistants, collapsedTools, collapsedTurns, messagesWithCalls, searchMatchIndexes, callMeta, requestGroups])

  const projectedVirtualRows = useMemo(
    () => groupTrajectoryVirtualRows(records),
    [records],
  )
  const virtualRowStructure = useStableVirtualRowStructure(projectedVirtualRows)
  const virtualizationEnabled = hasOlderRecords
    || records.length > VIRTUALIZATION_THRESHOLD
  /* no static "load earlier" row any more, so the list starts at row 0 */
  const virtualScrollMargin = 0
  const estimateVirtualRowSize = useCallback(
    (index: number) => virtualRowStructure[index]?.height ?? 30,
    [virtualRowStructure],
  )
  const getVirtualRowKey = useCallback(
    (index: number) => virtualRowStructure[index]?.key ?? index,
    [virtualRowStructure],
  )
  const getTableScrollElement = useCallback(() => tablePaneRef.current, [])
  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
    count: virtualizationEnabled ? virtualRowStructure.length : 0,
    enabled: virtualizationEnabled,
    estimateSize: estimateVirtualRowSize,
    getItemKey: getVirtualRowKey,
    getScrollElement: getTableScrollElement,
    initialRect: { width: 0, height: VIRTUAL_INITIAL_VIEWPORT_HEIGHT_PX },
    anchorTo: 'end',
    overscan: VIRTUAL_OVERSCAN_ROWS,
    scrollMargin: virtualScrollMargin,
    scrollEndThreshold: BOTTOM_FOLLOW_THRESHOLD_PX,
    followOnAppend: 'auto',
  })
  const virtualIndexByRecordId = useMemo(() => {
    const indexes = new Map<string, number>()
    for (const [virtualIndex, row] of projectedVirtualRows.entries()) {
      for (const entry of row.entries) {
        if (entry.record.collapsedSummary === undefined) {
          indexes.set(trajectoryRecordId(entry.record.cell), virtualIndex)
        }
      }
    }
    return indexes
  }, [projectedVirtualRows])

  /** Bring the selected record's row back into view (header ⌖ action). */
  const locateSelected = useCallback((record: TableRecord) => {
    const id = trajectoryRecordId(record.cell)
    followsTableTail.current = false
    if (virtualizationEnabled) {
      const virtualIndex = virtualIndexByRecordId.get(id)
      if (virtualIndex !== undefined) {
        rowVirtualizer.scrollToIndex(virtualIndex, { behavior: 'smooth', align: 'center' })
        return
      }
    }
    const row = rootRef.current?.querySelector<HTMLElement>(`tr[data-record-index="${record.cell.index}"]`)
    /* v8 ignore next -- jsdom lacks scrollIntoView; browsers always have it. */
    if (row !== undefined && row !== null && typeof row.scrollIntoView === 'function') {
      row.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [virtualizationEnabled, virtualIndexByRecordId, rowVirtualizer])
  useEffect(() => {
    rowVirtualizer.measure()
  }, [hiddenIndexes, rowVirtualizer])


  useLayoutEffect(() => {
    const pane = tablePaneRef.current
    if (pane !== null && initialScrollTop !== null) pane.scrollTop = initialScrollTop
  }, [])

  const virtualItems = virtualizationEnabled ? rowVirtualizer.getVirtualItems() : []
  const virtualTop = Math.max(0, (virtualItems[0]?.start ?? 0) - virtualScrollMargin)
  const virtualBottom = virtualItems.length === 0
    ? 0
    : Math.max(
      0,
      rowVirtualizer.getTotalSize()
        + virtualScrollMargin
        - (virtualItems.at(-1)?.end ?? 0),
    )
  const renderedRecords = virtualizationEnabled
    ? virtualItems.flatMap((item) => {
      const row = projectedVirtualRows[item.index]
      if (row === undefined) return []
      return row.entries.map((entry, entryIndex) => ({
        record: currentRecord(entry.record),
        position: entry.logicalIndex,
        terminalRequestBoundary:
          entry.record.cell.requestOnly === true
          && row.entries.at(-1)?.record.cell.requestOnly === true
          && entryIndex === row.entries.length - 1,
      }))
    })
    : records.map((record, position) => ({
      record: currentRecord(record),
      position,
      terminalRequestBoundary:
        record.cell.requestOnly === true && position === records.length - 1,
    }))
  const requestBoundaryRuns = useMemo(
    () => indexRequestBoundaryRuns(records, requestGroups),
    [records, requestGroups],
  )
  const selectedPrompt = selected?.cell.kind === 'system'
    ? selected.cell.promptDetail
    : undefined
  const selectedPreviousPrompt = selected?.cell.kind === 'system'
    ? selected.cell.previousPromptDetail
    : undefined
  const selectedState = selected === undefined ? undefined : stateOf(selected)
  const selectedRequestInfo = selectedRequest === null
    ? undefined
    : sessionRequestNumbers?.find(request =>
      requestIdentity(request) === selectedRequest.identity)
  const selectedRequestRecordTemplates = useMemo(() => selectedRequestInfo === undefined
    ? []
    : allRecords.filter(record =>
      record.turn === selectedRequestInfo.turn
        && record.group === selectedRequestInfo.group,
    ), [allRecords, selectedRequestInfo])
  const selectedRequestRecords = selectedRequestRecordTemplates.map(currentRecord)
  const selectedRequestAssistant = selectedRequestRecords.find(
    record => record.cell.kind === 'message' && record.cell.requestOnly !== true,
  )
  const selectedRequestAnchor = selectedRequestAssistant ?? selectedRequestRecords[0]
  const selectedRequestNumber = selectedRequestInfo?.number
  const selectedRequestState: RecordState | undefined = selectedRequestInfo === undefined
    ? undefined
    : selectedRequestInfo.status
      ?? (selectedRequestAssistant?.cell.assistantMetrics?.completedTime === null
        ? 'running'
        : selectedRequestAssistant === undefined
          && selectedRequestRecords.some(record => stateOf(record) === 'running')
          ? 'running'
          : 'complete')
  const selectedRequestToolCalls = selectedRequestRecords.filter(
    record => record.cell.kind === 'tool',
  ).length
  const selectedRequestSubtoolCalls = selectedRequestRecords.filter(
    record => record.cell.kind === 'subtool',
  ).length
  const selectedRequestResultTemplate = selectedRequestInfo?.resultSeq === undefined
    ? selectedRequestAssistant
    : allRecords.find(record => record.cell.sourceSeq === selectedRequestInfo.resultSeq)
  const selectedRequestResult = selectedRequestResultTemplate === undefined
    ? undefined
    : currentRecord(selectedRequestResultTemplate)
  const selectedRequestUsage = selectedRequestInfo?.usage ?? (
    selectedRequestAssistant === undefined
      ? undefined
      : {
        ...(selectedRequestAssistant.cell.input === undefined
          ? {}
          : { input: selectedRequestAssistant.cell.input }),
        ...(selectedRequestAssistant.cell.cacheRead === undefined
          ? {}
          : { cacheRead: selectedRequestAssistant.cell.cacheRead }),
        ...(selectedRequestAssistant.cell.cacheWrite === undefined
          ? {}
          : { cacheWrite: selectedRequestAssistant.cell.cacheWrite }),
        ...(selectedRequestAssistant.cell.output === undefined
          ? {}
          : { output: selectedRequestAssistant.cell.output }),
        ...(selectedRequestAssistant.cell.think === undefined
          ? {}
          : { reasoning: selectedRequestAssistant.cell.think }),
      }
  )
  const selectedRequestCumulativeUsage =
    selectedRequestInfo?.cumulativeUsage ?? selectedRequestUsage
  const selectedRequestOptions = selectedRequestInfo?.requestConfig
  const activeTurn = selectedRequestInfo === undefined ? selected?.turn : selectedRequestInfo.turn
  const activeSection = selectedRequestInfo === undefined
    ? selected?.section
    : selectedRequestRecords[0]?.section
  const selectedTabs = selectedRequestInfo !== undefined
    ? REQUEST_TABS.filter(tab => tab.id !== 'options' || selectedRequestOptions !== undefined)
    : selected === undefined ? [] : RECORD_TABS
  /* switching to a record whose tabs no longer include the active one must not
     leave an empty panel (tabs differ per record kind) */
  useEffect(() => {
    if (selectedTabs.length === 0) return
    if (!selectedTabs.some(tab => tab.id === activeTab)) setActiveTab('overview')
  }, [activeTab, selectedTabs])
  const selectedParents: ParentRecords = selected === undefined
    ? {}
    : parentRecords(allRecords, selected)
  const selectedParentMessage = selectedParents.message
  const selectedParentTool = selectedParents.tool
  const selectedAssistantRequest = selected?.cell.kind === 'message'
    ? requestNumbers.get(requestKey(selected.turn, selected.group))
    : undefined
  const selectedAssistantRequestInfo = selectedAssistantRequest === undefined
    ? undefined
    : sessionRequestNumbers?.find(request => request.number === selectedAssistantRequest)
  const selectedAssistantRequestTarget: SelectedRequest | undefined =
    selectedAssistantRequestInfo === undefined
      ? undefined
      : { identity: requestIdentity(selectedAssistantRequestInfo) }
  const hasSelectedHierarchy = selectedAssistantRequestTarget !== undefined
    || selectedParents.message !== undefined
    || selectedParents.tool !== undefined
  const splitStyle: TrajectorySplitStyle | undefined = toolRequestOffset === null
    ? undefined
    : {
      '--trajectory-tool-request-width': `calc(58cqw - ${toolRequestOffset}px)`,
    }

  const activateTab = (tab: DetailTab) => {
    setCodeWrappingOnOpen(stringWrapping?.getDefault() ?? false)
    tabHistory.current.delete(tab)
    tabHistory.current.add(tab)
    setActiveTab(tab)
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      const target = event.target
      if (target instanceof HTMLElement
        && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return
      clearInspectorSelection()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selectedRecordId, selectedRequest])

  const clearInspectorSelection = () => {
    setSelectedRecordId(null)
    setSelectedRequest(null)
  }

  const clearAllSelections = () => {
    clearInspectorSelection()
    onClearSelection?.()
  }

  const selectRecord = useCallback((index: number) => {
    setCodeWrappingOnOpen(stringWrapping?.getDefault() ?? false)
    const record = allRecords.find(candidate => candidate.cell.index === index)
    onRecordSelect?.(index)
    setSelectedRequest(null)
    setSelectedRecordId(record === undefined ? null : trajectoryRecordId(record.cell))
    if (record === undefined) return
    /* every record has the same four faces, so the last used face is always
       still there — switching records never throws the reading position away */
    const recent = [...tabHistory.current].reverse()[0]
    setActiveTab(recent ?? 'overview')
  }, [allRecords, onRecordSelect, stringWrapping])
  useEffect(() => {
    if (
      recordSelection === null
      || appliedRecordSelection.current === recordSelection
    ) return
    appliedRecordSelection.current = recordSelection
    selectRecord(recordSelection.index)
    const record = allRecords.find(candidate => candidate.cell.index === recordSelection.index)
    pendingScrollRecordId.current = record === undefined
      ? null
      : trajectoryRecordId(record.cell)
  }, [allRecords, recordSelection, selectRecord])
  useEffect(() => {
    if (recordFocus === null || appliedRecordFocus.current === recordFocus) return
    appliedRecordFocus.current = recordFocus
    const record = allRecords.find(candidate => candidate.cell.index === recordFocus.index)
    pendingScrollRecordId.current = record === undefined
      ? null
      : trajectoryRecordId(record.cell)
  }, [allRecords, recordFocus])

  const selectRequest = (
    request: SelectedRequest,
    tab: 'overview' | 'timing' = 'overview',
  ) => {
    setSelectedRecordId(null)
    setSelectedRequest(request)
    activateTab(tab)
  }

  const openRecordSummary = (target: TableRecord) => {
    const targetAt = allRecords.findIndex(record => record.cell.index === target.cell.index)
    if (target.turn !== null && collapsedTurns.has(target.turn)) onToggleTurn(target.turn)
    if (target.cell.kind === 'subtool') {
      for (let i = targetAt - 1; i >= 0; i--) {
        const candidate = allRecords[i]
        if (candidate === undefined || candidate.cell.kind === 'subtool') continue
        if (candidate.cell.kind === 'tool') {
          const toolId = trajectoryRecordId(candidate.cell)
          if (collapsedTools.has(toolId)) onToggleTool(toolId)
        }
        break
      }
    }
    if (target.cell.kind === 'tool' || target.cell.kind === 'subtool') {
      for (let i = targetAt - 1; i >= 0; i--) {
        const candidate = allRecords[i]
        if (candidate === undefined || candidate.turn !== target.turn) break
        if (candidate.cell.kind !== 'message') continue
        const assistantId = trajectoryRecordId(candidate.cell)
        if (collapsedAssistants.has(assistantId)) onToggleAssistant(assistantId)
        break
      }
    }
    setSelectedRequest(null)
    setSelectedRecordId(trajectoryRecordId(target.cell))
    activateTab('overview')
  }

  const openCallSummary = (callId: string) => {
    const target = allRecords.find(record => record.cell.callId === callId)
    if (target !== undefined) openRecordSummary(target)
  }

  const expandSummary = (record: TableRecord, kind: NonNullable<TableRecord['collapsedSummaryKind']>) => {
    switch (kind) {
      case 'turn':
        if (record.turn !== null) onToggleTurn(record.turn)
        return
      case 'tool':
        onToggleTool(trajectoryRecordId(record.cell))
        return
      case 'assistant':
        onToggleAssistant(trajectoryRecordId(record.cell))
        return
      default:
        assertNever(kind)
    }
  }

  // Cross-view inspect handoff: resolve the requested call to its record,
  // open its summary, and remember the row to scroll once the un-collapsed
  // ledger has rendered. Not-found leaves the request pending (`turns` in the
  // deps retries as history pages in); the ack clears the store field.
  const openRecordSummaryRef = useRef(openRecordSummary)
  openRecordSummaryRef.current = openRecordSummary
  useEffect(() => {
    if (inspectCallId === null) return
    const target = flattenRecords(turns).find(record => record.cell.callId === inspectCallId)
    if (target === undefined) return
    openRecordSummaryRef.current(target)
    pendingScrollRecordId.current = trajectoryRecordId(target.cell)
    onInspectApplied?.()
  }, [inspectCallId, turns, onInspectApplied])
  useEffect(() => {
    const id = pendingScrollRecordId.current
    if (id === null) return
    const position = records.findIndex(record =>
      trajectoryRecordId(record.cell) === id && record.collapsedSummary === undefined)
    if (position === -1) return
    if (virtualizationEnabled) {
      const virtualIndex = virtualIndexByRecordId.get(id)
      if (virtualIndex === undefined) return
      pendingScrollRecordId.current = null
      followsTableTail.current = false
      rowVirtualizer.scrollToIndex(virtualIndex, { behavior: 'smooth', align: 'center' })
      return
    }
    pendingScrollRecordId.current = null
    followsTableTail.current = false
    const recordIndex = records[position]?.cell.index
    const row = recordIndex === undefined
      ? null
      : rootRef.current?.querySelector<HTMLElement>(`tr[data-record-index="${recordIndex}"]`)
    /* v8 ignore next -- jsdom lacks scrollIntoView; browsers always have it. */
    if (row !== undefined && row !== null && typeof row.scrollIntoView === 'function') {
      row.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [records, rowVirtualizer, virtualIndexByRecordId, virtualizationEnabled])
  useEffect(() => {
    if (timelineFocusIndexes === null || timelineFocusIndexes.size === 0) return
    const focusedPositions = records.flatMap((record, position) =>
      record.collapsedSummary === undefined
      && record.cell.requestOnly !== true
      && timelineFocusIndexes.has(record.cell.index)
        ? [position]
        : [])
    const first = focusedPositions.at(0)
    const last = focusedPositions.at(-1)
    if (first === undefined || last === undefined) return
    if (!virtualizationEnabled) {
      const ledger = rootRef.current
      if (ledger === null) return
      const focusedRows = [
        ...ledger.querySelectorAll<HTMLElement>('tr[data-timeline-focus="inside"]'),
      ]
      const firstRow = focusedRows.at(0)
      const lastRow = focusedRows.at(-1)
      if (firstRow === undefined || lastRow === undefined) return
      const focusHeight =
        lastRow.getBoundingClientRect().bottom - firstRow.getBoundingClientRect().top
      const target = focusHeight > ledger.clientHeight
        ? firstRow
        : focusedRows[Math.floor((focusedRows.length - 1) / 2)]
      /* v8 ignore next -- jsdom lacks scrollIntoView; browsers always have it. */
      if (target !== undefined && typeof target.scrollIntoView === 'function') {
        followsTableTail.current = false
        target.scrollIntoView({
          behavior: 'smooth',
          block: focusHeight > ledger.clientHeight ? 'start' : 'center',
        })
      }
      return
    }
    const focusedVirtualIndexes = [...new Set(focusedPositions.flatMap((position) => {
      const record = records[position]
      if (record === undefined) return []
      const virtualIndex = virtualIndexByRecordId.get(trajectoryRecordId(record.cell))
      return virtualIndex === undefined ? [] : [virtualIndex]
    }))].sort((left, right) => left - right)
    const firstVirtual = focusedVirtualIndexes.at(0)
    const lastVirtual = focusedVirtualIndexes.at(-1)
    if (firstVirtual === undefined || lastVirtual === undefined) return
    const paneHeight = tablePaneRef.current?.clientHeight ?? 0
    const focusHeight = projectedVirtualRows
      .slice(firstVirtual, lastVirtual + 1)
      .reduce((height, row) => height + row.height, 0)
    followsTableTail.current = false
    rowVirtualizer.scrollToIndex(
      focusHeight > paneHeight
        ? firstVirtual
        : focusedVirtualIndexes[Math.floor((focusedVirtualIndexes.length - 1) / 2)]
          ?? firstVirtual,
      {
        behavior: 'smooth',
        align: focusHeight > paneHeight ? 'start' : 'center',
      },
    )
  }, [
    projectedVirtualRows,
    records,
    rowVirtualizer,
    timelineFocusIndexes,
    virtualIndexByRecordId,
    virtualizationEnabled,
  ])
  const requestOlder = useCallback((pane: HTMLDivElement, requireTop: boolean) => {
    if (
      !hasOlderRecords
      || onLoadOlder === undefined
      || loadingOlder.current
      || olderHistoryLoading
      || (requireTop && pane.scrollTop > OLDER_LOAD_THRESHOLD_PX)
    ) return
    loadingOlder.current = true
    setOlderLoading(true)
    olderLoadAnchor.current = {
      historyStartSeq,
      scrollHeight: pane.scrollHeight,
      scrollTop: pane.scrollTop,
    }
    void onLoadOlder().then((advanced) => {
      if (!advanced) olderLoadAnchor.current = null
    }).finally(() => {
      loadingOlder.current = false
      setOlderLoading(false)
    })
  }, [hasOlderRecords, historyStartSeq, olderHistoryLoading, onLoadOlder])
  useLayoutEffect(() => {
    const pane = tablePaneRef.current
    if (pane === null) return
    const anchor = olderLoadAnchor.current
    if (anchor !== null && anchor.historyStartSeq !== historyStartSeq) {
      if (!virtualizationEnabled) {
        pane.scrollTop = anchor.scrollTop + pane.scrollHeight - anchor.scrollHeight
      }
      olderLoadAnchor.current = null
      followsTableTail.current = false
      return
    }
    if (!tableScrollInitialized.current) {
      if (historyLoading) return
      tableScrollInitialized.current = true
      followsTableTail.current = true
      if (virtualizationEnabled) rowVirtualizer.scrollToEnd({ behavior: 'auto' })
      else pane.scrollTop = pane.scrollHeight
      setTableScrollReady(true)
      return
    }
    if (!followsTableTail.current) return
    if (!virtualizationEnabled) pane.scrollTop = pane.scrollHeight
  }, [
    historyLoading,
    historyStartSeq,
    rowVirtualizer,
    virtualRowStructure,
    virtualizationEnabled,
  ])

  const olderBusy = olderHistoryLoading || olderLoading
  const showInitialLoading = historyLoading || !tableScrollReady

  return (
    <div ref={rootRef} className={css.split} style={splitStyle} data-show-time={showTime ? undefined : 'false'}>
      <div
        ref={tablePaneRef}
        className={css.tablePane}
        data-trajectory-scroll=""
        onScroll={(event) => {
          const pane = event.currentTarget
          followsTableTail.current =
            pane.scrollHeight - pane.clientHeight - pane.scrollTop
              <= BOTTOM_FOLLOW_THRESHOLD_PX
          /* a row that scrolls out from under the pointer never sends a leave
             (and the virtual list may unmount it), so its card would freeze over
             the list: scrolling ends the hover */
          if (hoverCard !== null) setHoverCard(null)
          if (hiddenIndexes === null) requestOlder(pane, true)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) clearAllSelections()
        }}
      >
        {showInitialLoading && records.length === 0 && (
          <div className={css.skeletonPane} aria-hidden="true">
            {[78, 64, 84, 58, 72, 66].map((width, index) => (
              <span key={index} className={css.skeletonRow} style={{ width: `${width}%` }} />
            ))}
          </div>
        )}
        {olderBusy && !showInitialLoading && (
          <div className={css.historyLoading} role="status" aria-live="polite">
            <span className={css.historyLoadingBar}>
              <StateDot state="ongoing" />
              {t('history.loadingEarlier')}
            </span>
          </div>
        )}
        {showInitialLoading && (
          <div className={css.historyLoading} role="status" aria-live="polite">
            <span className={css.historyLoadingBar}>
              <StateDot state="ongoing" />
              {t('history.loadingTrajectory')}
            </span>
          </div>
        )}
        <table
          className={css.table}
          data-scroll-ready={tableScrollReady || undefined}
          aria-rowcount={records.length}
        >
          <colgroup>
            <col className={css.eventColumn} />
            <col className={css.contentColumn} />
          </colgroup>
          <tbody>
            {!showInitialLoading && records.length === 0 && (
              /* `queryText` was never a prop of this component: any empty result
                 (a query that matched nothing) threw and took the whole tab down.
                 A hidden set is exactly "a query is active". */
              <tr className={css.emptyRow}>
                <td colSpan={2} className={css.emptyCell}>
                  <span>{hiddenIndexes === null ? qt('empty.none') : qt('empty.noMatch')}</span>
                  {hiddenIndexes !== null && (
                    <button type="button" className={css.emptyAction} onClick={onShowAll}>
                      {qt('query.showAll')}
                    </button>
                  )}
                </td>
              </tr>
            )}
            {virtualTop > 0 && (
              <tr className={css.virtualSpacer} data-virtual-spacer="top" aria-hidden="true">
                <td
                  colSpan={2}
                  style={{
                    '--trajectory-virtual-spacer-height': `${virtualTop}px`,
                  } as VirtualSpacerStyle}
                />
              </tr>
            )}
            {renderedRecords.map(({ record, position, terminalRequestBoundary }) => (
              <RecordPresentation
                key={trajectoryVirtualRecordKey(record)}
                cell={record.cell}
                t={t}
              >
                {({ displayText, listDisplayText, resultText, toolCallOnly, toolCallText }) => {
                  const summaryKind = record.collapsedSummaryKind
                  const isCollapsedSummary = summaryKind !== undefined
                  const isRequestOnly = record.cell.requestOnly === true
                  const isInitialSystem = record.cell.kind === 'system'
                && record.cell.index === allRecords[0]?.cell.index
                  const key = requestKey(record.turn, record.group)
                  const request = requestBoundaries.get(key) === record.cell.index
                && !isCollapsedSummary
                && (record.turn === null || !collapsedTurns.has(record.turn))
                    ? requestNumbers.get(key)
                    : undefined
                  const requestInfo = request === undefined
                    ? undefined
                    : sessionRequestNumbers?.find(candidate => candidate.number === request)
                  const requestStatus = requestInfo?.status
                ?? (record.cell.isError === true ? 'error' : undefined)
                  const requestRunIndex = requestBoundaryRuns.get(record.cell.index) ?? 0
                  const requestBoundaryStyle: RequestBoundaryStyle = {
                    '--request-boundary-offset': `${requestRunIndex * 8}px`,
                  }
                  const requestLabel = request === undefined
                    ? undefined
                    : t(requestInfo?.purpose === 'compaction'
                      ? 'request.labelCompaction'
                      : 'request.label', { request })
                  const requestSelected = requestInfo !== undefined
                && selectedRequest?.identity === requestIdentity(requestInfo)
                  const sectionActive = record.turn === null
                    ? activeSection === record.section
                    : activeTurn === record.turn
                  const metaInfo = record.cell.callId === undefined ? undefined : callMeta?.get(record.cell.callId)
                  const rowDurationMs = record.cell.timeSeconds !== null
                    ? Math.round(record.cell.timeSeconds * 1000)
                    : metaInfo?.durationMs
                  const rowStartedAt = record.cell.startedAt ?? metaInfo?.time
                  const toolLike = record.cell.kind === 'tool' || record.cell.kind === 'subtool'
                  const level = recordLevel(record.cell.kind)
                  const nextRow = records[position + 1]
                  const nextLevel = nextRow === undefined ? -1 : recordLevel(nextRow.cell.kind)
                  const rowName = toolLike
                    ? (record.cell.toolName ?? 'tool')
                    : record.cell.kind === 'message'
                      ? 'assistant'
                      : record.cell.kind
                  const rawSub = toolLike
                    ? String(record.cell.inputDetail ?? '')
                    : String(displayText ?? '')
                  const flatSub = rawSub.replace(/\s+/g, ' ').trim()
                  const rowSub = toolLike && flatSub.length > 180 ? `${flatSub.slice(0, 180)}…` : flatSub
                  const rowTone = record.cell.isError
                    ? 'error'
                    : stateOf(record) === 'running' ? 'running' : 'ok'
                  /* a failed call says why, in the row: the native ledger shows
                     `→ <error>` after the arguments and so does this one */
                  const rowErrorText = record.cell.isError === true && toolLike
                    ? String(record.cell.outputDetail ?? record.cell.result ?? '')
                      .replace(/\s+/g, ' ').trim()
                    : ''
                  const rowBarWidth = rowDurationMs == null
                    ? 0
                    : Math.max(2, Math.round((rowDurationMs / Math.max(1, maxDurationMs)) * 64))
                  const singleToolNotice = record.cell.kind === 'context'
                    && record.cell.sourceBlocks?.length === 1
                    && record.cell.sourceBlocks.every(block => block.type === 'tool-addition' || block.type === 'tool-removal')
                  return (
                    <tr
                      tabIndex={isRequestOnly || singleToolNotice ? -1 : 0}
                      aria-rowindex={position + 1}
                      aria-label={isCollapsedSummary
                        ? t('request.collapsedSummary', {
                          kind: t(COLLAPSED_SUMMARY_LABEL_KEY[summaryKind]),
                          summary: record.collapsedSummary,
                        })
                        : isRequestOnly
                          ? t('request.rowAriaCompaction', { request: request ?? '' })
                          : t('request.rowAria', {
                            request: request === undefined ? '' : t('request.rowPrefix', { request }),
                            kind: t(KIND_LABEL_KEY[record.cell.kind]),
                            content: listDisplayText || t('request.noContent'),
                          })}
                      aria-selected={!isCollapsedSummary && !isRequestOnly && selectedIndex === record.cell.index}
                      data-kind={record.cell.kind}
                      data-group-parity={(record.groupIndex ?? 0) % 2}
                      data-child-last={record.childLast || undefined}
                      data-level={level}
                      data-has-children={record.hasChildren || undefined}
                      data-has-fold={record.hasFold || undefined}
                      onMouseEnter={(event) => {
                        if (isRequestOnly) return
                        const x = event.clientX
                        const y = event.clientY
                        if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current)
                        setHoverCard({ x, y, record })
                      }}
                      onMouseLeave={() => {
                        if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current)
                        setHoverCard(null)
                      }}
                      data-trajectory-row-key={trajectoryVirtualRecordKey(record)}
                      data-virtual-position={virtualizationEnabled ? position : undefined}
                      data-record-index={!isCollapsedSummary && !isRequestOnly
                        ? record.cell.index
                        : undefined}
                      data-request-only={isRequestOnly || undefined}
                      data-terminal-request-boundary={terminalRequestBoundary || undefined}
                      data-group-start={record.groupStart || undefined}
                      data-turn-start={record.turnStart || undefined}
                      data-error={record.cell.isError || undefined}
                      data-running={stateOf(record) === 'running' || undefined}
                      data-turn-end={record.turnEnd || undefined}
                      data-collapsed-summary={record.collapsedSummaryKind}
                      data-selected={!isCollapsedSummary && selectedIndex === record.cell.index || undefined}
                      data-timeline-focus={isCollapsedSummary || timelineFocusIndexes === null
                        ? undefined
                        : timelineFocusIndexes.has(record.cell.index) ? 'inside' : 'outside'}
                      onClick={isRequestOnly || singleToolNotice
                        ? undefined
                        : isCollapsedSummary
                          ? () => { expandSummary(record, summaryKind) }
                          : () => { selectRecord(record.cell.index) }}
                      onDoubleClick={(event) => {
                        if (isCollapsedSummary || isRequestOnly || singleToolNotice) return
                        if (record.turn !== null && collapsedTurns.has(record.turn)) {
                          event.preventDefault()
                          onToggleTurn(record.turn)
                          return
                        }
                        if (
                          record.cell.kind === 'message'
                      && messagesWithCalls.has(record.cell.index)
                        ) {
                          event.preventDefault()
                          onToggleAssistant(trajectoryRecordId(record.cell))
                          return
                        }
                        if (!record.turnStart) return
                        if (record.turn === null) return
                        if (allRecords.filter(candidate =>
                          candidate.turn === record.turn
                      && candidate.cell.requestOnly !== true
                      && candidate.cell.kind !== 'system').length <= 1) return
                        event.preventDefault()
                        onToggleTurn(record.turn)
                      }}
                      onKeyDown={(event) => {
                        if (isRequestOnly || singleToolNotice) return
                        if (event.key === 'ArrowLeft') {
                          event.preventDefault()
                          const id = trajectoryRecordId(record.cell)
                          if (record.cell.kind === 'message' && collapsedAssistants.has(id) === false
                            && messagesWithCalls.has(record.cell.index)) {
                            onToggleAssistant(id)
                            return
                          }
                          if ((record.cell.kind === 'tool' || record.cell.kind === 'subtool')
                            && record.cell.callId !== undefined) {
                            const toolId = trajectoryRecordId(record.cell)
                            const hasChild = records[position + 1]?.cell.kind === 'subtool'
                            if (hasChild && !collapsedTools.has(toolId)) { onToggleTool(toolId); return }
                          }
                          if (record.turn !== null && !collapsedTurns.has(record.turn)) {
                            onToggleTurn(record.turn)
                            return
                          }
                          return
                        }
                        if (event.key === 'ArrowRight') {
                          event.preventDefault()
                          const id = trajectoryRecordId(record.cell)
                          if (record.cell.kind === 'message' && collapsedAssistants.has(id)) { onToggleAssistant(id); return }
                          if (record.turn !== null && collapsedTurns.has(record.turn)) { onToggleTurn(record.turn); return }
                          return
                        }
                        if (event.key === 'Home' || event.key === 'End') {
                          event.preventDefault()
                          const body = event.currentTarget.parentElement
                          if (body === null) return
                          const rows = [...body.querySelectorAll('tr[tabindex="0"]')]
                          const target = event.key === 'Home' ? rows[0] : rows[rows.length - 1]
                          if (target instanceof HTMLElement) target.focus()
                          return
                        }
                        if (event.key === 'ArrowDown' || event.key === 'j' || event.key === 'ArrowUp' || event.key === 'k') {
                          event.preventDefault()
                          const body = event.currentTarget.parentElement
                          if (body === null) return
                          const rows = [...body.querySelectorAll('tr[tabindex="0"]')]
                          const index = rows.indexOf(event.currentTarget)
                          const step = event.key === 'ArrowDown' || event.key === 'j' ? 1 : -1
                          const target = rows[index + step]
                          if (target instanceof HTMLElement) target.focus()
                          return
                        }
                        if (event.key !== 'Enter' && event.key !== ' ') return
                        event.preventDefault()
                        if (isCollapsedSummary) {
                          expandSummary(record, summaryKind)
                          return
                        }
                        selectRecord(record.cell.index)
                      }}
                    >
                      <td className={css.event}>
                        <span className={css.rowClock}>
                          {rowStartedAt != null ? formatClock(rowStartedAt) : ''}
                        </span>
                      </td>
                      <td className={css.content}>
                        {isRequestOnly
                          ? null
                          : (
                            <span
                              className={css.rowLine}
                              data-tone={rowTone}
                              data-mono={toolLike || undefined}
                              // CSS owns the geometry; markup only says which level this row is
                              style={{ '--bt-level': level } as CSSProperties}
                            >
                              <span className={css.rails} aria-hidden="true">
                                {[1, 2, 3].filter(axisLevel => level >= axisLevel).map(axisLevel => {
                                  /* one rail per ancestor level. It runs down while a later
                                     row still descends below that ancestor, and stops on the
                                     last one — `childLast` was "I have no children", which cut
                                     the message's rail at every tool and broke the line between
                                     sibling calls. */
                                  const stopsHere = nextRow === undefined
                                    || nextLevel <= axisLevel - 1
                                  return (
                                    <i
                                      key={axisLevel}
                                      className={css.rail}
                                      data-stop={stopsHere || undefined}
                                      style={{ '--bt-anc': axisLevel - 1 } as CSSProperties}
                                    />
                                  )
                                })}
                              </span>
                              {(() => {
                                const id = trajectoryRecordId(record.cell)
                                const collapsedHere = collapsedAssistants.has(id)
                                const messageFold = record.cell.kind === 'message'
                                  && (collapsedHere || messagesWithCalls.has(record.cell.index))
                                const next = records[position + 1]
                                const toolFold = toolLike && next !== undefined && next.cell.kind === 'subtool'
                                const turnFold = record.turnStart && record.turn !== null
                                  && !isCollapsedSummary
                                  && record.turnCollapsible === true
                                if (turnFold) {
                                  const collapsed = collapsedTurns.has(record.turn as number)
                                  return (
                                    <span
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(event) => {
                                        if (event.key !== 'Enter' && event.key !== ' ') return
                                        event.preventDefault()
                                        event.stopPropagation()
                                        event.currentTarget.click()
                                      }}
                                      className={css.rowChevron}
                                      aria-label={sectionLabel(record.turn, t)}
                                      aria-expanded={!collapsed}
                                      onDoubleClick={(event) => { event.stopPropagation() }}
                                      onClick={(event) => {
                                        event.stopPropagation()
                                        const collapsed = collapsedTurns.has(record.turn as number)
                                        if (collapsed && event.altKey) onClearDescendantFolds?.(record.turn)
                                        onToggleTurn(record.turn as number)
                                      }}
                                    >
                                      <ChevronIcon open={!collapsed} />
                                    </span>
                                  )
                                }
                                if (messageFold) {
                                  return (
                                    <span
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(event) => {
                                        if (event.key !== 'Enter' && event.key !== ' ') return
                                        event.preventDefault()
                                        event.stopPropagation()
                                        event.currentTarget.click()
                                      }}
                                      className={css.rowChevron}
                                      aria-label={t(collapsedHere ? 'assistant.expand' : 'assistant.collapse')}
                                      aria-expanded={!collapsedHere}
                                      onDoubleClick={(event) => { event.stopPropagation() }}
                                      onClick={(event) => {
                                        event.stopPropagation()
                                        if (collapsedHere && event.altKey) onClearDescendantFolds?.(record.turn, id)
                                        onToggleAssistant(id)
                                      }}
                                    >
                                      <ChevronIcon open={!collapsedHere} />
                                    </span>
                                  )
                                }
                                if (toolFold) {
                                  const folded = collapsedTools.has(id)
                                  return (
                                    <span
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(event) => {
                                        if (event.key !== 'Enter' && event.key !== ' ') return
                                        event.preventDefault()
                                        event.stopPropagation()
                                        event.currentTarget.click()
                                      }}
                                      className={css.rowChevron}
                                      aria-label={folded ? t('tool.expandSubCalls') : t('tool.collapseSubCalls')}
                                      aria-expanded={!folded}
                                      onDoubleClick={(event) => { event.stopPropagation() }}
                                      onClick={(event) => {
                                        event.stopPropagation()
                                        onToggleTool(id)
                                      }}
                                    >
                                      <ChevronIcon open={!folded} />
                                    </span>
                                  )
                                }
                                return <span className={css.rowChevronSpace} />
                              })()}
                              <span className={css.kindSlot}>
                                <KindTag
                                  kind={record.cell.kind}
                                  label={t(KIND_LABEL_KEY[record.cell.kind])}
                                />
                              </span>
                              {toolLike && <span className={css.rowName}>{rowName}</span>}
                              {rowTone !== 'ok' && (
                                <span className={css.rowBadge} data-tone={rowTone}>
                                  {rowTone === 'error' ? qt('row.error') : qt('row.running')}
                                </span>
                              )}
                              {record.foldSummary !== undefined && (
                                <span className={css.foldGroup}>
                                  {record.foldSummary.steps > 0 && (
                                    <span className={css.foldChip} data-kind="steps">{record.foldSummary.steps} 步</span>
                                  )}
                                  {record.foldSummary.tools > 0 && (
                                    <span className={css.foldChip} data-kind="tools">{record.foldSummary.tools} 工具</span>
                                  )}
                                  {record.foldSummary.durationMs != null && record.foldSummary.durationMs > 0 && (
                                    <span className={css.foldChip} data-kind="time">{compactDuration(record.foldSummary.durationMs)}</span>
                                  )}
                                </span>
                              )}
                              <span className={css.rowSub}>
                                {record.collapsedSummary !== undefined ? record.collapsedSummary : rowSub}
                              </span>
                              {rowErrorText !== '' && (
                                <span className={css.rowResult} title={rowErrorText}>
                                  <span className={css.rowResultArrow} aria-hidden="true">→</span>
                                  <span className={css.rowResultText}>{rowErrorText}</span>
                                </span>
                              )}
                              <span className={css.rowBarWrap}>
                                {rowBarWidth > 0 && (
                                  <span
                                    className={css.rowBar}
                                    data-tone={rowTone}
                                    style={{ width: `${rowBarWidth}px` }}
                                    aria-hidden="true"
                                  />
                                )}
                                <span className={css.rowMs}>
                                  {rowDurationMs == null || rowDurationMs <= 0 ? '—' : compactDuration(rowDurationMs)}
                                </span>
                              </span>
                            </span>
                          )}
                      </td>
                    </tr>
                  )
                }}
              </RecordPresentation>
            ))}
            {virtualBottom > 0 && (
              <tr className={css.virtualSpacer} data-virtual-spacer="bottom" aria-hidden="true">
                <td
                  colSpan={2}
                  style={{
                    '--trajectory-virtual-spacer-height': `${virtualBottom}px`,
                  } as VirtualSpacerStyle}
                />
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {(selectedRequestInfo !== undefined
        || (selected !== undefined && selectedState !== undefined)) && (
        <aside
          className={css.details}
          aria-label={t('details.event')}
          data-snapping={snapping || undefined}
          style={detailsWidth === null ? undefined : { width: detailsWidth }}
        >
          <div
            className={css.detailsResizeHandle}
            role="separator"
            aria-label={t('details.resize')}
            aria-controls="trajectory-detail-panel"
            aria-orientation="vertical"
            tabIndex={0}
            title={t('details.resizeTitle')}
            onDoubleClick={() => {
              setSnapping(true)
              setDetailsWidth(null)
              setToolRequestOffset(null)
              window.setTimeout(() => setSnapping(false), 240)
            }}
            onMouseDown={(event) => {
              if (event.button !== 0) return
              const handle = event.currentTarget
              const details = handle.parentElement
              if (details === null) return
              const split = details.parentElement
              if (split === null) return
              const startX = event.clientX
              const startWidth = details.getBoundingClientRect().width
              const splitWidth = split.getBoundingClientRect().width
              const startToolRequestOffset = toolRequestOffset ?? (
                splitWidth * TOOL_REQUEST_SHARE - defaultToolRequestWidth(splitWidth)
              )
              let latest = startWidth
              let moved = false
              const onMove = (moveEvent: MouseEvent) => {
                moved = true
                latest = clampDetailsWidth(startWidth + startX - moveEvent.clientX, splitWidth)
                setDetailsWidth(latest)
                setToolRequestOffset(startToolRequestOffset + (latest - startWidth) * TOOL_REQUEST_SHARE)
              }
              const onUp = () => {
                window.removeEventListener('mousemove', onMove)
                window.removeEventListener('mouseup', onUp)
                details.removeAttribute('data-dragging')
                if (!moved) return
                const targets = [420, 520, 640]
                const nearest = targets.reduce((best, value) =>
                  Math.abs(value - latest) < Math.abs(best - latest) ? value : best, targets[0])
                if (Math.abs(nearest - latest) <= 40) {
                  details.setAttribute('data-snapping', '')
                  details.style.width = `${nearest}px`
                  window.setTimeout(() => {
                    setDetailsWidth(nearest)
                    window.setTimeout(() => {
                      details.removeAttribute('data-snapping')
                      setSnapping(false)
                    }, 240)
                  }, 30)
                }
              }
              details.setAttribute('data-dragging', '')
              window.addEventListener('mousemove', onMove)
              window.addEventListener('mouseup', onUp)
              event.preventDefault()
            }}
            onKeyDown={(event) => {
              if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
              const details = event.currentTarget.parentElement
              if (details === null) return
              const split = details.parentElement
              if (split === null) return
              const direction = event.key === 'ArrowLeft' ? 1 : -1
              const currentDetailsWidth = details.getBoundingClientRect().width
              const splitWidth = split.getBoundingClientRect().width
              const nextDetailsWidth = clampDetailsWidth(
                currentDetailsWidth + direction * DETAILS_RESIZE_STEP,
                splitWidth,
              )
              const currentToolRequestOffset = toolRequestOffset ?? (
                splitWidth * TOOL_REQUEST_SHARE - defaultToolRequestWidth(splitWidth)
              )
              setSnapping(true)
              setDetailsWidth(nextDetailsWidth)
              setToolRequestOffset(
                currentToolRequestOffset
                + (nextDetailsWidth - currentDetailsWidth) * TOOL_REQUEST_SHARE,
              )
              window.setTimeout(() => setSnapping(false), 240)
              event.preventDefault()
            }}
          />
          <div className={css.detailsHeader}>
            <div className={css.detailsTitle}>
              {selectedRequestInfo !== undefined
                ? (
                  <>
                    <span className={css.requestDetailsDot} aria-hidden="true" />
                    <span className={css.requestDetailsName}>
                      {t('request.label', { request: selectedRequestNumber ?? '—' })}
                    </span>
                    <span className={css.detailsLocation}>
                      {selectedRequestInfo.purpose === 'compaction'
                        ? t('request.compaction', { section: sectionLabel(selectedRequestInfo.turn, t) })
                        : sectionLabel(selectedRequestInfo.turn, t)}
                    </span>
                  </>
                )
                : selected !== undefined && (
                    <>
                      <span className={`${css.kindTag} ${
                        selected.cell.kind === 'context'
                          ? css.contextGreen
                          : selected.cell.kind === 'compacted'
                            ? css.compacted
                            : selected.cell.kind === 'tool'
                              ? css.toolAmber
                              : selected.cell.kind === 'message'
                                ? css.assistantVioletBright
                                : selected.cell.kind === 'subtool'
                                  ? css.subtoolAmber
                                  : css[selected.cell.kind]
                      }`}
                      >
                        {selected.cell.kind === 'tool' || selected.cell.kind === 'subtool'
                          ? (selected.cell.toolName ?? t(KIND_LABEL_KEY[selected.cell.kind]))
                          : t(KIND_LABEL_KEY[selected.cell.kind])}
                      </span>
                      <span className={css.detailsLocation}>
                        {selected.cell.kind === 'compacted'
                          ? sectionLabel(selected.turn, t)
                          : `${sectionLabel(selected.turn, t)} · ${selected.group}`}
                      </span>
                    </>
                  )}
            </div>
            {selected !== undefined && selectedRequestInfo === undefined && (() => (
              <span className={css.headActions}>
                <button
                  type="button"
                  className={css.headAction}
                  title={qt('head.locate')}
                  aria-label={qt('head.locate')}
                  onClick={() => { locateSelected(selected) }}
                >
                  ⌖
                </button>
              </span>
            ))()}
            <button
              type="button"
              className={css.close}
              aria-label={t('details.close')}
              onClick={clearInspectorSelection}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {selected !== undefined && selectedRequestInfo === undefined
            && primarySubject(selected) !== '' && (
            <div className={css.detailsSubject} data-copy-reveal>
              <span className={css.detailsSubjectText}>{primarySubject(selected)}</span>
              {(selected.cell.kind === 'tool' || selected.cell.kind === 'subtool')
                && selected.cell.inputDetail !== undefined
                && selected.cell.inputDetail !== '' && (
                <CopyButton
                  text={selected.cell.inputDetail}
                  label={qt('head.copyArgs')}
                  copiedLabel={qt('copied')}
                  failedLabel={qt('copy.failed')}
                />
              )}
            </div>
          )}
          <div className={css.detailTabs} role="tablist" aria-label={t('details.event')}>
            {selectedTabs.map(tab => (
              <button
                key={tab.id}
                id={`trajectory-detail-${tab.id}`}
                type="button"
                role="tab"
                aria-controls="trajectory-detail-panel"
                aria-selected={activeTab === tab.id}
                className={activeTab === tab.id ? `${css.detailTab} ${css.detailTabActive}` : css.detailTab}
                onClick={() => { activateTab(tab.id) }}
              >
                {tab.custom === true ? qt(tab.labelKey) : t(tab.labelKey)}
              </button>
            ))}
          </div>
          <div
            id="trajectory-detail-panel"
            key={selectedRecordId ?? 'none'}
            className={activeTab === 'overview' || activeTab === 'timing'
              ? `${css.detailBody} ${css.detailBodySummary}`
              : selectedProgram !== undefined && activeTab === 'preview'
                ? `${css.detailBody} ${css.detailBodyProgram}`
                : css.detailBody}
            role="tabpanel"
            aria-labelledby={`trajectory-detail-${activeTab}`}
          >
            {selectedRequestInfo !== undefined
              && selectedRequestState !== undefined
              && activeTab === 'overview' && (
              <>
                <dl
                  className={`${css.overview} ${css.summaryScrollRegion}`}
                  data-summary-scroll-region=""
                >
                  <div>
                    <dt>{qt('chip.status')}</dt>
                    <dd className={selectedRequestState === 'error' ? css.error : undefined}>
                      {statusLabel(selectedRequestState, t)}
                    </dd>
                  </div>
                  {selectedRequestInfo.purpose === 'compaction' && (
                    <div>
                      <dt>{t('details.purpose')}</dt>
                      <dd>{t('request.compactionPurpose')}</dd>
                    </div>
                  )}
                  {(selectedRequestInfo.provider
                    ?? selectedRequestInfo.requestConfig?.provider) !== undefined && (
                    <div>
                      <dt>{t('details.provider')}</dt>
                      <dd>
                        {selectedRequestInfo.provider
                          ?? selectedRequestInfo.requestConfig?.provider}
                      </dd>
                    </div>
                  )}
                  {(selectedRequestInfo.model
                    ?? selectedRequestInfo.requestConfig?.model) !== undefined && (
                    <div>
                      <dt>{t('details.model')}</dt>
                      <dd>
                        {selectedRequestInfo.model
                          ?? selectedRequestInfo.requestConfig?.model}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt>{t('details.toolCalls')}</dt>
                    <dd>{selectedRequestToolCalls}</dd>
                  </div>
                  {selectedRequestSubtoolCalls > 0 && (
                    <div>
                      <dt>{t('details.subtoolCalls')}</dt>
                      <dd>{selectedRequestSubtoolCalls}</dd>
                    </div>
                  )}
                  {selectedRequestInfo.error !== undefined && (
                    <div>
                      <dt>{t(selectedRequestState !== 'error' && selectedRequestInfo.retry !== undefined
                        ? 'details.lastAttemptError'
                        : 'details.error')}</dt>
                      <dd className={selectedRequestState === 'error' ? css.error : undefined}>
                        {requestErrorMessage(selectedRequestInfo, t)}
                      </dd>
                    </div>
                  )}
                  {selectedRequestInfo.retry !== undefined && (
                    <div>
                      <dt>{t('details.retry')}</dt>
                      <dd>
                        {selectedRequestInfo.maxRetries === undefined
                          ? selectedRequestInfo.retry
                          : t('request.retryProgress', {
                            retry: selectedRequestInfo.retry,
                            maximum: selectedRequestInfo.maxRetries,
                          })}
                      </dd>
                    </div>
                  )}
                  {selectedRequestInfo.retryDelayMs !== undefined && (
                    <div>
                      <dt>{t('details.retryDelay')}</dt>
                      <dd>{formatDurationMs(selectedRequestInfo.retryDelayMs, t)}</dd>
                    </div>
                  )}
                  {selectedRequestResult !== undefined && (
                    <div>
                      <dt>{t('details.result')}</dt>
                      <dd className={css.overviewParentLinks}>
                        <button
                          type="button"
                          className={css.overviewHierarchyNavLink}
                          onClick={() => {
                            openRecordSummary(selectedRequestResult)
                          }}
                        >
                          <span>
                            {selectedRequestInfo.purpose === 'compaction'
                              ? t('details.compacted')
                              : t('details.assistantMessage')}
                          </span>
                          <IconChevronRightOutlineRegular
                            className={css.overviewHierarchyJumpIconTight}
                            size={11}
                          />
                        </button>
                      </dd>
                    </div>
                  )}
                </dl>
                <div className={css.overviewSections}>
                  {selectedRequestOptions !== undefined && (
                    <OverviewSection label={t('tab.options')} onOpen={() => { activateTab('options') }}>
                      <RequestOptions options={selectedRequestOptions} preview stringWrapping={stringWrapping} t={t} />
                    </OverviewSection>
                  )}
                  <OverviewSection label={t('tab.usage')} onOpen={() => { activateTab('usage') }}>
                    <UsageRows usage={selectedRequestUsage} t={t} />
                  </OverviewSection>
                  <OverviewSection label={qt('tab.stats')} onOpen={() => { activateTab('timing') }}>
                    <RequestTiming
                      assistant={selectedRequestAssistant}
                      anchor={selectedRequestAnchor}
                      request={selectedRequestInfo}
                      preview
                      t={t}
                    />
                  </OverviewSection>
                </div>
              </>
            )}
            {selectedRequestInfo !== undefined && activeTab === 'options' && (
              <RequestOptions options={selectedRequestOptions} stringWrapping={stringWrapping} t={t} />
            )}
            {selectedRequestInfo !== undefined && activeTab === 'usage' && (
              <RequestUsagePanel
                usage={selectedRequestUsage}
                cumulative={selectedRequestCumulativeUsage}
                t={t}
              />
            )}
            {selectedRequestInfo !== undefined && activeTab === 'timing' && (
              <RequestTiming
                assistant={selectedRequestAssistant}
                anchor={selectedRequestAnchor}
                request={selectedRequestInfo}
                t={t}
              />
            )}
            {selectedRequestInfo === undefined && selected !== undefined
              && selectedState !== undefined && (() => {
                const cell = selected.cell
                const toolLike = cell.kind === 'tool' || cell.kind === 'subtool'
                const argsText = cell.inputDetail ?? ''
                const args = parseMaybeJson(cell.inputDetail)
                const isBranch = (value: unknown): boolean => value !== null && typeof value === 'object'
                const schema = parseMaybeJson(cell.schemaDetail)
                const systemPrompt = selectedPrompt?.system ?? cell.systemPromptDetail
                const tokens: { label: string; value: number }[] = []
                if (cell.input !== undefined) tokens.push({ label: t('usage.input'), value: cell.input })
                if (cell.cacheRead !== undefined) tokens.push({ label: t('usage.cached'), value: cell.cacheRead })
                if (cell.cacheWrite !== undefined) tokens.push({ label: t('usage.cacheCreated'), value: cell.cacheWrite })
                if (cell.output !== undefined) tokens.push({ label: t('usage.output'), value: cell.output })
                if (cell.think !== undefined) tokens.push({ label: t('usage.reasoning'), value: cell.think })

                if (activeTab === 'overview') {
                  return (
                    <div className={css.recordSummary}>
                      <dl className={`${css.overview} ${css.recordFields}`}>
                        <Field
                          label={qt('chip.status')}
                          tone={selectedState === 'error'
                            ? 'error'
                            : selectedState === 'running' ? 'warn' : undefined}
                        >
                          {statusLabel(selectedState, t)}
                        </Field>
                        {cell.kind === 'message' && cell.output !== undefined && (
                          <Field label={t('usage.tokens')}>
                            {t('unit.tokens', { value: cell.output })}
                          </Field>
                        )}
                        {cell.kind === 'message' && cell.think !== undefined && (
                          <Field label={t('usage.reasoning')}>
                            {t('unit.tokens', { value: cell.think })}
                          </Field>
                        )}
                        {cell.startedAt != null && (
                          <Field label={t('timing.started')}>
                            {formatClock(cell.startedAt)}
                          </Field>
                        )}
                        {cell.timeSeconds !== null && (
                          <Field label={qt('chip.duration')}>
                            {cell.timeSeconds > 0
                              ? compactDuration(Math.round(cell.timeSeconds * 1_000))
                              : '—'}
                          </Field>
                        )}
                        {cell.messageSource !== undefined && (
                          <Field label={t('details.source')}>
                            {messageSourceLabel(cell.messageSource, t)}
                          </Field>
                        )}
                        {hasSelectedHierarchy && (
                          <Field label={t('details.hierarchy')} wrap>
                            {selectedAssistantRequestTarget !== undefined && (
                              <button
                                type="button"
                                className={css.metaLink}
                                onClick={() => { selectRequest(selectedAssistantRequestTarget) }}
                              >
                                {t('request.label', { request: selectedAssistantRequest ?? '—' })}
                                <IconChevronRightOutlineRegular size={11} aria-hidden="true" />
                              </button>
                            )}
                            {selectedParentMessage !== undefined && (
                              <button
                                type="button"
                                className={css.metaLink}
                                onClick={() => { openRecordSummary(selectedParentMessage) }}
                              >
                                {t('details.assistantMessage')}
                                <IconChevronRightOutlineRegular size={11} aria-hidden="true" />
                              </button>
                            )}
                            {selectedParentTool !== undefined && (
                              <button
                                type="button"
                                className={css.metaLink}
                                onClick={() => { openRecordSummary(selectedParentTool) }}
                              >
                                {t('details.toolCall')}
                                <IconChevronRightOutlineRegular size={11} aria-hidden="true" />
                              </button>
                            )}
                          </Field>
                        )}
                        {cell.callId !== undefined && (
                          <Field
                            label={qt('chip.callId')}
                            mono
                            actions={(
                              <CopyButton
                                text={cell.callId}
                                label={qt('chip.callId')}
                                copiedLabel={qt('copied')}
                                failedLabel={qt('copy.failed')}
                              />
                            )}
                          >
                            {cell.callId}
                          </Field>
                        )}
                      </dl>
                      {toolLike && argsText !== '' && (
                        <DetailSection
                          title={t('tab.payload')}
                          badge={payloadBadge(isBranch(args) ? args : argsText, qt)}
                          defaultOpen
                          bare={selectedProgram === undefined && isBranch(args)}
                        >
                          {selectedProgram !== undefined
                            ? (
                              <ProgramInput
                                key={`args:${selectedRecordId}`}
                                program={selectedProgram}
                                initialWrapped={codeWrappingOnOpen}
                                stringWrapping={stringWrapping}
                                t={t}
                              />
                            )
                            : isBranch(args)
                              ? <RawDataPanel data={args} qt={qt} bare />
                              : <DetailText text={argsText} full />}
                        </DetailSection>
                      )}
                      {toolLike && isBranch(schema) && (
                        <DetailSection
                          title={t('tab.schema')}
                          badge={payloadBadge(schema, qt)}
                          defaultOpen={false}
                          bare
                        >
                          <RawDataPanel data={schema} qt={qt} bare />
                        </DetailSection>
                      )}
                      {cell.kind === 'system' && selectedPrompt !== undefined && (
                        <DetailSection
                          title={t('tab.tools')}
                          badge={payloadBadge(selectedPrompt.tools, qt)}
                          defaultOpen={false}
                        >
                          <ToolCatalog
                            tools={selectedPrompt.tools}
                            stringWrapping={stringWrapping}
                            t={t}
                          />
                        </DetailSection>
                      )}
                    </div>
                  )
                }
                if (activeTab === 'preview') {
                  return (
                    <div className={css.recordPreview}>
                      {cell.kind === 'system' && (
                        systemPrompt === undefined || systemPrompt === ''
                          ? <p className={css.noPayload}>{t('record.systemPromptMissing')}</p>
                          : (
                            <div className={`${css.markdownPayload} ${css.systemPrompt}`}>
                              <MarkdownText text={systemPrompt} labels={markdownLabels(t)} />
                            </div>
                          )
                      )}
                      {cell.kind === 'system' && selectedPreviousPrompt !== undefined
                        && selectedPrompt !== undefined && (
                        <DetailSection title={t('tab.diff')} defaultOpen={false}>
                          <SystemPromptDiff
                            before={selectedPreviousPrompt}
                            after={selectedPrompt}
                            t={t}
                          />
                        </DetailSection>
                      )}
                      {toolLike && (
                        selectedProgram !== undefined
                          ? <ProgramOutput record={selected} stringWrapping={stringWrapping} t={t} />
                          : (
                            <div className={css.resultSections}>
                              <RecordPayload
                                record={selected}
                                direction="output"
                                renderSlot={renderSlot}
                                loadImage={loadImage}
                                stringWrapping={stringWrapping}
                                t={t}
                              />
                            </div>
                          )
                      )}
                      {!toolLike && cell.kind !== 'system' && (
                        <MarkdownRecordContent
                          record={selected}
                          renderSlot={renderSlot}
                          loadImage={loadImage}
                          rendered
                          thinkingExpanded={thinkingExpanded}
                          onThinkingExpandedChange={setThinkingExpanded}
                          onOpenCall={openCallSummary}
                          t={t}
                        />
                      )}
                    </div>
                  )
                }
                if (activeTab === 'timing') {
                  return (
                    <div className={css.recordSummary}>
                      <RecordTiming
                        record={selected}
                        t={t}
                        extra={tokens.length === 0 ? undefined : (
                          <>
                            {tokens.map(token => (
                              <div key={token.label}>
                                <dt>{token.label}</dt>
                                <dd>{t('unit.tokens', { value: token.value })}</dd>
                              </div>
                            ))}
                          </>
                        )}
                      />
                    </div>
                  )
                }
                return <RawDataPanel data={rawDataFor(selected)} qt={qt} />
              })()}
          </div>
        </aside>
      )}
      {hoverCard !== null && (() => {
        const card = hoverCard
        const { record } = card
        const meta = record.cell.callId === undefined ? undefined : callMeta?.get(record.cell.callId)
        const ms = record.cell.timeSeconds !== null
          ? Math.round(record.cell.timeSeconds * 1000)
          : meta?.durationMs
        const args = String(record.cell.inputDetail ?? '').replace(/\s+/g, ' ').slice(0, 220)
        const kind = record.cell.kind
        const rows = [
          { label: qt('chip.turn'), value: `#${record.turn ?? '—'} · ${record.group}` },
          { label: qt('chip.duration'), value: ms == null ? '—' : compactDuration(ms) },
        ]
        if (meta?.time !== undefined) rows.push({ label: '开始', value: formatClock(meta.time) })
        return (
          <HoverCard
            x={card.x}
            y={card.y}
            kind={kind}
            label={t(KIND_LABEL_KEY[kind])}
            name={record.cell.toolName}
            isError={record.cell.isError === true}
            rows={rows}
            extra={args}
          />
        )
      })()}
    </div>
  )
}
