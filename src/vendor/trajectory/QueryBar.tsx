// @ts-nocheck
/** 查询条：Logfire 风格 token + chip + 建议 + Quick 筛选。 */
import { useEffect, useMemo, useRef, useState } from 'react'
import { IconSearchOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { removeToken, toggleToken } from '../../client/query.mjs'
import css from './QueryBar.module.css'

export interface QueryBarProps {
  query: string
  onQuery: (next: string) => void
  stats: { total: number; matched: number; hidden: number; errors: number; running: number }
  /** Always-on totals for the whole loaded window. */
  totals: {
    records: number
    calls: number
    errors: number
    durationMs: number | null
  }
  tools: readonly { name: string; calls?: number; count?: number }[]
  turns: readonly { turn: number; count: number }[]
  canGoBack: boolean
  canGoForward: boolean
  onBack: () => void
  onForward: () => void
  showTime: boolean
  onToggleTime: () => void
  tokens: readonly { kind: string; raw: string; valid: boolean; negated: boolean }[]
  actualDuration: boolean
  onActualDurationChange: (value: boolean) => void
  allTurnsCollapsed: boolean
  onToggleAllTurns: () => void
  allAssistantsCollapsed: boolean
  onToggleAllAssistants: () => void
  allSubCallsCollapsed: boolean
  onToggleAllSubCalls: () => void
  t: (key: string) => string
  qt: (key: string, params?: Record<string, string | number>) => string
}

/** Wall-clock span of the loaded window: `812ms` / `4.2s` / `51m05s` / `3h12m` / `19d18h`. */
function formatSpan(milliseconds: number): string {
  const ms = Math.max(0, Math.round(milliseconds))
  if (ms < 1_000) return `${ms}ms`
  const seconds = ms / 1_000
  if (seconds < 10) return `${seconds.toFixed(1)}s`
  if (seconds < 60) return `${Math.round(seconds)}s`
  const minutes = Math.floor(seconds / 60)
  const rest = Math.round(seconds % 60)
  if (minutes < 60) return `${minutes}m${String(rest).padStart(2, '0')}s`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h${String(minutes % 60).padStart(2, '0')}m`
  const days = Math.floor(hours / 24)
  return `${days}d${String(hours % 24).padStart(2, '0')}h`
}

interface Suggestion {
  insert: string
  label: string
  detail?: string
  group: string
}

/** 建议列表：工具（带计数）、状态、轮次、耗时。 */
function buildSuggestions(props: QueryBarProps, lastWord: string): Suggestion[] {
  const out: Suggestion[] = []
  const term = lastWord.replace(/^-/, '')
  const [field, value = ''] = term.includes(':') ? [term.slice(0, term.indexOf(':')), term.slice(term.indexOf(':') + 1)] : ['', '']
  /* typing a field prefix (`ty`, `st`) should surface that field's values, while
     typing a value (`bash`, `#3`) still filters inside every group */
  const needle = field === '' ? term : value
  const match = (text: string) => text.toLowerCase().includes(needle.toLowerCase())
  const wholeGroup = (name: string) => needle !== '' && name.startsWith(needle.toLowerCase())

  if (field === '' || field === 'tool') {
    for (const tool of props.tools) {
      if (wholeGroup('tool') || match(tool.name)) out.push({ insert: `tool:${tool.name}`, label: tool.name, detail: String(tool.calls ?? tool.count ?? ''), group: 'tool:' })
    }
  }
  if (field === '' || field === 'status') {
    for (const status of ['error', 'running', 'ok']) {
      if (wholeGroup('status') || match(status)) out.push({ insert: `status:${status}`, label: status, group: 'status:' })
    }
  }
  if (field === '' || field === 'turn') {
    for (const turn of props.turns.slice(0, 8)) {
      if (wholeGroup('turn') || match(String(turn.turn))) out.push({ insert: `turn:${turn.turn}`, label: String(turn.turn), detail: String(turn.count), group: 'turn:' })
    }
  }
  if (field === '' || field === 'type') {
    for (const type of ['call', 'message', 'user', 'system', 'context', 'compacted']) {
      if (wholeGroup('type') || match(type)) out.push({ insert: `type:${type}`, label: type, group: 'type:' })
    }
  }
  if (field === '' || field === 'ms') {
    for (const raw of ['ms:>1000', 'ms:>3000']) {
      if (wholeGroup('ms') || match(raw)) out.push({ insert: raw, label: raw.replace(/^ms:/, ''), group: 'ms:' })
    }
  }
  return out.slice(0, 14)
}

/**
 * 渲染查询条。
 * @param props 查询、计数与折叠控制。
 * @returns 工具栏元素。
 */
export function QueryBar(props: QueryBarProps) {
  const {
    query, onQuery, stats, tokens, t, qt, showTime, onToggleTime,
    canGoBack, canGoForward, onBack, onForward,
  } = props
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [syntaxOpen, setSyntaxOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const words = query.trim() === '' ? [] : query.trim().split(/\s+/)
  const lastWord = words.at(-1) ?? ''
  const suggestions = useMemo(() => buildSuggestions(props, lastWord), [props, lastWord])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== '/') return
      const target = event.target
      if (target instanceof HTMLElement
        && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return
      event.preventDefault()
      inputRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  /* arrow keys move `active`; without this the selected row can walk out of the
     scroll container and the menu looks like it ignores the keyboard */
  useEffect(() => {
    if (!open) return
    const option = menuRef.current?.querySelectorAll<HTMLElement>('[role=option]')[active]
    option?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  useEffect(() => {
    if (!open) return
    const onDown = (event: MouseEvent) => {
      if (event.target instanceof Node && rootRef.current !== null && !rootRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const pick = (suggestion: Suggestion) => {
    const next = [...words.slice(0, -1), suggestion.insert].join(' ')
    onQuery(next)
    setOpen(false)
    inputRef.current?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      if (query !== '') onQuery('')
      setOpen(false)
      return
    }
    if (!open) return
    if (event.key === 'ArrowDown') { event.preventDefault(); setActive(i => Math.min(i + 1, suggestions.length - 1)) }
    else if (event.key === 'ArrowUp') { event.preventDefault(); setActive(i => Math.max(i - 1, 0)) }
    else if (event.key === 'Enter' || event.key === 'Tab') {
      if (suggestions.length === 0) { if (event.key === 'Enter') setOpen(false); return }
      event.preventDefault()
      pick(suggestions[active] ?? suggestions[0])
    }
  }


  return (
    <div className={css.root} role="toolbar" aria-label={t('toolbar.aria')}>
      <div className={css.row} ref={rootRef}>
        <div className={css.history}>
          <button
            type="button"
            className={css.historyButton}
            disabled={!canGoBack}
            aria-label={qt('nav.back')}
            title={qt('nav.back')}
            onClick={onBack}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M10 3.5 5.5 8l4.5 4.5" />
            </svg>
          </button>
          <button
            type="button"
            className={css.historyButton}
            disabled={!canGoForward}
            aria-label={qt('nav.forward')}
            title={qt('nav.forward')}
            onClick={onForward}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M6 3.5 10.5 8 6 12.5" />
            </svg>
          </button>
        </div>
        <span className={css.divider} aria-hidden="true" />
        <div className={css.actions}>
          <button
            type="button"
            className={css.toggle}
            aria-pressed={props.actualDuration}
            data-tip={t('toolbar.useActualDuration')}
            onClick={() => props.onActualDurationChange(!props.actualDuration)}
          >
            <svg className={css.toggleIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="5.25" />
              <path d="M8 4.75V8l2.25 1.5" />
            </svg>
            {t('toolbar.duration')}
          </button>
          <button type="button" className={css.fold} aria-pressed={showTime} data-tip={qt('query.timeHint')} onClick={onToggleTime}>
            <svg className={css.foldIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2.25" y="3.25" width="11.5" height="9.5" rx="1.5" />
              <path d="M6.25 3.25v9.5" />
            </svg>
            {qt('query.time')}
          </button>
          <button type="button" className={css.fold} aria-pressed={props.allTurnsCollapsed} data-tip={t('toolbar.turns')} onClick={props.onToggleAllTurns}>
            {props.allTurnsCollapsed ? '⊞' : '⊟'} {t('toolbar.turns')}
          </button>
          <button type="button" className={css.fold} aria-pressed={props.allAssistantsCollapsed} data-tip={t('toolbar.calls')} onClick={props.onToggleAllAssistants}>
            {props.allAssistantsCollapsed ? '⊞' : '⊟'} {t('toolbar.calls')}
          </button>
          <button type="button" className={css.fold} aria-pressed={props.allSubCallsCollapsed} data-tip={t('toolbar.subCalls')} onClick={props.onToggleAllSubCalls}>
            {props.allSubCallsCollapsed ? '⊞' : '⊟'} {t('toolbar.subCalls')}
          </button>
        </div>

        <div className={css.search}>
          <IconSearchOutlineRegular size={12} className={css.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            className={css.input}
            aria-label={qt('query.placeholder')}
            placeholder={qt('query.placeholder')}
            value={query}
            spellCheck={false}
            autoComplete="off"
            onChange={(event) => { onQuery(event.currentTarget.value); setOpen(true); setActive(0) }}
            onFocus={() => setOpen(true)}
            onBlur={() => { window.setTimeout(() => setOpen(false), 120) }}
            onKeyDown={onKeyDown}
          />
          {query !== '' && (
            <button type="button" className={css.clear} aria-label={qt('query.clear')} data-tip={qt('query.clear')} onClick={() => { onQuery(''); inputRef.current?.focus() }}>
              ×
            </button>
          )}
          {open && query.trim() !== '' && suggestions.length > 0 && (
            <div className={css.menu} role="listbox" ref={menuRef} aria-label={qt('query.suggestions')}>
              {suggestions.map((suggestion, index) => (
                <button
                  key={`${suggestion.group}:${suggestion.insert}`}
                  type="button"
                  role="option"
                  aria-selected={index === active}
                  className={css.option}
                  data-active={index === active || undefined}
                  onMouseEnter={() => setActive(index)}
                  onMouseDown={(event) => { event.preventDefault(); pick(suggestion) }}
                >
                  <span className={css.optionGroup}>{suggestion.group}</span>
                  <span className={css.optionLabel}>{suggestion.label}</span>
                  {suggestion.detail !== undefined && <span className={css.optionDetail}>{suggestion.detail}</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <span
          className={css.infoWrap}
          onMouseEnter={() => setSyntaxOpen(true)}
          onMouseLeave={() => setSyntaxOpen(false)}
        >
          <button
            type="button"
            className={css.infoButton}
            aria-label={qt('syntax.title')}
            aria-expanded={syntaxOpen}
            data-tip={qt('syntax.title')}
            onFocus={() => setSyntaxOpen(true)}
            onBlur={() => setSyntaxOpen(false)}
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6.1" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 4.4v4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="8" cy="11.3" r=".85" fill="currentColor" />
            </svg>
          </button>
          {syntaxOpen && (
            <div className={css.syntax} role="dialog" aria-label={qt('syntax.title')}>
              <p className={css.syntaxLead}>{qt('syntax.lead')}</p>
              <dl className={css.syntaxGrid}>
                <dt>tool:bash</dt><dd>{qt('syntax.tool')}</dd>
                <dt>type:message</dt><dd>{qt('syntax.type')}</dd>
                <dt>status:error</dt><dd>{qt('syntax.status')}</dd>
                <dt>turn:2-5</dt><dd>{qt('syntax.turn')}</dd>
                <dt>ms:&gt;1000</dt><dd>{qt('syntax.ms')}</dd>
                <dt>code:401</dt><dd>{qt('syntax.code')}</dd>
                <dt>args:path</dt><dd>{qt('syntax.args')}</dd>
                <dt>result:error</dt><dd>{qt('syntax.result')}</dd>
                <dt>error:timeout</dt><dd>{qt('syntax.error')}</dd>
                <dt>&quot;git push&quot;</dt><dd>{qt('syntax.phrase')}</dd>
                <dt>-bash</dt><dd>{qt('syntax.negate')}</dd>
                <dt>bash</dt><dd>{qt('syntax.fulltext')}</dd>
              </dl>
            </div>
          )}
        </span>

      </div>

      {/* second row: what is loaded on the left, what is filtered on the right */}
      <div className={css.metaRow}>
        <div className={css.totals} data-query={query.trim() === '' ? undefined : 'active'}>
          <span className={css.totalsItem}>
            <i>{qt('totals.records')}</i>
            <b>{props.totals.records.toLocaleString()}</b>
          </span>
          <span className={css.totalsItem}>
            <i>{qt('totals.calls')}</i>
            <b>{props.totals.calls.toLocaleString()}</b>
          </span>
          <span className={css.totalsItem} data-tone={props.totals.errors > 0 ? 'error' : undefined}>
            <i>{qt('totals.errors')}</i>
            <b>{props.totals.errors.toLocaleString()}</b>
          </span>
          {props.totals.durationMs !== null && (
            <span className={css.totalsItem}>
              <i>{qt('totals.duration')}</i>
              <b>{formatSpan(props.totals.durationMs)}</b>
            </span>
          )}
        </div>

        {tokens.length > 0 && (
          <div className={css.chips}>
            {tokens.map(token => (
              <span key={token.raw} className={css.chip} data-invalid={!token.valid || undefined}>
                <span className={css.chipKind}>{token.kind === 'text' ? qt('query.text') : token.kind}</span>
                <span className={css.chipValue}>{token.raw.replace(/^-?[a-z]+:/, '') || token.raw}</span>
                <button
                  type="button"
                  className={css.chipClose}
                  aria-label={qt('query.removeToken', { token: token.raw })}
                  onClick={() => onQuery(removeToken(query, token.raw))}
                >
                  ×
                </button>
              </span>
            ))}
            <span className={css.summary}>
              {qt('query.summary', { matched: stats.matched })}
              {stats.hidden > 0 && <span className={css.hidden}>· {qt('query.hidden', { count: stats.hidden })}</span>}
            </span>
            <button type="button" className={css.showAll} onClick={() => onQuery('')}>{qt('query.showAll')}</button>
          </div>
        )}
      </div>
      {tokens.some(token => !token.valid) && (
        <div className={css.invalidHint} role="status">
          {qt('query.invalid', { tokens: tokens.filter(token => !token.valid).map(token => token.raw).join(' ') })}
        </div>
      )}
    </div>
  )
}