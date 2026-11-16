import assert from 'node:assert/strict'
import test from 'node:test'

import { matchesCell, matchesQuery, parseQuery, removeToken, toggleToken } from '../src/client/query.mjs'

const call = (over = {}) => ({
  callId: 'c1',
  name: 'bash',
  status: 'ok',
  turn: 2,
  durationMs: 120,
  ...over,
})

test('empty query matches everything', () => {
  const query = parseQuery('')
  assert.equal(query.active, false)
  assert.equal(matchesQuery(call(), query), true)
})

test('tool token filters by name', () => {
  const query = parseQuery('tool:bash')
  assert.equal(matchesQuery(call(), query), true)
  assert.equal(matchesQuery(call({ name: 'read' }), query), false)
})

test('negated tool excludes', () => {
  const query = parseQuery('-tool:read')
  assert.equal(matchesQuery(call(), query), true)
  assert.equal(matchesQuery(call({ name: 'read' }), query), false)
})

test('status supports alternatives', () => {
  const query = parseQuery('status:error|running')
  assert.equal(matchesQuery(call({ status: 'error' }), query), true)
  assert.equal(matchesQuery(call({ status: 'running' }), query), true)
  assert.equal(matchesQuery(call({ status: 'ok' }), query), false)
})

test('turn supports single value and range', () => {
  const single = parseQuery('turn:3')
  assert.equal(matchesQuery(call({ turn: 3 }), single), true)
  assert.equal(matchesQuery(call({ turn: 2 }), single), false)
  const range = parseQuery('turn:2-4')
  assert.equal(matchesQuery(call({ turn: 4 }), range), true)
  assert.equal(matchesQuery(call({ turn: 5 }), range), false)
})

test('duration treats missing value as not matching a minimum', () => {
  const query = parseQuery('ms:>1000')
  assert.equal(matchesQuery(call({ durationMs: 1500 }), query), true)
  assert.equal(matchesQuery(call({ durationMs: 800 }), query), false)
  assert.equal(matchesQuery(call({ durationMs: undefined }), query), false)
})

test('duration range and upper bound', () => {
  assert.equal(matchesQuery(call({ durationMs: 150 }), parseQuery('ms:100-200')), true)
  assert.equal(matchesQuery(call({ durationMs: 150 }), parseQuery('ms:<200')), true)
  assert.equal(matchesQuery(call({ durationMs: 120 }), parseQuery('ms:>200')), false)
})

test('error code filters by numeric equality', () => {
  const query = parseQuery('code:401')
  assert.equal(matchesQuery(call({ errorCode: 401 }), query), true)
  assert.equal(matchesQuery(call({ errorCode: 500 }), query), false)
})

test('free text searches name, args, result and error text', () => {
  const query = parseQuery('pnpm')
  assert.equal(matchesQuery(call({ args: '{"command":"pnpm test"}' }), query), true)
  assert.equal(matchesQuery(call({ result: 'pnpm ok' }), query), true)
  assert.equal(matchesQuery(call({ errorText: 'PNPM failed' }), query), true)
  assert.equal(matchesQuery(call(), query), false)
})

test('tokens combine with AND', () => {
  const query = parseQuery('tool:bash status:error')
  assert.equal(matchesQuery(call({ status: 'error' }), query), true)
  assert.equal(matchesQuery(call({ status: 'ok' }), query), false)
  assert.equal(matchesQuery(call({ name: 'read', status: 'error' }), query), false)
})

test('invalid values are kept as tokens but ignored', () => {
  const query = parseQuery('status:weird')
  assert.equal(query.tokens.length, 1)
  assert.equal(query.tokens[0].valid, false)
  assert.equal(matchesQuery(call(), query), true)
})

test('unknown fields fall back to text', () => {
  const query = parseQuery('foo:bar')
  assert.equal(query.tokens[0].kind, 'text')
})

test('removeToken and toggleToken edit the raw query', () => {
  assert.equal(removeToken('tool:bash status:error', 'tool:bash'), 'status:error')
  assert.equal(toggleToken('tool:bash', 'status:error'), 'tool:bash status:error')
  assert.equal(toggleToken('tool:bash status:error', 'status:error'), 'tool:bash')
})
const cell = (over = {}) => ({
  kind: 'message',
  text: 'Done. The workspace is readable.',
  turn: 4,
  timeSeconds: 1.2,
  ...over,
})

test('type selects record kinds and accepts assistant as a message alias', () => {
  const query = parseQuery('type:message')
  assert.equal(matchesCell(cell(), query), true)
  assert.equal(matchesCell(cell({ kind: 'user' }), query), false)
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'bash' }), query), false)
  assert.equal(matchesCell(cell(), parseQuery('type:assistant')), true)
  assert.equal(matchesCell(cell({ kind: 'subtool' }), parseQuery('type:call')), true)
  assert.equal(matchesCell(cell({ kind: 'message' }), parseQuery('type:call')), false)
})

test('type supports alternatives and negation', () => {
  const query = parseQuery('type:user|system')
  assert.equal(matchesCell(cell({ kind: 'user' }), query), true)
  assert.equal(matchesCell(cell({ kind: 'system' }), query), true)
  assert.equal(matchesCell(cell({ kind: 'message' }), query), false)
  const negated = parseQuery('-type:tool')
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'bash' }), negated), false)
  assert.equal(matchesCell(cell(), negated), true)
})

test('status:error hides ordinary assistant messages', () => {
  const query = parseQuery('status:error')
  assert.equal(matchesCell(cell(), query), false)
  assert.equal(matchesCell(cell({ isError: true }), query), true)
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'bash', outputDetail: 'x' }), query), false)
})

test('tool: only ever matches calls', () => {
  const query = parseQuery('tool:bash')
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'bash', outputDetail: 'ok' }), query), true)
  assert.equal(matchesCell(cell({ kind: 'message', text: 'tool:bash' }), query), false)
  const excluded = parseQuery('-tool:bash')
  assert.equal(matchesCell(cell(), excluded), true)
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'bash' }), excluded), false)
})

test('free text reaches message bodies, payloads and thinking', () => {
  assert.equal(matchesCell(cell(), parseQuery('readable')), true)
  assert.equal(matchesCell(cell(), parseQuery('missing')), false)
  assert.equal(matchesCell(cell({ outputDetail: 'legacy branch' }), parseQuery('legacy')), true)
  assert.equal(matchesCell(cell({ thinkingDetail: 'check HEAD' }), parseQuery('head')), true)
  assert.equal(matchesCell(cell({ kind: 'user', text: 'again, please' }), parseQuery('again')), true)
})

test('duration on a message uses its own elapsed time', () => {
  const query = parseQuery('ms:>1000')
  assert.equal(matchesCell(cell({ timeSeconds: 2.5 }), query), true)
  assert.equal(matchesCell(cell({ timeSeconds: 0.4 }), query), false)
  assert.equal(matchesCell(cell({ kind: 'tool', timeSeconds: null }), query), false)
  assert.equal(
    matchesCell(cell({ kind: 'tool', timeSeconds: null }), query, { durationMs: 1400 }),
    true,
  )
})

test('turn filters every kind, not just calls', () => {
  const query = parseQuery('turn:4')
  assert.equal(matchesCell(cell(), query), true)
  assert.equal(matchesCell(cell({ turn: 5 }), query), false)
})

test('code: only applies to calls with an error code', () => {
  const query = parseQuery('code:401')
  assert.equal(matchesCell(cell(), query), false)
  assert.equal(matchesCell(cell({ kind: 'tool', outputDetail: 'x' }), query, { errorCode: '401' }), true)
})

test('the turn of a cell comes from the caller, not the cell', () => {
  const query = parseQuery('turn:2')
  const cellWithoutTurn = { kind: 'message', text: 'hi', timeSeconds: 1 }
  assert.equal(matchesCell(cellWithoutTurn, query, { turn: 2 }), true)
  assert.equal(matchesCell(cellWithoutTurn, query, { turn: 3 }), false)
})
