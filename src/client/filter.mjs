/**
 * Better Trajectory 的纯筛选层。
 *
 * 目标：**不改内置轨迹视图**，只把它的轨迹快照裁掉不匹配的工具调用，
 * 再把裁剪后的快照交给内置 `TrajectoryView` 渲染。因此回合、步骤、折叠、
 * 搜索、时间轴、详情等原生能力全部保留；消息与回合头作为上下文保留。
 *
 * 纯 ESM，`node --test` 可直接导入。
 */

/** 状态选项。 */
export const FILTER_STATUSES = ['all', 'error', 'running']

/**
 * @returns {{
 *   tools: string[],
 *   status: 'all'|'error'|'running',
 *   turn: number|null,
 *   minDuration: number|null,
 *   errorCode: string|null,
 * }}
 */
export function emptyFilters() {
  return { tools: [], status: 'all', turn: null, minDuration: null, errorCode: null }
}

/** @param {ReturnType<typeof emptyFilters>} filters */
export function isActive(filters) {
  return filters.tools.length > 0 || filters.status !== 'all' || filters.turn !== null
    || filters.minDuration !== null || filters.errorCode !== null
}

/** @param {unknown} value */
function isObject(value) {
  return typeof value === 'object' && value !== null
}

/** @param {unknown} value */
function asString(value) {
  return typeof value === 'string' ? value : ''
}

/** 兼容嵌套 / 扁平两种 location 形状。 */
function locationOf(location) {
  if (!isObject(location)) return {}
  const turnValue = isObject(location.turn) ? location.turn.turn : location.turn
  const stepValue = isObject(location.step) ? location.step.step : location.step
  return {
    ...(typeof turnValue === 'number' ? { turn: turnValue } : {}),
    ...(typeof stepValue === 'number' ? { step: stepValue } : {}),
  }
}

/** 内容块 → 文本；图片/文件用占位符。 */
function contentText(content) {
  if (!Array.isArray(content)) return ''
  const parts = []
  for (const block of content) {
    if (!isObject(block)) continue
    if (typeof block.text === 'string') parts.push(block.text)
    else if (block.type === 'image') parts.push('[image]')
    else if (block.type === 'file') parts.push('[file]')
    else if (block.type === 'tool-call') parts.push(`[tool-call ${asString(block.name)}]`)
    else parts.push(`[${asString(block.type) || 'block'}]`)
  }
  return parts.join('\n')
}

/** 工具状态。 */
function statusOf(block) {
  if (!isObject(block) || block.kind !== 'tool-result') return 'running'
  if (block.isError !== true) return 'ok'
  return block.error?.code === 'interrupted' ? 'interrupted' : 'error'
}

/** 是否错误状态（含中断）。 */
export function isErrorStatus(status) {
  return status === 'error' || status === 'interrupted'
}

/**
 * 给每个 eventNode 计算回合 / 步骤。
 * 内置快照不给工具贡献写 location，用最近一个有位置的记录兜底。
 * @param {any} snapshot
 */
function indexNodeTurns(snapshot) {
  const result = new Map()
  const locations = snapshot.eventLocations instanceof Map ? snapshot.eventLocations : new Map()
  const nodes = Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : []
  let latest = {}
  for (const node of nodes) {
    if (!isObject(node)) continue
    const location = locationOf(locations.get(node.seq))
    if (location.turn !== undefined) latest = location
    const turn = typeof node.turn === 'number' ? node.turn : location.turn ?? latest.turn
    const step = typeof node.step === 'number' ? node.step : location.step ?? latest.step
    result.set(node.seq, {
      ...(turn === undefined ? {} : { turn }),
      ...(step === undefined ? {} : { step }),
    })
  }
  return result
}

/**
 * 把已完成和运行中的工具调用展开成扁平索引。
 * @param {any} snapshot
 */
export function buildToolIndex(snapshot) {
  /** @type {any[]} */
  const records = []
  const byKey = new Map()
  const byName = new Map()
  const turns = new Map()
  const nodeTurns = indexNodeTurns(snapshot)
  const keyOf = (turn, callId) => `${turn ?? ''}\u0000${callId}`

  const visit = (block, fallbackTurn, parentCallId, depth, fallbackStep) => {
    if (!isObject(block)) return
    const callId = asString(block.callId)
    const name = asString(block.name) || asString(block.call?.name)
    const status = statusOf(block)
    const turn = typeof block.turn === 'number' ? block.turn : fallbackTurn
    const step = typeof block.step === 'number' ? block.step : fallbackStep
    const argsRaw = asString(block.call?.argsRaw) || asString(block.argsRaw)
    const result = contentText(block.content)
    const errorObject = isObject(block.error) ? block.error : undefined
    const errorName = asString(errorObject?.name)
    const errorCode = asString(errorObject?.code)
    const errorReason = asString(errorObject?.reason)
    const errorText = [errorName, errorCode, errorReason].filter(Boolean).join(' · ')
    const started = typeof block.callTime === 'number' ? block.callTime : block.time
    const durationMs = typeof block.callTime === 'number' && typeof block.time === 'number'
      ? Math.max(0, block.time - block.callTime)
      : undefined
    const record = {
      callId,
      name,
      status,
      depth,
      ...(turn === undefined ? {} : { turn }),
      ...(step === undefined ? {} : { step }),
      ...(parentCallId === undefined ? {} : { parentCallId }),
      ...(started === undefined ? {} : { time: started }),
      ...(durationMs === undefined ? {} : { durationMs }),
      ...(argsRaw === '' ? {} : { args: argsRaw }),
      ...(result === '' ? {} : { result }),
      ...(errorName === '' ? {} : { errorName }),
      ...(errorCode === '' ? {} : { errorCode }),
      ...(errorText === '' ? {} : { errorText }),
    }
    records.push(record)
    if (callId !== '') byKey.set(keyOf(turn, callId), record)
    if (name !== '') byName.set(name, (byName.get(name) ?? 0) + 1)
    if (turn !== undefined) turns.set(turn, (turns.get(turn) ?? 0) + 1)
    const subCalls = Array.isArray(block.subCalls) ? block.subCalls : []
    for (const sub of subCalls) visit(sub, turn, callId || parentCallId, depth + 1, step)
  }

  const nodes = Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : []
  for (const node of nodes) {
    if (!isObject(node) || node.kind !== 'tool-result') continue
    visit(node, nodeTurns.get(node.seq)?.turn, undefined, 0, nodeTurns.get(node.seq)?.step)
  }
  const running = Array.isArray(snapshot.runningCalls) ? snapshot.runningCalls : []
  for (const call of running) {
    visit(call, nodeTurns.get(call.seq)?.turn ?? call.turn, undefined, 0, call.step ?? nodeTurns.get(call.seq)?.step)
  }

  // 窗口从中间截断时，tool-result 的配对 call 可能不在窗口里；原生的工具行
  // 仍会从 assistant 的 tool-call block 渲染。把这些 block 也计入索引，
  // 工具名计数和筛选才和屏幕上看到的行一致。
  for (const node of nodes) {
    if (!isObject(node) || node.kind !== 'assistant') continue
    const blocks = Array.isArray(node.blocks) ? node.blocks : []
    for (const block of blocks) {
      if (!isObject(block) || block.kind !== 'tool-call') continue
      const callId = asString(block.callId)
      if (callId === '' || byKey.has(keyOf(node.turn, callId))) continue
      const record = {
        callId,
        name: asString(block.name),
        status: 'ok',
        depth: 0,
        ...(typeof node.turn === 'number' ? { turn: node.turn } : {}),
        ...(typeof node.step === 'number' ? { step: node.step } : {}),
        ...(asString(block.argsRaw) === '' ? {} : { args: asString(block.argsRaw) }),
      }
      records.push(record)
      byKey.set(keyOf(node.turn, callId), record)
      if (record.name !== '') byName.set(record.name, (byName.get(record.name) ?? 0) + 1)
      if (record.turn !== undefined) turns.set(record.turn, (turns.get(record.turn) ?? 0) + 1)
    }
  }

  const partial = isObject(snapshot.partial) ? snapshot.partial : undefined
  if (partial !== undefined) {
    for (const block of Array.isArray(partial.blocks) ? partial.blocks : []) {
      if (!isObject(block) || block.kind !== 'tool-call') continue
      const callId = asString(block.callId)
      if (callId === '' || byKey.has(keyOf(partial.turn, callId))) continue
      const record = {
        callId,
        name: asString(block.name),
        status: 'running',
        depth: 0,
        ...(typeof partial.turn === 'number' ? { turn: partial.turn } : {}),
        ...(asString(block.argsRaw) === '' ? {} : { args: asString(block.argsRaw) }),
      }
      records.push(record)
      byKey.set(keyOf(partial.turn, callId), record)
      if (record.name !== '') byName.set(record.name, (byName.get(record.name) ?? 0) + 1)
      if (record.turn !== undefined) turns.set(record.turn, (turns.get(record.turn) ?? 0) + 1)
    }
  }

  return { records, byKey, byName, turns, nodeTurns, keyOf }
}

/** 一条调用是否命中筛选。 */
export function matchesRecord(record, filters) {
  if (!isObject(record)) return false
  if (filters.tools.length > 0 && !filters.tools.includes(record.name)) return false
  if (filters.status === 'error' && !isErrorStatus(record.status)) return false
  if (filters.status === 'running' && record.status !== 'running') return false
  if (filters.turn !== null && record.turn !== filters.turn) return false
  if (filters.errorCode !== null && record.errorCode !== filters.errorCode) return false
  if (filters.minDuration !== null && (record.durationMs ?? -1) < filters.minDuration) return false
  return true
}

/**
 * 分面计数：工具名忽略状态、保留回合；状态忽略状态自身；回合忽略回合自身。
 * @param {ReturnType<typeof buildToolIndex>} index
 * @param {ReturnType<typeof emptyFilters>} filters
 */
export function collectStats(index, filters) {
  const toolCounts = new Map()
  const codeCounts = new Map()
  let errors = 0
  let running = 0
  let matched = 0
  const turnCounts = new Map()

  for (const record of index.records) {
    const turnOk = filters.turn === null || record.turn === filters.turn
    if (turnOk && record.name !== '') {
      toolCounts.set(record.name, (toolCounts.get(record.name) ?? 0) + 1)
    }
    const toolsOk = filters.tools.length === 0 || filters.tools.includes(record.name)
    const otherOk = turnOk
      && (filters.errorCode === null || record.errorCode === filters.errorCode)
      && (filters.minDuration === null || (record.durationMs ?? -1) >= filters.minDuration)
    if (toolsOk && otherOk) {
      if (isErrorStatus(record.status)) errors += 1
      if (record.status === 'running') running += 1
    }
    if (toolsOk && turnOk && isErrorStatus(record.status) && record.errorCode) {
      codeCounts.set(record.errorCode, (codeCounts.get(record.errorCode) ?? 0) + 1)
    }
    if (toolsOk && record.turn !== undefined) {
      turnCounts.set(record.turn, (turnCounts.get(record.turn) ?? 0) + 1)
    }
    if (matchesRecord(record, filters)) matched += 1
  }

  return {
    tools: [...toolCounts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name)),
    errors,
    running,
    matched,
    total: index.records.length,
    turns: [...turnCounts.entries()]
      .map(([turn, count]) => ({ turn, count }))
      .sort((left, right) => left.turn - right.turn),
    errorCodes: [...codeCounts.entries()]
      .map(([code, count]) => ({ code, count }))
      .sort((left, right) => right.count - left.count || left.code.localeCompare(right.code)),
  }
}

/** 按工具聚合调用数、错误数、总耗时、平均 / p95 耗时。 */
export function summarizeTools(index) {
  /** @type {Map<string, {name: string, calls: number, errors: number, running: number, totalMs: number, durations: number[]}>} */
  const map = new Map()
  for (const record of index.records) {
    if (record.name === '') continue
    let item = map.get(record.name)
    if (item === undefined) {
      item = { name: record.name, calls: 0, errors: 0, running: 0, totalMs: 0, durations: [] }
      map.set(record.name, item)
    }
    item.calls += 1
    if (isErrorStatus(record.status)) item.errors += 1
    if (record.status === 'running') item.running += 1
    if (typeof record.durationMs === 'number') {
      item.totalMs += record.durationMs
      item.durations.push(record.durationMs)
    }
  }
  return [...map.values()].map((item) => {
    const durations = [...item.durations].sort((left, right) => left - right)
    const at = (ratio) => durations.length === 0
      ? null
      : durations[Math.min(durations.length - 1, Math.ceil((durations.length - 1) * ratio))]
    return {
      name: item.name,
      calls: item.calls,
      errors: item.errors,
      running: item.running,
      totalMs: item.durations.length === 0 ? null : item.totalMs,
      avgMs: item.durations.length === 0 ? null : item.totalMs / item.durations.length,
      p95Ms: at(0.95),
    }
  }).sort((left, right) => right.calls - left.calls || left.name.localeCompare(right.name))
}

/** 当前筛选下最慢的调用。 */
export function slowestCalls(index, filters, limit = 12) {
  return index.records
    .filter(record => matchesRecord(record, filters) && typeof record.durationMs === 'number')
    .sort((left, right) => (right.durationMs ?? 0) - (left.durationMs ?? 0))
    .slice(0, limit)
}

/** 当前筛选下的错误调用。 */
export function errorCalls(index, filters) {
  return index.records
    .filter(record => matchesRecord(record, filters) && isErrorStatus(record.status))
    .sort((left, right) => (left.turn ?? 0) - (right.turn ?? 0) || (left.time ?? 0) - (right.time ?? 0))
}

/** 当前筛选下的调用。 */
export function filteredCalls(index, filters) {
  return index.records.filter(record => matchesRecord(record, filters))
}

/**
 * 裁掉不匹配的工具调用，保留消息与回合上下文。
 * 没有筛选时返回原快照（身份不变）。
 * @param {any} snapshot
 * @param {ReturnType<typeof emptyFilters>} filters
 * @param {ReturnType<typeof buildToolIndex>} [index]
 */
export function filterSnapshot(snapshot, filters, index = buildToolIndex(snapshot)) {
  if (!isActive(filters)) return snapshot
  const nodeTurns = index.nodeTurns

  const recordFor = (block, fallbackTurn) => {
    const callId = asString(block?.callId)
    const known = callId === '' ? undefined : index.byKey.get(index.keyOf(fallbackTurn, callId))
    if (known !== undefined) return known
    return {
      callId,
      name: asString(block?.name) || asString(block?.call?.name),
      status: statusOf(block),
      ...(fallbackTurn === undefined ? {} : { turn: fallbackTurn }),
    }
  }

  const filterToolBlock = (block, fallbackTurn) => {
    if (!isObject(block)) return null
    const record = recordFor(block, fallbackTurn)
    const subCalls = (Array.isArray(block.subCalls) ? block.subCalls : [])
      .map(sub => filterToolBlock(sub, record.turn ?? fallbackTurn))
      .filter(sub => sub !== null)
    if (!matchesRecord(record, filters) && subCalls.length === 0) return null
    return { ...block, subCalls }
  }

  const filterAssistant = (node) => {
    const blocks = (Array.isArray(node.blocks) ? node.blocks : []).filter((block) => {
      if (!isObject(block) || block.kind !== 'tool-call') return true
      return matchesRecord(recordFor(
        { callId: block.callId, name: block.name },
        node.turn,
      ), filters)
    })
    if (blocks.length === 0) return null
    return { ...node, blocks }
  }

  const nodes = (Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : []).flatMap((node) => {
    if (!isObject(node)) return []
    const info = nodeTurns.get(node.seq) ?? {}
    const turn = typeof node.turn === 'number' ? node.turn : info.turn
    if (filters.turn !== null && turn !== filters.turn) return []
    if (node.kind === 'tool-result') {
      const filtered = filterToolBlock(node, turn)
      return filtered === null ? [] : [filtered]
    }
    if (node.kind === 'assistant') {
      const filtered = filterAssistant(node)
      return filtered === null ? [] : [filtered]
    }
    // 原生视图不渲染 turn-error / retry / max-tokens；筛选时无需保留。
    if (node.kind === 'turn-error' || node.kind === 'model-retry' || node.kind === 'turn-max-tokens') {
      return []
    }
    return [node]
  })

  const runningCalls = (Array.isArray(snapshot.runningCalls) ? snapshot.runningCalls : [])
    .map(call => filterToolBlock(call, call.turn))
    .filter(call => call !== null)

  let partial = snapshot.partial
  if (partial !== null && partial !== undefined) {
    if (filters.turn !== null && partial.turn !== filters.turn) partial = null
    else {
      const blocks = (Array.isArray(partial.blocks) ? partial.blocks : []).filter((block) => {
        if (!isObject(block) || block.kind !== 'tool-call') return true
        return matchesRecord(recordFor(
          { callId: block.callId, name: block.name },
          partial.turn,
        ), filters)
      })
      partial = blocks.length === 0 ? null : { ...partial, blocks }
    }
  }

  const requests = filters.turn === null
    ? snapshot.requests
    : (Array.isArray(snapshot.requests) ? snapshot.requests : [])
      .filter(request => request.turn === filters.turn)

  return {
    ...snapshot,
    eventNodes: nodes,
    runningCalls,
    requests,
    partial,
    // 初始系统提示不属于任何回合，筛选时隐藏，避免占据首行。
    systemPrompts: undefined,
  }
}