// @ts-nocheck
/** Inspector 的「原始」tab：可搜索 JSON 树。 */
import { useMemo, useState, type ReactNode } from 'react'
import { CopyButton } from './CopyButton.tsx'
import css from './RawDataPanel.module.css'

interface RawDataPanelProps {
  data: unknown
  qt: (key: string, params?: Record<string, string | number>) => string
  /** Inline mode: no toolbar and no root row, so the section header is the title. */
  bare?: boolean
  /** Max string length shown inline before the "more" toggle (default 220, 120 when bare). */
  stringLimit?: number
}

const MAX_PREVIEW = 220
const ARRAY_PAGE = 50

type Json = unknown

function kindOf(value: Json): 'array' | 'object' | 'string' | 'number' | 'boolean' | 'null' | 'other' {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'array'
  switch (typeof value) {
    case 'object': return 'object'
    case 'string': return 'string'
    case 'number': return 'number'
    case 'boolean': return 'boolean'
    default: return 'other'
  }
}

function entriesOf(value: Json): [string, Json][] {
  if (Array.isArray(value)) return value.map((item, index) => [String(index), item])
  if (typeof value === 'object' && value !== null) return Object.entries(value as Record<string, Json>)
  return []
}

/** 命中查询的路径集合（含所有祖先）。 */
function matchPaths(value: Json, term: string, path: string, out: Set<string>): boolean {
  const kind = kindOf(value)
  let hit = false
  if (kind === 'array' || kind === 'object') {
    for (const [key, child] of entriesOf(value)) {
      const childPath = `${path}/${key}`
      const childHit = matchPaths(child, term, childPath, out)
      if (childHit || key.toLowerCase().includes(term)) {
        out.add(childPath)
        hit = true
      }
    }
  }
  if (!hit && (kind === 'string' || kind === 'number' || kind === 'boolean')) {
    hit = String(value).toLowerCase().includes(term)
  }
  if (hit) out.add(path)
  return hit
}

function preview(value: Json): string {
  const kind = kindOf(value)
  if (kind === 'array') return `[ ${(value as Json[]).length} items ]`
  if (kind === 'object') return `{ ${Object.keys(value as object).length} items }`
  return ''
}

/** Highlights every case-insensitive occurrence of the search term. */
function Highlight({ text, term }: { text: string; term: string }) {
  if (term === '') return <>{text}</>
  const lower = text.toLowerCase()
  const needle = term.toLowerCase()
  const parts: ReactNode[] = []
  let cursor = 0
  for (;;) {
    const at = lower.indexOf(needle, cursor)
    if (at === -1) {
      parts.push(text.slice(cursor))
      break
    }
    if (at > cursor) parts.push(text.slice(cursor, at))
    parts.push(<mark key={at} className={css.mark}>{text.slice(at, at + needle.length)}</mark>)
    cursor = at + needle.length
  }
  return <>{parts}</>
}

function Leaf({ value, term }: { value: Json; term: string }) {
  const kind = kindOf(value)
  if (kind === 'string') {
    return <span className={css.string}>"<Highlight text={String(value)} term={term} />"</span>
  }
  if (kind === 'number') {
    return <span className={css.number}><Highlight text={String(value)} term={term} /></span>
  }
  if (kind === 'boolean') {
    return <span className={css.boolean}><Highlight text={String(value)} term={term} /></span>
  }
  if (kind === 'null') return <span className={css.null}>null</span>
  return <span className={css.other}><Highlight text={String(value)} term={term} /></span>
}

/** Copy payload for one node: strings copy verbatim, everything else as JSON. */
function copyTextFor(value: Json): string {
  return typeof value === 'string' ? value : JSON.stringify(value, null, 2)
}

function Node({
  name, value, path, depth, expanded, toggle, term, qt, stringLimit,
}: {
  name: string
  value: Json
  path: string
  depth: number
  expanded: Set<string>
  toggle: (path: string) => void
  term: string
  qt: RawDataPanelProps['qt']
  stringLimit?: number
}) {
  const kind = kindOf(value)
  const branch = kind === 'array' || kind === 'object'
  const isOpen = expanded.has(path)
  const [limit, setLimit] = useState(ARRAY_PAGE)
  const entries = branch ? entriesOf(value) : []
  const shown = entries.slice(0, limit)

  return (
    <div className={css.node} data-depth={depth}>
      <div
        className={css.line}
        data-path={path}
        data-branch={branch || undefined}
        data-open={branch ? isOpen || undefined : undefined}
        data-hit={term !== '' && String(name).toLowerCase().includes(term) ? 'key' : undefined}
        data-copy-reveal
        onClick={branch ? () => toggle(path) : undefined}
      >
        {branch ? (
          <span className={css.chevron} data-open={isOpen || undefined} aria-hidden="true">▸</span>
        ) : (
          <span className={css.chevronSpace} />
        )}
        <span className={css.key}><Highlight text={name} term={term} /></span>
        <span className={css.colon}>:</span>
        {branch ? <span className={css.branch}>{preview(value)}</span> : <Leaf value={value} term={term} />}
        <CopyButton
          text={copyTextFor(value)}
          label={qt('raw.copy')}
          copiedLabel={qt('copied')}
          failedLabel={qt('copy.failed')}
        />
      </div>
      {branch && isOpen && (
        <div className={css.children}>
          {shown.map(([key, child]) => (
            <Node
              key={`${path}/${key}`}
              name={key}
              value={child}
              path={`${path}/${key}`}
              depth={depth + 1}
              expanded={expanded}
              toggle={toggle}
              term={term}
              qt={qt}
              stringLimit={stringLimit}
            />
          ))}
          {entries.length > limit && (
            <button type="button" className={css.loadMore} onClick={() => setLimit(v => v + ARRAY_PAGE)}>
              {qt('raw.loadMore', { count: entries.length - limit })}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

/** Short size hint for a section header: key count, item count or line count. */
export function payloadBadge(
  value: unknown,
  qt: (key: string, params?: Record<string, string | number>) => string,
): string {
  if (Array.isArray(value)) return qt('payload.items', { count: value.length })
  if (value !== null && typeof value === 'object') {
    return qt('payload.keys', { count: Object.keys(value as Record<string, unknown>).length })
  }
  const text = value === null || value === undefined ? '' : String(value)
  if (text === '') return ''
  if (text.length > 120) return qt('payload.chars', { count: text.length })
  const lines = text.split('\n').length
  /* one short line says nothing a badge could add (`1 行` on a sentence) */
  return lines === 1 ? '' : qt('payload.lines', { count: lines })
}

/**
 * JSON 树，带搜索、展开全部与复制。
 * @param props 数据与翻译函数。
 * @returns 原始数据面板。
 */
export function RawDataPanel({ data, qt, bare = false, stringLimit }: RawDataPanelProps) {
  const limit = stringLimit ?? (bare ? 120 : MAX_PREVIEW)
  const [term, setTerm] = useState('')
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const initial = new Set<string>([''])
    if (!bare) return initial
    for (const [key, child] of entriesOf(data)) {
      const kind = kindOf(child)
      if (kind === 'object' || kind === 'array') initial.add(`/${key}`)
    }
    return initial
  })
  const query = term.trim().toLowerCase()

  const matched = useMemo(() => {
    if (query === '') return null
    const set = new Set<string>()
    matchPaths(data, query, '', set)
    return set
  }, [data, query])

  const visible = useMemo(() => {
    if (matched === null) return expanded
    const next = new Set(expanded)
    for (const path of matched) {
      const parts = path.split('/').filter(Boolean)
      let prefix = ''
      for (const part of parts) {
        prefix = `${prefix}/${part}`
        next.add(prefix)
      }
      next.add('')
    }
    return next
  }, [expanded, matched])

  const toggle = (path: string) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(path)) next.delete(path)
      else next.add(path)
      return next
    })
  }

  const expandAll = () => {
    const next = new Set<string>([''])
    const walk = (value: Json, path: string) => {
      for (const [key, child] of entriesOf(value)) {
        const childPath = `${path}/${key}`
        if (kindOf(child) === 'object' || kindOf(child) === 'array') {
          next.add(childPath)
          walk(child, childPath)
        }
      }
    }
    walk(data, '')
    setExpanded(next)
  }

  if (bare) {
    return (
      <div className={css.tree} data-bare="">
        {entriesOf(data).map(([key, child]) => (
          <Node
            key={`/${key}`}
            name={key}
            value={child}
            path={`/${key}`}
            depth={0}
            expanded={visible}
            toggle={toggle}
            term={query}
            qt={qt}
            stringLimit={limit}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={css.root}>
      <div className={css.toolbar}>
        <input
          className={css.search}
          value={term}
          placeholder={qt('raw.search')}
          spellCheck={false}
          onChange={(event) => setTerm(event.currentTarget.value)}
        />
        <button type="button" className={css.button} onClick={expandAll}>{qt('raw.expandAll')}</button>
        <button type="button" className={css.button} onClick={() => setExpanded(new Set(['']))}>{qt('raw.collapseAll')}</button>
        <button type="button" className={css.button} onClick={() => { void navigator.clipboard?.writeText(JSON.stringify(data, null, 2)) }}>{qt('raw.copyAll')}</button>
        {matched !== null && <span className={css.count}>{qt('raw.matches', { count: matched.size })}</span>}
      </div>
      <div className={css.tree}>
        <Node name="root" value={data} path="" depth={0} expanded={visible} toggle={toggle} term={query} qt={qt} stringLimit={limit} />
      </div>
    </div>
  )
}