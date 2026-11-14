# dsh-better-trajectory

> 可分发文件：构建、测试、兼容性契约。验证站与端口只在项目本机覆盖里，不写进本文件。

## 这是什么

一个纯客户端 bundle 插件：注册 `conversation.view` 的 `better-trajectory` 页签，**直接渲染内置
`trajectory` 页签的 TrajectoryView 组件**，只在上方加一条工具筛选栏。宿主半边 `index.mjs` 是
空 `apply`（bundle 的 `insert` 行需要一个 Cordis 插件）。

## 关键机制

### 取原生组件

`ctx.slots.entries('conversation.view')` 里找 `options.id === 'trajectory'` 的条目：

- `entry.component` 就是 TrajectoryView；
- 调用 `entry.inject(sessionId)` 得到它的注入 face；
- 把 face 的 `hooks.duration` 映射成 `useDuration`（`mapInjected`，用 `useSyncExternalStore` 绑定
  `subscribe/getSnapshot`），其余 bare props 原样透传；
- 把 `t` 换成 `ctx.locale.bind('trajectory')` 的绑定；
- 把 `useTrajectory` 换成裁剪快照的 selector hook。

### 不要声明 `conversation.trajectory.images`

原生条目声明了该子槽；第二份声明会让原生插件在 boot 时失败
（`slot "conversation.trajectory.images" is already declared`）。本插件**不声明任何 children**。

图片通过 `ctx.slots.entries('conversation.trajectory.images')` 找到官方 `MessageImages` 条目，
再通过 `ctx.slots._core.factory('conversation.images.content')` 取 Factory 组件手动渲染；
取不到时退回本地缩略图。`_core.factory` 是运行时私有入口，升级 dsh 时优先核查这里。

### 筛选层

`src/client/filter.mjs`（纯 ESM，单测直接 import）：

- 工具索引按 `(turn, callId)` 去重：同一 callId 在多个回合复用时仍各自计数；
- 同时索引 `tool-result` 树、`runningCalls`、assistant 的 `tool-call` blocks、`partial`；
  窗口从中截断时，后两者仍让工具名/计数与屏幕上的原生行一致；
- 筛选**只裁剪工具调用**：assistant 的非 tool-call blocks、user/context、请求与回合头保留；
- 没有筛选时返回原快照（身份不变），原生行为零差异；
- 子调用跟随父调用；父容器命中或任一子调用命中时保留父节点；
- 回合筛选同时裁剪 `eventNodes`、`requests`、`partial`、`systemPrompts`；
- 耗时 / 错误码筛选与工具/状态/回合共用 `matchesRecord`；
- 调试面板的「错误 / 最慢」点击通过 `viewRequest`（`{view:'trajectory', focus:callId}`）
  让原生视图自己滚动并打开原生详情；不要另造详情面板。
- JSON 查看器是原生详情之外的补充：只在 `Trajectory+` 内覆盖式打开，数据来自
  `tool index record` + `snapshot.callSchemas`；不替换原生 Summary/Schema/Timing。
- 原生 `jsonStringWrapping` 被覆盖为默认开启（包装层传 prop），折叠摘要用作用域
  CSS 允许换行；类名选择器依赖 `aside[aria-label="Event details"]`，升级时核查。

## 构建

`scripts/build.mjs` 用 esbuild 输出 CJS，外层包 `window.__ModuleLoader__.load`：

- `react` / `react-dom` / `react/jsx-runtime` / `@deepseek-ai/*` 全部 external；
- `.css` 以 text 形式打进 bundle，`apply` 时注入 `<style>`；
- 产物 `lib/client.js` 必须入库。

`npm run verify` = 单测 + `tsc --noEmit` + build + `node --check`。

## 已验证

- 宿主 **0.2.2-rc.2**（2026-11-14），隔离 web profile。
- 原生 UI：时间轴、折叠、原生搜索、详情 Summary/Payload/Result/Schema/Timing、图片
  （官方 `MessageImages` + Factory）、错误筛选、工具筛选、回合筛选、耗时、错误码、清除筛选。
- 调试面板：错误 / 工具聚合 / 最慢三个视图；点错误或最慢行会跳回原生记录并打开原生详情；
  工具行切换筛选；筛选结果可复制 Markdown / JSON 或下载 JSON。
- 图标：Plugins 页实际加载 `data:image/svg+xml`，36×36，`complete + naturalWidth > 0`。
- 负控：给客户端条目加不存在的注入服务时，浏览器明确报 `1 entry did not activate` +
  `pending (waiting for service: ...)`，页签消失。
- 验证站操作记录在 `.work/dsh-better-trajectory/`（不随包分发）。

## 改动前先看

- 升级 dsh：核 `conversation.view` 槽、`TrajectoryView` 的 props、`entry.inject` face、
  `hooks.duration` 映射、`conversation.trajectory.images` 子槽与 Factory 入口。
- 不要为了图片自己声明 `conversation.trajectory.images`；会顶掉原生声明。
- 改筛选语义：先加 `tests/filter.test.mjs` 用例，再改 `filterSnapshot`。
- UI 只消费 `--dsw-alias-*` / `--dsw-specific-*`，不写死颜色。
