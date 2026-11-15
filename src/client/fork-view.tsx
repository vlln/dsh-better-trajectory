/**
 * 覆盖原生 `trajectory` 页签：直接用 fork 的 TrajectoryView 渲染，
 * 只在外面补一个本插件命名空间的翻译函数（新增的查询条 / 右栏文案）。
 *
 * 其余 props（sessionId、viewRequest、completeViewRequest、renderSlot、
 * t、useSession、useTrajectory、useDuration…）全部由槽位按原生条目的注入
 * face 原样传入，所以数据与交互语义不变。
 */
import { TrajectoryView } from '../vendor/trajectory/TrajectoryView.tsx'

export interface ForkViewProps {
  qt: (key: string, params?: Record<string, string | number>) => string
  [key: string]: unknown
}

export function ForkView({ qt, ...rest }: ForkViewProps) {
  return <TrajectoryView {...rest} qt={qt} />
}