/**
 * Better Trajectory 视图。
 *
 * 数据来自内置 `trajectory` target 的同一份快照（经 `useTrajectory` 注入），
 * 这里只做投影与呈现，不重新解析会话日志，也不改动原生轨迹页签。设计目标
 * 是调试时的「切片」：按工具名、状态、回合、类型与全文搜索收敛记录，再看
 * 单条的完整参数 / 结果。
 */
import {
  useCallback, useDeferredValue, useEffect, useMemo, useRef, useState,
} from 'react'
import type {
  CSSProperties, KeyboardEvent as ReactKeyboardEvent, ReactNode,
} from 'react'

import {
  buildRows, collectFacets, emptyFilters, filterRows, formatClock, formatDateTime,
  formatDuration, oneLine, prettyJson, summarize,
} from './rows.mjs'
import { rowToText, rowsToJson, rowsToMarkdown } from './export.mjs'
import type { BetterTrajectoryKey } from './locales'
import {
  IconArchive, IconArrowDown, IconCheck, IconChevron, IconClose, IconContext,
  IconCopy, IconDownload, IconError, IconFilter, IconMessage, IconRetry,
  IconSearch, IconSpark, IconSpinner, IconTerminal, IconTool,
} from './icons'

/** 视图依赖的最小快照形状（内置 trajectory target 的超集）。 */
export interface TrajectorySnapshotLike {
  eventNodes?: readonly unknown[]
  eventLocations?: Map<number, unknown>
  requests?: readonly unknown[]
  callSchemas?: Map<string, unknown>
  partial?: unknown
  runningCalls?: readonly unknown[]
}

/** 投影后的一行（`rows.mjs` 的 DebugRow 的 TS 镜像）。 */
export type RowKind = 'tool' | 'assistant' | 'user' | 'steering' | 'context' | 'error'
  | 'command' | 'compaction' | 'retry' | 'max-tokens' | 'unknown'
export type RowStatus = 'ok' | 'error' | 'running' | 'interrupted' | 'neutral'

export interface DebugRow {
  id: string
  kind: RowKind
  status: RowStatus
  seq: number
  time: number
  turn?: number
  step?: number
  name?: string
  title?: string
  preview: string
  text: string
  callId?: string
  parentCallId?: string
  depth?: number
  durationMs?: number
  args?: string
  argsRaw?: string
  result?: string
  error?: string
  errorName?: string
  errorCode?: string
  usage?: Record<string, number>
  requestStatus?: string
  meta?: string
}

/** 筛选状态。 */
interface Filters {
  query: string
  tools: string[]
  statuses: string[]
  kinds: string[]
  turns: number[]
}

/** 页面文案函数（槽位注入的 `t`）。 */
type Translate = (key: string, params?: Record<string, string | number>) => string

/** 槽位注入的 props；其余会话 props 与本视图无关。 */
export interface BetterTrajectoryViewProps {
  sessionId?: string
  useTrajectory?: <T>(selector: (snapshot: TrajectorySnapshotLike) => T) => T
  useSession?: <T>(selector: (snapshot: { hasMore?: boolean, loadingOlder?: boolean }) => T) => T
  t?: Translate
  loadOlder?: () => Promise<boolean>
}

const EMPTY_SNAPSHOT: TrajectorySnapshotLike = {
  eventNodes: [],
  eventLocations: new Map(),
  requests: [],
  callSchemas: new Map(),
  partial: null,
  runningCalls: [],
}

const MESSAGE_KINDS = ['assistant', 'user', 'steering']
const OTHER_KINDS = ['context', 'error', 'command', 'compaction', 'retry', 'max-tokens', 'unknown']
const VISIBLE_STEP = 250
const DISPLAY_LIMIT = 200_000
const STORAGE_PREFIX = 'dsh-better-trajectory:filters:'

function selectWholeSnapshot(snapshot: TrajectorySnapshotLike): TrajectorySnapshotLike {
  return snapshot
}

function useEmptyTrajectory<T>(selector: (snapshot: TrajectorySnapshotLike) => T): T {
  return selector(EMPTY_SNAPSHOT)
}

const EMPTY_SESSION = { hasMore: true }
function selectSession(snapshot: { hasMore?: boolean, loadingOlder?: boolean }) {
  return snapshot
}
function useEmptySession<T>(selector: (snapshot: { hasMore?: boolean }) => T): T {
  return selector(EMPTY_SESSION)
}

/** sessionStorage 里读回筛选；坏数据静默退回默认值。 */
function loadFilters(sessionId?: string): Filters {
  const fallback: Filters = emptyFilters()
  if (typeof window === 'undefined' || !sessionId) return fallback
  try {
    const raw = window.sessionStorage.getItem(`${STORAGE_PREFIX}${sessionId}`)
    if (raw === null) return fallback
    const value = JSON.parse(raw) as Partial<Filters>
    return {
      query: typeof value.query === 'string' ? value.query : '',
      tools: Array.isArray(value.tools) ? value.tools.filter(item => typeof item === 'string') : [],
      statuses: Array.isArray(value.statuses) ? value.statuses.filter(item => typeof item === 'string') : [],
      kinds: Array.isArray(value.kinds) ? value.kinds.filter(item => typeof item === 'string') : [],
      turns: Array.isArray(value.turns) ? value.turns.filter(item => typeof item === 'number') : [],
    }
  } catch {
    return fallback
  }
}

function persistFilters(sessionId: string | undefined, filters: Filters): void {
  if (typeof window === 'undefined' || !sessionId) return
  try {
    window.sessionStorage.setItem(`${STORAGE_PREFIX}${sessionId}`, JSON.stringify(filters))
  } catch {
    // 隐私模式 / 存储配额满：筛选仍然有效，只是不跨页签记住。
  }
}

function sameStrings(left: readonly string[], right: readonly string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index])
}

function kindLabelKey(kind: string): BetterTrajectoryKey {
  const known: Record<string, BetterTrajectoryKey> = {
    tool: 'kind.tool',
    assistant: 'kind.assistant',
    user: 'kind.user',
    steering: 'kind.steering',
    context: 'kind.context',
    error: 'kind.error',
    command: 'kind.command',
    compaction: 'kind.compaction',
    retry: 'kind.retry',
    'max-tokens': 'kind.maxTokens',
    unknown: 'kind.unknown',
  }
  return known[kind] ?? 'kind.unknown'
}

function statusLabelKey(status: string): BetterTrajectoryKey {
  const known: Record<string, BetterTrajectoryKey> = {
    ok: 'status.ok',
    error: 'status.error',
    running: 'status.running',
    interrupted: 'status.interrupted',
    neutral: 'status.neutral',
  }
  return known[status] ?? 'status.neutral'
}

function kindIcon(kind: string): ReactNode {
  switch (kind) {
    case 'tool': return <IconTool size={12} />
    case 'assistant': return <IconSpark size={12} />
    case 'user': return <IconMessage size={12} />
    case 'steering': return <IconMessage size={12} />
    case 'context': return <IconContext size={12} />
    case 'error': return <IconError size={12} />
    case 'command': return <IconTerminal size={12} />
    case 'compaction': return <IconArchive size={12} />
    case 'retry': return <IconRetry size={12} />
    case 'max-tokens': return <IconError size={12} />
    default: return <IconContext size={12} />
  }
}

function displayName(row: DebugRow, t: Translate): string {
  if (row.kind === 'tool') return row.name || row.callId || t('kind.tool')
  if (row.kind === 'assistant' || row.kind === 'user' || row.kind === 'steering') {
    return t(kindLabelKey(row.kind))
  }
  if (row.kind === 'error') return t('kind.error')
  if (row.name) return row.name
  return t(kindLabelKey(row.kind))
}

function turnText(row: DebugRow): string {
  if (typeof row.turn !== 'number') return '—'
  return typeof row.step === 'number' ? `T${row.turn}.${row.step}` : `T${row.turn}`
}

function clampForDisplay(text: string | undefined): { text: string, truncated: boolean } {
  const value = text ?? ''
  return value.length > DISPLAY_LIMIT
    ? { text: value.slice(0, DISPLAY_LIMIT), truncated: true }
    : { text: value, truncated: false }
}

/** 点击外部 / Esc 关闭浮层。 */
function useDismissable(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!open) return
    const onPointer = (event: MouseEvent) => {
      if (ref.current !== null && event.target instanceof Node && !ref.current.contains(event.target)) close()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])
  return ref
}

async function writeClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // 退回到 execCommand（部分浏览器 / 非安全上下文）。
  }
  try {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    area.remove()
    return ok
  } catch {
    return false
  }
}

function downloadJson(text: string, sessionId?: string): void {
  const blob = new Blob([text], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `better-trajectory-${sessionId ?? 'session'}.json`
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000)
}

/**
 * 一行的详情区块：标题、复制、可选格式化 / 换行开关、正文。
 */
function Section({
  title, text, copyLabel, onCopy, tone, wrap, pretty, canPretty, onTogglePretty,
  prettyTitle, truncatedNote, children,
}: {
  title: string
  text?: string
  copyLabel: string
  onCopy: (text: string) => void
  tone?: 'error'
  wrap: boolean
  pretty?: boolean
  canPretty?: boolean
  onTogglePretty?: () => void
  prettyTitle?: string
  truncatedNote?: string
  children?: ReactNode
}) {
  const view = clampForDisplay(text)
  if ((text ?? '') === '' && children === undefined) return null
  return (
    <section className="bt-section">
      <div className="bt-section-head">
        <span className="bt-section-title">{title}</span>
        {canPretty === true && onTogglePretty !== undefined ? (
          <button
            type="button"
            className="bt-link-button"
            onClick={onTogglePretty}
            aria-pressed={pretty}
            title={prettyTitle}
            aria-label={prettyTitle}
          >
            {'{}'}
          </button>
        ) : null}
        <button
          type="button"
          className="bt-icon-button"
          title={copyLabel}
          aria-label={copyLabel}
          onClick={() => onCopy(text ?? '')}
        >
          <IconCopy size={12} />
        </button>
      </div>
      {children}
      {(text ?? '') !== '' ? (
        <pre
          className={tone === 'error' ? 'bt-error-block' : 'bt-pre'}
          data-wrap={wrap ? 'true' : 'false'}
        >
          {view.text}
        </pre>
      ) : null}
      {view.truncated ? <div className="bt-note">{truncatedNote ?? '…'}</div> : null}
    </section>
  )
}

/** 错误区块文本：身份行只保留一次，避免 name/code 在前缀与原文里重复。 */
function errorText(row: DebugRow): string {
  const identity = [row.errorName, row.errorCode].filter(value => value !== undefined && value !== '').join(' · ')
  let body = row.error ?? ''
  if (identity !== '' && body.startsWith(identity)) {
    body = body.slice(identity.length).replace(/^[\s·:—-]+/u, '')
  }
  return [identity, body].filter(value => value !== '').join('\n')
}

/** 主视图组件。 */
export function BetterTrajectoryView({
  sessionId, useTrajectory, useSession, t, loadOlder,
}: BetterTrajectoryViewProps) {
  const translate: Translate = typeof t === 'function' ? t : (key => key)
  const useSnapshot = useTrajectory ?? useEmptyTrajectory
  const snapshot = useSnapshot(selectWholeSnapshot)
  const useSessionSnapshot = useSession ?? useEmptySession
  const sessionState = useSessionSnapshot(selectSession)
  const hasHook = typeof useTrajectory === 'function'
  const hasMore = sessionState?.hasMore !== false

  const [filters, setFilters] = useState<Filters>(() => loadFilters(sessionId))
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [visibleStep, setVisibleStep] = useState(VISIBLE_STEP)
  const [toolMenu, setToolMenu] = useState(false)
  const [toolSearch, setToolSearch] = useState('')
  const [copyMenu, setCopyMenu] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [wrap, setWrap] = useState(true)
  const [prettyResult, setPrettyResult] = useState(false)
  const [older, setOlder] = useState<'idle' | 'loading' | 'done'>('idle')
  const [atBottom, setAtBottom] = useState(true)

  const searchRef = useRef<HTMLInputElement | null>(null)
  const toolSearchRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)
  const pinnedInitial = useRef(false)
  const lastFilterKey = useRef<string | null>(null)
  const atBottomRef = useRef(true)

  const rows = useMemo<DebugRow[]>(() => buildRows(snapshot) as DebugRow[], [snapshot])

  // 输入延迟一帧落地：工具输出可能很大，按键本身不能被过滤拖慢。
  const deferredQuery = useDeferredValue(filters.query)
  const effectiveFilters = useMemo<Filters>(
    () => ({ ...filters, query: deferredQuery }),
    [filters, deferredQuery],
  )

  const filtered = useMemo(
    () => filterRows(rows, effectiveFilters as any) as DebugRow[],
    // filters 的数组身份在每次 setState 时都会变，逐项列出避免无意义重算。
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rows, effectiveFilters],
  )
  const facets = useMemo(() => collectFacets(rows, effectiveFilters as any), [rows, effectiveFilters])
  const stats = useMemo(() => summarize(filtered), [filtered])
  const selected = useMemo(
    () => filtered.find(row => row.id === selectedId) ?? null,
    [filtered, selectedId],
  )

  const filterKey = JSON.stringify([
    effectiveFilters.query, effectiveFilters.tools, effectiveFilters.statuses,
    effectiveFilters.kinds, effectiveFilters.turns,
  ])

  const closeToolMenu = useCallback(() => setToolMenu(false), [])
  const closeCopyMenu = useCallback(() => setCopyMenu(false), [])
  const toolPopRef = useDismissable(toolMenu, closeToolMenu)
  const copyPopRef = useDismissable(copyMenu, closeCopyMenu)

  // 筛选跨页签记住（视图切换会卸载组件）。
  useEffect(() => {
    persistFilters(sessionId, filters)
  }, [sessionId, filters])

  // 选中行被筛掉时收起详情。
  useEffect(() => {
    if (selectedId !== null && selected === null) setSelectedId(null)
  }, [selectedId, selected])

  // 筛选变化：回到结果顶部并重置「显示更多」。初次挂载不算变化。
  useEffect(() => {
    if (lastFilterKey.current === null) {
      lastFilterKey.current = filterKey
      return
    }
    if (lastFilterKey.current === filterKey) return
    lastFilterKey.current = filterKey
    const element = listRef.current
    if (element !== null) element.scrollTop = 0
    atBottomRef.current = false
    setAtBottom(false)
    setVisibleStep(VISIBLE_STEP)
  }, [filterKey])

  // 初次拿到数据：没有筛选时贴住最新（与原生轨迹一致），有筛选时停在顶部。
  useEffect(() => {
    if (rows.length === 0 || pinnedInitial.current) return
    pinnedInitial.current = true
    const element = listRef.current
    if (element === null) return
    const filteredNow = filters.query.trim() !== ''
      || filters.tools.length > 0 || filters.statuses.length > 0
      || filters.kinds.length > 0 || filters.turns.length > 0
    if (filteredNow) {
      element.scrollTop = 0
      atBottomRef.current = false
      setAtBottom(false)
      return
    }
    element.scrollTop = element.scrollHeight
    atBottomRef.current = true
    setAtBottom(true)
    // filters 只在首次有数据时读取一次。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows.length])

  // 已经在底部时跟随新记录。
  useEffect(() => {
    const element = listRef.current
    if (element !== null && atBottomRef.current) element.scrollTop = element.scrollHeight
  }, [filtered.length, visibleStep])

  // 选中行的详情重置格式化开关。
  useEffect(() => {
    setPrettyResult(false)
  }, [selected?.id])

  // 复制反馈自动消失。
  useEffect(() => {
    if (toast === null) return
    const timer = window.setTimeout(() => setToast(null), 1_800)
    return () => window.clearTimeout(timer)
  }, [toast])

  // `/` 聚焦搜索。
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target
      if (target instanceof HTMLElement
        && target.closest('input, textarea, select, [contenteditable="true"]') !== null) return
      event.preventDefault()
      searchRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // 打开工具浮层时聚焦过滤框。
  useEffect(() => {
    if (!toolMenu) {
      setToolSearch('')
      return
    }
    const timer = window.setTimeout(() => toolSearchRef.current?.focus(), 0)
    return () => window.clearTimeout(timer)
  }, [toolMenu])

  const toastMessage = useCallback((message: string) => {
    setToast(message)
  }, [])

  const copy = useCallback(async (text: string, message?: string) => {
    const ok = await writeClipboard(text)
    toastMessage(ok
      ? (message ?? translate('toolbar.copy.done'))
      : translate('toolbar.copy.failed'))
  }, [toastMessage, translate])

  const activeCount = filters.tools.length + filters.statuses.length
    + filters.kinds.length + filters.turns.length + (filters.query.trim() === '' ? 0 : 1)

  const toolOptions = useMemo(() => {
    const options = facets.tools.map(item => ({ ...item }))
    for (const name of filters.tools) {
      if (!options.some(item => item.name === name)) options.unshift({ name, count: 0 })
    }
    const term = toolSearch.trim().toLowerCase()
    return term === '' ? options : options.filter(item => item.name.toLowerCase().includes(term))
  }, [facets.tools, filters.tools, toolSearch])

  const shown = filtered.slice(0, visibleStep)
  const remaining = filtered.length - shown.length

  const kindChoice = filters.kinds.length === 0
    ? 'all'
    : filters.kinds.length === 1 && filters.kinds[0] === 'tool'
      ? 'tools'
      : sameStrings(filters.kinds, MESSAGE_KINDS) ? 'messages'
        : sameStrings(filters.kinds, OTHER_KINDS) ? 'other' : 'all'

  const statusChoice = filters.statuses.length === 1 ? filters.statuses[0]
    : filters.statuses.length === 0 ? 'all' : 'all'

  const turnValue = filters.turns.length === 1 ? String(filters.turns[0]) : ''

  const setToolFilter = (name: string) => {
    setFilters((previous) => {
      const active = previous.tools.includes(name)
      return {
        ...previous,
        kinds: [],
        tools: active ? previous.tools.filter(item => item !== name) : [...previous.tools, name],
      }
    })
  }

  const setStatusFilter = (status: string) => {
    setFilters(previous => ({
      ...previous,
      statuses: status === 'all' ? [] : [status],
      kinds: status === 'all' ? previous.kinds : [],
    }))
  }

  const setKindFilter = (kind: 'all' | 'tools' | 'messages' | 'other') => {
    const kinds = kind === 'all' ? []
      : kind === 'tools' ? ['tool']
        : kind === 'messages' ? MESSAGE_KINDS
          : OTHER_KINDS
    setFilters(previous => ({ ...previous, kinds, tools: kind === 'tools' ? previous.tools : [] }))
  }

  const setTurnFilter = (value: string) => {
    setFilters(previous => ({
      ...previous,
      turns: value === '' ? [] : [Number(value)],
    }))
  }

  const resetFilters = () => {
    setFilters(emptyFilters() as Filters)
    setSelectedId(null)
  }

  const removeTool = (name: string) => {
    setFilters(previous => ({ ...previous, tools: previous.tools.filter(item => item !== name) }))
  }

  const removeStatus = (status: string) => {
    setFilters(previous => ({ ...previous, statuses: previous.statuses.filter(item => item !== status) }))
  }

  const removeKind = () => setFilters(previous => ({ ...previous, kinds: [] }))

  const removeTurn = (turn: number) => {
    setFilters(previous => ({ ...previous, turns: previous.turns.filter(item => item !== turn) }))
  }

  const copyMarkdown = () => {
    setCopyMenu(false)
    void copy(rowsToMarkdown(filtered, {
      sessionId,
      query: effectiveFilters.query,
      total: rows.length,
    }))
  }

  const copyJson = () => {
    setCopyMenu(false)
    void copy(rowsToJson(filtered, {
      sessionId,
      query: effectiveFilters.query,
      total: rows.length,
    }))
  }

  const download = () => {
    setCopyMenu(false)
    downloadJson(rowsToJson(filtered, {
      sessionId,
      query: effectiveFilters.query,
      total: rows.length,
    }), sessionId)
  }

  const jumpLatest = () => {
    const element = listRef.current
    if (element === null) return
    element.scrollTop = element.scrollHeight
    atBottomRef.current = true
    setAtBottom(true)
  }

  const onListScroll = () => {
    const element = listRef.current
    if (element === null) return
    const bottom = element.scrollHeight - element.scrollTop - element.clientHeight < 80
    if (atBottomRef.current !== bottom) {
      atBottomRef.current = bottom
      setAtBottom(bottom)
    }
  }

  const onRowKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>, id: string) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    setSelectedId(id)
  }

  const loadOlderRecords = async () => {
    if (loadOlder === undefined || older === 'loading') return
    setOlder('loading')
    try {
      const changed = await loadOlder()
      setOlder(changed ? 'idle' : 'done')
    } catch {
      setOlder('idle')
      toastMessage(translate('toolbar.copy.failed'))
    }
  }

  const onlyTool = (row: DebugRow) => {
    if (row.name === undefined) return
    setFilters({ ...emptyFilters(), tools: [row.name] } as Filters)
    setSelectedId(row.id)
  }

  const onlyStatus = (row: DebugRow) => {
    setFilters({ ...emptyFilters(), statuses: [row.status] } as Filters)
    setSelectedId(row.id)
  }

  const onlyTurn = (row: DebugRow) => {
    if (typeof row.turn !== 'number') return
    setFilters({ ...emptyFilters(), turns: [row.turn] } as Filters)
    setSelectedId(row.id)
  }

  const resultPretty = selected?.result === undefined ? '' : prettyJson(selected.result)
  const canPretty = selected?.result !== undefined && resultPretty !== selected.result
  const resultText = selected?.result === undefined
    ? ''
    : (prettyResult && canPretty ? resultPretty : selected.result)
  const resultSectionTitle = selected?.kind === 'tool' ? translate('inspector.section.result')
    : selected?.kind === 'command' ? translate('inspector.section.result')
      : translate('inspector.section.content')

  const emptyTitle = !hasHook ? translate('empty.noHook.title')
    : rows.length === 0 ? translate('empty.noData.title')
      : translate('empty.noMatch.title')
  const emptyBody = !hasHook ? translate('empty.noHook.body')
    : rows.length === 0 ? translate('empty.noData.body')
      : translate('empty.noMatch.body')

  return (
    <div className="bt-root" data-dsh-better-trajectory-view="">
      <div className="bt-toolbar" role="toolbar" aria-label={translate('toolbar.aria')}>
        <div className="bt-toolbar-row">
          <div className="bt-search">
            <IconSearch size={13} />
            <input
              ref={searchRef}
              type="search"
              value={filters.query}
              placeholder={translate('toolbar.searchPlaceholder')}
              aria-label={translate('toolbar.search')}
              spellCheck={false}
              onChange={(event) => {
                setFilters(previous => ({ ...previous, query: event.target.value }))
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.stopPropagation()
                  setFilters(previous => ({ ...previous, query: '' }))
                }
              }}
            />
            {filters.query === '' ? <span className="bt-kbd">/</span> : (
              <button
                type="button"
                className="bt-icon-button"
                title={translate('toolbar.searchClear')}
                aria-label={translate('toolbar.searchClear')}
                onClick={() => {
                  setFilters(previous => ({ ...previous, query: '' }))
                  searchRef.current?.focus()
                }}
              >
                <IconClose size={12} />
              </button>
            )}
          </div>

          <div className="bt-segment" role="group" aria-label={translate('toolbar.status.aria')}>
            {([
              ['all', translate('toolbar.status.all'), undefined],
              ['error', translate('toolbar.status.error'), facets.statuses.error],
              ['running', translate('toolbar.status.running'), facets.statuses.running],
            ] as const).map(([value, label, count]) => (
              <button
                key={value}
                type="button"
                aria-pressed={statusChoice === value}
                data-count={count === undefined ? undefined : (count > 0 ? '1' : '0')}
                onClick={() => setStatusFilter(value)}
              >
                {label}
                {count !== undefined ? <>{' '}<span className="bt-count">{count}</span></> : null}
              </button>
            ))}
          </div>

          <div className="bt-pop-wrap" ref={toolPopRef}>
            <button
              type="button"
              className="bt-button"
              data-active={filters.tools.length > 0}
              aria-haspopup="dialog"
              aria-expanded={toolMenu}
              aria-label={translate('toolbar.tools.aria')}
              onClick={() => setToolMenu(open => !open)}
            >
              <IconFilter size={12} />
              {filters.tools.length === 0
                ? translate('toolbar.tools')
                : translate('toolbar.tools.selected', { count: filters.tools.length })}
              <IconChevron size={11} />
            </button>
            {toolMenu ? (
              <div className="bt-pop" data-align="right" role="dialog" aria-label={translate('toolbar.tools.aria')}>
                <div className="bt-pop-title">{translate('toolbar.tools')}</div>
                <div className="bt-pop-search">
                  <IconSearch size={12} />
                  <input
                    ref={toolSearchRef}
                    value={toolSearch}
                    placeholder={translate('toolbar.tools.search')}
                    aria-label={translate('toolbar.tools.search')}
                    onChange={(event) => setToolSearch(event.target.value)}
                  />
                </div>
                <div className="bt-pop-list">
                  {toolOptions.length === 0 ? (
                    <div className="bt-pop-title">{translate('toolbar.tools.empty')}</div>
                  ) : toolOptions.map(option => (
                    <button
                      key={option.name}
                      type="button"
                      className="bt-pop-item"
                      aria-pressed={filters.tools.includes(option.name)}
                      onClick={() => setToolFilter(option.name)}
                    >
                      <span className="bt-check" data-checked={filters.tools.includes(option.name)}>
                        {filters.tools.includes(option.name) ? <IconCheck size={10} /> : null}
                      </span>
                      <span className="bt-pop-name" title={option.name}>{option.name}</span>
                      <span className="bt-pop-count">{option.count}</span>
                    </button>
                  ))}
                </div>
                {filters.tools.length > 0 ? (
                  <div className="bt-pop-footer">
                    <button
                      type="button"
                      className="bt-link-button"
                      onClick={() => setFilters(previous => ({ ...previous, tools: [] }))}
                    >
                      {translate('toolbar.tools.clear')}
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>

          <select
            className="bt-select"
            value={turnValue}
            aria-label={translate('toolbar.turns.aria')}
            onChange={(event) => setTurnFilter(event.target.value)}
          >
            <option value="">{translate('toolbar.turns.all')}</option>
            {facets.turns.map(item => (
              <option key={item.turn} value={String(item.turn)}>
                {translate('filters.turn', { turn: item.turn })} · {item.count}
              </option>
            ))}
          </select>

        </div>

        <div className="bt-toolbar-row">
          <div className="bt-segment" role="group" aria-label={translate('toolbar.kind.aria')}>
            {([
              ['all', translate('toolbar.kind.all')],
              ['tools', translate('toolbar.kind.tools')],
              ['messages', translate('toolbar.kind.messages')],
              ['other', translate('toolbar.kind.other')],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={kindChoice === value}
                onClick={() => setKindFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="bt-summary">
            <span>{translate(rows.length === 1 ? 'summary.rows.one' : 'summary.rows', { shown: filtered.length, total: rows.length })}</span>
            <span className="bt-summary-sep" />
            <span>{translate(stats.tools === 1 ? 'summary.tools.one' : 'summary.tools', { count: stats.tools })}</span>
            <span className="bt-summary-sep" />
            <span className={stats.errors > 0 ? 'bt-error-count' : undefined}>
              {translate(stats.errors === 1 ? 'summary.errors.one' : 'summary.errors', { count: stats.errors })}
            </span>
            {activeCount > 0 ? (
              <>
                <span className="bt-summary-sep" />
                <span>{translate('summary.filtered')}</span>
              </>
            ) : null}
          </div>

          <span className="bt-spacer" />

          <div className="bt-pop-wrap" ref={copyPopRef}>
            <button
              type="button"
              className="bt-button"
              aria-haspopup="menu"
              aria-expanded={copyMenu}
              aria-label={translate('toolbar.copy.aria')}
              title={translate('toolbar.copy.aria')}
              onClick={() => setCopyMenu(open => !open)}
            >
              <IconCopy size={12} />
              {translate('toolbar.copy')}
              <IconChevron size={11} />
            </button>
            {copyMenu ? (
              <div className="bt-pop" data-align="right" role="menu" style={{ width: 220 }}>
                <button type="button" className="bt-pop-item" role="menuitem" onClick={copyMarkdown}>
                  <IconCopy size={12} />
                  <span className="bt-pop-name" style={{ fontFamily: 'inherit' }}>{translate('toolbar.copy.markdown')}</span>
                </button>
                <button type="button" className="bt-pop-item" role="menuitem" onClick={copyJson}>
                  <IconCopy size={12} />
                  <span className="bt-pop-name" style={{ fontFamily: 'inherit' }}>{translate('toolbar.copy.json')}</span>
                </button>
                <button type="button" className="bt-pop-item" role="menuitem" onClick={download}>
                  <IconDownload size={12} />
                  <span className="bt-pop-name" style={{ fontFamily: 'inherit' }}>{translate('toolbar.copy.download')}</span>
                </button>
              </div>
            ) : null}
          </div>

          <button
            type="button"
            className="bt-button"
            onClick={jumpLatest}
            title={translate('toolbar.latest.aria')}
            aria-label={translate('toolbar.latest.aria')}
            data-active={!atBottom}
          >
            <IconArrowDown size={12} />
            {translate('toolbar.latest')}
          </button>

          {activeCount > 0 ? (
            <button type="button" className="bt-button" onClick={resetFilters}>
              {translate('toolbar.reset')}
            </button>
          ) : null}
        </div>

        {activeCount > 0 ? (
          <div className="bt-toolbar-row" aria-label={translate('filters.active')}>
            {filters.query.trim() !== '' ? (
              <FilterChip
                label={translate('filters.query', { query: oneLine(filters.query, 40) })}
                onRemove={() => setFilters(previous => ({ ...previous, query: '' }))}
                removeLabel={translate('filters.remove', { label: filters.query })}
              />
            ) : null}
            {filters.tools.map(name => (
              <FilterChip
                key={`tool-${name}`}
                label={translate('filters.tool', { name })}
                onRemove={() => removeTool(name)}
                removeLabel={translate('filters.remove', { label: name })}
              />
            ))}
            {filters.statuses.map(status => (
              <FilterChip
                key={`status-${status}`}
                label={translate('filters.status', { status: translate(statusLabelKey(status)) })}
                onRemove={() => removeStatus(status)}
                removeLabel={translate('filters.remove', { label: status })}
              />
            ))}
            {filters.kinds.length > 0 ? (
              <FilterChip
                label={translate('filters.kind', { kind: kindChoice === 'all' ? filters.kinds.join(', ') : translate(`toolbar.kind.${kindChoice}` as BetterTrajectoryKey) })}
                onRemove={removeKind}
                removeLabel={translate('filters.remove', { label: filters.kinds.join(', ') })}
              />
            ) : null}
            {filters.turns.map(turn => (
              <FilterChip
                key={`turn-${turn}`}
                label={translate('filters.turn', { turn })}
                onRemove={() => removeTurn(turn)}
                removeLabel={translate('filters.remove', { label: String(turn) })}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="bt-body">
        <div className="bt-main">
          <div className="bt-columns" aria-hidden="true">
            <span />
            <span>{translate('list.header.time')}</span>
            <span>{translate('list.header.turn')}</span>
            <span>{translate('list.header.record')}</span>
            <span>{translate('list.header.preview')}</span>
            <span>{translate('list.header.duration')}</span>
          </div>

          <div
            className="bt-list"
            ref={listRef}
            onScroll={onListScroll}
          >
            {hasHook && loadOlder !== undefined && hasMore && older !== 'done' ? (
              <div className="bt-older">
                <button
                  type="button"
                  className="bt-button"
                  disabled={older === 'loading'}
                  onClick={() => { void loadOlderRecords() }}
                >
                  {older === 'loading' ? translate('list.loadingOlder') : translate('list.loadOlder')}
                </button>
              </div>
            ) : null}

            {filtered.length === 0 ? (
              <div className="bt-empty">
                <div className="bt-empty-icon">
                  {!hasHook ? <IconContext size={20} /> : rows.length === 0 ? <IconTool size={20} /> : <IconFilter size={20} />}
                </div>
                <h2>{emptyTitle}</h2>
                <p>{emptyBody}</p>
                {rows.length > 0 && activeCount > 0 ? (
                  <button type="button" className="bt-button" onClick={resetFilters}>
                    {translate('empty.clear')}
                  </button>
                ) : null}
              </div>
            ) : shown.map(row => (
              <div
                key={row.id}
                className="bt-row"
                role="button"
                tabIndex={0}
                data-kind={row.kind}
                data-status={row.status}
                data-depth={row.depth ?? 0}
                aria-pressed={selectedId === row.id}
                aria-label={translate('aria.row', {
                  kind: translate(kindLabelKey(row.kind)),
                  name: displayName(row, translate),
                  status: translate(statusLabelKey(row.status)),
                  time: formatClock(row.time),
                })}
                style={{ '--bt-depth': row.depth ?? 0 } as CSSProperties}
                onClick={() => setSelectedId(row.id)}
                onKeyDown={(event) => onRowKeyDown(event, row.id)}
              >
                <span className="bt-dot" />
                <span className="bt-time" title={formatDateTime(row.time)}>{formatClock(row.time)}</span>
                <span className="bt-turn">{turnText(row)}</span>
                <span className="bt-name">
                  {row.depth !== undefined && row.depth > 0 ? <span className="bt-sub">└</span> : null}
                  <span className="bt-name-icon">{kindIcon(row.kind)}</span>
                  <span className="bt-name-text" title={row.name || displayName(row, translate)}>
                    {displayName(row, translate)}
                  </span>
                  {row.errorCode ? <span className="bt-code" title={row.errorCode}>{row.errorCode}</span> : null}
                  {row.status === 'running' ? <IconSpinner size={11} /> : null}
                </span>
                <span className="bt-preview" title={row.preview}>{row.preview}</span>
                <span className="bt-dur">{formatDuration(row.durationMs)}</span>
              </div>
            ))}

            {remaining > 0 ? (
              <div className="bt-more">
                <button
                  type="button"
                  className="bt-button"
                  onClick={() => setVisibleStep(step => step + VISIBLE_STEP)}
                >
                  {translate('list.loadMore', { count: remaining })}
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {selected !== null ? (
          <aside
            className="bt-inspector"
            aria-label={translate('inspector.aria')}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.stopPropagation()
                setSelectedId(null)
              }
            }}
          >
            <div className="bt-inspector-head">
              <span className="bt-badge" data-status={selected.status}>
                {translate(statusLabelKey(selected.status))}
              </span>
              <span className="bt-inspector-title" data-kind={selected.kind} title={displayName(selected, translate)}>
                {displayName(selected, translate)}
              </span>
              <button
                type="button"
                className="bt-icon-button"
                title={translate('inspector.wrap')}
                aria-label={translate('inspector.wrap')}
                aria-pressed={wrap}
                data-active={wrap}
                onClick={() => setWrap(value => !value)}
              >
                <IconTerminal size={12} />
              </button>
              <button
                type="button"
                className="bt-icon-button"
                title={translate('inspector.close')}
                aria-label={translate('inspector.close')}
                onClick={() => setSelectedId(null)}
              >
                <IconClose size={12} />
              </button>
            </div>

            <div className="bt-inspector-scroll">
              <dl className="bt-meta">
                <dt>{translate('inspector.meta.time')}</dt>
                <dd data-mono="true">{formatDateTime(selected.time)}</dd>
                <dt>{translate('inspector.meta.turn')}</dt>
                <dd data-mono="true">{turnText(selected)}</dd>
                {selected.durationMs !== undefined ? (
                  <>
                    <dt>{translate('inspector.meta.duration')}</dt>
                    <dd data-mono="true">{formatDuration(selected.durationMs)}</dd>
                  </>
                ) : null}
                {selected.callId ? (
                  <>
                    <dt>{translate('inspector.meta.callId')}</dt>
                    <dd data-mono="true">{selected.callId}</dd>
                  </>
                ) : null}
                {selected.parentCallId ? (
                  <>
                    <dt>{translate('inspector.meta.parent')}</dt>
                    <dd data-mono="true">{selected.parentCallId}</dd>
                  </>
                ) : null}
                {selected.requestStatus ? (
                  <>
                    <dt>{translate('inspector.meta.request')}</dt>
                    <dd>{selected.requestStatus}</dd>
                  </>
                ) : null}
              </dl>

              {selected.usage !== undefined ? (
                <div className="bt-note">
                  {translate('inspector.meta.usageValue', {
                    input: selected.usage.inputTokens ?? 0,
                    output: selected.usage.outputTokens ?? 0,
                  })}
                  {typeof selected.usage.cacheReadTokens === 'number' || typeof selected.usage.cacheWriteTokens === 'number'
                    ? ` · ${translate('inspector.meta.usageCache', {
                      cacheRead: selected.usage.cacheReadTokens ?? 0,
                      cacheWrite: selected.usage.cacheWriteTokens ?? 0,
                    })}`
                    : ''}
                  {typeof selected.usage.reasoningTokens === 'number'
                    ? ` · ${translate('inspector.meta.usageReasoning', { reasoning: selected.usage.reasoningTokens })}`
                    : ''}
                </div>
              ) : null}

              {((selected.error !== undefined && selected.error !== '') || Boolean(selected.errorName) || Boolean(selected.errorCode)) ? (
                <Section
                  title={translate('inspector.section.error')}
                  text={errorText(selected)}
                  copyLabel={translate('inspector.copySection', { section: translate('inspector.section.error') })}
                  onCopy={(text) => { void copy(text) }}
                  tone="error"
                  wrap={wrap}
                  truncatedNote={translate('inspector.truncated')}
                />
              ) : null}

              {selected.kind === 'tool' || selected.kind === 'command' || (selected.args !== undefined && selected.args !== '') ? (
                <Section
                  title={translate('inspector.section.args')}
                  text={selected.args}
                  copyLabel={translate('inspector.copySection', { section: translate('inspector.section.args') })}
                  onCopy={(text) => { void copy(text) }}
                  wrap={wrap}
                  truncatedNote={translate('inspector.truncated')}
                >
                  {selected.args === undefined || selected.args === '' ? (
                    <div className="bt-note">{translate('inspector.emptyArgs')}</div>
                  ) : null}
                </Section>
              ) : null}

              {selected.kind === 'tool' || selected.kind === 'command' ? (
                <Section
                  title={resultSectionTitle}
                  text={resultText}
                  copyLabel={translate('inspector.copySection', { section: resultSectionTitle })}
                  onCopy={(text) => { void copy(text) }}
                  wrap={wrap}
                  pretty={prettyResult}
                  canPretty={canPretty}
                  onTogglePretty={() => setPrettyResult(value => !value)}
                  prettyTitle={prettyResult ? translate('inspector.raw') : translate('inspector.formatted')}
                  truncatedNote={translate('inspector.truncated')}
                >
                  {resultText === '' ? (
                    <div className="bt-note">
                      {selected.status === 'running' ? translate('inspector.runningResult') : translate('inspector.emptyResult')}
                    </div>
                  ) : null}
                </Section>
              ) : (
                <Section
                  title={translate('inspector.section.content')}
                  text={selected.result}
                  copyLabel={translate('inspector.copySection', { section: translate('inspector.section.content') })}
                  onCopy={(text) => { void copy(text) }}
                  wrap={wrap}
                  truncatedNote={translate('inspector.truncated')}
                />
              )}

              {selected.meta ? (
                <details className="bt-details">
                  <summary className="bt-section-title">{translate('inspector.section.meta')}</summary>
                  <pre className="bt-pre" data-wrap={wrap ? 'true' : 'false'}>
                    {clampForDisplay(selected.meta).text}
                  </pre>
                </details>
              ) : null}

              <div className="bt-actions">
                {selected.kind === 'tool' && selected.name ? (
                  <button type="button" className="bt-button" onClick={() => onlyTool(selected)}>
                    {translate('inspector.onlyTool')}
                  </button>
                ) : null}
                {selected.status !== 'neutral' ? (
                  <button type="button" className="bt-button" onClick={() => onlyStatus(selected)}>
                    {translate('inspector.onlyStatus')}
                  </button>
                ) : null}
                {typeof selected.turn === 'number' ? (
                  <button type="button" className="bt-button" onClick={() => onlyTurn(selected)}>
                    {translate('inspector.onlyTurn')}
                  </button>
                ) : null}
                <button
                  type="button"
                  className="bt-button"
                  onClick={() => { void copy(rowToText(selected)) }}
                >
                  <IconCopy size={12} />
                  {translate('inspector.copyRecord')}
                </button>
              </div>
            </div>
          </aside>
        ) : null}

        {toast !== null ? <div className="bt-toast" role="status">{toast}</div> : null}
      </div>
    </div>
  )
}

/** 一枚可移除的筛选胶囊。 */
function FilterChip({
  label, removeLabel, onRemove,
}: {
  label: string
  removeLabel: string
  onRemove: () => void
}) {
  return (
    <span className="bt-chip">
      <span className="bt-chip-label" title={label}>{label}</span>
      <button type="button" aria-label={removeLabel} title={removeLabel} onClick={onRemove}>
        <IconClose size={10} />
      </button>
    </span>
  )
}