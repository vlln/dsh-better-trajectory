// @ts-nocheck
/** 只移植轨迹视图用到的首 token 时间计算（取自 @deepseek-ai/dsh-llm，MIT）。 */
export function isTokenDelta(chunk) {
  switch (chunk.type) {
    case 'text-delta':
    case 'reasoning-delta':
      return chunk.text !== ''
    case 'tool-call-delta':
      return chunk.argumentsDelta !== '' || chunk.name !== undefined
    default:
      return false
  }
}

function firstRunMemberTime(run, predicate) {
  const fragments = run.type === 'tool-call-chunks' ? run.args : run.texts
  let time = run.time0
  for (let index = 0; index < fragments.length; index += 1) {
    if (index > 0) time += run.dt[index - 1]
    if (predicate(fragments[index])) return time
  }
  return undefined
}

export function runFirstTokenTime(run) {
  if (run.type === 'tool-call-chunks' && run.name !== undefined) return run.time0
  return firstRunMemberTime(run, fragment => fragment !== '')
}

export function assistantStreamFirstTokenTime(stream) {
  for (const record of stream) {
    const time = record.type === 'chunk'
      ? (isTokenDelta(record.chunk) ? record.time : undefined)
      : runFirstTokenTime(record)
    if (time !== undefined) return time
  }
  return undefined
}
