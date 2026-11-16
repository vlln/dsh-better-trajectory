// @ts-nocheck
/**
 * Single hover card: position, head (kind tag + name + error), label/value rows
 * and an optional key-hint block. Used by ledger rows, the inspector subject and
 * the timeline cursor, so the same hover always looks the same.
 */

import { Fragment, type ReactNode } from 'react'
import { KindTag } from './KindTag.tsx'
import css from './HoverCard.module.css'

export interface HoverCardRow {
  label: ReactNode
  value: ReactNode
}

export interface HoverCardHint {
  key: string
  text: string
}

export function HoverCard({
  x,
  y,
  kind,
  label,
  name,
  isError,
  rows,
  extra,
  hints,
}: {
  x: number
  y: number
  /** Record kind; omitted by the timeline cursor when no bar is under it. */
  kind?: string
  label?: ReactNode
  name?: string
  isError?: boolean
  rows: HoverCardRow[]
  extra?: string
  hints?: readonly HoverCardHint[]
}) {
  const left = Math.max(8, Math.min(x + 14, window.innerWidth - 320))
  const top = Math.max(8, Math.min(y + 16, window.innerHeight - 240))
  return (
    <div className={css.card} style={{ left, top }} role="tooltip">
      {(kind !== undefined || label !== undefined) && (
        <div className={css.head}>
          {kind !== undefined && <KindTag kind={kind} label={label} />}
          {kind === undefined && <span className={css.headText}>{label}</span>}
          {name !== undefined && name !== '' && <span className={css.name}>{name}</span>}
          {isError === true && <span className={css.error}>error</span>}
        </div>
      )}
      {rows.length > 0 && (
        <dl className={css.grid}>
          {rows.map((row, index) => (
            <Fragment key={index}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </Fragment>
          ))}
        </dl>
      )}
      {extra !== undefined && extra !== '' && <p className={css.extra}>{extra}</p>}
      {hints !== undefined && hints.length > 0 && (
        <dl className={css.hints}>
          {hints.map(hint => (
            <Fragment key={hint.key}>
              <dt>{hint.key}</dt>
              <dd>{hint.text}</dd>
            </Fragment>
          ))}
        </dl>
      )}
    </div>
  )
}
