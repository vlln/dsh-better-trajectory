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
  "context.inject": "\u4E0A\u4E0B\u6587\u6CE8\u5165",
  "context.recall": "\u8DE8\u4F1A\u8BDD\u53EC\u56DE",
  "context.form": "\u5F62\u5F0F",
  "context.source": "\u6765\u6E90\u5185\u5BB9",
  "context.form.instructions": "\u6307\u4EE4",
  "context.form.catalog": "\u76EE\u5F55",
  "context.form.snapshot": "\u5FEB\u7167",
  "context.form.notice": "\u901A\u77E5",
  "context.form.relay": "\u4E2D\u7EE7",
  "context.form.recall": "\u56DE\u5FC6",
  "field.request": "\u8BF7\u6C42",
  "tab.stats": "\u7EDF\u8BA1",
  "tab.raw": "\u539F\u59CB",
  "tab.preview": "\u9884\u89C8",
  "tab.summary": "\u6982\u8FF0",
  "chip.status": "\u72B6\u6001",
  "chip.callId": "ID",
  "payload.keys": "{count} \u4E2A\u952E",
  "payload.items": "{count} \u9879",
  "payload.lines": "{count} \u884C",
  "payload.chars": "{count} \u5B57\u7B26",
  "nav.back": "\u540E\u9000\uFF08Alt+\u2190\uFF09",
  "nav.forward": "\u524D\u8FDB\uFF08Alt+\u2192\uFF09",
  "head.copyArgs": "\u590D\u5236\u8C03\u7528\u53C2\u6570",
  "copied": "\u5DF2\u590D\u5236",
  "copy.failed": "\u590D\u5236\u5931\u8D25",
  "head.locate": "\u5728\u5217\u8868\u4E2D\u5B9A\u4F4D",
  "chip.turn": "\u8F6E\u6B21",
  "raw.noEvents": "\u8FD9\u6761\u8BB0\u5F55\u6CA1\u6709\u843D\u5728\u5DF2\u52A0\u8F7D\u7684\u4E8B\u4EF6\u7A97\u53E3\u91CC\uFF08\u6298\u53E0\u6458\u8981\u6216\u6D41\u5F0F\u8BB0\u5F55\uFF09\u3002",
  "position.turn": "\u8F6E",
  "position.step": "\u6B65",
  "chip.duration": "\u8017\u65F6",
  "raw.search": "\u641C\u7D22\u952E\u4E0E\u503C\u2026",
  "raw.expandAll": "\u5C55\u5F00\u5168\u90E8",
  "raw.collapseAll": "\u6536\u8D77\u5168\u90E8",
  "raw.copyAll": "\u590D\u5236 JSON",
  "raw.matches": "{count} \u5904\u547D\u4E2D",
  "raw.copy": "\u590D\u5236\u6B64\u8282\u70B9",
  "raw.loadMore": "\u518D\u52A0\u8F7D {count} \u9879",
  "query.placeholder": "\u7B5B\u9009\uFF0C\u5982 tool:bash status:error args:path \u2026\uFF08\u53F3\u4FA7 ? \u770B\u8BED\u6CD5\uFF09",
  "syntax.title": "\u641C\u7D22\u8BED\u6CD5",
  "syntax.lead": '\u7A7A\u683C\u5206\u9694\uFF0C\u591A\u4E2A\u6761\u4EF6\u53E0\u52A0\uFF08AND\uFF09\uFF1B- \u53D6\u53CD\uFF0C| \u5E76\u5217\uFF0C* \u901A\u914D\uFF0C"\u2026" \u4FDD\u7559\u7A7A\u683C',
  "syntax.tool": "\u5DE5\u5177\u540D\uFF08\u53EA\u5339\u914D\u8C03\u7528\u884C\uFF09\uFF0C\u652F\u6301 * \u901A\u914D\u4E0E | \u5E76\u5217",
  "syntax.type": "\u884C\u7684\u79CD\u7C7B\uFF08\u4E0A\u6E38 7 \u79CD\u539F\u6837\uFF09\uFF1Atool / subtool / message / user / context / system / compacted",
  "syntax.role": "\u884C\u8BF4\u7684\u662F\u8C01\u53D1\u7684\uFF1Auser / assistant / system / tool\uFF08\u4E0A\u4E0B\u6587\u6CE8\u5165\u5728\u65E5\u5FD7\u91CC\u4E5F\u662F user\uFF09",
  "syntax.model": "\u8BE5\u884C\u6240\u5728\u6B65\u9AA4\u8BF7\u6C42\u7684\u6A21\u578B\uFF0C\u652F\u6301 * \u4E0E |",
  "syntax.provider": "\u8BE5\u884C\u6240\u5728\u6B65\u9AA4\u8BF7\u6C42\u7684\u63D0\u4F9B\u65B9\uFF0C\u652F\u6301 * \u4E0E |",
  "syntax.source": "\u4E0A\u4E0B\u6587\u884C\u7684\u6765\u6E90\uFF08tool-jobs / time-context / AGENTS.md\u2026\uFF09\uFF0C\u652F\u6301 * \u4E0E |",
  "syntax.form": "\u4E0A\u4E0B\u6587\u884C\u7684\u5F62\u5F0F\uFF08notice / snapshot / instructions / catalog / relay\uFF09",
  "syntax.step": "\u6B65\u9AA4\u53F7\uFF0C\u6216 a-b \u8303\u56F4\uFF08\u6BCF\u8F6E\u4ECE 1 \u5F00\u59CB\uFF09",
  "syntax.status": "\u72B6\u6001\uFF1Aok / error / running",
  "syntax.turn": "\u56DE\u5408\u53F7\uFF0C\u652F\u6301\u533A\u95F4\uFF08turn:2-5\uFF09",
  "syntax.ms": "\u8017\u65F6\uFF08\u6BEB\u79D2\uFF09\uFF0C\u652F\u6301 > < \u4E0E\u533A\u95F4",
  "syntax.code": "\u9519\u8BEF\u7801\uFF1Bcode:* \u8868\u793A\u300C\u6709\u9519\u8BEF\u7801\u300D",
  "syntax.args": "\u8F93\u5165\u4FA7\u6587\u672C\uFF08\u5DE5\u5177\u53C2\u6570 / \u7528\u6237\u4E0E\u4E0A\u4E0B\u6587\u6B63\u6587\uFF09",
  "syntax.result": "\u8F93\u51FA\u4FA7\u6587\u672C\uFF08\u5DE5\u5177\u7ED3\u679C / \u52A9\u624B\u6B63\u6587\uFF09",
  "syntax.error": "\u5931\u8D25\u8BB0\u5F55\u7684\u9519\u8BEF\u6587\u672C",
  "syntax.phrase": "\u5E26\u7A7A\u683C\u7684\u77ED\u8BED",
  "syntax.negate": "\u53D6\u53CD\uFF1A\u4E0D\u5305\u542B\u8FD9\u4E2A\u8BCD\u6216\u8FD9\u4E2A\u503C",
  "syntax.fulltext": "\u5168\u6587\uFF1A\u540D\u79F0 / \u53C2\u6570 / \u7ED3\u679C / \u6B63\u6587",
  "query.suggestions": "\u7B5B\u9009\u5EFA\u8BAE",
  "query.time": "\u65F6\u95F4",
  "query.timeHint": "\u65F6\u95F4\u5217",
  "query.summary": "\u547D\u4E2D {matched}",
  "query.hidden": "{count} \u4E2A\u88AB\u8FC7\u6EE4",
  "query.showAll": "\u663E\u793A\u5168\u90E8",
  "query.clearAll": "\u6E05\u9664",
  "totals.records": "\u8BB0\u5F55",
  "totals.calls": "\u8C03\u7528",
  "totals.errors": "\u9519\u8BEF",
  "totals.duration": "\u65F6\u957F",
  "totals.whole": "\u5168\u7A0B",
  "totals.window": "\u672C\u7A97\u53E3",
  "totals.turns": "\u8F6E",
  "totals.steps": "\u6B65",
  "totals.llm": "\u6A21\u578B",
  "totals.tool": "\u5DE5\u5177",
  "totals.wholeHint": "\u6574\u4E2A\u4F1A\u8BDD\u7684\u7EDF\u8BA1\uFF08\u5BBF\u4E3B\u6295\u5F71\uFF0C\u4E0E\u5DF2\u52A0\u8F7D\u8303\u56F4\u65E0\u5173\uFF09",
  "totals.partial": "\u2265 \u5DF2\u52A0\u8F7D",
  "totals.partialHint": "\u53EA\u7EDF\u8BA1\u5DF2\u52A0\u8F7D\u7684\u8BB0\u5F55\uFF1B\u66F4\u65E9\u7684\u5386\u53F2\u8FD8\u6CA1\u53D6\u56DE\uFF08\u70B9\u8F68\u8FF9\u6761\u5DE6\u7AEF\u7BAD\u5934\u7EE7\u7EED\u52A0\u8F7D\uFF09",
  "timeline.earlier": "\u5411\u66F4\u65E9\u7684\u8BB0\u5F55\u79FB\u52A8\uFF08\u5355\u51FB\u4E00\u5C4F\uFF0C\u6309\u4F4F\u8FDE\u7EED\uFF09",
  "timeline.later": "\u5411\u66F4\u65B0\u7684\u8BB0\u5F55\u79FB\u52A8\uFF08\u5355\u51FB\u4E00\u5C4F\uFF0C\u6309\u4F4F\u8FDE\u7EED\uFF09",
  "timeline.cursor": "\u5149\u6807",
  "timeline.count": "\u8BB0\u5F55",
  "timeline.period": "\u533A\u95F4",
  "timeline.selected": "\u9009\u4E2D",
  "timeline.records": "{count} \u6761",
  "row.error": "error",
  "toast.cleared": "\u5DF2\u6E05\u7A7A\u67E5\u8BE2",
  "empty.none": "\u65E0\u8BB0\u5F55",
  "toast.collapsedAll": "\u5DF2\u6298\u53E0\u5168\u90E8\u8F6E\u6B21",
  "toast.expandedAll": "\u5DF2\u5C55\u5F00\u5168\u90E8\u8F6E\u6B21",
  "empty.noMatch": "\u65E0\u547D\u4E2D",
  "toast.undo": "\u64A4\u9500",
  "toast.dismiss": "\u5173\u95ED\u63D0\u793A",
  "row.running": "running",
  "row.expandCalls": "\u5C55\u5F00\u8C03\u7528",
  "row.collapseCalls": "\u6536\u8D77\u8C03\u7528",
  "row.expandSubCalls": "\u5C55\u5F00\u5B50\u8C03\u7528",
  "row.collapseSubCalls": "\u6536\u8D77\u5B50\u8C03\u7528",
  "query.text": "\u6587\u672C",
  "query.removeToken": "\u79FB\u9664 {token}"
};
var en = {
  "context.inject": "Context injection",
  "context.recall": "Session recall",
  "context.form": "Form",
  "context.source": "Source body",
  "context.form.instructions": "Instructions",
  "context.form.catalog": "Catalog",
  "context.form.snapshot": "Snapshot",
  "context.form.notice": "Notice",
  "context.form.relay": "Relay",
  "context.form.recall": "Recall",
  "field.request": "Request",
  "tab.stats": "Stats",
  "tab.raw": "Raw",
  "tab.preview": "Preview",
  "tab.summary": "Summary",
  "chip.status": "Status",
  "chip.callId": "ID",
  "payload.keys": "{count} keys",
  "payload.items": "{count} items",
  "payload.lines": "{count} lines",
  "payload.chars": "{count} chars",
  "head.copyArgs": "Copy call arguments",
  "copied": "Copied",
  "copy.failed": "Copy failed",
  "nav.back": "Back (Alt+\u2190)",
  "nav.forward": "Forward (Alt+\u2192)",
  "head.locate": "Locate in list",
  "chip.turn": "Turn",
  "raw.noEvents": "This record has no entry in the loaded event window (a folded summary or a live row).",
  "position.turn": "turn",
  "position.step": "step",
  "chip.duration": "Duration",
  "raw.search": "Search keys and values\u2026",
  "raw.expandAll": "Expand all",
  "raw.collapseAll": "Collapse all",
  "raw.copyAll": "Copy JSON",
  "raw.matches": "{count} matches",
  "raw.copy": "Copy node",
  "raw.loadMore": "Load {count} more",
  "query.placeholder": "Filter, e.g. tool:bash status:error args:path \u2026 (? for syntax)",
  "syntax.title": "Query syntax",
  "syntax.lead": 'Space-separated (AND); - excludes, | alternatives, * wildcard, "\u2026" keeps spaces',
  "syntax.tool": "Tool name (calls only); * wildcard and | alternatives",
  "syntax.type": "Row kind (the 7 upstream kinds): tool / subtool / message / user / context / system / compacted",
  "syntax.role": "Who said the row: user / assistant / system / tool (a context injection is a user message in the log)",
  "syntax.model": "Model of the step the row belongs to; * and | work",
  "syntax.provider": "Provider of the step the row belongs to; * and | work",
  "syntax.source": "Context row source (tool-jobs / time-context / AGENTS.md\u2026); * and | work",
  "syntax.form": "Context row form (notice / snapshot / instructions / catalog / relay)",
  "syntax.step": "Step number, or a-b range (restarts at 1 in every turn)",
  "syntax.status": "Status: ok / error / running",
  "syntax.turn": "Turn number, ranges allowed (turn:2-5)",
  "syntax.ms": "Duration in ms; supports > < and ranges",
  "syntax.code": "Error code; code:* means it has one",
  "syntax.args": "Input side (tool arguments / user and context body)",
  "syntax.result": "Output side (tool result / assistant body)",
  "syntax.error": "Error text of failed records",
  "syntax.phrase": "A phrase with spaces",
  "syntax.negate": "Excludes this word or value",
  "syntax.fulltext": "Full text: name / arguments / result / body",
  "query.suggestions": "Filter suggestions",
  "query.time": "Time",
  "query.timeHint": "Time column",
  "query.summary": "{matched} matched",
  "query.hidden": "{count} filtered out",
  "query.showAll": "Show all",
  "query.clearAll": "Clear",
  "totals.records": "Records",
  "totals.calls": "Calls",
  "totals.errors": "Errors",
  "totals.duration": "Span",
  "totals.whole": "All",
  "totals.window": "Window",
  "totals.turns": "turns",
  "totals.steps": "steps",
  "totals.llm": "model",
  "totals.tool": "tools",
  "totals.wholeHint": "Whole-session figures from the host projection, independent of what is loaded",
  "totals.partial": "\u2265 loaded",
  "totals.partialHint": "Counts cover the loaded window only; older history has not been paged in yet (use the left arrow on the strip)",
  "timeline.earlier": "Move toward earlier records (click once, hold to keep going)",
  "timeline.later": "Move toward newer records (click once, hold to keep going)",
  "timeline.cursor": "Cursor",
  "timeline.count": "Records",
  "timeline.period": "Bar period",
  "timeline.selected": "Selected",
  "timeline.records": "{count}",
  "row.error": "error",
  "toast.cleared": "Query cleared",
  "empty.none": "No records",
  "toast.collapsedAll": "All turns folded",
  "toast.expandedAll": "All turns expanded",
  "empty.noMatch": "No matches",
  "toast.undo": "Undo",
  "toast.dismiss": "Dismiss",
  "row.running": "running",
  "row.expandCalls": "Expand calls",
  "row.collapseCalls": "Collapse calls",
  "row.expandSubCalls": "Expand subcalls",
  "row.collapseSubCalls": "Collapse subcalls",
  "query.text": "Text",
  "query.removeToken": "Remove {token}"
};

// src/client/fork-view.tsx
var import_react9 = require("react");

// src/vendor/trajectory/TrajectoryView.tsx
var import_react8 = require("react");

// src/vendor/trajectory/TrajectoryTable.tsx
var import_react5 = require("react");

// src/vendor/trajectory/KindTag.module.css
var css = "/* Kind tag \u2014 one definition for every place a record kind is labelled\n   (ledger rows, hover card, timeline hover). Mirrors the native\n   @deepseek-ai/dsh-client-ui-trajectory `.kindTag`: 19px tall, 0 5px padding,\n   1px transparent border, radius-xs (4px), 10px/16px at weight 650,\n   letter-spacing .035em, natural width. Colours come straight from the\n   `--dsw-alias-*` palette, so light and dark both match the native view. */\n\n.bt_KindTag_tag_Yjz2-6 {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  box-sizing: border-box;\n  width: auto;\n  max-width: 72px;\n  height: 19px;\n  padding: 0 5px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 10px;\n  font-weight: 650;\n  line-height: 16px;\n  letter-spacing: 0.035em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  user-select: none;\n  background: var(--dsw-alias-bg-module-platform);\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_KindTag_tag_Yjz2-6[data-kind='tool'] {\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n}\n\n.bt_KindTag_tag_Yjz2-6[data-kind='subtool'] {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-label) 62%,\n    var(--dsw-alias-label-tertiary)\n  );\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-tertiary) 58%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_KindTag_tag_Yjz2-6[data-kind='message'] {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_KindTag_tag_Yjz2-6[data-kind='user'] {\n  color: var(--dsw-alias-state-business-primary);\n  background: var(--dsw-alias-state-business-tertiary);\n}\n\n.bt_KindTag_tag_Yjz2-6[data-kind='context'] {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="VnKsT0"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "VnKsT0");
  el.textContent = css;
  document.head.appendChild(el);
}
var KindTag_default = { "tag": "bt_KindTag_tag_Yjz2-6" };

// src/vendor/trajectory/KindTag.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function KindTag({ kind, label }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: KindTag_default.tag, "data-kind": kind, children: label });
}

// src/vendor/trajectory/DetailSection.tsx
var import_react = require("react");

// src/vendor/trajectory/DetailSection.module.css
var css2 = `/* Detail section \u2014 one collapsible block inside the inspector, in place of the
   old "preview here, full view in another tab" split. Header carries a count
   badge so a collapsed block still says how much is inside. */

.bt_DetailSection_section_ZMSe_2 {
  border-top: 1px solid var(--bt-line-soft, #f0f2f4);
}

.bt_DetailSection_section_ZMSe_2:first-child {
  border-top: 0;
}

.bt_DetailSection_header_w1Expc {
  display: flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 12px 0 0;
  color: var(--bt-text, #1c2128);
}

.bt_DetailSection_header_w1Expc:hover {
  background: var(--bt-hover, rgba(16, 24, 40, 0.06));
}

/* the whole row is the toggle target, except where an action sits */
.bt_DetailSection_toggle_tWul6G {
  all: unset;
  display: flex;
  flex: 1;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  min-width: 0;
  height: 30px;
  padding: 0 0 0 12px;
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.bt_DetailSection_toggle_tWul6G:focus-visible {
  outline: 2px solid var(--bt-accent, #2563eb);
  outline-offset: -2px;
}

.bt_DetailSection_chevron_n1-_Eg {
  flex: none;
  width: 10px;
  color: var(--bt-text-3, #9aa1ab);
  font-size: 9px;
  line-height: 1;
  transition: transform var(--bt-dur-2, 90ms) var(--bt-ease-std, ease);
}

.bt_DetailSection_chevron_n1-_Eg[data-open] {
  transform: rotate(90deg);
}

.bt_DetailSection_title_33ZS0S {
  flex: none;
  font-size: 12px;
  font-weight: 600;
}

.bt_DetailSection_badge_1yyT3Q {
  flex: none;
  color: var(--bt-text-3, #9aa1ab);
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
}

.bt_DetailSection_actions_tCLVmM {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
}

.bt_DetailSection_body_6b0Rly {
  padding: 0 12px 10px;
}

.bt_DetailSection_body_6b0Rly[data-bare] {
  padding: 0 0 8px;
}

/* plain-text payload (bash output and friends) */
.bt_DetailSection_text_Y3OZVe {
  margin: 0;
  padding: 8px 10px;
  overflow: auto;
  border: 1px solid var(--bt-line, #e6e8eb);
  border-radius: 6px;
  background: var(--bt-surface-2, #f6f7f9);
  color: var(--bt-text-2, #5b6470);
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 11px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
}

/* failed tool payload: the native treatment is red text on the error surface,
   not a separate banner \u2014 the status is already stated in the meta row */
.bt_DetailSection_text_Y3OZVe[data-tone='error'] {
  border-color: color-mix(in srgb, var(--bt-error, #d92d20) 26%, transparent);
  background: var(--bt-error-soft, #fef3f2);
  color: var(--bt-error, #d92d20);
}

.bt_DetailSection_empty_ZlEpum {
  margin: 0;
  padding: 2px 0 6px;
  color: var(--bt-text-3, #9aa1ab);
  font-size: 11px;
}`;
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="1t6sNs"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "1t6sNs");
  el.textContent = css2;
  document.head.appendChild(el);
}
var DetailSection_default = { "section": "bt_DetailSection_section_ZMSe_2", "header": "bt_DetailSection_header_w1Expc", "toggle": "bt_DetailSection_toggle_tWul6G", "chevron": "bt_DetailSection_chevron_n1-_Eg", "title": "bt_DetailSection_title_33ZS0S", "badge": "bt_DetailSection_badge_1yyT3Q", "actions": "bt_DetailSection_actions_tCLVmM", "body": "bt_DetailSection_body_6b0Rly", "text": "bt_DetailSection_text_Y3OZVe", "empty": "bt_DetailSection_empty_ZlEpum" };

// src/vendor/trajectory/DetailSection.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function DetailSection({
  title,
  badge,
  actions,
  defaultOpen = true,
  bare = false,
  children
}) {
  const [open, setOpen] = (0, import_react.useState)(defaultOpen);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: DetailSection_default.section, "data-open": open || void 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: DetailSection_default.header, "data-copy-reveal": true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          className: DetailSection_default.toggle,
          "aria-expanded": open,
          onClick: () => {
            setOpen((value) => !value);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: DetailSection_default.chevron, "data-open": open || void 0, "aria-hidden": "true", children: "\u25B8" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: DetailSection_default.title, children: title }),
            badge !== void 0 && badge !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: DetailSection_default.badge, children: badge })
          ]
        }
      ),
      actions !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: DetailSection_default.actions, children: actions })
    ] }),
    open && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: DetailSection_default.body, "data-bare": bare || void 0, children })
  ] });
}
function DetailText({ text, tone }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: DetailSection_default.text, "data-tone": tone, children: text });
}

// src/vendor/trajectory/CopyButton.tsx
var import_react2 = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// src/vendor/trajectory/CopyButton.module.css
var css3 = "/* The one copy button: same box, same icon, same reveal everywhere. */\n.bt_CopyButton_button_KHDOtv {\n  all: unset;\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  color: var(--bt-text-3, var(--dsw-alias-label-tertiary));\n  cursor: pointer;\n  transition: opacity 120ms ease, background-color 120ms ease, color 120ms ease;\n}\n\n.bt_CopyButton_button_KHDOtv:hover {\n  background: var(--bt-hover, var(--dsw-alias-interactive-bg-hover));\n  color: var(--bt-text, var(--dsw-alias-label-primary));\n}\n\n.bt_CopyButton_button_KHDOtv:focus-visible {\n  outline: 2px solid var(--bt-accent, var(--dsw-alias-brand-primary));\n  outline-offset: 0;\n}\n\n.bt_CopyButton_button_KHDOtv[data-state='failed'] {\n  color: var(--bt-error, var(--dsw-alias-state-error-primary, #d92d20));\n}\n\n/* Hover reveal. The host marks itself with `data-copy-reveal`; attribute\n   selectors are not scoped by CSS modules, so any host can opt in. */\n.bt_CopyButton_button_KHDOtv[data-reveal='hover'] {\n  opacity: 0;\n}\n\n[data-copy-reveal]:hover .bt_CopyButton_button_KHDOtv[data-reveal='hover'],\n[data-copy-reveal]:focus-within .bt_CopyButton_button_KHDOtv[data-reveal='hover'],\n.bt_CopyButton_button_KHDOtv[data-reveal='hover']:focus-visible {\n  opacity: 1;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt_CopyButton_button_KHDOtv {\n    transition: none;\n  }\n}";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="MWJMLk"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "MWJMLk");
  el.textContent = css3;
  document.head.appendChild(el);
}
var CopyButton_default = { "button": "bt_CopyButton_button_KHDOtv" };

// src/vendor/trajectory/CopyButton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function CopyButton({
  text,
  label,
  copiedLabel,
  failedLabel,
  reveal = "hover",
  className
}) {
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
  const title = state === "idle" ? label : state === "copied" ? copiedLabel : failedLabel;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      type: "button",
      className: className === void 0 ? CopyButton_default.button : `${CopyButton_default.button} ${className}`,
      "data-reveal": reveal,
      "data-state": state,
      title,
      "aria-label": title,
      onClick: (event) => {
        event.stopPropagation();
        void (0, import_dsh_client_ui_primitives.writeClipboard)(text).then(
          (ok) => {
            setState(ok ? "copied" : "failed");
          },
          () => {
            setState("failed");
          }
        );
      },
      children: state === "copied" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives.IconCheckOutlineRegular, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives.IconCopyOutlineRegular, { size: 12 })
    }
  );
}

// src/vendor/trajectory/HoverCard.tsx
var import_react3 = require("react");

// src/vendor/trajectory/HoverCard.module.css
var css4 = "/* Hover card \u2014 one implementation for the ledger rows and the timeline.\n   Previously each surface carried its own card: the row card was 300px with a\n   52px label column and the native kind tag, the timeline card 268/300px with a\n   16px mono pill and a 34/40px column, so the same hover looked different\n   depending on where it opened. */\n\n.bt_HoverCard_card_yGOTMW {\n  position: fixed;\n  z-index: 60;\n  width: 300px;\n  padding: 10px 12px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 8px;\n  background: var(--bt-surface, #fff);\n  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);\n  pointer-events: none;\n  animation: bt_HoverCard_bt-card-in_wRatlS var(--bt-dur-3, 120ms) var(--bt-ease-out, ease);\n}\n\n@keyframes bt_HoverCard_bt-card-in_wRatlS {\n  from { opacity: 0; transform: translateY(3px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.bt_HoverCard_head_b_LbGY {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n\n.bt_HoverCard_headText_yW7Daz {\n  color: var(--bt-text, #1c2128);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n}\n\n.bt_HoverCard_name_gjTmQN {\n  overflow: hidden;\n  color: var(--bt-text, #1c2128);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_HoverCard_error_72tYwq {\n  flex: none;\n  height: 19px;\n  padding: 0 5px;\n  border-radius: 4px;\n  background: var(--bt-error-soft, #fef3f2);\n  color: var(--bt-error, #d92d20);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9px;\n  line-height: 19px;\n  letter-spacing: 0.04em;\n}\n\n.bt_HoverCard_grid_7M2IsJ {\n  display: grid;\n  grid-template-columns: 52px 1fr;\n  gap: 3px 8px;\n  margin: 0;\n  font-size: 11px;\n}\n\n.bt_HoverCard_grid_7M2IsJ dt {\n  color: var(--bt-text-3, #9aa1ab);\n}\n\n.bt_HoverCard_grid_7M2IsJ dd {\n  margin: 0;\n  overflow: hidden;\n  color: var(--bt-text-2, #5b6470);\n  font-variant-numeric: tabular-nums;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_HoverCard_extra_94PjR7 {\n  display: -webkit-box;\n  margin: 8px 0 0;\n  padding-top: 8px;\n  border-top: 1px solid var(--bt-line-soft, #f0f2f4);\n  overflow: hidden;\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10px;\n  line-height: 1.5;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="31n_3o"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "31n_3o");
  el.textContent = css4;
  document.head.appendChild(el);
}
var HoverCard_default = { "card": "bt_HoverCard_card_yGOTMW", "bt-card-in": "bt_HoverCard_bt-card-in_wRatlS", "head": "bt_HoverCard_head_b_LbGY", "headText": "bt_HoverCard_headText_yW7Daz", "name": "bt_HoverCard_name_gjTmQN", "error": "bt_HoverCard_error_72tYwq", "grid": "bt_HoverCard_grid_7M2IsJ", "extra": "bt_HoverCard_extra_94PjR7" };

// src/vendor/trajectory/HoverCard.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function HoverCard({
  x,
  y,
  kind,
  label,
  name: name2,
  isError,
  rows,
  extra
}) {
  const left = Math.max(8, Math.min(x + 14, window.innerWidth - 320));
  const top = Math.max(8, Math.min(y + 16, window.innerHeight - 240));
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: HoverCard_default.card, style: { left, top }, role: "tooltip", children: [
    (kind !== void 0 || label !== void 0) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: HoverCard_default.head, children: [
      kind !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(KindTag, { kind, label }),
      kind === void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: HoverCard_default.headText, children: label }),
      name2 !== void 0 && name2 !== "" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: HoverCard_default.name, children: name2 }),
      isError === true && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: HoverCard_default.error, children: "error" })
    ] }),
    rows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dl", { className: HoverCard_default.grid, children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dt", { children: row.label }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dd", { children: row.value })
    ] }, index)) }),
    extra !== void 0 && extra !== "" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: HoverCard_default.extra, children: extra })
  ] });
}

// src/vendor/trajectory/TrajectoryTable.tsx
var import_react_virtual = require("@tanstack/react-virtual");
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

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
  const identity = `${encodeURIComponent(trajectoryRecordId(record2.cell))}\0${record2.cell.index}`;
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
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");
var PREVIEW_SOURCE_CHARACTERS = 2048;
var PREVIEW_OUTPUT_CHARACTERS = 512;
function trajectoryPreviewText(text) {
  const source = text.slice(0, PREVIEW_SOURCE_CHARACTERS);
  const compact = (0, import_dsh_client_ui_primitives2.extractMarkdownPlainText)(source).replace(/\s+/g, " ").trim();
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
var css5 = ".bt_TrajectoryTable_split_eDViiG {\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n\n  position: relative;\n  display: flex;\n  flex: 1;\n  width: 100%;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-layer-1);\n  container-type: inline-size;\n}\n\n.bt_TrajectoryTable_tablePane_KHiY-a {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: var(--dsh-trajectory-bottom-clearance, 0px);\n  container: trajectory-table / inline-size;\n}\n\n.bt_TrajectoryTable_historyLoading_3Z7BY1 {\n  position: sticky;\n  z-index: 5;\n  top: 0;\n  height: 0;\n  overflow: visible;\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_historyLoadingBar_iuAaSy {\n  display: flex;\n  width: 100%;\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  box-sizing: border-box;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt_TrajectoryTable_table_qfAk6E:not([data-scroll-ready='true']) {\n  visibility: hidden;\n}\n\n.bt_TrajectoryTable_table_qfAk6E {\n  --trajectory-turn-accent: color-mix(\n    in srgb,\n    var(--dsw-alias-trajectory-accent) 22%,\n    var(--dsw-alias-bg-layer-1)\n  );\n\n  width: 100%;\n  min-width: 0;\n  border-spacing: 0;\n  table-layout: fixed;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bt_TrajectoryTable_eventColumn_UTt04J {\n  width: 150px;\n}\n\n.bt_TrajectoryTable_eventColumn_UTt04J:where(:lang(zh)) {\n  width: 118px;\n}\n\n.bt_TrajectoryTable_contentColumn_GFcdso {\n  width: auto;\n}\n\n.bt_TrajectoryTable_table_qfAk6E th {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  box-sizing: border-box;\n  height: 30px;\n  padding: 0 8px;\n  overflow: hidden;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-tertiary);\n  background: var(--dsw-specific-sidebar-fill);\n  font: var(--dsw-font-xxs-12);\n  font-weight: 500;\n  text-align: left;\n  text-overflow: ellipsis;\n  user-select: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E td {\n  box-sizing: border-box;\n  height: 30px;\n  padding: 0 8px;\n  overflow: hidden;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_virtualSpacer_qcuMuX {\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody .bt_TrajectoryTable_virtualSpacer_qcuMuX td {\n  height: var(--trajectory-virtual-spacer-height);\n  padding: 0;\n  border: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):not([data-virtual-spacer]):not([data-history-load]) {\n  cursor: default;\n  outline: none;\n  transition:\n    background-color 120ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-timeline-focus='outside'] {\n  opacity: 0.24;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):not([data-virtual-spacer]):not([data-history-load]):not([data-selected='true']):hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n\n  .bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true']:hover {\n    background: transparent;\n  }\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true'] td {\n  height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-terminal-request-boundary='true'] td {\n  /* Retain the lower half of the 16px boundary marker at the table's end. */\n  height: 9px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-request-only='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  top: -15px;\n  bottom: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr:not([data-collapsed-summary]):focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-selected='true'] {\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover::before {\n    background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB::before,\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB:hover::before {\n    background: color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 18%,\n      var(--dsw-alias-bg-layer-1)\n    );\n    box-shadow: 0 0 0 1.5px var(--dsw-alias-state-business-primary);\n  }\n}\n\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']::before,\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y[data-request-status='error']:hover::before {\n    background: var(--dsw-alias-state-error-primary);\n  }\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover::after {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr:has(.bt_TrajectoryTable_requestBoundaryControl_sSuY1y:hover):not([data-selected='true']) {\n    background: transparent;\n  }\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  position: relative;\n}\n\n.bt_TrajectoryTable_turnRail_yQDSF9,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-end='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  bottom: 0;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-error='true'] .bt_TrajectoryTable_turnRail_yQDSF9 {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-error-primary) 22%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-error='true'] .bt_TrajectoryTable_selectionRail_wHs0wE {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-start='true'] td {\n  position: relative;\n  overflow: visible;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-turn-start='true']:not(:first-child) td::before {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 2px;\n  background: var(--dsw-alias-border-l1);\n  content: '';\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  overflow: visible !important;\n  padding-right: 4px !important;\n  padding-left: 36px !important;\n}\n\n.bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n.bt_TrajectoryTable_kindSlot_0oaQf9 {\n  display: flex;\n  flex: none;\n  align-items: flex-end;\n  justify-content: flex-end;\n  width: 76px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9:where(:lang(zh)) {\n  width: 44px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9 [role='tooltip'] {\n  border: 0;\n  background: var(--dsw-alias-bg-layer-2);\n  box-shadow: var(--dsw-elevation-panel);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_content_xtMqjv {\n  padding-left: 4px !important;\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_kindTag_QR8Bo3 {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  box-sizing: border-box;\n  height: 19px;\n  padding: 0 5px;\n  border: 1px solid transparent;\n  border-radius: var(--dsw-radius-xs);\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 650;\n  letter-spacing: 0.035em;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_table_qfAk6E .bt_TrajectoryTable_kindSlot_0oaQf9 .bt_TrajectoryTable_message_Kosacf {\n  justify-content: center;\n  width: 100%;\n}\n\n@container trajectory-table (max-width: 620px) {\n  .bt_TrajectoryTable_eventColumn_UTt04J {\n    width: 50px;\n  }\n\n  .bt_TrajectoryTable_event_ApG3nH {\n    padding-right: 3px !important;\n    padding-left: 28px !important;\n  }\n\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n    --request-boundary-base-left: 6px;\n  }\n\n  .bt_TrajectoryTable_kindSlot_0oaQf9 {\n    width: 19px;\n  }\n\n  .bt_TrajectoryTable_kindTag_QR8Bo3,\n  .bt_TrajectoryTable_table_qfAk6E .bt_TrajectoryTable_kindSlot_0oaQf9 .bt_TrajectoryTable_message_Kosacf {\n    justify-content: center;\n    width: 19px;\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu {\n    width: 13px;\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  .bt_TrajectoryTable_kindTagLabel_DubDfc {\n    max-width: 0;\n    opacity: 0;\n  }\n\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ {\n    max-width: 0;\n    opacity: 0;\n  }\n\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    max-width: 64px;\n    opacity: 1;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .bt_TrajectoryTable_eventColumn_UTt04J,\n  .bt_TrajectoryTable_event_ApG3nH,\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y,\n  .bt_TrajectoryTable_kindSlot_0oaQf9,\n  .bt_TrajectoryTable_kindTag_QR8Bo3,\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu,\n  .bt_TrajectoryTable_kindTagLabel_DubDfc,\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    transition-duration: 180ms;\n    transition-timing-function: var(--ds-ease-in-out);\n  }\n\n  .bt_TrajectoryTable_eventColumn_UTt04J,\n  .bt_TrajectoryTable_kindSlot_0oaQf9 {\n    transition-property: width;\n  }\n\n  .bt_TrajectoryTable_event_ApG3nH {\n    transition-property: padding-right, padding-left;\n  }\n\n  .bt_TrajectoryTable_requestBoundaryControl_sSuY1y {\n    transition-property: left;\n  }\n\n  .bt_TrajectoryTable_kindTag_QR8Bo3 {\n    transition-property: padding-right, padding-left;\n  }\n\n  .bt_TrajectoryTable_kindTagIcon_faG1Xu {\n    transition-property: width, opacity, transform;\n  }\n\n  .bt_TrajectoryTable_kindTagLabel_DubDfc,\n  .bt_TrajectoryTable_turnLabelFull_WfTyoZ,\n  .bt_TrajectoryTable_turnLabelCompact_bVGxV- {\n    transition-property: max-width, opacity;\n  }\n}\n\n.bt_TrajectoryTable_user_EiaeE6 {\n  color: var(--dsw-alias-state-business-primary);\n  background: var(--dsw-alias-state-business-tertiary);\n}\n\n.bt_TrajectoryTable_contextGreen_b5rkgS {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}\n\n.bt_TrajectoryTable_compacted_3aTcSn {\n  color: var(--dsw-alias-label-secondary);\n  background: var(--dsw-alias-bg-module-platform);\n}\n\n.bt_TrajectoryTable_promptDiffSections_v3FFVc {\n  display: flex;\n  max-height: 100%;\n  flex-direction: column;\n  padding: 10px 14px 14px;\n  gap: 14px;\n  overflow: auto;\n}\n\n.bt_TrajectoryTable_promptDiffSection_MRiY64 {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_promptDiffTitle_9JuX4g {\n  margin: 0 0 6px;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-strong-13);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_promptDiff_VkrRb4 {\n  margin: 0;\n  overflow: auto;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n  font: 11px/17px var(--ds-font-family-code);\n  white-space: pre;\n}\n\n.bt_TrajectoryTable_promptDiff_VkrRb4 span {\n  display: block;\n  min-width: max-content;\n  padding: 0 6px;\n}\n\n.bt_TrajectoryTable_promptDiffLinemeta_tLOrjX {\n  color: var(--dsw-alias-label-caption);\n  background: var(--dsw-alias-bg-module-platform);\n  user-select: none;\n}\n\n.bt_TrajectoryTable_promptDiffLinecontext_jNpM0B {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_promptDiffLineadded_sSKAHi {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 72%,\n    var(--dsw-alias-label-primary)\n  );\n  background: var(--dsw-alias-state-success-tertiary);\n}\n\n.bt_TrajectoryTable_promptDiffLineremoved_0GLhdY {\n  color: var(--dsw-alias-state-error-primary);\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-error-primary) 12%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_assistantVioletBright_kmQW8n {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_toolAmber_s0U4wU {\n  color: var(--dsw-alias-state-warn-label);\n  background: var(--dsw-alias-state-warn-tertiary);\n}\n\n.bt_TrajectoryTable_subtoolAmber_oyh_9d {\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-label) 62%,\n    var(--dsw-alias-label-tertiary)\n  );\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-warn-tertiary) 58%,\n    var(--dsw-alias-bg-layer-1)\n  );\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='turn'] td,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='assistant'] td,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary='tool'] td {\n  height: 20px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary] {\n  cursor: pointer;\n  outline: none;\n  transition: background-color 120ms var(--ds-ease-in-out);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary]:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-collapsed-summary]:focus-visible {\n  box-shadow: inset 0 0 0 1px var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n}\n\n.bt_TrajectoryTable_resultRequest_fX5Dw2,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='tool'] .bt_TrajectoryTable_contentText_W_U6-c,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_contentText_W_U6-c,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='tool'] .bt_TrajectoryTable_resultPreview__PAl0L,\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_resultPreview__PAl0L {\n  font-family: var(--ds-font-family-code);\n  font-size: 12px;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tbody tr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv {\n  padding-left: 26px;\n}\n\n.bt_TrajectoryTable_noOutputText_o_3gcc {\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dd.bt_TrajectoryTable_overviewCode_Wm9_Qx {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11px;\n  overflow-wrap: anywhere;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dd.bt_TrajectoryTable_error_Q9RpaF {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_errorPayload_cgEhYc {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_errorPayload_cgEhYc .bt_TrajectoryTable_resultBlockText_CiMsCo {\n  color: inherit;\n}\n\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_jsonPayload_gOir54.bt_TrajectoryTable_errorPayload_cgEhYc,\n.bt_TrajectoryTable_details_gIawuH .bt_TrajectoryTable_jsonPreview_fhOE3c.bt_TrajectoryTable_errorPayload_cgEhYc {\n  --json-tree-property: var(--dsw-alias-state-error-primary);\n  --json-tree-string: var(--dsw-alias-state-error-primary);\n  --json-tree-number: var(--dsw-alias-state-error-primary);\n  --json-tree-keyword: var(--dsw-alias-state-error-primary);\n  --json-tree-punctuation: var(--dsw-alias-state-error-primary);\n  --json-tree-icon: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_details_gIawuH {\n  position: relative;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  width: clamp(360px, 46%, 560px);\n  max-width: min(720px, calc(100% - 280px));\n  min-width: 0;\n  min-height: 0;\n  border-left: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_detailsResizeHandle_BpTEDx {\n  position: absolute;\n  z-index: 6;\n  top: 0;\n  bottom: 0;\n  left: -4px;\n  width: 8px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: col-resize;\n  touch-action: none;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_detailsResizeHandle_BpTEDx:focus-visible {\n  outline: none;\n}\n\n.bt_TrajectoryTable_detailsHeader_x9S6Zm {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  height: 42px;\n  padding: 0 8px 0 12px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bt_TrajectoryTable_detailsTitle_AoviUn {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  min-width: 0;\n  gap: 8px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_detailsLocation_J0RItF {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_close_XeXehI {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 18px;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_close_XeXehI:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k {\n  display: flex;\n  flex: none;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  height: 34px;\n  padding: 0 8px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  gap: 1px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  overscroll-behavior-x: contain;\n  scrollbar-width: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k::-webkit-scrollbar {\n  display: none;\n}\n\n.bt_TrajectoryTable_detailTab_dnFNRF {\n  position: relative;\n  flex: none;\n  padding: 0 9px;\n  border: 0;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  cursor: pointer;\n  font: var(--dsw-font-xs-13);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_detailTab_dnFNRF:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s::after {\n  position: absolute;\n  right: 9px;\n  bottom: 0;\n  left: 9px;\n  height: 2px;\n  border-radius: 1px 1px 0 0;\n  background: var(--dsw-alias-state-business-primary);\n  content: '';\n}\n\n.bt_TrajectoryTable_close_XeXehI:focus-visible,\n.bt_TrajectoryTable_detailTab_dnFNRF:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K {\n  flex: 1;\n  min-height: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: var(--dsh-trajectory-bottom-clearance, 0px);\n  scrollbar-gutter: stable;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv {\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  padding-bottom: calc(12px + var(--dsh-trajectory-bottom-clearance, 0px));\n  /* one scroll container for the whole summary: long attributes, sections and\n     previews must all be reachable, not clipped below the fold */\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n\n.bt_TrajectoryTable_detailBodySummary_nyRpjv > .bt_TrajectoryTable_overview_LDwNCJ {\n  flex: none;\n  padding-bottom: 0;\n  overflow: visible;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_summaryScrollRegion_E9DkdV:hover {\n    --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n    --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n  }\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ {\n  margin: 0;\n  padding: 8px 0;\n  font: var(--dsw-font-xs-13);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO:hover .bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ > div {\n  display: grid;\n  grid-template-columns: 94px minmax(0, 1fr);\n  min-height: 22px;\n  padding: 0 14px;\n  align-items: center;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ > .bt_TrajectoryTable_requestTokenDetail_3wWQOZ dt {\n  padding-left: 12px;\n}\n\n.bt_TrajectoryTable_usageGroup_xuIa90 .bt_TrajectoryTable_overview_LDwNCJ {\n  padding: 0;\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dt {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bt_TrajectoryTable_overview_LDwNCJ dd {\n  min-width: 0;\n  margin: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_timestampToggle_OOUyti {\n  all: unset;\n  color: inherit;\n  cursor: pointer;\n  font: inherit;\n  user-select: text;\n}\n\n.bt_TrajectoryTable_timestampToggle_OOUyti:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_resultSections_RGuWZ5 {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 0 12px;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_jsonPayload_gOir54 {\n  min-height: 0;\n  overflow: visible;\n}\n\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_resultBlocks_9td9Kg,\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_payload_zRquMY,\n.bt_TrajectoryTable_resultSection_Cg3eWv .bt_TrajectoryTable_noPayload_7dMYrF {\n  min-height: 0;\n  padding: 2px 14px 8px;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_overviewTitle_fQhguD:hover .bt_TrajectoryTable_overviewTitleIcon_jb5JXE {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_detailBodyProgram_74PHCq,\n.bt_TrajectoryTable_programPanel_XIc3sM {\n  display: flex;\n  min-height: 0;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_programPanel_XIc3sM {\n  flex: 1;\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_programToolbar_JboWqj {\n  display: flex;\n  flex: none;\n  height: 22px;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  padding: 0 12px;\n}\n\n.bt_TrajectoryTable_programLanguage_lCq8AA {\n  padding-right: 4px;\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe {\n  display: inline-flex;\n  box-sizing: border-box;\n  width: 20px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 0;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_programAction_5AWzqe:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe[aria-pressed='true'] {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe[data-state='failed'] {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTable_programAction_5AWzqe:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_ {\n  min-width: 0;\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_programPanel_XIc3sM > .bt_TrajectoryTable_programContent_mr8JT_ {\n  flex: 1;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez {\n  margin: 0 !important;\n  border-radius: 0;\n  background: var(--dsw-alias-bg-layer-1);\n  --dsl-code-block-line-white-space: pre;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez :where(pre) {\n  padding: 2px 14px 8px;\n  overflow: visible;\n  border-radius: 0;\n  background: var(--dsw-alias-bg-layer-1) !important;\n  font: 12px/16px var(--ds-font-family-code);\n  overflow-wrap: normal;\n  word-break: normal;\n  tab-size: 2;\n}\n\n.bt_TrajectoryTable_programSource_84M3Ez pre code > .line {\n  box-sizing: border-box;\n  width: max-content;\n  min-width: 100%;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_[data-wrap='true'] .bt_TrajectoryTable_programSource_84M3Ez {\n  --dsl-code-block-line-white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_programContent_mr8JT_[data-wrap='true'] .bt_TrajectoryTable_programSource_84M3Ez pre code > .line {\n  width: auto;\n  overflow-wrap: anywhere;\n  word-break: break-all;\n}\n\n.bt_TrajectoryTable_programOutput_Og2Bj5 {\n  margin: 0;\n  padding: 2px 14px 8px;\n  color: var(--dsw-alias-label-primary);\n  font: 12px/16px var(--ds-font-family-code);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.bt_TrajectoryTable_programError_3hMSz7::first-line {\n  color: var(--dsw-alias-state-error-primary);\n  font-weight: 600;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_jsonPreview_fhOE3c > :first-child,\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_overview_LDwNCJ {\n  padding: 2px 0 0;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_overview_LDwNCJ > div {\n  min-height: 22px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  color: var(--dsw-alias-label-primary);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']),\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) {\n  gap: 8px;\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) h1,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) h1 {\n  font: 600 16px/22px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) h2,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) h2 {\n  font: 600 15px/22px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h3, h4, h5, h6),\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) :where(h3, h4, h5, h6) {\n  font: 600 14px/20px var(--dsw-font-family);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :not(pre) > code,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) :not(pre) > code {\n  font: 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) table,\n.bt_TrajectoryTable_markdownPayload_CsUZcJ > div:not([data-markdown-variant='compact']) table {\n  font: var(--dsw-font-xs-13);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > :first-child {\n  margin-top: 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > :last-child {\n  margin-bottom: 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h1, h2, h3) {\n  margin: 12px 0 6px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(h4, h5, h6) {\n  margin: 10px 0 5px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) :where(p, ul, ol) {\n  margin: 8px 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) li:not(:first-child) {\n  margin-top: 3px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) blockquote {\n  margin-top: 8px;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) hr {\n  margin: 14px 0;\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV > div:not([data-markdown-variant='compact']) > .md-code-block {\n  margin: 10px 0;\n}\n\n.bt_TrajectoryTable_assistantContent_AG912s .bt_TrajectoryTable_markdownPayload_CsUZcJ,\n.bt_TrajectoryTable_assistantContent_AG912s .bt_TrajectoryTable_payload_zRquMY {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_thinkingQuote_8bhmqn {\n  --dsh-content-font-size-secondary: 13px;\n  --dsh-content-font-delta-secondary: 0px;\n  margin: 6px 14px 0 12px;\n  padding-left: 6px;\n  border-left: 2px solid var(--dsw-alias-markdown-citation);\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_thinkingQuoteOnlyPreview_-qIaDn {\n  margin-bottom: 8px;\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K > .bt_TrajectoryTable_assistantContentRendered_d98IKn .bt_TrajectoryTable_thinkingQuote_8bhmqn {\n  margin-top: 14px;\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  color: var(--dsw-alias-label-tertiary);\n  background: transparent;\n  cursor: pointer;\n  font: 600 12px/18px var(--dsw-font-family);\n  gap: 2px;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_thinkingChevron_mBPwJ3 {\n  flex: none;\n  transition: transform 120ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK[aria-expanded='true'] .bt_TrajectoryTable_thinkingChevron_mBPwJ3 {\n  transform: rotate(90deg);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_thinkingToggle_JW9hdK:hover {\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n\n.bt_TrajectoryTable_thinkingToggle_JW9hdK:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_markdownPreview_uI4YWV,\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_markdownPayload_CsUZcJ,\n.bt_TrajectoryTable_thinkingQuote_8bhmqn .bt_TrajectoryTable_payload_zRquMY {\n  min-height: 0;\n  padding: 2px 0;\n  color: var(--dsw-alias-label-secondary);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_assistantOutput_e6Ffzt {\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_TrajectoryTable_markdownPreview_uI4YWV {\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_markdownPayload_CsUZcJ {\n  min-height: 100%;\n  padding: 14px;\n}\n\n.bt_TrajectoryTable_jsonPayload_gOir54 {\n  min-height: 100%;\n}\n\n.bt_TrajectoryTable_jsonPreview_fhOE3c {\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_payload_zRquMY {\n  box-sizing: border-box;\n  min-height: 100%;\n  margin: 0;\n  padding: 14px;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-markdown-code-block);\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_payloadPreview_EAdNGv {\n  min-height: 0;\n  padding: 2px 14px 8px;\n}\n\n.bt_TrajectoryTable_sourceBlocks_C6ZrYe {\n  box-sizing: border-box;\n  min-height: 100%;\n  padding: 12px 14px;\n}\n\n.bt_TrajectoryTable_sourceBlock_xUq4zJ + .bt_TrajectoryTable_sourceBlock_xUq4zJ {\n  margin-top: 14px;\n}\n\n.bt_TrajectoryTable_sourceBlockHeader_a8uXfy,\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  margin-bottom: 3px;\n  gap: 3px;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV {\n  all: unset;\n  display: flex;\n  align-items: center;\n  width: max-content;\n  margin-bottom: 3px;\n  gap: 3px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_sourceBlockLabel_LH3cfA {\n  color: var(--dsw-alias-label-tertiary);\n  font: 11px/16px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n  flex: none;\n  color: var(--dsw-alias-label-caption);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:hover .bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:focus-visible {\n  outline: none;\n}\n\n.bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV:focus-visible .bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTable_sourceBlockContent_XoJ0B7 {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_messageImages_RfKfdd {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 14px 14px;\n  gap: 8px;\n}\n\n.bt_TrajectoryTable_attachments_E96dbm {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 14px 14px;\n  padding: 0;\n  gap: 8px;\n  list-style: none;\n}\n\n.bt_TrajectoryTable_attachmentsPreview_NcR8cV {\n  margin-block: 6px 8px;\n  gap: 6px;\n}\n\n.bt_TrajectoryTable_attachmentRow_oUBiDA {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  padding: 8px;\n  gap: 10px;\n  border: 0.5px solid var(--dsw-alias-border-l2-darkmode-thin);\n  border-radius: var(--dsw-radius-lg);\n}\n\n.bt_TrajectoryTable_attachmentIcon_UKoXGL {\n  display: grid;\n  flex: 0 0 48px;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n}\n\n.bt_TrajectoryTable_attachmentInfo_VyRFuz {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-width: 0;\n  gap: 3px;\n}\n\n.bt_TrajectoryTable_attachmentName_Uk44An {\n  overflow: hidden;\n  color: var(--dsw-alias-label-primary);\n  font-size: 12px;\n  line-height: 18px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_attachmentMetadata_IzXL36 {\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM {\n  margin-block: 8px;\n  border: 0.5px solid var(--dsw-alias-border-l2-darkmode-thin);\n  border-radius: var(--dsw-radius-md);\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary {\n  padding: 8px;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary .bt_TrajectoryTable_attachmentName_Uk44An {\n  display: block;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > summary:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 2px;\n}\n\n.bt_TrajectoryTable_attachmentDisclosure_OrBVJM > pre {\n  padding: 0 8px 8px;\n}\n\n.bt_TrajectoryTable_assistantToolCalls_LlhL2V {\n  box-sizing: border-box;\n  max-width: 100%;\n  margin: 2px 14px 12px;\n  padding: 0;\n  color: var(--dsw-alias-label-secondary);\n  font: 11px/17px var(--ds-font-family-code);\n  list-style: none;\n}\n\n.bt_TrajectoryTable_assistantToolCallsPreview_cSQzRY {\n  margin-top: 2px;\n  margin-bottom: 8px;\n}\n\n.bt_TrajectoryTable_assistantToolCalls_LlhL2V li {\n  min-width: 0;\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h {\n  all: unset;\n  display: flex;\n  box-sizing: border-box;\n  width: calc(100% + 4px);\n  min-width: 0;\n  height: 19px;\n  align-items: center;\n  margin-left: -4px;\n  padding: 0 4px;\n  border-radius: var(--dsw-radius-xs);\n  cursor: pointer;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_assistantToolCallButton_LVT7_h:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n  flex: none;\n  margin-right: 5px;\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_assistantToolCallButton_LVT7_h:focus-visible .bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n  color: var(--dsw-alias-label-secondary);\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_assistantToolCallButton_LVT7_h:hover .bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ {\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n\n.bt_TrajectoryTable_assistantToolCallText_4cwwa2 {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_assistantToolCallName_TyR0np {\n  flex: none;\n  margin-right: 5px;\n  color: var(--dsw-alias-label-secondary);\n  font-weight: 500;\n}\n\n.bt_TrajectoryTable_assistantToolCallArgs_WFp7dp {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_systemPrompt_-3xuek {\n  box-sizing: border-box;\n}\n\n.bt_TrajectoryTable_toolCatalog_kYbj8S {\n  min-height: 100%;\n  padding: 8px 0 16px;\n}\n\n.bt_TrajectoryTable_toolCatalogItem_cGDuCI {\n  border-bottom: 0.5px solid var(--dsw-alias-border-l1);\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT {\n  display: grid;\n  grid-template-columns: 12px 12px max-content minmax(0, 1fr);\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 30px;\n  padding: 4px 12px;\n  gap: 5px;\n  cursor: pointer;\n  list-style: none;\n  user-select: none;\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT::-webkit-details-marker {\n  display: none;\n}\n\n@media (hover: hover) {\n  .bt_TrajectoryTable_toolCatalogSummary_SrfhkT:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.bt_TrajectoryTable_toolCatalogSummary_SrfhkT:focus-visible {\n  background: var(--dsw-alias-interactive-bg-hover);\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTable_toolCatalogChevron_j04Bh4,\n.bt_TrajectoryTable_toolCatalogIcon_4W2aYB {\n  color: var(--dsw-alias-label-caption);\n}\n\n.bt_TrajectoryTable_toolCatalogChevron_j04Bh4 {\n  transition: transform 100ms var(--ds-ease-in-out);\n}\n\n.bt_TrajectoryTable_toolCatalogItem_cGDuCI[open] .bt_TrajectoryTable_toolCatalogChevron_j04Bh4 {\n  transform: rotate(90deg);\n}\n\n.bt_TrajectoryTable_toolCatalogName_vJfIBm {\n  color: var(--dsw-alias-label-primary);\n  font: 500 12px/18px var(--ds-font-family-code);\n}\n\n.bt_TrajectoryTable_toolCatalogDescription_q6Kjej {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_toolCatalogDefinition_E4Icq4 {\n  padding: 0 0 8px 29px;\n  background: var(--dsw-alias-bg-base);\n}\n\n.bt_TrajectoryTable_toolCatalogFullDescription_SjSY7e {\n  margin: 0;\n  padding: 7px 14px 4px 0;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xs-13);\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_toolCatalogTree_hAboUq {\n  margin-left: -14px;\n  margin-right: 6px;\n}\n\n.bt_TrajectoryTable_resultBlocks_9td9Kg {\n  display: flex;\n  min-height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 14px;\n  gap: 10px;\n}\n\n.bt_TrajectoryTable_resultBlocksPreview_WVjKr4 {\n  min-height: 0;\n  padding: 2px 14px 8px;\n  gap: 6px;\n}\n\n.bt_TrajectoryTable_resultBlockText_CiMsCo {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  font: 12px/19px var(--ds-font-family-code);\n  tab-size: 2;\n  white-space: pre-wrap;\n}\n\n.bt_TrajectoryTable_overviewPreview_IYUxsr .bt_TrajectoryTable_noPayload_7dMYrF {\n  padding: 2px 14px 0;\n}\n\n.bt_TrajectoryTable_noPayload_7dMYrF {\n  margin: 0;\n  padding: 18px 14px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n}\n\n@media (max-width: 760px) {\n  .bt_TrajectoryTable_details_gIawuH {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: min(92%, 420px);\n    max-width: 92%;\n    border-left-color: var(--dsw-alias-border-l3);\n    box-shadow: -12px 0 32px rgba(0, 0, 0, 0.14);\n  }\n}\n\n.bt_TrajectoryTable_toolUpdatePayload_qTnDiO {\n  white-space: pre;\n  overflow-x: auto;\n}\n\n/* ---- Logfire-style row meta ---- */\n/* exactly one 30px ledger row: the virtualizer owns a fixed row height, so a\n   taller hint would drift every row below it */\n@media (max-width: 900px) {\n  .bt_TrajectoryTable_rowMeta_3HQb2i {\n    display: none;\n  }\n}\n\n/* ============ instrument rows (docs/design-language.md) ============ */\n.bt_TrajectoryTable_eventColumn_UTt04J,\n.bt_TrajectoryTable_eventColumn_UTt04J:where(:lang(zh)) {\n  width: 84px;\n}\n\n.bt_TrajectoryTable_event_ApG3nH {\n  padding: 0 8px 0 10px !important;\n  text-align: right;\n  height: 28px;\n  vertical-align: middle;\n}\n\n.bt_TrajectoryTable_content_xtMqjv {\n  padding: 0 12px 0 0 !important;\n  height: 28px;\n  vertical-align: middle;\n}\n\n.bt_TrajectoryTable_rowClock_gzwpBP {\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_rowLine_YOAcZR[data-mono] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n}\n\n.bt_TrajectoryTable_rowLine_YOAcZR {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  /* every row is exactly one line, as in the native table: expanding a node, or a\n     long message, must never change a row's height. The box fills the 30px row so\n     the rails of two neighbouring rows meet instead of leaving a 1px notch. */\n  height: 30px;\n  overflow: hidden;\n}\n\n.bt_TrajectoryTable_rowName_6wzz5H {\n  flex: none;\n  color: var(--bt-text, #1c2128);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n}\n\n.bt_TrajectoryTable_rowBadge_pPrItT {\n  flex: none;\n  height: 17px;\n  padding: 0 5px;\n  border-radius: 3px;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9.5px;\n  line-height: 17px;\n  letter-spacing: 0.02em;\n}\n\n.bt_TrajectoryTable_rowBadge_pPrItT[data-tone='error'] {\n  background: var(--bt-error-soft, #fef3f2);\n  color: var(--bt-error, #d92d20);\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bt-error, #d92d20) 22%, transparent);\n}\n\n.bt_TrajectoryTable_rowBadge_pPrItT[data-tone='running'] {\n  background: var(--bt-warn-soft, #fffaeb);\n  color: var(--bt-warn, #d97706);\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bt-warn, #d97706) 24%, transparent);\n}\n\n.bt_TrajectoryTable_rowSub_0f1fRA {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--bt-text-2, #5b6470);\n  font-size: 11px;\n}\n\n/* failed call: the reason rides in the row, native style (`\u2192 error`, all red) */\n.bt_TrajectoryTable_rowLine_YOAcZR[data-tone='error'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  flex: 0 1 auto;\n  max-width: 40%;\n}\n\n.bt_TrajectoryTable_rowResult_ZW98kG {\n  display: flex;\n  flex: 1 1 46%;\n  align-items: center;\n  min-width: 0;\n  max-width: 46%;\n  color: var(--bt-error, #d92d20);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n}\n\n.bt_TrajectoryTable_rowResultArrow_i9f3Dq {\n  flex: none;\n  margin: 0 6px 0 8px;\n  color: color-mix(in srgb, var(--bt-error, #d92d20) 55%, transparent);\n}\n\n.bt_TrajectoryTable_rowResultText_dIN2mP {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_rowBarWrap_qpJNU9 {\n  margin-left: auto;\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bt_TrajectoryTable_rowBar_7kRLZ3 {\n  height: 4px;\n  border-radius: 2px;\n  background: var(--bt-line, #e6e8eb);\n}\n\n.bt_TrajectoryTable_rowBar_7kRLZ3[data-tone='error'] {\n  background: color-mix(in srgb, var(--bt-error, #d92d20) 45%, transparent);\n}\n\n.bt_TrajectoryTable_rowBar_7kRLZ3[data-tone='running'] {\n  background: color-mix(in srgb, var(--bt-warn, #d97706) 45%, transparent);\n}\n\n.bt_TrajectoryTable_rowMs_JIpaaL {\n  width: 46px;\n  text-align: right;\n  color: var(--bt-text-3, #9aa1ab);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10px;\n  font-variant-numeric: tabular-nums;\n}\n\n/* hide the native chrome that the row anatomy replaces */\n.bt_TrajectoryTable_requestBoundaryControl_sSuY1y,\n.bt_TrajectoryTable_turnRail_yQDSF9,\n.bt_TrajectoryTable_selectionRail_wHs0wE,\n.bt_TrajectoryTable_table_qfAk6E {\n  table-layout: fixed;\n}\n\n.bt_TrajectoryTable_table_qfAk6E tr {\n  height: 28px;\n  transition: background-color var(--bt-dur-2, 90ms) var(--bt-ease-std, ease);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tr:hover {\n  background: var(--bt-hover, rgba(16, 24, 40, 0.06));\n}\n\ntr[data-selected='true'] {\n  background: var(--bt-surface-3, #eef0f3);\n}\n\ntr[data-selected='true'] .bt_TrajectoryTable_event_ApG3nH {\n  box-shadow: inset 2px 0 0 var(--bt-accent, #2563eb);\n}\n\n.bt_TrajectoryTable_table_qfAk6E tr:focus-visible {\n  outline: 2px solid var(--bt-accent, #2563eb);\n  outline-offset: -2px;\n}\n\n.bt_TrajectoryTable_details_gIawuH[data-snapping] {\n  transition: width var(--bt-dur-5, 220ms) var(--bt-ease-out, ease);\n}\n\n/* ---------- detail panel spec (design step 3) ---------- */\n.bt_TrajectoryTable_details_gIawuH {\n  width: 520px;\n  border-left: 1px solid var(--bt-line, #e6e8eb);\n  background: var(--bt-surface, #fff);\n}\n\n.bt_TrajectoryTable_detailsHeader_x9S6Zm {\n  height: 36px;\n  padding: 0 10px 0 12px;\n  border-bottom: 1px solid var(--bt-line, #e6e8eb);\n  /* title takes the slack so the action cluster stays next to the close button */\n  justify-content: flex-start;\n  gap: 4px;\n}\n\n.bt_TrajectoryTable_detailsTitle_AoviUn {\n  color: var(--bt-text, #1c2128);\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n}\n\n.bt_TrajectoryTable_detailTabs_gzSp2k {\n  height: 30px;\n  gap: 14px;\n  padding: 0 12px;\n  border-bottom: 1px solid var(--bt-line, #e6e8eb);\n}\n\n.bt_TrajectoryTable_detailTab_dnFNRF {\n  padding: 0;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 11.5px;\n}\n\n.bt_TrajectoryTable_detailTab_dnFNRF:hover {\n  color: var(--bt-text, #1c2128);\n  background: transparent;\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s {\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_detailTabActive_JV0v9s::after {\n  right: 0;\n  left: 0;\n  height: 2px;\n  background: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_detailBody_wNVH1K {\n  animation: bt_TrajectoryTable_bt-detail-in_boZx8U var(--bt-dur-3, 120ms) var(--bt-ease-out, ease);\n}\n\n@keyframes bt_TrajectoryTable_bt-detail-in_boZx8U {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.bt_TrajectoryTable_skeletonPane_8Bbpg8 {\n  position: absolute;\n  z-index: 6;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px 14px 0 98px;\n  background: var(--bt-surface, #fff);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTable_skeletonRow__ffu6X {\n  height: 10px;\n  border-radius: 3px;\n  background: linear-gradient(90deg, var(--bt-surface-2, #f6f7f9) 25%, var(--bt-surface-3, #eef0f3) 37%, var(--bt-surface-2, #f6f7f9) 63%);\n  background-size: 400% 100%;\n  animation: bt_TrajectoryTable_bt-shimmer_7WxuGj 1.6s linear infinite;\n}\n\n@keyframes bt_TrajectoryTable_bt-shimmer_7WxuGj {\n  from { background-position: 100% 0; }\n  to { background-position: 0 0; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt_TrajectoryTable_skeletonRow__ffu6X { animation: none; }\n}\n\n/* empty state */\n.bt_TrajectoryTable_emptyRow_mrRJOS { background: transparent; }\n.bt_TrajectoryTable_emptyCell_qLI1gw {\n  height: 120px;\n  padding-left: 98px !important;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 11.5px;\n}\n.bt_TrajectoryTable_emptyAction_GuJ5ND {\n  margin-left: 8px;\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  font-size: 11.5px;\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_details_gIawuH[data-dragging] {\n  transition: none;\n  user-select: none;\n}\n\n/* ---------- hierarchy: identity + nesting ---------- */\ntr[data-kind='user'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-accent, #2563eb);\n  font-weight: 600;\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text, #1c2128);\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='system'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='context'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='compacted'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-text-3, #9aa1ab);\n  font-weight: 400;\n}\n\ntr[data-kind='context'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 10.5px;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-text, #1c2128);\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv {\n  position: relative;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  content: '';\n  position: absolute;\n  top: 3px;\n  bottom: 3px;\n  left: 13px;\n  width: 1px;\n  background: var(--bt-line-soft, #f0f2f4);\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR {\n  border-left: 0;\n}\n\ntr[data-turn-start='true'] {\n  box-shadow: inset 0 1px 0 var(--bt-line-soft, #f0f2f4);\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text-2, #5b6470);\n}\n\n.bt_TrajectoryTable_rowClock_gzwpBP {\n  font-weight: 500;\n}\n\n/* second pass: message identity */\ntr[data-kind='message'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text, #1c2128);\n  font-size: 12px;\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-text-3, #9aa1ab);\n  text-transform: lowercase;\n  letter-spacing: 0.02em;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  font-weight: 600;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  background: var(--bt-line, #e6e8eb);\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-size: 12px;\n}\n\n/* band per step: every row of the step carries it, so a call and its message\n   share one tint. The turn's opening block has no band \u2014 it is the turn's\n   header, and the 2px rule above it already marks the boundary. */\ntr[data-band='1'] {\n  background: color-mix(in srgb, var(--bt-surface-2, #f6f7f9) 55%, transparent);\n}\n\n/* A user turn is a boundary, not a highlight: the sticky row keeps the page\n   surface and nothing more (no accent wash, no band tint). */\ntr[data-kind='user'] {\n  background: var(--bt-surface, #ffffff);\n}\n\n/* the sticky cells own the paint, so hover/selection need an opaque tint here\n   (an alpha hover token would let the row underneath show through) */\ntr[data-kind='user'][data-selected='true'] > td {\n  background: var(--bt-surface-3, #eef0f3);\n}\n\n@media (hover: hover) {\n  tr[data-kind='user']:not([data-selected='true']):hover > td {\n    background: var(--bt-surface-2, #f6f7f9);\n  }\n}\n\ntr:hover {\n  background: var(--bt-active, rgba(16, 24, 40, 0.1));\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowSub_0f1fRA,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 10px;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  font-size: 11px;\n}\n\ntr[data-kind='context'] .bt_TrajectoryTable_rowSub_0f1fRA,\ntr[data-kind='system'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-size: 10px;\n  white-space: nowrap;\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowSub_0f1fRA {\n  font-weight: 500;\n}\n\n/* turn marker: the only fold control at turn level */\n/* native-inspired identity hues */\ntr[data-kind='tool'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-tool, #b45309);\n}\n\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-assistant, #7c3aed);\n}\n\ntr[data-kind='user'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-user, #1d4ed8);\n}\n\ntr[data-kind='context'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='system'] .bt_TrajectoryTable_rowName_6wzz5H {\n  color: var(--bt-context, #047857);\n}\n\n/* a context row's producer name reads like a tool's name: same slot, the\n   context identity colour. `display: none` above hides the generic slot for\n   context rows, so this one opts back in explicitly. */\ntr[data-kind='context'] .bt_TrajectoryTable_rowName_6wzz5H[data-context-source] {\n  display: inline;\n  flex: none;\n  max-width: 220px;\n  overflow: hidden;\n  color: var(--bt-context, #047857);\n  font-weight: 600;\n  font-size: 11px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  z-index: 1;\n  background: var(--bt-line, #e6e8eb);\n}\n\n/* kind pills (native-inspired identity) */\ntr[data-kind='message'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='user'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='context'] .bt_TrajectoryTable_rowName_6wzz5H,\ntr[data-kind='system'] .bt_TrajectoryTable_rowName_6wzz5H {\n  display: none;\n}\n\n/* hover info card */\n.bt_TrajectoryTable_split_eDViiG[data-show-time='false'] .bt_TrajectoryTable_eventColumn_UTt04J {\n  width: 0;\n}\n\n/* Collapse the time cell instead of removing it. `display: none` drops the cell\n   from the row's cell list, so the content cell moves into the zero-width first\n   column and the whole ledger renders blank. */\n.bt_TrajectoryTable_split_eDViiG[data-show-time='false'] .bt_TrajectoryTable_event_ApG3nH {\n  width: 0;\n  padding: 0 !important;\n  border-bottom-color: transparent;\n  overflow: hidden !important;\n}\n\n/* tree guides: vertical rail + elbow for child rows */\n.bt_TrajectoryTable_rowLine_YOAcZR {\n  position: relative;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: 13px;\n  width: 1px;\n  background: var(--bt-line, #e6e8eb);\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::after,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 13px;\n  width: 8px;\n  height: 1px;\n  background: var(--bt-line, #e6e8eb);\n}\n\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::after {\n  left: 39px;\n}\n\ntr[data-kind='tool'] .bt_TrajectoryTable_content_xtMqjv::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_content_xtMqjv::before {\n  display: none;\n}\n\n/* tree guide\u6536\u53E3 */\ntr[data-child-last] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  bottom: 50%;\n}\n\n/* A turn's boundary is the 2px rule painted on its first row's cells (above);\n   the row keeps its own band. It is not a sticky header: `.table tbody td` pins\n   `position: relative`, so every `position: sticky` declared here was inert, and\n   only the opaque surface it forced was visible \u2014 which silently erased the band\n   of any turn that opens with a context source instead of a user message. */\n\n/* fold summary chips: distinct tints instead of one flat string */\n.bt_TrajectoryTable_foldGroup_TRT3uh {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  flex: none;\n}\n\n/* fold summary chips: same family as the kind tag, one rank quieter */\n.bt_TrajectoryTable_foldChip__T1yva {\n  display: inline-flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 19px;\n  padding: 0 5px;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 600;\n  letter-spacing: 0.035em;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_foldChip__T1yva[data-kind='steps'] {\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n}\n\n.bt_TrajectoryTable_foldChip__T1yva[data-kind='tools'] {\n  background: var(--dsw-alias-state-warn-tertiary);\n  color: var(--dsw-alias-state-warn-label);\n}\n\n.bt_TrajectoryTable_foldChip__T1yva[data-kind='time'] {\n  background: var(--dsw-alias-bg-module-platform);\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_headActions_lXR04l {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 2px;\n}\n\n.bt_TrajectoryTable_headAction_HUF0nK {\n  all: unset;\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  color: var(--bt-text-3, #9aa1ab);\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.bt_TrajectoryTable_headAction_HUF0nK:hover {\n  background: var(--bt-active, rgba(16, 24, 40, 0.1));\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_headAction_HUF0nK:focus-visible {\n  outline: 2px solid var(--bt-accent, #2563eb);\n  outline-offset: 0;\n}\n\n/* inline link inside a meta row (\u6765\u6E90 / \u5C42\u7EA7): same weight as its value, with an\n   affordance that says it navigates */\n.bt_TrajectoryTable_metaLink_JNyTnJ {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  max-width: 100%;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  cursor: pointer;\n  font: inherit;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_metaLink_JNyTnJ:hover {\n  text-decoration: underline;\n}\n\n.bt_TrajectoryTable_metaLink_JNyTnJ:focus-visible {\n  outline: 2px solid var(--bt-accent, #2563eb);\n  outline-offset: 1px;\n}\n\n/* ---------- \u6982\u8FF0: one field per line, the same grid as a request summary ---------- */\n/* \u539F\u59CB has nothing to show: the row is a folded summary, or it is still live */\n.bt_TrajectoryTable_detailNote_PmT_xX {\n  margin: 0;\n  padding: 10px 2px;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 11px;\n  line-height: 1.5;\n}\n\n.bt_TrajectoryTable_recordSummary_CZeXDs {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n\n.bt_TrajectoryTable_recordFields_3zYHGi > div {\n  grid-template-columns: 76px minmax(0, 1fr);\n  min-height: 26px;\n  padding: 0 12px;\n}\n\n.bt_TrajectoryTable_recordFields_3zYHGi dd {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.bt_TrajectoryTable_fieldValue_hHKcrw {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_recordFields_3zYHGi dd[data-mono] .bt_TrajectoryTable_fieldValue_hHKcrw {\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n}\n\n.bt_TrajectoryTable_recordFields_3zYHGi dd[data-tone='error'] .bt_TrajectoryTable_fieldValue_hHKcrw {\n  color: var(--bt-error, var(--dsw-alias-state-error-primary, #d92d20));\n}\n\n.bt_TrajectoryTable_recordFields_3zYHGi dd[data-tone='warn'] .bt_TrajectoryTable_fieldValue_hHKcrw {\n  color: var(--bt-warn, var(--dsw-alias-state-warning-primary, #d97706));\n}\n\n.bt_TrajectoryTable_recordFields_3zYHGi dd[data-wrap] {\n  padding: 3px 0;\n}\n\n.bt_TrajectoryTable_recordFields_3zYHGi dd[data-wrap] .bt_TrajectoryTable_fieldValue_hHKcrw {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 12px;\n  overflow: visible;\n  white-space: normal;\n}\n\n/* context \u6765\u6E90: the role word carries the reading, the producer name stays an\n   identifier (mono, quieter) so it never looks like a mistranslation */\n.bt_TrajectoryTable_sourceRole_i7PbCY {\n  flex: none;\n  white-space: nowrap;\n}\n\n.bt_TrajectoryTable_sourceLabel_M52Ogy {\n  min-width: 0;\n  overflow: hidden;\n  color: var(--bt-text-3, var(--dsw-alias-label-tertiary));\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 10.5px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* \u9884\u89C8: the record's rendered content, edge to edge \u2014 the payloads own their inset */\n.bt_TrajectoryTable_recordPreview_Vks-Y5 {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-height: 0;\n}\n\n/* ===================== tree connectors: one formula for every level =====================\n   A row of level L draws three things from a single pair of numbers:\n\n     --bt-step  26px                       indent per level\n     --bt-dot   12px                       dot centre inside its own level\n     --bt-axis  calc(step * L + dot)       this row's fold-dot centre\n     elbow      horizontal 1px, from the parent dot centre (axis - step) to\n                this row's dot edge (axis - 4) or its tag slot (axis + 20)\n     drop       vertical 1px, from just under this row's dot to the row bottom\n     rail(a)    vertical 1px at (step * a + dot) for each ancestor level a\n\n   Vertical anchoring is also single-sourced: --bt-marker-y is the centre of the\n   first text line, and the fold dot box is one 28px line tall, so the dot, the\n   elbow and the drop share that y on every row height. Earlier the elbow used\n   `top: 50%` while message rows are top-aligned with 5px padding, which put the\n   line 10px below the dot on any row that wrapped to more than one line. */\n.bt_TrajectoryTable_rowLine_YOAcZR {\n  --bt-step: 26px;\n  --bt-dot: 12px;\n  --bt-pad-y: 0px;\n  --bt-axis: calc(var(--bt-step) * var(--bt-level, 0) + var(--bt-dot));\n  --bt-marker-y: calc(var(--bt-pad-y) + 15px);\n  padding-left: calc(var(--bt-step) * var(--bt-level, 0));\n  position: relative;\n}\n\n.bt_TrajectoryTable_rails_pINYyU {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n\n/* \u7B5B\u9009\u6001: the tree is replaced by the row's coordinates, in the slot the\n   connectors would have used \u2014 two fixed-width chips, so the kind tag's left edge\n   is the same on every row. */\n.bt_TrajectoryTable_rowPosition_tJ_f6U {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 4px;\n  margin-right: 2px;\n}\n\n.bt_TrajectoryTable_rowPositionChip_Dpt8qc {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 4px;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 9.5px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n  white-space: nowrap;\n}\n\n/* the number grows leftwards inside a fixed slot: the unit keeps its place and\n   the kind tag never moves */\n.bt_TrajectoryTable_rowPositionValue_9SCLPU {\n  flex: 1;\n  text-align: right;\n}\n\n.bt_TrajectoryTable_rowPositionChip_Dpt8qc[data-part='turn'] {\n  min-width: 38px;\n  background: var(--dsw-alias-bg-module-platform);\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bt_TrajectoryTable_rowPositionChip_Dpt8qc[data-part='step'] {\n  min-width: 44px;\n  background: color-mix(\n    in srgb,\n    color-mix(\n      in srgb,\n      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,\n      var(--dsw-alias-state-error-secondary)\n    ) 15%,\n    var(--dsw-alias-bg-layer-1)\n  );\n  color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n}\n\n.bt_TrajectoryTable_rail_IlE5vk {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  left: calc(var(--bt-step) * var(--bt-anc, 0) + var(--bt-dot));\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n}\n\n/* the last child of an ancestor stops its rail at the elbow */\n.bt_TrajectoryTable_rail_IlE5vk[data-stop] {\n  bottom: auto;\n  height: var(--bt-marker-y);\n}\n\n/* legacy per-kind pseudo rails: off, the rails span replaced them */\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-kind='tool'] .bt_TrajectoryTable_rowLine_YOAcZR::after,\ntr[data-kind='subtool'] .bt_TrajectoryTable_rowLine_YOAcZR::after,\ntr[data-level='1'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-level='2'] .bt_TrajectoryTable_rowLine_YOAcZR::before,\ntr[data-level='3'] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: none;\n}\n\n/* elbow: nested rows, dot present \u2192 stop at the dot's outer edge */\ntr[data-has-fold]:not([data-level='0']) .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: var(--bt-marker-y);\n  left: calc(var(--bt-axis) - var(--bt-step));\n  width: 22px;\n  height: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* elbow: nested rows, no dot \u2192 run to the tag slot */\ntr:not([data-has-fold]):not([data-level='0']) .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: var(--bt-marker-y);\n  left: calc(var(--bt-axis) - var(--bt-step));\n  width: 46px;\n  height: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* elbow: root rows, from the dot's outer edge to the tag slot */\ntr[data-level='0'][data-has-fold] .bt_TrajectoryTable_rowLine_YOAcZR::before {\n  content: '';\n  position: absolute;\n  top: var(--bt-marker-y);\n  left: calc(var(--bt-axis) + 4px);\n  width: 16px;\n  height: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* drop: any parent row, from under its dot down to the next row */\ntr[data-has-children] .bt_TrajectoryTable_rowLine_YOAcZR::after {\n  content: '';\n  position: absolute;\n  top: calc(var(--bt-marker-y) + 5px);\n  bottom: -3px;\n  left: var(--bt-axis);\n  width: 1px;\n  background: var(--bt-rail, var(--bt-text-2, #5b6470));\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n/* ===================== fold control =====================\n   The dot is an 8px SVG circle; the hit box is 24x28 \u2014 one text line tall, 24px\n   wide \u2014 so the pointer target is larger than the shape and its centre is the\n   marker y. The box is square on purpose: a 50% radius clips hit-testing back\n   into a circle and makes the corners dead. */\n.bt_TrajectoryTable_rowChevron_y6tlTP,\n.bt_TrajectoryTable_rowChevronSpace_bEB4GZ {\n  display: inline-flex;\n  flex: none;\n  align-self: flex-start;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 30px;\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP {\n  all: unset;\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  flex: none;\n  align-self: flex-start;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 24px;\n  height: 30px;\n  border-radius: 0;\n  color: var(--bt-text-3, #9aa1ab);\n  cursor: pointer;\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP:hover {\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP:active svg {\n  transform: scale(0.86);\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP svg {\n  display: block;\n  transition: transform var(--bt-dur-2, 90ms) var(--bt-ease-std, ease);\n  transform-origin: center;\n}\n\n.bt_TrajectoryTable_rowChevron_y6tlTP:focus-visible {\n  outline: 2px solid var(--bt-accent, #2563eb);\n  outline-offset: 1px;\n}\n\n/* tag slot: fixed column so the content start is identical on every row.\n   The tag itself lives in KindTag.module.css (one definition for rows, the hover\n   card and the timeline). */\n.bt_TrajectoryTable_kindSlot_0oaQf9 {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: flex-start;\n  width: 76px;\n}\n\n.bt_TrajectoryTable_kindSlot_0oaQf9:where(:lang(zh)) {\n  width: 44px;\n}\n\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="GH5K9s"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "GH5K9s");
  el.textContent = css5;
  document.head.appendChild(el);
}
var TrajectoryTable_default = { "split": "bt_TrajectoryTable_split_eDViiG", "tablePane": "bt_TrajectoryTable_tablePane_KHiY-a", "historyLoading": "bt_TrajectoryTable_historyLoading_3Z7BY1", "historyLoadingBar": "bt_TrajectoryTable_historyLoadingBar_iuAaSy", "table": "bt_TrajectoryTable_table_qfAk6E", "eventColumn": "bt_TrajectoryTable_eventColumn_UTt04J", "contentColumn": "bt_TrajectoryTable_contentColumn_GFcdso", "virtualSpacer": "bt_TrajectoryTable_virtualSpacer_qcuMuX", "turnRail": "bt_TrajectoryTable_turnRail_yQDSF9", "requestBoundaryControl": "bt_TrajectoryTable_requestBoundaryControl_sSuY1y", "requestBoundaryControlActive": "bt_TrajectoryTable_requestBoundaryControlActive_Dg7RsB", "event": "bt_TrajectoryTable_event_ApG3nH", "selectionRail": "bt_TrajectoryTable_selectionRail_wHs0wE", "turnLabelFull": "bt_TrajectoryTable_turnLabelFull_WfTyoZ", "kindSlot": "bt_TrajectoryTable_kindSlot_0oaQf9", "content": "bt_TrajectoryTable_content_xtMqjv", "kindTag": "bt_TrajectoryTable_kindTag_QR8Bo3", "message": "bt_TrajectoryTable_message_Kosacf", "kindTagIcon": "bt_TrajectoryTable_kindTagIcon_faG1Xu", "kindTagLabel": "bt_TrajectoryTable_kindTagLabel_DubDfc", "turnLabelCompact": "bt_TrajectoryTable_turnLabelCompact_bVGxV-", "user": "bt_TrajectoryTable_user_EiaeE6", "contextGreen": "bt_TrajectoryTable_contextGreen_b5rkgS", "compacted": "bt_TrajectoryTable_compacted_3aTcSn", "promptDiffSections": "bt_TrajectoryTable_promptDiffSections_v3FFVc", "promptDiffSection": "bt_TrajectoryTable_promptDiffSection_MRiY64", "promptDiffTitle": "bt_TrajectoryTable_promptDiffTitle_9JuX4g", "promptDiff": "bt_TrajectoryTable_promptDiff_VkrRb4", "promptDiffLinemeta": "bt_TrajectoryTable_promptDiffLinemeta_tLOrjX", "promptDiffLinecontext": "bt_TrajectoryTable_promptDiffLinecontext_jNpM0B", "promptDiffLineadded": "bt_TrajectoryTable_promptDiffLineadded_sSKAHi", "promptDiffLineremoved": "bt_TrajectoryTable_promptDiffLineremoved_0GLhdY", "assistantVioletBright": "bt_TrajectoryTable_assistantVioletBright_kmQW8n", "toolAmber": "bt_TrajectoryTable_toolAmber_s0U4wU", "subtoolAmber": "bt_TrajectoryTable_subtoolAmber_oyh_9d", "resultRequest": "bt_TrajectoryTable_resultRequest_fX5Dw2", "contentText": "bt_TrajectoryTable_contentText_W_U6-c", "resultPreview": "bt_TrajectoryTable_resultPreview__PAl0L", "noOutputText": "bt_TrajectoryTable_noOutputText_o_3gcc", "overview": "bt_TrajectoryTable_overview_LDwNCJ", "overviewCode": "bt_TrajectoryTable_overviewCode_Wm9_Qx", "error": "bt_TrajectoryTable_error_Q9RpaF", "details": "bt_TrajectoryTable_details_gIawuH", "errorPayload": "bt_TrajectoryTable_errorPayload_cgEhYc", "resultBlockText": "bt_TrajectoryTable_resultBlockText_CiMsCo", "jsonPayload": "bt_TrajectoryTable_jsonPayload_gOir54", "jsonPreview": "bt_TrajectoryTable_jsonPreview_fhOE3c", "detailsResizeHandle": "bt_TrajectoryTable_detailsResizeHandle_BpTEDx", "detailsHeader": "bt_TrajectoryTable_detailsHeader_x9S6Zm", "detailsTitle": "bt_TrajectoryTable_detailsTitle_AoviUn", "detailsLocation": "bt_TrajectoryTable_detailsLocation_J0RItF", "close": "bt_TrajectoryTable_close_XeXehI", "detailTabs": "bt_TrajectoryTable_detailTabs_gzSp2k", "detailTab": "bt_TrajectoryTable_detailTab_dnFNRF", "detailTabActive": "bt_TrajectoryTable_detailTabActive_JV0v9s", "detailBody": "bt_TrajectoryTable_detailBody_wNVH1K", "detailBodySummary": "bt_TrajectoryTable_detailBodySummary_nyRpjv", "summaryScrollRegion": "bt_TrajectoryTable_summaryScrollRegion_E9DkdV", "overviewHierarchyNavLink": "bt_TrajectoryTable_overviewHierarchyNavLink_5sX4rO", "overviewHierarchyJumpIconTight": "bt_TrajectoryTable_overviewHierarchyJumpIconTight_Q0qWYK", "requestTokenDetail": "bt_TrajectoryTable_requestTokenDetail_3wWQOZ", "usageGroup": "bt_TrajectoryTable_usageGroup_xuIa90", "timestampToggle": "bt_TrajectoryTable_timestampToggle_OOUyti", "resultSections": "bt_TrajectoryTable_resultSections_RGuWZ5", "resultSection": "bt_TrajectoryTable_resultSection_Cg3eWv", "resultBlocks": "bt_TrajectoryTable_resultBlocks_9td9Kg", "payload": "bt_TrajectoryTable_payload_zRquMY", "noPayload": "bt_TrajectoryTable_noPayload_7dMYrF", "overviewTitle": "bt_TrajectoryTable_overviewTitle_fQhguD", "overviewTitleIcon": "bt_TrajectoryTable_overviewTitleIcon_jb5JXE", "detailBodyProgram": "bt_TrajectoryTable_detailBodyProgram_74PHCq", "programPanel": "bt_TrajectoryTable_programPanel_XIc3sM", "programToolbar": "bt_TrajectoryTable_programToolbar_JboWqj", "programLanguage": "bt_TrajectoryTable_programLanguage_lCq8AA", "programAction": "bt_TrajectoryTable_programAction_5AWzqe", "programContent": "bt_TrajectoryTable_programContent_mr8JT_", "programSource": "bt_TrajectoryTable_programSource_84M3Ez", "programOutput": "bt_TrajectoryTable_programOutput_Og2Bj5", "programError": "bt_TrajectoryTable_programError_3hMSz7", "overviewPreview": "bt_TrajectoryTable_overviewPreview_IYUxsr", "markdownPreview": "bt_TrajectoryTable_markdownPreview_uI4YWV", "markdownPayload": "bt_TrajectoryTable_markdownPayload_CsUZcJ", "assistantContent": "bt_TrajectoryTable_assistantContent_AG912s", "thinkingQuote": "bt_TrajectoryTable_thinkingQuote_8bhmqn", "thinkingQuoteOnlyPreview": "bt_TrajectoryTable_thinkingQuoteOnlyPreview_-qIaDn", "assistantContentRendered": "bt_TrajectoryTable_assistantContentRendered_d98IKn", "thinkingToggle": "bt_TrajectoryTable_thinkingToggle_JW9hdK", "thinkingChevron": "bt_TrajectoryTable_thinkingChevron_mBPwJ3", "assistantOutput": "bt_TrajectoryTable_assistantOutput_e6Ffzt", "payloadPreview": "bt_TrajectoryTable_payloadPreview_EAdNGv", "sourceBlocks": "bt_TrajectoryTable_sourceBlocks_C6ZrYe", "sourceBlock": "bt_TrajectoryTable_sourceBlock_xUq4zJ", "sourceBlockHeader": "bt_TrajectoryTable_sourceBlockHeader_a8uXfy", "sourceBlockJumpTarget": "bt_TrajectoryTable_sourceBlockJumpTarget_vkukPV", "sourceBlockLabel": "bt_TrajectoryTable_sourceBlockLabel_LH3cfA", "sourceBlockJumpIcon": "bt_TrajectoryTable_sourceBlockJumpIcon_-suCuK", "sourceBlockContent": "bt_TrajectoryTable_sourceBlockContent_XoJ0B7", "messageImages": "bt_TrajectoryTable_messageImages_RfKfdd", "attachments": "bt_TrajectoryTable_attachments_E96dbm", "attachmentsPreview": "bt_TrajectoryTable_attachmentsPreview_NcR8cV", "attachmentRow": "bt_TrajectoryTable_attachmentRow_oUBiDA", "attachmentIcon": "bt_TrajectoryTable_attachmentIcon_UKoXGL", "attachmentInfo": "bt_TrajectoryTable_attachmentInfo_VyRFuz", "attachmentName": "bt_TrajectoryTable_attachmentName_Uk44An", "attachmentMetadata": "bt_TrajectoryTable_attachmentMetadata_IzXL36", "attachmentDisclosure": "bt_TrajectoryTable_attachmentDisclosure_OrBVJM", "assistantToolCalls": "bt_TrajectoryTable_assistantToolCalls_LlhL2V", "assistantToolCallsPreview": "bt_TrajectoryTable_assistantToolCallsPreview_cSQzRY", "assistantToolCallButton": "bt_TrajectoryTable_assistantToolCallButton_LVT7_h", "assistantToolCallIcon": "bt_TrajectoryTable_assistantToolCallIcon_rZQsTZ", "assistantToolCallText": "bt_TrajectoryTable_assistantToolCallText_4cwwa2", "assistantToolCallName": "bt_TrajectoryTable_assistantToolCallName_TyR0np", "assistantToolCallArgs": "bt_TrajectoryTable_assistantToolCallArgs_WFp7dp", "systemPrompt": "bt_TrajectoryTable_systemPrompt_-3xuek", "toolCatalog": "bt_TrajectoryTable_toolCatalog_kYbj8S", "toolCatalogItem": "bt_TrajectoryTable_toolCatalogItem_cGDuCI", "toolCatalogSummary": "bt_TrajectoryTable_toolCatalogSummary_SrfhkT", "toolCatalogChevron": "bt_TrajectoryTable_toolCatalogChevron_j04Bh4", "toolCatalogIcon": "bt_TrajectoryTable_toolCatalogIcon_4W2aYB", "toolCatalogName": "bt_TrajectoryTable_toolCatalogName_vJfIBm", "toolCatalogDescription": "bt_TrajectoryTable_toolCatalogDescription_q6Kjej", "toolCatalogDefinition": "bt_TrajectoryTable_toolCatalogDefinition_E4Icq4", "toolCatalogFullDescription": "bt_TrajectoryTable_toolCatalogFullDescription_SjSY7e", "toolCatalogTree": "bt_TrajectoryTable_toolCatalogTree_hAboUq", "resultBlocksPreview": "bt_TrajectoryTable_resultBlocksPreview_WVjKr4", "toolUpdatePayload": "bt_TrajectoryTable_toolUpdatePayload_qTnDiO", "rowMeta": "bt_TrajectoryTable_rowMeta_3HQb2i", "rowClock": "bt_TrajectoryTable_rowClock_gzwpBP", "rowLine": "bt_TrajectoryTable_rowLine_YOAcZR", "rowSub": "bt_TrajectoryTable_rowSub_0f1fRA", "rowName": "bt_TrajectoryTable_rowName_6wzz5H", "rowBadge": "bt_TrajectoryTable_rowBadge_pPrItT", "rowResult": "bt_TrajectoryTable_rowResult_ZW98kG", "rowResultArrow": "bt_TrajectoryTable_rowResultArrow_i9f3Dq", "rowResultText": "bt_TrajectoryTable_rowResultText_dIN2mP", "rowBarWrap": "bt_TrajectoryTable_rowBarWrap_qpJNU9", "rowBar": "bt_TrajectoryTable_rowBar_7kRLZ3", "rowMs": "bt_TrajectoryTable_rowMs_JIpaaL", "bt-detail-in": "bt_TrajectoryTable_bt-detail-in_boZx8U", "skeletonPane": "bt_TrajectoryTable_skeletonPane_8Bbpg8", "skeletonRow": "bt_TrajectoryTable_skeletonRow__ffu6X", "bt-shimmer": "bt_TrajectoryTable_bt-shimmer_7WxuGj", "emptyRow": "bt_TrajectoryTable_emptyRow_mrRJOS", "emptyCell": "bt_TrajectoryTable_emptyCell_qLI1gw", "emptyAction": "bt_TrajectoryTable_emptyAction_GuJ5ND", "foldGroup": "bt_TrajectoryTable_foldGroup_TRT3uh", "foldChip": "bt_TrajectoryTable_foldChip__T1yva", "headActions": "bt_TrajectoryTable_headActions_lXR04l", "headAction": "bt_TrajectoryTable_headAction_HUF0nK", "metaLink": "bt_TrajectoryTable_metaLink_JNyTnJ", "detailNote": "bt_TrajectoryTable_detailNote_PmT_xX", "recordSummary": "bt_TrajectoryTable_recordSummary_CZeXDs", "recordFields": "bt_TrajectoryTable_recordFields_3zYHGi", "fieldValue": "bt_TrajectoryTable_fieldValue_hHKcrw", "sourceRole": "bt_TrajectoryTable_sourceRole_i7PbCY", "sourceLabel": "bt_TrajectoryTable_sourceLabel_M52Ogy", "recordPreview": "bt_TrajectoryTable_recordPreview_Vks-Y5", "rails": "bt_TrajectoryTable_rails_pINYyU", "rowPosition": "bt_TrajectoryTable_rowPosition_tJ_f6U", "rowPositionChip": "bt_TrajectoryTable_rowPositionChip_Dpt8qc", "rowPositionValue": "bt_TrajectoryTable_rowPositionValue_9SCLPU", "rail": "bt_TrajectoryTable_rail_IlE5vk", "rowChevron": "bt_TrajectoryTable_rowChevron_y6tlTP", "rowChevronSpace": "bt_TrajectoryTable_rowChevronSpace_bEB4GZ" };

// src/vendor/trajectory/RawDataPanel.tsx
var import_react4 = require("react");

// src/vendor/trajectory/RawDataPanel.module.css
var css6 = ".bt_RawDataPanel_root_Y2bQ0h {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  height: 100%;\n}\n\n/* Inline mode inside an inspector section. The cap only exists so one huge\n   payload cannot push the next section off the panel; it scales with the\n   viewport instead of showing a fixed nine lines. */\n.bt_RawDataPanel_tree_NxbYLV[data-bare] {\n  max-height: min(56vh, 480px);\n  overflow: auto;\n  padding: 2px 0 0;\n}\n\n.bt_RawDataPanel_toolbar_bEEotQ {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--bt-line, #e6e8eb);\n}\n\n.bt_RawDataPanel_search_LpZE-Z {\n  flex: 1;\n  min-width: 80px;\n  height: 24px;\n  padding: 0 6px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 5px;\n  background: var(--bt-surface-2, #f6f7f9);\n  color: var(--bt-text, #1c2128);\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11px;\n  outline: 0;\n}\n\n.bt_RawDataPanel_search_LpZE-Z:focus {\n  border-color: var(--bt-accent, #2563eb);\n  background: var(--bt-surface, #fff);\n}\n\n.bt_RawDataPanel_button_9phG6G {\n  height: 24px;\n  padding: 0 6px;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  background: transparent;\n  color: var(--bt-text-2, #5b6470);\n  font-size: 11px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.bt_RawDataPanel_button_9phG6G:hover {\n  border-color: var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.15));\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_RawDataPanel_count_Q1ZXWG {\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 10.5px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.bt_RawDataPanel_tree_NxbYLV {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  padding: 6px 8px 12px;\n  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: 11.5px;\n  line-height: 1.65;\n}\n\n.bt_RawDataPanel_node_j5q0Bh {\n  min-width: 0;\n}\n\n.bt_RawDataPanel_line_PKf3-X {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n  min-width: 0;\n  padding: 0 4px;\n  border-radius: 3px;\n}\n\n/* the whole line is the hit area: rows toggle in place, and a wrapped value\n   highlights as one block because the line box contains all of it */\n.bt_RawDataPanel_line_PKf3-X[data-branch],\n.bt_RawDataPanel_line_PKf3-X[data-branch]:hover {\n  cursor: pointer;\n}\n\n.bt_RawDataPanel_line_PKf3-X:hover {\n  background: var(--bt-hover, rgba(16, 24, 40, 0.06));\n}\n\n.bt_RawDataPanel_chevron_OTeCv8,\n.bt_RawDataPanel_chevronSpace_gCeJA0 {\n  flex-shrink: 0;\n  width: 14px;\n  height: 14px;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 9px;\n  line-height: 1;\n  transform: rotate(0deg);\n  transition: transform 0.12s ease;\n}\n\n.bt_RawDataPanel_chevron_OTeCv8[data-open] {\n  transform: rotate(90deg);\n}\n\n.bt_RawDataPanel_key_R5aarC {\n  color: var(--dsw-alias-label-secondary, #5b6470);\n  white-space: nowrap;\n}\n\n.bt_RawDataPanel_colon_VAxmIY {\n  color: var(--dsw-alias-label-tertiary, #aaa);\n  margin-right: 3px;\n}\n\n.bt_RawDataPanel_branch_FkE2mk {\n  color: var(--bt-text-3, #9aa1ab);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.bt_RawDataPanel_children_VIrebH {\n  margin-left: 9px;\n  padding-left: 7px;\n  border-left: 1px solid var(--bt-line-soft, #f0f2f4);\n}\n\n.bt_RawDataPanel_string_uHs8mq {\n  color: #b4442f;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n  min-width: 0;\n}\n\n.bt_RawDataPanel_number_yTg2YX {\n  color: #2f6fb4;\n}\n\n.bt_RawDataPanel_boolean_K6tcnF {\n  color: #7a4fbf;\n}\n\n.bt_RawDataPanel_null_CY1cQs,\n.bt_RawDataPanel_other_gg6sEF {\n  color: var(--bt-text-3, #9aa1ab);\n}\n\n.bt_RawDataPanel_loadMore_jUiz3C {\n  margin: 2px 0 2px 14px;\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  font-size: 11px;\n  cursor: pointer;\n  padding: 0;\n}\n/* search hits */\n.bt_RawDataPanel_mark_xOtgfd {\n  padding: 0 1px;\n  border-radius: 2px;\n  background: color-mix(in srgb, var(--dsw-alias-state-warn-label, #dd8629) 32%, transparent);\n  color: inherit;\n}\n\n.bt_RawDataPanel_line_PKf3-X[data-hit] {\n  background: color-mix(in srgb, var(--dsw-alias-state-warn-label, #dd8629) 8%, transparent);\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="36VVuU"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "36VVuU");
  el.textContent = css6;
  document.head.appendChild(el);
}
var RawDataPanel_default = { "root": "bt_RawDataPanel_root_Y2bQ0h", "tree": "bt_RawDataPanel_tree_NxbYLV", "toolbar": "bt_RawDataPanel_toolbar_bEEotQ", "search": "bt_RawDataPanel_search_LpZE-Z", "button": "bt_RawDataPanel_button_9phG6G", "count": "bt_RawDataPanel_count_Q1ZXWG", "node": "bt_RawDataPanel_node_j5q0Bh", "line": "bt_RawDataPanel_line_PKf3-X", "chevron": "bt_RawDataPanel_chevron_OTeCv8", "chevronSpace": "bt_RawDataPanel_chevronSpace_gCeJA0", "key": "bt_RawDataPanel_key_R5aarC", "colon": "bt_RawDataPanel_colon_VAxmIY", "branch": "bt_RawDataPanel_branch_FkE2mk", "children": "bt_RawDataPanel_children_VIrebH", "string": "bt_RawDataPanel_string_uHs8mq", "number": "bt_RawDataPanel_number_yTg2YX", "boolean": "bt_RawDataPanel_boolean_K6tcnF", "null": "bt_RawDataPanel_null_CY1cQs", "other": "bt_RawDataPanel_other_gg6sEF", "loadMore": "bt_RawDataPanel_loadMore_jUiz3C", "mark": "bt_RawDataPanel_mark_xOtgfd" };

// src/vendor/trajectory/RawDataPanel.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
function Highlight({ text, term }) {
  if (term === "") return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: text });
  const lower2 = text.toLowerCase();
  const needle = term.toLowerCase();
  const parts = [];
  let cursor = 0;
  for (; ; ) {
    const at = lower2.indexOf(needle, cursor);
    if (at === -1) {
      parts.push(text.slice(cursor));
      break;
    }
    if (at > cursor) parts.push(text.slice(cursor, at));
    parts.push(/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("mark", { className: RawDataPanel_default.mark, children: text.slice(at, at + needle.length) }, at));
    cursor = at + needle.length;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: parts });
}
function Leaf({ value, term }) {
  const kind = kindOf(value);
  if (kind === "string") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: RawDataPanel_default.string, children: [
      '"',
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Highlight, { text: String(value), term }),
      '"'
    ] });
  }
  if (kind === "number") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.number, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Highlight, { text: String(value), term }) });
  }
  if (kind === "boolean") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.boolean, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Highlight, { text: String(value), term }) });
  }
  if (kind === "null") return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.null, children: "null" });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.other, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Highlight, { text: String(value), term }) });
}
function copyTextFor(value) {
  return typeof value === "string" ? value : JSON.stringify(value, null, 2);
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
  const [limit, setLimit] = (0, import_react4.useState)(ARRAY_PAGE);
  const entries = branch ? entriesOf(value) : [];
  const shown = entries.slice(0, limit);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: RawDataPanel_default.node, "data-depth": depth, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: RawDataPanel_default.line,
        "data-path": path,
        "data-branch": branch || void 0,
        "data-open": branch ? isOpen || void 0 : void 0,
        "data-hit": term !== "" && String(name2).toLowerCase().includes(term) ? "key" : void 0,
        "data-copy-reveal": true,
        onClick: branch ? () => toggle(path) : void 0,
        children: [
          branch ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.chevron, "data-open": isOpen || void 0, "aria-hidden": "true", children: "\u25B8" }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.chevronSpace }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.key, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Highlight, { text: name2, term }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.colon, children: ":" }),
          branch ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.branch, children: preview(value) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Leaf, { value, term }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            CopyButton,
            {
              text: copyTextFor(value),
              label: qt("raw.copy"),
              copiedLabel: qt("copied"),
              failedLabel: qt("copy.failed")
            }
          )
        ]
      }
    ),
    branch && isOpen && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: RawDataPanel_default.children, children: [
      shown.map(([key, child]) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
      entries.length > limit && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: RawDataPanel_default.loadMore, onClick: () => setLimit((v) => v + ARRAY_PAGE), children: qt("raw.loadMore", { count: entries.length - limit }) })
    ] })
  ] });
}
function payloadBadge(value, qt) {
  if (Array.isArray(value)) return qt("payload.items", { count: value.length });
  if (value !== null && typeof value === "object") {
    return qt("payload.keys", { count: Object.keys(value).length });
  }
  const text = value === null || value === void 0 ? "" : String(value);
  if (text === "") return "";
  if (text.length > 120) return qt("payload.chars", { count: text.length });
  const lines = text.split("\n").length;
  return lines === 1 ? "" : qt("payload.lines", { count: lines });
}
function RawDataPanel({ data, qt, bare = false }) {
  const [term, setTerm] = (0, import_react4.useState)("");
  const [expanded, setExpanded] = (0, import_react4.useState)(() => {
    const initial = /* @__PURE__ */ new Set([""]);
    if (!bare) return initial;
    for (const [key, child] of entriesOf(data)) {
      const kind = kindOf(child);
      if (kind === "object" || kind === "array") initial.add(`/${key}`);
    }
    return initial;
  });
  const query = term.trim().toLowerCase();
  const matched = (0, import_react4.useMemo)(() => {
    if (query === "") return null;
    const set = /* @__PURE__ */ new Set();
    matchPaths(data, query, "", set);
    return set;
  }, [data, query]);
  const visible = (0, import_react4.useMemo)(() => {
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
  if (bare) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: RawDataPanel_default.tree, "data-bare": "", children: entriesOf(data).map(([key, child]) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Node2,
      {
        name: key,
        value: child,
        path: `/${key}`,
        depth: 0,
        expanded: visible,
        toggle,
        term: query,
        qt
      },
      `/${key}`
    )) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: RawDataPanel_default.root, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: RawDataPanel_default.toolbar, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          className: RawDataPanel_default.search,
          value: term,
          placeholder: qt("raw.search"),
          spellCheck: false,
          onChange: (event) => setTerm(event.currentTarget.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: RawDataPanel_default.button, onClick: expandAll, children: qt("raw.expandAll") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: RawDataPanel_default.button, onClick: () => setExpanded(/* @__PURE__ */ new Set([""])), children: qt("raw.collapseAll") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        CopyButton,
        {
          text: JSON.stringify(data, null, 2),
          label: qt("raw.copyAll"),
          copiedLabel: qt("copied"),
          failedLabel: qt("copy.failed"),
          reveal: "always"
        }
      ),
      matched !== null && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: RawDataPanel_default.count, children: qt("raw.matches", { count: matched.size }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: RawDataPanel_default.tree, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Node2, { name: "root", value: data, path: "", depth: 0, expanded: visible, toggle, term: query, qt }) })
  ] });
}

// src/vendor/trajectory/format.ts
function formatDurationSpan(milliseconds) {
  const ms = Math.max(0, Math.round(milliseconds));
  if (ms < 1e3) return `${ms}ms`;
  const seconds = ms / 1e3;
  if (seconds < 10) return `${seconds.toFixed(1)}s`;
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const minutes = Math.floor(seconds / 60);
  const rest = Math.round(seconds % 60);
  if (minutes < 60) return `${minutes}m${String(rest).padStart(2, "0")}s`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h${String(minutes % 60).padStart(2, "0")}m`;
  const days = Math.floor(hours / 24);
  return `${days}d${String(hours % 24).padStart(2, "0")}h`;
}
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const two = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${two(date.getMonth() + 1)}-${two(date.getDate())} ${two(date.getHours())}:${two(date.getMinutes())}:${two(date.getSeconds())}.${String(date.getMilliseconds()).padStart(3, "0")}`;
}

// src/vendor/trajectory/TrajectoryTable.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var BOTTOM_FOLLOW_THRESHOLD_PX = 2;
var OLDER_LOAD_THRESHOLD_PX = 48;
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", style: { display: "block" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
function useStableVirtualRowStructure(rows) {
  const cache = (0, import_react5.useRef)({ rows: [], structure: [] });
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
var RECORD_TABS = [
  { id: "overview", labelKey: "tab.summary", custom: true },
  { id: "preview", labelKey: "tab.preview", custom: true },
  { id: "timing", labelKey: "tab.stats", custom: true },
  { id: "raw", labelKey: "tab.raw", custom: true }
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
  return formatTimestamp(timestamp);
}
function clickSelectsText(target) {
  const selection = window.getSelection();
  return selection !== null && !selection.isCollapsed && selection.rangeCount > 0 && selection.getRangeAt(0).intersectsNode(target);
}
function StartedAtValue({ timestamp, t }) {
  const [showUnix, setShowUnix] = (0, import_react5.useState)(false);
  if (timestamp === null || !Number.isFinite(timestamp)) return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: t("timing.notAvailable") });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  extra,
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StartedAtValue, { timestamp: metrics.stepStartTime, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.totalDuration") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: totalTime(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.ttft") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: ttft(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.generation") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: generationTime(metrics, t) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.throughput") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: throughput(metrics, t) })
    ] }),
    extra
  ] });
}
function levelOf(record2) {
  if (record2.turnSummary === true) return 0;
  if (record2.turnOpening === true) return 0;
  switch (record2.cell.kind) {
    case "tool":
      return 2;
    case "subtool":
      return 3;
    case "system":
    case "compacted":
      return 0;
    default:
      return 1;
  }
}
function withStructuralLevels(records) {
  const levelled = records.map((record2) => ({ ...record2, level: levelOf(record2) }));
  let turn;
  let rootSeen = false;
  for (const [index, record2] of levelled.entries()) {
    if (record2.turn !== turn) {
      turn = record2.turn;
      rootSeen = false;
    }
    const root = record2.turnStart === true;
    if (root) rootSeen = true;
    const next = levelled[index + 1];
    const sameTurn = next !== void 0 && next.turn === record2.turn;
    record2.spine = record2.turnOpening === true && !root && rootSeen && sameTurn;
    record2.hasChildren = sameTurn && (next.level > record2.level || record2.turnStart === true && next.turnOpening === true);
  }
  return levelled;
}
function withFlatLevels(records) {
  return records.map((record2) => ({ ...record2, level: 0, hasChildren: false, spine: false }));
}
function flattenRecords(turns) {
  return turns.flatMap((turn, section) => {
    let firstInSection = true;
    let opening = true;
    const records = turn.groups.flatMap((group) => {
      const cells = group.cells.filter((cell) => cell.requestOnly !== true);
      return cells.map((cell, index) => {
        const turnStart = firstInSection && cell.requestOnly !== true && cell.kind !== "system" && (cell.kind !== "compacted" || turn.turn === null);
        if (turnStart) firstInSection = false;
        const turnOpening = opening && cell.kind !== "message";
        if (cell.kind === "message") opening = false;
        return {
          turn: turn.turn,
          level: 0,
          step: group.step ?? null,
          section,
          group: group.title,
          groupStart: index === 0,
          turnStart,
          turnOpening,
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
function requestKey(turn, group) {
  return `${turn}\0${group}`;
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
function messageIndexesWithCalls(records) {
  const out = /* @__PURE__ */ new Set();
  let message = null;
  for (const record2 of records) {
    const kind = record2.cell.kind;
    if (kind === "message") {
      message = record2.cell.index;
    } else if (kind === "tool" || kind === "subtool") {
      if (message !== null) out.add(message);
    } else {
      message = null;
    }
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
var CONTEXT_FORM_KEYS = {
  instructions: "context.form.instructions",
  catalog: "context.form.catalog",
  snapshot: "context.form.snapshot",
  notice: "context.form.notice",
  relay: "context.form.relay",
  recall: "context.form.recall"
};
function contextSourceTree(source) {
  return typeof source === "object" && source !== null && !Array.isArray(source) ? source : { value: source };
}
function contextFormLabel(form, qt) {
  return form === null || form === void 0 ? void 0 : CONTEXT_FORM_KEYS[form] === void 0 ? void 0 : qt(CONTEXT_FORM_KEYS[form]);
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
function eventCallId(value) {
  if (typeof value !== "object" || value === null) return void 0;
  const data = value.data;
  if (typeof data !== "object" || data === null) return void 0;
  const flat = data.callId;
  if (typeof flat === "string") return flat;
  const job = data.toolCall;
  if (typeof job === "object" && job !== null) {
    const nested = job.callId;
    if (typeof nested === "string") return nested;
  }
  return void 0;
}
function ownEventSeqs(record2, callIndex) {
  const seqs = [];
  const push = (seq) => {
    if (typeof seq === "number" && !seqs.includes(seq)) seqs.push(seq);
  };
  push(record2.cell.sourceSeq);
  push(record2.cell.resultSeq);
  const callId = record2.cell.callId;
  if (callId !== void 0) for (const seq of callIndex.get(callId) ?? []) push(seq);
  return seqs;
}
function eventsBehindRow(record2, rows, position, allRows, events, callIndex) {
  if (events.length === 0) return [];
  const at = allRows.findIndex((candidate) => candidate.cell.index === record2.cell.index);
  if (at < 0) return [];
  const folded = record2.turnSummary === true || record2.foldSummary !== void 0;
  let end = at + 1;
  if (folded) {
    const next = rows[position + 1];
    const nextAt = next === void 0 ? -1 : allRows.findIndex((candidate) => candidate.cell.index === next.cell.index);
    end = nextAt < 0 ? allRows.length : nextAt;
  }
  const seqs = /* @__PURE__ */ new Set();
  for (let index = at; index < end; index += 1) {
    for (const seq of ownEventSeqs(allRows[index], callIndex)) seqs.add(seq);
  }
  const bySeq = new Map(events.map((entry) => [entry.seq, entry]));
  return [...seqs].sort((left, right) => left - right).map((seq) => bySeq.get(seq)).filter((entry) => entry !== void 0);
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
  const displayText = (0, import_react5.useMemo)(
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
  const resultText = (0, import_react5.useMemo)(
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
  const labels = (0, import_react5.useMemo)(() => markdownLabels(t), [t]);
  if (rendered) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: preview2 ? TrajectoryTable_default.markdownPreview : TrajectoryTable_default.markdownPayload, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.MarkdownText, { text, labels, variant }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${preview2 ? TrajectoryTable_default.payloadPreview : ""}`, children: text });
}
function SourceBlocks({
  blocks,
  onOpenCall,
  t
}) {
  const attachments = new Map(recordAttachments(blocks, t).map((entry) => [entry.index, entry]));
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.sourceBlocks, children: blocks.map((block, index) => {
    const attachment = attachments.get(index);
    return attachment !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("details", { className: TrajectoryTable_default.attachmentDisclosure, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.attachmentName, title: attachment.name, children: attachment.name })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: TrajectoryTable_default.sourceBlockContent, children: block.content })
    ] }, index) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: TrajectoryTable_default.sourceBlock, children: [
      block.callId !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.sourceBlockJumpIcon, size: 12 })
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.sourceBlockHeader, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.sourceBlockLabel, children: t("block.label", { index: index + 1, type: block.type }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: TrajectoryTable_default.sourceBlockContent, children: block.content })
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
        block.attachment?.mediaType ?? fileExtension(ref.name ?? "").toUpperCase(),
        fileSizeText(ref.bytes),
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "ul",
    {
      className: preview2 ? `${TrajectoryTable_default.attachments} ${TrajectoryTable_default.attachmentsPreview}` : TrajectoryTable_default.attachments,
      "aria-label": t("attachment.list"),
      children: attachments.map(({ block, index, name: name2, metadata }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { className: TrajectoryTable_default.attachmentRow, children: [
        block.attachment !== void 0 ? renderSlot("conversation.trajectory.images", {
          images: [{ attachment: block.attachment, label: name2 }],
          align: "start",
          thumbnail: true,
          loadImage
        }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.attachmentIcon, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.FileTypeIcon, { path: name2 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.attachmentInfo, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.attachmentName, title: name2, children: name2 }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.attachmentMetadata, children: metadata })
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "ul",
    {
      className: preview2 ? `${TrajectoryTable_default.assistantToolCalls} ${TrajectoryTable_default.assistantToolCallsPreview}` : TrajectoryTable_default.assistantToolCalls,
      children: calls.map((call, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "button",
        {
          type: "button",
          className: TrajectoryTable_default.assistantToolCallButton,
          title: t("block.openSummaryTitle"),
          onClick: () => {
            if (call.callId !== void 0) onOpenCall(call.callId);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "svg",
              {
                className: TrajectoryTable_default.assistantToolCallIcon,
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.assistantToolCallText, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.assistantToolCallName, children: call.toolName ?? t("details.toolCall") }),
              call.content !== "" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.assistantToolCallArgs, children: call.content })
            ] })
          ]
        }
      ) }, call.callId ?? index))
    }
  );
}
function ToolGlyph() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "svg",
    {
      className: TrajectoryTable_default.toolCatalogIcon,
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  if (tools.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.toolsMissing") });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.toolCatalog, children: tools.map((tool, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("details", { className: TrajectoryTable_default.toolCatalogItem, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("summary", { className: TrajectoryTable_default.toolCatalogSummary, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.toolCatalogChevron, size: 12 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolGlyph, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.toolCatalogName, children: tool.name }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.toolCatalogDescription, children: tool.description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.toolCatalogDefinition, children: [
      tool.description !== "" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: TrajectoryTable_default.toolCatalogFullDescription, children: tool.description }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_dsh_client_ui_primitives3.JsonTree,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: TrajectoryTable_default.promptDiffSection, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: TrajectoryTable_default.promptDiffTitle, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: TrajectoryTable_default.promptDiff, children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default[`promptDiffLine${line.kind}`], children: [
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.promptDiffSections, children: [
    before.system !== after.system && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      PromptDiffSection,
      {
        title: t("record.systemPrompt"),
        before: before.system,
        after: after.system
      }
    ),
    toolsBefore !== toolsAfter && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: [
        TrajectoryTable_default.resultBlocks,
        preview2 ? TrajectoryTable_default.resultBlocksPreview : void 0,
        error ? TrajectoryTable_default.errorPayload : void 0
      ].filter((value) => value !== void 0).join(" "),
      children: [
        error && errorDetail !== void 0 && errorDetail !== "" && !blocks.some((block) => block.type === "text" && block.content !== "") && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: TrajectoryTable_default.resultBlockText, children: errorDetail }),
        blocks.map((block, index) => block.attachment !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.messageImages, children: renderSlot("conversation.trajectory.images", { images: [{ attachment: block.attachment }], align: "start", loadImage }) }, index) : block.content !== "" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: TrajectoryTable_default.resultBlockText, children: block.content }, index) : null)
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: `${TrajectoryTable_default.payload} ${TrajectoryTable_default.toolUpdatePayload}`, children: record2.cell.inputDetail });
  }
  if (!rendered && record2.cell.sourceBlocks && record2.cell.sourceBlocks.length > 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MarkdownFragment, { text: source2, rendered: false, preview: preview2, t });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: `${TrajectoryTable_default.assistantContent} ${TrajectoryTable_default.assistantContentRendered}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "div",
        {
          className: preview2 && !record2.cell.outputDetail ? `${TrajectoryTable_default.thinkingQuote} ${TrajectoryTable_default.thinkingQuoteOnlyPreview}` : TrajectoryTable_default.thinkingQuote,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.IconChevronRightOutlineRegular, { className: TrajectoryTable_default.thinkingChevron, size: 12 })
                ]
              }
            ),
            thinkingExpanded && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
      record2.cell.outputDetail && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.assistantOutput, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        MarkdownFragment,
        {
          text: record2.cell.outputDetail,
          rendered,
          preview: preview2,
          t
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        AssistantToolCalls,
        {
          blocks: record2.cell.sourceBlocks,
          preview: preview2,
          onOpenCall,
          t
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: TrajectoryTable_default.noPayload, children: emptyLabel });
  }
  if (!rendered || !hasAttachments && !hasToolCalls) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MarkdownFragment, { text: source ?? "", rendered, preview: preview2, t });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    source && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MarkdownFragment, { text: source, rendered: true, preview: preview2, t }),
    record2.cell.kind === "message" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      AssistantToolCalls,
      {
        blocks: record2.cell.sourceBlocks,
        preview: preview2,
        onOpenCall,
        t
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
function Field({
  label,
  tone,
  mono = false,
  wrap = false,
  actions,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { "data-copy-reveal": actions === void 0 ? void 0 : "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("dd", { "data-tone": tone, "data-mono": mono || void 0, "data-wrap": wrap || void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.fieldValue, children }),
      actions
    ] })
  ] });
}
function RecordTiming({
  record: record2,
  preview: preview2 = false,
  extra,
  t
}) {
  return record2.cell.kind === "message" && record2.cell.assistantMetrics !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AssistantTimingPanel, { metrics: record2.cell.assistantMetrics, extra, t }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("dl", { className: TrajectoryTable_default.overview, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.started") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StartedAtValue, { timestamp: record2.cell.startedAt ?? null, t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.duration") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: formatElapsedSeconds(record2.cell.timeSeconds, t) })
    ] }),
    !preview2 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: t("timing.source") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: record2.cell.timeSeconds === null ? t("timing.notAvailable") : t("timing.sessionTimestamps") })
    ] }),
    extra
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
  if (!value) return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: TrajectoryTable_default.noPayload, children: missing });
  const error = direction === "output" && record2.cell.isError === true;
  const payloadClass = preview2 ? TrajectoryTable_default.jsonPreview : TrajectoryTable_default.jsonPayload;
  const payloadClassName = error ? `${payloadClass} ${TrajectoryTable_default.errorPayload}` : payloadClass;
  const json = error ? void 0 : parseJsonContainer(value);
  const singleTextResult = direction === "output" && record2.cell.outputBlocks?.length === 1 && record2.cell.outputBlocks[0]?.type === "text";
  if (singleTextResult && json !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_dsh_client_ui_primitives3.JsonTree,
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        className: [
          preview2 ? TrajectoryTable_default.markdownPreview : TrajectoryTable_default.markdownPayload,
          error ? TrajectoryTable_default.errorPayload : void 0
        ].filter((className) => className !== void 0).join(" "),
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.MarkdownText, { text: value, labels: markdownLabels(t) })
      }
    );
  }
  if (json !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_dsh_client_ui_primitives3.JsonTree,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
function parseJsonContainer(value) {
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed !== null ? parsed : void 0;
  } catch {
    return void 0;
  }
}
function ProgramInput({ program, initialWrapped, stringWrapping, t }) {
  const contentsId = (0, import_react5.useId)();
  const [wrapped, setWrapped] = (0, import_react5.useState)(initialWrapped);
  const [showJson, setShowJson] = (0, import_react5.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.programPanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.programToolbar, children: [
      !showJson && program.language !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.programLanguage, children: program.language }),
      !showJson && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.IconWrapLinesOutlineRegular, { size: 12 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M6 2H5a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2 2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h1" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M10 2h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2h-1" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        CopyButton,
        {
          text: showJson ? program.rawInput : program.source,
          label: t(showJson ? "copy.json" : "code.copySource"),
          copiedLabel: t("copied"),
          failedLabel: t("copy.failed"),
          reveal: "always"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { id: contentsId, className: TrajectoryTable_default.programContent, "data-wrap": wrapped, children: showJson ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_dsh_client_ui_primitives3.JsonTree,
      {
        data: program.arguments,
        label: t("record.parametersJson"),
        labels: jsonTreeLabels(t),
        stringWrapping
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_dsh_client_ui_primitives3.CodeBlock,
      {
        code: program.source,
        lang: program.language,
        lineNumbers: true,
        showHeader: false,
        className: TrajectoryTable_default.programSource,
        copyLabel: t("code.copySource"),
        copiedLabel: t("copied")
      }
    ) })
  ] });
}
function ProgramOutput({ record: record2, stringWrapping, t }) {
  const output = record2.cell.outputDetail;
  const json = output === void 0 || record2.cell.isError === true ? void 0 : parseJsonContainer(output);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.programContent, children: output === void 0 || output === "" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t(stateOf(record2) === "running" ? "code.running" : "record.noOutput") }) : json !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_dsh_client_ui_primitives3.JsonTree,
    {
      data: json,
      label: t("record.outputJson"),
      labels: jsonTreeLabels(t),
      stringWrapping,
      collapsedStringLines: 12
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { className: `${TrajectoryTable_default.programOutput} ${record2.cell.isError === true ? TrajectoryTable_default.programError : ""}`, children: output }) });
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
  hiddenIndexes = null,
  sessionEvents,
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
  const [selectedRecordId, setSelectedRecordId] = (0, import_react5.useState)(null);
  const [activeTab, setActiveTab] = (0, import_react5.useState)("overview");
  const [codeWrappingOnOpen, setCodeWrappingOnOpen] = (0, import_react5.useState)(false);
  const [thinkingDisclosure, setThinkingDisclosure] = (0, import_react5.useState)();
  const [detailsWidth, setDetailsWidth] = (0, import_react5.useState)(null);
  const [snapping, setSnapping] = (0, import_react5.useState)(false);
  const [hoverCard, setHoverCard] = (0, import_react5.useState)(null);
  const [toolRequestOffset, setToolRequestOffset] = (0, import_react5.useState)(null);
  const dragCleanup = (0, import_react5.useRef)(null);
  const snapTimers = (0, import_react5.useRef)([]);
  (0, import_react5.useEffect)(() => () => {
    dragCleanup.current?.();
    for (const timer of snapTimers.current) window.clearTimeout(timer);
  }, []);
  const appliedRecordSelection = (0, import_react5.useRef)(null);
  const appliedRecordFocus = (0, import_react5.useRef)(null);
  const tabHistory = (0, import_react5.useRef)(/* @__PURE__ */ new Set(["overview"]));
  const rootRef = (0, import_react5.useRef)(null);
  const tablePaneRef = (0, import_react5.useRef)(null);
  const followsTableTail = (0, import_react5.useRef)(false);
  const tableScrollInitialized = (0, import_react5.useRef)(false);
  const [tableScrollReady, setTableScrollReady] = (0, import_react5.useState)(false);
  const pendingScrollRecordId = (0, import_react5.useRef)(null);
  const loadingOlder = (0, import_react5.useRef)(false);
  const [olderLoading, setOlderLoading] = (0, import_react5.useState)(false);
  const scrollBaseline = (0, import_react5.useRef)(null);
  const allRecords = (0, import_react5.useMemo)(() => {
    const records2 = flattenRecords(turns);
    return hiddenIndexes === null ? records2 : records2.filter((record2) => !hiddenIndexes.has(record2.cell.index));
  }, [turns, hiddenIndexes]);
  const streamingCellsByIndex = (0, import_react5.useMemo)(
    () => new Map(streamingCells.map((cell) => [cell.index, cell])),
    [streamingCells]
  );
  const currentRecord = (0, import_react5.useCallback)((record2) => {
    const cell = streamingCellsByIndex.get(record2.cell.index);
    return cell === void 0 ? record2 : { ...record2, cell };
  }, [streamingCellsByIndex]);
  const selectedTemplate = (0, import_react5.useMemo)(
    () => selectedRecordId === null ? void 0 : allRecords.find((record2) => trajectoryRecordId(record2.cell) === selectedRecordId),
    [allRecords, selectedRecordId]
  );
  const selected = selectedTemplate === void 0 ? void 0 : currentRecord(selectedTemplate);
  const resultSeq = activeTab === "preview" ? selected?.cell.resultSeq : void 0;
  const [liveResult, setLiveResult] = (0, import_react5.useState)();
  (0, import_react5.useEffect)(() => {
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
  (0, import_react5.useEffect)(() => {
    onSelectedIndexChange?.(selectedIndex);
  }, [onSelectedIndexChange, selectedIndex]);
  const requestGroups = (0, import_react5.useMemo)(() => new Set(
    (sessionRequestNumbers ?? []).map((request) => requestKey(request.turn, request.group))
  ), [sessionRequestNumbers]);
  const requestNumbers = (0, import_react5.useMemo)(
    () => indexRequestNumbers(sessionRequestNumbers),
    [sessionRequestNumbers]
  );
  const messagesWithCalls = (0, import_react5.useMemo)(() => messageIndexesWithCalls(allRecords), [allRecords]);
  const eventSeqsByCallId = (0, import_react5.useMemo)(() => {
    const index = /* @__PURE__ */ new Map();
    if (activeTab !== "raw") return index;
    for (const entry of sessionEvents ?? []) {
      const callId = eventCallId(entry.value);
      if (callId === void 0) continue;
      const list = index.get(callId);
      if (list === void 0) index.set(callId, [entry.seq]);
      else list.push(entry.seq);
    }
    return index;
  }, [activeTab, sessionEvents]);
  const records = (0, import_react5.useMemo)(() => {
    const emptySummary = () => ({ tools: 0, steps: /* @__PURE__ */ new Set(), names: [], durationMs: null });
    const addToSummary = (summary, record2) => {
      const cell = record2.cell;
      if (cell.kind === "tool" || cell.kind === "subtool") {
        summary.tools += 1;
        const name2 = cell.toolName;
        if (name2 !== void 0 && !summary.names.includes(name2)) summary.names.push(name2);
      }
      const stepKey = requestKey(record2.turn, record2.group);
      if (requestGroups.has(stepKey)) summary.steps.add(stepKey);
      const meta = cell.callId === void 0 ? void 0 : callMeta?.get(cell.callId);
      const ms = cell.timeSeconds !== null ? Math.round(cell.timeSeconds * 1e3) : meta?.durationMs;
      if (typeof ms === "number") summary.durationMs = (summary.durationMs ?? 0) + ms;
    };
    const turnSummary = /* @__PURE__ */ new Map();
    const turnAnchor = /* @__PURE__ */ new Map();
    const turnContent = /* @__PURE__ */ new Map();
    for (const record2 of allRecords) {
      if (record2.turn === null) continue;
      const summary = turnSummary.get(record2.turn) ?? emptySummary();
      addToSummary(summary, record2);
      turnSummary.set(record2.turn, summary);
      if (record2.cell.requestOnly === true || record2.cell.kind === "system") continue;
      turnContent.set(record2.turn, (turnContent.get(record2.turn) ?? 0) + 1);
      if (turnAnchor.has(record2.turn)) continue;
      turnAnchor.set(record2.turn, record2);
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
        if (record2.cell.kind === "system") {
          out.push(record2);
          continue;
        }
        if (seenTurns.has(record2.turn)) continue;
        seenTurns.add(record2.turn);
        flushAssistant();
        flushTool();
        const summary = turnSummary.get(record2.turn) ?? emptySummary();
        const anchor = turnAnchor.get(record2.turn) ?? record2;
        out.push({
          ...anchor,
          /* one row stands for the whole turn, so it is both its start and its
             end — otherwise the row has no chevron to unfold it again */
          turnStart: true,
          turnEnd: true,
          turnSummary: true,
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
      out.push(record2);
    }
    flushAssistant();
    flushTool();
    for (const [index, record2] of out.entries()) {
      const kind = record2.cell.kind;
      const next = out[index + 1];
      const nextKind = next?.cell.kind;
      const turnCollapsible = record2.turn !== null && (turnContent.get(record2.turn) ?? 0) > 1;
      if (turnCollapsible) record2.turnCollapsible = true;
      const hasFold = record2.turnStart && record2.turn !== null && turnCollapsible || kind === "message" && messagesWithCalls.has(record2.cell.index) || kind === "message" && collapsedAssistants.has(trajectoryRecordId(record2.cell)) || kind === "tool" && nextKind === "subtool";
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
    return hiddenIndexes === null ? withStructuralLevels(out) : withFlatLevels(out);
  }, [allRecords, collapsedAssistants, collapsedTools, collapsedTurns, messagesWithCalls, hiddenIndexes, callMeta, requestGroups]);
  const projectedVirtualRows = (0, import_react5.useMemo)(
    () => groupTrajectoryVirtualRows(records),
    [records]
  );
  const virtualRowStructure = useStableVirtualRowStructure(projectedVirtualRows);
  const virtualizationEnabled = hasOlderRecords || records.length > VIRTUALIZATION_THRESHOLD;
  const virtualScrollMargin = 0;
  const estimateVirtualRowSize = (0, import_react5.useCallback)(
    (index) => virtualRowStructure[index]?.height ?? 30,
    [virtualRowStructure]
  );
  const getVirtualRowKey = (0, import_react5.useCallback)(
    (index) => virtualRowStructure[index]?.key ?? index,
    [virtualRowStructure]
  );
  const getTableScrollElement = (0, import_react5.useCallback)(() => tablePaneRef.current, []);
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
  const virtualIndexByRecordId = (0, import_react5.useMemo)(() => {
    const indexes = /* @__PURE__ */ new Map();
    for (const [virtualIndex, row] of projectedVirtualRows.entries()) {
      for (const entry of row.entries) {
        indexes.set(trajectoryRecordId(entry.record.cell), virtualIndex);
      }
    }
    return indexes;
  }, [projectedVirtualRows]);
  const locateSelected = (0, import_react5.useCallback)((record2) => {
    const id = trajectoryRecordId(record2.cell);
    followsTableTail.current = false;
    if (virtualizationEnabled) {
      const virtualIndex = virtualIndexByRecordId.get(id);
      if (virtualIndex !== void 0) {
        rowVirtualizer.scrollToIndex(virtualIndex, { behavior: "smooth", align: "center" });
        return;
      }
    }
    const row = rootRef.current?.querySelector(`tr[data-record-index="${record2.cell.index}"]`);
    if (row !== void 0 && row !== null && typeof row.scrollIntoView === "function") {
      row.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [virtualizationEnabled, virtualIndexByRecordId, rowVirtualizer]);
  (0, import_react5.useEffect)(() => {
    rowVirtualizer.measure();
  }, [hiddenIndexes, rowVirtualizer]);
  (0, import_react5.useLayoutEffect)(() => {
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
  const selectedPrompt = selected?.cell.kind === "system" ? selected.cell.promptDetail : void 0;
  const selectedPreviousPrompt = selected?.cell.kind === "system" ? selected.cell.previousPromptDetail : void 0;
  const selectedState = selected === void 0 ? void 0 : stateOf(selected);
  const selectedTabs = selected === void 0 ? [] : RECORD_TABS;
  const activeTurn = selected?.turn;
  const activeSection = selected?.section;
  const selectedParents = selected === void 0 ? {} : parentRecords(allRecords, selected);
  const selectedParentMessage = selectedParents.message;
  const selectedParentTool = selectedParents.tool;
  const selectedRecordRequest = selected === void 0 ? void 0 : requestNumbers.get(requestKey(selected.turn, selected.group));
  const selectedRecordRequestInfo = selectedRecordRequest === void 0 ? void 0 : sessionRequestNumbers?.find((request) => request.number === selectedRecordRequest);
  const selectedRequestInfo = selectedRecordRequestInfo !== void 0 && (selected?.cell.kind === "message" || selected?.cell.kind === "user") ? selectedRecordRequestInfo : void 0;
  const hasSelectedHierarchy = selectedParents.message !== void 0 || selectedParents.tool !== void 0;
  const splitStyle = toolRequestOffset === null ? void 0 : {
    "--trajectory-tool-request-width": `calc(58cqw - ${toolRequestOffset}px)`
  };
  const activateTab = (tab) => {
    setCodeWrappingOnOpen(stringWrapping?.getDefault() ?? false);
    tabHistory.current.delete(tab);
    tabHistory.current.add(tab);
    setActiveTab(tab);
  };
  (0, import_react5.useEffect)(() => {
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      clearInspectorSelection();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedRecordId]);
  const clearInspectorSelection = () => {
    setSelectedRecordId(null);
  };
  const clearAllSelections = () => {
    clearInspectorSelection();
    onClearSelection?.();
  };
  const selectRecord = (0, import_react5.useCallback)((index) => {
    setCodeWrappingOnOpen(stringWrapping?.getDefault() ?? false);
    const record2 = allRecords.find((candidate) => candidate.cell.index === index);
    onRecordSelect?.(index);
    setSelectedRecordId(record2 === void 0 ? null : trajectoryRecordId(record2.cell));
    if (record2 === void 0) return;
    const recent = [...tabHistory.current].reverse()[0];
    setActiveTab(recent ?? "overview");
  }, [allRecords, onRecordSelect, stringWrapping]);
  (0, import_react5.useEffect)(() => {
    if (recordSelection === null || appliedRecordSelection.current === recordSelection) return;
    appliedRecordSelection.current = recordSelection;
    selectRecord(recordSelection.index);
    const record2 = allRecords.find((candidate) => candidate.cell.index === recordSelection.index);
    pendingScrollRecordId.current = record2 === void 0 ? null : trajectoryRecordId(record2.cell);
  }, [allRecords, recordSelection, selectRecord]);
  (0, import_react5.useEffect)(() => {
    if (recordFocus === null || appliedRecordFocus.current === recordFocus) return;
    appliedRecordFocus.current = recordFocus;
    const record2 = allRecords.find((candidate) => candidate.cell.index === recordFocus.index);
    pendingScrollRecordId.current = record2 === void 0 ? null : trajectoryRecordId(record2.cell);
  }, [allRecords, recordFocus]);
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
    setSelectedRecordId(trajectoryRecordId(target.cell));
    activateTab("overview");
  };
  const openCallSummary = (callId) => {
    const target = allRecords.find((record2) => record2.cell.callId === callId);
    if (target !== void 0) openRecordSummary(target);
  };
  const openRecordSummaryRef = (0, import_react5.useRef)(openRecordSummary);
  openRecordSummaryRef.current = openRecordSummary;
  (0, import_react5.useEffect)(() => {
    if (inspectCallId === null) return;
    const target = flattenRecords(turns).find((record2) => record2.cell.callId === inspectCallId);
    if (target === void 0) return;
    openRecordSummaryRef.current(target);
    pendingScrollRecordId.current = trajectoryRecordId(target.cell);
    onInspectApplied?.();
  }, [inspectCallId, turns, onInspectApplied]);
  (0, import_react5.useEffect)(() => {
    const id = pendingScrollRecordId.current;
    if (id === null) return;
    const position = records.findIndex((record2) => trajectoryRecordId(record2.cell) === id);
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
  (0, import_react5.useEffect)(() => {
    if (timelineFocusIndexes === null || timelineFocusIndexes.size === 0) return;
    const focusedPositions = records.flatMap((record2, position) => timelineFocusIndexes.has(record2.cell.index) ? [position] : []);
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
  const requestOlder = (0, import_react5.useCallback)((pane, requireTop) => {
    if (!hasOlderRecords || onLoadOlder === void 0 || loadingOlder.current || olderHistoryLoading || requireTop && pane.scrollTop > OLDER_LOAD_THRESHOLD_PX) return;
    loadingOlder.current = true;
    setOlderLoading(true);
    void onLoadOlder().finally(() => {
      loadingOlder.current = false;
      setOlderLoading(false);
    });
  }, [hasOlderRecords, historyStartSeq, olderHistoryLoading, onLoadOlder]);
  (0, import_react5.useLayoutEffect)(() => {
    const pane = tablePaneRef.current;
    if (pane === null) return;
    const baseline = scrollBaseline.current;
    if (baseline !== null && baseline.historyStartSeq !== historyStartSeq) {
      const arrived = pane.scrollHeight - baseline.scrollHeight;
      if (arrived > 0) pane.scrollTop += arrived;
      scrollBaseline.current = { historyStartSeq, scrollHeight: pane.scrollHeight };
      return;
    }
    scrollBaseline.current = { historyStartSeq, scrollHeight: pane.scrollHeight };
    if (!tableScrollInitialized.current) {
      if (historyLoading) return;
      tableScrollInitialized.current = true;
      const restore = initialScrollTop ?? null;
      followsTableTail.current = restore === null;
      if (restore !== null) {
        if (virtualizationEnabled) rowVirtualizer.scrollToOffset(restore, { behavior: "auto" });
        pane.scrollTop = restore;
      } else if (virtualizationEnabled) {
        rowVirtualizer.scrollToEnd({ behavior: "auto" });
      } else {
        pane.scrollTop = pane.scrollHeight;
      }
      setTableScrollReady(true);
      return;
    }
    if (!followsTableTail.current) return;
    if (!virtualizationEnabled) pane.scrollTop = pane.scrollHeight;
  }, [
    hasOlderRecords,
    historyLoading,
    historyStartSeq,
    requestOlder,
    rowVirtualizer,
    virtualRowStructure,
    virtualizationEnabled
  ]);
  const olderBusy = olderHistoryLoading || olderLoading;
  const showInitialLoading = historyLoading || !tableScrollReady;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref: rootRef, className: TrajectoryTable_default.split, style: splitStyle, "data-show-time": showTime ? void 0 : "false", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        ref: tablePaneRef,
        className: TrajectoryTable_default.tablePane,
        "data-trajectory-scroll": "",
        onScroll: (event) => {
          const pane = event.currentTarget;
          followsTableTail.current = pane.scrollHeight - pane.clientHeight - pane.scrollTop <= BOTTOM_FOLLOW_THRESHOLD_PX;
          if (hoverCard !== null) setHoverCard(null);
          requestOlder(pane, true);
        },
        onWheel: (event) => {
          if (event.deltaY >= 0) return;
          if (event.currentTarget.scrollTop > OLDER_LOAD_THRESHOLD_PX) return;
          requestOlder(event.currentTarget, true);
        },
        onClick: (event) => {
          if (event.target === event.currentTarget) clearAllSelections();
        },
        children: [
          showInitialLoading && records.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.skeletonPane, "aria-hidden": "true", children: [78, 64, 84, 58, 72, 66].map((width, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.skeletonRow, style: { width: `${width}%` } }, index)) }),
          olderBusy && !showInitialLoading && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.historyLoading, role: "status", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.historyLoadingBar, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.StateDot, { state: "ongoing" }),
            t("history.loadingEarlier")
          ] }) }),
          showInitialLoading && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.historyLoading, role: "status", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.historyLoadingBar, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.StateDot, { state: "ongoing" }),
            t("history.loadingTrajectory")
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
            "table",
            {
              className: TrajectoryTable_default.table,
              "data-scroll-ready": tableScrollReady || void 0,
              "aria-rowcount": records.length,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("colgroup", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("col", { className: TrajectoryTable_default.eventColumn }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("col", { className: TrajectoryTable_default.contentColumn })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("tbody", { children: [
                  !showInitialLoading && records.length === 0 && /* `queryText` was never a prop of this component: any empty result
                     (a query that matched nothing) threw and took the whole tab down.
                     A hidden set is exactly "a query is active". */
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tr", { className: TrajectoryTable_default.emptyRow, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("td", { colSpan: 2, className: TrajectoryTable_default.emptyCell, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: hiddenIndexes === null ? qt("empty.none") : qt("empty.noMatch") }),
                    hiddenIndexes !== null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: TrajectoryTable_default.emptyAction, onClick: onShowAll, children: qt("query.showAll") })
                  ] }) }),
                  virtualTop > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tr", { className: TrajectoryTable_default.virtualSpacer, "data-virtual-spacer": "top", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    "td",
                    {
                      colSpan: 2,
                      style: {
                        "--trajectory-virtual-spacer-height": `${virtualTop}px`
                      }
                    }
                  ) }),
                  renderedRecords.map(({ record: record2, position, terminalRequestBoundary }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    RecordPresentation,
                    {
                      cell: record2.cell,
                      t,
                      children: ({ displayText, listDisplayText, resultText, toolCallOnly, toolCallText }) => {
                        const isInitialSystem = record2.cell.kind === "system" && record2.cell.index === allRecords[0]?.cell.index;
                        const sectionActive = record2.turn === null ? activeSection === record2.section : activeTurn === record2.turn;
                        const metaInfo = record2.cell.callId === void 0 ? void 0 : callMeta?.get(record2.cell.callId);
                        const rowDurationMs = record2.cell.timeSeconds !== null ? Math.round(record2.cell.timeSeconds * 1e3) : metaInfo?.durationMs;
                        const rowStartedAt = record2.cell.startedAt ?? metaInfo?.time;
                        const toolLike = record2.cell.kind === "tool" || record2.cell.kind === "subtool";
                        const level = record2.level;
                        const banded = record2.turnOpening !== true && record2.turnSummary !== true && record2.cell.kind !== "user" && (record2.step ?? 0) % 2 === 1;
                        const nextRow = records[position + 1];
                        const nextLevel = nextRow === void 0 ? -1 : nextRow.level;
                        const rowName = toolLike ? record2.cell.toolName ?? "tool" : record2.cell.kind === "message" ? "assistant" : record2.cell.kind;
                        const rawSub = toolLike ? String(record2.cell.inputDetail ?? "") : String(displayText ?? "");
                        const flatSub = rawSub.replace(/\s+/g, " ").trim();
                        const rowSub = toolLike && flatSub.length > 180 ? `${flatSub.slice(0, 180)}\u2026` : flatSub;
                        const rowTone = record2.cell.isError ? "error" : stateOf(record2) === "running" ? "running" : "ok";
                        const rowErrorText = record2.cell.isError === true && toolLike ? String(record2.cell.outputDetail ?? record2.cell.result ?? "").replace(/\s+/g, " ").trim() : "";
                        const rowBarWidth = rowDurationMs == null ? 0 : Math.max(2, Math.round(rowDurationMs / Math.max(1, maxDurationMs) * 64));
                        const singleToolNotice = record2.cell.kind === "context" && record2.cell.sourceBlocks?.length === 1 && record2.cell.sourceBlocks.every((block) => block.type === "tool-addition" || block.type === "tool-removal");
                        return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                          "tr",
                          {
                            tabIndex: singleToolNotice ? -1 : 0,
                            "aria-rowindex": position + 1,
                            "aria-label": t("request.rowAria", {
                              kind: t(KIND_LABEL_KEY[record2.cell.kind]),
                              content: listDisplayText || t("request.noContent")
                            }),
                            "aria-selected": selectedIndex === record2.cell.index,
                            "data-kind": record2.cell.kind,
                            "data-band": banded ? "1" : void 0,
                            "data-child-last": record2.childLast || void 0,
                            "data-level": level,
                            "data-has-children": record2.hasChildren || void 0,
                            "data-has-fold": record2.hasFold === true && hiddenIndexes === null || void 0,
                            onMouseEnter: (event) => {
                              setHoverCard({ x: event.clientX, y: event.clientY, record: record2 });
                            },
                            onMouseLeave: () => {
                              setHoverCard(null);
                            },
                            "data-trajectory-row-key": trajectoryVirtualRecordKey(record2),
                            "data-virtual-position": virtualizationEnabled ? position : void 0,
                            "data-record-index": record2.cell.index,
                            "data-terminal-request-boundary": terminalRequestBoundary || void 0,
                            "data-group-start": record2.groupStart || void 0,
                            "data-turn-start": record2.turnStart || void 0,
                            "data-error": record2.cell.isError || void 0,
                            "data-running": stateOf(record2) === "running" || void 0,
                            "data-turn-end": record2.turnEnd || void 0,
                            "data-selected": selectedIndex === record2.cell.index || void 0,
                            "data-timeline-focus": timelineFocusIndexes === null ? void 0 : timelineFocusIndexes.has(record2.cell.index) ? "inside" : "outside",
                            onClick: singleToolNotice ? void 0 : () => {
                              selectRecord(record2.cell.index);
                            },
                            onDoubleClick: (event) => {
                              if (singleToolNotice) return;
                              if (record2.turn !== null && collapsedTurns.has(record2.turn)) {
                                event.preventDefault();
                                onToggleTurn(record2.turn);
                                return;
                              }
                              if (record2.cell.kind === "message" && messagesWithCalls.has(record2.cell.index)) {
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
                              if (singleToolNotice) return;
                              if (event.key === "ArrowLeft") {
                                event.preventDefault();
                                const id = trajectoryRecordId(record2.cell);
                                if (record2.cell.kind === "message" && collapsedAssistants.has(id) === false && messagesWithCalls.has(record2.cell.index)) {
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
                              selectRecord(record2.cell.index);
                            },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: TrajectoryTable_default.event, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowClock, children: rowStartedAt != null ? formatClock(rowStartedAt) : "" }) }),
                              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("td", { className: TrajectoryTable_default.content, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                                "span",
                                {
                                  className: TrajectoryTable_default.rowLine,
                                  "data-tone": rowTone,
                                  "data-mono": toolLike || void 0,
                                  style: { "--bt-level": level },
                                  children: [
                                    hiddenIndexes !== null && /* A query drops rows, so the tree is gone: the row
                                       states its own position where the connector would
                                       have been. Two chips of fixed width, so the kind
                                       tag's left edge never moves, each with its unit
                                       spelled out — `86 · 177` needed a legend. */
                                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.rowPosition, "aria-hidden": "true", children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.rowPositionChip, "data-part": "turn", children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowPositionValue, children: record2.turn ?? "\u2013" }),
                                        qt("position.turn")
                                      ] }),
                                      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.rowPositionChip, "data-part": "step", children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowPositionValue, children: record2.step ?? "\u2013" }),
                                        qt("position.step")
                                      ] })
                                    ] }),
                                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rails, "aria-hidden": "true", children: [1, 2, 3].filter((axisLevel) => level >= axisLevel || axisLevel === 1 && record2.spine === true).map((axisLevel) => {
                                      const continues = nextRow !== void 0 && nextRow.turn === record2.turn && (nextLevel >= axisLevel || axisLevel === 1 && nextRow.spine === true);
                                      const stopsHere = !continues;
                                      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
                                      const messageFold = record2.cell.kind === "message" && (collapsedHere || messagesWithCalls.has(record2.cell.index));
                                      const next = records[position + 1];
                                      const toolFold = toolLike && next !== void 0 && next.cell.kind === "subtool";
                                      const turnFold = record2.turnStart && record2.turn !== null && record2.turnCollapsible === true;
                                      if (hiddenIndexes !== null) return null;
                                      if (turnFold) {
                                        const collapsed = collapsedTurns.has(record2.turn);
                                        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
                                            onDoubleClick: (event) => {
                                              event.stopPropagation();
                                            },
                                            onClick: (event) => {
                                              event.stopPropagation();
                                              const collapsed2 = collapsedTurns.has(record2.turn);
                                              if (collapsed2 && event.altKey) onClearDescendantFolds?.(record2.turn);
                                              onToggleTurn(record2.turn);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChevronIcon, { open: !collapsed })
                                          }
                                        );
                                      }
                                      if (messageFold) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
                                            "aria-label": qt(collapsedHere ? "row.expandCalls" : "row.collapseCalls"),
                                            "aria-expanded": !collapsedHere,
                                            onDoubleClick: (event) => {
                                              event.stopPropagation();
                                            },
                                            onClick: (event) => {
                                              event.stopPropagation();
                                              if (collapsedHere && event.altKey) onClearDescendantFolds?.(record2.turn, id);
                                              onToggleAssistant(id);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChevronIcon, { open: !collapsedHere })
                                          }
                                        );
                                      }
                                      if (toolFold) {
                                        const folded = collapsedTools.has(id);
                                        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
                                            "aria-label": qt(folded ? "row.expandSubCalls" : "row.collapseSubCalls"),
                                            "aria-expanded": !folded,
                                            onDoubleClick: (event) => {
                                              event.stopPropagation();
                                            },
                                            onClick: (event) => {
                                              event.stopPropagation();
                                              onToggleTool(id);
                                            },
                                            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChevronIcon, { open: !folded })
                                          }
                                        );
                                      }
                                      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowChevronSpace });
                                    })(),
                                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.kindSlot, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                                      KindTag,
                                      {
                                        kind: record2.cell.kind,
                                        label: t(KIND_LABEL_KEY[record2.cell.kind])
                                      }
                                    ) }),
                                    toolLike && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowName, children: rowName }),
                                    record2.cell.kind === "context" && (record2.cell.contextProducer?.label ?? "") !== "" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowName, "data-context-source": true, children: record2.cell.contextProducer?.label }),
                                    rowTone !== "ok" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowBadge, "data-tone": rowTone, children: rowTone === "error" ? qt("row.error") : qt("row.running") }),
                                    record2.foldSummary !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.foldGroup, children: [
                                      record2.foldSummary.steps > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.foldChip, "data-kind": "steps", children: [
                                        record2.foldSummary.steps,
                                        " ",
                                        qt("totals.steps")
                                      ] }),
                                      record2.foldSummary.tools > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.foldChip, "data-kind": "tools", children: [
                                        record2.foldSummary.tools,
                                        " ",
                                        qt("totals.tool")
                                      ] }),
                                      record2.foldSummary.durationMs != null && record2.foldSummary.durationMs > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.foldChip, "data-kind": "time", children: compactDuration(record2.foldSummary.durationMs) })
                                    ] }),
                                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowSub, children: rowSub }),
                                    rowErrorText !== "" && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.rowResult, children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowResultArrow, "aria-hidden": "true", children: "\u2192" }),
                                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowResultText, children: rowErrorText })
                                    ] }),
                                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: TrajectoryTable_default.rowBarWrap, children: [
                                      rowBarWidth > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                                        "span",
                                        {
                                          className: TrajectoryTable_default.rowBar,
                                          "data-tone": rowTone,
                                          style: { width: `${rowBarWidth}px` },
                                          "aria-hidden": "true"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.rowMs, children: rowDurationMs == null || rowDurationMs <= 0 ? "\u2014" : compactDuration(rowDurationMs) })
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
                  virtualBottom > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tr", { className: TrajectoryTable_default.virtualSpacer, "data-virtual-spacer": "bottom", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
    selected !== void 0 && selectedState !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "aside",
      {
        className: TrajectoryTable_default.details,
        "aria-label": t("details.event"),
        "data-snapping": snapping || void 0,
        style: detailsWidth === null ? void 0 : { width: detailsWidth },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
                snapTimers.current.push(window.setTimeout(() => setSnapping(false), 240));
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
                  dragCleanup.current = null;
                  window.removeEventListener("mousemove", onMove);
                  window.removeEventListener("mouseup", onUp);
                  details.removeAttribute("data-dragging");
                  if (!moved) return;
                  const targets = [420, 520, 640];
                  const nearest = targets.reduce((best, value) => Math.abs(value - latest) < Math.abs(best - latest) ? value : best, targets[0]);
                  if (Math.abs(nearest - latest) <= 40) {
                    details.setAttribute("data-snapping", "");
                    details.style.width = `${nearest}px`;
                    snapTimers.current.push(window.setTimeout(() => {
                      setDetailsWidth(nearest);
                      snapTimers.current.push(window.setTimeout(() => {
                        details.removeAttribute("data-snapping");
                        setSnapping(false);
                      }, 240));
                    }, 30));
                  }
                };
                details.setAttribute("data-dragging", "");
                dragCleanup.current = () => {
                  window.removeEventListener("mousemove", onMove);
                  window.removeEventListener("mouseup", onUp);
                };
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
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.detailsHeader, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.detailsTitle, children: selected !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "span",
                {
                  className: `${TrajectoryTable_default.kindTag} ${selected.cell.kind === "context" ? TrajectoryTable_default.contextGreen : selected.cell.kind === "compacted" ? TrajectoryTable_default.compacted : selected.cell.kind === "tool" ? TrajectoryTable_default.toolAmber : selected.cell.kind === "message" ? TrajectoryTable_default.assistantVioletBright : selected.cell.kind === "subtool" ? TrajectoryTable_default.subtoolAmber : TrajectoryTable_default[selected.cell.kind]}`,
                  children: selected.cell.kind === "tool" || selected.cell.kind === "subtool" ? selected.cell.toolName ?? t(KIND_LABEL_KEY[selected.cell.kind]) : t(KIND_LABEL_KEY[selected.cell.kind])
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.detailsLocation, children: selected.cell.kind === "compacted" ? sectionLabel(selected.turn, t) : `${sectionLabel(selected.turn, t)} \xB7 ${selected.group}` })
            ] }) }),
            selected !== void 0 && (() => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.headActions, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                type: "button",
                className: TrajectoryTable_default.headAction,
                title: qt("head.locate"),
                "aria-label": qt("head.locate"),
                onClick: () => {
                  locateSelected(selected);
                },
                children: "\u2316"
              }
            ) }))(),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                type: "button",
                className: TrajectoryTable_default.close,
                "aria-label": t("details.close"),
                onClick: clearInspectorSelection,
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { "aria-hidden": "true", children: "\xD7" })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.detailTabs, role: "tablist", "aria-label": t("details.event"), children: selectedTabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "div",
            {
              id: "trajectory-detail-panel",
              className: activeTab === "overview" || activeTab === "timing" ? `${TrajectoryTable_default.detailBody} ${TrajectoryTable_default.detailBodySummary}` : selectedProgram !== void 0 && activeTab === "preview" ? `${TrajectoryTable_default.detailBody} ${TrajectoryTable_default.detailBodyProgram}` : TrajectoryTable_default.detailBody,
              role: "tabpanel",
              "aria-labelledby": `trajectory-detail-${activeTab}`,
              children: selected !== void 0 && selectedState !== void 0 && (() => {
                const cell = selected.cell;
                const toolLike = cell.kind === "tool" || cell.kind === "subtool";
                const argsText = cell.inputDetail ?? "";
                const args = parseMaybeJson(cell.inputDetail);
                const isBranch = (value) => value !== null && typeof value === "object";
                const schema = parseMaybeJson(cell.schemaDetail);
                const systemPrompt = selectedPrompt?.system ?? cell.systemPromptDetail;
                const tokens = [];
                if (cell.input !== void 0) tokens.push({ label: t("usage.input"), value: cell.input });
                if (cell.cacheRead !== void 0) tokens.push({ label: t("usage.cached"), value: cell.cacheRead });
                if (cell.cacheWrite !== void 0) tokens.push({ label: t("usage.cacheCreated"), value: cell.cacheWrite });
                if (cell.output !== void 0) tokens.push({ label: t("usage.output"), value: cell.output });
                if (cell.think !== void 0) tokens.push({ label: t("usage.reasoning"), value: cell.think });
                if (activeTab === "overview") {
                  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.recordSummary, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("dl", { className: `${TrajectoryTable_default.overview} ${TrajectoryTable_default.recordFields}`, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                        Field,
                        {
                          label: qt("chip.status"),
                          tone: selectedState === "error" ? "error" : selectedState === "running" ? "warn" : void 0,
                          children: statusLabel(selectedState, t)
                        }
                      ),
                      cell.kind === "message" && cell.output !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("usage.tokens"), children: t("unit.tokens", { value: cell.output }) }),
                      cell.kind === "message" && cell.think !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("usage.reasoning"), children: t("unit.tokens", { value: cell.think }) }),
                      cell.startedAt != null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("timing.started"), children: formatStartedAt(cell.startedAt, t) }),
                      cell.timeSeconds !== null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: qt("chip.duration"), children: cell.timeSeconds > 0 ? compactDuration(Math.round(cell.timeSeconds * 1e3)) : "\u2014" }),
                      cell.kind === "context" && cell.contextProducer !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Field, { label: t("details.source"), wrap: true, children: [
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.sourceRole, children: qt(cell.contextProducer.role === "recall" ? "context.recall" : "context.inject") }),
                        cell.contextProducer.label !== null && cell.contextProducer.label !== "" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: TrajectoryTable_default.sourceLabel, children: cell.contextProducer.label })
                      ] }),
                      cell.kind === "context" && contextFormLabel(cell.contextForm, qt) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: qt("context.form"), children: contextFormLabel(cell.contextForm, qt) }),
                      selectedRequestInfo !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: qt("field.request"), children: `#${selectedRequestInfo.number}` }),
                      selectedRequestInfo !== void 0 && (selectedRequestInfo.provider ?? selectedRequestInfo.requestConfig?.provider) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("details.provider"), children: selectedRequestInfo.provider ?? selectedRequestInfo.requestConfig?.provider }),
                      selectedRequestInfo !== void 0 && (selectedRequestInfo.model ?? selectedRequestInfo.requestConfig?.model) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("details.model"), children: selectedRequestInfo.model ?? selectedRequestInfo.requestConfig?.model }),
                      selectedRequestInfo?.purpose === "compaction" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("details.purpose"), children: t("request.compactionPurpose") }),
                      selectedRequestInfo?.error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("details.error"), tone: "error", wrap: true, children: requestErrorMessage(selectedRequestInfo, t) }),
                      selectedRequestInfo?.retry !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("details.retry"), children: selectedRequestInfo.maxRetries === void 0 ? selectedRequestInfo.retry : t("request.retryProgress", {
                        retry: selectedRequestInfo.retry,
                        maximum: selectedRequestInfo.maxRetries
                      }) }),
                      hasSelectedHierarchy && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Field, { label: t("details.hierarchy"), wrap: true, children: [
                        selectedParentMessage !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                          "button",
                          {
                            type: "button",
                            className: TrajectoryTable_default.metaLink,
                            onClick: () => {
                              openRecordSummary(selectedParentMessage);
                            },
                            children: [
                              t("details.assistantMessage"),
                              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.IconChevronRightOutlineRegular, { size: 11, "aria-hidden": "true" })
                            ]
                          }
                        ),
                        selectedParentTool !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                          "button",
                          {
                            type: "button",
                            className: TrajectoryTable_default.metaLink,
                            onClick: () => {
                              openRecordSummary(selectedParentTool);
                            },
                            children: [
                              t("details.toolCall"),
                              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.IconChevronRightOutlineRegular, { size: 11, "aria-hidden": "true" })
                            ]
                          }
                        )
                      ] }),
                      cell.callId !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                        Field,
                        {
                          label: qt("chip.callId"),
                          mono: true,
                          actions: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                            CopyButton,
                            {
                              text: cell.callId,
                              label: qt("chip.callId"),
                              copiedLabel: qt("copied"),
                              failedLabel: qt("copy.failed")
                            }
                          ),
                          children: cell.callId
                        }
                      )
                    ] }),
                    toolLike && argsText !== "" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      DetailSection,
                      {
                        title: t("tab.payload"),
                        badge: payloadBadge(isBranch(args) ? args : argsText, qt),
                        defaultOpen: true,
                        bare: selectedProgram === void 0 && isBranch(args),
                        actions: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                          CopyButton,
                          {
                            text: argsText,
                            label: qt("head.copyArgs"),
                            copiedLabel: qt("copied"),
                            failedLabel: qt("copy.failed")
                          }
                        ),
                        children: selectedProgram !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                          ProgramInput,
                          {
                            program: selectedProgram,
                            initialWrapped: codeWrappingOnOpen,
                            stringWrapping,
                            t
                          },
                          `args:${selectedRecordId}`
                        ) : isBranch(args) ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RawDataPanel, { data: args, qt, bare: true }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailText, { text: argsText })
                      }
                    ),
                    toolLike && isBranch(schema) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      DetailSection,
                      {
                        title: t("tab.schema"),
                        badge: payloadBadge(schema, qt),
                        defaultOpen: false,
                        bare: true,
                        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RawDataPanel, { data: schema, qt, bare: true })
                      }
                    ),
                    cell.kind === "context" && cell.messageSource !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      DetailSection,
                      {
                        title: qt("context.source"),
                        badge: payloadBadge(cell.messageSource, qt),
                        defaultOpen: true,
                        bare: true,
                        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                          RawDataPanel,
                          {
                            data: contextSourceTree(cell.messageSource),
                            qt,
                            bare: true
                          }
                        )
                      }
                    ),
                    cell.kind === "system" && selectedPrompt !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      DetailSection,
                      {
                        title: t("tab.tools"),
                        badge: payloadBadge(selectedPrompt.tools, qt),
                        defaultOpen: false,
                        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                          ToolCatalog,
                          {
                            tools: selectedPrompt.tools,
                            stringWrapping,
                            t
                          }
                        )
                      }
                    )
                  ] });
                }
                if (activeTab === "preview") {
                  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: TrajectoryTable_default.recordPreview, children: [
                    cell.kind === "system" && (systemPrompt === void 0 || systemPrompt === "" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: TrajectoryTable_default.noPayload, children: t("record.systemPromptMissing") }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `${TrajectoryTable_default.markdownPayload} ${TrajectoryTable_default.systemPrompt}`, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives3.MarkdownText, { text: systemPrompt, labels: markdownLabels(t) }) })),
                    cell.kind === "system" && selectedPreviousPrompt !== void 0 && selectedPrompt !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailSection, { title: t("tab.diff"), defaultOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      SystemPromptDiff,
                      {
                        before: selectedPreviousPrompt,
                        after: selectedPrompt,
                        t
                      }
                    ) }),
                    toolLike && (selectedProgram !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ProgramOutput, { record: selected, stringWrapping, t }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.resultSections, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      RecordPayload,
                      {
                        record: selected,
                        direction: "output",
                        renderSlot,
                        loadImage,
                        stringWrapping,
                        t
                      }
                    ) })),
                    !toolLike && cell.kind !== "system" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
                  ] });
                }
                if (activeTab === "timing") {
                  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: TrajectoryTable_default.recordSummary, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    RecordTiming,
                    {
                      record: selected,
                      t,
                      extra: tokens.length === 0 ? void 0 : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: tokens.map((token) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dt", { children: token.label }),
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("dd", { children: t("unit.tokens", { value: token.value }) })
                      ] }, token.label)) })
                    }
                  ) });
                }
                const rawPosition = records.findIndex((candidate) => candidate.cell.index === cell.index);
                const rawShown = rawPosition < 0 ? selected : records[rawPosition];
                const rawEntries = eventsBehindRow(
                  rawShown,
                  records,
                  rawPosition < 0 ? -1 : rawPosition,
                  allRecords,
                  sessionEvents ?? [],
                  eventSeqsByCallId
                );
                if (rawEntries.length === 0) {
                  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: TrajectoryTable_default.detailNote, children: qt("raw.noEvents") });
                }
                return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  RawDataPanel,
                  {
                    data: Object.fromEntries(rawEntries.map((entry) => [String(entry.seq), entry.value])),
                    qt
                  }
                );
              })()
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
      const rows = [
        { label: qt("chip.turn"), value: `#${record2.turn ?? "\u2014"} \xB7 ${record2.group}` },
        { label: qt("chip.duration"), value: ms == null ? "\u2014" : compactDuration(ms) }
      ];
      const startedAt = record2.cell.startedAt ?? meta?.time;
      if (startedAt != null) {
        rows.push({ label: t("timing.started"), value: formatStartedAt(startedAt, t) });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        HoverCard,
        {
          x: card.x,
          y: card.y,
          kind,
          label: t(KIND_LABEL_KEY[kind]),
          name: record2.cell.toolName,
          isError: record2.cell.isError === true,
          rows,
          extra: args
        }
      );
    })()
  ] });
}

// src/vendor/trajectory/QueryBar.tsx
var import_react6 = require("react");
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/vendor/trajectory/QueryBar.module.css
var css7 = `.bt_QueryBar_history_fI6gEm {
  display: flex;
  flex: none;
  align-items: center;
  gap: 1px;
}

.bt_QueryBar_historyButton_wUGXbX {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  color: var(--bt-text-2, #5b6470);
  cursor: pointer;
}

.bt_QueryBar_historyButton_wUGXbX svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bt_QueryBar_historyButton_wUGXbX:hover:not(:disabled) {
  background: var(--bt-hover, rgba(16, 24, 40, 0.06));
  color: var(--bt-text, #1c2128);
}

.bt_QueryBar_historyButton_wUGXbX:disabled {
  opacity: 0.35;
  cursor: default;
}

.bt_QueryBar_historyButton_wUGXbX:focus-visible {
  outline: 2px solid var(--bt-accent, #2563eb);
  outline-offset: 0;
}

.bt_QueryBar_divider_GtH0Em {
  flex: none;
  width: 1px;
  height: 16px;
  margin: 0 6px;
  background: var(--bt-line, #e6e8eb);
}

.bt_QueryBar_root_h4IkeT {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 560px);
  align-items: center;
  padding: 4px 8px;
  border-bottom: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.08));
  background: var(--dsw-alias-bg-layer-1, #fff);
  position: relative;
  z-index: 2;
}

.bt_QueryBar_rowLeft_i_u_Xm,
.bt_QueryBar_rowRight_YDWaiP,
.bt_QueryBar_metaLeft_QjBMKd,
.bt_QueryBar_metaRight_bbsNOB {
  display: flex;
  align-items: center;
  min-width: 0;
}

.bt_QueryBar_rowLeft_i_u_Xm {
  gap: 8px;
  min-height: 28px;
  padding-right: 12px;
}

/* the search sits in the same column as the conditions, and the divider between
   the two columns is one continuous hairline across both rows */
.bt_QueryBar_rowRight_YDWaiP {
  gap: 4px;
  min-height: 28px;
  padding-left: 12px;
  border-left: 1px solid var(--bt-line, #e6e8eb);
}

.bt_QueryBar_metaLeft_QjBMKd {
  min-height: 22px;
  /* the \`<\` chevron's visible tip sits ~9px inside its 22px hit box; match that
     so the captions line up with the arrow, not with the button box */
  padding-left: 8px;
  padding-right: 12px;
}

.bt_QueryBar_metaRight_bbsNOB {
  gap: 8px;
  min-height: 22px;
  padding-left: 12px;
  border-left: 1px solid var(--bt-line, #e6e8eb);
}

.bt_QueryBar_actions_a-c3dO {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}

.bt_QueryBar_toggle_DFmY0d,
.bt_QueryBar_fold_iApD5s {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 6px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #555);
  font-size: 11px;
  cursor: pointer;
  white-space: nowrap;
}

.bt_QueryBar_toggle_DFmY0d:hover,
.bt_QueryBar_fold_iApD5s:hover {
  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.05));
  color: var(--dsw-alias-label-primary, #111);
}

.bt_QueryBar_toggle_DFmY0d[aria-pressed='true'] {
  color: var(--dsw-alias-brand-primary, #4a6cf7);
}

.bt_QueryBar_toggleIcon_y9tQSK {
  width: 13px;
  height: 13px;
  stroke: currentColor;
  stroke-width: 1.3;
  fill: none;
}

.bt_QueryBar_foldIcon_lkGa4G {
  flex: none;
  width: 13px;
  height: 13px;
  stroke: currentColor;
  stroke-width: 1.3;
  fill: none;
}

.bt_QueryBar_search_KQG92k {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 560px;
  min-width: 160px;
  height: 26px;
  padding: 0 6px;
  border: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.12));
  border-radius: 6px;
  background: var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.02));
}

.bt_QueryBar_search_KQG92k:focus-within {
  border-color: var(--dsw-alias-brand-primary, #4a6cf7);
  background: var(--dsw-alias-bg-layer-1, #fff);
}

.bt_QueryBar_searchIcon_5boR_Y {
  flex-shrink: 0;
  color: var(--dsw-alias-label-tertiary, #888);
  margin-right: 4px;
}

.bt_QueryBar_input_tue-9E {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary, #111);
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 11.5px;
}

.bt_QueryBar_input_tue-9E::placeholder {
  color: var(--dsw-alias-label-tertiary, #999);
}

.bt_QueryBar_menu_zrrJiw {
  position: absolute;
  z-index: 30;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 260px;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--dsw-alias-border-secondary, rgba(0, 0, 0, 0.1));
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1, #fff);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.bt_QueryBar_option_DP3tCP {
  display: flex;
  align-items: baseline;
  gap: 8px;
  width: 100%;
  padding: 4px 6px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: var(--dsw-alias-label-primary, #111);
  font-size: 11.5px;
}

/* the preselected row is a grey shadow, not a bar: the inset rail rendered as a
   black edge because the host's brand token is near-black */
.bt_QueryBar_option_DP3tCP[data-active] {
  background: var(--bt-hover, rgba(16, 24, 40, 0.06));
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.13);
}

.bt_QueryBar_option_DP3tCP[data-active] .bt_QueryBar_optionLabel_jYfklY {
  color: var(--bt-text, #1c2128);
  font-weight: 600;
}

.bt_QueryBar_optionGroup_Yq4liS {
  flex-shrink: 0;
  width: 56px;
  color: var(--bt-text-3, #9aa1ab);
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 10.5px;
  letter-spacing: 0.01em;
}

.bt_QueryBar_optionLabel_jYfklY {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
}

.bt_QueryBar_optionDetail_tMI0Jn {
  flex-shrink: 0;
  color: var(--dsw-alias-label-tertiary, #999);
  font-variant-numeric: tabular-nums;
  font-size: 10.5px;
}


.bt_QueryBar_chips_q1c3NI {
  display: flex;
  flex: 0 1 auto;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

.bt_QueryBar_chip_SFvtDa,
.bt_QueryBar_clearChip_79wfJM {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 20px;
  padding: 0 2px 0 6px;
  border: 0;
  border-radius: 4px;
  background: var(--dsw-alias-bg-module-platform);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  font-family: inherit;
  white-space: nowrap;
}

.bt_QueryBar_chip_SFvtDa[data-tone='tool'] {
  color: var(--dsw-alias-state-warn-label);
  background: var(--dsw-alias-state-warn-tertiary);
}

.bt_QueryBar_chip_SFvtDa[data-tone='assistant'] {
  color: color-mix(
    in srgb,
    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,
    var(--dsw-alias-state-error-secondary)
  );
  background: color-mix(
    in srgb,
    color-mix(
      in srgb,
      var(--dsw-alias-brand-primary-new-colorprimary-new-color) 55%,
      var(--dsw-alias-state-error-secondary)
    ) 15%,
    var(--dsw-alias-bg-layer-1)
  );
}

.bt_QueryBar_chip_SFvtDa[data-tone='user'] {
  color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
}

.bt_QueryBar_chip_SFvtDa[data-tone='context'],
.bt_QueryBar_chip_SFvtDa[data-tone='ok'] {
  color: color-mix(
    in srgb,
    var(--dsw-alias-state-success-primary) 68%,
    var(--dsw-alias-label-secondary)
  );
  background: var(--dsw-alias-state-success-tertiary);
}

.bt_QueryBar_chip_SFvtDa[data-tone='error'] {
  color: var(--dsw-alias-state-error-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);
}

.bt_QueryBar_chip_SFvtDa[data-tone='warn'] {
  color: var(--dsw-alias-state-warn-label);
  background: var(--dsw-alias-state-warn-tertiary);
}

/* "clear" is a chip too, so it reads as part of the condition row */
.bt_QueryBar_clearChip_79wfJM {
  padding: 0 7px;
  border: 1px dashed var(--bt-line, #e6e8eb);
  background: transparent;
  color: var(--bt-text-2, #5b6470);
  cursor: pointer;
}

.bt_QueryBar_clearChip_79wfJM:hover {
  border-style: solid;
  background: var(--bt-hover, rgba(16, 24, 40, 0.06));
  color: var(--bt-text, #1c2128);
}

/* an ignored token is a warning, not a failure: amber, and it stops there */
.bt_QueryBar_chip_SFvtDa[data-invalid] {
  background: color-mix(in srgb, var(--bt-warn, #d97706) 16%, transparent);
  color: var(--bt-warn, #d97706);
}

.bt_QueryBar_chipKind_ZEmsYL {
  color: var(--dsw-alias-label-tertiary, #888);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.bt_QueryBar_chipValue_OtQz9u {
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
}

.bt_QueryBar_chipClose_vTuKBy {
  width: 16px;
  height: 16px;
  border: 0;
  border-radius: 3px;
  background: transparent;
  color: inherit;
  opacity: 0.6;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
}

.bt_QueryBar_chipClose_vTuKBy:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.08);
}

.bt_QueryBar_summary_i3QtQf {
  flex: none;
  margin-left: auto;
  color: var(--dsw-alias-label-secondary, #666);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.bt_QueryBar_hidden_fQNsAa {
  margin-left: 6px;
  color: var(--dsw-alias-label-tertiary, #999);
}

/* one row per question: row 1 is the query, row 2 is "what is loaded  |  what is
   filtered". Stats lead, conditions trail. */
.bt_QueryBar_metaRow_r3lhk5 {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 22px;
  padding: 0 0 1px;
}

.bt_QueryBar_metaRow_r3lhk5 .bt_QueryBar_chips_q1c3NI {
  min-width: 0;
}

.bt_QueryBar_infoWrap_HNXaeL {
  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
}

.bt_QueryBar_infoButton_m750SA {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--bt-text-3, #9aa1ab);
  cursor: help;
}

.bt_QueryBar_infoButton_m750SA svg {
  width: 15px;
  height: 15px;
}

.bt_QueryBar_infoButton_m750SA:hover,
.bt_QueryBar_infoButton_m750SA[aria-expanded='true'] {
  background: var(--bt-hover, rgba(16, 24, 40, 0.06));
  color: var(--bt-text, #1c2128);
}

.bt_QueryBar_infoButton_m750SA:focus-visible {
  outline: 2px solid var(--bt-accent, #2563eb);
  outline-offset: 0;
}

/* syntax cheat sheet: examples stay literal, descriptions are localised */
.bt_QueryBar_syntax_S0ilae {
  position: absolute;
  z-index: 40;
  top: calc(100% + 4px);
  right: 0;
  width: 372px;
  padding: 8px 10px 9px;
  border: 1px solid var(--bt-line, #e6e8eb);
  border-radius: 8px;
  background: var(--bt-surface, #fff);
  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);
}

.bt_QueryBar_syntaxLead_FMJHun {
  margin: 0 0 6px;
  color: var(--bt-text-3, #9aa1ab);
  font-size: 10px;
  line-height: 1.6;
  word-break: keep-all;
}

.bt_QueryBar_syntaxGrid_-6fHd0 {
  display: grid;
  grid-template-columns: 104px 1fr;
  gap: 3px 8px;
  margin: 0;
  font-size: 10.5px;
  line-height: 1.45;
}

.bt_QueryBar_syntaxGrid_-6fHd0 dt {
  color: var(--bt-text, #1c2128);
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 10px;
  white-space: nowrap;
}

.bt_QueryBar_syntaxGrid_-6fHd0 dd {
  margin: 0;
  color: var(--bt-text-2, #5b6470);
}

[data-tip] {
  position: relative;
}

[data-tip]:hover::after {
  content: attr(data-tip);
  position: absolute;
  z-index: 40;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 6px;
  border-radius: 4px;
  background: var(--bt-text, #1c2128);
  color: var(--bt-surface, #fff);
  font-size: 10.5px;
  font-weight: 400;
  line-height: 1.3;
  white-space: nowrap;
  pointer-events: none;
}

/* always-on totals: the only place the session's size is stated. Sits at the
   end of the query row so it never competes with the query for space. */
.bt_QueryBar_totals_u-jU2e {
  display: flex;
  flex: none;
  align-items: baseline;
  gap: 16px;
  white-space: nowrap;
}

.bt_QueryBar_totals_u-jU2e[data-query] {
  color: var(--bt-text-3, #9aa1ab);
}

/* window-scoped totals: the client only counts what it has paged in */
/* whole-log group: same rhythm, its own caption, a hairline before the
   window group so the two readings never blur together */
.bt_QueryBar_totals_u-jU2e[data-whole] {
  margin-right: 4px;
  padding-right: 12px;
  border-right: 1px solid var(--bt-line-soft, #f0f2f4);
}

.bt_QueryBar_totalsCaption_IyK52_ {
  color: var(--bt-text-3, #9aa1ab);
  font-size: 10px;
  letter-spacing: 0.04em;
}

.bt_QueryBar_totalsMore_exTc0o {
  color: var(--bt-text-3, #9aa1ab);
  font-size: 10px;
  letter-spacing: 0.02em;
}

.bt_QueryBar_totalsItem_c6nTzR {
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
}

/* caption first, value second: the same two-character captions line up, and the
   numbers sit on a tabular baseline instead of drifting with their unit width */
.bt_QueryBar_totalsItem_c6nTzR b {
  color: var(--bt-text, #1c2128);
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

.bt_QueryBar_totalsItem_c6nTzR i {
  color: var(--bt-text-3, #9aa1ab);
  font-size: 10px;
  font-style: normal;
  letter-spacing: 0.02em;
}

.bt_QueryBar_totalsItem_c6nTzR[data-tone='error'] b,
.bt_QueryBar_totalsItem_c6nTzR[data-tone='error'] i {
  color: var(--bt-error, #d92d20);
}

.bt_QueryBar_totals_u-jU2e[data-query] .bt_QueryBar_totalsItem_c6nTzR b {
  color: var(--bt-text-2, #5b6470);
}

@media (max-width: 900px) {
  .bt_QueryBar_root_h4IkeT {
    grid-template-columns: minmax(0, 1fr);
  }

  .bt_QueryBar_rowRight_YDWaiP,
  .bt_QueryBar_metaRight_bbsNOB {
    padding-left: 0;
    border-left: 0;
  }

  .bt_QueryBar_rowLeft_i_u_Xm,
  .bt_QueryBar_metaLeft_QjBMKd {
    padding-right: 0;
  }
}
`;
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="y1b3Uc"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "y1b3Uc");
  el.textContent = css7;
  document.head.appendChild(el);
}
var QueryBar_default = { "history": "bt_QueryBar_history_fI6gEm", "historyButton": "bt_QueryBar_historyButton_wUGXbX", "divider": "bt_QueryBar_divider_GtH0Em", "root": "bt_QueryBar_root_h4IkeT", "rowLeft": "bt_QueryBar_rowLeft_i_u_Xm", "rowRight": "bt_QueryBar_rowRight_YDWaiP", "metaLeft": "bt_QueryBar_metaLeft_QjBMKd", "metaRight": "bt_QueryBar_metaRight_bbsNOB", "actions": "bt_QueryBar_actions_a-c3dO", "toggle": "bt_QueryBar_toggle_DFmY0d", "fold": "bt_QueryBar_fold_iApD5s", "toggleIcon": "bt_QueryBar_toggleIcon_y9tQSK", "foldIcon": "bt_QueryBar_foldIcon_lkGa4G", "search": "bt_QueryBar_search_KQG92k", "searchIcon": "bt_QueryBar_searchIcon_5boR_Y", "input": "bt_QueryBar_input_tue-9E", "menu": "bt_QueryBar_menu_zrrJiw", "option": "bt_QueryBar_option_DP3tCP", "optionLabel": "bt_QueryBar_optionLabel_jYfklY", "optionGroup": "bt_QueryBar_optionGroup_Yq4liS", "optionDetail": "bt_QueryBar_optionDetail_tMI0Jn", "chips": "bt_QueryBar_chips_q1c3NI", "chip": "bt_QueryBar_chip_SFvtDa", "clearChip": "bt_QueryBar_clearChip_79wfJM", "chipKind": "bt_QueryBar_chipKind_ZEmsYL", "chipValue": "bt_QueryBar_chipValue_OtQz9u", "chipClose": "bt_QueryBar_chipClose_vTuKBy", "summary": "bt_QueryBar_summary_i3QtQf", "hidden": "bt_QueryBar_hidden_fQNsAa", "metaRow": "bt_QueryBar_metaRow_r3lhk5", "infoWrap": "bt_QueryBar_infoWrap_HNXaeL", "infoButton": "bt_QueryBar_infoButton_m750SA", "syntax": "bt_QueryBar_syntax_S0ilae", "syntaxLead": "bt_QueryBar_syntaxLead_FMJHun", "syntaxGrid": "bt_QueryBar_syntaxGrid_-6fHd0", "totals": "bt_QueryBar_totals_u-jU2e", "totalsCaption": "bt_QueryBar_totalsCaption_IyK52_", "totalsMore": "bt_QueryBar_totalsMore_exTc0o", "totalsItem": "bt_QueryBar_totalsItem_c6nTzR" };

// src/client/query.mjs
var FIELDS = [
  "role",
  "kind",
  "type",
  "model",
  "provider",
  "source",
  "form",
  "step",
  "turn",
  "tool",
  "status",
  "ms",
  "code",
  "args",
  "result",
  "error",
  "text"
];
var TEXT_FIELDS = /* @__PURE__ */ new Set(["args", "result", "error", "text"]);
var STATUSES = /* @__PURE__ */ new Set(["error", "running", "ok"]);
var KIND_ALIASES = /* @__PURE__ */ new Map([
  ["tool", ["tool"]],
  ["subtool", ["subtool"]],
  ["message", ["message"]],
  ["assistant", ["message"]],
  ["user", ["user"]],
  ["system", ["system"]],
  ["context", ["context"]],
  ["compacted", ["compacted"]]
]);
var KINDS = [...KIND_ALIASES.keys()].filter((kind) => KIND_ALIASES.get(kind)[0] === kind);
var ROLES = /* @__PURE__ */ new Set(["user", "assistant", "system", "tool"]);
var ROLE_VALUES = [...ROLES];
var NAME_FIELDS = /* @__PURE__ */ new Set(["model", "provider", "source", "form"]);
function emptyQuery() {
  return {
    tokens: [],
    filters: {
      tool: [],
      notTool: [],
      status: [],
      notStatus: [],
      role: [],
      notRole: [],
      kind: [],
      notKind: [],
      model: [],
      notModel: [],
      provider: [],
      notProvider: [],
      source: [],
      notSource: [],
      form: [],
      notForm: [],
      turn: [],
      notTurn: [],
      turnRanges: [],
      notTurnRanges: [],
      step: [],
      notStep: [],
      stepRanges: [],
      notStepRanges: [],
      code: [],
      notCode: [],
      codeAll: false,
      notCodeAll: false,
      msMin: null,
      msMax: null,
      text: [],
      notText: [],
      args: [],
      notArgs: [],
      result: [],
      notResult: [],
      error: [],
      notError: []
    },
    active: false
  };
}
function tokenizeQuery(text) {
  const words = [];
  let current = "";
  let quoted = false;
  for (const character of String(text ?? "")) {
    if (character === '"') {
      quoted = !quoted;
      continue;
    }
    if (!quoted && /\s/.test(character)) {
      if (current !== "") words.push(current);
      current = "";
      continue;
    }
    current += character;
  }
  if (current !== "") words.push(current);
  return words;
}
function globToRegExp(pattern) {
  if (!pattern.includes("*")) return null;
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
  return new RegExp(`^${escaped}$`, "i");
}
function matchesName(name2, pattern) {
  const expression = globToRegExp(pattern);
  return expression === null ? name2.toLowerCase() === pattern.toLowerCase() : expression.test(name2);
}
function parseToken(word) {
  const negated = word.startsWith("-") && word.length > 1;
  const body = negated ? word.slice(1) : word;
  const colon = body.indexOf(":");
  if (colon <= 0) return { kind: "text", value: body, raw: word, negated, valid: body !== "" };
  const rawField = body.slice(0, colon);
  const field = rawField === "type" ? "kind" : rawField;
  const value = body.slice(colon + 1);
  if (!FIELDS.includes(field)) {
    return { kind: "text", value: body, raw: word, negated, valid: body !== "" };
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
    return /^(\d+|\*)$/.test(value) ? { kind: "code", value, raw: word, negated, valid: true } : { kind: "code", value, raw: word, negated, valid: false };
  }
  if (field === "kind") {
    return value.split("|").every((item) => KIND_ALIASES.has(item)) ? { kind: "kind", value, raw: word, negated, valid: true } : { kind: "kind", value, raw: word, negated, valid: false };
  }
  if (field === "role") {
    return value.split("|").every((item) => ROLES.has(item)) ? { kind: "role", value, raw: word, negated, valid: true } : { kind: "role", value, raw: word, negated, valid: false };
  }
  if (field === "step") {
    const stepRange = /^(\d+)-(\d+)$/.exec(value);
    const stepSingle = /^\d+$/.exec(value);
    return stepRange !== null || stepSingle !== null ? { kind: "step", value, raw: word, negated, valid: true } : { kind: "step", value, raw: word, negated, valid: false };
  }
  if (NAME_FIELDS.has(field)) {
    return value === "" ? { kind: field, value, raw: word, negated, valid: false } : { kind: field, value, raw: word, negated, valid: true };
  }
  if (TEXT_FIELDS.has(field)) {
    return value === "" ? { kind: field, value, raw: word, negated, valid: false } : { kind: field, value, raw: word, negated, valid: true };
  }
  return value === "" ? { kind: "tool", value, raw: word, negated, valid: false } : { kind: "tool", value, raw: word, negated, valid: true };
}
function applyToken(filters, token) {
  if (!token.valid) return;
  const bucket = token.negated ? "not" : "";
  const key = (name2) => bucket === "" ? name2 : `not${name2[0].toUpperCase()}${name2.slice(1)}`;
  switch (token.kind) {
    case "text":
      filters[key("text")].push(token.value.toLowerCase());
      return;
    case "args":
    case "result":
    case "error":
      filters[key(token.kind)].push(token.value.toLowerCase());
      return;
    case "tool":
      for (const pattern of token.value.split("|")) {
        if (pattern !== "" && !filters[key("tool")].includes(pattern)) {
          filters[key("tool")].push(pattern);
        }
      }
      return;
    case "status":
      for (const status of token.value.split("|")) {
        if (STATUSES.has(status)) filters[key("status")].push(status);
      }
      return;
    case "code": {
      if (token.value === "*") {
        filters[key("codeAll")] = true;
        return;
      }
      filters[key("code")].push(Number(token.value));
      return;
    }
    case "kind": {
      const kinds = filters[key("kind")];
      for (const alias of token.value.split("|")) {
        for (const kind of KIND_ALIASES.get(alias) ?? []) {
          if (!kinds.includes(kind)) kinds.push(kind);
        }
      }
      return;
    }
    case "role": {
      const roles = filters[key("role")];
      for (const role of token.value.split("|")) {
        if (ROLES.has(role) && !roles.includes(role)) roles.push(role);
      }
      return;
    }
    case "step": {
      const range = /^(\d+)-(\d+)$/.exec(token.value);
      if (range === null) {
        filters[key("step")].push(Number(token.value));
      } else {
        const from = Number(range[1]);
        const to = Number(range[2]);
        filters[key("stepRanges")].push([Math.min(from, to), Math.max(from, to)]);
      }
      return;
    }
    case "model":
    case "provider":
    case "source":
    case "form": {
      const patterns = filters[key(token.kind)];
      for (const pattern of token.value.split("|")) {
        if (pattern !== "" && !patterns.includes(pattern)) patterns.push(pattern);
      }
      return;
    }
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
function parseQuery(text) {
  const query = emptyQuery();
  for (const word of tokenizeQuery(text)) {
    query.tokens.push(parseToken(word));
  }
  for (const token of query.tokens) applyToken(query.filters, token);
  query.active = query.tokens.length > 0;
  return query;
}
var lower = (value) => typeof value === "string" ? value.toLowerCase() : "";
function matchesFilters(subject, filters) {
  const kind = subject.kind ?? "";
  const isTool = kind === "tool" || kind === "subtool";
  if (filters.kind.length > 0 && !filters.kind.includes(kind)) return false;
  if (filters.notKind.includes(kind)) return false;
  const role = subject.role ?? "";
  if (filters.role.length > 0 && !filters.role.includes(role)) return false;
  if (filters.notRole.includes(role)) return false;
  if (filters.step.length > 0 && !filters.step.includes(subject.step)) return false;
  if (filters.stepRanges.length > 0 && !filters.stepRanges.some(([from, to]) => subject.step >= from && subject.step <= to)) return false;
  if (filters.notStep.includes(subject.step)) return false;
  if (filters.notStepRanges.some(([from, to]) => subject.step >= from && subject.step <= to)) return false;
  for (const field of ["model", "provider", "source", "form"]) {
    const value = subject[field] ?? "";
    const wanted = filters[field];
    if (wanted.length > 0 && (value === "" || !wanted.some((pattern) => matchesName(value, pattern)))) return false;
    const unwanted = filters[`not${field[0].toUpperCase()}${field.slice(1)}`];
    if (unwanted.length > 0 && unwanted.some((pattern) => matchesName(value, pattern))) return false;
  }
  if (filters.tool.length > 0 && (!isTool || !filters.tool.some((pattern) => matchesName(subject.name ?? "", pattern)))) {
    return false;
  }
  if (isTool && filters.notTool.some((pattern) => matchesName(subject.name ?? "", pattern))) {
    return false;
  }
  if (filters.status.length > 0 && !filters.status.includes(subject.status)) return false;
  if (filters.notStatus.includes(subject.status)) return false;
  if (filters.turn.length > 0 && !filters.turn.includes(subject.turn)) return false;
  if (filters.turnRanges.length > 0 && !filters.turnRanges.some(([from, to]) => subject.turn >= from && subject.turn <= to)) return false;
  if (filters.notTurn.includes(subject.turn)) return false;
  if (filters.notTurnRanges.some(([from, to]) => subject.turn >= from && subject.turn <= to)) return false;
  const hasCode = subject.errorCode !== void 0 && subject.errorCode !== null && subject.errorCode !== "";
  if (filters.code.length > 0 && (!isTool || !filters.code.includes(Number(subject.errorCode)))) {
    return false;
  }
  if (filters.codeAll && (!isTool || !hasCode)) return false;
  if (isTool && filters.notCodeAll && hasCode) return false;
  if (isTool && !filters.codeAll && filters.notCode.includes(Number(subject.errorCode))) return false;
  if (filters.msMin !== null || filters.msMax !== null) {
    const duration = typeof subject.durationMs === "number" ? subject.durationMs : -1;
    if (filters.msMin !== null && duration < filters.msMin) return false;
    if (filters.msMax !== null && duration > filters.msMax) return false;
  }
  const containsAll = (terms, haystack) => terms.every((term) => haystack.includes(term));
  const containsAny = (terms, haystack) => terms.some((term) => haystack.includes(term));
  const all = lower(subject.text);
  if (!containsAll(filters.text, all)) return false;
  if (containsAny(filters.notText, all)) return false;
  if (!containsAll(filters.args, lower(subject.args))) return false;
  if (containsAny(filters.notArgs, lower(subject.args))) return false;
  if (!containsAll(filters.result, lower(subject.result))) return false;
  if (containsAny(filters.notResult, lower(subject.result))) return false;
  if (!containsAll(filters.error, lower(subject.errorText))) return false;
  if (containsAny(filters.notError, lower(subject.errorText))) return false;
  return true;
}
function cellSubject(cell, meta) {
  const kind = cell.kind ?? "";
  const isTool = kind === "tool" || kind === "subtool";
  const durationMs = typeof cell.timeSeconds === "number" && Number.isFinite(cell.timeSeconds) ? Math.max(0, cell.timeSeconds * 1e3) : typeof meta?.durationMs === "number" ? meta.durationMs : void 0;
  const status = cell.isError === true ? "error" : kind === "compacted" && cell.timeSeconds === null || cell.assistantMetrics?.completedTime === null || isTool && cell.outputDetail === void 0 ? "running" : "ok";
  const inputSide = cell.inputDetail ?? "";
  const outputSide = cell.outputDetail ?? cell.result ?? cell.text ?? "";
  const errorText = cell.isError === true ? cell.outputDetail ?? cell.result ?? cell.text ?? "" : "";
  const role = kind === "user" || kind === "context" ? "user" : kind === "message" ? "assistant" : kind === "system" ? "system" : isTool ? "tool" : void 0;
  return {
    kind,
    role,
    step: meta?.step,
    model: meta?.model,
    provider: meta?.provider,
    source: cell.contextProducer?.label ?? void 0,
    form: cell.contextForm,
    name: isTool ? cell.toolName ?? "" : kind,
    status,
    turn: cell.turn ?? meta?.turn,
    durationMs,
    errorCode: cell.errorCode ?? meta?.errorCode,
    text: [
      cell.text,
      cell.previewMarkdown,
      cell.toolName,
      cell.inputDetail,
      cell.outputDetail,
      cell.thinkingDetail,
      cell.result,
      cell.errorText
    ].filter((value) => typeof value === "string" && value !== "").join("\n"),
    args: inputSide,
    result: outputSide,
    errorText
  };
}
function matchesCell(cell, query, meta) {
  if (!query.active) return true;
  return matchesFilters(cellSubject(cell, meta), query.filters);
}

// src/vendor/trajectory/QueryBar.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function chipTone(chip) {
  const value = chip.raw.replace(/^-?[a-z]+:/, "").toLowerCase();
  if (chip.kind === "status") {
    if (value.includes("error")) return "error";
    if (value.includes("running")) return "warn";
    return "ok";
  }
  if (chip.kind === "type") {
    if (value === "message" || value === "assistant") return "assistant";
    if (value === "tool" || value === "subtool") return "tool";
    if (value === "context") return "context";
    if (value === "user") return "user";
    return "neutral";
  }
  if (chip.kind === "tool") return "tool";
  if (chip.kind === "code" || chip.kind === "error") return "error";
  return "neutral";
}
function buildSuggestions(props, lastWord) {
  const out = [];
  const term = lastWord.replace(/^-/, "");
  const [field, value = ""] = term.includes(":") ? [term.slice(0, term.indexOf(":")), term.slice(term.indexOf(":") + 1)] : ["", ""];
  const needle = field === "" ? term : value;
  const match = (text) => text.toLowerCase().includes(needle.toLowerCase());
  const wholeGroup = (name2) => needle !== "" && name2.startsWith(needle.toLowerCase());
  if (field === "" || field === "tool") {
    for (const tool of props.tools) {
      if (wholeGroup("tool") || match(tool.name)) out.push({ insert: `tool:${tool.name}`, label: tool.name, detail: String(tool.calls ?? tool.count ?? ""), group: "tool:" });
    }
  }
  if (field === "" || field === "status") {
    for (const status of ["error", "running", "ok"]) {
      if (wholeGroup("status") || match(status)) out.push({ insert: `status:${status}`, label: status, group: "status:" });
    }
  }
  if (field === "" || field === "turn") {
    for (const turn of props.turns.slice(0, 8)) {
      if (wholeGroup("turn") || match(String(turn.turn))) out.push({ insert: `turn:${turn.turn}`, label: String(turn.turn), detail: String(turn.count), group: "turn:" });
    }
  }
  if (field === "" || field === "role") {
    for (const role of ROLE_VALUES) {
      if (wholeGroup("role") || match(role)) out.push({ insert: `role:${role}`, label: role, group: "role:" });
    }
  }
  if (field === "" || field === "kind" || field === "type") {
    for (const kind of KINDS) {
      if (wholeGroup("kind") || wholeGroup("type") || match(kind)) out.push({ insert: `kind:${kind}`, label: kind, group: "kind:" });
    }
  }
  if (field === "" || field === "ms") {
    for (const raw of ["ms:>1000", "ms:>3000"]) {
      if (wholeGroup("ms") || match(raw)) out.push({ insert: raw, label: raw.replace(/^ms:/, ""), group: "ms:" });
    }
  }
  return out.slice(0, 14);
}
function QueryBar(props) {
  const {
    draft,
    chips,
    stats,
    t,
    qt,
    showTime,
    onToggleTime,
    canGoBack,
    canGoForward,
    onBack,
    onForward
  } = props;
  const [open, setOpen] = (0, import_react6.useState)(false);
  const [active, setActive] = (0, import_react6.useState)(0);
  const [syntaxOpen, setSyntaxOpen] = (0, import_react6.useState)(false);
  const rootRef = (0, import_react6.useRef)(null);
  const menuRef = (0, import_react6.useRef)(null);
  const inputRef = (0, import_react6.useRef)(null);
  const blurTimer = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => () => {
    if (blurTimer.current !== null) window.clearTimeout(blurTimer.current);
  }, []);
  const words = draft.trim() === "" ? [] : draft.trim().split(/\s+/);
  const lastWord = words.at(-1) ?? "";
  const suggestions = (0, import_react6.useMemo)(() => buildSuggestions(props, lastWord), [props, lastWord]);
  (0, import_react6.useEffect)(() => {
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
  (0, import_react6.useEffect)(() => {
    if (!open) return;
    const option = menuRef.current?.querySelectorAll("[role=option]")[active];
    option?.scrollIntoView({ block: "nearest" });
  }, [active, open]);
  (0, import_react6.useEffect)(() => {
    if (!open) return;
    const onDown = (event) => {
      if (event.target instanceof Node && rootRef.current !== null && !rootRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);
  const completeWith = (suggestion) => [...words.slice(0, -1), suggestion.insert].join(" ");
  const pick = (suggestion) => {
    props.onDraft(completeWith(suggestion));
    inputRef.current?.focus();
  };
  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const chosen = open && suggestions.length > 0 ? suggestions[active] ?? suggestions[0] : void 0;
      props.onCommit(chosen === void 0 ? draft : completeWith(chosen));
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
    } else if (event.key === "Tab") {
      if (suggestions.length === 0) return;
      event.preventDefault();
      pick(suggestions[active] ?? suggestions[0]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.root, role: "toolbar", "aria-label": t("toolbar.aria"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.rowLeft, ref: rootRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.history, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            type: "button",
            className: QueryBar_default.historyButton,
            disabled: !canGoBack,
            "aria-label": qt("nav.back"),
            title: qt("nav.back"),
            onClick: onBack,
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M10 3.5 5.5 8l4.5 4.5" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            type: "button",
            className: QueryBar_default.historyButton,
            disabled: !canGoForward,
            "aria-label": qt("nav.forward"),
            title: qt("nav.forward"),
            onClick: onForward,
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M6 3.5 10.5 8 6 12.5" }) })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.divider, "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.actions, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            type: "button",
            className: QueryBar_default.toggle,
            "aria-pressed": props.actualDuration,
            "data-tip": t("toolbar.useActualDuration"),
            onClick: () => props.onActualDurationChange(!props.actualDuration),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { className: QueryBar_default.toggleIcon, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "8", cy: "8", r: "5.25" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M8 4.75V8l2.25 1.5" })
              ] }),
              t("toolbar.duration")
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": showTime, "data-tip": qt("query.timeHint"), onClick: onToggleTime, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { className: QueryBar_default.foldIcon, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("rect", { x: "2.25", y: "3.25", width: "11.5", height: "9.5", rx: "1.5" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M6.25 3.25v9.5" })
          ] }),
          qt("query.time")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allTurnsCollapsed, "data-tip": t("toolbar.turns"), onClick: props.onToggleAllTurns, children: [
          props.allTurnsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.turns")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allAssistantsCollapsed, "data-tip": t("toolbar.calls"), onClick: props.onToggleAllAssistants, children: [
          props.allAssistantsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.calls")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: QueryBar_default.fold, "aria-pressed": props.allSubCallsCollapsed, "data-tip": t("toolbar.subCalls"), onClick: props.onToggleAllSubCalls, children: [
          props.allSubCallsCollapsed ? "\u229E" : "\u229F",
          " ",
          t("toolbar.subCalls")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.rowRight, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.search, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives4.IconSearchOutlineRegular, { size: 12, className: QueryBar_default.searchIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "input",
          {
            ref: inputRef,
            type: "text",
            className: QueryBar_default.input,
            "aria-label": qt("query.placeholder"),
            placeholder: qt("query.placeholder"),
            value: draft,
            spellCheck: false,
            autoComplete: "off",
            onChange: (event) => {
              props.onDraft(event.currentTarget.value);
              setOpen(true);
              setActive(0);
            },
            onFocus: () => setOpen(true),
            onBlur: () => {
              if (blurTimer.current !== null) window.clearTimeout(blurTimer.current);
              blurTimer.current = window.setTimeout(() => setOpen(false), 120);
            },
            onKeyDown
          }
        ),
        open && draft.trim() !== "" && suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: QueryBar_default.menu, role: "listbox", ref: menuRef, "aria-label": qt("query.suggestions"), children: suggestions.map((suggestion, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.optionGroup, children: suggestion.group }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.optionLabel, children: suggestion.label }),
              suggestion.detail !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.optionDetail, children: suggestion.detail })
            ]
          },
          `${suggestion.group}:${suggestion.insert}`
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "span",
        {
          className: QueryBar_default.infoWrap,
          onMouseEnter: () => setSyntaxOpen(true),
          onMouseLeave: () => setSyntaxOpen(false),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "button",
              {
                type: "button",
                className: QueryBar_default.infoButton,
                "aria-label": qt("syntax.title"),
                "aria-expanded": syntaxOpen,
                "data-tip": qt("syntax.title"),
                onFocus: () => setSyntaxOpen(true),
                onBlur: () => setSyntaxOpen(false),
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "8", cy: "8", r: "6.1", stroke: "currentColor", strokeWidth: "1.3" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M8 4.4v4.4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "8", cy: "11.3", r: ".85", fill: "currentColor" })
                ] })
              }
            ),
            syntaxOpen && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.syntax, role: "dialog", "aria-label": qt("syntax.title"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: QueryBar_default.syntaxLead, children: qt("syntax.lead") }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("dl", { className: QueryBar_default.syntaxGrid, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "tool:bash" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.tool") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "role:assistant" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.role") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "kind:context" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.type") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "model:gpt-6.1" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.model") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "provider:deepseek" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.provider") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "source:tool-jobs" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.source") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "form:notice" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.form") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "status:error" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.status") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "turn:2-5" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.turn") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "step:120-180" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.step") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "ms:>1000" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.ms") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "code:401" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.code") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "args:path" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.args") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "result:error" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.result") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "error:timeout" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.error") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: '"git push"' }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.phrase") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "-bash" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.negate") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dt", { children: "bash" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("dd", { children: qt("syntax.fulltext") })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.metaLeft, children: [
      props.whole !== void 0 && props.totals.partial === true && /* The window totals are a floor while history is unloaded; the host
         already knows the whole log's turn/step/time figures, so show both
         with explicit captions instead of pretending one is the other. */
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.totals, "data-whole": true, title: qt("totals.wholeHint"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.totalsCaption, children: qt("totals.whole") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.turns") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: props.whole.turns.toLocaleString() })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.steps") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: props.whole.steps.toLocaleString() })
        ] }),
        props.whole.llmMs > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.llm") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: formatDurationSpan(props.whole.llmMs) })
        ] }),
        props.whole.toolMs > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.tool") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: formatDurationSpan(props.whole.toolMs) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: QueryBar_default.totals,
          "data-partial": props.totals.partial || void 0,
          title: props.totals.partial ? qt("totals.partialHint") : void 0,
          children: [
            props.whole !== void 0 && props.totals.partial === true && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.totalsCaption, children: qt("totals.window") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.records") }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: props.totals.records.toLocaleString() })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.calls") }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: props.totals.calls.toLocaleString() })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, "data-tone": props.totals.errors > 0 ? "error" : void 0, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.errors") }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: props.totals.errors.toLocaleString() })
            ] }),
            props.totals.durationMs !== null && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.totalsItem, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { children: qt("totals.duration") }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: formatDurationSpan(props.totals.durationMs) })
            ] }),
            props.totals.partial && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.totalsMore, "aria-hidden": "true", children: qt("totals.partial") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.metaRight, children: [
      chips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: QueryBar_default.chips, children: [
        chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "span",
          {
            className: QueryBar_default.chip,
            "data-tone": chipTone(chip),
            "data-invalid": !chip.valid || void 0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.chipKind, children: chip.kind === "text" ? qt("query.text") : chip.kind }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: QueryBar_default.chipValue, children: chip.raw.replace(/^-?[a-z]+:/, "") || chip.raw }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "button",
                {
                  type: "button",
                  className: QueryBar_default.chipClose,
                  "aria-label": qt("query.removeToken", { token: chip.raw }),
                  onClick: () => props.onRemoveChip(chip.raw),
                  children: "\xD7"
                }
              )
            ]
          },
          chip.raw
        )),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: QueryBar_default.clearChip, onClick: props.onClear, children: qt("query.clearAll") })
      ] }),
      (chips.length > 0 || draft.trim() !== "") && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.summary, children: [
        qt("query.summary", { matched: stats.matched }),
        stats.hidden > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: QueryBar_default.hidden, children: [
          "\xB7 ",
          qt("query.hidden", { count: stats.hidden })
        ] })
      ] })
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
      kind: depth > 0 ? "subtool" : "tool",
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
        kind: "tool",
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
        kind: "tool",
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
var import_react7 = require("react");

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
var css8 = ".bt_TrajectoryTimeline_root_ZWNJON {\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n  flex: none;\n  padding: 0;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  user-select: none;\n}\n\n.bt_TrajectoryTimeline_root_ZWNJON [role='tooltip'] {\n  font: var(--dsw-font-xxxs-11);\n  padding: 8px 10px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 8px;\n  background: var(--bt-surface, #ffffff);\n  color: var(--bt-text, #1c2128);\n  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.12);\n}\n\n.bt_TrajectoryTimeline_plot_shmJE_ {\n  display: grid;\n  /* labels \xB7 step arrow \xB7 plot \xB7 step arrow. The arrows are real columns, so\n     they never cover a bar and the three lane labels stay their own block. */\n  grid-template-columns: 44px 18px minmax(0, 1fr) 18px;\n  height: 50px;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc {\n  position: relative;\n  border-right: 0.5px solid var(--dsw-alias-border-l1);\n  color: var(--dsw-alias-label-caption);\n  font: var(--dsw-font-xs-13);\n  font-size: 10px;\n  line-height: 1;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span {\n  position: absolute;\n  right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 8px;\n  text-align: right;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(1) {\n  top: 7px;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(2) {\n  top: 21px;\n}\n\n.bt_TrajectoryTimeline_labels_NwTymc span:nth-child(3) {\n  top: 35px;\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE {\n  position: relative;\n  overflow: hidden;\n  cursor: crosshair;\n  touch-action: none;\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE[data-panning='true'] {\n  cursor: grabbing;\n}\n\n\n\n/* One arrow per end: a press is a decision to move (or page), a hold keeps\n   going. Hidden until the strip is hovered or focused so the plot stays a plot. */\n.bt_TrajectoryTimeline_edgeStep_iogUXz {\n  all: unset;\n  position: relative;\n  z-index: 7;\n  display: flex;\n  width: 18px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0;\n  background: transparent;\n  color: var(--bt-text-3, #9aa1ab);\n  cursor: pointer;\n  font: 500 14px/1 var(--dsw-font-family);\n  transition: background-color var(--bt-dur-2, 90ms) var(--bt-ease-std, ease),\n    color var(--bt-dur-2, 90ms) var(--bt-ease-std, ease);\n}\n\n.bt_TrajectoryTimeline_edgeStep_iogUXz:hover {\n  background: var(--bt-surface-2, #f6f7f9);\n  color: var(--bt-text, #1c2128);\n}\n\n.bt_TrajectoryTimeline_edgeStep_iogUXz:active {\n  background: var(--bt-surface-3, #eef0f3);\n}\n\n.bt_TrajectoryTimeline_edgeStep_iogUXz:focus-visible {\n  outline: 2px solid var(--bt-accent, #2563eb);\n  outline-offset: 0;\n}\n\n.bt_TrajectoryTimeline_edgeStep_iogUXz:disabled {\n  opacity: 0.35;\n  cursor: default;\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_edgeStep_iogUXz[data-loading] {\n  color: var(--bt-accent, #2563eb);\n}\n\n.bt_TrajectoryTimeline_track_W4cGdE:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -1px;\n}\n\n.bt_TrajectoryTimeline_lanes_w13rKE {\n  position: absolute;\n  z-index: 2;\n  top: 7px;\n  bottom: 7px;\n  left: var(--trajectory-domain-left);\n  width: var(--trajectory-domain-width);\n}\n\n.bt_TrajectoryTimeline_turnBoundaries_IFhdxN {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-domain-left);\n  width: var(--trajectory-domain-width);\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .bt_TrajectoryTimeline_lanes_w13rKE[data-animate-viewport='true'],\n  .bt_TrajectoryTimeline_turnBoundaries_IFhdxN[data-animate-viewport='true'] {\n    transition: left 180ms ease-out;\n  }\n}\n\n.bt_TrajectoryTimeline_turnBoundary_xGFfjN {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-turn-left);\n  width: 0.5px;\n  background: var(--dsw-alias-border-l2);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T {\n  position: absolute;\n  top: calc(var(--trajectory-span-lane) * 14px);\n  left: calc(var(--trajectory-span-left) + var(--trajectory-span-gap));\n  width: max(\n    2px,\n    calc(\n      var(--trajectory-span-width)\n      - var(--trajectory-span-gap)\n      - var(--trajectory-span-gap)\n    )\n  );\n  height: 8px;\n  min-width: 2px;\n  border-radius: 1px;\n  background: var(--dsw-alias-label-secondary);\n  opacity: 0.78;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='user'] {\n  background: var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='context'] {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-success-primary) 68%,\n    var(--dsw-alias-label-secondary)\n  );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='message'] {\n  --trajectory-assistant-decoding-color: color-mix(\n    in srgb,\n    var(--dsw-alias-brand-primary-new-colorprimary-new-color) 60%,\n    var(--dsw-alias-state-error-secondary)\n  );\n  --trajectory-assistant-ttft-color: color-mix(\n    in srgb,\n    var(--trajectory-assistant-decoding-color) 54%,\n    var(--dsw-alias-bg-layer-2)\n  );\n\n  background: var(--trajectory-assistant-decoding-color);\n  opacity: 1;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='message'][data-assistant-timing='true'] {\n  background: linear-gradient(\n    to right,\n    var(--trajectory-assistant-ttft-color) 0,\n    var(--trajectory-assistant-ttft-color) var(--trajectory-assistant-ttft),\n    var(--trajectory-assistant-decoding-color) var(--trajectory-assistant-ttft),\n    var(--trajectory-assistant-decoding-color) 100%\n  );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='tool'],\n.bt_TrajectoryTimeline_span_Kdyw9T[data-timeline-span='subtool'] {\n  background: var(--dsw-alias-state-warn-label);\n  opacity: 1;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-error='true'] {\n  background: var(--dsw-alias-state-error-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-equal-duration='true'] {\n  width: 8px;\n  min-width: 8px;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-selected='false'] {\n  opacity: 0.2;\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-hovered='true']:not([data-current='true']) {\n  z-index: 1;\n  opacity: 1;\n  box-shadow:\n    0 0 0 1px var(--dsw-alias-bg-layer-2),\n    0 0 0 2px color-mix(\n      in srgb,\n      var(--dsw-alias-state-business-primary) 80%,\n      transparent\n    );\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-current='true'] {\n  z-index: 1;\n  opacity: 1;\n  box-shadow:\n    0 0 0 1px var(--dsw-alias-bg-layer-2),\n    0 0 0 2px var(--dsw-alias-state-business-primary);\n}\n\n.bt_TrajectoryTimeline_span_Kdyw9T[data-search-match='false'] {\n  opacity: 0.14;\n}\n\n.bt_TrajectoryTimeline_selection_YrBqKd {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-selection-left);\n  width: var(--trajectory-selection-width);\n  min-width: 1px;\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-business-primary) 12%,\n    transparent\n  );\n  box-shadow:\n    -100vw 0 0 100vw color-mix(in srgb, var(--dsw-alias-bg-layer-1) 58%, transparent),\n    100vw 0 0 100vw color-mix(in srgb, var(--dsw-alias-bg-layer-1) 58%, transparent);\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  bottom: 0;\n  left: var(--trajectory-selection-left);\n  width: var(--trajectory-selection-width);\n  min-width: 1px;\n  pointer-events: none;\n}\n\n/* cursor line: one dashed hairline, drawn over the bars as well. A filled 2px\n   bar (the previous shape) read as a selection; this reads as a pointer. */\n.bt_TrajectoryTimeline_hoverLine_XzB4lu {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  bottom: 0;\n  left: clamp(\n    0px,\n    calc(var(--trajectory-hover-left) - 0.5px),\n    calc(100% - 1px)\n  );\n  width: 1px;\n  background: repeating-linear-gradient(\n    to bottom,\n    color-mix(in srgb, var(--dsw-alias-state-business-primary) 62%, transparent) 0 3px,\n    transparent 3px 6px\n  );\n  pointer-events: none;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::before,\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--dsw-alias-state-business-primary);\n  content: '';\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::before {\n  left: 0;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj::after {\n  right: 0;\n}\n\n.bt_TrajectoryTimeline_selectionEdges_VOyluj[data-dragging='true']::before,\n.bt_TrajectoryTimeline_selectionEdges_VOyluj[data-dragging='true']::after {\n  width: 2px;\n}\n\n.bt_TrajectoryTimeline_selection_YrBqKd[data-dragging='true'] {\n  background: color-mix(\n    in srgb,\n    var(--dsw-alias-state-business-primary) 18%,\n    transparent\n  );\n}\n\n/* the hover card (HoverCard.tsx) is a child of the section; don't clip it */\n.bt_TrajectoryTimeline_root_ZWNJON {\n  overflow: visible;\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="sqmlHh"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "sqmlHh");
  el.textContent = css8;
  document.head.appendChild(el);
}
var TrajectoryTimeline_default = { "root": "bt_TrajectoryTimeline_root_ZWNJON", "plot": "bt_TrajectoryTimeline_plot_shmJE_", "labels": "bt_TrajectoryTimeline_labels_NwTymc", "track": "bt_TrajectoryTimeline_track_W4cGdE", "edgeStep": "bt_TrajectoryTimeline_edgeStep_iogUXz", "lanes": "bt_TrajectoryTimeline_lanes_w13rKE", "turnBoundaries": "bt_TrajectoryTimeline_turnBoundaries_IFhdxN", "turnBoundary": "bt_TrajectoryTimeline_turnBoundary_xGFfjN", "span": "bt_TrajectoryTimeline_span_Kdyw9T", "selection": "bt_TrajectoryTimeline_selection_YrBqKd", "selectionEdges": "bt_TrajectoryTimeline_selectionEdges_VOyluj", "hoverLine": "bt_TrajectoryTimeline_hoverLine_XzB4lu" };

// src/vendor/trajectory/TrajectoryTimeline.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var MINIMUM_DRAG_PX = 3;
var EDGE_STEP_FRACTION = 2 / 3;
var HOLD_DELAY_MS = 420;
var HOLD_REPEAT_MS = 140;
var BUCKET_SPAN_LIMIT = 1600;
var BUCKET_COLUMNS = 360;
var MINIMUM_ZOOM_OPERATIONS = 4;
var EDGE_PAN_ZONE_FRACTION = 0.08;
var EDGE_PAN_STEP_FRACTION = 0.025;
var MAXIMUM_EDGE_PAN_PX = 32;
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
function formatDomainValue(value, mode, origin) {
  if (mode === "sequence") return `#${Math.round(value)}`;
  if (mode === "duration") return formatDurationSpan(Math.max(0, value - origin));
  return formatTimestamp(value);
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: TrajectoryTimeline_default.labels, "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: t("column.input") }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: t("column.model") }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: t("column.tools") })
  ] });
}
var TimelineLanes = (0, import_react7.memo)(function TimelineLanes2({
  model,
  fullDuration,
  domainStart,
  domainDuration,
  domainStyle,
  animateViewport,
  selectedIndex,
  hoveredIndex,
  activeRange,
  searchMatchIndexes,
  detailByIndex,
  mode
}) {
  const domainEnd = domainStart + domainDuration;
  const visibleSpans = model.spans.filter((span) => span.index === selectedIndex || span.end >= domainStart && span.start <= domainEnd);
  const bucketed = visibleSpans.length > BUCKET_SPAN_LIMIT;
  const buckets = bucketed ? (() => {
    const map = /* @__PURE__ */ new Map();
    for (const span of visibleSpans) {
      const column = Math.floor((span.start - model.start) / fullDuration * BUCKET_COLUMNS);
      const key = `${span.lane}\0${column}`;
      const existing = map.get(key);
      if (existing === void 0) {
        map.set(key, {
          lane: span.lane,
          start: span.start,
          end: span.end,
          isError: span.isError,
          kind: span.kind,
          selected: span.index === selectedIndex,
          hovered: hoveredIndex === span.index,
          search: searchMatchIndexes?.has(span.index) === true
        });
        continue;
      }
      if (span.start < existing.start) existing.start = span.start;
      if (span.end > existing.end) existing.end = span.end;
      if (span.isError) existing.isError = true;
      if (span.index === selectedIndex) existing.selected = true;
      if (hoveredIndex === span.index) existing.hovered = true;
      if (searchMatchIndexes?.has(span.index) === true) existing.search = true;
    }
    return [...map.values()];
  })() : null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        className: TrajectoryTimeline_default.turnBoundaries,
        "data-animate-viewport": animateViewport || void 0,
        "aria-hidden": "true",
        style: domainStyle,
        children: model.turnBoundaries.filter((boundary) => boundary.time > model.start && boundary.time >= domainStart && boundary.time <= domainStart + domainDuration).map((boundary) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        className: TrajectoryTimeline_default.lanes,
        "data-animate-viewport": animateViewport || void 0,
        "data-timeline-domain": true,
        style: domainStyle,
        children: [
          (buckets === null ? visibleSpans : []).map((span) => {
            const left = (span.start - model.start) / fullDuration;
            const width = (span.end - span.start) / fullDuration;
            const widthPercent = width * 100;
            const detail = detailByIndex.get(span.index);
            const ttftMs = detail?.ttftMs;
            const decodingMs = detail?.decodingMs;
            const ttftFraction = ttftMs === void 0 || decodingMs === void 0 || ttftMs + decodingMs <= 0 ? null : ttftMs / (ttftMs + decodingMs);
            return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
                "data-hovered": hoveredIndex === span.index || void 0,
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
          }),
          buckets !== null && buckets.map((bucket) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "span",
            {
              "aria-hidden": "true",
              className: TrajectoryTimeline_default.span,
              "data-timeline-span": bucket.kind,
              "data-bucket": "true",
              "data-error": bucket.isError || void 0,
              "data-equal-duration": mode === "time" || void 0,
              "data-current": bucket.selected || void 0,
              "data-hovered": bucket.hovered || void 0,
              "data-search-match": bucket.search || void 0,
              "data-selected": activeRange === null ? void 0 : bucket.start <= activeRange.end && bucket.end >= activeRange.start ? "true" : "false",
              style: {
                "--trajectory-span-left": `${(bucket.start - model.start) / fullDuration * 100}%`,
                "--trajectory-span-width": `${Math.max((bucket.end - bucket.start) / fullDuration * 100, 0.1)}%`,
                "--trajectory-span-gap": "1px",
                "--trajectory-span-lane": bucket.lane
              }
            },
            `${bucket.lane}:${bucket.start}:${bucket.end}`
          ))
        ]
      }
    )
  ] });
});
var TrajectoryTimeline = (0, import_react7.memo)(function TrajectoryTimeline2({
  t,
  qt,
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
  const model = (0, import_react7.useMemo)(() => deriveTrajectoryTimeline(turns, mode), [mode, turns]);
  const detailByIndex = (0, import_react7.useMemo)(
    () => new Map(turns.flatMap(
      (turn) => turn.groups.flatMap(
        (group) => group.cells.map((cell) => [cell.index, timelineRecordDetail(cell)])
      )
    )),
    [turns]
  );
  const dragRef = (0, import_react7.useRef)(null);
  const panRef = (0, import_react7.useRef)(null);
  const rootRef = (0, import_react7.useRef)(null);
  const trackRef = (0, import_react7.useRef)(null);
  const [draft, setDraft] = (0, import_react7.useState)(null);
  const [hover, setHover] = (0, import_react7.useState)(null);
  const [loadingEarlier, setLoadingEarlier] = (0, import_react7.useState)(false);
  const [panning, setPanning] = (0, import_react7.useState)(false);
  const [viewport, setViewport] = (0, import_react7.useState)(null);
  const [animateViewport, setAnimateViewport] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    if (model !== null && range !== null && (range.end < model.start || range.start > model.end)) {
      onRangeChange(null);
    }
  }, [model, onRangeChange, range]);
  (0, import_react7.useEffect)(() => {
    if (model === null) return;
    setAnimateViewport(false);
    setViewport((current) => current !== null && (current.end < model.start || current.start > model.end) ? null : current);
  }, [model]);
  (0, import_react7.useEffect)(() => {
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
  const loadEarlier = onLoadEarlier === void 0 || loadingEarlier ? void 0 : () => {
    setLoadingEarlier(true);
    void onLoadEarlier().finally(() => {
      setLoadingEarlier(false);
    });
  };
  const visibleEnd = domainStart + domainDuration;
  const showsLaterBoundary = model !== null && viewport !== null && visibleEnd < model.end - Math.max(1e-9, fullDuration * 1e-6);
  const panWindow = (0, import_react7.useCallback)((direction) => {
    if (model === null || viewport === null) return false;
    const span = viewport.end - viewport.start;
    const nextStart = Math.min(
      Math.max(viewport.start + direction * span * EDGE_STEP_FRACTION, model.start),
      Math.max(model.start, model.end - span)
    );
    if (Math.abs(nextStart - viewport.start) < 1e-9) return false;
    setAnimateViewport(false);
    setViewport({ start: nextStart, end: nextStart + span });
    return true;
  }, [model, viewport]);
  const windowSize = (0, import_react7.useRef)(null);
  const pendingPan = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    if (viewport === null) return;
    const size = viewport.end - viewport.start;
    if (size > 0) windowSize.current = size;
  }, [viewport]);
  const stepEarlier = (0, import_react7.useCallback)(() => {
    if (panWindow(-1)) return;
    if (model === null) return;
    pendingPan.current ??= { fromStart: model.start, size: windowSize.current };
    loadEarlier?.();
  }, [loadEarlier, model, panWindow]);
  const stepLater = (0, import_react7.useCallback)(() => {
    panWindow(1);
  }, [panWindow]);
  const stepEarlierRef = (0, import_react7.useRef)(() => {
  });
  const stepLaterRef = (0, import_react7.useRef)(() => {
  });
  const canStepEarlier = viewport !== null || hasEarlierRecords && loadEarlier !== void 0;
  const holdTimer = (0, import_react7.useRef)(null);
  const holdStep = (0, import_react7.useRef)(() => {
  });
  const holdRelease = (0, import_react7.useRef)(null);
  const stopHold = (0, import_react7.useCallback)(() => {
    if (holdTimer.current !== null) window.clearTimeout(holdTimer.current);
    holdTimer.current = null;
    holdRelease.current?.();
    holdRelease.current = null;
  }, []);
  const startHold = (0, import_react7.useCallback)((step) => {
    stopHold();
    holdStep.current = step;
    step();
    const release = () => {
      stopHold();
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    holdRelease.current = () => {
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
    holdTimer.current = window.setTimeout(() => {
      holdTimer.current = window.setInterval(() => {
        holdStep.current();
      }, HOLD_REPEAT_MS);
    }, HOLD_DELAY_MS);
  }, [stopHold]);
  (0, import_react7.useEffect)(() => stopHold, [stopHold]);
  stepEarlierRef.current = stepEarlier;
  stepLaterRef.current = stepLater;
  const edgeEarlier = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "button",
    {
      type: "button",
      className: TrajectoryTimeline_default.edgeStep,
      "data-side": "earlier",
      "aria-label": qt("timeline.earlier"),
      title: qt("timeline.earlier"),
      disabled: !canStepEarlier,
      "data-loading": loadingEarlier || void 0,
      onPointerDown: (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.button !== 0) return;
        startHold(() => {
          stepEarlierRef.current();
        });
      },
      onPointerUp: stopHold,
      onPointerLeave: stopHold,
      onPointerCancel: stopHold,
      onKeyDown: (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        stepEarlierRef.current();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "aria-hidden": "true", children: "\u2039" })
    }
  );
  const edgeLater = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "button",
    {
      type: "button",
      className: TrajectoryTimeline_default.edgeStep,
      "data-side": "later",
      "aria-label": qt("timeline.later"),
      title: qt("timeline.later"),
      disabled: !showsLaterBoundary,
      onPointerDown: (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.button !== 0) return;
        startHold(() => {
          stepLaterRef.current();
        });
      },
      onPointerUp: stopHold,
      onPointerLeave: stopHold,
      onPointerCancel: stopHold,
      onKeyDown: (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        stepLaterRef.current();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "aria-hidden": "true", children: "\u203A" })
    }
  );
  (0, import_react7.useEffect)(() => {
    const pending = pendingPan.current;
    if (pending === null || model === null) return;
    if (model.start >= pending.fromStart) return;
    pendingPan.current = null;
    const size = pending.size ?? pending.fromStart - model.start;
    if (!(size > 0)) return;
    windowSize.current = size;
    const start = Math.max(model.start, pending.fromStart - size * EDGE_STEP_FRACTION);
    const end = Math.min(model.end, start + size);
    if (!(end > start)) return;
    setAnimateViewport(false);
    setViewport({ start, end });
  }, [model]);
  const projectedDomainStyle = (0, import_react7.useMemo)(() => model === null ? void 0 : {
    "--trajectory-domain-left": `${-(domainStart - model.start) / domainDuration * 100}%`,
    "--trajectory-domain-width": `${fullDuration / domainDuration * 100}%`
  }, [domainDuration, domainStart, fullDuration, model]);
  const committed = model === null || range === null ? null : rangeFraction(range, domainStart, domainDuration, model.start, model.end);
  const draftFraction = model === null || draft === null ? null : rangeFraction(draft, domainStart, domainDuration, model.start, model.end);
  const visibleRange = draftFraction ?? committed;
  const activeRange = draft ?? range;
  (0, import_react7.useEffect)(() => {
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
        if (event.deltaY > 0 && domainStart - model.start <= Math.max(1e-9, fullDuration * 1e-6)) {
          loadEarlier?.();
        }
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
  }, [domainDuration, domainStart, fullDuration, loadEarlier, mode, model]);
  if (model === null) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { ref: rootRef, className: TrajectoryTimeline_default.root, "aria-label": t("timeline.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: TrajectoryTimeline_default.plot, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LaneLabels, { t }),
      edgeEarlier,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: TrajectoryTimeline_default.track, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: TrajectoryTimeline_default.empty, children: t("timeline.noTimingData") }) }),
      edgeLater
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
  const laneAt = (event, rect) => {
    const offset = event.clientY - rect.top - 7;
    if (offset < 0) return null;
    return Math.floor(offset / 14);
  };
  const recordIndexAt = (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    const value = target?.closest("[data-timeline-record-index]")?.dataset.timelineRecordIndex;
    if (value !== void 0) {
      const index = Number(value);
      if (Number.isFinite(index)) return index;
    }
    if (model === null) return null;
    const rect = event.currentTarget.getBoundingClientRect();
    const time = domainStart + clampFraction((event.clientX - rect.left) / Math.max(1, rect.width)) * domainDuration;
    const lane = laneAt(event, rect);
    if (lane === null) return null;
    let best;
    for (const span of model.spans) {
      if (span.lane !== lane || span.start > time || span.end < time) continue;
      if (best === void 0 || span.end - span.start < best.end - best.start) best = span;
    }
    return best?.index ?? null;
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
    setHover({ fraction: anchor, recordIndex, x: event.clientX, y: event.clientY });
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
    setHover({ fraction, recordIndex: recordIndexAt(event), x: event.clientX, y: event.clientY });
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
    setHover({ fraction: pointFraction, recordIndex: recordIndexAt(event), x: event.clientX, y: event.clientY });
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { ref: rootRef, className: TrajectoryTimeline_default.root, "aria-label": t("timeline.aria"), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: TrajectoryTimeline_default.plot, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LaneLabels, { t }),
      edgeEarlier,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
            hover !== null && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
            visibleRange !== null && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
            model !== null && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              TimelineLanes,
              {
                model,
                fullDuration,
                domainStart,
                domainDuration,
                domainStyle: projectedDomainStyle,
                animateViewport,
                selectedIndex,
                hoveredIndex: hover?.recordIndex ?? null,
                activeRange,
                searchMatchIndexes,
                detailByIndex,
                mode
              }
            )
          ]
        }
      ),
      edgeLater
    ] }) }),
    hover !== null && !panning && (() => {
      const cursorValue = domainStart + hover.fraction * domainDuration;
      const span = hover.recordIndex === null ? void 0 : model.spans.find((candidate) => candidate.index === hover.recordIndex);
      const formatValue = (value) => formatDomainValue(value, mode, model.start);
      const detail = span === void 0 ? void 0 : detailByIndex.get(span.index);
      const counted = activeRange === null ? model.spans.filter((candidate) => candidate.end >= domainStart && candidate.start <= domainStart + domainDuration).length : model.spans.filter((candidate) => candidate.start <= activeRange.end && candidate.end >= activeRange.start).length;
      const rows = [
        { label: qt("timeline.cursor"), value: formatValue(cursorValue) },
        /* the axis is relative in duration/sequence mode, so the absolute
           date of the record under the cursor is the only way to answer
           "when was this" — always give it when the span knows its start */
        ...detail?.startedAt === void 0 ? [] : [{
          label: t("timing.started"),
          value: formatTimestamp(detail.startedAt)
        }],
        ...span === void 0 ? [] : [{
          label: qt("timeline.period"),
          value: `${formatValue(span.start)} \u2013 ${formatValue(span.end)}`
        }],
        ...detail?.durationMs === void 0 ? [] : [{
          label: qt("chip.duration"),
          value: mode === "sequence" ? qt("timeline.records", { count: Math.round(span.end - span.start) }) : formatDurationSpan(detail.durationMs)
        }],
        {
          label: activeRange === null ? qt("timeline.count") : qt("timeline.selected"),
          value: qt("timeline.records", { count: counted })
        }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        HoverCard,
        {
          x: hover.x,
          y: hover.y,
          ...span === void 0 ? {} : {
            kind: span.kind,
            label: timelineKindLabel(span.kind, t),
            ...span.label === "" ? {} : { name: span.label }
          },
          isError: span?.isError === true || void 0,
          rows
        }
      );
    })()
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
    ...node.kind === "context" ? { contextProducer: node.producer, contextForm: node.form } : {},
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
    groups.push({ title, step, laid: [...laid] });
  };
  const pushStepInput = (turn, step, laid) => {
    if (laid.length === 0) return;
    const groups = bucket(turn).groups;
    const title = t("group.step", { step });
    const existing = groups.find((group) => group.title === title);
    if (existing === void 0) {
      groups.push({ title, step, laid: [...laid] });
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
  const groups = entry.groups.map(({ title, step, laid }) => {
    const description = groupDescription(laid, t);
    return {
      title,
      ...step === void 0 ? {} : { step },
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
var css9 = "/* Full-bleed, fixed-height host for the trajectory ledger. Isolation keeps the\n   sticky toolbar's z-index inside this view, so the conversation tab row\n   stacked above the view still paints its active bar over the view's top\n   edge. */\n.bt_views_root_QpOuZ9 {\n  --dsh-trajectory-toolbar-height: 32px;\n\n  isolation: isolate;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  min-height: 0;\n  width: 100%;\n  box-sizing: border-box;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bt_views_ledger_7rRXSg {\n  position: relative;\n  z-index: 0;\n  isolation: isolate;\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n\n}\n\n.bt_views_root_QpOuZ9 {\n  position: relative;\n  /* ConversationRoot publishes the floating composer's live height. This must sit\n     on the trajectory root, not on .ledger: the inspector is a sibling of the\n     ledger and was getting no clearance at all, so its content scrolled under\n     the composer. */\n  --dsh-trajectory-bottom-clearance: calc(var(--dsh-composer-height, 152px) + 16px);\n}\n\n.bt_views_toast_C-TK2m {\n  position: absolute;\n  left: 50%;\n  bottom: calc(var(--dsh-composer-height, 120px) + 16px);\n  transform: translateX(-50%);\n  z-index: 30;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 32px;\n  padding: 0 8px 0 12px;\n  border: 1px solid var(--bt-line, #e6e8eb);\n  border-radius: 8px;\n  background: var(--bt-surface, #fff);\n  color: var(--bt-text, #1c2128);\n  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.1);\n  font-size: 11.5px;\n  animation: bt_views_bt-toast-in_dewC9x var(--bt-dur-4, 160ms) var(--bt-ease-out, ease);\n}\n\n.bt_views_toastAction_oJPmhq {\n  border: 0;\n  background: transparent;\n  color: var(--bt-accent, #2563eb);\n  font-size: 11.5px;\n  cursor: pointer;\n  padding: 0 4px;\n}\n\n.bt_views_toastClose_ffEICC {\n  width: 18px;\n  height: 18px;\n  border: 0;\n  border-radius: 4px;\n  background: transparent;\n  color: var(--bt-text-3, #9aa1ab);\n  font-size: 13px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.bt_views_toastClose_ffEICC:hover {\n  background: var(--bt-hover, rgba(16, 24, 40, 0.06));\n  color: var(--bt-text, #1c2128);\n}\n\n@keyframes bt_views_bt-toast-in_dewC9x {\n  from { opacity: 0; transform: translate(-50%, 6px); }\n  to { opacity: 1; transform: translate(-50%, 0); }\n}\n";
if (typeof document !== "undefined" && document.querySelector('style[data-bt-css="qMCcq9"]') === null) {
  const el = document.createElement("style");
  el.setAttribute("data-bt-css", "qMCcq9");
  el.textContent = css9;
  document.head.appendChild(el);
}
var views_default = { "root": "bt_views_root_QpOuZ9", "ledger": "bt_views_ledger_7rRXSg", "toast": "bt_views_toast_C-TK2m", "bt-toast-in": "bt_views_bt-toast-in_dewC9x", "toastAction": "bt_views_toastAction_oJPmhq", "toastClose": "bt_views_toastClose_ffEICC" };

// src/vendor/trajectory/TrajectoryView.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var EMPTY_TURN_IDS = /* @__PURE__ */ new Set();
var EMPTY_RECORD_IDS = /* @__PURE__ */ new Set();
var HISTORY_PAGE_NODES = 50;
var NAV_HISTORY_LIMIT = 50;
var QUERY_STORAGE_PREFIX = "dsh-better-trajectory:query:";
function readStoredQuery(sessionId) {
  try {
    const raw = window.sessionStorage.getItem(`${QUERY_STORAGE_PREFIX}${sessionId ?? ""}`);
    if (raw === null) return { chips: [], draft: "" };
    const parsed = JSON.parse(raw);
    if (typeof parsed === "string") return { chips: tokenizeQuery(parsed), draft: "" };
    return {
      chips: Array.isArray(parsed?.chips) ? parsed.chips.filter((chip) => typeof chip === "string") : [],
      draft: typeof parsed?.draft === "string" ? parsed.draft : ""
    };
  } catch {
    return { chips: [], draft: "" };
  }
}
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
  sessionId,
  sessionStats: wholeSessionStats,
  sessionEvents
}) {
  const foldKey = `dsh-better-trajectory:folds:${sessionId ?? ""}`;
  const [collapsedTurns, setCollapsedTurns] = (0, import_react8.useState)(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey);
      const parsed = raw === null ? null : JSON.parse(raw);
      return new Set(Array.isArray(parsed?.turns) ? parsed.turns : []);
    } catch {
      return EMPTY_TURN_IDS;
    }
  });
  const [collapsedAssistants, setCollapsedAssistants] = (0, import_react8.useState)(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey);
      const parsed = raw === null ? null : JSON.parse(raw);
      return new Set(Array.isArray(parsed?.assistants) ? parsed.assistants : []);
    } catch {
      return EMPTY_RECORD_IDS;
    }
  });
  const [collapsedTools, setCollapsedTools] = (0, import_react8.useState)(() => {
    try {
      const raw = window.sessionStorage.getItem(foldKey);
      const parsed = raw === null ? null : JSON.parse(raw);
      return new Set(Array.isArray(parsed?.tools) ? parsed.tools : []);
    } catch {
      return EMPTY_RECORD_IDS;
    }
  });
  (0, import_react8.useEffect)(() => {
    try {
      window.sessionStorage.setItem(foldKey, JSON.stringify({
        turns: [...collapsedTurns],
        assistants: [...collapsedAssistants],
        tools: [...collapsedTools]
      }));
    } catch {
    }
  }, [foldKey, collapsedTurns, collapsedAssistants, collapsedTools]);
  const [timelineSelection, setTimelineSelection] = (0, import_react8.useState)(null);
  const actualDuration = useDuration((value) => value);
  const [queryChips, setQueryChips] = (0, import_react8.useState)(() => readStoredQuery(sessionId).chips);
  const [queryDraft, setQueryDraft] = (0, import_react8.useState)(() => readStoredQuery(sessionId).draft);
  const queryText = [...queryChips, queryDraft.trim()].filter((part) => part !== "").join(" ");
  (0, import_react8.useEffect)(() => {
    try {
      window.sessionStorage.setItem(
        `${QUERY_STORAGE_PREFIX}${sessionId ?? ""}`,
        JSON.stringify({ chips: queryChips, draft: queryDraft })
      );
    } catch {
    }
  }, [queryChips, queryDraft, sessionId]);
  const [showTime, setShowTime] = (0, import_react8.useState)(true);
  const restoreScroll = (0, import_react8.useRef)(null);
  const [toast, setToast] = (0, import_react8.useState)(null);
  const toastTimer = (0, import_react8.useRef)(null);
  const toastSeq = (0, import_react8.useRef)(0);
  const [selectedTimelineIndex, setSelectedTimelineIndex] = (0, import_react8.useState)(null);
  const [timelineRecordSelection, setTimelineRecordSelection] = (0, import_react8.useState)(null);
  const [timelineRecordFocus, setTimelineRecordFocus] = (0, import_react8.useState)(null);
  const completeInspection = useTrajectory((snapshot) => snapshot);
  const latestNodeSeq = completeInspection.eventNodes.at(-1)?.seq;
  const [historyTailSeq, setHistoryTailSeq] = (0, import_react8.useState)(latestNodeSeq);
  const [historyNodeLimit, setHistoryNodeLimit] = (0, import_react8.useState)(HISTORY_PAGE_NODES);
  const fixedTailSeq = historyTailSeq ?? latestNodeSeq;
  const historyTailIndex = fixedTailSeq === void 0 ? -1 : completeInspection.eventNodes.findLastIndex((node) => node.seq <= fixedTailSeq);
  const historyEndIndex = historyTailIndex < 0 && latestNodeSeq !== void 0 ? completeInspection.eventNodes.length : historyTailIndex + 1;
  const historyStartIndex = Math.max(0, historyEndIndex - historyNodeLimit);
  (0, import_react8.useEffect)(() => {
    if (latestNodeSeq !== void 0 && (historyTailSeq === void 0 || historyTailIndex < 0)) {
      setHistoryTailSeq(latestNodeSeq);
    }
  }, [historyTailIndex, historyTailSeq, latestNodeSeq]);
  const inspection = (0, import_react8.useMemo)(() => {
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
  const inspectNodeIndex = (0, import_react8.useMemo)(
    () => inspectCallId === null ? -1 : completeInspection.eventNodes.findIndex((node) => node.kind === "assistant" ? node.blocks.some((block) => block.kind === "tool-call" && block.callId === inspectCallId) : node.kind === "tool-result" && containsCall([node], inspectCallId)),
    [completeInspection.eventNodes, inspectCallId]
  );
  (0, import_react8.useEffect)(() => {
    if (inspectNodeIndex < 0 || inspectNodeIndex >= historyStartIndex) return;
    setHistoryNodeLimit((limit) => limit + historyStartIndex - inspectNodeIndex);
  }, [historyStartIndex, inspectNodeIndex]);
  const requestNumbers = (0, import_react8.useMemo)(() => {
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
  const finalized = (0, import_react8.useMemo)(() => {
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
  const timelinePartial = (0, import_react8.useMemo)(
    () => partial === null ? null : {
      turn: partial.turn,
      step: partial.step,
      blocks: partial.blocks.map((block) => timelineBlock(block)),
      ...partial.timing === void 0 ? {} : { timing: partial.timing }
    },
    [partialStep, partialTurn, timelinePartialSignature, partialStartTime, partialFirstTokenTime]
  );
  const timelineTurns = (0, import_react8.useMemo)(
    () => appendTrajectoryPartialLayout(finalized.turns, timelinePartial, finalized.lastIndex, t),
    [finalized, timelinePartial, t]
  );
  const timelineMode = actualDuration ? "duration" : "sequence";
  const partialSearchTurns = (0, import_react8.useMemo)(
    () => appendTrajectoryPartialLayout([], partial, finalized.lastIndex, t),
    [finalized.lastIndex, partial, t]
  );
  const streamingCells = (0, import_react8.useMemo)(
    () => partialSearchTurns.flatMap((turn) => turn.groups.flatMap((group) => group.cells)),
    [partialSearchTurns]
  );
  const query = (0, import_react8.useMemo)(() => parseQuery(queryText), [queryText]);
  const queryChipTokens = (0, import_react8.useMemo)(
    () => queryChips.flatMap((raw) => parseQuery(raw).tokens.map((token) => ({ ...token, raw }))),
    [queryChips]
  );
  const toolIndex = (0, import_react8.useMemo)(() => buildToolIndex(completeInspection), [completeInspection]);
  const callMeta = (0, import_react8.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    for (const record2 of toolIndex.records) {
      if (!record2.callId) continue;
      map.set(record2.callId, {
        ...typeof record2.durationMs === "number" ? { durationMs: record2.durationMs } : {},
        ...typeof record2.time === "number" ? { time: record2.time } : {},
        ...typeof record2.errorCode === "string" ? { errorCode: record2.errorCode } : {}
      });
    }
    return map;
  }, [toolIndex]);
  const toolCells = (0, import_react8.useMemo)(() => timelineTurns.flatMap((turn) => turn.groups.flatMap((group) => group.cells.filter((cell) => cell.kind === "tool" || cell.kind === "subtool").map((cell) => ({ cell, turn: turn.turn })))), [timelineTurns]);
  const allCells = (0, import_react8.useMemo)(() => timelineTurns.flatMap((turn) => turn.groups.flatMap((group) => group.cells.map((cell) => ({ cell, turn: turn.turn, step: group.step ?? null })))), [timelineTurns]);
  const requestFacts = (0, import_react8.useMemo)(() => {
    const facts = /* @__PURE__ */ new Map();
    for (const request of requestNumbers) {
      if (request.step === 0 || request.turn === null) continue;
      facts.set(`${request.turn}\0${request.step}`, {
        ...request.provider === void 0 ? {} : { provider: request.provider },
        ...request.model === void 0 ? {} : { model: request.model }
      });
    }
    return facts;
  }, [requestNumbers]);
  const matchedCells = (0, import_react8.useMemo)(() => {
    const set = /* @__PURE__ */ new Set();
    if (!query.active) return set;
    for (const { cell, turn, step } of allCells) {
      const indexed = cell.callId === void 0 ? void 0 : callMeta.get(cell.callId);
      const facts = step === null || turn === null ? void 0 : requestFacts.get(`${turn}\0${step}`);
      if (matchesCell(cell, query, {
        ...indexed,
        turn,
        ...step === null ? {} : { step },
        ...facts ?? {}
      })) set.add(cell.index);
    }
    return set;
  }, [allCells, callMeta, query, requestFacts]);
  const recordStats = (0, import_react8.useMemo)(() => {
    let errors = 0;
    let start = null;
    let end = null;
    for (const { cell } of allCells) {
      if (cell.requestOnly === true) continue;
      if (cell.isError === true) errors += 1;
      const startedAt = cell.startedAt;
      if (typeof startedAt === "number" && Number.isFinite(startedAt)) {
        if (start === null || startedAt < start) start = startedAt;
        const completed = startedAt + (cell.timeSeconds === null ? 0 : cell.timeSeconds * 1e3);
        if (end === null || completed > end) end = completed;
      }
    }
    return {
      records: allCells.filter((entry) => entry.cell.requestOnly !== true).length,
      calls: toolCells.length,
      errors,
      durationMs: start === null || end === null ? null : Math.max(0, end - start),
      /* The window is what the client holds. Older history counts as missing
         whether it is resident-but-outside this window or never paged in. */
      partial: hasOlderHistory
    };
  }, [allCells, hasOlderHistory, toolCells]);
  const queryTurns = (0, import_react8.useMemo)(
    () => [...toolIndex.turns.entries()].sort((left, right) => left[0] - right[0]).map(([turn, count]) => ({ turn, count })),
    [toolIndex]
  );
  const hiddenIndexes = (0, import_react8.useMemo)(() => {
    if (!query.active) return null;
    const hidden = /* @__PURE__ */ new Set();
    for (const { cell } of allCells) {
      if (!matchedCells.has(cell.index)) hidden.add(cell.index);
    }
    return hidden;
  }, [allCells, matchedCells, query.active]);
  const maxDurationMs = (0, import_react8.useMemo)(() => {
    let max = 0;
    for (const record2 of toolIndex.records) {
      if (typeof record2.durationMs === "number" && record2.durationMs > max) max = record2.durationMs;
    }
    return max;
  }, [toolIndex]);
  const visibleTurns = (0, import_react8.useMemo)(() => {
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
  const timelineFocusIndexes = (0, import_react8.useMemo)(
    () => timelineRange === null ? null : trajectoryTimelineFocusIndexes(timelineTurns, timelineRange, timelineMode),
    [timelineMode, timelineRange, timelineTurns]
  );
  const [nav, setNav] = (0, import_react8.useState)({ entries: [], index: -1 });
  const navSuppress = (0, import_react8.useRef)(false);
  const pushNav = (entry) => {
    setNav((prev) => {
      const current = prev.entries[prev.index];
      if (current !== void 0 && current.kind === entry.kind && (entry.kind === "record" ? current.index === entry.index : current.range.start === entry.range.start && current.range.end === entry.range.end)) return prev;
      const kept = prev.entries.slice(0, prev.index + 1);
      kept.push(entry);
      const trimmed = kept.length > NAV_HISTORY_LIMIT ? kept.slice(kept.length - NAV_HISTORY_LIMIT) : kept;
      return { entries: trimmed, index: trimmed.length - 1 };
    });
  };
  const handleRecordSelect = (0, import_react8.useCallback)((index) => {
    if (timelineFocusIndexes !== null && !timelineFocusIndexes.has(index)) {
      setTimelineSelection(null);
    }
    setSelectedTimelineIndex(index);
    if (navSuppress.current) {
      navSuppress.current = false;
      return;
    }
    pushNav({ kind: "record", index });
  }, [timelineFocusIndexes]);
  const navigateRecord = (0, import_react8.useCallback)((delta) => {
    const next = nav.index + delta;
    if (next < 0 || next >= nav.entries.length) return;
    const entry = nav.entries[next];
    if (entry === void 0) return;
    setNav({ entries: nav.entries, index: next });
    if (entry.kind === "range") {
      setTimelineSelection(entry.range);
      return;
    }
    navSuppress.current = true;
    setTimelineSelection(null);
    setTimelineRecordSelection({ index: entry.index });
    setSelectedTimelineIndex(entry.index);
  }, [nav]);
  const handleTimelineRangeChange = (0, import_react8.useCallback)((range) => {
    setTimelineSelection(range);
    if (range !== null) pushNav({ kind: "range", range });
  }, []);
  (0, import_react8.useEffect)(() => {
    const onKeyDown = (event) => {
      if (!event.altKey || event.metaKey || event.ctrlKey) return;
      const target = event.target;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable === true) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateRecord(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateRecord(1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [navigateRecord]);
  const handleTimelineRecordSelect = (0, import_react8.useCallback)((index) => {
    setTimelineSelection(null);
    setTimelineRecordSelection({ index });
    setSelectedTimelineIndex(index);
  }, []);
  const handleTimelineRecordFocus = (0, import_react8.useCallback)((index) => {
    setTimelineRecordFocus({ index });
  }, []);
  const collapsibleTurnIds = (0, import_react8.useMemo)(
    () => timelineTurns.filter((turn) => turn.turn !== null && turn.groups.reduce(
      (count, group) => count + group.cells.filter((cell) => cell.requestOnly !== true && cell.kind !== "system").length,
      0
    ) > 1).flatMap((turn) => turn.turn === null ? [] : [turn.turn]),
    [timelineTurns]
  );
  const allTurnsCollapsed = collapsibleTurnIds.length > 0 && collapsibleTurnIds.every((turn) => collapsedTurns.has(turn));
  const collapsibleAssistantIds = (0, import_react8.useMemo)(() => {
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
  const collapsibleToolIds = (0, import_react8.useMemo)(
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
  const dismissToast = (0, import_react8.useCallback)(() => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
    toastTimer.current = null;
    setToast(null);
  }, []);
  (0, import_react8.useEffect)(() => () => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
  }, []);
  const pushToast = (0, import_react8.useCallback)((text, undo) => {
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
    const id = ++toastSeq.current;
    setToast({ id, text, ...undo === void 0 ? {} : { undo } });
    toastTimer.current = window.setTimeout(() => {
      setToast((current) => current?.id === id ? null : current);
    }, 4e3);
  }, []);
  const clearDescendantFolds = (0, import_react8.useCallback)((turn, assistantId) => {
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
  const preserveScroll = (0, import_react8.useCallback)(() => {
    const pane = document.querySelector("[data-trajectory-scroll]");
    if (pane instanceof HTMLElement) restoreScroll.current = pane.scrollTop;
  }, []);
  const setQueryDraftText = (0, import_react8.useCallback)((next) => {
    preserveScroll();
    setQueryDraft(next);
  }, [preserveScroll]);
  const commitQueryDraft = (0, import_react8.useCallback)((text) => {
    const words = tokenizeQuery(text);
    if (words.length === 0) return;
    preserveScroll();
    setQueryChips((current) => [...current, ...words.filter((word) => !current.includes(word))]);
    setQueryDraft("");
  }, [preserveScroll]);
  const removeQueryChip = (0, import_react8.useCallback)((raw) => {
    preserveScroll();
    setQueryChips((current) => current.filter((chip) => chip !== raw));
  }, [preserveScroll]);
  const clearQuery = (0, import_react8.useCallback)(() => {
    preserveScroll();
    const previousChips = queryChips;
    const previousDraft = queryDraft;
    if (previousChips.length === 0 && previousDraft.trim() === "") return;
    setQueryChips([]);
    setQueryDraft("");
    pushToast(qt("toast.cleared"), () => {
      setQueryChips(previousChips);
      setQueryDraft(previousDraft);
    });
  }, [preserveScroll, pushToast, qt, queryChips, queryDraft]);
  const toggleAllTurnsWithUndo = (0, import_react8.useCallback)(() => {
    const previous = collapsedTurns;
    const collapsed = !allTurnsCollapsed;
    toggleAllTurns();
    pushToast(qt(collapsed ? "toast.collapsedAll" : "toast.expandedAll"), () => setCollapsedTurns(previous));
  }, [allTurnsCollapsed, collapsedTurns, pushToast, qt, toggleAllTurns]);
  const loadEarlierHistory = (0, import_react8.useCallback)(async () => {
    if (!hasResidentOlderHistory && !await loadOlder()) return false;
    setHistoryNodeLimit((limit) => limit + HISTORY_PAGE_NODES);
    return true;
  }, [hasResidentOlderHistory, loadOlder]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: `${views_default.root} bt-trajectory-root`, "data-conversation-composer-overlay": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      QueryBar,
      {
        draft: queryDraft,
        chips: queryChipTokens,
        onDraft: setQueryDraftText,
        onCommit: commitQueryDraft,
        onRemoveChip: removeQueryChip,
        onClear: clearQuery,
        stats: {
          matched: matchedCells.size,
          hidden: query.active ? hiddenIndexes?.size ?? 0 : 0
        },
        totals: recordStats,
        whole: wholeSessionStats,
        tools: summarizeTools(toolIndex),
        turns: queryTurns,
        canGoBack: nav.index > 0,
        canGoForward: nav.index < nav.entries.length - 1,
        onBack: () => {
          navigateRecord(-1);
        },
        onForward: () => {
          navigateRecord(1);
        },
        showTime,
        onToggleTime: () => setShowTime((value) => !value),
        actualDuration,
        onActualDurationChange: (nextActualDuration) => {
          setActualDuration(nextActualDuration);
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
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      TrajectoryTimeline,
      {
        t,
        qt: typeof qt === "function" ? qt : (key) => key,
        turns: timelineTurns,
        mode: timelineMode,
        range: timelineRange,
        hasEarlierRecords: hasOlderHistory,
        onLoadEarlier: loadEarlierHistory,
        selectedIndex: selectedTimelineIndex,
        searchMatchIndexes: query.active ? matchedCells : null,
        onRangeChange: handleTimelineRangeChange,
        onRecordSelect: handleTimelineRecordSelect,
        onRecordFocus: handleTimelineRecordFocus
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: views_default.ledger, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
        callMeta,
        maxDurationMs,
        onShowAll: clearQuery,
        onSelectedIndexChange: setSelectedTimelineIndex,
        onRecordSelect: handleRecordSelect,
        recordSelection: timelineRecordSelection,
        recordFocus: timelineRecordFocus,
        historyLoading,
        olderHistoryLoading,
        historyStartSeq: historyBaseSeq,
        hasOlderRecords: hasOlderHistory,
        sessionEvents,
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
    toast !== null && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: toast.text }),
          toast.undo !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: views_default.toastAction, onClick: () => {
            toast.undo?.();
            dismissToast();
          }, children: qt("toast.undo") }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: views_default.toastClose, "aria-label": qt("toast.dismiss"), onClick: dismissToast, children: "\xD7" })
        ]
      }
    )
  ] });
}

// src/vendor/trajectory/theme.css
var theme_default = "/* Better Trajectory design tokens (docs/design-language.md). */\n.bt-trajectory-root {\n  --bt-surface: var(--dsw-alias-bg-layer-1, #ffffff);\n  /* bg-layer-2/3 are #fff in this theme, so they are useless as tints; use the\n     platform surface for raised blocks and the interactive tokens for states */\n  --bt-surface-2: var(--dsw-alias-bg-module-platform, #f6f7f9);\n  --bt-surface-3: color-mix(in srgb, var(--dsw-alias-label-primary, #1c2128) 8%, var(--bt-surface));\n  --bt-hover: var(--dsw-alias-interactive-bg-hover, rgba(16, 24, 40, 0.06));\n  --bt-active: var(--dsw-alias-interactive-bg-active, rgba(16, 24, 40, 0.1));\n  --bt-line: var(--dsw-alias-border-l2, #e6e8eb);\n  --bt-line-soft: var(--dsw-alias-border-l1, #f0f2f4);\n  --bt-text: var(--dsw-alias-label-primary, #1c2128);\n  --bt-text-2: var(--dsw-alias-label-secondary, #5b6470);\n  --bt-text-3: var(--dsw-alias-label-tertiary, #9aa1ab);\n  --bt-accent: var(--dsw-alias-brand-primary, #2563eb);\n  --bt-error: var(--dsw-alias-state-error-primary, #d92d20);\n  --bt-warn: #d97706;\n  --bt-ok: #12b76a;\n  --bt-error-soft: color-mix(in srgb, var(--bt-error) 8%, transparent);\n  --bt-warn-soft: color-mix(in srgb, var(--bt-warn) 10%, transparent);\n  --bt-accent-soft: color-mix(in srgb, var(--bt-accent) 8%, transparent);\n\n  --bt-dur-1: 60ms;\n  --bt-dur-2: 90ms;\n  --bt-dur-3: 120ms;\n  --bt-dur-4: 160ms;\n  --bt-dur-5: 220ms;\n  --bt-ease-out: cubic-bezier(.25, 1, .5, 1);\n  --bt-ease-std: cubic-bezier(.2, 0, 0, 1);\n  --bt-ease-exit: cubic-bezier(.4, 0, 1, 1);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt-trajectory-root {\n    --bt-dur-1: 0ms;\n    --bt-dur-2: 0ms;\n    --bt-dur-3: 0ms;\n    --bt-dur-4: 0ms;\n    --bt-dur-5: 0ms;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bt-trajectory-root,\n  .bt-trajectory-root * {\n    transition-duration: 0ms !important;\n    animation-duration: 0ms !important;\n  }\n}\n\n.bt-trajectory-root {\n  --bt-tool: #b45309;\n  --bt-assistant: #7c3aed;\n  --bt-user: #1d4ed8;\n  --bt-context: #047857;\n}\n\n@media (prefers-color-scheme: dark) {\n  .bt-trajectory-root {\n    --bt-tool: #f0b35a;\n    --bt-assistant: #b79cff;\n    --bt-user: #7aa7ff;\n    --bt-context: #5ed3a8;\n  }\n}\n";

// src/client/fork-view.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var NO_SUBSCRIBE = () => () => {
};
var NO_VALUE = () => void 0;
function useProjection(sessionId, key, read) {
  const face = typeof sessionId === "string" && read !== void 0 ? read(sessionId, key) : void 0;
  return (0, import_react9.useSyncExternalStore)(
    face === void 0 ? NO_SUBSCRIBE : (notify) => face.subscribe(notify),
    face === void 0 ? NO_VALUE : () => face.getSnapshot()
  );
}
var NO_EVENTS = [];
var EMPTY_CACHE = { entries: [], out: NO_EVENTS, window: void 0 };
function eventsOf(window2, cache) {
  if (cache.window === window2) return cache;
  const entries = typeof window2 === "object" && window2 !== null ? window2.entries : void 0;
  if (!Array.isArray(entries)) return { ...EMPTY_CACHE, window: window2 };
  const appended = cache.entries.length > 0 && entries.length >= cache.entries.length && entries[cache.entries.length - 1] === cache.entries[cache.entries.length - 1];
  const out = appended ? cache.out.slice() : [];
  for (let index = appended ? cache.entries.length : 0; index < entries.length; index += 1) {
    const entry = entries[index];
    if (typeof entry !== "object" || entry === null) continue;
    const event = entry.event;
    if (typeof event !== "object" || event === null) continue;
    const seq = event.seq;
    if (typeof seq !== "number") continue;
    out.push({ seq, transient: entry.type === "transient", value: event });
  }
  return { entries, out, window: window2 };
}
function useSessionEvents(sessionId, read) {
  const face = typeof sessionId === "string" && read !== void 0 ? read(sessionId) : void 0;
  const window2 = (0, import_react9.useSyncExternalStore)(
    face === void 0 ? NO_SUBSCRIBE : (listener) => face.subscribe(listener),
    face === void 0 ? NO_VALUE : () => face.getSnapshot()
  );
  const cache = (0, import_react9.useRef)(EMPTY_CACHE);
  return (0, import_react9.useMemo)(() => {
    cache.current = eventsOf(window2, cache.current);
    return cache.current.out;
  }, [window2]);
}
function numberField(value, field) {
  if (typeof value !== "object" || value === null) return 0;
  const raw = value[field];
  return typeof raw === "number" && Number.isFinite(raw) ? raw : 0;
}
function sessionStatsOf(value) {
  if (typeof value !== "object" || value === null) return void 0;
  const stats = {
    turns: numberField(value, "turns"),
    steps: numberField(value, "steps"),
    llmMs: numberField(value, "llmMs"),
    toolMs: numberField(value, "toolMs")
  };
  return stats.turns === 0 && stats.steps === 0 ? void 0 : stats;
}
var themeInstalled = false;
function installTheme() {
  if (themeInstalled || typeof document === "undefined") return;
  themeInstalled = true;
  const style = document.createElement("style");
  style.setAttribute("data-bt-theme", "");
  style.textContent = theme_default;
  document.head.appendChild(style);
}
function ForkView({ qt, projectionFace, eventFace, ...rest }) {
  installTheme();
  const stats = sessionStatsOf(useProjection(rest.sessionId, "sessionStats", projectionFace));
  const events = useSessionEvents(rest.sessionId, eventFace);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TrajectoryView, { ...rest, qt, sessionStats: stats, sessionEvents: events });
}

// src/client/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var inject = ["slots", "locale", "sessions"];
var name = "dsh-better-trajectory-client";
var NATIVE_VIEW_ID = "trajectory";
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "better-trajectory: dictionaries");
  const t = ctx.locale.bind(NS);
  let replaced;
  let original;
  const projectionFace = (sessionId, key) => ctx.sessions?.binding(sessionId)?.session?.projections?.faceOf(key);
  const eventFace = (sessionId) => ctx.sessions?.binding(sessionId)?.eventSource;
  const Wrapped = (props) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ForkView, { ...props, qt: t, projectionFace, eventFace });
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
