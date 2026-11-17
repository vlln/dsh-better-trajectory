import test from 'node:test'
import assert from 'node:assert/strict'

import { buildToolIndex, isErrorStatus, summarizeTools } from '../src/client/filter.mjs'
import { snapshot, emptySnapshot } from './fixture.mjs'

const index = buildToolIndex(snapshot)

test('buildToolIndex flattens completed, nested and running tool calls', () => {
  assert.equal(index.records.length, 5)
  assert.equal(index.byName.get('bash'), 3)
  assert.equal(index.byName.get('read'), 1)
  assert.equal(index.byName.get('run_code'), 1)

  const read = index.records.find(record => record.name === 'read')
  assert.equal(read.status, 'error')
  assert.equal(read.turn, 1)
  assert.equal(read.step, 1)
  assert.equal(read.errorCode, 'ENOENT')
  assert.equal(read.durationMs, 100)
  assert.match(read.args, /missing\.ts/)
  assert.match(read.result, /ENOENT/)

  const sub = index.records.find(record => record.callId === 'call-sub')
  assert.equal(sub.depth, 1)
  assert.equal(sub.parentCallId, 'call-run')

  const running = index.records.find(record => record.callId === 'call-running')
  assert.equal(running.status, 'running')
  assert.equal(running.turn, 3)
})

test('tool index also sees assistant tool-call blocks outside the paired window', () => {
  const windowCut = {
    ...snapshot,
    eventNodes: [
      snapshot.eventNodes[1], // assistant with call-bash block, no result node
      {
        kind: 'assistant', seq: 20, time: 2_800, turn: 5, step: 1,
        blocks: [{ kind: 'tool-call', callId: 'call-outside', name: 'grep', argsRaw: '{}' }],
      },
    ],
    runningCalls: [],
    requests: [],
  }
  const cutIndex = buildToolIndex(windowCut)
  assert.ok(cutIndex.byName.get('grep') === 1)
  assert.ok(cutIndex.byName.get('bash') === 1)
  assert.equal(cutIndex.records.find(record => record.callId === 'call-outside')?.status, 'ok')
})

test('tool summaries aggregate calls, errors and durations', () => {
  const tools = summarizeTools(index)
  const bash = tools.find(tool => tool.name === 'bash')
  assert.equal(bash.calls, 3)
  assert.equal(bash.errors, 0)
  assert.equal(bash.totalMs, 250)
  assert.equal(bash.avgMs, 125)
  assert.equal(bash.p95Ms, 150)

  const read = tools.find(tool => tool.name === 'read')
  assert.equal(read.errors, 1)
  assert.equal(read.totalMs, 100)

  const run = tools.find(tool => tool.name === 'run_code')
  assert.equal(run.calls, 1)
  assert.equal(run.errors, 0)
})

test('isErrorStatus counts interrupted calls as failures', () => {
  assert.equal(isErrorStatus('error'), true)
  assert.equal(isErrorStatus('interrupted'), true)
  assert.equal(isErrorStatus('ok'), false)
  assert.equal(isErrorStatus('running'), false)
})

test('empty snapshot produces an empty index without throwing', () => {
  const emptyIndex = buildToolIndex(emptySnapshot)
  assert.deepEqual(emptyIndex.records, [])
  assert.equal(emptyIndex.byName.size, 0)
  assert.equal(emptyIndex.turns.size, 0)
})
