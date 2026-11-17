// @ts-nocheck
/**
 * Collapsible inspector block: title, optional count badge, optional actions and
 * a body that expands in place.
 *
 * The header is a row, not a button: the toggle and the actions are siblings so
 * an action (a copy button) is never nested inside another button.
 */

import { useState, type ReactNode } from 'react'
import css from './DetailSection.module.css'

export function DetailSection({
  title,
  badge,
  actions,
  defaultOpen = true,
  bare = false,
  children,
}: {
  title: string
  badge?: string
  actions?: ReactNode
  defaultOpen?: boolean
  bare?: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section className={css.section} data-open={open || undefined}>
      <div className={css.header} data-copy-reveal>
        <button
          type="button"
          className={css.toggle}
          aria-expanded={open}
          onClick={() => { setOpen(value => !value) }}
        >
          <span className={css.chevron} data-open={open || undefined} aria-hidden="true">▸</span>
          <span className={css.title}>{title}</span>
          {badge !== undefined && badge !== '' && <span className={css.badge}>{badge}</span>}
        </button>
        {actions !== undefined && <span className={css.actions}>{actions}</span>}
      </div>
      {open && (
        <div className={css.body} data-bare={bare || undefined}>
          {children}
        </div>
      )}
    </section>
  )
}

/** Plain-text payload; the section body scrolls, so it is never clipped. */
export function DetailText({ text, tone }: {
  text: string
  /** `error` renders the native red payload treatment. */
  tone?: 'error'
}) {
  return (
    <pre className={css.text} data-tone={tone}>
      {text}
    </pre>
  )
}