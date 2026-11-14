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
  buildToolIndex, collectStats, emptyFilters, filterSnapshot, isActive,
} from './filter.mjs'
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

/** 主视图。 */
export function SupersetView({
  sessionId, useTrajectory, t, nativeT, getNative, getImages, ...rest
}: SupersetViewProps) {
  const translate = typeof t === 'function' ? t : (key: string) => key
  const [filters, setFilters] = useState<Filters>(() => loadFilters(sessionId))
  const [toolMenu, setToolMenu] = useState(false)
  const [toolSearch, setToolSearch] = useState('')
  const toolSearchRef = useRef<HTMLInputElement | null>(null)

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
  const toolPopRef = usePopover(toolMenu, closeToolMenu)

  useEffect(() => { saveFilters(sessionId, filters) }, [sessionId, filters])
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

        <span className="bts-spacer" />

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

      <div className="bts-native" data-trajectory-superset="">
        <Native
          {...rest}
          {...mapped}
          sessionId={sessionId}
          t={nativeT}
          useTrajectory={filteredHook}
          renderSlot={renderNativeSlot}
        />
      </div>
    </div>
  )
}