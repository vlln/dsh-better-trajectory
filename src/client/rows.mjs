/**
 * Better Trajectory 的纯数据层：把内置轨迹快照投影成可筛选的扁平记录，
 * 以及筛选 / 搜索 / 分面计数。
 *
 * 这一层是普通 ESM（JSDoc 标注形状），因此 `node --test` 能直接导入，
 * 不需要先构建；React 只负责把这些记录画出来。
 *
 * 数据来源是内置 `trajectory` target 的 `TrajectorySnapshot`：
 *  - `eventNodes` 是已落定的 ConversationNode（工具结果是 `tool-result`，
 *    递归带 `subCalls`）；
 *  - `runningCalls` 是尚未返回的工具调用；
 *  - `partial` 是正在流式输出的助手回复；
 *  - `eventLocations` 把节点 seq 映射到回合 / 步骤；
 *  - `requests` 提供请求级别的状态与错误。
 */

/** 记录类型。 */
export const ROW_KINDS = [
  'tool', 'assistant', 'user', 'steering', 'context', 'error',
  'command', 'compaction', 'retry', 'max-tokens', 'unknown',
]

/** 状态集合；`neutral` 用于用户消息、压缩记录等不可判定成功/失败的行。 */
export const ROW_STATUSES = ['ok', 'error', 'running', 'interrupted', 'neutral']

const MAX_INDEX_CHARS = 48_000

/** @typedef {'tool'|'assistant'|'user'|'steering'|'context'|'error'|'command'|'compaction'|'retry'|'max-tokens'|'unknown'} RowKind */
/** @typedef {'ok'|'error'|'running'|'interrupted'|'neutral'} RowStatus */

/**
 * @typedef {object} DebugRow
 * @property {string} id 稳定的 React key。
 * @property {RowKind} kind
 * @property {RowStatus} status
 * @property {number} seq 源事件序号（工具行用结果事件序号）。
 * @property {number} time 行在时间轴上的起点（工具行用调用开始时间）。
 * @property {number} [turn]
 * @property {number} [step]
 * @property {string} [name] 工具名 / 命令名 / 错误码 / 生产者名。
 * @property {string} [title] 行标题（消息首行、工具名等）。
 * @property {string} preview 单行预览。
 * @property {string} text 可搜索文本。
 * @property {string} [callId]
 * @property {string} [parentCallId]
 * @property {number} [depth] 子调用深度（根为 0）。
 * @property {number} [durationMs]
 * @property {string} [args]
 * @property {string} [argsRaw]
 * @property {string} [result]
 * @property {string} [error]
 * @property {string} [errorName]
 * @property {string} [errorCode]
 * @property {object} [usage]
 * @property {string} [requestStatus]
 * @property {string} [meta] 额外可复制的元数据。
 */

/** @param {unknown} value @returns {value is Record<string, any>} */
function isObject(value) {
  return typeof value === 'object' && value !== null
}

/** @param {unknown} value @returns {string} */
function asString(value) {
  return typeof value === 'string' ? value : ''
}

/** 把任意文本压成单行预览。 */
export function oneLine(value, max = 220) {
  const text = asString(value).replace(/\s+/g, ' ').trim()
  return text.length > max ? `${text.slice(0, max)}…` : text
}

/** 计算工具行的耗时；没有调用开始时间时返回 undefined。 */
export function durationOf(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') return undefined
  return Math.max(0, end - start)
}

/** 毫秒 → 紧凑易读时长。 */
export function formatDuration(ms) {
  if (typeof ms !== 'number' || !Number.isFinite(ms)) return ''
  if (ms < 1_000) return `${Math.round(ms)}ms`
  if (ms < 60_000) return `${(ms / 1_000).toFixed(ms < 10_000 ? 1 : 0)}s`
  const minutes = Math.floor(ms / 60_000)
  const seconds = Math.round((ms % 60_000) / 1_000)
  return `${minutes}m${seconds.toString().padStart(2, '0')}s`
}

/** 本地时间 HH:mm:ss.SSS。 */
export function formatClock(time) {
  if (typeof time !== 'number' || !Number.isFinite(time)) return ''
  const date = new Date(time)
  const pad = (value, width = 2) => String(value).padStart(width, '0')
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad(date.getMilliseconds(), 3)}`
}

/** 完整本地日期时间（详情面板 / 复制用）。 */
export function formatDateTime(time) {
  if (typeof time !== 'number' || !Number.isFinite(time)) return ''
  return new Date(time).toLocaleString(undefined, { hour12: false })
}

/** 把工具参数整理成可读文本：合法 JSON 缩进，否则保留原文。 */
export function prettyJson(text) {
  const raw = asString(text)
  if (raw.trim() === '') return ''
  try {
    return JSON.stringify(JSON.parse(raw), null, 2)
  } catch {
    return raw
  }
}

/** 从内容块数组提取文本；图片 / 文件等给占位符。 */
export function contentText(content) {
  if (!Array.isArray(content)) return ''
  const parts = []
  for (const block of content) {
    if (!isObject(block)) continue
    if (typeof block.text === 'string') {
      parts.push(block.text)
      continue
    }
    if (block.type === 'image') {
      const attachment = block.attachment
      parts.push(`[image${isObject(attachment) && asString(attachment.name) ? ` ${attachment.name}` : ''}]`)
      continue
    }
    if (block.type === 'file') {
      const attachment = block.attachment
      parts.push(`[file${isObject(attachment) && asString(attachment.name) ? ` ${attachment.name}` : ''}]`)
      continue
    }
    if (block.type === 'tool-call') {
      parts.push(`[tool-call ${asString(block.name)}]`)
      continue
    }
    parts.push(`[${asString(block.type) || 'block'}]`)
  }
  return parts.join('\n')
}

/** 从位置对象里取回合/步骤；兼容嵌套与扁平两种形状。 */
export function locationOf(location) {
  if (!isObject(location)) return {}
  const turnValue = isObject(location.turn) ? location.turn.turn : location.turn
  const stepValue = isObject(location.step) ? location.step.step : location.step
  return {
    ...(typeof turnValue === 'number' ? { turn: turnValue } : {}),
    ...(typeof stepValue === 'number' ? { step: stepValue } : {}),
  }
}

/** 从 usage 里提取常见 token 字段。 */
export function usageOf(usage) {
  if (!isObject(usage)) return undefined
  const keys = [
    'inputTokens', 'cacheReadTokens', 'cacheWriteTokens', 'outputTokens', 'reasoningTokens',
  ]
  const picked = {}
  for (const key of keys) {
    if (typeof usage[key] === 'number') picked[key] = usage[key]
  }
  return Object.keys(picked).length > 0 ? picked : undefined
}

/** 合并搜索文本并限长（避免把整段日志都复制进索引）。 */
function indexText(parts) {
  let text = ''
  for (const part of parts) {
    const value = asString(part)
    if (value === '') continue
    text += `${value}\n`
    if (text.length >= MAX_INDEX_CHARS) return text.slice(0, MAX_INDEX_CHARS)
  }
  return text
}

/** 搜索文本缓存：快照在流式输出时每帧重建，未变化节点的索引不必重算。 */
const textCache = new WeakMap()

/** 构造一条记录。`source` 是稳定的节点 / 工具块对象，用于缓存索引文本。 */
function makeRow(fields, source) {
  const cacheKey = `${fields.error ?? ''}\u0000${fields.preview ?? ''}`
  const cached = isObject(source) ? textCache.get(source) : undefined
  let text = cached?.key === cacheKey ? cached.text : undefined
  if (text === undefined) {
    text = indexText([
      fields.name, fields.title, fields.preview, fields.args, fields.result,
      fields.error, fields.errorName, fields.errorCode, fields.callId, fields.parentCallId,
      fields.meta,
    ])
    if (isObject(source)) textCache.set(source, { key: cacheKey, text })
  }
  return { depth: 0, ...fields, text }
}

/** 工具块是否是已落定的结果。 */
function isToolResult(block) {
  return isObject(block) && block.kind === 'tool-result'
}

/**
 * 把一棵工具调用树展开成多行（子调用各占一行，带 depth）。
 * @param {any} block
 * @param {{rows: DebugRow[], seen: Set<string>, depth: number, parentCallId?: string, location?: object}} state
 */
function flattenTool(block, state) {
  if (!isObject(block)) return
  const callId = asString(block.callId)
  if (callId !== '' && state.seen.has(callId)) return
  if (callId !== '') state.seen.add(callId)

  const completed = isToolResult(block)
  const children = Array.isArray(block.subCalls) ? block.subCalls : []
  const name = asString(block.name) || asString(block.call?.name) || ''
  const argsRaw = completed
    ? asString(block.call?.argsRaw)
    : asString(block.argsRaw)
  const args = prettyJson(argsRaw)
  const result = completed ? contentText(block.content) : ''
  const errorObject = isObject(block.error) ? block.error : undefined
  const interrupted = errorObject?.code === 'interrupted'
  const status = !completed
    ? 'running'
    : block.isError === true
      ? (interrupted ? 'interrupted' : 'error')
      : 'ok'
  const start = completed
    ? (typeof block.callTime === 'number' ? block.callTime : block.time)
    : block.time
  const durationMs = completed ? durationOf(block.callTime, block.time) : undefined
  const errorText = errorObject === undefined
    ? ''
    : [asString(errorObject.name), asString(errorObject.code), asString(errorObject.reason)]
      .filter(value => value !== '').join(' · ')
  const previewSource = status === 'error' || status === 'interrupted'
    ? (result || errorText || (name === '' ? callId : ''))
    : (argsRaw || (status === 'running' ? '…' : ''))
  const turn = typeof block.turn === 'number' ? block.turn : state.location?.turn
  const step = typeof block.step === 'number' ? block.step : state.location?.step

  state.rows.push(makeRow({
    id: `tool:${callId || `${start}:${name}`}`,
    kind: 'tool',
    status,
    seq: typeof block.seq === 'number' ? block.seq : start,
    time: start,
    ...(turn === undefined ? {} : { turn }),
    ...(step === undefined ? {} : { step }),
    ...(name === '' ? {} : { name }),
    title: name || callId,
    preview: oneLine(previewSource || (completed ? '(无输出)' : '等待返回…')),
    callId,
    ...(state.parentCallId === undefined ? {} : { parentCallId: state.parentCallId }),
    depth: state.depth,
    ...(durationMs === undefined ? {} : { durationMs }),
    ...(args === '' ? {} : { args }),
    ...(argsRaw === '' ? {} : { argsRaw }),
    ...(result === '' ? {} : { result }),
    ...(errorText === '' ? {} : { error: errorText }),
    ...(errorObject === undefined ? {} : {
      errorName: asString(errorObject.name),
      errorCode: asString(errorObject.code),
    }),
    ...(block.meta === undefined ? {} : { meta: safeJson(block.meta) }),
  }, block))

  for (const child of children) {
    flattenTool(child, {
      ...state,
      depth: state.depth + 1,
      parentCallId: callId || state.parentCallId,
    })
  }
}

/** 对象 → 紧凑 JSON；循环引用等异常时退回 String。 */
function safeJson(value) {
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

/** 助手内容块 → 文本（忽略工具调用块，它们由工具行承担）。 */
function assistantText(blocks) {
  if (!Array.isArray(blocks)) return ''
  const parts = []
  for (const block of blocks) {
    if (!isObject(block)) continue
    if (block.kind === 'text' && typeof block.text === 'string') parts.push(block.text)
    else if (block.kind === 'reasoning' && typeof block.text === 'string') parts.push(block.text)
    else if (block.kind === 'image') parts.push('[image]')
    else if (block.kind === 'other') parts.push('[other]')
  }
  return parts.join('\n')
}

/** 找到与助手节点同回合同步骤、且在节点之前开始的最后一条请求。 */
function requestFor(node, requests) {
  if (!Array.isArray(requests) || typeof node.turn !== 'number') return undefined
  let found
  for (const request of requests) {
    if (!isObject(request) || request.purpose !== 'assistant') continue
    if (request.turn !== node.turn || request.step !== node.step) continue
    if (typeof request.startSeq === 'number' && request.startSeq > node.seq) continue
    found = request
  }
  return found
}

/**
 * 把快照投影成扁平、按时间排序的记录列表。
 * @param {any} snapshot
 * @returns {DebugRow[]}
 */
export function buildRows(snapshot) {
  if (!isObject(snapshot)) return []
  /** @type {DebugRow[]} */
  const rows = []
  const seen = new Set()
  const locations = snapshot.eventLocations instanceof Map ? snapshot.eventLocations : new Map()
  const requests = Array.isArray(snapshot.requests) ? snapshot.requests : []
  const nodes = Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : []
  // 工具贡献不带 location（内置快照只给 node 贡献写 eventLocations），
  // 用最近一个有位置的记录兜底，工具行才能参与回合筛选。
  let latestLocation = {}

  for (const node of nodes) {
    if (!isObject(node)) continue
    const location = locationOf(locations.get(node.seq))
    if (location.turn !== undefined) latestLocation = location
    const effectiveLocation = { ...latestLocation, ...location }
    switch (node.kind) {
      case 'tool-result': {
        flattenTool(node, { rows, seen, depth: 0, location: effectiveLocation })
        break
      }
      case 'assistant': {
        const content = assistantText(node.blocks)
        const request = requestFor(node, requests)
        const requestStatus = asString(request?.status)
        const failed = requestStatus === 'error'
        const usage = usageOf(node.usage ?? request?.usage)
        rows.push(makeRow({
          id: `assistant:${node.seq}`,
          kind: 'assistant',
          status: failed ? 'error' : 'ok',
          seq: node.seq,
          time: node.time,
          ...(typeof node.turn === 'number' ? { turn: node.turn } : location.turn === undefined ? {} : { turn: location.turn }),
          ...(typeof node.step === 'number' ? { step: node.step } : location.step === undefined ? {} : { step: location.step }),
          name: '',
          title: '',
          preview: oneLine(content || (failed ? request?.error : '(空回复)')),
          ...(content === '' ? {} : { result: content }),
          ...(failed && asString(request?.error) !== '' ? { error: asString(request.error) } : {}),
          ...(asString(request?.errorCode) === '' ? {} : { errorCode: asString(request.errorCode) }),
          ...(usage === undefined ? {} : { usage }),
          ...(requestStatus === '' ? {} : { requestStatus }),
        }, node))
        break
      }
      case 'user':
      case 'steering':
      case 'context': {
        const content = contentText(node.content)
        const label = node.kind === 'context' ? asString(node.producer?.label) : ''
        const name = label || (node.kind === 'user' ? '' : node.kind)
        rows.push(makeRow({
          id: `${node.kind}:${node.seq}`,
          kind: node.kind,
          status: 'neutral',
          seq: node.seq,
          time: node.time,
          ...location,
          ...(name === '' ? {} : { name }),
          title: name,
          preview: oneLine(content),
          ...(content === '' ? {} : { result: content }),
        }, node))
        break
      }
      case 'turn-error': {
        const message = asString(node.message)
        const code = asString(node.code)
        rows.push(makeRow({
          id: `error:${node.seq}`,
          kind: 'error',
          status: 'error',
          seq: node.seq,
          time: node.time,
          ...(typeof node.turn === 'number' ? { turn: node.turn } : {}),
          ...(typeof node.step === 'number' ? { step: node.step } : {}),
          ...(code === '' ? {} : { name: code, errorCode: code }),
          preview: oneLine(message || code || 'Turn failed'),
          ...(message === '' ? {} : { error: message }),
        }, node))
        break
      }
      case 'turn-max-tokens': {
        rows.push(makeRow({
          id: `max-tokens:${node.seq}`,
          kind: 'max-tokens',
          status: 'neutral',
          seq: node.seq,
          time: node.time,
          turn: node.turn,
          step: node.step,
          preview: 'Output token limit reached',
        }, node))
        break
      }
      case 'model-retry': {
        const failure = isObject(node.failure) ? node.failure : undefined
        const reason = asString(failure?.message) || asString(failure?.code) || ''
        const state = asString(node.retryState)
        rows.push(makeRow({
          id: `retry:${node.seq}`,
          kind: 'retry',
          status: 'neutral',
          seq: node.seq,
          time: node.time,
          ...(typeof node.turn === 'number' ? { turn: node.turn } : {}),
          ...(typeof node.step === 'number' ? { step: node.step } : {}),
          ...(state === '' ? {} : { name: state }),
          preview: oneLine(reason ? `Retry ${node.retry ?? ''}: ${reason}` : `Retry ${node.retry ?? ''}`),
          ...(reason === '' ? {} : { error: reason }),
          ...(failure === undefined ? {} : { meta: safeJson(failure) }),
        }, node))
        break
      }
      case 'command': {
        const outcome = isObject(node.outcome) ? node.outcome : undefined
        const status = outcome === undefined
          ? 'running'
          : outcome.kind === 'error' ? 'error' : 'ok'
        const content = asString(node.args)
        const result = asString(outcome?.text)
        rows.push(makeRow({
          id: `command:${node.seq}`,
          kind: 'command',
          status,
          seq: node.seq,
          time: node.time,
          ...location,
          ...(asString(node.name) === '' ? {} : { name: asString(node.name) }),
          title: asString(node.name),
          preview: oneLine(`${content}${result ? ` → ${result}` : ''}`),
          ...(content === '' ? {} : { args: content }),
          ...(result === '' ? {} : { result }),
          ...(status === 'error' ? { error: result || 'Command failed' } : {}),
        }, node))
        break
      }
      case 'compaction': {
        const request = requests.find(item => isObject(item)
          && item.purpose === 'compaction'
          && (item.resultSeq === node.seq || item.replacementSeq === node.seq))
        const failed = request?.status === 'error'
        const summary = asString(node.summary)
        rows.push(makeRow({
          id: `compaction:${node.seq}`,
          kind: 'compaction',
          status: failed ? 'error' : 'neutral',
          seq: node.seq,
          time: node.time,
          ...location,
          preview: oneLine(failed ? request?.error : summary || 'Compaction checkpoint'),
          ...(summary === '' ? {} : { result: summary }),
          ...(failed && asString(request?.error) !== '' ? { error: asString(request.error) } : {}),
        }, node))
        break
      }
      case 'unknown': {
        rows.push(makeRow({
          id: `unknown:${node.seq}`,
          kind: 'unknown',
          status: 'neutral',
          seq: node.seq,
          time: node.time,
          ...location,
          name: asString(node.type),
          preview: oneLine(asString(node.type)),
          ...(node.data === undefined ? {} : { meta: safeJson(node.data) }),
        }, node))
        break
      }
      default:
        break
    }
  }

  const runningCalls = Array.isArray(snapshot.runningCalls) ? snapshot.runningCalls : []
  for (const call of runningCalls) {
    flattenTool(call, { rows, seen, depth: 0, location: latestLocation })
  }

  const partial = isObject(snapshot.partial) ? snapshot.partial : undefined
  if (partial !== undefined) {
    const content = assistantText(partial.blocks)
    rows.push(makeRow({
      id: 'assistant:partial',
      kind: 'assistant',
      status: 'running',
      seq: Number.MAX_SAFE_INTEGER,
      time: Date.now(),
      ...(typeof partial.turn === 'number' ? { turn: partial.turn } : {}),
      ...(typeof partial.step === 'number' ? { step: partial.step } : {}),
      preview: oneLine(content || '正在生成…'),
      ...(content === '' ? {} : { result: content }),
    }, partial))
  }

  rows.sort((left, right) => left.time - right.time || left.seq - right.seq || left.id.localeCompare(right.id))
  return rows
}

/**
 * 默认筛选状态。
 * @returns {{query: string, tools: string[], statuses: RowStatus[], kinds: RowKind[], turns: number[]}}
 */
export function emptyFilters() {
  return { query: '', tools: [], statuses: [], kinds: [], turns: [] }
}

/** 解析搜索框：支持 field:value、引号、前缀 `-` 取反。 */
export function parseQuery(input) {
  const tokens = tokenize(asString(input))
  /** @type {{bare: string[], fields: Record<string, string[]>, negative: Record<string, string[]>}} */
  const result = { bare: [], fields: {}, negative: {} }
  const fields = new Set(['tool', 'name', 'status', 'kind', 'is', 'turn', 'step', 'id', 'code', 'text', 'ms', 'dur', 'duration'])
  for (const token of tokens) {
    let value = token
    let inverted = false
    if (value.startsWith('-') && value.length > 1) {
      inverted = true
      value = value.slice(1)
    }
    const match = /^([a-zA-Z][a-zA-Z-]*):(.*)$/s.exec(value)
    if (match !== null && fields.has(match[1].toLowerCase())) {
      const field = match[1].toLowerCase()
      const raw = unquote(match[2]).trim()
      if (raw === '') continue
      const target = inverted ? result.negative : result.fields
      const key = field === 'name' ? 'tool'
        : field === 'is' ? 'kind'
          : field === 'dur' || field === 'duration' ? 'ms'
            : field
      target[key] = [...(target[key] ?? []), raw]
      continue
    }
    const text = unquote(value).trim()
    if (text === '') continue
    if (inverted) result.negative.text = [...(result.negative.text ?? []), text]
    else result.bare.push(text)
  }
  return result
}

/** 按空白切词，双引号内保留空格。 */
function tokenize(input) {
  const tokens = []
  let current = ''
  let quote = false
  for (let index = 0; index < input.length; index += 1) {
    const char = input[index]
    if (char === '"') {
      quote = !quote
      current += char
      continue
    }
    if (!quote && /\s/.test(char)) {
      if (current !== '') tokens.push(current)
      current = ''
      continue
    }
    current += char
  }
  if (current !== '') tokens.push(current)
  return tokens
}

/** 去掉成对的双引号。 */
function unquote(value) {
  if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1)
  }
  return value
}

/** 字符串匹配：支持结尾 `*` 的前缀匹配；否则大小写不敏感包含。 */
function textMatches(haystack, needle) {
  const value = needle.toLowerCase()
  if (value.endsWith('*')) return haystack.includes(value.slice(0, -1))
  return haystack.includes(value)
}

/** 数字条件：`3`、`>=3`、`<=3`、`>3`、`<3`、`3-5`、`3..5`。 */
function numberMatches(actual, expression) {
  if (typeof actual !== 'number') return false
  const value = expression.trim()
  const range = /^(\d+)\s*(?:-|\.\.)\s*(\d+)$/.exec(value)
  if (range !== null) {
    const low = Number(range[1])
    const high = Number(range[2])
    return actual >= Math.min(low, high) && actual <= Math.max(low, high)
  }
  const comparison = /^(>=|<=|>|<|=)?\s*(-?\d+(?:\.\d+)?)$/.exec(value)
  if (comparison === null) return false
  const target = Number(comparison[2])
  switch (comparison[1] ?? '=') {
    case '>': return actual > target
    case '>=': return actual >= target
    case '<': return actual < target
    case '<=': return actual <= target
    default: return actual === target
  }
}

/** 状态别名。 */
function statusAlias(value) {
  const key = value.toLowerCase()
  if (key === 'err' || key === 'error' || key === 'failed' || key === 'failure') return 'error'
  if (key === 'ok' || key === 'success' || key === 'succeeded' || key === 'complete') return 'ok'
  if (key === 'run' || key === 'running' || key === 'pending') return 'running'
  if (key === 'interrupt' || key === 'interrupted' || key === 'aborted') return 'interrupted'
  return key
}

/** 类型别名。 */
function kindAlias(value) {
  const key = value.toLowerCase()
  if (key === 'tools' || key === 'tool') return 'tool'
  if (key === 'messages' || key === 'message' || key === 'msg') return 'assistant'
  if (key === 'errors' || key === 'error' || key === 'failed') return 'error'
  return key
}

/** 一条记录是否命中解析后的查询。 */
export function matchesQuery(row, query) {
  if (!isObject(row)) return false
  const haystack = asString(row.text).toLowerCase()

  for (const term of query.bare ?? []) {
    if (!textMatches(haystack, term)) return false
  }
  for (const term of query.negative?.text ?? []) {
    if (textMatches(haystack, term)) return false
  }
  for (const [field, values] of Object.entries(query.fields ?? {})) {
    if (!valuesMatch(row, haystack, field, values)) return false
  }
  for (const [field, values] of Object.entries(query.negative ?? {})) {
    if (field === 'text') continue
    if (valuesMatch(row, haystack, field, values)) return false
  }
  return true
}

function valuesMatch(row, haystack, field, values) {
  return values.some((value) => {
    switch (field) {
      case 'tool': return row.kind === 'tool' && textMatches(asString(row.name).toLowerCase(), value)
      case 'status': return row.status === statusAlias(value)
      case 'kind': return row.kind === kindAlias(value)
      case 'turn': return numberMatches(row.turn, value)
      case 'step': return numberMatches(row.step, value)
      case 'id': return textMatches(asString(row.callId || row.id).toLowerCase(), value)
      case 'code': return textMatches(`${asString(row.errorCode)} ${asString(row.errorName)}`.toLowerCase(), value)
      case 'ms': return numberMatches(row.durationMs, value)
      case 'text': return textMatches(haystack, value)
      default: return false
    }
  })
}

/**
 * 应用筛选状态。
 * @param {DebugRow[]} rows
 * @param {ReturnType<typeof emptyFilters>} filters
 * @param {'tools'|'statuses'|'kinds'|'turns'|undefined} [omit] 分面计数时忽略某一维。
 */
export function filterRows(rows, filters, omit) {
  const query = parseQuery(filters?.query ?? '')
  const tools = Array.isArray(filters?.tools) ? filters.tools : []
  const statuses = Array.isArray(filters?.statuses) ? filters.statuses : []
  const kinds = Array.isArray(filters?.kinds) ? filters.kinds : []
  const turns = Array.isArray(filters?.turns) ? filters.turns : []
  const toolSet = new Set(tools)
  const statusSet = new Set(statuses)
  const kindSet = new Set(kinds)
  const turnSet = new Set(turns)

  return rows.filter((row) => {
    if (!matchesQuery(row, query)) return false
    if (omit !== 'tools' && toolSet.size > 0 && (!toolSet.has(row.name) || row.kind !== 'tool')) return false
    if (omit !== 'statuses' && statusSet.size > 0 && !statusSet.has(row.status)) return false
    if (omit !== 'kinds' && kindSet.size > 0 && !kindSet.has(row.kind)) return false
    if (omit !== 'turns' && turnSet.size > 0 && (typeof row.turn !== 'number' || !turnSet.has(row.turn))) return false
    return true
  })
}

/**
 * 分面计数（按 Faceted search 的惯例：某一维的计数忽略该维自身的筛选）。
 * @param {DebugRow[]} rows
 * @param {ReturnType<typeof emptyFilters>} filters
 */
export function collectFacets(rows, filters) {
  const toolCounts = new Map()
  const statusCounts = new Map()
  const turnCounts = new Map()

  // 工具名清单要在切换状态筛选时保持稳定：计数忽略工具与状态两维，
  // 只跟随搜索 / 类型 / 回合。否则选中「错误」后没有报错的工具会从
  // 列表里消失，用户反而取消不了那个工具筛选。
  const forTools = { ...filters, statuses: [] }
  for (const row of filterRows(rows, forTools, 'tools')) {
    if (row.kind !== 'tool' || typeof row.name !== 'string' || row.name === '') continue
    toolCounts.set(row.name, (toolCounts.get(row.name) ?? 0) + 1)
  }
  for (const row of filterRows(rows, filters, 'statuses')) {
    statusCounts.set(row.status, (statusCounts.get(row.status) ?? 0) + 1)
  }
  for (const row of filterRows(rows, filters, 'turns')) {
    if (typeof row.turn !== 'number') continue
    turnCounts.set(row.turn, (turnCounts.get(row.turn) ?? 0) + 1)
  }

  return {
    tools: [...toolCounts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name)),
    statuses: Object.fromEntries(statusCounts),
    turns: [...turnCounts.entries()]
      .map(([turn, count]) => ({ turn, count }))
      .sort((left, right) => left.turn - right.turn),
  }
}

/** 统计筛选结果里的工具调用数、错误数。 */
export function summarize(rows) {
  let tools = 0
  let errors = 0
  for (const row of rows) {
    if (row.kind === 'tool') tools += 1
    if (row.status === 'error' || row.status === 'interrupted') errors += 1
  }
  return { tools, errors }
}