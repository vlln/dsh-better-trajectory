import assert from 'node:assert/strict'
import test from 'node:test'

import { matchesQuery, parseQuery, removeToken, toggleToken } from '../src/client/query.mjs'

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