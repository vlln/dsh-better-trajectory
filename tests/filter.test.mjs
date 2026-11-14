import test from 'node:test'
import assert from 'node:assert/strict'

import {
  buildToolIndex, collectStats, emptyFilters, filterSnapshot, isActive,
  matchesRecord,
} from '../src/client/filter.mjs'
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

test('facets count errors/running and keep tool options stable', () => {
  const filters = emptyFilters()
  const stats = collectStats(index, filters)
  assert.equal(stats.total, 5)
  assert.equal(stats.matched, 5)
  assert.equal(stats.errors, 1)
  assert.equal(stats.running, 1)
  assert.deepEqual(stats.tools.map(item => item.name).sort(), ['bash', 'read', 'run_code'])
  assert.deepEqual(stats.turns.map(item => item.turn), [1, 3])

  const errorStats = collectStats(index, { ...filters, status: 'error' })
  assert.equal(errorStats.matched, 1)
  assert.equal(errorStats.errors, 1)
  assert.deepEqual(errorStats.tools.map(item => item.name).sort(), ['bash', 'read', 'run_code'])

  const bashStats = collectStats(index, { ...filters, tools: ['bash'] })
  assert.equal(bashStats.matched, 3)
  assert.equal(bashStats.running, 1)
})

test('matchesRecord applies tool, status and turn filters', () => {
  const bash = index.records.find(record => record.name === 'bash')
  assert.equal(matchesRecord(bash, emptyFilters()), true)
  assert.equal(matchesRecord(bash, { tools: ['read'], status: 'all', turn: null }), false)
  assert.equal(matchesRecord(bash, { tools: [], status: 'error', turn: null }), false)
  assert.equal(matchesRecord(bash, { tools: [], status: 'all', turn: 3 }), false)
  assert.equal(matchesRecord({ ...bash, turn: 1 }, { tools: [], status: 'all', turn: 1 }), true)
})

test('no active filters returns the original snapshot by identity', () => {
  assert.equal(isActive(emptyFilters()), false)
  assert.equal(filterSnapshot(snapshot, emptyFilters(), index), snapshot)
})

test('error filter removes successful tools and keeps messages/context', () => {
  const filters = { ...emptyFilters(), status: 'error' }
  const filtered = filterSnapshot(snapshot, filters, index)
  const tools = filtered.eventNodes.filter(node => node.kind === 'tool-result')
  assert.equal(tools.length, 1)
  assert.equal(tools[0].name, 'read')
  assert.equal(filtered.runningCalls.length, 0)
  // user/assistant text survives as native turn context
  assert.ok(filtered.eventNodes.some(node => node.kind === 'user'))
  assert.ok(filtered.eventNodes.some(node => node.kind === 'assistant'))
  // the assistant tool-call block for the successful bash call is removed
  const assistant2 = filtered.eventNodes.find(node => node.kind === 'assistant' && node.seq === 2)
  assert.ok(assistant2)
  assert.ok(!assistant2.blocks.some(block => block.kind === 'tool-call' && block.callId === 'call-bash'))
})

test('tool filter keeps matching calls and ancestor containers', () => {
  const filters = { ...emptyFilters(), tools: ['bash'] }
  const filtered = filterSnapshot(snapshot, filters, index)
  assert.equal(filtered.eventNodes.filter(node => node.kind === 'tool-result').length, 2)
  const run = filtered.eventNodes.find(node => node.kind === 'tool-result' && node.callId === 'call-run')
  assert.ok(run)
  assert.deepEqual(run.subCalls.map(call => call.callId), ['call-sub'])
  const read = filtered.eventNodes.find(node => node.kind === 'tool-result' && node.callId === 'call-read')
  assert.equal(read, undefined)
  assert.equal(filtered.runningCalls.length, 1)
  assert.equal(filtered.runningCalls[0].name, 'bash')
})

test('turn filter keeps only that turn and its requests', () => {
  const filters = { ...emptyFilters(), turn: 3 }
  const filtered = filterSnapshot(snapshot, filters, index)
  assert.ok(filtered.eventNodes.every(node => node.turn === 3 || node.kind === 'tool-result'))
  assert.equal(filtered.runningCalls.length, 1)
  assert.ok(filtered.requests.every(request => request.turn === 3))
  assert.equal(filtered.systemPrompts, undefined)
})

test('empty snapshot produces empty facets without throwing', () => {
  const emptyIndex = buildToolIndex(emptySnapshot)
  const stats = collectStats(emptyIndex, emptyFilters())
  assert.deepEqual(stats.tools, [])
  assert.deepEqual(stats.turns, [])
  assert.equal(stats.total, 0)
  assert.equal(stats.matched, 0)
})
