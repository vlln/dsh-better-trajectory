import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const source = readFileSync(new URL('../src/client/locales.ts', import.meta.url), 'utf8')

function keysOf(name) {
  const start = source.indexOf(`export const ${name} = {`)
  assert.notEqual(start, -1, `missing ${name} dictionary`)
  const end = source.indexOf('\n}', start)
  const body = source.slice(start, end)
  return new Set([...body.matchAll(/'([a-zA-Z0-9_.]+)':/g)].map(match => match[1]))
}

test('zh and en dictionaries have identical keys', () => {
  const zh = keysOf('zh')
  const en = keysOf('en')
  const missingInEn = [...zh].filter(key => !en.has(key))
  const missingInZh = [...en].filter(key => !zh.has(key))
  assert.deepEqual(missingInEn, [], 'keys missing in en')
  assert.deepEqual(missingInZh, [], 'keys missing in zh')
})

test('every query / inspector key is translated', () => {
  for (const key of ['query.placeholder', 'query.showAll', 'head.copyArgs', 'copied', 'chip.status', 'raw.search', 'hint.filtered']) {
    assert.ok(keysOf('zh').has(key), `zh missing ${key}`)
    assert.ok(keysOf('en').has(key), `en missing ${key}`)
  }
})
