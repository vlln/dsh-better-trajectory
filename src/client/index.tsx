/**
 * dsh-better-trajectory 浏览器半边。
 *
 * 不新开页签：直接接管原生 `trajectory` 页签的组件，用 fork 的
 * TrajectoryView 渲染（查询条、右栏 chips/tab、行样式都是我们自己的实现）。
 * 数据、注入 face、子槽（图片）仍然走原生条目，所以语义不变。
 */
import { en, NS, zh } from './locales'
import { ForkView } from './fork-view'

interface ViewEntry {
  component: unknown
  options: { id?: string }
}

interface ClientContext {
  effect(callback: () => (() => void) | void, label?: string): () => void
  slots: {
    entries(name: string): readonly ViewEntry[]
  }
  locale: {
    register(namespace: string, dictionaries: { zh: unknown, en: unknown }): () => void
    bind(namespace: string): (key: string, params?: Record<string, unknown>) => string
  }
}

/** 只依赖槽位与文案；轨迹组件的 session / remote 注入仍由原生条目提供。 */
export const inject = ['slots', 'locale']

export const name = 'dsh-better-trajectory-client'

/** 原生视图 id；我们覆盖它而不是再加一个页签。 */
const NATIVE_VIEW_ID = 'trajectory'

/**
 * 客户端插件入口。
 * @param ctx 客户端根上下文。
 */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'better-trajectory: dictionaries')

  const t = ctx.locale.bind(NS)
  let replaced: ViewEntry | undefined
  let original: unknown

  const Wrapped = (props: Record<string, unknown>) => <ForkView {...props} qt={t} />

  const install = (): void => {
    const entry = ctx.slots.entries('conversation.view')
      .find(item => item.options.id === NATIVE_VIEW_ID)
    if (entry === undefined || entry.component === Wrapped) return
    replaced = entry
    original = entry.component
    entry.component = Wrapped
  }

  ctx.effect(() => {
    install()
    // 客户端模块按包序加载；原生条目通常已就位，这里兜底极少数晚注册的情况。
    const timers = [0, 50, 250, 1_000].map(delay => window.setTimeout(install, delay))
    return () => {
      for (const timer of timers) window.clearTimeout(timer)
      if (replaced !== undefined && replaced.component === Wrapped) replaced.component = original
    }
  }, 'better-trajectory: view override')
}