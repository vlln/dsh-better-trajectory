// @ts-nocheck
/**
 * The one copy button on this surface.
 *
 * Every place that copies a payload (a JSON node, a section, a call's
 * arguments, a program's source) renders this component, so the icon, the
 * copied/failed feedback and the hover reveal are defined once.
 *
 * Hover reveal: a host element marks itself with `data-copy-reveal` and the
 * buttons inside it fade in while that host is hovered or when a button takes
 * keyboard focus. `reveal="always"` opts out for toolbars, where the button is
 * the point of the row.
 */

import { useEffect, useState } from 'react'
import {
  IconCheckOutlineRegular,
  IconCopyOutlineRegular,
  writeClipboard,
} from '@deepseek-ai/dsh-client-ui-primitives'
import css from './CopyButton.module.css'

export function CopyButton({
  text,
  label,
  copiedLabel,
  failedLabel,
  reveal = 'hover',
  className,
}: {
  /** Payload written to the clipboard. */
  text: string
  /** Accessible name and tooltip in the idle state. */
  label: string
  copiedLabel: string
  failedLabel: string
  reveal?: 'hover' | 'always'
  className?: string
}) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  useEffect(() => {
    if (state === 'idle') return
    const timer = setTimeout(() => { setState('idle') }, 1_500)
    return () => { clearTimeout(timer) }
  }, [state])
  const title = state === 'idle' ? label : state === 'copied' ? copiedLabel : failedLabel
  return (
    <button
      type="button"
      className={className === undefined ? css.button : `${css.button} ${className}`}
      data-reveal={reveal}
      data-state={state}
      title={title}
      aria-label={title}
      onClick={(event) => {
        event.stopPropagation()
        void writeClipboard(text).then(
          (ok) => { setState(ok ? 'copied' : 'failed') },
          () => { setState('failed') },
        )
      }}
    >
      {state === 'copied'
        ? <IconCheckOutlineRegular size={12} />
        : <IconCopyOutlineRegular size={12} />}
    </button>
  )
}