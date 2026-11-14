/**
 * dsh-better-trajectory 浏览器半边。
 *
 * 只注册一个 `conversation.view` 页签（id `better-trajectory`，紧挨内置的
 * `trajectory`），视图的数据来自内置轨迹 target 的 `useTrajectory` hook。
 * 不声明宿主服务、路由或工具；Node half 是空 apply。
 */
import { en, NS, zh } from './locales'
import { BetterTrajectoryView } from './view'
import css from './styles.css'

/** 本插件用到的最小客户端上下文（避免依赖不随插件分发的官方类型包）。 */
interface ClientContext {
  effect(callback: () => (() => void) | void, label?: string): () => void
  slots: {
    inject(name: string, callback: () => () => void): void
    register(descriptor: Record<string, unknown>, component: unknown): () => void
  }
  locale: {
    register(namespace: string, dictionaries: { zh: unknown, en: unknown }): () => void
    bind(namespace: string): (key: string, params?: Record<string, string | number>) => string
  }
  get(name: string): any
}

/** 需要的客户端服务：槽位、文案；`sessions` / `uiConversation` 只用于「加载更早」。 */
export const inject = ['slots', 'locale', 'sessions', 'uiConversation']

/** Cordis 客户端插件名。 */
export const name = 'dsh-better-trajectory-client'

/** 视图 id。 */
const VIEW_ID = 'better-trajectory'

/**
 * 注入样式表。多个实例（理论上不会同时存在）各带一份，卸载时各自收回。
 * @returns 清理函数。
 */
function installStyles(): () => void {
  const element = document.createElement('style')
  element.dataset.betterTrajectory = ''
  element.textContent = css
  document.head.appendChild(element)
  return () => { element.remove() }
}

/**
 * 客户端插件入口。
 * @param ctx 客户端根上下文。
 */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'better-trajectory: dictionaries')
  ctx.effect(installStyles, 'better-trajectory: styles')

  const t = ctx.locale.bind(NS)

  ctx.slots.inject('conversation.view', () => ctx.slots.register({
    name: 'conversation.view',
    id: VIEW_ID,
    order: 11,
    locale: NS,
    label: () => t('view.label'),
    // 会话级 props：只补「加载更早」；`useTrajectory` 由内置轨迹插件的
    // uiSession.provide 提供，不需要在这里重复声明（重复会抛 duplicate hook）。
    inject: (sessionId: string) => ({
      loadOlder: async (): Promise<boolean> => {
        const sessions = ctx.get('sessions')
        const session = sessions?.binding(sessionId)?.session
        if (session === undefined || typeof session.loadOlder !== 'function') return false
        const conversation = ctx.get('uiConversation')
        const target = conversation?.binding(sessionId)?.target('trajectory')
        if (target === undefined) return false
        const before = target.getSnapshot()
        await session.loadOlder()
        return target.getSnapshot() !== before
      },
    }),
  }, BetterTrajectoryView))
}

export default { name, inject, apply }