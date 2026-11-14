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
var import_react2 = require("react");

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
    const record = {
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
    records.push(record);
    if (callId !== "") byKey.set(keyOf(turn, callId), record);
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
      const record = {
        callId,
        name: asString(block.name),
        status: "ok",
        depth: 0,
        ...typeof node.turn === "number" ? { turn: node.turn } : {},
        ...typeof node.step === "number" ? { step: node.step } : {},
        ...asString(block.argsRaw) === "" ? {} : { args: asString(block.argsRaw) }
      };
      records.push(record);
      byKey.set(keyOf(node.turn, callId), record);
      if (record.name !== "") byName.set(record.name, (byName.get(record.name) ?? 0) + 1);
      if (record.turn !== void 0) turns.set(record.turn, (turns.get(record.turn) ?? 0) + 1);
    }
  }
  const partial = isObject(snapshot.partial) ? snapshot.partial : void 0;
  if (partial !== void 0) {
    for (const block of Array.isArray(partial.blocks) ? partial.blocks : []) {
      if (!isObject(block) || block.kind !== "tool-call") continue;
      const callId = asString(block.callId);
      if (callId === "" || byKey.has(keyOf(partial.turn, callId))) continue;
      const record = {
        callId,
        name: asString(block.name),
        status: "running",
        depth: 0,
        ...typeof partial.turn === "number" ? { turn: partial.turn } : {},
        ...asString(block.argsRaw) === "" ? {} : { args: asString(block.argsRaw) }
      };
      records.push(record);
      byKey.set(keyOf(partial.turn, callId), record);
      if (record.name !== "") byName.set(record.name, (byName.get(record.name) ?? 0) + 1);
      if (record.turn !== void 0) turns.set(record.turn, (turns.get(record.turn) ?? 0) + 1);
    }
  }
  return { records, byKey, byName, turns, nodeTurns, keyOf };
}
function matchesRecord(record, filters) {
  if (!isObject(record)) return false;
  if (filters.tools.length > 0 && !filters.tools.includes(record.name)) return false;
  if (filters.status === "error" && !isErrorStatus(record.status)) return false;
  if (filters.status === "running" && record.status !== "running") return false;
  if (filters.turn !== null && record.turn !== filters.turn) return false;
  if (filters.errorCode !== null && record.errorCode !== filters.errorCode) return false;
  if (filters.minDuration !== null && (record.durationMs ?? -1) < filters.minDuration) return false;
  return true;
}
function collectStats(index, filters) {
  const toolCounts = /* @__PURE__ */ new Map();
  const codeCounts = /* @__PURE__ */ new Map();
  let errors = 0;
  let running = 0;
  let matched = 0;
  const turnCounts = /* @__PURE__ */ new Map();
  for (const record of index.records) {
    const turnOk = filters.turn === null || record.turn === filters.turn;
    if (turnOk && record.name !== "") {
      toolCounts.set(record.name, (toolCounts.get(record.name) ?? 0) + 1);
    }
    const toolsOk = filters.tools.length === 0 || filters.tools.includes(record.name);
    const otherOk = turnOk && (filters.errorCode === null || record.errorCode === filters.errorCode) && (filters.minDuration === null || (record.durationMs ?? -1) >= filters.minDuration);
    if (toolsOk && otherOk) {
      if (isErrorStatus(record.status)) errors += 1;
      if (record.status === "running") running += 1;
    }
    if (toolsOk && turnOk && isErrorStatus(record.status) && record.errorCode) {
      codeCounts.set(record.errorCode, (codeCounts.get(record.errorCode) ?? 0) + 1);
    }
    if (toolsOk && record.turn !== void 0) {
      turnCounts.set(record.turn, (turnCounts.get(record.turn) ?? 0) + 1);
    }
    if (matchesRecord(record, filters)) matched += 1;
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
  for (const record of index.records) {
    if (record.name === "") continue;
    let item = map.get(record.name);
    if (item === void 0) {
      item = { name: record.name, calls: 0, errors: 0, running: 0, totalMs: 0, durations: [] };
      map.set(record.name, item);
    }
    item.calls += 1;
    if (isErrorStatus(record.status)) item.errors += 1;
    if (record.status === "running") item.running += 1;
    if (typeof record.durationMs === "number") {
      item.totalMs += record.durationMs;
      item.durations.push(record.durationMs);
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
  return index.records.filter((record) => matchesRecord(record, filters) && typeof record.durationMs === "number").sort((left, right) => (right.durationMs ?? 0) - (left.durationMs ?? 0)).slice(0, limit);
}
function errorCalls(index, filters) {
  return index.records.filter((record) => matchesRecord(record, filters) && isErrorStatus(record.status)).sort((left, right) => (left.turn ?? 0) - (right.turn ?? 0) || (left.time ?? 0) - (right.time ?? 0));
}
function filteredCalls(index, filters) {
  return index.records.filter((record) => matchesRecord(record, filters));
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
    const record = recordFor(block, fallbackTurn);
    const subCalls = (Array.isArray(block.subCalls) ? block.subCalls : []).map((sub) => filterToolBlock(sub, record.turn ?? fallbackTurn)).filter((sub) => sub !== null);
    if (!matchesRecord(record, filters) && subCalls.length === 0) return null;
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
function jsonRecord(record, index) {
  return {
    index: index + 1,
    callId: record.callId ?? "",
    name: record.name ?? "",
    status: record.status ?? "",
    turn: record.turn ?? null,
    step: record.step ?? null,
    durationMs: record.durationMs ?? null,
    errorName: record.errorName ?? "",
    errorCode: record.errorCode ?? "",
    error: record.errorText ?? "",
    args: record.args ?? "",
    result: record.result ?? ""
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
  for (const [index, record] of records.entries()) {
    const summary = record.errorText || record.args || record.result || "";
    lines.push(`| ${index + 1} | ${cell(turnOf(record))} | ${cell(record.name)} | ${cell(record.status)} | ${cell(durationText(record.durationMs))} | ${cell(record.errorCode)} | ${cell(oneLine(summary, 200))} |`);
  }
  const failures = records.filter((record) => record.status === "error" || record.status === "interrupted");
  if (failures.length > 0) {
    lines.push("", "## Failures", "");
    for (const [index, record] of failures.entries()) {
      lines.push(`### ${index + 1}. ${record.name || "tool"} \u2014 ${record.errorCode || record.status}`);
      if (record.errorText) lines.push("", "```text", record.errorText, "```");
      if (record.args) lines.push("", "**Arguments**", "", "```json", record.args, "```");
      if (record.result) lines.push("", "**Result**", "", "```text", record.result, "```");
      lines.push("");
    }
  }
  return lines.join("\n");
}
function turnOf(record) {
  if (typeof record.turn !== "number") return "\u2014";
  return typeof record.step === "number" ? `${record.turn}/${record.step}` : String(record.turn);
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
function JsonViewer({ record, schema, onClose, t }) {
  const [tab, setTab] = (0, import_react.useState)(() => record.args ? "args" : record.result ? "result" : "schema");
  const [raw, setRaw] = (0, import_react.useState)(false);
  const [search, setSearch] = (0, import_react.useState)("");
  const [mode, setMode] = (0, import_react.useState)("default");
  const [resetKey, setResetKey] = (0, import_react.useState)(0);
  const [wide, setWide] = (0, import_react.useState)(false);
  const searchRef = (0, import_react.useRef)(null);
  const args = (0, import_react.useMemo)(() => parseJson(record.args), [record.args]);
  const result = (0, import_react.useMemo)(() => parseJson(record.result), [record.result]);
  const tabs = [
    { id: "args", label: t("json.tab.args"), available: record.args !== void 0, value: args },
    { id: "result", label: t("json.tab.result"), available: record.result !== void 0, value: result },
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
  const rawText = record.args && tab === "args" ? record.args : record.result && tab === "result" ? record.result : stringify(treeValue);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-json-overlay", role: "dialog", "aria-label": t("json.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "bts-json-panel", "data-wide": wide || void 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "bts-json-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-title", title: record.name, children: record.name || record.callId }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-meta", children: record.status }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-meta", children: typeof record.turn === "number" ? `T${record.turn}${typeof record.step === "number" ? `.${record.step}` : ""}` : "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-json-meta", children: typeof record.durationMs === "number" ? `${Math.round(record.durationMs)}ms` : "" }),
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

// src/client/superset.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
      const value = (0, import_react2.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
      return selector(value);
    };
  }
  return result;
}
function usePopover(open, close) {
  const ref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Factory,
        {
          ...props,
          ...imagesApi.injected,
          t: imagesApi.t,
          ...useContextMenu === void 0 ? {} : { useContextMenu }
        }
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Images,
      {
        images,
        align,
        loadImage,
        renderFactorySlot
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-images", "data-align": align ?? "start", children: (images ?? []).map((source, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NativeImage, { source, loadImage }, `${index}`)) });
}
function NativeImage({ source, loadImage }) {
  const preview = source?.preview?.url;
  const attachment = source?.attachment;
  const [url, setUrl] = (0, import_react2.useState)(() => {
    if (typeof preview === "string") return preview;
    if (attachment !== void 0) return loadImage?.peek?.(attachment);
    return void 0;
  });
  const [failed, setFailed] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
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
  if (failed) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-image-fallback", children: "image" });
  if (url === void 0) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-image-fallback", children: "\u2026" });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      type: "button",
      className: "bts-image",
      title: source?.label ?? source?.preview?.name,
      onClick: () => window.open(url, "_blank", "noopener"),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: url, alt: source?.label ?? source?.preview?.name ?? "" })
    }
  );
}
function formatMs(ms) {
  if (typeof ms !== "number" || !Number.isFinite(ms)) return "\u2014";
  if (ms < 1e3) return `${Math.round(ms)}ms`;
  if (ms < 6e4) return `${(ms / 1e3).toFixed(ms < 1e4 ? 1 : 0)}s`;
  return `${Math.floor(ms / 6e4)}m${String(Math.round(ms % 6e4 / 1e3)).padStart(2, "0")}s`;
}
function turnOf2(record) {
  if (typeof record?.turn !== "number") return "\u2014";
  return typeof record.step === "number" ? `${record.turn}/${record.step}` : String(record.turn);
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
  const [filters, setFilters] = (0, import_react2.useState)(() => loadFilters(sessionId));
  const [toolMenu, setToolMenu] = (0, import_react2.useState)(false);
  const [toolSearch, setToolSearch] = (0, import_react2.useState)("");
  const [debugOpen, setDebugOpen] = (0, import_react2.useState)(true);
  const [debugTab, setDebugTab] = (0, import_react2.useState)("errors");
  const [exportMenu, setExportMenu] = (0, import_react2.useState)(false);
  const [toast, setToast] = (0, import_react2.useState)(null);
  const [focusRequest, setFocusRequest] = (0, import_react2.useState)(null);
  const [jsonRecord2, setJsonRecord] = (0, import_react2.useState)(null);
  const [jsonSchema, setJsonSchema] = (0, import_react2.useState)(void 0);
  const [wrapDefault, setWrapDefault] = (0, import_react2.useState)(true);
  const toolSearchRef = (0, import_react2.useRef)(null);
  const debugInitialized = (0, import_react2.useRef)(false);
  const full = useTrajectory ? useTrajectory((snapshot) => snapshot) : void 0;
  const index = (0, import_react2.useMemo)(() => buildToolIndex(full), [full]);
  const stats = (0, import_react2.useMemo)(() => collectStats(index, filters), [index, filters]);
  const filtered = (0, import_react2.useMemo)(
    () => filterSnapshot(full, filters, index),
    [full, filters, index]
  );
  const native = (0, import_react2.useMemo)(() => getNative?.(), [getNative, sessionId]);
  const imagesApi = (0, import_react2.useMemo)(() => getImages?.(), [getImages, sessionId]);
  const injected = (0, import_react2.useMemo)(
    () => native === void 0 ? {} : native.inject(sessionId ?? ""),
    [native?.component, sessionId]
  );
  const mapped = (0, import_react2.useMemo)(() => mapInjected(injected), [injected]);
  const jsonStringWrapping = (0, import_react2.useMemo)(() => ({
    getDefault: () => wrapDefault,
    setDefault: (value) => setWrapDefault(value)
  }), [wrapDefault]);
  const filteredHook = (0, import_react2.useCallback)(
    (selector) => selector(filtered),
    [filtered]
  );
  const renderNativeSlot = (0, import_react2.useCallback)((name2, owner) => {
    if (name2 !== "conversation.trajectory.images") return null;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      NativeImages,
      {
        ...owner,
        imagesApi,
        useContextMenu: rest.useContextMenu
      }
    );
  }, [imagesApi, rest]);
  const closeToolMenu = (0, import_react2.useCallback)(() => setToolMenu(false), []);
  const closeExportMenu = (0, import_react2.useCallback)(() => setExportMenu(false), []);
  const toolPopRef = usePopover(toolMenu, closeToolMenu);
  const exportPopRef = usePopover(exportMenu, closeExportMenu);
  (0, import_react2.useEffect)(() => {
    saveFilters(sessionId, filters);
  }, [sessionId, filters]);
  (0, import_react2.useEffect)(() => {
    if (debugInitialized.current) return;
    if (stats.total === 0) return;
    debugInitialized.current = true;
    if (stats.errors === 0) setDebugTab("tools");
  }, [stats]);
  (0, import_react2.useEffect)(() => {
    if (toast === null) return;
    const timer = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);
  (0, import_react2.useEffect)(() => {
    if (!toolMenu) {
      setToolSearch("");
      return;
    }
    const timer = window.setTimeout(() => toolSearchRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [toolMenu]);
  const active = isActive(filters);
  const toolOptions = (0, import_react2.useMemo)(() => {
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
  const reveal = (record) => {
    if (record?.callId) setFocusRequest({ view: "trajectory", focus: record.callId });
  };
  const openJson = (record) => {
    setJsonRecord(record);
    setJsonSchema(full.callSchemas?.get(record?.callId));
  };
  const openLatestToolJson = (name2) => {
    const candidates = index.records.filter((record) => record.name === name2).sort((left, right) => (right.time ?? 0) - (left.time ?? 0));
    if (candidates[0] !== void 0) openJson(candidates[0]);
  };
  const filteredRecords = (0, import_react2.useMemo)(() => filteredCalls(index, filters), [index, filters]);
  const errors = (0, import_react2.useMemo)(() => errorCalls(index, filters), [index, filters]);
  const slowest = (0, import_react2.useMemo)(() => slowestCalls(index, filters), [index, filters]);
  const toolSummary = (0, import_react2.useMemo)(() => summarizeTools(index), [index]);
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: translate("view.missingHook.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: translate("view.missingHook.body") })
    ] }) });
  }
  if (native === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: translate("view.missingNative.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: translate("view.missingNative.body") })
    ] }) });
  }
  const Native = native.component;
  const summaryKey = "filter.summary";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-bar", role: "toolbar", "aria-label": translate("filter.aria"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "bts-lead", title: translate("filter.scopeHint"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconFilter, { size: 12 }),
        translate("filter.lead")
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-segment", role: "group", "aria-label": translate("filter.status.aria"), children: [
        ["all", translate("filter.status.all"), void 0],
        ["error", translate("filter.status.error"), stats.errors],
        ["running", translate("filter.status.running"), stats.running]
      ].map(([value, label, count]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          type: "button",
          "aria-pressed": filters.status === value,
          "data-empty": count === 0 ? "true" : void 0,
          "data-tone": value === "error" ? "error" : void 0,
          onClick: () => setFilters((previous) => ({ ...previous, status: value })),
          children: [
            label,
            count !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-count", children: count }) : null
          ]
        },
        value
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-pop-wrap", ref: toolPopRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "button",
          {
            type: "button",
            className: "bts-button",
            "data-active": filters.tools.length > 0 || void 0,
            "aria-haspopup": "dialog",
            "aria-expanded": toolMenu,
            onClick: () => setToolMenu((open) => !open),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconFilter, { size: 11 }),
              filters.tools.length === 0 ? translate("filter.tools") : translate("filter.tools.selected", { count: filters.tools.length }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconChevron, { size: 10 })
            ]
          }
        ),
        toolMenu ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-pop", "data-align": "right", role: "dialog", "aria-label": translate("filter.tools.aria"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-pop-title", children: translate("filter.tools.title") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-pop-search", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconSearch, { size: 11 }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-pop-list", children: toolOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-pop-title", children: translate("filter.tools.empty") }) : toolOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              className: "bts-pop-item",
              "aria-pressed": filters.tools.includes(option.name),
              onClick: () => toggleTool(option.name),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-check", "data-checked": filters.tools.includes(option.name) || void 0, children: "\u2713" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-pop-name", title: option.name, children: option.name }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-pop-count", children: option.count })
              ]
            },
            option.name
          )) }),
          filters.tools.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-pop-footer", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "", children: translate("filter.turn.all") }),
            stats.turns.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: String(item.turn), children: translate("filter.turn.option", { turn: item.turn, count: item.count }) }, item.turn))
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "", children: translate("filter.duration.all") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "100", children: translate("filter.duration.100") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "1000", children: translate("filter.duration.1000") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "5000", children: translate("filter.duration.5000") })
          ]
        }
      ),
      stats.errorCodes.length > 0 || filters.errorCode !== null ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "", children: translate("filter.code.all") }),
            stats.errorCodes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("option", { value: item.code, children: [
              item.code,
              " \xB7 ",
              item.count
            ] }, item.code)),
            filters.errorCode !== null && !stats.errorCodes.some((item) => item.code === filters.errorCode) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("option", { value: filters.errorCode, children: [
              filters.errorCode,
              " \xB7 0"
            ] }) : null
          ]
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-spacer" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          type: "button",
          className: "bts-button",
          "data-active": debugOpen || void 0,
          "aria-expanded": debugOpen,
          onClick: () => setDebugOpen((open) => !open),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconChevron, { size: 11, "data-rotated": debugOpen || void 0 }),
            translate("debug.toggle")
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-summary", title: translate("filter.scopeHint"), children: translate(summaryKey, { matched: stats.matched, total: stats.total }) }),
      active ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "bts-button", onClick: clear, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconClose, { size: 11 }),
        translate("filter.clear")
      ] }) : null
    ] }),
    debugOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "bts-debug", "aria-label": translate("debug.aria"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-debug-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-tabs", role: "tablist", "aria-label": translate("debug.tabsAria"), children: [
          ["errors", translate("debug.tab.errors"), errors.length],
          ["tools", translate("debug.tab.tools"), toolSummary.length],
          ["slowest", translate("debug.tab.slowest"), slowest.length]
        ].map(([value, label, count]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": debugTab === value,
            onClick: () => setDebugTab(value),
            children: [
              label,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-count", children: count })
            ]
          },
          value
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-spacer" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-pop-wrap", ref: exportPopRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              className: "bts-button",
              "aria-haspopup": "menu",
              "aria-expanded": exportMenu,
              onClick: () => setExportMenu((open) => !open),
              children: [
                translate("debug.export"),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconChevron, { size: 10 })
              ]
            }
          ),
          exportMenu ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-pop", "data-align": "right", role: "menu", style: { width: 230 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "bts-pop-item", role: "menuitem", onClick: download, children: translate("debug.export.download") })
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            className: "bts-icon-button",
            "aria-label": translate("debug.close"),
            title: translate("debug.close"),
            onClick: () => setDebugOpen(false),
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconClose, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-debug-body", children: debugTab === "errors" ? errors.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-debug-empty", children: translate("debug.errors.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-debug-columns bts-debug-columns-error", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.code") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.tool") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.turn") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.duration") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.error") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {})
        ] }),
        errors.map((record) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            role: "button",
            tabIndex: 0,
            className: "bts-debug-row bts-debug-row-error",
            onClick: () => reveal(record),
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                reveal(record);
              }
            },
            title: translate("debug.jump"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-code", children: record.errorCode || record.errorName || "error" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-tool", children: record.name || record.callId }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-meta", children: turnOf2(record) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-meta", children: formatMs(record.durationMs) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-message", children: oneLine2(record.errorText || record.result || "", 160) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "bts-debug-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "bts-json-open",
                    title: translate("debug.openJson"),
                    "aria-label": translate("debug.openJson"),
                    onClick: (event) => {
                      event.stopPropagation();
                      openJson(record);
                    },
                    children: "{}"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-jump", children: "\u2192" })
              ] })
            ]
          },
          `e:${record.turn}:${record.callId}`
        ))
      ] }) : debugTab === "tools" ? toolSummary.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-debug-empty", children: translate("debug.tools.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-debug-columns bts-debug-columns-tool", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.tool") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.calls") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.errors") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.p95") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.total") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {})
        ] }),
        toolSummary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "button",
          {
            type: "button",
            className: "bts-debug-row bts-debug-row-tool",
            "data-active": filters.tools.includes(item.name) || void 0,
            onClick: () => toggleTool(item.name),
            title: translate("debug.tools.toggle"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-tool", children: item.name }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.calls", { count: item.calls }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.errors", { count: item.errors }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.p95", { value: formatMs(item.p95Ms) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-meta", children: translate("debug.tools.total", { value: formatMs(item.totalMs) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {}),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "bts-debug-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-jump", children: filters.tools.includes(item.name) ? "\u2713" : "+" })
              ] })
            ]
          },
          item.name
        ))
      ] }) : slowest.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-debug-empty", children: translate("debug.slowest.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bts-debug-columns bts-debug-columns-slow", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.duration") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.tool") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.turn") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: translate("debug.col.args") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {})
        ] }),
        slowest.map((record) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "button",
          {
            type: "button",
            className: "bts-debug-row bts-debug-row-slow",
            onClick: () => reveal(record),
            title: translate("debug.jump"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-duration", children: formatMs(record.durationMs) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-tool", children: record.name || record.callId }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-meta", children: turnOf2(record) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-message", children: oneLine2(record.args || record.errorText || "", 160) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bts-debug-jump", children: "\u2192" })
            ]
          },
          `s:${record.turn}:${record.callId}`
        ))
      ] }) })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-native", "data-trajectory-superset": "", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Native,
      {
        ...rest,
        ...mapped,
        sessionId,
        t: nativeT,
        useTrajectory: filteredHook,
        renderSlot: renderNativeSlot,
        jsonStringWrapping,
        viewRequest: focusRequest ?? rest.viewRequest,
        completeViewRequest: () => {
          setFocusRequest(null);
          rest.completeViewRequest?.();
        }
      }
    ) }),
    jsonRecord2 !== null ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      JsonViewer,
      {
        record: jsonRecord2,
        schema: jsonSchema,
        onClose: () => setJsonRecord(null),
        t: translate
      }
    ) : null,
    toast !== null ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bts-toast", role: "status", children: toast }) : null
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
