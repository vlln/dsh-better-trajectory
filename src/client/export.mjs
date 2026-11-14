/** 把筛选后的工具调用导出为 Markdown / JSON（原生没有批量导出）。 */

function durationText(ms) {
  if (typeof ms !== 'number' || !Number.isFinite(ms)) return ''
  if (ms < 1_000) return `${Math.round(ms)}ms`
  if (ms < 60_000) return `${(ms / 1_000).toFixed(ms < 10_000 ? 1 : 0)}s`
  return `${Math.floor(ms / 60_000)}m${String(Math.round((ms % 60_000) / 1_000)).padStart(2, '0')}s`
}

function oneLine(value, max = 180) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim()
  return text.length > max ? `${text.slice(0, max)}…` : text
}

function cell(value) {
  return String(value ?? '').replace(/\r?\n/g, ' ').replace(/\|/g, '\\|').trim()
}

function jsonRecord(record, index) {
  return {
    index: index + 1,
    callId: record.callId ?? '',
    name: record.name ?? '',
    status: record.status ?? '',
    turn: record.turn ?? null,
    step: record.step ?? null,
    durationMs: record.durationMs ?? null,
    errorName: record.errorName ?? '',
    errorCode: record.errorCode ?? '',
    error: record.errorText ?? '',
    args: record.args ?? '',
    result: record.result ?? '',
  }
}

export function recordsToJson(records, meta = {}) {
  return JSON.stringify({
    format: 'dsh-better-trajectory/tool-calls/v1',
    sessionId: meta.sessionId ?? null,
    exportedAt: new Date().toISOString(),
    filter: meta.filter ?? '',
    count: records.length,
    records: records.map(jsonRecord),
  }, null, 2)
}

export function recordsToMarkdown(records, meta = {}) {
  const lines = [
    `# Better Trajectory — ${records.length} tool call${records.length === 1 ? '' : 's'}`,
    '',
    `- session: \`${meta.sessionId ?? 'unknown'}\``,
    `- filter: ${meta.filter ? `\`${meta.filter}\`` : '—'}`,
    `- exported: ${new Date().toISOString()}`,
    '',
    '| # | turn/step | tool | status | took | code | arguments / result |',
    '|---|---|---|---|---|---|---|',
  ]
  for (const [index, record] of records.entries()) {
    const summary = record.errorText || record.args || record.result || ''
    lines.push(`| ${index + 1} | ${cell(turnOf(record))} | ${cell(record.name)} | ${cell(record.status)} | ${cell(durationText(record.durationMs))} | ${cell(record.errorCode)} | ${cell(oneLine(summary, 200))} |`)
  }

  const failures = records.filter(record => record.status === 'error' || record.status === 'interrupted')
  if (failures.length > 0) {
    lines.push('', '## Failures', '')
    for (const [index, record] of failures.entries()) {
      lines.push(`### ${index + 1}. ${record.name || 'tool'} — ${record.errorCode || record.status}`)
      if (record.errorText) lines.push('', '```text', record.errorText, '```')
      if (record.args) lines.push('', '**Arguments**', '', '```json', record.args, '```')
      if (record.result) lines.push('', '**Result**', '', '```text', record.result, '```')
      lines.push('')
    }
  }
  return lines.join('\n')
}

function turnOf(record) {
  if (typeof record.turn !== 'number') return '—'
  return typeof record.step === 'number' ? `${record.turn}/${record.step}` : String(record.turn)
}
