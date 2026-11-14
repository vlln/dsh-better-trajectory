# dsh-better-trajectory

> 可分发文件：构建、测试、兼容性契约。当前会话的验证站与端口只在项目本机覆盖里，不写进本文件。

## 这是什么

一个纯客户端 bundle 插件：注册 `conversation.view` 的 `better-trajectory` 页签，读内置
`trajectory` target 的快照，投影成可筛选 / 可搜索的调试记录。宿主半边 `index.mjs` 是
空 `apply`（bundle 的 `insert` 行需要一个 Cordis 插件）。

## 边界

- 不 import 内置轨迹的运行时代码，也不复制它的内部类型；只消费公开的 `useTrajectory`
  hook 与快照字段（`eventNodes` / `eventLocations` / `requests` / `runningCalls` / `partial`）。
- 不声明自己的 trajectory target，不写会话事件，不重新解析会话日志。
- 不依赖 `@deepseek-ai/dsh-client-ui-primitives`：官方 primitives 的类型包在某些安装里
  只存在于 profile 闭包，且导出名跨 rc 会变。UI 用语义 token + 自绘紧凑控件。
- 不把筛选状态写进 profile / 插件设置；只在浏览器 `sessionStorage` 里按会话记住。

## 构建

`scripts/build.mjs` 用 esbuild 输出 CJS，外层包 `window.__ModuleLoader__.load`：

- `react` / `react-dom` / `react/jsx-runtime` / `@deepseek-ai/*` 全部 external；
- `.css` 以 text 形式打进 bundle，`apply` 时注入 `<style>`；
- 产物 `lib/client.js` 必须入库（git 安装路径不要求用户构建）。

`npm run verify` = 单测 + `tsc --noEmit` + build + `node --check`。

## 数据层契约

`src/client/rows.mjs` 是纯 ESM，单测直接 import。要点：

- 工具结果递归展开 `subCalls`；`depth` 表示子调用层级。
- 内置快照不给工具贡献写 `eventLocations`，用最近一个有位置的记录兜底回合 / 步骤。
- 工具状态：`isError` → `error`（`code === 'interrupted'` 单独标 `interrupted`），
  `runningCalls` → `running`，其余 `ok`。
- 搜索文本按源对象缓存在 `WeakMap` 里；流式快照每帧重建时不重算未变节点。
- 分面计数忽略自身维度；工具名计数额外忽略状态，避免选中「错误」后工具从列表消失。

## 已验证

- 宿主 **0.2.2-rc.2**（2026-11-14），隔离 web profile。
- 真实会话里：页签出现、工具行 / 子调用 / 错误状态、工具筛选、错误筛选、查询、详情、
  复制 Markdown、筛选跨页签保留、原生「轨迹」不受影响、宽手柄隐藏。
- 图标：Plugins 页实际加载 `data:image/svg+xml`，36×36，`complete + naturalWidth > 0`。
- 负控与验证站操作记录在 `.work/dsh-better-trajectory/`（不随包分发）。

## 改动前先看

- 升级 dsh 基线：先核 `conversation.view` 槽、`uiSession.provide` 的 `trajectory` hook、
  `TrajectorySnapshot` 字段是否改名；旧名字通常静默失效。
- 改 UI：只消费 `--dsw-alias-*` / `--dsw-specific-*`，不要写死颜色；圆角用 `--dsw-radius-*`。
- 改查询语法：先加 `tests/rows.test.mjs` 用例，再改 `parseQuery` / `matchesQuery`。
