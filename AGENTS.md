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
| `TrajectoryToolbar.tsx` → `QueryBar.tsx` | token 查询条、建议菜单、chip、常驻总统计、前进/后退 |
| `TrajectoryTimeline.tsx` | 两端对称的贴边动作、虚线光标 + 光标卡片、右端标记点 |
| `TrajectoryTable.tsx` | 四页签（概述/预览/统计/原始）、字段行（`Field`）、工具/消息共用的折叠块、行内 `→ Error`、右端定位 |
| `TrajectoryView.tsx` | 查询解析、`visibleTurns` 过滤（全类型）、`callMeta`、Table 按隐藏集换 key |

`RawDataPanel.tsx` 是可搜索 JSON 树，只被「原始」tab 使用。

### 宿主导入的补齐

fork 里有三个宿主内部值导入，原生包会打包它们，这里用 `src/vendor/host/` 复刻：

- `dsh-util-values`：`assertNever`、`JsonValue`、`PartialArguments`（`partial-arguments.ts` 原样拷贝）；
- `dsh-llm/assistant-stream`：只移植 `assistantStreamFirstTokenTime` 及其两个小助手。

### 查询语法

`src/client/query.mjs`（纯函数，21 个单测）：`tool:` / `status:` / `turn:` / `turn:a-b` /
`ms:>/</a-b` / `code:` / `type:`，`-` 前缀取反，其余词按自由文本 AND。未知字段回退为文本，
非法值保留 token 但不参与过滤。`src/client/filter.mjs` 提供工具索引与统计（13 个单测）。

判据只有一份（`matchesFilters`），`matchesQuery`（工具索引）与 `matchesCell`（树记录）都走它。

过滤作用于**所有记录类型**：`visibleTurns` 在进入 Table 前删掉未命中项，工具、子调用、
助手、用户、上下文、压缩点一视同仁。`tool:` 只可能命中调用，`status:`/`code:` 对消息无效。
被过滤总数只在 toolbar 的 chip 行说一次，不再插「本组 N 条被过滤」行（每个组都掉一条时它比内容还密）。

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
- 查询：`tool:bash` → 36/100（只有调用行，助手/用户/上下文同时隐藏）；`type:system` → 1/13；
  `type:` 建议菜单有「类型」组；chip 删除、Esc 清空。
- toolbar 右端常驻总统计：`13 条记录 · 5 次调用 · 3 个错误 · 6.3s`（窗口总时长超 24h 显示 `NdNNh`）。
- 右栏：所有记录都是 `概述/预览/统计/原始`，没有第二种对象（请求面板已删，请求信息进「用户/助手」
  的概述）；四页共用一个 `DetailSection` 折叠块与一套 `Field` 字段行；复制只有 `CopyButton` 一处
  实现（悬浮显形）。失败调用行内 `→ Error: …`，右栏红色 payload（原生处理，无自造横幅）。
- 轨迹条两端是箭头按钮（`‹` / `›`）：单击移 2/3 屏（左端无平移余量时取一页历史），按住连续；
  悬停边缘不再加载/改窗口，滚轮只缩放；悬停虚线光标 + 光标卡片。
- 连接线一份判据：层级按日志边界算（`levelOf`）——轮开场（系统 + 首条助手消息之前的全部输入）0、
  助手与其余消息 1、调用 2、子调用 3；窗口切在轮中间时开场不在窗口里，行就不会是 0。
  筛选态（`hiddenIndexes`）不画连线，每行标坐标 `86 · 177`（固定 52px 右对齐列）。
- 轮开场块（0 层）挂在同一根脊柱上：第一行把圆点的线垂下来，其余各行在 12px 处接着画，直到正文；
  竖线在「下一行还挂在这根轴上」时继续，换轮即收口。
- drop 线看「下一行比本行深」；底纹按步号（`step % 2`），只上给 1 层以上，轮开场是表头不上底。
- 行盒 = 行高 30px、`--bt-marker-y` 15px；任何改行盒高度的做法都会让竖线断开。
- 暗色（`prefers-color-scheme`）与 1200px 窄屏无横向滚动。
- 负控：只放宽节点上限的加载不会让 span 数增长 → 不会无限翻页。

## 改动前先看

- 升级 dsh：覆盖 vendor 后重新贴三处改动；核对 `TrajectoryView` props 与 `entry.inject`。
- 不要声明 `conversation.trajectory.images`（会顶掉原生声明）。
- 查询语义改动先加 `tests/query.test.mjs` 用例，再改 `matchesQuery`。
- UI 只消费 `--dsw-alias-*` / `--dsw-specific-*`，不写死颜色。
- 过滤态下贴边取历史是允许的：窗口变了计数也跟着变，不需要额外守卫。
- 行高恒定 30px（虚拟滚动按它估算），任何新行（含提示行）都必须落在 30px 网格上。