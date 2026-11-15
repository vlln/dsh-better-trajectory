// @ts-nocheck
/** JsonValue / assertNever，取自 @deepseek-ai/dsh-util-values（MIT）。 */
export type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue }

export function assertNever(value, context) {
  const rendered = (JSON.stringify(value)) ?? String(value)
  throw new Error(`unreachable variant${context ? ` in ${context}` : ''}: ${rendered}`)
}
