/**
 * 查询条语法（Logfire 风格 token 的 DSH 子集）。
 *
 * `tool:bash` `status:error|running|ok` `turn:3` `turn:2-5`
 * `ms:>1000` `ms:<200` `ms:100-500` `code:401` `type:message|tool`，
 * `-` 前缀取反；其余词按自由文本处理（工具名 / 参数 / 结果 / 正文 / 错误文本，AND）。
 *
 * 谓词对**所有记录**生效（工具、子调用、助手、用户、上下文、压缩点），
 * 不满足的记录在树里隐藏——不然 `status:error` 会留下满屏助手消息。
 *
 * 纯函数，不依赖 React，单测直接 import。
 */

/** 已知 token 字段。 */
export const FIELDS = ['tool', 'status', 'turn', 'ms', 'code', 'type']

const STATUSES = new Set(['error', 'running', 'ok'])

/** 记录类型：查询里可写 `type:<别名>`。 */
const TYPE_ALIASES = new Map([
  ['tool', ['tool']],
  ['subtool', ['subtool']],
  ['call', ['tool', 'subtool']],
  ['message', ['message']],
  ['assistant', ['message']],
  ['user', ['user']],
  ['system', ['system']],
  ['context', ['context']],
  ['compacted', ['compacted']],
])

/** 建议菜单用的类型全集（不含别名）。 */
export const TYPES = [...TYPE_ALIASES.keys()]

/** 空查询。 */
export function emptyQuery() {
  return {
    tokens: [],
    filters: {
      tool: [], notTool: [],
      status: [], notStatus: [],
      turn: [], notTurn: [], turnRanges: [], notTurnRanges: [],
      code: [], notCode: [],
      type: [], notType: [],
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
  if (field === 'type') {
    return value.split('|').every(item => TYPE_ALIASES.has(item))
      ? { kind: 'type', value, raw: word, negated, valid: true }
      : { kind: 'type', value, raw: word, negated, valid: false }
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
    case 'type': {
      const kinds = filters[key('type')]
      for (const alias of token.value.split('|')) {
        for (const kind of TYPE_ALIASES.get(alias) ?? []) {
          if (!kinds.includes(kind)) kinds.push(kind)
        }
      }
      return
    }
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
 * 一条归一化记录是否命中。所有记录类型共用这一份判据。
 * @param {{
 *   kind: string, name?: string, status?: string, turn?: number,
 *   durationMs?: number, errorCode?: string, text?: string,
 * }} subject
 * @param {ReturnType<typeof emptyQuery>['filters']} filters
 */
function matchesFilters(subject, filters) {
  const kind = subject.kind ?? ''
  const isTool = kind === 'tool' || kind === 'subtool'
  if (filters.type.length > 0 && !filters.type.includes(kind)) return false
  if (filters.notType.includes(kind)) return false
  /* tool: can only ever match a call; asking for a tool must hide every other
     kind instead of testing the message's display name against it */
  if (filters.tool.length > 0 && (!isTool || !filters.tool.includes(subject.name))) {
    return false
  }
  if (isTool && filters.notTool.includes(subject.name)) return false
  if (filters.status.length > 0 && !filters.status.includes(subject.status)) return false
  if (filters.notStatus.includes(subject.status)) return false
  if (filters.turn.length > 0 && !filters.turn.includes(subject.turn)) return false
  if (filters.turnRanges.length > 0
    && !filters.turnRanges.some(([from, to]) => subject.turn >= from && subject.turn <= to)) return false
  if (filters.notTurn.includes(subject.turn)) return false
  if (filters.notTurnRanges.some(([from, to]) => subject.turn >= from && subject.turn <= to)) return false
  if (filters.code.length > 0
    && (!isTool || !filters.code.includes(Number(subject.errorCode)))) return false
  if (isTool && filters.notCode.includes(Number(subject.errorCode))) return false
  if (filters.msMin !== null || filters.msMax !== null) {
    const duration = typeof subject.durationMs === 'number' ? subject.durationMs : -1
    if (filters.msMin !== null && duration < filters.msMin) return false
    if (filters.msMax !== null && duration > filters.msMax) return false
  }
  if (filters.text.length > 0) {
    const haystack = (subject.text ?? '').toLowerCase()
    if (!filters.text.every(term => haystack.includes(term))) return false
  }
  return true
}

/**
 * 一条调用是否命中当前查询。
 * @param {any} record `buildToolIndex` 产出的记录。
 * @param {ReturnType<typeof emptyQuery>} query 解析结果。
 * @returns {boolean}
 */
export function matchesQuery(record, query) {
  if (!query.active) return true
  return matchesFilters({
    kind: record.kind ?? 'tool',
    name: record.name,
    status: record.status,
    turn: record.turn,
    durationMs: record.durationMs,
    errorCode: record.errorCode,
    text: searchText(record),
  }, query.filters)
}

/** 一条树记录（任意类型）的归一化字段。 */
function cellSubject(cell, meta) {
  const kind = cell.kind ?? ''
  const isTool = kind === 'tool' || kind === 'subtool'
  const durationMs = typeof cell.timeSeconds === 'number' && Number.isFinite(cell.timeSeconds)
    ? Math.max(0, cell.timeSeconds * 1000)
    : typeof meta?.durationMs === 'number' ? meta.durationMs : undefined
  const status = cell.isError === true
    ? 'error'
    : (kind === 'compacted' && cell.timeSeconds === null)
      || cell.assistantMetrics?.completedTime === null
      || (isTool && cell.outputDetail === undefined)
      ? 'running'
      : 'ok'
  return {
    kind,
    name: isTool ? (cell.toolName ?? '') : kind,
    status,
    turn: cell.turn ?? meta?.turn,
    durationMs,
    errorCode: cell.errorCode ?? meta?.errorCode,
    text: [
      cell.text,
      cell.previewMarkdown,
      cell.toolName,
      cell.inputDetail,
      cell.outputDetail,
      cell.thinkingDetail,
      cell.result,
      cell.errorText,
    ].filter(value => typeof value === 'string' && value !== '').join('\n'),
  }
}

/**
 * 一条树记录是否命中当前查询——与工具索引共用同一份判据。
 * @param {any} cell `TrajectoryCellProps`。
 * @param {ReturnType<typeof emptyQuery>} query 解析结果。
 * @param {{durationMs?: number, errorCode?: string, turn?: number}} [meta]
 *   工具索引里的耗时 / 错误码，以及记录所属回合（cell 本身不带 turn）。
 * @returns {boolean}
 */
export function matchesCell(cell, query, meta) {
  if (!query.active) return true
  return matchesFilters(cellSubject(cell, meta), query.filters)
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