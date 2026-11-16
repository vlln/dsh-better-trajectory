// @ts-nocheck
/** Trajectory view: compact summary over a turn-aware event ledger. */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type {
  AssistantBlock, AssistantMessageNode, ConvViewProps, MessageImageLoader,
  ToolCallBlock,
} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type { InjectFace, PropsLocale, PropsRenderSlots } from '@deepseek-ai/dsh-client-ui-slots'
import type { SnapshotStore } from '@deepseek-ai/dsh-client-store'
import type { JsonTreeProps } from '@deepseek-ai/dsh-client-ui-primitives'
import {
  TrajectoryTable,
  type TrajectoryRequestNumber,
  type TrajectoryUsage,
} from './TrajectoryTable.tsx'
import type { WatchToolResult } from './watch-tool-result.ts'
import { QueryBar } from './QueryBar.tsx'
import { buildToolIndex, isErrorStatus, summarizeTools } from '../../client/filter.mjs'
import { matchesQuery, parseQuery } from '../../client/query.mjs'
import { TrajectoryTimeline } from './TrajectoryTimeline.tsx'
import {
  appendTrajectoryPartialLayout, deriveTrajectoryLayout,
  type TrajectoryTurnModel,
} from './layout.ts'
import {
  trajectoryTimelineFocusIndexes,
  type TrajectoryTimelineMode,
  type TrajectoryTimeRange,
} from './timeline.ts'
import { trajectoryRecordId } from './trajectory-record.ts'
import type { TrajectorySnapshot } from './trajectory-contract.ts'
import css from './views.module.css'

const EMPTY_TURN_IDS: ReadonlySet<number> = new Set()
const EMPTY_RECORD_IDS: ReadonlySet<string> = new Set()
const HISTORY_PAGE_NODES = 50
const NAV_HISTORY_LIMIT = 50
const QUERY_STORAGE_PREFIX = 'dsh-better-trajectory:query:'

function containsCall(calls: readonly ToolCallBlock[], callId: string): boolean {
  for (const call of calls) {
    if (call.callId === callId || containsCall(call.subCalls, callId)) return true
  }
  return false
}

function lastCellIndex(turns: readonly TrajectoryTurnModel[]): number {
  let last = 0
  for (const turn of turns) {
    for (const group of turn.groups) {
      for (const cell of group.cells) last = Math.max(last, cell.index)
    }
  }
  return last
}

function timelineBlock(block: AssistantBlock): AssistantBlock {
  switch (block.kind) {
    case 'text': return { kind: 'text', text: '' }
    case 'reasoning': return { kind: 'reasoning', text: '' }
    case 'image': return block
    case 'tool-call': return {
      kind: 'tool-call',
      callId: block.callId,
      name: block.name,
      argsRaw: '',
    }
    case 'other': return { kind: 'other', block: null }
  }
}

function partialStructureSignature(partial: TrajectorySnapshot['partial']): string {
  if (partial === null) return ''
  return partial.blocks.map(block => block.kind === 'tool-call'
    ? `${block.kind}:${block.callId}:${block.name}`
    : block.kind).join('\u0000')
}

/** Session-bound controls not already supplied by the conversation view slot. */
export interface TrajectoryViewInjected {
  /** Shared wrapping preference read by expansion handlers. */
  jsonStringWrapping?: Omit<NonNullable<JsonTreeProps['stringWrapping']>, 'label'>
  hooks: {
    duration: SnapshotStore<boolean>
  }
  loadOlder: () => Promise<boolean>
  loadImage: MessageImageLoader
  setActualDuration: (actualDuration: boolean) => void
  watchToolResult?: WatchToolResult
}

interface UsageLike {
  inputTokens?: number
  cacheReadTokens?: number
  cacheWriteTokens?: number
  outputTokens?: number
  reasoningTokens?: number
}

function requestUsage(value: unknown): TrajectoryUsage | undefined {
  const usage = value as UsageLike | undefined
  if (usage === undefined) return undefined
  return {
    ...(usage.inputTokens === undefined ? {} : { input: usage.inputTokens }),
    ...(usage.cacheReadTokens === undefined ? {} : { cacheRead: usage.cacheReadTokens }),
    ...(usage.cacheWriteTokens === undefined ? {} : { cacheWrite: usage.cacheWriteTokens }),
    ...(usage.outputTokens === undefined ? {} : { output: usage.outputTokens }),
    ...(usage.reasoningTokens === undefined ? {} : { reasoning: usage.reasoningTokens }),
  }
}

function addUsage(
  total: TrajectoryUsage | undefined,
  usage: TrajectoryUsage | undefined,
): TrajectoryUsage | undefined {
  if (usage === undefined) return total
  return {
    ...(total?.input === undefined && usage.input === undefined
      ? {}
      : { input: (total?.input ?? 0) + (usage.input ?? 0) }),
    ...(total?.cacheRead === undefined && usage.cacheRead === undefined
      ? {}
      : { cacheRead: (total?.cacheRead ?? 0) + (usage.cacheRead ?? 0) }),
    ...(total?.cacheWrite === undefined && usage.cacheWrite === undefined
      ? {}
      : { cacheWrite: (total?.cacheWrite ?? 0) + (usage.cacheWrite ?? 0) }),
    ...(total?.output === undefined && usage.output === undefined
      ? {}
      : { output: (total?.output ?? 0) + (usage.output ?? 0) }),
    ...(total?.reasoning === undefined && usage.reasoning === undefined
      ? {}
      : { reasoning: (total?.reasoning ?? 0) + (usage.reasoning ?? 0) }),
  }
}

export function TrajectoryView({
  useSession, useTrajectory, useDuration, watchToolResult, loadOlder, loadImage, setActualDuration,
  viewRequest, completeViewRequest, renderSlot, t, jsonStringWrapping, qt, sessionId,
}: ConvViewProps
  & Pick<PropsRenderSlots<'conversation.trajectory.images'>, 'renderSlot'>
  & InjectFace<TrajectoryViewInjected>
  & PropsLocale<'trajectory'>) {
  const foldKey = `dsh-better-trajectory:folds:${sessionId ?? ''}`
  const [collapsedTurns, setCollapsedTurns] = useState<ReadonlySet<number>>(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey)
      const parsed = raw === null ? null : JSON.parse(raw) as { turns?: number[] }
      return new Set(Array.isArray(parsed?.turns) ? parsed.turns : [])
    } catch { return EMPTY_TURN_IDS }
  })
  const [collapsedAssistants, setCollapsedAssistants] =
    useState<ReadonlySet<string>>(() => {
      try {
        const raw = window.sessionStorage.getItem(foldKey)
        const parsed = raw === null ? null : JSON.parse(raw) as { assistants?: string[] }
        return new Set(Array.isArray(parsed?.assistants) ? parsed.assistants : [])
      } catch { return EMPTY_RECORD_IDS }
    })
  const [collapsedTools, setCollapsedTools] = useState<ReadonlySet<string>>(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey)
      const parsed = raw === null ? null : JSON.parse(raw) as { tools?: string[] }
      return new Set(Array.isArray(parsed?.tools) ? parsed.tools : [])
    } catch { return EMPTY_RECORD_IDS }
  })
  useEffect(() => {
    try {
      window.sessionStorage.setItem(foldKey, JSON.stringify({
        turns: [...collapsedTurns],
        assistants: [...collapsedAssistants],
        tools: [...collapsedTools],
      }))
    } catch {
      // 隐私模式：折叠仍生效，只是不跨刷新保留。
    }
  }, [foldKey, collapsedTurns, collapsedAssistants, collapsedTools])
  const [timelineSelection, setTimelineSelection] = useState<TrajectoryTimeRange | null>(null)
  const actualDuration = useDuration(value => value)
  const [actualTime, setActualTime] = useState(false)
  const [queryText, setQueryText] = useState(() => {
    try {
      return window.sessionStorage.getItem(`${QUERY_STORAGE_PREFIX}${sessionId ?? ''}`) ?? ''
    } catch {
      return ''
    }
  })
  useEffect(() => {
    try {
      window.sessionStorage.setItem(`${QUERY_STORAGE_PREFIX}${sessionId ?? ''}`, queryText)
    } catch {
      // 隐私模式：查询仍生效，只是不跨刷新记住。
    }
  }, [queryText, sessionId])
  const [showTime, setShowTime] = useState(true)
  const restoreScroll = useRef(0)
  const [toast, setToast] = useState<{ id: number; text: string; undo?: () => void } | null>(null)
  const toastTimer = useRef<number | null>(null)
  const toastSeq = useRef(0)
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState<number | null>(null)
  const [timelineRecordSelection, setTimelineRecordSelection] = useState<{
    readonly index: number
  } | null>(null)
  const [timelineRecordFocus, setTimelineRecordFocus] = useState<{
    readonly index: number
  } | null>(null)
  const completeInspection = useTrajectory(snapshot => snapshot)
  const latestNodeSeq = completeInspection.eventNodes.at(-1)?.seq
  const [historyTailSeq, setHistoryTailSeq] = useState(latestNodeSeq)
  const [historyNodeLimit, setHistoryNodeLimit] = useState(HISTORY_PAGE_NODES)
  const fixedTailSeq = historyTailSeq ?? latestNodeSeq
  const historyTailIndex = fixedTailSeq === undefined
    ? -1
    : completeInspection.eventNodes.findLastIndex(node => node.seq <= fixedTailSeq)
  const historyEndIndex = historyTailIndex < 0 && latestNodeSeq !== undefined
    ? completeInspection.eventNodes.length
    : historyTailIndex + 1
  const historyStartIndex = Math.max(0, historyEndIndex - historyNodeLimit)
  useEffect(() => {
    if (latestNodeSeq !== undefined && (historyTailSeq === undefined || historyTailIndex < 0)) {
      setHistoryTailSeq(latestNodeSeq)
    }
  }, [historyTailIndex, historyTailSeq, latestNodeSeq])
  const inspection = useMemo<TrajectorySnapshot>(() => {
    if (historyStartIndex === 0) return completeInspection
    const eventNodes = completeInspection.eventNodes.slice(historyStartIndex)
    const firstSeq = eventNodes[0]?.seq ?? 0
    return {
      ...completeInspection,
      eventNodes,
      requests: completeInspection.requests.filter(request =>
        request.startSeq >= firstSeq || (request.resultSeq ?? -1) >= firstSeq),
    }
  }, [completeInspection, historyStartIndex])
  const historyLoading = useSession(snapshot => snapshot.openState === 'loading')
  const olderHistoryLoading = useSession(snapshot => snapshot.loadingOlder)
  const sessionHasOlderHistory = useSession(snapshot => snapshot.hasMore)
  const hasResidentOlderHistory = historyStartIndex > 0
  const hasOlderHistory = hasResidentOlderHistory
    || sessionHasOlderHistory
  const nodes = inspection.eventNodes
  const eventLocations = inspection.eventLocations
  const historyBaseSeq = nodes[0]?.seq ?? 0
  const partial = inspection.partial
  const runningCalls = inspection.runningCalls
  const requests = inspection.requests
  const callSchemas = inspection.callSchemas
  const inspectCallId = viewRequest?.view === 'trajectory' ? viewRequest.focus : null
  const inspectNodeIndex = useMemo(() => inspectCallId === null
    ? -1
    : completeInspection.eventNodes.findIndex(node => node.kind === 'assistant'
      ? node.blocks.some(block => block.kind === 'tool-call' && block.callId === inspectCallId)
      : node.kind === 'tool-result' && containsCall([node], inspectCallId)),
  [completeInspection.eventNodes, inspectCallId])
  useEffect(() => {
    if (inspectNodeIndex < 0 || inspectNodeIndex >= historyStartIndex) return
    setHistoryNodeLimit(limit => limit + historyStartIndex - inspectNodeIndex)
  }, [historyStartIndex, inspectNodeIndex])
  const requestNumbers = useMemo<readonly TrajectoryRequestNumber[]>(() => {
    const assistantsByStep = new Map<string, AssistantMessageNode>()
    for (const node of completeInspection.eventNodes) {
      if (node.kind !== 'assistant' || node.step <= 0) continue
      assistantsByStep.set(`${node.turn}\u0000${node.step}`, node)
    }
    const requestsByStep = new Map(
      completeInspection.requests
        .filter(request => request.purpose === 'assistant')
        .map(request => [
          `${request.turn}\u0000${request.step}`,
          request,
        ]),
    )
    const orderedRequests = [
      ...completeInspection.requests.map(request => ({
        seq: request.startSeq,
        request,
        node: request.purpose === 'assistant'
          ? assistantsByStep.get(`${request.turn}\u0000${request.step}`)
          : undefined,
      })),
      ...[...assistantsByStep.entries()].flatMap(([key, node]) =>
        requestsByStep.has(key)
          ? []
          : [{
            seq: node.seq,
            request: undefined,
            node,
          }],
      ),
    ].sort((left, right) => left.seq - right.seq)
    const numbered: TrajectoryRequestNumber[] = []
    let cumulativeUsage: TrajectoryUsage | undefined
    for (const [index, entry] of orderedRequests.entries()) {
      const usage = requestUsage(entry.request?.usage ?? entry.node?.usage)
      cumulativeUsage = addUsage(cumulativeUsage, usage)
      if (entry.request?.purpose !== 'compaction') {
        const request = entry.request
        const node = entry.node
        const turn = request?.turn ?? node?.turn
        const step = request?.step ?? node?.step
        if (turn === undefined || step === undefined) continue
        const provider = request?.providerMetadata?.provider ?? node?.providerMetadata?.provider
        const model = request?.providerMetadata?.model ?? node?.providerMetadata?.model
        const requestConfig = request?.requestConfig ?? node?.requestConfig
        const startedAt = request?.startedAt
        const completedAt = request === undefined ? node?.time : request.completedAt
        const resultSeq = request?.resultSeq ?? node?.seq
        numbered.push({
          seq: entry.seq,
          turn,
          step,
          group: t('group.step', { step }),
          number: index + 1,
          status: request?.status ?? (node?.interrupted === true ? 'error' : 'complete'),
          ...(startedAt === undefined ? {} : { startedAt }),
          ...(completedAt === undefined ? {} : { completedAt }),
          ...(request?.error === undefined ? {} : { error: request.error }),
          ...(request?.errorCode === undefined ? {} : { errorCode: request.errorCode }),
          ...(resultSeq === undefined ? {} : { resultSeq }),
          ...(request?.retry === undefined ? {} : { retry: request.retry }),
          ...(request?.maxRetries === undefined ? {} : { maxRetries: request.maxRetries }),
          ...(request?.retryDelayMs === undefined
            ? {}
            : { retryDelayMs: request.retryDelayMs }),
          ...(provider === undefined ? {} : { provider }),
          ...(model === undefined ? {} : { model }),
          ...(requestConfig === undefined ? {} : { requestConfig }),
          ...(usage === undefined ? {} : { usage }),
          ...(cumulativeUsage === undefined ? {} : { cumulativeUsage }),
        })
        continue
      }
      const request = entry.request
      numbered.push({
        seq: request.startSeq,
        turn: request.turn,
        step: 0,
        group: t('group.compaction', { seq: request.startSeq }),
        number: index + 1,
        purpose: 'compaction',
        status: request.status,
        startedAt: request.startedAt,
        completedAt: request.completedAt,
        ...(request.error === undefined ? {} : { error: request.error }),
        ...(request.errorCode === undefined ? {} : { errorCode: request.errorCode }),
        ...(request.status === 'running' ? {} : { resultSeq: request.startSeq }),
        ...(request.providerMetadata?.provider === undefined
          ? {}
          : { provider: request.providerMetadata.provider }),
        ...(request.providerMetadata?.model === undefined
          ? {}
          : { model: request.providerMetadata.model }),
        ...(request.requestConfig === undefined ? {} : { requestConfig: request.requestConfig }),
        ...(usage === undefined ? {} : { usage }),
        ...(cumulativeUsage === undefined ? {} : { cumulativeUsage }),
      })
    }

    return numbered
  }, [
    completeInspection.eventNodes, completeInspection.requests, t,
  ])
  const partialTurn = partial?.turn ?? null
  const partialStep = partial?.step ?? null
  const finalized = useMemo(() => {
    const turns = deriveTrajectoryLayout({
      nodes,
      eventLocations,
      partial: partialTurn === null || partialStep === null
        ? null
        : { turn: partialTurn, step: partialStep, blocks: [] },
      runningCalls,
      requests,
      systemPrompts: inspection.systemPrompts,
      callSchemas,
    }, t)
    return { turns, lastIndex: lastCellIndex(turns) }
  }, [
    nodes, eventLocations, partialTurn, partialStep,
    runningCalls, requests, inspection.systemPrompts, callSchemas, t,
  ])
  const timelinePartialSignature = partialStructureSignature(partial)
  const partialStartTime = partial?.timing?.stepStartTime
  const partialFirstTokenTime = partial?.timing?.firstTokenTime
  const timelinePartial = useMemo<TrajectorySnapshot['partial']>(() => partial === null
    ? null
    : {
      turn: partial.turn,
      step: partial.step,
      blocks: partial.blocks.map(block => timelineBlock(block)),
      ...(partial.timing === undefined ? {} : { timing: partial.timing }),
    },
  [partialStep, partialTurn, timelinePartialSignature, partialStartTime, partialFirstTokenTime])
  const timelineTurns = useMemo(
    () => appendTrajectoryPartialLayout(finalized.turns, timelinePartial, finalized.lastIndex, t),
    [finalized, timelinePartial, t],
  )
  const timelineMode: TrajectoryTimelineMode = actualDuration
    ? actualTime ? 'actual' : 'duration'
    : actualTime ? 'time' : 'sequence'
  const partialSearchTurns = useMemo(
    () => appendTrajectoryPartialLayout([], partial, finalized.lastIndex, t),
    [finalized.lastIndex, partial, t],
  )
  const streamingCells = useMemo(
    () => partialSearchTurns.flatMap(turn => turn.groups.flatMap(group => group.cells)),
    [partialSearchTurns],
  )
  const query = useMemo(() => parseQuery(queryText), [queryText])
  const toolIndex = useMemo(() => buildToolIndex(completeInspection), [completeInspection])
  const callMeta = useMemo(() => {
    const map = new Map<string, { durationMs?: number; time?: number }>()
    for (const record of toolIndex.records) {
      if (!record.callId) continue
      map.set(record.callId, {
        ...(typeof record.durationMs === 'number' ? { durationMs: record.durationMs } : {}),
        ...(typeof record.time === 'number' ? { time: record.time } : {}),
      })
    }
    return map
  }, [toolIndex])
  const toolCells = useMemo(() => timelineTurns.flatMap(turn => turn.groups.flatMap(group =>
    group.cells
      .filter(cell => cell.kind === 'tool' || cell.kind === 'subtool')
      .map(cell => ({ cell, turn: turn.turn })))), [timelineTurns])
  const matchedCells = useMemo(() => {
    const set = new Set<number>()
    for (const { cell, turn } of toolCells) {
      const meta = cell.callId === undefined ? undefined : callMeta.get(cell.callId)
      const status = cell.isError === true ? 'error' : 'ok'
      if (matchesQuery({
        name: cell.toolName ?? '',
        status,
        turn,
        durationMs: meta?.durationMs,
        args: cell.inputDetail ?? '',
        result: cell.outputDetail ?? '',
        errorText: '',
      }, query)) set.add(cell.index)
    }
    return set
  }, [toolCells, callMeta, query])
  const toolStats = useMemo(() => {
    let errors = 0
    let running = 0
    for (const { cell } of toolCells) {
      if (cell.isError === true) errors += 1
      else if (cell.timeSeconds === null && !cell.isError) running += 1
    }
    return { total: toolCells.length, errors, running }
  }, [toolCells])
  const queryTurns = useMemo(
    () => [...toolIndex.turns.entries()]
      .sort((left, right) => left[0] - right[0])
      .map(([turn, count]) => ({ turn, count })),
    [toolIndex],
  )
  const hiddenIndexes = useMemo(() => {
    if (!query.active) return null
    const hidden = new Set<number>()
    for (const { cell } of toolCells) {
      if (!matchedCells.has(cell.index)) hidden.add(cell.index)
    }
    return hidden
  }, [toolCells, matchedCells, query.active])
  const maxDurationMs = useMemo(() => {
    let max = 0
    for (const record of toolIndex.records) {
      if (typeof record.durationMs === 'number' && record.durationMs > max) max = record.durationMs
    }
    return max
  }, [toolIndex])
  const hiddenHints = useMemo(() => {
    if (hiddenIndexes === null) return null
    const map = new Map<string, number>()
    for (const turn of timelineTurns) {
      for (const group of turn.groups) {
        let count = 0
        for (const cell of group.cells) {
          if ((cell.kind === 'tool' || cell.kind === 'subtool') && hiddenIndexes.has(cell.index)) count += 1
        }
        if (count > 0) map.set(`${turn.turn}\u0000${group.title}`, count)
      }
    }
    return map
  }, [timelineTurns, hiddenIndexes])
  const visibleTurns = useMemo(() => {
    if (hiddenIndexes === null) return timelineTurns
    return timelineTurns.map(turn => ({
      ...turn,
      groups: turn.groups.map(group => ({
        ...group,
        cells: group.cells.filter(cell => !hiddenIndexes.has(cell.index)),
      })),
    }))
  }, [timelineTurns, hiddenIndexes])
  const timelineRange = timelineSelection
  const timelineFocusIndexes = useMemo(
    () => timelineRange === null
      ? null
      : trajectoryTimelineFocusIndexes(timelineTurns, timelineRange, timelineMode),
    [timelineMode, timelineRange, timelineTurns],
  )
  /* navigation history: records opened and timeline ranges committed. A drag on
     the timeline is one entry (committed once), not one per pointer move. */
  type NavEntry =
    | { kind: 'record'; index: number }
    | { kind: 'range'; range: TrajectoryTimeRange }
  const [nav, setNav] = useState<{ entries: NavEntry[]; index: number }>({ entries: [], index: -1 })
  const navSuppress = useRef(false)
  const pushNav = (entry: NavEntry) => {
    setNav((prev) => {
      const current = prev.entries[prev.index]
      if (
        current !== undefined
        && current.kind === entry.kind
        && (entry.kind === 'record'
          ? current.index === entry.index
          : current.range.start === entry.range.start && current.range.end === entry.range.end)
      ) return prev
      const kept = prev.entries.slice(0, prev.index + 1)
      kept.push(entry)
      const trimmed = kept.length > NAV_HISTORY_LIMIT ? kept.slice(kept.length - NAV_HISTORY_LIMIT) : kept
      return { entries: trimmed, index: trimmed.length - 1 }
    })
  }
  const handleRecordSelect = useCallback((index: number) => {
    if (
      timelineFocusIndexes !== null
      && !timelineFocusIndexes.has(index)
    ) {
      setTimelineSelection(null)
    }
    setSelectedTimelineIndex(index)
    if (navSuppress.current) {
      navSuppress.current = false
      return
    }
    pushNav({ kind: 'record', index })
  }, [timelineFocusIndexes])
  const navigateRecord = useCallback((delta: number) => {
    const next = nav.index + delta
    if (next < 0 || next >= nav.entries.length) return
    const entry = nav.entries[next]
    if (entry === undefined) return
    setNav({ entries: nav.entries, index: next })
    if (entry.kind === 'range') {
      setTimelineSelection(entry.range)
      return
    }
    navSuppress.current = true
    setTimelineSelection(null)
    setTimelineRecordSelection({ index: entry.index })
    setSelectedTimelineIndex(entry.index)
  }, [nav])
  const handleTimelineRangeChange = useCallback((range: TrajectoryTimeRange | null) => {
    setTimelineSelection(range)
    /* one committed range = one history step; a reset is not a step */
    if (range !== null) pushNav({ kind: 'range', range })
  }, [])
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.altKey || event.metaKey || event.ctrlKey) return
      const target = event.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable === true) return
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        navigateRecord(-1)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        navigateRecord(1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => { window.removeEventListener('keydown', onKeyDown) }
  }, [navigateRecord])
  const handleTimelineRecordSelect = useCallback((index: number) => {
    setTimelineSelection(null)
    setTimelineRecordSelection({ index })
    setSelectedTimelineIndex(index)
  }, [])
  const handleTimelineRecordFocus = useCallback((index: number) => {
    setTimelineRecordFocus({ index })
  }, [])
  const collapsibleTurnIds = useMemo(
    () => timelineTurns
      .filter(turn =>
        turn.turn !== null
        &&
        turn.groups.reduce(
          (count, group) =>
            count + group.cells.filter(cell =>
              cell.requestOnly !== true && cell.kind !== 'system').length,
          0,
        ) > 1)
      .flatMap(turn => turn.turn === null ? [] : [turn.turn]),
    [timelineTurns],
  )
  const allTurnsCollapsed = collapsibleTurnIds.length > 0
    && collapsibleTurnIds.every(turn => collapsedTurns.has(turn))
  const collapsibleAssistantIds = useMemo(() => {
    const ids: string[] = []
    for (const turn of timelineTurns) {
      const cells = turn.groups.flatMap(group => group.cells)
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        if (cell?.kind !== 'message') continue
        const next = cells[i + 1]
        if (next?.kind === 'tool' || next?.kind === 'subtool') {
          ids.push(trajectoryRecordId(cell))
        }
      }
    }
    return ids
  }, [timelineTurns])
  const allAssistantsCollapsed = collapsibleAssistantIds.length > 0
    && collapsibleAssistantIds.every(index => collapsedAssistants.has(index))
  const collapsibleToolIds = useMemo(() => timelineTurns.flatMap(turn =>
    turn.groups.flatMap(group => group.cells.flatMap((cell, index) =>
      cell.kind === 'tool' && group.cells[index + 1]?.kind === 'subtool'
        ? [trajectoryRecordId(cell)]
        : []))),
  [timelineTurns])
  const allSubCallsCollapsed = collapsibleToolIds.length > 0
    && collapsibleToolIds.every(id => collapsedTools.has(id))

  const toggleTurn = (turn: number) => {
    setCollapsedTurns((current) => {
      const collapsed = new Set(current)
      if (collapsed.has(turn)) collapsed.delete(turn)
      else collapsed.add(turn)
      return collapsed
    })
  }

  const toggleAllTurns = () => {
    setCollapsedTurns((current) => {
      const collapsed = new Set(current)
      if (allTurnsCollapsed) {
        for (const turn of collapsibleTurnIds) collapsed.delete(turn)
      } else {
        for (const turn of collapsibleTurnIds) collapsed.add(turn)
      }
      return collapsed
    })
  }

  const toggleAssistant = (id: string) => {
    setCollapsedAssistants((current) => {
      const collapsed = new Set(current)
      if (collapsed.has(id)) collapsed.delete(id)
      else collapsed.add(id)
      return collapsed
    })
  }

  const toggleAllAssistants = () => {
    setCollapsedAssistants((current) => {
      const collapsed = new Set(current)
      if (allAssistantsCollapsed) {
        for (const index of collapsibleAssistantIds) collapsed.delete(index)
      } else {
        for (const index of collapsibleAssistantIds) collapsed.add(index)
      }
      return collapsed
    })
  }

  const toggleTool = (id: string) => {
    setCollapsedTools((current) => {
      const collapsed = new Set(current)
      if (collapsed.has(id)) collapsed.delete(id)
      else collapsed.add(id)
      return collapsed
    })
  }

  const toggleAllSubCalls = () => {
    setCollapsedTools((current) => {
      const collapsed = new Set(current)
      if (allSubCallsCollapsed) {
        for (const id of collapsibleToolIds) collapsed.delete(id)
      } else {
        for (const id of collapsibleToolIds) collapsed.add(id)
      }
      return collapsed
    })
  }

  const dismissToast = useCallback(() => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current)
    toastTimer.current = null
    setToast(null)
  }, [])

  const pushToast = useCallback((text: string, undo?: () => void) => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current)
    const id = ++toastSeq.current
    setToast({ id, text, ...(undo === undefined ? {} : { undo }) })
    toastTimer.current = window.setTimeout(() => {
      setToast(current => current?.id === id ? null : current)
    }, 4000)
  }, [])

  const clearDescendantFolds = useCallback((turn: number | null, assistantId?: string) => {
    if (turn !== null) {
      setCollapsedAssistants(prev => {
        const next = new Set(prev)
        for (const t of timelineTurns) {
          if (t.turn !== turn) continue
          for (const g of t.groups) for (const c of g.cells) {
            if (c.kind === 'message') next.delete(trajectoryRecordId(c))
          }
        }
        return next
      })
      setCollapsedTools(prev => {
        const next = new Set(prev)
        for (const t of timelineTurns) {
          if (t.turn !== turn) continue
          for (const g of t.groups) for (const c of g.cells) {
            if (c.kind === 'tool' || c.kind === 'subtool') next.delete(trajectoryRecordId(c))
          }
        }
        return next
      })
      return
    }
    if (assistantId === undefined) return
    setCollapsedTools(prev => {
      const next = new Set(prev)
      for (const r of toolIndex.records) {
        if (r.callId) next.delete(`tool\u0000call\u0000${r.callId}`)
      }
      return next
    })
  }, [timelineTurns, toolIndex])

  const changeQuery = useCallback((next: string) => {
    const pane = document.querySelector('[data-trajectory-scroll]')
    if (pane instanceof HTMLElement) restoreScroll.current = pane.scrollTop
    if (next === '' && queryText.trim() !== '') {
      const previous = queryText
      pushToast(qt('toast.cleared'), () => setQueryText(previous))
    }
    setQueryText(next)
  }, [pushToast, qt, queryText])

  const toggleAllTurnsWithUndo = useCallback(() => {
    const previous = collapsedTurns
    const collapsed = !allTurnsCollapsed
    toggleAllTurns()
    pushToast(qt(collapsed ? 'toast.collapsedAll' : 'toast.expandedAll'), () => setCollapsedTurns(previous))
  }, [allTurnsCollapsed, collapsedTurns, pushToast, qt, toggleAllTurns])

  const loadEarlierHistory = useCallback(async () => {
    if (!hasResidentOlderHistory && !await loadOlder()) return false
    setHistoryNodeLimit(limit => limit + HISTORY_PAGE_NODES)
    return true
  }, [hasResidentOlderHistory, loadOlder])

  return (
    <div className={`${css.root} bt-trajectory-root`} data-conversation-composer-overlay="">
      <QueryBar
        query={queryText}
        onQuery={changeQuery}
        tokens={query.tokens}
        stats={{
          total: toolStats.total,
          matched: matchedCells.size,
          hidden: query.active ? toolStats.total - matchedCells.size : 0,
          errors: toolStats.errors,
          running: toolStats.running,
        }}
        tools={summarizeTools(toolIndex)}
        turns={queryTurns}
        canGoBack={nav.index > 0}
        canGoForward={nav.index < nav.entries.length - 1}
        onBack={() => { navigateRecord(-1) }}
        onForward={() => { navigateRecord(1) }}
        showTime={showTime}
        onToggleTime={() => setShowTime(value => !value)}
        actualDuration={actualDuration}
        onActualDurationChange={(nextActualDuration) => {
          setActualDuration(nextActualDuration)
          setTimelineSelection(null)
        }}
        actualTime={actualTime}
        onActualTimeChange={(nextActualTime) => {
          setActualTime(nextActualTime)
          setTimelineSelection(null)
        }}
        allTurnsCollapsed={allTurnsCollapsed}
        onToggleAllTurns={toggleAllTurnsWithUndo}
        allAssistantsCollapsed={allAssistantsCollapsed}
        onToggleAllAssistants={toggleAllAssistants}
        allSubCallsCollapsed={allSubCallsCollapsed}
        onToggleAllSubCalls={toggleAllSubCalls}
        t={t}
        qt={typeof qt === 'function' ? qt : (key: string) => key}
      />
      <TrajectoryTimeline
        t={t}
        turns={timelineTurns}
        mode={timelineMode}
        range={timelineRange}
        hasEarlierRecords={hasOlderHistory}
        onLoadEarlier={loadEarlierHistory}
        selectedIndex={selectedTimelineIndex}
        searchMatchIndexes={null}
        onRangeChange={handleTimelineRangeChange}
        onRecordSelect={handleTimelineRecordSelect}
        onRecordFocus={handleTimelineRecordFocus}
      />
      <div className={css.ledger}>
        <TrajectoryTable
          key={hiddenIndexes === null ? 'all' : `f${[...hiddenIndexes].join(',')}`}
          initialScrollTop={restoreScroll.current}
          showTime={showTime}
          onClearDescendantFolds={clearDescendantFolds}
          t={t}
          qt={typeof qt === 'function' ? qt : (key: string) => key}
          watchToolResult={watchToolResult}
          stringWrapping={jsonStringWrapping === undefined ? undefined : {
            ...jsonStringWrapping,
            label: t('record.wrapLines'),
          }}
          renderSlot={renderSlot}
          loadImage={loadImage}
          requestNumbers={requestNumbers}
          turns={visibleTurns}
          streamingCells={streamingCells}
          timelineFocusIndexes={timelineFocusIndexes}
          hiddenIndexes={hiddenIndexes}
          hiddenHints={hiddenHints}
          callMeta={callMeta}
          maxDurationMs={maxDurationMs}
          onShowAll={() => changeQuery('')}
          onSelectedIndexChange={setSelectedTimelineIndex}
          onRecordSelect={handleRecordSelect}
          recordSelection={timelineRecordSelection}
          recordFocus={timelineRecordFocus}
          historyLoading={historyLoading}
          olderHistoryLoading={olderHistoryLoading}
          historyStartSeq={historyBaseSeq}
          hasOlderRecords={hasOlderHistory}
          onLoadOlder={loadEarlierHistory}
          onClearSelection={() => { setTimelineSelection(null) }}
          collapsedTurns={collapsedTurns}
          onToggleTurn={toggleTurn}
          collapsedAssistants={collapsedAssistants}
          onToggleAssistant={toggleAssistant}
          collapsedTools={collapsedTools}
          onToggleTool={toggleTool}
          inspectCallId={inspectCallId}
          onInspectApplied={completeViewRequest}
        />
      </div>
      {toast !== null && (
        <div
          className={css.toast}
          role="status"
          onMouseEnter={() => {
            if (toastTimer.current !== null) window.clearTimeout(toastTimer.current)
            toastTimer.current = null
          }}
          onMouseLeave={() => {
            if (toastTimer.current !== null) window.clearTimeout(toastTimer.current)
            toastTimer.current = window.setTimeout(() => {
              setToast(current => current?.id === toast.id ? null : current)
            }, 2000)
          }}
        >
          <span>{toast.text}</span>
          {toast.undo !== undefined && (
            <button type="button" className={css.toastAction} onClick={() => { toast.undo?.(); dismissToast() }}>
              {qt('toast.undo')}
            </button>
          )}
          <button type="button" className={css.toastClose} aria-label={qt('toast.dismiss')} onClick={dismissToast}>×</button>
        </div>
      )}
    </div>
  )
}
