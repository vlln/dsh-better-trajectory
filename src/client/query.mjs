/**
 * 查询条语法（Logfire 风格 token 的 DSH 子集）。
 *
 * `tool:bash` `status:error|running|ok` `turn:3` `turn:2-5`
 * `ms:>1000` `ms:<200` `ms:100-500` `code:401`，`-` 前缀取反；
 * 其余词按自由文本处理（工具名 / 参数 / 结果 / 错误文本，AND）。
 *
 * 纯函数，不依赖 React，单测直接 import。
 */

/** 已知 token 字段。 */
export const FIELDS = ['tool', 'status', 'turn', 'ms', 'code']

const STATUSES = new Set(['error', 'running', 'ok'])

/** 空查询。 */
export function emptyQuery() {
  return {
    tokens: [],
    filters: {
      tool: [], notTool: [],
      status: [], notStatus: [],
      turn: [], notTurn: [], turnRanges: [], notTurnRanges: [],
      code: [], notCode: [],
      msMin: null, msMax: null,
      text: [],
    },
    active: false,
  }
}

/** @param {string} value */
function parseNumber(value) {
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

/**
 * 解析一段文本为 token 与过滤条件。
 * @param {string} text 查询框原文。
 * @returns {ReturnType<typeof emptyQuery>}
 */
export function parseQuery(text) {
  const query = emptyQuery()
  const words = String(text ?? '').trim().split(/\s+/).filter(Boolean)
  for (const word of words) {
    query.tokens.push(parseToken(word))
  }
  for (const token of query.tokens) applyToken(query.filters, token)
  query.active = query.tokens.length > 0
  return query
}

/** @param {string} word */
function parseToken(word) {
  const negated = word.startsWith('-') && word.length > 1
  const body = negated ? word.slice(1) : word
  const colon = body.indexOf(':')
  if (colon <= 0) return { kind: 'text', value: word, raw: word, negated: false, valid: true }
  const field = body.slice(0, colon)
  const value = body.slice(colon + 1)
  if (!FIELDS.includes(field)) {
    return { kind: 'text', value: word, raw: word, negated: false, valid: true }
  }
  if (field === 'status') {
    return value.split('|').every(item => STATUSES.has(item))
      ? { kind: 'status', value, raw: word, negated, valid: true }
      : { kind: 'status', value, raw: word, negated, valid: false }
  }
  if (field === 'turn') {
    const range = /^(\d+)-(\d+)$/.exec(value)
    const single = /^\d+$/.exec(value)
    return range !== null || single !== null
      ? { kind: 'turn', value, raw: word, negated, valid: true }
      : { kind: 'turn', value, raw: word, negated, valid: false }
  }
  if (field === 'ms') {
    return /^(>=|<=|>|<)?\d+(-\d+)?$/.test(value)
      ? { kind: 'ms', value, raw: word, negated, valid: true }
      : { kind: 'ms', value, raw: word, negated, valid: false }
  }
  if (field === 'code') {
    return /^\d+$/.test(value)
      ? { kind: 'code', value, raw: word, negated, valid: true }
      : { kind: 'code', value, raw: word, negated, valid: false }
  }
  return value === ''
    ? { kind: 'tool', value, raw: word, negated, valid: false }
    : { kind: 'tool', value, raw: word, negated, valid: true }
}

/** @param {ReturnType<typeof emptyQuery>['filters']} filters @param {any} token */
function applyToken(filters, token) {
  if (!token.valid) return
  const bucket = token.negated ? 'not' : ''
  const key = (name) => bucket === '' ? name : `not${name[0].toUpperCase()}${name.slice(1)}`
  switch (token.kind) {
    case 'text':
      filters.text.push(token.value.toLowerCase())
      return
    case 'tool':
      filters[key('tool')].push(token.value)
      return
    case 'status':
      for (const status of token.value.split('|')) {
        if (STATUSES.has(status)) filters[key('status')].push(status)
      }
      return
    case 'code':
      filters[key('code')].push(Number(token.value))
      return
    case 'turn': {
      const range = /^(\d+)-(\d+)$/.exec(token.value)
      if (range === null) {
        filters[key('turn')].push(Number(token.value))
      } else {
        const from = Number(range[1])
        const to = Number(range[2])
        filters[key('turnRanges')].push([Math.min(from, to), Math.max(from, to)])
      }
      return
    }
    case 'ms': {
      const range = /^(\d+)-(\d+)$/.exec(token.value)
      if (range !== null) {
        filters.msMin = Number(range[1])
        filters.msMax = Number(range[2])
        return
      }
      const bound = /^(>=|<=|>|<)?(\d+)$/.exec(token.value)
      if (bound === null) return
      const value = Number(bound[2])
      if (bound[1] === '>' || bound[1] === '>=') filters.msMin = value
      else if (bound[1] === '<' || bound[1] === '<=') filters.msMax = value
      else { filters.msMin = value; filters.msMax = value }
      return
    }
    default:
      return
  }
}

/** 调用记录的可检索文本。 */
function searchText(record) {
  return [record.name, record.args, record.result, record.errorText]
    .filter(value => typeof value === 'string' && value !== '')
    .join('\n')
    .toLowerCase()
}

/**
 * 一条调用是否命中当前查询。
 * @param {any} record `buildToolIndex` 产出的记录。
 * @param {ReturnType<typeof emptyQuery>} query 解析结果。
 * @returns {boolean}
 */
export function matchesQuery(record, query) {
  const filters = query.filters
  if (!query.active) return true
  if (filters.tool.length > 0 && !filters.tool.includes(record.name)) return false
  if (filters.notTool.includes(record.name)) return false
  if (filters.status.length > 0 && !filters.status.includes(record.status)) return false
  if (filters.notStatus.includes(record.status)) return false
  if (filters.turn.length > 0 && !filters.turn.includes(record.turn)) return false
  if (filters.turnRanges.length > 0
    && !filters.turnRanges.some(([from, to]) => record.turn >= from && record.turn <= to)) return false
  if (filters.notTurn.includes(record.turn)) return false
  if (filters.notTurnRanges.some(([from, to]) => record.turn >= from && record.turn <= to)) return false
  if (filters.code.length > 0 && !filters.code.includes(Number(record.errorCode))) return false
  if (filters.notCode.includes(Number(record.errorCode))) return false
  const duration = typeof record.durationMs === 'number' ? record.durationMs : -1
  if (filters.msMin !== null && duration < filters.msMin) return false
  if (filters.msMax !== null && duration > filters.msMax) return false
  if (filters.text.length > 0) {
    const haystack = searchText(record)
    if (!filters.text.every(term => haystack.includes(term))) return false
  }
  return true
}

/**
 * 从查询里抽掉一个 token（chip 的 ×）。
 * @param {string} text 原文。
 * @param {string} raw 要去掉的 token 原文。
 * @returns {string}
 */
export function removeToken(text, raw) {
  const words = String(text ?? '').split(/\s+/).filter(Boolean)
  const index = words.lastIndexOf(raw)
  if (index >= 0) words.splice(index, 1)
  return words.join(' ')
}

/**
 * 把某个 token 写回查询（快捷筛选用）：已有则移除，没有则追加。
 * @param {string} text 原文。
 * @param {string} raw token 原文。
 * @returns {string}
 */
export function toggleToken(text, raw) {
  const words = String(text ?? '').split(/\s+/).filter(Boolean)
  return words.includes(raw)
    ? words.filter(word => word !== raw).join(' ')
    : [...words, raw].join(' ')
}