import test from 'node:test'
import assert from 'node:assert/strict'

import { buildToolIndex, emptyFilters, filteredCalls } from '../src/client/filter.mjs'
import { recordsToJson, recordsToMarkdown } from '../src/client/export.mjs'
import { snapshot } from './fixture.mjs'

const index = buildToolIndex(snapshot)

test('filtered export contains only matching calls and their payloads', () => {
  const records = filteredCalls(index, { ...emptyFilters(), status: 'error' })
  const json = JSON.parse(recordsToJson(records, { sessionId: 's1', filter: 'status:error' }))
  assert.equal(json.format, 'dsh-better-trajectory/tool-calls/v1')
  assert.equal(json.count, 1)
  assert.equal(json.records[0].name, 'read')
  assert.equal(json.records[0].errorCode, 'ENOENT')
  assert.match(json.records[0].args, /missing\.ts/)

  const markdown = recordsToMarkdown(records, { sessionId: 's1', filter: 'status:error' })
  assert.match(markdown, /Better Trajectory — 1 tool call/)
  assert.match(markdown, /## Failures/)
  assert.match(markdown, /ENOENT/)
  assert.match(markdown, /missing\.ts/)
})

test('export keeps full args and results while the table stays one-line', () => {
  const records = filteredCalls(index, emptyFilters())
  const json = JSON.parse(recordsToJson(records))
  const read = json.records.find(record => record.name === 'read')
  assert.match(read.result, /ENOENT/)
  const markdown = recordsToMarkdown(records)
  assert.doesNotMatch(markdown.split('## Failures')[0], /\n\n\{"path"/)
})
