(function () {
	'use strict';

	try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode("/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {\n    *, :before, :after, ::backdrop {\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n    }\n  }\n}\n\n@layer theme {\n  :root, :host {\n    --font-sans: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n    --color-blue-700: oklch(48.8% .243 264.376);\n    --spacing: .25rem;\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n\n@layer base {\n  *, :after, :before, ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  b, strong {\n    font-weight: bolder;\n  }\n\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub, sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  ol, ul, menu {\n    list-style: none;\n  }\n\n  img, svg, video, canvas, audio, iframe, embed, object {\n    vertical-align: middle;\n    display: block;\n  }\n\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  button, input, select, optgroup, textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  @supports (not ((-webkit-appearance: -apple-pay-button))) or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  button, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]) {\n    appearance: button;\n  }\n\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n}\n\n@layer components;\n\n@layer utilities {\n  .absolute {\n    position: absolute;\n  }\n\n  .relative {\n    position: relative;\n  }\n\n  .h-full {\n    height: 100%;\n  }\n\n  .min-h-15 {\n    min-height: calc(var(--spacing) * 15);\n  }\n\n  .w-full {\n    width: 100%;\n  }\n\n  .transform {\n    transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, );\n  }\n\n  .bg-\\[\\#ff0000\\] {\n    background-color: red;\n  }\n\n  .text-blue-700 {\n    color: var(--color-blue-700);\n  }\n\n  .opacity-25 {\n    opacity: .25;\n  }\n}\n\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false\n}"));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}

})();
const IS_DEV$1 = false;
let runEffects$1 = runQueue$1;
const STALE$1 = 1;
const PENDING$1 = 2;
const UNOWNED$1 = {
  };
var Owner$1 = null;
let Transition$1 = null;
let ExternalSourceConfig$1 = null;
let Listener$1 = null;
let Updates$1 = null;
let Effects$1 = null;
let ExecCount$1 = 0;
function createRenderEffect$1(fn, value, options) {
  const c = createComputation$1(fn, value, false, STALE$1);
  updateComputation$1(c);
}
function untrack$1(fn) {
  if (Listener$1 === null) return fn();
  const listener = Listener$1;
  Listener$1 = null;
  try {
    if (ExternalSourceConfig$1) ;
    return fn();
  } finally {
    Listener$1 = listener;
  }
}
function writeSignal$1(node, value, isComp) {
  let current = node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates$1(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition$1 && Transition$1.running;
          if (TransitionRunning && Transition$1.disposed.has(o)) ;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure) Updates$1.push(o);else Effects$1.push(o);
            if (o.observers) markDownstream$1(o);
          }
          if (!TransitionRunning) o.state = STALE$1;
        }
        if (Updates$1.length > 10e5) {
          Updates$1 = [];
          if (IS_DEV$1) ;
          throw new Error();
        }
      });
    }
  }
  return value;
}
function updateComputation$1(node) {
  if (!node.fn) return;
  cleanNode$1(node);
  const time = ExecCount$1;
  runComputation$1(node, node.value, time);
}
function runComputation$1(node, value, time) {
  let nextValue;
  const owner = Owner$1,
    listener = Listener$1;
  Listener$1 = Owner$1 = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      {
        node.state = STALE$1;
        node.owned && node.owned.forEach(cleanNode$1);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError$1(err);
  } finally {
    Listener$1 = listener;
    Owner$1 = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal$1(node, nextValue);
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation$1(fn, init, pure, state = STALE$1, options) {
  const c = {
    fn,
    state: state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner$1,
    context: Owner$1 ? Owner$1.context : null,
    pure
  };
  if (Owner$1 === null) ;else if (Owner$1 !== UNOWNED$1) {
    {
      if (!Owner$1.owned) Owner$1.owned = [c];else Owner$1.owned.push(c);
    }
  }
  return c;
}
function runTop$1(node) {
  if ((node.state) === 0) return;
  if ((node.state) === PENDING$1) return lookUpstream$1(node);
  if (node.suspense && untrack$1(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount$1)) {
    if (node.state) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if ((node.state) === STALE$1) {
      updateComputation$1(node);
    } else if ((node.state) === PENDING$1) {
      const updates = Updates$1;
      Updates$1 = null;
      runUpdates$1(() => lookUpstream$1(node, ancestors[0]));
      Updates$1 = updates;
    }
  }
}
function runUpdates$1(fn, init) {
  if (Updates$1) return fn();
  let wait = false;
  Updates$1 = [];
  if (Effects$1) wait = true;else Effects$1 = [];
  ExecCount$1++;
  try {
    const res = fn();
    completeUpdates$1(wait);
    return res;
  } catch (err) {
    if (!wait) Effects$1 = null;
    Updates$1 = null;
    handleError$1(err);
  }
}
function completeUpdates$1(wait) {
  if (Updates$1) {
    runQueue$1(Updates$1);
    Updates$1 = null;
  }
  if (wait) return;
  const e = Effects$1;
  Effects$1 = null;
  if (e.length) runUpdates$1(() => runEffects$1(e));
}
function runQueue$1(queue) {
  for (let i = 0; i < queue.length; i++) runTop$1(queue[i]);
}
function lookUpstream$1(node, ignore) {
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = source.state;
      if (state === STALE$1) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount$1)) runTop$1(source);
      } else if (state === PENDING$1) lookUpstream$1(source, ignore);
    }
  }
}
function markDownstream$1(node) {
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state) {
      o.state = PENDING$1;
      if (o.pure) Updates$1.push(o);else Effects$1.push(o);
      o.observers && markDownstream$1(o);
    }
  }
}
function cleanNode$1(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
        index = node.sourceSlots.pop(),
        obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(),
          s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.tOwned) {
    for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode$1(node.tOwned[i]);
    delete node.tOwned;
  }
  if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--) cleanNode$1(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
    node.cleanups = null;
  }
  node.state = 0;
}
function castError$1(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function handleError$1(err, owner = Owner$1) {
  const error = castError$1(err);
  throw error;
}
function createComponent$1(Comp, props) {
  return untrack$1(() => Comp(props || {}));
}

function reconcileArrays$1(parentNode, a, b) {
  let bLength = b.length,
    aEnd = a.length,
    bEnd = bLength,
    aStart = 0,
    bStart = 0,
    after = a[aEnd - 1].nextSibling,
    map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart,
            sequence = 1,
            t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else a[aStart++].remove();
    }
  }
}
function template$1(html, isImportNode, isSVG, isMathML) {
  let node;
  const create = () => {
    const t = document.createElement("template");
    t.innerHTML = html;
    return t.content.firstChild;
  };
  const fn = () => (node || (node = create())).cloneNode(true);
  fn.cloneNode = fn;
  return fn;
}
function use$1(fn, element, arg) {
  return untrack$1(() => fn(element, arg));
}
function insert$1(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression$1(parent, accessor, initial, marker);
  createRenderEffect$1(current => insertExpression$1(parent, accessor(), current, marker), initial);
}
function insertExpression$1(parent, value, current, marker, unwrapArray) {
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value,
    multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number") {
      value = value.toString();
      if (value === current) return current;
    }
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data !== value && (node.data = value);
      } else node = document.createTextNode(value);
      current = cleanChildren$1(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    current = cleanChildren$1(parent, current, marker);
  } else if (t === "function") {
    createRenderEffect$1(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression$1(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    const currentArray = current && Array.isArray(current);
    if (normalizeIncomingArray$1(array, value, current, unwrapArray)) {
      createRenderEffect$1(() => current = insertExpression$1(parent, array, current, marker, true));
      return () => current;
    }
    if (array.length === 0) {
      current = cleanChildren$1(parent, current, marker);
      if (multi) return current;
    } else if (currentArray) {
      if (current.length === 0) {
        appendNodes$1(parent, array, marker);
      } else reconcileArrays$1(parent, current, array);
    } else {
      current && cleanChildren$1(parent);
      appendNodes$1(parent, array);
    }
    current = array;
  } else if (value.nodeType) {
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren$1(parent, current, marker, value);
      cleanChildren$1(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else ;
  return current;
}
function normalizeIncomingArray$1(normalized, array, current, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
      prev = current && current[normalized.length],
      t;
    if (item == null || item === true || item === false) ; else if ((t = typeof item) === "object" && item.nodeType) {
      normalized.push(item);
    } else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray$1(normalized, item, prev) || dynamic;
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray$1(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else {
      const value = String(item);
      if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);else normalized.push(document.createTextNode(value));
    }
  }
  return dynamic;
}
function appendNodes$1(parent, array, marker = null) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren$1(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}

const IS_DEV = false;
const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const SUPPORTS_PROXY = typeof Proxy === "function";
const $TRACK = Symbol("solid-track");
const signalOptions = {
  equals: equalFn
};
let runEffects = runQueue;
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
let Transition = null;
let ExternalSourceConfig = null;
let Listener = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
  const listener = Listener,
    owner = Owner,
    unowned = fn.length === 0,
    current = owner ,
    root = unowned ? UNOWNED : {
      owned: null,
      cleanups: null,
      context: current ? current.context : null,
      owner: current
    },
    updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || undefined
  };
  const setter = value => {
    if (typeof value === "function") {
      value = value(s.value);
    }
    return writeSignal(s, value);
  };
  return [readSignal.bind(s), setter];
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE);
  if (!options || !options.render) c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || undefined;
  updateComputation(c);
  return readSignal.bind(c);
}
function batch(fn) {
  return runUpdates(fn, false);
}
function untrack(fn) {
  if (Listener === null) return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig) ;
    return fn();
  } finally {
    Listener = listener;
  }
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  return fn;
}
function getListener() {
  return Listener;
}
function getOwner() {
  return Owner;
}
function runWithOwner(o, fn) {
  const prev = Owner;
  const prevListener = Listener;
  Owner = o;
  Listener = null;
  try {
    return runUpdates(fn, true);
  } catch (err) {
    handleError(err);
  } finally {
    Owner = prev;
    Listener = prevListener;
  }
}
function createContext(defaultValue, options) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  let value;
  return Owner && Owner.context && (value = Owner.context[context.id]) !== undefined ? value : context.defaultValue;
}
function children(fn) {
  const children = createMemo(fn);
  const memo = createMemo(() => resolveChildren(children()));
  memo.toArray = () => {
    const c = memo();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo;
}
function readSignal() {
  if (this.sources && (this.state)) {
    if ((this.state) === STALE) updateComputation(this);else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o)) ;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure) Updates.push(o);else Effects.push(o);
            if (o.observers) markDownstream(o);
          }
          if (!TransitionRunning) o.state = STALE;
        }
        if (Updates.length > 10e5) {
          Updates = [];
          if (IS_DEV) ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(node, node.value, time);
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner,
    listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue);
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state: state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Owner === null) ;else if (Owner !== UNOWNED) {
    {
      if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
    }
  }
  return c;
}
function runTop(node) {
  if ((node.state) === 0) return;
  if ((node.state) === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (node.state) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if ((node.state) === STALE) {
      updateComputation(node);
    } else if ((node.state) === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;else Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait) Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  const e = Effects;
  Effects = null;
  if (e.length) runUpdates(() => runEffects(e), false);
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function runUserEffects(queue) {
  let i,
    userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);else queue[userLength++] = e;
  }
  for (i = 0; i < userLength; i++) runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
      } else if (state === PENDING) lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state) {
      o.state = PENDING;
      if (o.pure) Updates.push(o);else Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
        index = node.sourceSlots.pop(),
        obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(),
          s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.tOwned) {
    for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
    delete node.tOwned;
  }
  if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
    node.cleanups = null;
  }
  node.state = 0;
}
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function handleError(err, owner = Owner) {
  const error = castError(err);
  throw error;
}
function resolveChildren(children) {
  if (typeof children === "function" && !children.length) return resolveChildren(children());
  if (Array.isArray(children)) {
    const results = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children;
}
function createProvider(id, options) {
  return function provider(props) {
    let res;
    createRenderEffect(() => res = untrack(() => {
      Owner.context = {
        ...Owner.context,
        [id]: props.value
      };
      return children(() => props.children);
    }), undefined);
    return res;
  };
}
function createComponent(Comp, props) {
  return untrack(() => Comp(props || {}));
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    if (property === $PROXY) return true;
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return !(s = typeof s === "function" ? s() : s) ? {} : s;
}
function resolveSources() {
  for (let i = 0, length = this.length; i < length; ++i) {
    const v = this[i]();
    if (v !== undefined) return v;
  }
}
function mergeProps(...sources) {
  let proxy = false;
  for (let i = 0; i < sources.length; i++) {
    const s = sources[i];
    proxy = proxy || !!s && $PROXY in s;
    sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
  }
  if (SUPPORTS_PROXY && proxy) {
    return new Proxy({
      get(property) {
        for (let i = sources.length - 1; i >= 0; i--) {
          const v = resolveSource(sources[i])[property];
          if (v !== undefined) return v;
        }
      },
      has(property) {
        for (let i = sources.length - 1; i >= 0; i--) {
          if (property in resolveSource(sources[i])) return true;
        }
        return false;
      },
      keys() {
        const keys = [];
        for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
        return [...new Set(keys)];
      }
    }, propTraps);
  }
  const sourcesMap = {};
  const defined = Object.create(null);
  for (let i = sources.length - 1; i >= 0; i--) {
    const source = sources[i];
    if (!source) continue;
    const sourceKeys = Object.getOwnPropertyNames(source);
    for (let i = sourceKeys.length - 1; i >= 0; i--) {
      const key = sourceKeys[i];
      if (key === "__proto__" || key === "constructor") continue;
      const desc = Object.getOwnPropertyDescriptor(source, key);
      if (!defined[key]) {
        defined[key] = desc.get ? {
          enumerable: true,
          configurable: true,
          get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
        } : desc.value !== undefined ? desc : undefined;
      } else {
        const sources = sourcesMap[key];
        if (sources) {
          if (desc.get) sources.push(desc.get.bind(source));else if (desc.value !== undefined) sources.push(() => desc.value);
        }
      }
    }
  }
  const target = {};
  const definedKeys = Object.keys(defined);
  for (let i = definedKeys.length - 1; i >= 0; i--) {
    const key = definedKeys[i],
      desc = defined[key];
    if (desc && desc.get) Object.defineProperty(target, key, desc);else target[key] = desc ? desc.value : undefined;
  }
  return target;
}

const narrowedError = name => `Stale read from <${name}>.`;
function Show(props) {
  const keyed = props.keyed;
  const conditionValue = createMemo(() => props.when, undefined, undefined);
  const condition = keyed ? conditionValue : createMemo(conditionValue, undefined, {
    equals: (a, b) => !a === !b
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      const fn = typeof child === "function" && child.length > 0;
      return fn ? untrack(() => child(keyed ? c : () => {
        if (!untrack(condition)) throw narrowedError("Show");
        return conditionValue();
      })) : child;
    }
    return props.fallback;
  }, undefined, undefined);
}

const memo = fn => createMemo(() => fn());

function reconcileArrays(parentNode, a, b) {
  let bLength = b.length,
    aEnd = a.length,
    bEnd = bLength,
    aStart = 0,
    bStart = 0,
    after = a[aEnd - 1].nextSibling,
    map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart,
            sequence = 1,
            t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else a[aStart++].remove();
    }
  }
}
function template(html, isImportNode, isSVG, isMathML) {
  let node;
  const create = () => {
    const t = document.createElement("template");
    t.innerHTML = html;
    return t.content.firstChild;
  };
  const fn = () => (node || (node = create())).cloneNode(true);
  fn.cloneNode = fn;
  return fn;
}
function setAttribute(node, name, value) {
  node.removeAttribute(name);
}
function className(node, value) {
  if (value == null) node.removeAttribute("class");else node.className = value;
}
function style(node, value, prev) {
  if (!value) return prev ? setAttribute(node, "style") : value;
  const nodeStyle = node.style;
  if (typeof value === "string") return nodeStyle.cssText = value;
  typeof prev === "string" && (nodeStyle.cssText = prev = undefined);
  prev || (prev = {});
  value || (value = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function use(fn, element, arg) {
  return untrack(() => fn(element, arg));
}
function insert(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value,
    multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number") {
      value = value.toString();
      if (value === current) return current;
    }
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data !== value && (node.data = value);
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    createRenderEffect(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    const currentArray = current && Array.isArray(current);
    if (normalizeIncomingArray(array, value, current, unwrapArray)) {
      createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else if (currentArray) {
      if (current.length === 0) {
        appendNodes(parent, array, marker);
      } else reconcileArrays(parent, current, array);
    } else {
      current && cleanChildren(parent);
      appendNodes(parent, array);
    }
    current = array;
  } else if (value.nodeType) {
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else ;
  return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
      prev = current && current[normalized.length],
      t;
    if (item == null || item === true || item === false) ; else if ((t = typeof item) === "object" && item.nodeType) {
      normalized.push(item);
    } else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else {
      const value = String(item);
      if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);else normalized.push(document.createTextNode(value));
    }
  }
  return dynamic;
}
function appendNodes(parent, array, marker = null) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
  return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
function Portal(props) {
  const {
      useShadow
    } = props,
    marker = document.createTextNode(""),
    mount = () => props.mount || document.body,
    owner = getOwner();
  let content;
  createEffect(() => {
    content || (content = runWithOwner(owner, () => createMemo(() => props.children)));
    const el = mount();
    if (el instanceof HTMLHeadElement) {
      const [clean, setClean] = createSignal(false);
      const cleanup = () => setClean(true);
      createRoot(dispose => insert(el, () => !clean() ? content() : dispose(), null));
      onCleanup(cleanup);
    } else {
      const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
        renderRoot = useShadow && container.attachShadow ? container.attachShadow({
          mode: "open"
        }) : container;
      Object.defineProperty(container, "_$host", {
        get() {
          return marker.parentNode;
        },
        configurable: true
      });
      insert(renderRoot, content);
      el.appendChild(container);
      props.ref && props.ref(container);
      onCleanup(() => el.removeChild(container));
    }
  }, undefined, {
    render: true
  });
  return marker;
}

const $RAW = Symbol("store-raw"),
  $NODE = Symbol("store-node"),
  $HAS = Symbol("store-has"),
  $SELF = Symbol("store-self");
function wrap$1(value) {
  let p = value[$PROXY];
  if (!p) {
    Object.defineProperty(value, $PROXY, {
      value: p = new Proxy(value, proxyTraps$1)
    });
    if (!Array.isArray(value)) {
      const keys = Object.keys(value),
        desc = Object.getOwnPropertyDescriptors(value);
      for (let i = 0, l = keys.length; i < l; i++) {
        const prop = keys[i];
        if (desc[prop].get) {
          Object.defineProperty(value, prop, {
            enumerable: desc[prop].enumerable,
            get: desc[prop].get.bind(p)
          });
        }
      }
    }
  }
  return p;
}
function isWrappable(obj) {
  let proto;
  return obj != null && typeof obj === "object" && (obj[$PROXY] || !(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype || Array.isArray(obj));
}
function unwrap(item, set = new Set()) {
  let result, unwrapped, v, prop;
  if (result = item != null && item[$RAW]) return result;
  if (!isWrappable(item) || set.has(item)) return item;
  if (Array.isArray(item)) {
    if (Object.isFrozen(item)) item = item.slice(0);else set.add(item);
    for (let i = 0, l = item.length; i < l; i++) {
      v = item[i];
      if ((unwrapped = unwrap(v, set)) !== v) item[i] = unwrapped;
    }
  } else {
    if (Object.isFrozen(item)) item = Object.assign({}, item);else set.add(item);
    const keys = Object.keys(item),
      desc = Object.getOwnPropertyDescriptors(item);
    for (let i = 0, l = keys.length; i < l; i++) {
      prop = keys[i];
      if (desc[prop].get) continue;
      v = item[prop];
      if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
    }
  }
  return item;
}
function getNodes(target, symbol) {
  let nodes = target[symbol];
  if (!nodes) Object.defineProperty(target, symbol, {
    value: nodes = Object.create(null)
  });
  return nodes;
}
function getNode(nodes, property, value) {
  if (nodes[property]) return nodes[property];
  const [s, set] = createSignal(value, {
    equals: false,
    internal: true
  });
  s.$ = set;
  return nodes[property] = s;
}
function proxyDescriptor$1(target, property) {
  const desc = Reflect.getOwnPropertyDescriptor(target, property);
  if (!desc || desc.get || !desc.configurable || property === $PROXY || property === $NODE) return desc;
  delete desc.value;
  delete desc.writable;
  desc.get = () => target[$PROXY][property];
  return desc;
}
function trackSelf(target) {
  getListener() && getNode(getNodes(target, $NODE), $SELF)();
}
function ownKeys(target) {
  trackSelf(target);
  return Reflect.ownKeys(target);
}
const proxyTraps$1 = {
  get(target, property, receiver) {
    if (property === $RAW) return target;
    if (property === $PROXY) return receiver;
    if (property === $TRACK) {
      trackSelf(target);
      return receiver;
    }
    const nodes = getNodes(target, $NODE);
    const tracked = nodes[property];
    let value = tracked ? tracked() : target[property];
    if (property === $NODE || property === $HAS || property === "__proto__") return value;
    if (!tracked) {
      const desc = Object.getOwnPropertyDescriptor(target, property);
      if (getListener() && (typeof value !== "function" || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getNode(nodes, property, value)();
    }
    return isWrappable(value) ? wrap$1(value) : value;
  },
  has(target, property) {
    if (property === $RAW || property === $PROXY || property === $TRACK || property === $NODE || property === $HAS || property === "__proto__") return true;
    getListener() && getNode(getNodes(target, $HAS), property)();
    return property in target;
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: ownKeys,
  getOwnPropertyDescriptor: proxyDescriptor$1
};
function setProperty(state, property, value, deleting = false) {
  if (!deleting && state[property] === value) return;
  const prev = state[property],
    len = state.length;
  if (value === undefined) {
    delete state[property];
    if (state[$HAS] && state[$HAS][property] && prev !== undefined) state[$HAS][property].$();
  } else {
    state[property] = value;
    if (state[$HAS] && state[$HAS][property] && prev === undefined) state[$HAS][property].$();
  }
  let nodes = getNodes(state, $NODE),
    node;
  if (node = getNode(nodes, property, prev)) node.$(() => value);
  if (Array.isArray(state) && state.length !== len) {
    for (let i = state.length; i < len; i++) (node = nodes[i]) && node.$();
    (node = getNode(nodes, "length", len)) && node.$(state.length);
  }
  (node = nodes[$SELF]) && node.$();
}
function mergeStoreNode(state, value) {
  const keys = Object.keys(value);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    setProperty(state, key, value[key]);
  }
}
function updateArray(current, next) {
  if (typeof next === "function") next = next(current);
  next = unwrap(next);
  if (Array.isArray(next)) {
    if (current === next) return;
    let i = 0,
      len = next.length;
    for (; i < len; i++) {
      const value = next[i];
      if (current[i] !== value) setProperty(current, i, value);
    }
    setProperty(current, "length", len);
  } else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
  let part,
    prev = current;
  if (path.length > 1) {
    part = path.shift();
    const partType = typeof part,
      isArray = Array.isArray(current);
    if (Array.isArray(part)) {
      for (let i = 0; i < part.length; i++) {
        updatePath(current, [part[i]].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "function") {
      for (let i = 0; i < current.length; i++) {
        if (part(current[i], i)) updatePath(current, [i].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "object") {
      const {
        from = 0,
        to = current.length - 1,
        by = 1
      } = part;
      for (let i = from; i <= to; i += by) {
        updatePath(current, [i].concat(path), traversed);
      }
      return;
    } else if (path.length > 1) {
      updatePath(current[part], path, [part].concat(traversed));
      return;
    }
    prev = current[part];
    traversed = [part].concat(traversed);
  }
  let value = path[0];
  if (typeof value === "function") {
    value = value(prev, traversed);
    if (value === prev) return;
  }
  if (part === undefined && value == undefined) return;
  value = unwrap(value);
  if (part === undefined || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) {
    mergeStoreNode(prev, value);
  } else setProperty(current, part, value);
}
function createStore(...[store, options]) {
  const unwrappedStore = unwrap(store || {});
  const isArray = Array.isArray(unwrappedStore);
  const wrappedStore = wrap$1(unwrappedStore);
  function setStore(...args) {
    batch(() => {
      isArray && args.length === 1 ? updateArray(unwrappedStore, args[0]) : updatePath(unwrappedStore, args);
    });
  }
  return [wrappedStore, setStore];
}

class Layout {
  x;
  y;
  width;
  height;
  constructor(rect) {
    this.x = Math.floor(rect.x);
    this.y = Math.floor(rect.y);
    this.width = Math.floor(rect.width);
    this.height = Math.floor(rect.height);
  }
  get rect() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }
  get left() {
    return this.x;
  }
  get top() {
    return this.y;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }
  get center() {
    return {
      x: this.x + this.width * 0.5,
      y: this.y + this.height * 0.5
    };
  }
  get corners() {
    return {
      topLeft: { x: this.left, y: this.top },
      topRight: { x: this.right, y: this.top },
      bottomRight: { x: this.left, y: this.bottom },
      bottomLeft: { x: this.right, y: this.bottom }
    };
  }
}
const elementLayout = (element) => {
  let layout = new Layout(element.getBoundingClientRect());
  const { transform } = getComputedStyle(element);
  if (transform) {
    layout = stripTransformFromLayout(layout, transform);
  }
  return layout;
};
const stripTransformFromLayout = (layout, transform) => {
  let translateX, translateY;
  if (transform.startsWith("matrix3d(")) {
    const matrix = transform.slice(9, -1).split(/, /);
    translateX = +matrix[12];
    translateY = +matrix[13];
  } else if (transform.startsWith("matrix(")) {
    const matrix = transform.slice(7, -1).split(/, /);
    translateX = +matrix[4];
    translateY = +matrix[5];
  } else {
    translateX = 0;
    translateY = 0;
  }
  return new Layout({
    ...layout,
    x: layout.x - translateX,
    y: layout.y - translateY
  });
};
const noopTransform = () => ({ x: 0, y: 0 });
const transformsAreEqual = (firstTransform, secondTransform) => {
  return firstTransform.x === secondTransform.x && firstTransform.y === secondTransform.y;
};
const transformLayout = (layout, transform) => {
  return new Layout({
    ...layout,
    x: layout.x + transform.x,
    y: layout.y + transform.y
  });
};
const intersectionRatioOfLayouts = (firstLayout, secondLayout) => {
  const top = Math.max(firstLayout.top, secondLayout.top);
  const left = Math.max(firstLayout.left, secondLayout.left);
  const right = Math.min(firstLayout.right, secondLayout.right);
  const bottom = Math.min(firstLayout.bottom, secondLayout.bottom);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const layout1Area = firstLayout.width * firstLayout.height;
    const layout2Area = secondLayout.width * secondLayout.height;
    const intersectionArea = width * height;
    return intersectionArea / (layout1Area + layout2Area - intersectionArea);
  }
  return 0;
};
const layoutsAreEqual = (firstLayout, secondLayout) => {
  return firstLayout.x === secondLayout.x && firstLayout.y === secondLayout.y && firstLayout.width === secondLayout.width && firstLayout.height === secondLayout.height;
};

const mostIntersecting = (draggable, droppables, context) => {
  const draggableLayout = draggable.transformed;
  const collision = { ratio: 0, droppable: null };
  for (const droppable of droppables) {
    const ratio = intersectionRatioOfLayouts(draggableLayout, droppable.layout);
    if (ratio > collision.ratio) {
      collision.ratio = ratio;
      collision.droppable = droppable;
    } else if (ratio > 0 && ratio === collision.ratio && droppable.id === context.activeDroppableId) {
      collision.droppable = droppable;
    }
  }
  return collision.droppable;
};

const Context = createContext();
const DragDropProvider = (passedProps) => {
  const props = mergeProps({
    collisionDetector: mostIntersecting
  }, passedProps);
  const [state, setState] = createStore({
    draggables: {},
    droppables: {},
    sensors: {},
    active: {
      draggableId: null,
      get draggable() {
        return state.active.draggableId !== null ? state.draggables[state.active.draggableId] : null;
      },
      droppableId: null,
      get droppable() {
        return state.active.droppableId !== null ? state.droppables[state.active.droppableId] : null;
      },
      sensorId: null,
      get sensor() {
        return state.active.sensorId !== null ? state.sensors[state.active.sensorId] : null;
      },
      overlay: null
    }
  });
  const addTransformer = (type, id, transformer) => {
    const displayType = type.substring(0, type.length - 1);
    if (!untrack(() => state[type][id])) {
      console.warn(`Cannot add transformer to nonexistent ${displayType} with id: ${id}`);
      return;
    }
    setState(type, id, "transformers", transformer.id, transformer);
  };
  const removeTransformer = (type, id, transformerId) => {
    const displayType = type.substring(0, type.length - 1);
    if (!untrack(() => state[type][id])) {
      console.warn(`Cannot remove transformer from nonexistent ${displayType} with id: ${id}`);
      return;
    }
    if (!untrack(() => state[type][id]["transformers"][transformerId])) {
      console.warn(`Cannot remove from ${displayType} with id ${id}, nonexistent transformer with id: ${transformerId}`);
      return;
    }
    setState(type, id, "transformers", transformerId, void 0);
  };
  const addDraggable = ({
    id,
    node,
    layout,
    data
  }) => {
    const existingDraggable = state.draggables[id];
    const draggable = {
      id,
      node,
      layout,
      data,
      _pendingCleanup: false
    };
    let transformer;
    if (!existingDraggable) {
      Object.defineProperties(draggable, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            if (state.active.overlay) {
              return noopTransform();
            }
            const transformers = Object.values(state.draggables[id].transformers);
            transformers.sort((a, b) => a.order - b.order);
            return transformers.reduce((transform, transformer2) => {
              return transformer2.callback(transform);
            }, noopTransform());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => {
            return transformLayout(state.draggables[id].layout, state.draggables[id].transform);
          }
        }
      });
    } else if (state.active.draggableId === id && !state.active.overlay) {
      const layoutDelta = {
        x: existingDraggable.layout.x - layout.x,
        y: existingDraggable.layout.y - layout.y
      };
      const transformerId = "addDraggable-existing-offset";
      const existingTransformer = existingDraggable.transformers[transformerId];
      const transformOffset = existingTransformer ? existingTransformer.callback(layoutDelta) : layoutDelta;
      transformer = {
        id: transformerId,
        order: 100,
        callback: (transform) => {
          return {
            x: transform.x + transformOffset.x,
            y: transform.y + transformOffset.y
          };
        }
      };
      onDragEnd(() => removeTransformer("draggables", id, transformerId));
    }
    batch(() => {
      setState("draggables", id, draggable);
      if (transformer) {
        addTransformer("draggables", id, transformer);
      }
    });
    if (state.active.draggable) {
      recomputeLayouts();
    }
  };
  const removeDraggable = (id) => {
    if (!untrack(() => state.draggables[id])) {
      console.warn(`Cannot remove nonexistent draggable with id: ${id}`);
      return;
    }
    setState("draggables", id, "_pendingCleanup", true);
    queueMicrotask(() => cleanupDraggable(id));
  };
  const cleanupDraggable = (id) => {
    if (state.draggables[id]?._pendingCleanup) {
      const cleanupActive = state.active.draggableId === id;
      batch(() => {
        if (cleanupActive) {
          setState("active", "draggableId", null);
        }
        setState("draggables", id, void 0);
      });
    }
  };
  const addDroppable = ({
    id,
    node,
    layout,
    data
  }) => {
    const existingDroppable = state.droppables[id];
    const droppable = {
      id,
      node,
      layout,
      data,
      _pendingCleanup: false
    };
    if (!existingDroppable) {
      Object.defineProperties(droppable, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const transformers = Object.values(state.droppables[id].transformers);
            transformers.sort((a, b) => a.order - b.order);
            return transformers.reduce((transform, transformer) => {
              return transformer.callback(transform);
            }, noopTransform());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => {
            return transformLayout(state.droppables[id].layout, state.droppables[id].transform);
          }
        }
      });
    }
    setState("droppables", id, droppable);
    if (state.active.draggable) {
      recomputeLayouts();
    }
  };
  const removeDroppable = (id) => {
    if (!untrack(() => state.droppables[id])) {
      console.warn(`Cannot remove nonexistent droppable with id: ${id}`);
      return;
    }
    setState("droppables", id, "_pendingCleanup", true);
    queueMicrotask(() => cleanupDroppable(id));
  };
  const cleanupDroppable = (id) => {
    if (state.droppables[id]?._pendingCleanup) {
      const cleanupActive = state.active.droppableId === id;
      batch(() => {
        if (cleanupActive) {
          setState("active", "droppableId", null);
        }
        setState("droppables", id, void 0);
      });
    }
  };
  const addSensor = ({
    id,
    activators
  }) => {
    setState("sensors", id, {
      id,
      activators,
      coordinates: {
        origin: {
          x: 0,
          y: 0
        },
        current: {
          x: 0,
          y: 0
        },
        get delta() {
          return {
            x: state.sensors[id].coordinates.current.x - state.sensors[id].coordinates.origin.x,
            y: state.sensors[id].coordinates.current.y - state.sensors[id].coordinates.origin.y
          };
        }
      }
    });
  };
  const removeSensor = (id) => {
    if (!untrack(() => state.sensors[id])) {
      console.warn(`Cannot remove nonexistent sensor with id: ${id}`);
      return;
    }
    const cleanupActive = state.active.sensorId === id;
    batch(() => {
      if (cleanupActive) {
        setState("active", "sensorId", null);
      }
      setState("sensors", id, void 0);
    });
  };
  const setOverlay = ({
    node,
    layout
  }) => {
    const existing = state.active.overlay;
    const overlay = {
      node,
      layout
    };
    if (!existing) {
      Object.defineProperties(overlay, {
        id: {
          enumerable: true,
          configurable: true,
          get: () => state.active.draggable?.id
        },
        data: {
          enumerable: true,
          configurable: true,
          get: () => state.active.draggable?.data
        },
        transformers: {
          enumerable: true,
          configurable: true,
          get: () => Object.fromEntries(Object.entries(state.active.draggable ? state.active.draggable.transformers : {}).filter(([id]) => id !== "addDraggable-existing-offset"))
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const transformers = Object.values(state.active.overlay ? state.active.overlay.transformers : []);
            transformers.sort((a, b) => a.order - b.order);
            return transformers.reduce((transform, transformer) => {
              return transformer.callback(transform);
            }, noopTransform());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => {
            return state.active.overlay ? transformLayout(state.active.overlay.layout, state.active.overlay.transform) : new Layout({
              x: 0,
              y: 0,
              width: 0,
              height: 0
            });
          }
        }
      });
    }
    setState("active", "overlay", overlay);
  };
  const clearOverlay = () => setState("active", "overlay", null);
  const sensorStart = (id, coordinates) => {
    batch(() => {
      setState("sensors", id, "coordinates", {
        origin: {
          ...coordinates
        },
        current: {
          ...coordinates
        }
      });
      setState("active", "sensorId", id);
    });
  };
  const sensorMove = (coordinates) => {
    const sensorId = state.active.sensorId;
    if (!sensorId) {
      console.warn("Cannot move sensor when no sensor active.");
      return;
    }
    setState("sensors", sensorId, "coordinates", "current", {
      ...coordinates
    });
  };
  const sensorEnd = () => setState("active", "sensorId", null);
  const draggableActivators = (draggableId, asHandlers) => {
    const eventMap = {};
    for (const sensor of Object.values(state.sensors)) {
      if (sensor) {
        for (const [type, activator] of Object.entries(sensor.activators)) {
          eventMap[type] ??= [];
          eventMap[type].push({
            sensor,
            activator
          });
        }
      }
    }
    const listeners = {};
    for (const key in eventMap) {
      let handlerKey = key;
      if (asHandlers) {
        handlerKey = `on${key}`;
      }
      listeners[handlerKey] = (event) => {
        for (const {
          activator
        } of eventMap[key]) {
          if (state.active.sensor) {
            break;
          }
          activator(event, draggableId);
        }
      };
    }
    return listeners;
  };
  const recomputeLayouts = () => {
    let anyLayoutChanged = false;
    const draggables = Object.values(state.draggables);
    const droppables = Object.values(state.droppables);
    const overlay = state.active.overlay;
    batch(() => {
      const cache = /* @__PURE__ */ new WeakMap();
      for (const draggable of draggables) {
        if (draggable) {
          const currentLayout = draggable.layout;
          if (!cache.has(draggable.node)) cache.set(draggable.node, elementLayout(draggable.node));
          const layout = cache.get(draggable.node);
          if (!layoutsAreEqual(currentLayout, layout)) {
            setState("draggables", draggable.id, "layout", layout);
            anyLayoutChanged = true;
          }
        }
      }
      for (const droppable of droppables) {
        if (droppable) {
          const currentLayout = droppable.layout;
          if (!cache.has(droppable.node)) cache.set(droppable.node, elementLayout(droppable.node));
          const layout = cache.get(droppable.node);
          if (!layoutsAreEqual(currentLayout, layout)) {
            setState("droppables", droppable.id, "layout", layout);
            anyLayoutChanged = true;
          }
        }
      }
      if (overlay) {
        const currentLayout = overlay.layout;
        const layout = elementLayout(overlay.node);
        if (!layoutsAreEqual(currentLayout, layout)) {
          setState("active", "overlay", "layout", layout);
          anyLayoutChanged = true;
        }
      }
    });
    return anyLayoutChanged;
  };
  const detectCollisions = () => {
    const draggable = state.active.overlay ?? state.active.draggable;
    if (draggable) {
      const droppable = props.collisionDetector(draggable, Object.values(state.droppables), {
        activeDroppableId: state.active.droppableId
      });
      const droppableId = droppable ? droppable.id : null;
      if (state.active.droppableId !== droppableId) {
        setState("active", "droppableId", droppableId);
      }
    }
  };
  const dragStart = (draggableId) => {
    const transformer = {
      id: "sensorMove",
      order: 0,
      callback: (transform) => {
        if (state.active.sensor) {
          return {
            x: transform.x + state.active.sensor.coordinates.delta.x,
            y: transform.y + state.active.sensor.coordinates.delta.y
          };
        }
        return transform;
      }
    };
    recomputeLayouts();
    batch(() => {
      setState("active", "draggableId", draggableId);
      addTransformer("draggables", draggableId, transformer);
    });
    detectCollisions();
  };
  const dragEnd = () => {
    const draggableId = untrack(() => state.active.draggableId);
    batch(() => {
      if (draggableId !== null) {
        removeTransformer("draggables", draggableId, "sensorMove");
      }
      setState("active", ["draggableId", "droppableId"], null);
    });
    recomputeLayouts();
  };
  const onDragStart = (handler) => {
    createEffect(() => {
      const draggable = state.active.draggable;
      if (draggable) {
        untrack(() => handler({
          draggable
        }));
      }
    });
  };
  const onDragMove = (handler) => {
    createEffect(() => {
      const draggable = state.active.draggable;
      if (draggable) {
        const overlay = untrack(() => state.active.overlay);
        Object.values(overlay ? overlay.transform : draggable.transform);
        untrack(() => handler({
          draggable,
          overlay
        }));
      }
    });
  };
  const onDragOver = (handler) => {
    createEffect(() => {
      const draggable = state.active.draggable;
      const droppable = state.active.droppable;
      if (draggable) {
        untrack(() => handler({
          draggable,
          droppable,
          overlay: state.active.overlay
        }));
      }
    });
  };
  const onDragEnd = (handler) => {
    createEffect(({
      previousDraggable,
      previousDroppable,
      previousOverlay
    }) => {
      const draggable = state.active.draggable;
      const droppable = draggable ? state.active.droppable : null;
      const overlay = draggable ? state.active.overlay : null;
      if (!draggable && previousDraggable) {
        untrack(() => handler({
          draggable: previousDraggable,
          droppable: previousDroppable,
          overlay: previousOverlay
        }));
      }
      return {
        previousDraggable: draggable,
        previousDroppable: droppable,
        previousOverlay: overlay
      };
    }, {
      previousDraggable: null,
      previousDroppable: null,
      previousOverlay: null
    });
  };
  onDragMove(() => detectCollisions());
  props.onDragStart && onDragStart(props.onDragStart);
  props.onDragMove && onDragMove(props.onDragMove);
  props.onDragOver && onDragOver(props.onDragOver);
  props.onDragEnd && onDragEnd(props.onDragEnd);
  const actions = {
    addTransformer,
    removeTransformer,
    addDraggable,
    removeDraggable,
    addDroppable,
    removeDroppable,
    addSensor,
    removeSensor,
    setOverlay,
    clearOverlay,
    recomputeLayouts,
    detectCollisions,
    draggableActivators,
    sensorStart,
    sensorMove,
    sensorEnd,
    dragStart,
    dragEnd,
    onDragStart,
    onDragMove,
    onDragOver,
    onDragEnd
  };
  const context = [state, actions];
  return createComponent(Context.Provider, {
    value: context,
    get children() {
      return props.children;
    }
  });
};
const useDragDropContext = () => {
  return useContext(Context) || null;
};

const createPointerSensor = (id = "pointer-sensor") => {
  const [
    state,
    {
      addSensor,
      removeSensor,
      sensorStart,
      sensorMove,
      sensorEnd,
      dragStart,
      dragEnd
    }
  ] = useDragDropContext();
  const activationDelay = 250;
  const activationDistance = 10;
  let activationDelayTimeoutId = null;
  let activationDraggableId = null;
  const attach = (event, draggableId) => {
    if (event.button !== 0) return;
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    activationDraggableId = draggableId;
    initialCoordinates.x = event.clientX;
    initialCoordinates.y = event.clientY;
    activationDelayTimeoutId = window.setTimeout(onActivate, activationDelay);
  };
  onMount(() => {
    addSensor({ id, activators: { pointerdown: attach } });
  });
  onCleanup(() => {
    removeSensor(id);
  });
  const isActiveSensor = () => state.active.sensorId === id;
  const initialCoordinates = { x: 0, y: 0 };
  const detach = () => {
    if (activationDelayTimeoutId) {
      clearTimeout(activationDelayTimeoutId);
      activationDelayTimeoutId = null;
    }
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    document.removeEventListener("selectionchange", clearSelection);
  };
  const onActivate = () => {
    if (!state.active.sensor) {
      sensorStart(id, initialCoordinates);
      dragStart(activationDraggableId);
      clearSelection();
      document.addEventListener("selectionchange", clearSelection);
    } else if (!isActiveSensor()) {
      detach();
    }
  };
  const onPointerMove = (event) => {
    const coordinates = { x: event.clientX, y: event.clientY };
    if (!state.active.sensor) {
      const transform = {
        x: coordinates.x - initialCoordinates.x,
        y: coordinates.y - initialCoordinates.y
      };
      if (Math.sqrt(transform.x ** 2 + transform.y ** 2) > activationDistance) {
        onActivate();
      }
    }
    if (isActiveSensor()) {
      event.preventDefault();
      sensorMove(coordinates);
    }
  };
  const onPointerUp = (event) => {
    detach();
    if (isActiveSensor()) {
      event.preventDefault();
      dragEnd();
      sensorEnd();
    }
  };
  const clearSelection = () => {
    window.getSelection()?.removeAllRanges();
  };
};

const DragDropSensors = (props) => {
  createPointerSensor();
  return memo(() => props.children);
};

const transformStyle = (transform) => {
  return { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` };
};

const createDraggable = (id, data = {}) => {
  const [state, { addDraggable, removeDraggable, draggableActivators }] = useDragDropContext();
  const [node, setNode] = createSignal(null);
  onMount(() => {
    const resolvedNode = node();
    if (resolvedNode) {
      addDraggable({
        id,
        node: resolvedNode,
        layout: elementLayout(resolvedNode),
        data
      });
    }
  });
  onCleanup(() => removeDraggable(id));
  const isActiveDraggable = () => state.active.draggableId === id;
  const transform = () => {
    return state.draggables[id]?.transform || noopTransform();
  };
  const draggable = Object.defineProperties(
    (element, accessor) => {
      const config = accessor ? accessor() : {};
      createEffect(() => {
        const resolvedNode = node();
        const activators = draggableActivators(id);
        if (resolvedNode) {
          for (const key in activators) {
            resolvedNode.addEventListener(key, activators[key]);
          }
        }
        onCleanup(() => {
          if (resolvedNode) {
            for (const key in activators) {
              resolvedNode.removeEventListener(key, activators[key]);
            }
          }
        });
      });
      setNode(element);
      if (!config.skipTransform) {
        createEffect(() => {
          const resolvedTransform = transform();
          if (!transformsAreEqual(resolvedTransform, noopTransform())) {
            const style = transformStyle(transform());
            element.style.setProperty("transform", style.transform ?? null);
          } else {
            element.style.removeProperty("transform");
          }
        });
      }
    },
    {
      ref: {
        enumerable: true,
        value: setNode
      },
      isActiveDraggable: {
        enumerable: true,
        get: isActiveDraggable
      },
      dragActivators: {
        enumerable: true,
        get: () => {
          return draggableActivators(id, true);
        }
      },
      transform: {
        enumerable: true,
        get: transform
      }
    }
  );
  return draggable;
};

var _tmpl$$2 = /* @__PURE__ */ template(`<div>`);
const DragOverlay = (props) => {
  const [state, {
    onDragStart,
    onDragEnd,
    setOverlay,
    clearOverlay
  }] = useDragDropContext();
  let node;
  onDragStart(({
    draggable
  }) => {
    setOverlay({
      node: draggable.node,
      layout: draggable.layout
    });
    queueMicrotask(() => {
      if (node) {
        const layout = elementLayout(node);
        const delta = {
          x: (draggable.layout.width - layout.width) / 2,
          y: (draggable.layout.height - layout.height) / 2
        };
        layout.x += delta.x;
        layout.y += delta.y;
        setOverlay({
          node,
          layout
        });
      }
    });
  });
  onDragEnd(() => queueMicrotask(clearOverlay));
  const style$1 = () => {
    const overlay = state.active.overlay;
    const draggable = state.active.draggable;
    if (!overlay || !draggable) return {};
    return {
      position: "fixed",
      transition: "transform 0s",
      top: `${overlay.layout.top}px`,
      left: `${overlay.layout.left}px`,
      "min-width": `${draggable.layout.width}px`,
      "min-height": `${draggable.layout.height}px`,
      ...transformStyle(overlay.transform),
      ...props.style
    };
  };
  return createComponent(Portal, {
    get mount() {
      return document.body;
    },
    get children() {
      return createComponent(Show, {
        get when() {
          return state.active.draggable;
        },
        get children() {
          var _el$ = _tmpl$$2();
          var _ref$ = node;
          typeof _ref$ === "function" ? use(_ref$, _el$) : node = _el$;
          insert(_el$, (() => {
            var _c$ = memo(() => typeof props.children === "function");
            return () => _c$() ? props.children(state.active.draggable) : props.children;
          })());
          createRenderEffect((_p$) => {
            var _v$ = props.class, _v$2 = style$1();
            _v$ !== _p$.e && className(_el$, _p$.e = _v$);
            _p$.t = style(_el$, _v$2, _p$.t);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$;
        }
      });
    }
  });
};

var _tmpl$$1 = /* @__PURE__ */ template$1(`<div class="draggable absolute">Draggable Id: `);
function Draggable(props) {
  const draggable = createDraggable(props.id);
  return (() => {
    var _el$ = _tmpl$$1(); _el$.firstChild;
    use$1(draggable, _el$, () => draggable);
    _el$.style.setProperty("top", "0");
    insert$1(_el$, () => props.id, null);
    createRenderEffect$1((_p$) => {
      var _v$ = !!draggable.isActiveDraggable, _v$2 = (props.id === 1 ? 0 : 125) + "px";
      _v$ !== _p$.e && _el$.classList.toggle("opacity-25", _p$.e = _v$);
      _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$.style.setProperty("left", _v$2) : _el$.style.removeProperty("left"));
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$;
  })();
}

var _tmpl$ = /* @__PURE__ */ template$1(`<div class="min-h-15 w-full h-full relative">`), _tmpl$2 = /* @__PURE__ */ template$1(`<div class=solid-dnd-root>`), _tmpl$3 = /* @__PURE__ */ template$1(`<div class=draggable>Draggable `);
function source_file() {
  let transform = {
    x: 0,
    y: 0
  };
  const onDragMove = ({
    overlay
  }) => {
    if (overlay) {
      transform = {
        ...overlay.transform
      };
    }
  };
  const onDragEnd = ({
    draggable
  }) => {
    const node = draggable.node;
    node.style.setProperty("top", node.offsetTop + transform.y + "px");
    node.style.setProperty("left", node.offsetLeft + transform.x + "px");
  };
  return (() => {
    var _el$ = _tmpl$2();
    insert$1(_el$, createComponent$1(DragDropProvider, {
      onDragMove,
      onDragEnd,
      onDragStart: (e) => console.log("DragStarted Triggered: ", e),
      get children() {
        return [createComponent$1(DragDropSensors, {}), (() => {
          var _el$2 = _tmpl$();
          insert$1(_el$2, createComponent$1(Draggable, {
            id: 1
          }), null);
          insert$1(_el$2, createComponent$1(Draggable, {
            id: 2
          }), null);
          return _el$2;
        })(), createComponent$1(DragOverlay, {
          children: (draggable) => (() => {
            var _el$3 = _tmpl$3(); _el$3.firstChild;
            insert$1(_el$3, () => draggable?.id, null);
            return _el$3;
          })()
        })];
      }
    }));
    return _el$;
  })();
}

export { source_file };
