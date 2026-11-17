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
| `QueryBar.tsx`（新增；原 `TrajectoryToolbar.tsx` 已删） | token 查询条、建议菜单、chip、常驻总统计、前进/后退 |
| `TrajectoryTimeline.tsx` | 两端对称的贴边动作、虚线光标 + 光标卡片、右端标记点 |
| `TrajectoryTable.tsx` | 四页签（概述/预览/统计/原始）、字段行（`Field`）、工具/消息共用的折叠块、行内 `→ Error`、右端定位 |
| `TrajectoryView.tsx` | 查询解析、`visibleTurns` 过滤（全类型）、`callMeta`、Table 按隐藏集换 key |

`RawDataPanel.tsx` 是可搜索 JSON 树，只被「原始」tab 使用。

### 宿主导入的补齐

fork 里有三个宿主内部值导入，原生包会打包它们，这里用 `src/vendor/host/` 复刻：

- `dsh-util-values`：`assertNever`、`JsonValue`、`PartialArguments`（`partial-arguments.ts` 原样拷贝）；
- `dsh-llm/assistant-stream`：只移植 `assistantStreamFirstTokenTime` 及其两个小助手。

### 查询语法

`src/client/query.mjs`（纯函数，34 个单测）：`role:` / `kind:`（`type:` 是旧名）/ `model:` /
`provider:` / `source:` / `form:` / `step:` / `step:a-b` / `turn:` / `tool:` / `status:` /
`ms:>/</a-b` / `code:` / `args:` / `result:` / `error:` / `text:`，`-` 前缀取反，其余词按自由文本
AND。未知字段回退为文本，非法值保留 token 但不参与过滤。`src/client/filter.mjs` 只提供工具索引与统计（5 个单测）。

判据只有一份（`matchesFilters`），唯一入口是 `matchesCell`（树记录）；建议菜单的取值直接来自解析器的 `KINDS` / `ROLE_VALUES`，不另抄一份词表。

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
- 门禁：`npm run verify` 全绿，43 个单测（query 34 / filter 5 / locales 4）。
- 发布通道实测（2026-11-16）：`dsh plugin --profile web add github:vlln/dsh-better-trajectory`
  在干净 `DSH_HOME` 里装上（1m15s），启动后 `/plugins/??dsh-better-trajectory/client.js`
  返回 200、502 KB，`__ModuleLoader__.load` 的 id 正确；`npm pack` 的 tarball（17 个文件、
  925 KB）同样装上并起站验证过。
- 单页签接管：只剩「对话 / 轨迹」，旧的 `Trajectory+`、筛选栏、调试面板、JSON 浮层已删。
- 查询：`tool:bash` → 36/100（只有调用行，助手/用户/上下文同时隐藏）；大会话本窗口 50 条实测
  `role:assistant` 25 / `role:tool` 23 / `kind:context` 2 / `source:tool-jobs` 1 / `step:170-180` 10 /
  `model:deepseek-flash` 50 / `model:gpt*` 0；建议菜单有 `role:` / `kind:` 组；chip 删除、`清除` 清空、`Esc` 只收建议菜单。
- toolbar 右端常驻总统计：`13 条记录 · 5 次调用 · 3 个错误 · 6.3s`（窗口总时长超 24h 显示 `NdNNh`）。
- `原始` = 日志本身（`eventSource` 原始事件窗口，按行取 `callId`/`seq` 对应的事件，逐字显示）；投影字段
  （index/state/turn/step/时长/token）不进这里，见 `docs/design-language.md` §6.1。
- 右栏：所有记录都是 `概述/预览/统计/原始`，没有第二种对象（请求面板已删，请求信息进「用户/助手」
  的概述）；四页共用一个 `DetailSection` 折叠块与一套 `Field` 字段行；复制只有 `CopyButton` 一处
  实现（悬浮显形）。失败调用行内 `→ Error: …`，右栏红色 payload（原生处理，无自造横幅）。
- 轨迹条两端是箭头按钮（`‹` / `›`）：单击移 2/3 屏（左端无平移余量时取一页历史），按住连续；
  悬停边缘不再加载/改窗口，滚轮只缩放（缩到全量后继续向下滚才取一页历史）；悬停虚线光标 + 光标卡片。
  两个箭头都支持 Enter / Space 单步（指针手势不触发 click，键盘路径不会与按住重复）。
- 连接线一份判据：层级按日志边界算（`levelOf`）——轮开场（系统 + 首条助手消息之前的全部输入）0、
  助手与其余消息 1、调用 2、子调用 3；窗口切在轮中间时开场不在窗口里，行就不会是 0。
  筛选态（`hiddenIndexes`）不画连线、也没有折叠圆点，每行两个定宽标签 `86轮` / `177步`。
- 轮开场块（0 层）挂在同一根脊柱上：第一行把圆点的线垂下来，其余各行在 12px 处接着画，直到正文；
  竖线在「下一行还挂在这根轴上」时继续，换轮即收口。
- drop 线看「下一行比本行深」；底纹按步号（`step % 2`），只上给 1 层以上，轮开场是表头不上底。
- 行盒 = 行高 30px、`--bt-marker-y` 15px；任何改行盒高度的做法都会让竖线断开。
- 暗色（`prefers-color-scheme`）与 1200px 窄屏无横向滚动。
- 负控：只放宽节点上限的加载不会让 span 数增长 → 不会无限翻页。

## 分发

- 通道：git 源（`dsh plugin --profile web add github:vlln/dsh-better-trajectory`）。`lib/client.js`
  必须入库，装的时候不跑构建脚本。
- `NOTICE` 随包分发：`src/vendor/trajectory/` 是 DeepSeek 的 MIT 代码，原始版权声明不能丢；
  `files` 里包含 `NOTICE`，README 的「许可」节指向它。
- README 只写使用者内容（安装 / 用法 / 语法 / 限制 / 兼容性 / 插件管理），工程契约在本文件。

## 改动前先看

- 升级 dsh：覆盖 vendor 后重新贴三处改动；核对 `TrajectoryView` props 与 `entry.inject`。
- 不要声明 `conversation.trajectory.images`（会顶掉原生声明）。
- 查询语义改动先加 `tests/query.test.mjs` 用例，再改 `matchesCell`。
- UI 只消费 `--dsw-alias-*` / `--dsw-specific-*`，不写死颜色。
- 过滤态下贴边取历史是允许的：窗口变了计数也跟着变，不需要额外守卫。
- 行高恒定 30px（虚拟滚动按它估算），任何新行（含提示行）都必须落在 30px 网格上。