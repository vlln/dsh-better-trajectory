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
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);

// src/client/locales.ts
var NS = "better-trajectory";
var zh = {
  "query.placeholder": "\u7B5B\u9009\uFF0C\u5982 tool:bash status:error ms:>1000",
  "query.clear": "\u6E05\u7A7A\u67E5\u8BE2",
  "query.suggestions": "\u7B5B\u9009\u5EFA\u8BAE",
  "query.groupTools": "\u5DE5\u5177",
  "query.groupStatus": "\u72B6\u6001",
  "query.groupTurn": "\u8F6E\u6B21",
  "query.groupSlow": "\u8017\u65F6",
  "query.quickErrors": "\u9519\u8BEF",
  "query.quickRunning": "\u8FD0\u884C\u4E2D",
  "query.quickSlow": "\u6162",
  "query.flat": "\u5E73\u94FA",
  "query.flatHint": "\u53EA\u663E\u793A\u547D\u4E2D\u7684\u5DE5\u5177\u8C03\u7528\uFF0C\u4E0D\u4FDD\u7559\u6D88\u606F\u4E0E\u56DE\u5408\u5934",
  "query.status.error": "\u9519\u8BEF",
  "query.status.running": "\u8FD0\u884C\u4E2D",
  "query.status.ok": "\u6210\u529F",
  "query.summary": "\u547D\u4E2D {matched} / {total} \u4E2A\u5DE5\u5177\u8C03\u7528",
  "query.hidden": "{count} \u4E2A\u88AB\u8FC7\u6EE4",
  "query.showAll": "\u663E\u793A\u5168\u90E8",
  "query.text": "\u6587\u672C",
  "query.removeToken": "\u79FB\u9664 {token}",
  "view.label": "\u8F68\u8FF9+",
  "view.missingHook.title": "\u8BFB\u4E0D\u5230\u8F68\u8FF9\u6570\u636E",
  "view.missingHook.body": "Better Trajectory \u590D\u7528\u5185\u7F6E\u300C\u8F68\u8FF9\u300D\u7684\u5FEB\u7167\u3002\u5F53\u524D profile \u6CA1\u6709\u52A0\u8F7D\u5185\u7F6E\u8F68\u8FF9\u63D2\u4EF6\uFF0C\u6240\u4EE5\u6CA1\u6709\u53EF\u7B5B\u9009\u7684\u6570\u636E\u3002",
  "view.missingNative.title": "\u627E\u4E0D\u5230\u5185\u7F6E\u8F68\u8FF9\u89C6\u56FE",
  "view.missingNative.body": "\u5185\u7F6E Trajectory \u7EC4\u4EF6\u5C1A\u672A\u6CE8\u518C\u3002\u8BF7\u786E\u8BA4 @deepseek-ai/dsh-client-ui-trajectory \u5DF2\u542F\u7528\uFF0C\u7136\u540E\u91CD\u65B0\u6253\u5F00\u4F1A\u8BDD\u3002",
  "filter.aria": "\u8F68\u8FF9\u7B5B\u9009\u680F",
  "filter.lead": "\u7B5B\u9009\u5DE5\u5177",
  "filter.scopeHint": "\u53EA\u7B5B\u9009\u5DE5\u5177\u8C03\u7528\uFF1B\u6D88\u606F\u3001\u56DE\u5408\u5934\u548C\u539F\u751F\u65F6\u95F4\u8F74\u4FDD\u7559\u4E3A\u4E0A\u4E0B\u6587",
  "filter.status.aria": "\u5DE5\u5177\u72B6\u6001",
  "filter.status.all": "\u5168\u90E8",
  "filter.status.error": "\u9519\u8BEF",
  "filter.status.running": "\u8FD0\u884C\u4E2D",
  "filter.tools": "\u5DE5\u5177",
  "filter.tools.selected": "\u5DE5\u5177 \xB7 {count}",
  "filter.tools.title": "\u6309\u5DE5\u5177\u540D\u7B5B\u9009",
  "filter.tools.aria": "\u6309\u5DE5\u5177\u540D\u7B5B\u9009",
  "filter.tools.search": "\u8FC7\u6EE4\u5DE5\u5177\u540D\u2026",
  "filter.tools.empty": "\u6CA1\u6709\u5339\u914D\u7684\u5DE5\u5177\u540D",
  "filter.tools.clear": "\u6E05\u9664\u5DE5\u5177\u7B5B\u9009",
  "filter.turn.aria": "\u6309\u56DE\u5408\u7B5B\u9009",
  "filter.turn.all": "\u5168\u90E8\u56DE\u5408",
  "filter.turn.option": "\u56DE\u5408 {turn} \xB7 {count}",
  "filter.summary": "{matched} / {total} \u4E2A\u5DE5\u5177\u8C03\u7528",
  "filter.clear": "\u6E05\u9664\u7B5B\u9009",
  "filter.duration.aria": "\u6309\u8017\u65F6\u7B5B\u9009",
  "filter.duration.all": "\u5168\u90E8\u8017\u65F6",
  "filter.duration.100": "\u2265100ms",
  "filter.duration.1000": "\u22651s",
  "filter.duration.5000": "\u22655s",
  "filter.code.aria": "\u6309\u9519\u8BEF\u7801\u7B5B\u9009",
  "filter.code.all": "\u5168\u90E8\u9519\u8BEF\u7801",
  "debug.col.code": "\u9519\u8BEF\u7801",
  "debug.col.tool": "\u5DE5\u5177",
  "debug.col.turn": "\u56DE\u5408",
  "debug.col.duration": "\u8017\u65F6",
  "debug.col.error": "\u9519\u8BEF",
  "debug.col.calls": "\u8C03\u7528",
  "debug.col.errors": "\u9519\u8BEF",
  "debug.col.p95": "p95",
  "debug.col.total": "\u603B\u8017\u65F6",
  "debug.col.args": "\u53C2\u6570",
  "debug.openJson": "\u5728 JSON \u67E5\u770B\u5668\u4E2D\u6253\u5F00",
  "json.aria": "JSON \u67E5\u770B\u5668",
  "json.tab.args": "\u53C2\u6570",
  "json.tab.result": "\u7ED3\u679C",
  "json.tab.schema": "Schema",
  "json.expandAll": "\u5C55\u5F00\u5168\u90E8",
  "json.collapseAll": "\u6536\u8D77\u5168\u90E8",
  "json.wide": "\u52A0\u5BBD",
  "json.close": "\u5173\u95ED JSON \u67E5\u770B\u5668",
  "json.search": "\u5728 JSON \u4E2D\u641C\u7D22\u2026",
  "json.raw": "\u539F\u59CB",
  "json.pretty": "\u6811\u5F62",
  "debug.toggle": "\u8C03\u8BD5\u9762\u677F",
  "debug.aria": "\u8F68\u8FF9\u8C03\u8BD5\u9762\u677F",
  "debug.tabsAria": "\u8C03\u8BD5\u9762\u677F\u89C6\u56FE",
  "debug.tab.errors": "\u9519\u8BEF",
  "debug.tab.tools": "\u5DE5\u5177",
  "debug.tab.slowest": "\u6700\u6162",
  "debug.close": "\u6536\u8D77\u8C03\u8BD5\u9762\u677F",
  "debug.export": "\u5BFC\u51FA",
  "debug.export.markdown": "\u590D\u5236\u4E3A Markdown",
  "debug.export.json": "\u590D\u5236\u4E3A JSON",
  "debug.export.download": "\u4E0B\u8F7D JSON",
  "debug.export.copied": "\u5DF2\u590D\u5236",
  "debug.export.failed": "\u590D\u5236\u5931\u8D25",
  "debug.errors.empty": "\u5F53\u524D\u7B5B\u9009\u4E0B\u6CA1\u6709\u9519\u8BEF\u8C03\u7528",
  "debug.tools.empty": "\u6CA1\u6709\u5DE5\u5177\u8C03\u7528",
  "debug.slowest.empty": "\u5F53\u524D\u7B5B\u9009\u4E0B\u6CA1\u6709\u5E26\u8017\u65F6\u7684\u8C03\u7528",
  "debug.jump": "\u5728\u539F\u751F\u8F68\u8FF9\u4E2D\u5B9A\u4F4D\u8FD9\u6761\u8C03\u7528",
  "debug.tools.toggle": "\u5207\u6362\u8FD9\u4E2A\u5DE5\u5177\u540D\u7B5B\u9009",
  "debug.tools.calls": "{count} \u6B21",
  "debug.tools.errors": "{count} \u9519",
  "debug.tools.p95": "p95 {value}",
  "debug.tools.total": "\u603B {value}"
};
var en = {
  "query.placeholder": "Filter, e.g. tool:bash status:error ms:>1000",
  "query.clear": "Clear query",
  "query.suggestions": "Filter suggestions",
  "query.groupTools": "Tool",
  "query.groupStatus": "Status",
  "query.groupTurn": "Turn",
  "query.groupSlow": "Duration",
  "query.quickErrors": "Errors",
  "query.quickRunning": "Running",
  "query.quickSlow": "Slow",
  "query.flat": "Flat",
  "query.flatHint": "Only matching tool calls, without messages or turn headers",
  "query.status.error": "Error",
  "query.status.running": "Running",
  "query.status.ok": "OK",
  "query.summary": "{matched} / {total} tool calls",
  "query.hidden": "{count} filtered out",
  "query.showAll": "Show all",
  "query.text": "Text",
  "query.removeToken": "Remove {token}",
  "view.label": "Trajectory+",
  "view.missingHook.title": "Trajectory data is unavailable",
  "view.missingHook.body": "Better Trajectory reuses the built-in Trajectory snapshot. The built-in trajectory plugin is not loaded in this profile, so there is nothing to filter.",
  "view.missingNative.title": "Built-in Trajectory view not found",
  "view.missingNative.body": "The built-in Trajectory component is not registered. Make sure @deepseek-ai/dsh-client-ui-trajectory is enabled, then reopen the session.",
  "filter.aria": "Trajectory filter bar",
  "filter.lead": "Filter tools",
  "filter.scopeHint": "Filters tool calls only; messages, turn headers and the native timeline stay as context",
  "filter.status.aria": "Tool status",
  "filter.status.all": "All",
  "filter.status.error": "Errors",
  "filter.status.running": "Running",
  "filter.tools": "Tools",
  "filter.tools.selected": "Tools \xB7 {count}",
  "filter.tools.title": "Filter by tool name",
  "filter.tools.aria": "Filter by tool name",
  "filter.tools.search": "Filter tool names\u2026",
  "filter.tools.empty": "No matching tool name",
  "filter.tools.clear": "Clear tool filter",
  "filter.turn.aria": "Filter by turn",
  "filter.turn.all": "All turns",
  "filter.turn.option": "Turn {turn} \xB7 {count}",
  "filter.summary": "{matched} / {total} tool calls",
  "filter.clear": "Clear filters",
  "filter.duration.aria": "Filter by duration",
  "filter.duration.all": "Any duration",
  "filter.duration.100": "\u2265100ms",
  "filter.duration.1000": "\u22651s",
  "filter.duration.5000": "\u22655s",
  "filter.code.aria": "Filter by error code",
  "filter.code.all": "All error codes",
  "debug.col.code": "Code",
  "debug.col.tool": "Tool",
  "debug.col.turn": "Turn",
  "debug.col.duration": "Took",
  "debug.col.error": "Error",
  "debug.col.calls": "Calls",
  "debug.col.errors": "Errors",
  "debug.col.p95": "p95",
  "debug.col.total": "Total",
  "debug.col.args": "Arguments",
  "debug.openJson": "Open in JSON viewer",
  "json.aria": "JSON viewer",
  "json.tab.args": "Arguments",
  "json.tab.result": "Result",
  "json.tab.schema": "Schema",
  "json.expandAll": "Expand all",
  "json.collapseAll": "Collapse all",
  "json.wide": "Widen",
  "json.close": "Close JSON viewer",
  "json.search": "Search in JSON\u2026",
  "json.raw": "Raw",
  "json.pretty": "Tree",
  "debug.toggle": "Debug panel",
  "debug.aria": "Trajectory debug panel",
  "debug.tabsAria": "Debug panel views",
  "debug.tab.errors": "Errors",
  "debug.tab.tools": "Tools",
  "debug.tab.slowest": "Slowest",
  "debug.close": "Collapse debug panel",
  "debug.export": "Export",
  "debug.export.markdown": "Copy as Markdown",
  "debug.export.json": "Copy as JSON",
  "debug.export.download": "Download JSON",
  "debug.export.copied": "Copied",
  "debug.export.failed": "Copy failed",
  "debug.errors.empty": "No failing calls under the current filters",
  "debug.tools.empty": "No tool calls",
  "debug.slowest.empty": "No timed calls under the current filters",
  "debug.jump": "Locate this call in the native trajectory",
  "debug.tools.toggle": "Toggle this tool-name filter",
  "debug.tools.calls": "{count} calls",
  "debug.tools.errors": "{count} err",
  "debug.tools.p95": "p95 {value}",
  "debug.tools.total": "total {value}"
};

// src/client/superset.tsx
var import_react6 = require("react");

// src/client/filter.mjs
function emptyFilters() {
  return { tools: [], status: "all", turn: null, minDuration: null, errorCode: null };
}
function isActive(filters) {
  return filters.tools.length > 0 || filters.status !== "all" || filters.turn !== null || filters.minDuration !== null || filters.errorCode !== null;
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function asString(value) {
  return typeof value === "string" ? value : "";
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
function contentText(content) {
  if (!Array.isArray(content)) return "";
  const parts = [];
  for (const block of content) {
    if (!isObject(block)) continue;
    if (typeof block.text === "string") parts.push(block.text);
    else if (block.type === "image") parts.push("[image]");
    else if (block.type === "file") parts.push("[file]");
    else if (block.type === "tool-call") parts.push(`[tool-call ${asString(block.name)}]`);
    else parts.push(`[${asString(block.type) || "block"}]`);
  }
  return parts.join("\n");
}
function statusOf(block) {
  if (!isObject(block) || block.kind !== "tool-result") return "running";
  if (block.isError !== true) return "ok";
  return block.error?.code === "interrupted" ? "interrupted" : "error";
}
function isErrorStatus(status) {
  return status === "error" || status === "interrupted";
}
function indexNodeTurns(snapshot) {
  const result = /* @__PURE__ */ new Map();
  const locations = snapshot.eventLocations instanceof Map ? snapshot.eventLocations : /* @__PURE__ */ new Map();
  const nodes = Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : [];
  let latest = {};
  for (const node of nodes) {
    if (!isObject(node)) continue;
    const location = locationOf(locations.get(node.seq));
    if (location.turn !== void 0) latest = location;
    const turn = typeof node.turn === "number" ? node.turn : location.turn ?? latest.turn;
    const step = typeof node.step === "number" ? node.step : location.step ?? latest.step;
    result.set(node.seq, {
      ...turn === void 0 ? {} : { turn },
      ...step === void 0 ? {} : { step }
    });
  }
  return result;
}
function buildToolIndex(snapshot) {
  const records = [];
  const byKey = /* @__PURE__ */ new Map();
  const byName = /* @__PURE__ */ new Map();
  const turns = /* @__PURE__ */ new Map();
  const nodeTurns = indexNodeTurns(snapshot);
  const keyOf = (turn, callId) => `${turn ?? ""}\0${callId}`;
  const visit = (block, fallbackTurn, parentCallId, depth, fallbackStep) => {
    if (!isObject(block)) return;
    const callId = asString(block.callId);
    const name2 = asString(block.name) || asString(block.call?.name);
    const status = statusOf(block);
    const turn = typeof block.turn === "number" ? block.turn : fallbackTurn;
    const step = typeof block.step === "number" ? block.step : fallbackStep;
    const argsRaw = asString(block.call?.argsRaw) || asString(block.argsRaw);
    const result = contentText(block.content);
    const errorObject = isObject(block.error) ? block.error : void 0;
    const errorName = asString(errorObject?.name);
    const errorCode = asString(errorObject?.code);
    const errorReason = asString(errorObject?.reason);
    const errorText = [errorName, errorCode, errorReason].filter(Boolean).join(" \xB7 ");
    const started = typeof block.callTime === "number" ? block.callTime : block.time;
    const durationMs = typeof block.callTime === "number" && typeof block.time === "number" ? Math.max(0, block.time - block.callTime) : void 0;
    const record2 = {
      callId,
      name: name2,
      status,
      depth,
      ...turn === void 0 ? {} : { turn },
      ...step === void 0 ? {} : { step },
      ...parentCallId === void 0 ? {} : { parentCallId },
      ...started === void 0 ? {} : { time: started },
      ...durationMs === void 0 ? {} : { durationMs },
      ...argsRaw === "" ? {} : { args: argsRaw },
      ...result === "" ? {} : { result },
      ...errorName === "" ? {} : { errorName },
      ...errorCode === "" ? {} : { errorCode },
      ...errorText === "" ? {} : { errorText }
    };
    records.push(record2);
    if (callId !== "") byKey.set(keyOf(turn, callId), record2);
    if (name2 !== "") byName.set(name2, (byName.get(name2) ?? 0) + 1);
    if (turn !== void 0) turns.set(turn, (turns.get(turn) ?? 0) + 1);
    const subCalls = Array.isArray(block.subCalls) ? block.subCalls : [];
    for (const sub of subCalls) visit(sub, turn, callId || parentCallId, depth + 1, step);
  };
  const nodes = Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : [];
  for (const node of nodes) {
    if (!isObject(node) || node.kind !== "tool-result") continue;
    visit(node, nodeTurns.get(node.seq)?.turn, void 0, 0, nodeTurns.get(node.seq)?.step);
  }
  const running = Array.isArray(snapshot.runningCalls) ? snapshot.runningCalls : [];
  for (const call of running) {
    visit(call, nodeTurns.get(call.seq)?.turn ?? call.turn, void 0, 0, call.step ?? nodeTurns.get(call.seq)?.step);
  }
  for (const node of nodes) {
    if (!isObject(node) || node.kind !== "assistant") continue;
    const blocks = Array.isArray(node.blocks) ? node.blocks : [];
    for (const block of blocks) {
      if (!isObject(block) || block.kind !== "tool-call") continue;
      const callId = asString(block.callId);
      if (callId === "" || byKey.has(keyOf(node.turn, callId))) continue;
      const record2 = {
        callId,
        name: asString(block.name),
        status: "ok",
        depth: 0,
        ...typeof node.turn === "number" ? { turn: node.turn } : {},
        ...typeof node.step === "number" ? { step: node.step } : {},
        ...asString(block.argsRaw) === "" ? {} : { args: asString(block.argsRaw) }
      };
      records.push(record2);
      byKey.set(keyOf(node.turn, callId), record2);
      if (record2.name !== "") byName.set(record2.name, (byName.get(record2.name) ?? 0) + 1);
      if (record2.turn !== void 0) turns.set(record2.turn, (turns.get(record2.turn) ?? 0) + 1);
    }
  }
  const partial = isObject(snapshot.partial) ? snapshot.partial : void 0;
  if (partial !== void 0) {
    for (const block of Array.isArray(partial.blocks) ? partial.blocks : []) {
      if (!isObject(block) || block.kind !== "tool-call") continue;
      const callId = asString(block.callId);
      if (callId === "" || byKey.has(keyOf(partial.turn, callId))) continue;
      const record2 = {
        callId,
        name: asString(block.name),
        status: "running",
        depth: 0,
        ...typeof partial.turn === "number" ? { turn: partial.turn } : {},
        ...asString(block.argsRaw) === "" ? {} : { args: asString(block.argsRaw) }
      };
      records.push(record2);
      byKey.set(keyOf(partial.turn, callId), record2);
      if (record2.name !== "") byName.set(record2.name, (byName.get(record2.name) ?? 0) + 1);
      if (record2.turn !== void 0) turns.set(record2.turn, (turns.get(record2.turn) ?? 0) + 1);
    }
  }
  return { records, byKey, byName, turns, nodeTurns, keyOf };
}
function matchesRecord(record2, filters) {
  if (!isObject(record2)) return false;
  if (filters.tools.length > 0 && !filters.tools.includes(record2.name)) return false;
  if (filters.status === "error" && !isErrorStatus(record2.status)) return false;
  if (filters.status === "running" && record2.status !== "running") return false;
  if (filters.turn !== null && record2.turn !== filters.turn) return false;
  if (filters.errorCode !== null && record2.errorCode !== filters.errorCode) return false;
  if (filters.minDuration !== null && (record2.durationMs ?? -1) < filters.minDuration) return false;
  return true;
}
function collectStats(index, filters) {
  const toolCounts = /* @__PURE__ */ new Map();
  const codeCounts = /* @__PURE__ */ new Map();
  let errors = 0;
  let running = 0;
  let matched = 0;
  const turnCounts = /* @__PURE__ */ new Map();
  for (const record2 of index.records) {
    const turnOk = filters.turn === null || record2.turn === filters.turn;
    if (turnOk && record2.name !== "") {
      toolCounts.set(record2.name, (toolCounts.get(record2.name) ?? 0) + 1);
    }
    const toolsOk = filters.tools.length === 0 || filters.tools.includes(record2.name);
    const otherOk = turnOk && (filters.errorCode === null || record2.errorCode === filters.errorCode) && (filters.minDuration === null || (record2.durationMs ?? -1) >= filters.minDuration);
    if (toolsOk && otherOk) {
      if (isErrorStatus(record2.status)) errors += 1;
      if (record2.status === "running") running += 1;
    }
    if (toolsOk && turnOk && isErrorStatus(record2.status) && record2.errorCode) {
      codeCounts.set(record2.errorCode, (codeCounts.get(record2.errorCode) ?? 0) + 1);
    }
    if (toolsOk && record2.turn !== void 0) {
      turnCounts.set(record2.turn, (turnCounts.get(record2.turn) ?? 0) + 1);
    }
    if (matchesRecord(record2, filters)) matched += 1;
  }
  return {
    tools: [...toolCounts.entries()].map(([name2, count]) => ({ name: name2, count })).sort((left, right) => right.count - left.count || left.name.localeCompare(right.name)),
    errors,
    running,
    matched,
    total: index.records.length,
    turns: [...turnCounts.entries()].map(([turn, count]) => ({ turn, count })).sort((left, right) => left.turn - right.turn),
    errorCodes: [...codeCounts.entries()].map(([code, count]) => ({ code, count })).sort((left, right) => right.count - left.count || left.code.localeCompare(right.code))
  };
}
function summarizeTools(index) {
  const map = /* @__PURE__ */ new Map();
  for (const record2 of index.records) {
    if (record2.name === "") continue;
    let item = map.get(record2.name);
    if (item === void 0) {
      item = { name: record2.name, calls: 0, errors: 0, running: 0, totalMs: 0, durations: [] };
      map.set(record2.name, item);
    }
    item.calls += 1;
    if (isErrorStatus(record2.status)) item.errors += 1;
    if (record2.status === "running") item.running += 1;
    if (typeof record2.durationMs === "number") {
      item.totalMs += record2.durationMs;
      item.durations.push(record2.durationMs);
    }
  }
  return [...map.values()].map((item) => {
    const durations = [...item.durations].sort((left, right) => left - right);
    const at = (ratio) => durations.length === 0 ? null : durations[Math.min(durations.length - 1, Math.ceil((durations.length - 1) * ratio))];
    return {
      name: item.name,
      calls: item.calls,
      errors: item.errors,
      running: item.running,
      totalMs: item.durations.length === 0 ? null : item.totalMs,
      avgMs: item.durations.length === 0 ? null : item.totalMs / item.durations.length,
      p95Ms: at(0.95)
    };
  }).sort((left, right) => right.calls - left.calls || left.name.localeCompare(right.name));
}
function slowestCalls(index, filters, limit = 12) {
  return index.records.filter((record2) => matchesRecord(record2, filters) && typeof record2.durationMs === "number").sort((left, right) => (right.durationMs ?? 0) - (left.durationMs ?? 0)).slice(0, limit);
}
function errorCalls(index, filters) {
  return index.records.filter((record2) => matchesRecord(record2, filters) && isErrorStatus(record2.status)).sort((left, right) => (left.turn ?? 0) - (right.turn ?? 0) || (left.time ?? 0) - (right.time ?? 0));
}
function filteredCalls(index, filters) {
  return index.records.filter((record2) => matchesRecord(record2, filters));
}
function filterSnapshot(snapshot, filters, index = buildToolIndex(snapshot)) {
  if (!isActive(filters)) return snapshot;
  const nodeTurns = index.nodeTurns;
  const recordFor = (block, fallbackTurn) => {
    const callId = asString(block?.callId);
    const known = callId === "" ? void 0 : index.byKey.get(index.keyOf(fallbackTurn, callId));
    if (known !== void 0) return known;
    return {
      callId,
      name: asString(block?.name) || asString(block?.call?.name),
      status: statusOf(block),
      ...fallbackTurn === void 0 ? {} : { turn: fallbackTurn }
    };
  };
  const filterToolBlock = (block, fallbackTurn) => {
    if (!isObject(block)) return null;
    const record2 = recordFor(block, fallbackTurn);
    const subCalls = (Array.isArray(block.subCalls) ? block.subCalls : []).map((sub) => filterToolBlock(sub, record2.turn ?? fallbackTurn)).filter((sub) => sub !== null);
    if (!matchesRecord(record2, filters) && subCalls.length === 0) return null;
    return { ...block, subCalls };
  };
  const filterAssistant = (node) => {
    const blocks = (Array.isArray(node.blocks) ? node.blocks : []).filter((block) => {
      if (!isObject(block) || block.kind !== "tool-call") return true;
      return matchesRecord(recordFor(
        { callId: block.callId, name: block.name },
        node.turn
      ), filters);
    });
    if (blocks.length === 0) return null;
    return { ...node, blocks };
  };
  const nodes = (Array.isArray(snapshot.eventNodes) ? snapshot.eventNodes : []).flatMap((node) => {
    if (!isObject(node)) return [];
    const info = nodeTurns.get(node.seq) ?? {};
    const turn = typeof node.turn === "number" ? node.turn : info.turn;
    if (filters.turn !== null && turn !== filters.turn) return [];
    if (node.kind === "tool-result") {
      const filtered = filterToolBlock(node, turn);
      return filtered === null ? [] : [filtered];
    }
    if (node.kind === "assistant") {
      const filtered = filterAssistant(node);
      return filtered === null ? [] : [filtered];
    }
    if (node.kind === "turn-error" || node.kind === "model-retry" || node.kind === "turn-max-tokens") {
      return [];
    }
    return [node];
  });
  const runningCalls = (Array.isArray(snapshot.runningCalls) ? snapshot.runningCalls : []).map((call) => filterToolBlock(call, call.turn)).filter((call) => call !== null);
  let partial = snapshot.partial;
  if (partial !== null && partial !== void 0) {
    if (filters.turn !== null && partial.turn !== filters.turn) partial = null;
    else {
      const blocks = (Array.isArray(partial.blocks) ? partial.blocks : []).filter((block) => {
        if (!isObject(block) || block.kind !== "tool-call") return true;
        return matchesRecord(recordFor(
          { callId: block.callId, name: block.name },
          partial.turn
        ), filters);
      });
      partial = blocks.length === 0 ? null : { ...partial, blocks };
    }
  }
  const requests = filters.turn === null ? snapshot.requests : (Array.isArray(snapshot.requests) ? snapshot.requests : []).filter((request) => request.turn === filters.turn);
  return {
    ...snapshot,
    eventNodes: nodes,
    runningCalls,
    requests,
    partial,
    // 初始系统提示不属于任何回合，筛选时隐藏，避免占据首行。
    systemPrompts: void 0
  };
}

// src/client/export.mjs
function durationText(ms) {
  if (typeof ms !== "number" || !Number.isFinite(ms)) return "";
  if (ms < 1e3) return `${Math.round(ms)}ms`;
  if (ms < 6e4) return `${(ms / 1e3).toFixed(ms < 1e4 ? 1 : 0)}s`;
  return `${Math.floor(ms / 6e4)}m${String(Math.round(ms % 6e4 / 1e3)).padStart(2, "0")}s`;
}
function oneLine(value, max = 180) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length > max ? `${text.slice(0, max)}\u2026` : text;
}
function cell(value) {
  return String(value ?? "").replace(/\r?\n/g, " ").replace(/\|/g, "\\|").trim();
}
function jsonRecord(record2, index) {
  return {
    index: index + 1,
    callId: record2.callId ?? "",
    name: record2.name ?? "",
    status: record2.status ?? "",
    turn: record2.turn ?? null,
    step: record2.step ?? null,
    durationMs: record2.durationMs ?? null,
    errorName: record2.errorName ?? "",
    errorCode: record2.errorCode ?? "",
    error: record2.errorText ?? "",
    args: record2.args ?? "",
    result: record2.result ?? ""
  };
}
function recordsToJson(records, meta = {}) {
  return JSON.stringify({
    format: "dsh-better-trajectory/tool-calls/v1",
    sessionId: meta.sessionId ?? null,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    filter: meta.filter ?? "",
    count: records.length,
    records: records.map(jsonRecord)
  }, null, 2);
}
function recordsToMarkdown(records, meta = {}) {
  const lines = [
    `# Better Trajectory \u2014 ${records.length} tool call${records.length === 1 ? "" : "s"}`,
    "",
    `- session: \`${meta.sessionId ?? "unknown"}\``,
    `- filter: ${meta.filter ? `\`${meta.filter}\`` : "\u2014"}`,
    `- exported: ${(/* @__PURE__ */ new Date()).toISOString()}`,
    "",
    "| # | turn/step | tool | status | took | code | arguments / result |",
    "|---|---|---|---|---|---|---|"
  ];
  for (const [index, record2] of records.entries()) {
    const summary = record2.errorText || record2.args || record2.result || "";
    lines.push(`| ${index + 1} | ${cell(turnOf(record2))} | ${cell(record2.name)} | ${cell(record2.status)} | ${cell(durationText(record2.durationMs))} | ${cell(record2.errorCode)} | ${cell(oneLine(summary, 200))} |`);
  }
  const failures = records.filter((record2) => record2.status === "error" || record2.status === "interrupted");
  if (failures.length > 0) {
    lines.push("", "## Failures", "");
    for (const [index, record2] of failures.entries()) {
      lines.push(`### ${index + 1}. ${record2.name || "tool"} \u2014 ${record2.errorCode || record2.status}`);
      if (record2.errorText) lines.push("", "```text", record2.errorText, "```");
      if (record2.args) lines.push("", "**Arguments**", "", "```json", record2.args, "```");
      if (record2.result) lines.push("", "**Result**", "", "```text", record2.result, "```");
      lines.push("");
    }
  }
  return lines.join("\n");
}
function turnOf(record2) {
  if (typeof record2.turn !== "number") return "\u2014";
  return typeof record2.step === "number" ? `${record2.turn}/${record2.step}` : String(record2.turn);
}

// src/client/json-viewer.tsx
var import_react = require("react");

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
function IconCopy(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "5.5", y: "5.5", width: "7", height: "7", rx: "1.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.5 5.5v-1a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 4.5V9a1.5 1.5 0 0 0 1.5 1.5h1" })
  ] });
}
function IconFilter(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 3.5h11L9.5 8v4l-3 1V8L2.5 3.5Z" }) });
}

// src/client/json-viewer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function valueKind(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
function isExpandable(value) {
  return typeof value === "object" && value !== null;
}
function stringify(value) {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
function parseJson(text) {
  if (text === void 0 || text === "") return { value: void 0, json: false };
  try {
    return { value: JSON.parse(text), json: true };
  } catch {
    return { value: text, json: false };
  }
}
function escapePath(key) {
  if (typeof key === "number") return `[${key}]`;
  return /^[A-Za-z_$][\w$]*$/.test(key) ? `.${key}` : `[${JSON.stringify(key)}]`;
}
function highlight(text, query) {
  const term = query.trim();
  if (term === "") return text;
  const lower = text.toLowerCase();
  const needle = term.toLowerCase();
  const parts = [];
  let index = 0;
  while (true) {
    const at = lower.indexOf(needle, index);
    if (at === -1) break;
    if (at > index) parts.push(text.slice(index, at));
    parts.push(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("mark", { className: "bts-json-mark", children: text.slice(at, at + term.length) }, `m:${at}`));
    index = at + term.length;
  }
  if (index === 0) return text;
  if (index < text.length) parts.push(text.slice(index));
  return parts;
}
function deepMatches(value, query) {
  const term = query.trim().toLowerCase();
  if (term === "") return true;
  if (value === null || typeof value !== "object") {
    return String(value ?? "").toLowerCase().includes(term);
  }
  if (Array.isArray(value)) return value.some((item) => deepMatches(item, query));
  return Object.entries(value).some(([key, child]) => key.toLowerCase().includes(term) || deepMatches(child, query));
}
function JsonString({ text, query }) {
  const [expanded, setExpanded] = (0, import_react.useState)(false);
  const lines = text.split("\n").length;
  const long = text.length > 240 || lines > 3;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "bts-json-string-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: long && !expanded ? "bts-json-string-clamped" : "bts-json-string", children: highlight(text, query) }),
    long ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bts-json-link", onClick: () => setExpanded((value) => !value), children: expanded ? "\u2212" : `+${Math.max(0, lines - 3)}` }) : null
  ] });
}
function JsonNode({
  name: name2,
  value,
  path,
  depth,
  settings,
  resetKey
}) {
  const expandable = isExpandable(value) && (Array.isArray(value) ? value.length > 0 : Object.keys(value).length > 0);
  const initialOpen = settings.mode === "all" ? expandable : settings.mode === "none" ? false : expandable && depth < 2;
  const [open, setOpen] = (0, import_react.useState)(initialOpen);
  const [limit, setLimit] = (0, import_react.useState)(50);
  const forcedOpen = settings.search.trim() !== "" && expandable && deepMatches(value, settings.search);
  (0, import_react.useEffect)(() => {
    setOpen(initialOpen);
    setLimit(50);
  }, [resetKey, initialOpen]);
  if (settings.search.trim() !== "") {
    const selfMatch = name2 !== void 0 && name2.toLowerCase().includes(settings.search.trim().toLowerCase());
    if (!selfMatch && !deepMatches(value, settings.search)) return null;
  }
  if (!expandable) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-json-row", style: { paddingLeft: depth * 14 }, children: [
      name2 !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-key", children: highlight(name2, settings.search) }) : null,
      name2 !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-punct", children: ": " }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(JsonPrimitive, { value, query: settings.search }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(JsonCopy, { text: stringify(value), title: "value" })
    ] });
  }
  const entries = Array.isArray(value) ? value.map((child, index) => [index, child]) : Object.entries(value);
  const shown = entries.slice(0, limit);
  const containerPath = path;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-json-node", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-json-row", style: { paddingLeft: depth * 14 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          className: "bts-json-chevron",
          "aria-label": open || forcedOpen ? "Collapse" : "Expand",
          "aria-expanded": open || forcedOpen,
          onClick: () => setOpen((value2) => !value2),
          children: open || forcedOpen ? "\u25BE" : "\u25B8"
        }
      ),
      name2 !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-key", children: highlight(name2, settings.search) }) : null,
      name2 !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-punct", children: ": " }) : null,
      Array.isArray(value) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-bracket", children: "[" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-bracket", children: "{" }),
      !(open || forcedOpen) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "bts-json-summary", children: [
        entries.length,
        " ",
        Array.isArray(value) ? "items" : "keys"
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-punct", children: " " }),
      !(open || forcedOpen) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-bracket", children: Array.isArray(value) ? "]" : "}" }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(JsonCopy, { text: stringify(value), title: "subtree" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-type", children: valueKind(value) })
    ] }),
    open || forcedOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-json-children", children: shown.map(([key, child]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        JsonNode,
        {
          name: Array.isArray(value) ? void 0 : String(key),
          value: child,
          path: `${containerPath}${escapePath(key)}`,
          depth: depth + 1,
          settings,
          resetKey
        },
        `${path}${escapePath(key)}`
      )) }),
      entries.length > limit ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          className: "bts-json-more",
          style: { marginLeft: (depth + 1) * 14 },
          onClick: () => setLimit((value2) => value2 + 50),
          children: [
            "+",
            Math.min(50, entries.length - limit),
            " more"
          ]
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-json-row", style: { paddingLeft: depth * 14 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-bracket", children: Array.isArray(value) ? "]" : "}" }) })
    ] }) : null
  ] });
}
function JsonPrimitive({ value, query }) {
  if (typeof value === "string") return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(JsonString, { text: value, query });
  if (value === null) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-null", children: "null" });
  if (typeof value === "number") return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-number", children: String(value) });
  if (typeof value === "boolean") return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-bool", children: String(value) });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-other", children: stringify(value) });
}
function JsonCopy({ text, title }) {
  const [done, setDone] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      type: "button",
      className: "bts-json-copy",
      title: `Copy ${title}`,
      "aria-label": `Copy ${title}`,
      onClick: (event) => {
        event.stopPropagation();
        void navigator.clipboard.writeText(text).then(() => {
          setDone(true);
          window.setTimeout(() => setDone(false), 1200);
        }).catch(() => {
        });
      },
      children: done ? "\u2713" : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconCopy, { size: 10 })
    }
  );
}
function JsonViewer({ record: record2, schema, onClose, t }) {
  const [tab, setTab] = (0, import_react.useState)(() => record2.args ? "args" : record2.result ? "result" : "schema");
  const [raw, setRaw] = (0, import_react.useState)(false);
  const [search, setSearch] = (0, import_react.useState)("");
  const [mode, setMode] = (0, import_react.useState)("default");
  const [resetKey, setResetKey] = (0, import_react.useState)(0);
  const [wide, setWide] = (0, import_react.useState)(false);
  const searchRef = (0, import_react.useRef)(null);
  const args = (0, import_react.useMemo)(() => parseJson(record2.args), [record2.args]);
  const result = (0, import_react.useMemo)(() => parseJson(record2.result), [record2.result]);
  const tabs = [
    { id: "args", label: t("json.tab.args"), available: record2.args !== void 0, value: args },
    { id: "result", label: t("json.tab.result"), available: record2.result !== void 0, value: result },
    { id: "schema", label: t("json.tab.schema"), available: schema !== void 0, value: parseJson(stringify(schema)) }
  ].filter((item) => item.available);
  const active = tabs.find((item) => item.id === tab) ?? tabs[0];
  const activeValue = active?.value;
  (0, import_react.useEffect)(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);
  if (tabs.length === 0) return null;
  const treeValue = activeValue?.value;
  const isStructured = isExpandable(treeValue);
  const rawText = record2.args && tab === "args" ? record2.args : record2.result && tab === "result" ? record2.result : stringify(treeValue);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-json-overlay", role: "dialog", "aria-label": t("json.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "bts-json-panel", "data-wide": wide || void 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "bts-json-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-title", title: record2.name, children: record2.name || record2.callId }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-meta", children: record2.status }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-meta", children: typeof record2.turn === "number" ? `T${record2.turn}${typeof record2.step === "number" ? `.${record2.step}` : ""}` : "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-meta", children: typeof record2.durationMs === "number" ? `${Math.round(record2.durationMs)}ms` : "" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-spacer" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bts-button", onClick: () => {
        setMode("all");
        setResetKey((v) => v + 1);
      }, children: t("json.expandAll") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bts-button", onClick: () => {
        setMode("none");
        setResetKey((v) => v + 1);
      }, children: t("json.collapseAll") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bts-button", "data-active": wide || void 0, onClick: () => setWide((v) => !v), children: t("json.wide") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bts-icon-button", "aria-label": t("json.close"), title: t("json.close"), onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconClose, { size: 12 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-json-toolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-tabs", role: "tablist", children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": active?.id === item.id,
          onClick: () => {
            setTab(item.id);
            setRaw(false);
            setSearch("");
            setMode("default");
            setResetKey((v) => v + 1);
          },
          children: item.label
        },
        item.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-spacer" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-json-search", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconSearch, { size: 11 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            ref: searchRef,
            value: search,
            placeholder: t("json.search"),
            "aria-label": t("json.search"),
            onChange: (event) => setSearch(event.target.value)
          }
        ),
        search !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bts-json-link", onClick: () => setSearch(""), children: "\xD7" }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "bts-button", "data-active": raw || void 0, onClick: () => setRaw((v) => !v), children: raw ? t("json.pretty") : t("json.raw") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-json-body", children: raw ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: "bts-json-raw", children: rawText }) : isStructured ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-json-tree", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      JsonNode,
      {
        value: treeValue,
        path: "$",
        depth: 0,
        settings: { mode, search },
        resetKey
      }
    ) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: "bts-json-raw", children: typeof treeValue === "string" ? treeValue : stringify(treeValue) }) })
  ] }) });
}

// src/vendor/trajectory/TrajectoryView.tsx
var import_react5 = require("react");

// src/vendor/trajectory/TrajectoryTable.tsx
var import_react2 = require("react");

// src/vendor/host/json.ts
function assertNever(value, context) {
  const rendered = JSON.stringify(value) ?? String(value);
  throw new Error(`unreachable variant${context ? ` in ${context}` : ""}: ${rendered}`);
}

// src/vendor/host/partial-arguments.ts
var SIMPLE_ESCAPES = {
  '"': '"',
  "\\": "\\",
  "/": "/",
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "	"
};
var CONTENT_ESCAPE = /[\\\u0000-\u001f]/u;
function isWhitespace(c) {
  return c === " " || c === "\n" || c === "\r" || c === "	";
}
function isHex(c) {
  return c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F";
}
var PartialArguments = class _PartialArguments {
  /** The view of a call with no arguments available. */
  static EMPTY = _PartialArguments.fromObject({});
  /**
   * View finished argument text without scanning it until a reader asks.
   * @param text - the complete argument JSON text.
   * @returns a sealed view.
   */
  static fromText(text) {
    const view = new _PartialArguments();
    view.append(text);
    view.sealed = true;
    return view;
  }
  /**
   * View an already parsed argument payload, such as a PTC dispatch object.
   * @param value - the parsed argument value.
   * @returns a sealed view; a non-object payload has no fields.
   */
  static fromObject(value) {
    const view = new _PartialArguments();
    view.object = typeof value === "object" && value !== null && !Array.isArray(value) ? value : {};
    view.sealed = true;
    return view;
  }
  /**
   * The source: text so far or a parsed object, plus whether it can still grow.
   * These are the only enumerable fields, so two views over the same source
   * compare equal structurally however far each has been read.
   */
  chunks = [];
  object;
  sealed = false;
  // Scan progress, located fields, and remembered reads are caches over the source.
  #ends = [];
  #size = 0;
  #consumed = 0;
  #mode = "root";
  #escape = false;
  #keyStart = 0;
  #keyEscaped = false;
  #key = "";
  #current = null;
  #nestedEnds = [];
  #nestedInString = false;
  #invalidAt;
  #invalidValue = false;
  #entries = /* @__PURE__ */ new Map();
  #order = [];
  #reads = /* @__PURE__ */ new Map();
  /** Whether this view rejects further appends; does not scan text or register reads. */
  get isSealed() {
    return this.sealed;
  }
  /** Whether indexing or a content read found invalid JSON; unread value contents are not validated. */
  get invalid() {
    this.scan();
    return this.#mode === "invalid" || this.#invalidValue;
  }
  /**
   * Retain streamed argument text without scanning or comparing observed answers.
   * @param fragment - the text following every fragment appended before.
   */
  append(fragment) {
    if (this.sealed) throw new Error("PartialArguments: cannot append to a sealed view");
    if (fragment.length === 0) return;
    this.chunks.push(fragment);
    this.#size += fragment.length;
    this.#ends.push(this.#size);
  }
  /**
   * Reconcile a streamed prefix with authoritative complete text without joining the fragments.
   * @param text - the final argument text, which replaces missing or conflicting deltas.
   * @returns this view sealed with its caches retained when every character matches; otherwise a new sealed view.
   */
  settle(text) {
    if (this.object !== void 0 || text.length !== this.#size) return _PartialArguments.fromText(text);
    let offset = 0;
    for (const chunk of this.chunks) {
      if (!text.startsWith(chunk, offset)) return _PartialArguments.fromText(text);
      offset += chunk.length;
    }
    this.chunks = text.length === 0 ? [] : [text];
    this.#ends = text.length === 0 ? [] : [text.length];
    this.sealed = true;
    return this;
  }
  /**
   * Compare observed answers and advance their publication baseline. Unread views remain unscanned.
   * @returns whether any observed answer changed since its first read or the preceding refresh.
   */
  refresh() {
    if (this.#reads.size === 0) return false;
    this.scan();
    let changed = false;
    let completions = false;
    for (const read of this.#reads.values()) {
      if (read.completion) {
        completions = true;
        continue;
      }
      changed = this.refreshRead(read) || changed;
    }
    if (completions) {
      for (const read of this.#reads.values()) if (read.completion) changed = this.refreshRead(read) || changed;
    }
    if (this.sealed) this.#reads.clear();
    return changed;
  }
  refreshRead(read) {
    const now = read.answer();
    if (Object.is(now, read.last)) return false;
    read.last = now;
    return true;
  }
  /**
   * Check whether no further fields can arrive.
   * @returns whether the outer object closed, indexing failed, or the view is sealed; unread values are not validated.
   */
  closed() {
    return this.remember("closed", "", () => this.closedNow());
  }
  /**
   * List discovered fields in first-appearance order.
   * @returns top-level keys seen so far, in first-appearance order.
   */
  keys() {
    return this.remember("keys", "", () => this.keysNow(), (keys) => keys.length);
  }
  /**
   * Check whether a top-level field has appeared.
   * @param key - argument name.
   * @returns whether the field has appeared (a string opened or another value began).
   */
  has(key) {
    return this.remember("has", key, () => this.hasNow(key));
  }
  /**
   * Check whether a field's closing delimiter has arrived, without validating its contents.
   * @param key - argument name.
   * @returns whether its delimiter arrived and no content reader has reported an error for this value.
   */
  complete(key) {
    return this.remember("complete", key, () => this.completeNow(key));
  }
  /**
   * Read string length without materializing its text.
   * @param key - argument name.
   * @param options - change granularity for a streaming string.
   * @returns decoded UTF-16 length of the string field so far; undefined when absent or not a string.
   */
  stringLength(key, options) {
    const step = Math.max(1, Math.floor(options?.step ?? 1));
    const offset = options?.offset ?? 0;
    return this.remember(
      `length:${step}:${offset}`,
      key,
      () => this.lengthNow(key),
      (length) => length === void 0 ? void 0 : Math.ceil((length + offset) / step)
    );
  }
  /**
   * Check a string against a decoded UTF-16 length limit without materializing it.
   * @param key - argument name.
   * @param maxLength - decoded UTF-16 limit, floored to at least zero.
   * @returns whether the string is longer than the limit; false when absent or not a string.
   */
  stringExceeds(key, maxLength) {
    const limit = Math.max(0, Math.floor(maxLength));
    return this.remember(
      `exceeds:${limit}`,
      key,
      () => (this.lengthNow(key, limit + 1) ?? 0) > limit
    );
  }
  /**
   * Read a decoded string, including a streaming prefix.
   * @param key - argument name.
   * @returns the string field's decoded text so far; undefined when absent or not a string.
   */
  text(key) {
    return this.remember("text", key, () => this.textNow(key));
  }
  /**
   * Read at most the first decoded UTF-16 units of a string.
   * @param key - argument name.
   * @param maxLength - maximum decoded UTF-16 length, floored to at least one.
   * @returns the bounded string prefix; undefined when absent or not a string.
   */
  textPrefix(key, maxLength) {
    const limit = Math.max(1, Math.floor(maxLength));
    return this.remember(
      `prefix:${limit}`,
      key,
      () => this.textPrefixNow(key, limit)
    );
  }
  /**
   * Read a completed non-string argument.
   * @param key - argument name.
   * @returns the parsed non-string value once it closed; undefined while open, absent, or a string.
   */
  value(key) {
    return this.remember("value", key, () => this.valueNow(key));
  }
  /** Answer a question and, on a streaming view, remember it for change detection. */
  remember(kind, key, read, comparison) {
    this.scan();
    const result = read();
    if (!this.sealed) {
      const id = `${kind}/${key}`;
      if (!this.#reads.has(id)) {
        this.#reads.set(id, {
          completion: kind === "complete",
          answer: comparison === void 0 ? read : () => comparison(read()),
          last: comparison === void 0 ? result : comparison(result)
        });
      }
    }
    return result;
  }
  closedNow() {
    return this.sealed || this.#mode === "closed" || this.#mode === "invalid";
  }
  keysNow() {
    return this.object === void 0 ? this.#order : Object.keys(this.object);
  }
  hasNow(key) {
    return this.object === void 0 ? this.#entries.has(key) : Object.hasOwn(this.object, key);
  }
  completeNow(key) {
    if (this.object !== void 0) return Object.hasOwn(this.object, key);
    const entry = this.#entries.get(key);
    return entry !== void 0 && entry.end >= 0 && (entry.kind === "string" ? entry.invalidAt === void 0 : !entry.invalid);
  }
  lengthNow(key, limit = Number.POSITIVE_INFINITY) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field.length : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    if (entry.text !== void 0 && entry.text.at === entry.end) return entry.text.length;
    const read = entry.length ??= { at: entry.start, length: 0, text: "" };
    this.readString(entry, read, limit, false);
    return read.length;
  }
  textNow(key) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    if (entry.text === void 0 && entry.end >= 0 && entry.needsDecoding && entry.invalidAt === void 0) {
      let text;
      try {
        text = JSON.parse(`"${this.slice(entry.start, entry.end)}"`);
      } catch (_error) {
      }
      if (text !== void 0) entry.text = { at: entry.end, length: text.length, text };
    }
    const read = entry.text ??= { at: entry.start, length: 0, text: "" };
    this.readString(entry, read, Number.POSITIVE_INFINITY, true);
    return read.text;
  }
  textPrefixNow(key, maxLength) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field.slice(0, maxLength) : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    const prefixes = entry.prefixes ??= /* @__PURE__ */ new Map();
    let read = prefixes.get(maxLength);
    if (read === void 0) {
      read = { at: entry.start, length: 0, text: "" };
      prefixes.set(maxLength, read);
    }
    this.readString(entry, read, maxLength, true);
    return read.text;
  }
  valueNow(key) {
    if (this.object !== void 0) {
      if (!Object.hasOwn(this.object, key)) return void 0;
      const field = this.object[key];
      return typeof field === "string" ? void 0 : field;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "value" || entry.end < 0 || entry.invalid) return void 0;
    if (entry.parsed === void 0) {
      try {
        entry.parsed = JSON.parse(this.slice(entry.start, entry.end));
      } catch (_error) {
        entry.invalid = true;
        this.#invalidValue = true;
      }
    }
    return entry.parsed;
  }
  chunkAt(at) {
    let low = 0;
    let high = this.#ends.length;
    while (low < high) {
      const mid = low + high >>> 1;
      if (this.#ends[mid] <= at) low = mid + 1;
      else high = mid;
    }
    return low;
  }
  /** Materialize only a requested range, never the cumulative source. */
  slice(start, end) {
    if (start >= end) return "";
    const first = this.chunkAt(start);
    const last = this.chunkAt(end - 1);
    const base = first === 0 ? 0 : this.#ends[first - 1];
    if (first === last) return this.chunks[first].slice(start - base, end - base);
    const parts = [this.chunks[first].slice(start - base)];
    for (let i = first + 1; i < last; i++) parts.push(this.chunks[i]);
    parts.push(this.chunks[last].slice(0, end - this.#ends[last - 1]));
    return parts.join("");
  }
  readString(entry, read, limit, materialize) {
    const end = Math.min(
      entry.end < 0 ? this.#consumed : entry.end,
      entry.invalidAt ?? Number.POSITIVE_INFINITY,
      this.#invalidAt ?? Number.POSITIVE_INFINITY
    );
    if (!entry.needsDecoding) {
      const length = Math.min(end - read.at, limit - read.length);
      if (length <= 0) return;
      if (materialize) read.text += this.slice(read.at, read.at + length);
      read.at += length;
      read.length += length;
      return;
    }
    let chunkIndex = this.chunkAt(read.at);
    while (read.at < end && read.length < limit) {
      const base = chunkIndex === 0 ? 0 : this.#ends[chunkIndex - 1];
      const chunk = this.chunks[chunkIndex];
      const remaining = chunk.slice(read.at - base, Math.min(chunk.length, end - base));
      const boundary = remaining.search(CONTENT_ESCAPE);
      const length = Math.min(boundary < 0 ? remaining.length : boundary, limit - read.length);
      if (length > 0) {
        if (materialize) read.text += remaining.slice(0, length);
        read.at += length;
        read.length += length;
        if (read.at === base + chunk.length) chunkIndex++;
        continue;
      }
      const type = remaining.length > 1 ? remaining[1] : read.at + 1 < end ? this.chunks[chunkIndex + 1][0] : void 0;
      let decoded;
      let width = 2;
      if (remaining[0] === "\\" && type === void 0 && entry.end < 0) return;
      if (remaining[0] === "\\" && type === "u") {
        const hex = this.slice(read.at + 2, Math.min(end, read.at + 6));
        let valid = true;
        for (let i = 0; i < hex.length; i++) if (!isHex(hex[i])) valid = false;
        if (valid) {
          if (hex.length < 4 && entry.end < 0) return;
          if (hex.length === 4) decoded = String.fromCharCode(Number.parseInt(hex, 16));
        }
        width = 6;
      } else if (remaining[0] === "\\" && type !== void 0) {
        decoded = SIMPLE_ESCAPES[type];
      }
      if (decoded === void 0) {
        entry.invalidAt = read.at;
        this.#invalidValue = true;
        return;
      }
      if (materialize) read.text += decoded;
      read.length++;
      read.at += width;
      while (chunkIndex < this.chunks.length && read.at >= this.#ends[chunkIndex]) chunkIndex++;
    }
  }
  /** Locate new field ranges without decoding or parsing their contents. */
  scan() {
    if (this.object !== void 0 || this.#consumed === this.#size) return;
    for (let i = this.chunkAt(this.#consumed); i < this.chunks.length && this.#invalidAt === void 0; i++) {
      const pending = this.chunks[i];
      const base = i === 0 ? 0 : this.#ends[i - 1];
      for (let index = this.#consumed - base; index < pending.length && this.#mode !== "invalid"; index++) {
        if (this.#mode === "string" || this.#mode === "nested" && this.#nestedInString) {
          const end = this.stringBoundary(pending, index);
          this.#consumed += end - index;
          index = end;
          if (index === pending.length) break;
        }
        this.step(pending[index], this.#consumed);
        this.#consumed++;
      }
    }
  }
  /** Only raw quotes and their preceding backslash runs can terminate a string. */
  stringBoundary(fragment, start) {
    let at = start;
    while (true) {
      const quote = fragment.indexOf('"', at);
      const end = quote < 0 ? fragment.length : quote;
      if (this.#mode === "string") {
        const entry = this.#current;
        if (!entry.needsDecoding && CONTENT_ESCAPE.test(fragment.slice(at, end))) entry.needsDecoding = true;
      }
      let slashStart = end;
      while (slashStart > at && fragment[slashStart - 1] === "\\") slashStart--;
      const escaped = (end - slashStart) % 2 === 1 !== (slashStart === at && this.#escape);
      this.#escape = quote < 0 && escaped;
      if (quote < 0 || !escaped) return end;
      at = quote + 1;
    }
  }
  step(c, at) {
    switch (this.#mode) {
      case "root":
        if (isWhitespace(c)) return;
        if (c === "{") {
          this.#mode = "key-or-end";
          return;
        }
        this.fail();
        return;
      case "key-or-end":
        if (isWhitespace(c)) return;
        if (c === "}") {
          this.#mode = "closed";
          return;
        }
        if (c === '"') {
          this.beginKey(at);
          return;
        }
        this.fail();
        return;
      case "key-only":
        if (isWhitespace(c)) return;
        if (c === '"') {
          this.beginKey(at);
          return;
        }
        this.fail();
        return;
      case "key":
        this.stepKey(c, at);
        return;
      case "colon":
        if (isWhitespace(c)) return;
        if (c === ":") {
          this.#mode = "value";
          return;
        }
        this.fail();
        return;
      case "value":
        this.beginValue(c, at);
        return;
      case "string": {
        const entry = this.#current;
        entry.end = at;
        this.#current = null;
        this.#mode = "comma-or-end";
        return;
      }
      case "scalar":
        this.stepScalar(c, at);
        return;
      case "nested":
        this.stepNested(c, at);
        return;
      case "comma-or-end":
        if (isWhitespace(c)) return;
        if (c === ",") {
          this.#mode = "key-only";
          return;
        }
        if (c === "}") {
          this.#mode = "closed";
          return;
        }
        this.fail();
        return;
      case "closed":
        if (isWhitespace(c)) return;
        this.fail();
        return;
      /* v8 ignore next 2 -- scan() stops stepping once the view is invalid. */
      case "invalid":
        return;
      /* v8 ignore next 2 -- Every scanner mode has a handler above. */
      default:
        assertNever(this.#mode);
    }
  }
  fail() {
    this.#invalidAt = this.#consumed;
    this.#mode = "invalid";
    this.#current = null;
  }
  beginKey(at) {
    this.#mode = "key";
    this.#keyStart = at + 1;
    this.#keyEscaped = false;
    this.#escape = false;
  }
  stepKey(c, at) {
    if (c < " ") {
      this.fail();
      return;
    }
    if (this.#escape) {
      this.#escape = false;
      return;
    }
    if (c === "\\") {
      this.#escape = true;
      this.#keyEscaped = true;
      return;
    }
    if (c !== '"') return;
    const raw = this.slice(this.#keyStart, at);
    if (this.#keyEscaped) {
      try {
        this.#key = JSON.parse(`"${raw}"`);
      } catch (_error) {
        this.fail();
        return;
      }
    } else {
      this.#key = raw;
    }
    this.#mode = "colon";
  }
  open(entry) {
    if (!this.#entries.has(this.#key)) this.#order.push(this.#key);
    this.#entries.set(this.#key, entry);
    this.#current = entry;
  }
  beginValue(c, at) {
    if (isWhitespace(c)) return;
    if (c === '"') {
      this.open({
        kind: "string",
        start: at + 1,
        end: -1,
        needsDecoding: false,
        invalidAt: void 0,
        length: void 0,
        text: void 0,
        prefixes: void 0
      });
      this.#escape = false;
      this.#mode = "string";
      return;
    }
    if (c === "}" || c === "," || c === ":" || c === "]") {
      this.fail();
      return;
    }
    this.open({ kind: "value", start: at, end: -1, parsed: void 0, invalid: false });
    if (c === "{" || c === "[") {
      this.#mode = "nested";
      this.#nestedEnds = [c === "{" ? "}" : "]"];
      this.#nestedInString = false;
      this.#escape = false;
      return;
    }
    this.#mode = "scalar";
  }
  stepScalar(c, at) {
    if (c !== "," && c !== "}" && !isWhitespace(c)) return;
    this.closeValue(at);
    this.#mode = c === "," ? "key-only" : c === "}" ? "closed" : "comma-or-end";
  }
  stepNested(c, at) {
    if (this.#nestedInString) {
      this.#nestedInString = false;
      return;
    }
    if (c === '"') {
      this.#nestedInString = true;
      return;
    }
    if (c === "{" || c === "[") {
      this.#nestedEnds.push(c === "{" ? "}" : "]");
      return;
    }
    if (c === "}" || c === "]") {
      if (this.#nestedEnds.pop() !== c) {
        this.fail();
        return;
      }
      if (this.#nestedEnds.length === 0) {
        this.closeValue(at + 1);
        this.#mode = "comma-or-end";
      }
    }
  }
  closeValue(end) {
    const entry = this.#current;
    entry.end = end;
    this.#current = null;
  }
};

// src/vendor/trajectory/TrajectoryTable.tsx
var import_react_virtual = require("@tanstack/react-virtual");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// node_modules/.pnpm/diff@9.0.0/node_modules/diff/libesm/diff/base.js
var Diff = class {
  diff(oldStr, newStr, options = {}) {
    let callback;
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if ("callback" in options) {
      callback = options.callback;
    }
    const oldString = this.castInput(oldStr, options);
    const newString = this.castInput(newStr, options);
    const oldTokens = this.removeEmpty(this.tokenize(oldString, options));
    const newTokens = this.removeEmpty(this.tokenize(newString, options));
    return this.diffWithOptionsObj(oldTokens, newTokens, options, callback);
  }
  diffWithOptionsObj(oldTokens, newTokens, options, callback) {
    var _a;
    const done = (value) => {
      value = this.postProcess(value, options);
      if (callback) {
        setTimeout(function() {
          callback(value);
        }, 0);
        return void 0;
      } else {
        return value;
      }
    };
    const newLen = newTokens.length, oldLen = oldTokens.length;
    let editLength = 1;
    let maxEditLength = newLen + oldLen;
    if (options.maxEditLength != null) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }
    const maxExecutionTime = (_a = options.timeout) !== null && _a !== void 0 ? _a : Infinity;
    const abortAfterTimestamp = Date.now() + maxExecutionTime;
    const bestPath = [{ oldPos: -1, lastComponent: void 0 }];
    let newPos = this.extractCommon(bestPath[0], newTokens, oldTokens, 0, options);
    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      return done(this.buildValues(bestPath[0].lastComponent, newTokens, oldTokens));
    }
    let minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
    const execEditLength = () => {
      for (let diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        let basePath;
        const removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
        if (removePath) {
          bestPath[diagonalPath - 1] = void 0;
        }
        let canAdd = false;
        if (addPath) {
          const addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }
        const canRemove = removePath && removePath.oldPos + 1 < oldLen;
        if (!canAdd && !canRemove) {
          bestPath[diagonalPath] = void 0;
          continue;
        }
        if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
          basePath = this.addToPath(addPath, true, false, 0, options);
        } else {
          basePath = this.addToPath(removePath, false, true, 1, options);
        }
        newPos = this.extractCommon(basePath, newTokens, oldTokens, diagonalPath, options);
        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          return done(this.buildValues(basePath.lastComponent, newTokens, oldTokens)) || true;
        } else {
          bestPath[diagonalPath] = basePath;
          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }
          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }
      editLength++;
    };
    if (callback) {
      (function exec() {
        setTimeout(function() {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback(void 0);
          }
          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        const ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  }
  addToPath(path, added, removed, oldPosInc, options) {
    const last = path.lastComponent;
    if (last && !options.oneChangePerToken && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: { count: last.count + 1, added, removed, previousComponent: last.previousComponent }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: { count: 1, added, removed, previousComponent: last }
      };
    }
  }
  extractCommon(basePath, newTokens, oldTokens, diagonalPath, options) {
    const newLen = newTokens.length, oldLen = oldTokens.length;
    let oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldTokens[oldPos + 1], newTokens[newPos + 1], options)) {
      newPos++;
      oldPos++;
      commonCount++;
      if (options.oneChangePerToken) {
        basePath.lastComponent = { count: 1, previousComponent: basePath.lastComponent, added: false, removed: false };
      }
    }
    if (commonCount && !options.oneChangePerToken) {
      basePath.lastComponent = { count: commonCount, previousComponent: basePath.lastComponent, added: false, removed: false };
    }
    basePath.oldPos = oldPos;
    return newPos;
  }
  equals(left, right, options) {
    if (options.comparator) {
      return options.comparator(left, right);
    } else {
      return left === right || !!options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  }
  removeEmpty(array) {
    const ret = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  castInput(value, options) {
    return value;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tokenize(value, options) {
    return Array.from(value);
  }
  join(chars) {
    return chars.join("");
  }
  postProcess(changeObjects, options) {
    return changeObjects;
  }
  get useLongestToken() {
    return false;
  }
  buildValues(lastComponent, newTokens, oldTokens) {
    const components = [];
    let nextComponent;
    while (lastComponent) {
      components.push(lastComponent);
      nextComponent = lastComponent.previousComponent;
      delete lastComponent.previousComponent;
      lastComponent = nextComponent;
    }
    components.reverse();
    const componentLen = components.length;
    let componentPos = 0, newPos = 0, oldPos = 0;
    for (; componentPos < componentLen; componentPos++) {
      const component = components[componentPos];
      if (!component.removed) {
        if (!component.added && this.useLongestToken) {
          let value = newTokens.slice(newPos, newPos + component.count);
          value = value.map(function(value2, i) {
            const oldValue = oldTokens[oldPos + i];
            return oldValue.length > value2.length ? oldValue : value2;
          });
          component.value = this.join(value);
        } else {
          component.value = this.join(newTokens.slice(newPos, newPos + component.count));
        }
        newPos += component.count;
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = this.join(oldTokens.slice(oldPos, oldPos + component.count));
        oldPos += component.count;
      }
    }
    return components;
  }
};

// node_modules/.pnpm/diff@9.0.0/node_modules/diff/libesm/diff/line.js
var LineDiff = class extends Diff {
  constructor() {
    super(...arguments);
    this.tokenize = tokenize;
  }
  equals(left, right, options) {
    if (options.ignoreWhitespace) {
      if (!options.newlineIsToken || !left.includes("\n")) {
        left = left.trim();
      }
      if (!options.newlineIsToken || !right.includes("\n")) {
        right = right.trim();
      }
    } else if (options.ignoreNewlineAtEof && !options.newlineIsToken) {
      if (left.endsWith("\n")) {
        left = left.slice(0, -1);
      }
      if (right.endsWith("\n")) {
        right = right.slice(0, -1);
      }
    }
    return super.equals(left, right, options);
  }
};
var lineDiff = new LineDiff();
function diffLines(oldStr, newStr, options) {
  return lineDiff.diff(oldStr, newStr, options);
}
function tokenize(value, options) {
  if (options.stripTrailingCr) {
    value = value.replace(/\r\n/g, "\n");
  }
  const retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }
  for (let i = 0; i < linesAndNewlines.length; i++) {
    const line = linesAndNewlines[i];
    if (i % 2 && !options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      retLines.push(line);
    }
  }
  return retLines;
}

// node_modules/.pnpm/diff@9.0.0/node_modules/diff/libesm/patch/create.js
function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  let optionsObj;
  if (!options) {
    optionsObj = {};
  } else if (typeof options === "function") {
    optionsObj = { callback: options };
  } else {
    optionsObj = options;
  }
  if (typeof optionsObj.context === "undefined") {
    optionsObj.context = 4;
  }
  const context = optionsObj.context;
  if (optionsObj.newlineIsToken) {
    throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  }
  if (!optionsObj.callback) {
    return diffLinesResultToPatch(diffLines(oldStr, newStr, optionsObj));
  } else {
    const { callback } = optionsObj;
    diffLines(oldStr, newStr, Object.assign(Object.assign({}, optionsObj), { callback: (diff) => {
      const patch = diffLinesResultToPatch(diff);
      callback(patch);
    } }));
  }
  function diffLinesResultToPatch(diff) {
    if (!diff) {
      return;
    }
    diff.push({ value: "", lines: [] });
    function contextLines(lines) {
      return lines.map(function(entry) {
        return " " + entry;
      });
    }
    const hunks = [];
    let oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
    for (let i = 0; i < diff.length; i++) {
      const current = diff[i], lines = current.lines || splitLines(current.value);
      current.lines = lines;
      if (current.added || current.removed) {
        if (!oldRangeStart) {
          const prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;
          if (prev) {
            curRange = context > 0 ? contextLines(prev.lines.slice(-context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        }
        for (const line of lines) {
          curRange.push((current.added ? "+" : "-") + line);
        }
        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        if (oldRangeStart) {
          if (lines.length <= context * 2 && i < diff.length - 2) {
            for (const line of contextLines(lines)) {
              curRange.push(line);
            }
          } else {
            const contextSize = Math.min(lines.length, context);
            for (const line of contextLines(lines.slice(0, contextSize))) {
              curRange.push(line);
            }
            const hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };
            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }
        oldLine += lines.length;
        newLine += lines.length;
      }
    }
    for (const hunk of hunks) {
      for (let i = 0; i < hunk.lines.length; i++) {
        if (hunk.lines[i].endsWith("\n")) {
          hunk.lines[i] = hunk.lines[i].slice(0, -1);
        } else {
          hunk.lines.splice(i + 1, 0, "\\ No newline at end of file");
          i++;
        }
      }
    }
    return {
      oldFileName,
      newFileName,
      oldHeader,
      newHeader,
      hunks
    };
  }
}
function splitLines(text) {
  const hasTrailingNl = text.endsWith("\n");
  const result = text.split("\n").map((line) => line + "\n");
  if (hasTrailingNl) {
    result.pop();
  } else {
    result.push(result.pop().slice(0, -1));
  }
  return result;
}

// src/vendor/trajectory/trajectory-record.ts
function trajectoryRecordId(cell2) {
  if (cell2.recordId !== void 0) return cell2.recordId;
  if (cell2.callId !== void 0) return `${cell2.kind}\0call\0${cell2.callId}`;
  if (cell2.sourceSeq !== void 0) return `${cell2.kind}\0seq\0${cell2.sourceSeq}`;
  return `${cell2.kind}\0index\0${cell2.index}`;
}
function formatDurationMillis(milliseconds, t) {
  if (milliseconds === null || !Number.isFinite(milliseconds)) return "\u2014";
  const integer = String(Math.round(milliseconds));
  return t("unit.milliseconds", {
    value: integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  });
}
function formatElapsedSeconds(seconds, t) {
  return formatDurationMillis(seconds === null ? null : seconds * 1e3, t);
}

// src/vendor/trajectory/trajectory-virtual-rows.ts
var CONTENT_ROW_HEIGHT = 30;
var COLLAPSED_SUMMARY_HEIGHT = 20;
var TERMINAL_BOUNDARY_HEIGHT = 9;
function trajectoryVirtualRecordKey(record2) {
  const identity = encodeURIComponent(trajectoryRecordId(record2.cell));
  return record2.collapsedSummaryKind === void 0 ? identity : `${identity}\0summary\0${record2.collapsedSummaryKind}`;
}
function groupTrajectoryVirtualRows(records) {
  const rows = [];
  let pending = [];
  for (const [logicalIndex, record2] of records.entries()) {
    const entry = { logicalIndex, record: record2 };
    if (record2.cell.requestOnly === true) {
      pending.push(entry);
      continue;
    }
    const entries = [...pending, entry];
    pending = [];
    rows.push({
      entries,
      height: record2.collapsedSummaryKind === void 0 ? CONTENT_ROW_HEIGHT : COLLAPSED_SUMMARY_HEIGHT,
      key: trajectoryVirtualRecordKey(record2)
    });
  }
  if (pending.length > 0) {
    rows.push({
      entries: pending,
      height: TERMINAL_BOUNDARY_HEIGHT,
      key: pending.map((candidate) => trajectoryVirtualRecordKey(candidate.record)).join("|")
    });
  }
  return rows;
}

// src/vendor/trajectory/trajectory-preview.ts
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
var PREVIEW_SOURCE_CHARACTERS = 2048;
var PREVIEW_OUTPUT_CHARACTERS = 512;
function trajectoryPreviewText(text) {
  const source = text.slice(0, PREVIEW_SOURCE_CHARACTERS);
  const compact = (0, import_dsh_client_ui_primitives.extractMarkdownPlainText)(source).replace(/\s+/g, " ").trim();
  const preview = compact.slice(0, PREVIEW_OUTPUT_CHARACTERS).trimEnd();
  return source.length < text.length || preview.length < compact.length ? `${preview}\u2026` : preview;
}

// src/vendor/trajectory/copy-codes.ts
var COMPACTION_INTERRUPTED_ERROR = "trajectory.compaction-interrupted";

// src/vendor/trajectory/code-program.ts
var PTC_TOOL_NAME = "run_code";
function record(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function parseRecord(value) {
  if (value === void 0) return void 0;
  try {
    return record(JSON.parse(value));
  } catch {
    return void 0;
  }
}
function recordedLanguage(schemaRaw) {
  const schema = parseRecord(schemaRaw);
  const declaredLanguage = typeof schema?.description === "string" ? /^Execute a program in `([^`]+)`/.exec(schema.description)?.[1]?.toLowerCase() : void 0;
  if (declaredLanguage !== void 0 && declaredLanguage !== "typescript" && declaredLanguage !== "python") return void 0;
  const properties = record(record(schema?.parameters)?.properties);
  const description = record(properties?.code)?.description;
  const typescript = declaredLanguage === "typescript" || typeof description === "string" && /\bTypeScript\b/i.test(description);
  const python = declaredLanguage === "python" || typeof description === "string" && /\bPython\b/i.test(description);
  if (typescript === python) return void 0;
  return typescript ? "typescript" : "python";
}
function codeProgram(cell2) {
  if (cell2.kind !== "tool" && cell2.kind !== "subtool") return void 0;
  if (cell2.toolName !== PTC_TOOL_NAME || cell2.inputDetail === void 0) return void 0;
  const args = parseRecord(cell2.inputDetail);
  if (typeof args?.code !== "string") return void 0;
  if (args.description !== void 0 && typeof args.description !== "string") return void 0;
  return {
    rawInput: cell2.inputDetail,
    source: args.code,
    description: typeof args.description === "string" && args.description.trim() !== "" ? args.description : args.code.split(/\r?\n/).find((line) => line.trim() !== "")?.trim() ?? "",
    arguments: args,
    language: recordedLanguage(cell2.schemaDetail)
  };
}

// src/vendor/trajectory/TrajectoryTable.module.css
var css = ".bt_TrajectoryTable_split_eDViiG {\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n\n  position: relative;\n  display: flex;\n  flex: 1;\n  width: 100%;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-layer-1);\n  container-type: inline-size;\n}\n\n.bt_TrajectoryTable_tablePane_KHiY-a {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: var(--dsh-trajectory-bottom-clearance, 0px);\n  container: trajectory-table / inline-size;\n}\n\n.bt_TrajectoryTable_historyLoading_3Z7BY1 {\n  position: sticky;\n  z-index: 5;\n  top: 0;\n  height: 0;\n  overflow: visible;\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_historyLoadingBar_iuAaSy {\n  display: flex;\n  width: 100%;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  box-sizing: border-box;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_historyLoadRow_iZfpDw td {\n  height: 30px;\n  padding: 0;\n}\n\n/* The pagination control does not create a trajectory turn boundary. */\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_historyLoadRow_iZfpDw + tr[data-turn-start='true'] td::before {\n  content: none;\n}\n\n.bt_TrajectoryTable_historyLoadButton_kMXZ8l {\n  display: flex;\n  width: 100%;\n  height: 29px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: 0;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n  font: var(--dsw-font-xxs-12);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_historyLoadButton_kMXZ8l:hover:not(:disabled) {\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_historyLoadButton_kMXZ8l:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n\n.bt_TrajectoryTable_historyLoadButton_kMXZ8l:disabled {\n  cursor: default;\n}\n\n.bt_TrajectoryTable_visuallyHidden_nVQikz {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E:not([data-scroll-ready='true']) {\n  visibility: hidden;\n}\n\n.bt_TrajectoryTable_table_qfAk6E {\n  --trajectory-turn-accent: color-mix(\n    in srgb,\n    var(--dsw-alias-trajectory-accent) 22%,\n    var(--dsw-alias-bg-layer-1)\n  );\n\n  width: 100%;\n  min-width: 0;\n  border-spacing: 0;\n  table-layout: fixed;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt_TrajectoryTable_eventColumn_UTt04J {\n  width: 122px;\n}\n\n.bt_TrajectoryTable_eventColumn_UTt04J:where(:lang(zh)) {\n  width: 84px;\n}\n\n.bt_TrajectoryTable_contentColumn_GFcdso {\n  width: auto;\n}\n\n.bt_TrajectoryTable_table_qfAk6E th {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  box-sizing: border-box;\n  height: 30px;\n  padding: 0 8px;\n  overflow: hidden;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-tertiary);\n  background: var(--dsw-specific-sidebar-fill);\n  font: var(--dsw-font-xxs-12);\n  font-weight: 500;\n  text-align: left;\n  text-overflow: ellipsis;\n  user-select: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_eventHeader_kD88tA {\n  padding-right: 4px !important;\n  text-align: right !important;\n}\n\n.bt_TrajectoryTable_table_qfAk6E td {\n  box-sizing: border-box;\n  height: 30px;\n  padding: 0 8px;\n  overflow: hidden;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_virtualSpacer_qcuMuX {\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_virtualSpacer_qcuMuX td {\n  height: var(--trajectory-virtual-spacer-height);\n  padding: 0;\n  border: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):not([data-virtual-spacer]):not([data-history-load]) {\n  cursor: default;\n  outline: none;\n  transition:\n    background-color 120ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-timeline-focus='outside'] {\n  opacity: 0.24;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):not([data-virtual-spacer]):not([data-history-load]):not([data-selected='true']):hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n\n  .bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true']:hover {\n    background: transparent;\n  }\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true'] td {\n  height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-terminal-request-boundary='true'] td {\n  /* Retain the lower half of the 16px boundary marker at the table's end. */\n  height: 9px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  top: -15px;\n  bottom: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-selected='true'] {\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n  --request-boundary-base-left: 12px;\n\n  position: absolute;\n  z-index: 6;\n  top: -8px;\n  left: calc(var(--request-boundary-base-left) + var(--request-boundary-offset, 0px));\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y::before {\n  position: absolute;\n  top: 5.5px;\n  left: 5.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  corner-shape: round;\n  background: var(--dsw-alias-label-caption);\n  box-shadow:\n    0 0 0 2px var(--dsw-alias-bg-layer-1),\n    0 0 0 3px transparent;\n  content: '';\n  transition:\n    background 120ms var(--ds-ease-in-out),\n    box-shadow 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y::after {\n  position: absolute;\n  top: 2px;\n  left: 17px;\n  width: max-content;\n  padding: 0 4px;\n  border: 0.5px solid var(--dsw-alias-border-l1);\n  border-radius: 2px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n  content: attr(data-label);\n  font: 9px/12px var(--ds-font-family-code);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateX(-2px);\n  transition:\n    opacity 120ms var(--ds-ease-in-out),\n    transform 120ms var(--ds-ease-in-out);\n  user-select: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:focus-visible::before {\n  background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover::before {\n    background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB::before,\n.bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB:focus-visible::before {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 18%,\n    var(--dsw-alias-bg-layer-1)\n  );\n  box-shadow: 0 0 0 1.5px var(--dsw-alias-state-business-primary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB:hover::before {\n    background: color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 18%,\n      var(--dsw-alias-bg-layer-1)\n    );\n    box-shadow: 0 0 0 1.5px var(--dsw-alias-state-business-primary);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']::before,\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']:focus-visible::before {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']:hover::before {\n    background: var(--dsw-alias-state-error-primary);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:focus-visible::after {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover::after {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:focus-visible {\n  outline: none;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr:has(.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover):not([data-selected='true']) {\n    background: transparent;\n  }\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  position: relative;\n}\n\n.bt_TrajectoryTable_turnRail_yQDSF9,\n.bt_TrajectoryTable_selectionRail_wHs0wE {\n  position: absolute;\n  left: 0;\n  background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_turnRail_yQDSF9 {\n  z-index: 4;\n  top: -1px;\n  bottom: -1px;\n  width: 2px;\n  background: var(--trajectory-turn-accent);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-end='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  bottom: 0;\n}\n\n.bt_TrajectoryTable_selectionRail_wHs0wE {\n  z-index: 5;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-error='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-error-primary) 22%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-error='true'] .bt_TrajectoryTable_selectionRail_wHs0wE {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-start='true'] td {\n  position: relative;\n  overflow: visible;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-start='true']:not(:first-child) td::before {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 2px;\n  background: var(--dsw-alias-border-l1);\n  content: '';\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  overflow: visible !important;\n  padding-right: 4px !important;\n  padding-left: 36px !important;\n}\n\n.bt_TrajectoryTable_turnLabel_WNZW3a {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  display: inline-grid;\n  flex: none;\n  align-items: center;\n  box-sizing: border-box;\n  width: max-content;\n  padding: 1px 5px;\n  border-radius: 0 0 2px;\n  color: var(--dsw-alias-label-tertiary);\n  background: var(--dsw-alias-bg-module-platform);\n  font: 8px/10px var(--ds-font-family-code);\n  font-variant-numeric: tabular-nums;\n  user-select: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n.bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n  grid-area: 1 / 1;\n  max-width: 64px;\n  overflow: hidden;\n  opacity: 1;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n  max-width: 0;\n  opacity: 0;\n}\n\n.bt_TrajectoryTable_turnLabelActive_oHLGco {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-trajectory-accent) 55%,\n    var(--dsw-alias-label-tertiary)\n  );\n  background: var(--trajectory-turn-accent);\n}\n\n.bt_TrajectoryTable_eventInner_4FCDOJ {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  min-width: 0;\n  height: 100%;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9 {\n  display: flex;\n  flex: none;\n  align-items: flex-end;\n  justify-content: flex-end;\n  width: 76px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9:where(:lang(zh)) {\n  width: 44px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9 [role='tooltip'] {\n  border: 0;\n  background: var(--dsw-alias-bg-layer-2);\n  box-shadow: var(--dsw-elevation-panel);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_content_xtMqjv {\n  padding-left: 4px !important;\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_kindTag_QR8Bo3 {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  box-sizing: border-box;\n  height: 19px;\n  padding: 0 5px;\n  border: 1px solid transparent;\n  border-radius: var(--dsw-radius-xs);\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 650;\n  letter-spacing: 0.035em;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_kindTagIcon_faG1Xu {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 0;\n  height: 13px;\n  overflow: hidden;\n  opacity: 0;\n  transform: scale(0.8);\n}\n\n.bt_TrajectoryTable_kindTagLabel_DubDfc {\n  display: inline-block;\n  max-width: 72px;\n  overflow: hidden;\n  opacity: 1;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E .bt_TrajectoryTable_kindSlot_0oaQf9 .bt_TrajectoryTable_message_Kosacf {\n  justify-content: center;\n  width: 100%;\n}\n\n@container trajectory-table (max-width: 620px) {\n  .bt_TrajectoryTable_eventColumn_UTt04J {\n    width: 50px;\n  }\n\n  .bt_TrajectoryTable_event_ApG3nH {\n    padding-right: 3px !important;\n    padding-left: 28px !important;\n  }\n\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n    --request-boundary-base-left: 6px;\n  }\n\n  .bt_TrajectoryTable_kindSlot_0oaQf9 {\n    width: 19px;\n  }\n\n  .bt_TrajectoryTable_kindTag_QR8Bo3,\n  .bt_TrajectoryTable_table_qfAk6E .bt_TrajectoryTable_kindSlot_0oaQf9 .bt_TrajectoryTable_message_Kosacf {\n    justify-content: center;\n    width: 19px;\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu {\n    width: 13px;\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  .bt_TrajectoryTable_kindTagLabel_DubDfc {\n    max-width: 0;\n    opacity: 0;\n  }\n\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ {\n    max-width: 0;\n    opacity: 0;\n  }\n\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    max-width: 64px;\n    opacity: 1;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .bt_TrajectoryTable_eventColumn_UTt04J,\n  .bt_TrajectoryTable_event_ApG3nH,\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y,\n  .bt_TrajectoryTable_kindSlot_0oaQf9,\n  .bt_TrajectoryTable_kindTag_QR8Bo3,\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu,\n  .bt_TrajectoryTable_kindTagLabel_DubDfc,\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    transition-duration: 180ms;\n    transition-timing-function: var(--ds-ease-in-out);\n  }\n\n  .bt_TrajectoryTable_eventColumn_UTt04J,\n  .bt_TrajectoryTable_kindSlot_0oaQf9 {\n    transition-property: width;\n  }\n\n  .bt_TrajectoryTable_event_ApG3nH {\n    transition-property: padding-right, padding-left;\n  }\n\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n    transition-property: left;\n  }\n\n  .bt_TrajectoryTable_kindTag_QR8Bo3 {\n    transition-property: padding-right, padding-left;\n  }\n\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu {\n    transition-property: width, opacity, transform;\n  }\n\n  .bt_TrajectoryTable_kindTagLabel_DubDfc,\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    transition-property: max-width, opacity;\n  }\n}\n\n.bt_TrajectoryTable_user_EiaeE6 {\n  color: var(--dsw-alias-state-business-primary);\n  background: var(--dsw-alias-state-business-tertiary);\n}\n\n.bt_TrajectoryTable_systemNeutral_wBnUUo {\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-module-platform);\n}\n\n.bt_TrajectoryTable_contextGreen_b5rkgS {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}\n\n.bt_TrajectoryTable_compacted_3aTcSn {\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-module-platform);\n}\n\n.bt_TrajectoryTable_compactedSummary_ty-j09 {\n  margin-top: 12px;\n  padding: 0 0 14px;\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_promptDiffSections_v3FFVc {\n  display: flex;\n  max-height: 100%;\n  flex-direction: column;\n  padding: 10px 14px 14px;\n  gap: 14px;\n  overflow: auto;\n}\n\n.bt_TrajectoryTable_promptDiffSection_MRiY64 {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_promptDiffTitle_9JuX4g {\n  margin: 0 0 6px;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-strong-13);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_promptDiff_VkrRb4 {\n  margin: 0;\n  overflow: auto;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: 11px/17px var(--ds-font-family-code);\n  white-space: pre;\n}\n\n.bt_TrajectoryTable_promptDiff_VkrRb4 span {\n  display: block;\n  min-width: max-content;\n  padding: 0 6px;\n}\n\n.bt_TrajectoryTable_promptDiffLinemeta_tLOrjX {\n  color: var(--dsw-alias-label-caption);\n  background: var(--dsw-alias-bg-module-platform);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_promptDiffLinecontext_jNpM0B {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_promptDiffLineadded_sSKAHi {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 72%,\n    var(--dsw-alias-label-primary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}\n\n.bt_TrajectoryTable_promptDiffLineremoved_0GLhdY {\n  color: var(--dsw-alias-state-error-primary);\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-error-primary) 12%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_assistantVioletBright_kmQW8n {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_toolAmber_s0U4wU {\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n}\n\n.bt_TrajectoryTable_subtoolAmber_oyh_9d {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-label) 62%,\n    var(--dsw-alias-label-tertiary)\n  );\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-tertiary) 58%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_contentText_W_U6-c {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_toolCallOnly_9UZkuV {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='turn'] td,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='assistant'] td,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='tool'] td {\n  height: 20px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary] {\n  cursor: pointer;\n  outline: none;\n  transition: background-color 120ms var(--ds-ease-in-out);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary]:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary]:focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTable_collapsedTurnContent_4SL7Wn {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  color: var(--dsw-alias-label-secondary);\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.bt_TrajectoryTable_collapsedTurnEllipsis_YbEN8y {\n  flex: none;\n  margin-right: 6px;\n  color: var(--dsw-alias-label-tertiary);\n  font-weight: 600;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_collapsedTurnText_ROgIqU {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_resultPreview__PAl0L {\n  display: grid;\n  grid-template-columns:\n    clamp(\n      180px,\n      var(--trajectory-tool-request-width, calc(36cqw - 56px)),\n      480px\n    )\n    minmax(0, 1fr);\n  align-items: center;\n  min-width: 0;\n  gap: 8px;\n}\n\n.bt_TrajectoryTable_resultRequest_fX5Dw2,\n.bt_TrajectoryTable_inlineResultText_amcgP3 {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_toolCallNameTypeface_mYdbmm {\n  color: var(--dsw-alias-label-primary);\n  font: 400 12px/18px Menlo, Consolas, 'Liberation Mono', 'PingFang SC',\n    'Microsoft YaHei';\n}\n\n.bt_TrajectoryTable_toolCallPayload_RY4mmt {\n  margin-left: 7px;\n  color: var(--dsw-alias-label-secondary);\n  font: 400 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='tool'] .bt_TrajectoryTable_contentText_W_U6-c,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_contentText_W_U6-c,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='tool'] .bt_TrajectoryTable_resultPreview__PAl0L,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_resultPreview__PAl0L {\n  font-family: var(--ds-font-family-code);\n  font-size: 12px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv {\n  padding-left: 26px;\n}\n\n.bt_TrajectoryTable_inlineResult_v4z2_R {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_noOutputText_o_3gcc {\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_arrow_bvXwEE {\n  flex: none;\n  margin-right: 8px;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_error_Q9RpaF {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dd.bt_TrajectoryTable_error_Q9RpaF {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_errorPayload_cgEhYc {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_errorPayload_cgEhYc .bt_TrajectoryTable_resultBlockText_CiMsCo {\n  color: inherit;\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_jsonPayload_gOir54.bt_TrajectoryTable_errorPayload_cgEhYc,\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_jsonPreview_fhOE3c.bt_TrajectoryTable_errorPayload_cgEhYc {\n  --json-tree-property: var(--dsw-alias-state-error-primary);\n  --json-tree-string: var(--dsw-alias-state-error-primary);\n  --json-tree-number: var(--dsw-alias-state-error-primary);\n  --json-tree-keyword: var(--dsw-alias-state-error-primary);\n  --json-tree-punctuation: var(--dsw-alias-state-error-primary);\n  --json-tree-icon: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH {\n  position: relative;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  width: clamp(320px, 38%, 440px);\n  max-width: calc(100% - 280px);\n  min-width: 0;\n  min-height: 0;\n  border-left: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_detailsResizeHandle_BpTEDx {\n  position: absolute;\n  z-index: 6;\n  top: 0;\n  bottom: 0;\n  left: -4px;\n  width: 8px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: col-resize;\n  touch-action: none;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_detailsResizeHandle_BpTEDx:focus-visible {\n  outline: none;\n}\n\n.bt_TrajectoryTable_detailsHeader_x9S6Zm {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  height: 42px;\n  padding: 0 8px 0 12px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bt_TrajectoryTable_detailsTitle_AoviUn {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  gap: 8px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_requestDetailsDot_gmlHKA {\n  flex: none;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  corner-shape: round;\n  background: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_requestDetailsName_bAa9c3 {\n  flex: none;\n  font: 500 12px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_detailsLocation_J0RItF {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_close_XeXehI {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 18px;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_close_XeXehI:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k {\n  display: flex;\n  flex: none;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  height: 34px;\n  padding: 0 8px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  gap: 1px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  overscroll-behavior-x: contain;\n  scrollbar-width: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k::-webkit-scrollbar {\n  display: none;\n}\n\n.bt_TrajectoryTable_detailTab_dnFNRF {\n  position: relative;\n  flex: none;\n  padding: 0 9px;\n  border: 0;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  cursor: pointer;\n  font: var(--dsw-font-xs-13);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_detailTab_dnFNRF:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s::after {\n  position: absolute;\n  right: 9px;\n  bottom: 0;\n  left: 9px;\n  height: 2px;\n  border-radius: 1px 1px 0 0;\n  background: var(--dsw-alias-state-business-primary);\n  content: '';\n}\n\n.bt_TrajectoryTable_close_XeXehI:focus-visible,\n.bt_TrajectoryTable_detailTab_dnFNRF:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K {\n  flex: 1;\n  min-height: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: var(--dsh-trajectory-bottom-clearance, 0px);\n  scrollbar-gutter: stable;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  padding-bottom: calc(12px + var(--dsh-trajectory-bottom-clearance, 0px));\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv > .bt_TrajectoryTable_overview_LDwNCJ {\n  flex: 0 1 auto;\n  min-height: 0;\n  padding-bottom: 0;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv > .bt_TrajectoryTable_compactedSummary_ty-j09 {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n}\n\n.bt_TrajectoryTable_summaryScrollRegion_E9DkdV {\n  --dsh-scrollbar-thumb: transparent;\n  --dsh-scrollbar-thumb-hover: transparent;\n}\n\n.bt_TrajectoryTable_summaryScrollRegion_E9DkdV:focus-within {\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_summaryScrollRegion_E9DkdV:hover {\n    --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n    --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n  }\n}\n\n.bt_TrajectoryTable_compactedSummary_ty-j09 .bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  padding-right: 18px;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ {\n  margin: 0;\n  padding: 8px 0;\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_overviewParentLinks_onT3iP {\n  display: flex;\n  gap: 14px;\n}\n\n.bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO {\n  all: unset;\n  display: inline-flex;\n  align-items: center;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n  font: inherit;\n  gap: 1px;\n  opacity: 1;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK {\n  flex: none;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:focus-visible .bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK {\n  color: var(--dsw-alias-label-primary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:hover .bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:focus-visible {\n  color: var(--dsw-alias-label-primary);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ > div {\n  display: grid;\n  grid-template-columns: 94px minmax(0, 1fr);\n  min-height: 22px;\n  padding: 0 14px;\n  align-items: center;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ > .bt_TrajectoryTable_requestTokenDetail_3wWQOZ dt {\n  padding-left: 12px;\n}\n\n.bt_TrajectoryTable_usagePanel_IBopaB {\n  padding: 4px 0 10px;\n}\n\n.bt_TrajectoryTable_usageGroup_xuIa90 + .bt_TrajectoryTable_usageGroup_xuIa90 {\n  margin-top: 8px;\n}\n\n.bt_TrajectoryTable_usageHeading_wqSwmH {\n  margin: 0;\n  padding: 4px 14px 1px;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-strong-13);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_usageGroup_xuIa90 .bt_TrajectoryTable_overview_LDwNCJ {\n  padding: 0;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dt {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dd {\n  min-width: 0;\n  margin: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_timestampToggle_OOUyti {\n  all: unset;\n  color: inherit;\n  cursor: pointer;\n  font: inherit;\n  user-select: text;\n}\n\n.bt_TrajectoryTable_timestampToggle_OOUyti:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_overviewSections_G30n5s {\n  display: flex;\n  flex: 1;\n  min-height: min-content;\n  flex-direction: column;\n  overflow: hidden;\n  border-top: 0;\n}\n\n.bt_TrajectoryTable_overviewSection_UMbxN0 {\n  display: flex;\n  flex: 1 1 0;\n  max-height: max-content;\n  min-height: 24px;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_overviewSection_UMbxN0 + .bt_TrajectoryTable_overviewSection_UMbxN0 {\n  padding-top: 2px;\n}\n\n.bt_TrajectoryTable_overviewHeading_9tOPuW {\n  display: flex;\n  flex: none;\n  align-items: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0 0 3px 14px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: var(--dsw-font-xs-strong-13);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_resultSections_RGuWZ5 {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 0 12px;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_jsonPayload_gOir54 {\n  min-height: 0;\n  overflow: visible;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_resultBlocks_9td9Kg,\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_payload_zRquMY,\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_noPayload_7dMYrF {\n  min-height: 0;\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_resultTitle_pFvVxk {\n  margin: 0;\n  font: inherit;\n}\n\n.bt_TrajectoryTable_overviewTitle_fQhguD {\n  display: inline-flex;\n  flex: none;\n  width: max-content;\n  height: auto;\n  align-items: center;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  gap: 3px;\n  line-height: 1;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_overviewTitleIcon_jb5JXE {\n  flex: none;\n  color: var(--dsw-alias-label-caption);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewTitle_fQhguD:hover .bt_TrajectoryTable_overviewTitleIcon_jb5JXE {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_overviewTitle_fQhguD:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_overviewTitle_fQhguD:focus-visible .bt_TrajectoryTable_overviewTitleIcon_jb5JXE {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  overscroll-behavior: contain;\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr[data-scroll-more] {\n  mask-image: linear-gradient(to bottom, #000 calc(100% - 12px), transparent);\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr > :last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.bt_TrajectoryTable_programDescription_RrDf1J {\n  flex: none;\n  margin: 0;\n  padding: 8px 14px 2px;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xs-13);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bt_TrajectoryTable_programIcon_CP_h94 {\n  margin-right: 4px;\n  vertical-align: -2px;\n}\n\n.bt_TrajectoryTable_programSummary_YiCTkq {\n  margin-left: 5px;\n  font-family: var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_detailBodyProgram_74PHCq,\n.bt_TrajectoryTable_programPanel_XIc3sM {\n  display: flex;\n  min-height: 0;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_programPanel_XIc3sM {\n  flex: 1;\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_programActions_JqbwEp {\n  display: inline-flex;\n  flex: none;\n  height: 16px;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  padding-right: 14px;\n}\n\n.bt_TrajectoryTable_programLanguage_lCq8AA {\n  padding-right: 4px;\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe {\n  display: inline-flex;\n  box-sizing: border-box;\n  width: 20px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 0;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_programAction_5AWzqe:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe[aria-pressed='true'] {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe[data-state='failed'] {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_ {\n  min-width: 0;\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_programPanel_XIc3sM > .bt_TrajectoryTable_programContent_mr8JT_ {\n  flex: 1;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez {\n  margin: 0 !important;\n  border-radius: 0;\n  background: var(--dsw-alias-bg-layer-1);\n  --dsl-code-block-line-white-space: pre;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez :where(pre) {\n  padding: 2px 14px 8px;\n  overflow: visible;\n  border-radius: 0;\n  background: var(--dsw-alias-bg-layer-1) !important;\n  font: 12px/16px var(--ds-font-family-code);\n  overflow-wrap: normal;\n  word-break: normal;\n  tab-size: 2;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez pre code > .line {\n  box-sizing: border-box;\n  width: max-content;\n  min-width: 100%;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_[data-wrap='true'] .bt_TrajectoryTable_programSource_84M3Ez {\n  --dsl-code-block-line-white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_[data-wrap='true'] .bt_TrajectoryTable_programSource_84M3Ez pre code > .line {\n  width: auto;\n  overflow-wrap: anywhere;\n  word-break: break-all;\n}\n\n.bt_TrajectoryTable_programOutput_Og2Bj5 {\n  margin: 0;\n  padding: 2px 14px 8px;\n  color: var(--dsw-alias-label-primary);\n  font: 12px/16px var(--ds-font-family-code);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bt_TrajectoryTable_programError_3hMSz7::first-line {\n  color: var(--dsw-alias-state-error-primary);\n  font-weight: 600;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_jsonPreview_fhOE3c > :first-child,\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_schemaTree_3maIWU > :first-child {\n  padding-top: 2px;\n  padding-bottom: 0;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_schemaTree_3maIWU {\n  margin-bottom: 0;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_overview_LDwNCJ {\n  padding: 2px 0 0;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_overview_LDwNCJ > div {\n  min-height: 22px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']),\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) {\n  gap: 8px;\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) h1,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) h1 {\n  font: 600 16px/22px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) h2,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) h2 {\n  font: 600 15px/22px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h3, h4, h5, h6),\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) :where(h3, h4, h5, h6) {\n  font: 600 14px/20px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :not(pre) > code,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) :not(pre) > code {\n  font: 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) table,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) table {\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > :first-child {\n  margin-top: 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > :last-child {\n  margin-bottom: 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h1, h2, h3) {\n  margin: 12px 0 6px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h4, h5, h6) {\n  margin: 10px 0 5px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(p, ul, ol) {\n  margin: 8px 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) li:not(:first-child) {\n  margin-top: 3px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) blockquote {\n  margin-top: 8px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) hr {\n  margin: 14px 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > .md-code-block {\n  margin: 10px 0;\n}\n\n.bt_TrajectoryTable_assistantContent_AG912s .bt_TrajectoryTable_markdownPayload_CsUZcJ,\n.bt_TrajectoryTable_assistantContent_AG912s .bt_TrajectoryTable_payload_zRquMY {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_thinkingQuote_8bhmqn {\n  --dsh-content-font-size-secondary: 13px;\n  --dsh-content-font-delta-secondary: 0px;\n  margin: 6px 14px 0 12px;\n  padding-left: 6px;\n  border-left: 2px solid var(--dsw-alias-markdown-citation);\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_thinkingQuoteOnlyPreview_-qIaDn {\n  margin-bottom: 8px;\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K > .bt_TrajectoryTable_assistantContentRendered_d98IKn .bt_TrajectoryTable_thinkingQuote_8bhmqn {\n  margin-top: 14px;\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  cursor: pointer;\n  font: 600 12px/18px var(--dsw-font-family);\n  gap: 2px;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_thinkingChevron_mBPwJ3 {\n  flex: none;\n  transition: transform 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK[aria-expanded='true'] .bt_TrajectoryTable_thinkingChevron_mBPwJ3 {\n  transform: rotate(90deg);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_thinkingToggle_JW9hdK:hover {\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_markdownPreview_uI4YWV,\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_markdownPayload_CsUZcJ,\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_payload_zRquMY {\n  min-height: 0;\n  padding: 2px 0;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_assistantOutput_e6Ffzt {\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV {\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  min-height: 100%;\n  padding: 14px;\n}\n\n.bt_TrajectoryTable_jsonPayload_gOir54 {\n  min-height: 100%;\n}\n\n.bt_TrajectoryTable_jsonPreview_fhOE3c {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_schema_2cLtnU {\n  min-height: 100%;\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_schemaPreview_rNQTYn {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_schemaIntro_HUQtip {\n  padding: 12px 14px 6px;\n}\n\n.bt_TrajectoryTable_schemaPreview_rNQTYn .bt_TrajectoryTable_schemaIntro_HUQtip {\n  padding-top: 2px;\n}\n\n.bt_TrajectoryTable_schemaName_4ZiI8h {\n  margin: 0;\n  color: var(--dsw-alias-label-primary);\n  font: 600 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_schemaDescription__yqKqT {\n  margin: 2px 0 0;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-13);\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_schemaParameters_WkpZiK {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_schemaParametersTitle_n3IAot {\n  margin: 0;\n  padding: 4px 14px 2px;\n  color: var(--dsw-alias-label-tertiary);\n  font: 600 11px/16px var(--dsw-font-family);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_schemaTree_3maIWU {\n  margin: 0 6px 8px 0;\n}\n\n.bt_TrajectoryTable_payload_zRquMY {\n  box-sizing: border-box;\n  min-height: 100%;\n  margin: 0;\n  padding: 14px;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-markdown-code-block);\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_payloadPreview_EAdNGv {\n  min-height: 0;\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_sourceBlocks_C6ZrYe {\n  box-sizing: border-box;\n  min-height: 100%;\n  padding: 12px 14px;\n}\n\n.bt_TrajectoryTable_sourceBlock_xUq4zJ + .bt_TrajectoryTable_sourceBlock_xUq4zJ {\n  margin-top: 14px;\n}\n\n.bt_TrajectoryTable_sourceBlockHeader_a8uXfy,\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  margin-bottom: 3px;\n  gap: 3px;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV {\n  all: unset;\n  display: flex;\n  align-items: center;\n  width: max-content;\n  margin-bottom: 3px;\n  gap: 3px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_sourceBlockLabel_LH3cfA {\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n  flex: none;\n  color: var(--dsw-alias-label-caption);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:hover .bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:focus-visible {\n  outline: none;\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:focus-visible .bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_sourceBlockContent_XoJ0B7 {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_messageImages_RfKfdd {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 14px 14px;\n  gap: 8px;\n}\n\n.bt_TrajectoryTable_attachments_E96dbm {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 14px 14px;\n  padding: 0;\n  gap: 8px;\n  list-style: none;\n}\n\n.bt_TrajectoryTable_attachmentsPreview_NcR8cV {\n  margin-block: 6px 8px;\n  gap: 6px;\n}\n\n.bt_TrajectoryTable_attachmentRow_oUBiDA {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  padding: 8px;\n  gap: 10px;\n  border: 0.5px solid var(--dsw-alias-border-l2-darkmode-thin);\n  border-radius: var(--dsw-radius-lg);\n}\n\n.bt_TrajectoryTable_attachmentIcon_UKoXGL {\n  display: grid;\n  flex: 0 0 48px;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n}\n\n.bt_TrajectoryTable_attachmentInfo_VyRFuz {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n  gap: 3px;\n}\n\n.bt_TrajectoryTable_attachmentName_Uk44An {\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  font-size: 12px;\n  line-height: 18px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_attachmentMetadata_IzXL36 {\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM {\n  margin-block: 8px;\n  border: 0.5px solid var(--dsw-alias-border-l2-darkmode-thin);\n  border-radius: var(--dsw-radius-md);\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary {\n  padding: 8px;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary .bt_TrajectoryTable_attachmentName_Uk44An {\n  display: block;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > pre {\n  padding: 0 8px 8px;\n}\n\n.bt_TrajectoryTable_assistantToolCalls_LlhL2V {\n  box-sizing: border-box;\n  max-width: 100%;\n  margin: 2px 14px 12px;\n  padding: 0;\n  color: var(--dsw-alias-label-secondary);\n  font: 11px/17px var(--ds-font-family-code);\n  list-style: none;\n}\n\n.bt_TrajectoryTable_assistantToolCallsPreview_cSQzRY {\n  margin-top: 2px;\n  margin-bottom: 8px;\n}\n\n.bt_TrajectoryTable_assistantToolCalls_LlhL2V li {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h {\n  all: unset;\n  display: flex;\n  box-sizing: border-box;\n  width: calc(100% + 4px);\n  min-width: 0;\n  height: 19px;\n  align-items: center;\n  margin-left: -4px;\n  padding: 0 4px;\n  border-radius: var(--dsw-radius-xs);\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_assistantToolCallButton_LVT7_h:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n  flex: none;\n  margin-right: 5px;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h:focus-visible .bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n  color: var(--dsw-alias-label-secondary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_assistantToolCallButton_LVT7_h:hover .bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n\n.bt_TrajectoryTable_assistantToolCallText_4cwwa2 {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_assistantToolCallName_TyR0np {\n  flex: none;\n  margin-right: 5px;\n  color: var(--dsw-alias-label-secondary);\n  font-weight: 500;\n}\n\n.bt_TrajectoryTable_assistantToolCallArgs_WFp7dp {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_systemPrompt_-3xuek {\n  box-sizing: border-box;\n}\n\n.bt_TrajectoryTable_toolCatalog_kYbj8S {\n  min-height: 100%;\n  padding: 8px 0 16px;\n}\n\n.bt_TrajectoryTable_toolCatalogItem_cGDuCI {\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT {\n  display: grid;\n  grid-template-columns: 12px 12px max-content minmax(0, 1fr);\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 30px;\n  padding: 4px 12px;\n  gap: 5px;\n  cursor: pointer;\n  list-style: none;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT::-webkit-details-marker {\n  display: none;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_toolCatalogSummary_SrfhkT:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_toolCatalogChevron_j04Bh4,\n.bt_TrajectoryTable_toolCatalogIcon_4W2aYB {\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_toolCatalogChevron_j04Bh4 {\n  transition: transform 100ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_toolCatalogItem_cGDuCI[open] .bt_TrajectoryTable_toolCatalogChevron_j04Bh4 {\n  transform: rotate(90deg);\n}\n\n.bt_TrajectoryTable_toolCatalogName_vJfIBm {\n  color: var(--dsw-alias-label-primary);\n  font: 500 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_toolCatalogDescription_q6Kjej {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_toolCatalogDefinition_E4Icq4 {\n  padding: 0 0 8px 29px;\n  background: var(--dsw-alias-bg-base);\n}\n\n.bt_TrajectoryTable_toolCatalogFullDescription_SjSY7e {\n  margin: 0;\n  padding: 7px 14px 4px 0;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-13);\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_toolCatalogTree_hAboUq {\n  margin-left: -14px;\n  margin-right: 6px;\n}\n\n.bt_TrajectoryTable_resultBlocks_9td9Kg {\n  display: flex;\n  min-height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 14px;\n  gap: 10px;\n}\n\n.bt_TrajectoryTable_resultBlocksPreview_WVjKr4 {\n  min-height: 0;\n  padding: 2px 14px 8px;\n  gap: 6px;\n}\n\n.bt_TrajectoryTable_resultBlockText_CiMsCo {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_noPayload_7dMYrF {\n  padding: 2px 14px 0;\n}\n\n.bt_TrajectoryTable_noPayload_7dMYrF {\n  margin: 0;\n  padding: 18px 14px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n}\n\n@media (max-width: 760px) {\n  .bt_TrajectoryTable_details_gIawuH {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: min(92%, 420px);\n    max-width: 92%;\n    border-left-color: var(--dsw-alias-border-l3);\n    box-shadow: -12px 0 32px rgba(0, 0, 0, 0.14);\n  }\n}\n\n.bt_TrajectoryTable_toolUpdatePayload_qTnDiO {\n  white-space: pre;\n  overflow-x: auto;\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="GH5K9s"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "GH5K9s");
  el.textContent = css;
  document.head.appendChild(el);
}
var TrajectoryTable_default = { "split": "bt_TrajectoryTable_split_eDViiG", "tablePane": "bt_TrajectoryTable_tablePane_KHiY-a", "historyLoading": "bt_TrajectoryTable_historyLoading_3Z7BY1", "historyLoadingBar": "bt_TrajectoryTable_historyLoadingBar_iuAaSy", "table": "bt_TrajectoryTable_table_qfAk6E", "historyLoadRow": "bt_TrajectoryTable_historyLoadRow_iZfpDw", "historyLoadButton": "bt_TrajectoryTable_historyLoadButton_kMXZ8l", "visuallyHidden": "bt_TrajectoryTable_visuallyHidden_nVQikz", "eventColumn": "bt_TrajectoryTable_eventColumn_UTt04J", "contentColumn": "bt_TrajectoryTable_contentColumn_GFcdso", "eventHeader": "bt_TrajectoryTable_eventHeader_kD88tA", "virtualSpacer": "bt_TrajectoryTable_virtualSpacer_qcuMuX", "turnRail": "bt_TrajectoryTable_turnRail_yQDSF9", "requestBoundaryControl": "bt_TrajectoryTable_requestBoundaryControl_sSuY1y", "requestBoundaryControlActive": "bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB", "event": "bt_TrajectoryTable_event_ApG3nH", "selectionRail": "bt_TrajectoryTable_selectionRail_wHs0wE", "turnLabel": "bt_TrajectoryTable_turnLabel_WNZW3a", "turnLabelFull": "bt_TrajectoryTable_turnLabelFull_WfTyoZ", "turnLabelCompact": "bt_TrajectoryTable_turnLabelCompact_bVGxV-", "turnLabelActive": "bt_TrajectoryTable_turnLabelActive_oHLGco", "eventInner": "bt_TrajectoryTable_eventInner_4FCDOJ", "kindSlot": "bt_TrajectoryTable_kindSlot_0oaQf9", "content": "bt_TrajectoryTable_content_xtMqjv", "kindTag": "bt_TrajectoryTable_kindTag_QR8Bo3", "kindTagIcon": "bt_TrajectoryTable_kindTagIcon_faG1Xu", "kindTagLabel": "bt_TrajectoryTable_kindTagLabel_DubDfc", "message": "bt_TrajectoryTable_message_Kosacf", "user": "bt_TrajectoryTable_user_EiaeE6", "systemNeutral": "bt_TrajectoryTable_systemNeutral_wBnUUo", "contextGreen": "bt_TrajectoryTable_contextGreen_b5rkgS", "compacted": "bt_TrajectoryTable_compacted_3aTcSn", "compactedSummary": "bt_TrajectoryTable_compactedSummary_ty-j09", "promptDiffSections": "bt_TrajectoryTable_promptDiffSections_v3FFVc", "promptDiffSection": "bt_TrajectoryTable_promptDiffSection_MRiY64", "promptDiffTitle": "bt_TrajectoryTable_promptDiffTitle_9JuX4g", "promptDiff": "bt_TrajectoryTable_promptDiff_VkrRb4", "promptDiffLinemeta": "bt_TrajectoryTable_promptDiffLinemeta_tLOrjX", "promptDiffLinecontext": "bt_TrajectoryTable_promptDiffLinecontext_jNpM0B", "promptDiffLineadded": "bt_TrajectoryTable_promptDiffLineadded_sSKAHi", "promptDiffLineremoved": "bt_TrajectoryTable_promptDiffLineremoved_0GLhdY", "assistantVioletBright": "bt_TrajectoryTable_assistantVioletBright_kmQW8n", "toolAmber": "bt_TrajectoryTable_toolAmber_s0U4wU", "subtoolAmber": "bt_TrajectoryTable_subtoolAmber_oyh_9d", "contentText": "bt_TrajectoryTable_contentText_W_U6-c", "toolCallOnly": "bt_TrajectoryTable_toolCallOnly_9UZkuV", "collapsedTurnContent": "bt_TrajectoryTable_collapsedTurnContent_4SL7Wn", "collapsedTurnEllipsis": "bt_TrajectoryTable_collapsedTurnEllipsis_YbEN8y", "collapsedTurnText": "bt_TrajectoryTable_collapsedTurnText_ROgIqU", "resultPreview": "bt_TrajectoryTable_resultPreview__PAl0L", "resultRequest": "bt_TrajectoryTable_resultRequest_fX5Dw2", "inlineResultText": "bt_TrajectoryTable_inlineResultText_amcgP3", "toolCallNameTypeface": "bt_TrajectoryTable_toolCallNameTypeface_mYdbmm", "toolCallPayload": "bt_TrajectoryTable_toolCallPayload_RY4mmt", "inlineResult": "bt_TrajectoryTable_inlineResult_v4z2_R", "noOutputText": "bt_TrajectoryTable_noOutputText_o_3gcc", "arrow": "bt_TrajectoryTable_arrow_bvXwEE", "error": "bt_TrajectoryTable_error_Q9RpaF", "overview": "bt_TrajectoryTable_overview_LDwNCJ", "details": "bt_TrajectoryTable_details_gIawuH", "errorPayload": "bt_TrajectoryTable_errorPayload_cgEhYc", "resultBlockText": "bt_TrajectoryTable_resultBlockText_CiMsCo", "jsonPayload": "bt_TrajectoryTable_jsonPayload_gOir54", "jsonPreview": "bt_TrajectoryTable_jsonPreview_fhOE3c", "detailsResizeHandle": "bt_TrajectoryTable_detailsResizeHandle_BpTEDx", "detailsHeader": "bt_TrajectoryTable_detailsHeader_x9S6Zm", "detailsTitle": "bt_TrajectoryTable_detailsTitle_AoviUn", "requestDetailsDot": "bt_TrajectoryTable_requestDetailsDot_gmlHKA", "requestDetailsName": "bt_TrajectoryTable_requestDetailsName_bAa9c3", "detailsLocation": "bt_TrajectoryTable_detailsLocation_J0RItF", "close": "bt_TrajectoryTable_close_XeXehI", "detailTabs": "bt_TrajectoryTable_detailTabs_gzSp2k", "detailTab": "bt_TrajectoryTable_detailTab_dnFNRF", "detailTabActive": "bt_TrajectoryTable_detailTabActive_JV0v9s", "detailBody": "bt_TrajectoryTable_detailBody_wNVH1K", "detailBodySummary": "bt_TrajectoryTable_detailBodySummary_nyRpjv", "summaryScrollRegion": "bt_TrajectoryTable_summaryScrollRegion_E9DkdV", "markdownPayload": "bt_TrajectoryTable_markdownPayload_CsUZcJ", "overviewParentLinks": "bt_TrajectoryTable_overviewParentLinks_onT3iP", "overviewHierarchyNavLink": "bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO", "overviewHierarchyJumpIconTight": "bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK", "requestTokenDetail": "bt_TrajectoryTable_requestTokenDetail_3wWQOZ", "usagePanel": "bt_TrajectoryTable_usagePanel_IBopaB", "usageGroup": "bt_TrajectoryTable_usageGroup_xuIa90", "usageHeading": "bt_TrajectoryTable_usageHeading_wqSwmH", "timestampToggle": "bt_TrajectoryTable_timestampToggle_OOUyti", "overviewSections": "bt_TrajectoryTable_overviewSections_G30n5s", "overviewSection": "bt_TrajectoryTable_overviewSection_UMbxN0", "overviewHeading": "bt_TrajectoryTable_overviewHeading_9tOPuW", "resultSections": "bt_TrajectoryTable_resultSections_RGuWZ5", "resultSection": "bt_TrajectoryTable_resultSection_Cg3eWv", "resultBlocks": "bt_TrajectoryTable_resultBlocks_9td9Kg", "payload": "bt_TrajectoryTable_payload_zRquMY", "noPayload": "bt_TrajectoryTable_noPayload_7dMYrF", "resultTitle": "bt_TrajectoryTable_resultTitle_pFvVxk", "overviewTitle": "bt_TrajectoryTable_overviewTitle_fQhguD", "overviewTitleIcon": "bt_TrajectoryTable_overviewTitleIcon_jb5JXE", "overviewPreview": "bt_TrajectoryTable_overviewPreview_IYUxsr", "programDescription": "bt_TrajectoryTable_programDescription_RrDf1J", "programIcon": "bt_TrajectoryTable_programIcon_CP_h94", "programSummary": "bt_TrajectoryTable_programSummary_YiCTkq", "detailBodyProgram": "bt_TrajectoryTable_detailBodyProgram_74PHCq", "programPanel": "bt_TrajectoryTable_programPanel_XIc3sM", "programActions": "bt_TrajectoryTable_programActions_JqbwEp", "programLanguage": "bt_TrajectoryTable_programLanguage_lCq8AA", "programAction": "bt_TrajectoryTable_programAction_5AWzqe", "programContent": "bt_TrajectoryTable_programContent_mr8JT_", "programSource": "bt_TrajectoryTable_programSource_84M3Ez", "programOutput": "bt_TrajectoryTable_programOutput_Og2Bj5", "programError": "bt_TrajectoryTable_programError_3hMSz7", "schemaTree": "bt_TrajectoryTable_schemaTree_3maIWU", "markdownPreview": "bt_TrajectoryTable_markdownPreview_uI4YWV", "assistantContent": "bt_TrajectoryTable_assistantContent_AG912s", "thinkingQuote": "bt_TrajectoryTable_thinkingQuote_8bhmqn", "thinkingQuoteOnlyPreview": "bt_TrajectoryTable_thinkingQuoteOnlyPreview_-qIaDn", "assistantContentRendered": "bt_TrajectoryTable_assistantContentRendered_d98IKn", "thinkingToggle": "bt_TrajectoryTable_thinkingToggle_JW9hdK", "thinkingChevron": "bt_TrajectoryTable_thinkingChevron_mBPwJ3", "assistantOutput": "bt_TrajectoryTable_assistantOutput_e6Ffzt", "schema": "bt_TrajectoryTable_schema_2cLtnU", "schemaPreview": "bt_TrajectoryTable_schemaPreview_rNQTYn", "schemaIntro": "bt_TrajectoryTable_schemaIntro_HUQtip", "schemaName": "bt_TrajectoryTable_schemaName_4ZiI8h", "schemaDescription": "bt_TrajectoryTable_schemaDescription__yqKqT", "schemaParameters": "bt_TrajectoryTable_schemaParameters_WkpZiK", "schemaParametersTitle": "bt_TrajectoryTable_schemaParametersTitle_n3IAot", "payloadPreview": "bt_TrajectoryTable_payloadPreview_EAdNGv", "sourceBlocks": "bt_TrajectoryTable_sourceBlocks_C6ZrYe", "sourceBlock": "bt_TrajectoryTable_sourceBlock_xUq4zJ", "sourceBlockHeader": "bt_TrajectoryTable_sourceBlockHeader_a8uXfy", "sourceBlockJumpTarget": "bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV", "sourceBlockLabel": "bt_TrajectoryTable_sourceBlockLabel_LH3cfA", "sourceBlockJumpIcon": "bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK", "sourceBlockContent": "bt_TrajectoryTable_sourceBlockContent_XoJ0B7", "messageImages": "bt_TrajectoryTable_messageImages_RfKfdd", "attachments": "bt_TrajectoryTable_attachments_E96dbm", "attachmentsPreview": "bt_TrajectoryTable_attachmentsPreview_NcR8cV", "attachmentRow": "bt_TrajectoryTable_attachmentRow_oUBiDA", "attachmentIcon": "bt_TrajectoryTable_attachmentIcon_UKoXGL", "attachmentInfo": "bt_TrajectoryTable_attachmentInfo_VyRFuz", "attachmentName": "bt_TrajectoryTable_attachmentName_Uk44An", "attachmentMetadata": "bt_TrajectoryTable_attachmentMetadata_IzXL36", "attachmentDisclosure": "bt_TrajectoryTable_attachmentDisclosure_OrBVJM", "assistantToolCalls": "bt_TrajectoryTable_assistantToolCalls_LlhL2V", "assistantToolCallsPreview": "bt_TrajectoryTable_assistantToolCallsPreview_cSQzRY", "assistantToolCallButton": "bt_TrajectoryTable_assistantToolCallButton_LVT7_h", "assistantToolCallIcon": "bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ", "assistantToolCallText": "bt_TrajectoryTable_assistantToolCallText_4cwwa2", "assistantToolCallName": "bt_TrajectoryTable_assistantToolCallName_TyR0np", "assistantToolCallArgs": "bt_TrajectoryTable_assistantToolCallArgs_WFp7dp", "systemPrompt": "bt_TrajectoryTable_systemPrompt_-3xuek", "toolCatalog": "bt_TrajectoryTable_toolCatalog_kYbj8S", "toolCatalogItem": "bt_TrajectoryTable_toolCatalogItem_cGDuCI", "toolCatalogSummary": "bt_TrajectoryTable_toolCatalogSummary_SrfhkT", "toolCatalogChevron": "bt_TrajectoryTable_toolCatalogChevron_j04Bh4", "toolCatalogIcon": "bt_TrajectoryTable_toolCatalogIcon_4W2aYB", "toolCatalogName": "bt_TrajectoryTable_toolCatalogName_vJfIBm", "toolCatalogDescription": "bt_TrajectoryTable_toolCatalogDescription_q6Kjej", "toolCatalogDefinition": "bt_TrajectoryTable_toolCatalogDefinition_E4Icq4", "toolCatalogFullDescription": "bt_TrajectoryTable_toolCatalogFullDescription_SjSY7e", "toolCatalogTree": "bt_TrajectoryTable_toolCatalogTree_hAboUq", "resultBlocksPreview": "bt_TrajectoryTable_resultBlocksPreview_WVjKr4", "toolUpdatePayload": "bt_TrajectoryTable_toolUpdatePayload_qTnDiO" };

// src/vendor/trajectory/TrajectoryTable.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var BOTTOM_FOLLOW_THRESHOLD_PX = 2;
var OLDER_LOAD_THRESHOLD_PX = 48;
var HISTORY_LOAD_ROW_HEIGHT_PX = 30;
var VIRTUALIZATION_THRESHOLD = 100;
var VIRTUAL_OVERSCAN_ROWS = 12;
var VIRTUAL_INITIAL_VIEWPORT_HEIGHT_PX = 600;
var KIND_LABEL_KEY = {
  system: "kind.system",
  user: "kind.user",
  context: "kind.context",
  compacted: "kind.compacted",
  message: "kind.assistant",
  tool: "kind.tool",
  subtool: "kind.subtool"
};
function ToolWrenchIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      width: "13",
      height: "13",
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "data-role-icon": "wrench",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M14 3.3a3.8 3.8 0 0 1-4.8 4.8l-5.1 5.1a1.6 1.6 0 1 1-2.3-2.3l5.1-5.1A3.8 3.8 0 0 1 11.7 1l-2.3 2.3 2.3 2.3L14 3.3Z" })
    }
  );
}
function InformationIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      "data-role-icon": "information",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "8", r: "6.7" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "5.5", r: ".85", fill: "currentColor", stroke: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 7.75v3.4", strokeWidth: "1.8" })
      ]
    }
  );
}
function CompactedIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      width: "13",
      height: "13",
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "data-role-icon": "compacted",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m2.5 2.5 3.75 3.75M3 6.25h3.25V3" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m13.5 2.5-3.75 3.75M13 6.25H9.75V3" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m2.5 13.5 3.75-3.75M3 9.75h3.25V13" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m13.5 13.5-3.75-3.75M13 9.75H9.75V13" })
      ]
    }
  );
}
var KIND_ICON = {
  system: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconSettingsOutlineRegular, { size: 13 }),
  user: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconUserOutlineRegular, { size: 13 }),
  context: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InformationIcon, {}),
  compacted: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CompactedIcon, {}),
  message: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconSparkleRegular, { size: 13 }),
  tool: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ToolWrenchIcon, {}),
  subtool: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ToolWrenchIcon, {})
};
var COLLAPSED_SUMMARY_LABEL_KEY = {
  turn: "request.collapsedTurn",
  assistant: "request.collapsedAssistant",
  tool: "request.collapsedTool"
};
function useStableVirtualRowStructure(rows) {
  const cache = (0, import_react2.useRef)({ rows: [], structure: [] });
  if (cache.current.rows === rows) return cache.current.structure;
  const structure = cache.current.structure.length === rows.length && rows.every((row, index) => {
    const previous = cache.current.structure[index];
    return previous?.key === row.key && previous.height === row.height;
  }) ? cache.current.structure : rows.map((row) => ({ key: row.key, height: row.height }));
  cache.current = { rows, structure };
  return structure;
}
var DETAILS_MIN_WIDTH = 320;
var DETAILS_MAX_WIDTH = 720;
var TABLE_MIN_WIDTH = 280;
var DETAILS_RESIZE_STEP = 16;
var TOOL_REQUEST_SHARE = 0.58;
var TOOL_REQUEST_MIN_WIDTH = 180;
var TOOL_REQUEST_MAX_WIDTH = 480;
var DEFAULT_TOOL_REQUEST_SHARE = 0.36;
var DEFAULT_TOOL_REQUEST_OFFSET = 56;
var SYSTEM_PROMPT_TABS = [
  { id: "system-prompt", labelKey: "tab.systemPrompt" },
  { id: "tools", labelKey: "tab.tools" }
];
var SYSTEM_UPDATE_TABS = [
  { id: "diff", labelKey: "tab.diff" },
  ...SYSTEM_PROMPT_TABS
];
var REQUEST_TABS = [
  { id: "overview", labelKey: "tab.summary" },
  { id: "options", labelKey: "tab.options" },
  { id: "usage", labelKey: "tab.usage" },
  { id: "timing", labelKey: "tab.timing" }
];
function jsonTreeLabels(t) {
  return {
    copyValue: t("copy.value"),
    copyJson: t("copy.json"),
    copyPath: t("copy.path"),
    copyPrettyJson: t("copy.prettyJson"),
    copyCompactJson: t("copy.compactJson"),
    copied: t("copied"),
    copyFailed: t("copy.failed"),
    collapseNode: t("collapse"),
    expandNode: t("expand"),
    copyButtonTitle: (action) => t("copy.optionsHint", { action })
  };
}
function markdownLabels(t) {
  return {
    code: { copyLabel: t("copy"), copiedLabel: t("copied") },
    footnotes: t("markdown.footnotes")
  };
}
function clampDetailsWidth(width, splitWidth) {
  const maxWidth = Math.max(
    DETAILS_MIN_WIDTH,
    Math.min(DETAILS_MAX_WIDTH, splitWidth - TABLE_MIN_WIDTH)
  );
  return Math.round(Math.min(Math.max(width, DETAILS_MIN_WIDTH), maxWidth));
}
function defaultToolRequestWidth(splitWidth) {
  return Math.min(
    Math.max(
      splitWidth * DEFAULT_TOOL_REQUEST_SHARE - DEFAULT_TOOL_REQUEST_OFFSET,
      TOOL_REQUEST_MIN_WIDTH
    ),
    TOOL_REQUEST_MAX_WIDTH
  );
}
function formatDurationMs(milliseconds, t) {
  if (milliseconds < 1e3) return t("unit.milliseconds", { value: Math.round(milliseconds) });
  return t("unit.seconds", {
    value: (milliseconds / 1e3).toFixed(milliseconds < 1e4 ? 2 : 1)
  });
}
function formatStartedAt(timestamp, t) {
  if (timestamp === null || !Number.isFinite(timestamp)) return t("timing.notAvailable");
  const date = new Date(timestamp);
  const two = (value) => String(value).padStart(2, "0");
  const three = (value) => String(value).padStart(3, "0");
  const time = `${two(date.getHours())}:${two(date.getMinutes())}:${two(date.getSeconds())}.${three(date.getMilliseconds())}`;
  const day = `${date.getFullYear()}-${two(date.getMonth() + 1)}-${two(date.getDate())}`;
  return `${day} ${time}`;
}
function clickSelectsText(target) {
  const selection = window.getSelection();
  return selection !== null && !selection.isCollapsed && selection.rangeCount > 0 && selection.getRangeAt(0).intersectsNode(target);
}
function StartedAtValue({ timestamp, t }) {
  const [showUnix, setShowUnix] = (0, import_react2.useState)(false);
  if (timestamp === null || !Number.isFinite(timestamp)) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("timing.notAvailable") });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      type: "button",
      className: TrajectoryTable_default.timestampToggle,
      title: showUnix ? t("timing.showLocalTime") : t("timing.showUnixTimestamp"),
      onClick: (event) => {
        if (clickSelectsText(event.currentTarget)) return;
        setShowUnix((current) => !current);
      },
      children: showUnix ? (timestamp / 1e3).toFixed(3) : formatStartedAt(timestamp, t)
    }
  ) });
}
function totalTime(metrics, t) {
  if (!metrics.timingRecorded) return t("timing.notRecorded");
  if (metrics.stepStartTime === null) return t("timing.stepStartUnavailable");
  if (metrics.completedTime === null) return t("status.pending");
  return formatDurationMs(Math.max(0, metrics.completedTime - metrics.stepStartTime), t);
}
function ttft(metrics, t) {
  if (!metrics.timingRecorded) return t("timing.notRecorded");
  if (metrics.stepStartTime === null) return t("timing.stepStartUnavailable");
  if (metrics.firstTokenTime === null) return t("timing.firstTokenUnavailable");
  return formatDurationMs(Math.max(0, metrics.firstTokenTime - metrics.stepStartTime), t);
}
function generationTime(metrics, t) {
  if (!metrics.timingRecorded || metrics.firstTokenTime === null) return t("timing.firstTokenUnavailable");
  if (metrics.completedTime === null) return t("status.pending");
  return formatDurationMs(Math.max(0, metrics.completedTime - metrics.firstTokenTime), t);
}
function throughput(metrics, t) {
  if (!metrics.usageProvided) return t("timing.usageUnavailable");
  if (metrics.outputTokens === null) return t("timing.outputTokensUnavailable");
  if (!metrics.timingRecorded || metrics.firstTokenTime === null) return t("timing.firstTokenUnavailable");
  if (metrics.completedTime === null) return t("status.pending");
  const generationSeconds = (metrics.completedTime - metrics.firstTokenTime) / 1e3;
  if (generationSeconds <= 0) return t("timing.durationTooShort");
  return t("unit.tokensPerSecond", {
    value: (metrics.outputTokens / generationSeconds).toFixed(1)
  });
}
function AssistantTimingPanel({
  metrics,
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StartedAtValue, { timestamp: metrics.stepStartTime, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.totalDuration") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: totalTime(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.ttft") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: ttft(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.generation") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: generationTime(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.throughput") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: throughput(metrics, t) })
    ] })
  ] });
}
function flattenRecords(turns) {
  return turns.flatMap((turn, section) => {
    let firstInSection = true;
    const records = turn.groups.flatMap((group) => {
      return group.cells.map((cell2, index) => {
        const turnStart = firstInSection && cell2.requestOnly !== true && cell2.kind !== "system" && (cell2.kind !== "compacted" || turn.turn === null);
        if (turnStart) firstInSection = false;
        return {
          turn: turn.turn,
          section,
          group: group.title,
          groupStart: index === 0,
          turnStart,
          cell: cell2,
          turnEnd: false
        };
      });
    });
    const last = records.at(-1);
    if (last !== void 0) last.turnEnd = true;
    return records;
  });
}
function filterRecords(records, matches) {
  const filtered = records.filter(
    (record2) => record2.cell.requestOnly !== true && matches.has(record2.cell.index)
  ).map((record2) => ({ ...record2, groupStart: false, turnStart: false, turnEnd: false }));
  const startedSections = /* @__PURE__ */ new Set();
  for (const [index, record2] of filtered.entries()) {
    const previous = filtered[index - 1];
    const next = filtered[index + 1];
    record2.groupStart = previous === void 0 || previous.section !== record2.section || previous.group !== record2.group;
    record2.turnStart = !startedSections.has(record2.section) && record2.cell.kind !== "system" && (record2.cell.kind !== "compacted" || record2.turn === null);
    if (record2.turnStart) startedSections.add(record2.section);
    record2.turnEnd = next === void 0 || next.section !== record2.section;
  }
  return filtered;
}
function requestKey(turn, group) {
  return `${turn}\0${group}`;
}
function requestIdentity(request) {
  return request.purpose === "compaction" ? `compaction\0${request.seq}` : `assistant\0${request.turn}\0${request.step}`;
}
function indexRequestBoundaries(records, requestGroups) {
  const boundaries = /* @__PURE__ */ new Map();
  for (const record2 of records) {
    const key = requestKey(record2.turn, record2.group);
    if (!requestGroups.has(key)) continue;
    if (boundaries.has(key)) continue;
    if (record2.cell.kind === "user" || record2.cell.kind === "context" || record2.cell.kind === "system") continue;
    boundaries.set(key, record2.cell.index);
  }
  return boundaries;
}
function sectionLabel(turn, t) {
  return turn === null ? t("section.betweenTurns") : t("turn.label", { turn });
}
function indexRequestNumbers(sessionNumbers) {
  const numbers = /* @__PURE__ */ new Map();
  for (const request of sessionNumbers ?? []) {
    numbers.set(requestKey(request.turn, request.group), request.number);
  }
  return numbers;
}
function indexRequestBoundaryRuns(records, requestGroups) {
  const indexes = /* @__PURE__ */ new Map();
  let runLength = 0;
  for (const record2 of records) {
    if (record2.cell.requestOnly === true) {
      indexes.set(record2.cell.index, runLength++);
      continue;
    }
    if (runLength > 0 && record2.groupStart && requestGroups.has(requestKey(record2.turn, record2.group))) {
      indexes.set(record2.cell.index, runLength);
    }
    runLength = 0;
  }
  return indexes;
}
function summarizeTurn(records, requestGroups, t) {
  const steps = new Set(
    records.map((record2) => requestKey(record2.turn, record2.group)).filter((key) => requestGroups.has(key))
  ).size;
  const toolCalls = records.filter(
    (record2) => record2.cell.kind === "tool" || record2.cell.kind === "subtool"
  ).length;
  return [
    t(steps === 1 ? "summary.steps.one" : "summary.steps.other", { count: steps }),
    t(toolCalls === 1 ? "summary.toolCalls.one" : "summary.toolCalls.other", {
      count: toolCalls
    })
  ].join(" \xB7 ");
}
function collapseTurnRecords(records, collapsedTurns, requestGroups, t) {
  const recordsByTurn = /* @__PURE__ */ new Map();
  for (const record2 of records) {
    if (record2.turn === null) continue;
    const turnRecords = recordsByTurn.get(record2.turn) ?? [];
    turnRecords.push(record2);
    recordsByTurn.set(record2.turn, turnRecords);
  }
  return records.flatMap((record2) => {
    if (record2.turn === null || !collapsedTurns.has(record2.turn)) return [record2];
    const turnRecords = recordsByTurn.get(record2.turn) ?? [record2];
    if (record2.cell.requestOnly === true || record2.cell.kind === "system") return [record2];
    const contentRecords = turnRecords.filter((candidate) => candidate.cell.requestOnly !== true && candidate.cell.kind !== "system");
    if (contentRecords.length <= 1) return [record2];
    if (record2.cell.index !== contentRecords[0]?.cell.index) return [];
    return [
      { ...record2, turnEnd: false },
      {
        ...record2,
        groupStart: false,
        turnStart: false,
        turnEnd: true,
        collapsedSummary: summarizeTurn(contentRecords.slice(1), requestGroups, t),
        collapsedSummaryKind: "turn"
      }
    ];
  });
}
function assistantToolCalls(records, assistantIndex) {
  const at = records.findIndex((record2) => record2.cell.index === assistantIndex);
  if (at === -1 || records[at]?.cell.kind !== "message") return [];
  const calls = [];
  for (let i = at + 1; i < records.length; i++) {
    const record2 = records[i];
    if (record2 === void 0) break;
    if (record2.cell.kind !== "tool" && record2.cell.kind !== "subtool") break;
    calls.push(record2);
  }
  return calls;
}
function summarizeCalls(records, t) {
  const names = [...new Set(records.map((record2) => {
    const separator = record2.cell.text.indexOf(" \xB7 ");
    return separator === -1 ? record2.cell.text : record2.cell.text.slice(0, separator);
  }).filter((name2) => name2 !== ""))];
  const count = records.length;
  const summary = t(count === 1 ? "summary.toolCalls.one" : "summary.toolCalls.other", { count });
  return names.length > 0 ? `${summary} \xB7 ${names.join(", ")}` : summary;
}
function collapseCallRecords(records, collapsedIds, kind, t) {
  const out = [];
  for (let i = 0; i < records.length; i++) {
    const record2 = records[i];
    if (record2 === void 0) continue;
    out.push(record2);
    if (record2.collapsedSummary !== void 0 || record2.cell.kind !== (kind === "assistant" ? "message" : "tool") || !collapsedIds.has(trajectoryRecordId(record2.cell))) continue;
    const calls = [];
    for (let j = i + 1; j < records.length; j++) {
      const candidate = records[j];
      if (candidate === void 0 || candidate.collapsedSummary !== void 0 || candidate.cell.kind !== "tool" && candidate.cell.kind !== "subtool" || kind === "tool" && candidate.cell.kind !== "subtool") break;
      calls.push(candidate);
    }
    if (calls.length === 0) continue;
    const last = calls.at(-1);
    out[out.length - 1] = { ...record2, turnEnd: false };
    out.push({
      ...record2,
      groupStart: false,
      turnStart: false,
      turnEnd: last?.turnEnd ?? false,
      collapsedSummary: summarizeCalls(calls, t),
      collapsedSummaryKind: kind
    });
    i += calls.length;
  }
  return out;
}
function stateOf(record2) {
  if (record2.cell.isError) return "error";
  if (record2.cell.kind === "compacted" && record2.cell.timeSeconds === null) return "running";
  if (record2.cell.assistantMetrics?.completedTime === null) return "running";
  if ((record2.cell.kind === "tool" || record2.cell.kind === "subtool") && record2.cell.outputDetail === void 0) return "running";
  return "complete";
}
function statusLabel(state, t) {
  if (state === "error") return t("status.failed");
  if (state === "running") return t("status.pending");
  return t("status.completed");
}
function requestErrorMessage(request, t) {
  if (request.errorCode === "AUTH") return t("details.failure.auth");
  if (request.error === COMPACTION_INTERRUPTED_ERROR) return t("layout.compactionInterrupted");
  return request.error;
}
function TokenRows({ cell: cell2, t }) {
  const content = cell2.output !== void 0 && cell2.think !== void 0 ? Math.max(0, cell2.output - cell2.think) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.tokens") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: cell2.output === void 0 ? "\u2014" : t("unit.tokens", { value: cell2.output }) })
    ] }),
    cell2.think !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.reasoning") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: cell2.think }) })
    ] }),
    content !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.content") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: content }) })
    ] })
  ] });
}
function inputTotal(usage) {
  if (usage.input === void 0 && usage.cacheRead === void 0 && usage.cacheWrite === void 0) return void 0;
  return (usage.input ?? 0) + (usage.cacheRead ?? 0) + (usage.cacheWrite ?? 0);
}
function UsageRows({ usage, t }) {
  if (usage === void 0) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("usage.notReported") });
  const totalInput = inputTotal(usage);
  const otherOutput = usage.output !== void 0 && usage.reasoning !== void 0 ? usage.output - usage.reasoning : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    totalInput !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.input") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: totalInput }) })
    ] }),
    usage.cacheRead !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.cached") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: usage.cacheRead }) })
    ] }),
    usage.cacheWrite !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.cacheCreated") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: usage.cacheWrite }) })
    ] }),
    usage.input !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.other") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: usage.input }) })
    ] }),
    usage.output !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.output") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: usage.output }) })
    ] }),
    usage.reasoning !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.reasoning") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: usage.reasoning }) })
    ] }),
    otherOutput !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.content") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("unit.tokens", { value: otherOutput }) })
    ] })
  ] });
}
function RequestUsagePanel({
  usage,
  cumulative,
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.usagePanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.usageGroup, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: TrajectoryTable_default.usageHeading, children: t("usage.thisRequest") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UsageRows, { usage, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.usageGroup, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: TrajectoryTable_default.usageHeading, children: t("usage.sessionCumulative") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UsageRows, { usage: cumulative, t })
    ] })
  ] });
}
function RequestOptions({
  options,
  preview = false,
  stringWrapping,
  t
}) {
  if (options === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("options.notRecorded") });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_dsh_client_ui_primitives2.JsonTree,
    {
      data: options,
      stringWrapping,
      collapsedStringLines: preview ? 3 : 12,
      label: t("options.json"),
      labels: jsonTreeLabels(t),
      className: preview ? TrajectoryTable_default.jsonPreview : TrajectoryTable_default.jsonPayload
    }
  );
}
function messageSourceLabel(source, t) {
  if (typeof source !== "object" || source === null || Array.isArray(source)) {
    return t("source.unknown");
  }
  const properties = source;
  const kind = properties.kind;
  if (kind === "user") return t("source.user");
  if (kind === "goal") {
    const round = properties.round;
    return typeof round === "number" && round > 0 ? t("source.goalRound", { round }) : t("source.goal");
  }
  if (typeof kind !== "string" || kind === "") return t("source.unknown");
  return `${kind[0]?.toUpperCase() ?? ""}${kind.slice(1)}`;
}
function MessageSource({ record: record2, stringWrapping, t }) {
  const source = record2.cell.messageSource;
  if (source === void 0) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("source.notRecorded") });
  const data = typeof source === "object" && source !== null ? source : { value: source };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_dsh_client_ui_primitives2.JsonTree,
    {
      data,
      stringWrapping,
      collapsedStringLines: 12,
      label: t("source.messageJson"),
      labels: jsonTreeLabels(t),
      className: TrajectoryTable_default.jsonPayload
    }
  );
}
function isMarkdownRecord(record2) {
  return record2.cell.kind === "user" || record2.cell.kind === "context" || record2.cell.kind === "message";
}
function parentRecords(records, record2) {
  if (record2.cell.kind !== "tool" && record2.cell.kind !== "subtool") return {};
  const at = records.findIndex((candidate) => candidate.cell.index === record2.cell.index);
  if (at === -1) return {};
  let tool;
  if (record2.cell.kind === "subtool") {
    for (let i = at - 1; i >= 0; i--) {
      const candidate = records[i];
      if (candidate === void 0 || candidate.turn !== record2.turn || candidate.group !== record2.group) break;
      if (candidate.cell.kind === "tool") {
        tool = candidate;
        break;
      }
    }
  }
  const parentCallId = tool?.cell.callId ?? record2.cell.callId;
  let message;
  if (parentCallId !== void 0) {
    message = records.find(
      (candidate) => candidate.turn === record2.turn && candidate.cell.kind === "message" && candidate.cell.sourceBlocks?.some((block) => block.callId === parentCallId) === true
    );
  }
  return { ...message === void 0 ? {} : { message }, ...tool === void 0 ? {} : { tool } };
}
function markdownSource(record2) {
  if (record2.cell.kind === "user" || record2.cell.kind === "context") {
    return record2.cell.inputDetail;
  }
  if (record2.cell.kind === "message" || record2.cell.kind === "compacted") {
    return record2.cell.outputDetail;
  }
  return void 0;
}
function detailTabs(record2) {
  if (record2.cell.kind === "system") {
    if (record2.cell.promptDetail === void 0 && record2.cell.systemPromptDetail !== void 0) {
      return SYSTEM_PROMPT_TABS.filter((tab) => tab.id === "system-prompt");
    }
    return record2.cell.previousPromptDetail === void 0 ? SYSTEM_PROMPT_TABS : SYSTEM_UPDATE_TABS;
  }
  if (record2.cell.kind === "compacted") {
    return [
      { id: "overview", labelKey: "tab.summary" },
      { id: "raw", labelKey: "tab.rawOutput" }
    ];
  }
  if (isMarkdownRecord(record2)) {
    return [
      { id: "overview", labelKey: "tab.summary" },
      { id: "rendered", labelKey: "tab.preview" },
      { id: "raw", labelKey: "tab.raw" },
      ...record2.cell.messageSource === void 0 ? [] : [{ id: "source", labelKey: "tab.source" }]
    ];
  }
  return [
    { id: "overview", labelKey: "tab.summary" },
    ...record2.cell.inputDetail ? [{
      id: "input",
      labelKey: codeProgram(record2.cell) === void 0 ? "tab.payload" : "code.source"
    }] : [],
    ...record2.cell.outputDetail || codeProgram(record2.cell) !== void 0 ? [{ id: "output", labelKey: "tab.result" }] : [],
    { id: "schema", labelKey: "tab.schema" },
    { id: "timing", labelKey: "tab.timing" }
  ];
}
function recordDisplayText(cell2, t) {
  if (isToolCallOnly(cell2, t)) return "";
  const program = codeProgram(cell2);
  if (program !== void 0) return `${PTC_TOOL_NAME} \xB7 ${program.description.replace(/\s+/g, " ")}`;
  if (cell2.previewMarkdown !== void 0) {
    const preview = trajectoryPreviewText(cell2.previewMarkdown);
    if (cell2.text === "") return preview;
    return preview === "" ? cell2.text : `${cell2.text} \xB7 ${preview}`;
  }
  if (cell2.text !== "") return cell2.text;
  const markdown = cell2.kind === "user" || cell2.kind === "context" ? cell2.inputDetail : cell2.kind === "message" ? cell2.outputDetail ?? cell2.thinkingDetail : void 0;
  return markdown === void 0 ? "" : trajectoryPreviewText(markdown);
}
function recordResultText(cell2) {
  return cell2.resultPreviewMarkdown === void 0 ? cell2.result : trajectoryPreviewText(cell2.resultPreviewMarkdown);
}
function toolCallTextParts(cell2, text) {
  if (cell2.kind !== "tool" && cell2.kind !== "subtool") return void 0;
  const program = cell2.toolName === PTC_TOOL_NAME;
  const separator = text.indexOf(" \xB7 ");
  if (separator === -1) return { name: text, program };
  return {
    program,
    name: text.slice(0, separator),
    args: text.slice(separator + 3)
  };
}
function isToolCallOnly(cell2, t) {
  return cell2.kind === "message" && !cell2.outputDetail && !cell2.thinkingDetail && cell2.text === t("layout.toolCallOnly");
}
function RecordPresentation({
  cell: cell2,
  children,
  t
}) {
  const displayText = (0, import_react2.useMemo)(
    () => recordDisplayText(cell2, t),
    [
      cell2.kind,
      cell2.text,
      cell2.toolName,
      cell2.previewMarkdown,
      cell2.inputDetail,
      cell2.outputDetail,
      cell2.thinkingDetail,
      t
    ]
  );
  const resultText = (0, import_react2.useMemo)(
    () => recordResultText(cell2),
    [cell2.result, cell2.resultPreviewMarkdown]
  );
  const toolCallOnly = isToolCallOnly(cell2, t);
  const toolCallText = toolCallTextParts(cell2, displayText);
  const listDisplayText = toolCallOnly ? t("record.toolCallOnly") : toolCallText === void 0 ? displayText : [toolCallText.name, toolCallText.args].filter(Boolean).join(" ");
  return children({
    displayText,
    listDisplayText,
    resultText,
    toolCallOnly,
    toolCallText
  });
}
function RecordListText({
  displayText,
  toolCallOnly,
  toolCallText,
  t
}) {
  if (toolCallOnly) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.toolCallOnly, children: t("record.toolCallOnly") });
  }
  if (toolCallText === void 0) return displayText || "\u2014";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: TrajectoryTable_default.toolCallNameTypeface, children: [
      toolCallText.program && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconCodeOutlineRegular, { className: TrajectoryTable_default.programIcon, size: 12 }),
      toolCallText.name || "\u2014"
    ] }),
    toolCallText.args !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: toolCallText.program ? TrajectoryTable_default.programSummary : TrajectoryTable_default.toolCallPayload, children: toolCallText.args })
  ] });
}
function MarkdownFragment({
  text,
  rendered,
  preview,
  variant = "body",
  t
}) {
  const labels = (0, import_react2.useMemo)(() => markdownLabels(t), [t]);
  if (rendered) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: preview ? TrajectoryTable_default.markdownPreview : TrajectoryTable_default.markdownPayload, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.MarkdownText, { text, labels, variant }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${preview ? TrajectoryTable_default.payloadPreview : ""}`, children: text });
}
function SourceBlocks({
  blocks,
  onOpenCall,
  t
}) {
  const attachments = new Map(recordAttachments(blocks, t).map((entry) => [entry.index, entry]));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.sourceBlocks, children: blocks.map((block, index) => {
    const attachment = attachments.get(index);
    return attachment !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("details", { className: TrajectoryTable_default.attachmentDisclosure, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.attachmentName, title: attachment.name, children: attachment.name })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: TrajectoryTable_default.sourceBlockContent, children: block.content })
    ] }, index) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.sourceBlock, children: [
      block.callId !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          type: "button",
          className: TrajectoryTable_default.sourceBlockJumpTarget,
          "aria-label": t("block.openSummary", { index: index + 1 }),
          title: t("block.openSummaryTitle"),
          onClick: () => {
            if (block.callId !== void 0) onOpenCall(block.callId);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.sourceBlockJumpIcon, size: 12 })
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.sourceBlockHeader, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: TrajectoryTable_default.sourceBlockContent, children: block.content })
    ] }, index);
  }) });
}
function recordAttachments(blocks, t) {
  let imageIndex = 0;
  return (blocks ?? []).flatMap((block, index) => {
    const ref = block.attachment ?? block.file;
    if (ref === void 0) return [];
    if (block.attachment !== void 0) imageIndex += 1;
    return [{
      block,
      index,
      name: ref.name ?? t("attachment.imageName", { index: imageIndex }),
      metadata: [
        block.attachment?.mediaType ?? (0, import_dsh_client_ui_primitives2.fileExtension)(ref.name ?? "").toUpperCase(),
        (0, import_dsh_client_ui_primitives2.fileSizeText)(ref.bytes),
        ...block.attachment === void 0 ? [] : [`${block.attachment.width} \xD7 ${block.attachment.height}`]
      ].filter(Boolean).join(" \xB7 ")
    }];
  });
}
function RecordAttachments({
  blocks,
  preview,
  renderSlot,
  loadImage,
  t
}) {
  const attachments = recordAttachments(blocks, t);
  if (attachments.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "ul",
    {
      className: preview ? `${TrajectoryTable_default.attachments} ${TrajectoryTable_default.attachmentsPreview}` : TrajectoryTable_default.attachments,
      "aria-label": t("attachment.list"),
      children: attachments.map(({ block, index, name: name2, metadata }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { className: TrajectoryTable_default.attachmentRow, children: [
        block.attachment !== void 0 ? renderSlot("conversation.trajectory.images", {
          images: [{ attachment: block.attachment, label: name2 }],
          align: "start",
          thumbnail: true,
          loadImage
        }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.attachmentIcon, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.FileTypeIcon, { path: name2 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.attachmentInfo, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.attachmentName, title: name2, children: name2 }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.attachmentMetadata, children: metadata })
        ] })
      ] }, index))
    }
  );
}
function AssistantToolCalls({
  blocks,
  preview,
  onOpenCall,
  t
}) {
  const calls = blocks?.filter((block) => block.type === "tool-call") ?? [];
  if (calls.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "ul",
    {
      className: preview ? `${TrajectoryTable_default.assistantToolCalls} ${TrajectoryTable_default.assistantToolCallsPreview}` : TrajectoryTable_default.assistantToolCalls,
      children: calls.map((call, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          type: "button",
          className: TrajectoryTable_default.assistantToolCallButton,
          title: t("block.openSummaryTitle"),
          onClick: () => {
            if (call.callId !== void 0) onOpenCall(call.callId);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "svg",
              {
                className: TrajectoryTable_default.assistantToolCallIcon,
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "path",
                  {
                    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: TrajectoryTable_default.assistantToolCallText, children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.assistantToolCallName, children: call.toolName ?? t("details.toolCall") }),
              call.content !== "" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.assistantToolCallArgs, children: call.content })
            ] })
          ]
        }
      ) }, call.callId ?? index))
    }
  );
}
function ToolGlyph() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "svg",
    {
      className: TrajectoryTable_default.toolCatalogIcon,
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ToolCatalog({
  tools,
  stringWrapping,
  t
}) {
  if (tools.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.toolsMissing") });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.toolCatalog, children: tools.map((tool, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("details", { className: TrajectoryTable_default.toolCatalogItem, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("summary", { className: TrajectoryTable_default.toolCatalogSummary, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.toolCatalogChevron, size: 12 }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ToolGlyph, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.toolCatalogName, children: tool.name }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.toolCatalogDescription, children: tool.description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.toolCatalogDefinition, children: [
      tool.description !== "" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.toolCatalogFullDescription, children: tool.description }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_dsh_client_ui_primitives2.JsonTree,
        {
          data: tool.parameters,
          stringWrapping,
          label: t("record.namedParametersJson", { name: tool.name }),
          labels: jsonTreeLabels(t),
          className: TrajectoryTable_default.toolCatalogTree
        }
      )
    ] })
  ] }, `${tool.name}:${index}`)) });
}
function promptDiffLines(before, after) {
  const patch = structuredPatch("", "", before, after, void 0, void 0, { context: 3 });
  return patch.hunks.flatMap((hunk, hunkIndex) => [
    ...hunkIndex === 0 ? [] : [{ kind: "meta", text: "" }],
    {
      kind: "meta",
      text: `@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@`
    },
    ...hunk.lines.flatMap((line) => {
      if (line.startsWith("\\")) return [];
      if (line.startsWith("+")) return [{ kind: "added", text: line }];
      if (line.startsWith("-")) return [{ kind: "removed", text: line }];
      return [{ kind: "context", text: line }];
    })
  ]);
}
function PromptDiffSection({
  title,
  before,
  after
}) {
  const lines = promptDiffLines(before, after);
  if (lines.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.promptDiffSection, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: TrajectoryTable_default.promptDiffTitle, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: TrajectoryTable_default.promptDiff, children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: TrajectoryTable_default[`promptDiffLine${line.kind}`], children: [
      line.text || " ",
      "\n"
    ] }, index)) })
  ] });
}
function SystemPromptDiff({
  before,
  after,
  t
}) {
  const toolsBefore = JSON.stringify(before.tools, null, 2);
  const toolsAfter = JSON.stringify(after.tools, null, 2);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.promptDiffSections, children: [
    before.system !== after.system && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      PromptDiffSection,
      {
        title: t("record.systemPrompt"),
        before: before.system,
        after: after.system
      }
    ),
    toolsBefore !== toolsAfter && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      PromptDiffSection,
      {
        title: t("record.tools"),
        before: toolsBefore,
        after: toolsAfter
      }
    )
  ] });
}
function ToolOutputBlocks({
  blocks,
  error,
  errorDetail,
  preview,
  renderSlot,
  loadImage
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: [
        TrajectoryTable_default.resultBlocks,
        preview ? TrajectoryTable_default.resultBlocksPreview : void 0,
        error ? TrajectoryTable_default.errorPayload : void 0
      ].filter((value) => value !== void 0).join(" "),
      children: [
        error && errorDetail !== void 0 && errorDetail !== "" && !blocks.some((block) => block.type === "text" && block.content !== "") && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: TrajectoryTable_default.resultBlockText, children: errorDetail }),
        blocks.map((block, index) => block.attachment !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.messageImages, children: renderSlot("conversation.trajectory.images", { images: [{ attachment: block.attachment }], align: "start", loadImage }) }, index) : block.content !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: TrajectoryTable_default.resultBlockText, children: block.content }, index) : null)
      ]
    }
  );
}
function MarkdownRecordContent({
  record: record2,
  rendered,
  preview = false,
  thinkingExpanded,
  onThinkingExpandedChange,
  onOpenCall,
  renderSlot,
  loadImage,
  t
}) {
  if (record2.cell.sourceBlocks?.length && record2.cell.sourceBlocks.every((block) => block.type === "tool-addition" || block.type === "tool-removal")) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${TrajectoryTable_default.toolUpdatePayload}`, children: record2.cell.inputDetail });
  }
  if (!rendered && record2.cell.sourceBlocks && record2.cell.sourceBlocks.length > 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      SourceBlocks,
      {
        blocks: record2.cell.sourceBlocks,
        onOpenCall,
        t
      }
    );
  }
  if (record2.cell.thinkingDetail) {
    if (!rendered) {
      const source2 = [
        record2.cell.thinkingDetail,
        record2.cell.outputDetail
      ].filter((value) => value !== void 0 && value !== "").join("\n\n");
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MarkdownFragment, { text: source2, rendered: false, preview, t });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `${TrajectoryTable_default.assistantContent} ${TrajectoryTable_default.assistantContentRendered}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "div",
        {
          className: preview && !record2.cell.outputDetail ? `${TrajectoryTable_default.thinkingQuote} ${TrajectoryTable_default.thinkingQuoteOnlyPreview}` : TrajectoryTable_default.thinkingQuote,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "button",
              {
                type: "button",
                className: TrajectoryTable_default.thinkingToggle,
                "aria-expanded": thinkingExpanded,
                onClick: () => {
                  onThinkingExpandedChange(!thinkingExpanded);
                },
                children: [
                  t("record.thinking"),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.thinkingChevron, size: 12 })
                ]
              }
            ),
            thinkingExpanded && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              MarkdownFragment,
              {
                text: record2.cell.thinkingDetail,
                rendered,
                preview,
                variant: "compact",
                t
              }
            )
          ]
        }
      ),
      record2.cell.outputDetail && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.assistantOutput, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        MarkdownFragment,
        {
          text: record2.cell.outputDetail,
          rendered,
          preview,
          t
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        AssistantToolCalls,
        {
          blocks: record2.cell.sourceBlocks,
          preview,
          onOpenCall,
          t
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        RecordAttachments,
        {
          blocks: record2.cell.sourceBlocks,
          preview,
          renderSlot,
          loadImage,
          t
        }
      )
    ] });
  }
  const source = markdownSource(record2);
  const hasAttachments = record2.cell.sourceBlocks?.some((block) => block.attachment !== void 0 || block.file !== void 0) === true;
  const hasToolCalls = record2.cell.kind === "message" && record2.cell.sourceBlocks?.some((block) => block.type === "tool-call") === true;
  if (!source && !hasAttachments && !hasToolCalls) {
    const emptyLabel = isToolCallOnly(record2.cell, t) ? t("record.toolCallOnly") : record2.cell.text || t("record.noContent");
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: emptyLabel });
  }
  if (!rendered || !hasAttachments && !hasToolCalls) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MarkdownFragment, { text: source ?? "", rendered, preview, t });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    source && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MarkdownFragment, { text: source, rendered: true, preview, t }),
    record2.cell.kind === "message" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      AssistantToolCalls,
      {
        blocks: record2.cell.sourceBlocks,
        preview,
        onOpenCall,
        t
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      RecordAttachments,
      {
        blocks: record2.cell.sourceBlocks,
        preview,
        renderSlot,
        loadImage,
        t
      }
    )
  ] });
}
function RecordTiming({
  record: record2,
  preview = false,
  t
}) {
  return record2.cell.kind === "message" && record2.cell.assistantMetrics !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AssistantTimingPanel, { metrics: record2.cell.assistantMetrics, t }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StartedAtValue, { timestamp: record2.cell.startedAt ?? null, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.duration") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: formatElapsedSeconds(record2.cell.timeSeconds, t) })
    ] }),
    !preview && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.source") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: record2.cell.timeSeconds === null ? t("timing.notAvailable") : t("timing.sessionTimestamps") })
    ] })
  ] });
}
function RequestTiming({
  assistant,
  anchor,
  request,
  preview = false,
  t
}) {
  if (assistant !== void 0) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordTiming, { record: assistant, preview, t });
  if (request?.startedAt !== void 0) {
    const duration = request.completedAt === null || request.completedAt === void 0 ? null : Math.max(0, (request.completedAt - request.startedAt) / 1e3);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.started") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StartedAtValue, { timestamp: request.startedAt, t })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.duration") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: formatElapsedSeconds(duration, t) })
      ] }),
      !preview && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.source") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: duration === null ? t("timing.sessionTimestampsRunning") : t("timing.sessionTimestamps") })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StartedAtValue, { timestamp: anchor?.cell.startedAt ?? null, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.duration") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: formatElapsedSeconds(null, t) })
    ] })
  ] });
}
function RecordPayload({
  record: record2,
  direction,
  preview = false,
  renderSlot,
  loadImage,
  stringWrapping,
  t
}) {
  const value = direction === "input" ? record2.cell.inputDetail : record2.cell.outputDetail;
  const missing = direction === "input" ? t("record.noPayload") : t("record.noResult");
  if (!value) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: missing });
  const error = direction === "output" && record2.cell.isError === true;
  const payloadClass = preview ? TrajectoryTable_default.jsonPreview : TrajectoryTable_default.jsonPayload;
  const payloadClassName = error ? `${payloadClass} ${TrajectoryTable_default.errorPayload}` : payloadClass;
  const json = error ? void 0 : parseJsonContainer(value);
  const singleTextResult = direction === "output" && record2.cell.outputBlocks?.length === 1 && record2.cell.outputBlocks[0]?.type === "text";
  if (singleTextResult && json !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_dsh_client_ui_primitives2.JsonTree,
      {
        data: json,
        stringWrapping,
        collapsedStringLines: preview ? 3 : 12,
        label: t("record.resultJson"),
        labels: jsonTreeLabels(t),
        className: payloadClassName
      }
    );
  }
  if (direction === "output" && record2.cell.outputBlocks?.some((block) => block.attachment !== void 0 || block.content !== "") === true) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      ToolOutputBlocks,
      {
        blocks: record2.cell.outputBlocks,
        error,
        errorDetail: error ? value : void 0,
        preview,
        renderSlot,
        loadImage
      }
    );
  }
  const markdown = direction === "input" && (record2.cell.kind === "user" || record2.cell.kind === "context") || direction === "output" && record2.cell.kind === "message";
  if (markdown) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: [
          preview ? TrajectoryTable_default.markdownPreview : TrajectoryTable_default.markdownPayload,
          error ? TrajectoryTable_default.errorPayload : void 0
        ].filter((className) => className !== void 0).join(" "),
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.MarkdownText, { text: value, labels: markdownLabels(t) })
      }
    );
  }
  if (json !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_dsh_client_ui_primitives2.JsonTree,
      {
        data: json,
        stringWrapping,
        collapsedStringLines: preview ? 3 : 12,
        label: t(direction === "input" ? "record.payloadJson" : "record.outputJson"),
        labels: jsonTreeLabels(t),
        className: payloadClassName
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "pre",
    {
      className: [
        TrajectoryTable_default.payload,
        preview ? TrajectoryTable_default.payloadPreview : void 0,
        error ? TrajectoryTable_default.errorPayload : void 0,
        value === t("record.noOutput") ? TrajectoryTable_default.noOutputText : void 0
      ].filter((value2) => value2 !== void 0).join(" "),
      children: value
    }
  );
}
function RecordSchema({
  record: record2,
  preview = false,
  stringWrapping,
  t
}) {
  if (!record2.cell.schemaDetail) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.schemaUnavailable") });
  }
  const schema = parseToolSchema(record2.cell.schemaDetail);
  if (schema !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: preview ? `${TrajectoryTable_default.schema} ${TrajectoryTable_default.schemaPreview}` : TrajectoryTable_default.schema, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: TrajectoryTable_default.schemaIntro, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: TrajectoryTable_default.schemaName, children: schema.name }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.schemaDescription, children: schema.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.schemaParameters, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: TrajectoryTable_default.schemaParametersTitle, children: t("record.parameters") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_dsh_client_ui_primitives2.JsonTree,
          {
            data: schema.parameters,
            stringWrapping,
            collapsedStringLines: preview ? 3 : 12,
            label: t("record.namedParametersJson", { name: schema.name }),
            labels: jsonTreeLabels(t),
            className: TrajectoryTable_default.schemaTree
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${preview ? TrajectoryTable_default.payloadPreview : ""}`, children: record2.cell.schemaDetail });
}
function parseToolSchema(value) {
  try {
    const parsed = JSON.parse(value);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return void 0;
    const schema = parsed;
    if (typeof schema.name !== "string" || typeof schema.description !== "string" || typeof schema.parameters !== "object" || schema.parameters === null || Array.isArray(schema.parameters)) return void 0;
    return {
      name: schema.name,
      description: schema.description,
      parameters: schema.parameters
    };
  } catch {
    return void 0;
  }
}
function parseJsonContainer(value) {
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed !== null ? parsed : void 0;
  } catch {
    return void 0;
  }
}
function InspectorCopyButton({ text, label, t }) {
  const [state, setState] = (0, import_react2.useState)("idle");
  (0, import_react2.useEffect)(() => {
    if (state === "idle") return;
    const timer = setTimeout(() => {
      setState("idle");
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);
  const title = state === "idle" ? label : t(state === "copied" ? "copied" : "copy.failed");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      type: "button",
      className: TrajectoryTable_default.programAction,
      "data-state": state,
      "aria-label": title,
      title,
      onClick: () => {
        void (0, import_dsh_client_ui_primitives2.writeClipboard)(text).then((ok) => {
          setState(ok ? "copied" : "failed");
        });
      },
      children: state === "copied" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconCheckOutlineRegular, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconCopyOutlineRegular, { size: 12 })
    }
  );
}
function ProgramInput({ program, initialWrapped, stringWrapping, onOpen, t }) {
  const contentsId = (0, import_react2.useId)();
  const [wrapped, setWrapped] = (0, import_react2.useState)(initialWrapped);
  const [showJson, setShowJson] = (0, import_react2.useState)(false);
  const actions = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: TrajectoryTable_default.programActions, children: [
    !showJson && program.language !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.programLanguage, children: program.language }),
    !showJson && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        type: "button",
        className: TrajectoryTable_default.programAction,
        "aria-label": t("record.wrapLines"),
        title: t("record.wrapLines"),
        "aria-pressed": wrapped,
        "aria-controls": contentsId,
        onClick: () => {
          const next = !wrapped;
          setWrapped(next);
          stringWrapping?.setDefault(next);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconWrapLinesOutlineRegular, { size: 12 })
      }
    ),
    onOpen === void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        type: "button",
        className: TrajectoryTable_default.programAction,
        "aria-label": t("code.originalJson"),
        title: t("code.originalJson"),
        "aria-pressed": showJson,
        "aria-controls": contentsId,
        onClick: () => {
          setShowJson((value) => !value);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 2H5a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2 2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h1" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M10 2h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2h-1" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      InspectorCopyButton,
      {
        text: showJson ? program.rawInput : program.source,
        label: t(showJson ? "copy.json" : "code.copySource"),
        t
      }
    )
  ] });
  const body = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: contentsId, className: TrajectoryTable_default.programContent, "data-wrap": wrapped, children: showJson ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_dsh_client_ui_primitives2.JsonTree,
    {
      data: program.arguments,
      label: t("record.parametersJson"),
      labels: jsonTreeLabels(t),
      stringWrapping
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_dsh_client_ui_primitives2.CodeBlock,
    {
      code: program.source,
      lang: program.language,
      lineNumbers: true,
      showHeader: false,
      className: TrajectoryTable_default.programSource,
      copyLabel: t("code.copySource"),
      copiedLabel: t("copied")
    }
  ) });
  return onOpen === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.programPanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: TrajectoryTable_default.overviewHeading, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t("code.source") }),
      actions
    ] }),
    body
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("code.source"), onOpen, actions, children: body });
}
function ProgramOutput({ record: record2, stringWrapping, onOpen, t }) {
  const output = record2.cell.outputDetail;
  const json = output === void 0 || record2.cell.isError === true ? void 0 : parseJsonContainer(output);
  const actions = output === void 0 ? void 0 : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.programActions, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InspectorCopyButton, { text: output, label: t("code.copyOutput"), t }) });
  const body = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.programContent, children: output === void 0 || output === "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t(stateOf(record2) === "running" ? "code.running" : "record.noOutput") }) : json !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_dsh_client_ui_primitives2.JsonTree,
    {
      data: json,
      label: t("record.outputJson"),
      labels: jsonTreeLabels(t),
      stringWrapping,
      collapsedStringLines: onOpen === void 0 ? 12 : 3
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: `${TrajectoryTable_default.programOutput} ${record2.cell.isError === true ? TrajectoryTable_default.programError : ""}`, children: output }) });
  return onOpen === void 0 ? body : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("code.output"), onOpen, actions, children: body });
}
function OverviewSection({
  label,
  onOpen,
  actions,
  children
}) {
  const previewRef = (0, import_react2.useRef)(null);
  const [hasMore, setHasMore] = (0, import_react2.useState)(false);
  const measureOverflow = (0, import_react2.useCallback)((preview) => {
    setHasMore(preview.scrollHeight - preview.clientHeight - preview.scrollTop > 1);
  }, []);
  (0, import_react2.useLayoutEffect)(() => {
    const preview = previewRef.current;
    const measure = () => {
      measureOverflow(preview);
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(preview);
    for (const child of preview.children) observer.observe(child);
    return () => {
      observer.disconnect();
    };
  }, [children, measureOverflow]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.overviewSection, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h3", { className: TrajectoryTable_default.overviewHeading, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          type: "button",
          className: TrajectoryTable_default.overviewTitle,
          onClick: onOpen,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.overviewTitleIcon, size: 12 })
          ]
        }
      ),
      actions
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        ref: previewRef,
        className: `${TrajectoryTable_default.overviewPreview} ${TrajectoryTable_default.summaryScrollRegion}`,
        "data-summary-scroll-region": "",
        "data-scroll-more": hasMore || void 0,
        onScroll: (event) => {
          measureOverflow(event.currentTarget);
        },
        children
      }
    )
  ] });
}
function TrajectoryTable({
  watchToolResult,
  t,
  stringWrapping,
  renderSlot,
  loadImage,
  requestNumbers: sessionRequestNumbers,
  turns,
  streamingCells = [],
  timelineFocusIndexes = null,
  searchMatchIndexes = null,
  hiddenIndexes = null,
  onSelectedIndexChange,
  onRecordSelect,
  recordSelection = null,
  recordFocus = null,
  historyLoading = false,
  olderHistoryLoading = false,
  historyStartSeq,
  hasOlderRecords = false,
  onLoadOlder,
  onClearSelection,
  collapsedTurns,
  onToggleTurn,
  collapsedAssistants,
  onToggleAssistant,
  collapsedTools,
  onToggleTool,
  inspectCallId = null,
  onInspectApplied
}) {
  const [selectedRecordId, setSelectedRecordId] = (0, import_react2.useState)(null);
  const [selectedRequest, setSelectedRequest] = (0, import_react2.useState)(null);
  const [activeTab, setActiveTab] = (0, import_react2.useState)("overview");
  const [codeWrappingOnOpen, setCodeWrappingOnOpen] = (0, import_react2.useState)(false);
  const [thinkingDisclosure, setThinkingDisclosure] = (0, import_react2.useState)();
  const [detailsWidth, setDetailsWidth] = (0, import_react2.useState)(null);
  const [toolRequestOffset, setToolRequestOffset] = (0, import_react2.useState)(null);
  const detailsResizeDrag = (0, import_react2.useRef)(null);
  const appliedRecordSelection = (0, import_react2.useRef)(null);
  const appliedRecordFocus = (0, import_react2.useRef)(null);
  const tabHistory = (0, import_react2.useRef)(/* @__PURE__ */ new Set(["overview"]));
  const rootRef = (0, import_react2.useRef)(null);
  const tablePaneRef = (0, import_react2.useRef)(null);
  const followsTableTail = (0, import_react2.useRef)(false);
  const tableScrollInitialized = (0, import_react2.useRef)(false);
  const [tableScrollReady, setTableScrollReady] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (hiddenIndexes === null) return;
    const pane = tablePaneRef.current;
    if (pane !== null) pane.scrollTop = 0;
  }, [hiddenIndexes]);
  const pendingScrollRecordId = (0, import_react2.useRef)(null);
  const loadingOlder = (0, import_react2.useRef)(false);
  const [olderLoading, setOlderLoading] = (0, import_react2.useState)(false);
  const olderLoadAnchor = (0, import_react2.useRef)(null);
  const allRecords = (0, import_react2.useMemo)(() => {
    const records2 = flattenRecords(turns);
    return hiddenIndexes === null ? records2 : records2.filter((record2) => !hiddenIndexes.has(record2.cell.index));
  }, [turns, hiddenIndexes]);
  const streamingCellsByIndex = (0, import_react2.useMemo)(
    () => new Map(streamingCells.map((cell2) => [cell2.index, cell2])),
    [streamingCells]
  );
  const currentRecord = (0, import_react2.useCallback)((record2) => {
    const cell2 = streamingCellsByIndex.get(record2.cell.index);
    return cell2 === void 0 ? record2 : { ...record2, cell: cell2 };
  }, [streamingCellsByIndex]);
  const selectedTemplate = (0, import_react2.useMemo)(
    () => selectedRecordId === null ? void 0 : allRecords.find((record2) => trajectoryRecordId(record2.cell) === selectedRecordId),
    [allRecords, selectedRecordId]
  );
  const selected = selectedTemplate === void 0 ? void 0 : currentRecord(selectedTemplate);
  const resultSeq = activeTab === "output" ? selected?.cell.resultSeq : void 0;
  const [liveResult, setLiveResult] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    setLiveResult(void 0);
    if (resultSeq === void 0 || watchToolResult === void 0) return;
    let active = true;
    const dispose = watchToolResult(resultSeq, (value) => {
      if (active) setLiveResult({ seq: resultSeq, owner: watchToolResult, value });
    });
    return () => {
      active = false;
      dispose();
    };
  }, [resultSeq, watchToolResult]);
  const resultValue = liveResult?.seq === resultSeq && liveResult?.owner === watchToolResult ? liveResult?.value : void 0;
  const selectedProgram = selected === void 0 ? void 0 : codeProgram(selected.cell);
  const thinkingExpanded = thinkingDisclosure?.recordId === selectedRecordId ? thinkingDisclosure.expanded : selected?.cell.kind === "message" && Boolean(selected.cell.thinkingDetail?.trim());
  const setThinkingExpanded = (expanded) => {
    if (selectedRecordId !== null) {
      setThinkingDisclosure({ recordId: selectedRecordId, expanded });
    }
  };
  const selectedIndex = selected?.cell.index ?? null;
  (0, import_react2.useEffect)(() => {
    onSelectedIndexChange?.(selectedIndex);
  }, [onSelectedIndexChange, selectedIndex]);
  const requestGroups = (0, import_react2.useMemo)(() => new Set(
    (sessionRequestNumbers ?? []).map((request) => requestKey(request.turn, request.group))
  ), [sessionRequestNumbers]);
  const requestBoundaries = (0, import_react2.useMemo)(
    () => indexRequestBoundaries(allRecords, requestGroups),
    [allRecords, requestGroups]
  );
  const requestNumbers = (0, import_react2.useMemo)(
    () => indexRequestNumbers(sessionRequestNumbers),
    [sessionRequestNumbers]
  );
  const records = (0, import_react2.useMemo)(() => {
    if (searchMatchIndexes !== null) return filterRecords(allRecords, searchMatchIndexes);
    const turnRecords = collapsedTurns.size === 0 ? allRecords : collapseTurnRecords(allRecords, collapsedTurns, requestGroups, t);
    const assistantRecords = collapsedAssistants.size === 0 ? turnRecords : collapseCallRecords(turnRecords, collapsedAssistants, "assistant", t);
    return collapsedTools.size === 0 ? assistantRecords : collapseCallRecords(assistantRecords, collapsedTools, "tool", t);
  }, [allRecords, collapsedAssistants, collapsedTools, collapsedTurns, requestGroups, searchMatchIndexes, t]);
  const projectedVirtualRows = (0, import_react2.useMemo)(
    () => groupTrajectoryVirtualRows(records),
    [records]
  );
  const virtualRowStructure = useStableVirtualRowStructure(projectedVirtualRows);
  const virtualizationEnabled = hasOlderRecords || records.length > VIRTUALIZATION_THRESHOLD;
  const virtualScrollMargin = hasOlderRecords ? HISTORY_LOAD_ROW_HEIGHT_PX : 0;
  const estimateVirtualRowSize = (0, import_react2.useCallback)(
    (index) => virtualRowStructure[index]?.height ?? 30,
    [virtualRowStructure]
  );
  const getVirtualRowKey = (0, import_react2.useCallback)(
    (index) => virtualRowStructure[index]?.key ?? index,
    [virtualRowStructure]
  );
  const getTableScrollElement = (0, import_react2.useCallback)(() => tablePaneRef.current, []);
  const rowVirtualizer = (0, import_react_virtual.useVirtualizer)({
    count: virtualizationEnabled ? virtualRowStructure.length : 0,
    enabled: virtualizationEnabled,
    estimateSize: estimateVirtualRowSize,
    getItemKey: getVirtualRowKey,
    getScrollElement: getTableScrollElement,
    initialRect: { width: 0, height: VIRTUAL_INITIAL_VIEWPORT_HEIGHT_PX },
    anchorTo: "end",
    overscan: VIRTUAL_OVERSCAN_ROWS,
    scrollMargin: virtualScrollMargin,
    scrollEndThreshold: BOTTOM_FOLLOW_THRESHOLD_PX,
    followOnAppend: "auto"
  });
  const virtualIndexByRecordId = (0, import_react2.useMemo)(() => {
    const indexes = /* @__PURE__ */ new Map();
    for (const [virtualIndex, row] of projectedVirtualRows.entries()) {
      for (const entry of row.entries) {
        if (entry.record.collapsedSummary === void 0) {
          indexes.set(trajectoryRecordId(entry.record.cell), virtualIndex);
        }
      }
    }
    return indexes;
  }, [projectedVirtualRows]);
  const virtualItems = virtualizationEnabled ? rowVirtualizer.getVirtualItems() : [];
  const virtualTop = Math.max(0, (virtualItems[0]?.start ?? 0) - virtualScrollMargin);
  const virtualBottom = virtualItems.length === 0 ? 0 : Math.max(
    0,
    rowVirtualizer.getTotalSize() + virtualScrollMargin - (virtualItems.at(-1)?.end ?? 0)
  );
  const renderedRecords = virtualizationEnabled ? virtualItems.flatMap((item) => {
    const row = projectedVirtualRows[item.index];
    if (row === void 0) return [];
    return row.entries.map((entry, entryIndex) => ({
      record: currentRecord(entry.record),
      position: entry.logicalIndex,
      terminalRequestBoundary: entry.record.cell.requestOnly === true && row.entries.at(-1)?.record.cell.requestOnly === true && entryIndex === row.entries.length - 1
    }));
  }) : records.map((record2, position) => ({
    record: currentRecord(record2),
    position,
    terminalRequestBoundary: record2.cell.requestOnly === true && position === records.length - 1
  }));
  const requestBoundaryRuns = (0, import_react2.useMemo)(
    () => indexRequestBoundaryRuns(records, requestGroups),
    [records, requestGroups]
  );
  const selectedPrompt = selected?.cell.kind === "system" ? selected.cell.promptDetail : void 0;
  const selectedPreviousPrompt = selected?.cell.kind === "system" ? selected.cell.previousPromptDetail : void 0;
  const selectedSystemPrompt = selectedPrompt?.system ?? selected?.cell.systemPromptDetail;
  const promptSelected = selectedSystemPrompt !== void 0;
  const selectedState = selected === void 0 ? void 0 : stateOf(selected);
  const selectedRequestInfo = selectedRequest === null ? void 0 : sessionRequestNumbers?.find((request) => requestIdentity(request) === selectedRequest.identity);
  const selectedRequestRecordTemplates = (0, import_react2.useMemo)(() => selectedRequestInfo === void 0 ? [] : allRecords.filter(
    (record2) => record2.turn === selectedRequestInfo.turn && record2.group === selectedRequestInfo.group
  ), [allRecords, selectedRequestInfo]);
  const selectedRequestRecords = selectedRequestRecordTemplates.map(currentRecord);
  const selectedRequestAssistant = selectedRequestRecords.find(
    (record2) => record2.cell.kind === "message" && record2.cell.requestOnly !== true
  );
  const selectedRequestAnchor = selectedRequestAssistant ?? selectedRequestRecords[0];
  const selectedRequestNumber = selectedRequestInfo?.number;
  const selectedRequestState = selectedRequestInfo === void 0 ? void 0 : selectedRequestInfo.status ?? (selectedRequestAssistant?.cell.assistantMetrics?.completedTime === null ? "running" : selectedRequestAssistant === void 0 && selectedRequestRecords.some((record2) => stateOf(record2) === "running") ? "running" : "complete");
  const selectedRequestToolCalls = selectedRequestRecords.filter(
    (record2) => record2.cell.kind === "tool"
  ).length;
  const selectedRequestSubtoolCalls = selectedRequestRecords.filter(
    (record2) => record2.cell.kind === "subtool"
  ).length;
  const selectedRequestResultTemplate = selectedRequestInfo?.resultSeq === void 0 ? selectedRequestAssistant : allRecords.find((record2) => record2.cell.sourceSeq === selectedRequestInfo.resultSeq);
  const selectedRequestResult = selectedRequestResultTemplate === void 0 ? void 0 : currentRecord(selectedRequestResultTemplate);
  const selectedRequestUsage = selectedRequestInfo?.usage ?? (selectedRequestAssistant === void 0 ? void 0 : {
    ...selectedRequestAssistant.cell.input === void 0 ? {} : { input: selectedRequestAssistant.cell.input },
    ...selectedRequestAssistant.cell.cacheRead === void 0 ? {} : { cacheRead: selectedRequestAssistant.cell.cacheRead },
    ...selectedRequestAssistant.cell.cacheWrite === void 0 ? {} : { cacheWrite: selectedRequestAssistant.cell.cacheWrite },
    ...selectedRequestAssistant.cell.output === void 0 ? {} : { output: selectedRequestAssistant.cell.output },
    ...selectedRequestAssistant.cell.think === void 0 ? {} : { reasoning: selectedRequestAssistant.cell.think }
  });
  const selectedRequestCumulativeUsage = selectedRequestInfo?.cumulativeUsage ?? selectedRequestUsage;
  const selectedRequestOptions = selectedRequestInfo?.requestConfig;
  const activeTurn = selectedRequestInfo === void 0 ? selected?.turn : selectedRequestInfo.turn;
  const activeSection = selectedRequestInfo === void 0 ? selected?.section : selectedRequestRecords[0]?.section;
  const selectedTabs = selectedRequestInfo !== void 0 ? REQUEST_TABS.filter((tab) => tab.id !== "options" || selectedRequestOptions !== void 0) : selected === void 0 ? [] : detailTabs(selected);
  const selectedParents = selected === void 0 ? {} : parentRecords(allRecords, selected);
  const selectedParentMessage = selectedParents.message;
  const selectedParentTool = selectedParents.tool;
  const selectedAssistantRequest = selected?.cell.kind === "message" ? requestNumbers.get(requestKey(selected.turn, selected.group)) : void 0;
  const selectedAssistantRequestInfo = selectedAssistantRequest === void 0 ? void 0 : sessionRequestNumbers?.find((request) => request.number === selectedAssistantRequest);
  const selectedAssistantRequestTarget = selectedAssistantRequestInfo === void 0 ? void 0 : { identity: requestIdentity(selectedAssistantRequestInfo) };
  const hasSelectedHierarchy = selectedAssistantRequestTarget !== void 0 || selectedParents.message !== void 0 || selectedParents.tool !== void 0;
  const splitStyle = toolRequestOffset === null ? void 0 : {
    "--trajectory-tool-request-width": `calc(58cqw - ${toolRequestOffset}px)`
  };
  const activateTab = (tab) => {
    setCodeWrappingOnOpen(stringWrapping?.getDefault() ?? false);
    tabHistory.current.delete(tab);
    tabHistory.current.add(tab);
    setActiveTab(tab);
  };
  const clearInspectorSelection = () => {
    setSelectedRecordId(null);
    setSelectedRequest(null);
  };
  const clearAllSelections = () => {
    clearInspectorSelection();
    onClearSelection?.();
  };
  const selectRecord = (0, import_react2.useCallback)((index) => {
    setCodeWrappingOnOpen(stringWrapping?.getDefault() ?? false);
    const record2 = allRecords.find((candidate) => candidate.cell.index === index);
    onRecordSelect?.(index);
    setSelectedRequest(null);
    setSelectedRecordId(record2 === void 0 ? null : trajectoryRecordId(record2.cell));
    if (record2 === void 0) return;
    const tabs = detailTabs(record2);
    const available = new Set(tabs.map((tab) => tab.id));
    const recent = [...tabHistory.current].reverse().find((tab) => available.has(tab));
    setActiveTab(recent ?? tabs[0]?.id ?? "overview");
  }, [allRecords, onRecordSelect, stringWrapping]);
  (0, import_react2.useEffect)(() => {
    if (recordSelection === null || appliedRecordSelection.current === recordSelection) return;
    appliedRecordSelection.current = recordSelection;
    selectRecord(recordSelection.index);
    const record2 = allRecords.find((candidate) => candidate.cell.index === recordSelection.index);
    pendingScrollRecordId.current = record2 === void 0 ? null : trajectoryRecordId(record2.cell);
  }, [allRecords, recordSelection, selectRecord]);
  (0, import_react2.useEffect)(() => {
    if (recordFocus === null || appliedRecordFocus.current === recordFocus) return;
    appliedRecordFocus.current = recordFocus;
    const record2 = allRecords.find((candidate) => candidate.cell.index === recordFocus.index);
    pendingScrollRecordId.current = record2 === void 0 ? null : trajectoryRecordId(record2.cell);
  }, [allRecords, recordFocus]);
  const selectRequest = (request, tab = "overview") => {
    setSelectedRecordId(null);
    setSelectedRequest(request);
    activateTab(tab);
  };
  const openRecordSummary = (target) => {
    const targetAt = allRecords.findIndex((record2) => record2.cell.index === target.cell.index);
    if (target.turn !== null && collapsedTurns.has(target.turn)) onToggleTurn(target.turn);
    if (target.cell.kind === "subtool") {
      for (let i = targetAt - 1; i >= 0; i--) {
        const candidate = allRecords[i];
        if (candidate === void 0 || candidate.cell.kind === "subtool") continue;
        if (candidate.cell.kind === "tool") {
          const toolId = trajectoryRecordId(candidate.cell);
          if (collapsedTools.has(toolId)) onToggleTool(toolId);
        }
        break;
      }
    }
    if (target.cell.kind === "tool" || target.cell.kind === "subtool") {
      for (let i = targetAt - 1; i >= 0; i--) {
        const candidate = allRecords[i];
        if (candidate === void 0 || candidate.turn !== target.turn) break;
        if (candidate.cell.kind !== "message") continue;
        const assistantId = trajectoryRecordId(candidate.cell);
        if (collapsedAssistants.has(assistantId)) onToggleAssistant(assistantId);
        break;
      }
    }
    setSelectedRequest(null);
    setSelectedRecordId(trajectoryRecordId(target.cell));
    activateTab("overview");
  };
  const openCallSummary = (callId) => {
    const target = allRecords.find((record2) => record2.cell.callId === callId);
    if (target !== void 0) openRecordSummary(target);
  };
  const expandSummary = (record2, kind) => {
    switch (kind) {
      case "turn":
        if (record2.turn !== null) onToggleTurn(record2.turn);
        return;
      case "tool":
        onToggleTool(trajectoryRecordId(record2.cell));
        return;
      case "assistant":
        onToggleAssistant(trajectoryRecordId(record2.cell));
        return;
      default:
        assertNever(kind);
    }
  };
  const openRecordSummaryRef = (0, import_react2.useRef)(openRecordSummary);
  openRecordSummaryRef.current = openRecordSummary;
  (0, import_react2.useEffect)(() => {
    if (inspectCallId === null) return;
    const target = flattenRecords(turns).find((record2) => record2.cell.callId === inspectCallId);
    if (target === void 0) return;
    openRecordSummaryRef.current(target);
    pendingScrollRecordId.current = trajectoryRecordId(target.cell);
    onInspectApplied?.();
  }, [inspectCallId, turns, onInspectApplied]);
  (0, import_react2.useEffect)(() => {
    const id = pendingScrollRecordId.current;
    if (id === null) return;
    const position = records.findIndex((record2) => trajectoryRecordId(record2.cell) === id && record2.collapsedSummary === void 0);
    if (position === -1) return;
    if (virtualizationEnabled) {
      const virtualIndex = virtualIndexByRecordId.get(id);
      if (virtualIndex === void 0) return;
      pendingScrollRecordId.current = null;
      followsTableTail.current = false;
      rowVirtualizer.scrollToIndex(virtualIndex, { behavior: "smooth", align: "center" });
      return;
    }
    pendingScrollRecordId.current = null;
    followsTableTail.current = false;
    const recordIndex = records[position]?.cell.index;
    const row = recordIndex === void 0 ? null : rootRef.current?.querySelector(`tr[data-record-index="${recordIndex}"]`);
    if (row !== void 0 && row !== null && typeof row.scrollIntoView === "function") {
      row.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [records, rowVirtualizer, virtualIndexByRecordId, virtualizationEnabled]);
  (0, import_react2.useEffect)(() => {
    if (timelineFocusIndexes === null || timelineFocusIndexes.size === 0) return;
    const focusedPositions = records.flatMap((record2, position) => record2.collapsedSummary === void 0 && record2.cell.requestOnly !== true && timelineFocusIndexes.has(record2.cell.index) ? [position] : []);
    const first = focusedPositions.at(0);
    const last = focusedPositions.at(-1);
    if (first === void 0 || last === void 0) return;
    if (!virtualizationEnabled) {
      const ledger = rootRef.current;
      if (ledger === null) return;
      const focusedRows = [
        ...ledger.querySelectorAll('tr[data-timeline-focus="inside"]')
      ];
      const firstRow = focusedRows.at(0);
      const lastRow = focusedRows.at(-1);
      if (firstRow === void 0 || lastRow === void 0) return;
      const focusHeight2 = lastRow.getBoundingClientRect().bottom - firstRow.getBoundingClientRect().top;
      const target = focusHeight2 > ledger.clientHeight ? firstRow : focusedRows[Math.floor((focusedRows.length - 1) / 2)];
      if (target !== void 0 && typeof target.scrollIntoView === "function") {
        followsTableTail.current = false;
        target.scrollIntoView({
          behavior: "smooth",
          block: focusHeight2 > ledger.clientHeight ? "start" : "center"
        });
      }
      return;
    }
    const focusedVirtualIndexes = [...new Set(focusedPositions.flatMap((position) => {
      const record2 = records[position];
      if (record2 === void 0) return [];
      const virtualIndex = virtualIndexByRecordId.get(trajectoryRecordId(record2.cell));
      return virtualIndex === void 0 ? [] : [virtualIndex];
    }))].sort((left, right) => left - right);
    const firstVirtual = focusedVirtualIndexes.at(0);
    const lastVirtual = focusedVirtualIndexes.at(-1);
    if (firstVirtual === void 0 || lastVirtual === void 0) return;
    const paneHeight = tablePaneRef.current?.clientHeight ?? 0;
    const focusHeight = projectedVirtualRows.slice(firstVirtual, lastVirtual + 1).reduce((height, row) => height + row.height, 0);
    followsTableTail.current = false;
    rowVirtualizer.scrollToIndex(
      focusHeight > paneHeight ? firstVirtual : focusedVirtualIndexes[Math.floor((focusedVirtualIndexes.length - 1) / 2)] ?? firstVirtual,
      {
        behavior: "smooth",
        align: focusHeight > paneHeight ? "start" : "center"
      }
    );
  }, [
    projectedVirtualRows,
    records,
    rowVirtualizer,
    timelineFocusIndexes,
    virtualIndexByRecordId,
    virtualizationEnabled
  ]);
  const requestOlder = (0, import_react2.useCallback)((pane, requireTop) => {
    if (!hasOlderRecords || onLoadOlder === void 0 || loadingOlder.current || olderHistoryLoading || requireTop && pane.scrollTop > OLDER_LOAD_THRESHOLD_PX) return;
    loadingOlder.current = true;
    setOlderLoading(true);
    olderLoadAnchor.current = {
      historyStartSeq,
      scrollHeight: pane.scrollHeight,
      scrollTop: pane.scrollTop
    };
    void onLoadOlder().then((advanced) => {
      if (!advanced) olderLoadAnchor.current = null;
    }).finally(() => {
      loadingOlder.current = false;
      setOlderLoading(false);
    });
  }, [hasOlderRecords, historyStartSeq, olderHistoryLoading, onLoadOlder]);
  (0, import_react2.useLayoutEffect)(() => {
    const pane = tablePaneRef.current;
    if (pane === null) return;
    const anchor = olderLoadAnchor.current;
    if (anchor !== null && anchor.historyStartSeq !== historyStartSeq) {
      if (!virtualizationEnabled) {
        pane.scrollTop = anchor.scrollTop + pane.scrollHeight - anchor.scrollHeight;
      }
      olderLoadAnchor.current = null;
      followsTableTail.current = false;
      return;
    }
    if (!tableScrollInitialized.current) {
      if (historyLoading) return;
      tableScrollInitialized.current = true;
      followsTableTail.current = true;
      if (virtualizationEnabled) rowVirtualizer.scrollToEnd({ behavior: "auto" });
      else pane.scrollTop = pane.scrollHeight;
      setTableScrollReady(true);
      return;
    }
    if (!followsTableTail.current) return;
    if (!virtualizationEnabled) pane.scrollTop = pane.scrollHeight;
  }, [
    historyLoading,
    historyStartSeq,
    rowVirtualizer,
    virtualRowStructure,
    virtualizationEnabled
  ]);
  const olderBusy = olderHistoryLoading || olderLoading;
  const showInitialLoading = historyLoading || !tableScrollReady;
  const historyRowOffset = hasOlderRecords ? 1 : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { ref: rootRef, className: TrajectoryTable_default.split, style: splitStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        ref: tablePaneRef,
        className: TrajectoryTable_default.tablePane,
        "data-trajectory-scroll": "",
        onScroll: (event) => {
          const pane = event.currentTarget;
          followsTableTail.current = pane.scrollHeight - pane.clientHeight - pane.scrollTop <= BOTTOM_FOLLOW_THRESHOLD_PX;
          if (hiddenIndexes === null) requestOlder(pane, true);
        },
        onClick: (event) => {
          if (event.target === event.currentTarget) clearAllSelections();
        },
        children: [
          showInitialLoading && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.historyLoading, role: "status", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: TrajectoryTable_default.historyLoadingBar, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: "ongoing" }),
            t("history.loadingTrajectory")
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "table",
            {
              className: TrajectoryTable_default.table,
              "data-scroll-ready": tableScrollReady || void 0,
              "aria-rowcount": records.length + historyRowOffset,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("colgroup", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("col", { className: TrajectoryTable_default.eventColumn }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("col", { className: TrajectoryTable_default.contentColumn })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tbody", { children: [
                  hasOlderRecords && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "tr",
                    {
                      className: TrajectoryTable_default.historyLoadRow,
                      "data-history-load": "",
                      "aria-rowindex": 1,
                      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { colSpan: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                        "button",
                        {
                          type: "button",
                          className: TrajectoryTable_default.historyLoadButton,
                          disabled: olderBusy || onLoadOlder === void 0,
                          "aria-label": olderBusy ? t("history.loadingEarlierAria") : t("history.loadEarlier"),
                          onClick: () => {
                            const pane = tablePaneRef.current;
                            if (pane !== null) requestOlder(pane, false);
                          },
                          children: [
                            olderBusy && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: "ongoing" }),
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: olderBusy ? t("history.loadingEarlier") : t("history.loadEarlier") }),
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.visuallyHidden, role: "status", "aria-live": "polite", children: olderBusy ? t("history.loadingEarlier") : "" })
                          ]
                        }
                      ) })
                    }
                  ),
                  virtualTop > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tr", { className: TrajectoryTable_default.virtualSpacer, "data-virtual-spacer": "top", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "td",
                    {
                      colSpan: 2,
                      style: {
                        "--trajectory-virtual-spacer-height": `${virtualTop}px`
                      }
                    }
                  ) }),
                  renderedRecords.map(({ record: record2, position, terminalRequestBoundary }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    RecordPresentation,
                    {
                      cell: record2.cell,
                      t,
                      children: ({ displayText, listDisplayText, resultText, toolCallOnly, toolCallText }) => {
                        const summaryKind = record2.collapsedSummaryKind;
                        const isCollapsedSummary = summaryKind !== void 0;
                        const isRequestOnly = record2.cell.requestOnly === true;
                        const isInitialSystem = record2.cell.kind === "system" && record2.cell.index === allRecords[0]?.cell.index;
                        const key = requestKey(record2.turn, record2.group);
                        const request = requestBoundaries.get(key) === record2.cell.index && !isCollapsedSummary && (record2.turn === null || !collapsedTurns.has(record2.turn)) ? requestNumbers.get(key) : void 0;
                        const requestInfo = request === void 0 ? void 0 : sessionRequestNumbers?.find((candidate) => candidate.number === request);
                        const requestStatus = requestInfo?.status ?? (record2.cell.isError === true ? "error" : void 0);
                        const requestRunIndex = requestBoundaryRuns.get(record2.cell.index) ?? 0;
                        const requestBoundaryStyle = {
                          "--request-boundary-offset": `${requestRunIndex * 8}px`
                        };
                        const requestLabel = request === void 0 ? void 0 : t(requestInfo?.purpose === "compaction" ? "request.labelCompaction" : "request.label", { request });
                        const requestSelected = requestInfo !== void 0 && selectedRequest?.identity === requestIdentity(requestInfo);
                        const sectionActive = record2.turn === null ? activeSection === record2.section : activeTurn === record2.turn;
                        const singleToolNotice = record2.cell.kind === "context" && record2.cell.sourceBlocks?.length === 1 && record2.cell.sourceBlocks.every((block) => block.type === "tool-addition" || block.type === "tool-removal");
                        return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                          "tr",
                          {
                            tabIndex: isRequestOnly || singleToolNotice ? -1 : 0,
                            "aria-rowindex": position + 1 + historyRowOffset,
                            "aria-label": isCollapsedSummary ? t("request.collapsedSummary", {
                              kind: t(COLLAPSED_SUMMARY_LABEL_KEY[summaryKind]),
                              summary: record2.collapsedSummary
                            }) : isRequestOnly ? t("request.rowAriaCompaction", { request: request ?? "" }) : t("request.rowAria", {
                              request: request === void 0 ? "" : t("request.rowPrefix", { request }),
                              kind: t(KIND_LABEL_KEY[record2.cell.kind]),
                              content: listDisplayText || t("request.noContent")
                            }),
                            "aria-selected": !isCollapsedSummary && !isRequestOnly && selectedIndex === record2.cell.index,
                            "data-kind": record2.cell.kind,
                            "data-trajectory-row-key": trajectoryVirtualRecordKey(record2),
                            "data-virtual-position": virtualizationEnabled ? position : void 0,
                            "data-record-index": !isCollapsedSummary && !isRequestOnly ? record2.cell.index : void 0,
                            "data-request-only": isRequestOnly || void 0,
                            "data-terminal-request-boundary": terminalRequestBoundary || void 0,
                            "data-group-start": record2.groupStart || void 0,
                            "data-turn-start": record2.turnStart || void 0,
                            "data-error": record2.cell.isError || void 0,
                            "data-running": stateOf(record2) === "running" || void 0,
                            "data-turn-end": record2.turnEnd || void 0,
                            "data-collapsed-summary": record2.collapsedSummaryKind,
                            "data-selected": !isCollapsedSummary && selectedIndex === record2.cell.index || void 0,
                            "data-timeline-focus": isCollapsedSummary || timelineFocusIndexes === null ? void 0 : timelineFocusIndexes.has(record2.cell.index) ? "inside" : "outside",
                            onClick: isRequestOnly || singleToolNotice ? void 0 : isCollapsedSummary ? () => {
                              expandSummary(record2, summaryKind);
                            } : () => {
                              selectRecord(record2.cell.index);
                            },
                            onDoubleClick: (event) => {
                              if (isCollapsedSummary || isRequestOnly || singleToolNotice) return;
                              if (record2.turn !== null && collapsedTurns.has(record2.turn)) {
                                event.preventDefault();
                                onToggleTurn(record2.turn);
                                return;
                              }
                              if (record2.cell.kind === "message" && assistantToolCalls(allRecords, record2.cell.index).length > 0) {
                                event.preventDefault();
                                onToggleAssistant(trajectoryRecordId(record2.cell));
                                return;
                              }
                              if (!record2.turnStart) return;
                              if (record2.turn === null) return;
                              if (allRecords.filter((candidate) => candidate.turn === record2.turn && candidate.cell.requestOnly !== true && candidate.cell.kind !== "system").length <= 1) return;
                              event.preventDefault();
                              onToggleTurn(record2.turn);
                            },
                            onKeyDown: (event) => {
                              if (isRequestOnly || singleToolNotice) return;
                              if (event.key !== "Enter" && event.key !== " ") return;
                              event.preventDefault();
                              if (isCollapsedSummary) {
                                expandSummary(record2, summaryKind);
                                return;
                              }
                              selectRecord(record2.cell.index);
                            },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("td", { className: TrajectoryTable_default.event, children: [
                                request !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                  "button",
                                  {
                                    type: "button",
                                    className: requestSelected ? `${TrajectoryTable_default.requestBoundaryControl} ${TrajectoryTable_default.requestBoundaryControlActive}` : TrajectoryTable_default.requestBoundaryControl,
                                    "aria-label": requestLabel,
                                    "aria-pressed": requestSelected,
                                    "data-label": requestLabel,
                                    "data-request-run-index": requestRunIndex,
                                    "data-request-status": requestStatus,
                                    style: requestBoundaryStyle,
                                    onClick: (event) => {
                                      event.stopPropagation();
                                      if (requestInfo !== void 0) {
                                        selectRequest({ identity: requestIdentity(requestInfo) });
                                      }
                                    },
                                    onDoubleClick: (event) => {
                                      event.stopPropagation();
                                    }
                                  }
                                ),
                                record2.turn !== null && activeTurn === record2.turn && !isInitialSystem && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.turnRail, "aria-hidden": "true" }),
                                !isCollapsedSummary && selectedIndex === record2.cell.index && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.selectionRail, "aria-hidden": "true" }),
                                !isCollapsedSummary && !isRequestOnly && record2.turnStart && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                  "span",
                                  {
                                    className: sectionActive ? `${TrajectoryTable_default.turnLabel} ${TrajectoryTable_default.turnLabelActive}` : TrajectoryTable_default.turnLabel,
                                    "aria-label": sectionLabel(record2.turn, t),
                                    children: record2.turn === null ? sectionLabel(record2.turn, t) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.turnLabelFull, "aria-hidden": "true", children: sectionLabel(record2.turn, t) }),
                                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: TrajectoryTable_default.turnLabelCompact, "aria-hidden": "true", children: [
                                        "#",
                                        record2.turn
                                      ] })
                                    ] })
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.eventInner, children: !isCollapsedSummary && !isRequestOnly && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                  "span",
                                  {
                                    className: TrajectoryTable_default.kindSlot,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                                      "span",
                                      {
                                        className: `${TrajectoryTable_default.kindTag} ${record2.cell.kind === "system" ? TrajectoryTable_default.systemNeutral : record2.cell.kind === "context" ? TrajectoryTable_default.contextGreen : record2.cell.kind === "compacted" ? TrajectoryTable_default.compacted : record2.cell.kind === "tool" ? TrajectoryTable_default.toolAmber : record2.cell.kind === "message" ? TrajectoryTable_default.assistantVioletBright : record2.cell.kind === "subtool" ? TrajectoryTable_default.subtoolAmber : TrajectoryTable_default[record2.cell.kind]}`,
                                        "data-role-kind": record2.cell.kind,
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                            import_dsh_client_ui_primitives2.Tooltip,
                                            {
                                              label: t(KIND_LABEL_KEY[record2.cell.kind]),
                                              side: "right",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.kindTagIcon, "aria-hidden": "true", children: KIND_ICON[record2.cell.kind] })
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.kindTagLabel, children: t(KIND_LABEL_KEY[record2.cell.kind]) })
                                        ]
                                      }
                                    )
                                  }
                                ) })
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: TrajectoryTable_default.content, children: isRequestOnly ? null : record2.collapsedSummary !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: TrajectoryTable_default.collapsedTurnContent, title: record2.collapsedSummary, children: [
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.collapsedTurnEllipsis, children: "\u2026" }),
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.collapsedTurnText, children: record2.collapsedSummary })
                              ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                                "span",
                                {
                                  className: resultText === void 0 ? TrajectoryTable_default.contentText : TrajectoryTable_default.resultPreview,
                                  title: resultText === void 0 ? listDisplayText : `${listDisplayText} \u2192 ${resultText}`,
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: resultText === void 0 ? void 0 : TrajectoryTable_default.resultRequest, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                      RecordListText,
                                      {
                                        displayText,
                                        toolCallOnly,
                                        toolCallText,
                                        t
                                      }
                                    ) }),
                                    resultText !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: record2.cell.isError ? `${TrajectoryTable_default.inlineResult} ${TrajectoryTable_default.error}` : TrajectoryTable_default.inlineResult, children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.arrow, children: "\u2192" }),
                                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                        "span",
                                        {
                                          className: resultText === t("record.noOutput") ? `${TrajectoryTable_default.inlineResultText} ${TrajectoryTable_default.noOutputText}` : TrajectoryTable_default.inlineResultText,
                                          children: resultText
                                        }
                                      )
                                    ] })
                                  ]
                                }
                              ) })
                            ]
                          }
                        );
                      }
                    },
                    trajectoryVirtualRecordKey(record2)
                  )),
                  virtualBottom > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tr", { className: TrajectoryTable_default.virtualSpacer, "data-virtual-spacer": "bottom", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "td",
                    {
                      colSpan: 2,
                      style: {
                        "--trajectory-virtual-spacer-height": `${virtualBottom}px`
                      }
                    }
                  ) })
                ] })
              ]
            }
          )
        ]
      }
    ),
    (selectedRequestInfo !== void 0 || promptSelected || selected !== void 0 && selectedState !== void 0) && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "aside",
      {
        className: TrajectoryTable_default.details,
        "aria-label": t("details.event"),
        style: detailsWidth === null ? void 0 : { width: detailsWidth },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              className: TrajectoryTable_default.detailsResizeHandle,
              role: "separator",
              "aria-label": t("details.resize"),
              "aria-controls": "trajectory-detail-panel",
              "aria-orientation": "vertical",
              tabIndex: 0,
              title: t("details.resizeTitle"),
              onDoubleClick: () => {
                setDetailsWidth(null);
                setToolRequestOffset(null);
              },
              onPointerDown: (event) => {
                if (event.button !== 0) return;
                const details = event.currentTarget.parentElement;
                if (details === null) return;
                const split = details.parentElement;
                if (split === null) return;
                const splitWidth = split.getBoundingClientRect().width;
                detailsResizeDrag.current = {
                  pointerId: event.pointerId,
                  startX: event.clientX,
                  startWidth: details.getBoundingClientRect().width,
                  splitWidth,
                  startToolRequestOffset: toolRequestOffset ?? splitWidth * TOOL_REQUEST_SHARE - defaultToolRequestWidth(splitWidth)
                };
                event.currentTarget.setPointerCapture(event.pointerId);
                event.preventDefault();
              },
              onPointerMove: (event) => {
                const drag = detailsResizeDrag.current;
                if (drag === null || drag.pointerId !== event.pointerId) return;
                const nextDetailsWidth = clampDetailsWidth(
                  drag.startWidth + drag.startX - event.clientX,
                  drag.splitWidth
                );
                setDetailsWidth(nextDetailsWidth);
                setToolRequestOffset(
                  drag.startToolRequestOffset + (nextDetailsWidth - drag.startWidth) * TOOL_REQUEST_SHARE
                );
              },
              onPointerUp: (event) => {
                if (detailsResizeDrag.current?.pointerId !== event.pointerId) return;
                detailsResizeDrag.current = null;
                event.currentTarget.releasePointerCapture(event.pointerId);
              },
              onPointerCancel: () => {
                detailsResizeDrag.current = null;
              },
              onKeyDown: (event) => {
                if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
                const details = event.currentTarget.parentElement;
                if (details === null) return;
                const split = details.parentElement;
                if (split === null) return;
                const direction = event.key === "ArrowLeft" ? 1 : -1;
                const currentDetailsWidth = details.getBoundingClientRect().width;
                const splitWidth = split.getBoundingClientRect().width;
                const nextDetailsWidth = clampDetailsWidth(
                  currentDetailsWidth + direction * DETAILS_RESIZE_STEP,
                  splitWidth
                );
                const currentToolRequestOffset = toolRequestOffset ?? splitWidth * TOOL_REQUEST_SHARE - defaultToolRequestWidth(splitWidth);
                setDetailsWidth(nextDetailsWidth);
                setToolRequestOffset(
                  currentToolRequestOffset + (nextDetailsWidth - currentDetailsWidth) * TOOL_REQUEST_SHARE
                );
                event.preventDefault();
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.detailsHeader, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.detailsTitle, children: selectedRequestInfo !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.requestDetailsDot, "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.requestDetailsName, children: t("request.label", { request: selectedRequestNumber ?? "\u2014" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.detailsLocation, children: selectedRequestInfo.purpose === "compaction" ? t("request.compaction", { section: sectionLabel(selectedRequestInfo.turn, t) }) : sectionLabel(selectedRequestInfo.turn, t) })
            ] }) : promptSelected ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `${TrajectoryTable_default.kindTag} ${TrajectoryTable_default.systemNeutral}`, children: t("kind.system") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.detailsLocation, children: selected?.cell.text })
            ] }) : selected !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "span",
                {
                  className: `${TrajectoryTable_default.kindTag} ${selected.cell.kind === "context" ? TrajectoryTable_default.contextGreen : selected.cell.kind === "compacted" ? TrajectoryTable_default.compacted : selected.cell.kind === "tool" ? TrajectoryTable_default.toolAmber : selected.cell.kind === "message" ? TrajectoryTable_default.assistantVioletBright : selected.cell.kind === "subtool" ? TrajectoryTable_default.subtoolAmber : TrajectoryTable_default[selected.cell.kind]}`,
                  children: t(KIND_LABEL_KEY[selected.cell.kind])
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: TrajectoryTable_default.detailsLocation, children: selected.cell.kind === "compacted" ? sectionLabel(selected.turn, t) : `${sectionLabel(selected.turn, t)} \xB7 ${selected.group}` })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                type: "button",
                className: TrajectoryTable_default.close,
                "aria-label": t("details.close"),
                onClick: clearInspectorSelection,
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: "\xD7" })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: TrajectoryTable_default.detailTabs, role: "tablist", "aria-label": t("details.event"), children: selectedTabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              id: `trajectory-detail-${tab.id}`,
              type: "button",
              role: "tab",
              "aria-controls": "trajectory-detail-panel",
              "aria-selected": activeTab === tab.id,
              className: activeTab === tab.id ? `${TrajectoryTable_default.detailTab} ${TrajectoryTable_default.detailTabActive}` : TrajectoryTable_default.detailTab,
              onClick: () => {
                activateTab(tab.id);
              },
              children: t(tab.labelKey)
            },
            tab.id
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "div",
            {
              id: "trajectory-detail-panel",
              className: activeTab === "overview" ? `${TrajectoryTable_default.detailBody} ${TrajectoryTable_default.detailBodySummary}` : selectedProgram !== void 0 && activeTab === "input" ? `${TrajectoryTable_default.detailBody} ${TrajectoryTable_default.detailBodyProgram}` : TrajectoryTable_default.detailBody,
              role: "tabpanel",
              "aria-labelledby": `trajectory-detail-${activeTab}`,
              children: [
                selectedRequestInfo !== void 0 && selectedRequestState !== void 0 && activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                    "dl",
                    {
                      className: `${TrajectoryTable_default.overview} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.status") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { className: selectedRequestState === "error" ? TrajectoryTable_default.error : void 0, children: statusLabel(selectedRequestState, t) })
                        ] }),
                        selectedRequestInfo.purpose === "compaction" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.purpose") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: t("request.compactionPurpose") })
                        ] }),
                        (selectedRequestInfo.provider ?? selectedRequestInfo.requestConfig?.provider) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.provider") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: selectedRequestInfo.provider ?? selectedRequestInfo.requestConfig?.provider })
                        ] }),
                        (selectedRequestInfo.model ?? selectedRequestInfo.requestConfig?.model) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.model") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: selectedRequestInfo.model ?? selectedRequestInfo.requestConfig?.model })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.toolCalls") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: selectedRequestToolCalls })
                        ] }),
                        selectedRequestSubtoolCalls > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.subtoolCalls") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: selectedRequestSubtoolCalls })
                        ] }),
                        selectedRequestInfo.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t(selectedRequestState !== "error" && selectedRequestInfo.retry !== void 0 ? "details.lastAttemptError" : "details.error") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { className: selectedRequestState === "error" ? TrajectoryTable_default.error : void 0, children: requestErrorMessage(selectedRequestInfo, t) })
                        ] }),
                        selectedRequestInfo.retry !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.retry") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: selectedRequestInfo.maxRetries === void 0 ? selectedRequestInfo.retry : t("request.retryProgress", {
                            retry: selectedRequestInfo.retry,
                            maximum: selectedRequestInfo.maxRetries
                          }) })
                        ] }),
                        selectedRequestInfo.retryDelayMs !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.retryDelay") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: formatDurationMs(selectedRequestInfo.retryDelayMs, t) })
                        ] }),
                        selectedRequestResult !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.result") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { className: TrajectoryTable_default.overviewParentLinks, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: TrajectoryTable_default.overviewHierarchyNavLink,
                              onClick: () => {
                                openRecordSummary(selectedRequestResult);
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: selectedRequestInfo.purpose === "compaction" ? t("details.compacted") : t("details.assistantMessage") }),
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                  import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular,
                                  {
                                    className: TrajectoryTable_default.overviewHierarchyJumpIconTight,
                                    size: 11
                                  }
                                )
                              ]
                            }
                          ) })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.overviewSections, children: [
                    selectedRequestOptions !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.options"), onOpen: () => {
                      activateTab("options");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RequestOptions, { options: selectedRequestOptions, preview: true, stringWrapping, t }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.usage"), onOpen: () => {
                      activateTab("usage");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UsageRows, { usage: selectedRequestUsage, t }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.timing"), onOpen: () => {
                      activateTab("timing");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      RequestTiming,
                      {
                        assistant: selectedRequestAssistant,
                        anchor: selectedRequestAnchor,
                        request: selectedRequestInfo,
                        preview: true,
                        t
                      }
                    ) })
                  ] })
                ] }),
                selectedRequestInfo !== void 0 && activeTab === "options" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RequestOptions, { options: selectedRequestOptions, stringWrapping, t }),
                selectedRequestInfo !== void 0 && activeTab === "usage" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  RequestUsagePanel,
                  {
                    usage: selectedRequestUsage,
                    cumulative: selectedRequestCumulativeUsage,
                    t
                  }
                ),
                selectedRequestInfo !== void 0 && activeTab === "timing" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  RequestTiming,
                  {
                    assistant: selectedRequestAssistant,
                    anchor: selectedRequestAnchor,
                    request: selectedRequestInfo,
                    t
                  }
                ),
                selectedPrompt !== void 0 && selectedPreviousPrompt !== void 0 && activeTab === "diff" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  SystemPromptDiff,
                  {
                    before: selectedPreviousPrompt,
                    after: selectedPrompt,
                    t
                  }
                ),
                promptSelected && activeTab === "system-prompt" && (selectedSystemPrompt === "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.systemPromptMissing") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `${TrajectoryTable_default.markdownPayload} ${TrajectoryTable_default.systemPrompt}`, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.MarkdownText, { text: selectedSystemPrompt, labels: markdownLabels(t) }) })),
                selectedPrompt !== void 0 && activeTab === "tools" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ToolCatalog, { tools: selectedPrompt.tools, stringWrapping, t }),
                !promptSelected && selected?.cell.kind === "compacted" && selectedState !== void 0 && activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                    "dl",
                    {
                      className: `${TrajectoryTable_default.overview} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.status") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { className: selectedState === "error" ? TrajectoryTable_default.error : void 0, children: statusLabel(selectedState, t) })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.duration") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: formatElapsedSeconds(selected.cell.timeSeconds, t) })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("usage.tokens") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: "\u2014" })
                        ] })
                      ]
                    }
                  ),
                  selected.cell.outputDetail !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "div",
                    {
                      className: `${TrajectoryTable_default.compactedSummary} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        MarkdownRecordContent,
                        {
                          record: selected,
                          renderSlot,
                          loadImage,
                          rendered: true,
                          thinkingExpanded,
                          onThinkingExpandedChange: setThinkingExpanded,
                          onOpenCall: openCallSummary,
                          t
                        }
                      )
                    }
                  )
                ] }),
                !promptSelected && selected !== void 0 && selected.cell.kind !== "compacted" && selectedState !== void 0 && activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                  selectedProgram !== void 0 && selectedProgram.description !== "" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.programDescription, children: selectedProgram.description }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                    "dl",
                    {
                      className: `${TrajectoryTable_default.overview} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: [
                        selected.cell.messageSource !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.source") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { className: TrajectoryTable_default.overviewParentLinks, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: TrajectoryTable_default.overviewHierarchyNavLink,
                              onClick: () => {
                                activateTab("source");
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: messageSourceLabel(selected.cell.messageSource, t) }),
                                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                  import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular,
                                  {
                                    className: TrajectoryTable_default.overviewHierarchyJumpIconTight,
                                    size: 11
                                  }
                                )
                              ]
                            }
                          ) })
                        ] }),
                        hasSelectedHierarchy && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: selectedAssistantRequestTarget !== void 0 ? t("details.source") : t("details.hierarchy") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dd", { className: TrajectoryTable_default.overviewParentLinks, children: [
                            selectedAssistantRequestTarget !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                              "button",
                              {
                                type: "button",
                                className: TrajectoryTable_default.overviewHierarchyNavLink,
                                onClick: () => {
                                  selectRequest(selectedAssistantRequestTarget);
                                },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t("request.label", { request: selectedAssistantRequest ?? "\u2014" }) }),
                                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                    import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular,
                                    {
                                      className: TrajectoryTable_default.overviewHierarchyJumpIconTight,
                                      size: 11
                                    }
                                  )
                                ]
                              }
                            ),
                            selectedParentMessage !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                              "button",
                              {
                                type: "button",
                                className: TrajectoryTable_default.overviewHierarchyNavLink,
                                onClick: () => {
                                  openRecordSummary(selectedParentMessage);
                                },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t("details.assistantMessage") }),
                                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                    import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular,
                                    {
                                      className: TrajectoryTable_default.overviewHierarchyJumpIconTight,
                                      size: 11
                                    }
                                  )
                                ]
                              }
                            ),
                            selectedParentTool !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                              "button",
                              {
                                type: "button",
                                className: TrajectoryTable_default.overviewHierarchyNavLink,
                                onClick: () => {
                                  openRecordSummary(selectedParentTool);
                                },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t("details.toolCall") }),
                                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                                    import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular,
                                    {
                                      className: TrajectoryTable_default.overviewHierarchyJumpIconTight,
                                      size: 11
                                    }
                                  )
                                ]
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("details.status") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { className: selectedState === "error" ? TrajectoryTable_default.error : void 0, children: statusLabel(selectedState, t) })
                        ] }),
                        selected.cell.kind === "message" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TokenRows, { cell: selected.cell, t }),
                        (selected.cell.kind === "user" || selected.cell.kind === "context") && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dt", { children: t("timing.duration") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dd", { children: formatElapsedSeconds(selected.cell.timeSeconds, t) })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.overviewSections, children: [
                    selectedProgram !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        ProgramInput,
                        {
                          program: selectedProgram,
                          initialWrapped: codeWrappingOnOpen,
                          stringWrapping,
                          onOpen: () => {
                            activateTab("input");
                          },
                          t
                        },
                        `preview:${selectedRecordId}`
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        ProgramOutput,
                        {
                          record: selected,
                          stringWrapping,
                          onOpen: () => {
                            activateTab("output");
                          },
                          t
                        }
                      )
                    ] }) : isMarkdownRecord(selected) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.preview"), onOpen: () => {
                      activateTab("rendered");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      MarkdownRecordContent,
                      {
                        record: selected,
                        renderSlot,
                        loadImage,
                        rendered: true,
                        preview: true,
                        thinkingExpanded,
                        onThinkingExpandedChange: setThinkingExpanded,
                        onOpenCall: openCallSummary,
                        t
                      }
                    ) }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                      selected.cell.inputDetail && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.payload"), onOpen: () => {
                        activateTab("input");
                      }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordPayload, { record: selected, direction: "input", preview: true, renderSlot, loadImage, stringWrapping, t }) }),
                      selected.cell.outputDetail && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.result"), onOpen: () => {
                        activateTab("output");
                      }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordPayload, { record: selected, direction: "output", preview: true, renderSlot, loadImage, stringWrapping, t }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.schema"), onOpen: () => {
                        activateTab("schema");
                      }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordSchema, { record: selected, preview: true, stringWrapping, t }) })
                    ] }),
                    selectedAssistantRequestTarget !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      OverviewSection,
                      {
                        label: t("timing.request"),
                        onOpen: () => {
                          selectRequest(selectedAssistantRequestTarget, "timing");
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordTiming, { record: selected, preview: true, t })
                      }
                    ),
                    (selected.cell.kind === "tool" || selected.cell.kind === "subtool") && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(OverviewSection, { label: t("tab.timing"), onOpen: () => {
                      activateTab("timing");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordTiming, { record: selected, preview: true, t }) })
                  ] })
                ] }),
                !promptSelected && selected !== void 0 && activeTab === "rendered" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  MarkdownRecordContent,
                  {
                    record: selected,
                    renderSlot,
                    loadImage,
                    rendered: true,
                    thinkingExpanded,
                    onThinkingExpandedChange: setThinkingExpanded,
                    onOpenCall: openCallSummary,
                    t
                  }
                ),
                !promptSelected && selected !== void 0 && activeTab === "raw" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  MarkdownRecordContent,
                  {
                    record: selected,
                    renderSlot,
                    loadImage,
                    rendered: false,
                    thinkingExpanded,
                    onThinkingExpandedChange: setThinkingExpanded,
                    onOpenCall: openCallSummary,
                    t
                  }
                ),
                !promptSelected && selected !== void 0 && activeTab === "source" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MessageSource, { record: selected, stringWrapping, t }),
                !promptSelected && selected !== void 0 && activeTab === "input" && (selectedProgram === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordPayload, { record: selected, direction: "input", renderSlot, loadImage, stringWrapping, t }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  ProgramInput,
                  {
                    program: selectedProgram,
                    initialWrapped: codeWrappingOnOpen,
                    stringWrapping,
                    t
                  },
                  `input:${selectedRecordId}`
                )),
                !promptSelected && selected !== void 0 && activeTab === "output" && (selected.cell.kind === "tool" || selected.cell.kind === "subtool" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: TrajectoryTable_default.resultSections, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.resultSection, "aria-label": t("record.rawResult"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: TrajectoryTable_default.overviewHeading, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: TrajectoryTable_default.resultTitle, children: t("record.rawResult") }) }),
                    resultValue === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t(stateOf(selected) === "running" ? "code.running" : "record.rawResultUnavailable") }) : resultValue !== null && typeof resultValue === "object" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_dsh_client_ui_primitives2.JsonTree,
                      {
                        data: resultValue,
                        label: t("record.resultJson"),
                        labels: jsonTreeLabels(t),
                        stringWrapping,
                        collapsedStringLines: 12,
                        className: TrajectoryTable_default.jsonPayload
                      }
                    ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { className: TrajectoryTable_default.programOutput, children: JSON.stringify(resultValue) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: TrajectoryTable_default.resultSection, "aria-label": t("record.renderedResult"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: TrajectoryTable_default.overviewHeading, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: TrajectoryTable_default.resultTitle, children: t("record.renderedResult") }) }),
                    selectedProgram === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordPayload, { record: selected, direction: "output", renderSlot, loadImage, stringWrapping, t }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ProgramOutput, { record: selected, stringWrapping, t })
                  ] })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordPayload, { record: selected, direction: "output", renderSlot, loadImage, stringWrapping, t })),
                !promptSelected && selected !== void 0 && activeTab === "schema" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordSchema, { record: selected, stringWrapping, t }),
                !promptSelected && selected !== void 0 && activeTab === "timing" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RecordTiming, { record: selected, t })
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/vendor/trajectory/QueryBar.tsx
var import_react3 = require("react");
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/query.mjs
var FIELDS = ["tool", "status", "turn", "ms", "code"];
var STATUSES = /* @__PURE__ */ new Set(["error", "running", "ok"]);
function emptyQuery() {
  return {
    tokens: [],
    filters: {
      tool: [],
      notTool: [],
      status: [],
      notStatus: [],
      turn: [],
      notTurn: [],
      turnRanges: [],
      notTurnRanges: [],
      code: [],
      notCode: [],
      msMin: null,
      msMax: null,
      text: []
    },
    active: false
  };
}
function parseQuery(text) {
  const query = emptyQuery();
  const words = String(text ?? "").trim().split(/\s+/).filter(Boolean);
  for (const word of words) {
    query.tokens.push(parseToken(word));
  }
  for (const token of query.tokens) applyToken(query.filters, token);
  query.active = query.tokens.length > 0;
  return query;
}
function parseToken(word) {
  const negated = word.startsWith("-") && word.length > 1;
  const body = negated ? word.slice(1) : word;
  const colon = body.indexOf(":");
  if (colon <= 0) return { kind: "text", value: word, raw: word, negated: false, valid: true };
  const field = body.slice(0, colon);
  const value = body.slice(colon + 1);
  if (!FIELDS.includes(field)) {
    return { kind: "text", value: word, raw: word, negated: false, valid: true };
  }
  if (field === "status") {
    return value.split("|").every((item) => STATUSES.has(item)) ? { kind: "status", value, raw: word, negated, valid: true } : { kind: "status", value, raw: word, negated, valid: false };
  }
  if (field === "turn") {
    const range = /^(\d+)-(\d+)$/.exec(value);
    const single = /^\d+$/.exec(value);
    return range !== null || single !== null ? { kind: "turn", value, raw: word, negated, valid: true } : { kind: "turn", value, raw: word, negated, valid: false };
  }
  if (field === "ms") {
    return /^(>=|<=|>|<)?\d+(-\d+)?$/.test(value) ? { kind: "ms", value, raw: word, negated, valid: true } : { kind: "ms", value, raw: word, negated, valid: false };
  }
  if (field === "code") {
    return /^\d+$/.test(value) ? { kind: "code", value, raw: word, negated, valid: true } : { kind: "code", value, raw: word, negated, valid: false };
  }
  return value === "" ? { kind: "tool", value, raw: word, negated, valid: false } : { kind: "tool", value, raw: word, negated, valid: true };
}
function applyToken(filters, token) {
  if (!token.valid) return;
  const bucket = token.negated ? "not" : "";
  const key = (name2) => bucket === "" ? name2 : `not${name2[0].toUpperCase()}${name2.slice(1)}`;
  switch (token.kind) {
    case "text":
      filters.text.push(token.value.toLowerCase());
      return;
    case "tool":
      filters[key("tool")].push(token.value);
      return;
    case "status":
      for (const status of token.value.split("|")) {
        if (STATUSES.has(status)) filters[key("status")].push(status);
      }
      return;
    case "code":
      filters[key("code")].push(Number(token.value));
      return;
    case "turn": {
      const range = /^(\d+)-(\d+)$/.exec(token.value);
      if (range === null) {
        filters[key("turn")].push(Number(token.value));
      } else {
        const from = Number(range[1]);
        const to = Number(range[2]);
        filters[key("turnRanges")].push([Math.min(from, to), Math.max(from, to)]);
      }
      return;
    }
    case "ms": {
      const range = /^(\d+)-(\d+)$/.exec(token.value);
      if (range !== null) {
        filters.msMin = Number(range[1]);
        filters.msMax = Number(range[2]);
        return;
      }
      const bound = /^(>=|<=|>|<)?(\d+)$/.exec(token.value);
      if (bound === null) return;
      const value = Number(bound[2]);
      if (bound[1] === ">" || bound[1] === ">=") filters.msMin = value;
      else if (bound[1] === "<" || bound[1] === "<=") filters.msMax = value;
      else {
        filters.msMin = value;
        filters.msMax = value;
      }
      return;
    }
    default:
      return;
  }
}
function searchText(record2) {
  return [record2.name, record2.args, record2.result, record2.errorText].filter((value) => typeof value === "string" && value !== "").join("\n").toLowerCase();
}
function matchesQuery(record2, query) {
  const filters = query.filters;
  if (!query.active) return true;
  if (filters.tool.length > 0 && !filters.tool.includes(record2.name)) return false;
  if (filters.notTool.includes(record2.name)) return false;
  if (filters.status.length > 0 && !filters.status.includes(record2.status)) return false;
  if (filters.notStatus.includes(record2.status)) return false;
  if (filters.turn.length > 0 && !filters.turn.includes(record2.turn)) return false;
  if (filters.turnRanges.length > 0 && !filters.turnRanges.some(([from, to]) => record2.turn >= from && record2.turn <= to)) return false;
  if (filters.notTurn.includes(record2.turn)) return false;
  if (filters.notTurnRanges.some(([from, to]) => record2.turn >= from && record2.turn <= to)) return false;
  if (filters.code.length > 0 && !filters.code.includes(Number(record2.errorCode))) return false;
  if (filters.notCode.includes(Number(record2.errorCode))) return false;
  const duration = typeof record2.durationMs === "number" ? record2.durationMs : -1;
  if (filters.msMin !== null && duration < filters.msMin) return false;
  if (filters.msMax !== null && duration > filters.msMax) return false;
  if (filters.text.length > 0) {
    const haystack = searchText(record2);
    if (!filters.text.every((term) => haystack.includes(term))) return false;
  }
  return true;
}
function toggleToken(text, raw) {
  const words = String(text ?? "").split(/\s+/).filter(Boolean);
  return words.includes(raw) ? words.filter((word) => word !== raw).join(" ") : [...words, raw].join(" ");
}

// src/vendor/trajectory/QueryBar.module.css
var css2 = ".bt_QueryBar_root_h4IkeT {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 4px 8px;\n  border-bottom: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.08));\n  background: var(--dsw-alias-bg-layer-1, #fff);\n  position: relative;\n  z-index: 2;\n}\n\n.bt_QueryBar_row_8ZPqfu {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 28px;\n}\n\n.bt_QueryBar_actions_a-c3dO {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex-shrink: 0;\n}\n\n.bt_QueryBar_toggle_DFmY0d,\n.bt_QueryBar_fold_iApD5s {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 24px;\n  padding: 0 6px;\n  border: 0;\n  border-radius: 5px;\n  background: transparent;\n  color: var(--dsw-alias-label-secondary, #555);\n  font-size: 11px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.bt_QueryBar_toggle_DFmY0d:hover,\n.bt_QueryBar_fold_iApD5s:hover {\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.05));\n  color: var(--dsw-alias-label-primary, #111);\n}\n\n.bt_QueryBar_toggle_DFmY0d[aria-pressed='true'] {\n  color: var(--dsw-alias-brand-primary, #4a6cf7);\n}\n\n.bt_QueryBar_toggleIcon_y9tQSK {\n  width: 13px;\n  height: 13px;\n  stroke: currentColor;\n  stroke-width: 1.3;\n  fill: none;\n}\n\n.bt_QueryBar_search_KQG92k {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  min-width: 160px;\n  height: 26px;\n  padding: 0 6px;\n  border: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.12));\n  border-radius: 6px;\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.02));\n}\n\n.bt_QueryBar_search_KQG92k:focus-within {\n  border-color: var(--dsw-alias-brand-primary, #4a6cf7);\n  background: var(--dsw-alias-bg-layer-1, #fff);\n}\n\n.bt_QueryBar_searchIcon_5boR_Y {\n  flex-shrink: 0;\n  color: var(--dsw-alias-label-tertiary, #888);\n  margin-right: 4px;\n}\n\n.bt_QueryBar_input_tue-9E {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-primary, #111);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n}\n\n.bt_QueryBar_input_tue-9E::placeholder {\n  color: var(--dsw-alias-label-tertiary, #999);\n}\n\n.bt_QueryBar_clear_h2AlCi {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary, #888);\n  font-size: 13px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.bt_QueryBar_clear_h2AlCi:hover {\n  background: var(--dsw-alias-bg-layer-3, rgba(0, 0, 0, 0.08));\n  color: var(--dsw-alias-label-primary, #111);\n}\n\n.bt_QueryBar_menu_zrrJiw {\n  position: absolute;\n  z-index: 30;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  max-height: 260px;\n  overflow: auto;\n  padding: 4px;\n  border: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.1));\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1, #fff);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n\n.bt_QueryBar_option_DP3tCP {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  width: 100%;\n  padding: 4px 6px;\n  border: 0;\n  border-radius: 5px;\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n  color: var(--dsw-alias-label-primary, #111);\n  font-size: 11.5px;\n}\n\n.bt_QueryBar_option_DP3tCP[data-active] {\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.06));\n}\n\n.bt_QueryBar_optionGroup_Yq4liS {\n  flex-shrink: 0;\n  width: 48px;\n  color: var(--dsw-alias-label-tertiary, #999);\n  font-size: 10.5px;\n}\n\n.bt_QueryBar_optionLabel_jYfklY {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n}\n\n.bt_QueryBar_optionDetail_tMI0Jn {\n  flex-shrink: 0;\n  color: var(--dsw-alias-label-tertiary, #999);\n  font-variant-numeric: tabular-nums;\n  font-size: 10.5px;\n}\n\n.bt_QueryBar_quick_Sul2G_ {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n\n.bt_QueryBar_quickButton_UruU3W {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 24px;\n  padding: 0 7px;\n  border: 1px solid transparent;\n  border-radius: 999px;\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.04));\n  color: var(--dsw-alias-label-secondary, #555);\n  font-size: 11px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.bt_QueryBar_quickButton_UruU3W:hover {\n  border-color: var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.15));\n}\n\n.bt_QueryBar_quickButton_UruU3W[data-on] {\n  border-color: var(--dsw-alias-brand-primary, #4a6cf7);\n  background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4a6cf7) 12%, transparent);\n  color: var(--dsw-alias-brand-primary, #4a6cf7);\n}\n\n.bt_QueryBar_quickCount_fSJl2b {\n  font-variant-numeric: tabular-nums;\n  opacity: 0.75;\n}\n\n.bt_QueryBar_chips_q1c3NI {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 2px 0 2px 2px;\n}\n\n.bt_QueryBar_chip_SFvtDa {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 20px;\n  padding: 0 2px 0 6px;\n  border-radius: 4px;\n  background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4a6cf7) 10%, transparent);\n  color: var(--dsw-alias-label-primary, #111);\n  font-size: 11px;\n}\n\n.bt_QueryBar_chip_SFvtDa[data-invalid] {\n  background: color-mix(in srgb, #e5484d 14%, transparent);\n}\n\n.bt_QueryBar_chipKind_ZEmsYL {\n  color: var(--dsw-alias-label-tertiary, #888);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.bt_QueryBar_chipValue_OtQz9u {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n}\n\n.bt_QueryBar_chipClose_vTuKBy {\n  width: 16px;\n  height: 16px;\n  border: 0;\n  border-radius: 3px;\n  background: transparent;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 12px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.bt_QueryBar_chipClose_vTuKBy:hover {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.08);\n}\n\n.bt_QueryBar_summary_i3QtQf {\n  margin-left: 4px;\n  color: var(--dsw-alias-label-secondary, #666);\n  font-size: 11px;\n  font-variant-numeric: tabular-nums;\n}\n\n.bt_QueryBar_hidden_fQNsAa {\n  color: var(--dsw-alias-label-tertiary, #999);\n}\n\n.bt_QueryBar_showAll_OqGqph {\n  margin-left: auto;\n  height: 20px;\n  padding: 0 6px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--dsw-alias-brand-primary, #4a6cf7);\n  font-size: 11px;\n  cursor: pointer;\n}\n\n.bt_QueryBar_showAll_OqGqph:hover {\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.05));\n}";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="y1b3Uc"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "y1b3Uc");
  el.textContent = css2;
  document.head.appendChild(el);
}
var QueryBar_default = { "root": "bt_QueryBar_root_h4IkeT", "row": "bt_QueryBar_row_8ZPqfu", "actions": "bt_QueryBar_actions_a-c3dO", "toggle": "bt_QueryBar_toggle_DFmY0d", "fold": "bt_QueryBar_fold_iApD5s", "toggleIcon": "bt_QueryBar_toggleIcon_y9tQSK", "search": "bt_QueryBar_search_KQG92k", "searchIcon": "bt_QueryBar_searchIcon_5boR_Y", "input": "bt_QueryBar_input_tue-9E", "clear": "bt_QueryBar_clear_h2AlCi", "menu": "bt_QueryBar_menu_zrrJiw", "option": "bt_QueryBar_option_DP3tCP", "optionGroup": "bt_QueryBar_optionGroup_Yq4liS", "optionLabel": "bt_QueryBar_optionLabel_jYfklY", "optionDetail": "bt_QueryBar_optionDetail_tMI0Jn", "quick": "bt_QueryBar_quick_Sul2G_", "quickButton": "bt_QueryBar_quickButton_UruU3W", "quickCount": "bt_QueryBar_quickCount_fSJl2b", "chips": "bt_QueryBar_chips_q1c3NI", "chip": "bt_QueryBar_chip_SFvtDa", "chipKind": "bt_QueryBar_chipKind_ZEmsYL", "chipValue": "bt_QueryBar_chipValue_OtQz9u", "chipClose": "bt_QueryBar_chipClose_vTuKBy", "summary": "bt_QueryBar_summary_i3QtQf", "hidden": "bt_QueryBar_hidden_fQNsAa", "showAll": "bt_QueryBar_showAll_OqGqph" };

// src/vendor/trajectory/QueryBar.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function buildSuggestions(props, lastWord) {
  const out = [];
  const term = lastWord.replace(/^-/, "");
  const [field, value = ""] = term.includes(":") ? [term.slice(0, term.indexOf(":")), term.slice(term.indexOf(":") + 1)] : ["", ""];
  const match = (text) => text.toLowerCase().includes(value.toLowerCase());
  if (field === "" || field === "tool") {
    for (const tool of props.tools) {
      if (match(tool.name)) out.push({ insert: `tool:${tool.name}`, label: tool.name, detail: String(tool.calls ?? tool.count ?? ""), group: props.qt("query.groupTools") });
    }
  }
  if (field === "" || field === "status") {
    for (const status of ["error", "running", "ok"]) {
      if (match(status)) out.push({ insert: `status:${status}`, label: props.qt(`query.status.${status}`), group: props.qt("query.groupStatus") });
    }
  }
  if (field === "" || field === "turn") {
    for (const turn of props.turns.slice(0, 8)) {
      if (match(String(turn.turn))) out.push({ insert: `turn:${turn.turn}`, label: `#${turn.turn}`, detail: String(turn.count), group: props.qt("query.groupTurn") });
    }
  }
  if (field === "" || field === "ms") {
    for (const raw of ["ms:>1000", "ms:>3000"]) {
      if (match(raw)) out.push({ insert: raw, label: raw, group: props.qt("query.groupSlow") });
    }
  }
  return out.slice(0, 14);
}
function QueryBar(props) {
  const { query, onQuery, stats, flat, onToggleFlat, tokens, t, qt } = props;
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [active, setActive] = (0, import_react3.useState)(0);
  const rootRef = (0, import_react3.useRef)(null);
  const inputRef = (0, import_react3.useRef)(null);
  const words = query.trim() === "" ? [] : query.trim().split(/\s+/);
  const lastWord = words.at(-1) ?? "";
  const suggestions = (0, import_react3.useMemo)(() => buildSuggestions(props, lastWord), [props, lastWord]);
  (0, import_react3.useEffect)(() => {
    if (!open) return;
    const onDown = (event) => {
      if (event.target instanceof Node && rootRef.current !== null && !rootRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);
  const pick = (suggestion) => {
    const next = [...words.slice(0, -1), suggestion.insert].join(" ");
    onQuery(next);
    setOpen(false);
    inputRef.current?.focus();
  };
  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      if (query !== "") onQuery("");
      setOpen(false);
      return;
    }
    if (!open) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (suggestions.length > 0) pick(suggestions[active] ?? suggestions[0]);
      else setOpen(false);
    }
  };
  const quick = [
    { key: "error", raw: "status:error", label: qt("query.quickErrors"), count: stats.errors },
    { key: "running", raw: "status:running", label: qt("query.quickRunning"), count: stats.running },
    { key: "slow", raw: "ms:>1000", label: qt("query.quickSlow"), count: null }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: QueryBar_default.root, role: "toolbar", "aria-label": t("toolbar.aria"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: QueryBar_default.row, ref: rootRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: QueryBar_default.actions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "button",
          {
            type: "button",
            className: QueryBar_default.toggle,
            "aria-pressed": props.actualDuration,
            title: t("toolbar.useActualDuration"),
            onClick: () => props.onActualDurationChange(!props.actualDuration),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { className: QueryBar_default.toggleIcon, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "8", cy: "8", r: "5.25" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M8 4.75V8l2.25 1.5" })
              ] }),
              t("toolbar.duration")
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allTurnsCollapsed, title: t("toolbar.turns"), onClick: props.onToggleAllTurns, children: [
          props.allTurnsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.turns")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allAssistantsCollapsed, title: t("toolbar.calls"), onClick: props.onToggleAllAssistants, children: [
          props.allAssistantsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.calls")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allSubCallsCollapsed, title: t("toolbar.subCalls"), onClick: props.onToggleAllSubCalls, children: [
          props.allSubCallsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.subCalls")
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: QueryBar_default.search, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconSearchOutlineRegular, { size: 12, className: QueryBar_default.searchIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            ref: inputRef,
            type: "text",
            className: QueryBar_default.input,
            "aria-label": qt("query.placeholder"),
            placeholder: qt("query.placeholder"),
            value: query,
            spellCheck: false,
            autoComplete: "off",
            onChange: (event) => {
              onQuery(event.currentTarget.value);
              setOpen(true);
              setActive(0);
            },
            onFocus: () => setOpen(true),
            onBlur: () => {
              window.setTimeout(() => setOpen(false), 120);
            },
            onKeyDown
          }
        ),
        query !== "" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: QueryBar_default.clear, "aria-label": qt("query.clear"), title: qt("query.clear"), onClick: () => {
          onQuery("");
          inputRef.current?.focus();
        }, children: "\xD7" }),
        open && suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: QueryBar_default.menu, role: "listbox", "aria-label": qt("query.suggestions"), children: suggestions.map((suggestion, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "button",
          {
            type: "button",
            role: "option",
            "aria-selected": index === active,
            className: QueryBar_default.option,
            "data-active": index === active || void 0,
            onMouseEnter: () => setActive(index),
            onMouseDown: (event) => {
              event.preventDefault();
              pick(suggestion);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: QueryBar_default.optionGroup, children: suggestion.group }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: QueryBar_default.optionLabel, children: suggestion.label }),
              suggestion.detail !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: QueryBar_default.optionDetail, children: suggestion.detail })
            ]
          },
          `${suggestion.group}:${suggestion.insert}`
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: QueryBar_default.quick, children: [
        quick.map((item) => {
          const on = words.includes(item.raw);
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "button",
            {
              type: "button",
              className: QueryBar_default.quickButton,
              "data-on": on || void 0,
              "aria-pressed": on,
              title: item.raw,
              onClick: () => onQuery(toggleToken(query, item.raw)),
              children: [
                item.label,
                item.count !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: QueryBar_default.quickCount, children: item.count })
              ]
            },
            item.key
          );
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: QueryBar_default.quickButton, "data-on": flat || void 0, "aria-pressed": flat, onClick: onToggleFlat, title: qt("query.flatHint"), children: qt("query.flat") })
      ] })
    ] }),
    tokens.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: QueryBar_default.chips, children: [
      tokens.map((token) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: QueryBar_default.chip, "data-invalid": !token.valid || void 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: QueryBar_default.chipKind, children: token.kind === "text" ? qt("query.text") : token.kind }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: QueryBar_default.chipValue, children: token.raw.replace(/^-?[a-z]+:/, "") || token.raw }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            type: "button",
            className: QueryBar_default.chipClose,
            "aria-label": qt("query.removeToken", { token: token.raw }),
            onClick: () => onQuery(query.split(/\s+/).filter((word) => word !== token.raw).join(" ")),
            children: "\xD7"
          }
        )
      ] }, token.raw)),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: QueryBar_default.summary, children: [
        qt("query.summary", { matched: stats.matched, total: stats.total }),
        stats.hidden > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: QueryBar_default.hidden, children: [
          "\xB7 ",
          qt("query.hidden", { count: stats.hidden })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: QueryBar_default.showAll, onClick: () => onQuery(""), children: qt("query.showAll") })
    ] })
  ] });
}

// src/vendor/trajectory/TrajectoryTimeline.tsx
var import_react4 = require("react");
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/vendor/trajectory/timeline.ts
function formatTimelineOffset(milliseconds, t) {
  return formatDurationMillis(milliseconds, t);
}
function laneFor(kind) {
  if (kind === "tool" || kind === "subtool") return 2;
  if (kind === "message" || kind === "compacted") return 1;
  return 0;
}
function finite(value) {
  return value !== null && value !== void 0 && Number.isFinite(value);
}
function cellRange(cell2) {
  if (!finite(cell2.startedAt)) return null;
  const durationMs = finite(cell2.timeSeconds) ? Math.max(0, cell2.timeSeconds * 1e3) : 0;
  return { start: cell2.startedAt, end: cell2.startedAt + durationMs };
}
function deriveTrajectoryTimeline(turns, mode = "sequence") {
  if (mode !== "sequence") {
    return deriveTimedTimeline(
      turns,
      mode === "duration" || mode === "actual",
      mode === "duration"
    );
  }
  const spans = [];
  const turnBoundaries = [];
  for (const turn of turns) {
    const cells = turn.groups.flatMap(
      (group) => group.cells.filter((cell2) => cell2.requestOnly !== true)
    );
    if (cells.length === 0) continue;
    if (turn.turn !== null) {
      turnBoundaries.push({
        turn: turn.turn,
        time: spans.length
      });
    }
    spans.push(...cells.map((cell2, offset) => ({
      start: spans.length + offset,
      end: spans.length + offset + 1,
      index: cell2.index,
      isError: cell2.isError === true,
      kind: cell2.kind,
      label: cell2.text,
      lane: laneFor(cell2.kind)
    })));
  }
  if (spans.length === 0) return null;
  return {
    start: 0,
    end: spans.length,
    spans,
    turnBoundaries
  };
}
function deriveTimedTimeline(turns, actualDuration, compressIdle) {
  const timedTurns = turns.flatMap((turn) => {
    const rawSpans2 = turn.groups.flatMap(
      (group) => group.cells.flatMap((cell2) => {
        if (cell2.requestOnly === true) return [];
        const range = cellRange(cell2);
        return range === null ? [] : [{
          ...range,
          index: cell2.index,
          isError: cell2.isError === true,
          kind: cell2.kind,
          label: cell2.text,
          lane: laneFor(cell2.kind)
        }];
      })
    );
    return rawSpans2.length === 0 ? [] : [{ turn: turn.turn, rawSpans: rawSpans2 }];
  });
  const rawSpans = timedTurns.flatMap((turn) => turn.rawSpans);
  if (rawSpans.length === 0) return null;
  const removedIdleBySpan = /* @__PURE__ */ new Map();
  let removedIdle = 0;
  let coveredUntil = null;
  for (const span of [...rawSpans].sort((left, right) => left.start - right.start || left.end - right.end)) {
    if (compressIdle && coveredUntil !== null && span.start > coveredUntil) {
      removedIdle += span.start - coveredUntil;
    }
    removedIdleBySpan.set(span, removedIdle);
    coveredUntil = coveredUntil === null ? span.end : Math.max(coveredUntil, span.end);
  }
  const spans = [];
  const turnBoundaries = [];
  for (const turn of timedTurns) {
    const projected = turn.rawSpans.map((span) => {
      const offset = removedIdleBySpan.get(span) ?? 0;
      return {
        ...span,
        start: span.start - offset,
        end: (actualDuration ? span.end : span.start) - offset
      };
    });
    spans.push(...projected);
    if (turn.turn !== null) {
      turnBoundaries.push({
        turn: turn.turn,
        time: Math.min(...projected.map((span) => span.start))
      });
    }
  }
  return {
    start: Math.min(...spans.map((span) => span.start)),
    end: Math.max(...spans.map((span) => span.end)),
    spans,
    turnBoundaries
  };
}
function trajectoryTimelineFocusIndexes(turns, range, mode = "sequence") {
  const model = deriveTrajectoryTimeline(turns, mode);
  return new Set(
    model?.spans.filter((span) => span.start <= range.end && span.end >= range.start).map((span) => span.index)
  );
}

// src/vendor/trajectory/TrajectoryTimeline.module.css
var css3 = ".bt_TrajectoryTimeline_root_ZWNJON {\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n  flex: none;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  user-select: none;\n}\n\n.bt_TrajectoryTimeline_root_ZWNJON [role='tooltip'] {\n  font: var(--dsw-font-xxxs-11);\n}\n\n.bt_TrajectoryTimeline_plot_shmJE_ {\n  display: grid;\n  grid-template-columns: 44px minmax(0, 1fr);\n  height: 50px;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc {\n  position: relative;\n  border-right: 0.5px solid var(--dsw-alias-border-l1);\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xs-13);\n  font-size: 10px;\n  line-height: 1;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span {\n  position: absolute;\n  right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 8px;\n  text-align: right;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(1) {\n  top: 7px;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(2) {\n  top: 21px;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(3) {\n  top: 35px;\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE {\n  position: relative;\n  overflow: hidden;\n  cursor: crosshair;\n  touch-action: none;\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE[data-panning='true'] {\n  cursor: grabbing;\n}\n\n.bt_TrajectoryTimeline_earlierHistory_ABAk9X {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 28px;\n  align-items: center;\n  justify-content: flex-start;\n  appearance: none;\n  box-sizing: border-box;\n  padding-left: 3px;\n  border: 0;\n  outline: none;\n  background: linear-gradient(\n    to right,\n    var(--dsw-alias-bg-layer-2) 0,\n    var(--dsw-alias-bg-layer-2) 38%,\n    transparent 100%\n  );\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-13);\n  line-height: 1;\n  opacity: 0.72;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTimeline_earlierHistory_ABAk9X:hover {\n    opacity: 1;\n  }\n}\n\n.bt_TrajectoryTimeline_earlierHistory_ABAk9X[aria-disabled='true'] {\n  cursor: default;\n}\n\n.bt_TrajectoryTimeline_earlierHistory_ABAk9X:focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTimeline_empty_lzkZh2 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTimeline_lanes_w13rKE {\n  position: absolute;\n  z-index: 2;\n  top: 7px;\n  bottom: 7px;\n  left: var(--trajectory-domain-left);\n  width: var(--trajectory-domain-width);\n}\n\n.bt_TrajectoryTimeline_turnBoundaries_IFhdxN {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-domain-left);\n  width: var(--trajectory-domain-width);\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .bt_TrajectoryTimeline_lanes_w13rKE[data-animate-viewport='true'],\n  .bt_TrajectoryTimeline_turnBoundaries_IFhdxN[data-animate-viewport='true'] {\n    transition: left 180ms ease-out;\n  }\n}\n\n.bt_TrajectoryTimeline_turnBoundary_xGFfjN {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-turn-left);\n  width: 0.5px;\n  background: var(--dsw-alias-border-l2);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T {\n  position: absolute;\n  top: calc(var(--trajectory-span-lane) * 14px);\n  left: calc(var(--trajectory-span-left) + var(--trajectory-span-gap));\n  width: max(\n    2px,\n    calc(\n      var(--trajectory-span-width)\n      - var(--trajectory-span-gap)\n      - var(--trajectory-span-gap)\n    )\n  );\n  height: 8px;\n  min-width: 2px;\n  border-radius: 1px;\n  background: var(--dsw-alias-label-secondary);\n  opacity: 0.78;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='user'] {\n  background: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='context'] {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='message'] {\n  --trajectory-assistant-decoding-color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  --trajectory-assistant-ttft-color: color-mix(\n    in srgb,\n    var(--trajectory-assistant-decoding-color) 54%,\n    var(--dsw-alias-bg-layer-2)\n  );\n\n  background: var(--trajectory-assistant-decoding-color);\n  opacity: 1;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='message'][data-assistant-timing='true'] {\n  background: linear-gradient(\n    to right,\n    var(--trajectory-assistant-ttft-color) 0,\n    var(--trajectory-assistant-ttft-color) var(--trajectory-assistant-ttft),\n    var(--trajectory-assistant-decoding-color) var(--trajectory-assistant-ttft),\n    var(--trajectory-assistant-decoding-color) 100%\n  );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='tool'],\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='subtool'] {\n  background: var(--dsw-alias-state-warn-label);\n  opacity: 1;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-error='true'] {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-equal-duration='true'] {\n  width: 8px;\n  min-width: 8px;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-selected='false'] {\n  opacity: 0.2;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-hovered='true']:not([data-current='true']) {\n  z-index: 1;\n  opacity: 1;\n  box-shadow:\n    0 0 0 1px var(--dsw-alias-bg-layer-2),\n    0 0 0 2px color-mix(\n      in srgb,\n      var(--dsw-alias-state-business-primary) 80%,\n      transparent\n    );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-current='true'] {\n  z-index: 1;\n  opacity: 1;\n  box-shadow:\n    0 0 0 1px var(--dsw-alias-bg-layer-2),\n    0 0 0 2px var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-search-match='false'] {\n  opacity: 0.14;\n}\n\n.bt_TrajectoryTimeline_selection_YrBqKd {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-selection-left);\n  width: var(--trajectory-selection-width);\n  min-width: 1px;\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-business-primary) 12%,\n    transparent\n  );\n  box-shadow:\n    -100vw 0 0 100vw color-mix(in srgb, var(--dsw-alias-bg-layer-1) 58%, transparent),\n    100vw 0 0 100vw color-mix(in srgb, var(--dsw-alias-bg-layer-1) 58%, transparent);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-selection-left);\n  width: var(--trajectory-selection-width);\n  min-width: 1px;\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_hoverLine_XzB4lu {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  bottom: 0;\n  left: clamp(\n    0px,\n    calc(var(--trajectory-hover-left) - 1px),\n    calc(100% - 2px)\n  );\n  width: 2px;\n  background: var(--dsw-alias-state-business-primary);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::before,\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--dsw-alias-state-business-primary);\n  content: '';\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::before {\n  left: 0;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::after {\n  right: 0;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj[data-dragging='true']::before,\n.bt_TrajectoryTimeline_selectionEdges_VOyluj[data-dragging='true']::after {\n  width: 2px;\n}\n\n.bt_TrajectoryTimeline_selection_YrBqKd[data-dragging='true'] {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-business-primary) 18%,\n    transparent\n  );\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="sqmlHh"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "sqmlHh");
  el.textContent = css3;
  document.head.appendChild(el);
}
var TrajectoryTimeline_default = { "root": "bt_TrajectoryTimeline_root_ZWNJON", "plot": "bt_TrajectoryTimeline_plot_shmJE_", "labels": "bt_TrajectoryTimeline_labels_NwTymc", "track": "bt_TrajectoryTimeline_track_W4cGdE", "earlierHistory": "bt_TrajectoryTimeline_earlierHistory_ABAk9X", "empty": "bt_TrajectoryTimeline_empty_lzkZh2", "lanes": "bt_TrajectoryTimeline_lanes_w13rKE", "turnBoundaries": "bt_TrajectoryTimeline_turnBoundaries_IFhdxN", "turnBoundary": "bt_TrajectoryTimeline_turnBoundary_xGFfjN", "span": "bt_TrajectoryTimeline_span_Kdyw9T", "selection": "bt_TrajectoryTimeline_selection_YrBqKd", "selectionEdges": "bt_TrajectoryTimeline_selectionEdges_VOyluj", "hoverLine": "bt_TrajectoryTimeline_hoverLine_XzB4lu" };

// src/vendor/trajectory/TrajectoryTimeline.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var MINIMUM_DRAG_PX = 3;
var MINIMUM_ZOOM_OPERATIONS = 4;
var EDGE_PAN_ZONE_FRACTION = 0.08;
var EDGE_PAN_STEP_FRACTION = 0.025;
var MAXIMUM_EDGE_PAN_PX = 32;
var TIMELINE_TOOLTIP_DELAY_MS = 500;
function assistantTimingDetail(metrics) {
  const start = metrics?.stepStartTime;
  const first = metrics?.firstTokenTime;
  const completed = metrics?.completedTime;
  if (metrics?.timingRecorded !== true || typeof start !== "number" || typeof first !== "number" || typeof completed !== "number" || !Number.isFinite(start) || !Number.isFinite(first) || !Number.isFinite(completed) || first < start || completed < first) return {};
  return { ttftMs: first - start, decodingMs: completed - first };
}
function timelineRecordDetail(cell2) {
  const durationMs = cell2.timeSeconds === null || !Number.isFinite(cell2.timeSeconds) ? void 0 : Math.max(0, cell2.timeSeconds * 1e3);
  const startedAt = cell2.startedAt === null || !Number.isFinite(cell2.startedAt) ? void 0 : cell2.startedAt;
  return {
    ...durationMs === void 0 ? {} : { durationMs },
    ...startedAt === void 0 ? {} : { startedAt },
    ...assistantTimingDetail(cell2.assistantMetrics)
  };
}
function timelineKindLabel(kind, t) {
  switch (kind) {
    case "system":
      return t("kind.system");
    case "user":
      return t("kind.user");
    case "context":
      return t("kind.context");
    case "compacted":
      return t("kind.compacted");
    case "message":
      return t("kind.assistant");
    case "tool":
      return t("kind.tool");
    case "subtool":
      return t("kind.subtool");
  }
}
function formatRecordedTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function timelineTooltipLabel(kind, detail, t) {
  const heading = timelineKindLabel(kind, t);
  if (detail === void 0) return heading;
  const duration = detail.durationMs === void 0 ? null : t("timeline.total", { duration: formatTimelineOffset(detail.durationMs, t) });
  const range = detail.startedAt === void 0 ? null : detail.durationMs === void 0 ? t("timeline.started", { time: formatRecordedTime(detail.startedAt) }) : `${formatRecordedTime(detail.startedAt)} \u2192 ${formatRecordedTime(
    detail.startedAt + detail.durationMs
  )}`;
  const segments = detail.ttftMs === void 0 || detail.decodingMs === void 0 ? null : t("timeline.ttftDecoding", {
    ttft: formatTimelineOffset(detail.ttftMs, t),
    decoding: formatTimelineOffset(detail.decodingMs, t)
  });
  const timing = [duration, segments].filter((value) => value !== null).join(" \xB7 ");
  return [heading, range, timing].filter((value) => value !== null && value !== "").join("\n");
}
function orderedRange(left, right) {
  return left <= right ? { start: left, end: right } : { start: right, end: left };
}
function clampFraction(value) {
  return Math.min(1, Math.max(0, value));
}
function centeredRange(center, width, minimum, maximum) {
  const clampedWidth = Math.min(maximum - minimum, Math.max(0, width));
  const start = Math.min(
    Math.max(center - clampedWidth / 2, minimum),
    maximum - clampedWidth
  );
  return { start, end: start + clampedWidth };
}
function rangeFraction(range, start, duration, minimum, maximum) {
  const bounded = orderedRange(
    Math.min(maximum, Math.max(minimum, range.start)),
    Math.min(maximum, Math.max(minimum, range.end))
  );
  return {
    start: (bounded.start - start) / duration,
    end: (bounded.end - start) / duration
  };
}
function LaneLabels({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: TrajectoryTimeline_default.labels, "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: t("column.input") }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: t("column.model") }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: t("column.tools") })
  ] });
}
function EarlierHistoryBoundary({
  loading,
  onHover,
  onLoad,
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_dsh_client_ui_primitives4.Tooltip,
    {
      label: loading ? t("history.loadingEarlier") : t("history.clickToLoadEarlier"),
      side: "right",
      delayMs: TIMELINE_TOOLTIP_DELAY_MS,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          className: TrajectoryTimeline_default.earlierHistory,
          "data-earlier-history": true,
          "data-loading": loading || void 0,
          "aria-label": loading ? t("history.loadingEarlierAria") : t("history.loadEarlier"),
          "aria-disabled": loading || onLoad === void 0,
          onClick: onLoad,
          onPointerEnter: (event) => {
            event.stopPropagation();
            onHover();
          },
          onPointerMove: (event) => {
            event.stopPropagation();
          },
          onPointerDown: (event) => {
            event.stopPropagation();
          },
          children: "\u2026"
        }
      )
    }
  );
}
var TrajectoryTimeline = (0, import_react4.memo)(function TrajectoryTimeline2({
  t,
  turns,
  mode,
  range,
  hasEarlierRecords = false,
  onLoadEarlier,
  selectedIndex = null,
  searchMatchIndexes = null,
  onRangeChange,
  onRecordSelect,
  onRecordFocus
}) {
  const model = (0, import_react4.useMemo)(() => deriveTrajectoryTimeline(turns, mode), [mode, turns]);
  const detailByIndex = (0, import_react4.useMemo)(
    () => new Map(turns.flatMap(
      (turn) => turn.groups.flatMap(
        (group) => group.cells.map((cell2) => [cell2.index, timelineRecordDetail(cell2)])
      )
    )),
    [turns]
  );
  const dragRef = (0, import_react4.useRef)(null);
  const panRef = (0, import_react4.useRef)(null);
  const rootRef = (0, import_react4.useRef)(null);
  const trackRef = (0, import_react4.useRef)(null);
  const [draft, setDraft] = (0, import_react4.useState)(null);
  const [hover, setHover] = (0, import_react4.useState)(null);
  const [loadingEarlier, setLoadingEarlier] = (0, import_react4.useState)(false);
  const [panning, setPanning] = (0, import_react4.useState)(false);
  const [viewport, setViewport] = (0, import_react4.useState)(null);
  const [animateViewport, setAnimateViewport] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    if (model !== null && range !== null && (range.end < model.start || range.start > model.end)) {
      onRangeChange(null);
    }
  }, [model, onRangeChange, range]);
  (0, import_react4.useEffect)(() => {
    if (model === null) return;
    setAnimateViewport(false);
    setViewport((current) => current !== null && (current.end < model.start || current.start > model.end) ? null : current);
  }, [model]);
  (0, import_react4.useEffect)(() => {
    if (model === null || selectedIndex === null) return;
    const selectedSpan = model.spans.find((span) => span.index === selectedIndex);
    if (selectedSpan === void 0) return;
    setAnimateViewport(true);
    setViewport((current) => {
      if (current === null) return current;
      if (selectedSpan.end > current.start && selectedSpan.start < current.end) return current;
      const duration = Math.max(1, current.end - current.start);
      const desiredStart = selectedSpan.end <= current.start ? selectedSpan.start : selectedSpan.end - duration;
      const nextStart = Math.min(
        Math.max(desiredStart, model.start),
        Math.max(model.start, model.end - duration)
      );
      if (nextStart === current.start) return current;
      return { start: nextStart, end: nextStart + duration };
    });
  }, [model, selectedIndex]);
  const fullDuration = Math.max(1, (model?.end ?? 0) - (model?.start ?? 0));
  const viewportDuration = Math.min(
    fullDuration,
    Math.max(1, (viewport?.end ?? 0) - (viewport?.start ?? 0))
  );
  const viewportStart = model === null || viewport === null ? model?.start ?? 0 : Math.min(
    Math.max(viewport.start, model.start),
    model.end - viewportDuration
  );
  const domainDuration = viewport === null ? fullDuration : viewportDuration;
  const domainStart = viewport === null ? model?.start ?? 0 : viewportStart;
  const showsEarlierBoundary = hasEarlierRecords && model !== null && domainStart === model.start;
  const loadEarlier = onLoadEarlier === void 0 || loadingEarlier ? void 0 : () => {
    setLoadingEarlier(true);
    void onLoadEarlier().finally(() => {
      setLoadingEarlier(false);
    });
  };
  const projectedDomainStyle = model === null ? void 0 : {
    "--trajectory-domain-left": `${-(domainStart - model.start) / domainDuration * 100}%`,
    "--trajectory-domain-width": `${fullDuration / domainDuration * 100}%`
  };
  const committed = model === null || range === null ? null : rangeFraction(range, domainStart, domainDuration, model.start, model.end);
  const draftFraction = model === null || draft === null ? null : rangeFraction(draft, domainStart, domainDuration, model.start, model.end);
  const visibleRange = draftFraction ?? committed;
  const activeRange = draft ?? range;
  (0, import_react4.useEffect)(() => {
    const root = rootRef.current;
    if (root === null) return;
    const onWheel = (event) => {
      event.preventDefault();
      const track = trackRef.current;
      if (track === null || model === null) return;
      setAnimateViewport(false);
      const rect = track.getBoundingClientRect();
      const anchorFraction = clampFraction((event.clientX - rect.left) / Math.max(1, rect.width));
      const nextDuration = Math.min(
        fullDuration,
        Math.max(
          Math.min(mode === "sequence" ? MINIMUM_ZOOM_OPERATIONS : 20, fullDuration),
          domainDuration * Math.exp(event.deltaY * 15e-4)
        )
      );
      if (nextDuration >= fullDuration * 0.999) {
        setViewport(null);
        return;
      }
      const anchorTime = domainStart + anchorFraction * domainDuration;
      const nextStart = Math.min(
        Math.max(anchorTime - anchorFraction * nextDuration, model.start),
        model.end - nextDuration
      );
      setViewport({ start: nextStart, end: nextStart + nextDuration });
    };
    root.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      root.removeEventListener("wheel", onWheel);
    };
  }, [domainDuration, domainStart, fullDuration, mode, model]);
  if (model === null) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { ref: rootRef, className: TrajectoryTimeline_default.root, "aria-label": t("timeline.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: TrajectoryTimeline_default.plot, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LaneLabels, { t }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: TrajectoryTimeline_default.track, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: TrajectoryTimeline_default.empty, children: t("timeline.noTimingData") }),
        hasEarlierRecords && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          EarlierHistoryBoundary,
          {
            loading: loadingEarlier,
            onHover: () => {
              setHover(null);
            },
            onLoad: loadEarlier,
            t
          }
        )
      ] })
    ] }) });
  }
  const minimumSelectionDuration = Math.min(
    domainDuration,
    fullDuration / model.spans.length
  );
  const fractionAt = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return clampFraction((event.clientX - rect.left) / Math.max(1, rect.width));
  };
  const recordIndexAt = (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    const value = target?.closest("[data-timeline-record-index]")?.dataset.timelineRecordIndex;
    if (value === void 0) return null;
    const index = Number(value);
    return Number.isFinite(index) ? index : null;
  };
  const commit = (nextRange) => {
    onRangeChange(nextRange);
  };
  const onPointerDown = (event) => {
    if (event.button === 2) {
      panRef.current = {
        anchorClientX: event.clientX,
        anchorStart: domainStart,
        moved: false,
        pannable: viewport !== null,
        pointerId: event.pointerId
      };
      if (viewport !== null) setAnimateViewport(false);
      setPanning(true);
      if (typeof event.currentTarget.setPointerCapture === "function") {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      return;
    }
    if (event.button !== 0) return;
    const anchor = fractionAt(event);
    const anchorTime = domainStart + anchor * domainDuration;
    const recordIndex = recordIndexAt(event);
    setHover({ fraction: anchor, recordIndex });
    dragRef.current = {
      pointerId: event.pointerId,
      anchorTime,
      anchorClientX: event.clientX,
      recordIndex
    };
    if (typeof event.currentTarget.setPointerCapture === "function") {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    setDraft({ start: anchorTime, end: anchorTime });
  };
  const onPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const fraction = fractionAt(event);
    setHover({ fraction, recordIndex: recordIndexAt(event) });
    const pan = panRef.current;
    if (pan !== null && pan.pointerId === event.pointerId) {
      if (Math.abs(event.clientX - pan.anchorClientX) >= MINIMUM_DRAG_PX) {
        pan.moved = true;
      }
      if (!pan.pannable) return;
      const delta = (event.clientX - pan.anchorClientX) / Math.max(1, rect.width);
      const nextStart = Math.min(
        Math.max(pan.anchorStart - delta * domainDuration, model.start),
        model.end - domainDuration
      );
      setViewport({ start: nextStart, end: nextStart + domainDuration });
      return;
    }
    const drag = dragRef.current;
    if (drag === null || drag.pointerId !== event.pointerId) return;
    let nextDomainStart = domainStart;
    if (viewport !== null) {
      const localX = event.clientX - rect.left;
      const edgeWidth = Math.min(
        MAXIMUM_EDGE_PAN_PX,
        Math.max(1, rect.width * EDGE_PAN_ZONE_FRACTION)
      );
      const direction = localX < edgeWidth ? -1 : localX > rect.width - edgeWidth ? 1 : 0;
      if (direction !== 0) {
        const edgeDistance = direction < 0 ? edgeWidth - localX : localX - (rect.width - edgeWidth);
        const strength = clampFraction(edgeDistance / edgeWidth);
        const desiredStart = domainStart + direction * domainDuration * EDGE_PAN_STEP_FRACTION * Math.max(0.2, strength);
        nextDomainStart = Math.min(
          Math.max(desiredStart, model.start),
          model.end - domainDuration
        );
        if (nextDomainStart !== domainStart) {
          setAnimateViewport(false);
          setViewport({
            start: nextDomainStart,
            end: nextDomainStart + domainDuration
          });
        }
      }
    }
    const pointTime = nextDomainStart + fraction * domainDuration;
    setDraft(orderedRange(drag.anchorTime, pointTime));
  };
  const onPointerEnd = (event) => {
    const pan = panRef.current;
    if (pan !== null && pan.pointerId === event.pointerId) {
      const moved = pan.moved || Math.abs(event.clientX - pan.anchorClientX) >= MINIMUM_DRAG_PX;
      panRef.current = null;
      setPanning(false);
      if (!moved) onRangeChange(null);
      return;
    }
    const drag = dragRef.current;
    if (drag === null || drag.pointerId !== event.pointerId) return;
    const pointFraction = fractionAt(event);
    const pointTime = domainStart + pointFraction * domainDuration;
    const selected = orderedRange(drag.anchorTime, pointTime);
    setHover({ fraction: pointFraction, recordIndex: recordIndexAt(event) });
    dragRef.current = null;
    setDraft(null);
    const click = Math.abs(event.clientX - drag.anchorClientX) < MINIMUM_DRAG_PX;
    const clickedSpan = click && drag.recordIndex !== null ? model.spans.find((span) => span.index === drag.recordIndex) : void 0;
    if (clickedSpan !== void 0) {
      onRangeChange(null);
      onRecordSelect?.(clickedSpan.index);
      return;
    }
    const committedRange = selected.end - selected.start < minimumSelectionDuration ? centeredRange(
      click ? selected.start : (selected.start + selected.end) / 2,
      minimumSelectionDuration,
      model.start,
      model.end
    ) : selected;
    commit(committedRange);
    if (click) {
      const timelinePoint = selected.start;
      const nearest = model.spans.reduce((candidate, span) => {
        const candidateDistance = timelinePoint < candidate.start ? candidate.start - timelinePoint : timelinePoint > candidate.end ? timelinePoint - candidate.end : 0;
        const spanDistance = timelinePoint < span.start ? span.start - timelinePoint : timelinePoint > span.end ? timelinePoint - span.end : 0;
        return spanDistance < candidateDistance ? span : candidate;
      });
      onRecordFocus?.(nearest.index);
    }
  };
  const onKeyDown = (event) => {
    if (event.key !== "Escape" || range === null) return;
    event.preventDefault();
    onRangeChange(null);
  };
  const onPointerCancel = () => {
    dragRef.current = null;
    panRef.current = null;
    setDraft(null);
    setHover(null);
    setPanning(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { ref: rootRef, className: TrajectoryTimeline_default.root, "aria-label": t("timeline.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: TrajectoryTimeline_default.plot, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LaneLabels, { t }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        ref: trackRef,
        className: TrajectoryTimeline_default.track,
        "data-panning": panning || void 0,
        "aria-label": t("timeline.overviewAria"),
        tabIndex: 0,
        onKeyDown,
        onPointerDown,
        onPointerMove,
        onPointerUp: onPointerEnd,
        onPointerCancel,
        onPointerLeave: () => {
          if (dragRef.current === null && panRef.current === null) setHover(null);
        },
        onDoubleClick: (event) => {
          event.preventDefault();
          onRangeChange(null);
        },
        onContextMenu: (event) => {
          event.preventDefault();
        },
        children: [
          showsEarlierBoundary && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            EarlierHistoryBoundary,
            {
              loading: loadingEarlier,
              onHover: () => {
                setHover(null);
              },
              onLoad: loadEarlier,
              t
            }
          ),
          hover !== null && hover.recordIndex === null && draft === null && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: TrajectoryTimeline_default.hoverLine,
              "data-timeline-hover-line": true,
              "aria-hidden": "true",
              style: {
                "--trajectory-hover-left": `${hover.fraction * 100}%`
              }
            }
          ),
          visibleRange !== null && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                className: TrajectoryTimeline_default.selection,
                "data-dragging": draft === null ? void 0 : "true",
                "aria-hidden": "true",
                style: {
                  "--trajectory-selection-left": `${visibleRange.start * 100}%`,
                  "--trajectory-selection-width": `${(visibleRange.end - visibleRange.start) * 100}%`
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "div",
              {
                className: TrajectoryTimeline_default.selectionEdges,
                "data-dragging": draft === null ? void 0 : "true",
                "aria-hidden": "true",
                style: {
                  "--trajectory-selection-left": `${visibleRange.start * 100}%`,
                  "--trajectory-selection-width": `${(visibleRange.end - visibleRange.start) * 100}%`
                }
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: TrajectoryTimeline_default.turnBoundaries,
              "data-animate-viewport": animateViewport || void 0,
              "aria-hidden": "true",
              style: projectedDomainStyle,
              children: model.turnBoundaries.filter((boundary) => boundary.time > model.start && boundary.time >= domainStart && boundary.time <= domainStart + domainDuration).map((boundary) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "span",
                {
                  className: TrajectoryTimeline_default.turnBoundary,
                  "data-turn": boundary.turn,
                  style: {
                    "--trajectory-turn-left": `${(boundary.time - model.start) / fullDuration * 100}%`
                  }
                },
                boundary.turn
              ))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: TrajectoryTimeline_default.lanes,
              "data-animate-viewport": animateViewport || void 0,
              "data-timeline-domain": true,
              style: projectedDomainStyle,
              children: model.spans.filter((span) => span.index === selectedIndex || span.end >= domainStart && span.start <= domainStart + domainDuration).map((span) => {
                const left = (span.start - model.start) / fullDuration;
                const width = (span.end - span.start) / fullDuration;
                const widthPercent = width * 100;
                const detail = detailByIndex.get(span.index);
                const ttftMs = detail?.ttftMs;
                const decodingMs = detail?.decodingMs;
                const ttftFraction = ttftMs === void 0 || decodingMs === void 0 || ttftMs + decodingMs <= 0 ? null : ttftMs / (ttftMs + decodingMs);
                return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  import_dsh_client_ui_primitives4.Tooltip,
                  {
                    label: () => timelineTooltipLabel(span.kind, detail, t),
                    side: "bottom",
                    delayMs: TIMELINE_TOOLTIP_DELAY_MS,
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: TrajectoryTimeline_default.span,
                        "data-timeline-span": span.kind,
                        "data-timeline-record-index": span.index,
                        "data-assistant-timing": ttftFraction === null ? void 0 : "true",
                        "data-error": span.isError || void 0,
                        "data-equal-duration": mode === "time" || void 0,
                        "data-current": span.index === selectedIndex || void 0,
                        "data-hovered": hover?.recordIndex === span.index || void 0,
                        "data-search-match": searchMatchIndexes === null ? void 0 : searchMatchIndexes.has(span.index) ? "true" : "false",
                        "data-selected": activeRange === null ? void 0 : span.start <= activeRange.end && span.end >= activeRange.start ? "true" : "false",
                        style: {
                          "--trajectory-span-left": `${left * 100}%`,
                          "--trajectory-span-width": `${widthPercent}%`,
                          "--trajectory-span-gap": `min(${widthPercent * 0.08}%, 1px)`,
                          "--trajectory-span-lane": span.lane,
                          ...ttftFraction === null ? {} : { "--trajectory-assistant-ttft": `${ttftFraction * 100}%` }
                        }
                      }
                    )
                  },
                  span.index
                );
              })
            }
          )
        ]
      }
    )
  ] }) });
});

// src/vendor/trajectory/layout.ts
function layoutEntryOrder(entry) {
  return entry.kind === "system" && entry.change.kind === "initial" ? Number.NEGATIVE_INFINITY : entry.seq;
}
function inputCellDetail(node, t) {
  if (node.kind === "context" && node.content.length > 0 && node.content.every((block) => block.type === "tool-addition" || block.type === "tool-removal")) {
    const added = node.content.flatMap((block) => block.type === "tool-addition" ? [block.toolName] : []);
    const removed = node.content.flatMap((block) => block.type === "tool-removal" ? [block.toolName] : []);
    const single = node.content.length === 1 ? node.content[0] : void 0;
    const summary = added.length > 0 && removed.length > 0 ? t("layout.toolsChanged", { added: added.length, removed: removed.length }) : added.length > 0 ? t("layout.toolsAddedCount", { count: added.length }) : t("layout.toolsRemovedCount", { count: removed.length });
    return {
      text: single !== void 0 ? t(single.type === "tool-addition" ? "layout.toolAdded" : "layout.toolRemoved", { name: single.toolName }) : `${t("layout.toolUpdateNotice")} \xB7 ${summary}`,
      sourceSeq: node.seq,
      sourceBlocks: node.content.map((block) => ({ type: block.type, content: block.toolName })),
      ...single !== void 0 ? {} : { inputDetail: [
        ...added.length > 0 ? [t("layout.toolsAdded", { names: added.join(", ") })] : [],
        ...removed.length > 0 ? [t("layout.toolsRemoved", { names: removed.join(", ") })] : []
      ].join("\n") },
      timeSeconds: 0,
      startedAt: finiteTime(node.time)
    };
  }
  const preview = previewContent(node.content);
  const previewMarkdown = preview === "" ? void 0 : preview;
  const images = imageBlockCount(node.content);
  const files = fileBlockCount(node.content);
  const attachmentSummary = [
    images > 0 ? t("layout.imageCount", { count: images }) : void 0,
    files > 0 ? t("layout.fileAttachments", { count: files }) : void 0
  ].filter((value) => value !== void 0).join(" \xB7 ");
  return {
    text: attachmentSummary,
    ...previewMarkdown === void 0 ? {} : { previewMarkdown },
    sourceSeq: node.seq,
    messageSource: node.source,
    inputDetail: detailContent(node.content),
    sourceBlocks: node.content.map((block) => sourceBlock(block)),
    timeSeconds: 0,
    startedAt: finiteTime(node.time)
  };
}
function deriveTrajectoryLayout(input, t) {
  const {
    nodes,
    eventLocations,
    partial,
    runningCalls,
    requests = [],
    callSchemas
  } = input;
  const resultByCall = indexResults(nodes);
  const callById = new Map(resultByCall);
  for (const call of runningCalls) callById.set(call.callId, call);
  const emittedCallIds = indexAssistantCallIds(nodes);
  const followingAssistants = indexFollowingAssistants(nodes);
  const callStartById = /* @__PURE__ */ new Map();
  for (const result of resultByCall.values()) {
    const startedAt = finiteTime(result.callTime);
    if (startedAt !== null) callStartById.set(result.callId, startedAt);
  }
  for (const call of runningCalls) {
    if (call.phase === "preparing") continue;
    const startedAt = finiteTime(call.time);
    if (startedAt !== null) callStartById.set(call.callId, startedAt);
  }
  const turns = /* @__PURE__ */ new Map();
  const standaloneCompactions = [];
  let index = 0;
  let prevAbsTime = null;
  let lastAssistantTurn = null;
  const bucket = (turn) => {
    let entry = turns.get(turn);
    if (entry === void 0) {
      entry = { groups: [] };
      turns.set(turn, entry);
    }
    return entry;
  };
  const pushMessage = (turn, laid) => {
    const groups = bucket(turn).groups;
    const last = groups.at(-1);
    if (last?.title === t("group.message")) {
      last.laid.push(laid);
      return;
    }
    groups.push({ title: t("group.message"), laid: [laid] });
  };
  const pushStep = (turn, step, laid) => {
    if (laid.length === 0) return;
    const groups = bucket(turn).groups;
    const title = t("group.step", { step });
    const existing = groups.find((group) => group.title === title);
    if (existing !== void 0) {
      existing.laid.push(...laid);
      return;
    }
    groups.push({ title, laid: [...laid] });
  };
  const pushStepInput = (turn, step, laid) => {
    if (laid.length === 0) return;
    const groups = bucket(turn).groups;
    const title = t("group.step", { step });
    const existing = groups.find((group) => group.title === title);
    if (existing === void 0) {
      groups.push({ title, laid: [...laid] });
      return;
    }
    const request = existing.laid.findIndex((entry) => entry.cell.requestOnly === true);
    if (request === -1) existing.laid.push(...laid);
    else existing.laid.splice(request, 0, ...laid);
  };
  const representedRequests = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (node.kind === "assistant" && node.step > 0) {
      representedRequests.add(`${node.turn}\0${node.step}`);
    }
  }
  if (partial !== null && partial.step > 0) {
    representedRequests.add(`${partial.turn}\0${partial.step}`);
  }
  for (const call of runningCalls) {
    if (call.step > 0) representedRequests.add(`${call.turn}\0${call.step}`);
  }
  const entries = [
    ...(input.systemPrompts ?? []).map((prompt) => ({
      kind: "system",
      seq: prompt.seq,
      systemPrompt: prompt.text,
      change: { seq: prompt.seq, time: prompt.time, kind: prompt.update ? "system" : "initial" }
    })),
    ...nodes.map((node, nodeIndex) => ({
      kind: "node",
      seq: node.seq,
      node,
      nodeIndex
    })),
    ...requests.filter((request) => request.purpose === "compaction").map((request) => ({
      kind: "compaction",
      seq: request.startSeq,
      request
    })),
    ...requests.flatMap((request) => request.purpose !== "assistant" || request.promptChange === void 0 || request.prompt === void 0 ? [] : [{
      kind: "system",
      seq: request.promptChange.seq,
      request,
      change: request.promptChange
    }]),
    ...requests.filter((request) => request.purpose === "assistant").filter(
      (request) => !representedRequests.has(`${request.turn}\0${request.step}`)
    ).map((request) => ({
      kind: "request",
      seq: request.startSeq,
      request
    }))
  ].sort((left, right) => layoutEntryOrder(left) - layoutEntryOrder(right));
  for (const entry of entries) {
    if (entry.kind === "request") {
      const { request } = entry;
      pushStep(request.turn, request.step, [{
        absTime: finiteTime(request.startedAt),
        cell: {
          index: ++index,
          kind: "message",
          text: "",
          sourceSeq: request.startSeq,
          requestOnly: true,
          timeSeconds: request.completedAt === null ? null : durationSeconds(request.completedAt, request.startedAt),
          startedAt: finiteTime(request.startedAt),
          ...request.status === "error" ? { isError: true } : {}
        }
      }]);
      prevAbsTime = finiteTime(request.completedAt) ?? finiteTime(request.startedAt) ?? prevAbsTime;
      continue;
    }
    if (entry.kind === "system") {
      const { change, request } = entry;
      const laid = {
        absTime: finiteTime(change.time),
        cell: {
          index: ++index,
          kind: "system",
          text: promptChangeLabel(change, t),
          sourceSeq: change.seq,
          ...request?.prompt === void 0 ? {} : { promptDetail: request.prompt },
          ...entry.systemPrompt === void 0 ? {} : { systemPromptDetail: entry.systemPrompt },
          ...change.previous === void 0 ? {} : { previousPromptDetail: change.previous },
          timeSeconds: 0,
          startedAt: finiteTime(change.time)
        }
      };
      if (request !== void 0) {
        pushStepInput(request.turn, request.step, [laid]);
      } else {
        const turn = change.kind === "initial" ? firstVisibleTurn(nodes, partial) : enclosingPromptTurn(nodes, change.seq, partial);
        pushMessage(turn, laid);
      }
      prevAbsTime = finiteTime(change.time) ?? prevAbsTime;
      continue;
    }
    if (entry.kind === "compaction") {
      const request = entry.request;
      const rawOutput = request.rawOutput ?? request.summary;
      const thinkingDetail = rawOutput === void 0 ? "" : detailReasoning(rawOutput);
      const cell2 = {
        index: ++index,
        kind: "compacted",
        text: request.status === "running" ? t("layout.compacting") : request.status === "error" ? request.error === COMPACTION_INTERRUPTED_ERROR ? t("layout.compactionInterrupted") : request.error ?? t("layout.compactionFailed") : request.summary === void 0 ? t("layout.compacted") : "",
        ...request.status === "complete" && request.summary !== void 0 ? previewContentProperty(request.summary) : {},
        sourceSeq: request.startSeq,
        ...request.summary === void 0 ? {} : {
          outputDetail: detailContent(request.summary),
          outputBlocks: request.summary.map((block) => sourceBlock(block))
        },
        ...thinkingDetail === "" ? {} : { thinkingDetail },
        ...rawOutput === void 0 ? {} : { sourceBlocks: rawOutput.map((block) => sourceBlock(block)) },
        ...request.status === "error" ? { isError: true } : {},
        timeSeconds: request.completedAt === null ? null : durationSeconds(request.completedAt, request.startedAt),
        startedAt: finiteTime(request.startedAt)
      };
      attachUsage(cell2, request.usage);
      const compaction = {
        groups: [{
          title: t("group.compaction", { seq: request.startSeq }),
          laid: [{
            absTime: finiteTime(request.startedAt),
            cell: cell2
          }]
        }]
      };
      if (request.turn === null) standaloneCompactions.push(compaction);
      else bucket(request.turn).groups.push(...compaction.groups);
      prevAbsTime = finiteTime(request.completedAt) ?? finiteTime(request.startedAt) ?? prevAbsTime;
      continue;
    }
    const { node, nodeIndex: i } = entry;
    if (node.kind === "user" || node.kind === "steering" || node.kind === "context") {
      const placement = inputPlacement(
        followingAssistants[i],
        partial,
        eventLocations?.get(node.seq),
        node.kind === "steering" ? lastAssistantTurn ?? 1 : (lastAssistantTurn ?? 0) + 1
      );
      const laid = {
        absTime: finiteTime(node.time),
        cell: {
          index: ++index,
          kind: node.kind === "context" ? "context" : "user",
          ...inputCellDetail(node, t),
          ...node.kind === "user" ? { opensTurn: true } : {}
        }
      };
      if (placement.step === void 0) pushMessage(placement.turn, laid);
      else pushStepInput(placement.turn, placement.step, [laid]);
      prevAbsTime = finiteTime(node.time) ?? prevAbsTime;
      continue;
    }
    if (node.kind === "assistant") {
      const laidList = withSubCalls(
        expandAssistant(node, index + 1, prevAbsTime, resultByCall, callStartById, callById, t),
        t
      );
      if (node.step > 0) pushStep(node.turn, node.step, laidList);
      else for (const laid of laidList) pushMessage(node.turn, laid);
      const last = laidList[laidList.length - 1];
      if (last !== void 0) index = last.cell.index;
      prevAbsTime = finiteTime(node.time) ?? prevAbsTime;
      lastAssistantTurn = node.turn;
      continue;
    }
    if (node.kind === "compaction") {
      prevAbsTime = finiteTime(node.time) ?? prevAbsTime;
      continue;
    }
    if (node.kind === "tool-result") {
      if (!emittedCallIds.has(node.callId)) {
        const toolName = node.call?.name;
        const resultPreview = summarizeResult(node, t);
        const laidList = [{
          absTime: finiteTime(node.callTime ?? node.time),
          ...toolName !== void 0 ? { toolName } : {},
          callId: node.callId,
          subCalls: node.subCalls,
          cell: {
            index: ++index,
            kind: "tool",
            sourceSeq: node.seq,
            ...node.call !== null ? summarizeCall(node.call.name, node.call.argsRaw) : resultAsText(resultPreview),
            ...node.call !== null ? { inputDetail: node.call.argsRaw } : {},
            outputDetail: detailResult(node, t),
            resultSeq: node.seq,
            outputBlocks: node.content.map((block) => sourceBlock(block)),
            ...resultPreview,
            callId: node.callId,
            isError: node.isError,
            timeSeconds: durationSeconds(node.time, node.callTime),
            startedAt: finiteTime(node.callTime)
          }
        }];
        for (const laid of expandSubCalls(node.subCalls, index, t)) {
          laidList.push(laid);
          index = laid.cell.index;
        }
        pushStep(0, 1, laidList);
      }
      prevAbsTime = finiteTime(node.time) ?? prevAbsTime;
    }
  }
  if (partial !== null) {
    const fake = {
      kind: "assistant",
      seq: Number.MAX_SAFE_INTEGER,
      time: 0,
      turn: partial.turn,
      step: partial.step,
      blocks: partial.blocks
    };
    const laidList = withSubCalls(expandAssistant(
      fake,
      index + 1,
      prevAbsTime,
      resultByCall,
      callStartById,
      callById,
      t,
      { streaming: true, timing: partial.timing }
    ), t);
    if (partial.step > 0) pushStep(partial.turn, partial.step, laidList);
    else for (const laid of laidList) pushMessage(partial.turn, laid);
    const last = laidList[laidList.length - 1];
    if (last !== void 0) index = last.cell.index;
  }
  const seenCalls = collectCallIds(turns);
  for (const call of runningCalls) {
    if (call.phase === "preparing" || seenCalls.has(call.callId)) continue;
    const laidList = [{
      absTime: null,
      toolName: call.name,
      callId: call.callId,
      subCalls: call.subCalls,
      cell: {
        index: ++index,
        kind: "tool",
        ...summarizeCall(call.name, call.argsRaw),
        inputDetail: call.argsRaw,
        callId: call.callId,
        timeSeconds: null,
        startedAt: finiteTime(call.time)
      }
    }];
    for (const laid of expandSubCalls(call.subCalls, index, t)) {
      laidList.push(laid);
      index = laid.cell.index;
    }
    if (call.step > 0) pushStep(call.turn, call.step, laidList);
    else for (const laid of laidList) pushMessage(call.turn, laid);
  }
  const prologue = turns.get(0);
  if (prologue !== void 0) {
    turns.delete(0);
    const emptyTurn = () => ({ groups: [] });
    const first = turns.get(1) ?? emptyTurn();
    first.groups = [...prologue.groups, ...first.groups];
    turns.set(1, first);
  }
  for (const entry of [...turns.values(), ...standaloneCompactions]) {
    for (const group of entry.groups) {
      for (const laid of group.laid) attachToolSchema(laid, callSchemas);
    }
  }
  return [
    ...[...turns.entries()].map(([turn, entry]) => toTurnModel(turn, entry, t)),
    ...standaloneCompactions.map((entry) => toTurnModel(null, entry, t))
  ].sort((left, right) => firstCellIndex(left) - firstCellIndex(right));
}
function appendTrajectoryPartialLayout(turns, partial, lastIndex, t) {
  if (partial === null) return turns;
  const partialTurn = deriveTrajectoryLayout({
    nodes: [],
    partial,
    runningCalls: []
  }, t).at(0);
  if (partialTurn === void 0) return turns;
  const streamed = {
    ...partialTurn,
    groups: partialTurn.groups.map((group) => ({
      ...group,
      cells: group.cells.map((cell2) => ({ ...cell2, index: cell2.index + lastIndex }))
    }))
  };
  const turnIndex = turns.findIndex((turn) => turn.turn === streamed.turn);
  if (turnIndex === -1) return [...turns, streamed];
  const current = turns[turnIndex];
  if (current === void 0) return turns;
  const groups = [...current.groups];
  for (const streamedGroup of streamed.groups) {
    const groupIndex = groups.findIndex((group2) => group2.title === streamedGroup.title);
    if (groupIndex === -1) {
      groups.push(streamedGroup);
      continue;
    }
    const group = groups[groupIndex];
    if (group === void 0) continue;
    const streamedCallIds = new Set(
      streamedGroup.cells.flatMap((cell2) => cell2.callId === void 0 ? [] : [cell2.callId])
    );
    groups[groupIndex] = {
      ...streamedGroup,
      cells: [
        ...group.cells.filter(
          (cell2) => cell2.requestOnly !== true && (cell2.callId === void 0 || !streamedCallIds.has(cell2.callId))
        ),
        ...streamedGroup.cells
      ]
    };
  }
  const updated = [...turns];
  updated[turnIndex] = { ...current, groups };
  return updated;
}
function attachToolSchema(laid, callSchemas) {
  if (laid.callId === void 0 || callSchemas === void 0) return;
  const schema = callSchemas.get(laid.callId);
  if (schema === void 0) return;
  laid.cell.schemaDetail = JSON.stringify(schema, null, 2);
}
function toTurnModel(turn, entry, t) {
  const groups = entry.groups.map(({ title, laid }) => {
    const description = groupDescription(laid, t);
    return {
      title,
      ...description !== void 0 ? { description } : {},
      cells: laid.map((l) => l.cell)
    };
  });
  return { turn, groups };
}
function firstCellIndex(turn) {
  return Math.min(
    ...turn.groups.flatMap((group) => group.cells.map((cell2) => cell2.index)),
    Number.POSITIVE_INFINITY
  );
}
function groupDescription(laid, t) {
  const parts = [];
  const times = [];
  for (const l of laid) {
    if (l.absTime === null || !Number.isFinite(l.absTime)) continue;
    times.push(l.absTime);
    if (l.cell.kind === "tool" && l.cell.timeSeconds !== null && Number.isFinite(l.cell.timeSeconds)) {
      times.push(l.absTime + l.cell.timeSeconds * 1e3);
    }
  }
  if (times.length >= 2) {
    const span = formatGroupDuration((Math.max(...times) - Math.min(...times)) / 1e3, t);
    if (span !== void 0) parts.push(span);
  } else if (times.length === 1) {
    const own = laid.find((l) => l.absTime === times[0])?.cell.timeSeconds;
    const span = own !== null && own !== void 0 ? formatGroupDuration(own, t) : void 0;
    if (span !== void 0) parts.push(span);
  }
  const tools = /* @__PURE__ */ new Map();
  for (const l of laid) {
    if (l.toolName === void 0 || l.cell.kind !== "tool") continue;
    tools.set(l.toolName, (tools.get(l.toolName) ?? 0) + 1);
  }
  for (const [name2, count] of tools) {
    parts.push(count > 1 ? `${name2}\xD7${count}` : name2);
  }
  return parts.length === 0 ? void 0 : parts.join(" ");
}
function formatGroupDuration(seconds, t) {
  if (!Number.isFinite(seconds)) return void 0;
  return formatElapsedSeconds(seconds, t);
}
function durationSeconds(later, earlier) {
  if (earlier === null || !Number.isFinite(later) || !Number.isFinite(earlier)) return null;
  return Math.max(0, (later - earlier) / 1e3);
}
function finiteTime(time) {
  return typeof time === "number" && Number.isFinite(time) ? time : null;
}
function expandAssistant(node, startIndex, prevAbsTime, results, callStarts, calls, t, opts) {
  if (opts?.streaming === true && node.blocks.length === 0) return [];
  const out = [];
  let index = startIndex - 1;
  const usage = node.usage;
  const streaming = opts?.streaming === true;
  const timing = opts?.timing ?? node.timing;
  const recordedStart = finiteTime(timing?.stepStartTime);
  const messageDuration = streaming ? null : durationSeconds(node.time, recordedStart ?? prevAbsTime);
  const nodeAbs = streaming ? null : finiteTime(node.time);
  const messageText = node.blocks.filter((block) => block.kind === "text" && (!streaming || block.text !== "")).map((block) => block.kind === "text" ? block.text : "").join("\n\n");
  const thinkingText = node.blocks.filter((block) => block.kind === "reasoning" && (!streaming || block.text !== "")).map((block) => block.kind === "reasoning" ? block.text : "").join("\n\n");
  const message = {
    index: ++index,
    recordId: `assistant\0${node.turn}\0${node.step}`,
    kind: "message",
    sourceSeq: node.seq,
    text: messageText !== "" || thinkingText !== "" ? "" : summarizeAssistantActivity(node.blocks, t),
    ...messageText !== "" ? { previewMarkdown: messageText } : thinkingText !== "" ? { previewMarkdown: thinkingText } : {},
    ...messageText !== "" ? { outputDetail: messageText } : {},
    ...thinkingText !== "" ? { thinkingDetail: thinkingText } : {},
    sourceBlocks: node.blocks.map((block) => assistantSourceBlock(block)),
    ...node.interrupted === true ? { isError: true } : {},
    timeSeconds: messageDuration,
    startedAt: recordedStart
  };
  attachUsage(message, usage);
  message.assistantMetrics = {
    timingRecorded: timing !== void 0,
    stepStartTime: timing?.stepStartTime ?? null,
    firstTokenTime: timing?.firstTokenTime ?? null,
    completedTime: streaming ? null : finiteTime(node.time),
    usageProvided: usage !== void 0,
    outputTokens: Number.isFinite(usage?.outputTokens) ? usage?.outputTokens ?? null : null
  };
  out.push({ absTime: nodeAbs, cell: message });
  for (const block of node.blocks) {
    if (block.kind !== "tool-call") continue;
    const result = results.get(block.callId);
    const toolDuration = streaming || result === void 0 ? null : durationSeconds(result.time, result.callTime);
    const callAbs = finiteTime(callStarts.get(block.callId));
    const call = calls.get(block.callId);
    const resultPreview = result === void 0 ? void 0 : summarizeResult(result, t);
    out.push({
      absTime: callAbs,
      toolName: block.name,
      callId: block.callId,
      ...call === void 0 ? {} : { subCalls: call.subCalls },
      cell: {
        index: ++index,
        kind: "tool",
        ...summarizeCall(block.name, block.argsRaw),
        inputDetail: block.argsRaw,
        callId: block.callId,
        ...result !== void 0 ? {
          outputDetail: detailResult(result, t),
          resultSeq: result.seq,
          outputBlocks: result.content.map((block2) => sourceBlock(block2)),
          ...resultPreview,
          isError: result.isError
        } : {},
        timeSeconds: toolDuration,
        startedAt: callAbs
      }
    });
  }
  return out;
}
function summarizeAssistantActivity(blocks, t) {
  const tools = /* @__PURE__ */ new Map();
  for (const block of blocks) {
    if (block.kind !== "tool-call") continue;
    tools.set(block.name, (tools.get(block.name) ?? 0) + 1);
  }
  if (tools.size > 0) {
    return t("layout.toolCallOnly");
  }
  const images = blocks.filter((block) => block.kind === "image").length;
  if (images > 0) return t("layout.imageCount", { count: images });
  return "";
}
function promptChangeLabel(change, t) {
  if (change.kind === "initial") return t("layout.initialSystemPrompt");
  if (change.kind === "system") return t("layout.systemPromptUpdated");
  if (change.kind === "tools") return t("layout.toolsUpdated");
  return t("layout.systemPromptAndToolsUpdated");
}
function assistantSourceBlock(block) {
  switch (block.kind) {
    case "text":
      return { type: "text", content: block.text };
    case "reasoning":
      return { type: "thinking", content: block.text };
    case "tool-call":
      return {
        type: "tool-call",
        content: block.argsRaw,
        callId: block.callId,
        toolName: block.name
      };
    case "image":
      return sourceBlock({ type: "image", attachment: block.attachment });
    case "other":
      return sourceBlock(block.block);
  }
}
function sourceBlock(value) {
  if (typeof value !== "object" || value === null) {
    return { type: "unknown", content: stringifySourceValue(value) };
  }
  const block = value;
  const type = typeof block.type === "string" ? block.type : "unknown";
  if (typeof block.text === "string") {
    return { type: type === "reasoning" ? "thinking" : type, content: block.text };
  }
  if ((type === "image" || type === "file") && typeof block.attachment === "object" && block.attachment !== null && typeof block.attachment.attachmentId === "string") {
    return {
      type,
      content: stringifySourceValue(value),
      ...type === "image" ? { attachment: block.attachment } : { file: block.attachment }
    };
  }
  return { type, content: stringifySourceValue(value) };
}
function imageBlockCount(content) {
  return content.filter((block) => block.type === "image").length;
}
function fileBlockCount(content) {
  return content.filter((block) => block.type === "file").length;
}
function stringifySourceValue(value) {
  const json = JSON.stringify(value, null, 2);
  return json || String(value);
}
function inputPlacement(followingAssistant, partial, location, fallbackTurn) {
  if (location?.kind === "step") {
    return { turn: location.turn.turn, step: location.step.step };
  }
  const locatedTurn = location?.kind === "turn" ? location.turn.turn : void 0;
  if (followingAssistant !== void 0 && (locatedTurn === void 0 || followingAssistant.turn === locatedTurn)) {
    return {
      turn: followingAssistant.turn,
      ...followingAssistant.step > 0 ? { step: followingAssistant.step } : {}
    };
  }
  if (partial !== null && (locatedTurn === void 0 || partial.turn === locatedTurn)) {
    return { turn: partial.turn, ...partial.step > 0 ? { step: partial.step } : {} };
  }
  if (locatedTurn !== void 0) return { turn: locatedTurn };
  return { turn: fallbackTurn };
}
function indexFollowingAssistants(nodes) {
  const following = new Array(nodes.length);
  let assistant;
  for (let index = nodes.length - 1; index >= 0; index--) {
    following[index] = assistant;
    const node = nodes[index];
    if (node?.kind === "assistant") assistant = node;
  }
  return following;
}
function enclosingPromptTurn(nodes, seq, partial) {
  const next = nodes.find((node) => node.seq > seq && node.kind === "assistant" && node.step > 0);
  if (next?.kind === "assistant") return next.turn;
  return partial?.turn ?? 1;
}
function firstVisibleTurn(nodes, partial) {
  const turns = nodes.flatMap(
    (node) => node.kind === "assistant" && node.turn > 0 ? [node.turn] : []
  );
  if (partial !== null && partial.turn > 0) turns.push(partial.turn);
  return turns.length === 0 ? 1 : Math.min(...turns);
}
function attachUsage(cell2, usage) {
  if (usage === void 0) return;
  if (usage.inputTokens !== void 0) cell2.input = usage.inputTokens;
  if (usage.cacheReadTokens !== void 0) cell2.cacheRead = usage.cacheReadTokens;
  if (usage.cacheWriteTokens !== void 0) cell2.cacheWrite = usage.cacheWriteTokens;
  if (usage.outputTokens !== void 0) cell2.output = usage.outputTokens;
  if (usage.reasoningTokens !== void 0) cell2.think = usage.reasoningTokens;
}
function indexResults(nodes) {
  const map = /* @__PURE__ */ new Map();
  for (const node of nodes) {
    if (node.kind === "tool-result") map.set(node.callId, node);
  }
  return map;
}
function indexAssistantCallIds(nodes) {
  const ids = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (node.kind !== "assistant") continue;
    for (const block of node.blocks) {
      if (block.kind === "tool-call") ids.add(block.callId);
    }
  }
  return ids;
}
function collectCallIds(turns) {
  const ids = /* @__PURE__ */ new Set();
  for (const entry of turns.values()) {
    for (const group of entry.groups) {
      for (const laid of group.laid) {
        if (laid.callId !== void 0) ids.add(laid.callId);
      }
    }
  }
  return ids;
}
function withSubCalls(laidList, t) {
  if (!laidList.some((laid) => laid.subCalls !== void 0 && laid.subCalls.length > 0)) return laidList;
  const out = [];
  let index = laidList[0] !== void 0 ? laidList[0].cell.index - 1 : 0;
  for (const laid of laidList) {
    out.push({ ...laid, cell: { ...laid.cell, index: ++index } });
    for (const sub of expandSubCalls(laid.subCalls, index, t)) {
      out.push(sub);
      index = sub.cell.index;
    }
  }
  return out;
}
function expandSubCalls(subs, startIndex, t) {
  if (subs === void 0 || subs.length === 0) return [];
  const out = [];
  let index = startIndex;
  for (const sub of subs) {
    if (!("kind" in sub) && sub.phase === "preparing") continue;
    const settled = "kind" in sub;
    const resultPreview = settled ? summarizeResult(sub, t) : void 0;
    const laid = {
      absTime: settled ? finiteTime(sub.callTime ?? sub.time) : finiteTime(sub.time),
      toolName: settled ? sub.call?.name ?? sub.callId : sub.name,
      callId: sub.callId,
      cell: {
        index: ++index,
        kind: "subtool",
        callId: sub.callId,
        ...settled ? sub.call !== null ? summarizeCall(sub.call.name, sub.call.argsRaw) : resultAsText(resultPreview) : summarizeCall(sub.name, sub.argsRaw),
        ...settled ? sub.call !== null ? { inputDetail: sub.call.argsRaw } : {} : { inputDetail: sub.argsRaw },
        ...settled ? {
          outputDetail: detailResult(sub, t),
          resultSeq: sub.seq,
          outputBlocks: sub.content.map((block) => sourceBlock(block)),
          ...resultPreview,
          isError: sub.isError
        } : {},
        // The code-dispatch start/settle pair carries per-sub-call wall time;
        // a running (unsettled) or pre-pair log entry shows the em dash.
        timeSeconds: settled ? durationSeconds(sub.time, sub.callTime) : null,
        startedAt: settled ? finiteTime(sub.callTime) : finiteTime(sub.time)
      }
    };
    out.push(laid);
    for (const child of expandSubCalls(sub.subCalls, index, t)) {
      out.push(child);
      index = child.cell.index;
    }
  }
  return out;
}
function summarizeCall(name2, argsRaw) {
  return {
    toolName: name2,
    text: name2,
    ...argsRaw === "" ? {} : { previewMarkdown: argsRaw }
  };
}
function summarizeResult(node, t) {
  for (const block of node.content) {
    if (block.type === "text" && typeof block.text === "string" && block.text !== "") {
      return { result: "", resultPreviewMarkdown: block.text };
    }
  }
  if (node.isError) {
    return { result: node.error?.code ?? "error" };
  }
  const images = imageBlockCount(node.content);
  if (images > 0) return { result: t("layout.imageCount", { count: images }) };
  return { result: t("record.noOutput") };
}
function resultAsText(result) {
  return {
    text: result?.result ?? "",
    ...result?.resultPreviewMarkdown === void 0 ? {} : { previewMarkdown: result.resultPreviewMarkdown }
  };
}
function detailResult(node, t) {
  const text = node.content.filter((block) => block.type === "text" && typeof block.text === "string").map((block) => block.type === "text" ? block.text : "").join("\n");
  if (text !== "" && (!node.isError || node.content.some((block) => block.type === "text" && typeof block.text === "string" && block.text !== ""))) return text;
  if (node.isError) {
    return node.error === void 0 ? "error" : `${node.error.name}: ${node.error.code}`;
  }
  const images = imageBlockCount(node.content);
  if (images > 0) return t("layout.imageCount", { count: images });
  if (node.content.length === 0 || node.content.every((block) => block.type === "text" && (typeof block.text !== "string" || block.text === ""))) return t("record.noOutput");
  return JSON.stringify(node.content, null, 2);
}
function detailContent(content) {
  return content.filter((block) => block.type === "text" && typeof block.text === "string").map((block) => block.text ?? "").join("\n");
}
function detailReasoning(content) {
  return content.filter((block) => block.type === "reasoning" && typeof block.text === "string").map((block) => block.text ?? "").join("\n");
}
function previewContent(content) {
  for (const block of content) {
    if (block.type === "text" && typeof block.text === "string") return block.text;
  }
  return void 0;
}
function previewContentProperty(content) {
  const previewMarkdown = previewContent(content);
  return previewMarkdown === void 0 ? {} : { previewMarkdown };
}

// src/vendor/trajectory/views.module.css
var css4 = "/* Full-bleed, fixed-height host for the trajectory ledger. Isolation keeps the\n   sticky toolbar's z-index inside this view, so the conversation tab row\n   stacked above the view still paints its active bar over the view's top\n   edge. */\n.bt_views_root_QpOuZ9 {\n  --dsh-trajectory-toolbar-height: 32px;\n\n  isolation: isolate;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  min-height: 0;\n  width: 100%;\n  box-sizing: border-box;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_views_ledger_7rRXSg {\n  position: relative;\n  z-index: 0;\n  isolation: isolate;\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n\n  /* ConversationRoot publishes the floating composer's live height. */\n  --dsh-trajectory-bottom-clearance: calc(var(--dsh-composer-height, 152px) + 16px);\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="qMCcq9"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "qMCcq9");
  el.textContent = css4;
  document.head.appendChild(el);
}
var views_default = { "root": "bt_views_root_QpOuZ9", "ledger": "bt_views_ledger_7rRXSg" };

// src/vendor/trajectory/TrajectoryView.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var EMPTY_TURN_IDS = /* @__PURE__ */ new Set();
var EMPTY_RECORD_IDS = /* @__PURE__ */ new Set();
var HISTORY_PAGE_NODES = 50;
function containsCall(calls, callId) {
  for (const call of calls) {
    if (call.callId === callId || containsCall(call.subCalls, callId)) return true;
  }
  return false;
}
function lastCellIndex(turns) {
  let last = 0;
  for (const turn of turns) {
    for (const group of turn.groups) {
      for (const cell2 of group.cells) last = Math.max(last, cell2.index);
    }
  }
  return last;
}
function timelineBlock(block) {
  switch (block.kind) {
    case "text":
      return { kind: "text", text: "" };
    case "reasoning":
      return { kind: "reasoning", text: "" };
    case "image":
      return block;
    case "tool-call":
      return {
        kind: "tool-call",
        callId: block.callId,
        name: block.name,
        argsRaw: ""
      };
    case "other":
      return { kind: "other", block: null };
  }
}
function partialStructureSignature(partial) {
  if (partial === null) return "";
  return partial.blocks.map((block) => block.kind === "tool-call" ? `${block.kind}:${block.callId}:${block.name}` : block.kind).join("\0");
}
function requestUsage(value) {
  const usage = value;
  if (usage === void 0) return void 0;
  return {
    ...usage.inputTokens === void 0 ? {} : { input: usage.inputTokens },
    ...usage.cacheReadTokens === void 0 ? {} : { cacheRead: usage.cacheReadTokens },
    ...usage.cacheWriteTokens === void 0 ? {} : { cacheWrite: usage.cacheWriteTokens },
    ...usage.outputTokens === void 0 ? {} : { output: usage.outputTokens },
    ...usage.reasoningTokens === void 0 ? {} : { reasoning: usage.reasoningTokens }
  };
}
function addUsage(total, usage) {
  if (usage === void 0) return total;
  return {
    ...total?.input === void 0 && usage.input === void 0 ? {} : { input: (total?.input ?? 0) + (usage.input ?? 0) },
    ...total?.cacheRead === void 0 && usage.cacheRead === void 0 ? {} : { cacheRead: (total?.cacheRead ?? 0) + (usage.cacheRead ?? 0) },
    ...total?.cacheWrite === void 0 && usage.cacheWrite === void 0 ? {} : { cacheWrite: (total?.cacheWrite ?? 0) + (usage.cacheWrite ?? 0) },
    ...total?.output === void 0 && usage.output === void 0 ? {} : { output: (total?.output ?? 0) + (usage.output ?? 0) },
    ...total?.reasoning === void 0 && usage.reasoning === void 0 ? {} : { reasoning: (total?.reasoning ?? 0) + (usage.reasoning ?? 0) }
  };
}
function TrajectoryView({
  useSession,
  useTrajectory,
  useDuration,
  watchToolResult,
  loadOlder,
  loadImage,
  setActualDuration,
  viewRequest,
  completeViewRequest,
  renderSlot,
  t,
  jsonStringWrapping,
  qt
}) {
  const [collapsedTurns, setCollapsedTurns] = (0, import_react5.useState)(EMPTY_TURN_IDS);
  const [collapsedAssistants, setCollapsedAssistants] = (0, import_react5.useState)(EMPTY_RECORD_IDS);
  const [collapsedTools, setCollapsedTools] = (0, import_react5.useState)(EMPTY_RECORD_IDS);
  const [timelineSelection, setTimelineSelection] = (0, import_react5.useState)(null);
  const actualDuration = useDuration((value) => value);
  const [actualTime, setActualTime] = (0, import_react5.useState)(false);
  const [queryText, setQueryText] = (0, import_react5.useState)("");
  const [flat, setFlat] = (0, import_react5.useState)(false);
  const [selectedTimelineIndex, setSelectedTimelineIndex] = (0, import_react5.useState)(null);
  const [timelineRecordSelection, setTimelineRecordSelection] = (0, import_react5.useState)(null);
  const [timelineRecordFocus, setTimelineRecordFocus] = (0, import_react5.useState)(null);
  const completeInspection = useTrajectory((snapshot) => snapshot);
  const latestNodeSeq = completeInspection.eventNodes.at(-1)?.seq;
  const [historyTailSeq, setHistoryTailSeq] = (0, import_react5.useState)(latestNodeSeq);
  const [historyNodeLimit, setHistoryNodeLimit] = (0, import_react5.useState)(HISTORY_PAGE_NODES);
  const fixedTailSeq = historyTailSeq ?? latestNodeSeq;
  const historyTailIndex = fixedTailSeq === void 0 ? -1 : completeInspection.eventNodes.findLastIndex((node) => node.seq <= fixedTailSeq);
  const historyEndIndex = historyTailIndex < 0 && latestNodeSeq !== void 0 ? completeInspection.eventNodes.length : historyTailIndex + 1;
  const historyStartIndex = Math.max(0, historyEndIndex - historyNodeLimit);
  (0, import_react5.useEffect)(() => {
    if (latestNodeSeq !== void 0 && (historyTailSeq === void 0 || historyTailIndex < 0)) {
      setHistoryTailSeq(latestNodeSeq);
    }
  }, [historyTailIndex, historyTailSeq, latestNodeSeq]);
  const inspection = (0, import_react5.useMemo)(() => {
    if (historyStartIndex === 0) return completeInspection;
    const eventNodes = completeInspection.eventNodes.slice(historyStartIndex);
    const firstSeq = eventNodes[0]?.seq ?? 0;
    return {
      ...completeInspection,
      eventNodes,
      requests: completeInspection.requests.filter((request) => request.startSeq >= firstSeq || (request.resultSeq ?? -1) >= firstSeq)
    };
  }, [completeInspection, historyStartIndex]);
  const historyLoading = useSession((snapshot) => snapshot.openState === "loading");
  const olderHistoryLoading = useSession((snapshot) => snapshot.loadingOlder);
  const sessionHasOlderHistory = useSession((snapshot) => snapshot.hasMore);
  const hasResidentOlderHistory = historyStartIndex > 0;
  const hasOlderHistory = hasResidentOlderHistory || sessionHasOlderHistory;
  const nodes = inspection.eventNodes;
  const eventLocations = inspection.eventLocations;
  const historyBaseSeq = nodes[0]?.seq ?? 0;
  const partial = inspection.partial;
  const runningCalls = inspection.runningCalls;
  const requests = inspection.requests;
  const callSchemas = inspection.callSchemas;
  const inspectCallId = viewRequest?.view === "trajectory" ? viewRequest.focus : null;
  const inspectNodeIndex = (0, import_react5.useMemo)(
    () => inspectCallId === null ? -1 : completeInspection.eventNodes.findIndex((node) => node.kind === "assistant" ? node.blocks.some((block) => block.kind === "tool-call" && block.callId === inspectCallId) : node.kind === "tool-result" && containsCall([node], inspectCallId)),
    [completeInspection.eventNodes, inspectCallId]
  );
  (0, import_react5.useEffect)(() => {
    if (inspectNodeIndex < 0 || inspectNodeIndex >= historyStartIndex) return;
    setHistoryNodeLimit((limit) => limit + historyStartIndex - inspectNodeIndex);
  }, [historyStartIndex, inspectNodeIndex]);
  const requestNumbers = (0, import_react5.useMemo)(() => {
    const assistantsByStep = /* @__PURE__ */ new Map();
    for (const node of completeInspection.eventNodes) {
      if (node.kind !== "assistant" || node.step <= 0) continue;
      assistantsByStep.set(`${node.turn}\0${node.step}`, node);
    }
    const requestsByStep = new Map(
      completeInspection.requests.filter((request) => request.purpose === "assistant").map((request) => [
        `${request.turn}\0${request.step}`,
        request
      ])
    );
    const orderedRequests = [
      ...completeInspection.requests.map((request) => ({
        seq: request.startSeq,
        request,
        node: request.purpose === "assistant" ? assistantsByStep.get(`${request.turn}\0${request.step}`) : void 0
      })),
      ...[...assistantsByStep.entries()].flatMap(
        ([key, node]) => requestsByStep.has(key) ? [] : [{
          seq: node.seq,
          request: void 0,
          node
        }]
      )
    ].sort((left, right) => left.seq - right.seq);
    const numbered = [];
    let cumulativeUsage;
    for (const [index, entry] of orderedRequests.entries()) {
      const usage = requestUsage(entry.request?.usage ?? entry.node?.usage);
      cumulativeUsage = addUsage(cumulativeUsage, usage);
      if (entry.request?.purpose !== "compaction") {
        const request2 = entry.request;
        const node = entry.node;
        const turn = request2?.turn ?? node?.turn;
        const step = request2?.step ?? node?.step;
        if (turn === void 0 || step === void 0) continue;
        const provider = request2?.providerMetadata?.provider ?? node?.providerMetadata?.provider;
        const model = request2?.providerMetadata?.model ?? node?.providerMetadata?.model;
        const requestConfig = request2?.requestConfig ?? node?.requestConfig;
        const startedAt = request2?.startedAt;
        const completedAt = request2 === void 0 ? node?.time : request2.completedAt;
        const resultSeq = request2?.resultSeq ?? node?.seq;
        numbered.push({
          seq: entry.seq,
          turn,
          step,
          group: t("group.step", { step }),
          number: index + 1,
          status: request2?.status ?? (node?.interrupted === true ? "error" : "complete"),
          ...startedAt === void 0 ? {} : { startedAt },
          ...completedAt === void 0 ? {} : { completedAt },
          ...request2?.error === void 0 ? {} : { error: request2.error },
          ...request2?.errorCode === void 0 ? {} : { errorCode: request2.errorCode },
          ...resultSeq === void 0 ? {} : { resultSeq },
          ...request2?.retry === void 0 ? {} : { retry: request2.retry },
          ...request2?.maxRetries === void 0 ? {} : { maxRetries: request2.maxRetries },
          ...request2?.retryDelayMs === void 0 ? {} : { retryDelayMs: request2.retryDelayMs },
          ...provider === void 0 ? {} : { provider },
          ...model === void 0 ? {} : { model },
          ...requestConfig === void 0 ? {} : { requestConfig },
          ...usage === void 0 ? {} : { usage },
          ...cumulativeUsage === void 0 ? {} : { cumulativeUsage }
        });
        continue;
      }
      const request = entry.request;
      numbered.push({
        seq: request.startSeq,
        turn: request.turn,
        step: 0,
        group: t("group.compaction", { seq: request.startSeq }),
        number: index + 1,
        purpose: "compaction",
        status: request.status,
        startedAt: request.startedAt,
        completedAt: request.completedAt,
        ...request.error === void 0 ? {} : { error: request.error },
        ...request.errorCode === void 0 ? {} : { errorCode: request.errorCode },
        ...request.status === "running" ? {} : { resultSeq: request.startSeq },
        ...request.providerMetadata?.provider === void 0 ? {} : { provider: request.providerMetadata.provider },
        ...request.providerMetadata?.model === void 0 ? {} : { model: request.providerMetadata.model },
        ...request.requestConfig === void 0 ? {} : { requestConfig: request.requestConfig },
        ...usage === void 0 ? {} : { usage },
        ...cumulativeUsage === void 0 ? {} : { cumulativeUsage }
      });
    }
    return numbered;
  }, [
    completeInspection.eventNodes,
    completeInspection.requests,
    t
  ]);
  const partialTurn = partial?.turn ?? null;
  const partialStep = partial?.step ?? null;
  const finalized = (0, import_react5.useMemo)(() => {
    const turns = deriveTrajectoryLayout({
      nodes,
      eventLocations,
      partial: partialTurn === null || partialStep === null ? null : { turn: partialTurn, step: partialStep, blocks: [] },
      runningCalls,
      requests,
      systemPrompts: inspection.systemPrompts,
      callSchemas
    }, t);
    return { turns, lastIndex: lastCellIndex(turns) };
  }, [
    nodes,
    eventLocations,
    partialTurn,
    partialStep,
    runningCalls,
    requests,
    inspection.systemPrompts,
    callSchemas,
    t
  ]);
  const timelinePartialSignature = partialStructureSignature(partial);
  const partialStartTime = partial?.timing?.stepStartTime;
  const partialFirstTokenTime = partial?.timing?.firstTokenTime;
  const timelinePartial = (0, import_react5.useMemo)(
    () => partial === null ? null : {
      turn: partial.turn,
      step: partial.step,
      blocks: partial.blocks.map((block) => timelineBlock(block)),
      ...partial.timing === void 0 ? {} : { timing: partial.timing }
    },
    [partialStep, partialTurn, timelinePartialSignature, partialStartTime, partialFirstTokenTime]
  );
  const timelineTurns = (0, import_react5.useMemo)(
    () => appendTrajectoryPartialLayout(finalized.turns, timelinePartial, finalized.lastIndex, t),
    [finalized, timelinePartial, t]
  );
  const timelineMode = actualDuration ? actualTime ? "actual" : "duration" : actualTime ? "time" : "sequence";
  const partialSearchTurns = (0, import_react5.useMemo)(
    () => appendTrajectoryPartialLayout([], partial, finalized.lastIndex, t),
    [finalized.lastIndex, partial, t]
  );
  const streamingCells = (0, import_react5.useMemo)(
    () => partialSearchTurns.flatMap((turn) => turn.groups.flatMap((group) => group.cells)),
    [partialSearchTurns]
  );
  const query = (0, import_react5.useMemo)(() => parseQuery(queryText), [queryText]);
  const toolIndex = (0, import_react5.useMemo)(() => buildToolIndex(completeInspection), [completeInspection]);
  const matched = (0, import_react5.useMemo)(() => {
    const callIds = /* @__PURE__ */ new Set();
    let count = 0;
    for (const record2 of toolIndex.records) {
      if (!matchesQuery(record2, query)) continue;
      count += 1;
      if (record2.callId) callIds.add(record2.callId);
    }
    return { callIds, count };
  }, [toolIndex, query]);
  const toolStats = (0, import_react5.useMemo)(() => {
    let errors = 0;
    let running = 0;
    for (const record2 of toolIndex.records) {
      if (isErrorStatus(record2.status)) errors += 1;
      if (record2.status === "running") running += 1;
    }
    return { total: toolIndex.records.length, errors, running };
  }, [toolIndex]);
  const queryTurns = (0, import_react5.useMemo)(
    () => [...toolIndex.turns.entries()].sort((left, right) => left[0] - right[0]).map(([turn, count]) => ({ turn, count })),
    [toolIndex]
  );
  const hiddenIndexes = (0, import_react5.useMemo)(() => {
    if (!query.active && !flat) return null;
    const hidden = /* @__PURE__ */ new Set();
    for (const turn of timelineTurns) {
      for (const group of turn.groups) {
        for (const cell2 of group.cells) {
          const toolLike = cell2.kind === "tool" || cell2.kind === "subtool";
          if (toolLike && cell2.callId !== void 0 && !matched.callIds.has(cell2.callId)) {
            hidden.add(cell2.index);
            continue;
          }
          if (flat && !toolLike) hidden.add(cell2.index);
        }
      }
    }
    return hidden;
  }, [timelineTurns, matched, query.active, flat]);
  const visibleTurns = (0, import_react5.useMemo)(() => {
    if (hiddenIndexes === null) return timelineTurns;
    return timelineTurns.map((turn) => ({
      ...turn,
      groups: turn.groups.map((group) => ({
        ...group,
        cells: group.cells.filter((cell2) => !hiddenIndexes.has(cell2.index))
      }))
    }));
  }, [timelineTurns, hiddenIndexes]);
  const timelineRange = timelineSelection;
  const timelineFocusIndexes = (0, import_react5.useMemo)(
    () => timelineRange === null ? null : trajectoryTimelineFocusIndexes(timelineTurns, timelineRange, timelineMode),
    [timelineMode, timelineRange, timelineTurns]
  );
  const handleRecordSelect = (0, import_react5.useCallback)((index) => {
    if (timelineFocusIndexes !== null && !timelineFocusIndexes.has(index)) {
      setTimelineSelection(null);
    }
  }, [timelineFocusIndexes]);
  const handleTimelineRangeChange = (0, import_react5.useCallback)((range) => {
    setTimelineSelection(range);
  }, []);
  const handleTimelineRecordSelect = (0, import_react5.useCallback)((index) => {
    setTimelineSelection(null);
    setTimelineRecordSelection({ index });
    setSelectedTimelineIndex(index);
  }, []);
  const handleTimelineRecordFocus = (0, import_react5.useCallback)((index) => {
    setTimelineRecordFocus({ index });
  }, []);
  const collapsibleTurnIds = (0, import_react5.useMemo)(
    () => timelineTurns.filter((turn) => turn.turn !== null && turn.groups.reduce(
      (count, group) => count + group.cells.filter((cell2) => cell2.requestOnly !== true && cell2.kind !== "system").length,
      0
    ) > 1).flatMap((turn) => turn.turn === null ? [] : [turn.turn]),
    [timelineTurns]
  );
  const allTurnsCollapsed = collapsibleTurnIds.length > 0 && collapsibleTurnIds.every((turn) => collapsedTurns.has(turn));
  const collapsibleAssistantIds = (0, import_react5.useMemo)(() => {
    const ids = [];
    for (const turn of timelineTurns) {
      const cells = turn.groups.flatMap((group) => group.cells);
      for (let i = 0; i < cells.length; i++) {
        const cell2 = cells[i];
        if (cell2?.kind !== "message") continue;
        const next = cells[i + 1];
        if (next?.kind === "tool" || next?.kind === "subtool") {
          ids.push(trajectoryRecordId(cell2));
        }
      }
    }
    return ids;
  }, [timelineTurns]);
  const allAssistantsCollapsed = collapsibleAssistantIds.length > 0 && collapsibleAssistantIds.every((index) => collapsedAssistants.has(index));
  const collapsibleToolIds = (0, import_react5.useMemo)(
    () => timelineTurns.flatMap((turn) => turn.groups.flatMap((group) => group.cells.flatMap((cell2, index) => cell2.kind === "tool" && group.cells[index + 1]?.kind === "subtool" ? [trajectoryRecordId(cell2)] : []))),
    [timelineTurns]
  );
  const allSubCallsCollapsed = collapsibleToolIds.length > 0 && collapsibleToolIds.every((id) => collapsedTools.has(id));
  const toggleTurn = (turn) => {
    setCollapsedTurns((current) => {
      const collapsed = new Set(current);
      if (collapsed.has(turn)) collapsed.delete(turn);
      else collapsed.add(turn);
      return collapsed;
    });
  };
  const toggleAllTurns = () => {
    setCollapsedTurns((current) => {
      const collapsed = new Set(current);
      if (allTurnsCollapsed) {
        for (const turn of collapsibleTurnIds) collapsed.delete(turn);
      } else {
        for (const turn of collapsibleTurnIds) collapsed.add(turn);
      }
      return collapsed;
    });
  };
  const toggleAssistant = (id) => {
    setCollapsedAssistants((current) => {
      const collapsed = new Set(current);
      if (collapsed.has(id)) collapsed.delete(id);
      else collapsed.add(id);
      return collapsed;
    });
  };
  const toggleAllAssistants = () => {
    setCollapsedAssistants((current) => {
      const collapsed = new Set(current);
      if (allAssistantsCollapsed) {
        for (const index of collapsibleAssistantIds) collapsed.delete(index);
      } else {
        for (const index of collapsibleAssistantIds) collapsed.add(index);
      }
      return collapsed;
    });
  };
  const toggleTool = (id) => {
    setCollapsedTools((current) => {
      const collapsed = new Set(current);
      if (collapsed.has(id)) collapsed.delete(id);
      else collapsed.add(id);
      return collapsed;
    });
  };
  const toggleAllSubCalls = () => {
    setCollapsedTools((current) => {
      const collapsed = new Set(current);
      if (allSubCallsCollapsed) {
        for (const id of collapsibleToolIds) collapsed.delete(id);
      } else {
        for (const id of collapsibleToolIds) collapsed.add(id);
      }
      return collapsed;
    });
  };
  const loadEarlierHistory = (0, import_react5.useCallback)(async () => {
    if (!hasResidentOlderHistory && !await loadOlder()) return false;
    setHistoryNodeLimit((limit) => limit + HISTORY_PAGE_NODES);
    return true;
  }, [hasResidentOlderHistory, loadOlder]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: views_default.root, "data-conversation-composer-overlay": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      QueryBar,
      {
        query: queryText,
        onQuery: setQueryText,
        tokens: query.tokens,
        stats: {
          total: toolStats.total,
          matched: matched.count,
          hidden: query.active ? toolStats.total - matched.count : 0,
          errors: toolStats.errors,
          running: toolStats.running
        },
        tools: summarizeTools(toolIndex),
        turns: queryTurns,
        flat,
        onToggleFlat: () => {
          setFlat((value) => !value);
        },
        actualDuration,
        onActualDurationChange: (nextActualDuration) => {
          setActualDuration(nextActualDuration);
          setTimelineSelection(null);
        },
        actualTime,
        onActualTimeChange: (nextActualTime) => {
          setActualTime(nextActualTime);
          setTimelineSelection(null);
        },
        allTurnsCollapsed,
        onToggleAllTurns: toggleAllTurns,
        allAssistantsCollapsed,
        onToggleAllAssistants: toggleAllAssistants,
        allSubCallsCollapsed,
        onToggleAllSubCalls: toggleAllSubCalls,
        t,
        qt: typeof qt === "function" ? qt : (key) => key
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      TrajectoryTimeline,
      {
        t,
        turns: timelineTurns,
        mode: timelineMode,
        range: timelineRange,
        hasEarlierRecords: hasOlderHistory,
        onLoadEarlier: loadEarlierHistory,
        selectedIndex: selectedTimelineIndex,
        searchMatchIndexes: null,
        onRangeChange: handleTimelineRangeChange,
        onRecordSelect: handleTimelineRecordSelect,
        onRecordFocus: handleTimelineRecordFocus
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: views_default.ledger, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      TrajectoryTable,
      {
        t,
        watchToolResult,
        stringWrapping: jsonStringWrapping === void 0 ? void 0 : {
          ...jsonStringWrapping,
          label: t("record.wrapLines")
        },
        renderSlot,
        loadImage,
        requestNumbers,
        turns: visibleTurns,
        streamingCells,
        timelineFocusIndexes,
        hiddenIndexes,
        onSelectedIndexChange: setSelectedTimelineIndex,
        onRecordSelect: handleRecordSelect,
        recordSelection: timelineRecordSelection,
        recordFocus: timelineRecordFocus,
        historyLoading,
        olderHistoryLoading,
        historyStartSeq: historyBaseSeq,
        hasOlderRecords: hasOlderHistory,
        onLoadOlder: loadEarlierHistory,
        onClearSelection: () => {
          setTimelineSelection(null);
        },
        collapsedTurns,
        onToggleTurn: toggleTurn,
        collapsedAssistants,
        onToggleAssistant: toggleAssistant,
        collapsedTools,
        onToggleTool: toggleTool,
        inspectCallId,
        onInspectApplied: completeViewRequest
      },
      hiddenIndexes === null ? "all" : `f${hiddenIndexes.size}:${[...hiddenIndexes].join(",")}`
    ) })
  ] });
}

// src/client/superset.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var STORAGE_PREFIX = "dsh-better-trajectory:filters:";
function loadFilters(sessionId) {
  const fallback = emptyFilters();
  if (typeof window === "undefined" || !sessionId) return fallback;
  try {
    const raw = window.sessionStorage.getItem(`${STORAGE_PREFIX}${sessionId}`);
    if (raw === null) return fallback;
    const value = JSON.parse(raw);
    return {
      tools: Array.isArray(value.tools) ? value.tools.filter((item) => typeof item === "string") : [],
      status: value.status === "error" || value.status === "running" ? value.status : "all",
      turn: typeof value.turn === "number" ? value.turn : null,
      minDuration: typeof value.minDuration === "number" ? value.minDuration : null,
      errorCode: typeof value.errorCode === "string" ? value.errorCode : null
    };
  } catch {
    return fallback;
  }
}
function saveFilters(sessionId, filters) {
  if (typeof window === "undefined" || !sessionId) return;
  try {
    window.sessionStorage.setItem(`${STORAGE_PREFIX}${sessionId}`, JSON.stringify(filters));
  } catch {
  }
}
function mapInjected(injected) {
  const { hooks, ...bare } = injected;
  const result = { ...bare };
  for (const [key, observable] of Object.entries(hooks ?? {})) {
    const subscribe = observable.subscribe.bind(observable);
    const getSnapshot = observable.getSnapshot.bind(observable);
    result[`use${key[0].toUpperCase()}${key.slice(1)}`] = function useObservable(selector) {
      const value = (0, import_react6.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
      return selector(value);
    };
  }
  return result;
}
function usePopover(open, close) {
  const ref = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
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
function NativeImages({ images, align, loadImage, imagesApi, useContextMenu }) {
  if (imagesApi !== void 0 && imagesApi.entry !== void 0 && imagesApi.factory !== void 0 && useContextMenu !== void 0) {
    const Images = imagesApi.entry;
    const Factory = imagesApi.factory;
    const renderFactorySlot = (name2, props) => {
      if (name2 !== "conversation.images.content" || Factory === void 0) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Factory,
        {
          ...props,
          ...imagesApi.injected,
          t: imagesApi.t,
          ...useContextMenu === void 0 ? {} : { useContextMenu }
        }
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Images,
      {
        images,
        align,
        loadImage,
        renderFactorySlot
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-images", "data-align": align ?? "start", children: (images ?? []).map((source, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(NativeImage, { source, loadImage }, `${index}`)) });
}
function NativeImage({ source, loadImage }) {
  const preview = source?.preview?.url;
  const attachment = source?.attachment;
  const [url, setUrl] = (0, import_react6.useState)(() => {
    if (typeof preview === "string") return preview;
    if (attachment !== void 0) return loadImage?.peek?.(attachment);
    return void 0;
  });
  const [failed, setFailed] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    if (url !== void 0 || attachment === void 0 || loadImage === void 0) return;
    let alive = true;
    loadImage(attachment).then(
      (next) => {
        if (alive) setUrl(next);
      },
      () => {
        if (alive) setFailed(true);
      }
    );
    return () => {
      alive = false;
    };
  }, [url, attachment, loadImage]);
  if (failed) return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-image-fallback", children: "image" });
  if (url === void 0) return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-image-fallback", children: "\u2026" });
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "button",
    {
      type: "button",
      className: "bts-image",
      title: source?.label ?? source?.preview?.name,
      onClick: () => window.open(url, "_blank", "noopener"),
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: url, alt: source?.label ?? source?.preview?.name ?? "" })
    }
  );
}
function formatMs(ms) {
  if (typeof ms !== "number" || !Number.isFinite(ms)) return "\u2014";
  if (ms < 1e3) return `${Math.round(ms)}ms`;
  if (ms < 6e4) return `${(ms / 1e3).toFixed(ms < 1e4 ? 1 : 0)}s`;
  return `${Math.floor(ms / 6e4)}m${String(Math.round(ms % 6e4 / 1e3)).padStart(2, "0")}s`;
}
function turnOf2(record2) {
  if (typeof record2?.turn !== "number") return "\u2014";
  return typeof record2.step === "number" ? `${record2.turn}/${record2.step}` : String(record2.turn);
}
function oneLine2(value, max = 160) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length > max ? `${text.slice(0, max)}\u2026` : text;
}
function SupersetView({
  sessionId,
  useTrajectory,
  t,
  nativeT,
  getNative,
  getImages,
  ...rest
}) {
  const translate = typeof t === "function" ? t : (key) => key;
  const [filters, setFilters] = (0, import_react6.useState)(() => loadFilters(sessionId));
  const [toolMenu, setToolMenu] = (0, import_react6.useState)(false);
  const [toolSearch, setToolSearch] = (0, import_react6.useState)("");
  const [debugOpen, setDebugOpen] = (0, import_react6.useState)(true);
  const [debugTab, setDebugTab] = (0, import_react6.useState)("errors");
  const [exportMenu, setExportMenu] = (0, import_react6.useState)(false);
  const [toast, setToast] = (0, import_react6.useState)(null);
  const [focusRequest, setFocusRequest] = (0, import_react6.useState)(null);
  const [jsonRecord2, setJsonRecord] = (0, import_react6.useState)(null);
  const [jsonSchema, setJsonSchema] = (0, import_react6.useState)(void 0);
  const [wrapDefault, setWrapDefault] = (0, import_react6.useState)(true);
  const toolSearchRef = (0, import_react6.useRef)(null);
  const debugInitialized = (0, import_react6.useRef)(false);
  const full = useTrajectory ? useTrajectory((snapshot) => snapshot) : void 0;
  const index = (0, import_react6.useMemo)(() => buildToolIndex(full), [full]);
  const stats = (0, import_react6.useMemo)(() => collectStats(index, filters), [index, filters]);
  const filtered = (0, import_react6.useMemo)(
    () => filterSnapshot(full, filters, index),
    [full, filters, index]
  );
  const native = (0, import_react6.useMemo)(() => getNative?.(), [getNative, sessionId]);
  const imagesApi = (0, import_react6.useMemo)(() => getImages?.(), [getImages, sessionId]);
  const injected = (0, import_react6.useMemo)(
    () => native === void 0 ? {} : native.inject(sessionId ?? ""),
    [native?.component, sessionId]
  );
  const mapped = (0, import_react6.useMemo)(() => mapInjected(injected), [injected]);
  const jsonStringWrapping = (0, import_react6.useMemo)(() => ({
    getDefault: () => wrapDefault,
    setDefault: (value) => setWrapDefault(value)
  }), [wrapDefault]);
  const filteredHook = (0, import_react6.useCallback)(
    (selector) => selector(filtered),
    [filtered]
  );
  const renderNativeSlot = (0, import_react6.useCallback)((name2, owner) => {
    if (name2 !== "conversation.trajectory.images") return null;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      NativeImages,
      {
        ...owner,
        imagesApi,
        useContextMenu: rest.useContextMenu
      }
    );
  }, [imagesApi, rest]);
  const closeToolMenu = (0, import_react6.useCallback)(() => setToolMenu(false), []);
  const closeExportMenu = (0, import_react6.useCallback)(() => setExportMenu(false), []);
  const toolPopRef = usePopover(toolMenu, closeToolMenu);
  const exportPopRef = usePopover(exportMenu, closeExportMenu);
  (0, import_react6.useEffect)(() => {
    saveFilters(sessionId, filters);
  }, [sessionId, filters]);
  (0, import_react6.useEffect)(() => {
    if (debugInitialized.current) return;
    if (stats.total === 0) return;
    debugInitialized.current = true;
    if (stats.errors === 0) setDebugTab("tools");
  }, [stats]);
  (0, import_react6.useEffect)(() => {
    if (toast === null) return;
    const timer = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);
  (0, import_react6.useEffect)(() => {
    if (!toolMenu) {
      setToolSearch("");
      return;
    }
    const timer = window.setTimeout(() => toolSearchRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [toolMenu]);
  const active = isActive(filters);
  const toolOptions = (0, import_react6.useMemo)(() => {
    const options = stats.tools.map((item) => ({ ...item }));
    for (const name2 of filters.tools) {
      if (!options.some((item) => item.name === name2)) options.unshift({ name: name2, count: 0 });
    }
    const term = toolSearch.trim().toLowerCase();
    return term === "" ? options : options.filter((item) => item.name.toLowerCase().includes(term));
  }, [stats.tools, filters.tools, toolSearch]);
  const clear = () => setFilters(emptyFilters());
  const toggleTool = (name2) => {
    setFilters((previous) => ({
      ...previous,
      tools: previous.tools.includes(name2) ? previous.tools.filter((item) => item !== name2) : [...previous.tools, name2]
    }));
  };
  const reveal = (record2) => {
    if (record2?.callId) setFocusRequest({ view: "trajectory", focus: record2.callId });
  };
  const openJson = (record2) => {
    setJsonRecord(record2);
    setJsonSchema(full.callSchemas?.get(record2?.callId));
  };
  const openLatestToolJson = (name2) => {
    const candidates = index.records.filter((record2) => record2.name === name2).sort((left, right) => (right.time ?? 0) - (left.time ?? 0));
    if (candidates[0] !== void 0) openJson(candidates[0]);
  };
  const filteredRecords = (0, import_react6.useMemo)(() => filteredCalls(index, filters), [index, filters]);
  const errors = (0, import_react6.useMemo)(() => errorCalls(index, filters), [index, filters]);
  const slowest = (0, import_react6.useMemo)(() => slowestCalls(index, filters), [index, filters]);
  const toolSummary = (0, import_react6.useMemo)(() => summarizeTools(index), [index]);
  const filterSummary = [
    filters.tools.length > 0 ? `tool:${filters.tools.join(",")}` : "",
    filters.status !== "all" ? `status:${filters.status}` : "",
    filters.turn !== null ? `turn:${filters.turn}` : "",
    filters.minDuration !== null ? `ms>=${filters.minDuration}` : "",
    filters.errorCode !== null ? `code:${filters.errorCode}` : ""
  ].filter(Boolean).join(" ");
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(translate("debug.export.copied"));
    } catch {
      setToast(translate("debug.export.failed"));
    }
  };
  const exportJson = () => recordsToJson(filteredRecords, { sessionId, filter: filterSummary });
  const exportMarkdown = () => recordsToMarkdown(filteredRecords, { sessionId, filter: filterSummary });
  const download = () => {
    setExportMenu(false);
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `better-trajectory-${sessionId ?? "session"}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
  };
  if (full === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { children: translate("view.missingHook.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: translate("view.missingHook.body") })
    ] }) });
  }
  if (native === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { children: translate("view.missingNative.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: translate("view.missingNative.body") })
    ] }) });
  }
  const Native = TrajectoryView;
  const summaryKey = "filter.summary";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-bar", role: "toolbar", "aria-label": translate("filter.aria"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "bts-lead", title: translate("filter.scopeHint"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconFilter, { size: 12 }),
        translate("filter.lead")
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-segment", role: "group", "aria-label": translate("filter.status.aria"), children: [
        ["all", translate("filter.status.all"), void 0],
        ["error", translate("filter.status.error"), stats.errors],
        ["running", translate("filter.status.running"), stats.running]
      ].map(([value, label, count]) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "button",
        {
          type: "button",
          "aria-pressed": filters.status === value,
          "data-empty": count === 0 ? "true" : void 0,
          "data-tone": value === "error" ? "error" : void 0,
          onClick: () => setFilters((previous) => ({ ...previous, status: value })),
          children: [
            label,
            count !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-count", children: count }) : null
          ]
        },
        value
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-pop-wrap", ref: toolPopRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            type: "button",
            className: "bts-button",
            "data-active": filters.tools.length > 0 || void 0,
            "aria-haspopup": "dialog",
            "aria-expanded": toolMenu,
            onClick: () => setToolMenu((open) => !open),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconFilter, { size: 11 }),
              filters.tools.length === 0 ? translate("filter.tools") : translate("filter.tools.selected", { count: filters.tools.length }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconChevron, { size: 10 })
            ]
          }
        ),
        toolMenu ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-pop", "data-align": "right", role: "dialog", "aria-label": translate("filter.tools.aria"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-pop-title", children: translate("filter.tools.title") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-pop-search", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconSearch, { size: 11 }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              {
                ref: toolSearchRef,
                value: toolSearch,
                placeholder: translate("filter.tools.search"),
                "aria-label": translate("filter.tools.search"),
                onChange: (event) => setToolSearch(event.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-pop-list", children: toolOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-pop-title", children: translate("filter.tools.empty") }) : toolOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            "button",
            {
              type: "button",
              className: "bts-pop-item",
              "aria-pressed": filters.tools.includes(option.name),
              onClick: () => toggleTool(option.name),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-check", "data-checked": filters.tools.includes(option.name) || void 0, children: "\u2713" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-pop-name", title: option.name, children: option.name }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-pop-count", children: option.count })
              ]
            },
            option.name
          )) }),
          filters.tools.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-pop-footer", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "button",
            {
              type: "button",
              className: "bts-link",
              onClick: () => setFilters((previous) => ({ ...previous, tools: [] })),
              children: translate("filter.tools.clear")
            }
          ) }) : null
        ] }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "select",
        {
          className: "bts-select",
          value: filters.turn === null ? "" : String(filters.turn),
          "aria-label": translate("filter.turn.aria"),
          onChange: (event) => {
            const value = event.target.value;
            setFilters((previous) => ({ ...previous, turn: value === "" ? null : Number(value) }));
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", children: translate("filter.turn.all") }),
            stats.turns.map((item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: String(item.turn), children: translate("filter.turn.option", { turn: item.turn, count: item.count }) }, item.turn))
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "select",
        {
          className: "bts-select",
          value: filters.minDuration === null ? "" : String(filters.minDuration),
          "aria-label": translate("filter.duration.aria"),
          onChange: (event) => {
            const value = event.target.value;
            setFilters((previous) => ({ ...previous, minDuration: value === "" ? null : Number(value) }));
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", children: translate("filter.duration.all") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "100", children: translate("filter.duration.100") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "1000", children: translate("filter.duration.1000") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "5000", children: translate("filter.duration.5000") })
          ]
        }
      ),
      stats.errorCodes.length > 0 || filters.errorCode !== null ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "select",
        {
          className: "bts-select bts-select-code",
          value: filters.errorCode ?? "",
          "aria-label": translate("filter.code.aria"),
          onChange: (event) => {
            const value = event.target.value;
            setFilters((previous) => ({ ...previous, errorCode: value === "" ? null : value }));
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", children: translate("filter.code.all") }),
            stats.errorCodes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("option", { value: item.code, children: [
              item.code,
              " \xB7 ",
              item.count
            ] }, item.code)),
            filters.errorCode !== null && !stats.errorCodes.some((item) => item.code === filters.errorCode) ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("option", { value: filters.errorCode, children: [
              filters.errorCode,
              " \xB7 0"
            ] }) : null
          ]
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-spacer" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "button",
        {
          type: "button",
          className: "bts-button",
          "data-active": debugOpen || void 0,
          "aria-expanded": debugOpen,
          onClick: () => setDebugOpen((open) => !open),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconChevron, { size: 11, "data-rotated": debugOpen || void 0 }),
            translate("debug.toggle")
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-summary", title: translate("filter.scopeHint"), children: translate(summaryKey, { matched: stats.matched, total: stats.total }) }),
      active ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: "bts-button", onClick: clear, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconClose, { size: 11 }),
        translate("filter.clear")
      ] }) : null
    ] }),
    debugOpen ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "bts-debug", "aria-label": translate("debug.aria"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-debug-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-tabs", role: "tablist", "aria-label": translate("debug.tabsAria"), children: [
          ["errors", translate("debug.tab.errors"), errors.length],
          ["tools", translate("debug.tab.tools"), toolSummary.length],
          ["slowest", translate("debug.tab.slowest"), slowest.length]
        ].map(([value, label, count]) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": debugTab === value,
            onClick: () => setDebugTab(value),
            children: [
              label,
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-count", children: count })
            ]
          },
          value
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-spacer" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-pop-wrap", ref: exportPopRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            "button",
            {
              type: "button",
              className: "bts-button",
              "aria-haspopup": "menu",
              "aria-expanded": exportMenu,
              onClick: () => setExportMenu((open) => !open),
              children: [
                translate("debug.export"),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconChevron, { size: 10 })
              ]
            }
          ),
          exportMenu ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-pop", "data-align": "right", role: "menu", style: { width: 230 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "button",
              {
                type: "button",
                className: "bts-pop-item",
                role: "menuitem",
                onClick: () => {
                  setExportMenu(false);
                  void copyText(recordsToMarkdown(filteredRecords, { sessionId, filter: filterSummary }));
                },
                children: translate("debug.export.markdown")
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "button",
              {
                type: "button",
                className: "bts-pop-item",
                role: "menuitem",
                onClick: () => {
                  setExportMenu(false);
                  void copyText(recordsToJson(filteredRecords, { sessionId, filter: filterSummary }));
                },
                children: translate("debug.export.json")
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "bts-pop-item", role: "menuitem", onClick: download, children: translate("debug.export.download") })
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            type: "button",
            className: "bts-icon-button",
            "aria-label": translate("debug.close"),
            title: translate("debug.close"),
            onClick: () => setDebugOpen(false),
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconClose, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-debug-body", children: debugTab === "errors" ? errors.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-debug-empty", children: translate("debug.errors.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-debug-columns bts-debug-columns-error", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.code") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.tool") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.turn") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.duration") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.error") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {})
        ] }),
        errors.map((record2) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "div",
          {
            role: "button",
            tabIndex: 0,
            className: "bts-debug-row bts-debug-row-error",
            onClick: () => reveal(record2),
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                reveal(record2);
              }
            },
            title: translate("debug.jump"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-code", children: record2.errorCode || record2.errorName || "error" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-tool", children: record2.name || record2.callId }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-meta", children: turnOf2(record2) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-meta", children: formatMs(record2.durationMs) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-message", children: oneLine2(record2.errorText || record2.result || "", 160) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "bts-debug-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "bts-json-open",
                    title: translate("debug.openJson"),
                    "aria-label": translate("debug.openJson"),
                    onClick: (event) => {
                      event.stopPropagation();
                      openJson(record2);
                    },
                    children: "{}"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-jump", children: "\u2192" })
              ] })
            ]
          },
          `e:${record2.turn}:${record2.callId}`
        ))
      ] }) : debugTab === "tools" ? toolSummary.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-debug-empty", children: translate("debug.tools.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-debug-columns bts-debug-columns-tool", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.tool") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.calls") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.errors") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.p95") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.total") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {})
        ] }),
        toolSummary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            type: "button",
            className: "bts-debug-row bts-debug-row-tool",
            "data-active": filters.tools.includes(item.name) || void 0,
            onClick: () => toggleTool(item.name),
            title: translate("debug.tools.toggle"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-tool", children: item.name }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.calls", { count: item.calls }) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.errors", { count: item.errors }) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.p95", { value: formatMs(item.p95Ms) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.total", { value: formatMs(item.totalMs) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {}),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "bts-debug-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "bts-json-open",
                    title: translate("debug.openJson"),
                    "aria-label": translate("debug.openJson"),
                    onClick: (event) => {
                      event.stopPropagation();
                      openLatestToolJson(item.name);
                    },
                    children: "{}"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-jump", children: filters.tools.includes(item.name) ? "\u2713" : "+" })
              ] })
            ]
          },
          item.name
        ))
      ] }) : slowest.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-debug-empty", children: translate("debug.slowest.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bts-debug-columns bts-debug-columns-slow", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.duration") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.tool") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.turn") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: translate("debug.col.args") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {})
        ] }),
        slowest.map((record2) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            type: "button",
            className: "bts-debug-row bts-debug-row-slow",
            onClick: () => reveal(record2),
            title: translate("debug.jump"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-duration", children: formatMs(record2.durationMs) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-tool", children: record2.name || record2.callId }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-meta", children: turnOf2(record2) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-message", children: oneLine2(record2.args || record2.errorText || "", 160) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "bts-debug-jump", children: "\u2192" })
            ]
          },
          `s:${record2.turn}:${record2.callId}`
        ))
      ] }) })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-native", "data-trajectory-superset": "", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Native,
      {
        ...rest,
        ...mapped,
        sessionId,
        t: nativeT,
        useTrajectory: filteredHook,
        renderSlot: renderNativeSlot,
        jsonStringWrapping,
        qt: translate,
        viewRequest: focusRequest ?? rest.viewRequest,
        completeViewRequest: () => {
          setFocusRequest(null);
          rest.completeViewRequest?.();
        }
      }
    ) }),
    jsonRecord2 !== null ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      JsonViewer,
      {
        record: jsonRecord2,
        schema: jsonSchema,
        onClose: () => setJsonRecord(null),
        t: translate
      }
    ) : null,
    toast !== null ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bts-toast", role: "status", children: toast }) : null
  ] });
}

// src/client/styles.css
var styles_default = "/* Better Trajectory\uFF1A\u539F\u751F\u8F68\u8FF9\u4E0A\u65B9\u7684\u4E00\u6761\u7B5B\u9009\u680F\uFF0C\u5176\u4F59\u6837\u5F0F\u5168\u90E8\u6765\u81EA\u539F\u751F\u89C6\u56FE\u3002 */\n\n.bts-root {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  isolation: isolate;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bts-bar {\n  position: relative;\n  z-index: 8;\n  display: flex;\n  flex: none;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 4px 6px;\n  box-sizing: border-box;\n  min-height: 32px;\n  padding: 3px 8px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bts-lead {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 4px;\n  padding-right: 2px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n}\n\n.bts-segment {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.bts-segment button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 22px;\n  padding: 0 8px;\n  border: 0;\n  border-radius: calc(var(--dsw-radius-sm) - 2px);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.bts-segment button[aria-pressed='true'] {\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: var(--dsw-elevation-stroke);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-segment button[data-empty='true'] {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.bts-count {\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n\n.bts-segment button[aria-pressed='true'] .bts-count {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bts-button {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  height: 26px;\n  padding: 0 8px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.bts-button:hover {\n  border-color: var(--dsw-alias-border-l4);\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-button[data-active='true'] {\n  border-color: var(--dsw-alias-border-l4);\n  background: var(--dsw-alias-interactive-bg-active);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-button:focus-visible,\n.bts-segment button:focus-visible,\n.bts-select:focus-visible,\n.bts-pop-item:focus-visible,\n.bts-image:focus-visible,\n.bts-link:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 1px;\n}\n\n.bts-select {\n  flex: none;\n  max-width: 160px;\n  height: 26px;\n  padding: 0 22px 0 8px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background-color: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  cursor: pointer;\n}\n\n.bts-select:hover {\n  border-color: var(--dsw-alias-border-l4);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-spacer {\n  flex: 1 1 auto;\n  min-width: 4px;\n}\n\n.bts-summary {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxs-12);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.bts-pop-wrap {\n  position: relative;\n  display: inline-flex;\n  flex: none;\n}\n\n.bts-pop {\n  position: absolute;\n  top: calc(100% + 6px);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  width: 278px;\n  max-width: min(86vw, 340px);\n  max-height: 360px;\n  padding: 6px;\n  overflow: hidden;\n  border-radius: var(--dsw-radius-lg);\n  background: var(--dsw-specific-menu);\n  backdrop-filter: var(--dsw-menu-backdrop-filter);\n  box-shadow: var(--dsw-elevation-panel);\n}\n\n.bts-pop[data-align='right'] {\n  right: 0;\n  left: auto;\n}\n\n.bts-pop-title {\n  padding: 2px 6px 6px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxxs-11);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.bts-pop-search {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  margin-bottom: 4px;\n  padding: 0 7px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-specific-input-major);\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bts-pop-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bts-pop-list {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) transparent;\n}\n\n.bts-pop-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  height: 28px;\n  padding: 0 7px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xxs-12);\n  text-align: left;\n  cursor: pointer;\n}\n\n.bts-pop-item:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.bts-check {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: 4px;\n  color: transparent;\n  font-size: 10px;\n  line-height: 1;\n}\n\n.bts-check[data-checked='true'] {\n  border-color: transparent;\n  background: var(--dsw-alias-button-primary-fill);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.bts-pop-name {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  font-size: 11px;\n}\n\n.bts-pop-count {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n\n.bts-pop-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 4px;\n  border-top: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bts-link {\n  padding: 4px 6px;\n  border: 0;\n  border-radius: var(--dsw-radius-xs);\n  background: transparent;\n  color: var(--dsw-alias-link);\n  font: var(--dsw-font-xxs-12);\n  cursor: pointer;\n}\n\n.bts-link:hover {\n  text-decoration: underline dotted;\n  text-underline-offset: 3px;\n}\n\n.bts-native {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.bts-native > * {\n  height: 100%;\n}\n\n.bts-empty {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px;\n  text-align: center;\n}\n\n.bts-empty h2 {\n  margin: 0;\n  font: var(--dsw-font-strong-14);\n}\n\n.bts-empty p {\n  max-width: 420px;\n  margin: 0;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n}\n\n/* \u539F\u751F image \u5B50\u69FD\u7684\u8F7B\u91CF\u7F29\u7565\u56FE\uFF1B\u539F\u751F\u706F\u7BB1/\u62D6\u62FD\u4E0D\u5728\u6B64\u5B9E\u73B0\u3002 */\n.bts-images {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin: 4px 0;\n}\n\n.bts-images[data-align='end'] {\n  justify-content: flex-end;\n}\n\n.bts-image {\n  width: 64px;\n  height: 64px;\n  padding: 0;\n  overflow: hidden;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n  cursor: zoom-in;\n}\n\n.bts-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.bts-image-fallback {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxxs-11);\n}\n\n@media (max-width: 760px) {\n  .bts-lead {\n    display: none;\n  }\n\n  .bts-summary {\n    display: none;\n  }\n\n  .bts-bar {\n    padding-right: 6px;\n    padding-left: 6px;\n  }\n}\n\n.bts-segment button[data-tone='error'] .bts-count {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n/* --------------------------------- \u8C03\u8BD5\u9762\u677F -------------------------------- */\n\n.bts-root {\n  position: relative;\n}\n\n.bts-icon-button {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  cursor: pointer;\n}\n\n.bts-icon-button:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-icon-button:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 1px;\n}\n\n.bts-button svg[data-rotated] {\n  transform: rotate(180deg);\n}\n\n.bts-select-code {\n  max-width: 180px;\n}\n\n.bts-debug {\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  height: 168px;\n  min-height: 0;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bts-debug-head {\n  display: flex;\n  flex: none;\n  align-items: center;\n  gap: 6px;\n  min-height: 30px;\n  padding: 2px 6px 2px 8px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n}\n\n.bts-tabs {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.bts-tabs button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 22px;\n  padding: 0 8px;\n  border: 0;\n  border-radius: calc(var(--dsw-radius-sm) - 2px);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  cursor: pointer;\n}\n\n.bts-tabs button[aria-selected='true'] {\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: var(--dsw-elevation-stroke);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-tabs button:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 1px;\n}\n\n.bts-debug-body {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  padding: 2px 6px 4px;\n  scrollbar-width: thin;\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) transparent;\n}\n\n.bts-debug-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n}\n\n.bts-debug-row {\n  display: grid;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 25px;\n  padding: 2px 6px;\n  border: 0;\n  border-radius: var(--dsw-radius-xs);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  text-align: left;\n  cursor: pointer;\n}\n\n.bts-debug-row:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.bts-debug-row:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bts-debug-row[data-active] {\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n.bts-debug-row-error {\n  grid-template-columns: minmax(90px, 130px) minmax(70px, 120px) 44px 48px minmax(120px, 1fr) 40px;\n}\n\n.bts-debug-row-slow {\n  grid-template-columns: 56px minmax(70px, 120px) 44px minmax(120px, 1fr) 40px;\n}\n\n.bts-debug-row-tool {\n  grid-template-columns: minmax(120px, 240px) 74px 60px 86px 92px 1fr 40px;\n}\n\n.bts-debug-tool {\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  font-family: var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  font-size: 11px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bts-debug-meta,\n.bts-duration {\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font-family: var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bts-debug-message {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-secondary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bts-debug-row-error .bts-debug-message {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bts-debug-jump {\n  color: var(--dsw-alias-label-caption);\n  text-align: right;\n}\n\n.bts-code {\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0 4px;\n  border-radius: 4px;\n  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 11%, transparent);\n  color: var(--dsw-alias-state-error-primary);\n  font-family: var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  font-size: 9.5px;\n  line-height: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bts-toast {\n  position: absolute;\n  right: 12px;\n  bottom: calc(var(--dsh-composer-height, 0px) + 18px);\n  z-index: 30;\n  padding: 5px 11px;\n  border-radius: 999px;\n  corner-shape: round;\n  background: var(--dsw-alias-toast-bg);\n  color: var(--dsw-alias-toast-label);\n  box-shadow: var(--dsw-elevation-prominent);\n  font: var(--dsw-font-xxs-12);\n}\n\n@media (max-width: 900px) {\n  .bts-debug {\n    height: 164px;\n  }\n\n  .bts-debug-row-error {\n    grid-template-columns: 90px 90px 38px 42px minmax(100px, 1fr) 38px;\n    gap: 6px;\n  }\n\n  .bts-debug-row-tool {\n    grid-template-columns: minmax(100px, 200px) 64px 50px 70px 80px 1fr 38px;\n    gap: 6px;\n  }\n\n  .bts-select-code {\n    max-width: 140px;\n  }\n}\n\n.bts-debug-columns {\n  display: grid;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 6px 2px;\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xxxs-11);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.bts-debug-columns-error {\n  grid-template-columns: minmax(90px, 130px) minmax(70px, 120px) 44px 48px minmax(120px, 1fr) 40px;\n}\n\n.bts-debug-columns-tool {\n  grid-template-columns: minmax(120px, 240px) 74px 60px 86px 92px 1fr 40px;\n}\n\n.bts-debug-columns-slow {\n  grid-template-columns: 56px minmax(70px, 120px) 44px minmax(120px, 1fr) 40px;\n}\n\n@media (max-width: 900px) {\n  .bts-debug-columns-error {\n    grid-template-columns: 90px 90px 38px 42px minmax(100px, 1fr) 38px;\n    gap: 6px;\n  }\n\n  .bts-debug-columns-tool {\n    grid-template-columns: minmax(100px, 200px) 64px 50px 70px 80px 1fr 38px;\n    gap: 6px;\n  }\n}\n\n/* -------------------------------- JSON \u67E5\u770B\u5668 ------------------------------- */\n\n.bts-json-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 50;\n  background: color-mix(in srgb, var(--dsw-alias-bg-mask-1) 24%, transparent);\n}\n\n.bts-json-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  width: min(66%, 920px);\n  min-width: 360px;\n  background: var(--dsw-alias-bg-layer-1);\n  border-left: 0.5px solid var(--dsw-alias-border-l2);\n  box-shadow: var(--dsw-elevation-prominent);\n}\n\n.bts-json-panel[data-wide] {\n  width: min(88%, 1240px);\n}\n\n.bts-json-head {\n  display: flex;\n  flex: none;\n  align-items: center;\n  gap: 8px;\n  min-height: 38px;\n  padding: 4px 8px 4px 12px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bts-json-title {\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  font: 600 12px/18px var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bts-json-meta {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font: 10.5px/16px var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n}\n\n.bts-json-toolbar {\n  display: flex;\n  flex: none;\n  align-items: center;\n  gap: 6px;\n  min-height: 32px;\n  padding: 3px 8px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n}\n\n.bts-json-search {\n  display: flex;\n  flex: 0 1 260px;\n  align-items: center;\n  gap: 4px;\n  height: 26px;\n  padding: 0 7px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-specific-input-major);\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bts-json-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bts-json-body {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  padding: 6px 8px 12px;\n  font: 12px/18px var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  scrollbar-width: thin;\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) transparent;\n}\n\n.bts-json-tree {\n  min-width: 0;\n}\n\n.bts-json-node {\n  min-width: 0;\n}\n\n.bts-json-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 2px;\n  min-height: 18px;\n  padding-right: 4px;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n}\n\n.bts-json-chevron {\n  flex: none;\n  width: 16px;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  border-radius: 3px;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 9px;\n  line-height: 18px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.bts-json-chevron:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-json-chevron:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bts-json-key {\n  color: var(--dsw-alias-json-tree-property, var(--dsw-alias-state-business-primary));\n}\n\n.bts-json-string {\n  color: var(--dsw-alias-json-tree-string, var(--dsw-alias-state-success-primary));\n}\n\n.bts-json-string-wrap {\n  display: inline;\n  min-width: 0;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n}\n\n.bts-json-string-clamped {\n  display: -webkit-box;\n  overflow: hidden;\n  color: var(--dsw-alias-json-tree-string, var(--dsw-alias-state-success-primary));\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.bts-json-number {\n  color: var(--dsw-alias-json-tree-number, var(--dsw-alias-state-business-primary));\n}\n\n.bts-json-bool {\n  color: var(--dsw-alias-json-tree-keyword, var(--dsw-alias-state-warn-primary));\n}\n\n.bts-json-null {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bts-json-other {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bts-json-punct,\n.bts-json-bracket {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bts-json-summary {\n  margin-left: 4px;\n  color: var(--dsw-alias-label-caption);\n  font-size: 10.5px;\n}\n\n.bts-json-type {\n  margin-left: auto;\n  padding-left: 8px;\n  color: var(--dsw-alias-label-caption);\n  font-size: 9.5px;\n}\n\n.bts-json-children {\n  border-left: 0.5px solid var(--dsw-alias-border-l1);\n  margin-left: 7px;\n}\n\n.bts-json-copy {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  margin-left: 4px;\n  padding: 0;\n  border: 0;\n  border-radius: 3px;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 10px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.bts-json-row:hover .bts-json-copy,\n.bts-json-copy:focus-visible {\n  opacity: 1;\n}\n\n.bts-json-copy:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-json-link {\n  padding: 0 4px;\n  border: 0;\n  border-radius: 3px;\n  background: transparent;\n  color: var(--dsw-alias-link);\n  font: var(--dsw-font-xxxs-11);\n  cursor: pointer;\n}\n\n.bts-json-link:hover {\n  text-decoration: underline dotted;\n  text-underline-offset: 2px;\n}\n\n.bts-json-more {\n  margin: 2px 0 2px 16px;\n  padding: 1px 6px;\n  border: 0.5px dashed var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-xs);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxxs-11);\n  cursor: pointer;\n}\n\n.bts-json-more:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-json-mark {\n  border-radius: 2px;\n  background: var(--dsw-specific-highlight, var(--dsw-alias-state-warn-tertiary));\n  color: inherit;\n}\n\n.bts-json-raw {\n  margin: 0;\n  padding: 8px 10px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-markdown-code-block);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bts-json-open {\n  width: 20px;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  border-radius: 3px;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  font: 9px/18px var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  text-align: center;\n  cursor: pointer;\n}\n\n.bts-json-open:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-debug-actions {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2px;\n}\n\n@media (max-width: 900px) {\n  .bts-json-panel {\n    width: min(92%, 720px);\n    min-width: 0;\n  }\n}\n\n/* \u539F\u751F JsonTree \u7684\u6298\u53E0\u6458\u8981\u9ED8\u8BA4 nowrap + ellipsis\uFF1B\u53EA\u5728\u672C\u9875\u7B7E\u5185\u5141\u8BB8\u6362\u884C\u3002 */\n[data-trajectory-superset] aside[aria-label='Event details'] [class*='_summary_'] {\n  overflow-wrap: anywhere;\n  text-overflow: clip;\n  white-space: normal;\n}\n";

// src/client/index.tsx
var inject = ["slots", "locale"];
var name = "dsh-better-trajectory-client";
var VIEW_ID = "better-trajectory";
var NATIVE_VIEW_ID = "trajectory";
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
  const nativeT = ctx.locale.bind("trajectory");
  const handles = /* @__PURE__ */ new WeakMap();
  const getImages = () => {
    const entry = ctx.slots.entries("conversation.trajectory.images")[0];
    const factory = ctx.slots._core?.factory?.("conversation.images.content");
    if (entry === void 0 || factory === void 0) return void 0;
    return {
      entry: entry.component,
      factory: factory.component,
      injected: typeof factory.inject === "function" ? factory.inject() : {},
      t: ctx.locale.bind(factory.locale ?? "conversation")
    };
  };
  const getNative = () => {
    const entry = ctx.slots.entries("conversation.view").find((item) => item.options.id === NATIVE_VIEW_ID);
    if (entry === void 0) return void 0;
    let handle = handles.get(entry);
    if (handle === void 0) {
      handle = {
        component: entry.component,
        inject: (sessionId) => typeof entry.inject === "function" ? entry.inject(sessionId) : {}
      };
      handles.set(entry, handle);
    }
    return handle;
  };
  ctx.slots.inject("conversation.view", () => ctx.slots.register({
    name: "conversation.view",
    id: VIEW_ID,
    order: 11,
    locale: NS,
    label: () => t("view.label"),
    inject: () => ({ getNative, nativeT, getImages })
  }, SupersetView));
}
return module.exports; } });
