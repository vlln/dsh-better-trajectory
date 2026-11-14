/**
 * 把筛选后的记录导出为可粘贴 / 可归档的文本。
 *
 * 调试场景里真正需要带走的是「错误现场」：一行一条、包含工具名、状态、
 * 参数与结果。Markdown 便于贴进 issue，JSON 便于再做脚本处理。
 */

import { formatClock, formatDuration, oneLine } from './rows.mjs'

/** 转义 Markdown 表格单元格。 */
function cell(value) {
  return String(value ?? '')
    .replace(/\r?\n/g, ' ')
    .replace(/\|/g, '\\|')
    .trim()
}

/** @param {any} row @param {number} index */
function exportRecord(row, index) {
  return {
    index: index + 1,
    id: row.id,
    kind: row.kind,
    status: row.status,
    name: row.name ?? '',
    turn: row.turn ?? null,
    step: row.step ?? null,
    time: row.time,
    clock: formatClock(row.time),
    durationMs: row.durationMs ?? null,
    callId: row.callId ?? '',
    parentCallId: row.parentCallId ?? '',
    depth: row.depth ?? 0,
    preview: row.preview ?? '',
    args: row.args ?? '',
    result: row.result ?? '',
    error: row.error ?? '',
    errorCode: row.errorCode ?? '',
    requestStatus: row.requestStatus ?? '',
  }
}

/**
 * 生成 Markdown 表格 + 错误详情。
 * @param {any[]} rows
 * @param {{sessionId?: string, query?: string, total?: number}} meta
 */
export function rowsToMarkdown(rows, meta = {}) {
  const header = [
    `# Better Trajectory — ${rows.length} record${rows.length === 1 ? '' : 's'}`,
    '',
    `- session: \`${meta.sessionId ?? 'unknown'}\``,
    `- filtered: ${rows.length}${typeof meta.total === 'number' ? ` / ${meta.total}` : ''}`,
    `- query: ${meta.query ? `\`${meta.query.replace(/`/g, '\\`')}\`` : '—'}`,
    `- exported: ${new Date().toISOString()}`,
    '',
    '| # | time | turn/step | kind | name | status | took | preview |',
    '|---|---|---|---|---|---|---|---|',
  ]
  for (const [index, row] of rows.entries()) {
    header.push(`| ${index + 1} | ${cell(formatClock(row.time))} | ${cell(turnLabel(row))} | ${cell(row.kind)} | ${cell(row.name)} | ${cell(row.status)} | ${cell(formatDuration(row.durationMs))} | ${cell(oneLine(row.preview, 160))} |`)
  }

  const failures = rows.filter(row => row.status === 'error' || row.status === 'interrupted' || row.kind === 'error')
  if (failures.length > 0) {
    header.push('', '## Failures', '')
    for (const [index, row] of failures.entries()) {
      header.push(`### ${index + 1}. ${row.name || row.kind} — ${row.errorCode || row.status}`)
      if (row.error) header.push('', '```text', row.error, '```')
      if (row.args) header.push('', '**Arguments**', '', '```json', row.args, '```')
      if (row.result) header.push('', '**Result**', '', '```text', row.result, '```')
      header.push('')
    }
  }

  return header.join('\n')
}

/**
 * 生成结构化 JSON。
 * @param {any[]} rows
 * @param {{sessionId?: string, query?: string, total?: number}} meta
 */
export function rowsToJson(rows, meta = {}) {
  return JSON.stringify({
    format: 'dsh-better-trajectory/v1',
    sessionId: meta.sessionId ?? null,
    exportedAt: new Date().toISOString(),
    query: meta.query ?? '',
    total: meta.total ?? null,
    count: rows.length,
    records: rows.map(exportRecord),
  }, null, 2)
}

/** 单条记录 → 详情文本（复制按钮用）。 */
export function rowToText(row) {
  const lines = [
    `# ${row.name || row.kind} (${row.status})`,
    `time: ${formatClock(row.time)}`,
    `turn/step: ${turnLabel(row)}`,
    `duration: ${formatDuration(row.durationMs) || '—'}`,
  ]
  if (row.callId) lines.push(`callId: ${row.callId}`)
  if (row.parentCallId) lines.push(`parentCallId: ${row.parentCallId}`)
  if (row.error) lines.push('', '## Error', row.error)
  if (row.args) lines.push('', '## Arguments', row.args)
  if (row.result) lines.push('', '## Result', row.result)
  return lines.join('\n')
}

function turnLabel(row) {
  if (typeof row.turn !== 'number') return '—'
  return typeof row.step === 'number' ? `${row.turn}/${row.step}` : String(row.turn)
}