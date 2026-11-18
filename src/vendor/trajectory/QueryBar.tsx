// @ts-nocheck
/** 查询条：Logfire 风格 token + chip + 建议 + Quick 筛选。 */
import { useEffect, useMemo, useRef, useState } from 'react'
import { IconSearchOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import css from './QueryBar.module.css'
import { KINDS, ROLE_VALUES } from '../../client/query.mjs'
import { formatDurationSpan } from './format.ts'

export interface QueryChip {
  raw: string
  kind: string
  valid: boolean
  negated: boolean
}

export interface QueryBarProps {
  /** Text being typed; it filters live but is not a condition yet. */
  draft: string
  /** Committed conditions; editing the draft never removes them. */
  chips: readonly QueryChip[]
  onDraft: (text: string) => void
  /** Promote a piece of text to conditions. Enter is the only caller. */
  onCommit: (text: string) => void
  onRemoveChip: (raw: string) => void
  onClear: () => void
  stats: { matched: number; hidden: number }
  /** Whole-log figures from the host's `sessionStats` projection, when mounted. */
  whole?: {
    turns: number
    steps: number
    llmMs: number
    toolMs: number
  }
  /** Always-on totals for the loaded window. */
  totals: {
    records: number
    calls: number
    errors: number
    durationMs: number | null
    /** Older events exist but were never paged in, so every number is a floor. */
    partial?: boolean
  }
  tools: readonly { name: string; calls?: number; count?: number }[]
  turns: readonly { turn: number; count: number }[]
  canGoBack: boolean
  canGoForward: boolean
  onBack: () => void
  onForward: () => void
  showTime: boolean
  onToggleTime: () => void
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

interface Suggestion {
  insert: string
  label: string
  detail?: string
  group: string
}

type ChipTone = 'error' | 'ok' | 'warn' | 'tool' | 'assistant' | 'user' | 'context' | 'neutral'

/**
 * A condition chip borrows the colour of what it filters: error red, ok green,
 * running amber, tool orange, assistant violet, user blue, context green — so the
 * chip row reads as a colour legend for the ledger below.
 */
function chipTone(chip: { kind: string; raw: string }): ChipTone {
  const value = chip.raw.replace(/^-?[a-z]+:/, '').toLowerCase()
  if (chip.kind === 'status') {
    if (value.includes('error')) return 'error'
    if (value.includes('running')) return 'warn'
    return 'ok'
  }
  if (chip.kind === 'type') {
    if (value === 'message' || value === 'assistant') return 'assistant'
    if (value === 'tool' || value === 'subtool') return 'tool'
    if (value === 'context') return 'context'
    if (value === 'user') return 'user'
    return 'neutral'
  }
  if (chip.kind === 'tool') return 'tool'
  if (chip.kind === 'code' || chip.kind === 'error') return 'error'
  return 'neutral'
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
  if (field === '' || field === 'role') {
    /* the parser's own vocabulary: a value the menu offers must parse */
    for (const role of ROLE_VALUES) {
      if (wholeGroup('role') || match(role)) out.push({ insert: `role:${role}`, label: role, group: 'role:' })
    }
  }
  if (field === '' || field === 'kind' || field === 'type') {
    for (const kind of KINDS) {
      if (wholeGroup('kind') || wholeGroup('type') || match(kind)) out.push({ insert: `kind:${kind}`, label: kind, group: 'kind:' })
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
    draft, chips, stats, t, qt, showTime, onToggleTime,
    canGoBack, canGoForward, onBack, onForward,
  } = props
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [syntaxOpen, setSyntaxOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const blurTimer = useRef<number | null>(null)

  useEffect(() => () => {
    if (blurTimer.current !== null) window.clearTimeout(blurTimer.current)
  }, [])

  const words = draft.trim() === '' ? [] : draft.trim().split(/\s+/)
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

  /* a suggestion only completes the word being typed; it never becomes a
     condition on its own — Enter is the only way to add one */
  const completeWith = (suggestion: Suggestion): string =>
    [...words.slice(0, -1), suggestion.insert].join(' ')

  const pick = (suggestion: Suggestion) => {
    props.onDraft(completeWith(suggestion))
    inputRef.current?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setOpen(false)
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      /* Enter adds conditions, and it also completes the highlighted suggestion
         so one keypress is enough */
      const chosen = open && suggestions.length > 0
        ? suggestions[active] ?? suggestions[0]
        : undefined
      props.onCommit(chosen === undefined ? draft : completeWith(chosen))
      setOpen(false)
      return
    }
    if (!open) return
    if (event.key === 'ArrowDown') { event.preventDefault(); setActive(i => Math.min(i + 1, suggestions.length - 1)) }
    else if (event.key === 'ArrowUp') { event.preventDefault(); setActive(i => Math.max(i - 1, 0)) }
    else if (event.key === 'Tab') {
      if (suggestions.length === 0) return
      event.preventDefault()
      pick(suggestions[active] ?? suggestions[0])
    }
  }


  return (
    <div className={css.root} role="toolbar" aria-label={t('toolbar.aria')}>
      <div className={css.rowLeft} ref={rootRef}>
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
      </div>

      <div className={css.rowRight}>
        <div className={css.search}>
          <IconSearchOutlineRegular size={12} className={css.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            className={css.input}
            aria-label={qt('query.placeholder')}
            placeholder={qt('query.placeholder')}
            value={draft}
            spellCheck={false}
            autoComplete="off"
            onChange={(event) => { props.onDraft(event.currentTarget.value); setOpen(true); setActive(0) }}
            onFocus={() => setOpen(true)}
            onBlur={() => {
              if (blurTimer.current !== null) window.clearTimeout(blurTimer.current)
              blurTimer.current = window.setTimeout(() => setOpen(false), 120)
            }}
            onKeyDown={onKeyDown}
          />
          {open && draft.trim() !== '' && suggestions.length > 0 && (
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
                <dt>role:assistant</dt><dd>{qt('syntax.role')}</dd>
                <dt>kind:context</dt><dd>{qt('syntax.type')}</dd>
                <dt>model:gpt-6.1</dt><dd>{qt('syntax.model')}</dd>
                <dt>provider:deepseek</dt><dd>{qt('syntax.provider')}</dd>
                <dt>source:tool-jobs</dt><dd>{qt('syntax.source')}</dd>
                <dt>form:notice</dt><dd>{qt('syntax.form')}</dd>
                <dt>status:error</dt><dd>{qt('syntax.status')}</dd>
                <dt>turn:2-5</dt><dd>{qt('syntax.turn')}</dd>
                <dt>step:120-180</dt><dd>{qt('syntax.step')}</dd>
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

      <div className={css.metaLeft}>
        {props.whole !== undefined && props.totals.partial === true && (
          /* The window totals are a floor while history is unloaded; the host
             already knows the whole log's turn/step/time figures, so show both
             with explicit captions instead of pretending one is the other. */
          <div className={css.totals} data-whole title={qt('totals.wholeHint')}>
            <span className={css.totalsCaption}>{qt('totals.whole')}</span>
            <span className={css.totalsItem}>
              <i>{qt('totals.turns')}</i>
              <b>{props.whole.turns.toLocaleString()}</b>
            </span>
            <span className={css.totalsItem}>
              <i>{qt('totals.steps')}</i>
              <b>{props.whole.steps.toLocaleString()}</b>
            </span>
            {props.whole.llmMs > 0 && (
              <span className={css.totalsItem}>
                <i>{qt('totals.llm')}</i>
                <b>{formatDurationSpan(props.whole.llmMs)}</b>
              </span>
            )}
            {props.whole.toolMs > 0 && (
              <span className={css.totalsItem}>
                <i>{qt('totals.tool')}</i>
                <b>{formatDurationSpan(props.whole.toolMs)}</b>
              </span>
            )}
          </div>
        )}
        <div
          className={css.totals}
          data-partial={props.totals.partial || undefined}
          title={props.totals.partial ? qt('totals.partialHint') : undefined}
        >
          {props.whole !== undefined && props.totals.partial === true && (
            <span className={css.totalsCaption}>{qt('totals.window')}</span>
          )}
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
              <b>{formatDurationSpan(props.totals.durationMs)}</b>
            </span>
          )}
          {props.totals.partial && (
            <span className={css.totalsMore} aria-hidden="true">{qt('totals.partial')}</span>
          )}
        </div>
      </div>

      <div className={css.metaRight}>
        {chips.length > 0 && (
          <div className={css.chips}>
            {chips.map(chip => (
              <span
                key={chip.raw}
                className={css.chip}
                data-tone={chipTone(chip)}
                data-invalid={!chip.valid || undefined}
              >
                <span className={css.chipKind}>{chip.kind === 'text' ? qt('query.text') : chip.kind}</span>
                <span className={css.chipValue}>{chip.raw.replace(/^-?[a-z]+:/, '') || chip.raw}</span>
                <button
                  type="button"
                  className={css.chipClose}
                  aria-label={qt('query.removeToken', { token: chip.raw })}
                  onClick={() => props.onRemoveChip(chip.raw)}
                >
                  ×
                </button>
              </span>
            ))}
            <button type="button" className={css.clearChip} onClick={props.onClear}>
              {qt('query.clearAll')}
            </button>
          </div>
        )}
        {(chips.length > 0 || draft.trim() !== '') && (
          <span className={css.summary}>
            {qt('query.summary', { matched: stats.matched })}
            {stats.hidden > 0 && <span className={css.hidden}>· {qt('query.hidden', { count: stats.hidden })}</span>}
          </span>
        )}
      </div>
    </div>
  )
}
