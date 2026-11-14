/**
 * dsh-better-trajectory 宿主半边。
 *
 * 调试视图完全由 client half 从会话快照投影，不需要宿主服务、路由或工具；
 * 保留一个空 apply 是为了让 bundle 的 insert 行有可挂载的 Cordis 插件
 * （行为见 `lib/client.js`）。
 */
export function apply() {}
export default apply
