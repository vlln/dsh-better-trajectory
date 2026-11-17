import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import test from 'node:test'

const source = readFileSync(new URL('../src/client/locales.ts', import.meta.url), 'utf8')

/** Keys of one dictionary, in file order. */
function keysOf(name) {
  const start = source.indexOf(`export const ${name} = {`)
  assert.notEqual(start, -1, `missing ${name} dictionary`)
  const end = source.indexOf('\n}', start)
  const body = source.slice(start, end)
  return new Set([...body.matchAll(/'([a-zA-Z0-9_.]+)':/g)].map(match => match[1]))
}

/** Every key/value pair of one dictionary. */
function entriesOf(name) {
  const start = source.indexOf(`export const ${name} = {`)
  const end = source.indexOf('\n}', start)
  const body = source.slice(start, end)
  return [...body.matchAll(/'([a-zA-Z0-9_.]+)':\s*'((?:[^'\\]|\\.)*)'/g)]
    .map(match => ({ key: match[1], value: match[2] }))
}

test('zh and en dictionaries have identical keys', () => {
  const zh = keysOf('zh')
  const en = keysOf('en')
  assert.deepEqual([...zh].filter(key => !en.has(key)), [], 'keys missing in en')
  assert.deepEqual([...en].filter(key => !zh.has(key)), [], 'keys missing in zh')
})

test('the english dictionary contains no chinese', () => {
  /* Parity of keys is not parity of language: an untranslated string ships as
     Chinese to an English reader, which no key-count check would catch. */
  const untranslated = entriesOf('en')
    .filter(entry => /[\u3400-\u9fff]/.test(entry.value))
    .map(entry => entry.key)
  assert.deepEqual(untranslated, [], 'untranslated keys in en')
})

test('every key is reachable from src', () => {
  /* A key nobody reads is either a leftover feature or a typo in the call site;
     both are dead weight in a published package. Dynamic keys are fine as long
     as their literal appears somewhere (mappings list them one by one). */
  const files = []
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = `${dir}/${entry.name}`
      if (entry.isDirectory()) { walk(path); continue }
      if (!/\.(ts|tsx|mjs)$/.test(entry.name)) continue
      if (path.endsWith('src/client/locales.ts')) continue
      files.push(path)
    }
  }
  walk(new URL('../src', import.meta.url).pathname)
  const haystack = files.map(file => readFileSync(file, 'utf8')).join('\n')
  const unused = [...keysOf('zh')].filter(key =>
    !haystack.includes(`'${key}'`) && !haystack.includes(`"${key}"`))
  assert.deepEqual(unused, [], 'keys no src file reads')
})

test('every query / inspector key is translated', () => {
  for (const key of ['query.placeholder', 'query.showAll', 'head.copyArgs', 'copied', 'chip.status', 'raw.search', 'raw.noEvents']) {
    assert.ok(keysOf('zh').has(key), `zh missing ${key}`)
    assert.ok(keysOf('en').has(key), `en missing ${key}`)
  }
})
