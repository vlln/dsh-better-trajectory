window.__ModuleLoader__.load({ id: "dsh-better-trajectory", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  default: () => index_default,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);

// src/client/locales.ts
var NS = "better-trajectory";
var zh = {
  "view.label": "\u8F68\u8FF9+",
  "toolbar.aria": "Better \u8F68\u8FF9\u5DE5\u5177\u680F",
  "toolbar.search": "\u641C\u7D22\u8F68\u8FF9\u8BB0\u5F55",
  "toolbar.searchPlaceholder": "\u641C\u7D22\u53C2\u6570\u3001\u7ED3\u679C\u3001\u9519\u8BEF\u2026\uFF08\u652F\u6301 tool:bash\u3001status:error\uFF09",
  "toolbar.searchHint": "\u6309 / \u805A\u7126",
  "toolbar.searchClear": "\u6E05\u9664\u641C\u7D22",
  "toolbar.status.aria": "\u72B6\u6001",
  "toolbar.status.all": "\u5168\u90E8",
  "toolbar.status.error": "\u9519\u8BEF",
  "toolbar.status.running": "\u8FD0\u884C\u4E2D",
  "toolbar.kind.all": "\u5168\u90E8",
  "toolbar.kind.tools": "\u5DE5\u5177",
  "toolbar.kind.messages": "\u6D88\u606F",
  "toolbar.kind.other": "\u5176\u4ED6",
  "toolbar.kind.aria": "\u8BB0\u5F55\u7C7B\u578B",
  "toolbar.tools": "\u5DE5\u5177",
  "toolbar.tools.selected": "\u5DE5\u5177 \xB7 {count}",
  "toolbar.tools.aria": "\u6309\u5DE5\u5177\u540D\u7B5B\u9009",
  "toolbar.tools.search": "\u7B5B\u9009\u5DE5\u5177\u540D\u2026",
  "toolbar.tools.empty": "\u6CA1\u6709\u5339\u914D\u7684\u5DE5\u5177\u540D",
  "toolbar.tools.clear": "\u6E05\u9664\u5DE5\u5177\u7B5B\u9009",
  "toolbar.turns": "\u56DE\u5408",
  "toolbar.turns.all": "\u5168\u90E8\u56DE\u5408",
  "toolbar.turns.aria": "\u6309\u56DE\u5408\u7B5B\u9009",
  "toolbar.reset": "\u91CD\u7F6E\u7B5B\u9009",
  "toolbar.copy": "\u590D\u5236",
  "toolbar.copy.aria": "\u590D\u5236\u6216\u4E0B\u8F7D\u7B5B\u9009\u7ED3\u679C",
  "toolbar.copy.markdown": "\u590D\u5236\u4E3A Markdown",
  "toolbar.copy.json": "\u590D\u5236\u4E3A JSON",
  "toolbar.copy.download": "\u4E0B\u8F7D JSON",
  "toolbar.copy.done": "\u5DF2\u590D\u5236",
  "toolbar.copy.failed": "\u590D\u5236\u5931\u8D25",
  "toolbar.latest": "\u6700\u65B0",
  "toolbar.latest.aria": "\u8DF3\u5230\u6700\u65B0\u4E00\u6761\u8BB0\u5F55",
  "summary.rows": "{shown} / {total} \u6761\u8BB0\u5F55",
  "summary.rows.one": "{shown} / {total} \u6761\u8BB0\u5F55",
  "summary.tools": "{count} \u4E2A\u5DE5\u5177\u8C03\u7528",
  "summary.tools.one": "{count} \u4E2A\u5DE5\u5177\u8C03\u7528",
  "summary.errors": "{count} \u4E2A\u9519\u8BEF",
  "summary.errors.one": "{count} \u4E2A\u9519\u8BEF",
  "summary.filtered": "\u5DF2\u7B5B\u9009",
  "summary.all": "\u5171 {total} \u6761",
  "filters.active": "\u5F53\u524D\u7B5B\u9009",
  "filters.tool": "\u5DE5\u5177\uFF1A{name}",
  "filters.status": "\u72B6\u6001\uFF1A{status}",
  "filters.kind": "\u7C7B\u578B\uFF1A{kind}",
  "filters.turn": "\u56DE\u5408 {turn}",
  "filters.query": "\u641C\u7D22\uFF1A{query}",
  "filters.remove": "\u79FB\u9664\u7B5B\u9009\uFF1A{label}",
  "empty.noHook.title": "\u8BFB\u4E0D\u5230\u8F68\u8FF9\u6570\u636E",
  "empty.noHook.body": "Better Trajectory \u590D\u7528\u5185\u7F6E\u300C\u8F68\u8FF9\u300D\u7684\u6570\u636E\u3002\u5F53\u524D profile \u6CA1\u6709\u52A0\u8F7D\u5185\u7F6E\u8F68\u8FF9\u63D2\u4EF6\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6CA1\u6709\u53EF\u7B5B\u9009\u7684\u8BB0\u5F55\u3002",
  "empty.noData.title": "\u7B49\u5F85\u8F68\u8FF9\u6570\u636E",
  "empty.noData.body": "\u8FD9\u4E2A\u4F1A\u8BDD\u8FD8\u6CA1\u6709\u4EA7\u751F\u8F68\u8FF9\u8BB0\u5F55\uFF1B\u5F00\u59CB\u4E00\u8F6E\u5BF9\u8BDD\u540E\u8FD9\u91CC\u4F1A\u81EA\u52A8\u51FA\u73B0\u3002",
  "empty.noRows.title": "\u8FD8\u6CA1\u6709\u8BB0\u5F55",
  "empty.noRows.body": "\u8FD9\u4E2A\u4F1A\u8BDD\u7684\u5DF2\u52A0\u8F7D\u7A97\u53E3\u91CC\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BB0\u5F55\u3002",
  "empty.noMatch.title": "\u6CA1\u6709\u5339\u914D\u7684\u8BB0\u5F55",
  "empty.noMatch.body": "\u6362\u4E00\u4E2A\u641C\u7D22\u8BCD\uFF0C\u6216\u6E05\u9664\u7B5B\u9009\u6761\u4EF6\u3002",
  "empty.clear": "\u6E05\u9664\u7B5B\u9009",
  "list.header.time": "\u65F6\u95F4",
  "list.header.turn": "\u56DE\u5408",
  "list.header.record": "\u8BB0\u5F55",
  "list.header.preview": "\u8BE6\u60C5",
  "list.header.duration": "\u8017\u65F6",
  "list.loadMore": "\u663E\u793A\u66F4\u591A\uFF08\u5269\u4F59 {count} \u6761\uFF09",
  "list.loadOlder": "\u52A0\u8F7D\u66F4\u65E9\u7684\u8BB0\u5F55",
  "list.loadingOlder": "\u6B63\u5728\u52A0\u8F7D\u2026",
  "list.oldest": "\u5DF2\u5230\u6700\u65E9",
  "list.scrollHint": "\u70B9\u51FB\u4E00\u884C\u67E5\u770B\u5B8C\u6574\u53C2\u6570\u4E0E\u7ED3\u679C",
  "status.ok": "\u6210\u529F",
  "status.error": "\u9519\u8BEF",
  "status.running": "\u8FD0\u884C\u4E2D",
  "status.interrupted": "\u5DF2\u4E2D\u65AD",
  "status.neutral": "\u8BB0\u5F55",
  "kind.tool": "\u5DE5\u5177",
  "kind.assistant": "\u52A9\u624B",
  "kind.user": "\u7528\u6237",
  "kind.steering": "\u63D2\u8BDD",
  "kind.context": "\u4E0A\u4E0B\u6587",
  "kind.error": "\u9519\u8BEF",
  "kind.command": "\u547D\u4EE4",
  "kind.compaction": "\u538B\u7F29",
  "kind.retry": "\u91CD\u8BD5",
  "kind.unknown": "\u5176\u4ED6",
  "kind.maxTokens": "\u8FBE\u5230\u8F93\u51FA\u4E0A\u9650",
  "inspector.aria": "\u8BB0\u5F55\u8BE6\u60C5",
  "inspector.close": "\u5173\u95ED\u8BE6\u60C5",
  "inspector.meta.time": "\u65F6\u95F4",
  "inspector.meta.turn": "\u56DE\u5408 / \u6B65\u9AA4",
  "inspector.meta.duration": "\u8017\u65F6",
  "inspector.meta.callId": "\u8C03\u7528 ID",
  "inspector.meta.parent": "\u7236\u8C03\u7528",
  "inspector.meta.request": "\u8BF7\u6C42\u72B6\u6001",
  "inspector.meta.usage": "Token",
  "inspector.meta.usageValue": "\u8F93\u5165 {input} \xB7 \u8F93\u51FA {output}",
  "inspector.meta.usageCache": "\u7F13\u5B58\u8BFB {cacheRead} \xB7 \u7F13\u5B58\u5199 {cacheWrite}",
  "inspector.meta.usageReasoning": "\u63A8\u7406 {reasoning}",
  "inspector.section.args": "\u53C2\u6570",
  "inspector.section.result": "\u7ED3\u679C",
  "inspector.section.content": "\u5185\u5BB9",
  "inspector.section.error": "\u9519\u8BEF",
  "inspector.section.meta": "\u5143\u6570\u636E",
  "inspector.copy": "\u590D\u5236",
  "inspector.copySection": "\u590D\u5236{section}",
  "inspector.copyRecord": "\u590D\u5236\u6574\u884C",
  "inspector.emptyArgs": "\u6CA1\u6709\u8BB0\u5F55\u53C2\u6570\u3002",
  "inspector.emptyResult": "\u6CA1\u6709\u8BB0\u5F55\u7ED3\u679C\u3002",
  "inspector.runningResult": "\u7B49\u5F85\u5DE5\u5177\u8FD4\u56DE\u2026",
  "inspector.onlyTool": "\u53EA\u770B\u6B64\u5DE5\u5177",
  "inspector.onlyStatus": "\u53EA\u770B\u6B64\u72B6\u6001",
  "inspector.onlyTurn": "\u53EA\u770B\u672C\u56DE\u5408",
  "inspector.raw": "\u539F\u59CB\u6587\u672C",
  "inspector.formatted": "\u683C\u5F0F\u5316",
  "inspector.wrap": "\u81EA\u52A8\u6362\u884C",
  "inspector.truncated": "\u5185\u5BB9\u8FC7\u957F\uFF0C\u5DF2\u622A\u65AD\u663E\u793A\uFF1B\u590D\u5236\u4ECD\u662F\u5B8C\u6574\u5185\u5BB9\u3002",
  "inspector.subcall": "\u5B50\u8C03\u7528",
  "aria.row": "{kind} {name}\uFF0C{status}\uFF0C{time}",
  "aria.selected": "\u5DF2\u9009\u4E2D"
};
var en = {
  "view.label": "Trajectory+",
  "toolbar.aria": "Better Trajectory toolbar",
  "toolbar.search": "Search trajectory records",
  "toolbar.searchPlaceholder": "Search args, results, errors\u2026 (try tool:bash or status:error)",
  "toolbar.searchHint": "Press / to focus",
  "toolbar.searchClear": "Clear search",
  "toolbar.status.aria": "Status",
  "toolbar.status.all": "All",
  "toolbar.status.error": "Errors",
  "toolbar.status.running": "Running",
  "toolbar.kind.all": "All",
  "toolbar.kind.tools": "Tools",
  "toolbar.kind.messages": "Messages",
  "toolbar.kind.other": "Other",
  "toolbar.kind.aria": "Record type",
  "toolbar.tools": "Tools",
  "toolbar.tools.selected": "Tools \xB7 {count}",
  "toolbar.tools.aria": "Filter by tool name",
  "toolbar.tools.search": "Filter tool names\u2026",
  "toolbar.tools.empty": "No matching tool name",
  "toolbar.tools.clear": "Clear tool filter",
  "toolbar.turns": "Turn",
  "toolbar.turns.all": "All turns",
  "toolbar.turns.aria": "Filter by turn",
  "toolbar.reset": "Reset filters",
  "toolbar.copy": "Copy",
  "toolbar.copy.aria": "Copy or download the filtered records",
  "toolbar.copy.markdown": "Copy as Markdown",
  "toolbar.copy.json": "Copy as JSON",
  "toolbar.copy.download": "Download JSON",
  "toolbar.copy.done": "Copied",
  "toolbar.copy.failed": "Copy failed",
  "toolbar.latest": "Latest",
  "toolbar.latest.aria": "Jump to the newest record",
  "summary.rows": "{shown} / {total} records",
  "summary.rows.one": "{shown} / {total} record",
  "summary.tools": "{count} tool calls",
  "summary.tools.one": "{count} tool call",
  "summary.errors": "{count} errors",
  "summary.errors.one": "{count} error",
  "summary.filtered": "Filtered",
  "summary.all": "{total} records",
  "filters.active": "Active filters",
  "filters.tool": "Tool: {name}",
  "filters.status": "Status: {status}",
  "filters.kind": "Kind: {kind}",
  "filters.turn": "Turn {turn}",
  "filters.query": "Search: {query}",
  "filters.remove": "Remove filter: {label}",
  "empty.noHook.title": "Trajectory data is unavailable",
  "empty.noHook.body": "Better Trajectory reuses the built-in Trajectory data. The built-in trajectory plugin is not loaded in this profile, so there is nothing to filter here.",
  "empty.noData.title": "Waiting for trajectory data",
  "empty.noData.body": "This session has not recorded any trajectory yet. Records appear here as soon as a turn starts.",
  "empty.noRows.title": "No records yet",
  "empty.noRows.body": "The loaded window of this session has no displayable records.",
  "empty.noMatch.title": "No matching records",
  "empty.noMatch.body": "Try another search term or clear the filters.",
  "empty.clear": "Clear filters",
  "list.header.time": "Time",
  "list.header.turn": "Turn",
  "list.header.record": "Record",
  "list.header.preview": "Details",
  "list.header.duration": "Took",
  "list.loadMore": "Show more ({count} remaining)",
  "list.loadOlder": "Load older records",
  "list.loadingOlder": "Loading\u2026",
  "list.oldest": "Start of history",
  "list.scrollHint": "Select a row to see its full arguments and result",
  "status.ok": "OK",
  "status.error": "Error",
  "status.running": "Running",
  "status.interrupted": "Interrupted",
  "status.neutral": "Record",
  "kind.tool": "Tool",
  "kind.assistant": "Assistant",
  "kind.user": "User",
  "kind.steering": "Steering",
  "kind.context": "Context",
  "kind.error": "Error",
  "kind.command": "Command",
  "kind.compaction": "Compaction",
  "kind.retry": "Retry",
  "kind.unknown": "Other",
  "kind.maxTokens": "Output limit",
  "inspector.aria": "Record details",
  "inspector.close": "Close details",
  "inspector.meta.time": "Time",
  "inspector.meta.turn": "Turn / step",
  "inspector.meta.duration": "Duration",
  "inspector.meta.callId": "Call ID",
  "inspector.meta.parent": "Parent call",
  "inspector.meta.request": "Request",
  "inspector.meta.usage": "Tokens",
  "inspector.meta.usageValue": "input {input} \xB7 output {output}",
  "inspector.meta.usageCache": "cache read {cacheRead} \xB7 cache write {cacheWrite}",
  "inspector.meta.usageReasoning": "reasoning {reasoning}",
  "inspector.section.args": "Arguments",
  "inspector.section.result": "Result",
  "inspector.section.content": "Content",
  "inspector.section.error": "Error",
  "inspector.section.meta": "Metadata",
  "inspector.copy": "Copy",
  "inspector.copySection": "Copy {section}",
  "inspector.copyRecord": "Copy record",
  "inspector.emptyArgs": "No recorded arguments.",
  "inspector.emptyResult": "No recorded result.",
  "inspector.runningResult": "Waiting for the tool result\u2026",
  "inspector.onlyTool": "Only this tool",
  "inspector.onlyStatus": "Only this status",
  "inspector.onlyTurn": "Only this turn",
  "inspector.raw": "Raw text",
  "inspector.formatted": "Formatted",
  "inspector.wrap": "Wrap lines",
  "inspector.truncated": "Content is long and truncated here; Copy still returns the full text.",
  "inspector.subcall": "Subcall",
  "aria.row": "{kind} {name}, {status}, {time}",
  "aria.selected": "selected"
};

// src/client/view.tsx
var import_react = require("react");

// src/client/rows.mjs
var MAX_INDEX_CHARS = 48e3;
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function asString(value) {
  return typeof value === "string" ? value : "";
}
function oneLine(value, max = 220) {
  const text = asString(value).replace(/\s+/g, " ").trim();
  return text.length > max ? `${text.slice(0, max)}\u2026` : text;
}
function durationOf(start, end) {
  if (typeof start !== "number" || typeof end !== "number") return void 0;
  return Math.max(0, end - start);
}
function formatDuration(ms) {
  if (typeof ms !== "number" || !Number.isFinite(ms)) return "";
  if (ms < 1e3) return `${Math.round(ms)}ms`;
  if (ms < 6e4) return `${(ms / 1e3).toFixed(ms < 1e4 ? 1 : 0)}s`;
  const minutes = Math.floor(ms / 6e4);
  const seconds = Math.round(ms % 6e4 / 1e3);
  return `${minutes}m${seconds.toString().padStart(2, "0")}s`;
}
function formatClock(time) {
  if (typeof time !== "number" || !Number.isFinite(time)) return "";
  const date = new Date(time);
  const pad = (value, width = 2) => String(value).padStart(width, "0");
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad(date.getMilliseconds(), 3)}`;
}
function formatDateTime(time) {
  if (typeof time !== "number" || !Number.isFinite(time)) return "";
  return new Date(time).toLocaleString(void 0, { hour12: false });
}
function prettyJson(text) {
  const raw = asString(text);
  if (raw.trim() === "") return "";
  try {
    return JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    return raw;
  }
}
function contentText(content) {
  if (!Array.isArray(content)) return "";
  const parts = [];
  for (const block of content) {
    if (!isObject(block)) continue;
    if (typeof block.text === "string") {
      parts.push(block.text);
      continue;
    }
    if (block.type === "image") {
      const attachment = block.attachment;
      parts.push(`[image${isObject(attachment) && asString(attachment.name) ? ` ${attachment.name}` : ""}]`);
      continue;
    }
    if (block.type === "file") {
      const attachment = block.attachment;
      parts.push(`[file${isObject(attachment) && asString(attachment.name) ? ` ${attachment.name}` : ""}]`);
      continue;
    }
    if (block.type === "tool-call") {
      parts.push(`[tool-call ${asString(block.name)}]`);
      continue;
    }
    parts.push(`[${asString(block.type) || "block"}]`);
  }
  return parts.join("\n");
}
function locationOf(location) {
  if (!isObject(location)) return {};
  const turnValue = isObject(location.turn) ? location.turn.turn : location.turn;
  const stepValue = isObject(location.step) ? location.step.step : location.step;
  return {
    ...typeof turnValue === "number" ? { turn: turnValue } : {},
    ...typeof stepValue === "number" ? { step: stepValue } : {}
  };
}
function usageOf(usage) {
  if (!isObject(usage)) return void 0;
  const keys = [
    "inputTokens",
    "cacheReadTokens",
    "cacheWriteTokens",
    "outputTokens",
    "reasoningTokens"
  ];
  const picked = {};
  for (const key of keys) {
    if (typeof usage[key] === "number") picked[key] = usage[key];
  }
  return Object.keys(picked).length > 0 ? picked : void 0;
}
function indexText(parts) {
  let text = "";
  for (const part of parts) {
    const value = asString(part);
    if (value === "") continue;
    text += `${value}
`;
    if (text.length >= MAX_INDEX_CHARS) return text.slice(0, MAX_INDEX_CHARS);
  }
  return text;
}
var textCache = /* @__PURE__ */ new WeakMap();
function makeRow(fields, source) {
  const cacheKey = `${fields.error ?? ""}\0${fields.preview ?? ""}`;
  const cached = isObject(source) ? textCache.get(source) : void 0;
  let text = cached?.key === cacheKey ? cached.text : void 0;
  if (text === void 0) {
    text = indexText([
      fields.name,
      fields.title,
      fields.preview,
      fields.args,
      fields.result,
      fields.error,
      fields.errorName,
      fields.errorCode,
      fields.callId,
      fields.parentCallId,
      fields.meta
    ]);
    if (isObject(source)) textCache.set(source, { key: cacheKey, text });
  }
  return { depth: 0, ...fields, text };
}
function isToolResult(block) {
  return isObject(block) && block.kind === "tool-result";
}
function flattenTool(block, state) {
  if (!isObject(block)) return;
  const callId = asString(block.callId);
  if (callId !== "" && state.seen.has(callId)) return;
  if (callId !== "") state.seen.add(callId);
  const completed = isToolResult(block);
  const children = Array.isArray(block.subCalls) ? block.subCalls : [];
  const name2 = asString(block.name) || asString(block.call?.name) || "";
  const argsRaw = completed ? asString(block.call?.argsRaw) : asString(block.argsRaw);
  const args = prettyJson(argsRaw);
  const result = completed ? contentText(block.content) : "";
  const errorObject = isObject(block.error) ? block.error : void 0;
  const interrupted = errorObject?.code === "interrupted";
  const status = !completed ? "running" : block.isError === true ? interrupted ? "interrupted" : "error" : "ok";
  const start = completed ? typeof block.callTime === "number" ? block.callTime : block.time : block.time;
  const durationMs = completed ? durationOf(block.callTime, block.time) : void 0;
  const errorText2 = errorObject === void 0 ? "" : [asString(errorObject.name), asString(errorObject.code), asString(errorObject.reason)].filter((value) => value !== "").join(" \xB7 ");
  const previewSource = status === "error" || status === "interrupted" ? result || errorText2 || (name2 === "" ? callId : "") : argsRaw || (status === "running" ? "\u2026" : "");
  const turn = typeof block.turn === "number" ? block.turn : state.location?.turn;
  const step = typeof block.step === "number" ? block.step : state.location?.step;
  state.rows.push(makeRow({
    id: `tool:${callId || `${start}:${name2}`}`,
    kind: "tool",
    status,
    seq: typeof block.seq === "number" ? block.seq : start,
    time: start,
    ...turn === void 0 ? {} : { turn },
    ...step === void 0 ? {} : { step },
    ...name2 === "" ? {} : { name: name2 },
    title: name2 || callId,
    preview: oneLine(previewSource || (completed ? "(\u65E0\u8F93\u51FA)" : "\u7B49\u5F85\u8FD4\u56DE\u2026")),
    callId,
    ...state.parentCallId === void 0 ? {} : { parentCallId: state.parentCallId },
    depth: state.depth,
    ...durationMs === void 0 ? {} : { durationMs },
    ...args === "" ? {} : { args },
    ...argsRaw === "" ? {} : { argsRaw },
    ...result === "" ? {} : { result },
    ...errorText2 === "" ? {} : { error: errorText2 },
    ...errorObject === void 0 ? {} : {
      errorName: asString(errorObject.name),
      errorCode: asString(errorObject.code)
    },
    ...block.meta === void 0 ? {} : { meta: safeJson(block.meta) }
  }, block));
  for (const child of children) {
    flattenTool(child, {
      ...state,
      depth: state.depth + 1,
      parentCallId: callId || state.parentCallId
    });
  }
}
function safeJson(value) {
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}
function assistantText(blocks) {
  if (!Array.isArray(blocks)) return "";
  const parts = [];
  for (const block of blocks) {
    if (!isObject(block)) continue;
    if (block.kind === "text" && typeof block.text === "string") parts.push(block.text);
    else if (block.kind === "reasoning" && typeof block.text === "string") parts.push(block.text);
    else if (block.kind === "image") parts.push("[image]");
    else if (block.kind === "other") parts.push("[other]");
  }
  return parts.join("\n");
}
function requestFor(node, requests) {
  if (!Array.isArray(requests) || typeof node.turn !== "number") return void 0;
  let found;
  for (const request of requests) {
    if (!isObject(request) || request.purpose !== "assistant") continue;
    if (request.turn !== node.turn || request.step !== node.step) continue;
    if (typeof request.startSeq === "number" && request.startSeq > node.seq) continue;
    found = request;
  }
  return found;
}
function buildRows(snapshot) {
  if (!isObject(snapshot)) return [];
  const rows = [];
  const seen = /* @__PURE__ */ new Set();
  const locations = snapshot.eventLocations instanceof Map ? snapshot.eventLocations : /* @__PURE__ */ new Map();
  const requests = Array.isArray(snapshot.requests) ? snapshot.requests : [];
  const nodes = Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : [];
  let latestLocation = {};
  for (const node of nodes) {
    if (!isObject(node)) continue;
    const location = locationOf(locations.get(node.seq));
    if (location.turn !== void 0) latestLocation = location;
    const effectiveLocation = { ...latestLocation, ...location };
    switch (node.kind) {
      case "tool-result": {
        flattenTool(node, { rows, seen, depth: 0, location: effectiveLocation });
        break;
      }
      case "assistant": {
        const content = assistantText(node.blocks);
        const request = requestFor(node, requests);
        const requestStatus = asString(request?.status);
        const failed = requestStatus === "error";
        const usage = usageOf(node.usage ?? request?.usage);
        rows.push(makeRow({
          id: `assistant:${node.seq}`,
          kind: "assistant",
          status: failed ? "error" : "ok",
          seq: node.seq,
          time: node.time,
          ...typeof node.turn === "number" ? { turn: node.turn } : location.turn === void 0 ? {} : { turn: location.turn },
          ...typeof node.step === "number" ? { step: node.step } : location.step === void 0 ? {} : { step: location.step },
          name: "",
          title: "",
          preview: oneLine(content || (failed ? request?.error : "(\u7A7A\u56DE\u590D)")),
          ...content === "" ? {} : { result: content },
          ...failed && asString(request?.error) !== "" ? { error: asString(request.error) } : {},
          ...asString(request?.errorCode) === "" ? {} : { errorCode: asString(request.errorCode) },
          ...usage === void 0 ? {} : { usage },
          ...requestStatus === "" ? {} : { requestStatus }
        }, node));
        break;
      }
      case "user":
      case "steering":
      case "context": {
        const content = contentText(node.content);
        const label = node.kind === "context" ? asString(node.producer?.label) : "";
        const name2 = label || (node.kind === "user" ? "" : node.kind);
        rows.push(makeRow({
          id: `${node.kind}:${node.seq}`,
          kind: node.kind,
          status: "neutral",
          seq: node.seq,
          time: node.time,
          ...location,
          ...name2 === "" ? {} : { name: name2 },
          title: name2,
          preview: oneLine(content),
          ...content === "" ? {} : { result: content }
        }, node));
        break;
      }
      case "turn-error": {
        const message = asString(node.message);
        const code = asString(node.code);
        rows.push(makeRow({
          id: `error:${node.seq}`,
          kind: "error",
          status: "error",
          seq: node.seq,
          time: node.time,
          ...typeof node.turn === "number" ? { turn: node.turn } : {},
          ...typeof node.step === "number" ? { step: node.step } : {},
          ...code === "" ? {} : { name: code, errorCode: code },
          preview: oneLine(message || code || "Turn failed"),
          ...message === "" ? {} : { error: message }
        }, node));
        break;
      }
      case "turn-max-tokens": {
        rows.push(makeRow({
          id: `max-tokens:${node.seq}`,
          kind: "max-tokens",
          status: "neutral",
          seq: node.seq,
          time: node.time,
          turn: node.turn,
          step: node.step,
          preview: "Output token limit reached"
        }, node));
        break;
      }
      case "model-retry": {
        const failure = isObject(node.failure) ? node.failure : void 0;
        const reason = asString(failure?.message) || asString(failure?.code) || "";
        const state = asString(node.retryState);
        rows.push(makeRow({
          id: `retry:${node.seq}`,
          kind: "retry",
          status: "neutral",
          seq: node.seq,
          time: node.time,
          ...typeof node.turn === "number" ? { turn: node.turn } : {},
          ...typeof node.step === "number" ? { step: node.step } : {},
          ...state === "" ? {} : { name: state },
          preview: oneLine(reason ? `Retry ${node.retry ?? ""}: ${reason}` : `Retry ${node.retry ?? ""}`),
          ...reason === "" ? {} : { error: reason },
          ...failure === void 0 ? {} : { meta: safeJson(failure) }
        }, node));
        break;
      }
      case "command": {
        const outcome = isObject(node.outcome) ? node.outcome : void 0;
        const status = outcome === void 0 ? "running" : outcome.kind === "error" ? "error" : "ok";
        const content = asString(node.args);
        const result = asString(outcome?.text);
        rows.push(makeRow({
          id: `command:${node.seq}`,
          kind: "command",
          status,
          seq: node.seq,
          time: node.time,
          ...location,
          ...asString(node.name) === "" ? {} : { name: asString(node.name) },
          title: asString(node.name),
          preview: oneLine(`${content}${result ? ` \u2192 ${result}` : ""}`),
          ...content === "" ? {} : { args: content },
          ...result === "" ? {} : { result },
          ...status === "error" ? { error: result || "Command failed" } : {}
        }, node));
        break;
      }
      case "compaction": {
        const request = requests.find((item) => isObject(item) && item.purpose === "compaction" && (item.resultSeq === node.seq || item.replacementSeq === node.seq));
        const failed = request?.status === "error";
        const summary = asString(node.summary);
        rows.push(makeRow({
          id: `compaction:${node.seq}`,
          kind: "compaction",
          status: failed ? "error" : "neutral",
          seq: node.seq,
          time: node.time,
          ...location,
          preview: oneLine(failed ? request?.error : summary || "Compaction checkpoint"),
          ...summary === "" ? {} : { result: summary },
          ...failed && asString(request?.error) !== "" ? { error: asString(request.error) } : {}
        }, node));
        break;
      }
      case "unknown": {
        rows.push(makeRow({
          id: `unknown:${node.seq}`,
          kind: "unknown",
          status: "neutral",
          seq: node.seq,
          time: node.time,
          ...location,
          name: asString(node.type),
          preview: oneLine(asString(node.type)),
          ...node.data === void 0 ? {} : { meta: safeJson(node.data) }
        }, node));
        break;
      }
      default:
        break;
    }
  }
  const runningCalls = Array.isArray(snapshot.runningCalls) ? snapshot.runningCalls : [];
  for (const call of runningCalls) {
    flattenTool(call, { rows, seen, depth: 0, location: latestLocation });
  }
  const partial = isObject(snapshot.partial) ? snapshot.partial : void 0;
  if (partial !== void 0) {
    const content = assistantText(partial.blocks);
    rows.push(makeRow({
      id: "assistant:partial",
      kind: "assistant",
      status: "running",
      seq: Number.MAX_SAFE_INTEGER,
      time: Date.now(),
      ...typeof partial.turn === "number" ? { turn: partial.turn } : {},
      ...typeof partial.step === "number" ? { step: partial.step } : {},
      preview: oneLine(content || "\u6B63\u5728\u751F\u6210\u2026"),
      ...content === "" ? {} : { result: content }
    }, partial));
  }
  rows.sort((left, right) => left.time - right.time || left.seq - right.seq || left.id.localeCompare(right.id));
  return rows;
}
function emptyFilters() {
  return { query: "", tools: [], statuses: [], kinds: [], turns: [] };
}
function parseQuery(input) {
  const tokens = tokenize(asString(input));
  const result = { bare: [], fields: {}, negative: {} };
  const fields = /* @__PURE__ */ new Set(["tool", "name", "status", "kind", "is", "turn", "step", "id", "code", "text", "ms", "dur", "duration"]);
  for (const token of tokens) {
    let value = token;
    let inverted = false;
    if (value.startsWith("-") && value.length > 1) {
      inverted = true;
      value = value.slice(1);
    }
    const match = /^([a-zA-Z][a-zA-Z-]*):(.*)$/s.exec(value);
    if (match !== null && fields.has(match[1].toLowerCase())) {
      const field = match[1].toLowerCase();
      const raw = unquote(match[2]).trim();
      if (raw === "") continue;
      const target = inverted ? result.negative : result.fields;
      const key = field === "name" ? "tool" : field === "is" ? "kind" : field === "dur" || field === "duration" ? "ms" : field;
      target[key] = [...target[key] ?? [], raw];
      continue;
    }
    const text = unquote(value).trim();
    if (text === "") continue;
    if (inverted) result.negative.text = [...result.negative.text ?? [], text];
    else result.bare.push(text);
  }
  return result;
}
function tokenize(input) {
  const tokens = [];
  let current = "";
  let quote = false;
  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    if (char === '"') {
      quote = !quote;
      current += char;
      continue;
    }
    if (!quote && /\s/.test(char)) {
      if (current !== "") tokens.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  if (current !== "") tokens.push(current);
  return tokens;
}
function unquote(value) {
  if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1);
  }
  return value;
}
function textMatches(haystack, needle) {
  const value = needle.toLowerCase();
  if (value.endsWith("*")) return haystack.includes(value.slice(0, -1));
  return haystack.includes(value);
}
function numberMatches(actual, expression) {
  if (typeof actual !== "number") return false;
  const value = expression.trim();
  const range = /^(\d+)\s*(?:-|\.\.)\s*(\d+)$/.exec(value);
  if (range !== null) {
    const low = Number(range[1]);
    const high = Number(range[2]);
    return actual >= Math.min(low, high) && actual <= Math.max(low, high);
  }
  const comparison = /^(>=|<=|>|<|=)?\s*(-?\d+(?:\.\d+)?)$/.exec(value);
  if (comparison === null) return false;
  const target = Number(comparison[2]);
  switch (comparison[1] ?? "=") {
    case ">":
      return actual > target;
    case ">=":
      return actual >= target;
    case "<":
      return actual < target;
    case "<=":
      return actual <= target;
    default:
      return actual === target;
  }
}
function statusAlias(value) {
  const key = value.toLowerCase();
  if (key === "err" || key === "error" || key === "failed" || key === "failure") return "error";
  if (key === "ok" || key === "success" || key === "succeeded" || key === "complete") return "ok";
  if (key === "run" || key === "running" || key === "pending") return "running";
  if (key === "interrupt" || key === "interrupted" || key === "aborted") return "interrupted";
  return key;
}
function kindAlias(value) {
  const key = value.toLowerCase();
  if (key === "tools" || key === "tool") return "tool";
  if (key === "messages" || key === "message" || key === "msg") return "assistant";
  if (key === "errors" || key === "error" || key === "failed") return "error";
  return key;
}
function matchesQuery(row, query) {
  if (!isObject(row)) return false;
  const haystack = asString(row.text).toLowerCase();
  for (const term of query.bare ?? []) {
    if (!textMatches(haystack, term)) return false;
  }
  for (const term of query.negative?.text ?? []) {
    if (textMatches(haystack, term)) return false;
  }
  for (const [field, values] of Object.entries(query.fields ?? {})) {
    if (!valuesMatch(row, haystack, field, values)) return false;
  }
  for (const [field, values] of Object.entries(query.negative ?? {})) {
    if (field === "text") continue;
    if (valuesMatch(row, haystack, field, values)) return false;
  }
  return true;
}
function valuesMatch(row, haystack, field, values) {
  return values.some((value) => {
    switch (field) {
      case "tool":
        return row.kind === "tool" && textMatches(asString(row.name).toLowerCase(), value);
      case "status":
        return row.status === statusAlias(value);
      case "kind":
        return row.kind === kindAlias(value);
      case "turn":
        return numberMatches(row.turn, value);
      case "step":
        return numberMatches(row.step, value);
      case "id":
        return textMatches(asString(row.callId || row.id).toLowerCase(), value);
      case "code":
        return textMatches(`${asString(row.errorCode)} ${asString(row.errorName)}`.toLowerCase(), value);
      case "ms":
        return numberMatches(row.durationMs, value);
      case "text":
        return textMatches(haystack, value);
      default:
        return false;
    }
  });
}
function filterRows(rows, filters, omit) {
  const query = parseQuery(filters?.query ?? "");
  const tools = Array.isArray(filters?.tools) ? filters.tools : [];
  const statuses = Array.isArray(filters?.statuses) ? filters.statuses : [];
  const kinds = Array.isArray(filters?.kinds) ? filters.kinds : [];
  const turns = Array.isArray(filters?.turns) ? filters.turns : [];
  const toolSet = new Set(tools);
  const statusSet = new Set(statuses);
  const kindSet = new Set(kinds);
  const turnSet = new Set(turns);
  return rows.filter((row) => {
    if (!matchesQuery(row, query)) return false;
    if (omit !== "tools" && toolSet.size > 0 && (!toolSet.has(row.name) || row.kind !== "tool")) return false;
    if (omit !== "statuses" && statusSet.size > 0 && !statusSet.has(row.status)) return false;
    if (omit !== "kinds" && kindSet.size > 0 && !kindSet.has(row.kind)) return false;
    if (omit !== "turns" && turnSet.size > 0 && (typeof row.turn !== "number" || !turnSet.has(row.turn))) return false;
    return true;
  });
}
function collectFacets(rows, filters) {
  const toolCounts = /* @__PURE__ */ new Map();
  const statusCounts = /* @__PURE__ */ new Map();
  const turnCounts = /* @__PURE__ */ new Map();
  const forTools = { ...filters, statuses: [] };
  for (const row of filterRows(rows, forTools, "tools")) {
    if (row.kind !== "tool" || typeof row.name !== "string" || row.name === "") continue;
    toolCounts.set(row.name, (toolCounts.get(row.name) ?? 0) + 1);
  }
  for (const row of filterRows(rows, filters, "statuses")) {
    statusCounts.set(row.status, (statusCounts.get(row.status) ?? 0) + 1);
  }
  for (const row of filterRows(rows, filters, "turns")) {
    if (typeof row.turn !== "number") continue;
    turnCounts.set(row.turn, (turnCounts.get(row.turn) ?? 0) + 1);
  }
  return {
    tools: [...toolCounts.entries()].map(([name2, count]) => ({ name: name2, count })).sort((left, right) => right.count - left.count || left.name.localeCompare(right.name)),
    statuses: Object.fromEntries(statusCounts),
    turns: [...turnCounts.entries()].map(([turn, count]) => ({ turn, count })).sort((left, right) => left.turn - right.turn)
  };
}
function summarize(rows) {
  let tools = 0;
  let errors = 0;
  for (const row of rows) {
    if (row.kind === "tool") tools += 1;
    if (row.status === "error" || row.status === "interrupted") errors += 1;
  }
  return { tools, errors };
}

// src/client/export.mjs
function cell(value) {
  return String(value ?? "").replace(/\r?\n/g, " ").replace(/\|/g, "\\|").trim();
}
function exportRecord(row, index) {
  return {
    index: index + 1,
    id: row.id,
    kind: row.kind,
    status: row.status,
    name: row.name ?? "",
    turn: row.turn ?? null,
    step: row.step ?? null,
    time: row.time,
    clock: formatClock(row.time),
    durationMs: row.durationMs ?? null,
    callId: row.callId ?? "",
    parentCallId: row.parentCallId ?? "",
    depth: row.depth ?? 0,
    preview: row.preview ?? "",
    args: row.args ?? "",
    result: row.result ?? "",
    error: row.error ?? "",
    errorCode: row.errorCode ?? "",
    requestStatus: row.requestStatus ?? ""
  };
}
function rowsToMarkdown(rows, meta = {}) {
  const header = [
    `# Better Trajectory \u2014 ${rows.length} record${rows.length === 1 ? "" : "s"}`,
    "",
    `- session: \`${meta.sessionId ?? "unknown"}\``,
    `- filtered: ${rows.length}${typeof meta.total === "number" ? ` / ${meta.total}` : ""}`,
    `- query: ${meta.query ? `\`${meta.query.replace(/`/g, "\\`")}\`` : "\u2014"}`,
    `- exported: ${(/* @__PURE__ */ new Date()).toISOString()}`,
    "",
    "| # | time | turn/step | kind | name | status | took | preview |",
    "|---|---|---|---|---|---|---|---|"
  ];
  for (const [index, row] of rows.entries()) {
    header.push(`| ${index + 1} | ${cell(formatClock(row.time))} | ${cell(turnLabel(row))} | ${cell(row.kind)} | ${cell(row.name)} | ${cell(row.status)} | ${cell(formatDuration(row.durationMs))} | ${cell(oneLine(row.preview, 160))} |`);
  }
  const failures = rows.filter((row) => row.status === "error" || row.status === "interrupted" || row.kind === "error");
  if (failures.length > 0) {
    header.push("", "## Failures", "");
    for (const [index, row] of failures.entries()) {
      header.push(`### ${index + 1}. ${row.name || row.kind} \u2014 ${row.errorCode || row.status}`);
      if (row.error) header.push("", "```text", row.error, "```");
      if (row.args) header.push("", "**Arguments**", "", "```json", row.args, "```");
      if (row.result) header.push("", "**Result**", "", "```text", row.result, "```");
      header.push("");
    }
  }
  return header.join("\n");
}
function rowsToJson(rows, meta = {}) {
  return JSON.stringify({
    format: "dsh-better-trajectory/v1",
    sessionId: meta.sessionId ?? null,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    query: meta.query ?? "",
    total: meta.total ?? null,
    count: rows.length,
    records: rows.map(exportRecord)
  }, null, 2);
}
function rowToText(row) {
  const lines = [
    `# ${row.name || row.kind} (${row.status})`,
    `time: ${formatClock(row.time)}`,
    `turn/step: ${turnLabel(row)}`,
    `duration: ${formatDuration(row.durationMs) || "\u2014"}`
  ];
  if (row.callId) lines.push(`callId: ${row.callId}`);
  if (row.parentCallId) lines.push(`parentCallId: ${row.parentCallId}`);
  if (row.error) lines.push("", "## Error", row.error);
  if (row.args) lines.push("", "## Arguments", row.args);
  if (row.result) lines.push("", "## Result", row.result);
  return lines.join("\n");
}
function turnLabel(row) {
  if (typeof row.turn !== "number") return "\u2014";
  return typeof row.step === "number" ? `${row.turn}/${row.step}` : String(row.turn);
}

// src/client/icons.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Svg({ size = 14, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.4,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...props,
      children
    }
  );
}
function IconSearch(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "7", cy: "7", r: "4.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.2 10.2 13 13" })
  ] });
}
function IconClose(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 4 8 8M12 4l-8 8" }) });
}
function IconChevron(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 6 4 4 4-4" }) });
}
function IconArrowDown(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3v9M4.5 8.5 8 12l3.5-3.5" }) });
}
function IconCopy(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "5.5", y: "5.5", width: "7", height: "7", rx: "1.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.5 5.5v-1a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 4.5V9a1.5 1.5 0 0 0 1.5 1.5h1" })
  ] });
}
function IconDownload(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 2.5v7.5M5 7.5 8 10.5 11 7.5M3 12.5h10" }) });
}
function IconFilter(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 3.5h11L9.5 8v4l-3 1V8L2.5 3.5Z" }) });
}
function IconTool(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.6 3.2a2.7 2.7 0 0 0-3.3 3.3l-3.5 3.5a1.4 1.4 0 0 0 2 2l3.5-3.5a2.7 2.7 0 0 0 3.3-3.3L9.9 6.3 8.7 5.1l1.9-1.9Z" }) });
}
function IconMessage(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 8.2a4.5 4.5 0 0 1-4.5 4.5H5.2L3 14.5v-2.6A4.5 4.5 0 0 1 2.5 8a4.5 4.5 0 0 1 4.5-4.5h1.5A4.5 4.5 0 0 1 13 8.2Z" }) });
}
function IconError(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "8", cy: "8", r: "5.6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4.8v3.8M8 11.1v.1" })
  ] });
}
function IconTerminal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2.2", y: "3.2", width: "11.6", height: "9.6", rx: "1.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4.8 6.2 2 1.8-2 1.8M8.6 10h2.7" })
  ] });
}
function IconArchive(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2.2", y: "3", width: "11.6", height: "3", rx: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.2 6v5.5A1.5 1.5 0 0 0 4.7 13h6.6a1.5 1.5 0 0 0 1.5-1.5V6M6.4 8.5h3.2" })
  ] });
}
function IconRetry(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.8 6.2A5 5 0 1 0 13 9.4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.8 2.8v3.4H9.4" })
  ] });
}
function IconSpark(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 2.2 9.4 6l3.8 1.4-3.8 1.4L8 12.6 6.6 8.8 2.8 7.4 6.6 6 8 2.2Z" }) });
}
function IconContext(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8 2 5.5 3L8 8 2.5 5 8 2Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m2.5 8.2 5.5 3 5.5-3M2.5 11.2l5.5 3 5.5-3" })
  ] });
}
function IconSpinner(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, className: `bt-spin ${props.className ?? ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 2.2a5.8 5.8 0 1 1-5.5 4" }) });
}
function IconCheck(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m3.2 8.4 3.1 3.1 6.5-6.9" }) });
}

// src/client/view.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var EMPTY_SNAPSHOT = {
  eventNodes: [],
  eventLocations: /* @__PURE__ */ new Map(),
  requests: [],
  callSchemas: /* @__PURE__ */ new Map(),
  partial: null,
  runningCalls: []
};
var MESSAGE_KINDS = ["assistant", "user", "steering"];
var OTHER_KINDS = ["context", "error", "command", "compaction", "retry", "max-tokens", "unknown"];
var VISIBLE_STEP = 250;
var DISPLAY_LIMIT = 2e5;
var STORAGE_PREFIX = "dsh-better-trajectory:filters:";
function selectWholeSnapshot(snapshot) {
  return snapshot;
}
function useEmptyTrajectory(selector) {
  return selector(EMPTY_SNAPSHOT);
}
var EMPTY_SESSION = { hasMore: true };
function selectSession(snapshot) {
  return snapshot;
}
function useEmptySession(selector) {
  return selector(EMPTY_SESSION);
}
function loadFilters(sessionId) {
  const fallback = emptyFilters();
  if (typeof window === "undefined" || !sessionId) return fallback;
  try {
    const raw = window.sessionStorage.getItem(`${STORAGE_PREFIX}${sessionId}`);
    if (raw === null) return fallback;
    const value = JSON.parse(raw);
    return {
      query: typeof value.query === "string" ? value.query : "",
      tools: Array.isArray(value.tools) ? value.tools.filter((item) => typeof item === "string") : [],
      statuses: Array.isArray(value.statuses) ? value.statuses.filter((item) => typeof item === "string") : [],
      kinds: Array.isArray(value.kinds) ? value.kinds.filter((item) => typeof item === "string") : [],
      turns: Array.isArray(value.turns) ? value.turns.filter((item) => typeof item === "number") : []
    };
  } catch {
    return fallback;
  }
}
function persistFilters(sessionId, filters) {
  if (typeof window === "undefined" || !sessionId) return;
  try {
    window.sessionStorage.setItem(`${STORAGE_PREFIX}${sessionId}`, JSON.stringify(filters));
  } catch {
  }
}
function sameStrings(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}
function kindLabelKey(kind) {
  const known = {
    tool: "kind.tool",
    assistant: "kind.assistant",
    user: "kind.user",
    steering: "kind.steering",
    context: "kind.context",
    error: "kind.error",
    command: "kind.command",
    compaction: "kind.compaction",
    retry: "kind.retry",
    "max-tokens": "kind.maxTokens",
    unknown: "kind.unknown"
  };
  return known[kind] ?? "kind.unknown";
}
function statusLabelKey(status) {
  const known = {
    ok: "status.ok",
    error: "status.error",
    running: "status.running",
    interrupted: "status.interrupted",
    neutral: "status.neutral"
  };
  return known[status] ?? "status.neutral";
}
function kindIcon(kind) {
  switch (kind) {
    case "tool":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconTool, { size: 12 });
    case "assistant":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconSpark, { size: 12 });
    case "user":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconMessage, { size: 12 });
    case "steering":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconMessage, { size: 12 });
    case "context":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconContext, { size: 12 });
    case "error":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconError, { size: 12 });
    case "command":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconTerminal, { size: 12 });
    case "compaction":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconArchive, { size: 12 });
    case "retry":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconRetry, { size: 12 });
    case "max-tokens":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconError, { size: 12 });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconContext, { size: 12 });
  }
}
function displayName(row, t) {
  if (row.kind === "tool") return row.name || row.callId || t("kind.tool");
  if (row.kind === "assistant" || row.kind === "user" || row.kind === "steering") {
    return t(kindLabelKey(row.kind));
  }
  if (row.kind === "error") return t("kind.error");
  if (row.name) return row.name;
  return t(kindLabelKey(row.kind));
}
function turnText(row) {
  if (typeof row.turn !== "number") return "\u2014";
  return typeof row.step === "number" ? `T${row.turn}.${row.step}` : `T${row.turn}`;
}
function clampForDisplay(text) {
  const value = text ?? "";
  return value.length > DISPLAY_LIMIT ? { text: value.slice(0, DISPLAY_LIMIT), truncated: true } : { text: value, truncated: false };
}
function useDismissable(open, close) {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const onPointer = (event) => {
      if (ref.current !== null && event.target instanceof Node && !ref.current.contains(event.target)) close();
    };
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);
  return ref;
}
async function writeClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
  }
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  } catch {
    return false;
  }
}
function downloadJson(text, sessionId) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `better-trajectory-${sessionId ?? "session"}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function Section({
  title,
  text,
  copyLabel,
  onCopy,
  tone,
  wrap,
  pretty,
  canPretty,
  onTogglePretty,
  prettyTitle,
  truncatedNote,
  children
}) {
  const view = clampForDisplay(text);
  if ((text ?? "") === "" && children === void 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "bt-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-section-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-section-title", children: title }),
      canPretty === true && onTogglePretty !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          className: "bt-link-button",
          onClick: onTogglePretty,
          "aria-pressed": pretty,
          title: prettyTitle,
          "aria-label": prettyTitle,
          children: "{}"
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          className: "bt-icon-button",
          title: copyLabel,
          "aria-label": copyLabel,
          onClick: () => onCopy(text ?? ""),
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconCopy, { size: 12 })
        }
      )
    ] }),
    children,
    (text ?? "") !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "pre",
      {
        className: tone === "error" ? "bt-error-block" : "bt-pre",
        "data-wrap": wrap ? "true" : "false",
        children: view.text
      }
    ) : null,
    view.truncated ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-note", children: truncatedNote ?? "\u2026" }) : null
  ] });
}
function errorText(row) {
  const identity = [row.errorName, row.errorCode].filter((value) => value !== void 0 && value !== "").join(" \xB7 ");
  let body = row.error ?? "";
  if (identity !== "" && body.startsWith(identity)) {
    body = body.slice(identity.length).replace(/^[\s·:—-]+/u, "");
  }
  return [identity, body].filter((value) => value !== "").join("\n");
}
function BetterTrajectoryView({
  sessionId,
  useTrajectory,
  useSession,
  t,
  loadOlder
}) {
  const translate = typeof t === "function" ? t : ((key) => key);
  const useSnapshot = useTrajectory ?? useEmptyTrajectory;
  const snapshot = useSnapshot(selectWholeSnapshot);
  const useSessionSnapshot = useSession ?? useEmptySession;
  const sessionState = useSessionSnapshot(selectSession);
  const hasHook = typeof useTrajectory === "function";
  const hasMore = sessionState?.hasMore !== false;
  const [filters, setFilters] = (0, import_react.useState)(() => loadFilters(sessionId));
  const [selectedId, setSelectedId] = (0, import_react.useState)(null);
  const [visibleStep, setVisibleStep] = (0, import_react.useState)(VISIBLE_STEP);
  const [toolMenu, setToolMenu] = (0, import_react.useState)(false);
  const [toolSearch, setToolSearch] = (0, import_react.useState)("");
  const [copyMenu, setCopyMenu] = (0, import_react.useState)(false);
  const [toast, setToast] = (0, import_react.useState)(null);
  const [wrap, setWrap] = (0, import_react.useState)(true);
  const [prettyResult, setPrettyResult] = (0, import_react.useState)(false);
  const [older, setOlder] = (0, import_react.useState)("idle");
  const [atBottom, setAtBottom] = (0, import_react.useState)(true);
  const searchRef = (0, import_react.useRef)(null);
  const toolSearchRef = (0, import_react.useRef)(null);
  const listRef = (0, import_react.useRef)(null);
  const pinnedInitial = (0, import_react.useRef)(false);
  const lastFilterKey = (0, import_react.useRef)(null);
  const atBottomRef = (0, import_react.useRef)(true);
  const rows = (0, import_react.useMemo)(() => buildRows(snapshot), [snapshot]);
  const deferredQuery = (0, import_react.useDeferredValue)(filters.query);
  const effectiveFilters = (0, import_react.useMemo)(
    () => ({ ...filters, query: deferredQuery }),
    [filters, deferredQuery]
  );
  const filtered = (0, import_react.useMemo)(
    () => filterRows(rows, effectiveFilters),
    // filters 的数组身份在每次 setState 时都会变，逐项列出避免无意义重算。
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rows, effectiveFilters]
  );
  const facets = (0, import_react.useMemo)(() => collectFacets(rows, effectiveFilters), [rows, effectiveFilters]);
  const stats = (0, import_react.useMemo)(() => summarize(filtered), [filtered]);
  const selected = (0, import_react.useMemo)(
    () => filtered.find((row) => row.id === selectedId) ?? null,
    [filtered, selectedId]
  );
  const filterKey = JSON.stringify([
    effectiveFilters.query,
    effectiveFilters.tools,
    effectiveFilters.statuses,
    effectiveFilters.kinds,
    effectiveFilters.turns
  ]);
  const closeToolMenu = (0, import_react.useCallback)(() => setToolMenu(false), []);
  const closeCopyMenu = (0, import_react.useCallback)(() => setCopyMenu(false), []);
  const toolPopRef = useDismissable(toolMenu, closeToolMenu);
  const copyPopRef = useDismissable(copyMenu, closeCopyMenu);
  (0, import_react.useEffect)(() => {
    persistFilters(sessionId, filters);
  }, [sessionId, filters]);
  (0, import_react.useEffect)(() => {
    if (selectedId !== null && selected === null) setSelectedId(null);
  }, [selectedId, selected]);
  (0, import_react.useEffect)(() => {
    if (lastFilterKey.current === null) {
      lastFilterKey.current = filterKey;
      return;
    }
    if (lastFilterKey.current === filterKey) return;
    lastFilterKey.current = filterKey;
    const element = listRef.current;
    if (element !== null) element.scrollTop = 0;
    atBottomRef.current = false;
    setAtBottom(false);
    setVisibleStep(VISIBLE_STEP);
  }, [filterKey]);
  (0, import_react.useEffect)(() => {
    if (rows.length === 0 || pinnedInitial.current) return;
    pinnedInitial.current = true;
    const element = listRef.current;
    if (element === null) return;
    const filteredNow = filters.query.trim() !== "" || filters.tools.length > 0 || filters.statuses.length > 0 || filters.kinds.length > 0 || filters.turns.length > 0;
    if (filteredNow) {
      element.scrollTop = 0;
      atBottomRef.current = false;
      setAtBottom(false);
      return;
    }
    element.scrollTop = element.scrollHeight;
    atBottomRef.current = true;
    setAtBottom(true);
  }, [rows.length]);
  (0, import_react.useEffect)(() => {
    const element = listRef.current;
    if (element !== null && atBottomRef.current) element.scrollTop = element.scrollHeight;
  }, [filtered.length, visibleStep]);
  (0, import_react.useEffect)(() => {
    setPrettyResult(false);
  }, [selected?.id]);
  (0, import_react.useEffect)(() => {
    if (toast === null) return;
    const timer = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);
  (0, import_react.useEffect)(() => {
    const onKey = (event) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && target.closest('input, textarea, select, [contenteditable="true"]') !== null) return;
      event.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  (0, import_react.useEffect)(() => {
    if (!toolMenu) {
      setToolSearch("");
      return;
    }
    const timer = window.setTimeout(() => toolSearchRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [toolMenu]);
  const toastMessage = (0, import_react.useCallback)((message) => {
    setToast(message);
  }, []);
  const copy = (0, import_react.useCallback)(async (text, message) => {
    const ok = await writeClipboard(text);
    toastMessage(ok ? message ?? translate("toolbar.copy.done") : translate("toolbar.copy.failed"));
  }, [toastMessage, translate]);
  const activeCount = filters.tools.length + filters.statuses.length + filters.kinds.length + filters.turns.length + (filters.query.trim() === "" ? 0 : 1);
  const toolOptions = (0, import_react.useMemo)(() => {
    const options = facets.tools.map((item) => ({ ...item }));
    for (const name2 of filters.tools) {
      if (!options.some((item) => item.name === name2)) options.unshift({ name: name2, count: 0 });
    }
    const term = toolSearch.trim().toLowerCase();
    return term === "" ? options : options.filter((item) => item.name.toLowerCase().includes(term));
  }, [facets.tools, filters.tools, toolSearch]);
  const shown = filtered.slice(0, visibleStep);
  const remaining = filtered.length - shown.length;
  const kindChoice = filters.kinds.length === 0 ? "all" : filters.kinds.length === 1 && filters.kinds[0] === "tool" ? "tools" : sameStrings(filters.kinds, MESSAGE_KINDS) ? "messages" : sameStrings(filters.kinds, OTHER_KINDS) ? "other" : "all";
  const statusChoice = filters.statuses.length === 1 ? filters.statuses[0] : filters.statuses.length === 0 ? "all" : "all";
  const turnValue = filters.turns.length === 1 ? String(filters.turns[0]) : "";
  const setToolFilter = (name2) => {
    setFilters((previous) => {
      const active = previous.tools.includes(name2);
      return {
        ...previous,
        kinds: [],
        tools: active ? previous.tools.filter((item) => item !== name2) : [...previous.tools, name2]
      };
    });
  };
  const setStatusFilter = (status) => {
    setFilters((previous) => ({
      ...previous,
      statuses: status === "all" ? [] : [status],
      kinds: status === "all" ? previous.kinds : []
    }));
  };
  const setKindFilter = (kind) => {
    const kinds = kind === "all" ? [] : kind === "tools" ? ["tool"] : kind === "messages" ? MESSAGE_KINDS : OTHER_KINDS;
    setFilters((previous) => ({ ...previous, kinds, tools: kind === "tools" ? previous.tools : [] }));
  };
  const setTurnFilter = (value) => {
    setFilters((previous) => ({
      ...previous,
      turns: value === "" ? [] : [Number(value)]
    }));
  };
  const resetFilters = () => {
    setFilters(emptyFilters());
    setSelectedId(null);
  };
  const removeTool = (name2) => {
    setFilters((previous) => ({ ...previous, tools: previous.tools.filter((item) => item !== name2) }));
  };
  const removeStatus = (status) => {
    setFilters((previous) => ({ ...previous, statuses: previous.statuses.filter((item) => item !== status) }));
  };
  const removeKind = () => setFilters((previous) => ({ ...previous, kinds: [] }));
  const removeTurn = (turn) => {
    setFilters((previous) => ({ ...previous, turns: previous.turns.filter((item) => item !== turn) }));
  };
  const copyMarkdown = () => {
    setCopyMenu(false);
    void copy(rowsToMarkdown(filtered, {
      sessionId,
      query: effectiveFilters.query,
      total: rows.length
    }));
  };
  const copyJson = () => {
    setCopyMenu(false);
    void copy(rowsToJson(filtered, {
      sessionId,
      query: effectiveFilters.query,
      total: rows.length
    }));
  };
  const download = () => {
    setCopyMenu(false);
    downloadJson(rowsToJson(filtered, {
      sessionId,
      query: effectiveFilters.query,
      total: rows.length
    }), sessionId);
  };
  const jumpLatest = () => {
    const element = listRef.current;
    if (element === null) return;
    element.scrollTop = element.scrollHeight;
    atBottomRef.current = true;
    setAtBottom(true);
  };
  const onListScroll = () => {
    const element = listRef.current;
    if (element === null) return;
    const bottom = element.scrollHeight - element.scrollTop - element.clientHeight < 80;
    if (atBottomRef.current !== bottom) {
      atBottomRef.current = bottom;
      setAtBottom(bottom);
    }
  };
  const onRowKeyDown = (event, id) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setSelectedId(id);
  };
  const loadOlderRecords = async () => {
    if (loadOlder === void 0 || older === "loading") return;
    setOlder("loading");
    try {
      const changed = await loadOlder();
      setOlder(changed ? "idle" : "done");
    } catch {
      setOlder("idle");
      toastMessage(translate("toolbar.copy.failed"));
    }
  };
  const onlyTool = (row) => {
    if (row.name === void 0) return;
    setFilters({ ...emptyFilters(), tools: [row.name] });
    setSelectedId(row.id);
  };
  const onlyStatus = (row) => {
    setFilters({ ...emptyFilters(), statuses: [row.status] });
    setSelectedId(row.id);
  };
  const onlyTurn = (row) => {
    if (typeof row.turn !== "number") return;
    setFilters({ ...emptyFilters(), turns: [row.turn] });
    setSelectedId(row.id);
  };
  const resultPretty = selected?.result === void 0 ? "" : prettyJson(selected.result);
  const canPretty = selected?.result !== void 0 && resultPretty !== selected.result;
  const resultText = selected?.result === void 0 ? "" : prettyResult && canPretty ? resultPretty : selected.result;
  const resultSectionTitle = selected?.kind === "tool" ? translate("inspector.section.result") : selected?.kind === "command" ? translate("inspector.section.result") : translate("inspector.section.content");
  const emptyTitle = !hasHook ? translate("empty.noHook.title") : rows.length === 0 ? translate("empty.noData.title") : translate("empty.noMatch.title");
  const emptyBody = !hasHook ? translate("empty.noHook.body") : rows.length === 0 ? translate("empty.noData.body") : translate("empty.noMatch.body");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-root", "data-dsh-better-trajectory-view": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-toolbar", role: "toolbar", "aria-label": translate("toolbar.aria"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-toolbar-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-search", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconSearch, { size: 13 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              ref: searchRef,
              type: "search",
              value: filters.query,
              placeholder: translate("toolbar.searchPlaceholder"),
              "aria-label": translate("toolbar.search"),
              spellCheck: false,
              onChange: (event) => {
                setFilters((previous) => ({ ...previous, query: event.target.value }));
              },
              onKeyDown: (event) => {
                if (event.key === "Escape") {
                  event.stopPropagation();
                  setFilters((previous) => ({ ...previous, query: "" }));
                }
              }
            }
          ),
          filters.query === "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-kbd", children: "/" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: "bt-icon-button",
              title: translate("toolbar.searchClear"),
              "aria-label": translate("toolbar.searchClear"),
              onClick: () => {
                setFilters((previous) => ({ ...previous, query: "" }));
                searchRef.current?.focus();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconClose, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-segment", role: "group", "aria-label": translate("toolbar.status.aria"), children: [
          ["all", translate("toolbar.status.all"), void 0],
          ["error", translate("toolbar.status.error"), facets.statuses.error],
          ["running", translate("toolbar.status.running"), facets.statuses.running]
        ].map(([value, label, count]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            "aria-pressed": statusChoice === value,
            "data-count": count === void 0 ? void 0 : count > 0 ? "1" : "0",
            onClick: () => setStatusFilter(value),
            children: [
              label,
              count !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-count", children: count })
              ] }) : null
            ]
          },
          value
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-pop-wrap", ref: toolPopRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              type: "button",
              className: "bt-button",
              "data-active": filters.tools.length > 0,
              "aria-haspopup": "dialog",
              "aria-expanded": toolMenu,
              "aria-label": translate("toolbar.tools.aria"),
              onClick: () => setToolMenu((open) => !open),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconFilter, { size: 12 }),
                filters.tools.length === 0 ? translate("toolbar.tools") : translate("toolbar.tools.selected", { count: filters.tools.length }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconChevron, { size: 11 })
              ]
            }
          ),
          toolMenu ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-pop", "data-align": "right", role: "dialog", "aria-label": translate("toolbar.tools.aria"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-pop-title", children: translate("toolbar.tools") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-pop-search", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconSearch, { size: 12 }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                {
                  ref: toolSearchRef,
                  value: toolSearch,
                  placeholder: translate("toolbar.tools.search"),
                  "aria-label": translate("toolbar.tools.search"),
                  onChange: (event) => setToolSearch(event.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-pop-list", children: toolOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-pop-title", children: translate("toolbar.tools.empty") }) : toolOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: "bt-pop-item",
                "aria-pressed": filters.tools.includes(option.name),
                onClick: () => setToolFilter(option.name),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-check", "data-checked": filters.tools.includes(option.name), children: filters.tools.includes(option.name) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconCheck, { size: 10 }) : null }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-pop-name", title: option.name, children: option.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-pop-count", children: option.count })
                ]
              },
              option.name
            )) }),
            filters.tools.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-pop-footer", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                className: "bt-link-button",
                onClick: () => setFilters((previous) => ({ ...previous, tools: [] })),
                children: translate("toolbar.tools.clear")
              }
            ) }) : null
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "select",
          {
            className: "bt-select",
            value: turnValue,
            "aria-label": translate("toolbar.turns.aria"),
            onChange: (event) => setTurnFilter(event.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: translate("toolbar.turns.all") }),
              facets.turns.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("option", { value: String(item.turn), children: [
                translate("filters.turn", { turn: item.turn }),
                " \xB7 ",
                item.count
              ] }, item.turn))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-toolbar-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-segment", role: "group", "aria-label": translate("toolbar.kind.aria"), children: [
          ["all", translate("toolbar.kind.all")],
          ["tools", translate("toolbar.kind.tools")],
          ["messages", translate("toolbar.kind.messages")],
          ["other", translate("toolbar.kind.other")]
        ].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            "aria-pressed": kindChoice === value,
            onClick: () => setKindFilter(value),
            children: label
          },
          value
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-summary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate(rows.length === 1 ? "summary.rows.one" : "summary.rows", { shown: filtered.length, total: rows.length }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-summary-sep" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate(stats.tools === 1 ? "summary.tools.one" : "summary.tools", { count: stats.tools }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-summary-sep" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: stats.errors > 0 ? "bt-error-count" : void 0, children: translate(stats.errors === 1 ? "summary.errors.one" : "summary.errors", { count: stats.errors }) }),
          activeCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-summary-sep" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate("summary.filtered") })
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-spacer" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-pop-wrap", ref: copyPopRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              type: "button",
              className: "bt-button",
              "aria-haspopup": "menu",
              "aria-expanded": copyMenu,
              "aria-label": translate("toolbar.copy.aria"),
              title: translate("toolbar.copy.aria"),
              onClick: () => setCopyMenu((open) => !open),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconCopy, { size: 12 }),
                translate("toolbar.copy"),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconChevron, { size: 11 })
              ]
            }
          ),
          copyMenu ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-pop", "data-align": "right", role: "menu", style: { width: 220 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "bt-pop-item", role: "menuitem", onClick: copyMarkdown, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconCopy, { size: 12 }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-pop-name", style: { fontFamily: "inherit" }, children: translate("toolbar.copy.markdown") })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "bt-pop-item", role: "menuitem", onClick: copyJson, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconCopy, { size: 12 }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-pop-name", style: { fontFamily: "inherit" }, children: translate("toolbar.copy.json") })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "bt-pop-item", role: "menuitem", onClick: download, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconDownload, { size: 12 }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-pop-name", style: { fontFamily: "inherit" }, children: translate("toolbar.copy.download") })
            ] })
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            className: "bt-button",
            onClick: jumpLatest,
            title: translate("toolbar.latest.aria"),
            "aria-label": translate("toolbar.latest.aria"),
            "data-active": !atBottom,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconArrowDown, { size: 12 }),
              translate("toolbar.latest")
            ]
          }
        ),
        activeCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bt-button", onClick: resetFilters, children: translate("toolbar.reset") }) : null
      ] }),
      activeCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-toolbar-row", "aria-label": translate("filters.active"), children: [
        filters.query.trim() !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FilterChip,
          {
            label: translate("filters.query", { query: oneLine(filters.query, 40) }),
            onRemove: () => setFilters((previous) => ({ ...previous, query: "" })),
            removeLabel: translate("filters.remove", { label: filters.query })
          }
        ) : null,
        filters.tools.map((name2) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FilterChip,
          {
            label: translate("filters.tool", { name: name2 }),
            onRemove: () => removeTool(name2),
            removeLabel: translate("filters.remove", { label: name2 })
          },
          `tool-${name2}`
        )),
        filters.statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FilterChip,
          {
            label: translate("filters.status", { status: translate(statusLabelKey(status)) }),
            onRemove: () => removeStatus(status),
            removeLabel: translate("filters.remove", { label: status })
          },
          `status-${status}`
        )),
        filters.kinds.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FilterChip,
          {
            label: translate("filters.kind", { kind: kindChoice === "all" ? filters.kinds.join(", ") : translate(`toolbar.kind.${kindChoice}`) }),
            onRemove: removeKind,
            removeLabel: translate("filters.remove", { label: filters.kinds.join(", ") })
          }
        ) : null,
        filters.turns.map((turn) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FilterChip,
          {
            label: translate("filters.turn", { turn }),
            onRemove: () => removeTurn(turn),
            removeLabel: translate("filters.remove", { label: String(turn) })
          },
          `turn-${turn}`
        ))
      ] }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-columns", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate("list.header.time") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate("list.header.turn") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate("list.header.record") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate("list.header.preview") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: translate("list.header.duration") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            className: "bt-list",
            ref: listRef,
            onScroll: onListScroll,
            children: [
              hasHook && loadOlder !== void 0 && hasMore && older !== "done" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-older", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  className: "bt-button",
                  disabled: older === "loading",
                  onClick: () => {
                    void loadOlderRecords();
                  },
                  children: older === "loading" ? translate("list.loadingOlder") : translate("list.loadOlder")
                }
              ) }) : null,
              filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-empty", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-empty-icon", children: !hasHook ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconContext, { size: 20 }) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconTool, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconFilter, { size: 20 }) }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: emptyTitle }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: emptyBody }),
                rows.length > 0 && activeCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bt-button", onClick: resetFilters, children: translate("empty.clear") }) : null
              ] }) : shown.map((row) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "div",
                {
                  className: "bt-row",
                  role: "button",
                  tabIndex: 0,
                  "data-kind": row.kind,
                  "data-status": row.status,
                  "data-depth": row.depth ?? 0,
                  "aria-pressed": selectedId === row.id,
                  "aria-label": translate("aria.row", {
                    kind: translate(kindLabelKey(row.kind)),
                    name: displayName(row, translate),
                    status: translate(statusLabelKey(row.status)),
                    time: formatClock(row.time)
                  }),
                  style: { "--bt-depth": row.depth ?? 0 },
                  onClick: () => setSelectedId(row.id),
                  onKeyDown: (event) => onRowKeyDown(event, row.id),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-dot" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-time", title: formatDateTime(row.time), children: formatClock(row.time) }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-turn", children: turnText(row) }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "bt-name", children: [
                      row.depth !== void 0 && row.depth > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-sub", children: "\u2514" }) : null,
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-name-icon", children: kindIcon(row.kind) }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-name-text", title: row.name || displayName(row, translate), children: displayName(row, translate) }),
                      row.errorCode ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-code", title: row.errorCode, children: row.errorCode }) : null,
                      row.status === "running" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconSpinner, { size: 11 }) : null
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-preview", title: row.preview, children: row.preview }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-dur", children: formatDuration(row.durationMs) })
                  ]
                },
                row.id
              )),
              remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-more", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  className: "bt-button",
                  onClick: () => setVisibleStep((step) => step + VISIBLE_STEP),
                  children: translate("list.loadMore", { count: remaining })
                }
              ) }) : null
            ]
          }
        )
      ] }),
      selected !== null ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "aside",
        {
          className: "bt-inspector",
          "aria-label": translate("inspector.aria"),
          onKeyDown: (event) => {
            if (event.key === "Escape") {
              event.stopPropagation();
              setSelectedId(null);
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-inspector-head", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-badge", "data-status": selected.status, children: translate(statusLabelKey(selected.status)) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-inspector-title", "data-kind": selected.kind, title: displayName(selected, translate), children: displayName(selected, translate) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  className: "bt-icon-button",
                  title: translate("inspector.wrap"),
                  "aria-label": translate("inspector.wrap"),
                  "aria-pressed": wrap,
                  "data-active": wrap,
                  onClick: () => setWrap((value) => !value),
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconTerminal, { size: 12 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  className: "bt-icon-button",
                  title: translate("inspector.close"),
                  "aria-label": translate("inspector.close"),
                  onClick: () => setSelectedId(null),
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconClose, { size: 12 })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-inspector-scroll", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: "bt-meta", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: translate("inspector.meta.time") }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { "data-mono": "true", children: formatDateTime(selected.time) }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: translate("inspector.meta.turn") }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { "data-mono": "true", children: turnText(selected) }),
                selected.durationMs !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: translate("inspector.meta.duration") }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { "data-mono": "true", children: formatDuration(selected.durationMs) })
                ] }) : null,
                selected.callId ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: translate("inspector.meta.callId") }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { "data-mono": "true", children: selected.callId })
                ] }) : null,
                selected.parentCallId ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: translate("inspector.meta.parent") }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { "data-mono": "true", children: selected.parentCallId })
                ] }) : null,
                selected.requestStatus ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: translate("inspector.meta.request") }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: selected.requestStatus })
                ] }) : null
              ] }),
              selected.usage !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-note", children: [
                translate("inspector.meta.usageValue", {
                  input: selected.usage.inputTokens ?? 0,
                  output: selected.usage.outputTokens ?? 0
                }),
                typeof selected.usage.cacheReadTokens === "number" || typeof selected.usage.cacheWriteTokens === "number" ? ` \xB7 ${translate("inspector.meta.usageCache", {
                  cacheRead: selected.usage.cacheReadTokens ?? 0,
                  cacheWrite: selected.usage.cacheWriteTokens ?? 0
                })}` : "",
                typeof selected.usage.reasoningTokens === "number" ? ` \xB7 ${translate("inspector.meta.usageReasoning", { reasoning: selected.usage.reasoningTokens })}` : ""
              ] }) : null,
              selected.error !== void 0 && selected.error !== "" || Boolean(selected.errorName) || Boolean(selected.errorCode) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                Section,
                {
                  title: translate("inspector.section.error"),
                  text: errorText(selected),
                  copyLabel: translate("inspector.copySection", { section: translate("inspector.section.error") }),
                  onCopy: (text) => {
                    void copy(text);
                  },
                  tone: "error",
                  wrap,
                  truncatedNote: translate("inspector.truncated")
                }
              ) : null,
              selected.kind === "tool" || selected.kind === "command" || selected.args !== void 0 && selected.args !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                Section,
                {
                  title: translate("inspector.section.args"),
                  text: selected.args,
                  copyLabel: translate("inspector.copySection", { section: translate("inspector.section.args") }),
                  onCopy: (text) => {
                    void copy(text);
                  },
                  wrap,
                  truncatedNote: translate("inspector.truncated"),
                  children: selected.args === void 0 || selected.args === "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-note", children: translate("inspector.emptyArgs") }) : null
                }
              ) : null,
              selected.kind === "tool" || selected.kind === "command" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                Section,
                {
                  title: resultSectionTitle,
                  text: resultText,
                  copyLabel: translate("inspector.copySection", { section: resultSectionTitle }),
                  onCopy: (text) => {
                    void copy(text);
                  },
                  wrap,
                  pretty: prettyResult,
                  canPretty,
                  onTogglePretty: () => setPrettyResult((value) => !value),
                  prettyTitle: prettyResult ? translate("inspector.raw") : translate("inspector.formatted"),
                  truncatedNote: translate("inspector.truncated"),
                  children: resultText === "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-note", children: selected.status === "running" ? translate("inspector.runningResult") : translate("inspector.emptyResult") }) : null
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                Section,
                {
                  title: translate("inspector.section.content"),
                  text: selected.result,
                  copyLabel: translate("inspector.copySection", { section: translate("inspector.section.content") }),
                  onCopy: (text) => {
                    void copy(text);
                  },
                  wrap,
                  truncatedNote: translate("inspector.truncated")
                }
              ),
              selected.meta ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("details", { className: "bt-details", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("summary", { className: "bt-section-title", children: translate("inspector.section.meta") }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: "bt-pre", "data-wrap": wrap ? "true" : "false", children: clampForDisplay(selected.meta).text })
              ] }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bt-actions", children: [
                selected.kind === "tool" && selected.name ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bt-button", onClick: () => onlyTool(selected), children: translate("inspector.onlyTool") }) : null,
                selected.status !== "neutral" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bt-button", onClick: () => onlyStatus(selected), children: translate("inspector.onlyStatus") }) : null,
                typeof selected.turn === "number" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bt-button", onClick: () => onlyTurn(selected), children: translate("inspector.onlyTurn") }) : null,
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: "bt-button",
                    onClick: () => {
                      void copy(rowToText(selected));
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconCopy, { size: 12 }),
                      translate("inspector.copyRecord")
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      ) : null,
      toast !== null ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bt-toast", role: "status", children: toast }) : null
    ] })
  ] });
}
function FilterChip({
  label,
  removeLabel,
  onRemove
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "bt-chip", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bt-chip-label", title: label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", "aria-label": removeLabel, title: removeLabel, onClick: onRemove, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconClose, { size: 10 }) })
  ] });
}

// src/client/styles.css
var styles_default = "/*\n * Better Trajectory \u7684\u89C6\u56FE\u6837\u5F0F\u3002\n *\n * \u53EA\u6D88\u8D39\u5BBF\u4E3B\u7684\u8BED\u4E49 token\uFF08--dsw-alias-* / --dsw-specific-*\uFF09\uFF0C\u4E0D\u5199\u6B7B\u989C\u8272\u3001\n * \u4E0D\u5B9A\u4E49\u7B2C\u4E8C\u5957\u4E3B\u9898\u3002\u51E0\u4F55\u5BF9\u9F50\u539F\u751F\u300C\u8F68\u8FF9\u300D\u9875\u7B7E\uFF1A32px \u5DE5\u5177\u680F\u300130px \u5BC6\u96C6\u884C\u3001\n * 0.5px \u5206\u9694\u7EBF\uFF0C\u5E95\u90E8\u4E3A\u6D6E\u52A8 composer \u9884\u7559\u9AD8\u5EA6\u3002\n */\n\nbody:has([data-dsh-better-trajectory-view]) [data-width-handle] {\n  display: none;\n}\n\n[data-dsh-better-trajectory-view] {\n  --bt-accent: var(--dsw-alias-state-business-primary);\n  --bt-error: var(--dsw-alias-state-error-primary);\n  --bt-code-font: var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  width: 100%;\n  box-sizing: border-box;\n  isolation: isolate;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: var(--dsw-font-xs-13);\n}\n\n[data-dsh-better-trajectory-view] *,\n[data-dsh-better-trajectory-view] *::before,\n[data-dsh-better-trajectory-view] *::after {\n  box-sizing: border-box;\n}\n\n/* ---------------------------------- \u5DE5\u5177\u680F --------------------------------- */\n\n.bt-toolbar {\n  position: sticky;\n  top: 0;\n  z-index: 6;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  gap: 6px;\n  padding: 7px 10px 6px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt-toolbar-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n}\n\n.bt-search {\n  position: relative;\n  display: flex;\n  flex: 1 1 300px;\n  align-items: center;\n  gap: 6px;\n  min-width: 190px;\n  height: 30px;\n  padding: 0 8px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-specific-input-major);\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt-search:focus-within {\n  border-color: var(--dsw-alias-border-selected);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 12%, transparent);\n}\n\n.bt-search input {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xs-13);\n}\n\n.bt-search input::placeholder {\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt-kbd {\n  flex: none;\n  padding: 0 4px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: 4px;\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xxxs-11);\n  line-height: 15px;\n}\n\n.bt-icon-button {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt-icon-button:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt-icon-button:focus-visible,\n.bt-button:focus-visible,\n.bt-segment button:focus-visible,\n.bt-chip button:focus-visible,\n.bt-row:focus-visible,\n.bt-link-button:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 1px;\n}\n\n.bt-button {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  height: 26px;\n  padding: 0 9px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt-button:hover {\n    border-color: var(--dsw-alias-border-l4);\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt-button[data-active='true'] {\n  border-color: var(--dsw-alias-border-l4);\n  background: var(--dsw-alias-interactive-bg-active);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt-button[data-tone='danger'] {\n  color: var(--bt-error);\n}\n\n.bt-button:disabled {\n  color: var(--dsw-alias-label-dimmed);\n  cursor: not-allowed;\n}\n\n.bt-segment {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.bt-segment button {\n  height: 22px;\n  padding: 0 8px;\n  border: 0;\n  border-radius: calc(var(--dsw-radius-sm) - 2px);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt-segment button:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt-segment button[aria-pressed='true'] {\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: var(--dsw-elevation-stroke);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt-segment button[data-count='0'] {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.bt-segment .bt-count {\n  margin-left: 4px;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n\n.bt-segment button[aria-pressed='true'] .bt-count {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt-summary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-height: 20px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt-summary strong {\n  color: var(--dsw-alias-label-primary);\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n}\n\n.bt-summary .bt-error-count {\n  color: var(--bt-error);\n}\n\n.bt-summary-sep {\n  width: 1px;\n  height: 10px;\n  background: var(--dsw-alias-border-l3);\n}\n\n.bt-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 20px;\n  padding: 0 4px 0 7px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: 999px;\n  corner-shape: round;\n  background: var(--dsw-alias-bg-layer-2);\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxxs-11);\n  max-width: 260px;\n}\n\n.bt-chip-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt-chip button {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 15px;\n  height: 15px;\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  corner-shape: round;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt-chip button:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt-spacer {\n  flex: 1 1 auto;\n  min-width: 4px;\n}\n\n/* --------------------------------- \u4E0B\u62C9\u83DC\u5355 -------------------------------- */\n\n.bt-pop-wrap {\n  position: relative;\n  display: inline-flex;\n  flex: none;\n}\n\n.bt-pop {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  width: 286px;\n  max-width: min(86vw, 340px);\n  max-height: 380px;\n  padding: 6px;\n  overflow: hidden;\n  border-radius: var(--dsw-radius-lg);\n  background: var(--dsw-specific-menu);\n  backdrop-filter: var(--dsw-menu-backdrop-filter);\n  box-shadow: var(--dsw-elevation-panel);\n}\n\n.bt-pop[data-align='right'] {\n  right: 0;\n  left: auto;\n}\n\n.bt-pop-title {\n  padding: 2px 6px 6px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxxs-11);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.bt-pop-search {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  margin-bottom: 4px;\n  padding: 0 7px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-specific-input-major);\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt-pop-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt-pop-list {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) transparent;\n}\n\n.bt-pop-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  height: 28px;\n  padding: 0 7px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xxs-12);\n  text-align: left;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt-pop-item:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt-check {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: 4px;\n  color: transparent;\n}\n\n.bt-check[data-checked='true'] {\n  border-color: transparent;\n  background: var(--dsw-alias-button-primary-fill);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.bt-pop-name {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: var(--bt-code-font);\n  font-size: 11px;\n}\n\n.bt-pop-count {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n\n.bt-pop-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 4px;\n  border-top: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bt-link-button {\n  padding: 4px 6px;\n  border: 0;\n  border-radius: var(--dsw-radius-xs);\n  background: transparent;\n  color: var(--dsw-alias-link);\n  font: var(--dsw-font-xxs-12);\n  cursor: pointer;\n}\n\n.bt-link-button:hover {\n  text-decoration: underline dotted;\n  text-underline-offset: 3px;\n}\n\n/* ---------------------------------- \u4E3B\u4F53 ---------------------------------- */\n\n.bt-body {\n  position: relative;\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.bt-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n}\n\n.bt-columns {\n  display: grid;\n  flex: none;\n  grid-template-columns: 16px 80px 48px minmax(120px, 210px) minmax(160px, 1fr) 54px;\n  align-items: center;\n  gap: 8px;\n  min-height: 25px;\n  padding: 0 12px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xxxs-11);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.bt-columns span:nth-child(1) {\n  visibility: hidden;\n}\n\n.bt-list {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  padding: 2px 6px calc(var(--dsh-composer-height, 0px) + 20px);\n  scrollbar-width: thin;\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) transparent;\n}\n\n.bt-list::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.bt-list::-webkit-scrollbar-thumb {\n  border-radius: 999px;\n  background: var(--dsw-alias-scrollbar-bg-l1);\n}\n\n.bt-row {\n  display: grid;\n  grid-template-columns: 16px 80px 48px minmax(120px, 210px) minmax(160px, 1fr) 54px;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 30px;\n  padding: 3px 6px 3px calc(6px + var(--bt-depth, 0) * 14px);\n  border: 0;\n  border-radius: var(--dsw-radius-xs);\n  background: transparent;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n  font: var(--dsw-font-xxs-12);\n}\n\n@media (hover: hover) {\n  .bt-row:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt-row[aria-selected='true'] {\n  background: var(--dsw-alias-interactive-bg-active);\n  box-shadow: inset 2px 0 0 var(--bt-accent);\n}\n\n.bt-row[data-status='error'] {\n  --bt-accent: var(--bt-error);\n}\n\n.bt-row[data-status='running'] {\n  --bt-accent: var(--dsw-alias-state-business-primary);\n}\n\n.bt-row[data-status='interrupted'] {\n  --bt-accent: var(--dsw-alias-state-warn-primary);\n}\n\n.bt-dot {\n  justify-self: center;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  corner-shape: round;\n  background: var(--dsw-alias-label-tertiary);\n}\n\n.bt-row[data-status='ok'] .bt-dot {\n  background: var(--dsw-alias-state-success-primary);\n}\n\n.bt-row[data-status='error'] .bt-dot {\n  background: var(--bt-error);\n}\n\n.bt-row[data-status='running'] .bt-dot {\n  background: var(--dsw-alias-state-business-primary);\n}\n\n.bt-row[data-status='interrupted'] .bt-dot {\n  background: var(--dsw-alias-state-warn-primary);\n}\n\n.bt-time,\n.bt-turn,\n.bt-dur {\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font-family: var(--bt-code-font);\n  font-size: 10.5px;\n  font-variant-numeric: tabular-nums;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt-dur {\n  text-align: right;\n}\n\n.bt-name {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.bt-name-icon {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt-row[data-kind='tool'] .bt-name-icon {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt-row[data-status='error'] .bt-name-icon {\n  color: var(--bt-error);\n}\n\n.bt-name-text {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  font-weight: 500;\n  text-overflow: ellipsis;\n}\n\n.bt-row[data-kind='tool'] .bt-name-text {\n  font-family: var(--bt-code-font);\n  font-size: 11px;\n}\n\n.bt-row[data-kind='user'] .bt-name-text,\n.bt-row[data-kind='assistant'] .bt-name-text,\n.bt-row[data-kind='context'] .bt-name-text,\n.bt-row[data-kind='compaction'] .bt-name-text,\n.bt-row[data-kind='unknown'] .bt-name-text {\n  color: var(--dsw-alias-label-secondary);\n  font-weight: 400;\n}\n\n.bt-sub {\n  flex: none;\n  margin-right: 1px;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt-code {\n  flex: none;\n  max-width: 132px;\n  height: 16px;\n  padding: 0 4px;\n  overflow: hidden;\n  border-radius: 4px;\n  background: color-mix(in srgb, var(--bt-error) 11%, transparent);\n  color: var(--bt-error);\n  font-family: var(--bt-code-font);\n  font-size: 9.5px;\n  line-height: 16px;\n  text-overflow: ellipsis;\n}\n\n.bt-preview {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-secondary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt-row[data-kind='tool'] .bt-preview {\n  color: var(--dsw-alias-label-tertiary);\n  font-family: var(--bt-code-font);\n  font-size: 11px;\n}\n\n.bt-row[data-status='error'] .bt-preview,\n.bt-row[data-status='interrupted'] .bt-preview {\n  color: var(--bt-error);\n}\n\n.bt-row[data-status='running'] .bt-preview {\n  color: var(--dsw-alias-label-secondary);\n  font-style: italic;\n}\n\n/* --------------------------------- \u52A0\u8F7D\u66F4\u65E9 -------------------------------- */\n\n.bt-older {\n  display: flex;\n  justify-content: center;\n  padding: 6px 0 4px;\n}\n\n.bt-older-note {\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xxxs-11);\n}\n\n.bt-more {\n  display: flex;\n  justify-content: center;\n  padding: 8px 0 4px;\n}\n\n/* --------------------------------- \u8BE6\u60C5\u9762\u677F -------------------------------- */\n\n.bt-inspector {\n  display: flex;\n  flex: 0 0 min(44%, 560px);\n  flex-direction: column;\n  min-width: 320px;\n  min-height: 0;\n  border-left: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt-inspector-head {\n  display: flex;\n  flex: none;\n  align-items: center;\n  gap: 7px;\n  min-height: 34px;\n  padding: 4px 8px 4px 11px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bt-inspector-title {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-strong-13);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt-inspector-title[data-kind='tool'] {\n  font-family: var(--bt-code-font);\n  font-size: 12px;\n}\n\n.bt-inspector-scroll {\n  flex: 1;\n  min-height: 0;\n  padding: 10px 12px calc(var(--dsh-composer-height, 0px) + 20px);\n  overflow: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) transparent;\n}\n\n.bt-badge {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 3px;\n  height: 18px;\n  padding: 0 6px;\n  border-radius: 999px;\n  corner-shape: round;\n  background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 12%, transparent);\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxxs-11);\n  white-space: nowrap;\n}\n\n.bt-badge[data-status='error'],\n.bt-badge[data-status='interrupted'] {\n  background: color-mix(in srgb, var(--bt-error) 12%, transparent);\n  color: var(--bt-error);\n}\n\n.bt-badge[data-status='running'] {\n  background: color-mix(in srgb, var(--dsw-alias-state-business-primary) 11%, transparent);\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt-badge[data-status='ok'] {\n  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 11%, transparent);\n  color: var(--dsw-alias-state-success-primary);\n}\n\n.bt-meta {\n  display: grid;\n  grid-template-columns: 74px minmax(0, 1fr);\n  gap: 3px 10px;\n  margin: 0;\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt-meta dt {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt-meta dd {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt-meta dd[data-mono='true'] {\n  font-family: var(--bt-code-font);\n  font-size: 11px;\n}\n\n.bt-section {\n  margin-top: 14px;\n}\n\n.bt-section-head {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 22px;\n}\n\n.bt-section-title {\n  flex: 1;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-strong-12);\n}\n\n.bt-pre {\n  margin: 4px 0 0;\n  padding: 8px 10px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-markdown-code-block);\n  color: var(--dsw-alias-label-primary);\n  font-family: var(--bt-code-font);\n  font-size: 11px;\n  line-height: 18px;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bt-pre[data-wrap='false'] {\n  overflow-x: auto;\n  white-space: pre;\n}\n\n.bt-error-block {\n  margin: 4px 0 0;\n  padding: 8px 10px;\n  border-radius: var(--dsw-radius-sm);\n  background: color-mix(in srgb, var(--bt-error) 8%, transparent);\n  color: var(--bt-error);\n  font-family: var(--bt-code-font);\n  font-size: 11px;\n  line-height: 18px;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bt-note {\n  margin-top: 4px;\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xxxs-11);\n}\n\n.bt-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 14px;\n  padding-top: 10px;\n  border-top: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bt-empty {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 24px calc(var(--dsh-composer-height, 0px) + 32px);\n  text-align: center;\n}\n\n.bt-empty-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  margin-bottom: 2px;\n  border-radius: var(--dsw-radius-lg);\n  background: var(--dsw-alias-bg-layer-2);\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt-empty h2 {\n  margin: 0;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-strong-14);\n}\n\n.bt-empty p {\n  max-width: 420px;\n  margin: 0;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n}\n\n.bt-empty .bt-button {\n  margin-top: 4px;\n}\n\n.bt-toast {\n  position: absolute;\n  right: 12px;\n  bottom: calc(var(--dsh-composer-height, 0px) + 16px);\n  z-index: 30;\n  padding: 5px 11px;\n  border-radius: 999px;\n  corner-shape: round;\n  background: var(--dsw-alias-toast-bg);\n  color: var(--dsw-alias-toast-label);\n  box-shadow: var(--dsw-elevation-prominent);\n  font: var(--dsw-font-xxs-12);\n  animation: bt-toast-in 140ms ease-out;\n}\n\n/* \u76EE\u524D\u53EA\u5728\u300C\u7B5B\u9009\u7ED3\u679C\u4E3A\u7A7A\u300D\u548C\u590D\u5236\u53CD\u9988\u91CC\u7528\uFF1B\u4E0D\u5F15\u5165\u5E03\u5C40\u52A8\u753B\u3002 */\n@keyframes bt-toast-in {\n  from { opacity: 0; transform: translateY(3px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.bt-spin {\n  animation: bt-spin 0.9s linear infinite;\n}\n\n@keyframes bt-spin {\n  to { transform: rotate(360deg); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt-spin {\n    animation: none;\n  }\n\n  .bt-toast {\n    animation: none;\n  }\n}\n\n@media (max-width: 920px) {\n  .bt-columns,\n  .bt-row {\n    grid-template-columns: 16px 46px minmax(100px, 170px) minmax(120px, 1fr);\n  }\n\n  .bt-columns span:nth-child(2),\n  .bt-columns span:nth-child(6),\n  .bt-time,\n  .bt-dur {\n    display: none;\n  }\n\n  .bt-inspector {\n    position: absolute;\n    inset: 0;\n    z-index: 12;\n    flex-basis: auto;\n    width: auto;\n    min-width: 0;\n    box-shadow: var(--dsw-elevation-prominent);\n  }\n}\n\n@media (max-width: 620px) {\n  .bt-columns,\n  .bt-row {\n    grid-template-columns: 14px 40px minmax(80px, 140px) minmax(90px, 1fr);\n    gap: 6px;\n    padding-right: 4px;\n  }\n\n  .bt-toolbar {\n    padding-right: 6px;\n    padding-left: 6px;\n  }\n\n  .bt-search {\n    flex-basis: 100%;\n  }\n\n  .bt-kbd {\n    display: none;\n  }\n}\n/* \u539F\u751F select \u53EA\u505A\u8F7B\u91CF\u8D34\u5408\uFF1A\u4FDD\u7559\u7CFB\u7EDF\u4E0B\u62C9\u884C\u4E3A\uFF0C\u907F\u514D\u518D\u9020\u4E00\u5957\u5F39\u5C42\u3002 */\n.bt-select {\n  flex: none;\n  max-width: 168px;\n  height: 26px;\n  padding: 0 22px 0 8px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background-color: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  cursor: pointer;\n}\n\n.bt-select:hover {\n  border-color: var(--dsw-alias-border-l4);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt-select:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 1px;\n}\n\n/* \u641C\u7D22\u6846\u81EA\u5E26\u6E05\u9664\u6309\u94AE\u4F1A\u4E0E\u6211\u4EEC\u7684 \xD7 \u91CD\u590D\u3002 */\n.bt-search input::-webkit-search-cancel-button,\n.bt-search input::-webkit-search-decoration {\n  display: none;\n  appearance: none;\n}\n\n.bt-search input {\n  appearance: none;\n}\n\n.bt-pop-item:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt-link-button[aria-pressed='true'] {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n\n/* \u6298\u53E0\u7684\u5143\u6570\u636E\uFF1A\u9ED8\u8BA4\u6536\u8D77\uFF0C\u907F\u514D\u5728\u7ED3\u679C\u5F88\u957F\u65F6\u518D\u91CD\u590D\u4E00\u4EFD\u7ED3\u6784\u503C\u3002 */\n.bt-details {\n  margin-top: 14px;\n}\n\n.bt-details > summary {\n  cursor: pointer;\n  list-style: none;\n}\n\n.bt-details > summary::-webkit-details-marker {\n  display: none;\n}\n\n.bt-details > summary::before {\n  content: '\u25B8';\n  display: inline-block;\n  width: 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 9px;\n  transition: transform 120ms ease;\n}\n\n.bt-details[open] > summary::before {\n  transform: rotate(90deg);\n}\n";

// src/client/index.tsx
var inject = ["slots", "locale", "sessions", "uiConversation"];
var name = "dsh-better-trajectory-client";
var VIEW_ID = "better-trajectory";
function installStyles() {
  const element = document.createElement("style");
  element.dataset.betterTrajectory = "";
  element.textContent = styles_default;
  document.head.appendChild(element);
  return () => {
    element.remove();
  };
}
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "better-trajectory: dictionaries");
  ctx.effect(installStyles, "better-trajectory: styles");
  const t = ctx.locale.bind(NS);
  ctx.slots.inject("conversation.view", () => ctx.slots.register({
    name: "conversation.view",
    id: VIEW_ID,
    order: 11,
    locale: NS,
    label: () => t("view.label"),
    // 会话级 props：只补「加载更早」；`useTrajectory` 由内置轨迹插件的
    // uiSession.provide 提供，不需要在这里重复声明（重复会抛 duplicate hook）。
    inject: (sessionId) => ({
      loadOlder: async () => {
        const sessions = ctx.get("sessions");
        const session = sessions?.binding(sessionId)?.session;
        if (session === void 0 || typeof session.loadOlder !== "function") return false;
        const conversation = ctx.get("uiConversation");
        const target = conversation?.binding(sessionId)?.target("trajectory");
        if (target === void 0) return false;
        const before = target.getSnapshot();
        await session.loadOlder();
        return target.getSnapshot() !== before;
      }
    })
  }, BetterTrajectoryView));
}
var index_default = { name, inject, apply };
return module.exports; } });
