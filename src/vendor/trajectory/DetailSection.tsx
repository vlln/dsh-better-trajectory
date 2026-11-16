// @ts-nocheck
/**
 * Collapsible inspector block: title, optional count badge, optional actions and
 * a body that expands in place. Replaces the old pattern where the overview
 * showed a preview and the full data lived behind a separate tab.
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
      <button
        type="button"
        className={css.header}
        aria-expanded={open}
        onClick={() => { setOpen(value => !value) }}
      >
        <span className={css.chevron} data-open={open || undefined} aria-hidden="true">▸</span>
        <span className={css.title}>{title}</span>
        {badge !== undefined && badge !== '' && <span className={css.badge}>{badge}</span>}
        {actions !== undefined && <span className={css.actions}>{actions}</span>}
      </button>
      {open && (
        <div className={css.body} data-bare={bare || undefined}>
          {children}
        </div>
      )}
    </section>
  )
}

/** Copy button that lives in a section header. */
export function SectionCopy({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      className={css.action}
      title={label}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation()
        void navigator.clipboard?.writeText(text)
        setDone(true)
        window.setTimeout(() => { setDone(false) }, 1200)
      }}
    >
      {done ? '✓' : '⧉'}
    </button>
  )
}

/** Plain-text payload with a collapsed height cap. */
export function DetailText({
  text,
  full = false,
  tone,
}: {
  text: string
  full?: boolean
  /** `error` renders the native red payload treatment. */
  tone?: 'error'
}) {
  return (
    <pre className={css.text} data-full={full || undefined} data-tone={tone}>
      {text}
    </pre>
  )
}

export function DetailEmpty({ children }: { children: ReactNode }) {
  return <p className={css.empty}>{children}</p>
}