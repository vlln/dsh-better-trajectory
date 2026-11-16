// @ts-nocheck
/** The single kind tag used by ledger rows, the row hover card and the timeline. */

import type { ReactNode } from 'react'
import css from './KindTag.module.css'

export function KindTag({ kind, label }: { kind: string; label: ReactNode }) {
  return (
    <span className={css.tag} data-kind={kind}>
      {label}
    </span>
  )
}