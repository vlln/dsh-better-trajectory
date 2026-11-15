# dsh-better-trajectory

> 可分发文件：构建、测试、兼容性契约。验证站与端口只在项目本机覆盖里，不写进本文件。

## 这是什么

纯客户端 bundle 插件：**接管**内置 `conversation.view` 里 `trajectory` 条目的组件，用本仓库
fork 的 `TrajectoryView` 渲染。只有一个「轨迹」页签，没有第二套 UI。

设计依据见 `docs/design-logfire.md`（Logfire live view 的对齐方案与验收标准）。

## 关键机制

### 接管原生页签

`apply` 里找到 `ctx.slots.entries('conversation.view')` 中 `options.id === 'trajectory'` 的条目，
把 `entry.component` 换成 `ForkView`（`src/client/fork-view.tsx`）。数据与注入不受影响：

- 槽位仍按原生条目的 `inject` face 传 `useSession` / `useTrajectory` / `useDuration` /
  `watchToolResult` / `loadOlder` / `loadImage` / `setActualDuration`；
- `t` 仍是 `trajectory` 命名空间的绑定；
- 图片子槽 `conversation.trajectory.images` 仍由原生条目声明，**本插件不声明任何 children**。

`entry.component` 是可变字段，不是公开 API。`ctx.effect` 的清理函数会还原原组件；
升级 dsh 时优先核查这里。原生条目晚于本插件注册时，`0/50/250/1000ms` 有兜底重试。

### fork 的轨迹源码

`src/vendor/trajectory/` = 内置包 `src/client/` 的拷贝（MIT，随包分发），文件头有 `// @ts-nocheck`。
改动集中在三处：

| 文件 | 改了什么 |
|---|---|
| `TrajectoryToolbar.tsx` → `QueryBar.tsx` | token 查询条、建议菜单、chip、Quick、平铺 |
| `TrajectoryTable.tsx` | 记录 chips、工具记录五 tab（异常 / 原始）、行内时间槽、隐藏提示行 |
| `TrajectoryView.tsx` | 查询解析、`visibleTurns` 过滤、`hiddenHints`、`callMeta`、Table 按隐藏集换 key |

`RawDataPanel.tsx` 是可搜索 JSON 树，只被「原始」tab 使用。

### 宿主导入的补齐

fork 里有三个宿主内部值导入，原生包会打包它们，这里用 `src/vendor/host/` 复刻：

- `dsh-util-values`：`assertNever`、`JsonValue`、`PartialArguments`（`partial-arguments.ts` 原样拷贝）；
- `dsh-llm/assistant-stream`：只移植 `assistantStreamFirstTokenTime` 及其两个小助手。

### 查询语法

`src/client/query.mjs`（纯函数，13 个单测）：`tool:` / `status:` / `turn:` / `turn:a-b` /
`ms:>/</a-b` / `code:`，`-` 前缀取反，其余词按自由文本 AND。未知字段回退为文本，
非法值保留 token 但不参与过滤。`src/client/filter.mjs` 提供工具索引与统计（13 个单测）。

过滤只裁**工具 cell**：`visibleTurns` 在进入 Table 前删掉未命中的 `kind === 'tool' | 'subtool'`，
回合、用户、助手、上下文保留。`hiddenHints` 按 `turn + group` 计数，Table 在组尾插入合成提示行。

### 构建

`scripts/build.mjs`：esbuild → CJS → `window.__ModuleLoader__.load` 包装。

- external 只有 `react`、`react/jsx-runtime`、`@deepseek-ai/dsh-client-store`、
  `@deepseek-ai/dsh-client-ui-primitives`、`@tanstack/react-virtual`（与原生 `lib/client.js`
  的 require 集合一致；其余包打进 bundle，否则 module table 里找不到）。
- `*.module.css` 由 postcss-modules 生成 `bt_` 前缀类名，运行时注入 `<style data-bt-css>`。
- 产物 `lib/client.js` 必须入库。

`npm run verify` = 单测 + `tsc --noEmit` + build + `node --check`。

## 已验证

- 宿主 **0.2.2-rc.2**（2026-11-14），隔离 web profile，端口 3197。
- 单页签接管：只剩「对话 / 轨迹」，旧的 `Trajectory+`、筛选栏、调试面板、JSON 浮层已删。
- 查询：`tool:bash` → 16/68；Quick `错误` → `status:error`；chip 删除、Esc 清空、平铺。
- 过滤后回合/助手上下文保留，组尾出现「本组 N 个调用被过滤 · 显示全部」。
- 右栏：chips、工具记录 `概述/参数/结果/异常/原始`，非错误记录无 `异常` tab；`原始` 搜索命中计数。
- 暗色（`prefers-color-scheme`）与 1200px 窄屏无横向滚动。
- 负控：错误筛选下不触发「加载更早」。

## 改动前先看

- 升级 dsh：覆盖 vendor 后重新贴三处改动；核对 `TrajectoryView` props 与 `entry.inject`。
- 不要声明 `conversation.trajectory.images`（会顶掉原生声明）。
- 查询语义改动先加 `tests/query.test.mjs` 用例，再改 `matchesQuery`。
- UI 只消费 `--dsw-alias-*` / `--dsw-specific-*`，不写死颜色。
- 过滤态下不要触发历史加载（会打乱窗口），`requestOlder` 已加守卫。