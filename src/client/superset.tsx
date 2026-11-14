/**
 * Better Trajectory 的视图：在原生的 TrajectoryView 外面只加一条筛选栏。
 *
 * 原生组件从 slots 注册表里取（id = `trajectory`），不复制、不重写它的 UI；
 * 我们把裁剪过的轨迹快照通过 `useTrajectory` prop 交给它。没有筛选时传原
 * 快照（身份不变），所以原生行为与单独打开「轨迹」完全一致。
 */
import {
  useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore,
} from 'react'
import type { ReactNode } from 'react'

import {
  buildToolIndex, collectStats, emptyFilters, errorCalls, filteredCalls, filterSnapshot,
  isActive, slowestCalls, summarizeTools,
} from './filter.mjs'
import { recordsToJson, recordsToMarkdown } from './export.mjs'
import { JsonViewer } from './json-viewer'
import type { BetterTrajectoryKey } from './locales'
import { IconChevron, IconClose, IconFilter, IconSearch } from './icons'

/** 原生 TrajectoryView 组件句柄。 */
export interface NativeTrajectoryHandle {
  component: React.ComponentType<Record<string, unknown>>
  inject: (sessionId: string) => Record<string, unknown>
}

/** 槽位注入的 props。 */
export interface SupersetViewProps {
  sessionId?: string
  useTrajectory?: <T>(selector: (snapshot: any) => T) => T
  useSession?: <T>(selector: (snapshot: any) => T) => T
  t?: (key: string, params?: Record<string, string | number>) => string
  nativeT?: (key: string, params?: Record<string, unknown>) => string
  getNative?: () => NativeTrajectoryHandle | undefined
  getImages?: () => {
    entry: any
    factory: any
    injected: Record<string, unknown>
    t: (key: string, params?: Record<string, unknown>) => string
  } | undefined
  [key: string]: unknown
}

interface Filters {
  tools: string[]
  status: 'all' | 'error' | 'running'
  turn: number | null
  minDuration: number | null
  errorCode: string | null
}

const STORAGE_PREFIX = 'dsh-better-trajectory:filters:'

function loadFilters(sessionId?: string): Filters {
  const fallback = emptyFilters() as Filters
  if (typeof window === 'undefined' || !sessionId) return fallback
  try {
    const raw = window.sessionStorage.getItem(`${STORAGE_PREFIX}${sessionId}`)
    if (raw === null) return fallback
    const value = JSON.parse(raw) as Partial<Filters>
    return {
      tools: Array.isArray(value.tools) ? value.tools.filter(item => typeof item === 'string') : [],
      status: value.status === 'error' || value.status === 'running' ? value.status : 'all',
      turn: typeof value.turn === 'number' ? value.turn : null,
      minDuration: typeof value.minDuration === 'number' ? value.minDuration : null,
      errorCode: typeof value.errorCode === 'string' ? value.errorCode : null,
    }
  } catch {
    return fallback
  }
}

function saveFilters(sessionId: string | undefined, filters: Filters): void {
  if (typeof window === 'undefined' || !sessionId) return
  try {
    window.sessionStorage.setItem(`${STORAGE_PREFIX}${sessionId}`, JSON.stringify(filters))
  } catch {
    // 隐私模式：筛选仍有效，只是不跨页签记住。
  }
}

/** 把注入 face 的 hooks 映射成组件使用的 useX props。 */
function mapInjected(injected: Record<string, unknown>): Record<string, unknown> {
  const { hooks, ...bare } = injected as { hooks?: Record<string, any> } & Record<string, unknown>
  const result: Record<string, unknown> = { ...bare }
  for (const [key, observable] of Object.entries(hooks ?? {})) {
    const subscribe = observable.subscribe.bind(observable)
    const getSnapshot = observable.getSnapshot.bind(observable)
    result[`use${key[0].toUpperCase()}${key.slice(1)}`] = function useObservable(selector: (value: unknown) => unknown) {
      const value = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
      return selector(value)
    }
  }
  return result
}

/** 点击外部 / Esc 关闭浮层。 */
function usePopover(open: boolean, close: () => void) {
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

/**
 * 原生 image slot：优先复用官方 `MessageImages` 子槽组件与
 * `conversation.images.content` Factory（灯箱、拖拽、标签都保持官方实现）；
 * 取不到时退回本地缩略图。
 */
function NativeImages({ images, align, loadImage, imagesApi, useContextMenu }: {
  images?: readonly any[]
  align?: 'start' | 'end'
  loadImage?: ((attachment: any) => Promise<string>) & { peek?: (attachment: any) => string | undefined }
  imagesApi?: {
    entry: any
    factory: any
    injected: Record<string, unknown>
    t: (key: string, params?: Record<string, unknown>) => string
  }
  useContextMenu?: any
}) {
  if (imagesApi !== undefined && imagesApi.entry !== undefined && imagesApi.factory !== undefined && useContextMenu !== undefined) {
    const Images = imagesApi.entry
    const Factory = imagesApi.factory
    const renderFactorySlot = (name: string, props: Record<string, unknown>) => {
      if (name !== 'conversation.images.content' || Factory === undefined) return null
      return (
        <Factory
          {...props}
          {...imagesApi.injected}
          t={imagesApi.t}
          {...(useContextMenu === undefined ? {} : { useContextMenu })}
        />
      )
    }
    return (
      <Images
        images={images}
        align={align}
        loadImage={loadImage}
        renderFactorySlot={renderFactorySlot}
      />
    )
  }
  return (
    <div className="bts-images" data-align={align ?? 'start'}>
      {(images ?? []).map((source, index) => (
        <NativeImage key={`${index}`} source={source} loadImage={loadImage} />
      ))}
    </div>
  )
}

function NativeImage({ source, loadImage }: {
  source: any
  loadImage?: ((attachment: any) => Promise<string>) & { peek?: (attachment: any) => string | undefined }
}) {
  const preview = source?.preview?.url
  const attachment = source?.attachment
  const [url, setUrl] = useState<string | undefined>(() => {
    if (typeof preview === 'string') return preview
    if (attachment !== undefined) return loadImage?.peek?.(attachment)
    return undefined
  })
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (url !== undefined || attachment === undefined || loadImage === undefined) return
    let alive = true
    loadImage(attachment).then(
      (next) => { if (alive) setUrl(next) },
      () => { if (alive) setFailed(true) },
    )
    return () => { alive = false }
  }, [url, attachment, loadImage])

  if (failed) return <span className="bts-image-fallback">image</span>
  if (url === undefined) return <span className="bts-image-fallback">…</span>
  return (
    <button
      type="button"
      className="bts-image"
      title={source?.label ?? source?.preview?.name}
      onClick={() => window.open(url, '_blank', 'noopener')}
    >
      <img src={url} alt={source?.label ?? source?.preview?.name ?? ''} />
    </button>
  )
}

function formatMs(ms?: number | null): string {
  if (typeof ms !== 'number' || !Number.isFinite(ms)) return '—'
  if (ms < 1_000) return `${Math.round(ms)}ms`
  if (ms < 60_000) return `${(ms / 1_000).toFixed(ms < 10_000 ? 1 : 0)}s`
  return `${Math.floor(ms / 60_000)}m${String(Math.round((ms % 60_000) / 1_000)).padStart(2, '0')}s`
}

function turnOf(record: any): string {
  if (typeof record?.turn !== 'number') return '—'
  return typeof record.step === 'number' ? `${record.turn}/${record.step}` : String(record.turn)
}

function oneLine(value: string, max = 160): string {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim()
  return text.length > max ? `${text.slice(0, max)}…` : text
}

/** 主视图。 */
export function SupersetView({
  sessionId, useTrajectory, t, nativeT, getNative, getImages, ...rest
}: SupersetViewProps) {
  const translate = typeof t === 'function' ? t : (key: string) => key
  const [filters, setFilters] = useState<Filters>(() => loadFilters(sessionId))
  const [toolMenu, setToolMenu] = useState(false)
  const [toolSearch, setToolSearch] = useState('')
  const [debugOpen, setDebugOpen] = useState(true)
  const [debugTab, setDebugTab] = useState<'errors' | 'tools' | 'slowest'>('errors')
  const [exportMenu, setExportMenu] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [focusRequest, setFocusRequest] = useState<{ view: string, focus: string } | null>(null)
  const [jsonRecord, setJsonRecord] = useState<any | null>(null)
  const [jsonSchema, setJsonSchema] = useState<any>(undefined)
  const [wrapDefault, setWrapDefault] = useState(true)
  const toolSearchRef = useRef<HTMLInputElement | null>(null)
  const debugInitialized = useRef(false)

  const full = useTrajectory ? useTrajectory(snapshot => snapshot) : undefined
  const index = useMemo(() => buildToolIndex(full), [full])
  const stats = useMemo(() => collectStats(index, filters as any), [index, filters])
  const filtered = useMemo(
    () => filterSnapshot(full, filters as any, index),
    [full, filters, index],
  )

  const native = useMemo(() => getNative?.(), [getNative, sessionId])
  const imagesApi = useMemo(() => getImages?.(), [getImages, sessionId])
  const injected = useMemo(
    () => (native === undefined ? {} : native.inject(sessionId ?? '')),
    [native?.component, sessionId],
  )
  const mapped = useMemo(() => mapInjected(injected), [injected])
  const jsonStringWrapping = useMemo(() => ({
    getDefault: () => wrapDefault,
    setDefault: (value: boolean) => setWrapDefault(value),
  }), [wrapDefault])

  const filteredHook = useCallback(
    (selector: (snapshot: any) => unknown) => selector(filtered),
    [filtered],
  )

  const renderNativeSlot = useCallback((name: string, owner: any): ReactNode => {
    if (name !== 'conversation.trajectory.images') return null
    return (
      <NativeImages
        {...owner}
        imagesApi={imagesApi}
        useContextMenu={(rest as any).useContextMenu}
      />
    )
  }, [imagesApi, rest])

  const closeToolMenu = useCallback(() => setToolMenu(false), [])
  const closeExportMenu = useCallback(() => setExportMenu(false), [])
  const toolPopRef = usePopover(toolMenu, closeToolMenu)
  const exportPopRef = usePopover(exportMenu, closeExportMenu)

  useEffect(() => { saveFilters(sessionId, filters) }, [sessionId, filters])
  useEffect(() => {
    if (debugInitialized.current) return
    if (stats.total === 0) return
    debugInitialized.current = true
    if (stats.errors === 0) setDebugTab('tools')
  }, [stats])
  useEffect(() => {
    if (toast === null) return
    const timer = window.setTimeout(() => setToast(null), 1_800)
    return () => window.clearTimeout(timer)
  }, [toast])
  useEffect(() => {
    if (!toolMenu) {
      setToolSearch('')
      return
    }
    const timer = window.setTimeout(() => toolSearchRef.current?.focus(), 0)
    return () => window.clearTimeout(timer)
  }, [toolMenu])

  const active = isActive(filters as any)
  const toolOptions = useMemo(() => {
    const options = stats.tools.map(item => ({ ...item }))
    for (const name of filters.tools) {
      if (!options.some(item => item.name === name)) options.unshift({ name, count: 0 })
    }
    const term = toolSearch.trim().toLowerCase()
    return term === '' ? options : options.filter(item => item.name.toLowerCase().includes(term))
  }, [stats.tools, filters.tools, toolSearch])

  const clear = () => setFilters(emptyFilters() as Filters)
  const toggleTool = (name: string) => {
    setFilters(previous => ({
      ...previous,
      tools: previous.tools.includes(name)
        ? previous.tools.filter(item => item !== name)
        : [...previous.tools, name],
    }))
  }

  const reveal = (record: any) => {
    // 面板里的行都来自当前筛选结果；保留筛选，只让原生视图自己定位。
    if (record?.callId) setFocusRequest({ view: 'trajectory', focus: record.callId })
  }

  const openJson = (record: any) => {
    setJsonRecord(record)
    setJsonSchema(full.callSchemas?.get(record?.callId))
  }

  const openLatestToolJson = (name: string) => {
    const candidates = index.records
      .filter(record => record.name === name)
      .sort((left: any, right: any) => (right.time ?? 0) - (left.time ?? 0))
    if (candidates[0] !== undefined) openJson(candidates[0])
  }

  const filteredRecords = useMemo(() => filteredCalls(index, filters as any), [index, filters])
  const errors = useMemo(() => errorCalls(index, filters as any), [index, filters])
  const slowest = useMemo(() => slowestCalls(index, filters as any), [index, filters])
  const toolSummary = useMemo(() => summarizeTools(index), [index])

  const filterSummary = [
    filters.tools.length > 0 ? `tool:${filters.tools.join(',')}` : '',
    filters.status !== 'all' ? `status:${filters.status}` : '',
    filters.turn !== null ? `turn:${filters.turn}` : '',
    filters.minDuration !== null ? `ms>=${filters.minDuration}` : '',
    filters.errorCode !== null ? `code:${filters.errorCode}` : '',
  ].filter(Boolean).join(' ')

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setToast(translate('debug.export.copied'))
    } catch {
      setToast(translate('debug.export.failed'))
    }
  }

  const exportJson = () => recordsToJson(filteredRecords, { sessionId, filter: filterSummary })
  const exportMarkdown = () => recordsToMarkdown(filteredRecords, { sessionId, filter: filterSummary })
  const download = () => {
    setExportMenu(false)
    const blob = new Blob([exportJson()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `better-trajectory-${sessionId ?? 'session'}.json`
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1_000)
  }

  if (full === undefined) {
    return (
      <div className="bts-root" data-dsh-better-trajectory-view="">
        <div className="bts-empty">
          <h2>{translate('view.missingHook.title')}</h2>
          <p>{translate('view.missingHook.body')}</p>
        </div>
      </div>
    )
  }
  if (native === undefined) {
    return (
      <div className="bts-root" data-dsh-better-trajectory-view="">
        <div className="bts-empty">
          <h2>{translate('view.missingNative.title')}</h2>
          <p>{translate('view.missingNative.body')}</p>
        </div>
      </div>
    )
  }

  const Native = native.component
  const summaryKey: BetterTrajectoryKey = 'filter.summary'

  return (
    <div className="bts-root" data-dsh-better-trajectory-view="">
      <div className="bts-bar" role="toolbar" aria-label={translate('filter.aria')}>
        <span className="bts-lead" title={translate('filter.scopeHint')}>
          <IconFilter size={12} />
          {translate('filter.lead')}
        </span>

        <div className="bts-segment" role="group" aria-label={translate('filter.status.aria')}>
          {([
            ['all', translate('filter.status.all'), undefined],
            ['error', translate('filter.status.error'), stats.errors],
            ['running', translate('filter.status.running'), stats.running],
          ] as const).map(([value, label, count]) => (
            <button
              key={value}
              type="button"
              aria-pressed={filters.status === value}
              data-empty={count === 0 ? 'true' : undefined}
              data-tone={value === 'error' ? 'error' : undefined}
              onClick={() => setFilters(previous => ({ ...previous, status: value }))}
            >
              {label}
              {count !== undefined ? <span className="bts-count">{count}</span> : null}
            </button>
          ))}
        </div>

        <div className="bts-pop-wrap" ref={toolPopRef}>
          <button
            type="button"
            className="bts-button"
            data-active={filters.tools.length > 0 || undefined}
            aria-haspopup="dialog"
            aria-expanded={toolMenu}
            onClick={() => setToolMenu(open => !open)}
          >
            <IconFilter size={11} />
            {filters.tools.length === 0
              ? translate('filter.tools')
              : translate('filter.tools.selected', { count: filters.tools.length })}
            <IconChevron size={10} />
          </button>
          {toolMenu ? (
            <div className="bts-pop" data-align="right" role="dialog" aria-label={translate('filter.tools.aria')}>
              <div className="bts-pop-title">{translate('filter.tools.title')}</div>
              <div className="bts-pop-search">
                <IconSearch size={11} />
                <input
                  ref={toolSearchRef}
                  value={toolSearch}
                  placeholder={translate('filter.tools.search')}
                  aria-label={translate('filter.tools.search')}
                  onChange={event => setToolSearch(event.target.value)}
                />
              </div>
              <div className="bts-pop-list">
                {toolOptions.length === 0 ? (
                  <div className="bts-pop-title">{translate('filter.tools.empty')}</div>
                ) : toolOptions.map(option => (
                  <button
                    key={option.name}
                    type="button"
                    className="bts-pop-item"
                    aria-pressed={filters.tools.includes(option.name)}
                    onClick={() => toggleTool(option.name)}
                  >
                    <span className="bts-check" data-checked={filters.tools.includes(option.name) || undefined}>✓</span>
                    <span className="bts-pop-name" title={option.name}>{option.name}</span>
                    <span className="bts-pop-count">{option.count}</span>
                  </button>
                ))}
              </div>
              {filters.tools.length > 0 ? (
                <div className="bts-pop-footer">
                  <button
                    type="button"
                    className="bts-link"
                    onClick={() => setFilters(previous => ({ ...previous, tools: [] }))}
                  >
                    {translate('filter.tools.clear')}
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <select
          className="bts-select"
          value={filters.turn === null ? '' : String(filters.turn)}
          aria-label={translate('filter.turn.aria')}
          onChange={(event) => {
            const value = event.target.value
            setFilters(previous => ({ ...previous, turn: value === '' ? null : Number(value) }))
          }}
        >
          <option value="">{translate('filter.turn.all')}</option>
          {stats.turns.map(item => (
            <option key={item.turn} value={String(item.turn)}>
              {translate('filter.turn.option', { turn: item.turn, count: item.count })}
            </option>
          ))}
        </select>

        <select
          className="bts-select"
          value={filters.minDuration === null ? '' : String(filters.minDuration)}
          aria-label={translate('filter.duration.aria')}
          onChange={(event) => {
            const value = event.target.value
            setFilters(previous => ({ ...previous, minDuration: value === '' ? null : Number(value) }))
          }}
        >
          <option value="">{translate('filter.duration.all')}</option>
          <option value="100">{translate('filter.duration.100')}</option>
          <option value="1000">{translate('filter.duration.1000')}</option>
          <option value="5000">{translate('filter.duration.5000')}</option>
        </select>

        {stats.errorCodes.length > 0 || filters.errorCode !== null ? (
          <select
            className="bts-select bts-select-code"
            value={filters.errorCode ?? ''}
            aria-label={translate('filter.code.aria')}
            onChange={(event) => {
              const value = event.target.value
              setFilters(previous => ({ ...previous, errorCode: value === '' ? null : value }))
            }}
          >
            <option value="">{translate('filter.code.all')}</option>
            {stats.errorCodes.map(item => (
              <option key={item.code} value={item.code}>{item.code} · {item.count}</option>
            ))}
            {filters.errorCode !== null && !stats.errorCodes.some(item => item.code === filters.errorCode) ? (
              <option value={filters.errorCode}>{filters.errorCode} · 0</option>
            ) : null}
          </select>
        ) : null}

        <span className="bts-spacer" />

        <button
          type="button"
          className="bts-button"
          data-active={debugOpen || undefined}
          aria-expanded={debugOpen}
          onClick={() => setDebugOpen(open => !open)}
        >
          <IconChevron size={11} data-rotated={debugOpen || undefined} />
          {translate('debug.toggle')}
        </button>

        <span className="bts-summary" title={translate('filter.scopeHint')}>
          {translate(summaryKey, { matched: stats.matched, total: stats.total })}
        </span>

        {active ? (
          <button type="button" className="bts-button" onClick={clear}>
            <IconClose size={11} />
            {translate('filter.clear')}
          </button>
        ) : null}
      </div>

      {debugOpen ? (
        <section className="bts-debug" aria-label={translate('debug.aria')}>
          <div className="bts-debug-head">
            <div className="bts-tabs" role="tablist" aria-label={translate('debug.tabsAria')}>
              {([
                ['errors', translate('debug.tab.errors'), errors.length],
                ['tools', translate('debug.tab.tools'), toolSummary.length],
                ['slowest', translate('debug.tab.slowest'), slowest.length],
              ] as const).map(([value, label, count]) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={debugTab === value}
                  onClick={() => setDebugTab(value)}
                >
                  {label}
                  <span className="bts-count">{count}</span>
                </button>
              ))}
            </div>
            <span className="bts-spacer" />
            <div className="bts-pop-wrap" ref={exportPopRef}>
              <button
                type="button"
                className="bts-button"
                aria-haspopup="menu"
                aria-expanded={exportMenu}
                onClick={() => setExportMenu(open => !open)}
              >
                {translate('debug.export')}
                <IconChevron size={10} />
              </button>
              {exportMenu ? (
                <div className="bts-pop" data-align="right" role="menu" style={{ width: 230 }}>
                  <button
                    type="button"
                    className="bts-pop-item"
                    role="menuitem"
                    onClick={() => {
                      setExportMenu(false)
                      void copyText(recordsToMarkdown(filteredRecords, { sessionId, filter: filterSummary }))
                    }}
                  >
                    {translate('debug.export.markdown')}
                  </button>
                  <button
                    type="button"
                    className="bts-pop-item"
                    role="menuitem"
                    onClick={() => {
                      setExportMenu(false)
                      void copyText(recordsToJson(filteredRecords, { sessionId, filter: filterSummary }))
                    }}
                  >
                    {translate('debug.export.json')}
                  </button>
                  <button type="button" className="bts-pop-item" role="menuitem" onClick={download}>
                    {translate('debug.export.download')}
                  </button>
                </div>
              ) : null}
            </div>
            <button
              type="button"
              className="bts-icon-button"
              aria-label={translate('debug.close')}
              title={translate('debug.close')}
              onClick={() => setDebugOpen(false)}
            >
              <IconClose size={12} />
            </button>
          </div>
          <div className="bts-debug-body">
            {debugTab === 'errors' ? (
              errors.length === 0 ? (
                <div className="bts-debug-empty">{translate('debug.errors.empty')}</div>
              ) : <>
                <div className="bts-debug-columns bts-debug-columns-error" aria-hidden="true">
                  <span>{translate('debug.col.code')}</span>
                  <span>{translate('debug.col.tool')}</span>
                  <span>{translate('debug.col.turn')}</span>
                  <span>{translate('debug.col.duration')}</span>
                  <span>{translate('debug.col.error')}</span>
                  <span />
                </div>
                {errors.map((record: any) => (
                  <div
                    key={`e:${record.turn}:${record.callId}`}
                    role="button"
                    tabIndex={0}
                    className="bts-debug-row bts-debug-row-error"
                    onClick={() => reveal(record)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        reveal(record)
                      }
                    }}
                    title={translate('debug.jump')}
                  >
                    <span className="bts-code">{record.errorCode || record.errorName || 'error'}</span>
                    <span className="bts-debug-tool">{record.name || record.callId}</span>
                    <span className="bts-debug-meta">{turnOf(record)}</span>
                    <span className="bts-debug-meta">{formatMs(record.durationMs)}</span>
                    <span className="bts-debug-message">{oneLine(record.errorText || record.result || '', 160)}</span>
                    <span className="bts-debug-actions">
                      <button
                        type="button"
                        className="bts-json-open"
                        title={translate('debug.openJson')}
                        aria-label={translate('debug.openJson')}
                        onClick={(event) => { event.stopPropagation(); openJson(record) }}
                      >{'{}'}</button>
                      <span className="bts-debug-jump">→</span>
                    </span>
                  </div>
                ))}
              </>
            ) : debugTab === 'tools' ? (
              toolSummary.length === 0 ? (
                <div className="bts-debug-empty">{translate('debug.tools.empty')}</div>
              ) : <>
                <div className="bts-debug-columns bts-debug-columns-tool" aria-hidden="true">
                  <span>{translate('debug.col.tool')}</span>
                  <span>{translate('debug.col.calls')}</span>
                  <span>{translate('debug.col.errors')}</span>
                  <span>{translate('debug.col.p95')}</span>
                  <span>{translate('debug.col.total')}</span>
                  <span />
                  <span />
                </div>
                {toolSummary.map(item => (
                  <button
                    key={item.name}
                    type="button"
                    className="bts-debug-row bts-debug-row-tool"
                    data-active={filters.tools.includes(item.name) || undefined}
                    onClick={() => toggleTool(item.name)}
                    title={translate('debug.tools.toggle')}
                  >
                    <span className="bts-debug-tool">{item.name}</span>
                    <span className="bts-debug-meta">{translate('debug.tools.calls', { count: item.calls })}</span>
                    <span className="bts-debug-meta">{translate('debug.tools.errors', { count: item.errors })}</span>
                    <span className="bts-debug-meta">{translate('debug.tools.p95', { value: formatMs(item.p95Ms) })}</span>
                    <span className="bts-debug-meta">{translate('debug.tools.total', { value: formatMs(item.totalMs) })}</span>
                    <span />
                    <span className="bts-debug-actions">
                      <button
                        type="button"
                        className="bts-json-open"
                        title={translate('debug.openJson')}
                        aria-label={translate('debug.openJson')}
                        onClick={(event) => { event.stopPropagation(); openLatestToolJson(item.name) }}
                      >{'{}'}</button>
                      <span className="bts-debug-jump">{filters.tools.includes(item.name) ? '✓' : '+'}</span>
                    </span>
                  </button>
                ))}
              </>
            ) : slowest.length === 0 ? (
              <div className="bts-debug-empty">{translate('debug.slowest.empty')}</div>
            ) : <>
              <div className="bts-debug-columns bts-debug-columns-slow" aria-hidden="true">
                <span>{translate('debug.col.duration')}</span>
                <span>{translate('debug.col.tool')}</span>
                <span>{translate('debug.col.turn')}</span>
                <span>{translate('debug.col.args')}</span>
                <span />
              </div>
              {slowest.map((record: any) => (
              <button
                key={`s:${record.turn}:${record.callId}`}
                type="button"
                className="bts-debug-row bts-debug-row-slow"
                onClick={() => reveal(record)}
                title={translate('debug.jump')}
              >
                  <span className="bts-duration">{formatMs(record.durationMs)}</span>
                  <span className="bts-debug-tool">{record.name || record.callId}</span>
                  <span className="bts-debug-meta">{turnOf(record)}</span>
                  <span className="bts-debug-message">{oneLine(record.args || record.errorText || '', 160)}</span>
                  <span className="bts-debug-jump">→</span>
                </button>
              ))}
            </>}
          </div>
        </section>
      ) : null}

      <div className="bts-native" data-trajectory-superset="">
        <Native
          {...rest}
          {...mapped}
          sessionId={sessionId}
          t={nativeT}
          useTrajectory={filteredHook}
          renderSlot={renderNativeSlot}
          jsonStringWrapping={jsonStringWrapping}
          viewRequest={focusRequest ?? (rest as any).viewRequest}
          completeViewRequest={() => {
            setFocusRequest(null)
            ;(rest as any).completeViewRequest?.()
          }}
        />
      </div>

      {jsonRecord !== null ? (
        <JsonViewer
          record={jsonRecord}
          schema={jsonSchema}
          onClose={() => setJsonRecord(null)}
          t={translate}
        />
      ) : null}

      {toast !== null ? <div className="bts-toast" role="status">{toast}</div> : null}
    </div>
  )
}