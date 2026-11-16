// @ts-nocheck
/** Single hover card: position, head (kind tag + name + error) and label/value rows. */

import { Fragment, type ReactNode } from 'react'
import { KindTag } from './KindTag.tsx'
import css from './HoverCard.module.css'

export interface HoverCardRow {
  label: ReactNode
  value: ReactNode
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
}: {
  x: number
  y: number
  kind: string
  label: ReactNode
  name?: string
  isError?: boolean
  rows: HoverCardRow[]
  extra?: string
}) {
  const left = Math.max(8, Math.min(x + 14, window.innerWidth - 320))
  const top = Math.max(8, Math.min(y + 16, window.innerHeight - 220))
  return (
    <div className={css.card} style={{ left, top }} role="tooltip">
      <div className={css.head}>
        <KindTag kind={kind} label={label} />
        {name !== undefined && name !== '' && <span className={css.name}>{name}</span>}
        {isError === true && <span className={css.error}>error</span>}
      </div>
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
    </div>
  )
}