/**
 * 轨迹查询语法（Logfire 风格 token 的 DSH 子集）。
 *
 * 形态：`字段:值` 的 token 用空格分隔；`-` 前缀取反；`|` 在值内并列；
 * `"..."` 保留空格；`*` 在名字类字段里是通配；裸词按全文匹配。
 *
 * 字段：`tool:` `type:` `status:` `turn:` `ms:` `code:`
 *      `args:` `result:` `error:` `text:`
 *
 * 谓词对**所有记录**生效（工具、子调用、助手、用户、上下文、压缩点），
 * 不满足的记录在树里隐藏——不然 `status:error` 会留下满屏助手消息。
 *
 * 纯函数，不依赖 React，单测直接 import。
 */

/** 已知 token 字段（顺序即文档顺序）。 */
export const FIELDS = [
  'role', 'kind', 'type', 'model', 'provider', 'source', 'form', 'step', 'turn',
  'tool', 'status', 'ms', 'code', 'args', 'result', 'error', 'text',
]

/** 文本类字段：值是子串，取反后表示「不包含」。 */
const TEXT_FIELDS = new Set(['args', 'result', 'error', 'text'])

const STATUSES = new Set(['error', 'running', 'ok'])

/**
 * 行种类：`kind:` 的取值**就是**上游 `TrajectoryCellKind` 的封闭集合
 * （`src/vendor/trajectory/trajectory-record.ts`），不是本项目自造的词汇。
 * `assistant` 是上游会话节点的 kind，作为 `message` 的等价别名保留；
 * `type:` 是 `kind:` 的旧名字，解析时归一化。
 */
const KIND_ALIASES = new Map([
  ['tool', ['tool']],
  ['subtool', ['subtool']],
  ['message', ['message']],
  ['assistant', ['message']],
  ['user', ['user']],
  ['system', ['system']],
  ['context', ['context']],
  ['compacted', ['compacted']],
])

/** 建议菜单用的行种类全集（不含别名）。 */
export const KINDS = [...KIND_ALIASES.keys()]

/**
 * 行的角色：这一行说的是谁发的。上下文注入在日志里就是 `user` 角色的消息，
 * 所以 `role:user` 同时覆盖用户行与上下文行；只看上下文用 `kind:context`。
 */
const ROLES = new Set(['user', 'assistant', 'system', 'tool'])

/** 建议菜单用的角色全集。 */
export const ROLE_VALUES = [...ROLES]

/** 名字类字段：等值（忽略大小写）或 `*` 通配，`|` 并列。 */
const NAME_FIELDS = new Set(['model', 'provider', 'source', 'form'])

/** 空查询。 */
export function emptyQuery() {
  return {
    tokens: [],
    filters: {
      tool: [], notTool: [],
      status: [], notStatus: [],
      role: [], notRole: [],
      kind: [], notKind: [],
      model: [], notModel: [],
      provider: [], notProvider: [],
      source: [], notSource: [],
      form: [], notForm: [],
      turn: [], notTurn: [], turnRanges: [], notTurnRanges: [],
      step: [], notStep: [], stepRanges: [], notStepRanges: [],
      code: [], notCode: [], codeAll: false, notCodeAll: false,
      msMin: null, msMax: null,
      text: [], notText: [],
      args: [], notArgs: [],
      result: [], notResult: [],
      error: [], notError: [],
    },
    active: false,
  }
}

/**
 * 按空白切词，保留 `"..."` 里的空格并用引号内的内容作为词本身。
 * @param {string} text 查询框原文。
 * @returns {string[]} 去掉引号的词列表。
 */
export function tokenizeQuery(text) {
  const words = []
  let current = ''
  let quoted = false
  for (const character of String(text ?? '')) {
    if (character === '"') {
      quoted = !quoted
      continue
    }
    if (!quoted && /\s/.test(character)) {
      if (current !== '') words.push(current)
      current = ''
      continue
    }
    current += character
  }
  if (current !== '') words.push(current)
  return words
}

/** 带空格的词写回查询时要补引号。 */
export function joinQueryTokens(words) {
  return words.map(word => (/\s/.test(word) ? `"${word}"` : word)).join(' ')
}

/** `*` 通配转正则；没有 `*` 时返回 null（按等值处理）。 */
function globToRegExp(pattern) {
  if (!pattern.includes('*')) return null
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
  return new RegExp(`^${escaped}$`, 'i')
}

/** 名字类字段的匹配：等值（忽略大小写）或 `*` 通配。 */
function matchesName(name, pattern) {
  const expression = globToRegExp(pattern)
  return expression === null ? name.toLowerCase() === pattern.toLowerCase() : expression.test(name)
}

/** @param {string} word */
function parseToken(word) {
  const negated = word.startsWith('-') && word.length > 1
  const body = negated ? word.slice(1) : word
  const colon = body.indexOf(':')
  /* a bare word (or a leading `-` with no field) is full-text search; `-word`
     excludes the word instead of searching for the literal hyphen */
  if (colon <= 0) return { kind: 'text', value: body, raw: word, negated, valid: body !== '' }
  /* `type:` is the old name of `kind:`; both mean the record kind */
  const rawField = body.slice(0, colon)
  const field = rawField === 'type' ? 'kind' : rawField
  const value = body.slice(colon + 1)
  if (!FIELDS.includes(field)) {
    /* `http://…` or any unknown `a:b` is still a search term; the `-` keeps
       meaning "does not contain it" */
    return { kind: 'text', value: body, raw: word, negated, valid: body !== '' }
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
    return /^(\d+|\*)$/.test(value)
      ? { kind: 'code', value, raw: word, negated, valid: true }
      : { kind: 'code', value, raw: word, negated, valid: false }
  }
  if (field === 'kind') {
    return value.split('|').every(item => KIND_ALIASES.has(item))
      ? { kind: 'kind', value, raw: word, negated, valid: true }
      : { kind: 'kind', value, raw: word, negated, valid: false }
  }
  if (field === 'role') {
    return value.split('|').every(item => ROLES.has(item))
      ? { kind: 'role', value, raw: word, negated, valid: true }
      : { kind: 'role', value, raw: word, negated, valid: false }
  }
  if (field === 'step') {
    const stepRange = /^(\d+)-(\d+)$/.exec(value)
    const stepSingle = /^\d+$/.exec(value)
    return stepRange !== null || stepSingle !== null
      ? { kind: 'step', value, raw: word, negated, valid: true }
      : { kind: 'step', value, raw: word, negated, valid: false }
  }
  if (NAME_FIELDS.has(field)) {
    return value === ''
      ? { kind: field, value, raw: word, negated, valid: false }
      : { kind: field, value, raw: word, negated, valid: true }
  }
  if (TEXT_FIELDS.has(field)) {
    return value === ''
      ? { kind: field, value, raw: word, negated, valid: false }
      : { kind: field, value, raw: word, negated, valid: true }
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
      filters[key('text')].push(token.value.toLowerCase())
      return
    case 'args':
    case 'result':
    case 'error':
      filters[key(token.kind)].push(token.value.toLowerCase())
      return
    case 'tool':
      /* `tool:bash|read` lists alternatives; each alternative may hold a `*` */
      for (const pattern of token.value.split('|')) {
        if (pattern !== '' && !filters[key('tool')].includes(pattern)) {
          filters[key('tool')].push(pattern)
        }
      }
      return
    case 'status':
      for (const status of token.value.split('|')) {
        if (STATUSES.has(status)) filters[key('status')].push(status)
      }
      return
    case 'code': {
      if (token.value === '*') {
        /* `code:*` is "has an error code at all" */
        filters[key('codeAll')] = true
        return
      }
      filters[key('code')].push(Number(token.value))
      return
    }
    case 'kind': {
      const kinds = filters[key('kind')]
      for (const alias of token.value.split('|')) {
        for (const kind of KIND_ALIASES.get(alias) ?? []) {
          if (!kinds.includes(kind)) kinds.push(kind)
        }
      }
      return
    }
    case 'role': {
      const roles = filters[key('role')]
      for (const role of token.value.split('|')) {
        if (ROLES.has(role) && !roles.includes(role)) roles.push(role)
      }
      return
    }
    case 'step': {
      const range = /^(\d+)-(\d+)$/.exec(token.value)
      if (range === null) {
        filters[key('step')].push(Number(token.value))
      } else {
        const from = Number(range[1])
        const to = Number(range[2])
        filters[key('stepRanges')].push([Math.min(from, to), Math.max(from, to)])
      }
      return
    }
    case 'model':
    case 'provider':
    case 'source':
    case 'form': {
      const patterns = filters[key(token.kind)]
      for (const pattern of token.value.split('|')) {
        if (pattern !== '' && !patterns.includes(pattern)) patterns.push(pattern)
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

/**
 * 解析一段文本为 token 与过滤条件。
 * @param {string} text 查询框原文。
 * @returns {ReturnType<typeof emptyQuery>}
 */
export function parseQuery(text) {
  const query = emptyQuery()
  for (const word of tokenizeQuery(text)) {
    query.tokens.push(parseToken(word))
  }
  for (const token of query.tokens) applyToken(query.filters, token)
  query.active = query.tokens.length > 0
  return query
}

/** 调用记录的可检索文本（工具索引一侧）。 */
function searchText(record) {
  return [record.name, record.args, record.result, record.errorText]
    .filter(value => typeof value === 'string' && value !== '')
    .join('\n')
    .toLowerCase()
}

const lower = (value) => (typeof value === 'string' ? value.toLowerCase() : '')

/**
 * 一条归一化记录是否命中。所有记录类型共用这一份判据。
 * @param {{
 *   kind: string, name?: string, status?: string, turn?: number,
 *   durationMs?: number, errorCode?: string, text?: string, args?: string,
 *   result?: string, errorText?: string,
 * }} subject
 * @param {ReturnType<typeof emptyQuery>['filters']} filters
 */
function matchesFilters(subject, filters) {
  const kind = subject.kind ?? ''
  const isTool = kind === 'tool' || kind === 'subtool'
  if (filters.kind.length > 0 && !filters.kind.includes(kind)) return false
  if (filters.notKind.includes(kind)) return false
  const role = subject.role ?? ''
  if (filters.role.length > 0 && !filters.role.includes(role)) return false
  if (filters.notRole.includes(role)) return false
  if (filters.step.length > 0 && !filters.step.includes(subject.step)) return false
  if (filters.stepRanges.length > 0
    && !filters.stepRanges.some(([from, to]) => subject.step >= from && subject.step <= to)) return false
  if (filters.notStep.includes(subject.step)) return false
  if (filters.notStepRanges.some(([from, to]) => subject.step >= from && subject.step <= to)) return false
  for (const field of ['model', 'provider', 'source', 'form']) {
    const value = subject[field] ?? ''
    const wanted = filters[field]
    /* a row without the field is not a match, `*` included: `source:*` means
       "has a source", not "is a row" */
    if (wanted.length > 0 && (value === '' || !wanted.some(pattern => matchesName(value, pattern)))) return false
    const unwanted = filters[`not${field[0].toUpperCase()}${field.slice(1)}`]
    if (unwanted.length > 0 && unwanted.some(pattern => matchesName(value, pattern))) return false
  }
  /* tool: can only ever match a call; asking for a tool must hide every other
     kind instead of testing the message's display name against it */
  if (filters.tool.length > 0
    && (!isTool || !filters.tool.some(pattern => matchesName(subject.name ?? '', pattern)))) {
    return false
  }
  if (isTool && filters.notTool.some(pattern => matchesName(subject.name ?? '', pattern))) {
    return false
  }
  if (filters.status.length > 0 && !filters.status.includes(subject.status)) return false
  if (filters.notStatus.includes(subject.status)) return false
  if (filters.turn.length > 0 && !filters.turn.includes(subject.turn)) return false
  if (filters.turnRanges.length > 0
    && !filters.turnRanges.some(([from, to]) => subject.turn >= from && subject.turn <= to)) return false
  if (filters.notTurn.includes(subject.turn)) return false
  if (filters.notTurnRanges.some(([from, to]) => subject.turn >= from && subject.turn <= to)) return false
  const hasCode = subject.errorCode !== undefined && subject.errorCode !== null && subject.errorCode !== ''
  if (filters.code.length > 0 && (!isTool || !filters.code.includes(Number(subject.errorCode)))) {
    return false
  }
  /* only a call can carry an error code, so `code:*` excludes every other kind */
  if (filters.codeAll && (!isTool || !hasCode)) return false
  if (isTool && filters.notCodeAll && hasCode) return false
  if (isTool && !filters.codeAll && filters.notCode.includes(Number(subject.errorCode))) return false
  if (filters.msMin !== null || filters.msMax !== null) {
    const duration = typeof subject.durationMs === 'number' ? subject.durationMs : -1
    if (filters.msMin !== null && duration < filters.msMin) return false
    if (filters.msMax !== null && duration > filters.msMax) return false
  }
  const containsAll = (terms, haystack) => terms.every(term => haystack.includes(term))
  const containsAny = (terms, haystack) => terms.some(term => haystack.includes(term))
  const all = lower(subject.text)
  if (!containsAll(filters.text, all)) return false
  if (containsAny(filters.notText, all)) return false
  if (!containsAll(filters.args, lower(subject.args))) return false
  if (containsAny(filters.notArgs, lower(subject.args))) return false
  if (!containsAll(filters.result, lower(subject.result))) return false
  if (containsAny(filters.notResult, lower(subject.result))) return false
  if (!containsAll(filters.error, lower(subject.errorText))) return false
  if (containsAny(filters.notError, lower(subject.errorText))) return false
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
  const errorText = record.status === 'error' || record.status === 'interrupted'
    ? (record.errorText ?? record.result ?? '')
    : ''
  return matchesFilters({
    kind: record.kind ?? 'tool',
    name: record.name,
    /* interrupted is a failure too, and `status:error` must catch it */
    status: record.status === 'interrupted' ? 'error' : record.status,
    turn: record.turn,
    durationMs: record.durationMs,
    errorCode: record.errorCode,
    text: searchText(record),
    args: record.args ?? '',
    result: record.result ?? '',
    errorText,
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
  /* two scoped haystacks: what the record took in, and what it produced. A tool's
     input is its arguments; a user/context record's input is its body; a message
     only has a body (output). */
  const inputSide = cell.inputDetail ?? ''
  const outputSide = cell.outputDetail ?? cell.result ?? cell.text ?? ''
  const errorText = cell.isError === true ? (cell.outputDetail ?? cell.result ?? cell.text ?? '') : ''
  /* the row's role: who said it. A context injection is a `user` message in the
     log, so `role:user` covers both; `kind:context` narrows it. */
  const role = kind === 'user' || kind === 'context'
    ? 'user'
    : kind === 'message' ? 'assistant' : kind === 'system' ? 'system' : isTool ? 'tool' : undefined
  return {
    kind,
    role,
    step: meta?.step,
    model: meta?.model,
    provider: meta?.provider,
    source: cell.contextProducer?.label ?? undefined,
    form: cell.contextForm,
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
    args: inputSide,
    result: outputSide,
    errorText,
  }
}

/**
 * 一条树记录是否命中当前查询——与工具索引共用同一份判据。
 * @param {any} cell `TrajectoryCellProps`。
 * @param {ReturnType<typeof emptyQuery>} query 解析结果。
 * @param {{durationMs?: number, errorCode?: string, turn?: number, step?: number,
 *   model?: string, provider?: string}} [meta]
 *   工具索引里的耗时 / 错误码，以及记录所属的回合与步骤（cell 本身只带内容与种类），
 *   还有那一步请求的模型与提供方。
 * @returns {boolean}
 */
export function matchesCell(cell, query, meta) {
  if (!query.active) return true
  return matchesFilters(cellSubject(cell, meta), query.filters)
}

/**
 * 从查询里抽掉一个 token（chip 的 ×）。
 * @param {string} text 原文。
 * @param {string} raw 要去掉的 token 原文（不含引号）。
 * @returns {string}
 */
export function removeToken(text, raw) {
  const words = tokenizeQuery(text)
  const index = words.lastIndexOf(raw)
  if (index >= 0) words.splice(index, 1)
  return joinQueryTokens(words)
}

/**
 * 把某个 token 写回查询：已有则移除，没有则追加。
 * @param {string} text 原文。
 * @param {string} raw token 原文。
 * @returns {string}
 */
export function toggleToken(text, raw) {
  const words = tokenizeQuery(text)
  const index = words.lastIndexOf(raw)
  if (index >= 0) words.splice(index, 1)
  else words.push(raw)
  return joinQueryTokens(words)
}