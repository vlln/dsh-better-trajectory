/**
 * dsh-better-trajectory 浏览器半边。
 *
 * 注册一个 `conversation.view` 页签，内部直接渲染内置 `trajectory` 页签的
 * TrajectoryView 组件，只在其上方加一条筛选栏。原生组件、原生子槽与原生
 * 交互都不复制；筛选通过裁剪后的 `useTrajectory` 快照传入。
 */
import { en, NS, zh } from './locales'
import { SupersetView, type NativeTrajectoryHandle } from './superset'
import css from './styles.css'

interface ClientContext {
  effect(callback: () => (() => void) | void, label?: string): () => void
  slots: {
    inject(name: string, callback: () => () => void): void
    register(descriptor: Record<string, unknown>, component: unknown): () => void
    entries(name: string): readonly {
      component: unknown
      options: { id?: string }
      inject?: (...args: any[]) => Record<string, unknown>
    }[]
  }
  locale: {
    register(namespace: string, dictionaries: { zh: unknown, en: unknown }): () => void
    bind(namespace: string): (key: string, params?: Record<string, unknown>) => string
  }
}

/** 只依赖槽位与文案；原生轨迹组件自带 session / remote 注入。 */
export const inject = ['slots', 'locale']

export const name = 'dsh-better-trajectory-client'

const VIEW_ID = 'better-trajectory'

/** 原生视图 id。 */
const NATIVE_VIEW_ID = 'trajectory'

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
  const nativeT = ctx.locale.bind('trajectory')
  const handles = new WeakMap<object, NativeTrajectoryHandle>()

  const getImages = (): {
    entry: unknown
    factory: unknown
    injected: Record<string, unknown>
    t: (key: string, params?: Record<string, unknown>) => string
  } | undefined => {
    const entry = ctx.slots.entries('conversation.trajectory.images')[0]
    const factory = (ctx.slots as any)._core?.factory?.('conversation.images.content')
    if (entry === undefined || factory === undefined) return undefined
    return {
      entry: entry.component,
      factory: factory.component,
      injected: typeof factory.inject === 'function' ? factory.inject() : {},
      t: ctx.locale.bind(factory.locale ?? 'conversation'),
    }
  }

  const getNative = (): NativeTrajectoryHandle | undefined => {
    const entry = ctx.slots.entries('conversation.view')
      .find(item => item.options.id === NATIVE_VIEW_ID)
    if (entry === undefined) return undefined
    let handle = handles.get(entry)
    if (handle === undefined) {
      handle = {
        component: entry.component as NativeTrajectoryHandle['component'],
        inject: (sessionId: string) => (typeof entry.inject === 'function' ? entry.inject(sessionId) : {}),
      }
      handles.set(entry, handle)
    }
    return handle
  }

  ctx.slots.inject('conversation.view', () => ctx.slots.register({
    name: 'conversation.view',
    id: VIEW_ID,
    order: 11,
    locale: NS,
    label: () => t('view.label'),
    inject: () => ({ getNative, nativeT, getImages }),
  }, SupersetView))
}
