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
  "tab.error": "\u5F02\u5E38",
  "tab.rawData": "\u539F\u59CB",
  "chip.status": "\u72B6\u6001",
  "chip.turn": "\u8F6E\u6B21",
  "chip.duration": "\u8017\u65F6",
  "error.copy": "\u590D\u5236",
  "raw.search": "\u641C\u7D22\u952E\u4E0E\u503C\u2026",
  "raw.expandAll": "\u5C55\u5F00\u5168\u90E8",
  "raw.collapseAll": "\u6536\u8D77\u5168\u90E8",
  "raw.copyAll": "\u590D\u5236 JSON",
  "raw.matches": "{count} \u5904\u547D\u4E2D",
  "raw.more": "\u5C55\u5F00",
  "raw.less": "\u6536\u8D77",
  "raw.copy": "\u590D\u5236\u6B64\u8282\u70B9",
  "raw.expand": "\u5C55\u5F00",
  "raw.collapse": "\u6536\u8D77",
  "raw.loadMore": "\u518D\u52A0\u8F7D {count} \u9879",
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
  "query.time": "\u65F6\u95F4",
  "query.timeHint": "\u663E\u793A\u6216\u9690\u85CF\u5DE6\u4FA7\u65F6\u95F4\u5217",
  "query.flatHint": "\u53EA\u663E\u793A\u547D\u4E2D\u7684\u5DE5\u5177\u8C03\u7528\uFF0C\u4E0D\u4FDD\u7559\u6D88\u606F\u4E0E\u56DE\u5408\u5934",
  "query.status.error": "\u9519\u8BEF",
  "query.status.running": "\u8FD0\u884C\u4E2D",
  "query.status.ok": "\u6210\u529F",
  "query.summary": "\u547D\u4E2D {matched} / {total} \u4E2A\u5DE5\u5177\u8C03\u7528",
  "query.hidden": "{count} \u4E2A\u88AB\u8FC7\u6EE4",
  "query.showAll": "\u663E\u793A\u5168\u90E8",
  "hint.filtered": "\u672C\u7EC4 {count} \u4E2A\u8C03\u7528\u88AB\u8FC7\u6EE4",
  "row.error": "error",
  "toast.cleared": "\u5DF2\u6E05\u7A7A\u67E5\u8BE2",
  "empty.none": "\u65E0\u8BB0\u5F55",
  "toast.collapsedAll": "\u5DF2\u6298\u53E0\u5168\u90E8\u8F6E\u6B21",
  "toast.expandedAll": "\u5DF2\u5C55\u5F00\u5168\u90E8\u8F6E\u6B21",
  "empty.noMatch": "\u65E0\u547D\u4E2D",
  "query.invalid": "\u65E0\u6CD5\u8BC6\u522B\uFF1A{tokens}\uFF08\u5DF2\u5FFD\u7565\uFF09",
  "toast.undo": "\u64A4\u9500",
  "toast.dismiss": "\u5173\u95ED\u63D0\u793A",
  "row.running": "running",
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
  "tab.error": "Error",
  "tab.rawData": "Raw",
  "chip.status": "Status",
  "chip.turn": "Turn",
  "chip.duration": "Duration",
  "error.copy": "Copy",
  "raw.search": "Search keys and values\u2026",
  "raw.expandAll": "Expand all",
  "raw.collapseAll": "Collapse all",
  "raw.copyAll": "Copy JSON",
  "raw.matches": "{count} matches",
  "raw.more": "more",
  "raw.less": "less",
  "raw.copy": "Copy node",
  "raw.expand": "Expand",
  "raw.collapse": "Collapse",
  "raw.loadMore": "Load {count} more",
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
  "query.time": "Time",
  "query.timeHint": "Show or hide the time column",
  "query.flatHint": "Only matching tool calls, without messages or turn headers",
  "query.status.error": "Error",
  "query.status.running": "Running",
  "query.status.ok": "OK",
  "query.summary": "{matched} / {total} tool calls",
  "query.hidden": "{count} filtered out",
  "query.showAll": "Show all",
  "hint.filtered": "{count} calls filtered out in this group",
  "row.error": "error",
  "toast.cleared": "\u5DF2\u6E05\u7A7A\u67E5\u8BE2",
  "empty.none": "\u65E0\u8BB0\u5F55",
  "toast.collapsedAll": "\u5DF2\u6298\u53E0\u5168\u90E8\u8F6E\u6B21",
  "toast.expandedAll": "\u5DF2\u5C55\u5F00\u5168\u90E8\u8F6E\u6B21",
  "empty.noMatch": "\u65E0\u547D\u4E2D",
  "query.invalid": "\u65E0\u6CD5\u8BC6\u522B\uFF1A{tokens}\uFF08\u5DF2\u5FFD\u7565\uFF09",
  "toast.undo": "\u64A4\u9500",
  "toast.dismiss": "\u5173\u95ED\u63D0\u793A",
  "row.running": "running",
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
function trajectoryRecordId(cell) {
  if (cell.recordId !== void 0) return cell.recordId;
  if (cell.callId !== void 0) return `${cell.kind}\0call\0${cell.callId}`;
  if (cell.sourceSeq !== void 0) return `${cell.kind}\0seq\0${cell.sourceSeq}`;
  return `${cell.kind}\0index\0${cell.index}`;
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
  const preview2 = compact.slice(0, PREVIEW_OUTPUT_CHARACTERS).trimEnd();
  return source.length < text.length || preview2.length < compact.length ? `${preview2}\u2026` : preview2;
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
function codeProgram(cell) {
  if (cell.kind !== "tool" && cell.kind !== "subtool") return void 0;
  if (cell.toolName !== PTC_TOOL_NAME || cell.inputDetail === void 0) return void 0;
  const args = parseRecord(cell.inputDetail);
  if (typeof args?.code !== "string") return void 0;
  if (args.description !== void 0 && typeof args.description !== "string") return void 0;
  return {
    rawInput: cell.inputDetail,
    source: args.code,
    description: typeof args.description === "string" && args.description.trim() !== "" ? args.description : args.code.split(/\r?\n/).find((line) => line.trim() !== "")?.trim() ?? "",
    arguments: args,
    language: recordedLanguage(cell.schemaDetail)
  };
}

// src/vendor/trajectory/TrajectoryTable.module.css
var css = ".bt_TrajectoryTable_split_eDViiG {\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n\n  position: relative;\n  display: flex;\n  flex: 1;\n  width: 100%;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-layer-1);\n  container-type: inline-size;\n}\n\n.bt_TrajectoryTable_tablePane_KHiY-a {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: var(--dsh-trajectory-bottom-clearance, 0px);\n  container: trajectory-table / inline-size;\n}\n\n.bt_TrajectoryTable_historyLoading_3Z7BY1 {\n  position: sticky;\n  z-index: 5;\n  top: 0;\n  height: 0;\n  overflow: visible;\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_historyLoadingBar_iuAaSy {\n  display: flex;\n  width: 100%;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  box-sizing: border-box;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_historyLoadRow_iZfpDw td {\n  height: 30px;\n  padding: 0;\n}\n\n/* The pagination control does not create a trajectory turn boundary. */\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_historyLoadRow_iZfpDw + tr[data-turn-start='true'] td::before {\n  content: none;\n}\n\n.bt_TrajectoryTable_historyLoadButton_kMXZ8l {\n  display: flex;\n  width: 100%;\n  height: 29px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: 0;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n  font: var(--dsw-font-xxs-12);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_historyLoadButton_kMXZ8l:hover:not(:disabled) {\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_historyLoadButton_kMXZ8l:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n\n.bt_TrajectoryTable_historyLoadButton_kMXZ8l:disabled {\n  cursor: default;\n}\n\n.bt_TrajectoryTable_visuallyHidden_nVQikz {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E:not([data-scroll-ready='true']) {\n  visibility: hidden;\n}\n\n.bt_TrajectoryTable_table_qfAk6E {\n  --trajectory-turn-accent: color-mix(\n    in srgb,\n    var(--dsw-alias-trajectory-accent) 22%,\n    var(--dsw-alias-bg-layer-1)\n  );\n\n  width: 100%;\n  min-width: 0;\n  border-spacing: 0;\n  table-layout: fixed;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt_TrajectoryTable_eventColumn_UTt04J {\n  width: 150px;\n}\n\n.bt_TrajectoryTable_eventColumn_UTt04J:where(:lang(zh)) {\n  width: 118px;\n}\n\n.bt_TrajectoryTable_contentColumn_GFcdso {\n  width: auto;\n}\n\n.bt_TrajectoryTable_table_qfAk6E th {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  box-sizing: border-box;\n  height: 30px;\n  padding: 0 8px;\n  overflow: hidden;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-tertiary);\n  background: var(--dsw-specific-sidebar-fill);\n  font: var(--dsw-font-xxs-12);\n  font-weight: 500;\n  text-align: left;\n  text-overflow: ellipsis;\n  user-select: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_eventHeader_kD88tA {\n  padding-right: 4px !important;\n  text-align: right !important;\n}\n\n.bt_TrajectoryTable_table_qfAk6E td {\n  box-sizing: border-box;\n  height: 30px;\n  padding: 0 8px;\n  overflow: hidden;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_virtualSpacer_qcuMuX {\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_virtualSpacer_qcuMuX td {\n  height: var(--trajectory-virtual-spacer-height);\n  padding: 0;\n  border: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):not([data-virtual-spacer]):not([data-history-load]) {\n  cursor: default;\n  outline: none;\n  transition:\n    background-color 120ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-timeline-focus='outside'] {\n  opacity: 0.24;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):not([data-virtual-spacer]):not([data-history-load]):not([data-selected='true']):hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n\n  .bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true']:hover {\n    background: transparent;\n  }\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true'] td {\n  height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-terminal-request-boundary='true'] td {\n  /* Retain the lower half of the 16px boundary marker at the table's end. */\n  height: 9px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  top: -15px;\n  bottom: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-selected='true'] {\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n  --request-boundary-base-left: 12px;\n\n  position: absolute;\n  z-index: 6;\n  top: -8px;\n  left: calc(var(--request-boundary-base-left) + var(--request-boundary-offset, 0px));\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y::before {\n  position: absolute;\n  top: 5.5px;\n  left: 5.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  corner-shape: round;\n  background: var(--dsw-alias-label-caption);\n  box-shadow:\n    0 0 0 2px var(--dsw-alias-bg-layer-1),\n    0 0 0 3px transparent;\n  content: '';\n  transition:\n    background 120ms var(--ds-ease-in-out),\n    box-shadow 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y::after {\n  position: absolute;\n  top: 2px;\n  left: 17px;\n  width: max-content;\n  padding: 0 4px;\n  border: 0.5px solid var(--dsw-alias-border-l1);\n  border-radius: 2px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n  content: attr(data-label);\n  font: 9px/12px var(--ds-font-family-code);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateX(-2px);\n  transition:\n    opacity 120ms var(--ds-ease-in-out),\n    transform 120ms var(--ds-ease-in-out);\n  user-select: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:focus-visible::before {\n  background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover::before {\n    background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB::before,\n.bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB:focus-visible::before {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 18%,\n    var(--dsw-alias-bg-layer-1)\n  );\n  box-shadow: 0 0 0 1.5px var(--dsw-alias-state-business-primary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB:hover::before {\n    background: color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 18%,\n      var(--dsw-alias-bg-layer-1)\n    );\n    box-shadow: 0 0 0 1.5px var(--dsw-alias-state-business-primary);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']::before,\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']:focus-visible::before {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']:hover::before {\n    background: var(--dsw-alias-state-error-primary);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:focus-visible::after {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover::after {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:focus-visible {\n  outline: none;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr:has(.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover):not([data-selected='true']) {\n    background: transparent;\n  }\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  position: relative;\n}\n\n.bt_TrajectoryTable_turnRail_yQDSF9,\n.bt_TrajectoryTable_selectionRail_wHs0wE {\n  position: absolute;\n  left: 0;\n  background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_turnRail_yQDSF9 {\n  z-index: 4;\n  top: -1px;\n  bottom: -1px;\n  width: 2px;\n  background: var(--trajectory-turn-accent);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-end='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  bottom: 0;\n}\n\n.bt_TrajectoryTable_selectionRail_wHs0wE {\n  z-index: 5;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-error='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-error-primary) 22%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-error='true'] .bt_TrajectoryTable_selectionRail_wHs0wE {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-start='true'] td {\n  position: relative;\n  overflow: visible;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-start='true']:not(:first-child) td::before {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 2px;\n  background: var(--dsw-alias-border-l1);\n  content: '';\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  overflow: visible !important;\n  padding-right: 4px !important;\n  padding-left: 36px !important;\n}\n\n.bt_TrajectoryTable_turnLabel_WNZW3a {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  display: inline-grid;\n  flex: none;\n  align-items: center;\n  box-sizing: border-box;\n  width: max-content;\n  padding: 1px 5px;\n  border-radius: 0 0 2px;\n  color: var(--dsw-alias-label-tertiary);\n  background: var(--dsw-alias-bg-module-platform);\n  font: 8px/10px var(--ds-font-family-code);\n  font-variant-numeric: tabular-nums;\n  user-select: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n.bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n  grid-area: 1 / 1;\n  max-width: 64px;\n  overflow: hidden;\n  opacity: 1;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n  max-width: 0;\n  opacity: 0;\n}\n\n.bt_TrajectoryTable_turnLabelActive_oHLGco {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-trajectory-accent) 55%,\n    var(--dsw-alias-label-tertiary)\n  );\n  background: var(--trajectory-turn-accent);\n}\n\n.bt_TrajectoryTable_eventInner_4FCDOJ {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  min-width: 0;\n  height: 100%;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9 {\n  display: flex;\n  flex: none;\n  align-items: flex-end;\n  justify-content: flex-end;\n  width: 76px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9:where(:lang(zh)) {\n  width: 44px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9 [role='tooltip'] {\n  border: 0;\n  background: var(--dsw-alias-bg-layer-2);\n  box-shadow: var(--dsw-elevation-panel);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_content_xtMqjv {\n  padding-left: 4px !important;\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_kindTag_QR8Bo3 {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  box-sizing: border-box;\n  height: 19px;\n  padding: 0 5px;\n  border: 1px solid transparent;\n  border-radius: var(--dsw-radius-xs);\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 650;\n  letter-spacing: 0.035em;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_kindTagIcon_faG1Xu {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 0;\n  height: 13px;\n  overflow: hidden;\n  opacity: 0;\n  transform: scale(0.8);\n}\n\n.bt_TrajectoryTable_kindTagLabel_DubDfc {\n  display: inline-block;\n  max-width: 72px;\n  overflow: hidden;\n  opacity: 1;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E .bt_TrajectoryTable_kindSlot_0oaQf9 .bt_TrajectoryTable_message_Kosacf {\n  justify-content: center;\n  width: 100%;\n}\n\n@container trajectory-table (max-width: 620px) {\n  .bt_TrajectoryTable_eventColumn_UTt04J {\n    width: 50px;\n  }\n\n  .bt_TrajectoryTable_event_ApG3nH {\n    padding-right: 3px !important;\n    padding-left: 28px !important;\n  }\n\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n    --request-boundary-base-left: 6px;\n  }\n\n  .bt_TrajectoryTable_kindSlot_0oaQf9 {\n    width: 19px;\n  }\n\n  .bt_TrajectoryTable_kindTag_QR8Bo3,\n  .bt_TrajectoryTable_table_qfAk6E .bt_TrajectoryTable_kindSlot_0oaQf9 .bt_TrajectoryTable_message_Kosacf {\n    justify-content: center;\n    width: 19px;\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu {\n    width: 13px;\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  .bt_TrajectoryTable_kindTagLabel_DubDfc {\n    max-width: 0;\n    opacity: 0;\n  }\n\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ {\n    max-width: 0;\n    opacity: 0;\n  }\n\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    max-width: 64px;\n    opacity: 1;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .bt_TrajectoryTable_eventColumn_UTt04J,\n  .bt_TrajectoryTable_event_ApG3nH,\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y,\n  .bt_TrajectoryTable_kindSlot_0oaQf9,\n  .bt_TrajectoryTable_kindTag_QR8Bo3,\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu,\n  .bt_TrajectoryTable_kindTagLabel_DubDfc,\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    transition-duration: 180ms;\n    transition-timing-function: var(--ds-ease-in-out);\n  }\n\n  .bt_TrajectoryTable_eventColumn_UTt04J,\n  .bt_TrajectoryTable_kindSlot_0oaQf9 {\n    transition-property: width;\n  }\n\n  .bt_TrajectoryTable_event_ApG3nH {\n    transition-property: padding-right, padding-left;\n  }\n\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n    transition-property: left;\n  }\n\n  .bt_TrajectoryTable_kindTag_QR8Bo3 {\n    transition-property: padding-right, padding-left;\n  }\n\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu {\n    transition-property: width, opacity, transform;\n  }\n\n  .bt_TrajectoryTable_kindTagLabel_DubDfc,\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    transition-property: max-width, opacity;\n  }\n}\n\n.bt_TrajectoryTable_user_EiaeE6 {\n  color: var(--dsw-alias-state-business-primary);\n  background: var(--dsw-alias-state-business-tertiary);\n}\n\n.bt_TrajectoryTable_systemNeutral_wBnUUo {\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-module-platform);\n}\n\n.bt_TrajectoryTable_contextGreen_b5rkgS {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}\n\n.bt_TrajectoryTable_compacted_3aTcSn {\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-module-platform);\n}\n\n.bt_TrajectoryTable_compactedSummary_ty-j09 {\n  margin-top: 12px;\n  padding: 0 0 14px;\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_promptDiffSections_v3FFVc {\n  display: flex;\n  max-height: 100%;\n  flex-direction: column;\n  padding: 10px 14px 14px;\n  gap: 14px;\n  overflow: auto;\n}\n\n.bt_TrajectoryTable_promptDiffSection_MRiY64 {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_promptDiffTitle_9JuX4g {\n  margin: 0 0 6px;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-strong-13);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_promptDiff_VkrRb4 {\n  margin: 0;\n  overflow: auto;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: 11px/17px var(--ds-font-family-code);\n  white-space: pre;\n}\n\n.bt_TrajectoryTable_promptDiff_VkrRb4 span {\n  display: block;\n  min-width: max-content;\n  padding: 0 6px;\n}\n\n.bt_TrajectoryTable_promptDiffLinemeta_tLOrjX {\n  color: var(--dsw-alias-label-caption);\n  background: var(--dsw-alias-bg-module-platform);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_promptDiffLinecontext_jNpM0B {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_promptDiffLineadded_sSKAHi {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 72%,\n    var(--dsw-alias-label-primary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}\n\n.bt_TrajectoryTable_promptDiffLineremoved_0GLhdY {\n  color: var(--dsw-alias-state-error-primary);\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-error-primary) 12%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_assistantVioletBright_kmQW8n {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_toolAmber_s0U4wU {\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n}\n\n.bt_TrajectoryTable_subtoolAmber_oyh_9d {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-label) 62%,\n    var(--dsw-alias-label-tertiary)\n  );\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-tertiary) 58%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_contentText_W_U6-c {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_toolCallOnly_9UZkuV {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='turn'] td,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='assistant'] td,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='tool'] td {\n  height: 20px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary] {\n  cursor: pointer;\n  outline: none;\n  transition: background-color 120ms var(--ds-ease-in-out);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary]:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary]:focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTable_collapsedTurnContent_4SL7Wn {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  color: var(--dsw-alias-label-secondary);\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.bt_TrajectoryTable_collapsedTurnEllipsis_YbEN8y {\n  flex: none;\n  margin-right: 6px;\n  color: var(--dsw-alias-label-tertiary);\n  font-weight: 600;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_collapsedTurnText_ROgIqU {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_resultPreview__PAl0L {\n  display: grid;\n  grid-template-columns:\n    clamp(\n      180px,\n      var(--trajectory-tool-request-width, calc(36cqw - 56px)),\n      480px\n    )\n    minmax(0, 1fr);\n  align-items: center;\n  min-width: 0;\n  gap: 8px;\n}\n\n.bt_TrajectoryTable_resultRequest_fX5Dw2,\n.bt_TrajectoryTable_inlineResultText_amcgP3 {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_toolCallNameTypeface_mYdbmm {\n  color: var(--dsw-alias-label-primary);\n  font: 400 12px/18px Menlo, Consolas, 'Liberation Mono', 'PingFang SC',\n    'Microsoft YaHei';\n}\n\n.bt_TrajectoryTable_toolCallPayload_RY4mmt {\n  margin-left: 7px;\n  color: var(--dsw-alias-label-secondary);\n  font: 400 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='tool'] .bt_TrajectoryTable_contentText_W_U6-c,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_contentText_W_U6-c,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='tool'] .bt_TrajectoryTable_resultPreview__PAl0L,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_resultPreview__PAl0L {\n  font-family: var(--ds-font-family-code);\n  font-size: 12px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv {\n  padding-left: 26px;\n}\n\n.bt_TrajectoryTable_inlineResult_v4z2_R {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_noOutputText_o_3gcc {\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_arrow_bvXwEE {\n  flex: none;\n  margin-right: 8px;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_error_Q9RpaF {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dd.bt_TrajectoryTable_error_Q9RpaF {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_errorPayload_cgEhYc {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_errorPayload_cgEhYc .bt_TrajectoryTable_resultBlockText_CiMsCo {\n  color: inherit;\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_jsonPayload_gOir54.bt_TrajectoryTable_errorPayload_cgEhYc,\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_jsonPreview_fhOE3c.bt_TrajectoryTable_errorPayload_cgEhYc {\n  --json-tree-property: var(--dsw-alias-state-error-primary);\n  --json-tree-string: var(--dsw-alias-state-error-primary);\n  --json-tree-number: var(--dsw-alias-state-error-primary);\n  --json-tree-keyword: var(--dsw-alias-state-error-primary);\n  --json-tree-punctuation: var(--dsw-alias-state-error-primary);\n  --json-tree-icon: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH {\n  position: relative;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  width: clamp(360px, 46%, 560px);\n  max-width: min(720px, calc(100% - 280px));\n  min-width: 0;\n  min-height: 0;\n  border-left: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_detailsResizeHandle_BpTEDx {\n  position: absolute;\n  z-index: 6;\n  top: 0;\n  bottom: 0;\n  left: -4px;\n  width: 8px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: col-resize;\n  touch-action: none;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_detailsResizeHandle_BpTEDx:focus-visible {\n  outline: none;\n}\n\n.bt_TrajectoryTable_detailsHeader_x9S6Zm {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  height: 42px;\n  padding: 0 8px 0 12px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bt_TrajectoryTable_detailsTitle_AoviUn {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  gap: 8px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_requestDetailsDot_gmlHKA {\n  flex: none;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  corner-shape: round;\n  background: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_requestDetailsName_bAa9c3 {\n  flex: none;\n  font: 500 12px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_detailsLocation_J0RItF {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_close_XeXehI {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 18px;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_close_XeXehI:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k {\n  display: flex;\n  flex: none;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  height: 34px;\n  padding: 0 8px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  gap: 1px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  overscroll-behavior-x: contain;\n  scrollbar-width: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k::-webkit-scrollbar {\n  display: none;\n}\n\n.bt_TrajectoryTable_detailTab_dnFNRF {\n  position: relative;\n  flex: none;\n  padding: 0 9px;\n  border: 0;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  cursor: pointer;\n  font: var(--dsw-font-xs-13);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_detailTab_dnFNRF:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s::after {\n  position: absolute;\n  right: 9px;\n  bottom: 0;\n  left: 9px;\n  height: 2px;\n  border-radius: 1px 1px 0 0;\n  background: var(--dsw-alias-state-business-primary);\n  content: '';\n}\n\n.bt_TrajectoryTable_close_XeXehI:focus-visible,\n.bt_TrajectoryTable_detailTab_dnFNRF:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K {\n  flex: 1;\n  min-height: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: var(--dsh-trajectory-bottom-clearance, 0px);\n  scrollbar-gutter: stable;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  padding-bottom: calc(12px + var(--dsh-trajectory-bottom-clearance, 0px));\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv > .bt_TrajectoryTable_overview_LDwNCJ {\n  flex: 0 1 auto;\n  min-height: 0;\n  padding-bottom: 0;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv > .bt_TrajectoryTable_compactedSummary_ty-j09 {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n}\n\n.bt_TrajectoryTable_summaryScrollRegion_E9DkdV {\n  --dsh-scrollbar-thumb: transparent;\n  --dsh-scrollbar-thumb-hover: transparent;\n}\n\n.bt_TrajectoryTable_summaryScrollRegion_E9DkdV:focus-within {\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_summaryScrollRegion_E9DkdV:hover {\n    --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n    --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n  }\n}\n\n.bt_TrajectoryTable_compactedSummary_ty-j09 .bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  padding-right: 18px;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ {\n  margin: 0;\n  padding: 8px 0;\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_overviewParentLinks_onT3iP {\n  display: flex;\n  gap: 14px;\n}\n\n.bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO {\n  all: unset;\n  display: inline-flex;\n  align-items: center;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n  font: inherit;\n  gap: 1px;\n  opacity: 1;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK {\n  flex: none;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:focus-visible .bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK {\n  color: var(--dsw-alias-label-primary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:hover .bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:focus-visible {\n  color: var(--dsw-alias-label-primary);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ > div {\n  display: grid;\n  grid-template-columns: 94px minmax(0, 1fr);\n  min-height: 22px;\n  padding: 0 14px;\n  align-items: center;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ > .bt_TrajectoryTable_requestTokenDetail_3wWQOZ dt {\n  padding-left: 12px;\n}\n\n.bt_TrajectoryTable_usagePanel_IBopaB {\n  padding: 4px 0 10px;\n}\n\n.bt_TrajectoryTable_usageGroup_xuIa90 + .bt_TrajectoryTable_usageGroup_xuIa90 {\n  margin-top: 8px;\n}\n\n.bt_TrajectoryTable_usageHeading_wqSwmH {\n  margin: 0;\n  padding: 4px 14px 1px;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-strong-13);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_usageGroup_xuIa90 .bt_TrajectoryTable_overview_LDwNCJ {\n  padding: 0;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dt {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dd {\n  min-width: 0;\n  margin: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_timestampToggle_OOUyti {\n  all: unset;\n  color: inherit;\n  cursor: pointer;\n  font: inherit;\n  user-select: text;\n}\n\n.bt_TrajectoryTable_timestampToggle_OOUyti:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_overviewSections_G30n5s {\n  display: flex;\n  flex: 1;\n  min-height: min-content;\n  flex-direction: column;\n  overflow: hidden;\n  border-top: 0;\n}\n\n.bt_TrajectoryTable_overviewSection_UMbxN0 {\n  display: flex;\n  flex: 1 1 0;\n  max-height: max-content;\n  min-height: 24px;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_overviewSection_UMbxN0 + .bt_TrajectoryTable_overviewSection_UMbxN0 {\n  padding-top: 2px;\n}\n\n.bt_TrajectoryTable_overviewHeading_9tOPuW {\n  display: flex;\n  flex: none;\n  align-items: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0 0 3px 14px;\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: var(--dsw-font-xs-strong-13);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_resultSections_RGuWZ5 {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 0 12px;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_jsonPayload_gOir54 {\n  min-height: 0;\n  overflow: visible;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_resultBlocks_9td9Kg,\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_payload_zRquMY,\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_noPayload_7dMYrF {\n  min-height: 0;\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_resultTitle_pFvVxk {\n  margin: 0;\n  font: inherit;\n}\n\n.bt_TrajectoryTable_overviewTitle_fQhguD {\n  display: inline-flex;\n  flex: none;\n  width: max-content;\n  height: auto;\n  align-items: center;\n  padding: 0;\n  border: 0;\n  color: inherit;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  gap: 3px;\n  line-height: 1;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_overviewTitleIcon_jb5JXE {\n  flex: none;\n  color: var(--dsw-alias-label-caption);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewTitle_fQhguD:hover .bt_TrajectoryTable_overviewTitleIcon_jb5JXE {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_overviewTitle_fQhguD:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_overviewTitle_fQhguD:focus-visible .bt_TrajectoryTable_overviewTitleIcon_jb5JXE {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  overscroll-behavior: contain;\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr[data-scroll-more] {\n  mask-image: linear-gradient(to bottom, #000 calc(100% - 12px), transparent);\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr > :last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.bt_TrajectoryTable_programDescription_RrDf1J {\n  flex: none;\n  margin: 0;\n  padding: 8px 14px 2px;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xs-13);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bt_TrajectoryTable_programIcon_CP_h94 {\n  margin-right: 4px;\n  vertical-align: -2px;\n}\n\n.bt_TrajectoryTable_programSummary_YiCTkq {\n  margin-left: 5px;\n  font-family: var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_detailBodyProgram_74PHCq,\n.bt_TrajectoryTable_programPanel_XIc3sM {\n  display: flex;\n  min-height: 0;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_programPanel_XIc3sM {\n  flex: 1;\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_programActions_JqbwEp {\n  display: inline-flex;\n  flex: none;\n  height: 16px;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  padding-right: 14px;\n}\n\n.bt_TrajectoryTable_programLanguage_lCq8AA {\n  padding-right: 4px;\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe {\n  display: inline-flex;\n  box-sizing: border-box;\n  width: 20px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 0;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_programAction_5AWzqe:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe[aria-pressed='true'] {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe[data-state='failed'] {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_ {\n  min-width: 0;\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_programPanel_XIc3sM > .bt_TrajectoryTable_programContent_mr8JT_ {\n  flex: 1;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez {\n  margin: 0 !important;\n  border-radius: 0;\n  background: var(--dsw-alias-bg-layer-1);\n  --dsl-code-block-line-white-space: pre;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez :where(pre) {\n  padding: 2px 14px 8px;\n  overflow: visible;\n  border-radius: 0;\n  background: var(--dsw-alias-bg-layer-1) !important;\n  font: 12px/16px var(--ds-font-family-code);\n  overflow-wrap: normal;\n  word-break: normal;\n  tab-size: 2;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez pre code > .line {\n  box-sizing: border-box;\n  width: max-content;\n  min-width: 100%;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_[data-wrap='true'] .bt_TrajectoryTable_programSource_84M3Ez {\n  --dsl-code-block-line-white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_[data-wrap='true'] .bt_TrajectoryTable_programSource_84M3Ez pre code > .line {\n  width: auto;\n  overflow-wrap: anywhere;\n  word-break: break-all;\n}\n\n.bt_TrajectoryTable_programOutput_Og2Bj5 {\n  margin: 0;\n  padding: 2px 14px 8px;\n  color: var(--dsw-alias-label-primary);\n  font: 12px/16px var(--ds-font-family-code);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bt_TrajectoryTable_programError_3hMSz7::first-line {\n  color: var(--dsw-alias-state-error-primary);\n  font-weight: 600;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_jsonPreview_fhOE3c > :first-child,\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_schemaTree_3maIWU > :first-child {\n  padding-top: 2px;\n  padding-bottom: 0;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_schemaTree_3maIWU {\n  margin-bottom: 0;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_overview_LDwNCJ {\n  padding: 2px 0 0;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_overview_LDwNCJ > div {\n  min-height: 22px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']),\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) {\n  gap: 8px;\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) h1,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) h1 {\n  font: 600 16px/22px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) h2,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) h2 {\n  font: 600 15px/22px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h3, h4, h5, h6),\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) :where(h3, h4, h5, h6) {\n  font: 600 14px/20px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :not(pre) > code,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) :not(pre) > code {\n  font: 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) table,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) table {\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > :first-child {\n  margin-top: 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > :last-child {\n  margin-bottom: 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h1, h2, h3) {\n  margin: 12px 0 6px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h4, h5, h6) {\n  margin: 10px 0 5px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(p, ul, ol) {\n  margin: 8px 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) li:not(:first-child) {\n  margin-top: 3px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) blockquote {\n  margin-top: 8px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) hr {\n  margin: 14px 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > .md-code-block {\n  margin: 10px 0;\n}\n\n.bt_TrajectoryTable_assistantContent_AG912s .bt_TrajectoryTable_markdownPayload_CsUZcJ,\n.bt_TrajectoryTable_assistantContent_AG912s .bt_TrajectoryTable_payload_zRquMY {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_thinkingQuote_8bhmqn {\n  --dsh-content-font-size-secondary: 13px;\n  --dsh-content-font-delta-secondary: 0px;\n  margin: 6px 14px 0 12px;\n  padding-left: 6px;\n  border-left: 2px solid var(--dsw-alias-markdown-citation);\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_thinkingQuoteOnlyPreview_-qIaDn {\n  margin-bottom: 8px;\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K > .bt_TrajectoryTable_assistantContentRendered_d98IKn .bt_TrajectoryTable_thinkingQuote_8bhmqn {\n  margin-top: 14px;\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  cursor: pointer;\n  font: 600 12px/18px var(--dsw-font-family);\n  gap: 2px;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_thinkingChevron_mBPwJ3 {\n  flex: none;\n  transition: transform 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK[aria-expanded='true'] .bt_TrajectoryTable_thinkingChevron_mBPwJ3 {\n  transform: rotate(90deg);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_thinkingToggle_JW9hdK:hover {\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_markdownPreview_uI4YWV,\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_markdownPayload_CsUZcJ,\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_payload_zRquMY {\n  min-height: 0;\n  padding: 2px 0;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_assistantOutput_e6Ffzt {\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV {\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  min-height: 100%;\n  padding: 14px;\n}\n\n.bt_TrajectoryTable_jsonPayload_gOir54 {\n  min-height: 100%;\n}\n\n.bt_TrajectoryTable_jsonPreview_fhOE3c {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_schema_2cLtnU {\n  min-height: 100%;\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_schemaPreview_rNQTYn {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_schemaIntro_HUQtip {\n  padding: 12px 14px 6px;\n}\n\n.bt_TrajectoryTable_schemaPreview_rNQTYn .bt_TrajectoryTable_schemaIntro_HUQtip {\n  padding-top: 2px;\n}\n\n.bt_TrajectoryTable_schemaName_4ZiI8h {\n  margin: 0;\n  color: var(--dsw-alias-label-primary);\n  font: 600 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_schemaDescription__yqKqT {\n  margin: 2px 0 0;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-13);\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_schemaParameters_WkpZiK {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_schemaParametersTitle_n3IAot {\n  margin: 0;\n  padding: 4px 14px 2px;\n  color: var(--dsw-alias-label-tertiary);\n  font: 600 11px/16px var(--dsw-font-family);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_schemaTree_3maIWU {\n  margin: 0 6px 8px 0;\n}\n\n.bt_TrajectoryTable_payload_zRquMY {\n  box-sizing: border-box;\n  min-height: 100%;\n  margin: 0;\n  padding: 14px;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-markdown-code-block);\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_payloadPreview_EAdNGv {\n  min-height: 0;\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_sourceBlocks_C6ZrYe {\n  box-sizing: border-box;\n  min-height: 100%;\n  padding: 12px 14px;\n}\n\n.bt_TrajectoryTable_sourceBlock_xUq4zJ + .bt_TrajectoryTable_sourceBlock_xUq4zJ {\n  margin-top: 14px;\n}\n\n.bt_TrajectoryTable_sourceBlockHeader_a8uXfy,\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  margin-bottom: 3px;\n  gap: 3px;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV {\n  all: unset;\n  display: flex;\n  align-items: center;\n  width: max-content;\n  margin-bottom: 3px;\n  gap: 3px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_sourceBlockLabel_LH3cfA {\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n  flex: none;\n  color: var(--dsw-alias-label-caption);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:hover .bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:focus-visible {\n  outline: none;\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:focus-visible .bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_sourceBlockContent_XoJ0B7 {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_messageImages_RfKfdd {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 14px 14px;\n  gap: 8px;\n}\n\n.bt_TrajectoryTable_attachments_E96dbm {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 14px 14px;\n  padding: 0;\n  gap: 8px;\n  list-style: none;\n}\n\n.bt_TrajectoryTable_attachmentsPreview_NcR8cV {\n  margin-block: 6px 8px;\n  gap: 6px;\n}\n\n.bt_TrajectoryTable_attachmentRow_oUBiDA {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  padding: 8px;\n  gap: 10px;\n  border: 0.5px solid var(--dsw-alias-border-l2-darkmode-thin);\n  border-radius: var(--dsw-radius-lg);\n}\n\n.bt_TrajectoryTable_attachmentIcon_UKoXGL {\n  display: grid;\n  flex: 0 0 48px;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n}\n\n.bt_TrajectoryTable_attachmentInfo_VyRFuz {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n  gap: 3px;\n}\n\n.bt_TrajectoryTable_attachmentName_Uk44An {\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  font-size: 12px;\n  line-height: 18px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_attachmentMetadata_IzXL36 {\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM {\n  margin-block: 8px;\n  border: 0.5px solid var(--dsw-alias-border-l2-darkmode-thin);\n  border-radius: var(--dsw-radius-md);\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary {\n  padding: 8px;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary .bt_TrajectoryTable_attachmentName_Uk44An {\n  display: block;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > pre {\n  padding: 0 8px 8px;\n}\n\n.bt_TrajectoryTable_assistantToolCalls_LlhL2V {\n  box-sizing: border-box;\n  max-width: 100%;\n  margin: 2px 14px 12px;\n  padding: 0;\n  color: var(--dsw-alias-label-secondary);\n  font: 11px/17px var(--ds-font-family-code);\n  list-style: none;\n}\n\n.bt_TrajectoryTable_assistantToolCallsPreview_cSQzRY {\n  margin-top: 2px;\n  margin-bottom: 8px;\n}\n\n.bt_TrajectoryTable_assistantToolCalls_LlhL2V li {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h {\n  all: unset;\n  display: flex;\n  box-sizing: border-box;\n  width: calc(100% + 4px);\n  min-width: 0;\n  height: 19px;\n  align-items: center;\n  margin-left: -4px;\n  padding: 0 4px;\n  border-radius: var(--dsw-radius-xs);\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_assistantToolCallButton_LVT7_h:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n  flex: none;\n  margin-right: 5px;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h:focus-visible .bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n  color: var(--dsw-alias-label-secondary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_assistantToolCallButton_LVT7_h:hover .bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n\n.bt_TrajectoryTable_assistantToolCallText_4cwwa2 {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_assistantToolCallName_TyR0np {\n  flex: none;\n  margin-right: 5px;\n  color: var(--dsw-alias-label-secondary);\n  font-weight: 500;\n}\n\n.bt_TrajectoryTable_assistantToolCallArgs_WFp7dp {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_systemPrompt_-3xuek {\n  box-sizing: border-box;\n}\n\n.bt_TrajectoryTable_toolCatalog_kYbj8S {\n  min-height: 100%;\n  padding: 8px 0 16px;\n}\n\n.bt_TrajectoryTable_toolCatalogItem_cGDuCI {\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT {\n  display: grid;\n  grid-template-columns: 12px 12px max-content minmax(0, 1fr);\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 30px;\n  padding: 4px 12px;\n  gap: 5px;\n  cursor: pointer;\n  list-style: none;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT::-webkit-details-marker {\n  display: none;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_toolCatalogSummary_SrfhkT:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_toolCatalogChevron_j04Bh4,\n.bt_TrajectoryTable_toolCatalogIcon_4W2aYB {\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_toolCatalogChevron_j04Bh4 {\n  transition: transform 100ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_toolCatalogItem_cGDuCI[open] .bt_TrajectoryTable_toolCatalogChevron_j04Bh4 {\n  transform: rotate(90deg);\n}\n\n.bt_TrajectoryTable_toolCatalogName_vJfIBm {\n  color: var(--dsw-alias-label-primary);\n  font: 500 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_toolCatalogDescription_q6Kjej {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_toolCatalogDefinition_E4Icq4 {\n  padding: 0 0 8px 29px;\n  background: var(--dsw-alias-bg-base);\n}\n\n.bt_TrajectoryTable_toolCatalogFullDescription_SjSY7e {\n  margin: 0;\n  padding: 7px 14px 4px 0;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-13);\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_toolCatalogTree_hAboUq {\n  margin-left: -14px;\n  margin-right: 6px;\n}\n\n.bt_TrajectoryTable_resultBlocks_9td9Kg {\n  display: flex;\n  min-height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 14px;\n  gap: 10px;\n}\n\n.bt_TrajectoryTable_resultBlocksPreview_WVjKr4 {\n  min-height: 0;\n  padding: 2px 14px 8px;\n  gap: 6px;\n}\n\n.bt_TrajectoryTable_resultBlockText_CiMsCo {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_noPayload_7dMYrF {\n  padding: 2px 14px 0;\n}\n\n.bt_TrajectoryTable_noPayload_7dMYrF {\n  margin: 0;\n  padding: 18px 14px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n}\n\n@media (max-width: 760px) {\n  .bt_TrajectoryTable_details_gIawuH {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: min(92%, 420px);\n    max-width: 92%;\n    border-left-color: var(--dsw-alias-border-l3);\n    box-shadow: -12px 0 32px rgba(0, 0, 0, 0.14);\n  }\n}\n\n.bt_TrajectoryTable_toolUpdatePayload_qTnDiO {\n  white-space: pre;\n  overflow-x: auto;\n}\n\n/* ---- inspector chips / error banner / raw data ---- */\n.bt_TrajectoryTable_detailChips_eYfgWR {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 6px 10px 4px;\n}\n\n.bt_TrajectoryTable_detailChip_EqVaho {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  max-width: 100%;\n  padding: 1px 6px;\n  border-radius: 4px;\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.04));\n  color: var(--dsw-alias-label-primary, #111);\n  font-size: 11px;\n}\n\n.bt_TrajectoryTable_detailChip_EqVaho[data-tone='error'] {\n  background: color-mix(in srgb, #e5484d 12%, var(--bt-surface, #ffffff));\n  color: #b42318;\n}\n\n/* identity chip: value only (no caption) */\n.bt_TrajectoryTable_detailChipIdentity_Ju3zRj .bt_TrajectoryTable_detailChipValue_UoJuS- {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-weight: 600;\n}\n\n.bt_TrajectoryTable_detailChipLabel_HgoUX8 {\n  color: var(--dsw-alias-label-tertiary, #999);\n  font-size: 10px;\n}\n\n.bt_TrajectoryTable_detailChipValue_UoJuS- {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n}\n\n.bt_TrajectoryTable_errorPanel_Z8NaAN {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px 12px;\n}\n\n.bt_TrajectoryTable_errorBanner_XxDyjs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  border: 1px solid color-mix(in srgb, #e5484d 35%, transparent);\n  border-radius: 6px;\n  background: color-mix(in srgb, #e5484d 8%, transparent);\n  color: #b42318;\n  font-size: 12px;\n}\n\n.bt_TrajectoryTable_errorDot_mTMWq- {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #e5484d;\n  flex-shrink: 0;\n}\n\n.bt_TrajectoryTable_errorCopy_BdAfyA {\n  margin-left: auto;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  font-size: 11px;\n  cursor: pointer;\n  opacity: 0.75;\n}\n\n.bt_TrajectoryTable_errorCopy_BdAfyA:hover {\n  opacity: 1;\n}\n\n.bt_TrajectoryTable_errorBody_2NOTYq {\n  margin: 0;\n  padding: 8px;\n  border-radius: 6px;\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.03));\n  color: var(--dsw-alias-label-primary, #111);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n\n/* ---- Logfire-style row meta ---- */\n.bt_TrajectoryTable_rowStack_AaX-1p {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_rowMeta_3HQb2i {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  padding-left: 2px;\n  color: var(--dsw-alias-label-tertiary, #999);\n  font-size: 9.5px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_rowTime_mPtQDP {\n  letter-spacing: 0.02em;\n}\n\n.bt_TrajectoryTable_rowDuration_7Hr9z2 {\n  padding: 0 3px;\n  border-radius: 3px;\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.04));\n}\n\ntr[data-error='true'] {\n  background: color-mix(in srgb, #e5484d 4%, transparent);\n}\n\ntr[data-error='true'] .bt_TrajectoryTable_content_xtMqjv {\n  box-shadow: inset 2px 0 0 color-mix(in srgb, #e5484d 55%, transparent);\n}\n\n.bt_TrajectoryTable_hiddenHintRow_SL9o6c {\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.02));\n}\n\n.bt_TrajectoryTable_hiddenHintCell_3kagUb {\n  padding: 4px 8px 4px 40px !important;\n  color: var(--dsw-alias-label-tertiary, #999);\n  font-size: 11px;\n}\n\n.bt_TrajectoryTable_hiddenHintText_99AuHD {\n  margin-right: 8px;\n}\n\n.bt_TrajectoryTable_hiddenHintButton_MLp-CC {\n  border: 0;\n  background: transparent;\n  color: var(--dsw-alias-brand-primary, #4a6cf7);\n  font-size: 11px;\n  cursor: pointer;\n  padding: 0;\n}\n\n@media (max-width: 900px) {\n  .bt_TrajectoryTable_rowMeta_3HQb2i {\n    display: none;\n  }\n}\n\n/* ============ instrument rows (docs/design-language.md) ============ */\n.bt_TrajectoryTable_eventColumn_UTt04J,\n.bt_TrajectoryTable_eventColumn_UTt04J:where(:lang(zh)) {\n  width: 84px;\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  padding: 0 8px 0 10px !important;\n  text-align: right;\n  height: 28px;\n  vertical-align: middle;\n}\n\n.bt_TrajectoryTable_content_xtMqjv {\n  padding: 0 12px 0 0 !important;\n  height: 28px;\n  vertical-align: middle;\n}\n\n.bt_TrajectoryTable_rowClock_gzwpBP {\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_rowLine_YOAcZR[data-mono] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n}\n\n.bt_TrajectoryTable_rowLine_YOAcZR {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  height: 28px;\n}\n\n.bt_TrajectoryTable_rowName_6wzz5H {\n  flex: none;\n  color: var(--bt-text, #1c2128);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n}\n\n.bt_TrajectoryTable_rowBadge_pPrItT {\n  flex: none;\n  height: 17px;\n  padding: 0 5px;\n  border-radius: 3px;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9.5px;\n  line-height: 17px;\n  letter-spacing: 0.02em;\n}\n\n.bt_TrajectoryTable_rowBadge_pPrItT[data-tone='error'] {\n  background: var(--bt-error-soft, #fef3f2);\n  color: var(--bt-error, #d92d20);\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bt-error, #d92d20) 22%, transparent);\n}\n\n.bt_TrajectoryTable_rowBadge_pPrItT[data-tone='running'] {\n  background: var(--bt-warn-soft, #fffaeb);\n  color: var(--bt-warn, #d97706);\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bt-warn, #d97706) 24%, transparent);\n}\n\n.bt_TrajectoryTable_rowSub_0f1fRA {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--bt-text-2, #5b6470);\n  font-size: 11px;\n}\n\n.bt_TrajectoryTable_rowBarWrap_qpJNU9 {\n  margin-left: auto;\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bt_TrajectoryTable_rowBar_7kRLZ3 {\n  height: 4px;\n  border-radius: 2px;\n  background: var(--bt-line, #e6e8eb);\n}\n\n.bt_TrajectoryTable_rowBar_7kRLZ3[data-tone='error'] {\n  background: color-mix(in srgb, var(--bt-error, #d92d20) 45%, transparent);\n}\n\n.bt_TrajectoryTable_rowBar_7kRLZ3[data-tone='running'] {\n  background: color-mix(in srgb, var(--bt-warn, #d97706) 45%, transparent);\n}\n\n.bt_TrajectoryTable_rowMs_JIpaaL {\n  width: 46px;\n  text-align: right;\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10px;\n  font-variant-numeric: tabular-nums;\n}\n\n/* hide the native chrome that the row anatomy replaces */\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y,\n.bt_TrajectoryTable_turnRail_yQDSF9,\n.bt_TrajectoryTable_selectionRail_wHs0wE,\n.bt_TrajectoryTable_turnLabel_WNZW3a {\n  display: none !important;\n}\n\n.bt_TrajectoryTable_table_qfAk6E {\n  table-layout: fixed;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tr {\n  height: 28px;\n  transition: background-color var(--bt-dur-2, 90ms) var(--bt-ease-std, ease);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tr:hover {\n  background: var(--bt-surface-2, #f6f7f9);\n}\n\ntr[data-selected='true'] {\n  background: var(--bt-surface-3, #eef0f3);\n}\n\ntr[data-selected='true'] .bt_TrajectoryTable_event_ApG3nH {\n  box-shadow: inset 2px 0 0 var(--bt-accent, #2563eb);\n}\n\ntr[data-error='true'] {\n  background: var(--bt-error-soft, #fef3f2);\n}\n\ntr[data-error='true']:hover {\n  background: color-mix(in srgb, var(--bt-error, #d92d20) 12%, var(--bt-surface, #ffffff));\n}\n\ntr[data-selected='true'][data-error='true'] {\n  background: color-mix(in srgb, var(--bt-error, #d92d20) 14%, transparent);\n}\n\n.bt_TrajectoryTable_rowLine_YOAcZR[data-tone='error'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-error, #d92d20);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tr:focus-visible {\n  outline: 2px solid var(--bt-accent, #2563eb);\n  outline-offset: -2px;\n}\n\n.bt_TrajectoryTable_details_gIawuH[data-snapping] {\n  transition: width var(--bt-dur-5, 220ms) var(--bt-ease-out, ease);\n}\n\n/* ---------- detail panel spec (design step 3) ---------- */\n.bt_TrajectoryTable_details_gIawuH {\n  width: 520px;\n  border-left: 1px solid var(--bt-line, #e6e8eb);\n  background: var(--bt-surface, #fff);\n}\n\n.bt_TrajectoryTable_detailsHeader_x9S6Zm {\n  height: 36px;\n  padding: 0 10px 0 12px;\n  border-bottom: 1px solid var(--bt-line, #e6e8eb);\n}\n\n.bt_TrajectoryTable_detailsTitle_AoviUn {\n  color: var(--bt-text, #1c2128);\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k {\n  height: 30px;\n  gap: 14px;\n  padding: 0 12px;\n  border-bottom: 1px solid var(--bt-line, #e6e8eb);\n}\n\n.bt_TrajectoryTable_detailTab_dnFNRF {\n  padding: 0;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 11.5px;\n}\n\n.bt_TrajectoryTable_detailTab_dnFNRF:hover {\n  color: var(--bt-text, #1c2128);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s {\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s::after {\n  right: 0;\n  left: 0;\n  height: 2px;\n  background: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_detailChips_eYfgWR {\n  gap: 4px;\n  padding: 8px 12px 6px;\n}\n\n.bt_TrajectoryTable_detailChip_EqVaho {\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 4px;\n  background: var(--bt-surface-2, #f6f7f9);\n  color: var(--bt-text, #1c2128);\n  font-size: 10.5px;\n}\n\n.bt_TrajectoryTable_detailChip_EqVaho[data-tone='error'] {\n  background: var(--bt-error-soft, #fef3f2);\n  color: var(--bt-error, #d92d20);\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bt-error, #d92d20) 22%, transparent);\n}\n\n.bt_TrajectoryTable_detailChipLabel_HgoUX8 {\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 9.5px;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.bt_TrajectoryTable_detailChipValue_UoJuS- {\n  font-size: 10.5px;\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K {\n  animation: bt_TrajectoryTable_bt-detail-in_boZx8U var(--bt-dur-3, 120ms) var(--bt-ease-out, ease);\n}\n\n@keyframes bt_TrajectoryTable_bt-detail-in_boZx8U {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.bt_TrajectoryTable_skeletonPane_8Bbpg8 {\n  position: absolute;\n  z-index: 6;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px 14px 0 98px;\n  background: var(--bt-surface, #fff);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_skeletonRow__ffu6X {\n  height: 10px;\n  border-radius: 3px;\n  background: linear-gradient(90deg, var(--bt-surface-2, #f6f7f9) 25%, var(--bt-surface-3, #eef0f3) 37%, var(--bt-surface-2, #f6f7f9) 63%);\n  background-size: 400% 100%;\n  animation: bt_TrajectoryTable_bt-shimmer_7WxuGj 1.6s linear infinite;\n}\n\n@keyframes bt_TrajectoryTable_bt-shimmer_7WxuGj {\n  from { background-position: 100% 0; }\n  to { background-position: 0 0; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt_TrajectoryTable_skeletonRow__ffu6X { animation: none; }\n}\n\n/* empty state */\n.bt_TrajectoryTable_emptyRow_mrRJOS { background: transparent; }\n.bt_TrajectoryTable_emptyCell_qLI1gw {\n  height: 120px;\n  padding-left: 98px !important;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 11.5px;\n}\n.bt_TrajectoryTable_emptyAction_GuJ5ND {\n  margin-left: 8px;\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  font-size: 11.5px;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_details_gIawuH[data-dragging] {\n  transition: none;\n  user-select: none;\n}\n\n/* ---------- hierarchy: identity + nesting ---------- */\ntr[data-kind='user'] {\n  background: var(--bt-surface-2, #f6f7f9);\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-accent, #2563eb);\n  font-weight: 600;\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text, #1c2128);\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='system'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='context'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='compacted'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-text-3, #9aa1ab);\n  font-weight: 400;\n}\n\ntr[data-kind='context'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 10.5px;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-text, #1c2128);\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv {\n  position: relative;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  content: '';\n  position: absolute;\n  top: 3px;\n  bottom: 3px;\n  left: 13px;\n  width: 1px;\n  background: var(--bt-line-soft, #f0f2f4);\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR {\n  border-left: 0;\n}\n\ntr[data-turn-start='true'] {\n  box-shadow: inset 0 1px 0 var(--bt-line-soft, #f0f2f4);\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text-2, #5b6470);\n}\n\n.bt_TrajectoryTable_rowClock_gzwpBP {\n  font-weight: 500;\n}\n\n/* second pass: message identity */\ntr[data-kind='message'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text, #1c2128);\n  font-size: 12px;\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-text-3, #9aa1ab);\n  text-transform: lowercase;\n  letter-spacing: 0.02em;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  font-weight: 600;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  background: var(--bt-line, #e6e8eb);\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-size: 12px;\n}\n\ntr[data-kind='user'] {\n  box-shadow: inset 2px 0 0 var(--bt-accent, #2563eb);\n}\n\n/* group bands: assistant + its tools share one tint */\ntr[data-group-parity='1'] {\n  background: color-mix(in srgb, var(--bt-surface-2, #f6f7f9) 55%, transparent);\n}\n\ntr[data-group-parity='1']:hover,\ntr[data-group-parity='0']:hover {\n  background: var(--bt-surface-3, #eef0f3);\n}\n\ntr[data-kind='user'] {\n  background: color-mix(in srgb, var(--bt-accent, #2563eb) 7%, transparent);\n  box-shadow: inset 2px 0 0 var(--bt-accent, #2563eb);\n}\n\n/* assistant text wraps: the strongest identity cue against one-line tool rows */\ntr[data-kind='message'] .bt_TrajectoryTable_rowLine_YOAcZR {\n  height: auto;\n  min-height: 28px;\n  align-items: flex-start;\n  /* the only source of the vertical inset: the tree geometry derives the\n     marker line from it (see --bt-marker-y below) */\n  --bt-pad-y: 5px;\n  padding-block: var(--bt-pad-y);\n  box-sizing: border-box;\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H {\n  padding-top: 1px;\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  white-space: normal;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  line-height: 1.55;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowSub_0f1fRA,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 10px;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  font-size: 11px;\n}\n\ntr[data-kind='context'] .bt_TrajectoryTable_rowLine_YOAcZR,\ntr[data-kind='system'] .bt_TrajectoryTable_rowLine_YOAcZR {\n  height: 24px;\n}\n\ntr[data-kind='context'] .bt_TrajectoryTable_rowSub_0f1fRA,\ntr[data-kind='system'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-size: 10px;\n  white-space: nowrap;\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowLine_YOAcZR {\n  min-height: 32px;\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-weight: 500;\n}\n\n/* turn marker: the only fold control at turn level */\n.bt_TrajectoryTable_turnMarker_P4Db4Z {\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n  padding: 0 2px;\n  border: 0;\n  border-radius: 3px;\n  background: transparent;\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10px;\n  line-height: 16px;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_turnMarker_P4Db4Z:hover {\n  background: var(--bt-surface-2, #f6f7f9);\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_turnMarkerLabel_fl2CVN {\n  font-variant-numeric: tabular-nums;\n}\n\n/* native-inspired identity hues */\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-tool, #b45309);\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-assistant, #7c3aed);\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-user, #1d4ed8);\n}\n\ntr[data-kind='context'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='system'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-context, #047857);\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  z-index: 1;\n  background: var(--bt-line, #e6e8eb);\n}\n\n/* kind pills (native-inspired identity) */\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='user'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='context'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='system'] .bt_TrajectoryTable_rowName_6wzz5H {\n  display: none;\n}\n\n/* hover info card */\n.bt_TrajectoryTable_hoverCard_72nlxN {\n  position: fixed;\n  z-index: 60;\n  width: 300px;\n  padding: 10px 12px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 8px;\n  background: var(--bt-surface, #fff);\n  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);\n  pointer-events: none;\n  animation: bt_TrajectoryTable_bt-card-in_jIiR6X var(--bt-dur-3, 120ms) var(--bt-ease-out, ease);\n}\n\n@keyframes bt_TrajectoryTable_bt-card-in_jIiR6X {\n  from { opacity: 0; transform: translateY(3px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.bt_TrajectoryTable_hoverHead_D7ULD1 {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n\n.bt_TrajectoryTable_hoverName_r4OD3A {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_hoverGrid_9D9_Nv {\n  display: grid;\n  grid-template-columns: 52px 1fr;\n  gap: 3px 8px;\n  margin: 0;\n  font-size: 11px;\n}\n\n.bt_TrajectoryTable_hoverGrid_9D9_Nv dt {\n  color: var(--bt-text-3, #9aa1ab);\n}\n\n.bt_TrajectoryTable_hoverGrid_9D9_Nv dd {\n  margin: 0;\n  color: var(--bt-text-2, #5b6470);\n  font-variant-numeric: tabular-nums;\n}\n\n.bt_TrajectoryTable_hoverArgs_MWXGwA {\n  margin: 8px 0 0;\n  padding-top: 8px;\n  border-top: 1px solid var(--bt-line-soft, #f0f2f4);\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_hoverHint_rCVokh {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 10px;\n}\n\n.bt_TrajectoryTable_split_eDViiG[data-show-time='false'] .bt_TrajectoryTable_eventColumn_UTt04J {\n  width: 0;\n}\n\n/* Collapse the time cell instead of removing it. `display: none` drops the cell\n   from the row's cell list, so the content cell moves into the zero-width first\n   column and the whole ledger renders blank. */\n.bt_TrajectoryTable_split_eDViiG[data-show-time='false'] .bt_TrajectoryTable_event_ApG3nH {\n  width: 0;\n  padding: 0 !important;\n  border-bottom-color: transparent;\n  overflow: hidden !important;\n}\n\n.bt_TrajectoryTable_hoverCard_72nlxN {\n  pointer-events: auto;\n}\n\n.bt_TrajectoryTable_hoverActions_pAodZY {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 9px;\n  padding-top: 8px;\n  border-top: 1px solid var(--bt-line-soft, #f0f2f4);\n}\n\n.bt_TrajectoryTable_hoverAction_08PSsd {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 22px;\n  padding: 0 6px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--bt-text-2, #5b6470);\n  font-size: 10.5px;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_hoverAction_08PSsd:hover {\n  border-color: var(--bt-line, #e6e8eb);\n  background: var(--bt-surface-2, #f6f7f9);\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_hoverKey_RaXgA3 {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 14px;\n  height: 14px;\n  padding: 0 3px;\n  border-radius: 3px;\n  background: var(--bt-surface-3, #eef0f3);\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9px;\n}\n\n.bt_TrajectoryTable_hoverClose_ZmsOU8 {\n  margin-left: auto;\n  border: 0;\n  background: transparent;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 13px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_hoverAction_08PSsd[data-on] {\n  border-color: var(--bt-accent, #2563eb);\n  color: var(--bt-accent, #2563eb);\n  background: color-mix(in srgb, var(--bt-accent, #2563eb) 8%, transparent);\n}\n\n.bt_TrajectoryTable_hoverCard_72nlxN {\n  pointer-events: none;\n}\n\n/* tree guides: vertical rail + elbow for child rows */\n.bt_TrajectoryTable_rowLine_YOAcZR {\n  position: relative;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 13px;\n  width: 1px;\n  background: var(--bt-line, #e6e8eb);\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::after,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 13px;\n  width: 8px;\n  height: 1px;\n  background: var(--bt-line, #e6e8eb);\n}\n\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::after {\n  left: 39px;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  display: none;\n}\n\n.bt_TrajectoryTable_foldedPill_Vdw4eC {\n  flex: none;\n  height: 15px;\n  padding: 0 5px;\n  border-radius: 3px;\n  background: var(--bt-surface-3, #eef0f3);\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9px;\n  line-height: 15px;\n}\n\n/* tree guide\u6536\u53E3 + sticky turn header */\ntr[data-child-last] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  bottom: 50%;\n}\n\ntr[data-turn-start='true'] {\n  position: sticky;\n  top: 0;\n  z-index: 4;\n  background: var(--bt-surface, #fff);\n  box-shadow: inset 0 1px 0 var(--bt-line-soft, #f0f2f4);\n}\n\n/* sticky turn rows need an opaque background or content bleeds through */\ntr[data-turn-start='true'] {\n  background: var(--bt-surface, #ffffff);\n}\n\ntr[data-turn-start='true'][data-kind='user'] {\n  background: color-mix(in srgb, var(--bt-accent, #2563eb) 7%, var(--bt-surface, #ffffff));\n}\n\n/* border-collapse tables ignore tr background; paint the sticky row on cells */\ntr[data-turn-start='true'] > td {\n  background: var(--bt-surface, #ffffff);\n}\n\ntr[data-turn-start='true'][data-kind='user'] > td {\n  background: color-mix(in srgb, var(--bt-accent, #2563eb) 7%, var(--bt-surface, #ffffff));\n}\n\n/* canonical sticky: cells, not rows */\ntr[data-turn-start='true'] {\n  position: static;\n  z-index: auto;\n}\n\ntr[data-turn-start='true'] > td {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background: var(--bt-surface, #ffffff);\n}\n\ntr[data-turn-start='true'][data-kind='user'] > td {\n  background: color-mix(in srgb, var(--bt-accent, #2563eb) 7%, var(--bt-surface, #ffffff));\n}\n\n/* fold summary chips: distinct tints instead of one flat string */\n.bt_TrajectoryTable_foldGroup_TRT3uh {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  flex: none;\n}\n\n/* fold summary chips: same family as the kind tag, one rank quieter */\n.bt_TrajectoryTable_foldChip__T1yva {\n  display: inline-flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 19px;\n  padding: 0 5px;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 600;\n  letter-spacing: 0.035em;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_foldChip__T1yva[data-kind='steps'] {\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n}\n\n.bt_TrajectoryTable_foldChip__T1yva[data-kind='tools'] {\n  background: var(--dsw-alias-state-warn-tertiary);\n  color: var(--dsw-alias-state-warn-label);\n}\n\n.bt_TrajectoryTable_foldChip__T1yva[data-kind='time'] {\n  background: var(--dsw-alias-bg-module-platform);\n  color: var(--dsw-alias-label-secondary);\n}\n\n/* ===================== tree connectors: one formula for every level =====================\n   A row of level L draws three things from a single pair of numbers:\n\n     --bt-step  26px                       indent per level\n     --bt-dot   12px                       dot centre inside its own level\n     --bt-axis  calc(step * L + dot)       this row's fold-dot centre\n     elbow      horizontal 1px, from the parent dot centre (axis - step) to\n                this row's dot edge (axis - 4) or its tag slot (axis + 20)\n     drop       vertical 1px, from just under this row's dot to the row bottom\n     rail(a)    vertical 1px at (step * a + dot) for each ancestor level a\n\n   Vertical anchoring is also single-sourced: --bt-marker-y is the centre of the\n   first text line, and the fold dot box is one 28px line tall, so the dot, the\n   elbow and the drop share that y on every row height. Earlier the elbow used\n   `top: 50%` while message rows are top-aligned with 5px padding, which put the\n   line 10px below the dot on any row that wrapped to more than one line. */\n.bt_TrajectoryTable_rowLine_YOAcZR {\n  --bt-step: 26px;\n  --bt-dot: 12px;\n  --bt-pad-y: 0px;\n  --bt-axis: calc(var(--bt-step) * var(--bt-level, 0) + var(--bt-dot));\n  --bt-marker-y: calc(var(--bt-pad-y) + 14px);\n  padding-left: calc(var(--bt-step) * var(--bt-level, 0));\n  position: relative;\n}\n\n.bt_TrajectoryTable_rails_pINYyU {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_rail_IlE5vk {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  left: calc(var(--bt-step) * var(--bt-anc, 0) + var(--bt-dot));\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n}\n\n/* the last child of an ancestor stops its rail at the elbow */\n.bt_TrajectoryTable_rail_IlE5vk[data-stop] {\n  bottom: auto;\n  height: var(--bt-marker-y);\n}\n\n/* legacy per-kind pseudo rails: off, the rails span replaced them */\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::after,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::after,\ntr[data-level='1'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-level='2'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-level='3'] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: none;\n}\n\n/* elbow: nested rows, dot present \u2192 stop at the dot's outer edge */\ntr[data-has-fold]:not([data-level='0']) .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: var(--bt-marker-y);\n  left: calc(var(--bt-axis) - var(--bt-step));\n  width: 22px;\n  height: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* elbow: nested rows, no dot \u2192 run to the tag slot */\ntr:not([data-has-fold]):not([data-level='0']) .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: var(--bt-marker-y);\n  left: calc(var(--bt-axis) - var(--bt-step));\n  width: 46px;\n  height: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* elbow: root rows, from the dot's outer edge to the tag slot */\ntr[data-level='0'][data-has-fold] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: var(--bt-marker-y);\n  left: calc(var(--bt-axis) + 4px);\n  width: 16px;\n  height: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* drop: any parent row, from under its dot down to the next row */\ntr[data-has-children] .bt_TrajectoryTable_rowLine_YOAcZR::after {\n  content: '';\n  position: absolute;\n  top: calc(var(--bt-marker-y) + 5px);\n  bottom: -3px;\n  left: var(--bt-axis);\n  width: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* ===================== fold control =====================\n   The dot is an 8px SVG circle; the hit box is 24x28 \u2014 one text line tall, 24px\n   wide \u2014 so the pointer target is larger than the shape and its centre is the\n   marker y. The box is square on purpose: a 50% radius clips hit-testing back\n   into a circle and makes the corners dead. */\n.bt_TrajectoryTable_rowChevron_y6tlTP,\n.bt_TrajectoryTable_rowChevronSpace_bEB4GZ {\n  display: inline-flex;\n  flex: none;\n  align-self: flex-start;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 28px;\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP {\n  all: unset;\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  flex: none;\n  align-self: flex-start;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 24px;\n  height: 28px;\n  border-radius: 0;\n  color: var(--bt-text-3, #9aa1ab);\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP:hover {\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP:active svg {\n  transform: scale(0.86);\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP svg {\n  display: block;\n  transition: transform var(--bt-dur-2, 90ms) var(--bt-ease-std, ease);\n  transform-origin: center;\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP:focus-visible {\n  outline: 2px solid var(--bt-accent, #2563eb);\n  outline-offset: 1px;\n}\n\n/* collapsed parents stay on one line: no top padding, so the marker y is 14px */\ntr[data-collapsed='true'] .bt_TrajectoryTable_rowLine_YOAcZR {\n  --bt-pad-y: 0px;\n  height: 28px;\n  min-height: 28px;\n  padding-top: 0;\n  padding-bottom: 0;\n  align-items: center;\n}\n\ntr[data-collapsed='true'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  white-space: nowrap;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: unset;\n}\n\n/* ===================== kind tag (mirrors the native tag) =====================\n   Native source: @deepseek-ai/dsh-client-ui-trajectory TrajectoryTable.module.css\n   `.kindTag` \u2014 19px tall, 0 5px padding, 1px transparent border, radius-xs (4px),\n   10px/16px text at weight 650, letter-spacing .035em, natural width inside a\n   44px (zh) / 76px (en) slot. Colours come straight from the `--dsw-alias-*`\n   palette so light and dark both match the native view. */\n.bt_TrajectoryTable_kindSlot_0oaQf9 {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: flex-start;\n  width: 76px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9:where(:lang(zh)) {\n  width: 44px;\n}\n\n.bt_TrajectoryTable_kindPill_GnIYSX {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  box-sizing: border-box;\n  width: auto;\n  max-width: 72px;\n  height: 19px;\n  padding: 0 5px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 10px;\n  font-weight: 650;\n  line-height: 16px;\n  letter-spacing: 0.035em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  user-select: none;\n  background: var(--dsw-alias-bg-module-platform);\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_kindPill_GnIYSX[data-kind='tool'] {\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n}\n\n.bt_TrajectoryTable_kindPill_GnIYSX[data-kind='subtool'] {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-label) 62%,\n    var(--dsw-alias-label-tertiary)\n  );\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-tertiary) 58%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_kindPill_GnIYSX[data-kind='message'] {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_kindPill_GnIYSX[data-kind='user'] {\n  color: var(--dsw-alias-state-business-primary);\n  background: var(--dsw-alias-state-business-tertiary);\n}\n\n.bt_TrajectoryTable_kindPill_GnIYSX[data-kind='context'] {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="GH5K9s"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "GH5K9s");
  el.textContent = css;
  document.head.appendChild(el);
}
var TrajectoryTable_default = { "split": "bt_TrajectoryTable_split_eDViiG", "tablePane": "bt_TrajectoryTable_tablePane_KHiY-a", "historyLoading": "bt_TrajectoryTable_historyLoading_3Z7BY1", "historyLoadingBar": "bt_TrajectoryTable_historyLoadingBar_iuAaSy", "table": "bt_TrajectoryTable_table_qfAk6E", "historyLoadRow": "bt_TrajectoryTable_historyLoadRow_iZfpDw", "historyLoadButton": "bt_TrajectoryTable_historyLoadButton_kMXZ8l", "visuallyHidden": "bt_TrajectoryTable_visuallyHidden_nVQikz", "eventColumn": "bt_TrajectoryTable_eventColumn_UTt04J", "contentColumn": "bt_TrajectoryTable_contentColumn_GFcdso", "eventHeader": "bt_TrajectoryTable_eventHeader_kD88tA", "virtualSpacer": "bt_TrajectoryTable_virtualSpacer_qcuMuX", "turnRail": "bt_TrajectoryTable_turnRail_yQDSF9", "requestBoundaryControl": "bt_TrajectoryTable_requestBoundaryControl_sSuY1y", "requestBoundaryControlActive": "bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB", "event": "bt_TrajectoryTable_event_ApG3nH", "selectionRail": "bt_TrajectoryTable_selectionRail_wHs0wE", "turnLabel": "bt_TrajectoryTable_turnLabel_WNZW3a", "turnLabelFull": "bt_TrajectoryTable_turnLabelFull_WfTyoZ", "turnLabelCompact": "bt_TrajectoryTable_turnLabelCompact_bVGxV-", "turnLabelActive": "bt_TrajectoryTable_turnLabelActive_oHLGco", "eventInner": "bt_TrajectoryTable_eventInner_4FCDOJ", "kindSlot": "bt_TrajectoryTable_kindSlot_0oaQf9", "content": "bt_TrajectoryTable_content_xtMqjv", "kindTag": "bt_TrajectoryTable_kindTag_QR8Bo3", "kindTagIcon": "bt_TrajectoryTable_kindTagIcon_faG1Xu", "kindTagLabel": "bt_TrajectoryTable_kindTagLabel_DubDfc", "message": "bt_TrajectoryTable_message_Kosacf", "user": "bt_TrajectoryTable_user_EiaeE6", "systemNeutral": "bt_TrajectoryTable_systemNeutral_wBnUUo", "contextGreen": "bt_TrajectoryTable_contextGreen_b5rkgS", "compacted": "bt_TrajectoryTable_compacted_3aTcSn", "compactedSummary": "bt_TrajectoryTable_compactedSummary_ty-j09", "promptDiffSections": "bt_TrajectoryTable_promptDiffSections_v3FFVc", "promptDiffSection": "bt_TrajectoryTable_promptDiffSection_MRiY64", "promptDiffTitle": "bt_TrajectoryTable_promptDiffTitle_9JuX4g", "promptDiff": "bt_TrajectoryTable_promptDiff_VkrRb4", "promptDiffLinemeta": "bt_TrajectoryTable_promptDiffLinemeta_tLOrjX", "promptDiffLinecontext": "bt_TrajectoryTable_promptDiffLinecontext_jNpM0B", "promptDiffLineadded": "bt_TrajectoryTable_promptDiffLineadded_sSKAHi", "promptDiffLineremoved": "bt_TrajectoryTable_promptDiffLineremoved_0GLhdY", "assistantVioletBright": "bt_TrajectoryTable_assistantVioletBright_kmQW8n", "toolAmber": "bt_TrajectoryTable_toolAmber_s0U4wU", "subtoolAmber": "bt_TrajectoryTable_subtoolAmber_oyh_9d", "contentText": "bt_TrajectoryTable_contentText_W_U6-c", "toolCallOnly": "bt_TrajectoryTable_toolCallOnly_9UZkuV", "collapsedTurnContent": "bt_TrajectoryTable_collapsedTurnContent_4SL7Wn", "collapsedTurnEllipsis": "bt_TrajectoryTable_collapsedTurnEllipsis_YbEN8y", "collapsedTurnText": "bt_TrajectoryTable_collapsedTurnText_ROgIqU", "resultPreview": "bt_TrajectoryTable_resultPreview__PAl0L", "resultRequest": "bt_TrajectoryTable_resultRequest_fX5Dw2", "inlineResultText": "bt_TrajectoryTable_inlineResultText_amcgP3", "toolCallNameTypeface": "bt_TrajectoryTable_toolCallNameTypeface_mYdbmm", "toolCallPayload": "bt_TrajectoryTable_toolCallPayload_RY4mmt", "inlineResult": "bt_TrajectoryTable_inlineResult_v4z2_R", "noOutputText": "bt_TrajectoryTable_noOutputText_o_3gcc", "arrow": "bt_TrajectoryTable_arrow_bvXwEE", "error": "bt_TrajectoryTable_error_Q9RpaF", "overview": "bt_TrajectoryTable_overview_LDwNCJ", "details": "bt_TrajectoryTable_details_gIawuH", "errorPayload": "bt_TrajectoryTable_errorPayload_cgEhYc", "resultBlockText": "bt_TrajectoryTable_resultBlockText_CiMsCo", "jsonPayload": "bt_TrajectoryTable_jsonPayload_gOir54", "jsonPreview": "bt_TrajectoryTable_jsonPreview_fhOE3c", "detailsResizeHandle": "bt_TrajectoryTable_detailsResizeHandle_BpTEDx", "detailsHeader": "bt_TrajectoryTable_detailsHeader_x9S6Zm", "detailsTitle": "bt_TrajectoryTable_detailsTitle_AoviUn", "requestDetailsDot": "bt_TrajectoryTable_requestDetailsDot_gmlHKA", "requestDetailsName": "bt_TrajectoryTable_requestDetailsName_bAa9c3", "detailsLocation": "bt_TrajectoryTable_detailsLocation_J0RItF", "close": "bt_TrajectoryTable_close_XeXehI", "detailTabs": "bt_TrajectoryTable_detailTabs_gzSp2k", "detailTab": "bt_TrajectoryTable_detailTab_dnFNRF", "detailTabActive": "bt_TrajectoryTable_detailTabActive_JV0v9s", "detailBody": "bt_TrajectoryTable_detailBody_wNVH1K", "detailBodySummary": "bt_TrajectoryTable_detailBodySummary_nyRpjv", "summaryScrollRegion": "bt_TrajectoryTable_summaryScrollRegion_E9DkdV", "markdownPayload": "bt_TrajectoryTable_markdownPayload_CsUZcJ", "overviewParentLinks": "bt_TrajectoryTable_overviewParentLinks_onT3iP", "overviewHierarchyNavLink": "bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO", "overviewHierarchyJumpIconTight": "bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK", "requestTokenDetail": "bt_TrajectoryTable_requestTokenDetail_3wWQOZ", "usagePanel": "bt_TrajectoryTable_usagePanel_IBopaB", "usageGroup": "bt_TrajectoryTable_usageGroup_xuIa90", "usageHeading": "bt_TrajectoryTable_usageHeading_wqSwmH", "timestampToggle": "bt_TrajectoryTable_timestampToggle_OOUyti", "overviewSections": "bt_TrajectoryTable_overviewSections_G30n5s", "overviewSection": "bt_TrajectoryTable_overviewSection_UMbxN0", "overviewHeading": "bt_TrajectoryTable_overviewHeading_9tOPuW", "resultSections": "bt_TrajectoryTable_resultSections_RGuWZ5", "resultSection": "bt_TrajectoryTable_resultSection_Cg3eWv", "resultBlocks": "bt_TrajectoryTable_resultBlocks_9td9Kg", "payload": "bt_TrajectoryTable_payload_zRquMY", "noPayload": "bt_TrajectoryTable_noPayload_7dMYrF", "resultTitle": "bt_TrajectoryTable_resultTitle_pFvVxk", "overviewTitle": "bt_TrajectoryTable_overviewTitle_fQhguD", "overviewTitleIcon": "bt_TrajectoryTable_overviewTitleIcon_jb5JXE", "overviewPreview": "bt_TrajectoryTable_overviewPreview_IYUxsr", "programDescription": "bt_TrajectoryTable_programDescription_RrDf1J", "programIcon": "bt_TrajectoryTable_programIcon_CP_h94", "programSummary": "bt_TrajectoryTable_programSummary_YiCTkq", "detailBodyProgram": "bt_TrajectoryTable_detailBodyProgram_74PHCq", "programPanel": "bt_TrajectoryTable_programPanel_XIc3sM", "programActions": "bt_TrajectoryTable_programActions_JqbwEp", "programLanguage": "bt_TrajectoryTable_programLanguage_lCq8AA", "programAction": "bt_TrajectoryTable_programAction_5AWzqe", "programContent": "bt_TrajectoryTable_programContent_mr8JT_", "programSource": "bt_TrajectoryTable_programSource_84M3Ez", "programOutput": "bt_TrajectoryTable_programOutput_Og2Bj5", "programError": "bt_TrajectoryTable_programError_3hMSz7", "schemaTree": "bt_TrajectoryTable_schemaTree_3maIWU", "markdownPreview": "bt_TrajectoryTable_markdownPreview_uI4YWV", "assistantContent": "bt_TrajectoryTable_assistantContent_AG912s", "thinkingQuote": "bt_TrajectoryTable_thinkingQuote_8bhmqn", "thinkingQuoteOnlyPreview": "bt_TrajectoryTable_thinkingQuoteOnlyPreview_-qIaDn", "assistantContentRendered": "bt_TrajectoryTable_assistantContentRendered_d98IKn", "thinkingToggle": "bt_TrajectoryTable_thinkingToggle_JW9hdK", "thinkingChevron": "bt_TrajectoryTable_thinkingChevron_mBPwJ3", "assistantOutput": "bt_TrajectoryTable_assistantOutput_e6Ffzt", "schema": "bt_TrajectoryTable_schema_2cLtnU", "schemaPreview": "bt_TrajectoryTable_schemaPreview_rNQTYn", "schemaIntro": "bt_TrajectoryTable_schemaIntro_HUQtip", "schemaName": "bt_TrajectoryTable_schemaName_4ZiI8h", "schemaDescription": "bt_TrajectoryTable_schemaDescription__yqKqT", "schemaParameters": "bt_TrajectoryTable_schemaParameters_WkpZiK", "schemaParametersTitle": "bt_TrajectoryTable_schemaParametersTitle_n3IAot", "payloadPreview": "bt_TrajectoryTable_payloadPreview_EAdNGv", "sourceBlocks": "bt_TrajectoryTable_sourceBlocks_C6ZrYe", "sourceBlock": "bt_TrajectoryTable_sourceBlock_xUq4zJ", "sourceBlockHeader": "bt_TrajectoryTable_sourceBlockHeader_a8uXfy", "sourceBlockJumpTarget": "bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV", "sourceBlockLabel": "bt_TrajectoryTable_sourceBlockLabel_LH3cfA", "sourceBlockJumpIcon": "bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK", "sourceBlockContent": "bt_TrajectoryTable_sourceBlockContent_XoJ0B7", "messageImages": "bt_TrajectoryTable_messageImages_RfKfdd", "attachments": "bt_TrajectoryTable_attachments_E96dbm", "attachmentsPreview": "bt_TrajectoryTable_attachmentsPreview_NcR8cV", "attachmentRow": "bt_TrajectoryTable_attachmentRow_oUBiDA", "attachmentIcon": "bt_TrajectoryTable_attachmentIcon_UKoXGL", "attachmentInfo": "bt_TrajectoryTable_attachmentInfo_VyRFuz", "attachmentName": "bt_TrajectoryTable_attachmentName_Uk44An", "attachmentMetadata": "bt_TrajectoryTable_attachmentMetadata_IzXL36", "attachmentDisclosure": "bt_TrajectoryTable_attachmentDisclosure_OrBVJM", "assistantToolCalls": "bt_TrajectoryTable_assistantToolCalls_LlhL2V", "assistantToolCallsPreview": "bt_TrajectoryTable_assistantToolCallsPreview_cSQzRY", "assistantToolCallButton": "bt_TrajectoryTable_assistantToolCallButton_LVT7_h", "assistantToolCallIcon": "bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ", "assistantToolCallText": "bt_TrajectoryTable_assistantToolCallText_4cwwa2", "assistantToolCallName": "bt_TrajectoryTable_assistantToolCallName_TyR0np", "assistantToolCallArgs": "bt_TrajectoryTable_assistantToolCallArgs_WFp7dp", "systemPrompt": "bt_TrajectoryTable_systemPrompt_-3xuek", "toolCatalog": "bt_TrajectoryTable_toolCatalog_kYbj8S", "toolCatalogItem": "bt_TrajectoryTable_toolCatalogItem_cGDuCI", "toolCatalogSummary": "bt_TrajectoryTable_toolCatalogSummary_SrfhkT", "toolCatalogChevron": "bt_TrajectoryTable_toolCatalogChevron_j04Bh4", "toolCatalogIcon": "bt_TrajectoryTable_toolCatalogIcon_4W2aYB", "toolCatalogName": "bt_TrajectoryTable_toolCatalogName_vJfIBm", "toolCatalogDescription": "bt_TrajectoryTable_toolCatalogDescription_q6Kjej", "toolCatalogDefinition": "bt_TrajectoryTable_toolCatalogDefinition_E4Icq4", "toolCatalogFullDescription": "bt_TrajectoryTable_toolCatalogFullDescription_SjSY7e", "toolCatalogTree": "bt_TrajectoryTable_toolCatalogTree_hAboUq", "resultBlocksPreview": "bt_TrajectoryTable_resultBlocksPreview_WVjKr4", "toolUpdatePayload": "bt_TrajectoryTable_toolUpdatePayload_qTnDiO", "detailChips": "bt_TrajectoryTable_detailChips_eYfgWR", "detailChip": "bt_TrajectoryTable_detailChip_EqVaho", "detailChipIdentity": "bt_TrajectoryTable_detailChipIdentity_Ju3zRj", "detailChipValue": "bt_TrajectoryTable_detailChipValue_UoJuS-", "detailChipLabel": "bt_TrajectoryTable_detailChipLabel_HgoUX8", "errorPanel": "bt_TrajectoryTable_errorPanel_Z8NaAN", "errorBanner": "bt_TrajectoryTable_errorBanner_XxDyjs", "errorDot": "bt_TrajectoryTable_errorDot_mTMWq-", "errorCopy": "bt_TrajectoryTable_errorCopy_BdAfyA", "errorBody": "bt_TrajectoryTable_errorBody_2NOTYq", "rowStack": "bt_TrajectoryTable_rowStack_AaX-1p", "rowMeta": "bt_TrajectoryTable_rowMeta_3HQb2i", "rowTime": "bt_TrajectoryTable_rowTime_mPtQDP", "rowDuration": "bt_TrajectoryTable_rowDuration_7Hr9z2", "hiddenHintRow": "bt_TrajectoryTable_hiddenHintRow_SL9o6c", "hiddenHintCell": "bt_TrajectoryTable_hiddenHintCell_3kagUb", "hiddenHintText": "bt_TrajectoryTable_hiddenHintText_99AuHD", "hiddenHintButton": "bt_TrajectoryTable_hiddenHintButton_MLp-CC", "rowClock": "bt_TrajectoryTable_rowClock_gzwpBP", "rowLine": "bt_TrajectoryTable_rowLine_YOAcZR", "rowSub": "bt_TrajectoryTable_rowSub_0f1fRA", "rowName": "bt_TrajectoryTable_rowName_6wzz5H", "rowBadge": "bt_TrajectoryTable_rowBadge_pPrItT", "rowBarWrap": "bt_TrajectoryTable_rowBarWrap_qpJNU9", "rowBar": "bt_TrajectoryTable_rowBar_7kRLZ3", "rowMs": "bt_TrajectoryTable_rowMs_JIpaaL", "bt-detail-in": "bt_TrajectoryTable_bt-detail-in_boZx8U", "skeletonPane": "bt_TrajectoryTable_skeletonPane_8Bbpg8", "skeletonRow": "bt_TrajectoryTable_skeletonRow__ffu6X", "bt-shimmer": "bt_TrajectoryTable_bt-shimmer_7WxuGj", "emptyRow": "bt_TrajectoryTable_emptyRow_mrRJOS", "emptyCell": "bt_TrajectoryTable_emptyCell_qLI1gw", "emptyAction": "bt_TrajectoryTable_emptyAction_GuJ5ND", "turnMarker": "bt_TrajectoryTable_turnMarker_P4Db4Z", "turnMarkerLabel": "bt_TrajectoryTable_turnMarkerLabel_fl2CVN", "hoverCard": "bt_TrajectoryTable_hoverCard_72nlxN", "bt-card-in": "bt_TrajectoryTable_bt-card-in_jIiR6X", "hoverHead": "bt_TrajectoryTable_hoverHead_D7ULD1", "hoverName": "bt_TrajectoryTable_hoverName_r4OD3A", "hoverGrid": "bt_TrajectoryTable_hoverGrid_9D9_Nv", "hoverArgs": "bt_TrajectoryTable_hoverArgs_MWXGwA", "hoverHint": "bt_TrajectoryTable_hoverHint_rCVokh", "hoverActions": "bt_TrajectoryTable_hoverActions_pAodZY", "hoverAction": "bt_TrajectoryTable_hoverAction_08PSsd", "hoverKey": "bt_TrajectoryTable_hoverKey_RaXgA3", "hoverClose": "bt_TrajectoryTable_hoverClose_ZmsOU8", "foldedPill": "bt_TrajectoryTable_foldedPill_Vdw4eC", "foldGroup": "bt_TrajectoryTable_foldGroup_TRT3uh", "foldChip": "bt_TrajectoryTable_foldChip__T1yva", "rails": "bt_TrajectoryTable_rails_pINYyU", "rail": "bt_TrajectoryTable_rail_IlE5vk", "rowChevron": "bt_TrajectoryTable_rowChevron_y6tlTP", "rowChevronSpace": "bt_TrajectoryTable_rowChevronSpace_bEB4GZ", "kindPill": "bt_TrajectoryTable_kindPill_GnIYSX" };

// src/vendor/trajectory/RawDataPanel.tsx
var import_react = require("react");

// src/vendor/trajectory/RawDataPanel.module.css
var css2 = ".bt_RawDataPanel_root_Y2bQ0h {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  height: 100%;\n}\n\n.bt_RawDataPanel_toolbar_bEEotQ {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--bt-line, #e6e8eb);\n}\n\n.bt_RawDataPanel_search_LpZE-Z {\n  flex: 1;\n  min-width: 80px;\n  height: 24px;\n  padding: 0 6px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 5px;\n  background: var(--bt-surface-2, #f6f7f9);\n  color: var(--bt-text, #1c2128);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11px;\n  outline: 0;\n}\n\n.bt_RawDataPanel_search_LpZE-Z:focus {\n  border-color: var(--bt-accent, #2563eb);\n  background: var(--bt-surface, #fff);\n}\n\n.bt_RawDataPanel_button_9phG6G {\n  height: 24px;\n  padding: 0 6px;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  background: transparent;\n  color: var(--bt-text-2, #5b6470);\n  font-size: 11px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.bt_RawDataPanel_button_9phG6G:hover {\n  border-color: var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.15));\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_RawDataPanel_count_Q1ZXWG {\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 10.5px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.bt_RawDataPanel_tree_NxbYLV {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  padding: 6px 8px 12px;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n  line-height: 1.65;\n}\n\n.bt_RawDataPanel_node_j5q0Bh {\n  min-width: 0;\n}\n\n.bt_RawDataPanel_line_PKf3-X {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n  min-width: 0;\n}\n\n.bt_RawDataPanel_line_PKf3-X:hover {\n  background: var(--bt-surface-2, #f6f7f9);\n}\n\n.bt_RawDataPanel_chevron_OTeCv8,\n.bt_RawDataPanel_chevronSpace_gCeJA0 {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  border: 0;\n  background: transparent;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 9px;\n  line-height: 1;\n  cursor: pointer;\n  transform: rotate(0deg);\n  transition: transform 0.12s ease;\n}\n\n.bt_RawDataPanel_chevron_OTeCv8[data-open] {\n  transform: rotate(90deg);\n}\n\n.bt_RawDataPanel_key_R5aarC {\n  color: var(--dsw-alias-label-secondary, #5b6470);\n  white-space: nowrap;\n}\n\n.bt_RawDataPanel_colon_VAxmIY {\n  color: var(--dsw-alias-label-tertiary, #aaa);\n  margin-right: 3px;\n}\n\n.bt_RawDataPanel_branch_FkE2mk {\n  color: var(--bt-text-3, #9aa1ab);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.bt_RawDataPanel_children_VIrebH {\n  margin-left: 9px;\n  padding-left: 7px;\n  border-left: 1px solid var(--bt-line-soft, #f0f2f4);\n}\n\n.bt_RawDataPanel_string_uHs8mq {\n  color: #b4442f;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n  min-width: 0;\n}\n\n.bt_RawDataPanel_number_yTg2YX {\n  color: #2f6fb4;\n}\n\n.bt_RawDataPanel_boolean_K6tcnF {\n  color: #7a4fbf;\n}\n\n.bt_RawDataPanel_null_CY1cQs,\n.bt_RawDataPanel_other_gg6sEF {\n  color: var(--bt-text-3, #9aa1ab);\n}\n\n.bt_RawDataPanel_copy_0sMLmq {\n  border: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary, #bbb);\n  font-size: 10px;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.bt_RawDataPanel_line_PKf3-X:hover .bt_RawDataPanel_copy_0sMLmq {\n  opacity: 1;\n}\n\n.bt_RawDataPanel_copy_0sMLmq:hover {\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_RawDataPanel_inlineButton_DcrRfC {\n  margin-left: 4px;\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  font-size: 10.5px;\n  cursor: pointer;\n  padding: 0;\n}\n\n.bt_RawDataPanel_loadMore_jUiz3C {\n  margin: 2px 0 2px 14px;\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  font-size: 11px;\n  cursor: pointer;\n  padding: 0;\n}";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="36VVuU"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "36VVuU");
  el.textContent = css2;
  document.head.appendChild(el);
}
var RawDataPanel_default = { "root": "bt_RawDataPanel_root_Y2bQ0h", "toolbar": "bt_RawDataPanel_toolbar_bEEotQ", "search": "bt_RawDataPanel_search_LpZE-Z", "button": "bt_RawDataPanel_button_9phG6G", "count": "bt_RawDataPanel_count_Q1ZXWG", "tree": "bt_RawDataPanel_tree_NxbYLV", "node": "bt_RawDataPanel_node_j5q0Bh", "line": "bt_RawDataPanel_line_PKf3-X", "chevron": "bt_RawDataPanel_chevron_OTeCv8", "chevronSpace": "bt_RawDataPanel_chevronSpace_gCeJA0", "key": "bt_RawDataPanel_key_R5aarC", "colon": "bt_RawDataPanel_colon_VAxmIY", "branch": "bt_RawDataPanel_branch_FkE2mk", "children": "bt_RawDataPanel_children_VIrebH", "string": "bt_RawDataPanel_string_uHs8mq", "number": "bt_RawDataPanel_number_yTg2YX", "boolean": "bt_RawDataPanel_boolean_K6tcnF", "null": "bt_RawDataPanel_null_CY1cQs", "other": "bt_RawDataPanel_other_gg6sEF", "copy": "bt_RawDataPanel_copy_0sMLmq", "inlineButton": "bt_RawDataPanel_inlineButton_DcrRfC", "loadMore": "bt_RawDataPanel_loadMore_jUiz3C" };

// src/vendor/trajectory/RawDataPanel.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var MAX_PREVIEW = 220;
var ARRAY_PAGE = 50;
function kindOf(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  switch (typeof value) {
    case "object":
      return "object";
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    default:
      return "other";
  }
}
function entriesOf(value) {
  if (Array.isArray(value)) return value.map((item, index) => [String(index), item]);
  if (typeof value === "object" && value !== null) return Object.entries(value);
  return [];
}
function matchPaths(value, term, path, out) {
  const kind = kindOf(value);
  let hit = false;
  if (kind === "array" || kind === "object") {
    for (const [key, child] of entriesOf(value)) {
      const childPath = `${path}/${key}`;
      const childHit = matchPaths(child, term, childPath, out);
      if (childHit || key.toLowerCase().includes(term)) {
        out.add(childPath);
        hit = true;
      }
    }
  }
  if (!hit && (kind === "string" || kind === "number" || kind === "boolean")) {
    hit = String(value).toLowerCase().includes(term);
  }
  if (hit) out.add(path);
  return hit;
}
function preview(value) {
  const kind = kindOf(value);
  if (kind === "array") return `[ ${value.length} items ]`;
  if (kind === "object") return `{ ${Object.keys(value).length} items }`;
  return "";
}
function Leaf({ value, qt }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const kind = kindOf(value);
  if (kind === "string") {
    const long = value.length > MAX_PREVIEW;
    const shown = open || !long ? value : `${value.slice(0, MAX_PREVIEW)}\u2026`;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: RawDataPanel_default.string, children: [
      '"',
      shown,
      '"',
      long && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: RawDataPanel_default.inlineButton, onClick: () => setOpen((v) => !v), children: open ? qt("raw.less") : qt("raw.more") })
    ] });
  }
  if (kind === "number") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.number, children: String(value) });
  if (kind === "boolean") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.boolean, children: String(value) });
  if (kind === "null") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.null, children: "null" });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.other, children: String(value) });
}
function Node2({
  name: name2,
  value,
  path,
  depth,
  expanded,
  toggle,
  term,
  qt
}) {
  const kind = kindOf(value);
  const branch = kind === "array" || kind === "object";
  const isOpen = expanded.has(path);
  const [limit, setLimit] = (0, import_react.useState)(ARRAY_PAGE);
  const entries = branch ? entriesOf(value) : [];
  const shown = entries.slice(0, limit);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: RawDataPanel_default.node, "data-depth": depth, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: RawDataPanel_default.line, "data-path": path, children: [
      branch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: RawDataPanel_default.chevron, "data-open": isOpen || void 0, onClick: () => toggle(path), "aria-label": isOpen ? qt("raw.collapse") : qt("raw.expand"), children: "\u25B8" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.chevronSpace }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.key, children: name2 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.colon, children: ":" }),
      branch ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: RawDataPanel_default.branch, children: [
        preview(value),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            className: RawDataPanel_default.copy,
            title: qt("raw.copy"),
            onClick: () => {
              void navigator.clipboard?.writeText(JSON.stringify(value, null, 2));
            },
            children: "\u29C9"
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { value, qt })
    ] }),
    branch && isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: RawDataPanel_default.children, children: [
      shown.map(([key, child]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Node2,
        {
          name: key,
          value: child,
          path: `${path}/${key}`,
          depth: depth + 1,
          expanded,
          toggle,
          term,
          qt
        },
        `${path}/${key}`
      )),
      entries.length > limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: RawDataPanel_default.loadMore, onClick: () => setLimit((v) => v + ARRAY_PAGE), children: qt("raw.loadMore", { count: entries.length - limit }) })
    ] })
  ] });
}
function RawDataPanel({ data, qt }) {
  const [term, setTerm] = (0, import_react.useState)("");
  const [expanded, setExpanded] = (0, import_react.useState)(() => /* @__PURE__ */ new Set([""]));
  const query = term.trim().toLowerCase();
  const matched = (0, import_react.useMemo)(() => {
    if (query === "") return null;
    const set = /* @__PURE__ */ new Set();
    matchPaths(data, query, "", set);
    return set;
  }, [data, query]);
  const visible = (0, import_react.useMemo)(() => {
    if (matched === null) return expanded;
    const next = new Set(expanded);
    for (const path of matched) {
      const parts = path.split("/").filter(Boolean);
      let prefix = "";
      for (const part of parts) {
        prefix = `${prefix}/${part}`;
        next.add(prefix);
      }
      next.add("");
    }
    return next;
  }, [expanded, matched]);
  const toggle = (path) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };
  const expandAll = () => {
    const next = /* @__PURE__ */ new Set([""]);
    const walk = (value, path) => {
      for (const [key, child] of entriesOf(value)) {
        const childPath = `${path}/${key}`;
        if (kindOf(child) === "object" || kindOf(child) === "array") {
          next.add(childPath);
          walk(child, childPath);
        }
      }
    };
    walk(data, "");
    setExpanded(next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: RawDataPanel_default.root, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: RawDataPanel_default.toolbar, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          className: RawDataPanel_default.search,
          value: term,
          placeholder: qt("raw.search"),
          spellCheck: false,
          onChange: (event) => setTerm(event.currentTarget.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: RawDataPanel_default.button, onClick: expandAll, children: qt("raw.expandAll") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: RawDataPanel_default.button, onClick: () => setExpanded(/* @__PURE__ */ new Set([""])), children: qt("raw.collapseAll") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: RawDataPanel_default.button, onClick: () => {
        void navigator.clipboard?.writeText(JSON.stringify(data, null, 2));
      }, children: qt("raw.copyAll") }),
      matched !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: RawDataPanel_default.count, children: qt("raw.matches", { count: matched.size }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: RawDataPanel_default.tree, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node2, { name: "root", value: data, path: "", depth: 0, expanded: visible, toggle, term: query, qt }) })
  ] });
}

// src/vendor/trajectory/TrajectoryTable.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
function ChevronIcon({ open }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", style: { display: "block" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "circle",
    {
      cx: "8",
      cy: "8",
      r: "4",
      fill: open ? "none" : "currentColor",
      stroke: "currentColor",
      strokeWidth: "1.6"
    }
  ) });
}
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
var DETAILS_MIN_WIDTH = 360;
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
function compactDuration(milliseconds) {
  if (milliseconds < 1e3) return `${Math.round(milliseconds)}ms`;
  const seconds = milliseconds / 1e3;
  return `${seconds < 10 ? seconds.toFixed(1) : Math.round(seconds)}s`;
}
function formatClock(timestamp) {
  if (timestamp === null || timestamp === void 0) return "";
  try {
    return new Date(timestamp).toLocaleTimeString(void 0, { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
  } catch {
    return "";
  }
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
  if (timestamp === null || !Number.isFinite(timestamp)) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("timing.notAvailable") });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StartedAtValue, { timestamp: metrics.stepStartTime, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.totalDuration") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: totalTime(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.ttft") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: ttft(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.generation") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: generationTime(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.throughput") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: throughput(metrics, t) })
    ] })
  ] });
}
function flattenRecords(turns) {
  let groupIndex = -1;
  return turns.flatMap((turn, section) => {
    let firstInSection = true;
    const records = turn.groups.flatMap((group) => {
      groupIndex += 1;
      return group.cells.map((cell, index) => {
        const turnStart = firstInSection && cell.requestOnly !== true && cell.kind !== "system" && (cell.kind !== "compacted" || turn.turn === null);
        if (turnStart) firstInSection = false;
        return {
          turn: turn.turn,
          section,
          group: group.title,
          groupIndex,
          groupStart: index === 0,
          turnStart,
          cell,
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
function TokenRows({ cell, t }) {
  const content = cell.output !== void 0 && cell.think !== void 0 ? Math.max(0, cell.output - cell.think) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.tokens") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: cell.output === void 0 ? "\u2014" : t("unit.tokens", { value: cell.output }) })
    ] }),
    cell.think !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.reasoning") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: cell.think }) })
    ] }),
    content !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.content") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: content }) })
    ] })
  ] });
}
function inputTotal(usage) {
  if (usage.input === void 0 && usage.cacheRead === void 0 && usage.cacheWrite === void 0) return void 0;
  return (usage.input ?? 0) + (usage.cacheRead ?? 0) + (usage.cacheWrite ?? 0);
}
function UsageRows({ usage, t }) {
  if (usage === void 0) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("usage.notReported") });
  const totalInput = inputTotal(usage);
  const otherOutput = usage.output !== void 0 && usage.reasoning !== void 0 ? usage.output - usage.reasoning : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    totalInput !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.input") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: totalInput }) })
    ] }),
    usage.cacheRead !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.cached") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: usage.cacheRead }) })
    ] }),
    usage.cacheWrite !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.cacheCreated") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: usage.cacheWrite }) })
    ] }),
    usage.input !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.other") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: usage.input }) })
    ] }),
    usage.output !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.output") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: usage.output }) })
    ] }),
    usage.reasoning !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.reasoning") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: usage.reasoning }) })
    ] }),
    otherOutput !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.requestTokenDetail, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.content") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("unit.tokens", { value: otherOutput }) })
    ] })
  ] });
}
function RequestUsagePanel({
  usage,
  cumulative,
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.usagePanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.usageGroup, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: TrajectoryTable_default.usageHeading, children: t("usage.thisRequest") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UsageRows, { usage, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.usageGroup, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: TrajectoryTable_default.usageHeading, children: t("usage.sessionCumulative") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UsageRows, { usage: cumulative, t })
    ] })
  ] });
}
function RequestOptions({
  options,
  preview: preview2 = false,
  stringWrapping,
  t
}) {
  if (options === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("options.notRecorded") });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_dsh_client_ui_primitives2.JsonTree,
    {
      data: options,
      stringWrapping,
      collapsedStringLines: preview2 ? 3 : 12,
      label: t("options.json"),
      labels: jsonTreeLabels(t),
      className: preview2 ? TrajectoryTable_default.jsonPreview : TrajectoryTable_default.jsonPayload
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
  if (source === void 0) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("source.notRecorded") });
  const data = typeof source === "object" && source !== null ? source : { value: source };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
function parseMaybeJson(text) {
  if (text === void 0 || text === "") return void 0;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
function rawDataFor(record2) {
  const cell = record2.cell;
  const data = {
    kind: cell.kind,
    tool: cell.toolName ?? null,
    callId: cell.callId ?? null,
    status: cell.isError ? "error" : "ok",
    turn: record2.turn,
    group: record2.group,
    durationMs: cell.timeSeconds === null ? null : Math.round(cell.timeSeconds * 1e3)
  };
  const args = parseMaybeJson(cell.inputDetail);
  if (args !== void 0) data.args = args;
  const result = parseMaybeJson(cell.outputDetail ?? cell.result);
  if (result !== void 0) data.result = result;
  const schema = parseMaybeJson(cell.schemaDetail);
  if (schema !== void 0) data.schema = schema;
  return data;
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
  if (record2.cell.kind === "tool" || record2.cell.kind === "subtool") {
    return [
      { id: "overview", labelKey: "tab.summary" },
      ...record2.cell.inputDetail ? [{ id: "input", labelKey: "tab.payload" }] : [],
      ...record2.cell.outputDetail || record2.cell.result ? [{ id: "output", labelKey: "tab.result" }] : [],
      ...record2.cell.isError ? [{ id: "error", labelKey: "tab.error", custom: true }] : [],
      { id: "data", labelKey: "tab.rawData", custom: true }
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
function recordDisplayText(cell, t) {
  if (isToolCallOnly(cell, t)) return "";
  const program = codeProgram(cell);
  if (program !== void 0) return `${PTC_TOOL_NAME} \xB7 ${program.description.replace(/\s+/g, " ")}`;
  if (cell.previewMarkdown !== void 0) {
    const preview2 = trajectoryPreviewText(cell.previewMarkdown);
    if (cell.text === "") return preview2;
    return preview2 === "" ? cell.text : `${cell.text} \xB7 ${preview2}`;
  }
  if (cell.text !== "") return cell.text;
  const markdown = cell.kind === "user" || cell.kind === "context" ? cell.inputDetail : cell.kind === "message" ? cell.outputDetail ?? cell.thinkingDetail : void 0;
  return markdown === void 0 ? "" : trajectoryPreviewText(markdown);
}
function recordResultText(cell) {
  return cell.resultPreviewMarkdown === void 0 ? cell.result : trajectoryPreviewText(cell.resultPreviewMarkdown);
}
function toolCallTextParts(cell, text) {
  if (cell.kind !== "tool" && cell.kind !== "subtool") return void 0;
  const program = cell.toolName === PTC_TOOL_NAME;
  const separator = text.indexOf(" \xB7 ");
  if (separator === -1) return { name: text, program };
  return {
    program,
    name: text.slice(0, separator),
    args: text.slice(separator + 3)
  };
}
function isToolCallOnly(cell, t) {
  return cell.kind === "message" && !cell.outputDetail && !cell.thinkingDetail && cell.text === t("layout.toolCallOnly");
}
function RecordPresentation({
  cell,
  children,
  t
}) {
  const displayText = (0, import_react2.useMemo)(
    () => recordDisplayText(cell, t),
    [
      cell.kind,
      cell.text,
      cell.toolName,
      cell.previewMarkdown,
      cell.inputDetail,
      cell.outputDetail,
      cell.thinkingDetail,
      t
    ]
  );
  const resultText = (0, import_react2.useMemo)(
    () => recordResultText(cell),
    [cell.result, cell.resultPreviewMarkdown]
  );
  const toolCallOnly = isToolCallOnly(cell, t);
  const toolCallText = toolCallTextParts(cell, displayText);
  const listDisplayText = toolCallOnly ? t("record.toolCallOnly") : toolCallText === void 0 ? displayText : [toolCallText.name, toolCallText.args].filter(Boolean).join(" ");
  return children({
    displayText,
    listDisplayText,
    resultText,
    toolCallOnly,
    toolCallText
  });
}
function MarkdownFragment({
  text,
  rendered,
  preview: preview2,
  variant = "body",
  t
}) {
  const labels = (0, import_react2.useMemo)(() => markdownLabels(t), [t]);
  if (rendered) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: preview2 ? TrajectoryTable_default.markdownPreview : TrajectoryTable_default.markdownPayload, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.MarkdownText, { text, labels, variant }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${preview2 ? TrajectoryTable_default.payloadPreview : ""}`, children: text });
}
function SourceBlocks({
  blocks,
  onOpenCall,
  t
}) {
  const attachments = new Map(recordAttachments(blocks, t).map((entry) => [entry.index, entry]));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.sourceBlocks, children: blocks.map((block, index) => {
    const attachment = attachments.get(index);
    return attachment !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("details", { className: TrajectoryTable_default.attachmentDisclosure, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.attachmentName, title: attachment.name, children: attachment.name })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: TrajectoryTable_default.sourceBlockContent, children: block.content })
    ] }, index) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.sourceBlock, children: [
      block.callId !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.sourceBlockJumpIcon, size: 12 })
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.sourceBlockHeader, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: TrajectoryTable_default.sourceBlockContent, children: block.content })
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
  preview: preview2,
  renderSlot,
  loadImage,
  t
}) {
  const attachments = recordAttachments(blocks, t);
  if (attachments.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "ul",
    {
      className: preview2 ? `${TrajectoryTable_default.attachments} ${TrajectoryTable_default.attachmentsPreview}` : TrajectoryTable_default.attachments,
      "aria-label": t("attachment.list"),
      children: attachments.map(({ block, index, name: name2, metadata }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: TrajectoryTable_default.attachmentRow, children: [
        block.attachment !== void 0 ? renderSlot("conversation.trajectory.images", {
          images: [{ attachment: block.attachment, label: name2 }],
          align: "start",
          thumbnail: true,
          loadImage
        }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.attachmentIcon, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.FileTypeIcon, { path: name2 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.attachmentInfo, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.attachmentName, title: name2, children: name2 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.attachmentMetadata, children: metadata })
        ] })
      ] }, index))
    }
  );
}
function AssistantToolCalls({
  blocks,
  preview: preview2,
  onOpenCall,
  t
}) {
  const calls = blocks?.filter((block) => block.type === "tool-call") ?? [];
  if (calls.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "ul",
    {
      className: preview2 ? `${TrajectoryTable_default.assistantToolCalls} ${TrajectoryTable_default.assistantToolCallsPreview}` : TrajectoryTable_default.assistantToolCalls,
      children: calls.map((call, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          className: TrajectoryTable_default.assistantToolCallButton,
          title: t("block.openSummaryTitle"),
          onClick: () => {
            if (call.callId !== void 0) onOpenCall(call.callId);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "svg",
              {
                className: TrajectoryTable_default.assistantToolCallIcon,
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.assistantToolCallText, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.assistantToolCallName, children: call.toolName ?? t("details.toolCall") }),
              call.content !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.assistantToolCallArgs, children: call.content })
            ] })
          ]
        }
      ) }, call.callId ?? index))
    }
  );
}
function ToolGlyph() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "svg",
    {
      className: TrajectoryTable_default.toolCatalogIcon,
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  if (tools.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.toolsMissing") });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.toolCatalog, children: tools.map((tool, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("details", { className: TrajectoryTable_default.toolCatalogItem, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("summary", { className: TrajectoryTable_default.toolCatalogSummary, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.toolCatalogChevron, size: 12 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToolGlyph, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.toolCatalogName, children: tool.name }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.toolCatalogDescription, children: tool.description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.toolCatalogDefinition, children: [
      tool.description !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.toolCatalogFullDescription, children: tool.description }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.promptDiffSection, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: TrajectoryTable_default.promptDiffTitle, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: TrajectoryTable_default.promptDiff, children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default[`promptDiffLine${line.kind}`], children: [
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.promptDiffSections, children: [
    before.system !== after.system && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      PromptDiffSection,
      {
        title: t("record.systemPrompt"),
        before: before.system,
        after: after.system
      }
    ),
    toolsBefore !== toolsAfter && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  preview: preview2,
  renderSlot,
  loadImage
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: [
        TrajectoryTable_default.resultBlocks,
        preview2 ? TrajectoryTable_default.resultBlocksPreview : void 0,
        error ? TrajectoryTable_default.errorPayload : void 0
      ].filter((value) => value !== void 0).join(" "),
      children: [
        error && errorDetail !== void 0 && errorDetail !== "" && !blocks.some((block) => block.type === "text" && block.content !== "") && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: TrajectoryTable_default.resultBlockText, children: errorDetail }),
        blocks.map((block, index) => block.attachment !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.messageImages, children: renderSlot("conversation.trajectory.images", { images: [{ attachment: block.attachment }], align: "start", loadImage }) }, index) : block.content !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: TrajectoryTable_default.resultBlockText, children: block.content }, index) : null)
      ]
    }
  );
}
function MarkdownRecordContent({
  record: record2,
  rendered,
  preview: preview2 = false,
  thinkingExpanded,
  onThinkingExpandedChange,
  onOpenCall,
  renderSlot,
  loadImage,
  t
}) {
  if (record2.cell.sourceBlocks?.length && record2.cell.sourceBlocks.every((block) => block.type === "tool-addition" || block.type === "tool-removal")) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${TrajectoryTable_default.toolUpdatePayload}`, children: record2.cell.inputDetail });
  }
  if (!rendered && record2.cell.sourceBlocks && record2.cell.sourceBlocks.length > 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MarkdownFragment, { text: source2, rendered: false, preview: preview2, t });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `${TrajectoryTable_default.assistantContent} ${TrajectoryTable_default.assistantContentRendered}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          className: preview2 && !record2.cell.outputDetail ? `${TrajectoryTable_default.thinkingQuote} ${TrajectoryTable_default.thinkingQuoteOnlyPreview}` : TrajectoryTable_default.thinkingQuote,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.thinkingChevron, size: 12 })
                ]
              }
            ),
            thinkingExpanded && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              MarkdownFragment,
              {
                text: record2.cell.thinkingDetail,
                rendered,
                preview: preview2,
                variant: "compact",
                t
              }
            )
          ]
        }
      ),
      record2.cell.outputDetail && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.assistantOutput, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        MarkdownFragment,
        {
          text: record2.cell.outputDetail,
          rendered,
          preview: preview2,
          t
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        AssistantToolCalls,
        {
          blocks: record2.cell.sourceBlocks,
          preview: preview2,
          onOpenCall,
          t
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        RecordAttachments,
        {
          blocks: record2.cell.sourceBlocks,
          preview: preview2,
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: emptyLabel });
  }
  if (!rendered || !hasAttachments && !hasToolCalls) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MarkdownFragment, { text: source ?? "", rendered, preview: preview2, t });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    source && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MarkdownFragment, { text: source, rendered: true, preview: preview2, t }),
    record2.cell.kind === "message" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      AssistantToolCalls,
      {
        blocks: record2.cell.sourceBlocks,
        preview: preview2,
        onOpenCall,
        t
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      RecordAttachments,
      {
        blocks: record2.cell.sourceBlocks,
        preview: preview2,
        renderSlot,
        loadImage,
        t
      }
    )
  ] });
}
function RecordTiming({
  record: record2,
  preview: preview2 = false,
  t
}) {
  return record2.cell.kind === "message" && record2.cell.assistantMetrics !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AssistantTimingPanel, { metrics: record2.cell.assistantMetrics, t }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StartedAtValue, { timestamp: record2.cell.startedAt ?? null, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.duration") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: formatElapsedSeconds(record2.cell.timeSeconds, t) })
    ] }),
    !preview2 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.source") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: record2.cell.timeSeconds === null ? t("timing.notAvailable") : t("timing.sessionTimestamps") })
    ] })
  ] });
}
function RequestTiming({
  assistant,
  anchor,
  request,
  preview: preview2 = false,
  t
}) {
  if (assistant !== void 0) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordTiming, { record: assistant, preview: preview2, t });
  if (request?.startedAt !== void 0) {
    const duration = request.completedAt === null || request.completedAt === void 0 ? null : Math.max(0, (request.completedAt - request.startedAt) / 1e3);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.started") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StartedAtValue, { timestamp: request.startedAt, t })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.duration") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: formatElapsedSeconds(duration, t) })
      ] }),
      !preview2 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.source") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: duration === null ? t("timing.sessionTimestampsRunning") : t("timing.sessionTimestamps") })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StartedAtValue, { timestamp: anchor?.cell.startedAt ?? null, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.duration") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: formatElapsedSeconds(null, t) })
    ] })
  ] });
}
function RecordPayload({
  record: record2,
  direction,
  preview: preview2 = false,
  renderSlot,
  loadImage,
  stringWrapping,
  t
}) {
  const value = direction === "input" ? record2.cell.inputDetail : record2.cell.outputDetail;
  const missing = direction === "input" ? t("record.noPayload") : t("record.noResult");
  if (!value) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: missing });
  const error = direction === "output" && record2.cell.isError === true;
  const payloadClass = preview2 ? TrajectoryTable_default.jsonPreview : TrajectoryTable_default.jsonPayload;
  const payloadClassName = error ? `${payloadClass} ${TrajectoryTable_default.errorPayload}` : payloadClass;
  const json = error ? void 0 : parseJsonContainer(value);
  const singleTextResult = direction === "output" && record2.cell.outputBlocks?.length === 1 && record2.cell.outputBlocks[0]?.type === "text";
  if (singleTextResult && json !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_dsh_client_ui_primitives2.JsonTree,
      {
        data: json,
        stringWrapping,
        collapsedStringLines: preview2 ? 3 : 12,
        label: t("record.resultJson"),
        labels: jsonTreeLabels(t),
        className: payloadClassName
      }
    );
  }
  if (direction === "output" && record2.cell.outputBlocks?.some((block) => block.attachment !== void 0 || block.content !== "") === true) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ToolOutputBlocks,
      {
        blocks: record2.cell.outputBlocks,
        error,
        errorDetail: error ? value : void 0,
        preview: preview2,
        renderSlot,
        loadImage
      }
    );
  }
  const markdown = direction === "input" && (record2.cell.kind === "user" || record2.cell.kind === "context") || direction === "output" && record2.cell.kind === "message";
  if (markdown) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: [
          preview2 ? TrajectoryTable_default.markdownPreview : TrajectoryTable_default.markdownPayload,
          error ? TrajectoryTable_default.errorPayload : void 0
        ].filter((className) => className !== void 0).join(" "),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.MarkdownText, { text: value, labels: markdownLabels(t) })
      }
    );
  }
  if (json !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_dsh_client_ui_primitives2.JsonTree,
      {
        data: json,
        stringWrapping,
        collapsedStringLines: preview2 ? 3 : 12,
        label: t(direction === "input" ? "record.payloadJson" : "record.outputJson"),
        labels: jsonTreeLabels(t),
        className: payloadClassName
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "pre",
    {
      className: [
        TrajectoryTable_default.payload,
        preview2 ? TrajectoryTable_default.payloadPreview : void 0,
        error ? TrajectoryTable_default.errorPayload : void 0,
        value === t("record.noOutput") ? TrajectoryTable_default.noOutputText : void 0
      ].filter((value2) => value2 !== void 0).join(" "),
      children: value
    }
  );
}
function RecordSchema({
  record: record2,
  preview: preview2 = false,
  stringWrapping,
  t
}) {
  if (!record2.cell.schemaDetail) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.schemaUnavailable") });
  }
  const schema = parseToolSchema(record2.cell.schemaDetail);
  if (schema !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: preview2 ? `${TrajectoryTable_default.schema} ${TrajectoryTable_default.schemaPreview}` : TrajectoryTable_default.schema, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: TrajectoryTable_default.schemaIntro, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: TrajectoryTable_default.schemaName, children: schema.name }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.schemaDescription, children: schema.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.schemaParameters, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: TrajectoryTable_default.schemaParametersTitle, children: t("record.parameters") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_dsh_client_ui_primitives2.JsonTree,
          {
            data: schema.parameters,
            stringWrapping,
            collapsedStringLines: preview2 ? 3 : 12,
            label: t("record.namedParametersJson", { name: schema.name }),
            labels: jsonTreeLabels(t),
            className: TrajectoryTable_default.schemaTree
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${preview2 ? TrajectoryTable_default.payloadPreview : ""}`, children: record2.cell.schemaDetail });
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      children: state === "copied" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconCheckOutlineRegular, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconCopyOutlineRegular, { size: 12 })
    }
  );
}
function ProgramInput({ program, initialWrapped, stringWrapping, onOpen, t }) {
  const contentsId = (0, import_react2.useId)();
  const [wrapped, setWrapped] = (0, import_react2.useState)(initialWrapped);
  const [showJson, setShowJson] = (0, import_react2.useState)(false);
  const actions = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.programActions, children: [
    !showJson && program.language !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.programLanguage, children: program.language }),
    !showJson && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconWrapLinesOutlineRegular, { size: 12 })
      }
    ),
    onOpen === void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 2H5a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2 2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h1" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10 2h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2h-1" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      InspectorCopyButton,
      {
        text: showJson ? program.rawInput : program.source,
        label: t(showJson ? "copy.json" : "code.copySource"),
        t
      }
    )
  ] });
  const body = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: contentsId, className: TrajectoryTable_default.programContent, "data-wrap": wrapped, children: showJson ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_dsh_client_ui_primitives2.JsonTree,
    {
      data: program.arguments,
      label: t("record.parametersJson"),
      labels: jsonTreeLabels(t),
      stringWrapping
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return onOpen === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.programPanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: TrajectoryTable_default.overviewHeading, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("code.source") }),
      actions
    ] }),
    body
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("code.source"), onOpen, actions, children: body });
}
function ProgramOutput({ record: record2, stringWrapping, onOpen, t }) {
  const output = record2.cell.outputDetail;
  const json = output === void 0 || record2.cell.isError === true ? void 0 : parseJsonContainer(output);
  const actions = output === void 0 ? void 0 : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.programActions, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(InspectorCopyButton, { text: output, label: t("code.copyOutput"), t }) });
  const body = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.programContent, children: output === void 0 || output === "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t(stateOf(record2) === "running" ? "code.running" : "record.noOutput") }) : json !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_dsh_client_ui_primitives2.JsonTree,
    {
      data: json,
      label: t("record.outputJson"),
      labels: jsonTreeLabels(t),
      stringWrapping,
      collapsedStringLines: onOpen === void 0 ? 12 : 3
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: `${TrajectoryTable_default.programOutput} ${record2.cell.isError === true ? TrajectoryTable_default.programError : ""}`, children: output }) });
  return onOpen === void 0 ? body : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("code.output"), onOpen, actions, children: body });
}
function OverviewSection({
  label,
  onOpen,
  actions,
  children
}) {
  const previewRef = (0, import_react2.useRef)(null);
  const [hasMore, setHasMore] = (0, import_react2.useState)(false);
  const measureOverflow = (0, import_react2.useCallback)((preview2) => {
    setHasMore(preview2.scrollHeight - preview2.clientHeight - preview2.scrollTop > 1);
  }, []);
  (0, import_react2.useLayoutEffect)(() => {
    const preview2 = previewRef.current;
    const measure = () => {
      measureOverflow(preview2);
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(preview2);
    for (const child of preview2.children) observer.observe(child);
    return () => {
      observer.disconnect();
    };
  }, [children, measureOverflow]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.overviewSection, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { className: TrajectoryTable_default.overviewHeading, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          className: TrajectoryTable_default.overviewTitle,
          onClick: onOpen,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.overviewTitleIcon, size: 12 })
          ]
        }
      ),
      actions
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  qt = (key) => key,
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
  hiddenHints = null,
  callMeta = null,
  maxDurationMs = 1,
  initialScrollTop = null,
  showTime = true,
  onClearDescendantFolds,
  onShowAll,
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
  const [snapping, setSnapping] = (0, import_react2.useState)(false);
  const [hoverCard, setHoverCard] = (0, import_react2.useState)(null);
  const hoverTimer = (0, import_react2.useRef)(null);
  const [toolRequestOffset, setToolRequestOffset] = (0, import_react2.useState)(null);
  const detailsResizeDrag = (0, import_react2.useRef)(null);
  const detailsResizeMoved = (0, import_react2.useRef)(false);
  const appliedRecordSelection = (0, import_react2.useRef)(null);
  const appliedRecordFocus = (0, import_react2.useRef)(null);
  const tabHistory = (0, import_react2.useRef)(/* @__PURE__ */ new Set(["overview"]));
  const rootRef = (0, import_react2.useRef)(null);
  const tablePaneRef = (0, import_react2.useRef)(null);
  const followsTableTail = (0, import_react2.useRef)(false);
  const tableScrollInitialized = (0, import_react2.useRef)(false);
  const [tableScrollReady, setTableScrollReady] = (0, import_react2.useState)(false);
  const pendingScrollRecordId = (0, import_react2.useRef)(null);
  const loadingOlder = (0, import_react2.useRef)(false);
  const [olderLoading, setOlderLoading] = (0, import_react2.useState)(false);
  const olderLoadAnchor = (0, import_react2.useRef)(null);
  const allRecords = (0, import_react2.useMemo)(() => {
    const records2 = flattenRecords(turns);
    return hiddenIndexes === null ? records2 : records2.filter((record2) => !hiddenIndexes.has(record2.cell.index));
  }, [turns, hiddenIndexes]);
  const streamingCellsByIndex = (0, import_react2.useMemo)(
    () => new Map(streamingCells.map((cell) => [cell.index, cell])),
    [streamingCells]
  );
  const currentRecord = (0, import_react2.useCallback)((record2) => {
    const cell = streamingCellsByIndex.get(record2.cell.index);
    return cell === void 0 ? record2 : { ...record2, cell };
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
    const emptySummary = () => ({ tools: 0, steps: /* @__PURE__ */ new Set(), names: [], durationMs: null });
    const addToSummary = (summary, record2) => {
      const cell = record2.cell;
      if (cell.kind === "tool" || cell.kind === "subtool") {
        summary.tools += 1;
        const name2 = cell.toolName;
        if (name2 !== void 0 && !summary.names.includes(name2)) summary.names.push(name2);
      }
      summary.steps.add(`${record2.turn ?? ""}\0${record2.group}`);
      const meta = cell.callId === void 0 ? void 0 : callMeta?.get(cell.callId);
      const ms = cell.timeSeconds !== null ? Math.round(cell.timeSeconds * 1e3) : meta?.durationMs;
      if (typeof ms === "number") summary.durationMs = (summary.durationMs ?? 0) + ms;
    };
    const turnSummary = /* @__PURE__ */ new Map();
    for (const record2 of allRecords) {
      if (record2.turn === null) continue;
      const summary = turnSummary.get(record2.turn) ?? emptySummary();
      addToSummary(summary, record2);
      turnSummary.set(record2.turn, summary);
    }
    const out = [];
    const seenTurns = /* @__PURE__ */ new Set();
    let assistantOpen = null;
    let assistantSummary = null;
    let toolOpen = null;
    let toolCount = 0;
    const flushAssistant = () => {
      if (assistantOpen !== null && assistantSummary !== null && assistantSummary.tools > 0) {
        ;
        assistantOpen.foldSummary = {
          tools: assistantSummary.tools,
          steps: 0,
          names: assistantSummary.names,
          durationMs: assistantSummary.durationMs
        };
      }
      assistantOpen = null;
      assistantSummary = null;
    };
    const flushTool = () => {
      if (toolOpen !== null && toolCount > 0) {
        ;
        toolOpen.foldSummary = {
          tools: toolCount,
          steps: 0,
          names: [],
          durationMs: null
        };
      }
      toolOpen = null;
      toolCount = 0;
    };
    for (const [recordIndex, record2] of allRecords.entries()) {
      const isToolRow = record2.cell.kind === "tool" || record2.cell.kind === "subtool";
      if (record2.turn !== null && collapsedTurns.has(record2.turn)) {
        if (seenTurns.has(record2.turn)) continue;
        seenTurns.add(record2.turn);
        flushAssistant();
        flushTool();
        const summary = turnSummary.get(record2.turn) ?? emptySummary();
        out.push({
          ...record2,
          foldSummary: {
            tools: summary.tools,
            steps: summary.steps.size,
            names: summary.names,
            durationMs: summary.durationMs
          }
        });
        continue;
      }
      if (assistantOpen !== null && isToolRow) {
        if (assistantSummary !== null) addToSummary(assistantSummary, record2);
        continue;
      }
      const isMessage = record2.cell.kind === "message";
      const messageId = trajectoryRecordId(record2.cell);
      if (isMessage && collapsedAssistants.has(messageId)) {
        flushAssistant();
        flushTool();
        const copy = { ...record2 };
        out.push(copy);
        assistantOpen = copy;
        assistantSummary = emptySummary();
        continue;
      }
      if (toolOpen !== null && record2.cell.kind === "subtool") {
        toolCount += 1;
        continue;
      }
      if (record2.cell.kind === "tool" && collapsedTools.has(trajectoryRecordId(record2.cell))) {
        flushAssistant();
        flushTool();
        const copy = { ...record2 };
        out.push(copy);
        toolOpen = copy;
        toolCount = 0;
        continue;
      }
      flushAssistant();
      flushTool();
      const nextRecord = allRecords[recordIndex + 1];
      const kind = record2.cell.kind;
      const nextKind = nextRecord?.cell.kind;
      const hasChildren = kind === "message" || (kind === "user" || kind === "system") && false ? nextKind === "tool" || nextKind === "subtool" : kind === "user" && nextRecord?.turn === record2.turn && nextKind !== void 0;
      if (hasChildren) out.push({ ...record2, hasChildren: true });
      else out.push(record2);
    }
    flushAssistant();
    flushTool();
    for (const [index, record2] of out.entries()) {
      const kind = record2.cell.kind;
      const next = out[index + 1];
      const nextKind = next?.cell.kind;
      const hasFold = record2.turnStart && record2.turn !== null || kind === "message" && assistantToolCalls(allRecords, record2.cell.index).length > 0 || kind === "message" && collapsedAssistants.has(trajectoryRecordId(record2.cell)) || kind === "tool" && nextKind === "subtool";
      if (hasFold) record2.hasFold = true;
      if (kind === "subtool") {
        if (nextKind !== "subtool") record2.childLast = true;
        continue;
      }
      if (kind === "tool") {
        if (nextKind !== "subtool") record2.childLast = true;
        continue;
      }
      if (kind === "message" || kind === "context") {
        const endsTurn = next === void 0 || next.turn !== record2.turn || nextKind === "user" || nextKind === "system" || nextKind === "compacted";
        if (endsTurn) record2.childLast = true;
      }
    }
    return out;
  }, [allRecords, collapsedAssistants, collapsedTools, collapsedTurns, searchMatchIndexes, callMeta]);
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
  (0, import_react2.useEffect)(() => {
    rowVirtualizer.measure();
  }, [hiddenIndexes, rowVirtualizer]);
  (0, import_react2.useLayoutEffect)(() => {
    const pane = tablePaneRef.current;
    if (pane !== null && initialScrollTop !== null) pane.scrollTop = initialScrollTop;
  }, []);
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
  (0, import_react2.useEffect)(() => {
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      clearInspectorSelection();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedRecordId, selectedRequest]);
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { ref: rootRef, className: TrajectoryTable_default.split, style: splitStyle, "data-show-time": showTime ? void 0 : "false", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
          showInitialLoading && records.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.skeletonPane, "aria-hidden": "true", children: [78, 64, 84, 58, 72, 66].map((width, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.skeletonRow, style: { width: `${width}%` } }, index)) }),
          showInitialLoading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.historyLoading, role: "status", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.historyLoadingBar, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: "ongoing" }),
            t("history.loadingTrajectory")
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "table",
            {
              className: TrajectoryTable_default.table,
              "data-scroll-ready": tableScrollReady || void 0,
              "aria-rowcount": records.length + historyRowOffset,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("colgroup", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("col", { className: TrajectoryTable_default.eventColumn }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("col", { className: TrajectoryTable_default.contentColumn })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tbody", { children: [
                  hasOlderRecords && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "tr",
                    {
                      className: TrajectoryTable_default.historyLoadRow,
                      "data-history-load": "",
                      "aria-rowindex": 1,
                      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { colSpan: 2, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
                            olderBusy && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: "ongoing" }),
                            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: olderBusy ? t("history.loadingEarlier") : t("history.loadEarlier") }),
                            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.visuallyHidden, role: "status", "aria-live": "polite", children: olderBusy ? t("history.loadingEarlier") : "" })
                          ]
                        }
                      ) })
                    }
                  ),
                  !showInitialLoading && records.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { className: TrajectoryTable_default.emptyRow, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("td", { colSpan: 2, className: TrajectoryTable_default.emptyCell, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: queryText.trim() === "" ? qt("empty.none") : qt("empty.noMatch") }),
                    queryText.trim() !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: TrajectoryTable_default.emptyAction, onClick: onShowAll, children: qt("query.showAll") })
                  ] }) }),
                  virtualTop > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { className: TrajectoryTable_default.virtualSpacer, "data-virtual-spacer": "top", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "td",
                    {
                      colSpan: 2,
                      style: {
                        "--trajectory-virtual-spacer-height": `${virtualTop}px`
                      }
                    }
                  ) }),
                  renderedRecords.map(({ record: record2, position, terminalRequestBoundary }) => record2.hint !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { className: TrajectoryTable_default.hiddenHintRow, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("td", { colSpan: 2, className: TrajectoryTable_default.hiddenHintCell, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.hiddenHintText, children: qt("hint.filtered", { count: record2.hint }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: TrajectoryTable_default.hiddenHintButton, onClick: onShowAll, children: qt("query.showAll") })
                  ] }) }, `hint:${record2.turn}:${record2.group}`) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                        const metaInfo = record2.cell.callId === void 0 ? void 0 : callMeta?.get(record2.cell.callId);
                        const rowDurationMs = record2.cell.timeSeconds !== null ? Math.round(record2.cell.timeSeconds * 1e3) : metaInfo?.durationMs;
                        const rowStartedAt = record2.cell.startedAt ?? metaInfo?.time;
                        const toolLike = record2.cell.kind === "tool" || record2.cell.kind === "subtool";
                        const level = record2.cell.kind === "subtool" ? 3 : record2.cell.kind === "tool" ? 2 : record2.cell.kind === "user" || record2.cell.kind === "system" || record2.cell.kind === "compacted" ? 0 : 1;
                        const rowName = toolLike ? record2.cell.toolName ?? "tool" : record2.cell.kind === "message" ? "assistant" : record2.cell.kind;
                        const rawSub = toolLike ? String(record2.cell.inputDetail ?? "") : String(displayText ?? "");
                        const flatSub = rawSub.replace(/\s+/g, " ").trim();
                        const rowSub = toolLike && flatSub.length > 180 ? `${flatSub.slice(0, 180)}\u2026` : flatSub;
                        const rowTone = record2.cell.isError ? "error" : stateOf(record2) === "running" ? "running" : "ok";
                        const rowBarWidth = rowDurationMs == null ? 0 : Math.max(2, Math.round(rowDurationMs / Math.max(1, maxDurationMs) * 64));
                        const singleToolNotice = record2.cell.kind === "context" && record2.cell.sourceBlocks?.length === 1 && record2.cell.sourceBlocks.every((block) => block.type === "tool-addition" || block.type === "tool-removal");
                        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
                            "data-group-parity": (record2.groupIndex ?? 0) % 2,
                            "data-child-last": record2.childLast || void 0,
                            "data-level": level,
                            "data-has-children": record2.hasChildren || void 0,
                            "data-has-fold": record2.hasFold || void 0,
                            "data-collapsed": record2.foldSummary === void 0 ? void 0 : true,
                            onMouseEnter: (event) => {
                              if (isRequestOnly) return;
                              const x = event.clientX;
                              const y = event.clientY;
                              if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
                              setHoverCard({ x, y, record: record2 });
                            },
                            onMouseLeave: () => {
                              if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
                              setHoverCard(null);
                            },
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
                              if (event.key === "ArrowLeft") {
                                event.preventDefault();
                                const id = trajectoryRecordId(record2.cell);
                                if (record2.cell.kind === "message" && collapsedAssistants.has(id) === false && assistantToolCalls(allRecords, record2.cell.index).length > 0) {
                                  onToggleAssistant(id);
                                  return;
                                }
                                if ((record2.cell.kind === "tool" || record2.cell.kind === "subtool") && record2.cell.callId !== void 0) {
                                  const toolId = trajectoryRecordId(record2.cell);
                                  const hasChild = records[position + 1]?.cell.kind === "subtool";
                                  if (hasChild && !collapsedTools.has(toolId)) {
                                    onToggleTool(toolId);
                                    return;
                                  }
                                }
                                if (record2.turn !== null && !collapsedTurns.has(record2.turn)) {
                                  onToggleTurn(record2.turn);
                                  return;
                                }
                                return;
                              }
                              if (event.key === "ArrowRight") {
                                event.preventDefault();
                                const id = trajectoryRecordId(record2.cell);
                                if (record2.cell.kind === "message" && collapsedAssistants.has(id)) {
                                  onToggleAssistant(id);
                                  return;
                                }
                                if (record2.turn !== null && collapsedTurns.has(record2.turn)) {
                                  onToggleTurn(record2.turn);
                                  return;
                                }
                                return;
                              }
                              if (event.key === "Home" || event.key === "End") {
                                event.preventDefault();
                                const body = event.currentTarget.parentElement;
                                if (body === null) return;
                                const rows = [...body.querySelectorAll('tr[tabindex="0"]')];
                                const target = event.key === "Home" ? rows[0] : rows[rows.length - 1];
                                if (target instanceof HTMLElement) target.focus();
                                return;
                              }
                              if (event.key === "ArrowDown" || event.key === "j" || event.key === "ArrowUp" || event.key === "k") {
                                event.preventDefault();
                                const body = event.currentTarget.parentElement;
                                if (body === null) return;
                                const rows = [...body.querySelectorAll('tr[tabindex="0"]')];
                                const index = rows.indexOf(event.currentTarget);
                                const step = event.key === "ArrowDown" || event.key === "j" ? 1 : -1;
                                const target = rows[index + step];
                                if (target instanceof HTMLElement) target.focus();
                                return;
                              }
                              if (event.key !== "Enter" && event.key !== " ") return;
                              event.preventDefault();
                              if (isCollapsedSummary) {
                                expandSummary(record2, summaryKind);
                                return;
                              }
                              selectRecord(record2.cell.index);
                            },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: TrajectoryTable_default.event, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rowClock, children: rowStartedAt != null ? formatClock(rowStartedAt) : "" }) }),
                              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: TrajectoryTable_default.content, children: isRequestOnly ? null : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                                "span",
                                {
                                  className: TrajectoryTable_default.rowLine,
                                  "data-tone": rowTone,
                                  "data-mono": toolLike || void 0,
                                  style: { "--bt-level": level },
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rails, "aria-hidden": "true", children: [1, 2, 3].filter((axisLevel) => level >= axisLevel).map((axisLevel) => {
                                      const stopsHere = record2.childLast === true && level === axisLevel;
                                      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                        "i",
                                        {
                                          className: TrajectoryTable_default.rail,
                                          "data-stop": stopsHere || void 0,
                                          style: { "--bt-anc": axisLevel - 1 }
                                        },
                                        axisLevel
                                      );
                                    }) }),
                                    (() => {
                                      const id = trajectoryRecordId(record2.cell);
                                      const collapsedHere = collapsedAssistants.has(id);
                                      const messageFold = record2.cell.kind === "message" && (collapsedHere || assistantToolCalls(allRecords, record2.cell.index).length > 0);
                                      const next = records[position + 1];
                                      const toolFold = toolLike && next !== void 0 && next.cell.kind === "subtool";
                                      const turnFold = record2.turnStart && record2.turn !== null && !isCollapsedSummary;
                                      if (turnFold) {
                                        const collapsed = collapsedTurns.has(record2.turn);
                                        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                          "span",
                                          {
                                            role: "button",
                                            tabIndex: 0,
                                            onKeyDown: (event) => {
                                              if (event.key !== "Enter" && event.key !== " ") return;
                                              event.preventDefault();
                                              event.stopPropagation();
                                              event.currentTarget.click();
                                            },
                                            className: TrajectoryTable_default.rowChevron,
                                            "aria-label": sectionLabel(record2.turn, t),
                                            "aria-expanded": !collapsed,
                                            onClick: (event) => {
                                              event.stopPropagation();
                                              const collapsed2 = collapsedTurns.has(record2.turn);
                                              if (collapsed2 && event.altKey) onClearDescendantFolds?.(record2.turn);
                                              onToggleTurn(record2.turn);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChevronIcon, { open: !collapsed })
                                          }
                                        );
                                      }
                                      if (messageFold) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                          "span",
                                          {
                                            role: "button",
                                            tabIndex: 0,
                                            onKeyDown: (event) => {
                                              if (event.key !== "Enter" && event.key !== " ") return;
                                              event.preventDefault();
                                              event.stopPropagation();
                                              event.currentTarget.click();
                                            },
                                            className: TrajectoryTable_default.rowChevron,
                                            "aria-label": t(collapsedHere ? "assistant.expand" : "assistant.collapse"),
                                            "aria-expanded": !collapsedHere,
                                            onClick: (event) => {
                                              event.stopPropagation();
                                              if (collapsedHere && event.altKey) onClearDescendantFolds?.(record2.turn, id);
                                              onToggleAssistant(id);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChevronIcon, { open: !collapsedHere })
                                          }
                                        );
                                      }
                                      if (toolFold) {
                                        const folded = collapsedTools.has(id);
                                        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                          "span",
                                          {
                                            role: "button",
                                            tabIndex: 0,
                                            onKeyDown: (event) => {
                                              if (event.key !== "Enter" && event.key !== " ") return;
                                              event.preventDefault();
                                              event.stopPropagation();
                                              event.currentTarget.click();
                                            },
                                            className: TrajectoryTable_default.rowChevron,
                                            "aria-label": folded ? t("tool.expandSubCalls") : t("tool.collapseSubCalls"),
                                            "aria-expanded": !folded,
                                            onClick: (event) => {
                                              event.stopPropagation();
                                              onToggleTool(id);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChevronIcon, { open: !folded })
                                          }
                                        );
                                      }
                                      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rowChevronSpace });
                                    })(),
                                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.kindSlot, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.kindPill, "data-kind": record2.cell.kind, children: t(KIND_LABEL_KEY[record2.cell.kind]) }) }),
                                    toolLike && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rowName, children: rowName }),
                                    rowTone !== "ok" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rowBadge, "data-tone": rowTone, children: rowTone === "error" ? qt("row.error") : qt("row.running") }),
                                    record2.foldSummary !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.foldGroup, children: [
                                      record2.foldSummary.steps > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.foldChip, "data-kind": "steps", children: [
                                        record2.foldSummary.steps,
                                        " \u6B65"
                                      ] }),
                                      record2.foldSummary.tools > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.foldChip, "data-kind": "tools", children: [
                                        record2.foldSummary.tools,
                                        " \u5DE5\u5177"
                                      ] }),
                                      record2.foldSummary.durationMs != null && record2.foldSummary.durationMs > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.foldChip, "data-kind": "time", children: compactDuration(record2.foldSummary.durationMs) })
                                    ] }),
                                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rowSub, children: record2.collapsedSummary !== void 0 ? record2.collapsedSummary : rowSub }),
                                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.rowBarWrap, children: [
                                      rowBarWidth > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                        "span",
                                        {
                                          className: TrajectoryTable_default.rowBar,
                                          "data-tone": rowTone,
                                          style: { width: `${rowBarWidth}px` },
                                          "aria-hidden": "true"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rowMs, children: rowDurationMs == null || rowDurationMs <= 0 ? "\u2014" : compactDuration(rowDurationMs) })
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
                  virtualBottom > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { className: TrajectoryTable_default.virtualSpacer, "data-virtual-spacer": "bottom", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    (selectedRequestInfo !== void 0 || promptSelected || selected !== void 0 && selectedState !== void 0) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "aside",
      {
        className: TrajectoryTable_default.details,
        "aria-label": t("details.event"),
        "data-snapping": snapping || void 0,
        style: detailsWidth === null ? void 0 : { width: detailsWidth },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                setSnapping(true);
                setDetailsWidth(null);
                setToolRequestOffset(null);
                window.setTimeout(() => setSnapping(false), 240);
              },
              onMouseDown: (event) => {
                if (event.button !== 0) return;
                const handle = event.currentTarget;
                const details = handle.parentElement;
                if (details === null) return;
                const split = details.parentElement;
                if (split === null) return;
                const startX = event.clientX;
                const startWidth = details.getBoundingClientRect().width;
                const splitWidth = split.getBoundingClientRect().width;
                const startToolRequestOffset = toolRequestOffset ?? splitWidth * TOOL_REQUEST_SHARE - defaultToolRequestWidth(splitWidth);
                let latest = startWidth;
                let moved = false;
                const onMove = (moveEvent) => {
                  moved = true;
                  latest = clampDetailsWidth(startWidth + startX - moveEvent.clientX, splitWidth);
                  setDetailsWidth(latest);
                  setToolRequestOffset(startToolRequestOffset + (latest - startWidth) * TOOL_REQUEST_SHARE);
                };
                const onUp = () => {
                  window.removeEventListener("mousemove", onMove);
                  window.removeEventListener("mouseup", onUp);
                  details.removeAttribute("data-dragging");
                  if (!moved) return;
                  const targets = [420, 520, 640];
                  const nearest = targets.reduce((best, value) => Math.abs(value - latest) < Math.abs(best - latest) ? value : best, targets[0]);
                  if (Math.abs(nearest - latest) <= 40) {
                    details.setAttribute("data-snapping", "");
                    details.style.width = `${nearest}px`;
                    window.setTimeout(() => {
                      setDetailsWidth(nearest);
                      window.setTimeout(() => {
                        details.removeAttribute("data-snapping");
                        setSnapping(false);
                      }, 240);
                    }, 30);
                  }
                };
                details.setAttribute("data-dragging", "");
                window.addEventListener("mousemove", onMove);
                window.addEventListener("mouseup", onUp);
                event.preventDefault();
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
                setSnapping(true);
                setDetailsWidth(nextDetailsWidth);
                setToolRequestOffset(
                  currentToolRequestOffset + (nextDetailsWidth - currentDetailsWidth) * TOOL_REQUEST_SHARE
                );
                window.setTimeout(() => setSnapping(false), 240);
                event.preventDefault();
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.detailsHeader, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.detailsTitle, children: selectedRequestInfo !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.requestDetailsDot, "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.requestDetailsName, children: t("request.label", { request: selectedRequestNumber ?? "\u2014" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailsLocation, children: selectedRequestInfo.purpose === "compaction" ? t("request.compaction", { section: sectionLabel(selectedRequestInfo.turn, t) }) : sectionLabel(selectedRequestInfo.turn, t) })
            ] }) : promptSelected ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `${TrajectoryTable_default.kindTag} ${TrajectoryTable_default.systemNeutral}`, children: t("kind.system") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailsLocation, children: selected?.cell.text })
            ] }) : selected !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "span",
                {
                  className: `${TrajectoryTable_default.kindTag} ${selected.cell.kind === "context" ? TrajectoryTable_default.contextGreen : selected.cell.kind === "compacted" ? TrajectoryTable_default.compacted : selected.cell.kind === "tool" ? TrajectoryTable_default.toolAmber : selected.cell.kind === "message" ? TrajectoryTable_default.assistantVioletBright : selected.cell.kind === "subtool" ? TrajectoryTable_default.subtoolAmber : TrajectoryTable_default[selected.cell.kind]}`,
                  children: selected.cell.kind === "tool" || selected.cell.kind === "subtool" ? selected.cell.toolName ?? t(KIND_LABEL_KEY[selected.cell.kind]) : t(KIND_LABEL_KEY[selected.cell.kind])
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailsLocation, children: selected.cell.kind === "compacted" ? sectionLabel(selected.turn, t) : `${sectionLabel(selected.turn, t)} \xB7 ${selected.group}` })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                className: TrajectoryTable_default.close,
                "aria-label": t("details.close"),
                onClick: clearInspectorSelection,
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: "\xD7" })
              }
            )
          ] }),
          !promptSelected && selected !== void 0 && (selected.cell.kind === "tool" || selected.cell.kind === "subtool") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.detailChips, children: [
            selected.cell.toolName !== void 0 && // no "工具" caption: the header tag above already names the tool,
            // so the caption only repeated it in a second, quieter voice
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `${TrajectoryTable_default.detailChip} ${TrajectoryTable_default.detailChipIdentity}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipValue, children: selected.cell.toolName }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.detailChip, "data-tone": selected.cell.isError ? "error" : void 0, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipLabel, children: qt("chip.status") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipValue, children: statusLabel(stateOf(selected), t) })
            ] }),
            selected.turn !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.detailChip, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipLabel, children: qt("chip.turn") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.detailChipValue, children: [
                "#",
                selected.turn
              ] })
            ] }),
            selected.cell.timeSeconds !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.detailChip, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipLabel, children: qt("chip.duration") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipValue, children: formatDurationMs(Math.round(selected.cell.timeSeconds * 1e3), t) })
            ] }),
            selected.cell.callId !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: TrajectoryTable_default.detailChip, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipLabel, children: "id" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.detailChipValue, children: selected.cell.callId })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: TrajectoryTable_default.detailTabs, role: "tablist", "aria-label": t("details.event"), children: selectedTabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
              children: tab.custom === true ? qt(tab.labelKey) : t(tab.labelKey)
            },
            tab.id
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "div",
            {
              id: "trajectory-detail-panel",
              className: activeTab === "overview" ? `${TrajectoryTable_default.detailBody} ${TrajectoryTable_default.detailBodySummary}` : selectedProgram !== void 0 && activeTab === "input" ? `${TrajectoryTable_default.detailBody} ${TrajectoryTable_default.detailBodyProgram}` : TrajectoryTable_default.detailBody,
              role: "tabpanel",
              "aria-labelledby": `trajectory-detail-${activeTab}`,
              children: [
                selectedRequestInfo !== void 0 && selectedRequestState !== void 0 && activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                    "dl",
                    {
                      className: `${TrajectoryTable_default.overview} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: qt("chip.status") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { className: selectedRequestState === "error" ? TrajectoryTable_default.error : void 0, children: statusLabel(selectedRequestState, t) })
                        ] }),
                        selectedRequestInfo.purpose === "compaction" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.purpose") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: t("request.compactionPurpose") })
                        ] }),
                        (selectedRequestInfo.provider ?? selectedRequestInfo.requestConfig?.provider) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.provider") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: selectedRequestInfo.provider ?? selectedRequestInfo.requestConfig?.provider })
                        ] }),
                        (selectedRequestInfo.model ?? selectedRequestInfo.requestConfig?.model) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.model") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: selectedRequestInfo.model ?? selectedRequestInfo.requestConfig?.model })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.toolCalls") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: selectedRequestToolCalls })
                        ] }),
                        selectedRequestSubtoolCalls > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.subtoolCalls") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: selectedRequestSubtoolCalls })
                        ] }),
                        selectedRequestInfo.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t(selectedRequestState !== "error" && selectedRequestInfo.retry !== void 0 ? "details.lastAttemptError" : "details.error") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { className: selectedRequestState === "error" ? TrajectoryTable_default.error : void 0, children: requestErrorMessage(selectedRequestInfo, t) })
                        ] }),
                        selectedRequestInfo.retry !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.retry") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: selectedRequestInfo.maxRetries === void 0 ? selectedRequestInfo.retry : t("request.retryProgress", {
                            retry: selectedRequestInfo.retry,
                            maximum: selectedRequestInfo.maxRetries
                          }) })
                        ] }),
                        selectedRequestInfo.retryDelayMs !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.retryDelay") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: formatDurationMs(selectedRequestInfo.retryDelayMs, t) })
                        ] }),
                        selectedRequestResult !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.result") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { className: TrajectoryTable_default.overviewParentLinks, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: TrajectoryTable_default.overviewHierarchyNavLink,
                              onClick: () => {
                                openRecordSummary(selectedRequestResult);
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: selectedRequestInfo.purpose === "compaction" ? t("details.compacted") : t("details.assistantMessage") }),
                                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.overviewSections, children: [
                    selectedRequestOptions !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.options"), onOpen: () => {
                      activateTab("options");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RequestOptions, { options: selectedRequestOptions, preview: true, stringWrapping, t }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.usage"), onOpen: () => {
                      activateTab("usage");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UsageRows, { usage: selectedRequestUsage, t }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.timing"), onOpen: () => {
                      activateTab("timing");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                selectedRequestInfo !== void 0 && activeTab === "options" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RequestOptions, { options: selectedRequestOptions, stringWrapping, t }),
                selectedRequestInfo !== void 0 && activeTab === "usage" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  RequestUsagePanel,
                  {
                    usage: selectedRequestUsage,
                    cumulative: selectedRequestCumulativeUsage,
                    t
                  }
                ),
                selectedRequestInfo !== void 0 && activeTab === "timing" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  RequestTiming,
                  {
                    assistant: selectedRequestAssistant,
                    anchor: selectedRequestAnchor,
                    request: selectedRequestInfo,
                    t
                  }
                ),
                selectedPrompt !== void 0 && selectedPreviousPrompt !== void 0 && activeTab === "diff" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  SystemPromptDiff,
                  {
                    before: selectedPreviousPrompt,
                    after: selectedPrompt,
                    t
                  }
                ),
                promptSelected && activeTab === "system-prompt" && (selectedSystemPrompt === "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.systemPromptMissing") }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `${TrajectoryTable_default.markdownPayload} ${TrajectoryTable_default.systemPrompt}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.MarkdownText, { text: selectedSystemPrompt, labels: markdownLabels(t) }) })),
                selectedPrompt !== void 0 && activeTab === "tools" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToolCatalog, { tools: selectedPrompt.tools, stringWrapping, t }),
                !promptSelected && selected?.cell.kind === "compacted" && selectedState !== void 0 && activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                    "dl",
                    {
                      className: `${TrajectoryTable_default.overview} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: qt("chip.status") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { className: selectedState === "error" ? TrajectoryTable_default.error : void 0, children: statusLabel(selectedState, t) })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.duration") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: formatElapsedSeconds(selected.cell.timeSeconds, t) })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("usage.tokens") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: "\u2014" })
                        ] })
                      ]
                    }
                  ),
                  selected.cell.outputDetail !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "div",
                    {
                      className: `${TrajectoryTable_default.compactedSummary} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                !promptSelected && selected !== void 0 && selected.cell.kind !== "compacted" && selectedState !== void 0 && activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                  selectedProgram !== void 0 && selectedProgram.description !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.programDescription, children: selectedProgram.description }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                    "dl",
                    {
                      className: `${TrajectoryTable_default.overview} ${TrajectoryTable_default.summaryScrollRegion}`,
                      "data-summary-scroll-region": "",
                      children: [
                        selected.cell.messageSource !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("details.source") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { className: TrajectoryTable_default.overviewParentLinks, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: TrajectoryTable_default.overviewHierarchyNavLink,
                              onClick: () => {
                                activateTab("source");
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: messageSourceLabel(selected.cell.messageSource, t) }),
                                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                        hasSelectedHierarchy && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: selectedAssistantRequestTarget !== void 0 ? t("details.source") : t("details.hierarchy") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dd", { className: TrajectoryTable_default.overviewParentLinks, children: [
                            selectedAssistantRequestTarget !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                              "button",
                              {
                                type: "button",
                                className: TrajectoryTable_default.overviewHierarchyNavLink,
                                onClick: () => {
                                  selectRequest(selectedAssistantRequestTarget);
                                },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("request.label", { request: selectedAssistantRequest ?? "\u2014" }) }),
                                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                    import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular,
                                    {
                                      className: TrajectoryTable_default.overviewHierarchyJumpIconTight,
                                      size: 11
                                    }
                                  )
                                ]
                              }
                            ),
                            selectedParentMessage !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                              "button",
                              {
                                type: "button",
                                className: TrajectoryTable_default.overviewHierarchyNavLink,
                                onClick: () => {
                                  openRecordSummary(selectedParentMessage);
                                },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("details.assistantMessage") }),
                                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                                    import_dsh_client_ui_primitives2.IconChevronRightOutlineRegular,
                                    {
                                      className: TrajectoryTable_default.overviewHierarchyJumpIconTight,
                                      size: 11
                                    }
                                  )
                                ]
                              }
                            ),
                            selectedParentTool !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                              "button",
                              {
                                type: "button",
                                className: TrajectoryTable_default.overviewHierarchyNavLink,
                                onClick: () => {
                                  openRecordSummary(selectedParentTool);
                                },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("details.toolCall") }),
                                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: qt("chip.status") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { className: selectedState === "error" ? TrajectoryTable_default.error : void 0, children: statusLabel(selectedState, t) })
                        ] }),
                        selected.cell.kind === "message" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TokenRows, { cell: selected.cell, t }),
                        (selected.cell.kind === "user" || selected.cell.kind === "context") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: t("timing.duration") }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: formatElapsedSeconds(selected.cell.timeSeconds, t) })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.overviewSections, children: [
                    selectedProgram !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                    ] }) : isMarkdownRecord(selected) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.preview"), onOpen: () => {
                      activateTab("rendered");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                    ) }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                      selected.cell.inputDetail && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.payload"), onOpen: () => {
                        activateTab("input");
                      }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordPayload, { record: selected, direction: "input", preview: true, renderSlot, loadImage, stringWrapping, t }) }),
                      selected.cell.outputDetail && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.result"), onOpen: () => {
                        activateTab("output");
                      }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordPayload, { record: selected, direction: "output", preview: true, renderSlot, loadImage, stringWrapping, t }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.schema"), onOpen: () => {
                        activateTab("schema");
                      }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordSchema, { record: selected, preview: true, stringWrapping, t }) })
                    ] }),
                    selectedAssistantRequestTarget !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      OverviewSection,
                      {
                        label: t("timing.request"),
                        onOpen: () => {
                          selectRequest(selectedAssistantRequestTarget, "timing");
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordTiming, { record: selected, preview: true, t })
                      }
                    ),
                    (selected.cell.kind === "tool" || selected.cell.kind === "subtool") && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(OverviewSection, { label: t("tab.timing"), onOpen: () => {
                      activateTab("timing");
                    }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordTiming, { record: selected, preview: true, t }) })
                  ] })
                ] }),
                !promptSelected && selected !== void 0 && activeTab === "error" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.errorPanel, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.errorBanner, role: "alert", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.errorDot, "aria-hidden": "true" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("strong", { children: [
                      qt("chip.status"),
                      ": ",
                      statusLabel(stateOf(selected), t)
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "button",
                      {
                        type: "button",
                        className: TrajectoryTable_default.errorCopy,
                        onClick: () => {
                          void navigator.clipboard?.writeText(selected.cell.outputDetail ?? selected.cell.result ?? "");
                        },
                        children: qt("error.copy")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: TrajectoryTable_default.errorBody, children: selected.cell.outputDetail ?? selected.cell.result ?? "" })
                ] }),
                !promptSelected && selected !== void 0 && activeTab === "data" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RawDataPanel, { data: rawDataFor(selected), qt }),
                !promptSelected && selected !== void 0 && activeTab === "rendered" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                !promptSelected && selected !== void 0 && activeTab === "raw" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                !promptSelected && selected !== void 0 && activeTab === "source" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MessageSource, { record: selected, stringWrapping, t }),
                !promptSelected && selected !== void 0 && activeTab === "input" && (selectedProgram === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordPayload, { record: selected, direction: "input", renderSlot, loadImage, stringWrapping, t }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  ProgramInput,
                  {
                    program: selectedProgram,
                    initialWrapped: codeWrappingOnOpen,
                    stringWrapping,
                    t
                  },
                  `input:${selectedRecordId}`
                )),
                !promptSelected && selected !== void 0 && activeTab === "output" && (selected.cell.kind === "tool" || selected.cell.kind === "subtool" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.resultSections, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.resultSection, "aria-label": t("record.rawResult"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { className: TrajectoryTable_default.overviewHeading, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: TrajectoryTable_default.resultTitle, children: t("record.rawResult") }) }),
                    resultValue === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t(stateOf(selected) === "running" ? "code.running" : "record.rawResultUnavailable") }) : resultValue !== null && typeof resultValue === "object" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      import_dsh_client_ui_primitives2.JsonTree,
                      {
                        data: resultValue,
                        label: t("record.resultJson"),
                        labels: jsonTreeLabels(t),
                        stringWrapping,
                        collapsedStringLines: 12,
                        className: TrajectoryTable_default.jsonPayload
                      }
                    ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: TrajectoryTable_default.programOutput, children: JSON.stringify(resultValue) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: TrajectoryTable_default.resultSection, "aria-label": t("record.renderedResult"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { className: TrajectoryTable_default.overviewHeading, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: TrajectoryTable_default.resultTitle, children: t("record.renderedResult") }) }),
                    selectedProgram === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordPayload, { record: selected, direction: "output", renderSlot, loadImage, stringWrapping, t }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ProgramOutput, { record: selected, stringWrapping, t })
                  ] })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordPayload, { record: selected, direction: "output", renderSlot, loadImage, stringWrapping, t })),
                !promptSelected && selected !== void 0 && activeTab === "schema" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordSchema, { record: selected, stringWrapping, t }),
                !promptSelected && selected !== void 0 && activeTab === "timing" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RecordTiming, { record: selected, t })
              ]
            },
            selectedRecordId ?? "none"
          )
        ]
      }
    ),
    hoverCard !== null && (() => {
      const card = hoverCard;
      const { record: record2 } = card;
      const meta = record2.cell.callId === void 0 ? void 0 : callMeta?.get(record2.cell.callId);
      const ms = record2.cell.timeSeconds !== null ? Math.round(record2.cell.timeSeconds * 1e3) : meta?.durationMs;
      const args = String(record2.cell.inputDetail ?? "").replace(/\s+/g, " ").slice(0, 220);
      const kind = record2.cell.kind;
      const left = Math.min(card.x + 14, window.innerWidth - 320);
      const top = Math.min(card.y + 16, window.innerHeight - 220);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          className: TrajectoryTable_default.hoverCard,
          style: { left, top },
          role: "tooltip",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: TrajectoryTable_default.hoverHead, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.kindPill, "data-kind": kind, children: t(KIND_LABEL_KEY[kind]) }),
              record2.cell.toolName !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.hoverName, children: record2.cell.toolName }),
              record2.cell.isError === true && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: TrajectoryTable_default.rowBadge, "data-tone": "error", children: "error" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: TrajectoryTable_default.hoverGrid, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: qt("chip.turn") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dd", { children: [
                "#",
                record2.turn ?? "\u2014",
                " \xB7 ",
                record2.group
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: qt("chip.duration") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: ms == null ? "\u2014" : compactDuration(ms) }),
              meta?.time !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: "\u5F00\u59CB" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: formatClock(meta.time) })
              ] })
            ] }),
            args !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: TrajectoryTable_default.hoverArgs, children: args })
          ]
        }
      );
    })()
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
var css3 = ".bt_QueryBar_root_h4IkeT {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 4px 8px;\n  border-bottom: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.08));\n  background: var(--dsw-alias-bg-layer-1, #fff);\n  position: relative;\n  z-index: 2;\n}\n\n.bt_QueryBar_row_8ZPqfu {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 28px;\n}\n\n.bt_QueryBar_actions_a-c3dO {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex-shrink: 0;\n}\n\n.bt_QueryBar_toggle_DFmY0d,\n.bt_QueryBar_fold_iApD5s {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 24px;\n  padding: 0 6px;\n  border: 0;\n  border-radius: 5px;\n  background: transparent;\n  color: var(--dsw-alias-label-secondary, #555);\n  font-size: 11px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.bt_QueryBar_toggle_DFmY0d:hover,\n.bt_QueryBar_fold_iApD5s:hover {\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.05));\n  color: var(--dsw-alias-label-primary, #111);\n}\n\n.bt_QueryBar_toggle_DFmY0d[aria-pressed='true'] {\n  color: var(--dsw-alias-brand-primary, #4a6cf7);\n}\n\n.bt_QueryBar_toggleIcon_y9tQSK {\n  width: 13px;\n  height: 13px;\n  stroke: currentColor;\n  stroke-width: 1.3;\n  fill: none;\n}\n\n.bt_QueryBar_foldIcon_lkGa4G {\n  flex: none;\n  width: 13px;\n  height: 13px;\n  stroke: currentColor;\n  stroke-width: 1.3;\n  fill: none;\n}\n\n.bt_QueryBar_search_KQG92k {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  min-width: 160px;\n  height: 26px;\n  padding: 0 6px;\n  border: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.12));\n  border-radius: 6px;\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.02));\n}\n\n.bt_QueryBar_search_KQG92k:focus-within {\n  border-color: var(--dsw-alias-brand-primary, #4a6cf7);\n  background: var(--dsw-alias-bg-layer-1, #fff);\n}\n\n.bt_QueryBar_searchIcon_5boR_Y {\n  flex-shrink: 0;\n  color: var(--dsw-alias-label-tertiary, #888);\n  margin-right: 4px;\n}\n\n.bt_QueryBar_input_tue-9E {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-primary, #111);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n}\n\n.bt_QueryBar_input_tue-9E::placeholder {\n  color: var(--dsw-alias-label-tertiary, #999);\n}\n\n.bt_QueryBar_clear_h2AlCi {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary, #888);\n  font-size: 13px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.bt_QueryBar_clear_h2AlCi:hover {\n  background: var(--dsw-alias-bg-layer-3, rgba(0, 0, 0, 0.08));\n  color: var(--dsw-alias-label-primary, #111);\n}\n\n.bt_QueryBar_menu_zrrJiw {\n  position: absolute;\n  z-index: 30;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  max-height: 260px;\n  overflow: auto;\n  padding: 4px;\n  border: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.1));\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1, #fff);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n\n.bt_QueryBar_option_DP3tCP {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  width: 100%;\n  padding: 4px 6px;\n  border: 0;\n  border-radius: 5px;\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n  color: var(--dsw-alias-label-primary, #111);\n  font-size: 11.5px;\n}\n\n.bt_QueryBar_option_DP3tCP[data-active] {\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.06));\n}\n\n.bt_QueryBar_optionGroup_Yq4liS {\n  flex-shrink: 0;\n  width: 48px;\n  color: var(--dsw-alias-label-tertiary, #999);\n  font-size: 10.5px;\n}\n\n.bt_QueryBar_optionLabel_jYfklY {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n}\n\n.bt_QueryBar_optionDetail_tMI0Jn {\n  flex-shrink: 0;\n  color: var(--dsw-alias-label-tertiary, #999);\n  font-variant-numeric: tabular-nums;\n  font-size: 10.5px;\n}\n\n.bt_QueryBar_quick_Sul2G_ {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n\n.bt_QueryBar_quickButton_UruU3W {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 24px;\n  padding: 0 7px;\n  border: 1px solid transparent;\n  border-radius: 999px;\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.04));\n  color: var(--dsw-alias-label-secondary, #555);\n  font-size: 11px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.bt_QueryBar_quickButton_UruU3W:hover {\n  border-color: var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.15));\n}\n\n.bt_QueryBar_quickButton_UruU3W[data-on] {\n  border-color: var(--dsw-alias-brand-primary, #4a6cf7);\n  background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4a6cf7) 12%, transparent);\n  color: var(--dsw-alias-brand-primary, #4a6cf7);\n}\n\n.bt_QueryBar_quickCount_fSJl2b {\n  font-variant-numeric: tabular-nums;\n  opacity: 0.75;\n}\n\n.bt_QueryBar_chips_q1c3NI {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 2px 0 2px 2px;\n}\n\n.bt_QueryBar_chip_SFvtDa {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 20px;\n  padding: 0 2px 0 6px;\n  border-radius: 4px;\n  background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4a6cf7) 10%, transparent);\n  color: var(--dsw-alias-label-primary, #111);\n  font-size: 11px;\n}\n\n.bt_QueryBar_chip_SFvtDa[data-invalid] {\n  background: color-mix(in srgb, #e5484d 14%, transparent);\n}\n\n.bt_QueryBar_chipKind_ZEmsYL {\n  color: var(--dsw-alias-label-tertiary, #888);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.bt_QueryBar_chipValue_OtQz9u {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n}\n\n.bt_QueryBar_chipClose_vTuKBy {\n  width: 16px;\n  height: 16px;\n  border: 0;\n  border-radius: 3px;\n  background: transparent;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 12px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.bt_QueryBar_chipClose_vTuKBy:hover {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.08);\n}\n\n.bt_QueryBar_summary_i3QtQf {\n  margin-left: 4px;\n  color: var(--dsw-alias-label-secondary, #666);\n  font-size: 11px;\n  font-variant-numeric: tabular-nums;\n}\n\n.bt_QueryBar_hidden_fQNsAa {\n  color: var(--dsw-alias-label-tertiary, #999);\n}\n\n.bt_QueryBar_showAll_OqGqph {\n  margin-left: auto;\n  height: 20px;\n  padding: 0 6px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--dsw-alias-brand-primary, #4a6cf7);\n  font-size: 11px;\n  cursor: pointer;\n}\n\n.bt_QueryBar_showAll_OqGqph:hover {\n  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.05));\n}\n.bt_QueryBar_invalidHint_A1iX0u {\n  padding: 2px 2px 4px;\n  color: var(--bt-warn, #d97706);\n  font-size: 10.5px;\n}\n\n[data-tip] {\n  position: relative;\n}\n\n[data-tip]:hover::after {\n  content: attr(data-tip);\n  position: absolute;\n  z-index: 40;\n  top: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 3px 6px;\n  border-radius: 4px;\n  background: var(--bt-text, #1c2128);\n  color: var(--bt-surface, #fff);\n  font-size: 10.5px;\n  font-weight: 400;\n  line-height: 1.3;\n  white-space: nowrap;\n  pointer-events: none;\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="y1b3Uc"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "y1b3Uc");
  el.textContent = css3;
  document.head.appendChild(el);
}
var QueryBar_default = { "root": "bt_QueryBar_root_h4IkeT", "row": "bt_QueryBar_row_8ZPqfu", "actions": "bt_QueryBar_actions_a-c3dO", "toggle": "bt_QueryBar_toggle_DFmY0d", "fold": "bt_QueryBar_fold_iApD5s", "toggleIcon": "bt_QueryBar_toggleIcon_y9tQSK", "foldIcon": "bt_QueryBar_foldIcon_lkGa4G", "search": "bt_QueryBar_search_KQG92k", "searchIcon": "bt_QueryBar_searchIcon_5boR_Y", "input": "bt_QueryBar_input_tue-9E", "clear": "bt_QueryBar_clear_h2AlCi", "menu": "bt_QueryBar_menu_zrrJiw", "option": "bt_QueryBar_option_DP3tCP", "optionGroup": "bt_QueryBar_optionGroup_Yq4liS", "optionLabel": "bt_QueryBar_optionLabel_jYfklY", "optionDetail": "bt_QueryBar_optionDetail_tMI0Jn", "quick": "bt_QueryBar_quick_Sul2G_", "quickButton": "bt_QueryBar_quickButton_UruU3W", "quickCount": "bt_QueryBar_quickCount_fSJl2b", "chips": "bt_QueryBar_chips_q1c3NI", "chip": "bt_QueryBar_chip_SFvtDa", "chipKind": "bt_QueryBar_chipKind_ZEmsYL", "chipValue": "bt_QueryBar_chipValue_OtQz9u", "chipClose": "bt_QueryBar_chipClose_vTuKBy", "summary": "bt_QueryBar_summary_i3QtQf", "hidden": "bt_QueryBar_hidden_fQNsAa", "showAll": "bt_QueryBar_showAll_OqGqph", "invalidHint": "bt_QueryBar_invalidHint_A1iX0u" };

// src/vendor/trajectory/QueryBar.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  const { query, onQuery, stats, flat, onToggleFlat, tokens, t, qt, showTime, onToggleTime } = props;
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [active, setActive] = (0, import_react3.useState)(0);
  const rootRef = (0, import_react3.useRef)(null);
  const inputRef = (0, import_react3.useRef)(null);
  const words = query.trim() === "" ? [] : query.trim().split(/\s+/);
  const lastWord = words.at(-1) ?? "";
  const suggestions = (0, import_react3.useMemo)(() => buildSuggestions(props, lastWord), [props, lastWord]);
  (0, import_react3.useEffect)(() => {
    const onKey = (event) => {
      if (event.key !== "/") return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      event.preventDefault();
      inputRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: QueryBar_default.root, role: "toolbar", "aria-label": t("toolbar.aria"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: QueryBar_default.row, ref: rootRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: QueryBar_default.actions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "button",
          {
            type: "button",
            className: QueryBar_default.toggle,
            "aria-pressed": props.actualDuration,
            "data-tip": t("toolbar.useActualDuration"),
            onClick: () => props.onActualDurationChange(!props.actualDuration),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: QueryBar_default.toggleIcon, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "8", r: "5.25" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 4.75V8l2.25 1.5" })
              ] }),
              t("toolbar.duration")
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": showTime, "data-tip": qt("query.timeHint"), onClick: onToggleTime, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: QueryBar_default.foldIcon, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "2.25", y: "3.25", width: "11.5", height: "9.5", rx: "1.5" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6.25 3.25v9.5" })
          ] }),
          qt("query.time")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allTurnsCollapsed, "data-tip": t("toolbar.turns"), onClick: props.onToggleAllTurns, children: [
          props.allTurnsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.turns")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allAssistantsCollapsed, "data-tip": t("toolbar.calls"), onClick: props.onToggleAllAssistants, children: [
          props.allAssistantsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.calls")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allSubCallsCollapsed, "data-tip": t("toolbar.subCalls"), onClick: props.onToggleAllSubCalls, children: [
          props.allSubCallsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.subCalls")
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: QueryBar_default.search, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.IconSearchOutlineRegular, { size: 12, className: QueryBar_default.searchIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        query !== "" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: QueryBar_default.clear, "aria-label": qt("query.clear"), "data-tip": qt("query.clear"), onClick: () => {
          onQuery("");
          inputRef.current?.focus();
        }, children: "\xD7" }),
        open && query.trim() !== "" && suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: QueryBar_default.menu, role: "listbox", "aria-label": qt("query.suggestions"), children: suggestions.map((suggestion, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: QueryBar_default.optionGroup, children: suggestion.group }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: QueryBar_default.optionLabel, children: suggestion.label }),
              suggestion.detail !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: QueryBar_default.optionDetail, children: suggestion.detail })
            ]
          },
          `${suggestion.group}:${suggestion.insert}`
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: QueryBar_default.quick, children: [
        quick.map((item) => {
          const on = words.includes(item.raw);
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              className: QueryBar_default.quickButton,
              "data-on": on || void 0,
              "aria-pressed": on,
              "data-tip": item.raw,
              onClick: () => onQuery(toggleToken(query, item.raw)),
              children: [
                item.label,
                item.count !== null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: QueryBar_default.quickCount, children: item.count })
              ]
            },
            item.key
          );
        }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: QueryBar_default.quickButton, "data-on": flat || void 0, "aria-pressed": flat, onClick: onToggleFlat, "data-tip": qt("query.flatHint"), children: qt("query.flat") })
      ] })
    ] }),
    tokens.some((token) => !token.valid) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: QueryBar_default.invalidHint, role: "status", children: qt("query.invalid", { tokens: tokens.filter((token) => !token.valid).map((token) => token.raw).join(" ") }) }),
    tokens.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: QueryBar_default.chips, children: [
      tokens.map((token) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: QueryBar_default.chip, "data-invalid": !token.valid || void 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: QueryBar_default.chipKind, children: token.kind === "text" ? qt("query.text") : token.kind }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: QueryBar_default.chipValue, children: token.raw.replace(/^-?[a-z]+:/, "") || token.raw }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: QueryBar_default.summary, children: [
        qt("query.summary", { matched: stats.matched, total: stats.total }),
        stats.hidden > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: QueryBar_default.hidden, children: [
          "\xB7 ",
          qt("query.hidden", { count: stats.hidden })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: QueryBar_default.showAll, onClick: () => onQuery(""), children: qt("query.showAll") })
    ] })
  ] });
}

// src/client/filter.mjs
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

// src/vendor/trajectory/TrajectoryTimeline.tsx
var import_react4 = require("react");
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/vendor/trajectory/timeline.ts
function laneFor(kind) {
  if (kind === "tool" || kind === "subtool") return 2;
  if (kind === "message" || kind === "compacted") return 1;
  return 0;
}
function finite(value) {
  return value !== null && value !== void 0 && Number.isFinite(value);
}
function cellRange(cell) {
  if (!finite(cell.startedAt)) return null;
  const durationMs = finite(cell.timeSeconds) ? Math.max(0, cell.timeSeconds * 1e3) : 0;
  return { start: cell.startedAt, end: cell.startedAt + durationMs };
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
      (group) => group.cells.filter((cell) => cell.requestOnly !== true)
    );
    if (cells.length === 0) continue;
    if (turn.turn !== null) {
      turnBoundaries.push({
        turn: turn.turn,
        time: spans.length
      });
    }
    spans.push(...cells.map((cell, offset) => ({
      start: spans.length + offset,
      end: spans.length + offset + 1,
      index: cell.index,
      isError: cell.isError === true,
      kind: cell.kind,
      label: cell.text,
      lane: laneFor(cell.kind)
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
      (group) => group.cells.flatMap((cell) => {
        if (cell.requestOnly === true) return [];
        const range = cellRange(cell);
        return range === null ? [] : [{
          ...range,
          index: cell.index,
          isError: cell.isError === true,
          kind: cell.kind,
          label: cell.text,
          lane: laneFor(cell.kind)
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
var css4 = ".bt_TrajectoryTimeline_root_ZWNJON {\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n  flex: none;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  user-select: none;\n}\n\n.bt_TrajectoryTimeline_root_ZWNJON [role='tooltip'] {\n  font: var(--dsw-font-xxxs-11);\n  padding: 8px 10px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 8px;\n  background: var(--bt-surface, #ffffff);\n  color: var(--bt-text, #1c2128);\n  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);\n}\n\n.bt_TrajectoryTimeline_plot_shmJE_ {\n  display: grid;\n  grid-template-columns: 44px minmax(0, 1fr);\n  height: 50px;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc {\n  position: relative;\n  border-right: 0.5px solid var(--dsw-alias-border-l1);\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xs-13);\n  font-size: 10px;\n  line-height: 1;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span {\n  position: absolute;\n  right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 8px;\n  text-align: right;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(1) {\n  top: 7px;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(2) {\n  top: 21px;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(3) {\n  top: 35px;\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE {\n  position: relative;\n  overflow: hidden;\n  cursor: crosshair;\n  touch-action: none;\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE[data-panning='true'] {\n  cursor: grabbing;\n}\n\n.bt_TrajectoryTimeline_earlierHistory_ABAk9X {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 28px;\n  align-items: center;\n  justify-content: flex-start;\n  appearance: none;\n  box-sizing: border-box;\n  padding-left: 3px;\n  border: 0;\n  outline: none;\n  background: linear-gradient(\n    to right,\n    var(--dsw-alias-bg-layer-2) 0,\n    var(--dsw-alias-bg-layer-2) 38%,\n    transparent 100%\n  );\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-13);\n  line-height: 1;\n  opacity: 0.72;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTimeline_earlierHistory_ABAk9X:hover {\n    opacity: 1;\n  }\n}\n\n.bt_TrajectoryTimeline_earlierHistory_ABAk9X[aria-disabled='true'] {\n  cursor: default;\n}\n\n.bt_TrajectoryTimeline_earlierHistory_ABAk9X:focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTimeline_empty_lzkZh2 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTimeline_lanes_w13rKE {\n  position: absolute;\n  z-index: 2;\n  top: 7px;\n  bottom: 7px;\n  left: var(--trajectory-domain-left);\n  width: var(--trajectory-domain-width);\n}\n\n.bt_TrajectoryTimeline_turnBoundaries_IFhdxN {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-domain-left);\n  width: var(--trajectory-domain-width);\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .bt_TrajectoryTimeline_lanes_w13rKE[data-animate-viewport='true'],\n  .bt_TrajectoryTimeline_turnBoundaries_IFhdxN[data-animate-viewport='true'] {\n    transition: left 180ms ease-out;\n  }\n}\n\n.bt_TrajectoryTimeline_turnBoundary_xGFfjN {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-turn-left);\n  width: 0.5px;\n  background: var(--dsw-alias-border-l2);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T {\n  position: absolute;\n  top: calc(var(--trajectory-span-lane) * 14px);\n  left: calc(var(--trajectory-span-left) + var(--trajectory-span-gap));\n  width: max(\n    2px,\n    calc(\n      var(--trajectory-span-width)\n      - var(--trajectory-span-gap)\n      - var(--trajectory-span-gap)\n    )\n  );\n  height: 8px;\n  min-width: 2px;\n  border-radius: 1px;\n  background: var(--dsw-alias-label-secondary);\n  opacity: 0.78;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='user'] {\n  background: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='context'] {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='message'] {\n  --trajectory-assistant-decoding-color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  --trajectory-assistant-ttft-color: color-mix(\n    in srgb,\n    var(--trajectory-assistant-decoding-color) 54%,\n    var(--dsw-alias-bg-layer-2)\n  );\n\n  background: var(--trajectory-assistant-decoding-color);\n  opacity: 1;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='message'][data-assistant-timing='true'] {\n  background: linear-gradient(\n    to right,\n    var(--trajectory-assistant-ttft-color) 0,\n    var(--trajectory-assistant-ttft-color) var(--trajectory-assistant-ttft),\n    var(--trajectory-assistant-decoding-color) var(--trajectory-assistant-ttft),\n    var(--trajectory-assistant-decoding-color) 100%\n  );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='tool'],\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='subtool'] {\n  background: var(--dsw-alias-state-warn-label);\n  opacity: 1;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-error='true'] {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-equal-duration='true'] {\n  width: 8px;\n  min-width: 8px;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-selected='false'] {\n  opacity: 0.2;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-hovered='true']:not([data-current='true']) {\n  z-index: 1;\n  opacity: 1;\n  box-shadow:\n    0 0 0 1px var(--dsw-alias-bg-layer-2),\n    0 0 0 2px color-mix(\n      in srgb,\n      var(--dsw-alias-state-business-primary) 80%,\n      transparent\n    );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-current='true'] {\n  z-index: 1;\n  opacity: 1;\n  box-shadow:\n    0 0 0 1px var(--dsw-alias-bg-layer-2),\n    0 0 0 2px var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-search-match='false'] {\n  opacity: 0.14;\n}\n\n.bt_TrajectoryTimeline_selection_YrBqKd {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-selection-left);\n  width: var(--trajectory-selection-width);\n  min-width: 1px;\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-business-primary) 12%,\n    transparent\n  );\n  box-shadow:\n    -100vw 0 0 100vw color-mix(in srgb, var(--dsw-alias-bg-layer-1) 58%, transparent),\n    100vw 0 0 100vw color-mix(in srgb, var(--dsw-alias-bg-layer-1) 58%, transparent);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-selection-left);\n  width: var(--trajectory-selection-width);\n  min-width: 1px;\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_hoverLine_XzB4lu {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  bottom: 0;\n  left: clamp(\n    0px,\n    calc(var(--trajectory-hover-left) - 1px),\n    calc(100% - 2px)\n  );\n  width: 2px;\n  background: var(--dsw-alias-state-business-primary);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::before,\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--dsw-alias-state-business-primary);\n  content: '';\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::before {\n  left: 0;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::after {\n  right: 0;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj[data-dragging='true']::before,\n.bt_TrajectoryTimeline_selectionEdges_VOyluj[data-dragging='true']::after {\n  width: 2px;\n}\n\n.bt_TrajectoryTimeline_selection_YrBqKd[data-dragging='true'] {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-business-primary) 18%,\n    transparent\n  );\n}\n\n/* timeline hover card mirrors the ledger hover card */\n.bt_TrajectoryTimeline_tipCard_3mE-3n {\n  position: fixed;\n  z-index: 60;\n  width: 268px;\n  padding: 10px 12px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 8px;\n  background: var(--bt-surface, #fff);\n  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);\n  pointer-events: none;\n  animation: bt_TrajectoryTimeline_bt-tip-in__6meCe var(--bt-dur-3, 120ms) var(--bt-ease-out, ease);\n}\n\n@keyframes bt_TrajectoryTimeline_bt-tip-in__6meCe {\n  from { opacity: 0; transform: translateY(3px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.bt_TrajectoryTimeline_tipHead_G9t7BJ {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 7px;\n}\n\n.bt_TrajectoryTimeline_tipPill_1qe7kI {\n  height: 16px;\n  padding: 0 5px;\n  border-radius: 3px;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n}\n\n.bt_TrajectoryTimeline_tipPill_1qe7kI[data-kind='tool'] {\n  background: color-mix(in srgb, var(--bt-tool, #b45309) 12%, transparent);\n  color: var(--bt-tool, #b45309);\n}\n\n.bt_TrajectoryTimeline_tipPill_1qe7kI[data-kind='model'] {\n  background: color-mix(in srgb, var(--bt-assistant, #7c3aed) 12%, transparent);\n  color: var(--bt-assistant, #7c3aed);\n}\n\n.bt_TrajectoryTimeline_tipPill_1qe7kI[data-kind='input'] {\n  background: color-mix(in srgb, var(--bt-context, #047857) 10%, transparent);\n  color: var(--bt-context, #047857);\n}\n\n.bt_TrajectoryTimeline_tipError_FAMD26 {\n  height: 16px;\n  padding: 0 5px;\n  border-radius: 3px;\n  background: color-mix(in srgb, var(--bt-error, #d92d20) 10%, transparent);\n  color: var(--bt-error, #d92d20);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9px;\n  line-height: 16px;\n}\n\n.bt_TrajectoryTimeline_tipGrid_3RubJb {\n  display: grid;\n  grid-template-columns: 34px 1fr;\n  gap: 3px 8px;\n  margin: 0;\n  font-size: 11px;\n}\n\n.bt_TrajectoryTimeline_tipGrid_3RubJb dt {\n  color: var(--bt-text-3, #9aa1ab);\n}\n\n.bt_TrajectoryTimeline_tipGrid_3RubJb dd {\n  margin: 0;\n  color: var(--bt-text-2, #5b6470);\n  font-variant-numeric: tabular-nums;\n}\n\n.bt_TrajectoryTimeline_tipPill_1qe7kI[data-kind='message'] {\n  background: color-mix(in srgb, var(--bt-assistant, #7c3aed) 12%, transparent);\n  color: var(--bt-assistant, #7c3aed);\n}\n\n.bt_TrajectoryTimeline_tipPill_1qe7kI[data-kind='context'],\n.bt_TrajectoryTimeline_tipPill_1qe7kI[data-kind='user'] {\n  background: color-mix(in srgb, var(--bt-context, #047857) 10%, transparent);\n  color: var(--bt-context, #047857);\n}\n\n.bt_TrajectoryTimeline_tipCard_3mE-3n {\n  width: 300px;\n}\n\n.bt_TrajectoryTimeline_tipGrid_3RubJb {\n  grid-template-columns: 40px 1fr;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTimeline_tipGrid_3RubJb dt,\n.bt_TrajectoryTimeline_tipGrid_3RubJb dd {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* the hover card is a child of the section; don't clip it */\n.bt_TrajectoryTimeline_root_ZWNJON {\n  overflow: visible;\n}\n\n.bt_TrajectoryTimeline_tipPill_1qe7kI {\n  min-width: 46px;\n  text-align: center;\n  text-transform: none;\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="sqmlHh"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "sqmlHh");
  el.textContent = css4;
  document.head.appendChild(el);
}
var TrajectoryTimeline_default = { "root": "bt_TrajectoryTimeline_root_ZWNJON", "plot": "bt_TrajectoryTimeline_plot_shmJE_", "labels": "bt_TrajectoryTimeline_labels_NwTymc", "track": "bt_TrajectoryTimeline_track_W4cGdE", "earlierHistory": "bt_TrajectoryTimeline_earlierHistory_ABAk9X", "empty": "bt_TrajectoryTimeline_empty_lzkZh2", "lanes": "bt_TrajectoryTimeline_lanes_w13rKE", "turnBoundaries": "bt_TrajectoryTimeline_turnBoundaries_IFhdxN", "turnBoundary": "bt_TrajectoryTimeline_turnBoundary_xGFfjN", "span": "bt_TrajectoryTimeline_span_Kdyw9T", "selection": "bt_TrajectoryTimeline_selection_YrBqKd", "selectionEdges": "bt_TrajectoryTimeline_selectionEdges_VOyluj", "hoverLine": "bt_TrajectoryTimeline_hoverLine_XzB4lu", "tipCard": "bt_TrajectoryTimeline_tipCard_3mE-3n", "bt-tip-in": "bt_TrajectoryTimeline_bt-tip-in__6meCe", "tipHead": "bt_TrajectoryTimeline_tipHead_G9t7BJ", "tipPill": "bt_TrajectoryTimeline_tipPill_1qe7kI", "tipError": "bt_TrajectoryTimeline_tipError_FAMD26", "tipGrid": "bt_TrajectoryTimeline_tipGrid_3RubJb" };

// src/vendor/trajectory/TrajectoryTimeline.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
function timelineRecordDetail(cell) {
  const durationMs = cell.timeSeconds === null || !Number.isFinite(cell.timeSeconds) ? void 0 : Math.max(0, cell.timeSeconds * 1e3);
  const startedAt = cell.startedAt === null || !Number.isFinite(cell.startedAt) ? void 0 : cell.startedAt;
  return {
    ...durationMs === void 0 ? {} : { durationMs },
    ...startedAt === void 0 ? {} : { startedAt },
    ...assistantTimingDetail(cell.assistantMetrics)
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: TrajectoryTimeline_default.labels, "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t("column.input") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t("column.model") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t("column.tools") })
  ] });
}
function EarlierHistoryBoundary({
  loading,
  onHover,
  onLoad,
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dsh_client_ui_primitives4.Tooltip,
    {
      label: loading ? t("history.loadingEarlier") : t("history.clickToLoadEarlier"),
      side: "right",
      delayMs: TIMELINE_TOOLTIP_DELAY_MS,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        (group) => group.cells.map((cell) => [cell.index, timelineRecordDetail(cell)])
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
  const [tip, setTip] = (0, import_react4.useState)(null);
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { ref: rootRef, className: TrajectoryTimeline_default.root, "aria-label": t("timeline.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: TrajectoryTimeline_default.plot, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LaneLabels, { t }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: TrajectoryTimeline_default.track, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: TrajectoryTimeline_default.empty, children: t("timeline.noTimingData") }),
        hasEarlierRecords && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { ref: rootRef, className: TrajectoryTimeline_default.root, "aria-label": t("timeline.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: TrajectoryTimeline_default.plot, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LaneLabels, { t }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
            showsEarlierBoundary && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            hover !== null && hover.recordIndex === null && draft === null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            visibleRange !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "div",
              {
                className: TrajectoryTimeline_default.turnBoundaries,
                "data-animate-viewport": animateViewport || void 0,
                "aria-hidden": "true",
                style: projectedDomainStyle,
                children: model.turnBoundaries.filter((boundary) => boundary.time > model.start && boundary.time >= domainStart && boundary.time <= domainStart + domainDuration).map((boundary) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: TrajectoryTimeline_default.span,
                      onMouseEnter: (event) => {
                        setTip({ x: event.clientX, y: event.clientY, kind: span.kind, detail, isError: span.isError });
                      },
                      onMouseMove: (event) => {
                        setTip((current) => current === null ? current : { ...current, x: event.clientX, y: event.clientY });
                      },
                      onMouseLeave: () => setTip(null),
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
                  ) }, span.index);
                })
              }
            )
          ]
        }
      )
    ] }) }),
    tip !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: TrajectoryTimeline_default.tipCard,
        role: "tooltip",
        style: {
          left: Math.min(tip.x + 14, window.innerWidth - 300),
          top: Math.min(tip.y + 16, window.innerHeight - 180)
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: TrajectoryTimeline_default.tipHead, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: TrajectoryTimeline_default.tipPill, "data-kind": tip.kind, children: timelineKindLabel(tip.kind, t) }),
            tip.isError === true && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: TrajectoryTimeline_default.tipError, children: "error" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("dl", { className: TrajectoryTimeline_default.tipGrid, children: [
            tip.detail?.startedAt !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dt", { children: "\u5F00\u59CB" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dd", { children: formatRecordedTime(tip.detail.startedAt) })
            ] }),
            tip.detail?.startedAt !== void 0 && tip.detail?.durationMs !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dt", { children: "\u7ED3\u675F" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dd", { children: formatRecordedTime(tip.detail.startedAt + tip.detail.durationMs) })
            ] }),
            tip.detail?.durationMs !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dt", { children: "\u8017\u65F6" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dd", { children: tip.detail.durationMs < 1e3 ? `${Math.round(tip.detail.durationMs)}ms` : `${(tip.detail.durationMs / 1e3).toFixed(tip.detail.durationMs < 1e4 ? 1 : 0)}s` })
            ] })
          ] })
        ]
      }
    )
  ] });
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
  const preview2 = previewContent(node.content);
  const previewMarkdown = preview2 === "" ? void 0 : preview2;
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
      const cell = {
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
      attachUsage(cell, request.usage);
      const compaction = {
        groups: [{
          title: t("group.compaction", { seq: request.startSeq }),
          laid: [{
            absTime: finiteTime(request.startedAt),
            cell
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
      cells: group.cells.map((cell) => ({ ...cell, index: cell.index + lastIndex }))
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
      streamedGroup.cells.flatMap((cell) => cell.callId === void 0 ? [] : [cell.callId])
    );
    groups[groupIndex] = {
      ...streamedGroup,
      cells: [
        ...group.cells.filter(
          (cell) => cell.requestOnly !== true && (cell.callId === void 0 || !streamedCallIds.has(cell.callId))
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
    ...turn.groups.flatMap((group) => group.cells.map((cell) => cell.index)),
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
function attachUsage(cell, usage) {
  if (usage === void 0) return;
  if (usage.inputTokens !== void 0) cell.input = usage.inputTokens;
  if (usage.cacheReadTokens !== void 0) cell.cacheRead = usage.cacheReadTokens;
  if (usage.cacheWriteTokens !== void 0) cell.cacheWrite = usage.cacheWriteTokens;
  if (usage.outputTokens !== void 0) cell.output = usage.outputTokens;
  if (usage.reasoningTokens !== void 0) cell.think = usage.reasoningTokens;
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
var css5 = "/* Full-bleed, fixed-height host for the trajectory ledger. Isolation keeps the\n   sticky toolbar's z-index inside this view, so the conversation tab row\n   stacked above the view still paints its active bar over the view's top\n   edge. */\n.bt_views_root_QpOuZ9 {\n  --dsh-trajectory-toolbar-height: 32px;\n\n  isolation: isolate;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  min-height: 0;\n  width: 100%;\n  box-sizing: border-box;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_views_ledger_7rRXSg {\n  position: relative;\n  z-index: 0;\n  isolation: isolate;\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n\n  /* ConversationRoot publishes the floating composer's live height. */\n  --dsh-trajectory-bottom-clearance: calc(var(--dsh-composer-height, 152px) + 16px);\n}\n\n.bt_views_root_QpOuZ9 {\n  position: relative;\n}\n\n.bt_views_toast_C-TK2m {\n  position: absolute;\n  left: 50%;\n  bottom: calc(var(--dsh-composer-height, 120px) + 16px);\n  transform: translateX(-50%);\n  z-index: 30;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 32px;\n  padding: 0 8px 0 12px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 8px;\n  background: var(--bt-surface, #fff);\n  color: var(--bt-text, #1c2128);\n  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.1);\n  font-size: 11.5px;\n  animation: bt_views_bt-toast-in_dewC9x var(--bt-dur-4, 160ms) var(--bt-ease-out, ease);\n}\n\n.bt_views_toastAction_oJPmhq {\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  font-size: 11.5px;\n  cursor: pointer;\n  padding: 0 4px;\n}\n\n.bt_views_toastClose_ffEICC {\n  width: 18px;\n  height: 18px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 13px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.bt_views_toastClose_ffEICC:hover {\n  background: var(--bt-surface-2, #f6f7f9);\n  color: var(--bt-text, #1c2128);\n}\n\n@keyframes bt_views_bt-toast-in_dewC9x {\n  from { opacity: 0; transform: translate(-50%, 6px); }\n  to { opacity: 1; transform: translate(-50%, 0); }\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="qMCcq9"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "qMCcq9");
  el.textContent = css5;
  document.head.appendChild(el);
}
var views_default = { "root": "bt_views_root_QpOuZ9", "ledger": "bt_views_ledger_7rRXSg", "toast": "bt_views_toast_C-TK2m", "bt-toast-in": "bt_views_bt-toast-in_dewC9x", "toastAction": "bt_views_toastAction_oJPmhq", "toastClose": "bt_views_toastClose_ffEICC" };

// src/vendor/trajectory/TrajectoryView.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var EMPTY_TURN_IDS = /* @__PURE__ */ new Set();
var EMPTY_RECORD_IDS = /* @__PURE__ */ new Set();
var HISTORY_PAGE_NODES = 50;
var QUERY_STORAGE_PREFIX = "dsh-better-trajectory:query:";
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
      for (const cell of group.cells) last = Math.max(last, cell.index);
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
  qt,
  sessionId
}) {
  const foldKey = `dsh-better-trajectory:folds:${sessionId ?? ""}`;
  const [collapsedTurns, setCollapsedTurns] = (0, import_react5.useState)(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey);
      const parsed = raw === null ? null : JSON.parse(raw);
      return new Set(Array.isArray(parsed?.turns) ? parsed.turns : []);
    } catch {
      return EMPTY_TURN_IDS;
    }
  });
  const [collapsedAssistants, setCollapsedAssistants] = (0, import_react5.useState)(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey);
      const parsed = raw === null ? null : JSON.parse(raw);
      return new Set(Array.isArray(parsed?.assistants) ? parsed.assistants : []);
    } catch {
      return EMPTY_RECORD_IDS;
    }
  });
  const [collapsedTools, setCollapsedTools] = (0, import_react5.useState)(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey);
      const parsed = raw === null ? null : JSON.parse(raw);
      return new Set(Array.isArray(parsed?.tools) ? parsed.tools : []);
    } catch {
      return EMPTY_RECORD_IDS;
    }
  });
  (0, import_react5.useEffect)(() => {
    try {
      window.sessionStorage.setItem(foldKey, JSON.stringify({
        turns: [...collapsedTurns],
        assistants: [...collapsedAssistants],
        tools: [...collapsedTools]
      }));
    } catch {
    }
  }, [foldKey, collapsedTurns, collapsedAssistants, collapsedTools]);
  const [timelineSelection, setTimelineSelection] = (0, import_react5.useState)(null);
  const actualDuration = useDuration((value) => value);
  const [actualTime, setActualTime] = (0, import_react5.useState)(false);
  const [queryText2, setQueryText] = (0, import_react5.useState)(() => {
    try {
      return window.sessionStorage.getItem(`${QUERY_STORAGE_PREFIX}${sessionId ?? ""}`) ?? "";
    } catch {
      return "";
    }
  });
  (0, import_react5.useEffect)(() => {
    try {
      window.sessionStorage.setItem(`${QUERY_STORAGE_PREFIX}${sessionId ?? ""}`, queryText2);
    } catch {
    }
  }, [queryText2, sessionId]);
  const [flat, setFlat] = (0, import_react5.useState)(false);
  const [showTime, setShowTime] = (0, import_react5.useState)(true);
  const restoreScroll = (0, import_react5.useRef)(0);
  const [toast, setToast] = (0, import_react5.useState)(null);
  const toastTimer = (0, import_react5.useRef)(null);
  const toastSeq = (0, import_react5.useRef)(0);
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
  const query = (0, import_react5.useMemo)(() => parseQuery(queryText2), [queryText2]);
  const toolIndex = (0, import_react5.useMemo)(() => buildToolIndex(completeInspection), [completeInspection]);
  const callMeta = (0, import_react5.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    for (const record2 of toolIndex.records) {
      if (!record2.callId) continue;
      map.set(record2.callId, {
        ...typeof record2.durationMs === "number" ? { durationMs: record2.durationMs } : {},
        ...typeof record2.time === "number" ? { time: record2.time } : {}
      });
    }
    return map;
  }, [toolIndex]);
  const toolCells = (0, import_react5.useMemo)(() => timelineTurns.flatMap((turn) => turn.groups.flatMap((group) => group.cells.filter((cell) => cell.kind === "tool" || cell.kind === "subtool").map((cell) => ({ cell, turn: turn.turn })))), [timelineTurns]);
  const matchedCells = (0, import_react5.useMemo)(() => {
    const set = /* @__PURE__ */ new Set();
    for (const { cell, turn } of toolCells) {
      const meta = cell.callId === void 0 ? void 0 : callMeta.get(cell.callId);
      const status = cell.isError === true ? "error" : "ok";
      if (matchesQuery({
        name: cell.toolName ?? "",
        status,
        turn,
        durationMs: meta?.durationMs,
        args: cell.inputDetail ?? "",
        result: cell.outputDetail ?? "",
        errorText: ""
      }, query)) set.add(cell.index);
    }
    return set;
  }, [toolCells, callMeta, query]);
  const toolStats = (0, import_react5.useMemo)(() => {
    let errors = 0;
    let running = 0;
    for (const { cell } of toolCells) {
      if (cell.isError === true) errors += 1;
      else if (cell.timeSeconds === null && !cell.isError) running += 1;
    }
    return { total: toolCells.length, errors, running };
  }, [toolCells]);
  const queryTurns = (0, import_react5.useMemo)(
    () => [...toolIndex.turns.entries()].sort((left, right) => left[0] - right[0]).map(([turn, count]) => ({ turn, count })),
    [toolIndex]
  );
  const hiddenIndexes = (0, import_react5.useMemo)(() => {
    if (!query.active && !flat) return null;
    const hidden = /* @__PURE__ */ new Set();
    for (const { cell } of toolCells) {
      if (!matchedCells.has(cell.index)) hidden.add(cell.index);
    }
    if (flat) {
      for (const turn of timelineTurns) {
        for (const group of turn.groups) {
          for (const cell of group.cells) {
            if (cell.kind !== "tool" && cell.kind !== "subtool") hidden.add(cell.index);
          }
        }
      }
    }
    return hidden;
  }, [toolCells, matchedCells, query.active, flat]);
  const maxDurationMs = (0, import_react5.useMemo)(() => {
    let max = 0;
    for (const record2 of toolIndex.records) {
      if (typeof record2.durationMs === "number" && record2.durationMs > max) max = record2.durationMs;
    }
    return max;
  }, [toolIndex]);
  const hiddenHints = (0, import_react5.useMemo)(() => {
    if (hiddenIndexes === null) return null;
    const map = /* @__PURE__ */ new Map();
    for (const turn of timelineTurns) {
      for (const group of turn.groups) {
        let count = 0;
        for (const cell of group.cells) {
          if ((cell.kind === "tool" || cell.kind === "subtool") && hiddenIndexes.has(cell.index)) count += 1;
        }
        if (count > 0) map.set(`${turn.turn}\0${group.title}`, count);
      }
    }
    return map;
  }, [timelineTurns, hiddenIndexes]);
  const visibleTurns = (0, import_react5.useMemo)(() => {
    if (hiddenIndexes === null) return timelineTurns;
    return timelineTurns.map((turn) => ({
      ...turn,
      groups: turn.groups.map((group) => ({
        ...group,
        cells: group.cells.filter((cell) => !hiddenIndexes.has(cell.index))
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
      (count, group) => count + group.cells.filter((cell) => cell.requestOnly !== true && cell.kind !== "system").length,
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
        const cell = cells[i];
        if (cell?.kind !== "message") continue;
        const next = cells[i + 1];
        if (next?.kind === "tool" || next?.kind === "subtool") {
          ids.push(trajectoryRecordId(cell));
        }
      }
    }
    return ids;
  }, [timelineTurns]);
  const allAssistantsCollapsed = collapsibleAssistantIds.length > 0 && collapsibleAssistantIds.every((index) => collapsedAssistants.has(index));
  const collapsibleToolIds = (0, import_react5.useMemo)(
    () => timelineTurns.flatMap((turn) => turn.groups.flatMap((group) => group.cells.flatMap((cell, index) => cell.kind === "tool" && group.cells[index + 1]?.kind === "subtool" ? [trajectoryRecordId(cell)] : []))),
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
  const dismissToast = (0, import_react5.useCallback)(() => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
    toastTimer.current = null;
    setToast(null);
  }, []);
  const pushToast = (0, import_react5.useCallback)((text, undo) => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
    const id = ++toastSeq.current;
    setToast({ id, text, ...undo === void 0 ? {} : { undo } });
    toastTimer.current = window.setTimeout(() => {
      setToast((current) => current?.id === id ? null : current);
    }, 4e3);
  }, []);
  const clearDescendantFolds = (0, import_react5.useCallback)((turn, assistantId) => {
    if (turn !== null) {
      setCollapsedAssistants((prev) => {
        const next = new Set(prev);
        for (const t2 of timelineTurns) {
          if (t2.turn !== turn) continue;
          for (const g of t2.groups) for (const c of g.cells) {
            if (c.kind === "message") next.delete(trajectoryRecordId(c));
          }
        }
        return next;
      });
      setCollapsedTools((prev) => {
        const next = new Set(prev);
        for (const t2 of timelineTurns) {
          if (t2.turn !== turn) continue;
          for (const g of t2.groups) for (const c of g.cells) {
            if (c.kind === "tool" || c.kind === "subtool") next.delete(trajectoryRecordId(c));
          }
        }
        return next;
      });
      return;
    }
    if (assistantId === void 0) return;
    setCollapsedTools((prev) => {
      const next = new Set(prev);
      for (const r of toolIndex.records) {
        if (r.callId) next.delete(`tool\0call\0${r.callId}`);
      }
      return next;
    });
  }, [timelineTurns, toolIndex]);
  const changeQuery = (0, import_react5.useCallback)((next) => {
    const pane = document.querySelector("[data-trajectory-scroll]");
    if (pane instanceof HTMLElement) restoreScroll.current = pane.scrollTop;
    if (next === "" && queryText2.trim() !== "") {
      const previous = queryText2;
      pushToast(qt("toast.cleared"), () => setQueryText(previous));
    }
    setQueryText(next);
  }, [pushToast, qt, queryText2]);
  const toggleAllTurnsWithUndo = (0, import_react5.useCallback)(() => {
    const previous = collapsedTurns;
    const collapsed = !allTurnsCollapsed;
    toggleAllTurns();
    pushToast(qt(collapsed ? "toast.collapsedAll" : "toast.expandedAll"), () => setCollapsedTurns(previous));
  }, [allTurnsCollapsed, collapsedTurns, pushToast, qt, toggleAllTurns]);
  const loadEarlierHistory = (0, import_react5.useCallback)(async () => {
    if (!hasResidentOlderHistory && !await loadOlder()) return false;
    setHistoryNodeLimit((limit) => limit + HISTORY_PAGE_NODES);
    return true;
  }, [hasResidentOlderHistory, loadOlder]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `${views_default.root} bt-trajectory-root`, "data-conversation-composer-overlay": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      QueryBar,
      {
        query: queryText2,
        onQuery: changeQuery,
        tokens: query.tokens,
        stats: {
          total: toolStats.total,
          matched: matchedCells.size,
          hidden: query.active ? toolStats.total - matchedCells.size : 0,
          errors: toolStats.errors,
          running: toolStats.running
        },
        tools: summarizeTools(toolIndex),
        turns: queryTurns,
        flat,
        onToggleFlat: () => {
          setFlat((value) => !value);
        },
        showTime,
        onToggleTime: () => setShowTime((value) => !value),
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
        onToggleAllTurns: toggleAllTurnsWithUndo,
        allAssistantsCollapsed,
        onToggleAllAssistants: toggleAllAssistants,
        allSubCallsCollapsed,
        onToggleAllSubCalls: toggleAllSubCalls,
        t,
        qt: typeof qt === "function" ? qt : (key) => key
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: views_default.ledger, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      TrajectoryTable,
      {
        initialScrollTop: restoreScroll.current,
        showTime,
        onClearDescendantFolds: clearDescendantFolds,
        t,
        qt: typeof qt === "function" ? qt : (key) => key,
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
        hiddenHints,
        callMeta,
        maxDurationMs,
        onShowAll: () => changeQuery(""),
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
      hiddenIndexes === null ? "all" : `f${[...hiddenIndexes].join(",")}`
    ) }),
    toast !== null && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: views_default.toast,
        role: "status",
        onMouseEnter: () => {
          if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
          toastTimer.current = null;
        },
        onMouseLeave: () => {
          if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
          toastTimer.current = window.setTimeout(() => {
            setToast((current) => current?.id === toast.id ? null : current);
          }, 2e3);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: toast.text }),
          toast.undo !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: views_default.toastAction, onClick: () => {
            toast.undo?.();
            dismissToast();
          }, children: qt("toast.undo") }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: views_default.toastClose, "aria-label": qt("toast.dismiss"), onClick: dismissToast, children: "\xD7" })
        ]
      }
    )
  ] });
}

// src/vendor/trajectory/theme.css
var theme_default = "/* Better Trajectory design tokens (docs/design-language.md). */\n.bt-trajectory-root {\n  --bt-surface: var(--dsw-alias-bg-layer-1, #ffffff);\n  --bt-surface-2: var(--dsw-alias-bg-layer-2, #f6f7f9);\n  --bt-surface-3: var(--dsw-alias-bg-layer-3, #eef0f3);\n  --bt-line: var(--dsw-alias-border-l2, #e6e8eb);\n  --bt-line-soft: var(--dsw-alias-border-l1, #f0f2f4);\n  --bt-text: var(--dsw-alias-label-primary, #1c2128);\n  --bt-text-2: var(--dsw-alias-label-secondary, #5b6470);\n  --bt-text-3: var(--dsw-alias-label-tertiary, #9aa1ab);\n  --bt-accent: var(--dsw-alias-brand-primary, #2563eb);\n  --bt-error: var(--dsw-alias-state-error-primary, #d92d20);\n  --bt-warn: #d97706;\n  --bt-ok: #12b76a;\n  --bt-error-soft: color-mix(in srgb, var(--bt-error) 8%, transparent);\n  --bt-warn-soft: color-mix(in srgb, var(--bt-warn) 10%, transparent);\n  --bt-accent-soft: color-mix(in srgb, var(--bt-accent) 8%, transparent);\n\n  --bt-dur-1: 60ms;\n  --bt-dur-2: 90ms;\n  --bt-dur-3: 120ms;\n  --bt-dur-4: 160ms;\n  --bt-dur-5: 220ms;\n  --bt-ease-out: cubic-bezier(.25, 1, .5, 1);\n  --bt-ease-std: cubic-bezier(.2, 0, 0, 1);\n  --bt-ease-exit: cubic-bezier(.4, 0, 1, 1);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt-trajectory-root {\n    --bt-dur-1: 0ms;\n    --bt-dur-2: 0ms;\n    --bt-dur-3: 0ms;\n    --bt-dur-4: 0ms;\n    --bt-dur-5: 0ms;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt-trajectory-root,\n  .bt-trajectory-root * {\n    transition-duration: 0ms !important;\n    animation-duration: 0ms !important;\n  }\n}\n\n.bt-trajectory-root {\n  --bt-tool: #b45309;\n  --bt-assistant: #7c3aed;\n  --bt-user: #1d4ed8;\n  --bt-context: #047857;\n}\n\n@media (prefers-color-scheme: dark) {\n  .bt-trajectory-root {\n    --bt-tool: #f0b35a;\n    --bt-assistant: #b79cff;\n    --bt-user: #7aa7ff;\n    --bt-context: #5ed3a8;\n  }\n}\n";

// src/client/fork-view.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var themeInstalled = false;
function installTheme() {
  if (themeInstalled || typeof document === "undefined") return;
  themeInstalled = true;
  const style = document.createElement("style");
  style.setAttribute("data-bt-theme", "");
  style.textContent = theme_default;
  document.head.appendChild(style);
}
function ForkView({ qt, ...rest }) {
  installTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TrajectoryView, { ...rest, qt });
}

// src/client/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var inject = ["slots", "locale"];
var name = "dsh-better-trajectory-client";
var NATIVE_VIEW_ID = "trajectory";
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "better-trajectory: dictionaries");
  const t = ctx.locale.bind(NS);
  let replaced;
  let original;
  const Wrapped = (props) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ForkView, { ...props, qt: t });
  const install = () => {
    const entry = ctx.slots.entries("conversation.view").find((item) => item.options.id === NATIVE_VIEW_ID);
    if (entry === void 0 || entry.component === Wrapped) return;
    replaced = entry;
    original = entry.component;
    entry.component = Wrapped;
  };
  ctx.effect(() => {
    install();
    const timers = [0, 50, 250, 1e3].map((delay) => window.setTimeout(install, delay));
    return () => {
      for (const timer of timers) window.clearTimeout(timer);
      if (replaced !== void 0 && replaced.component === Wrapped) replaced.component = original;
    };
  }, "better-trajectory: view override");
}
return module.exports; } });
