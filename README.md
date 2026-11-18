<h1 align="center"><img src="icon.svg" width="34" height="34" valign="middle">&nbsp;Better Trajectory</h1>

[![npm](https://img.shields.io/npm/v/dsh-better-trajectory)](https://www.npmjs.com/package/dsh-better-trajectory)
[![dsh](https://img.shields.io/badge/dsh-0.2.2--rc.2-blue)](https://www.deepseek.com/harness/)

把内置的「轨迹」页签换成一个可查询的调试面：一条查询、一套统一详情、一个原始日志视图。

https://github.com/user-attachments/assets/b8e3c8b2-1110-4ce5-aff7-743a7fac769b

## 30 秒安装

**Plugins → 添加插件**，填 `dsh-better-trajectory`，刷新页面。

```sh
dsh plugin --profile web add dsh-better-trajectory        # web
dsh plugin --profile desktop add dsh-better-trajectory    # 官方 Desktop（先退出应用）
```

- 跟进 `main` 上还没发版的最新改动：`dsh plugin --profile web add github:vlln/dsh-better-trajectory`。
- 前置：dsh `0.2.2-rc.x`（实测 `0.2.2-rc.2`）。
- 升级：`dsh plugin --profile web update dsh-better-trajectory`。卸载：`remove dsh-better-trajectory`。
- 装好后打开「轨迹」，输入 `role:assistant` 回车：列表只剩助手行，右栏出现四个页签。

## 相比原生

| 方面 | 原生 | 这里 |
|---|---|---|
| 筛选 | 文本搜索 | 查询语法：`role:` / `kind:` / `model:` / `step:` / `ms:` …，可组合、可取反、可通配 |
| 定位 | 只标组和轮 | 每行标明第几轮第几步；筛选态用 `86轮` `177步` 两个定宽标签 |
| 层级 | 父级不在窗口里就断 | 按日志的 turn / step 边界算：轮开场 0、助手与其余消息 1、调用 2、子调用 3，窗口切在轮中间也成立 |
| 详情 | 按记录类型换页签 | 所有记录共用 `概述 / 预览 / 统计 / 原始` |
| 原始 | 投影后的字段 | 会话日志的原始事件，逐字显示 |
| 历史 | 手动取更早 | 滚到顶部自动继续取，筛选态同样 |

时间轴、折叠、图片、Schema 沿用原生行为。

## 功能

**台账** 轮开场的几行挂在同一根脊柱上；底纹按步号；行高 30px；「轮次 / 调用 / 子调用」折叠，折叠点只出现在折了确实会少东西的轮上。

**查询** token 回车变 chip，`×` 删除，`清除` 清空，`Esc` 收建议。右侧常驻 `命中 N · M 个被过滤`。筛选对所有行生效，筛选态不画连线，改成两个定宽位置标签。

**详情** 四个页签：概述（状态 · Token · 耗时 · 来源 · 层级 · 请求 · 调用 ID，可折叠 `参数` / `Schema` / `来源内容`）、预览（Markdown / 返回内容 / 提示词）、统计（首 token · 生成 · 吞吐 · 各类 token）、原始（日志事件）。

**原始** 读会话的原始事件窗口，逐字显示这一行对应的条目；调用按 `callId` 找它的 `tool/call` + `job/*` + `tool/result`，折叠行显示它吞掉的全部事件。

**时间轴** 两端 `‹` `›` 单击移 2/3 屏、按住连续；滚轮缩放、拖拽选区、悬停出光标卡片。

## 查询语法

空格分隔，多个条件叠加（AND）；`-` 取反，`|` 并列，`*` 通配，`"…"` 保留空格。

| 字段 | 取值 | 例子 |
|---|---|---|
| `role:` | `user` / `assistant` / `system` / `tool`（上下文注入在日志里就是 `user`） | `role:assistant` |
| `kind:` | `tool` / `subtool` / `message` / `user` / `context` / `system` / `compacted`（`type:` 是旧名） | `kind:context` |
| `model:` `provider:` | 该行所在步骤请求的模型 / 提供方 | `model:deepseek-flash` |
| `source:` `form:` | 上下文行的来源与形式（`tool-jobs`、`time-context`、`notice`、`snapshot`…） | `source:tool-jobs` |
| `step:` `turn:` | 步骤号 / 回合号，或区间（`step:` 每轮从 1 开始） | `step:170-180` |
| `tool:` | 工具名，只命中调用行 | `-tool:read` |
| `status:` | `ok` / `error` / `running` | `status:error\|running` |
| `ms:` | 耗时毫秒，支持 `>` `<` 与区间 | `ms:>1000` |
| `code:` | 错误码；`code:*` 表示「有错误码」 | `code:401` |
| `args:` `result:` `error:` `text:` | 只在输入侧 / 输出侧 / 错误文本 / 全字段里搜 | `args:AGENTS.md` |
| 裸词 | 全文（名称 / 参数 / 结果 / 正文） | `timeout` |

名字类字段（`model:` `provider:` `source:` `form:`）缺这个字段的行不算命中，`*` 也一样——`source:*` 是「有来源」，不是「所有行」。

输入时给建议：`role:` / `kind:` 两组字段，工具名带调用次数，状态、回合、慢查询。`Tab` 补全、`Enter` 提交。

## 安全与数据

- 纯前端：只读当前会话的快照与事件日志，在浏览器里渲染。
- 不发网络请求，不写文件，不执行日志里的命令或参数。
- 查询与折叠状态按会话存在 `sessionStorage`。

## 已知限制

- 只在已加载的窗口内查询；更早的历史滚到顶部继续取。
- `ms:` 依赖日志里的时间戳，没有耗时字段的记录不命中。
- 「原始」只覆盖已加载的事件窗口；折叠摘要行、尚未落盘的流式行显示一行说明。
- 文本匹配是子串、忽略大小写，不支持正则。
- 层级与位置标签来自日志的 `turn` / `step` 字段，缺这些字段的旧会话只有时间与内容。

## 插件管理

`dsh plugin --profile web add|remove <包>`；已装插件在侧边栏 **Plugins 页**查看与配置。web 与 Desktop 的 profile 互不相通，两个宿主各装一次。

## 兼容性

| 宿主 | 状态 |
|---|---|
| 官方 `dsh web`（`web` profile） | 已验证：dsh `0.2.2-rc.2`（2026-11-16） |
| 官方 Desktop（`desktop` profile） | 未验证 |
| 其它 profile / 第三方宿主 | 未验证 |

`engines` 声明 `dsh >=0.2.2-rc.1 <0.3.0-0`，只在 `0.2.2-rc.2` 上实测。插件接管内置 `trajectory` 条目的组件；宿主改条目 id 或组件 props 时，页签会退回原生的样子。

## 许可

MIT。`src/vendor/trajectory/` 是内置 `@deepseek-ai/dsh-client-ui-trajectory` 的 fork（MIT），版权声明见 `NOTICE`；设计记录在 `docs/design-language.md`、`docs/design-logfire.md`。
