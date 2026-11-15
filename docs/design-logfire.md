# 对齐 Logfire：方案、动作策略与验收标准

> 状态：草案（2026-11-14）。依据：Logfire live view 实机拆解（`.work/logfire-ref/NOTES.md`）+ 原生轨迹源码 fork。

## 1. 目标与非目标

**目标**：把「轨迹」页签做成 Logfire live view 那种调试面：顶部一条可组合的查询、左边一棵不塌的树、右边一个按记录类型分 tab 的详情。

**非目标**：不做 SQL 引擎、不做多服务/OTel 语义、不做分享链接与 dataset、不做 Playground。DSH 的数据单位是 turn / request / message / tool call，不是 span。

## 2. 借鉴清单（Logfire → DSH）

| Logfire | 本插件 v1 | 说明 |
|---|---|---|
| 顶部查询表达式 + chip | 查询条 + token + chip | `tool:` `status:` `turn:` `ms:` `code:`，AND 组合；自由文本仍走原生高亮 |
| Quick / Recent / Saved | Quick + Recent | 错误 / 运行中 / 慢；Recent 存 sessionStorage |
| Add filter 列选择器 | 建议菜单 | 输入时给候选（工具名带计数、状态、turn 号） |
| 被过滤子项 “2 of 3 spans · Load all” | “N 个调用被过滤 · 显示” | 保留 turn / 助手容器，不静默丢 |
| Flat view | Flat view | 平铺只显示命中项 |
| 属性 chips（span_name / level / …） | 记录 chips（工具 / 状态 / turn / 耗时 / 错误码） | 点击 chip 可筛选或复制 |
| Tabs：Model Run / Details / Metrics / Raw Data | 概览 / 参数 / 结果 / 异常 / 原始 | 按记录类型裁剪 |
| Exception Traceback 折叠帧 | 异常 tab：横幅 + 错误文本 + 可选栈 | DSH 工具错误多为字符串 |
| Raw Data + 搜索 | 原始 tab：可搜索 JSON 树 | 复用现有 json-viewer 的树，去掉浮层 |
| 行：时间 + 名称 + 徽章 + 耗时条 | 同构 | 保留原生时间轴条 |

明确不借鉴：SQL 编辑器、`level >= 17` 这类数值档位、token/成本列。

## 3. 线框

```
┌ 查询条 ─────────────────────────────────────────────────────────────┐
│ [🔍 tool:bash ×] [status:error ×]        错误 3 · 运行中 1 · 慢 2  │
│ 建议：bash(12)  read(8)  edit(3)   ↑↓ 选择 · Enter 确认             │
├ 时间轴（原生，保留）───────────────────────────────────────────────┤
├ 左：树 ──────────────────────────────┬ 右：详情 ────────────────────┤
│ 09:41 用户 …                          │ [工具 bash ⌄][状态 错误 ⌄]   │
│ 09:41 助手 …                          │ [turn 3 ⌄][412ms ⌄][401 ⌄]   │
│   ├ 工具 bash   412ms  ← 命中          │ 概览 参数 结果 异常 原始     │
│   ├ 工具 read   120ms                 │ ┌ 参数（JSON 树）──────────┐ │
│   └ 3 个调用被过滤 · 显示              │ │ ▾ command: "pnpm test"   │ │
│ 09:42 用户 …                          │ └──────────────────────────┘ │
└──────────────────────────────────────┴──────────────────────────────┘
```

## 4. 查询语法（v1 子集）

- `tool:<name>` 精确匹配；`tool:ba*` 前缀（可选，P1 不做）。
- `status:error|running|ok`。
- `turn:<n>` / `turn:<n>-<m>`。
- `ms:>1000` / `ms:<100`。
- `code:<http status>`。
- `-token` 取反（仅 tool/status）。
- 其余文本 = 原生全文高亮，不参与裁剪。
- 无 token 时行为与原生完全一致（返回原快照引用）。

错误输入不阻塞：未知 token 原样保留并在建议里标红，过滤时忽略并提示。

## 5. 动作策略（每阶段可独立验收）

| 阶段 | 改动 | 交付 |
|---|---|---|
| **P0 基座** ✅ | vendor 原生 33 文件 + CSS Modules + 宿主 shim（PartialArguments / 首 token 时间） | `轨迹+` 渲染 fork 版 `TrajectoryView`，与原生像素级一致 |
| **P1 查询条** ✅ | `QueryBar` 替换 toolbar；`matching` 只裁工具 cell，`visibleTurns` 在进入 Table 前过滤 | token/chip/建议/Quick/Flat view；全局「命中 N / M · K 个被过滤」；逐父级「N 个被过滤 · 显示」移到 P3 |
| **P2 右栏** ✅ | `TrajectoryTable` details 区：记录 chips、工具记录五 tab、`RawDataPanel` | 异常/原始 tab；原始支持搜索、展开全部、复制；面板默认 46%（clamp 360–560） |
| **P3 行** ✅ | 行内时间/耗时槽（数据缺失时回退到工具索引）、错误行左轨、逐组「N 个调用被过滤 · 显示全部」、列宽 150/118、暗色与 1200px | 时间槽、错误强调、隐藏提示；耗时依赖 footer 时间戳，mock 站数据缺 `callTime`，仅在真实会话显示 |
| **P4 收敛** | 用 `entry.component` 覆盖原生页签；删筛选栏 / 调试面板 / 旧 JSON 浮层 | 只留一个「轨迹」页签，旧 UI 全删，版本 0.2.0 |

节奏：每个阶段一次 commit + 一张站内截图；P1 起在 18-turn、长 JSON、图片、4 工具四条会话上回归。

## 6. 验收标准

**功能对等（P4 前必须全绿）**

- [ ] turn 折叠、助手折叠、子调用折叠、全部展开/收起
- [ ] 时间轴四种模式、区间选择、加载更早
- [ ] 图片槽（官方 MessageImages + 灯箱）
- [ ] Markdown / 代码块 / 复制
- [ ] 原生全文搜索的高亮仍可用
- [ ] 空会话、加载中、流式中、中断、压缩请求

**新能力**

- [ ] `tool:` / `status:` / `turn:` / `ms:` / `code:` 单独与组合生效，计数与实际行数一致
- [ ] chip 可删、Esc 清空、输入法下不误触
- [ ] 过滤后 turn/助手壳保留，隐藏数可展开
- [ ] Flat view 下只列命中项
- [ ] 右栏五 tab 随记录类型出现/隐藏；原始 tab 能搜到嵌套 key
- [ ] 复制 value / 子树；长字符串可换行；长数组分页
- [ ] 筛选状态按会话记住（刷新后仍在）

**工程**

- [ ] `npm run verify` 绿；tsc 不报错（vendor 文件 `@ts-nocheck` 单独标注）
- [ ] 站点安装 tarball 后可用；禁用插件后原生页签原样回来
- [ ] zh/en 键一一对应；文案不含内部术语
- [ ] 18-turn 会话：按键到画面 < 100ms；首屏 < 500ms
- [ ] 1200px 窄屏无横向滚动；暗色无硬编码颜色
- [ ] 不新增私有 API 依赖（`entry.component` 是唯一例外，且在 README 注明）

## 7. 风险与对策

| 风险 | 对策 |
|---|---|
| 上游轨迹升级导致 fork 漂移 | 记录上游版本；升级时只 diff 我们改过的 3 个文件（Toolbar / Table / Cell） |
| `entry.component` 可变属性不保证 | P4 前一直保留第二页签；失效则回退注册新 id |
| CSS Modules 类名与宿主冲突 | 构建期统一 `bt_` 前缀（已实现） |
| 大 session 每次按键全量过滤 | 预建索引 + `useMemo`，输入 120ms 防抖 |
| 过滤语义与原生搜索打架 | 有 token 才裁剪；纯文本永远只高亮 |

## 8. 待定

1. P1 是否要 `tool:` 前缀补全（打 `ba` 直接出 `bash`）？
2. 慢阈值默认 1s 还是按会话 p95 动态？
3. 右栏默认宽度：保持原生 38%（clamp 320–440）还是加宽到 46%？