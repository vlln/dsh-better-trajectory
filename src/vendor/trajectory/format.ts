// @ts-nocheck
/**
 * The two plain formats this surface needs, defined once.
 *
 * Both are deliberately locale-free: they render durations and timestamps the
 * same way in every language (the units are symbols, the date is ISO order).
 * Anything that needs a translated unit asks the dictionary instead.
 */

/**
 * Compact wall-clock span: `812ms` / `4.2s` / `51m05s` / `3h12m` / `19d18h`.
 *
 * Used by the toolbar's window totals and by the timeline's offsets, so the two
 * never disagree about how a span is written.
 */
export function formatDurationSpan(milliseconds: number): string {
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

/**
 * Full timestamp for an instant: `2026-11-07 21:00:14.171`.
 *
 * The date is part of the reading — one ledger spans days, and a bare clock
 * time made two different days look adjacent.
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp)
  const two = (value: number): string => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${two(date.getMonth() + 1)}-${two(date.getDate())}`
    + ` ${two(date.getHours())}:${two(date.getMinutes())}:${two(date.getSeconds())}`
    + `.${String(date.getMilliseconds()).padStart(3, '0')}`
}
