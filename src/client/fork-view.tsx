/**
 * 覆盖原生 `trajectory` 页签：直接用 fork 的 TrajectoryView 渲染，
 * 只在外面补一个本插件命名空间的翻译函数（新增的查询条 / 右栏文案）。
 *
 * 其余 props（sessionId、viewRequest、completeViewRequest、renderSlot、
 * t、useSession、useTrajectory、useDuration…）全部由槽位按原生条目的注入
 * face 原样传入，所以数据与交互语义不变。
 */
import { useSyncExternalStore } from 'react'
import { TrajectoryView } from '../vendor/trajectory/TrajectoryView.tsx'
import theme from '../vendor/trajectory/theme.css'

/** One projection key's observable face, as the session controller exposes it. */
export interface ProjectionFace {
  getSnapshot(): unknown
  subscribe(listener: () => void): () => void
}

/** Resolve a session's projection face by key; undefined when unavailable. */
export type ProjectionReader = (sessionId: string, key: string) => ProjectionFace | undefined

export interface ForkViewProps {
  qt: (key: string, params?: Record<string, string | number>) => string
  /** Session projection reader from this plugin's own context. */
  projectionFace?: ProjectionReader
  [key: string]: unknown
}

/**
 * Whole-log session statistics, read from the host's `sessionStats` projection.
 * Fields are narrowed defensively: a session written by an older host may not
 * carry the key at all, and the totals row then simply omits itself.
 */
export interface SessionStatsView {
  turns: number
  steps: number
  llmMs: number
  toolMs: number
}

const NO_SUBSCRIBE = (): (() => void) => () => {}
const NO_VALUE = (): unknown => undefined

function useProjection(
  sessionId: unknown,
  key: string,
  read: ProjectionReader | undefined,
): unknown {
  const face = typeof sessionId === 'string' && read !== undefined
    ? read(sessionId, key)
    : undefined
  return useSyncExternalStore(
    face?.subscribe ?? NO_SUBSCRIBE,
    face?.getSnapshot ?? NO_VALUE,
  )
}

function numberField(value: unknown, field: string): number {
  if (typeof value !== 'object' || value === null) return 0
  const raw = (value as Record<string, unknown>)[field]
  return typeof raw === 'number' && Number.isFinite(raw) ? raw : 0
}

/** Narrow the projection to the figures the totals row reads. */
function sessionStatsOf(value: unknown): SessionStatsView | undefined {
  if (typeof value !== 'object' || value === null) return undefined
  const stats: SessionStatsView = {
    turns: numberField(value, 'turns'),
    steps: numberField(value, 'steps'),
    llmMs: numberField(value, 'llmMs'),
    toolMs: numberField(value, 'toolMs'),
  }
  return stats.turns === 0 && stats.steps === 0 ? undefined : stats
}

let themeInstalled = false
function installTheme(): void {
  if (themeInstalled || typeof document === 'undefined') return
  themeInstalled = true
  const style = document.createElement('style')
  style.setAttribute('data-bt-theme', '')
  style.textContent = theme
  document.head.appendChild(style)
}

export function ForkView({ qt, projectionFace, ...rest }: ForkViewProps) {
  installTheme()
  const stats = sessionStatsOf(useProjection(rest.sessionId, 'sessionStats', projectionFace))
  return <TrajectoryView {...rest} qt={qt} sessionStats={stats} />
}