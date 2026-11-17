import assert from 'node:assert/strict'
import test from 'node:test'

import { KINDS, ROLE_VALUES, matchesCell, parseQuery, tokenizeQuery } from '../src/client/query.mjs'

const cell = (over = {}) => ({
  kind: 'message',
  text: 'Done. The workspace is readable.',
  turn: 4,
  timeSeconds: 1.2,
  ...over,
})

const toolCell = (over = {}) => cell({ kind: 'tool', toolName: 'bash', outputDetail: 'ok', ...over })
/* no elapsed time of its own: duration comes from the tool index via `meta` */
const noTime = (over = {}) => toolCell({ timeSeconds: undefined, ...over })

test('empty query matches everything', () => {
  const query = parseQuery('')
  assert.equal(query.active, false)
  assert.equal(matchesCell(toolCell(), query), true)
})

test('tool token filters by name', () => {
  const query = parseQuery('tool:bash')
  assert.equal(matchesCell(toolCell(), query), true)
  assert.equal(matchesCell(toolCell({ toolName: 'read' }), query), false)
})

test('negated tool excludes', () => {
  const query = parseQuery('-tool:read')
  assert.equal(matchesCell(toolCell(), query), true)
  assert.equal(matchesCell(toolCell({ toolName: 'read' }), query), false)
})

test('status supports alternatives', () => {
  const query = parseQuery('status:error|running')
  assert.equal(matchesCell(toolCell({ isError: true }), query), true)
  assert.equal(matchesCell(toolCell({ outputDetail: undefined }), query), true)
  assert.equal(matchesCell(toolCell(), query), false)
})

test('turn supports single value and range', () => {
  const single = parseQuery('turn:3')
  assert.equal(matchesCell(toolCell({ turn: 3 }), single), true)
  assert.equal(matchesCell(toolCell({ turn: 2 }), single), false)
  const range = parseQuery('turn:2-4')
  assert.equal(matchesCell(toolCell({ turn: 4 }), range), true)
  assert.equal(matchesCell(toolCell({ turn: 5 }), range), false)
})

test('duration treats missing value as not matching a minimum', () => {
  const query = parseQuery('ms:>1000')
  assert.equal(matchesCell(noTime(), query, { durationMs: 1500 }), true)
  assert.equal(matchesCell(noTime(), query, { durationMs: 800 }), false)
  assert.equal(matchesCell(noTime(), query), false)
})

test('duration range and upper bound', () => {
  assert.equal(matchesCell(noTime(), parseQuery('ms:100-200'), { durationMs: 150 }), true)
  assert.equal(matchesCell(noTime(), parseQuery('ms:<200'), { durationMs: 150 }), true)
  assert.equal(matchesCell(noTime(), parseQuery('ms:>200'), { durationMs: 120 }), false)
})

test('error code filters by numeric equality', () => {
  const query = parseQuery('code:401')
  assert.equal(matchesCell(toolCell(), query, { errorCode: 401 }), true)
  assert.equal(matchesCell(toolCell(), query, { errorCode: 500 }), false)
})

test('free text searches name, args, result and error text', () => {
  const query = parseQuery('pnpm')
  assert.equal(matchesCell(toolCell({ inputDetail: '{"command":"pnpm test"}' }), query), true)
  assert.equal(matchesCell(toolCell({ outputDetail: 'pnpm ok' }), query), true)
  assert.equal(matchesCell(toolCell({ isError: true, outputDetail: 'PNPM failed' }), query), true)
  assert.equal(matchesCell(toolCell(), query), false)
})

test('tokens combine with AND', () => {
  const query = parseQuery('tool:bash status:error')
  assert.equal(matchesCell(toolCell({ isError: true }), query), true)
  assert.equal(matchesCell(toolCell(), query), false)
  assert.equal(matchesCell(toolCell({ toolName: 'read', isError: true }), query), false)
})

test('invalid values are kept as tokens but ignored', () => {
  const query = parseQuery('status:weird')
  assert.equal(query.tokens.length, 1)
  assert.equal(query.tokens[0].valid, false)
  assert.equal(matchesCell(toolCell(), query), true)
})

test('unknown fields fall back to text', () => {
  const query = parseQuery('foo:bar')
  assert.equal(query.tokens[0].kind, 'text')
})

test('tokenizeQuery keeps quoted phrases whole and splits on whitespace', () => {
  assert.deepEqual(tokenizeQuery('"git push" origin'), ['git push', 'origin'])
  assert.deepEqual(tokenizeQuery('tool:bash  status:error'), ['tool:bash', 'status:error'])
})

test('the suggestion vocabulary is the parser vocabulary', () => {
  /* one list, not two: every value the menu offers must parse as that field */
  for (const role of ROLE_VALUES) assert.deepEqual(parseQuery(`role:${role}`).filters.role, [role])
  for (const kind of KINDS) {
    const canonical = kind === 'message' ? 'message' : kind
    assert.equal(matchesCell(cell({ kind: canonical }), parseQuery(`kind:${kind}`)), true, kind)
  }
})

test('type selects record kinds and accepts assistant as a message alias', () => {
  const query = parseQuery('type:message')
  assert.equal(matchesCell(cell(), query), true)
  assert.equal(matchesCell(cell({ kind: 'user' }), query), false)
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'bash' }), query), false)
  assert.equal(matchesCell(cell(), parseQuery('type:assistant')), true)
  assert.equal(matchesCell(cell({ kind: 'subtool' }), parseQuery('type:tool|subtool')), true)
  assert.equal(matchesCell(cell({ kind: 'message' }), parseQuery('type:tool|subtool')), false)
  /* `call` was our invention; the closed upstream set has no such kind */
  assert.equal(parseQuery('type:call').tokens[0].valid, false)
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

test('bare words negate without the hyphen', () => {
  const query = parseQuery('-success')
  assert.equal(matchesCell(cell(), query), true)
  assert.equal(matchesCell(cell({ text: 'success: all done' }), query), false)
  assert.equal(query.tokens[0].negated, true)
})

test('unknown a:b stays a plain search term, with negation', () => {
  const query = parseQuery('http://example.com')
  assert.equal(matchesCell(cell({ text: 'see http://example.com/x' }), query), true)
  assert.equal(matchesCell(cell(), query), false)
  const excluded = parseQuery('-http://example.com')
  assert.equal(matchesCell(cell(), excluded), true)
  assert.equal(matchesCell(cell({ text: 'http://example.com' }), excluded), false)
})

test('quoted phrases keep their spaces', () => {
  const query = parseQuery('"git push" origin')
  assert.equal(query.tokens.length, 2)
  assert.equal(query.tokens[0].value, 'git push')
  assert.equal(matchesCell(cell({ text: 'ran git push --force on origin' }), query), true)
  assert.equal(matchesCell(cell({ text: 'git commits on origin' }), query), false)
})

test('args and result search their own side only', () => {
  const argsQuery = parseQuery('args:AllData')
  assert.equal(matchesCell(cell({ kind: 'tool', inputDetail: '{"file_path":"AllData.csv"}' }), argsQuery), true)
  assert.equal(matchesCell(cell({ kind: 'tool', outputDetail: 'AllData.csv is ignored' }), argsQuery), false)
  const resultQuery = parseQuery('result:not found')
  assert.equal(matchesCell(cell({ kind: 'tool', outputDetail: 'Error: not found' }), resultQuery), true)
  assert.equal(matchesCell(cell({ kind: 'tool', inputDetail: 'not found' }), resultQuery), false)
})

test('error: only matches failing records', () => {
  const query = parseQuery('error:invalid')
  assert.equal(matchesCell(cell({ kind: 'tool', isError: true, outputDetail: 'invalid arguments' }), query), true)
  assert.equal(matchesCell(cell({ kind: 'tool', outputDetail: 'invalid arguments' }), query), false)
  assert.equal(matchesCell(cell({ kind: 'tool', isError: true, outputDetail: 'boom' }), query), false)
})

test('tool supports alternatives and a glob', () => {
  const alternatives = parseQuery('tool:bash|read')
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'read' }), alternatives), true)
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'glob' }), alternatives), false)
  const glob = parseQuery('tool:*read*')
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'todo_read' }), glob), true)
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'bash' }), glob), false)
  const prefix = parseQuery('tool:todo*')
  assert.equal(matchesCell(cell({ kind: 'tool', toolName: 'todo_write' }), prefix), true)
})

test('code:* means the record has an error code', () => {
  const query = parseQuery('code:*')
  assert.equal(matchesCell(cell({ kind: 'tool', outputDetail: 'x' }), query, { errorCode: 'E1' }), true)
  assert.equal(matchesCell(cell({ kind: 'tool', outputDetail: 'x' }), query), false)
  assert.equal(matchesCell(cell(), query), false)
})

test('type: is the old name of kind:', () => {
  const query = parseQuery('kind:message')
  assert.equal(query.tokens[0].kind, 'kind')
  assert.equal(matchesCell(cell(), query), true)
  assert.equal(matchesCell(cell({ kind: 'user' }), query), false)
  assert.equal(matchesCell(cell({ kind: 'message' }), parseQuery('kind:assistant')), true)
  assert.equal(matchesCell(cell({ kind: 'message' }), parseQuery('type:message')), true)
})

test('role: follows who said the row', () => {
  assert.equal(matchesCell(cell({ kind: 'user' }), parseQuery('role:user')), true)
  assert.equal(matchesCell(cell({ kind: 'context' }), parseQuery('role:user')), true)
  assert.equal(matchesCell(cell({ kind: 'message' }), parseQuery('role:assistant')), true)
  assert.equal(matchesCell(cell({ kind: 'tool' }), parseQuery('role:tool')), true)
  assert.equal(matchesCell(cell({ kind: 'message' }), parseQuery('role:user')), false)
  assert.equal(matchesCell(cell({ kind: 'context' }), parseQuery('kind:context')), true)
  assert.equal(matchesCell(cell({ kind: 'user' }), parseQuery('kind:context')), false)
  assert.equal(parseQuery('role:nope').tokens[0].valid, false)
})

test('step: matches a number or a range', () => {
  assert.equal(matchesCell(cell(), parseQuery('step:12'), { step: 12 }), true)
  assert.equal(matchesCell(cell(), parseQuery('step:12'), { step: 13 }), false)
  assert.equal(matchesCell(cell(), parseQuery('step:10-20'), { step: 13 }), true)
  assert.equal(matchesCell(cell(), parseQuery('step:10-20'), { step: 21 }), false)
  assert.equal(matchesCell(cell(), parseQuery('-step:12'), { step: 12 }), false)
  assert.equal(parseQuery('step:x').tokens[0].valid, false)
})

test('model:, provider:, source: and form: match by name', () => {
  const meta = { model: 'gpt-6.1-sol', provider: 'deepapi' }
  assert.equal(matchesCell(cell(), parseQuery('model:gpt-6.1-sol'), meta), true)
  assert.equal(matchesCell(cell(), parseQuery('model:gpt-6.1*'), meta), true)
  assert.equal(matchesCell(cell(), parseQuery('model:gpt-4'), meta), false)
  assert.equal(matchesCell(cell(), parseQuery('provider:deep*'), meta), true)
  assert.equal(matchesCell(cell(), parseQuery('-provider:deep*'), meta), false)
  const context = cell({ kind: 'context', contextProducer: { role: 'inject', label: 'tool-jobs' }, contextForm: 'notice' })
  assert.equal(matchesCell(context, parseQuery('source:tool-jobs')), true)
  assert.equal(matchesCell(context, parseQuery('source:time-context')), false)
  assert.equal(matchesCell(context, parseQuery('form:notice')), true)
  assert.equal(matchesCell(context, parseQuery('form:snapshot')), false)
  assert.equal(matchesCell(cell(), parseQuery('source:tool-jobs')), false)
  /* a missing field is not a match, `*` included */
  assert.equal(matchesCell(cell(), parseQuery('source:*')), false)
  assert.equal(matchesCell(context, parseQuery('source:*')), true)
  assert.equal(matchesCell(cell(), parseQuery('-source:tool-jobs')), true)
})
