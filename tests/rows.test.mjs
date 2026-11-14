import test from 'node:test'
import assert from 'node:assert/strict'

import {
  buildRows, collectFacets, emptyFilters, filterRows, formatDuration,
  locationOf, parseQuery, usageOf,
} from '../src/client/rows.mjs'
import { rowsToJson, rowsToMarkdown, rowToText } from '../src/client/export.mjs'
import { snapshot, emptySnapshot } from './fixture.mjs'

const rows = buildRows(snapshot)

function byId(id) {
  const row = rows.find(item => item.id === id)
  assert.ok(row, `expected row ${id}`)
  return row
}

test('buildRows flattens tools, subcalls, messages and terminal notices', () => {
  assert.equal(rows.length, 15)
  assert.deepEqual(
    rows.map(row => row.kind),
    ['user', 'assistant', 'tool', 'tool', 'tool', 'tool', 'error', 'assistant', 'context', 'compaction', 'command', 'max-tokens', 'retry', 'tool', 'assistant'],
  )

  const root = byId('tool:call-run')
  assert.equal(root.depth, 0)
  assert.equal(root.status, 'ok')
  assert.equal(root.turn, 1)
  assert.equal(root.step, 1)

  const sub = byId('tool:call-sub')
  assert.equal(sub.depth, 1)
  assert.equal(sub.parentCallId, 'call-run')
  assert.equal(sub.name, 'bash')

  const failed = byId('tool:call-read')
  assert.equal(failed.status, 'error')
  assert.equal(failed.errorCode, 'ENOENT')
  assert.match(failed.preview, /ENOENT/)
  assert.match(failed.args, /missing\.ts/)

  const running = byId('tool:call-running')
  assert.equal(running.status, 'running')
  assert.equal(running.turn, 3)

  const assistant = byId('assistant:2')
  assert.equal(assistant.status, 'ok')
  assert.deepEqual(assistant.usage, { inputTokens: 120, outputTokens: 30 })
  assert.match(assistant.result, /inspect the project/)

  const failedTurn = byId('error:6')
  assert.equal(failedTurn.status, 'error')
  assert.equal(failedTurn.errorCode, 'E_MODEL')

  const assistantAfterFailure = byId('assistant:7')
  assert.equal(assistantAfterFailure.status, 'error')
  assert.equal(assistantAfterFailure.errorCode, 'E_MODEL')

  const partial = byId('assistant:partial')
  assert.equal(partial.status, 'running')
  assert.match(partial.result, /streaming now/)
})

test('buildRows handles an empty or missing snapshot', () => {
  assert.deepEqual(buildRows(emptySnapshot), [])
  assert.deepEqual(buildRows(undefined), [])
  assert.deepEqual(buildRows(null), [])
})

test('durations and locations are tolerant of missing fields', () => {
  assert.equal(byId('tool:call-bash').durationMs, 150)
  assert.equal(formatDuration(150), '150ms')
  assert.equal(formatDuration(1_500), '1.5s')
  assert.equal(formatDuration(65_000), '1m05s')
  assert.deepEqual(locationOf({ kind: 'step', turn: { turn: 2 }, step: { step: 3 } }), { turn: 2, step: 3 })
  assert.deepEqual(locationOf({ kind: 'turn', turn: 4 }), { turn: 4 })
  assert.deepEqual(usageOf({ inputTokens: 1, outputTokens: 2, ignored: 3 }), { inputTokens: 1, outputTokens: 2 })
})

test('filters by tool name, status, kind and turn', () => {
  const bash = filterRows(rows, { ...emptyFilters(), tools: ['bash'] })
  assert.equal(bash.length, 3)
  assert.ok(bash.every(row => row.name === 'bash'))

  const failures = filterRows(rows, { ...emptyFilters(), statuses: ['error'] })
  assert.equal(failures.length, 4)
  assert.ok(failures.every(row => row.status === 'error'))

  const tools = filterRows(rows, { ...emptyFilters(), kinds: ['tool'] })
  assert.equal(tools.length, 5)

  const turn2 = filterRows(rows, { ...emptyFilters(), turns: [2] })
  assert.ok(turn2.length >= 4)
  assert.ok(turn2.every(row => row.turn === 2))
})

test('faceted counts ignore their own dimension', () => {
  const filters = { ...emptyFilters(), tools: ['bash'], statuses: ['error'] }
  const facets = collectFacets(rows, filters)
  const bash = facets.tools.find(tool => tool.name === 'bash')
  assert.ok(bash, 'bash remains in the tool facet while selected')
  assert.equal(bash.count, 3, 'tool counts ignore the status filter so the tool list stays stable')
  assert.equal(facets.statuses.error ?? 0, 0, 'status facet ignores the status filter but keeps the tool filter')
  assert.ok(facets.tools.some(tool => tool.name === 'edit') === false)
})

test('query parser supports fields, negation, quoted text and ranges', () => {
  const query = parseQuery('tool:bash status:error "no such" turn:>=2 -kind:assistant')
  assert.deepEqual(query.fields.tool, ['bash'])
  assert.deepEqual(query.fields.status, ['error'])
  assert.deepEqual(query.fields.turn, ['>=2'])
  assert.deepEqual(query.fields.kind, undefined)
  assert.deepEqual(query.negative.kind, ['assistant'])
  assert.deepEqual(query.bare, ['no such'])

  const matched = filterRows(rows, { ...emptyFilters(), query: 'tool:read status:error' })
  assert.equal(matched.length, 1)
  assert.equal(matched[0].name, 'read')

  const noRead = filterRows(rows, { ...emptyFilters(), query: '-tool:read' })
  assert.ok(noRead.every(row => row.name !== 'read'))

  const slow = filterRows(rows, { ...emptyFilters(), query: 'ms:>=100' })
  assert.ok(slow.length >= 2)
  assert.ok(slow.every(row => typeof row.durationMs === 'number' && row.durationMs >= 100))
})

test('search is case-insensitive and can target arguments/results', () => {
  const lower = filterRows(rows, { ...emptyFilters(), query: 'enoent' })
  assert.equal(lower.length, 1)
  assert.equal(lower[0].id, 'tool:call-read')

  const args = filterRows(rows, { ...emptyFilters(), query: 'src/missing.ts' })
  assert.equal(args.length, 1)

  const result = filterRows(rows, { ...emptyFilters(), query: 'build passed' })
  assert.equal(result.length, 1)
  assert.equal(result[0].id, 'tool:call-bash')
})

test('export formats carry ids, failures and full values', () => {
  const failed = filterRows(rows, { ...emptyFilters(), statuses: ['error'] })
  const markdown = rowsToMarkdown(failed, { sessionId: 's1', query: 'status:error', total: rows.length })
  assert.match(markdown, /Better Trajectory/)
  assert.match(markdown, /## Failures/)
  assert.match(markdown, /ENOENT/)
  assert.match(markdown, /src\/missing\.ts/)

  const json = JSON.parse(rowsToJson(failed, { sessionId: 's1', query: 'status:error', total: rows.length }))
  assert.equal(json.format, 'dsh-better-trajectory/v1')
  assert.equal(json.count, failed.length)
  assert.equal(json.records[0].callId, 'call-read')

  const text = rowToText(byId('tool:call-read'))
  assert.match(text, /## Error/)
  assert.match(text, /ToolError/)
})