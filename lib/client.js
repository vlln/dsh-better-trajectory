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
  "filter.clear": "\u6E05\u9664\u7B5B\u9009"
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
  "filter.clear": "Clear filters"
};

// src/client/superset.tsx
var import_react = require("react");

// src/client/filter.mjs
function emptyFilters() {
  return { tools: [], status: "all", turn: null };
}
function isActive(filters) {
  return filters.tools.length > 0 || filters.status !== "all" || filters.turn !== null;
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
    const record = {
      callId,
      name: name2,
      status,
      depth,
      ...turn === void 0 ? {} : { turn },
      ...step === void 0 ? {} : { step },
      ...parentCallId === void 0 ? {} : { parentCallId }
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
        ...typeof node.step === "number" ? { step: node.step } : {}
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
        ...typeof partial.turn === "number" ? { turn: partial.turn } : {}
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
  return true;
}
function collectStats(index, filters) {
  const toolCounts = /* @__PURE__ */ new Map();
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
    if (toolsOk && turnOk) {
      if (isErrorStatus(record.status)) errors += 1;
      if (record.status === "running") running += 1;
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
    turns: [...turnCounts.entries()].map(([turn, count]) => ({ turn, count })).sort((left, right) => left.turn - right.turn)
  };
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
function IconFilter(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 3.5h11L9.5 8v4l-3 1V8L2.5 3.5Z" }) });
}

// src/client/superset.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
      turn: typeof value.turn === "number" ? value.turn : null
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
      const value = (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
      return selector(value);
    };
  }
  return result;
}
function usePopover(open, close) {
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
function NativeImages({ images, align, loadImage, imagesApi, useContextMenu }) {
  if (imagesApi !== void 0 && imagesApi.entry !== void 0 && imagesApi.factory !== void 0 && useContextMenu !== void 0) {
    const Images = imagesApi.entry;
    const Factory = imagesApi.factory;
    const renderFactorySlot = (name2, props) => {
      if (name2 !== "conversation.images.content" || Factory === void 0) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Factory,
        {
          ...props,
          ...imagesApi.injected,
          t: imagesApi.t,
          ...useContextMenu === void 0 ? {} : { useContextMenu }
        }
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Images,
      {
        images,
        align,
        loadImage,
        renderFactorySlot
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-images", "data-align": align ?? "start", children: (images ?? []).map((source, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(NativeImage, { source, loadImage }, `${index}`)) });
}
function NativeImage({ source, loadImage }) {
  const preview = source?.preview?.url;
  const attachment = source?.attachment;
  const [url, setUrl] = (0, import_react.useState)(() => {
    if (typeof preview === "string") return preview;
    if (attachment !== void 0) return loadImage?.peek?.(attachment);
    return void 0;
  });
  const [failed, setFailed] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
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
  if (failed) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-image-fallback", children: "image" });
  if (url === void 0) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-image-fallback", children: "\u2026" });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      type: "button",
      className: "bts-image",
      title: source?.label ?? source?.preview?.name,
      onClick: () => window.open(url, "_blank", "noopener"),
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: url, alt: source?.label ?? source?.preview?.name ?? "" })
    }
  );
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
  const [filters, setFilters] = (0, import_react.useState)(() => loadFilters(sessionId));
  const [toolMenu, setToolMenu] = (0, import_react.useState)(false);
  const [toolSearch, setToolSearch] = (0, import_react.useState)("");
  const toolSearchRef = (0, import_react.useRef)(null);
  const full = useTrajectory ? useTrajectory((snapshot) => snapshot) : void 0;
  const index = (0, import_react.useMemo)(() => buildToolIndex(full), [full]);
  const stats = (0, import_react.useMemo)(() => collectStats(index, filters), [index, filters]);
  const filtered = (0, import_react.useMemo)(
    () => filterSnapshot(full, filters, index),
    [full, filters, index]
  );
  const native = (0, import_react.useMemo)(() => getNative?.(), [getNative, sessionId]);
  const imagesApi = (0, import_react.useMemo)(() => getImages?.(), [getImages, sessionId]);
  const injected = (0, import_react.useMemo)(
    () => native === void 0 ? {} : native.inject(sessionId ?? ""),
    [native?.component, sessionId]
  );
  const mapped = (0, import_react.useMemo)(() => mapInjected(injected), [injected]);
  const filteredHook = (0, import_react.useCallback)(
    (selector) => selector(filtered),
    [filtered]
  );
  const renderNativeSlot = (0, import_react.useCallback)((name2, owner) => {
    if (name2 !== "conversation.trajectory.images") return null;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      NativeImages,
      {
        ...owner,
        imagesApi,
        useContextMenu: rest.useContextMenu
      }
    );
  }, [imagesApi, rest]);
  const closeToolMenu = (0, import_react.useCallback)(() => setToolMenu(false), []);
  const toolPopRef = usePopover(toolMenu, closeToolMenu);
  (0, import_react.useEffect)(() => {
    saveFilters(sessionId, filters);
  }, [sessionId, filters]);
  (0, import_react.useEffect)(() => {
    if (!toolMenu) {
      setToolSearch("");
      return;
    }
    const timer = window.setTimeout(() => toolSearchRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [toolMenu]);
  const active = isActive(filters);
  const toolOptions = (0, import_react.useMemo)(() => {
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
  if (full === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: translate("view.missingHook.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: translate("view.missingHook.body") })
    ] }) });
  }
  if (native === void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: translate("view.missingNative.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: translate("view.missingNative.body") })
    ] }) });
  }
  const Native = native.component;
  const summaryKey = "filter.summary";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-root", "data-dsh-better-trajectory-view": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-bar", role: "toolbar", "aria-label": translate("filter.aria"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "bts-lead", title: translate("filter.scopeHint"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconFilter, { size: 12 }),
        translate("filter.lead")
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-segment", role: "group", "aria-label": translate("filter.status.aria"), children: [
        ["all", translate("filter.status.all"), void 0],
        ["error", translate("filter.status.error"), stats.errors],
        ["running", translate("filter.status.running"), stats.running]
      ].map(([value, label, count]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          "aria-pressed": filters.status === value,
          "data-empty": count === 0 ? "true" : void 0,
          "data-tone": value === "error" ? "error" : void 0,
          onClick: () => setFilters((previous) => ({ ...previous, status: value })),
          children: [
            label,
            count !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-count", children: count }) : null
          ]
        },
        value
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-pop-wrap", ref: toolPopRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            className: "bts-button",
            "data-active": filters.tools.length > 0 || void 0,
            "aria-haspopup": "dialog",
            "aria-expanded": toolMenu,
            onClick: () => setToolMenu((open) => !open),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconFilter, { size: 11 }),
              filters.tools.length === 0 ? translate("filter.tools") : translate("filter.tools.selected", { count: filters.tools.length }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconChevron, { size: 10 })
            ]
          }
        ),
        toolMenu ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-pop", "data-align": "right", role: "dialog", "aria-label": translate("filter.tools.aria"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-pop-title", children: translate("filter.tools.title") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bts-pop-search", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconSearch, { size: 11 }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-pop-list", children: toolOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-pop-title", children: translate("filter.tools.empty") }) : toolOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              type: "button",
              className: "bts-pop-item",
              "aria-pressed": filters.tools.includes(option.name),
              onClick: () => toggleTool(option.name),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-check", "data-checked": filters.tools.includes(option.name) || void 0, children: "\u2713" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-pop-name", title: option.name, children: option.name }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-pop-count", children: option.count })
              ]
            },
            option.name
          )) }),
          filters.tools.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-pop-footer", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: translate("filter.turn.all") }),
            stats.turns.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: String(item.turn), children: translate("filter.turn.option", { turn: item.turn, count: item.count }) }, item.turn))
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-spacer" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "bts-summary", title: translate("filter.scopeHint"), children: translate(summaryKey, { matched: stats.matched, total: stats.total }) }),
      active ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "bts-button", onClick: clear, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconClose, { size: 11 }),
        translate("filter.clear")
      ] }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bts-native", "data-trajectory-superset": "", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Native,
      {
        ...rest,
        ...mapped,
        sessionId,
        t: nativeT,
        useTrajectory: filteredHook,
        renderSlot: renderNativeSlot
      }
    ) })
  ] });
}

// src/client/styles.css
var styles_default = "/* Better Trajectory\uFF1A\u539F\u751F\u8F68\u8FF9\u4E0A\u65B9\u7684\u4E00\u6761\u7B5B\u9009\u680F\uFF0C\u5176\u4F59\u6837\u5F0F\u5168\u90E8\u6765\u81EA\u539F\u751F\u89C6\u56FE\u3002 */\n\n.bts-root {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  isolation: isolate;\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bts-bar {\n  position: relative;\n  z-index: 8;\n  display: flex;\n  flex: none;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 4px 6px;\n  box-sizing: border-box;\n  min-height: 32px;\n  padding: 3px 8px;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n  background: var(--dsw-alias-bg-layer-1);\n}\n\n.bts-lead {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 4px;\n  padding-right: 2px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n}\n\n.bts-segment {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n}\n\n.bts-segment button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 22px;\n  padding: 0 8px;\n  border: 0;\n  border-radius: calc(var(--dsw-radius-sm) - 2px);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.bts-segment button[aria-pressed='true'] {\n  background: var(--dsw-alias-bg-layer-1);\n  box-shadow: var(--dsw-elevation-stroke);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-segment button[data-empty='true'] {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.bts-count {\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n\n.bts-segment button[aria-pressed='true'] .bts-count {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.bts-button {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  height: 26px;\n  padding: 0 8px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.bts-button:hover {\n  border-color: var(--dsw-alias-border-l4);\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-button[data-active='true'] {\n  border-color: var(--dsw-alias-border-l4);\n  background: var(--dsw-alias-interactive-bg-active);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-button:focus-visible,\n.bts-segment button:focus-visible,\n.bts-select:focus-visible,\n.bts-pop-item:focus-visible,\n.bts-image:focus-visible,\n.bts-link:focus-visible {\n  outline: 1px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: 1px;\n}\n\n.bts-select {\n  flex: none;\n  max-width: 160px;\n  height: 26px;\n  padding: 0 22px 0 8px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background-color: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: var(--dsw-font-xxs-12);\n  cursor: pointer;\n}\n\n.bts-select:hover {\n  border-color: var(--dsw-alias-border-l4);\n  color: var(--dsw-alias-label-primary);\n}\n\n.bts-spacer {\n  flex: 1 1 auto;\n  min-width: 4px;\n}\n\n.bts-summary {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxs-12);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.bts-pop-wrap {\n  position: relative;\n  display: inline-flex;\n  flex: none;\n}\n\n.bts-pop {\n  position: absolute;\n  top: calc(100% + 6px);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  width: 278px;\n  max-width: min(86vw, 340px);\n  max-height: 360px;\n  padding: 6px;\n  overflow: hidden;\n  border-radius: var(--dsw-radius-lg);\n  background: var(--dsw-specific-menu);\n  backdrop-filter: var(--dsw-menu-backdrop-filter);\n  box-shadow: var(--dsw-elevation-panel);\n}\n\n.bts-pop[data-align='right'] {\n  right: 0;\n  left: auto;\n}\n\n.bts-pop-title {\n  padding: 2px 6px 6px;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxxs-11);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.bts-pop-search {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  margin-bottom: 4px;\n  padding: 0 7px;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-specific-input-major);\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.bts-pop-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xxs-12);\n}\n\n.bts-pop-list {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) transparent;\n}\n\n.bts-pop-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  height: 28px;\n  padding: 0 7px;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: var(--dsw-font-xxs-12);\n  text-align: left;\n  cursor: pointer;\n}\n\n.bts-pop-item:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.bts-check {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: 4px;\n  color: transparent;\n  font-size: 10px;\n  line-height: 1;\n}\n\n.bts-check[data-checked='true'] {\n  border-color: transparent;\n  background: var(--dsw-alias-button-primary-fill);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.bts-pop-name {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: var(--ds-font-family-code, SFMono-Regular, Menlo, monospace);\n  font-size: 11px;\n}\n\n.bts-pop-count {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-variant-numeric: tabular-nums;\n}\n\n.bts-pop-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 4px;\n  border-top: 0.5px solid var(--dsw-alias-border-l2);\n}\n\n.bts-link {\n  padding: 4px 6px;\n  border: 0;\n  border-radius: var(--dsw-radius-xs);\n  background: transparent;\n  color: var(--dsw-alias-link);\n  font: var(--dsw-font-xxs-12);\n  cursor: pointer;\n}\n\n.bts-link:hover {\n  text-decoration: underline dotted;\n  text-underline-offset: 3px;\n}\n\n.bts-native {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.bts-native > * {\n  height: 100%;\n}\n\n.bts-empty {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px;\n  text-align: center;\n}\n\n.bts-empty h2 {\n  margin: 0;\n  font: var(--dsw-font-strong-14);\n}\n\n.bts-empty p {\n  max-width: 420px;\n  margin: 0;\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xs-13);\n}\n\n/* \u539F\u751F image \u5B50\u69FD\u7684\u8F7B\u91CF\u7F29\u7565\u56FE\uFF1B\u539F\u751F\u706F\u7BB1/\u62D6\u62FD\u4E0D\u5728\u6B64\u5B9E\u73B0\u3002 */\n.bts-images {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin: 4px 0;\n}\n\n.bts-images[data-align='end'] {\n  justify-content: flex-end;\n}\n\n.bts-image {\n  width: 64px;\n  height: 64px;\n  padding: 0;\n  overflow: hidden;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n  cursor: zoom-in;\n}\n\n.bts-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.bts-image-fallback {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-layer-2);\n  color: var(--dsw-alias-label-tertiary);\n  font: var(--dsw-font-xxxs-11);\n}\n\n@media (max-width: 760px) {\n  .bts-lead {\n    display: none;\n  }\n\n  .bts-summary {\n    display: none;\n  }\n\n  .bts-bar {\n    padding-right: 6px;\n    padding-left: 6px;\n  }\n}\n\n.bts-segment button[data-tone='error'] .bts-count {\n  color: var(--dsw-alias-state-error-primary);\n}\n";

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
