/**
 * Trajectory+ 的 JSON 查看器。
 *
 * 原生 JsonTree 的折叠摘要用 nowrap + ellipsis，长 payload 会被截断；这里只重做
 * 「看 JSON」这一件事：换行、展开全部、树内搜索、长数组分页、复制 path/value。
 * 原生详情面板（Summary / Schema / Timing）仍然保留。
 */
import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import { IconClose, IconCopy, IconSearch } from './icons'

type JsonTab = 'args' | 'result' | 'schema'

interface JsonViewerProps {
  record: any
  schema?: any
  onClose: () => void
  t: (key: string, params?: Record<string, string | number>) => string
}

interface TreeSettings {
  mode: 'default' | 'all' | 'none'
  search: string
}

function valueKind(value: unknown): string {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'array'
  return typeof value
}

function isExpandable(value: unknown): value is object | unknown[] {
  return (typeof value === 'object' && value !== null)
}

function stringify(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2)
  } catch {
    return String(value)
  }
}

function parseJson(text: string | undefined): { value: unknown, json: boolean } {
  if (text === undefined || text === '') return { value: undefined, json: false }
  try {
    return { value: JSON.parse(text), json: true }
  } catch {
    return { value: text, json: false }
  }
}

function escapePath(key: string | number): string {
  if (typeof key === 'number') return `[${key}]`
  return /^[A-Za-z_$][\w$]*$/.test(key) ? `.${key}` : `[${JSON.stringify(key)}]`
}

function highlight(text: string, query: string): ReactNode {
  const term = query.trim()
  if (term === '') return text
  const lower = text.toLowerCase()
  const needle = term.toLowerCase()
  const parts: ReactNode[] = []
  let index = 0
  while (true) {
    const at = lower.indexOf(needle, index)
    if (at === -1) break
    if (at > index) parts.push(text.slice(index, at))
    parts.push(<mark key={`m:${at}`} className="bts-json-mark">{text.slice(at, at + term.length)}</mark>)
    index = at + term.length
  }
  if (index === 0) return text
  if (index < text.length) parts.push(text.slice(index))
  return parts
}

function deepMatches(value: unknown, query: string): boolean {
  const term = query.trim().toLowerCase()
  if (term === '') return true
  if (value === null || typeof value !== 'object') {
    return String(value ?? '').toLowerCase().includes(term)
  }
  if (Array.isArray(value)) return value.some(item => deepMatches(item, query))
  return Object.entries(value).some(([key, child]) => (
    key.toLowerCase().includes(term) || deepMatches(child, query)
  ))
}

function JsonString({ text, query }: { text: string, query: string }) {
  const [expanded, setExpanded] = useState(false)
  const lines = text.split('\n').length
  const long = text.length > 240 || lines > 3
  return (
    <span className="bts-json-string-wrap">
      <span className={long && !expanded ? 'bts-json-string-clamped' : 'bts-json-string'}>
        {highlight(text, query)}
      </span>
      {long ? (
        <button type="button" className="bts-json-link" onClick={() => setExpanded(value => !value)}>
          {expanded ? '−' : `+${Math.max(0, lines - 3)}`}
        </button>
      ) : null}
    </span>
  )
}

function JsonNode({
  name, value, path, depth, settings, resetKey,
}: {
  name?: string
  value: unknown
  path: string
  depth: number
  settings: TreeSettings
  resetKey: number
}) {
  const expandable = isExpandable(value) && (Array.isArray(value) ? value.length > 0 : Object.keys(value as object).length > 0)
  const initialOpen = settings.mode === 'all'
    ? expandable
    : settings.mode === 'none'
      ? false
      : expandable && depth < 2
  const [open, setOpen] = useState(initialOpen)
  const [limit, setLimit] = useState(50)
  const forcedOpen = settings.search.trim() !== '' && expandable && deepMatches(value, settings.search)

  useEffect(() => {
    setOpen(initialOpen)
    setLimit(50)
  }, [resetKey, initialOpen])

  if (settings.search.trim() !== '') {
    const selfMatch = name !== undefined && name.toLowerCase().includes(settings.search.trim().toLowerCase())
    if (!selfMatch && !deepMatches(value, settings.search)) return null
  }

  if (!expandable) {
    return (
      <div className="bts-json-row" style={{ paddingLeft: depth * 14 }}>
        {name !== undefined ? <span className="bts-json-key">{highlight(name, settings.search)}</span> : null}
        {name !== undefined ? <span className="bts-json-punct">: </span> : null}
        <JsonPrimitive value={value} query={settings.search} />
        <JsonCopy text={stringify(value)} title="value" />
      </div>
    )
  }

  const entries = Array.isArray(value)
    ? value.map((child, index) => [index, child] as const)
    : Object.entries(value as Record<string, unknown>)
  const shown = entries.slice(0, limit)
  const containerPath = path

  return (
    <div className="bts-json-node">
      <div className="bts-json-row" style={{ paddingLeft: depth * 14 }}>
        <button
          type="button"
          className="bts-json-chevron"
          aria-label={open || forcedOpen ? 'Collapse' : 'Expand'}
          aria-expanded={open || forcedOpen}
          onClick={() => setOpen(value => !value)}
        >
          {open || forcedOpen ? '▾' : '▸'}
        </button>
        {name !== undefined ? <span className="bts-json-key">{highlight(name, settings.search)}</span> : null}
        {name !== undefined ? <span className="bts-json-punct">: </span> : null}
        {Array.isArray(value) ? <span className="bts-json-bracket">[</span> : <span className="bts-json-bracket">{'{'}</span>}
        {!(open || forcedOpen) ? (
          <span className="bts-json-summary">
            {entries.length} {Array.isArray(value) ? 'items' : 'keys'}
          </span>
        ) : <span className="bts-json-punct"> </span>}
        {!(open || forcedOpen) ? (
          <span className="bts-json-bracket">{Array.isArray(value) ? ']' : '}'}</span>
        ) : null}
        <JsonCopy text={stringify(value)} title="subtree" />
        <span className="bts-json-type">{valueKind(value)}</span>
      </div>
      {open || forcedOpen ? (
        <>
          <div className="bts-json-children">
            {shown.map(([key, child]) => (
              <JsonNode
                key={`${path}${escapePath(key)}`}
                name={Array.isArray(value) ? undefined : String(key)}
                value={child}
                path={`${containerPath}${escapePath(key)}`}
                depth={depth + 1}
                settings={settings}
                resetKey={resetKey}
              />
            ))}
          </div>
          {entries.length > limit ? (
            <button
              type="button"
              className="bts-json-more"
              style={{ marginLeft: (depth + 1) * 14 }}
              onClick={() => setLimit(value => value + 50)}
            >+{Math.min(50, entries.length - limit)} more</button>
          ) : null}
          <div className="bts-json-row" style={{ paddingLeft: depth * 14 }}>
            <span className="bts-json-bracket">{Array.isArray(value) ? ']' : '}'}</span>
          </div>
        </>
      ) : null}
    </div>
  )
}

function JsonPrimitive({ value, query }: { value: unknown, query: string }) {
  if (typeof value === 'string') return <JsonString text={value} query={query} />
  if (value === null) return <span className="bts-json-null">null</span>
  if (typeof value === 'number') return <span className="bts-json-number">{String(value)}</span>
  if (typeof value === 'boolean') return <span className="bts-json-bool">{String(value)}</span>
  return <span className="bts-json-other">{stringify(value)}</span>
}

function JsonCopy({ text, title }: { text: string, title: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      className="bts-json-copy"
      title={`Copy ${title}`}
      aria-label={`Copy ${title}`}
      onClick={(event) => {
        event.stopPropagation()
        void navigator.clipboard.writeText(text).then(() => {
          setDone(true)
          window.setTimeout(() => setDone(false), 1_200)
        }).catch(() => {})
      }}
    >{done ? '✓' : <IconCopy size={10} />}</button>
  )
}

export function JsonViewer({ record, schema, onClose, t }: JsonViewerProps) {
  const [tab, setTab] = useState<JsonTab>(() => (record.args ? 'args' : record.result ? 'result' : 'schema'))
  const [raw, setRaw] = useState(false)
  const [search, setSearch] = useState('')
  const [mode, setMode] = useState<'default' | 'all' | 'none'>('default')
  const [resetKey, setResetKey] = useState(0)
  const [wide, setWide] = useState(false)
  const searchRef = useRef<HTMLInputElement | null>(null)

  const args = useMemo(() => parseJson(record.args), [record.args])
  const result = useMemo(() => parseJson(record.result), [record.result])
  const tabs = [
    { id: 'args' as const, label: t('json.tab.args'), available: record.args !== undefined, value: args },
    { id: 'result' as const, label: t('json.tab.result'), available: record.result !== undefined, value: result },
    { id: 'schema' as const, label: t('json.tab.schema'), available: schema !== undefined, value: parseJson(stringify(schema)) },
  ].filter(item => item.available)
  const active = tabs.find(item => item.id === tab) ?? tabs[0]
  const activeValue = active?.value

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'f') {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  if (tabs.length === 0) return null
  const treeValue = activeValue?.value
  const isStructured = isExpandable(treeValue)
  const rawText = record.args && tab === 'args'
    ? record.args
    : record.result && tab === 'result'
      ? record.result
      : stringify(treeValue)

  return (
    <div className="bts-json-overlay" role="dialog" aria-label={t('json.aria')}>
      <section className="bts-json-panel" data-wide={wide || undefined}>
        <header className="bts-json-head">
          <span className="bts-json-title" title={record.name}>{record.name || record.callId}</span>
          <span className="bts-json-meta">{record.status}</span>
          <span className="bts-json-meta">
            {typeof record.turn === 'number' ? `T${record.turn}${typeof record.step === 'number' ? `.${record.step}` : ''}` : '—'}
          </span>
          <span className="bts-json-meta">{typeof record.durationMs === 'number' ? `${Math.round(record.durationMs)}ms` : ''}</span>
          <span className="bts-spacer" />
          <button type="button" className="bts-button" onClick={() => { setMode('all'); setResetKey(v => v + 1) }}>{t('json.expandAll')}</button>
          <button type="button" className="bts-button" onClick={() => { setMode('none'); setResetKey(v => v + 1) }}>{t('json.collapseAll')}</button>
          <button type="button" className="bts-button" data-active={wide || undefined} onClick={() => setWide(v => !v)}>{t('json.wide')}</button>
          <button type="button" className="bts-icon-button" aria-label={t('json.close')} title={t('json.close')} onClick={onClose}>
            <IconClose size={12} />
          </button>
        </header>

        <div className="bts-json-toolbar">
          <div className="bts-tabs" role="tablist">
            {tabs.map(item => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active?.id === item.id}
                onClick={() => { setTab(item.id); setRaw(false); setSearch(''); setMode('default'); setResetKey(v => v + 1) }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="bts-spacer" />
          <div className="bts-json-search">
            <IconSearch size={11} />
            <input
              ref={searchRef}
              value={search}
              placeholder={t('json.search')}
              aria-label={t('json.search')}
              onChange={event => setSearch(event.target.value)}
            />
            {search !== '' ? (
              <button type="button" className="bts-json-link" onClick={() => setSearch('')}>×</button>
            ) : null}
          </div>
          <button type="button" className="bts-button" data-active={raw || undefined} onClick={() => setRaw(v => !v)}>
            {raw ? t('json.pretty') : t('json.raw')}
          </button>
        </div>

        <div className="bts-json-body">
          {raw ? (
            <pre className="bts-json-raw">{rawText}</pre>
          ) : isStructured ? (
            <div className="bts-json-tree">
              <JsonNode
                value={treeValue}
                path="$"
                depth={0}
                settings={{ mode, search }}
                resetKey={resetKey}
              />
            </div>
          ) : (
            <pre className="bts-json-raw">{typeof treeValue === 'string' ? treeValue : stringify(treeValue)}</pre>
          )}
        </div>
      </section>
    </div>
  )
}
