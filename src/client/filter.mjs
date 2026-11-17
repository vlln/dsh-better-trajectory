/**
 * Better Trajectory 的纯工具索引与统计层。
 *
 * 把原生 `TrajectorySnapshot` 展开成扁平的调用记录（`buildToolIndex`），
 * 再按工具聚合调用数 / 错误数 / 耗时（`summarizeTools`），并提供共用的
 * 错误状态判定（`isErrorStatus`）。
 *
 * 查询与筛选判据只有一份，在 `query.mjs`（`matchesCell` → `matchesFilters`）；
 * 本文件不再保留第二份筛选实现。
 *
 * 纯 ESM，`node --test` 可直接导入。
 */

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
      kind: depth > 0 ? 'subtool' : 'tool',
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
        kind: 'tool',
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
        kind: 'tool',
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
