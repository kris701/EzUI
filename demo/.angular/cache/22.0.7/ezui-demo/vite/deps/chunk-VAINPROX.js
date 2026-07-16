import {
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin,
  Meta,
  REMOVE_STYLES_ON_COMPONENT_DESTROY
} from "./chunk-E6W4ZFJZ.js";
import {
  NG_VALIDATORS,
  NgControl,
  NgModel,
  RadioControlValueAccessor,
  Validators
} from "./chunk-KMBWNSEK.js";
import {
  AsyncPipe,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-YVPE26PC.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  ContentChild,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  RuntimeError,
  SIGNAL,
  Self,
  Service,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __objRest,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  assertInInjectionContext,
  assertNotInReactiveContext,
  asyncScheduler,
  auditTime,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  contentChild,
  contentChildren,
  createComponent,
  debounce,
  defaultIfEmpty,
  delay,
  distinctUntilChanged,
  effect,
  endWith,
  filter,
  finalize,
  forwardRef,
  from,
  fromEvent,
  identity,
  ignoreElements,
  inject,
  input,
  isObservable,
  isSignal,
  map,
  merge,
  model,
  observeOn,
  of,
  pairwise,
  pipe,
  provideAppInitializer,
  queueScheduler,
  reflectComponentType,
  repeat,
  setClassMetadata,
  share,
  shareReplay,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer,
  untracked,
  viewChild,
  withLatestFrom,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-UIPQSPQU.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-math.mjs
function tuiClamp(value, minimum, maximum) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(minimum));
  ngDevMode && console.assert(!Number.isNaN(maximum));
  ngDevMode && maximum && minimum && console.assert(maximum >= minimum);
  const minClamped = max(minimum ?? value, value);
  return min(maximum ?? minClamped, minClamped);
}
function min(x, ...values) {
  return values.reduce((a, b) => a < b ? a : b, x);
}
function max(x, ...values) {
  return values.reduce((a, b) => a > b ? a : b, x);
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(fromInclude));
  ngDevMode && console.assert(!Number.isNaN(toExclude));
  ngDevMode && console.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min2, max2) {
  ngDevMode && console.assert(Number.isInteger(min2));
  ngDevMode && console.assert(Number.isInteger(max2));
  ngDevMode && console.assert(min2 <= max2);
  if (Number.isNaN(value) || value <= min2) {
    return min2;
  }
  return value >= max2 ? max2 : Math.round(value);
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && console.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && console.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const [significand, exponent = ""] = `${value}`.split("e");
  const roundedInt = func(Number(`${significand}e${Number(exponent) + precision}`));
  ngDevMode && console.assert(Number.isSafeInteger(roundedInt), "Impossible to correctly round such a large number");
  const processedPair = `${roundedInt}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiRoundWith({ value, precision, method }) {
  switch (method) {
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    case "round":
      return tuiRound(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}
function tuiToInt(bool) {
  return bool ? 1 : 0;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-miscellaneous.mjs
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayToggle(array, item, identity2) {
  const index = identity2 ? array.findIndex((it) => identity2(it, item)) : array.indexOf(item);
  return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
function tuiIsControlEmpty({ value = null }) {
  return value === null || value === "" || Array.isArray(value) && !value.length;
}
function tuiIsString(value) {
  return typeof value === "string";
}
var autoId = 0;
function tuiGenerateId() {
  return `tui_${autoId++}${Date.now().toString(36)}`;
}
function tuiIsFlat(items) {
  return !Array.isArray(items[0]);
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsPresent(value) {
  return value != null;
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  return b === null ? false : handler(a, b);
}
function tuiPx(value) {
  ngDevMode && console.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}
function tuiSetSignal(signal2, value) {
  if ("set" in signal2) {
    signal2.set(value);
  } else if ("applyValueToInputSignal" in signal2[SIGNAL]) {
    signal2[SIGNAL].applyValueToInputSignal(signal2[SIGNAL], value);
  } else {
    ngDevMode && console.assert(false, "tuiSetSignal was called on read-only signal");
  }
}
var MAP = new InjectionToken(ngDevMode ? "MAP" : "", {
  factory: () => {
    const map2 = /* @__PURE__ */ new Map();
    inject(DestroyRef).onDestroy(() => map2.forEach((component) => component.destroy()));
    return map2;
  }
});
function tuiWithStyles(component) {
  const map2 = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);
  if (!map2.has(component)) {
    map2.set(component, createComponent(component, { environmentInjector }));
  }
  return;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-di.mjs
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    useFactory: () => __spreadValues(__spreadValues({}, inject(provide, { optional: true, skipSelf: true }) || fallback), inject(options, { optional: true }) || (typeof options === "function" ? options() : options))
  };
}
function tuiCreateOptions(defaults) {
  const token = new InjectionToken(ngDevMode ? "Options token" : "", {
    factory: () => defaults
  });
  return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
function tuiDirectiveBinding(token, key, initial, options = { self: true }) {
  const result = isSignal(initial) ? initial : signal(initial);
  const directive = inject(token, options);
  const output = directive?.[`${key.toString()}Change`];
  if (!directive) {
    return result;
  }
  let previous;
  effect(() => {
    const value = result();
    if (previous === value) {
      return;
    }
    if (isSignal(directive[key])) {
      tuiSetSignal(directive[key], value);
    } else {
      directive[key] = value;
    }
    directive.ngOnChanges?.({});
    output?.emit?.(value);
    previous = value;
  });
  return result;
}
function tuiProvide(provide, useExisting, multi = false) {
  return { provide, useExisting, multi };
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
var OutputFromObservableRef = class {
  source;
  destroyed = false;
  destroyRef = inject(DestroyRef);
  constructor(source) {
    this.source = source;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  subscribe(callbackFn) {
    if (this.destroyed) {
      throw new RuntimeError(953, ngDevMode && "Unexpected subscription to destroyed `OutputRef`. The owning directive/component is destroyed.");
    }
    const subscription = this.source.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (value) => callbackFn(value)
    });
    return {
      unsubscribe: () => subscription.unsubscribe()
    };
  }
};
function outputFromObservable(observable, opts) {
  ngDevMode && assertInInjectionContext(outputFromObservable);
  return new OutputFromObservableRef(observable);
}
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-classes.mjs
var TuiAccessor = class {
};
var TuiPositionAccessor = class extends TuiAccessor {
};
var TuiRectAccessor = class extends TuiAccessor {
};
function tuiProvideAccessor(provide, type, fallback) {
  return {
    provide,
    deps: [[new SkipSelf(), new Optional(), provide], fallback],
    useFactory: tuiFallbackAccessor(type)
  };
}
function tuiFallbackAccessor(type) {
  return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || Object.create(fallback, {
    type: {
      value: type
    }
  });
}
function tuiPositionAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}
function tuiRectAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}
function tuiAsPositionAccessor(accessor) {
  return tuiProvide(TuiPositionAccessor, accessor, true);
}
function tuiAsRectAccessor(accessor) {
  return tuiProvide(TuiRectAccessor, accessor, true);
}
var TuiVehicle = class {
};
function tuiAsVehicle(vehicle) {
  return tuiProvide(TuiVehicle, vehicle, true);
}
var TuiDriver = class extends Observable {
};
function tuiAsDriver(driver) {
  return tuiProvide(TuiDriver, driver, true);
}
var TuiDriverDirective = class _TuiDriverDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.drivers = coerceArray(inject(TuiDriver, {
      self: true,
      optional: true
    }) || []);
    this.vehicles = coerceArray(inject(TuiVehicle, {
      self: true,
      optional: true
    }) || []);
  }
  ngAfterViewInit() {
    const vehicle = this.vehicles.find(({
      type
    }) => type === this.type);
    merge(...this.drivers.filter(({
      type
    }) => type === this.type)).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      vehicle?.toggle(value);
    });
  }
  static {
    this.ɵfac = function TuiDriverDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDriverDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDriverDirective
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-constants.mjs
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = __spreadProps(__spreadValues({}, rect), {
  toJSON: () => rect
});
var TUI_FALSE_HANDLER = () => false;
var TUI_TRUE_HANDLER = () => true;
function bothEmpty(item1, item2) {
  return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
var TUI_DEFAULT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase().includes(search.toLowerCase());
var TUI_STRICT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase() === search.toLowerCase();
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var svgNodeFilter = {
  acceptNode(node) {
    return "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }
};
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_EN_DASH = "–";
var CHAR_HYPHEN = "-";
var CHAR_ZERO_WIDTH_SPACE = "​";
var TUI_VERSION = "5.15.0";

// node_modules/@ng-web-apis/common/fesm2022/ng-web-apis-common.mjs
var WA_WINDOW = new InjectionToken(ngDevMode ? "[WA_WINDOW]" : "", {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var WA_ANIMATION_FRAME = new InjectionToken(ngDevMode ? "[WA_ANIMATION_FRAME]" : "", {
  factory: () => {
    const { requestAnimationFrame: requestAnimationFrame2, cancelAnimationFrame } = inject(WA_WINDOW);
    const animationFrame$ = new Observable((subscriber) => {
      let id = Number.NaN;
      const callback = (timestamp) => {
        subscriber.next(timestamp);
        id = requestAnimationFrame2(callback);
      };
      id = requestAnimationFrame2(callback);
      return () => {
        cancelAnimationFrame(id);
      };
    });
    return animationFrame$.pipe(share());
  }
});
var WA_CACHES = new InjectionToken(ngDevMode ? "[WA_CACHES]" : "", { factory: () => inject(WA_WINDOW).caches });
var WA_CRYPTO = new InjectionToken(ngDevMode ? "[WA_CRYPTO]" : "", {
  factory: () => inject(WA_WINDOW).crypto
});
var WA_CSS = new InjectionToken(ngDevMode ? "[WA_CSS]" : "", {
  factory: () => inject(WA_WINDOW).CSS ?? {
    escape: (v) => v,
    supports: () => false
  }
});
var WA_HISTORY = new InjectionToken(ngDevMode ? "[WA_HISTORY]" : "", {
  factory: () => inject(WA_WINDOW).history
});
var WA_LOCAL_STORAGE = new InjectionToken(ngDevMode ? "[WA_LOCAL_STORAGE]" : "", { factory: () => inject(WA_WINDOW).localStorage });
var WA_LOCATION = new InjectionToken(ngDevMode ? "[WA_LOCATION]" : "", { factory: () => inject(WA_WINDOW).location });
var WA_NAVIGATOR = new InjectionToken(ngDevMode ? "[WA_NAVIGATOR]" : "", { factory: () => inject(WA_WINDOW).navigator });
var WA_MEDIA_DEVICES = new InjectionToken(ngDevMode ? "[WA_MEDIA_DEVICES]" : "", { factory: () => inject(WA_NAVIGATOR).mediaDevices });
var WA_NETWORK_INFORMATION = new InjectionToken(ngDevMode ? "[WA_NETWORK_INFORMATION]" : "", {
  factory: () => inject(WA_NAVIGATOR).connection || null
});
var WA_PAGE_VISIBILITY = new InjectionToken(ngDevMode ? "[WA_PAGE_VISIBILITY]" : "", {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({ refCount: false, bufferSize: 1 }));
  }
});
var WA_PERFORMANCE = new InjectionToken(ngDevMode ? "[WA_PERFORMANCE]" : "", { factory: () => inject(WA_WINDOW).performance });
var WA_SCREEN = new InjectionToken(ngDevMode ? "[WA_SCREEN]" : "", {
  factory: () => inject(WA_WINDOW).screen
});
var WA_SESSION_STORAGE = new InjectionToken(ngDevMode ? "[WA_SESSION_STORAGE]" : "", { factory: () => inject(WA_WINDOW).sessionStorage });
var WA_SPEECH_RECOGNITION = new InjectionToken(ngDevMode ? "[WA_SPEECH_RECOGNITION]" : "", {
  factory: () => {
    const windowRef = inject(WA_WINDOW);
    return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
  }
});
var WA_SPEECH_SYNTHESIS = new InjectionToken(ngDevMode ? "[WA_SPEECH_SYNTHESIS]" : "", { factory: () => inject(WA_WINDOW).speechSynthesis });
var WA_USER_AGENT = new InjectionToken(ngDevMode ? "[WA_USER_AGENT]" : "", { factory: () => inject(WA_NAVIGATOR).userAgent });

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-dom.mjs
function tuiContainsOrAfter(current, node) {
  try {
    return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
  } catch {
    return false;
  }
}
function tuiIsInput(element) {
  return element.matches("input");
}
function tuiIsTextarea(element) {
  return element.matches("textarea");
}
function tuiIsTextfield(element) {
  return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
  return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
  const defaultView = node?.ownerDocument.defaultView;
  return !!node && !!defaultView && node instanceof defaultView.HTMLElement;
}
function tuiIsTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function tuiGetActualTarget(event) {
  return event.composedPath()[0];
}
function tuiGetDocumentOrShadowRoot(node) {
  return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
function tuiGetElementObscures(element) {
  if (!element.getBoundingClientRect) {
    return null;
  }
  const { left, right, top, bottom, width, height } = element.getBoundingClientRect();
  if (width === 0 && height === 0) {
    return null;
  }
  const doc = tuiGetDocumentOrShadowRoot(element);
  const horizontalMiddle = Math.round(left + width / 2);
  const verticalMiddle = Math.round(top + height / 2);
  const elements = [
    doc.elementFromPoint(horizontalMiddle, Math.round(top) + 2),
    doc.elementFromPoint(horizontalMiddle, Math.round(bottom) - 2),
    doc.elementFromPoint(Math.round(left) + 2, verticalMiddle),
    doc.elementFromPoint(Math.round(right) - 2, verticalMiddle)
  ].filter(tuiIsPresent);
  if (!elements.length) {
    return [];
  }
  const filtered = elements.filter((el) => !element.contains(el) && !el.contains(element));
  return filtered.length === 4 ? filtered : null;
}
function tuiGetElementOffset(host, element) {
  ngDevMode && console.assert(host.contains(element), "Host must contain element");
  let { offsetTop, offsetLeft, offsetParent } = element;
  while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }
  return { offsetTop, offsetLeft };
}
function tuiInjectElement() {
  return inject(ElementRef).nativeElement;
}
function tuiIsElementEditable(element) {
  return tuiIsTextfield(element) && !element.readOnly && element.inputMode !== "none" || Boolean(element.isContentEditable);
}
function tuiPointToClientRect(x = 0, y = 0) {
  const rect2 = {
    x,
    y,
    left: x,
    right: x,
    top: y,
    bottom: y,
    width: 0,
    height: 0
  };
  return __spreadProps(__spreadValues({}, rect2), {
    toJSON: () => rect2
  });
}
function tuiValue(input2, injector = inject(INJECTOR$1)) {
  const win = injector.get(WA_WINDOW);
  if (!win.tuiInputPatched && isPlatformBrowser(injector.get(PLATFORM_ID))) {
    win.tuiInputPatched = true;
    patch(win.HTMLInputElement.prototype);
    patch(win.HTMLTextAreaElement.prototype);
    patch(win.HTMLSelectElement.prototype);
  }
  let element = isSignal(input2) ? void 0 : coerceElement(input2);
  let cleanup = () => {
  };
  const options = { injector };
  const value = signal(element?.value || "");
  const process = (el) => {
    const update = () => untracked(() => value.set(el.value));
    el.addEventListener("input", update, { capture: true });
    el.addEventListener("tui-input", update, { capture: true });
    return () => {
      el.removeEventListener("input", update, { capture: true });
      el.removeEventListener("tui-input", update, { capture: true });
    };
  };
  injector.get(DestroyRef).onDestroy(() => cleanup());
  if (isSignal(input2)) {
    effect(() => {
      element = coerceElement(input2());
      cleanup();
      if (element && !element.matches("select[multiple]")) {
        value.set(element.value);
        cleanup = process(element);
      }
    }, options);
  } else if (element && !element.matches("select[multiple]")) {
    cleanup = process(element);
  }
  effect(() => {
    const v = value();
    if (element?.matches("select[multiple]")) {
      return;
    }
    if (element?.matches(":focus") && "selectionStart" in element) {
      const { selectionStart, selectionEnd } = element;
      element.value = v;
      try {
        element.setSelectionRange(selectionStart, selectionEnd);
      } catch {
      }
    } else if (element) {
      element.value = v;
    }
  }, options);
  return value;
}
function patch(prototype) {
  const { set } = Object.getOwnPropertyDescriptor(prototype, "value");
  Object.defineProperty(prototype, "value", {
    set(detail) {
      const value = this.value;
      const event = new CustomEvent("tui-input", { detail, bubbles: true });
      set.call(this, detail);
      if (value !== detail) {
        this.dispatchEvent(event);
      }
    }
  });
}
function tuiWindowSize(window2) {
  return toSignal(fromEvent(window2, "resize").pipe(startWith(null), map(() => {
    const width = Math.max(window2.document.documentElement.clientWidth || 0, window2.innerWidth || 0, window2.visualViewport?.width || 0);
    const height = Math.max(window2.document.documentElement.clientHeight || 0, window2.innerHeight || 0, window2.visualViewport?.height || 0);
    const rect2 = {
      width,
      height,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      x: 0,
      y: 0
    };
    return __spreadProps(__spreadValues({}, rect2), {
      toJSON: () => JSON.stringify(rect2)
    });
  })), { requireSync: true });
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-transitioned.mjs
var TuiTransitioned = class _TuiTransitioned {
  constructor() {
    const el = tuiInjectElement();
    afterNextRender(() => requestAnimationFrame(() => el.style.setProperty("transition", "")));
  }
  static {
    this.ɵfac = function TuiTransitioned_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTransitioned)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTransitioned,
      selectors: [["", "tuiTransitioned", ""]],
      hostAttrs: [2, "transition", "none"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTransitioned, [{
    type: Directive,
    args: [{
      selector: "[tuiTransitioned]",
      host: {
        style: "transition: none"
      }
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = {
  appearance: ""
};
var TUI_APPEARANCE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_APPEARANCE_OPTIONS" : "", {
  factory: () => TUI_APPEARANCE_DEFAULT_OPTIONS
});
function tuiAppearanceOptionsProvider(token) {
  return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var Styles = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-appearance-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiAppearance]:where(*[data-tui-version="5.15.0"]){transition-property:all;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.15.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.15.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-state=disabled]:after{cursor:initial}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-appearance-${TUI_VERSION}`,
      styles: ['[tuiAppearance]:where(*[data-tui-version="5.15.0"]){transition-property:all;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.15.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.15.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.15.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.15.0"])[data-state=disabled]:after{cursor:initial}\n']
    }]
  }], null, null);
})();
var TuiAppearance = class _TuiAppearance {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.modes = computed((mode = this.tuiAppearanceMode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.tuiAppearance = input(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.tuiAppearanceState = input(null);
    this.tuiAppearanceFocus = input(null);
    this.tuiAppearanceMode = input(null);
  }
  static {
    this.ɵfac = function TuiAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppearance,
      selectors: [["", "tuiAppearance", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiAppearance", ""],
      hostVars: 4,
      hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.tuiAppearance())("data-focus", ctx.tuiAppearanceFocus())("data-mode", ctx.modes())("data-state", ctx.tuiAppearanceState());
        }
      },
      inputs: {
        tuiAppearance: [1, "tuiAppearance"],
        tuiAppearanceState: [1, "tuiAppearanceState"],
        tuiAppearanceFocus: [1, "tuiAppearanceFocus"],
        tuiAppearanceMode: [1, "tuiAppearanceMode"]
      },
      features: [ɵɵHostDirectivesFeature([TuiTransitioned])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      selector: "[tuiAppearance]",
      hostDirectives: [TuiTransitioned],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiAppearance: "",
        "[attr.data-appearance]": "tuiAppearance()",
        "[attr.data-focus]": "tuiAppearanceFocus()",
        "[attr.data-mode]": "modes()",
        "[attr.data-state]": "tuiAppearanceState()"
      }
    }]
  }], null, null);
})();
function tuiAppearance(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearance", value, options);
}
function tuiAppearanceState(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceState", value, options);
}
function tuiAppearanceFocus(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceFocus", value, options);
}
function tuiAppearanceMode(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceMode", value, options);
}
var TuiWithAppearance = class _TuiWithAppearance {
  static {
    this.ɵfac = function TuiWithAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithAppearance,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-languages-english.mjs
var TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Number", "Card number"],
  cardExpiry: ["Expires", "Valid through"]
};
var TUI_ENGLISH_LANGUAGE_ADDON_DOC = {
  demoTexts: ["Dark mode", "Background", "Value"],
  preview: "Preview",
  menuText: "Menu",
  searchText: "Search",
  seeAlsoText: "See also",
  tocText: "On this page",
  sourceCodeText: "Source code"
};
var TUI_ENGLISH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Solid color", "Gradient"],
  toolbarTools: {
    undo: "Undo",
    redo: "Redo",
    font: "Font",
    fontStyle: "Font style",
    fontSize: "Font size",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strikeThrough: "Strike through",
    justify: "Justify",
    justifyLeft: "Justify left",
    justifyCenter: "Justify center",
    justifyRight: "Justify right",
    justifyFull: "Justify full",
    list: "List",
    indent: "Indent",
    outdent: "Outdent",
    unorderedList: "Unordered list",
    orderedList: "Ordered list",
    quote: "Quote",
    foreColor: "Color",
    backColor: "Background color",
    hiliteColor: "Highlight color",
    clear: "Clear",
    link: "Link",
    attach: "Attach file",
    tex: "Insert TeX",
    code: "Code",
    image: "Insert image",
    insertHorizontalRule: "Insert horizontal rule",
    superscript: "Superscript",
    subscript: "Subscript",
    insertTable: "Insert table",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    large: "Large",
    normal: "Normal",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_ENGLISH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Show/Hide",
  paginationTexts: {
    pages: "Pages",
    linesPerPage: "Lines per page",
    of: "of"
  }
};
var TUI_ENGLISH_LANGUAGE_COUNTRIES = {
  AD: "Andorra",
  AE: "United Arab Emirates",
  AF: "Afghanistan",
  AG: "Antigua & Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AO: "Angola",
  AR: "Argentina",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AZ: "Azerbaijan",
  BA: "Bosnia & Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "St. Barthélemy",
  BM: "Bermuda",
  BN: "Brunei",
  BO: "Bolivia",
  BQ: "Caribbean Netherlands",
  BR: "Brazil",
  BS: "Bahamas",
  BT: "Bhutan",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CD: "Congo - Kinshasa",
  CF: "Central African Republic",
  CG: "Congo - Brazzaville",
  CH: "Switzerland",
  CI: "Côte d’Ivoire",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cape Verde",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands",
  FM: "Federated States of Micronesia",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GT: "Guatemala",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IN: "India",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KM: "Comoros",
  KN: "St. Kitts & Nevis",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Laos",
  LB: "Lebanon",
  LC: "St. Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova",
  ME: "Montenegro",
  MF: "St. Martin",
  MG: "Madagascar",
  MK: "North Macedonia",
  ML: "Mali",
  MM: "Myanmar (Burma)",
  MN: "Mongolia",
  MO: "Macao",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan",
  SE: "Sweden",
  SG: "Singapore",
  SH: "St. Helena",
  SI: "Slovenia",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  ST: "São Tomé & Príncipe",
  SV: "El Salvador",
  SX: "Sint Maarten",
  SY: "Syria",
  SZ: "Eswatini",
  TC: "Turks & Caicos Islands",
  TD: "Chad",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Türkiye",
  TT: "Trinidad & Tobago",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VC: "St. Vincent & Grenadines",
  VE: "Venezuela",
  VG: "British Virgin Islands",
  VN: "Vietnam",
  VU: "Vanuatu",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AC: "Ascension Island",
  AS: "American Samoa",
  AX: "Åland Islands",
  CC: "Cocos (Keeling) Islands",
  CK: "Cook Islands",
  CX: "Christmas Island",
  EH: "Western Sahara",
  FO: "Faroe Islands",
  GG: "Guernsey",
  GU: "Guam",
  IM: "Isle of Man",
  JE: "Jersey",
  IO: "British Indian Ocean Territory",
  KI: "Kiribati",
  MH: "Marshall Islands",
  MP: "Northern Mariana Islands",
  NF: "Norfolk Island",
  NR: "Nauru",
  NU: "Niue",
  PM: "Saint Pierre and Miquelon",
  PR: "Puerto Rico",
  PS: "Palestine",
  SJ: "Svalbard and Jan Mayen",
  SS: "South Sudan",
  TA: "Tristan da Cunha",
  TK: "Tokelau",
  TV: "Tuvalu",
  VA: "Holy See",
  VI: "Virgin Islands",
  WF: "Wallis and Futuna"
};
var TUI_ENGLISH_LANGUAGE_CORE = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  close: "Close",
  back: "Back",
  clear: "Clear",
  nothingFoundMessage: "Nothing found",
  defaultErrorMessage: "Value is invalid",
  spinTexts: ["Previous", "Next"],
  shortWeekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  countries: TUI_ENGLISH_LANGUAGE_COUNTRIES
};
var TUI_ENGLISH_LANGUAGE_KIT = {
  cancel: "Cancel",
  done: "Done",
  more: "More",
  otherDate: "Other date...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Choose day", "Choose range", "Choose days"],
  range: ["from", "to"],
  countTexts: ["Plus", "Minus"],
  time: {
    "MM:SS": "MM:SS",
    "HH:MM": "HH:MM",
    "HH:MM AA": "HH:MM AA",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS AA": "HH:MM:SS AA",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS",
    "HH:MM:SS.MSS AA": "HH:MM:SS.MSS AA",
    "HH AA": "HH AA",
    HH: "HH",
    "MM:SS.MSS": "MM:SS.MSS",
    "SS.MSS": "SS.MSS"
  },
  dateTexts: {
    "dd/mm/yyyy": "DD/MM/YYYY",
    "mm/dd/yyyy": "MM/DD/YYYY",
    "yyyy/mm/dd": "YYYY/MM/DD"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Show password", "Hide password"],
  copyTexts: ["Copy", "Copied"],
  shortCalendarMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  pagination: ["Previous page", "Next page"],
  fileTexts: {
    loadingError: "Upload failed",
    preview: "Preview",
    remove: "Remove"
  },
  inputFileTexts: {
    defaultLabelSingle: "or drop it here",
    defaultLabelMultiple: "or drop them here",
    defaultLinkSingle: "Choose a file",
    defaultLinkMultiple: "Choose files",
    maxSizeRejectionReason: "File is larger than",
    formatRejectionReason: "Wrong file type",
    drop: "Drop file here",
    dropMultiple: "Drop files here"
  },
  multiSelectTexts: {
    all: "Select all",
    none: "Select none"
  },
  confirm: {
    yes: "Yes",
    no: "No"
  },
  previewTexts: { rotate: "Rotate" },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  },
  phoneSearch: "Type country or code",
  dayRangePeriods: [
    "For all the time",
    "Today",
    "Yesterday",
    "Current week",
    "Current month",
    "Previous month"
  ]
};
var TUI_ENGLISH_LANGUAGE_LAYOUT = {
  inputSearch: {
    popular: "Popular",
    history: "Recent",
    placeholder: "Type query",
    hotkey: "to search",
    all: "All",
    empty: "Nothing found"
  }
};
var TUI_ENGLISH_LANGUAGE = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
  name: "english"
}, TUI_ENGLISH_LANGUAGE_CORE), TUI_ENGLISH_LANGUAGE_KIT), TUI_ENGLISH_LANGUAGE_ADDON_TABLE), TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE), TUI_ENGLISH_LANGUAGE_ADDON_EDITOR), TUI_ENGLISH_LANGUAGE_ADDON_DOC), TUI_ENGLISH_LANGUAGE_LAYOUT);

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-tokens.mjs
var TUI_DEFAULT_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_LANGUAGE" : "", { factory: () => TUI_ENGLISH_LANGUAGE });
var TUI_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_LANGUAGE" : "", { factory: () => signal(inject(TUI_DEFAULT_LANGUAGE)) });
var TUI_LANGUAGE_LOADER = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_LOADER" : "");
var TUI_LANGUAGE_STORAGE_KEY = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_STORAGE_KEY" : "", { factory: () => "tuiLanguage" });

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-utils.mjs
function tuiExtractI18n(key) {
  return (language = inject(TUI_LANGUAGE)) => computed(() => language()[key]);
}
async function normalizeCommonJSImport(importPromise) {
  return importPromise.then((m) => m.default || m);
}
function tuiLoadLanguage(language, loader) {
  return from(normalizeCommonJSImport(loader(language))).pipe(map((module) => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]));
}
function tuiAsyncLoadLanguage(language, loader, fallback) {
  return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}
var TuiLanguageSwitcherService = class _TuiLanguageSwitcherService extends BehaviorSubject {
  constructor() {
    super(tuiAsyncLoadLanguage(inject(WA_LOCAL_STORAGE)?.getItem(inject(TUI_LANGUAGE_STORAGE_KEY)) || null, inject(TUI_LANGUAGE_LOADER, {
      optional: true
    }), inject(TUI_DEFAULT_LANGUAGE)));
    this.fallback = inject(TUI_DEFAULT_LANGUAGE);
    this.key = inject(TUI_LANGUAGE_STORAGE_KEY);
    this.storage = inject(WA_LOCAL_STORAGE);
    this.loader = inject(TUI_LANGUAGE_LOADER, {
      optional: true
    });
  }
  get language() {
    return this.storage?.getItem(this.key) || this.fallback.name;
  }
  setLanguage(language) {
    this.storage?.setItem(this.key, language);
    this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
  }
  clear() {
    this.storage?.removeItem(this.key);
    this.next(of(this.fallback));
  }
  static {
    this.ɵfac = function TuiLanguageSwitcherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLanguageSwitcherService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiLanguageSwitcherService,
      factory: _TuiLanguageSwitcherService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLanguageSwitcherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-observables.mjs
function tuiCloseWatcher() {
  return new Observable((subscriber) => {
    let watcher;
    const setup = () => {
      watcher = getWatcher();
      watcher.onclose = () => setup();
      watcher.oncancel = (event) => {
        event.preventDefault();
        subscriber.next();
      };
    };
    setup();
    return () => watcher.destroy();
  });
}
function getWatcher() {
  try {
    return new CloseWatcher();
  } catch {
    return { destroy: () => {
    } };
  }
}
function tuiControlValue(control) {
  return new Observable((subscriber) => control?.valueChanges?.pipe(startWith(control.value)).subscribe(subscriber));
}
function tuiTypedFromEvent(target, event, options = {}) {
  return fromEvent(target, event, options);
}
function tuiStopPropagation() {
  return tap((event) => event.stopPropagation());
}
function tuiIfMap(project, predicate = Boolean) {
  return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
function tuiScrollFrom(element) {
  return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiTakeUntilDestroyed(destroyRef) {
  return pipe(takeUntil(NEVER.pipe(takeUntilDestroyed(destroyRef), catchError(() => EMPTY), defaultIfEmpty(null))));
}
var tuiUntrackedScheduler = {
  now: queueScheduler.now.bind(queueScheduler),
  schedule(work, delay2, state) {
    return queueScheduler.schedule(function(s) {
      return untracked(() => work.call(this, s));
    }, delay2, state);
  }
};
function tuiWatch(cdr = inject(ChangeDetectorRef)) {
  return tap(() => cdr.markForCheck());
}
function tuiZonefull(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => zone.run(() => subscriber.next(value)),
    error: (error) => zone.run(() => subscriber.error(error)),
    complete: () => zone.run(() => subscriber.complete())
  }));
}
function tuiZonefree(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone = inject(NgZone)) {
  return pipe(tuiZonefree(zone), tuiZonefull(zone));
}
var TuiZoneScheduler = class {
  constructor(zoneConditionFn, scheduler = asyncScheduler) {
    this.zoneConditionFn = zoneConditionFn;
    this.scheduler = scheduler;
  }
  now() {
    return this.scheduler.now();
  }
  schedule(...args) {
    return this.zoneConditionFn(() => this.scheduler.schedule(...args));
  }
};
function tuiZonefreeScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.runOutsideAngular.bind(zone), scheduler);
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-tokens.mjs
var TUI_REDUCED_MOTION = new InjectionToken(ngDevMode ? "TUI_REDUCED_MOTION" : "", {
  factory: () => inject(DOCUMENT).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
});
var TUI_ANIMATIONS_SPEED = new InjectionToken(ngDevMode ? "TUI_ANIMATIONS_SPEED" : "", { factory: () => inject(TUI_REDUCED_MOTION) ? 0 : 1 });
var TUI_ASSETS_PATH = new InjectionToken(ngDevMode ? "TUI_ASSETS_PATH" : "", {
  factory: () => "assets/taiga-ui/icons"
});
function tuiAssetsPathProvider(useValue) {
  return {
    provide: TUI_ASSETS_PATH,
    useValue
  };
}
var TUI_AUXILIARY = new InjectionToken(ngDevMode ? "TUI_AUXILIARY" : "", {
  factory: () => null
});
function tuiAsAuxiliary(x) {
  return tuiProvide(TUI_AUXILIARY, x);
}
var TUI_MEDIA = new InjectionToken(ngDevMode ? "TUI_MEDIA" : "", {
  factory: () => ({
    mobile: 768,
    desktopSmall: 1280,
    desktopLarge: Infinity
  })
});
var TUI_BREAKPOINT = new InjectionToken(ngDevMode ? "TUI_BREAKPOINT" : "", {
  factory: () => {
    const size = tuiWindowSize(inject(WA_WINDOW));
    const media = inject(TUI_MEDIA);
    const sorted = Object.values(media).sort((a, b) => a - b);
    const invert = Object.keys(media).reduce((ret, key) => __spreadProps(__spreadValues({}, ret), {
      [media[key]]: key
    }), {});
    return computed(() => {
      const { width } = size();
      const key = sorted.find((size2) => size2 > width);
      const index = key || sorted[sorted.length - 1] || 0;
      return invert[index] ?? "desktopLarge";
    });
  }
});
var COMMON_ICONS = {
  check: "@tui.check",
  close: "@tui.x",
  error: "@tui.circle-alert",
  more: "@tui.chevron-right",
  search: "@tui.search",
  ellipsis: "@tui.ellipsis",
  decrement: "@tui.chevron-left",
  increment: "@tui.chevron-right"
};
var [TUI_COMMON_ICONS, tuiCommonIconsProvider] = tuiCreateOptions(COMMON_ICONS);
var TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
var TUI_DARK_MODE_KEY = new InjectionToken(ngDevMode ? "TUI_DARK_MODE_KEY" : "", { factory: () => TUI_DARK_MODE_DEFAULT_KEY });
var TUI_DARK_MODE = new InjectionToken(ngDevMode ? "TUI_DARK_MODE" : "", {
  factory: () => {
    const storage = inject(WA_LOCAL_STORAGE);
    const key = inject(TUI_DARK_MODE_KEY);
    const saved = storage?.getItem(key);
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const result = signal(saved ? saved === "true" : media.matches);
    const set = result.set.bind(result);
    const pin = (value) => {
      storage?.setItem(key, String(value));
      set(value);
    };
    fromEvent(media, "change").pipe(filter(() => !storage?.getItem(key)), takeUntilDestroyed()).subscribe(() => set(media.matches));
    return Object.assign(result, {
      set: pin,
      update: (updater) => pin(updater(result())),
      reset: () => {
        storage?.removeItem(key);
        set(media.matches);
      }
    });
  }
});
var TUI_DEFAULT_DATE_FORMAT = {
  mode: "dd/mm/yyyy",
  separator: "."
};
var TUI_DATE_FORMAT = new InjectionToken(ngDevMode ? "TUI_DATE_FORMAT" : "", { factory: () => signal(TUI_DEFAULT_DATE_FORMAT) });
function tuiDateFormatProvider(options) {
  return {
    provide: TUI_DATE_FORMAT,
    useFactory: () => {
      const parent = inject(TUI_DATE_FORMAT, { optional: true, skipSelf: true });
      return computed(() => __spreadValues(__spreadValues({}, parent?.() || TUI_DEFAULT_DATE_FORMAT), options));
    }
  };
}
var TUI_MONTHS = new InjectionToken(ngDevMode ? "TUI_MONTHS" : "", {
  factory: tuiExtractI18n("months")
});
var TUI_CLOSE_WORD = new InjectionToken(ngDevMode ? "TUI_CLOSE_WORD" : "", {
  factory: tuiExtractI18n("close")
});
var TUI_BACK_WORD = new InjectionToken(ngDevMode ? "TUI_BACK_WORD" : "", {
  factory: tuiExtractI18n("back")
});
var TUI_CLEAR_WORD = new InjectionToken(ngDevMode ? "TUI_CLEAR_WORD" : "", {
  factory: tuiExtractI18n("clear")
});
var TUI_NOTHING_FOUND_MESSAGE = new InjectionToken(ngDevMode ? "TUI_NOTHING_FOUND_MESSAGE" : "", { factory: tuiExtractI18n("nothingFoundMessage") });
var TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_ERROR_MESSAGE" : "", { factory: tuiExtractI18n("defaultErrorMessage") });
var TUI_SPIN_TEXTS = new InjectionToken(ngDevMode ? "TUI_SPIN_TEXTS" : "", {
  factory: tuiExtractI18n("spinTexts")
});
var TUI_SHORT_WEEK_DAYS = new InjectionToken(ngDevMode ? "TUI_SHORT_WEEK_DAYS" : "", { factory: tuiExtractI18n("shortWeekDays") });
var TUI_ICON_START = new InjectionToken(ngDevMode ? "TUI_ICON_START" : "", {
  factory: () => ""
});
var TUI_ICON_END = new InjectionToken(ngDevMode ? "TUI_ICON_END" : "", {
  factory: () => ""
});
var TUI_ICON_REGISTRY = new InjectionToken(ngDevMode ? "TUI_ICON_REGISTRY" : "", { factory: () => ({}) });
function tuiIconsProvider(icons) {
  return {
    provide: TUI_ICON_REGISTRY,
    useFactory: () => __spreadValues(__spreadValues({}, inject(TUI_ICON_REGISTRY, { skipSelf: true, optional: true }) || {}), Object.fromEntries(Object.entries(icons).map(([key, value]) => [
      key,
      `"data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}"`
    ])))
  };
}
var TUI_ICON_RESOLVER = new InjectionToken(ngDevMode ? "TUI_ICON_RESOLVER" : "", {
  factory: () => {
    const path = inject(TUI_ASSETS_PATH);
    return (icon) => `${path}/${icon.replace(/@[a-z]+\./i, "").replaceAll(".", "/")}.svg`;
  }
});
function tuiGetIconMode(icon) {
  return icon?.match(/@([^.]*)\./)?.[1] || icon || void 0;
}
function tuiInjectIconResolver() {
  const icons = inject(TUI_ICON_REGISTRY);
  const resolver = inject(TUI_ICON_RESOLVER);
  return (icon) => {
    if (!icon || icon.includes("/")) {
      return icon.replace(/@[a-z]+\./i, "");
    }
    return icon.startsWith("@font.") ? icon.replace("@font.", "") : icons[icon] ?? resolver(icon);
  };
}
function tuiIconResolverProvider(useValue) {
  return { provide: TUI_ICON_RESOLVER, useValue };
}
var TUI_DEFAULT_NUMBER_FORMAT = {
  precision: Number.NaN,
  decimalSeparator: ".",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  rounding: "truncate",
  decimalMode: "pad",
  negativePattern: "prefixFirst"
};
var TUI_NUMBER_FORMAT = new InjectionToken(ngDevMode ? "TUI_NUMBER_FORMAT" : "", { factory: () => signal(TUI_DEFAULT_NUMBER_FORMAT) });
function tuiNumberFormatProvider(options) {
  return {
    provide: TUI_NUMBER_FORMAT,
    useFactory: () => {
      const parent = inject(TUI_NUMBER_FORMAT, { optional: true, skipSelf: true });
      return computed(() => __spreadValues(__spreadValues({}, parent?.() || TUI_DEFAULT_NUMBER_FORMAT), options));
    }
  };
}
var TUI_SELECTION_STREAM = new InjectionToken(ngDevMode ? "TUI_SELECTION_STREAM" : "", {
  factory: () => {
    const doc = inject(DOCUMENT);
    return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
  }
});
var TUI_TEXTFIELD_VALUE = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_VALUE" : "");
var TUI_VALIDATION_ERRORS = new InjectionToken(ngDevMode ? "TUI_VALIDATION_ERRORS" : "", { factory: () => ({}) });
var tuiValidationErrorsProvider = (valueOrFactory) => tuiProvideOptions(TUI_VALIDATION_ERRORS, valueOrFactory, {});
var TUI_VIEWPORT = new InjectionToken(ngDevMode ? "TUI_VIEWPORT" : "", {
  factory: () => {
    const win = inject(WA_WINDOW);
    return {
      type: "viewport",
      getClientRect() {
        const { height = 0, offsetTop = 0 } = win.visualViewport || {};
        const rect2 = {
          top: 0,
          left: 0,
          right: win.innerWidth,
          bottom: win.innerHeight,
          width: win.innerWidth,
          height: height + offsetTop || win.innerHeight,
          x: 0,
          y: 0
        };
        return __spreadProps(__spreadValues({}, rect2), {
          toJSON: () => JSON.stringify(rect2)
        });
      }
    };
  }
});
function tuiAsViewport(accessor) {
  return tuiProvide(TUI_VIEWPORT, accessor);
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var OPT = {
  self: true,
  optional: true
};
var Styles2 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-icons-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: [':where([tuiIcons][data-tui-version="5.15.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: clamp(0, var(--t-font-offset, 0) - 10, 1) }:where([tuiIcons][data-tui-version="5.15.0"]):before,:where([tuiIcons][data-tui-version="5.15.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.15.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles2, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-icons-${TUI_VERSION}`,
      styles: [':where([tuiIcons][data-tui-version="5.15.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: clamp(0, var(--t-font-offset, 0) - 10, 1) }:where([tuiIcons][data-tui-version="5.15.0"]):before,:where([tuiIcons][data-tui-version="5.15.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.15.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.15.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n']
    }]
  }], null, null);
})();
var TuiIcons = class _TuiIcons {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.nothing = tuiWithStyles(Styles2);
    this.start = computed(() => this.resolve(this.iconStart()));
    this.end = computed(() => this.resolve(this.iconEnd()));
    this.startMode = computed(() => tuiGetIconMode(this.iconStart()));
    this.endMode = computed(() => tuiGetIconMode(this.iconEnd()));
    this.iconEnd = input(inject(TUI_ICON_END, OPT));
    this.iconStart = input(inject(TUI_ICON_START, OPT));
  }
  resolve(icon) {
    if (!icon) {
      return null;
    }
    return tuiGetIconMode(icon) === "font" ? `'${this.resolver(icon)}'` : `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIcons,
      hostAttrs: ["data-tui-version", "5.15.0", "tuiIcons", ""],
      hostVars: 6,
      hostBindings: function TuiIcons_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-icon-end", ctx.endMode())("data-icon-start", ctx.startMode());
          ɵɵstyleProp("--t-icon-end", ctx.end())("--t-icon-start", ctx.start());
        }
      },
      inputs: {
        iconEnd: [1, "iconEnd"],
        iconStart: [1, "iconStart"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        tuiIcons: "",
        "[attr.data-icon-end]": "endMode()",
        "[attr.data-icon-start]": "startMode()",
        "[style.--t-icon-end]": "end()",
        "[style.--t-icon-start]": "start()"
      }
    }]
  }], null, null);
})();
function tuiIconStart(value, options) {
  return tuiDirectiveBinding(TuiIcons, "iconStart", value, options);
}
function tuiIconEnd(value, options = {}) {
  return tuiDirectiveBinding(TuiIcons, "iconEnd", value, options);
}
var TuiWithIcons = class _TuiWithIcons {
  static {
    this.ɵfac = function TuiWithIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithIcons,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-button.mjs
var TUI_BUTTON_DEFAULT_OPTIONS = {
  appearance: "primary",
  size: "l"
};
var [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions(TUI_BUTTON_DEFAULT_OPTIONS);
var Styles3 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-button-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiButton]:where(*[data-tui-version="5.15.0"]),[tuiIconButton]:where(*[data-tui-version="5.15.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: .5rem 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));min-block-size:fit-content;block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.15.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>img,[tuiButton]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.15.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.15.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.15.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: .125rem .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: .375rem 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.15.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.15.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.15.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.15.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.15.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical]{--t-margin: 0rem !important;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2);line-height:inherit!important;--t-line-height: var(--tui-lh) !important}[tuiButton]:where(*[data-tui-version="5.15.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.15.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.15.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-icon-start]:after{display:none}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles3, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-button-${TUI_VERSION}`,
      styles: ['[tuiButton]:where(*[data-tui-version="5.15.0"]),[tuiIconButton]:where(*[data-tui-version="5.15.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: .5rem 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));min-block-size:fit-content;block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.15.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>img,[tuiButton]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.15.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.15.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.15.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.15.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.15.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.15.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: .125rem .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: .375rem 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.15.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.15.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.15.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.15.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.15.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.15.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical]{--t-margin: 0rem !important;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2);line-height:inherit!important;--t-line-height: var(--tui-lh) !important}[tuiButton]:where(*[data-tui-version="5.15.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.15.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.15.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.15.0"])[tuiIconButton]:where(*[data-tui-version="5.15.0"])[data-icon-start]:after{display:none}\n']
    }]
  }], null, null);
})();
var TuiButton = class _TuiButton {
  constructor() {
    this.nothing = tuiWithStyles(Styles3);
    this.size = input(inject(TUI_BUTTON_OPTIONS).size);
  }
  static {
    this.ɵfac = function TuiButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButton,
      selectors: [["a", "tuiButton", ""], ["button", "tuiButton", ""], ["a", "tuiIconButton", ""], ["button", "tuiIconButton", ""]],
      hostVars: 1,
      hostBindings: function TuiButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
    type: Directive,
    args: [{
      selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
      providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-validator.mjs
var TuiValidator = class _TuiValidator {
  constructor() {
    this.onChange = EMPTY_FUNCTION;
    this.validate = Validators.nullValidator;
  }
  registerOnValidatorChange(onChange) {
    this.onChange = onChange;
  }
  ngOnChanges() {
    this.onChange();
  }
  static {
    this.ɵfac = function TuiValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiValidator,
      selectors: [["", "tuiValidator", ""]],
      inputs: {
        validate: [0, "tuiValidator", "validate"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiValidator, true)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidator, [{
    type: Directive,
    args: [{
      selector: "[tuiValidator]",
      inputs: ["validate: tuiValidator"],
      providers: [tuiProvide(NG_VALIDATORS, TuiValidator, true)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-items-handlers.mjs
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: signal(String),
  identityMatcher: signal(TUI_DEFAULT_IDENTITY_MATCHER),
  disabledItemHandler: signal(TUI_FALSE_HANDLER)
};
var TUI_ITEMS_HANDLERS = new InjectionToken(ngDevMode ? "TUI_ITEMS_HANDLERS" : "", {
  factory: () => TUI_DEFAULT_ITEMS_HANDLERS
});
function tuiItemsHandlersProvider(options) {
  return {
    provide: TUI_ITEMS_HANDLERS,
    deps: [[new Optional(), new SkipSelf(), TUI_ITEMS_HANDLERS]],
    useFactory: (parent) => __spreadValues({
      stringify: signal(parent?.stringify() ?? TUI_DEFAULT_ITEMS_HANDLERS.stringify()),
      identityMatcher: signal(parent?.identityMatcher() ?? TUI_DEFAULT_ITEMS_HANDLERS.identityMatcher()),
      disabledItemHandler: signal(parent?.disabledItemHandler() ?? TUI_DEFAULT_ITEMS_HANDLERS.disabledItemHandler())
    }, options)
  };
}
var TuiItemsHandlersDirective = class _TuiItemsHandlersDirective {
  constructor() {
    this.handlers = inject(TUI_ITEMS_HANDLERS, {
      skipSelf: true
    });
    this.stringify = input(this.handlers.stringify());
    this.identityMatcher = input(this.handlers.identityMatcher());
    this.disabledItemHandler = input(this.handlers.disabledItemHandler());
  }
  static {
    this.ɵfac = function TuiItemsHandlersDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsHandlersDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsHandlersDirective,
      inputs: {
        stringify: [1, "stringify"],
        identityMatcher: [1, "identityMatcher"],
        disabledItemHandler: [1, "disabledItemHandler"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ITEMS_HANDLERS, _TuiItemsHandlersDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersDirective, [{
    type: Directive,
    args: [{
      providers: [tuiProvide(TUI_ITEMS_HANDLERS, TuiItemsHandlersDirective)]
    }]
  }], null, null);
})();
var TuiWithItemsHandlers = class _TuiWithItemsHandlers {
  static {
    this.ɵfac = function TuiWithItemsHandlers_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithItemsHandlers)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithItemsHandlers,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiItemsHandlersDirective,
        inputs: ["stringify", "stringify", "identityMatcher", "identityMatcher", "disabledItemHandler", "disabledItemHandler"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithItemsHandlers, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiItemsHandlersDirective,
        inputs: ["stringify", "identityMatcher", "disabledItemHandler"]
      }]
    }]
  }], null, null);
})();
var TuiItemsHandlersValidator = class _TuiItemsHandlersValidator extends TuiValidator {
  constructor() {
    super(...arguments);
    this.handlers = inject(TuiItemsHandlersDirective);
    this.initialized = false;
    this.update = effect(() => {
      this.handlers.disabledItemHandler();
      if (this.initialized) {
        this.onChange();
      } else {
        this.initialized = true;
      }
    });
    this.disabledItemHandler = (value) => Array.isArray(value) ? value.some((item) => this.handlers.disabledItemHandler()(item)) : Boolean(value) && this.handlers.disabledItemHandler()(value);
    this.validate = ({
      value
    }) => this.disabledItemHandler(value) ? {
      tuiDisabledItem: value
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiItemsHandlersValidator_BaseFactory;
      return function TuiItemsHandlersValidator_Factory(__ngFactoryType__) {
        return (ɵTuiItemsHandlersValidator_BaseFactory || (ɵTuiItemsHandlersValidator_BaseFactory = ɵɵgetInheritedFactory(_TuiItemsHandlersValidator)))(__ngFactoryType__ || _TuiItemsHandlersValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsHandlersValidator,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiItemsHandlersValidator, true)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersValidator, [{
    type: Directive,
    args: [{
      providers: [tuiProvide(NG_VALIDATORS, TuiItemsHandlersValidator, true)]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  static ɵfac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static ɵprov = ɵɵdefineService({
    token: _Platform,
    factory: _Platform.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static ɵfac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static ɵprov = ɵɵdefineService({
    token: _Directionality,
    factory: _Directionality.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Service
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _RecycleViewRepeaterStrategy = class {
  viewCacheSize = 20;
  _viewCache = [];
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  _isInitialized = false;
  _rawDir = "";
  change = new EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static ɵfac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [ɵɵProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static ɵfac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  _viewport = null;
  _itemSize;
  _minBufferPx;
  _maxBufferPx;
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentScrolled() {
    this._updateRenderedRange();
  }
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentRendered() {
  }
  onRenderedOffsetChanged() {
  }
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static ɵfac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [ɵɵProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  _scrolled = new Subject();
  _scrolledCount = 0;
  scrollContainers = /* @__PURE__ */ new Map();
  register(target) {
    if (!this.scrollContainers.has(target)) {
      this.scrollContainers.set(target, target.elementScrolled().subscribe(() => this._scrolled.next(target)));
    }
  }
  deregister(target) {
    const ref = this.scrollContainers.get(target);
    if (ref) {
      ref.unsubscribe();
      this.scrollContainers.delete(target);
    }
  }
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_, target) => {
      if (this._targetContainsElement(target, elementOrElementRef)) {
        scrollingContainers.push(target);
      }
    });
    return scrollingContainers;
  }
  _targetContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let targetElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == targetElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static ɵfac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static ɵprov = ɵɵdefineService({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Service
  }], null, null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  elementScrolled() {
    return this._elementScrolled;
  }
  getElementRef() {
    return this.elementRef;
  }
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  measureScrollOffset(from2) {
    const LEFT2 = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from2 == "top") {
      return el.scrollTop;
    }
    if (from2 == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from2 == "start") {
      from2 = isRtl ? RIGHT : LEFT2;
    } else if (from2 == "end") {
      from2 = isRtl ? LEFT2 : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from2 == LEFT2) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from2 == LEFT2) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from2 == LEFT2) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static ɵfac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], null, null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  _viewportSize = null;
  _change = new Subject();
  _document = inject(DOCUMENT);
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body?.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body?.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  change(throttleTime2 = DEFAULT_RESIZE_TIME) {
    return throttleTime2 > 0 ? this._change.pipe(auditTime(throttleTime2)) : this._change;
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static ɵfac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static ɵprov = ɵɵdefineService({
    token: _ViewportRuler,
    factory: _ViewportRuler.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Service
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCdkVirtualScrollable_BaseFactory;
    return function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return (ɵCdkVirtualScrollable_BaseFactory || (ɵCdkVirtualScrollable_BaseFactory = ɵɵgetInheritedFactory(_CdkVirtualScrollable)))(__ngFactoryType__ || _CdkVirtualScrollable);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _CdkVirtualScrollable,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], null, null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CDK_VIRTUAL_SCROLL_VIEWPORT = new InjectionToken("CDK_VIRTUAL_SCROLL_VIEWPORT");
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  _detachedSubject = new Subject();
  _renderedRangeSubject = new Subject();
  _renderedContentOffsetSubject = new Subject();
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  appendOnly = false;
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  _contentWrapper;
  renderedRangeStream = this._renderedRangeSubject;
  renderedContentOffset = this._renderedContentOffsetSubject.pipe(filter((offset) => offset !== null), distinctUntilChanged());
  _totalContentSize = 0;
  _totalContentWidth = signal("", ...ngDevMode ? [{
    debugName: "_totalContentWidth"
  }] : []);
  _totalContentHeight = signal("", ...ngDevMode ? [{
    debugName: "_totalContentHeight"
  }] : []);
  _renderedContentTransform;
  _renderedRange = {
    start: 0,
    end: 0
  };
  _dataLength = 0;
  _viewportSize = 0;
  _forOf = null;
  _renderedContentOffset = 0;
  _renderedContentOffsetNeedsRewrite = false;
  _changeDetectionNeeded = signal(false, ...ngDevMode ? [{
    debugName: "_changeDetectionNeeded"
  }] : []);
  _runAfterChangeDetection = [];
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
    const ref = effect(() => {
      if (this._changeDetectionNeeded()) {
        this._doChangeDetection();
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "ref"
    } : {}), {
      injector: inject(ApplicationRef).injector
    }));
    inject(DestroyRef).onDestroy(() => void ref.destroy());
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(startWith(null), auditTime(0, SCROLL_SCHEDULER), takeUntil(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  getDataLength() {
    return this._dataLength;
  }
  getViewportSize() {
    return this._viewportSize;
  }
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  measureScrollOffset(from2) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from2 ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  measureViewportOffset(from2) {
    let fromRect;
    const LEFT2 = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from2 == "start") {
      fromRect = isRtl ? RIGHT : LEFT2;
    } else if (from2 == "end") {
      fromRect = isRtl ? LEFT2 : RIGHT;
    } else if (from2) {
      fromRect = from2;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (untracked(this._changeDetectionNeeded)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.ngZone.run(() => {
          this._changeDetectionNeeded.set(true);
        });
      });
    });
  }
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
      afterNextRender(() => {
        this._changeDetectionNeeded.set(false);
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  _calculateSpacerSize() {
    this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
    this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
  }
  static ɵfac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [ɵɵProvidersFeature([{
      provide: CdkScrollable,
      useFactory: () => inject(VIRTUAL_SCROLLABLE, {
        optional: true
      }) || inject(_CdkVirtualScrollViewport)
    }, {
      provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
      useExisting: _CdkVirtualScrollViewport
    }]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 1, 0);
        ɵɵprojection(2);
        ɵɵdomElementEnd();
        ɵɵdomElement(3, "div", 2);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵstyleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
      }
    },
    styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useFactory: () => inject(VIRTUAL_SCROLLABLE, {
          optional: true
        }) || inject(CdkVirtualScrollViewport)
      }, {
        provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
        useExisting: CdkVirtualScrollViewport
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n',
      styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect2 = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect2.left : rect2.right;
  }
  return direction === "start" ? rect2.top : rect2.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = new _RecycleViewRepeaterStrategy();
  _viewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, {
    skipSelf: true
  });
  viewChange = new Subject();
  _dataSourceChanges = new Subject();
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  dataStream = this._dataSourceChanges.pipe(startWith(null), pairwise(), switchMap(([prev, cur]) => this._changeDataSource(prev, cur)), shareReplay(1));
  _differ = null;
  _data = [];
  _renderedItems = [];
  _renderedRange = {
    start: 0,
    end: 0
  };
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static ɵfac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]"
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2] - this.measureScrollOffset(from2);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCdkVirtualScrollableElement_BaseFactory;
    return function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return (ɵCdkVirtualScrollableElement_BaseFactory || (ɵCdkVirtualScrollableElement_BaseFactory = ɵɵgetInheritedFactory(_CdkVirtualScrollableElement)))(__ngFactoryType__ || _CdkVirtualScrollableElement);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [ɵɵProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], null, null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
  static ɵfac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [ɵɵProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static ɵfac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static ɵfac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-animated.mjs
var TUI_ENTER = "tui-enter";
var TUI_LEAVE = "tui-leave";
var TUI_ANIMATED = "tui-animated";
var TUI_LEAVE_KEY = `${TUI_LEAVE}_${TUI_VERSION.split(".")[0]}`;
var TuiAnimated = class _TuiAnimated {
  constructor() {
    this.renderer = inject(ViewContainerRef)._hostLView?.[11];
    this.el = tuiInjectElement();
    afterNextRender(() => this.remove());
    if (this.renderer && isPlatformBrowser(inject(PLATFORM_ID))) {
      wrap(this.renderer.delegate || this.renderer);
    }
  }
  remove() {
    if (this.el.isConnected && !this.el.getAnimations?.().length) {
      this.el.classList.remove(TUI_ENTER);
    }
  }
  static {
    this.ɵfac = function TuiAnimated_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAnimated)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAnimated,
      selectors: [["", "tuiAnimated", ""]],
      hostAttrs: [1, "tui-enter", "tui-animated"],
      hostBindings: function TuiAnimated_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel.self", function TuiAnimated_animationcancel_self_HostBindingHandler() {
            return ctx.remove();
          })("animationend.self", function TuiAnimated_animationend_self_HostBindingHandler() {
            return ctx.remove();
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAnimated, [{
    type: Directive,
    args: [{
      selector: "[tuiAnimated]",
      host: {
        class: `${TUI_ENTER} ${TUI_ANIMATED}`,
        "(animationcancel.self)": "remove()",
        "(animationend.self)": "remove()"
      }
    }]
  }], () => [], null);
})();
function wrap(renderer) {
  if (renderer.data[TUI_LEAVE_KEY]) {
    return;
  }
  const {
    removeChild
  } = renderer;
  renderer.data[TUI_LEAVE_KEY] = true;
  renderer.removeChild = (parent, el, host) => {
    if (!tuiIsElement(el) || !el.classList.contains(TUI_ANIMATED)) {
      removeChild.call(renderer, parent, el, host);
      return;
    }
    el.classList.remove(TUI_ENTER);
    const {
      length
    } = el.getAnimations?.() || [];
    el.classList.add(TUI_LEAVE);
    const animations = el.getAnimations?.() ?? [];
    const last = animations[animations.length - 1];
    const finish = () => {
      if (!parent || parent.contains(el)) {
        removeChild.call(renderer, parent, el, host);
      }
    };
    if (animations.length > length && last) {
      last.onfinish = finish;
      last.oncancel = finish;
    } else {
      finish();
    }
  };
}

// node_modules/@ng-web-apis/platform/fesm2022/ng-web-apis-platform.mjs
var WA_MOBILE_REGEXP = /(?:android|bb\d|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|^(?:1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8c]))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-)/i;
var WA_SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
var WA_IOS_REG_EXP = /ipad|iphone|ipod/i;
function isIos({ userAgent, maxTouchPoints }) {
  return WA_IOS_REG_EXP.test(userAgent) || WA_SAFARI_REG_EXP.test(userAgent) && maxTouchPoints > 1;
}
var WA_IS_IOS = new InjectionToken(ngDevMode ? "[WA_IS_IOS]" : "", {
  factory: () => isIos(inject(WA_NAVIGATOR))
});
var WA_IS_MOBILE = new InjectionToken(ngDevMode ? "[WA_IS_MOBILE]" : "", { factory: () => WA_MOBILE_REGEXP.test(inject(WA_USER_AGENT)) });
var WA_IS_ANDROID = new InjectionToken(ngDevMode ? "[WA_IS_ANDROID]" : "", { factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS) });
var WA_IS_E2E = new InjectionToken(ngDevMode ? "[WA_IS_E2E]" : "", {
  factory: () => !!inject(WA_WINDOW).Cypress || inject(WA_NAVIGATOR).webdriver
});
var WA_IS_TOUCH = new InjectionToken(ngDevMode ? "[WA_IS_TOUCH]" : "", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
var WA_IS_WEBKIT = new InjectionToken(ngDevMode ? "[WA_IS_WEBKIT]" : "", {
  factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage
});
var WA_REDUCED_MOTION = new InjectionToken(ngDevMode ? "[WA_REDUCED_MOTION]" : "", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(prefers-reduced-motion: reduce)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
function isSafari({ ownerDocument: doc }) {
  const win = doc?.defaultView;
  const isMacOsSafari = win.safari !== void 0 && win.safari?.pushNotification?.toString() === "[object SafariRemoteNotification]";
  const isIosSafari = !!win.navigator?.vendor?.includes("Apple") && !win.navigator?.userAgent?.includes("CriOS") && !win.navigator?.userAgent?.includes("FxiOS");
  return isMacOsSafari || isIosSafari;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_Conditional_0_Template(rf, ctx) {
}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template_div_mousedown_capture_prevent_0_listener() {
      return 0;
    });
    ɵɵelement(1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext();
    ɵɵclassProp("t-bar_has-horizontal", bars_r1[1]);
  }
}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template_div_mousedown_capture_prevent_0_listener() {
      return 0;
    });
    ɵɵelement(1, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext();
    ɵɵclassProp("t-bar_has-vertical", bars_r1[0]);
  }
}
function TuiScrollControls_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template, 2, 2, "div", 0);
    ɵɵconditionalCreate(1, TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template, 2, 2, "div", 1);
  }
  if (rf & 2) {
    const bars_r1 = ctx;
    ɵɵconditional(bars_r1[0] ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(bars_r1[1] ? 1 : -1);
  }
}
function TuiScrollControls_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiScrollControls_Conditional_1_Conditional_0_Template, 2, 2);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional((tmp_1_0 = ɵɵpipeBind1(1, 1, ctx_r1.refresh$)) ? 0 : -1, tmp_1_0);
  }
}
var _c02 = ["*"];
function TuiScrollbar_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-hover-mode", ctx_r0.options.mode === "hover");
  }
}
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var TUI_SCROLL_REF = new InjectionToken(ngDevMode ? "TUI_SCROLL_REF" : "", {
  factory: () => new ElementRef(inject(DOCUMENT).documentElement)
});
var TuiScrollRef = class _TuiScrollRef {
  static {
    this.ɵfac = function TuiScrollRef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollRef)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollRef,
      selectors: [["", "tuiScrollRef", ""]],
      features: [ɵɵProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRef, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollRef]",
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
    }]
  }], null, null);
})();
var TuiScrollControlsService = class _TuiScrollControlsService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.scrollRef = inject(TUI_SCROLL_REF);
    this.stream$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef.nativeElement;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
  static {
    this.ɵfac = function TuiScrollControlsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollControlsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiScrollControlsService,
      factory: _TuiScrollControlsService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiScrollbarService = class _TuiScrollbarService extends Observable {
  constructor() {
    super((subscriber) => this.scroll$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.element = inject(TUI_SCROLL_REF).nativeElement;
    this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, "mousedown").pipe(filter(({
      target
    }) => target !== this.el), map((event) => this.getScrolled(event, 0.5, 0.5))), tuiTypedFromEvent(this.el, "mousedown").pipe(tuiZonefree(), switchMap((event) => {
      const {
        ownerDocument
      } = this.el;
      const rect2 = this.el.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect2);
      const horizontal = getOffsetHorizontal(event, rect2);
      return tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, "mouseup")));
    })));
  }
  getScrolled({
    clientY,
    clientX
  }, offsetY, offsetX) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el;
    const {
      top,
      left,
      right,
      width,
      height
    } = this.el.parentElement.getBoundingClientRect();
    const rtl = this.el.matches('[dir="rtl"] :scope');
    const inline = rtl ? right : left;
    const multiplier = rtl ? -1 : 1;
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
    const scrolledLeft = (clientX - inline - offsetWidth * offsetX * multiplier) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
  static {
    this.ɵfac = function TuiScrollbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiScrollbarService,
      factory: _TuiScrollbarService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarService, [{
    type: Injectable
  }], () => [], null);
})();
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var MIN_WIDTH = 24;
var TuiScrollbarPosition = class _TuiScrollbarPosition extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.scrollRef = inject(TUI_SCROLL_REF);
    this.stream$ = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el)).pipe(tuiZonefree(), map(() => {
      const dimension = {
        scrollTop: this.el.scrollTop,
        scrollHeight: this.el.scrollHeight,
        clientHeight: this.el.clientHeight,
        scrollLeft: this.el.scrollLeft,
        scrollWidth: this.el.scrollWidth,
        clientWidth: this.el.clientWidth
      };
      const thumb = `${this.getThumb(dimension) * 100}%`;
      const view = `${this.getView(dimension) * 100}%`;
      return this.tuiScrollbar() === "vertical" ? {
        top: thumb,
        height: view
      } : {
        insetInlineStart: thumb,
        width: view
      };
    }));
    this.tuiScrollbar = input("vertical");
  }
  get el() {
    return this.scrollRef.nativeElement;
  }
  getThumb(dimension) {
    const compensation = this.getCompensation(dimension) || this.getView(dimension);
    return Math.abs(this.getScrolled(dimension) * (1 - compensation));
  }
  getView(dimension) {
    return this.tuiScrollbar() === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
  }
  getScrolled(dimension) {
    return this.tuiScrollbar() === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
  }
  getCompensation(dimension) {
    if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar() === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar() === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar() === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
  }
  static {
    this.ɵfac = function TuiScrollbarPosition_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarPosition)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollbarPosition,
      inputs: {
        tuiScrollbar: [1, "tuiScrollbar"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarPosition, [{
    type: Directive
  }], () => [], null);
})();
var TuiScrollbarDirective = class _TuiScrollbarDirective {
  constructor() {
    this.scrollRef = inject(TUI_SCROLL_REF);
    this.style = tuiInjectElement().style;
    this.scrollSub = inject(TuiScrollbarService).pipe(takeUntilDestroyed()).subscribe(([top, left]) => {
      this.scrollRef.nativeElement.style.scrollBehavior = "auto";
      if (this.tuiScrollbar() === "horizontal") {
        this.scrollRef.nativeElement.scrollLeft = left;
      } else {
        this.scrollRef.nativeElement.scrollTop = top;
      }
      this.scrollRef.nativeElement.style.scrollBehavior = "";
    });
    this.styleSub = inject(TuiScrollbarPosition).pipe(takeUntilDestroyed()).subscribe((position) => Object.assign(this.style, position));
    this.tuiScrollbar = input("vertical");
  }
  static {
    this.ɵfac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollbarDirective,
      selectors: [["", "tuiScrollbar", ""]],
      inputs: {
        tuiScrollbar: [1, "tuiScrollbar"]
      },
      features: [ɵɵProvidersFeature([TuiScrollbarService]), ɵɵHostDirectivesFeature([{
        directive: TuiScrollbarPosition,
        inputs: ["tuiScrollbar", "tuiScrollbar"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollbar]",
      providers: [TuiScrollbarService],
      hostDirectives: [{
        directive: TuiScrollbarPosition,
        inputs: ["tuiScrollbar"]
      }]
    }]
  }], null, null);
})();
var TUI_DEFAULT_SCROLLBAR_OPTIONS = {
  mode: "always"
};
var [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);
var TuiScrollControls = class _TuiScrollControls {
  constructor() {
    this.scrollable = inject(CdkScrollable, {
      optional: true,
      host: true
    });
    this.el = tuiInjectElement();
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.refresh$ = inject(TuiScrollControlsService);
  }
  ngOnInit() {
    this.scrollable?.getElementRef().nativeElement.prepend(this.el);
  }
  static {
    this.ɵfac = function TuiScrollControls_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollControls)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollControls,
      selectors: [["tui-scroll-controls"]],
      features: [ɵɵProvidersFeature([TuiScrollControlsService])],
      decls: 2,
      vars: 1,
      consts: [["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "t-bar_has-horizontal"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "t-bar_has-vertical"], ["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "vertical", 1, "t-thumb"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
      template: function TuiScrollControls_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiScrollControls_Conditional_0_Template, 0, 0)(1, TuiScrollControls_Conditional_1_Template, 2, 3);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nativeScrollbar ? 0 : 1);
        }
      },
      dependencies: [AsyncPipe, TuiAnimated, TuiScrollbarDirective],
      styles: ["[_nghost-%COMP%]{position:sticky;z-index:1;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}  [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}  [tuiScrollable]::-webkit-scrollbar,   [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar[_ngcontent-%COMP%]{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter[_ngcontent-%COMP%], .t-bar.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-bar_vertical[_ngcontent-%COMP%]{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{inset-block-end:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{inset-inline-end:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:var(--tui-curve-productive-standard);position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
    type: Component,
    args: [{
      selector: "tui-scroll-controls",
      imports: [AsyncPipe, TuiAnimated, TuiScrollbarDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiScrollControlsService],
      template: '@if (nativeScrollbar) {\n} @else {\n    @if (refresh$ | async; as bars) {\n        @if (bars[0]) {\n            <div\n                tuiAnimated\n                class="t-bar t-bar_vertical"\n                [class.t-bar_has-horizontal]="bars[1]"\n                (mousedown.capture.prevent)="(0)"\n            >\n                <div\n                    tuiScrollbar="vertical"\n                    class="t-thumb"\n                ></div>\n            </div>\n        }\n        @if (bars[1]) {\n            <div\n                tuiAnimated\n                class="t-bar t-bar_horizontal"\n                [class.t-bar_has-vertical]="bars[0]"\n                (mousedown.capture.prevent)="(0)"\n            >\n                <div\n                    tuiScrollbar="horizontal"\n                    class="t-thumb"\n                ></div>\n            </div>\n        }\n    }\n}\n',
      styles: [":host{position:sticky;z-index:1;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}::ng-deep [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}::ng-deep [tuiScrollable]::-webkit-scrollbar,::ng-deep [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter,.t-bar.tui-leave{animation-name:tuiFade}.t-bar_vertical{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal{inset-block-end:.5rem}.t-bar_has-vertical{inset-inline-end:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:var(--tui-curve-productive-standard);position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
    }]
  }], null, null);
})();
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var TuiScrollbar = class _TuiScrollbar {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_SCROLLBAR_OPTIONS);
    this.isIOS = inject(WA_IS_IOS);
    this.browserScrollRef = new ElementRef(this.el);
  }
  get delegated() {
    return this.scrollRef !== this.el || this.options.mode === "native";
  }
  get scrollRef() {
    return this.browserScrollRef.nativeElement;
  }
  set scrollRef(element) {
    this.browserScrollRef.nativeElement = element;
  }
  scrollIntoView(detail) {
    if (this.delegated) {
      return;
    }
    const {
      offsetHeight,
      offsetWidth
    } = detail;
    const {
      offsetTop,
      offsetLeft
    } = tuiGetElementOffset(this.scrollRef, detail);
    const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
    const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
    this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
  }
  static {
    this.ɵfac = function TuiScrollbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollbar,
      selectors: [["tui-scrollbar"]],
      hostVars: 2,
      hostBindings: function TuiScrollbar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-scrollable.stop", function TuiScrollbar_tui_scrollable_stop_HostBindingHandler($event) {
            return ctx.scrollRef = $event.detail;
          })("tui-scroll-into-view.stop", function TuiScrollbar_tui_scroll_into_view_stop_HostBindingHandler($event) {
            return ctx.scrollIntoView($event.detail);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.options.mode === "hidden"));
        }
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(_TuiScrollbar).browserScrollRef
      }]), ɵɵHostDirectivesFeature([TuiScrollRef])],
      ngContentSelectors: _c02,
      decls: 3,
      vars: 3,
      consts: [[1, "t-bars", 3, "t-hover-mode"], [1, "t-content"], [1, "t-bars"]],
      template: function TuiScrollbar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, TuiScrollbar_Conditional_0_Template, 1, 2, "tui-scroll-controls", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵconditional(!ctx.isIOS && ctx.options.mode !== "native" && ctx.options.mode !== "hidden" ? 0 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-content_delegated", ctx.delegated);
        }
      },
      dependencies: [TuiScrollControls],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:0}[_nghost-%COMP%]:hover > .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
    type: Component,
    args: [{
      selector: "tui-scrollbar",
      imports: [TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(TuiScrollbar).browserScrollRef
      }],
      hostDirectives: [TuiScrollRef],
      host: {
        "[class._native-hidden]": 'options.mode !== "native" && (!isIOS || options.mode === "hidden")',
        [`(${TUI_SCROLLABLE}.stop)`]: "scrollRef = $event.detail",
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: "scrollIntoView($event.detail)"
      },
      template: `@if (!isIOS && options.mode !== 'native' && options.mode !== 'hidden') {
    <tui-scroll-controls
        class="t-bars"
        [class.t-hover-mode]="options.mode === 'hover'"
    />
}
<div
    class="t-content"
    [class.t-content_delegated]="delegated"
>
    <ng-content />
</div>
`,
      styles: [":host{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:0}:host:hover>.t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
    }]
  }], null, null);
})();
var TuiScrollIntoView = class _TuiScrollIntoView {
  constructor() {
    this.el = tuiInjectElement();
    this.destroyRef = inject(DestroyRef);
    this.tuiScrollIntoView = input();
    this.dispatchEvent = effect(() => {
      const scroll = this.tuiScrollIntoView();
      if (!scroll) {
        return;
      }
      timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
          bubbles: true,
          detail: this.el
        }));
      });
    });
  }
  static {
    this.ɵfac = function TuiScrollIntoView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollIntoView)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollIntoView,
      selectors: [["", "tuiScrollIntoView", ""]],
      inputs: {
        tuiScrollIntoView: [1, "tuiScrollIntoView"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollIntoView]"
    }]
  }], null, null);
})();
var TuiScrollable = class _TuiScrollable {
  constructor() {
    this.el = tuiInjectElement();
  }
  ngOnInit() {
    this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
      bubbles: true,
      detail: this.el
    }));
  }
  static {
    this.ɵfac = function TuiScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollable)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollable,
      selectors: [["", "tuiScrollable", ""]],
      features: [ɵɵHostDirectivesFeature([TuiScrollRef])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollable, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollable]",
      hostDirectives: [TuiScrollRef]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var [TUI_LINK_OPTIONS, tuiLinkOptionsProvider] = tuiCreateOptions({
  appearance: "action"
});
var Styles4 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-link-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiLink]:where(*[data-tui-version="5.15.0"]){transition-property:color,text-decoration,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version="5.15.0"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version="5.15.0"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version="5.15.0"])[tuiIcons]:where(:not([data-icon-start=font])):before,[tuiLink]:where(*[data-tui-version="5.15.0"])[tuiIcons]:where(:not([data-icon-end=font])):after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,[tuiLink]:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after{display:inline;font-size:var(--tui-icon-size, 1rem);vertical-align:sub}[tuiLink]:where(*[data-tui-version="5.15.0"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media(hover:hover)and (pointer:fine){[tuiLink]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-appearance=""]{text-decoration-line:underline;text-decoration-style:solid}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles4, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-link-${TUI_VERSION}`,
      styles: ['[tuiLink]:where(*[data-tui-version="5.15.0"]){transition-property:color,text-decoration,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version="5.15.0"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version="5.15.0"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version="5.15.0"])[tuiIcons]:where(:not([data-icon-start=font])):before,[tuiLink]:where(*[data-tui-version="5.15.0"])[tuiIcons]:where(:not([data-icon-end=font])):after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,[tuiLink]:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after{display:inline;font-size:var(--tui-icon-size, 1rem);vertical-align:sub}[tuiLink]:where(*[data-tui-version="5.15.0"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media(hover:hover)and (pointer:fine){[tuiLink]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.15.0"])[data-appearance=""]{text-decoration-line:underline;text-decoration-style:solid}\n']
    }]
  }], null, null);
})();
var TuiLink = class _TuiLink {
  constructor() {
    this.nothing = tuiWithStyles(Styles4);
  }
  static {
    this.ɵfac = function TuiLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLink)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLink,
      selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
      hostAttrs: ["tuiLink", ""],
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
    type: Directive,
    args: [{
      selector: "a[tuiLink], button[tuiLink]",
      providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        tuiLink: ""
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/font-watcher/index.esm.js
var IFRAME = {
  position: "fixed",
  visibility: "hidden",
  pointerEvents: "none"
};
var BODY = {
  height: "fit-content",
  lineHeight: "1em",
  fontSize: "calc(env(preferred-text-scale) * 1em)"
};
function tuiFontSizeWatcher(callback, iframe = globalThis.document.createElement("iframe")) {
  const resize = () => {
    const { innerWidth = 0, outerWidth = 0, devicePixelRatio = 0 } = iframe.ownerDocument.defaultView || {};
    iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
  };
  iframe.ownerDocument.body.append(iframe);
  iframe.ownerDocument.defaultView?.addEventListener("resize", resize);
  const doc = iframe.contentDocument;
  const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));
  Object.assign(iframe.style, IFRAME);
  Object.assign(doc?.body.style || {}, BODY);
  doc?.head.insertAdjacentHTML("beforeend", '<meta name="text-scale" content="scale">');
  doc?.documentElement.style.setProperty("font", "-apple-system-body");
  doc?.body.insertAdjacentText("beforeend", ".".repeat(1e3));
  observer.observe(doc?.body || iframe);
  resize();
  return () => {
    observer.disconnect();
    iframe.ownerDocument.defaultView?.removeEventListener("resize", resize);
    iframe.remove();
  };
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-font-size.mjs
var TUI_FONT_SIZE_HANDLER = new InjectionToken(ngDevMode ? "TUI_FONT_SIZE_HANDLER" : "");
var TuiFontSize = class _TuiFontSize {
  constructor() {
    this.handler = inject(TUI_FONT_SIZE_HANDLER, {
      optional: true
    });
    this.enabled = !inject(_TuiFontSize, {
      optional: true,
      skipSelf: true
    }) && isPlatformBrowser(inject(PLATFORM_ID)) && typeof ResizeObserver !== "undefined";
    this.nothing = inject(DestroyRef).onDestroy(this.enabled && this.handler ? tuiFontSizeWatcher(this.handler, inject(DOCUMENT).createElement("iframe")) : EMPTY_FUNCTION);
  }
  static {
    this.ɵfac = function TuiFontSize_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFontSize)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFontSize
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFontSize, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/event-plugins/fesm2022/taiga-ui-event-plugins.mjs
var LongtapEvent = class extends CustomEvent {
  constructor(type, _a) {
    var _b = _a, {
      clientX,
      clientY
    } = _b, eventInitDict = __objRest(_b, [
      "clientX",
      "clientY"
    ]);
    super(type, __spreadProps(__spreadValues({}, eventInitDict), {
      detail: {
        clientX,
        clientY
      }
    }));
  }
};
var isIos2 = ({
  userAgent,
  maxTouchPoints
}) => /ipad|iphone|ipod/i.test(userAgent) || /^((?!chrome|android).)*safari/i.test(userAgent) && maxTouchPoints > 1;
var TAP_DELAY = 700;
var SAFE_NAVIGATOR = typeof navigator === "undefined" ? null : navigator;
var MOVE_THRESHOLD = 15;
var LongtapEventPlugin = class extends EventManagerPlugin {
  constructor() {
    super(...arguments);
    this.isIOS = !!SAFE_NAVIGATOR && isIos2(SAFE_NAVIGATOR);
  }
  addEventListener(element, _event, handler) {
    const removeLongtapEventPolyfill = this.isIOS ? this.listenTouchEvents(element) : this.listenContextmenuEvent(element);
    element.addEventListener("longtap", handler);
    return () => {
      removeLongtapEventPolyfill();
      element.removeEventListener("longtap", handler);
    };
  }
  supports(event) {
    return event === "longtap";
  }
  listenContextmenuEvent(element) {
    return this.manager.addEventListener(element, "contextmenu.prevent.stop", ({
      clientX,
      clientY
    }) => {
      this.dispatchLongtapEvent(element, clientX, clientY);
    });
  }
  listenTouchEvents(element) {
    let longTapTimeout = null;
    let touchStartCoords = null;
    const reset = () => {
      clearTimeout(longTapTimeout);
      touchStartCoords = null;
      longTapTimeout = null;
    };
    const removeTouchstartListener = this.manager.addEventListener(element, "touchstart.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      touchStartCoords = {
        clientX,
        clientY
      };
      longTapTimeout = setTimeout(() => {
        this.dispatchLongtapEvent(element, clientX, clientY);
        reset();
      }, TAP_DELAY);
    });
    const removeTouchmoveListener = this.manager.addEventListener(element, "touchmove.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch || !touchStartCoords) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      if (Math.hypot(clientX - touchStartCoords.clientX, clientY - touchStartCoords.clientY) <= MOVE_THRESHOLD) {
        return;
      }
      reset();
    });
    const removeTouchcancelListener = this.manager.addEventListener(element, "touchcancel.zoneless.passive", reset);
    const removeTouchendListener = this.manager.addEventListener(element, "touchend.zoneless.passive", reset);
    return () => {
      removeTouchstartListener();
      removeTouchmoveListener();
      removeTouchcancelListener();
      removeTouchendListener();
    };
  }
  dispatchLongtapEvent(element, clientX, clientY) {
    element.dispatchEvent(new LongtapEvent("longtap", {
      clientX,
      clientY,
      bubbles: false,
      cancelable: false,
      composed: false
    }));
  }
};
var TimedEventPlugin = class extends EventManagerPlugin {
  supports(event) {
    return this.regExp.test(event);
  }
  getDelay(event) {
    const match = this.regExp.exec(event);
    if (!match?.groups) {
      throw new Error(`Invalid event: ${event}`);
    }
    const {
      time,
      units
    } = match.groups;
    switch (units) {
      case "ms":
        return Number(time);
      case "s":
        return Number(time) * 1e3;
      default:
        throw new Error(`Invalid event: ${event}`);
    }
  }
  unwrap(event) {
    return event.replace(this.regExp, "");
  }
};
var DebounceEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.debounce~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handler(event);
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var AbstractEventPlugin = class _AbstractEventPlugin extends EventManagerPlugin {
  constructor() {
    super(inject(DOCUMENT));
  }
  supports(event) {
    return event.includes(this.modifier);
  }
  unwrap(event) {
    return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
  }
  static {
    this.ɵfac = function AbstractEventPlugin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractEventPlugin)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbstractEventPlugin,
      factory: _AbstractEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractEventPlugin, [{
    type: Injectable
  }], () => [], null);
})();
var GLOBAL_HANDLER = new InjectionToken(ngDevMode ? "[GLOBAL_HANDLER]: Global event target handler" : "", {
  factory: () => {
    const document2 = inject(DOCUMENT);
    return (name) => name.split(".").reduce((obj, prop) => obj?.[prop], document2.defaultView);
  }
});
var GlobalEventPlugin = class _GlobalEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.handler = inject(GLOBAL_HANDLER);
    this.modifier = ">";
  }
  addEventListener(_, event, handler) {
    return this.manager.addEventListener(this.handler(event.split(">")[0]), event.split(">")?.[1] ?? "", handler);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGlobalEventPlugin_BaseFactory;
      return function GlobalEventPlugin_Factory(__ngFactoryType__) {
        return (ɵGlobalEventPlugin_BaseFactory || (ɵGlobalEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_GlobalEventPlugin)))(__ngFactoryType__ || _GlobalEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GlobalEventPlugin,
      factory: _GlobalEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var OptionsEventPlugin = class _OptionsEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "capture.once.passive";
  }
  supports(event) {
    return event.includes(".") && !this.unwrap(event).includes(".");
  }
  addEventListener(element, event, handler) {
    const unwrap = this.unwrap(event);
    const capture = event.includes(".capture");
    element.addEventListener(unwrap, handler, {
      capture,
      once: event.includes(".once"),
      passive: event.includes(".passive")
    });
    return () => element.removeEventListener(unwrap, handler, {
      capture
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOptionsEventPlugin_BaseFactory;
      return function OptionsEventPlugin_Factory(__ngFactoryType__) {
        return (ɵOptionsEventPlugin_BaseFactory || (ɵOptionsEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_OptionsEventPlugin)))(__ngFactoryType__ || _OptionsEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OptionsEventPlugin,
      factory: _OptionsEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var PreventEventPlugin = class _PreventEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".prevent";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.preventDefault();
      handler(event2);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPreventEventPlugin_BaseFactory;
      return function PreventEventPlugin_Factory(__ngFactoryType__) {
        return (ɵPreventEventPlugin_BaseFactory || (ɵPreventEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_PreventEventPlugin)))(__ngFactoryType__ || _PreventEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PreventEventPlugin,
      factory: _PreventEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ResizePlugin = class _ResizePlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "resize";
  }
  supports(event) {
    return event === "resize";
  }
  addEventListener(element, event, handler) {
    if (typeof ResizeObserver === "undefined" || !(element instanceof Element)) {
      element.addEventListener(event, handler);
      return () => element.removeEventListener(event, handler);
    }
    const observer = new ResizeObserver(handler);
    observer.observe(element);
    return () => observer.disconnect();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵResizePlugin_BaseFactory;
      return function ResizePlugin_Factory(__ngFactoryType__) {
        return (ɵResizePlugin_BaseFactory || (ɵResizePlugin_BaseFactory = ɵɵgetInheritedFactory(_ResizePlugin)))(__ngFactoryType__ || _ResizePlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ResizePlugin,
      factory: _ResizePlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizePlugin, [{
    type: Injectable
  }], null, null);
})();
var SelfEventPlugin = class _SelfEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".self";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      if (event2.target === event2.currentTarget) {
        handler(event2);
      }
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSelfEventPlugin_BaseFactory;
      return function SelfEventPlugin_Factory(__ngFactoryType__) {
        return (ɵSelfEventPlugin_BaseFactory || (ɵSelfEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_SelfEventPlugin)))(__ngFactoryType__ || _SelfEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SelfEventPlugin,
      factory: _SelfEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelfEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var StopEventPlugin = class _StopEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".stop";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.stopPropagation();
      handler(event2);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵStopEventPlugin_BaseFactory;
      return function StopEventPlugin_Factory(__ngFactoryType__) {
        return (ɵStopEventPlugin_BaseFactory || (ɵStopEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_StopEventPlugin)))(__ngFactoryType__ || _StopEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StopEventPlugin,
      factory: _StopEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StopEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ThrottleEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.throttle~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      if (timeout !== void 0) {
        return;
      }
      handler(event);
      timeout = setTimeout(() => {
        timeout = void 0;
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var ZonelessPlugin = class _ZonelessPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".zoneless";
  }
  addEventListener(element, event, handler) {
    _ZonelessPlugin.ngZone = this.manager.getZone();
    return _ZonelessPlugin.ngZone?.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵZonelessPlugin_BaseFactory;
      return function ZonelessPlugin_Factory(__ngFactoryType__) {
        return (ɵZonelessPlugin_BaseFactory || (ɵZonelessPlugin_BaseFactory = ɵɵgetInheritedFactory(_ZonelessPlugin)))(__ngFactoryType__ || _ZonelessPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ZonelessPlugin,
      factory: _ZonelessPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonelessPlugin, [{
    type: Injectable
  }], null, null);
})();
var PLUGINS = [ZonelessPlugin, SelfEventPlugin, GlobalEventPlugin, OptionsEventPlugin, PreventEventPlugin, ResizePlugin, StopEventPlugin, LongtapEventPlugin, DebounceEventPlugin, ThrottleEventPlugin];
var NG_EVENT_PLUGINS = PLUGINS.map((useClass) => ({
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass
}));
function provideEventPlugins() {
  return NG_EVENT_PLUGINS;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
var TUI_FONT_OFFSET = new InjectionToken(ngDevMode ? "TUI_FONT_OFFSET" : "", { factory: () => signal(0) });
function tuiEnableFontScaling() {
  return {
    provide: TUI_FONT_SIZE_HANDLER,
    useFactory: () => {
      const offset = inject(TUI_FONT_OFFSET);
      const { documentElement } = inject(DOCUMENT);
      return (size) => {
        const current = tuiClamp(size, 17, 28) - 17;
        offset.set(current);
        return documentElement.style.setProperty("--t-font-offset", String(current));
      };
    }
  };
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiGetDuration(speed) {
  return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
var KEYS = [
  "Spacebar",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Left",
  "Right",
  "End",
  "Home"
];
function tuiIsEditingKey(key = "") {
  return key.length === 1 || KEYS.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-popups") {
  return !!tuiGetElementObscures(el)?.some((el2) => !el2.closest(exceptSelector));
}
var DEFAULT = {
  apis: "stable",
  fontScaling: true,
  scrollbars: "custom"
};
var TUI_OPTIONS = new InjectionToken(ngDevMode ? "TUI_OPTIONS" : "");
function provideTaiga(config = {}) {
  const options = __spreadValues(__spreadValues({}, DEFAULT), config);
  const providers = [
    {
      provide: REMOVE_STYLES_ON_COMPONENT_DESTROY,
      useValue: false
    },
    {
      provide: TUI_OPTIONS,
      useValue: options
    },
    provideEventPlugins(),
    provideAppInitializer(() => {
      const doc = inject(DOCUMENT);
      const meta = inject(Meta);
      const mode = inject(TUI_DARK_MODE);
      if (options.scrollbars === "custom") {
        doc.documentElement.classList.add("tui-zero-scrollbar");
      }
      if (tuiIsPresent(options.mode)) {
        mode.set(options.mode === "dark");
      }
      if (options.fontScaling && !meta.getTag('name="text-scale"')) {
        meta.addTag({ name: "text-scale", content: "scale" });
      }
      effect(() => {
        if (mode()) {
          doc.body.setAttribute("tuiTheme", "dark");
        } else {
          doc.body.removeAttribute("tuiTheme");
        }
      });
    })
  ];
  if (options.fontScaling) {
    providers.push(tuiEnableFontScaling());
  }
  return providers;
}
var TUI_LIQUID_GLASS = new InjectionToken(ngDevMode ? "TUI_LIQUID_GLASS" : "", {
  factory: () => {
    const { apis } = inject(TUI_OPTIONS);
    return apis !== "stable" && (apis.all || !!apis.liquidGlass);
  }
});
function tuiOverrideOptions(override, fallback) {
  return (directive, options) => {
    const result = directive || __spreadValues({}, options || fallback);
    Object.keys(override).forEach((key) => {
      result[key] = override[key];
    });
    return result;
  };
}
var SIZES = {
  xxs: 0,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6
};
function tuiSizeBigger(size, biggerThanSize = "s") {
  return SIZES[size] > SIZES[biggerThanSize];
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-cell.mjs
var [TUI_CELL_OPTIONS, tuiCellOptionsProvider] = tuiCreateOptions({
  height: "normal",
  size: "l"
});
var Styles5 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-cell-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiCell]:where(*[data-tui-version="5.15.0"]){--t-pad: .125rem 1rem;--t-radius: var(--tui-radius-s);transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-pad);min-block-size:var(--t-block-size);border-radius:var(--t-radius)}[tuiCell]:where(*[data-tui-version="5.15.0"]):is(button,label):not(:disabled):active{background:var(--tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version="5.15.0"]):disabled,[tuiCell]:where(*[data-tui-version="5.15.0"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.15.0"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version="5.15.0"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.15.0"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.15.0"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-block-size);align-items:center;align-self:stretch;margin-inline-start:auto}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard)}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:0}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{flex:3 7 30%;align-items:normal;text-align:start;gap:.25rem .5rem}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]{flex-direction:row;justify-content:space-between}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:3 7 30%;max-inline-size:max-content;white-space:nowrap}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:7 3 70%}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]{justify-content:space-between}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle]~[tuiTitle]{flex:7 3 70%;max-inline-size:max-content;margin-inline-start:auto;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version="5.15.0"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:.375rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-block-size: calc(var(--tui-height-s) - .125rem);--t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s][data-height=spacious]{--t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s][data-height=compact]{--t-block-size: calc(var(--tui-height-s) - .25rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiAvatar]{--t-size: 1.5rem;--t-radius: var(--tui-radius-m);font:var(--tui-typography-body-m);font-size:.5625rem;margin:.1875rem 0}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-block-size: calc(var(--tui-height-m) - .75rem);--t-pad: .375rem 1rem;gap:.5rem .75rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m][data-height=spacious]{--t-pad: 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m][data-height=compact]{--t-block-size: calc(var(--tui-height-m) - .5rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-s);gap:.0625rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-ui-xs)}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiAvatar]{--t-size: 2rem;--t-radius: var(--tui-radius-m);align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: .5rem 1rem;--t-radius: var(--tui-radius-l);gap:.5rem 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l][data-height=spacious]{--t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l][data-height=compact]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiAvatar]{--t-size: 2.5rem;font:var(--tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version="5.15.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellStretch]{inline-size:100%;margin-inline:-1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]{display:grid;grid-auto-flow:column;grid-auto-columns:fit-content(100%);grid-template-columns:auto 1fr}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]:has(>[tuiTitle]:first-child){grid-template-columns:1fr}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]>*{grid-row:1}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]._rearranged [tuiAccessories]{grid-row:2}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiTitle],[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiSubtitle]{display:grid}@media(hover:hover)and (pointer:fine){a[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:disabled,[data-state=disabled]){background:var(--tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:has(input:disabled)){background:var(--tui-background-neutral-1);cursor:pointer}}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles5, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-cell-${TUI_VERSION}`,
      styles: ['[tuiCell]:where(*[data-tui-version="5.15.0"]){--t-pad: .125rem 1rem;--t-radius: var(--tui-radius-s);transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-pad);min-block-size:var(--t-block-size);border-radius:var(--t-radius)}[tuiCell]:where(*[data-tui-version="5.15.0"]):is(button,label):not(:disabled):active{background:var(--tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version="5.15.0"]):disabled,[tuiCell]:where(*[data-tui-version="5.15.0"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.15.0"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version="5.15.0"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.15.0"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.15.0"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-block-size);align-items:center;align-self:stretch;margin-inline-start:auto}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard)}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:0}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{flex:3 7 30%;align-items:normal;text-align:start;gap:.25rem .5rem}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]{flex-direction:row;justify-content:space-between}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]>[tuiFade]:first-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:3 7 30%;max-inline-size:max-content;white-space:nowrap}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]>[tuiFade]:last-child,[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]>[tuiFade]:last-child{flex:7 3 70%}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiTitle]~[tuiSubtitle]{justify-content:space-between}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle]~[tuiTitle]{flex:7 3 70%;max-inline-size:max-content;margin-inline-start:auto;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version="5.15.0"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version="5.15.0"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:.375rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-block-size: calc(var(--tui-height-s) - .125rem);--t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s][data-height=spacious]{--t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s][data-height=compact]{--t-block-size: calc(var(--tui-height-s) - .25rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiAvatar]{--t-size: 1.5rem;--t-radius: var(--tui-radius-m);font:var(--tui-typography-body-m);font-size:.5625rem;margin:.1875rem 0}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-block-size: calc(var(--tui-height-m) - .75rem);--t-pad: .375rem 1rem;gap:.5rem .75rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m][data-height=spacious]{--t-pad: 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m][data-height=compact]{--t-block-size: calc(var(--tui-height-m) - .5rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-s);gap:.0625rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-ui-xs)}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiAvatar]{--t-size: 2rem;--t-radius: var(--tui-radius-m);align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: .5rem 1rem;--t-radius: var(--tui-radius-l);gap:.5rem 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l][data-height=spacious]{--t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l][data-height=compact]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiAvatar]{--t-size: 2.5rem;font:var(--tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version="5.15.0"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version="5.15.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellStretch]{inline-size:100%;margin-inline:-1rem}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]{display:grid;grid-auto-flow:column;grid-auto-columns:fit-content(100%);grid-template-columns:auto 1fr}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]:has(>[tuiTitle]:first-child){grid-template-columns:1fr}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]>*{grid-row:1}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]._rearranged [tuiAccessories]{grid-row:2}[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiTitle],[tuiCell]:where(*[data-tui-version="5.15.0"])[tuiCellResponsive]._rearranged [tuiTitle] [tuiSubtitle]{display:grid}@media(hover:hover)and (pointer:fine){a[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:disabled,[data-state=disabled]){background:var(--tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version="5.15.0"]):hover:not(:has(input:disabled)){background:var(--tui-background-neutral-1);cursor:pointer}}\n']
    }]
  }], null, null);
})();
var TuiCell = class _TuiCell {
  constructor() {
    this.nothing = tuiWithStyles(Styles5);
    this.options = inject(TUI_CELL_OPTIONS);
    this.size = input(this.options.size, {
      alias: "tuiCell"
    });
    this.height = input(this.options.height, {
      alias: "tuiCellHeight"
    });
  }
  static {
    this.ɵfac = function TuiCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCell)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCell,
      selectors: [["", "tuiCell", "", 5, "ng-template"]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiCell", ""],
      hostVars: 2,
      hostBindings: function TuiCell_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-height", ctx.height())("data-size", ctx.size() || ctx.options.size || "l");
        }
      },
      inputs: {
        size: [1, "tuiCell", "size"],
        height: [1, "tuiCellHeight", "height"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "s"
      })])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCell, [{
    type: Directive,
    args: [{
      selector: "[tuiCell]:not(ng-template)",
      providers: [tuiButtonOptionsProvider({
        size: "s"
      })],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiCell: "",
        "[attr.data-height]": "height()",
        "[attr.data-size]": 'size() || options.size || "l"'
      }
    }]
  }], null, null);
})();
var TuiCellResponsive = class _TuiCellResponsive {
  constructor() {
    this.offset = inject(TUI_FONT_OFFSET);
  }
  static {
    this.ɵfac = function TuiCellResponsive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCellResponsive)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCellResponsive,
      selectors: [["", "tuiCell", "", "tuiCellResponsive", ""]],
      hostVars: 2,
      hostBindings: function TuiCellResponsive_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_rearranged", ctx.offset() > 10);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCellResponsive, [{
    type: Directive,
    args: [{
      selector: "[tuiCell][tuiCellResponsive]",
      host: {
        "[class._rearranged]": "offset() > 10"
      }
    }]
  }], null, null);
})();
var TuiCellStretch = class _TuiCellStretch {
  constructor() {
    this.isMobile = inject(WA_IS_MOBILE);
  }
  static {
    this.ɵfac = function TuiCellStretch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCellStretch)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCellStretch,
      selectors: [["", "tuiCell", "", "tuiCellStretch", ""]],
      hostVars: 2,
      hostBindings: function TuiCellStretch_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("border-radius", ctx.isMobile ? 0 : null);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCellStretch, [{
    type: Directive,
    args: [{
      selector: "[tuiCell][tuiCellStretch]",
      host: {
        "[style.border-radius]": "isMobile ? 0 : null"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.control$ = new BehaviorSubject(null);
    this.sub = this.control$.pipe(switchMap((control) => control?.events || of(null)), delay(0), tuiZonefree(), tuiTakeUntilDestroyed()).subscribe(() => this.handleValidation());
    this.tuiNativeValidator = input("Invalid");
    this.id = "";
  }
  get control() {
    return this.control$.value;
  }
  validate(control) {
    this.control$.next(control);
    return null;
  }
  handleValidation() {
    const invalid = !!this.control?.touched && this.control?.invalid;
    this.el.closest("tui-textfield")?.classList.toggle("tui-invalid", invalid);
    this.el.setCustomValidity?.(invalid ? this.tuiNativeValidator() : "");
    this.el.setAttribute("aria-invalid", String(invalid));
    if (!this.id && invalid) {
      this.doc.dispatchEvent(new CustomEvent("tui-validator", {
        detail: this
      }));
      this.el.setAttribute("aria-describedby", this.id);
    }
  }
  static {
    this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeValidator,
      selectors: [["", "tuiNativeValidator", ""]],
      hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
            return ctx.handleValidation();
          });
        }
      },
      inputs: {
        tuiNativeValidator: [1, "tuiNativeValidator"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-radio.mjs
var [TUI_RADIO_OPTIONS, tuiRadioOptionsProvider] = tuiCreateOptions({
  size: "m",
  appearance: ({
    checked
  }) => checked ? "primary" : "outline-grayscale"
});
var TuiRadioComponent = class _TuiRadioComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.options = inject(TUI_RADIO_OPTIONS);
    this.appearance = tuiAppearance(this.options.appearance(this.el));
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = input(this.options.size);
  }
  ngOnInit() {
    tuiControlValue(this.control).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      const fix = this.control instanceof NgModel && value == null ? this.control.model : value;
      this.el.indeterminate = fix == null && this.el.matches("[tuiCheckbox]");
      this.ngDoCheck();
    });
  }
  ngDoCheck() {
    this.appearance.set(this.options.appearance(this.el));
  }
  static {
    this.ɵfac = function TuiRadioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRadioComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRadioComponent,
      selectors: [["input", "type", "radio", "tuiRadio", ""]],
      hostVars: 4,
      hostBindings: function TuiRadioComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size());
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }, TuiNativeValidator])],
      decls: 0,
      vars: 0,
      template: function TuiRadioComponent_Template(rf, ctx) {
      },
      styles: ['[tuiRadio]:where(*[data-tui-version="5.15.0"]){--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:where(*[data-tui-version="5.15.0"]):disabled._readonly._readonly{opacity:1}[tuiRadio]:where(*[data-tui-version="5.15.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:where(*[data-tui-version="5.15.0"]):checked:before{transform:scale(.5)}[tuiRadio]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: 1rem}[tuiRadio]:where(*[data-tui-version="5.15.0"]):invalid:not([data-mode]),[tuiRadio]:where(*[data-tui-version="5.15.0"])[data-mode~=invalid]{color:#fff}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioComponent, [{
    type: Component,
    args: [{
      selector: 'input[type="radio"][tuiRadio]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        "[attr.data-size]": "size()",
        "[class._readonly]": "!control",
        "[disabled]": "!control || control.disabled"
      },
      styles: ['[tuiRadio]:where(*[data-tui-version="5.15.0"]){--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:where(*[data-tui-version="5.15.0"]):disabled._readonly._readonly{opacity:1}[tuiRadio]:where(*[data-tui-version="5.15.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:where(*[data-tui-version="5.15.0"]):checked:before{transform:scale(.5)}[tuiRadio]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: 1rem}[tuiRadio]:where(*[data-tui-version="5.15.0"]):invalid:not([data-mode]),[tuiRadio]:where(*[data-tui-version="5.15.0"])[data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, null);
})();
var TuiRadioDirective = class _TuiRadioDirective {
  constructor() {
    this.identityMatcher = input(TUI_DEFAULT_IDENTITY_MATCHER);
    const accessor = inject(RadioControlValueAccessor);
    const writeValue = accessor.writeValue.bind(accessor);
    accessor.writeValue = (value) => {
      if (this.identityMatcher()(value, accessor.value)) {
        writeValue(accessor.value);
      } else {
        writeValue(value);
      }
    };
  }
  static {
    this.ɵfac = function TuiRadioDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRadioDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRadioDirective,
      selectors: [["input", "type", "radio", "tuiRadio", "", "identityMatcher", ""]],
      inputs: {
        identityMatcher: [1, "identityMatcher"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioDirective, [{
    type: Directive,
    args: [{
      selector: 'input[type="radio"][tuiRadio][identityMatcher]'
    }]
  }], () => [], null);
})();
var TuiRadio = [TuiRadioComponent, TuiRadioDirective];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-checkbox.mjs
var [TUI_CHECKBOX_OPTIONS, tuiCheckboxOptionsProvider] = tuiCreateOptions({
  size: "m",
  appearance: (el) => el.checked || el.indeterminate ? "primary" : "outline-grayscale",
  icons: {
    checked: () => "@tui.check",
    indeterminate: () => "@tui.minus"
  }
});
var TuiCheckbox = class _TuiCheckbox extends TuiRadioComponent {
  constructor() {
    super(...arguments);
    this.check = tuiIconStart(computed(() => this.options.icons.checked(this.size())));
    this.indeterminate = tuiIconEnd(computed(() => this.options.icons.indeterminate(this.size())));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiCheckbox_BaseFactory;
      return function TuiCheckbox_Factory(__ngFactoryType__) {
        return (ɵTuiCheckbox_BaseFactory || (ɵTuiCheckbox_BaseFactory = ɵɵgetInheritedFactory(_TuiCheckbox)))(__ngFactoryType__ || _TuiCheckbox);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCheckbox,
      selectors: [["input", "type", "checkbox", "tuiCheckbox", ""]],
      features: [ɵɵProvidersFeature([tuiProvide(TUI_RADIO_OPTIONS, TUI_CHECKBOX_OPTIONS)]), ɵɵHostDirectivesFeature([TuiIcons]), ɵɵInheritDefinitionFeature],
      decls: 0,
      vars: 0,
      template: function TuiCheckbox_Template(rf, ctx) {
      },
      styles: [`[tuiCheckbox]:where(*[data-tui-version="5.15.0"]){--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):before{position:absolute;block-size:100%;inline-size:100%;font-size:1rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');transform:scale(0);transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):after{display:none}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):checked:before,[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}[tuiCheckbox]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{font-size:.875rem}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):invalid:not([data-mode]),[tuiCheckbox]:where(*[data-tui-version="5.15.0"])[data-mode~=invalid]{color:#fff}
`],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckbox, [{
    type: Component,
    args: [{
      selector: 'input[type="checkbox"][tuiCheckbox]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_CHECKBOX_OPTIONS)],
      hostDirectives: [TuiIcons],
      styles: [`[tuiCheckbox]:where(*[data-tui-version="5.15.0"]){--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):before{position:absolute;block-size:100%;inline-size:100%;font-size:1rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');transform:scale(0);transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):after{display:none}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):checked:before,[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}[tuiCheckbox]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{font-size:.875rem}[tuiCheckbox]:where(*[data-tui-version="5.15.0"]):invalid:not([data-mode]),[tuiCheckbox]:where(*[data-tui-version="5.15.0"])[data-mode~=invalid]{color:#fff}
`]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken(ngDevMode ? "POLYMORPHEUS_CONTEXT" : "");
function provideContext(useValue) {
  return {
    provide: POLYMORPHEUS_CONTEXT,
    useValue
  };
}
function injectContext(options = {}) {
  return inject(POLYMORPHEUS_CONTEXT, options);
}
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: useValue == null ? [] : [provideContext(useValue)]
    });
  }
};
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
function isPrimitive(value) {
  return Object(value) !== value;
}
var PolymorpheusTemplate = class _PolymorpheusTemplate {
  constructor(template = inject(TemplateRef, {
    self: true
  }), cdr = inject(ChangeDetectorRef)) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  check() {
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusTemplate,
      selectors: [["ng-template", "polymorpheus", ""]],
      inputs: {
        polymorpheus: "polymorpheus"
      },
      exportAs: ["polymorpheus"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var PolymorpheusOutlet = class _PolymorpheusOutlet {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.i = inject(INJECTOR$1);
    this.t = inject(TemplateRef);
    this.content = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  ngOnChanges({
    content
  }) {
    const context = this.getContext();
    const component = isComponent(this.content);
    this.update();
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = new Proxy(ensureContext(context), {
      get: (_, key) => ensureContext(component ? this.context : this.getContext())?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, context == null ? void 0 : proxy);
      this.update();
    } else if ((context instanceof PolymorpheusContext && context.$implicit) != null) {
      this.vcr.createEmbeddedView(this.template, proxy, {
        injector: this.i
      });
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  getContext() {
    return isTemplate(this.content) || isComponent(this.content) ? this.context : new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context ?? {}) : this.content);
  }
  process(content, proxy) {
    this.c = this.vcr.createComponent(content.component, {
      injector: content.createInjector(this.i, proxy)
    });
  }
  update() {
    if (typeof this.context !== "object" || !isComponent(this.content)) {
      return;
    }
    const {
      inputs = []
    } = reflectComponentType(this.content.component) || {};
    for (const {
      templateName
    } of inputs) {
      if (templateName in (this.context ?? {})) {
        this.c?.setInput(templateName, this.context?.[templateName]);
      }
    }
  }
  static {
    this.ɵfac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusOutlet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusOutlet,
      selectors: [["", "polymorpheusOutlet", ""]],
      inputs: {
        content: [0, "polymorpheusOutlet", "content"],
        context: [0, "polymorpheusOutletContext", "context"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
    type: Directive,
    args: [{
      selector: "[polymorpheusOutlet]",
      inputs: ["content: polymorpheusOutlet", "context: polymorpheusOutletContext"]
    }]
  }], null, null);
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}
function ensureContext(context) {
  return isPrimitive(context) ? new PolymorpheusContext(context) : context;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-vcr.mjs
var TuiVCR = class _TuiVCR {
  constructor() {
    this.vcr = inject(ViewContainerRef);
  }
  static {
    this.ɵfac = function TuiVCR_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVCR)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVCR,
      selectors: [["", "tuiVCR", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVCR, [{
    type: Directive,
    args: [{
      selector: "[tuiVCR]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-portals.mjs
var TuiPortal = class _TuiPortal {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(service) {
    this.service = service;
    this.injector = inject(INJECTOR$1);
  }
  open(content, options = {}) {
    return new Observable(($implicit) => this.add(new PolymorpheusComponent(this.component, Injector.create({
      parent: this.injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue: __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
          content,
          $implicit,
          createdAt: Date.now(),
          id: tuiGenerateId(),
          completeWith: (v) => {
            $implicit.next(v);
            $implicit.complete();
          }
        })
      }]
    }))));
  }
  add(component) {
    const ref = this.service.add(component);
    return () => ref.destroy();
  }
  static {
    this.ɵfac = function TuiPortal_Factory(__ngFactoryType__) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPortal,
      factory: _TuiPortal.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortal, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortal, portal);
}
var TuiPortalDirective = class _TuiPortalDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPortal);
    this.options = input({});
    this.open = input(false);
    this.openChange = outputFromObservable(toObservable(this.open).pipe(tuiIfMap(() => this.service.open(this, this.options()).pipe(ignoreElements(), endWith(false))), share()));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPortalDirective_BaseFactory;
      return function TuiPortalDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPortalDirective_BaseFactory || (ɵTuiPortalDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPortalDirective)))(__ngFactoryType__ || _TuiPortalDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPortalDirective,
      inputs: {
        options: [1, "options"],
        open: [1, "open"]
      },
      outputs: {
        openChange: "openChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalDirective, [{
    type: Directive
  }], null, null);
})();
var TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(content, context) {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return content instanceof PolymorpheusComponent ? this.host.addComponent(content) : this.host.addTemplate(content, context);
  }
  static {
    this.ɵfac = function TuiPortalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortalService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPortalService,
      factory: _TuiPortalService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{
    type: Injectable
  }], null, null);
})();
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortals component; perhaps you forgot to wrap your application with tui-root." : "");
  }
};
var TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.anchor = viewChild.required(TuiVCR);
    inject(TuiPortalService).attach(this);
  }
  addComponent(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.anchor().vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplate(templateRef, context) {
    return this.anchor().vcr.createEmbeddedView(templateRef, context);
  }
  static {
    this.ɵfac = function TuiPortals_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortals)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPortals,
      viewQuery: function TuiPortals_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.anchor, TuiVCR, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-popup.mjs
var _c03 = ["*"];
var TuiPopupService = class _TuiPopupService extends TuiPortalService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopupService_BaseFactory;
      return function TuiPopupService_Factory(__ngFactoryType__) {
        return (ɵTuiPopupService_BaseFactory || (ɵTuiPopupService_BaseFactory = ɵɵgetInheritedFactory(_TuiPopupService)))(__ngFactoryType__ || _TuiPopupService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPopupService,
      factory: _TuiPopupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_CDR = "_tuiCdr";
var TuiPopups = class _TuiPopups extends TuiPortals {
  ngAfterViewChecked() {
    for (let i = 0; i < this.anchor().vcr.length; i++) {
      const ref = this.anchor().vcr.get(i);
      if (isEmbeddedViewRef(ref)) {
        ref.context?.[TUI_CDR]?.markForCheck();
      }
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopups_BaseFactory;
      return function TuiPopups_Factory(__ngFactoryType__) {
        return (ɵTuiPopups_BaseFactory || (ɵTuiPopups_BaseFactory = ɵɵgetInheritedFactory(_TuiPopups)))(__ngFactoryType__ || _TuiPopups);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPopups,
      selectors: [["tui-popups"]],
      features: [ɵɵProvidersFeature([tuiProvide(TuiPortalService, TuiPopupService)]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c03,
      decls: 2,
      vars: 0,
      consts: [["tuiVCR", ""]],
      template: function TuiPopups_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelementContainer(1, 0);
        }
      },
      dependencies: [TuiVCR],
      styles: ['[_nghost-%COMP%]{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}[_nghost-%COMP%]    >*{pointer-events:auto}[_nghost-%COMP%]:after{content:"";grid-row:15}'],
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopups, [{
    type: Component,
    args: [{
      selector: "tui-popups",
      imports: [TuiVCR],
      template: "<ng-content/><ng-container tuiVCR />",
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [tuiProvide(TuiPortalService, TuiPopupService)],
      styles: [':host{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}:host ::ng-deep>*{pointer-events:auto}:host:after{content:"";grid-row:15}\n']
    }]
  }], null, null);
})();
function isEmbeddedViewRef(ref) {
  return !!ref && "context" in ref;
}
var TuiPopup = class _TuiPopup {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.template = inject(TemplateRef);
    this.service = inject(TuiPopupService);
    this.show = input(false, {
      alias: "tuiPopup"
    });
  }
  ngOnChanges() {
    this.ref?.destroy();
    if (this.show()) {
      this.ref = this.service.add(this.template, {
        [TUI_CDR]: this.cdr
      });
    }
  }
  ngOnDestroy() {
    this.ref?.destroy();
  }
  static {
    this.ɵfac = function TuiPopup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPopup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopup,
      selectors: [["ng-template", "tuiPopup", ""]],
      inputs: {
        show: [1, "tuiPopup", "show"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopup, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiPopup]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
  return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
  return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
function tuiGetViewportHeight({ document: document2, innerHeight }) {
  return Math.max(document2.documentElement.clientHeight || 0, innerHeight || 0);
}
function tuiGetViewportWidth({ document: document2, innerWidth }) {
  return Math.max(document2.documentElement.clientWidth || 0, innerWidth || 0);
}
function tuiGetWordRange(currentRange) {
  const range = currentRange.cloneRange();
  const { startContainer, startOffset, endContainer, endOffset } = range;
  const { ownerDocument } = startContainer;
  if (!ownerDocument) {
    return range;
  }
  const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
  treeWalker.currentNode = startContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
    const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf("\n"), content.lastIndexOf(CHAR_NO_BREAK_SPACE), content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE)) + 1;
    range.setStart(container, 0);
    if (offset) {
      range.setStart(container, offset);
      break;
    }
  } while (treeWalker.previousNode());
  treeWalker.currentNode = endContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
    const offset = [
      content.indexOf(" "),
      content.lastIndexOf("\n"),
      content.indexOf(CHAR_NO_BREAK_SPACE),
      content.indexOf(CHAR_ZERO_WIDTH_SPACE)
    ].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
    range.setEnd(container, textContent.length);
    if (offset !== -1) {
      range.setEnd(container, offset + textContent.length - content.length);
      break;
    }
  } while (treeWalker.nextNode());
  return range;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var TuiPositionService = class _TuiPositionService extends Observable {
  constructor() {
    const animationFrame$ = inject(WA_ANIMATION_FRAME);
    const zone = inject(NgZone);
    super((subscriber) => animationFrame$.pipe(startWith(null), map(() => {
      const rect2 = this.el.getBoundingClientRect();
      const animations = this.el.getAnimations?.() || [];
      const animated = animations.length && animations.every(({
        effect: effect2
      }) => effect2?.getComputedTiming().progress !== null) && animations.some((a) => "animationName" in a && a.animationName === "tuiScale");
      this.rect = animated && this.rect || rect2;
      return this.accessor.getPosition(this.rect);
    }), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
    this.el = tuiInjectElement();
    this.accessor = inject(TuiPositionAccessor);
  }
  static {
    this.ɵfac = function TuiPositionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPositionService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPositionService,
      factory: _TuiPositionService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiVisualViewportService = class _TuiVisualViewportService {
  constructor() {
    this.isWebkit = inject(WA_IS_WEBKIT);
    this.win = inject(WA_WINDOW);
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetLeft ?? 0), point[1] + (this.win.visualViewport?.offsetTop ?? 0)] : point;
  }
  static {
    this.ɵfac = function TuiVisualViewportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewportService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiVisualViewportService,
      factory: _TuiVisualViewportService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
function tuiFocusedIn(node) {
  return toSignal(merge(fromEvent(node, "focus", { capture: true }).pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "blur", { capture: true }).pipe(map(TUI_FALSE_HANDLER))).pipe(observeOn(tuiUntrackedScheduler)), { initialValue: false });
}
function tuiIsFocusable(element) {
  if (element.matches(":disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    case "AUDIO":
    case "VIDEO":
      return element.hasAttribute("controls");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    default:
      return false;
  }
}
function tuiGetClosestFocusable({ initial, root, previous = false }) {
  if (!root.ownerDocument) {
    return null;
  }
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  do {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && tuiIsFocusable(initial)) {
      return initial;
    }
  } while (previous ? treeWalker.previousNode() : treeWalker.nextNode());
  return null;
}
function tuiGetFocused({ activeElement }) {
  if (!activeElement?.shadowRoot) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element?.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiIsFocused(node) {
  return !!node?.ownerDocument && tuiGetFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsFocusedIn(node) {
  const focused = node?.ownerDocument && tuiGetFocused(node.ownerDocument);
  return !!focused && node.contains(focused) && node.ownerDocument?.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex]?.focus();
    if (tuiIsFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = new InjectionToken(ngDevMode ? "TUI_REMOVED_ELEMENT" : "", {
  factory: () => {
    const element$ = new Subject();
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    const proto = Object.getPrototypeOf(renderer.delegate ?? renderer);
    const { removeChild } = proto;
    proto.removeChild = function(...args) {
      element$.next(args[1]);
      removeChild.apply(this, args);
    };
    return element$.pipe(startWith(null), switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
  }
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !removedElement?.contains(target) && // Not due to scrollable element became non-scrollable
    (target.getAttribute("tabIndex") === "-1" || tuiIsFocusable(target))
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({ target }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({ target, relatedTarget }) => !!relatedTarget && isValidFocusout(target)), map(({ relatedTarget }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = new InjectionToken(ngDevMode ? "TUI_ACTIVE_ELEMENT" : "", {
  factory: () => {
    const removedElement$ = inject(TUI_REMOVED_ELEMENT);
    const win = inject(WA_WINDOW);
    const doc = inject(DOCUMENT);
    const zone = inject(NgZone);
    const focusout$ = tuiTypedFromEvent(win, "focusout", { capture: true });
    const focusin$ = tuiTypedFromEvent(win, "focusin", { capture: true });
    const blur$ = tuiTypedFromEvent(win, "blur");
    const mousedown$ = tuiTypedFromEvent(win, "mousedown");
    const mouseup$ = tuiTypedFromEvent(win, "mouseup");
    const pointerdown$ = tuiTypedFromEvent(win, "pointerdown");
    const pointercancel$ = tuiTypedFromEvent(win, "pointercancel");
    return merge(focusout$.pipe(takeUntil(pointerdown$.pipe(filter((e) => !e.defaultPrevented))), repeat({ delay: () => merge(mouseup$, pointercancel$) }), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)), map(([{ relatedTarget }]) => relatedTarget)), blur$.pipe(map(() => doc.activeElement), filter((element) => !!element?.matches("iframe"))), focusin$.pipe(switchMap((event) => {
      const target = tuiGetActualTarget(event);
      const root = tuiGetDocumentOrShadowRoot(target) || doc;
      return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
    })), mousedown$.pipe(map(tuiGetActualTarget), switchMap((target) => !doc.activeElement || doc.activeElement === doc.body ? of(target) : focusout$.pipe(take(1), map(() => target), takeUntil(timer(0, tuiZonefreeScheduler(zone))))))).pipe(distinctUntilChanged(), share());
  }
});
var TUI_FALLBACK_VALUE = new InjectionToken(ngDevMode ? "TUI_FALLBACK_VALUE" : "", { factory: () => null });
function tuiFallbackValueProvider(useValue) {
  return {
    provide: TUI_FALLBACK_VALUE,
    useValue
  };
}
var TUI_PLATFORM = new InjectionToken(ngDevMode ? "TUI_PLATFORM" : "", {
  factory: () => {
    if (inject(WA_IS_IOS)) {
      return "ios";
    }
    return inject(WA_IS_ANDROID) ? "android" : "web";
  }
});
var TUI_WINDOW_SIZE = new InjectionToken(ngDevMode ? "TUI_WINDOW_SIZE" : "", { factory: () => toObservable(tuiWindowSize(inject(WA_WINDOW))) });

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.tuiActiveZoneParent = null;
    this.parent = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.el = inject(ElementRef, {
      optional: true
    })?.nativeElement ?? inject(DOCUMENT).documentElement;
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => tuiIsElement(element) && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(), share());
    this.children = [];
    this.parent?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  ngOnDestroy() {
    this.parent?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.children.some((item) => item.contains(node));
  }
  // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
  // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
  addSubActiveZone(activeZone) {
    this.children = [...this.children, activeZone];
  }
  // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
  // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
  removeSubActiveZone(activeZone) {
    this.children = tuiArrayRemove(this.children, this.children.indexOf(activeZone));
  }
  static {
    this.ɵfac = function TuiActiveZone_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiActiveZone)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiActiveZone,
      selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
      inputs: {
        tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
      },
      outputs: {
        tuiActiveZoneChange: "tuiActiveZoneChange"
      },
      exportAs: ["tuiActiveZone"]
    });
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiActiveZone,
      factory: _TuiActiveZone.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Directive,
    args: [{
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      inputs: ["tuiActiveZoneParentSetter: tuiActiveZoneParent"],
      outputs: ["tuiActiveZoneChange"],
      exportAs: "tuiActiveZone"
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
var TuiObscuredService = class _TuiObscuredService extends Observable {
  constructor() {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler()), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
  }
  static {
    this.ɵfac = function TuiObscuredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscuredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiObscuredService,
      factory: _TuiObscuredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
    this.tuiObscuredEnabled = input();
    this.tuiObscured$ = toObservable(this.tuiObscuredEnabled).pipe(tuiIfMap(() => this.obscured$));
    this.tuiObscured = outputFromObservable(this.tuiObscured$);
  }
  static {
    this.ɵfac = function TuiObscured_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscured)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiObscured,
      selectors: [["", "tuiObscured", ""]],
      inputs: {
        tuiObscuredEnabled: [1, "tuiObscuredEnabled"]
      },
      outputs: {
        tuiObscured: "tuiObscured"
      },
      features: [ɵɵProvidersFeature([TuiObscuredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
    type: Directive,
    args: [{
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dropdown.mjs
var _c04 = (a0) => ({
  $implicit: a0
});
function TuiDropdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
var _c12 = ["tuiDropdownHost"];
var TuiDropdownDriver = class _TuiDropdownDriver extends BehaviorSubject {
  constructor() {
    super(false);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = function TuiDropdownDriver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownDriver)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDropdownDriver,
      factory: _TuiDropdownDriver.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriver, [{
    type: Injectable
  }], () => [], null);
})();
var TuiDropdownDriverDirective = class _TuiDropdownDriverDirective extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownDriverDirective_BaseFactory;
      return function TuiDropdownDriverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownDriverDirective_BaseFactory || (ɵTuiDropdownDriverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownDriverDirective)))(__ngFactoryType__ || _TuiDropdownDriverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDriverDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{
    type: Directive
  }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "start",
  direction: null,
  limitWidth: "auto",
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ""
};
var TUI_DROPDOWN_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_OPTIONS" : "", {
  factory: () => TUI_DROPDOWN_DEFAULT_OPTIONS
});
var tuiDropdownOptionsProvider = (override) => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new Optional(), new Self(), TuiDropdownOptionsDirective], [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var TuiDropdownOptionsDirective = class _TuiDropdownOptionsDirective {
  constructor() {
    this.options = inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    });
    this.align = this.options.align;
    this.appearance = this.options.appearance;
    this.direction = this.options.direction;
    this.limitWidth = this.options.limitWidth;
    this.minHeight = this.options.minHeight;
    this.maxHeight = this.options.maxHeight;
    this.offset = this.options.offset;
  }
  static {
    this.ɵfac = function TuiDropdownOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOptionsDirective,
      selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
      inputs: {
        align: [0, "tuiDropdownAlign", "align"],
        appearance: [0, "tuiDropdownAppearance", "appearance"],
        direction: [0, "tuiDropdownDirection", "direction"],
        limitWidth: [0, "tuiDropdownLimitWidth", "limitWidth"],
        minHeight: [0, "tuiDropdownMinHeight", "minHeight"],
        maxHeight: [0, "tuiDropdownMaxHeight", "maxHeight"],
        offset: [0, "tuiDropdownOffset", "offset"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_DROPDOWN_OPTIONS, _TuiDropdownOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      inputs: ["align: tuiDropdownAlign", "appearance: tuiDropdownAppearance", "direction: tuiDropdownDirection", "limitWidth: tuiDropdownLimitWidth", "minHeight: tuiDropdownMinHeight", "maxHeight: tuiDropdownMaxHeight", "offset: tuiDropdownOffset"],
      providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
    }]
  }], null, null);
})();
var TuiDropdownPosition = class _TuiDropdownPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.el = tuiInjectElement();
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.direction = new Subject();
    this.type = "dropdown";
    this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor, {
      self: true,
      optional: true
    }), {
      getClientRect: () => this.el.getBoundingClientRect()
    });
    this.tuiDropdownDirectionChange = outputFromObservable(this.direction.pipe(distinctUntilChanged()));
  }
  getPosition({
    width,
    height
  }) {
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = this.accessor.getClientRect();
    const viewportRect = this.viewport.getClientRect();
    const {
      minHeight,
      direction,
      offset,
      limitWidth
    } = this.options;
    const align = this.getAlign(this.options.align);
    const viewport = {
      top: viewportRect.top - offset,
      bottom: viewportRect.bottom + offset,
      right: viewportRect.right - offset,
      left: viewportRect.left + offset
    };
    const previous = this.previous || direction || "bottom";
    const available = {
      top: hostRect.top - 2 * offset - viewport.top,
      bottom: viewport.bottom - hostRect.bottom - 2 * offset
    };
    const rectWidth = limitWidth === "fixed" ? hostRect.width : width;
    const right = Math.max(hostRect.right - rectWidth, offset);
    const left = hostRect.left + width < viewport.right ? hostRect.left : right;
    const position = {
      top: hostRect.top - offset - height,
      bottom: hostRect.bottom + offset,
      right: Math.max(viewport.left, right),
      center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
      left: Math.max(viewport.left, left)
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    if (available[previous] > minHeight && direction || available[previous] > height) {
      this.direction.next(previous);
      return [position[align], position[previous]];
    }
    this.previous = better;
    this.direction.next(better);
    return [position[align], position[better]];
  }
  getAlign(align) {
    const rtl = this.el.matches('[dir="rtl"] :scope');
    if (rtl && align === "start") {
      return "right";
    }
    if (rtl && align === "end") {
      return "left";
    }
    if (align === "center") {
      return "center";
    }
    return align === "end" ? "right" : "left";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPosition_BaseFactory;
      return function TuiDropdownPosition_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPosition_BaseFactory || (ɵTuiDropdownPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPosition)))(__ngFactoryType__ || _TuiDropdownPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPosition,
      outputs: {
        tuiDropdownDirectionChange: "tuiDropdownDirectionChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{
    type: Directive
  }], null, null);
})();
var MAX_WIDTH_GAP = 16;
var TuiDropdownAnchor = class _TuiDropdownAnchor {
  constructor() {
    this.el = tuiInjectElement();
    this.directive = inject(TuiDropdownDirective);
    this.accessor = this.directive.accessor;
    this.viewport = inject(TUI_VIEWPORT);
    this.vvs = inject(TuiVisualViewportService);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.position = this.directive.position;
    this.styles$ = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.getBoundingClientRect().height), map((v) => this.position === "fixed" ? this.vvs.correct(v) : v), map((point) => this.getStyles(...point)), takeUntilDestroyed());
  }
  ngAfterViewInit() {
    this.styles$.subscribe({
      next: (styles) => Object.assign(this.el.style, styles),
      complete: () => this.directive.toggle(false)
    });
  }
  getStyles(x, y) {
    const {
      maxHeight,
      minHeight,
      offset,
      limitWidth
    } = this.options;
    const parent = this.el.offsetParent?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    const {
      left = 0,
      top = 0
    } = this.position === "fixed" ? {} : parent;
    const rect2 = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    const zoom = this.directive.el.currentCSSZoom || 1;
    const above = rect2.top - viewport.top - 2 * offset;
    const below = viewport.top + viewport.height - y - offset;
    const available = y > rect2.bottom ? below : above;
    const height = this.el.getBoundingClientRect().right <= rect2.left || x >= rect2.right ? maxHeight : tuiClamp(available, minHeight, maxHeight);
    y -= top;
    x -= left;
    return {
      position: this.position,
      top: tuiPx(Math.round(Math.max(y, offset - top) / zoom)),
      left: tuiPx(Math.round(x / zoom)),
      maxHeight: tuiPx(Math.round(height / zoom)),
      width: limitWidth === "fixed" ? tuiPx(Math.round(rect2.width / zoom)) : "",
      minWidth: limitWidth === "min" ? tuiPx(Math.round(rect2.width / zoom)) : "",
      maxWidth: tuiPx(Math.round(viewport.width / zoom) - MAX_WIDTH_GAP)
    };
  }
  static {
    this.ɵfac = function TuiDropdownAnchor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownAnchor)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownAnchor,
      features: [ɵɵProvidersFeature([TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownAnchor, [{
    type: Directive,
    args: [{
      providers: [TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))]
    }]
  }], null, null);
})();
var TuiDropdownComponent = class _TuiDropdownComponent {
  constructor() {
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.directive = inject(TuiDropdownDirective);
    this.context = inject(TUI_DROPDOWN_CONTEXT, {
      optional: true
    });
    this.darkMode = inject(TUI_DARK_MODE);
    this.theme = computed((_ = this.darkMode()) => this.directive.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"));
    this.close = () => this.directive.toggle(false);
  }
  static {
    this.ɵfac = function TuiDropdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDropdownComponent,
      selectors: [["tui-dropdown"]],
      hostVars: 2,
      hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.options.appearance)("tuiTheme", ctx.theme());
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiActiveZone, TuiAnimated, TuiDropdownAnchor])],
      decls: 2,
      vars: 4,
      consts: [[1, "t-scroll"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
      template: function TuiDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-scrollbar", 0);
          ɵɵtemplate(1, TuiDropdownComponent_div_1_Template, 2, 1, "div", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.directive.content())("polymorpheusOutletContext", ɵɵpureFunction1(2, _c04, ctx.close));
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}[_nghost-%COMP%]:has(tui-data-list[data-size=l]){border-radius:var(--tui-radius-l)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide;animation-duration:calc(var(--tui-duration) / 2);pointer-events:none}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"],
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      selector: "tui-dropdown",
      imports: [PolymorpheusOutlet, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiActiveZone, TuiAnimated, TuiDropdownAnchor],
      host: {
        "[attr.data-appearance]": "options.appearance",
        "[attr.tuiTheme]": "theme()"
      },
      template: '<tui-scrollbar class="t-scroll">\n    <div\n        *polymorpheusOutlet="directive.content() as text; context: {$implicit: close}"\n        class="t-primitive"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n',
      styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}:host:has(tui-data-list[data-size=l]){border-radius:var(--tui-radius-l)}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide;animation-duration:calc(var(--tui-duration) / 2);pointer-events:none}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive{padding:1rem}\n"]
    }]
  }], null, null);
})();
var TUI_DROPDOWN_COMPONENT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_COMPONENT" : "", {
  factory: () => TuiDropdownComponent
});
var TUI_DROPDOWN_CONTEXT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_CONTEXT" : "");
var TUI_DROPDOWN_HOST = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_HOST" : "");
var TuiDropdownA11y = class _TuiDropdownA11y {
  constructor() {
    this.id = tuiGenerateId();
    this.host = inject(TUI_DROPDOWN_HOST);
    this.dropdown = inject(TuiDropdownDirective);
    this.tuiDropdownRole = input("listbox");
    this.sync = effect(() => {
      const content = this.dropdown.content();
      const dropdown = this.dropdown.ref();
      const host = this.host.nativeElement;
      host.setAttribute("aria-expanded", String(!!dropdown));
      host.setAttribute("aria-controls", this.id);
      host.setAttribute("aria-haspopup", this.tuiDropdownRole());
      dropdown?.location.nativeElement.setAttribute("id", this.id);
      dropdown?.location.nativeElement.setAttribute("role", this.tuiDropdownRole());
      if (content) {
        return;
      }
      host.removeAttribute("aria-expanded");
      host.removeAttribute("aria-controls");
      host.removeAttribute("aria-haspopup");
    });
  }
  static {
    this.ɵfac = function TuiDropdownA11y_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownA11y)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownA11y,
      selectors: [["", "tuiDropdownA11y", ""]],
      inputs: {
        tuiDropdownRole: [1, "tuiDropdownRole"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownA11y, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownA11y]"
    }]
  }], null, null);
})();
var TuiDropdownDirective = class _TuiDropdownDirective {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.refresh$ = new Subject();
    this.service = inject(TuiPopupService);
    this.cdr = inject(ChangeDetectorRef);
    this.drivers = coerceArray(inject(TuiDropdownDriver, {
      self: true,
      optional: true
    }));
    this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
      this.ref()?.changeDetectorRef.detectChanges();
      this.ref()?.changeDetectorRef.markForCheck();
    });
    this.autoClose = effect(() => {
      if (!this.content()) {
        this.toggle(false);
      }
    });
    this.ref = signal(null);
    this.el = tuiInjectElement();
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
    this.content = input(null, {
      alias: "tuiDropdown",
      transform: (content) => content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content
    });
  }
  get accessor() {
    const accessors = this.injector.get(TuiRectAccessor, null, {
      self: true
    });
    return tuiFallbackAccessor("dropdown")(accessors, this);
  }
  get position() {
    return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
  }
  ngAfterViewChecked() {
    if (this.ref()) {
      this.refresh$.next();
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    const ref = this.ref();
    if (show && this.content() && !ref) {
      this.ref.set(this.service.add(this.component));
    } else if (!show && ref) {
      this.ref.set(null);
      ref.destroy();
    }
    this.drivers.forEach((driver) => driver?.next(show));
  }
  static {
    this.ɵfac = function TuiDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDirective,
      selectors: [["", "tuiDropdown", "", 5, "ng-container", 5, "ng-template"]],
      hostVars: 2,
      hostBindings: function TuiDropdownDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("tui-dropdown-open", ctx.ref());
        }
      },
      inputs: {
        content: [1, "tuiDropdown", "content"]
      },
      exportAs: ["tuiDropdown"],
      features: [ɵɵProvidersFeature([tuiAsVehicle(_TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)]), ɵɵHostDirectivesFeature([TuiDropdownDriverDirective, {
        directive: TuiDropdownA11y,
        inputs: ["tuiDropdownRole", "tuiDropdownRole"]
      }, {
        directive: TuiDropdownPosition,
        outputs: ["tuiDropdownDirectionChange", "tuiDropdownDirectionChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
      providers: [tuiAsVehicle(TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)],
      exportAs: "tuiDropdown",
      hostDirectives: [TuiDropdownDriverDirective, {
        directive: TuiDropdownA11y,
        inputs: ["tuiDropdownRole"]
      }, {
        directive: TuiDropdownPosition,
        outputs: ["tuiDropdownDirectionChange"]
      }],
      host: {
        "[class.tui-dropdown-open]": "ref()"
      }
    }]
  }], null, null);
})();
var TuiDropdownClose = class _TuiDropdownClose {
  constructor() {
    this.el = tuiInjectElement();
    this.ref = inject(TuiDropdownDirective).ref;
    this.open = inject(TuiDropdownOpen);
    this.obscured = inject(TuiObscured);
    this.activeZone = inject(TuiActiveZone);
    this.tuiDropdownClose = outputFromObservable(merge(
      inject(TuiDropdownDriver).pipe(tuiIfMap(() => merge(tuiCloseWatcher(), this.obscured.tuiObscured$.pipe(filter(Boolean)), this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)), tuiTypedFromEvent(this.el, "focusin").pipe(filter((event) => !this.open.nativeElement.contains(tuiGetActualTarget(event)) || !this.ref()))))),
      // @ts-ignore
      typeof CloseWatcher === "undefined" ? tuiTypedFromEvent(inject(DOCUMENT), "keydown", {
        capture: true
      }).pipe(filter(({
        key
      }) => key === "Escape" && this.open.open() && !this.ref()?.location.nativeElement?.nextElementSibling), tuiStopPropagation()) : EMPTY
    ));
  }
  static {
    this.ɵfac = function TuiDropdownClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownClose)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownClose,
      outputs: {
        tuiDropdownClose: "tuiDropdownClose"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownClose, [{
    type: Directive
  }], null, null);
})();
var TuiDropdownOpen = class _TuiDropdownOpen {
  constructor() {
    this.dropdownHost = contentChild("tuiDropdownHost", {
      descendants: true,
      read: ElementRef
    });
    this.directive = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.obscured = inject(TuiObscured);
    this.driver = inject(TuiDropdownDriver);
    this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
    this.enabled = input(true, {
      alias: "tuiDropdownEnabled"
    });
    this.open = model(false, {
      alias: "tuiDropdownOpen"
    });
    this.driveEffect = effect(() => this.drive(this.open()));
    this.syncSub = this.driver.pipe(filter((open) => open !== this.open()), takeUntilDestroyed()).subscribe((open) => this.update(open));
    this.keydownSub = tuiTypedFromEvent(inject(DOCUMENT), "keydown").pipe(takeUntilDestroyed()).subscribe((event) => this.onKeydown(event));
  }
  get nativeElement() {
    const initial = this.dropdownHost()?.nativeElement || this.el;
    const focusable = tuiIsFocusable(initial) ? initial : tuiGetClosestFocusable({
      initial,
      root: this.el
    });
    return this.dropdownHost()?.nativeElement || focusable || this.el;
  }
  toggle(open) {
    if (this.focused && !open) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
    this.update(open);
  }
  onClick(target) {
    if (!this.editable && this.nativeElement.contains(target)) {
      this.update(!this.open());
    }
  }
  onArrow(event, up) {
    if (!tuiIsElement(event.target) || !this.nativeElement.contains(event.target) || !this.enabled() || !this.directive.content()) {
      return;
    }
    event.preventDefault();
    this.focusDropdown(up);
  }
  get editable() {
    return tuiIsElementEditable(this.nativeElement);
  }
  get focused() {
    return tuiIsFocusedIn(this.nativeElement) || tuiIsFocusedIn(this.dropdown());
  }
  onKeydown(event) {
    const target = tuiGetActualTarget(event);
    if (!event.defaultPrevented && tuiIsEditingKey(event.key) && this.editable && this.focused && tuiIsHTMLElement(target) && !tuiIsElementEditable(target)) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
  }
  update(open) {
    if (open && !this.enabled()) {
      return this.drive();
    }
    this.open.set(open);
    this.drive();
  }
  drive(open = this.open() && this.enabled()) {
    tuiSetSignal(this.obscured.tuiObscuredEnabled, open);
    this.driver.next(open);
  }
  focusDropdown(previous) {
    const root = this.dropdown();
    if (!root) {
      this.update(true);
      return;
    }
    const doc = this.el.ownerDocument;
    const child = root.appendChild(doc.createElement("div"));
    const initial = previous ? child : root;
    const focusable = tuiGetClosestFocusable({
      initial,
      previous,
      root
    });
    child.remove();
    focusable?.focus();
  }
  static {
    this.ɵfac = function TuiDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOpen,
      selectors: [["", "tuiDropdown", "", "tuiDropdownAuto", ""], ["", "tuiDropdown", "", "tuiDropdownOpen", ""], ["", "tuiDropdown", "", "tuiDropdownOpenChange", ""]],
      contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.dropdownHost, _c12, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostBindings: function TuiDropdownOpen_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiDropdownOpen_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          })("keydown.arrowDown", function TuiDropdownOpen_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onArrow($event, false);
          })("keydown.arrowUp", function TuiDropdownOpen_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onArrow($event, true);
          })("tuiActiveZoneChange", function TuiDropdownOpen_tuiActiveZoneChange_HostBindingHandler() {
            return 0;
          })("tuiDropdownClose", function TuiDropdownOpen_tuiDropdownClose_HostBindingHandler() {
            return ctx.toggle(false);
          });
        }
      },
      inputs: {
        enabled: [1, "tuiDropdownEnabled", "enabled"],
        open: [1, "tuiDropdownOpen", "open"]
      },
      outputs: {
        open: "tuiDropdownOpenChange"
      },
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, _TuiDropdownOpen)]), ɵɵHostDirectivesFeature([TuiObscured, {
        directive: TuiDropdownClose,
        outputs: ["tuiDropdownClose", "tuiDropdownClose"]
      }, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown][tuiDropdownAuto],[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, TuiDropdownOpen)],
      hostDirectives: [TuiObscured, {
        directive: TuiDropdownClose,
        outputs: ["tuiDropdownClose"]
      }, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange"]
      }],
      host: {
        "(click)": "onClick($event.target)",
        "(keydown.arrowDown)": "onArrow($event, false)",
        "(keydown.arrowUp)": "onArrow($event, true)",
        // TODO: Necessary because startWith(false) + distinctUntilChanged() in TuiActiveZone, think of better solution
        "(tuiActiveZoneChange)": "0",
        "(tuiDropdownClose)": "toggle(false)"
      }
    }]
  }], null, null);
})();
function tuiDropdown(value) {
  return tuiDirectiveBinding(TuiDropdownDirective, "content", value, {});
}
function tuiDropdownEnabled(value) {
  return tuiDirectiveBinding(TuiDropdownOpen, "enabled", value, {});
}
var TuiDropdownContent = class _TuiDropdownContent {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    tuiSetSignal(this.directive.content, inject(TemplateRef));
    if (isPlatformBrowser(inject(PLATFORM_ID)) && this.directive.el.matches(":focus-within")) {
      this.directive.toggle(true);
    }
  }
  ngOnDestroy() {
    tuiSetSignal(this.directive.content, null);
  }
  static {
    this.ɵfac = function TuiDropdownContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownContent,
      selectors: [["ng-template", "tuiDropdown", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDropdown]"
    }]
  }], () => [], null);
})();
var TuiDropdownContext = class _TuiDropdownContext extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.isTouch = inject(WA_IS_TOUCH);
    this.currentRect = EMPTY_CLIENT_RECT;
    this.userSelect = computed(() => this.isTouch() ? "none" : null);
    this.activeZone = inject(TuiActiveZone);
    this.driver = inject(TuiDropdownDriver);
    this.doc = inject(DOCUMENT);
    this.sub = merge(tuiTypedFromEvent(this.doc, "pointerdown"), tuiTypedFromEvent(this.doc, "keydown").pipe(filter(({
      key
    }) => key === "Escape")), tuiTypedFromEvent(this.doc, "contextmenu", {
      capture: true
    })).pipe(filter((event) => this.driver.value && !this.activeZone.contains(tuiGetActualTarget(event))), tuiZoneOptimized(), takeUntilDestroyed()).subscribe(() => {
      this.driver.next(false);
      this.currentRect = EMPTY_CLIENT_RECT;
    });
    this.type = "dropdown";
  }
  getClientRect() {
    return this.currentRect;
  }
  onContextMenu(x, y) {
    this.currentRect = tuiPointToClientRect(x, y);
    this.driver.next(true);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownContext_BaseFactory;
      return function TuiDropdownContext_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownContext_BaseFactory || (ɵTuiDropdownContext_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownContext)))(__ngFactoryType__ || _TuiDropdownContext);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownContext,
      selectors: [["", "tuiDropdownContext", ""]],
      hostVars: 6,
      hostBindings: function TuiDropdownContext_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
            return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("-webkit-touch-callout", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("user-select", ctx.userSelect());
        }
      },
      features: [ɵɵProvidersFeature([TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(_TuiDropdownContext)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownContext]",
      providers: [TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(TuiDropdownContext)],
      host: {
        "[style.-webkit-touch-callout]": "userSelect()",
        "[style.-webkit-user-select]": "userSelect()",
        "[style.user-select]": "userSelect()",
        "(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
      }
    }]
  }], null, null);
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var [TUI_DROPDOWN_HOVER_OPTIONS, tuiDropdownHoverOptionsProvider] = tuiCreateOptions(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
var TuiDropdownHover = class _TuiDropdownHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.dropdownHost = contentChild("tuiDropdownHost", {
      descendants: true,
      read: ElementRef
    });
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    this.activeZone = inject(TuiActiveZone);
    this.open = inject(TuiDropdownOpen, {
      optional: true
    });
    this.stream$ = merge(
      /**
       * Dropdown can be removed not only via click/touch –
       * swipe on mobile devices removes dropdown sheet without triggering new mouseover / mouseout events.
       */
      toObservable(inject(TuiDropdownDirective).ref).pipe(filter((x) => !x && this.hovered()), switchMap(() => tuiTypedFromEvent(this.doc, "pointerdown").pipe(map(tuiGetActualTarget), delay(this.tuiDropdownHideDelay()), startWith(null), takeUntil(fromEvent(this.doc, "mouseover"))))),
      tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)),
      tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))
    ).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.tuiDropdownShowDelay() : this.tuiDropdownHideDelay()), takeUntil(this.open ? fromEvent(this.el, "pointerdown") : EMPTY))), tuiZoneOptimized(), tap((hovered) => {
      this.hovered.set(hovered);
      this.open?.toggle(hovered);
    }), share());
    this.hovered = signal(false);
    this.tuiDropdownShowDelay = input(this.options.showDelay);
    this.tuiDropdownHideDelay = input(this.options.hideDelay);
    this.type = "dropdown";
  }
  onClick(event) {
    if (this.hovered() && this.open) {
      event.preventDefault();
    }
  }
  isHovered(element) {
    const host = this.dropdownHost()?.nativeElement || this.el;
    const hovered = host.contains(element);
    const child = !this.el.contains(element) && this.activeZone.contains(element);
    return hovered || child;
  }
  static {
    this.ɵfac = function TuiDropdownHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownHover,
      selectors: [["", "tuiDropdownHover", ""]],
      contentQueries: function TuiDropdownHover_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.dropdownHost, _c12, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostBindings: function TuiDropdownHover_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.capture", function TuiDropdownHover_click_capture_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        tuiDropdownShowDelay: [1, "tuiDropdownShowDelay"],
        tuiDropdownHideDelay: [1, "tuiDropdownHideDelay"]
      },
      features: [ɵɵProvidersFeature([TuiActiveZone, tuiAsDriver(_TuiDropdownHover)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownHover]",
      providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
      host: {
        "(click.capture)": "onClick($event)"
      }
    }]
  }], () => [], null);
})();
var TuiDropdownFixed = class _TuiDropdownFixed {
  constructor() {
    const override = tuiOverrideOptions({
      limitWidth: "fixed"
    }, TUI_DROPDOWN_DEFAULT_OPTIONS);
    override(inject(TUI_DROPDOWN_OPTIONS, {
      self: true,
      optional: true
    }), null);
  }
  static {
    this.ɵfac = function TuiDropdownFixed_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownFixed)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownFixed,
      features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({})])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownFixed, [{
    type: Directive,
    args: [{
      providers: [tuiDropdownOptionsProvider({})]
    }]
  }], () => [], null);
})();
var TuiDropdownAuto = class _TuiDropdownAuto {
  constructor() {
    inject(TUI_DROPDOWN_OPTIONS).limitWidth = "auto";
  }
  static {
    this.ɵfac = function TuiDropdownAuto_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownAuto)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownAuto
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownAuto, [{
    type: Directive
  }], () => [], null);
})();
var TuiDropdownManual = class _TuiDropdownManual {
  constructor() {
    this.driver = inject(TuiDropdownDriver);
    this.tuiDropdownManual = input(false);
  }
  ngOnChanges() {
    this.driver.next(!!this.tuiDropdownManual());
  }
  static {
    this.ɵfac = function TuiDropdownManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownManual,
      selectors: [["", "tuiDropdownManual", ""]],
      inputs: {
        tuiDropdownManual: [1, "tuiDropdownManual"]
      },
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownManual]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
    }]
  }], null, null);
})();
var TuiDropdownPositionSided = class _TuiDropdownPositionSided extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.vertical = inject(TuiDropdownPosition);
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = input("");
    this.tuiDropdownSidedOffset = input(4);
    this.type = "dropdown";
  }
  getPosition(rect2) {
    if (this.tuiDropdownSided() === false) {
      return this.vertical.getPosition(rect2);
    }
    const {
      height,
      width
    } = rect2;
    const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewport = this.viewport.getClientRect();
    const {
      direction,
      offset
    } = this.options;
    const adjusted = this.vertical.getAlign(this.options.align);
    const align = adjusted === "center" ? "left" : adjusted;
    const available = {
      top: hostRect.bottom - viewport.top,
      left: hostRect.left - offset - viewport.left,
      right: viewport.right - hostRect.right - offset,
      bottom: viewport.bottom - hostRect.top
    };
    const position = {
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset() + 1,
      // 1 for border
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset() - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > height && direction || this.previous === better) {
      this.vertical.direction.next(this.previous);
      return [left, position[this.previous]];
    }
    this.previous = better;
    this.vertical.direction.next(better);
    return [left, position[better]];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPositionSided_BaseFactory;
      return function TuiDropdownPositionSided_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPositionSided_BaseFactory || (ɵTuiDropdownPositionSided_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPositionSided)))(__ngFactoryType__ || _TuiDropdownPositionSided);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPositionSided,
      selectors: [["", "tuiDropdownSided", ""]],
      inputs: {
        tuiDropdownSided: [1, "tuiDropdownSided"],
        tuiDropdownSidedOffset: [1, "tuiDropdownSidedOffset"]
      },
      features: [ɵɵProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(_TuiDropdownPositionSided)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
    }]
  }], null, null);
})();
var TuiDropdownSelection = class _TuiDropdownSelection extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.vcr = inject(ViewContainerRef);
    this.dropdown = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.handler = computed((visible = this.tuiDropdownSelection()) => tuiIsString(visible) ? TUI_TRUE_HANDLER : visible);
    this.stream$ = combineLatest([toObservable(this.handler), inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), filter((range) => this.isValid(range)), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer)), merge(fromEvent(this.el, "scroll", {
      passive: true,
      capture: true
    })).pipe(throttleTime(16, void 0, {
      leading: false,
      trailing: true
    }), startWith(0))]).pipe(tap(([, range]) => {
      this.range = this.el.contains(range.commonAncestorContainer) && tuiIsTextNode(range.commonAncestorContainer) ? range : this.range;
    }), map(([handler, range]) => {
      const contained = this.el.contains(range.commonAncestorContainer);
      const valid = contained && handler(this.range);
      const visible = valid || this.inDropdown(range);
      const active = tuiGetFocused(this.doc);
      const textfield = active && tuiIsTextfield(active) && this.el.contains(active);
      return visible && textfield ? this.isCaretVisible(this.range) : visible;
    }));
    this.range = isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {};
    this.type = "dropdown";
    this.tuiDropdownSelection = input("");
    this.tuiDropdownSelectionPosition = input("selection");
  }
  getClientRect() {
    switch (this.tuiDropdownSelectionPosition()) {
      case "tag": {
        const {
          commonAncestorContainer
        } = this.range;
        const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
        return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
      }
      case "word":
        return tuiGetWordRange(this.range).getBoundingClientRect();
      default:
        return this.range.getBoundingClientRect();
    }
  }
  ngOnDestroy() {
    if (this.ghost) {
      this.ghostHost.removeChild(this.ghost);
    }
  }
  get ghostHost() {
    return this.el.querySelector("tui-textfield .t-ghost") || this.el;
  }
  getRange() {
    const active = tuiGetFocused(this.doc);
    const selection = this.doc.getSelection();
    const range = active && tuiIsTextfield(active) && this.el.contains(active) ? this.veryVerySadInputFix(active) : selection?.rangeCount && selection.getRangeAt(0) || this.range;
    return range.cloneRange();
  }
  /**
   * Check if given range is at least partially inside dropdown
   */
  inDropdown(range) {
    const {
      startContainer,
      endContainer
    } = range;
    const inDropdown = this.boxContains(range.commonAncestorContainer);
    const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
    const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
    return inDropdown || hostToDropdown || dropdownToHost;
  }
  /**
   * Check if Node is inside dropdown
   */
  boxContains(node) {
    return !!this.dropdown.ref()?.location.nativeElement.contains(node);
  }
  /**
   * Check if range is not inside tui-textfield's DOM elements
   */
  isValid(range) {
    return !this.el.contains(range.commonAncestorContainer) || !this.el.closest("tui-textfield") || range.intersectsNode(this.ghost || this.el);
  }
  veryVerySadInputFix(element) {
    const {
      ghost = this.initGhost(this.ghostHost)
    } = this;
    const {
      top,
      left,
      width,
      height
    } = this.ghostHost.getBoundingClientRect();
    const {
      selectionStart,
      selectionEnd,
      value
    } = element;
    const range = this.doc.createRange();
    const hostRect = this.ghostHost.getBoundingClientRect();
    ghost.style.top = tuiPx(top - hostRect.top);
    ghost.style.left = tuiPx(left - hostRect.left);
    ghost.style.width = tuiPx(width);
    ghost.style.height = tuiPx(height);
    ghost.textContent = `${CHAR_ZERO_WIDTH_SPACE}${value}${CHAR_NO_BREAK_SPACE}`;
    range.setStart(ghost.firstChild, selectionStart || 0);
    range.setEnd(ghost.firstChild, selectionEnd || 0);
    return range;
  }
  /**
   * Create an invisible DIV styled exactly like input/textarea element inside directive
   */
  initGhost(element) {
    const ghost = this.doc.createElement("div");
    const {
      font,
      letterSpacing,
      textTransform,
      padding,
      borderTop
    } = getComputedStyle(element);
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.boxSizing = "border-box";
    ghost.style.borderTop = borderTop;
    ghost.style.font = font;
    ghost.style.letterSpacing = letterSpacing;
    ghost.style.textTransform = textTransform;
    ghost.style.padding = padding;
    this.ghostHost.appendChild(ghost);
    this.ghost = ghost;
    return ghost;
  }
  isCaretVisible(range) {
    const caret = range.getBoundingClientRect();
    const host = this.ghostHost.getBoundingClientRect();
    const styles = getComputedStyle(this.ghostHost);
    const fontSize = Number.parseFloat(styles.fontSize) || 16;
    const lineHeight = Number.parseFloat(styles.lineHeight) || fontSize * 1.2;
    const visibleTop = Math.max(caret.top, host.top);
    const visibleBottom = Math.min(caret.bottom, host.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const threshold = lineHeight * 0.5;
    return visibleHeight >= threshold;
  }
  static {
    this.ɵfac = function TuiDropdownSelection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownSelection)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownSelection,
      selectors: [["", "tuiDropdownSelection", ""]],
      inputs: {
        tuiDropdownSelection: [1, "tuiDropdownSelection"],
        tuiDropdownSelectionPosition: [1, "tuiDropdownSelectionPosition"]
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiDropdownSelection), tuiAsRectAccessor(_TuiDropdownSelection)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
    }]
  }], () => [], null);
})();
var TuiWithDropdownOpen = class _TuiWithDropdownOpen {
  static {
    this.ɵfac = function TuiWithDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithDropdownOpen,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen", "open", "tuiDropdownEnabled", "tuiDropdownEnabled"],
        outputs: ["tuiDropdownOpenChange", "openChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithDropdownOpen, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen: open", "tuiDropdownEnabled"],
        outputs: ["tuiDropdownOpenChange: openChange"]
      }]
    }]
  }], null, null);
})();
var TuiDropdown = [TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownA11y, TuiDropdownOpen, TuiDropdownManual, TuiDropdownHover, TuiDropdownContent, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c05 = ["*"];
function TuiDataListComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDataListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, TuiDataListComponent_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent() || ctx_r1.fallback());
  }
}
var TUI_DATA_LIST_HOST = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_HOST" : "");
function tuiAsDataListHost(host) {
  return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TUI_DATA_LIST_SIZE = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_SIZE" : "");
function tuiInjectDataListSize() {
  const sizes = ["s", "m", "l"];
  const size = inject(TUI_DATA_LIST_SIZE, {
    optional: true
  }) || inject(TUI_DATA_LIST_HOST, {
    optional: true
  })?.size;
  return size && sizes.includes(size) ? size : "l";
}
var TUI_OPTION_CONTENT = new InjectionToken(ngDevMode ? "TUI_OPTION_CONTENT" : "");
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var TuiWithOptionContent = class _TuiWithOptionContent {
  constructor() {
    this.local = null;
    this.global = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
  }
  get content() {
    return this.global ?? this.local;
  }
  static {
    this.ɵfac = function TuiWithOptionContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithOptionContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithOptionContent,
      contentQueries: function TuiWithOptionContent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_OPTION_CONTENT, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.local = _t.first);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithOptionContent, [{
    type: Directive
  }], null, {
    local: [{
      type: ContentChild,
      args: [TUI_OPTION_CONTENT, {
        descendants: true
      }]
    }]
  });
})();
var TuiOptionWithContent = class _TuiOptionWithContent {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.ref = this.content && createComponent(this.content, {
      environmentInjector: inject(EnvironmentInjector),
      elementInjector: inject(INJECTOR$1),
      hostElement: tuiInjectElement()
    });
    if (this.ref) {
      this.vcr.insert(this.ref.hostView);
      this.ref.changeDetectorRef.detectChanges();
    }
  }
  static {
    this.ɵfac = function TuiOptionWithContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptionWithContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptionWithContent
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithContent, [{
    type: Directive
  }], () => [], null);
})();
var TuiOptionWithValue = class _TuiOptionWithValue {
  constructor() {
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.disabled = input(false);
    this.value = input();
  }
  onClick(value = this.value()) {
    if (value !== void 0) {
      this.host?.handleOption?.(value);
    }
  }
  static {
    this.ɵfac = function TuiOptionWithValue_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptionWithValue)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptionWithValue,
      selectors: [["button", "tuiOption", "", "value", ""], ["a", "tuiOption", "", "value", ""], ["label", "tuiOption", "", "value", ""]],
      hostBindings: function TuiOptionWithValue_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiOptionWithValue_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        disabled: [1, "disabled"],
        value: [1, "value"]
      },
      features: [ɵɵHostDirectivesFeature([TuiOptionWithContent])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithValue, [{
    type: Directive,
    args: [{
      selector: "button[tuiOption][value], a[tuiOption][value], label[tuiOption][value]",
      hostDirectives: [TuiOptionWithContent],
      host: {
        "(click)": "onClick()"
      }
    }]
  }], null, null);
})();
var TuiDataListComponent = class _TuiDataListComponent {
  constructor() {
    this.ngZone = inject(NgZone);
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.optionsQuery = contentChildren(forwardRef(() => TuiOptionWithValue), {
      descendants: true
    });
    this.fallback = inject(TUI_NOTHING_FOUND_MESSAGE);
    this.empty = signal(false);
    this.emptyContent = input();
    this.size = input(tuiInjectDataListSize());
    this.options = computed(() => this.optionsQuery().map(({
      value
    }) => value()).filter(tuiIsPresent));
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  handleFocusLossIfNecessary(element = this.el) {
    if (tuiIsFocusedIn(element)) {
      this.origin?.focus({
        preventScroll: true
      });
    }
  }
  ngAfterContentChecked() {
    timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.empty.set(!this.elements.length);
      this.cdr.detectChanges();
    });
  }
  get role() {
    return this.el.parentElement?.closest('[role="menu"],[role="listbox"]') ? null : this.el.role;
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  get elements() {
    return Array.from(this.el.querySelectorAll("[tuiOption]:not(.t-empty)"));
  }
  static {
    this.ɵfac = function TuiDataListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListComponent,
      selectors: [["tui-data-list"]],
      contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.optionsQuery, TuiOptionWithValue, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["data-tui-version", "5.15.0", "role", "listbox"],
      hostVars: 2,
      hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
            return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
          })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          })("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
            return 0;
          })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
            return ctx.handleFocusLossIfNecessary($event.target);
          })("wheel.zoneless.passive", function TuiDataListComponent_wheel_zoneless_passive_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size())("role", ctx.role);
        }
      },
      inputs: {
        emptyContent: [1, "emptyContent"],
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiCellOptionsProvider(() => ({
        size: inject(_TuiDataListComponent).size()
      })), tuiAsAuxiliary(_TuiDataListComponent), {
        provide: TUI_OPTION_CONTENT,
        useFactory: () => inject(TuiWithOptionContent, {
          optional: true
        })?.content ?? inject(TUI_OPTION_CONTENT, {
          skipSelf: true,
          optional: true
        })
      }])],
      ngContentSelectors: _c05,
      decls: 2,
      vars: 1,
      consts: [["tuiCell", "", "tuiOption", "", 1, "t-empty"], [4, "polymorpheusOutlet"]],
      template: function TuiDataListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵconditionalCreate(1, TuiDataListComponent_Conditional_1_Template, 2, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.empty() ? 1 : -1);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiCell],
      styles: ['tui-data-list:where(*[data-tui-version="5.15.0"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version="5.15.0"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiOption]{font:var(--tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);box-sizing:border-box;border-radius:var(--tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media(hover:hover)and (pointer:fine){tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:hover:not(:disabled){background:var(--tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]._with-dropdown{background:var(--tui-background-neutral-1)}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version="5.15.0"])>.t-empty{pointer-events:none;color:var(--tui-text-tertiary)}tui-data-list:where(*[data-tui-version="5.15.0"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version="5.15.0"]) hr+hr,tui-data-list:where(*[data-tui-version="5.15.0"]) hr:first-child,tui-data-list:where(*[data-tui-version="5.15.0"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version="5.15.0"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:"";block-size:1px;inline-size:100%;background:var(--tui-border-normal)}tui-opt-group:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.15.0"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.15.0"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.15.0"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version="5.15.0"]):empty:before,tui-opt-group:where(*[data-tui-version="5.15.0"])[data-label=""]:before{display:none}tui-opt-group:where(*[data-tui-version="5.15.0"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version="5.15.0"]):before{font:var(--tui-typography-heading-h6);padding:.5rem 0!important}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      selector: "tui-data-list",
      imports: [PolymorpheusOutlet, TuiCell],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiCellOptionsProvider(() => ({
        size: inject(TuiDataListComponent).size()
      })), tuiAsAuxiliary(TuiDataListComponent), {
        provide: TUI_OPTION_CONTENT,
        useFactory: () => inject(TuiWithOptionContent, {
          optional: true
        })?.content ?? inject(TUI_OPTION_CONTENT, {
          skipSelf: true,
          optional: true
        })
      }],
      host: {
        "data-tui-version": TUI_VERSION,
        role: "listbox",
        "[attr.data-size]": "size()",
        "[attr.role]": "role",
        "(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)",
        "(keydown.shift.tab)": "handleFocusLossIfNecessary()",
        "(keydown.tab)": "handleFocusLossIfNecessary()",
        "(mousedown.prevent)": "(0)",
        "(mouseleave)": "handleFocusLossIfNecessary($event.target)",
        "(wheel.zoneless.passive)": "handleFocusLossIfNecessary()"
      },
      template: '<ng-content />\n@if (empty()) {\n    <!-- tuiOption selector purely for cosmetics, do not import -->\n    <span\n        tuiCell\n        tuiOption\n        class="t-empty"\n    >\n        <ng-container *polymorpheusOutlet="emptyContent() || fallback() as text">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n',
      styles: ['tui-data-list:where(*[data-tui-version="5.15.0"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version="5.15.0"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiOption]{font:var(--tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version="5.15.0"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);box-sizing:border-box;border-radius:var(--tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media(hover:hover)and (pointer:fine){tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:hover:not(:disabled){background:var(--tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]._with-dropdown{background:var(--tui-background-neutral-1)}tui-data-list:where(*[data-tui-version="5.15.0"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version="5.15.0"])>.t-empty{pointer-events:none;color:var(--tui-text-tertiary)}tui-data-list:where(*[data-tui-version="5.15.0"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version="5.15.0"]) hr+hr,tui-data-list:where(*[data-tui-version="5.15.0"]) hr:first-child,tui-data-list:where(*[data-tui-version="5.15.0"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version="5.15.0"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:"";block-size:1px;inline-size:100%;background:var(--tui-border-normal)}tui-opt-group:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.15.0"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.15.0"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.15.0"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version="5.15.0"]):empty:before,tui-opt-group:where(*[data-tui-version="5.15.0"])[data-label=""]:before{display:none}tui-opt-group:where(*[data-tui-version="5.15.0"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version="5.15.0"]):before{font:var(--tui-typography-heading-h6);padding:.5rem 0!important}\n']
    }]
  }], null, null);
})();
var TuiOptGroup = class _TuiOptGroup {
  constructor() {
    this.label = input();
  }
  static {
    this.ɵfac = function TuiOptGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptGroup,
      selectors: [["tui-opt-group"]],
      hostAttrs: ["data-tui-version", "5.15.0", "role", "group"],
      hostVars: 1,
      hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-label", ctx.label() || "");
        }
      },
      inputs: {
        label: [1, "label"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
    type: Directive,
    args: [{
      selector: "tui-opt-group",
      host: {
        "data-tui-version": TUI_VERSION,
        role: "group",
        "[attr.data-label]": 'label() || ""'
      }
    }]
  }], null, null);
})();
var TuiOption = class _TuiOption {
  constructor() {
    this.isMobile = inject(WA_IS_MOBILE);
    this.el = tuiInjectElement();
    this.datalist = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = input(false);
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.datalist?.handleFocusLossIfNecessary(this.el);
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsFocused(this.el) && this.datalist && this.el.closest("[tuiDataListDropdownManager]")) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
  static {
    this.ɵfac = function TuiOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOption)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOption,
      selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""], ["label", "tuiOption", ""]],
      hostAttrs: ["role", "option", "type", "button"],
      hostVars: 3,
      hostBindings: function TuiOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.zoneless", function TuiOption_mousemove_zoneless_HostBindingHandler() {
            return ctx.onMouseMove();
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabled() || null);
          ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
        }
      },
      inputs: {
        disabled: [1, "disabled"]
      },
      features: [ɵɵHostDirectivesFeature([TuiWithIcons, TuiCell])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
    type: Directive,
    args: [{
      selector: "button[tuiOption], a[tuiOption], label[tuiOption]",
      hostDirectives: [TuiWithIcons, TuiCell],
      host: {
        role: "option",
        type: "button",
        "[attr.disabled]": "disabled() || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(mousemove.zoneless)": "onMouseMove()"
      }
    }]
  }], null, null);
})();
var TuiDataList = [TuiDataListComponent, TuiOption, TuiOptionWithValue, TuiOptGroup];

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-item.mjs
var TuiItem = class _TuiItem {
  static {
    this.ɵfac = function TuiItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItem,
      selectors: [["", "tuiItem", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItem, [{
    type: Directive,
    args: [{
      selector: "[tuiItem]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c06 = ["*"];
function TuiExpand_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content() || null);
  }
}
var TuiExpand = class _TuiExpand {
  constructor() {
    this.content = contentChild(TuiItem, {
      read: TemplateRef
    });
    this.open = signal(false);
    this.expanded = input(false);
  }
  ngOnInit() {
    this.open.set(this.expanded());
  }
  onTransitionEnd({
    propertyName
  }) {
    if (propertyName === "grid-template-rows") {
      this.open.set(this.expanded());
    }
  }
  static {
    this.ɵfac = function TuiExpand_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpand)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiExpand,
      selectors: [["tui-expand"]],
      contentQueries: function TuiExpand_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.content, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostVars: 4,
      hostBindings: function TuiExpand_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("transitionend.self", function TuiExpand_transitionend_self_HostBindingHandler($event) {
            return ctx.onTransitionEnd($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_expanded", ctx.expanded())("_open", ctx.open());
        }
      },
      inputs: {
        expanded: [1, "expanded"]
      },
      ngContentSelectors: _c06,
      decls: 3,
      vars: 1,
      consts: [[1, "t-wrapper"], [3, "ngTemplateOutlet"]],
      template: function TuiExpand_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0);
          ɵɵconditionalCreate(1, TuiExpand_Conditional_1_Template, 1, 1, "ng-container", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.expanded() || ctx.open() ? 1 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}[_nghost-%COMP%]:not(._expanded){padding-block:0}._expanded[_nghost-%COMP%]{visibility:visible;grid-template-rows:1fr}._expanded[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{opacity:1;visibility:visible}._expanded._open[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{overflow:visible}.t-wrapper[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpand, [{
    type: Component,
    args: [{
      selector: "tui-expand",
      imports: [NgTemplateOutlet],
      template: `
        <div class="t-wrapper">
            @if (expanded() || open()) {
                <ng-container [ngTemplateOutlet]="content() || null" />
            }
            <ng-content />
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._expanded]": "expanded()",
        "[class._open]": "open()",
        "(transitionend.self)": "onTransitionEnd($event)"
      },
      styles: [":host{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}:host:not(._expanded){padding-block:0}:host._expanded{visibility:visible;grid-template-rows:1fr}:host._expanded>.t-wrapper{opacity:1;visibility:visible}:host._expanded._open>.t-wrapper{overflow:visible}.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var TuiIcon = class _TuiIcon {
  constructor() {
    this.icons = inject(TuiIcons);
    this.mask = computed(() => this.icons.resolve(this.background()));
    this.background = input("");
  }
  static {
    this.ɵfac = function TuiIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcon)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIcon,
      selectors: [["tui-icon", 3, "tuiBadge", ""]],
      hostVars: 2,
      hostBindings: function TuiIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon-bg", ctx.mask());
        }
      },
      inputs: {
        background: [1, "background"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "icon", "iconEnd", "badge"]
      }])],
      decls: 0,
      vars: 0,
      template: function TuiIcon_Template(rf, ctx) {
      },
      styles: ['tui-icon:where(*[data-tui-version="5.15.0"]){--tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--t-icon-bg);mask-image:var(--t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--tui-font-offset) - 10px,1px)/.8px)}@media(hover:hover)and (pointer:fine){tui-icon:where(*[data-tui-version="5.15.0"])[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,tui-icon:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end]:before{-webkit-mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-start]:after{transform:translate(36%,36%);--tui-icon-size: .5715em}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after{zoom:.667}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      selector: "tui-icon:not([tuiBadge])",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart: icon", "iconEnd: badge"]
      }],
      host: {
        "[style.--t-icon-bg]": "mask()"
      },
      styles: ['tui-icon:where(*[data-tui-version="5.15.0"]){--tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--t-icon-bg);mask-image:var(--t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--tui-font-offset) - 10px,1px)/.8px)}@media(hover:hover)and (pointer:fine){tui-icon:where(*[data-tui-version="5.15.0"])[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,tui-icon:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end]:before{-webkit-mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-start]:after{transform:translate(36%,36%);--tui-icon-size: .5715em}tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version="5.15.0"])[data-icon-end=font]:after{zoom:.667}\n']
    }]
  }], null, null);
})();
var TuiIconPipe = class _TuiIconPipe {
  constructor() {
    this.transform = tuiInjectIconResolver();
  }
  static {
    this.ɵfac = function TuiIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiIcon",
      type: _TuiIconPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
    type: Pipe,
    args: [{
      name: "tuiIcon"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var Styles6 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-label-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiLabel]:where(*[data-tui-version="5.15.0"]){display:flex;gap:.25rem;flex-direction:column;font:var(--tui-typography-body-s);color:var(--tui-text-primary)}[tuiLabel]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=radio]{font:inherit;inset-block-start:calc(var(--tui-lh) / 2);transform:translateY(-50%);margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=radio][data-size=s]{line-height:1.3;margin-inline-end:.25rem}[tuiLabel]:where(*[data-tui-version="5.15.0"]) small{font:var(--tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version="5.15.0"]) [tuiTitle]:where(:not([tuiCell] *)){margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles6, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-label-${TUI_VERSION}`,
      styles: ['[tuiLabel]:where(*[data-tui-version="5.15.0"]){display:flex;gap:.25rem;flex-direction:column;font:var(--tui-typography-body-s);color:var(--tui-text-primary)}[tuiLabel]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=radio]{font:inherit;inset-block-start:calc(var(--tui-lh) / 2);transform:translateY(-50%);margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version="5.15.0"]) input[type=radio][data-size=s]{line-height:1.3;margin-inline-end:.25rem}[tuiLabel]:where(*[data-tui-version="5.15.0"]) small{font:var(--tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version="5.15.0"]) [tuiTitle]:where(:not([tuiCell] *)){margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}\n']
    }]
  }], null, null);
})();
var TuiLabel = class _TuiLabel {
  constructor() {
    this.textfield = contentChild(forwardRef(() => TUI_DATA_LIST_HOST));
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(Styles6);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
  static {
    this.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLabel)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLabel,
      selectors: [["label", "tuiLabel", ""]],
      contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.textfield, TUI_DATA_LIST_HOST, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 2,
      hostBindings: function TuiLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.textfield() ? "vertical" : "horizontal")("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id));
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      selector: "label[tuiLabel]",
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-orientation]": 'textfield() ? "vertical" : "horizontal"',
        "[attr.for]": "el.htmlFor || parent?.id"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-button-x.mjs
var [TUI_BUTTON_X_OPTIONS, tuiButtonXOptionsProvider] = tuiCreateOptions({
  appearance: "neutral",
  size: "s"
});
var TuiButtonX = class _TuiButtonX {
  static {
    this.ɵfac = function TuiButtonX_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonX)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonX,
      selectors: [["", "tuiButtonX", ""]],
      hostAttrs: ["tuiIconButton", "", "type", "button"],
      hostVars: 2,
      hostBindings: function TuiButtonX_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.prevent.zoneless", function TuiButtonX_pointerdown_prevent_zoneless_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-radius", 100, "%");
        }
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider(() => inject(TUI_BUTTON_X_OPTIONS)), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiButton,
        inputs: ["size", "size"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonX, [{
    type: Directive,
    args: [{
      selector: "[tuiButtonX]",
      providers: [tuiButtonOptionsProvider(() => inject(TUI_BUTTON_X_OPTIONS)), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }],
      hostDirectives: [{
        directive: TuiButton,
        inputs: ["size"]
      }],
      host: {
        tuiIconButton: "",
        type: "button",
        "[style.--t-radius.%]": "100",
        "(pointerdown.prevent.zoneless)": "(0)"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-filter-by-input.mjs
var TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS = {
  filter: (items, search, stringify) => items.find((x) => TUI_STRICT_MATCHER(x, search, stringify)) ? items : items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
};
var [TUI_FILTER_BY_INPUT_OPTIONS, tuiFilterByInputOptionsProvider] = tuiCreateOptions(TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS);
var TuiFilterByInputPipe = class _TuiFilterByInputPipe {
  constructor() {
    this.options = inject(TUI_FILTER_BY_INPUT_OPTIONS);
    this.search = inject(TUI_TEXTFIELD_VALUE);
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.filter = signal(this.options.filter);
    this.filterFlat = computed((filter2 = this.filter(), search = this.search(), stringify = this.handlers.stringify()) => (items) => filter2(items, search, stringify));
    this.items = signal([]);
    this.filtered = computed((items = this.items(), filter2 = this.filterFlat()) => items && (tuiIsFlat(items) ? filter2(items) : this.filter2d(items)));
  }
  transform(items, filter2 = this.options.filter) {
    untracked(() => {
      this.items.set(items);
      this.filter.set(filter2);
    });
    return this.filtered();
  }
  filter2d(groups) {
    const groupMap = new Map(groups.flatMap((group, i) => group.map((item) => [item, i])));
    const filteredGroups = [];
    this.filterFlat()(groups.flat()).forEach((item) => {
      const i = groupMap.get(item);
      filteredGroups[i] = filteredGroups[i]?.concat(item) ?? [item];
    });
    return filteredGroups;
  }
  static {
    this.ɵfac = function TuiFilterByInputPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFilterByInputPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFilterByInput",
      type: _TuiFilterByInputPipe,
      pure: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterByInputPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFilterByInput",
      pure: false
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var TuiValueTransformer = class {
};
var TUI_IDENTITY_VALUE_TRANSFORMER = {
  fromControlValue: identity,
  toControlValue: identity
};
var FLAGS = {
  self: true,
  optional: true
};
var TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = input(false);
    this.pseudoInvalid = input(void 0, {
      alias: "invalid"
    });
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => {
      const pseudoInvalid = this.pseudoInvalid();
      return pseudoInvalid == null ? this.interactive() && this.touched() && this.status() === "INVALID" : pseudoInvalid && this.interactive();
    });
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      const internal = untracked(this.internal);
      if (value === internal) {
        return;
      }
      onChange(this.transformer.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.transformer.fromControlValue(safe));
    this.update();
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiControl)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiControl,
      inputs: {
        readOnly: [1, "readOnly"],
        pseudoInvalid: [1, "invalid", "pseudoInvalid"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], () => [], null);
})();
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c07 = ["ghost"];
var _c13 = ["vcr"];
var _c2 = [[["input"]], [["select"]], [["textarea"]], [["label"]], "*", [["tui-icon"]]];
var _c3 = ["input", "select", "textarea", "label", "*", "tui-icon"];
var _c4 = (a0) => ({
  $implicit: a0
});
function TuiTextfieldComponent_Conditional_0_Template(rf, ctx) {
}
function TuiTextfieldComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function TuiTextfieldComponent_Conditional_11_Template_button_click_0_listener() {
      let tmp_4_0;
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView((tmp_4_0 = ctx_r3.accessor()) == null ? null : tmp_4_0.setValue(null));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.clear(), " ");
  }
}
function TuiTextfieldComponent_Conditional_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r5, " ");
  }
}
function TuiTextfieldComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, TuiTextfieldComponent_Conditional_13_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("tuiCell", ctx_r3.options.size());
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_5_0 = ctx_r3.control()) == null ? null : tmp_5_0.value));
  }
}
function TuiTextfieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 6, 2);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r3.computedFiller());
  }
}
function TuiTextfieldItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate(text_r1);
  }
}
var _c5 = [[["label"]], [["input"]], [["select"]], "*", [["tui-icon"]]];
var _c6 = ["label", "input", "select", "*", "tui-icon"];
var _c7 = (a0, a1) => ({
  item: a0,
  index: a1
});
function TuiTextfieldMultiComponent_Conditional_0_Template(rf, ctx) {
}
function TuiTextfieldMultiComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 3);
  }
}
function TuiTextfieldMultiComponent_For_7_ng_template_0_Template(rf, ctx) {
}
function TuiTextfieldMultiComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTextfieldMultiComponent_For_7_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r4.component)("polymorpheusOutletContext", ɵɵpureFunction1(5, _c4, ɵɵpureFunction2(2, _c7, item_r3, $index_r4)));
  }
}
function TuiTextfieldMultiComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.placeholder);
  }
}
function TuiTextfieldMultiComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function TuiTextfieldMultiComponent_Conditional_16_Template_button_click_0_listener() {
      let tmp_5_0;
      ɵɵrestoreView(_r7);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView((tmp_5_0 = ctx_r4.accessor()) == null ? null : tmp_5_0.setValue([]));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r4.clear(), " ");
  }
}
function TuiTextfieldMultiComponent_Conditional_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r8 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r8, " ");
  }
}
function TuiTextfieldMultiComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, TuiTextfieldMultiComponent_Conditional_20_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("tuiCell", ctx_r4.options.size());
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r4.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_6_0 = ctx_r4.control()) == null ? null : tmp_6_0.value));
  }
}
var DEFAULT2 = {
  appearance: "textfield",
  size: "l",
  cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_OPTIONS" : "", {
  factory: () => ({
    appearance: signal(DEFAULT2.appearance),
    size: signal(DEFAULT2.size),
    cleaner: signal(DEFAULT2.cleaner)
  })
});
function tuiTextfieldOptionsProvider(options) {
  return {
    provide: TUI_TEXTFIELD_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
    useFactory: (parent) => __spreadValues({
      appearance: signal(parent?.appearance() ?? DEFAULT2.appearance),
      size: signal(parent?.size() ?? DEFAULT2.size),
      cleaner: signal(parent?.cleaner() ?? DEFAULT2.cleaner)
    }, options)
  };
}
var TuiTextfieldOptionsDirective = class _TuiTextfieldOptionsDirective {
  constructor() {
    this.options = inject(TUI_TEXTFIELD_OPTIONS, {
      skipSelf: true
    });
    this.appearance = input(this.options.appearance(), {
      alias: "tuiTextfieldAppearance"
    });
    this.size = input(this.options.size(), {
      alias: "tuiTextfieldSize",
      transform: (size) => size || DEFAULT2.size
    });
    this.cleaner = input(this.options.cleaner(), {
      alias: "tuiTextfieldCleaner"
    });
  }
  static {
    this.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldOptionsDirective,
      selectors: [["", "tuiTextfieldAppearance", ""], ["", "tuiTextfieldSize", ""], ["", "tuiTextfieldCleaner", ""]],
      inputs: {
        appearance: [1, "tuiTextfieldAppearance", "appearance"],
        size: [1, "tuiTextfieldSize", "size"],
        cleaner: [1, "tuiTextfieldCleaner", "cleaner"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTextfieldOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
    }]
  }], null, null);
})();
var TuiSelectLike = class _TuiSelectLike {
  constructor() {
    this.el = tuiInjectElement();
    this.isAndroid = inject(WA_IS_ANDROID);
    this.isMobile = inject(WA_IS_MOBILE);
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
  }
  clear() {
    this.el.value = "";
  }
  prevent(event) {
    if (!this.isAndroid) {
      return;
    }
    event.preventDefault();
    this.el.focus();
  }
  static {
    this.ɵfac = function TuiSelectLike_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSelectLike)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSelectLike,
      selectors: [["", "tuiSelectLike", ""]],
      hostAttrs: ["autocomplete", "off", "inputmode", "none", "spellcheck", "false", "tuiSelectLike", ""],
      hostBindings: function TuiSelectLike_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("beforeinput", function TuiSelectLike_beforeinput_HostBindingHandler($event) {
            return ctx.isMobile && $event.inputType.includes("insertText") || ctx.options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault();
          })("input.capture", function TuiSelectLike_input_capture_HostBindingHandler($event) {
            return ($event.inputType == null ? null : $event.inputType.includes("delete")) && ctx.clear();
          })("keydown.backspace", function TuiSelectLike_keydown_backspace_HostBindingHandler() {
            return ctx.options.cleaner() && ctx.clear();
          })("keydown.delete", function TuiSelectLike_keydown_delete_HostBindingHandler() {
            return ctx.options.cleaner() && ctx.clear();
          })("mousedown", function TuiSelectLike_mousedown_HostBindingHandler($event) {
            return ctx.prevent($event);
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectLike, [{
    type: Directive,
    args: [{
      selector: "[tuiSelectLike]",
      host: {
        autocomplete: "off",
        inputmode: "none",
        spellcheck: "false",
        tuiSelectLike: "",
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        "(beforeinput)": '(isMobile && $event.inputType.includes("insertText")) || options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault()',
        "(input.capture)": '$event.inputType?.includes("delete") && clear()',
        "(keydown.backspace)": "options.cleaner() && clear()",
        // No (input) event if caret is at the beginning
        "(keydown.delete)": "options.cleaner() && clear()",
        // No (input) event if caret is at the end
        // Hide Android text select handle (bubble marker below transparent caret)
        "(mousedown)": "prevent($event)"
      }
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_ACCESSOR = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_ACCESSOR" : "");
function tuiAsTextfieldAccessor(accessor) {
  return tuiProvide(TUI_TEXTFIELD_ACCESSOR, accessor);
}
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.focusedIn = tuiFocusedIn(tuiInjectElement());
    this.ghost = viewChild("ghost");
    this.dropdown = inject(TuiDropdownDirective);
    this.open = inject(TuiDropdownOpen);
    this.clear = inject(TUI_CLEAR_WORD);
    this.label = contentChild(forwardRef(() => TuiLabel), {
      read: ElementRef
    });
    this.computedFiller = computed((value = this.value()) => {
      const filler = this.filler();
      if (filler.length <= value.length) {
        return "";
      }
      return this.input()?.nativeElement.matches('[dir="rtl"] :scope') ? `${filler.slice(0, filler.length - value.length)}${value}` : `${value}${filler.slice(value.length)}`;
    });
    this.showFiller = computed(() => this.focused() && !!this.computedFiller() && (!!this.value() || !this.input()?.nativeElement.placeholder));
    this.accessor = contentChild(TUI_TEXTFIELD_ACCESSOR);
    this.vcr = viewChild("vcr", {
      read: ViewContainerRef
    });
    this.control = contentChild(NgControl);
    this.child = contentChild(TuiControl);
    this.auxiliaries = contentChildren(TUI_AUXILIARY, {
      descendants: true
    });
    this.focused = computed(() => this.open.open() || this.focusedIn());
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.el = tuiInjectElement();
    this.input = contentChild(TUI_TEXTFIELD_ACCESSOR, {
      read: ElementRef
    });
    this.content = input();
    this.filler = input("");
    this.value = tuiValue(this.input);
  }
  get disabled() {
    return this.control()?.disabled ?? this.input()?.nativeElement?.disabled ?? false;
  }
  get size() {
    return this.options.size();
  }
  handleOption(option) {
    this.accessor()?.setValue(option);
    this.open.open.set(false);
  }
  get hasLabel() {
    return Boolean(this.label()?.nativeElement?.childNodes.length);
  }
  onResize({
    clientWidth
  }) {
    this.el.style.setProperty("--t-side", tuiPx(clientWidth));
  }
  // Click on ::before,::after pseudo-elements ([iconStart] / [iconEnd])
  onIconClick() {
    this.input()?.nativeElement.focus();
    if (!this.open.enabled() || this.input()?.nativeElement.matches("input:read-only,textarea:read-only")) {
      return;
    }
    this.open.open.update((open) => !open);
    try {
      this.input()?.nativeElement.showPicker?.();
    } catch {
    }
  }
  onScroll(element) {
    const input2 = this.input();
    if (input2?.nativeElement === element) {
      this.ghost()?.nativeElement.scrollTo({
        left: input2?.nativeElement.scrollLeft
      });
    }
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["tui-textfield", 3, "multi", ""]],
      contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.label, TuiLabel, 5, ElementRef)(dirIndex, ctx.accessor, TUI_TEXTFIELD_ACCESSOR, 5)(dirIndex, ctx.control, NgControl, 5)(dirIndex, ctx.child, TuiControl, 5)(dirIndex, ctx.auxiliaries, TUI_AUXILIARY, 5)(dirIndex, ctx.input, TUI_TEXTFIELD_ACCESSOR, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(6);
        }
      },
      viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.ghost, _c07, 5)(ctx.vcr, _c13, 5, ViewContainerRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostAttrs: [1, "tui-interactive"],
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel", function TuiTextfieldComponent_animationcancel_HostBindingHandler() {
            return 0;
          })("animationstart", function TuiTextfieldComponent_animationstart_HostBindingHandler() {
            return 0;
          })("click.self.prevent", function TuiTextfieldComponent_click_self_prevent_HostBindingHandler() {
            return 0;
          })("pointerdown.self.prevent", function TuiTextfieldComponent_pointerdown_self_prevent_HostBindingHandler() {
            return ctx.onIconClick();
          })("scroll.capture.zoneless", function TuiTextfieldComponent_scroll_capture_zoneless_HostBindingHandler($event) {
            return ctx.onScroll($event.target);
          })("tuiActiveZoneChange", function TuiTextfieldComponent_tuiActiveZoneChange_HostBindingHandler($event) {
            let tmp_0_0;
            return !$event && ((tmp_0_0 = ctx.control()) == null ? null : tmp_0_0.valueAccessor == null ? null : tmp_0_0.valueAccessor.onTouched == null ? null : tmp_0_0.valueAccessor.onTouched());
          });
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵattribute("data-size", ctx.options.size());
          ɵɵclassProp("_disabled", ctx.disabled)("_with-label", ctx.hasLabel)("_with-template", ctx.content() && ((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value) != null);
        }
      },
      inputs: {
        content: [1, "content"],
        filler: [1, "filler"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(_TuiTextfieldComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(_TuiTextfieldComponent).value
      }]), ɵɵHostDirectivesFeature([TuiAppearance, TuiDropdownDirective, TuiDropdownFixed, TuiWithDropdownOpen, TuiWithIcons, TuiWithItemsHandlers, TuiWithOptionContent])],
      ngContentSelectors: _c3,
      decls: 15,
      vars: 6,
      consts: [["side", ""], ["vcr", ""], ["ghost", ""], [1, "t-content", 3, "pointerdown", "resize"], ["tabindex", "-1", "tuiButtonX", ""], [1, "t-template", 3, "tuiCell"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"], ["tabindex", "-1", "tuiButtonX", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c2);
          ɵɵconditionalCreate(0, TuiTextfieldComponent_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
          ɵɵprojection(3, 1);
          ɵɵprojection(4, 2);
          ɵɵprojection(5, 3);
          ɵɵelementStart(6, "span", 3, 0);
          ɵɵlistener("pointerdown", function TuiTextfieldComponent_Template_span_pointerdown_6_listener() {
            let tmp_3_0;
            ɵɵrestoreView(_r1);
            return ɵɵresetView((tmp_3_0 = ctx.input()) == null ? null : tmp_3_0.nativeElement == null ? null : tmp_3_0.nativeElement.focus());
          })("resize", function TuiTextfieldComponent_Template_span_resize_6_listener() {
            ɵɵrestoreView(_r1);
            const side_r2 = ɵɵreference(7);
            return ɵɵresetView(ctx.onResize(side_r2));
          });
          ɵɵprojection(8, 4);
          ɵɵelementContainer(9, null, 1);
          ɵɵconditionalCreate(11, TuiTextfieldComponent_Conditional_11_Template, 2, 1, "button", 4);
          ɵɵprojection(12, 5);
          ɵɵelementEnd();
          ɵɵconditionalCreate(13, TuiTextfieldComponent_Conditional_13_Template, 2, 5, "span", 5);
          ɵɵconditionalCreate(14, TuiTextfieldComponent_Conditional_14_Template, 2, 1, "input", 6);
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_4_0;
          ɵɵconditional(((tmp_2_0 = ctx.child()) == null ? null : tmp_2_0.value()) ?? ɵɵpipeBind1(1, 4, (tmp_2_0 = ctx.control()) == null ? null : tmp_2_0.control == null ? null : tmp_2_0.control.valueChanges) ? 0 : -1);
          ɵɵadvance(11);
          ɵɵconditional(ctx.options.cleaner() ? 11 : -1);
          ɵɵadvance(2);
          ɵɵconditional(((tmp_4_0 = ctx.control()) == null ? null : tmp_4_0.value) != null ? 13 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showFiller() ? 14 : -1);
        }
      },
      dependencies: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell],
      styles: ['tui-textfield:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-start]{--t-start: calc(2.5rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start]{--t-start: calc(2.125rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.15.0"]) button,tui-textfield:where(*[data-tui-version="5.15.0"]) a,tui-textfield:where(*[data-tui-version="5.15.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.15.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield:not([multi])",
      imports: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(TuiTextfieldComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }],
      hostDirectives: [TuiAppearance, TuiDropdownDirective, TuiDropdownFixed, TuiWithDropdownOpen, TuiWithIcons, TuiWithItemsHandlers, TuiWithOptionContent],
      host: {
        class: "tui-interactive",
        "[attr.data-size]": "options.size()",
        "[class._disabled]": "disabled",
        // TODO :has([tuiInput]:disabled)
        "[class._with-label]": "hasLabel",
        // TODO :has([tuiLabel]
        "[class._with-template]": "content() && control()?.value != null",
        "(animationcancel)": "0",
        // TODO :has([tuiInput]:disabled)
        "(animationstart)": "0",
        // TODO :has([tuiInput]:disabled)
        "(click.self.prevent)": "0",
        // TODO preventing breaks resize: both, but not preventing breaks focus, fix
        "(pointerdown.self.prevent)": "onIconClick()",
        "(scroll.capture.zoneless)": "onScroll($event.target)",
        "(tuiActiveZoneChange)": "!$event && control()?.valueAccessor?.onTouched?.()"
      },
      template: '@if (child()?.value() ?? (control()?.control?.valueChanges | async)) {}\n<ng-content select="input" />\n<ng-content select="select" />\n<ng-content select="textarea" />\n<ng-content select="label" />\n<span\n    #side\n    class="t-content"\n    (pointerdown)="input()?.nativeElement?.focus()"\n    (resize)="onResize(side)"\n>\n    <ng-content />\n    <ng-container #vcr />\n    @if (options.cleaner()) {\n        <button\n            tabindex="-1"\n            tuiButtonX\n            (click)="accessor()?.setValue(null)"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-content select="tui-icon" />\n</span>\n@if (control()?.value != null) {\n    <span\n        class="t-template"\n        [tuiCell]="options.size()"\n    >\n        <ng-container *polymorpheusOutlet="content() as text; context: {$implicit: control()?.value}">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n@if (showFiller()) {\n    <input\n        #ghost\n        aria-hidden="true"\n        disabled\n        class="t-filler"\n        [value]="computedFiller()"\n    />\n}\n',
      styles: ['tui-textfield:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-start]{--t-start: calc(2.5rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start]{--t-start: calc(2.125rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.15.0"]) button,tui-textfield:where(*[data-tui-version="5.15.0"]) a,tui-textfield:where(*[data-tui-version="5.15.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.15.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}\n']
    }]
  }], null, null);
})();
var TuiTextfieldItemComponent = class _TuiTextfieldItemComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.context = injectContext();
    this.textfield = inject(TuiTextfieldMultiComponent);
    this.content = computed(() => this.textfield.item() ?? this.handlers.stringify()(this.context.$implicit.item));
  }
  prevent(e) {
    this.textfield.focused() && e.preventDefault();
  }
  static {
    this.ɵfac = function TuiTextfieldItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldItemComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldItemComponent,
      selectors: [["tui-textfield-item"]],
      hostVars: 4,
      hostBindings: function TuiTextfieldItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft.prevent", function TuiTextfieldItemComponent_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.el.previousElementSibling == null ? null : ctx.el.previousElementSibling.firstChild == null ? null : ctx.el.previousElementSibling.firstChild.focus();
          })("keydown.arrowRight.prevent", function TuiTextfieldItemComponent_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.el.nextElementSibling == null ? null : ctx.el.nextElementSibling.firstChild == null ? null : ctx.el.nextElementSibling.firstChild.focus();
          })("pointerdown.self", function TuiTextfieldItemComponent_pointerdown_self_HostBindingHandler($event) {
            return ctx.prevent($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_disabled", ctx.handlers.disabledItemHandler()(ctx.context.$implicit.item))("_string", !ctx.textfield.item());
        }
      },
      decls: 1,
      vars: 2,
      consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiTextfieldItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ['[_nghost-%COMP%]{display:flex;max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--tui-text-primary)}._string[_nghost-%COMP%]{display:block;overflow:hidden;overflow:clip visible}._string._disabled[_nghost-%COMP%]{opacity:var(--tui-disabled-opacity)}._string[_nghost-%COMP%]:after{content:",\\a0"}[_nghost-%COMP%]:last-of-type{max-inline-size:80%}tui-textfield:not([data-focus="true"])[_nghost-%COMP%]:last-of-type:after, tui-textfield:not([data-focus="true"])   [_nghost-%COMP%]:last-of-type:after{display:none}tui-textfield:has([tuiSelectLike])[_nghost-%COMP%]:last-of-type:after, tui-textfield:has([tuiSelectLike])   [_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~="readonly"][_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~="readonly"]   [_nghost-%COMP%]:last-of-type:after{content:"\\a0"}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldItemComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield-item",
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="content() as text; context: context">{{ text }}</ng-container>',
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._disabled]": "handlers.disabledItemHandler()(context.$implicit.item)",
        "[class._string]": "!textfield.item()",
        "(keydown.arrowLeft.prevent)": "el.previousElementSibling?.firstChild?.focus()",
        "(keydown.arrowRight.prevent)": "el.nextElementSibling?.firstChild?.focus()",
        "(pointerdown.self)": "prevent($event)"
      },
      styles: [':host{display:flex;max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--tui-text-primary)}:host._string{display:block;overflow:hidden;overflow:clip visible}:host._string._disabled{opacity:var(--tui-disabled-opacity)}:host._string:after{content:",\\a0"}:host:last-of-type{max-inline-size:80%}:host-context(tui-textfield:not([data-focus="true"])):last-of-type:after{display:none}:host-context(tui-textfield:has([tuiSelectLike])):last-of-type:after,:host-context(tui-textfield[data-mode~="readonly"]):last-of-type:after{content:"\\a0"}\n']
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_ITEM = new PolymorpheusComponent(TuiTextfieldItemComponent);
var TuiTextfieldMultiComponent = class _TuiTextfieldMultiComponent extends TuiTextfieldComponent {
  constructor() {
    super(...arguments);
    this.height = signal(null);
    this.win = inject(WA_WINDOW);
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.component = TUI_TEXTFIELD_ITEM;
    this.items = computed(() => this.cva()?.value() ?? []);
    this.sub = fromEvent(this.el, "scroll").pipe(filter(() => this.rows() === 1), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      this.el.style.setProperty("--t-scroll", tuiPx(-1 * this.el.scrollLeft));
    });
    this.cva = contentChild(TuiControl);
    this.item = contentChild(TuiItem, {
      read: TemplateRef,
      descendants: true
    });
    this.rows = input(100);
  }
  handleOption(option) {
    this.accessor()?.setValue(tuiArrayToggle(this.items(), option, this.handlers.identityMatcher()));
  }
  get placeholder() {
    const el = this.input()?.nativeElement;
    const placeholder = el?.matches("input") ? el.placeholder : this.computedFiller();
    const value = this.computedFiller() || this.value();
    const longer = value.length > placeholder.length ? value : placeholder;
    return this.focused() ? longer : "";
  }
  onItems(target) {
    this.height.update((h) => target.querySelector("tui-textfield-item")?.clientHeight || h);
  }
  onLeft(event) {
    if (this.value() || !tuiIsElement(event.currentTarget)) {
      return;
    }
    event.preventDefault();
    event.currentTarget.previousElementSibling?.firstElementChild?.focus();
  }
  focusInput() {
    const selection = this.win.getSelection();
    if (!selection?.rangeCount || selection.getRangeAt(0)?.collapsed) {
      this.input()?.nativeElement.focus();
    }
  }
  onClick(target) {
    if (target === this.el || !this.cva()?.interactive() || !this.el.matches("[tuiChevron]") && !this.el.querySelector("select, [tuiInputDateMulti]") || target.matches('input:read-only,input[inputmode="none"]')) {
      return;
    }
    this.open.open.update((open) => !open);
    try {
      this.input()?.nativeElement.showPicker?.();
    } catch {
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldMultiComponent_BaseFactory;
      return function TuiTextfieldMultiComponent_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldMultiComponent_BaseFactory || (ɵTuiTextfieldMultiComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldMultiComponent)))(__ngFactoryType__ || _TuiTextfieldMultiComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldMultiComponent,
      selectors: [["tui-textfield", "multi", ""]],
      contentQueries: function TuiTextfieldMultiComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.cva, TuiControl, 5)(dirIndex, ctx.item, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostVars: 7,
      hostBindings: function TuiTextfieldMultiComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.prevent", function TuiTextfieldMultiComponent_click_prevent_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          })("tuiActiveZoneChange", function TuiTextfieldMultiComponent_tuiActiveZoneChange_HostBindingHandler($event) {
            return !$event && ctx.el.scrollTo({
              left: 0
            });
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-state", ctx.disabled ? "disabled" : null);
          ɵɵstyleProp("--t-item-height", ctx.height(), "px")("--t-rows", ctx.rows());
          ɵɵclassProp("_empty", !ctx.items().length);
        }
      },
      inputs: {
        rows: [1, "rows"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(_TuiTextfieldMultiComponent), tuiProvide(TuiTextfieldComponent, _TuiTextfieldMultiComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }, tuiFilterByInputOptionsProvider({
        filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
      })]), ɵɵHostDirectivesFeature([TuiScrollRef]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c6,
      decls: 21,
      vars: 12,
      consts: [["wrapper", ""], ["side", ""], ["vcr", ""], [1, "t-scrollbar"], [1, "t-items", 3, "click", "pointerdown.self.zoneless.prevent", "resize"], [3, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-input", 3, "keydown.arrowLeft"], [1, "t-ghost"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"], [1, "t-content", 3, "click.stop", "pointerdown.zoneless.prevent", "resize"], ["tabindex", "-1", "tuiButtonX", ""], [1, "t-template", 3, "tuiCell"], ["tabindex", "-1", "tuiButtonX", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldMultiComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c5);
          ɵɵconditionalCreate(0, TuiTextfieldMultiComponent_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵconditionalCreate(2, TuiTextfieldMultiComponent_Conditional_2_Template, 1, 0, "tui-scroll-controls", 3);
          ɵɵelementStart(3, "div", 4, 0);
          ɵɵlistener("click", function TuiTextfieldMultiComponent_Template_div_click_3_listener() {
            return ctx.focusInput();
          })("pointerdown.self.zoneless.prevent", function TuiTextfieldMultiComponent_Template_div_pointerdown_self_zoneless_prevent_3_listener() {
            return 0;
          })("resize", function TuiTextfieldMultiComponent_Template_div_resize_3_listener() {
            ɵɵrestoreView(_r1);
            const wrapper_r2 = ɵɵreference(4);
            return ɵɵresetView(ctx.onItems(wrapper_r2));
          });
          ɵɵprojection(5);
          ɵɵrepeaterCreate(6, TuiTextfieldMultiComponent_For_7_Template, 1, 7, null, 5, ɵɵrepeaterTrackByIdentity);
          ɵɵelementStart(8, "span", 6);
          ɵɵlistener("keydown.arrowLeft", function TuiTextfieldMultiComponent_Template_span_keydown_arrowLeft_8_listener($event) {
            return ctx.onLeft($event);
          });
          ɵɵprojection(9, 1);
          ɵɵprojection(10, 2);
          ɵɵconditionalCreate(11, TuiTextfieldMultiComponent_Conditional_11_Template, 2, 1, "span", 7);
          ɵɵelement(12, "input", 8);
          ɵɵelementEnd()();
          ɵɵelementStart(13, "span", 9, 1);
          ɵɵlistener("click.stop", function TuiTextfieldMultiComponent_Template_span_click_stop_13_listener() {
            let tmp_4_0;
            ɵɵrestoreView(_r1);
            return ɵɵresetView((tmp_4_0 = ctx.input()) == null ? null : tmp_4_0.nativeElement == null ? null : tmp_4_0.nativeElement.focus());
          })("pointerdown.zoneless.prevent", function TuiTextfieldMultiComponent_Template_span_pointerdown_zoneless_prevent_13_listener() {
            return 0;
          })("resize", function TuiTextfieldMultiComponent_Template_span_resize_13_listener() {
            ɵɵrestoreView(_r1);
            const side_r6 = ɵɵreference(14);
            return ɵɵresetView(ctx.onResize(side_r6));
          });
          ɵɵprojection(15, 3);
          ɵɵconditionalCreate(16, TuiTextfieldMultiComponent_Conditional_16_Template, 2, 1, "button", 10);
          ɵɵelementContainer(17, null, 2);
          ɵɵprojection(19, 4);
          ɵɵelementEnd();
          ɵɵconditionalCreate(20, TuiTextfieldMultiComponent_Conditional_20_Template, 2, 5, "span", 11);
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_11_0;
          ɵɵconditional(((tmp_3_0 = ctx.child()) == null ? null : tmp_3_0.value()) ?? ɵɵpipeBind1(1, 10, (tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.control == null ? null : tmp_3_0.control.valueChanges) ? 0 : -1);
          ɵɵadvance(2);
          ɵɵconditional(ctx.rows() > 1 ? 2 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-items_horizontal", ctx.rows() === 1);
          ɵɵadvance(3);
          ɵɵrepeater(ctx.items());
          ɵɵadvance(5);
          ɵɵconditional(ctx.placeholder ? 11 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-filler_hidden", !ctx.showFiller());
          ɵɵproperty("value", ctx.computedFiller());
          ɵɵadvance(4);
          ɵɵconditional(ctx.options.cleaner() ? 16 : -1);
          ɵɵadvance(4);
          ɵɵconditional(((tmp_11_0 = ctx.control()) == null ? null : tmp_11_0.value) != null ? 20 : -1);
        }
      },
      dependencies: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, TuiScrollControls],
      styles: ['tui-textfield:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-start]{--t-start: calc(2.5rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start]{--t-start: calc(2.125rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.15.0"]) button,tui-textfield:where(*[data-tui-version="5.15.0"]) a,tui-textfield:where(*[data-tui-version="5.15.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.15.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--t-vertical) * 2 + var(--t-item-height) * var(--t-rows));overscroll-behavior-x:none;scroll-behavior:var(--tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]):before,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:10rem;min-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)));max-block-size:calc((var(--t-item-height, calc(var(--t-height) - 2 * var(--t-vertical))) + 2 * var(--t-vertical)) * (1 - .2 * var(--t-zoom)))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-scrollbar{transform:translate(calc(var(--t-padding) * var(--tui-inline)));margin-inline-start:calc(-1 * var(--t-start));margin-inline-end:calc(1px - 100% + var(--t-start))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items{position:sticky;z-index:-1;display:flex;inset-inline-start:var(--t-start);min-inline-size:0;min-block-size:var(--t-height);block-size:fit-content;flex:1;align-items:center;flex-wrap:wrap;padding:var(--t-vertical) 0;transition-duration:inherit;box-sizing:border-box;view-timeline:--t-scrollbar-y y}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items:after{content:"";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items_horizontal{clip-path:inset(0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--t-side) + var(--t-end) + var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--t-item-height, 1.25em);max-block-size:calc(var(--t-height) - 2 * var(--t-vertical));max-inline-size:100%;pointer-events:none;transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=l]{--t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=l] tui-textfield-item:first-of-type{margin-block-start:1.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=m]{--t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=m] tui-textfield-item:first-of-type{margin-block-start:.875rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin:calc(var(--t-height) / 2 - var(--t-vertical) - .625em) 0;margin-inline-end:-100%;padding:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-content{position:sticky;min-block-size:var(--t-height);block-size:calc(var(--t-item-height) + 2 * var(--t-vertical));inset-block-start:0;inset-inline-start:calc(100% - var(--t-side) - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=l]{--t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=l]:after{inset-inline-start:calc(100% - var(--t-end) - var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inset-inline-start:calc(100% - var(--t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inset-inline-start:calc(100% - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]) tui-textfield-item{transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]) input::placeholder{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]):has([tuiSelectLike]){cursor:pointer}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldMultiComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield[multi]",
      imports: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, TuiScrollControls],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(TuiTextfieldMultiComponent), tuiProvide(TuiTextfieldComponent, TuiTextfieldMultiComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }, tuiFilterByInputOptionsProvider({
        filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
      })],
      hostDirectives: [TuiScrollRef],
      host: {
        "[attr.data-state]": 'disabled ? "disabled" : null',
        "[class._empty]": "!items().length",
        "[style.--t-item-height.px]": "height()",
        "[style.--t-rows]": "rows()",
        "(click.prevent)": "onClick($event.target)",
        "(tuiActiveZoneChange)": "!$event && el.scrollTo({left: 0})"
      },
      template: '@if (child()?.value() ?? (control()?.control?.valueChanges | async)) {}\n@if (rows() > 1) {\n    <tui-scroll-controls class="t-scrollbar" />\n}\n\n<div\n    #wrapper\n    class="t-items"\n    [class.t-items_horizontal]="rows() === 1"\n    (click)="focusInput()"\n    (pointerdown.self.zoneless.prevent)="(0)"\n    (resize)="onItems(wrapper)"\n>\n    <ng-content select="label" />\n    @for (item of items(); track item) {\n        <ng-template\n            [polymorpheusOutlet]="component"\n            [polymorpheusOutletContext]="{$implicit: {item, index: $index}}"\n        />\n    }\n    <span\n        class="t-input"\n        (keydown.arrowLeft)="onLeft($event)"\n    >\n        <ng-content select="input" />\n        <ng-content select="select" />\n        @if (placeholder) {\n            <span class="t-ghost">{{ placeholder }}</span>\n        }\n        <input\n            aria-hidden="true"\n            disabled\n            class="t-filler"\n            [class.t-filler_hidden]="!showFiller()"\n            [value]="computedFiller()"\n        />\n    </span>\n</div>\n\n<span\n    #side\n    class="t-content"\n    (click.stop)="input()?.nativeElement?.focus()"\n    (pointerdown.zoneless.prevent)="(0)"\n    (resize)="onResize(side)"\n>\n    <ng-content />\n    @if (options.cleaner()) {\n        <button\n            tabindex="-1"\n            tuiButtonX\n            (click)="accessor()?.setValue([])"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-container #vcr />\n    <ng-content select="tui-icon" />\n</span>\n\n@if (control()?.value != null) {\n    <span\n        class="t-template"\n        [tuiCell]="options.size()"\n    >\n        <ng-container *polymorpheusOutlet="content() as text; context: {$implicit: control()?.value}">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n',
      styles: ['tui-textfield:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-start]{--t-start: calc(2.5rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start]{--t-start: calc(2.125rem * (1 + .25 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.15.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"]):is(._disabled,[data-state=disabled])>.t-content>tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.15.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.15.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.15.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.15.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.15.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.15.0"]) button,tui-textfield:where(*[data-tui-version="5.15.0"]) a,tui-textfield:where(*[data-tui-version="5.15.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.15.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.15.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.15.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.15.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.15.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.15.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.15.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--t-vertical) * 2 + var(--t-item-height) * var(--t-rows));overscroll-behavior-x:none;scroll-behavior:var(--tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]):before,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:10rem;min-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)));max-block-size:calc((var(--t-item-height, calc(var(--t-height) - 2 * var(--t-vertical))) + 2 * var(--t-vertical)) * (1 - .2 * var(--t-zoom)))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-scrollbar{transform:translate(calc(var(--t-padding) * var(--tui-inline)));margin-inline-start:calc(-1 * var(--t-start));margin-inline-end:calc(1px - 100% + var(--t-start))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items{position:sticky;z-index:-1;display:flex;inset-inline-start:var(--t-start);min-inline-size:0;min-block-size:var(--t-height);block-size:fit-content;flex:1;align-items:center;flex-wrap:wrap;padding:var(--t-vertical) 0;transition-duration:inherit;box-sizing:border-box;view-timeline:--t-scrollbar-y y}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items:after{content:"";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items_horizontal{clip-path:inset(0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--t-side) + var(--t-end) + var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--t-item-height, 1.25em);max-block-size:calc(var(--t-height) - 2 * var(--t-vertical));max-inline-size:100%;pointer-events:none;transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=l]{--t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=l] tui-textfield-item:first-of-type{margin-block-start:1.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=m]{--t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label[data-size=m] tui-textfield-item:first-of-type{margin-block-start:.875rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin:calc(var(--t-height) / 2 - var(--t-vertical) - .625em) 0;margin-inline-end:-100%;padding:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-content{position:sticky;min-block-size:var(--t-height);block-size:calc(var(--t-item-height) + 2 * var(--t-vertical));inset-block-start:0;inset-inline-start:calc(100% - var(--t-side) - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=l]{--t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=l]:after{inset-inline-start:calc(100% - var(--t-end) - var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inset-inline-start:calc(100% - var(--t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inset-inline-start:calc(100% - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]) tui-textfield-item{transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]) input::placeholder{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version="5.15.0"]):has([tuiSelectLike]){cursor:pointer}\n']
    }]
  }], null, null);
})();
var TuiTextfield = [TuiItem, TuiLabel, TuiTextfieldComponent, TuiTextfieldOptionsDirective, TuiTextfieldMultiComponent, TuiDropdownContent];
function tuiInjectAuxiliary(predicate) {
  const {
    auxiliaries
  } = inject(TuiTextfieldComponent);
  return computed(() => auxiliaries().find(predicate) ?? null);
}
var TUI_TEXTFIELD_CONTENT = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_CONTENT" : "");
function tuiAsTextfieldContent(content) {
  return {
    provide: TUI_TEXTFIELD_CONTENT,
    useFactory: content
  };
}
var TuiTextfieldContent = class _TuiTextfieldContent {
  constructor() {
    this.vcr = inject(TuiTextfieldComponent).vcr;
    this.options = {
      injector: inject(INJECTOR$1)
    };
    this.content = inject(TUI_TEXTFIELD_CONTENT, {
      optional: true
    }) || inject(TemplateRef);
    this.ref = computed(() => {
      const vcr = this.vcr();
      return this.content instanceof TemplateRef ? vcr?.createEmbeddedView(this.content) : vcr?.createComponent(this.content, this.options).hostView;
    });
  }
  ngDoCheck() {
    this.ref()?.detectChanges();
  }
  ngOnDestroy() {
    this.ref()?.destroy();
  }
  static {
    this.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldContent,
      selectors: [["ng-template", "tuiTextfieldContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiTextfieldContent]"
    }]
  }], null, null);
})();
var TuiWithNativePicker = class _TuiWithNativePicker {
  constructor() {
    tuiInjectElement().type = "text";
  }
  static {
    this.ɵfac = function TuiWithNativePicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithNativePicker)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithNativePicker
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithNativePicker, [{
    type: Directive
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-id.mjs
var TuiId = class _TuiId {
  constructor() {
    this.el = tuiInjectElement();
    this.autoId = tuiGenerateId();
  }
  get id() {
    return this.el.id || this.autoId;
  }
  static {
    this.ɵfac = function TuiId_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiId)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiId,
      selectors: [["", "tuiId", ""]],
      hostVars: 1,
      hostBindings: function TuiId_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiId, [{
    type: Directive,
    args: [{
      selector: "[tuiId]",
      host: {
        "[id]": "id"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-input.mjs
var TuiInputDirective = class _TuiInputDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      optional: true
    });
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.textfield = inject(TuiTextfieldComponent);
    this.dropdown = inject(TuiDropdownDirective);
    this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    this.s = tuiAppearanceState(computed(() => this.state()));
    this.m = tuiAppearanceMode(computed(() => this.mode()));
    this.f = tuiAppearanceFocus(computed(() => this.focused() ?? this.textfield.focused()));
    this.readOnly = input(false);
    this.invalid = input(null);
    this.focused = input(null);
    this.state = input(null);
    this.value = tuiValue(this.el);
    this.mode = computed(() => {
      if (this.readOnly()) {
        return "readonly";
      }
      if (this.invalid() === false) {
        return "valid";
      }
      return this.invalid() ? "invalid" : null;
    });
  }
  setValue(value) {
    this.el.focus();
    this.el.select();
    if (value == null) {
      this.el.ownerDocument.execCommand("delete");
      this.el.value = "";
    } else {
      this.el.ownerDocument.execCommand("insertText", false, this.handlers.stringify()(value));
    }
  }
  static {
    this.ɵfac = function TuiInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputDirective,
      selectors: [["input", "tuiInput", ""]],
      hostAttrs: ["tuiInput", ""],
      hostVars: 4,
      hostBindings: function TuiInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiInputDirective_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiInputDirective_focusout_HostBindingHandler() {
            return 0;
          })("input", function TuiInputDirective_input_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("readOnly", ctx.readOnly());
          ɵɵattribute("role", ctx.dropdown.content() && !ctx.el.matches("select") ? "combobox" : null);
          ɵɵclassProp("_empty", ctx.value() === "");
        }
      },
      inputs: {
        readOnly: [1, "readOnly"],
        invalid: [1, "invalid"],
        focused: [1, "focused"],
        state: [1, "state"]
      },
      features: [ɵɵProvidersFeature([tuiAsTextfieldAccessor(_TuiInputDirective)]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiId])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[tuiInput]",
      providers: [tuiAsTextfieldAccessor(TuiInputDirective)],
      hostDirectives: [TuiNativeValidator, TuiId],
      host: {
        tuiInput: "",
        "[attr.role]": 'dropdown.content() && !el.matches("select") ? "combobox" : null',
        "[class._empty]": 'value() === ""',
        "[readOnly]": "readOnly()",
        "(focusin)": "0",
        "(focusout)": "0",
        "(input)": "0"
      }
    }]
  }], null, null);
})();
var TuiWithInput = class _TuiWithInput {
  static {
    this.ɵfac = function TuiWithInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithInput)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithInput,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiInputDirective,
        inputs: ["invalid", "invalid", "focused", "focused", "readOnly", "readOnly", "state", "state"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithInput, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiInputDirective,
        inputs: ["invalid", "focused", "readOnly", "state"]
      }]
    }]
  }], null, null);
})();
var TuiInput = [TuiLabel, TuiTextfieldComponent, TuiTextfieldOptionsDirective, TuiDropdownContent, TuiInputDirective];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-alert.mjs
var Styles7 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-alert-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiAlert]:where(*[data-tui-version="5.15.0"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-inline=end]{justify-self:end;--tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-inline=center]{justify-self:center;--tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end][data-inline=center]{--tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version="5.15.0"]).tui-enter,[tuiAlert]:where(*[data-tui-version="5.15.0"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version="5.15.0"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version="5.15.0"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version="5.15.0"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version="5.15.0"])>*:before,[tuiAlert]:where(*[data-tui-version="5.15.0"])>*:after{content:"";display:block;block-size:.375rem}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles7, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-alert-${TUI_VERSION}`,
      styles: ['[tuiAlert]:where(*[data-tui-version="5.15.0"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-inline=end]{justify-self:end;--tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-inline=center]{justify-self:center;--tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end][data-inline=center]{--tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version="5.15.0"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version="5.15.0"]).tui-enter,[tuiAlert]:where(*[data-tui-version="5.15.0"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version="5.15.0"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version="5.15.0"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version="5.15.0"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version="5.15.0"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version="5.15.0"])>*:before,[tuiAlert]:where(*[data-tui-version="5.15.0"])>*:after{content:"";display:block;block-size:.375rem}\n']
    }]
  }], null, null);
})();
var TuiAlertDirective = class _TuiAlertDirective {
  constructor() {
    this.nothing = tuiWithStyles(Styles7);
    this.context = injectContext();
  }
  static {
    this.ɵfac = function TuiAlertDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlertDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAlertDirective,
      hostAttrs: ["data-tui-version", "5.15.0", "role", "alert", "tuiAlert", ""],
      hostVars: 2,
      hostBindings: function TuiAlertDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-block", ctx.context.block)("data-inline", ctx.context.inline);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertDirective, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        role: "alert",
        tuiAlert: "",
        "[attr.data-block]": "context.block",
        "[attr.data-inline]": "context.inline"
      }
    }]
  }], null, null);
})();
var TuiAlertService = class _TuiAlertService extends TuiPortal {
  constructor(concurrency, service = inject(TuiPopupService)) {
    super(service);
    this.current = /* @__PURE__ */ new Map();
    this.queue = /* @__PURE__ */ new Set();
    this.concurrency = Math.min(concurrency, 5);
  }
  add(component) {
    if (this.current.size < this.concurrency) {
      this.current.set(component, this.service.add(component));
    } else {
      this.queue.add(component);
    }
    return () => {
      this.current.get(component)?.destroy();
      this.current.delete(component);
      this.queue.delete(component);
      const [next] = this.queue;
      if (this.current.size < this.concurrency && next) {
        this.current.set(next, this.service.add(next));
        this.queue.delete(next);
      }
    };
  }
  static {
    this.ɵfac = function TuiAlertService_Factory(__ngFactoryType__) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiAlertService,
      factory: _TuiAlertService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable
  }], () => [{
    type: void 0
  }, {
    type: void 0
  }], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-title.mjs
var Styles8 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-title-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiTitle]:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=s]{gap:.125rem;font:var(--tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=m]{gap:.125rem;font:var(--tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=l]{gap:.5rem;font:var(--tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.15.0"]) h1,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h2,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h3,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h4,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h5,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{font:var(--tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles8, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-title-${TUI_VERSION}`,
      styles: ['[tuiTitle]:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=s]{gap:.125rem;font:var(--tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=m]{gap:.125rem;font:var(--tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=l]{gap:.5rem;font:var(--tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.15.0"]) h1,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h2,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h3,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h4,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h5,[tuiTitle]:where(*[data-tui-version="5.15.0"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{font:var(--tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version="5.15.0"]) [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n']
    }]
  }], null, null);
})();
var TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(Styles8);
    this.tuiTitle = input("");
  }
  static {
    this.ɵfac = function TuiTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTitle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTitle,
      selectors: [["", "tuiTitle", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiTitle", ""],
      hostVars: 1,
      hostBindings: function TuiTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.tuiTitle() || null);
        }
      },
      inputs: {
        tuiTitle: [1, "tuiTitle"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      selector: "[tuiTitle]",
      host: {
        "data-tui-version": TUI_VERSION,
        tuiTitle: "",
        "[attr.data-size]": "tuiTitle() || null"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
function TuiNotificationComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiNotificationComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r2, ɵɵsanitizeHtml);
  }
}
function TuiNotificationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function TuiNotificationComponent_Conditional_7_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.item.$implicit.complete());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r3.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.close(), " ");
  }
}
var ICONS = {
  info: "@tui.info",
  positive: "@tui.circle-check",
  negative: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l",
  data: void 0,
  autoClose: 3e3,
  label: "",
  closable: true,
  block: "start",
  inline: "end"
};
var [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] = tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
var TUI_NOTIFICATION_CONCURRENCY = new InjectionToken(ngDevMode ? "TUI_NOTIFICATION_CONCURRENCY" : "", {
  factory: () => 5
});
var Styles9 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-notification-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiNotification]:where(*[data-tui-version="5.15.0"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--tui-text-primary);padding:var(--t-offset) var(--tui-padding-l);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-offset: calc((var(--t-height) - var(--tui-lh)) / 2);--t-height: var(--tui-height-l);--t-start: 0;--t-end: 0}[tuiNotification]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-icon-start]{--t-start: 2rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-icon-end]{--t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.15.0"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc((var(--t-offset) + var(--tui-lh)) * (1 - .15 * var(--t-zoom)));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version="5.15.0"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]{padding:var(--t-offset) .5rem;font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{inset-inline-start:calc(-1rem * (1 - .2 * var(--t-zoom)));inset-block-start:calc((var(--t-offset) + var(--tui-lh)) * (1 - .1 * var(--t-zoom)));font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]{padding:var(--t-offset) var(--tui-padding-m);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-m)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start]{--t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{gap:.125rem;font:var(--tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles9, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-notification-${TUI_VERSION}`,
      styles: ['[tuiNotification]:where(*[data-tui-version="5.15.0"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--tui-text-primary);padding:var(--t-offset) var(--tui-padding-l);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-offset: calc((var(--t-height) - var(--tui-lh)) / 2);--t-height: var(--tui-height-l);--t-start: 0;--t-end: 0}[tuiNotification]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-icon-start]{--t-start: 2rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-icon-end]{--t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.15.0"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc((var(--t-offset) + var(--tui-lh)) * (1 - .15 * var(--t-zoom)));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version="5.15.0"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]{padding:var(--t-offset) .5rem;font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{inset-inline-start:calc(-1rem * (1 - .2 * var(--t-zoom)));inset-block-start:calc((var(--t-offset) + var(--tui-lh)) * (1 - .1 * var(--t-zoom)));font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]{padding:var(--t-offset) var(--tui-padding-m);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-m)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m][data-icon-start]{--t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.15.0"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{gap:.125rem;font:var(--tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.15.0"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n']
    }]
  }], null, null);
})();
var TuiNotificationDirective = class _TuiNotificationDirective {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(Styles9);
    this.icons = tuiIconStart(computed((icon = this.icon()) => tuiIsString(icon) ? icon : icon(this.appearance())));
    this.appearance = input(this.options.appearance);
    this.size = input(this.options.size);
    this.icon = input(this.options.icon);
  }
  static {
    this.ɵfac = function TuiNotificationDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNotificationDirective,
      selectors: [["", "tuiNotification", "", 5, "ng-template"]],
      hostVars: 1,
      hostBindings: function TuiNotificationDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        appearance: [1, "appearance"],
        size: [1, "size"],
        icon: [1, "icon"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: ""
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiWithIcons, TuiWithAppearance])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiNotification]:not(ng-template)",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: ""
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();
var TuiNotificationComponent = class _TuiNotificationComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.close = inject(TUI_CLOSE_WORD);
    this.item = injectContext();
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
  static {
    this.ɵfac = function TuiNotificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNotificationComponent,
      selectors: [["tui-notification-alert"]],
      hostAttrs: ["role", "alert"],
      features: [ɵɵHostDirectivesFeature([TuiAnimated, TuiAlertDirective])],
      decls: 8,
      vars: 9,
      consts: [[1, "t-wrapper"], ["size", "m", "tuiNotification", "", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
      template: function TuiNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "span", 2);
          ɵɵtemplate(4, TuiNotificationComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
          ɵɵelementStart(5, "span", 4);
          ɵɵtemplate(6, TuiNotificationComponent_span_6_Template, 1, 1, "span", 5);
          ɵɵelementEnd()();
          ɵɵconditionalCreate(7, TuiNotificationComponent_Conditional_7_Template, 2, 2, "button", 6);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵclassProp("t-closable", ctx.item.closable);
          ɵɵproperty("appearance", ctx.item.appearance)("icon", ctx.item.icon);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance();
          ɵɵconditional(ctx.item.closable ? 7 : -1);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiButton, TuiNotificationDirective, TuiTitle],
      styles: ["[_nghost-%COMP%]{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0)}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{margin:.625rem 1rem}.t-wrapper[_ngcontent-%COMP%]{background:var(--tui-background-base);box-shadow:var(--tui-shadow-medium);border-radius:var(--tui-radius-m)}.t-closable[data-size][_ngcontent-%COMP%]{padding-inline-end:2.5rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationComponent, [{
    type: Component,
    args: [{
      selector: "tui-notification-alert",
      imports: [PolymorpheusOutlet, TuiButton, TuiNotificationDirective, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated, TuiAlertDirective],
      host: {
        role: "alert"
      },
      template: '<div>\n    <div class="t-wrapper">\n        <div\n            size="m"\n            tuiNotification\n            [appearance]="item.appearance"\n            [class.t-closable]="item.closable"\n            [icon]="item.icon"\n        >\n            <span tuiTitle>\n                <ng-container *polymorpheusOutlet="item.label as text; context: item">\n                    {{ text }}\n                </ng-container>\n                <span tuiSubtitle>\n                    <span\n                        *polymorpheusOutlet="item.content as text; context: item"\n                        [innerHTML]="text"\n                    ></span>\n                </span>\n            </span>\n            @if (item.closable) {\n                <button\n                    tuiIconButton\n                    type="button"\n                    [iconStart]="icons.close"\n                    (click)="item.$implicit.complete()"\n                >\n                    {{ close() }}\n                </button>\n            }\n        </div>\n    </div>\n</div>\n',
      styles: [":host{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0)}:host :host-context(tui-root._mobile){margin:.625rem 1rem}.t-wrapper{background:var(--tui-background-base);box-shadow:var(--tui-shadow-medium);border-radius:var(--tui-radius-m)}.t-closable[data-size]{padding-inline-end:2.5rem}\n"]
    }]
  }], null, null);
})();
var TuiNotificationService = class _TuiNotificationService extends TuiAlertService {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(service) {
    super(inject(TUI_NOTIFICATION_CONCURRENCY), service);
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.component = TuiNotificationComponent;
  }
  static {
    this.ɵfac = function TuiNotificationService_Factory(__ngFactoryType__) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiNotificationService,
      factory: function TuiNotificationService_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new __ngFactoryType__();
        } else {
          __ngConditionalFactory__ = new _TuiNotificationService(ɵɵinject(TuiPopupService));
        }
        return __ngConditionalFactory__;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      deps: [TuiPopupService],
      useClass: TuiNotificationService
    }]
  }], () => [{
    type: void 0
  }], null);
})();
var TuiNotificationTemplate = class _TuiNotificationTemplate {
  constructor() {
    this.tuiNotificationOptions = input({});
  }
  static {
    this.ɵfac = function TuiNotificationTemplate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationTemplate)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNotificationTemplate,
      selectors: [["ng-template", "tuiNotification", ""]],
      inputs: {
        tuiNotificationOptions: [1, "tuiNotificationOptions"]
      },
      features: [ɵɵProvidersFeature([tuiAsPortal(TuiNotificationService)]), ɵɵHostDirectivesFeature([{
        directive: TuiPortalDirective,
        inputs: ["options", "tuiNotificationOptions", "open", "tuiNotification"],
        outputs: ["openChange", "tuiNotificationChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiNotification]",
      providers: [tuiAsPortal(TuiNotificationService)],
      hostDirectives: [{
        directive: TuiPortalDirective,
        inputs: ["options: tuiNotificationOptions", "open: tuiNotification"],
        outputs: ["openChange: tuiNotificationChange"]
      }]
    }]
  }], null, null);
})();
var TuiNotification = [TuiNotificationDirective, TuiNotificationTemplate];

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
  static {
    this.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHoveredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHoveredService,
      factory: _TuiHoveredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = outputFromObservable(inject(TuiHoveredService));
  }
  static {
    this.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHovered)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHovered,
      selectors: [["", "tuiHoveredChange", ""]],
      outputs: {
        tuiHoveredChange: "tuiHoveredChange"
      },
      features: [ɵɵProvidersFeature([TuiHoveredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-hint.mjs
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c08 = ["*"];
function TuiHintComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
var TUI_HINT_COMPONENT = new InjectionToken(ngDevMode ? "TUI_HINT_COMPONENT" : "", {
  factory: () => TuiHintComponent
});
var TuiHintDriver = class _TuiHintDriver extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintDriver_BaseFactory;
      return function TuiHintDriver_Factory(__ngFactoryType__) {
        return (ɵTuiHintDriver_BaseFactory || (ɵTuiHintDriver_BaseFactory = ɵɵgetInheritedFactory(_TuiHintDriver)))(__ngFactoryType__ || _TuiHintDriver);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDriver,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriver, [{
    type: Directive
  }], null, null);
})();
var TUI_HINT_DIRECTIONS = ["bottom-start", "bottom", "bottom-end", "top-start", "top", "top-end", "start-top", "start", "start-bottom", "end-top", "end", "end-bottom"];
var TUI_HINT_DEFAULT_OPTIONS = {
  direction: "bottom-start",
  centered: true,
  showDelay: 500,
  hideDelay: 200,
  appearance: "",
  /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
  icon: "@tui.circle-help"
};
var [TUI_HINT_OPTIONS, tuiHintOptionsProvider] = tuiCreateOptions(TUI_HINT_DEFAULT_OPTIONS);
var TuiHintHover = class _TuiHintHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.isMobile = inject(WA_IS_MOBILE);
    this.el = tuiInjectElement();
    this.hovered$ = inject(TuiHoveredService);
    this.options = inject(TUI_HINT_OPTIONS);
    this.visible = false;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$.pipe(switchMap((show) => this.isMobile ? of(show).pipe(delay(0)) : of(show).pipe(delay(show ? 0 : this.hideDelay()))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((show) => this.isMobile ? of(show).pipe(delay(0)) : of(show).pipe(delay(show ? this.showDelay() : this.hideDelay()))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && (this.el.hasAttribute("tuiHintPointer") || !tuiIsObscured(this.el))), tap((visible) => {
      this.visible = visible;
    }));
    this.parent = inject(_TuiHintHover, {
      optional: true,
      skipSelf: true
    });
    this.showDelay = input(this.options.showDelay, {
      alias: "tuiHintShowDelay"
    });
    this.hideDelay = input(this.options.hideDelay, {
      alias: "tuiHintHideDelay"
    });
    this.type = "hint";
    this.enabled = true;
  }
  toggle(visible = !this.visible) {
    this.toggle$.next(visible);
    this.parent?.toggle(visible);
  }
  close() {
    this.toggle$.next(false);
  }
  static {
    this.ɵfac = function TuiHintHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHover,
      inputs: {
        showDelay: [1, "tuiHintShowDelay", "showDelay"],
        hideDelay: [1, "tuiHintHideDelay", "hideDelay"]
      },
      exportAs: ["tuiHintHover"],
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintHover), TuiHoveredService]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHover, [{
    type: Directive,
    args: [{
      providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
      exportAs: "tuiHintHover"
    }]
  }], () => [], null);
})();
var GAP$1 = 8;
var ARROW_OFFSET$1 = 22;
var TOP = 1;
var LEFT = 0;
var TuiHintPosition = class _TuiHintPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.el = tuiInjectElement();
    this.viewport = inject(TUI_VIEWPORT);
    this.options = inject(TUI_HINT_OPTIONS);
    this.directionChange = new Subject();
    this.accessor = tuiFallbackAccessor("hint")(inject(TuiRectAccessor, {
      optional: true
    }), {
      getClientRect: () => this.el.getBoundingClientRect()
    });
    this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => __spreadProps(__spreadValues({}, acc), {
      [direction]: [0, 0]
    }), {});
    this.direction = input(this.options.direction, {
      alias: "tuiHintDirection"
    });
    this.offset = input(inject(WA_IS_MOBILE) ? 16 : 8, {
      alias: "tuiHintOffset"
    });
    this.centered = input(this.options.centered, {
      alias: "tuiHintCentered"
    });
    this.tuiHintDirectionChange = outputFromObservable(this.directionChange.pipe(distinctUntilChanged()));
    this.type = "hint";
  }
  getPosition({
    width,
    height
  }) {
    const direction = this.direction();
    const rect2 = this.accessor.getClientRect();
    const leftCenter = rect2.left + rect2.width / 2;
    const topCenter = rect2.top + rect2.height / 2;
    const rtl = this.el.matches('[dir="rtl"] :scope');
    const narrow = rect2.width < ARROW_OFFSET$1 * 2 || this.centered();
    const short = rect2.height < ARROW_OFFSET$1 * 2 || this.centered();
    const start = narrow ? leftCenter - ARROW_OFFSET$1 : rect2.left;
    const end = narrow ? leftCenter - width + ARROW_OFFSET$1 : rect2.right - width;
    const top = short ? topCenter - ARROW_OFFSET$1 : rect2.top;
    const bottom = short ? topCenter - height + ARROW_OFFSET$1 : rect2.bottom - height;
    this.points["top-start"][TOP] = rect2.top - height - this.offset();
    this.points["top-start"][LEFT] = this.centered() ? end : start;
    this.points.top[TOP] = this.points["top-start"][TOP];
    this.points.top[LEFT] = leftCenter - width / 2;
    this.points["top-end"][TOP] = this.points["top-start"][TOP];
    this.points["top-end"][LEFT] = this.centered() ? start : end;
    this.points["bottom-start"][TOP] = rect2.bottom + this.offset();
    this.points["bottom-start"][LEFT] = this.points["top-start"][LEFT];
    this.points.bottom[TOP] = this.points["bottom-start"][TOP];
    this.points.bottom[LEFT] = this.points.top[LEFT];
    this.points["bottom-end"][TOP] = this.points["bottom-start"][TOP];
    this.points["bottom-end"][LEFT] = this.points["top-end"][LEFT];
    this.points["start-top"][TOP] = this.centered() ? bottom : top;
    this.points["start-top"][LEFT] = rect2.left - width - this.offset();
    this.points.start[TOP] = topCenter - height / 2;
    this.points.start[LEFT] = this.points["start-top"][LEFT];
    this.points["start-bottom"][TOP] = this.centered() ? bottom : top;
    this.points["start-bottom"][LEFT] = this.points["start-top"][LEFT];
    this.points["end-top"][TOP] = this.points["start-top"][TOP];
    this.points["end-top"][LEFT] = rect2.right + this.offset();
    this.points.end[TOP] = this.points.start[TOP];
    this.points.end[LEFT] = this.points["end-top"][LEFT];
    this.points["end-bottom"][TOP] = this.points["start-bottom"][TOP];
    this.points["end-bottom"][LEFT] = this.points["end-top"][LEFT];
    const array = Array.isArray(direction) ? direction : [direction];
    const priority = array.map((direction2) => adjust(direction2, rtl));
    const updated = priority.concat(TUI_HINT_DIRECTIONS).find((dir) => this.checkPosition(this.points[dir], width, height)) || this.fallback;
    this.directionChange.next(adjust(updated, rtl));
    return this.points[updated];
  }
  get fallback() {
    return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
  }
  checkPosition([left, top], width, height) {
    const viewport = this.viewport.getClientRect();
    return top > viewport.top + GAP$1 && left > viewport.left + GAP$1 && top + height < viewport.bottom - GAP$1 && left + width < viewport.right - GAP$1;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPosition_BaseFactory;
      return function TuiHintPosition_Factory(__ngFactoryType__) {
        return (ɵTuiHintPosition_BaseFactory || (ɵTuiHintPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPosition)))(__ngFactoryType__ || _TuiHintPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPosition,
      inputs: {
        direction: [1, "tuiHintDirection", "direction"],
        offset: [1, "tuiHintOffset", "offset"],
        centered: [1, "tuiHintCentered", "centered"]
      },
      outputs: {
        tuiHintDirectionChange: "tuiHintDirectionChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPosition, [{
    type: Directive
  }], null, null);
})();
function adjust(direction, rtl) {
  if (rtl && direction.includes("left")) {
    return direction.replace("left", "right");
  }
  return rtl && direction.includes("right") ? direction.replace("right", "left") : direction;
}
var TuiHintDirective = class _TuiHintDirective {
  constructor() {
    this.service = inject(TuiPopupService);
    this.ref = signal(null);
    this.content = input(null, {
      alias: "tuiHint"
    });
    this.context = input(void 0, {
      alias: "tuiHintContext"
    });
    this.appearance = input(inject(TUI_HINT_OPTIONS).appearance, {
      alias: "tuiHintAppearance"
    });
    this.visible = outputFromObservable(toObservable(this.ref).pipe(map(Boolean), skip(1)), {
      alias: "tuiHintVisible"
    });
    this.component = inject(PolymorpheusComponent);
    this.el = tuiInjectElement();
    this.type = "hint";
  }
  ngOnChanges() {
    if (!this.content()) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    if (show && this.content() && !this.ref()) {
      this.ref.set(this.service.add(this.component));
    } else if (!show) {
      this.ref()?.destroy();
      this.ref.set(null);
    }
  }
  static {
    this.ɵfac = function TuiHintDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDirective,
      selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
      inputs: {
        content: [1, "tuiHint", "content"],
        context: [1, "tuiHintContext", "context"],
        appearance: [1, "tuiHintAppearance", "appearance"]
      },
      outputs: {
        visible: "tuiHintVisible"
      },
      features: [ɵɵProvidersFeature([tuiAsVehicle(_TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }]), ɵɵHostDirectivesFeature([TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection", "tuiHintDirection", "tuiHintCentered", "tuiHintCentered", "tuiHintOffset", "tuiHintOffset"],
        outputs: ["tuiHintDirectionChange", "tuiHintDirectionChange"]
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsVehicle(TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }],
      hostDirectives: [TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection", "tuiHintCentered", "tuiHintOffset"],
        outputs: ["tuiHintDirectionChange"]
      }]
    }]
  }], null, null);
})();
var TuiHintPointer = class _TuiHintPointer extends TuiHintHover {
  constructor() {
    super(...arguments);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  getClientRect() {
    return this.currentRect;
  }
  onMove({
    clientX,
    clientY
  }) {
    this.currentRect = tuiPointToClientRect(clientX, clientY);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPointer_BaseFactory;
      return function TuiHintPointer_Factory(__ngFactoryType__) {
        return (ɵTuiHintPointer_BaseFactory || (ɵTuiHintPointer_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPointer)))(__ngFactoryType__ || _TuiHintPointer);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPointer,
      selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
      hostBindings: function TuiHintPointer_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.zoneless", function TuiHintPointer_mousemove_zoneless_HostBindingHandler($event) {
            return ctx.onMove($event);
          });
        }
      },
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintPointer), tuiAsDriver(_TuiHintPointer)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointer, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintPointer]",
      providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
      host: {
        "(mousemove.zoneless)": "onMove($event)"
      }
    }]
  }], null, null);
})();
var TuiHintUnstyledComponent = class _TuiHintUnstyledComponent {
  constructor() {
    this.hint = inject(TuiHintDirective);
  }
  static {
    this.ɵfac = function TuiHintUnstyledComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyledComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintUnstyledComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 1,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiHintUnstyledComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.hint.content());
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
    type: Component,
    args: [{
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="hint.content()" />',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var TuiHintUnstyled = class _TuiHintUnstyled {
  constructor() {
    const hint = inject(TuiHintDirective);
    tuiSetSignal(hint.content, inject(TemplateRef));
    hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent, inject(INJECTOR$1));
  }
  static {
    this.ɵfac = function TuiHintUnstyled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyled)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintUnstyled,
      selectors: [["ng-template", "tuiHint", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyled, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiHint]"
    }]
  }], () => [], null);
})();
function tuiGetHintProviders() {
  return [TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint", TuiHintPosition), tuiRectAccessorFor("hint", forwardRef(() => TuiHintDirective))];
}
var GAP = 8;
var ARROW_OFFSET = 22;
var TuiHintComponent = class _TuiHintComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.hover = inject(TuiHintHover);
    this.vvs = inject(TuiVisualViewportService);
    this.viewport = inject(TUI_VIEWPORT);
    this.pointer = inject(TuiHintPointer, {
      optional: true
    });
    this.accessor = inject(TuiRectAccessor);
    this.hint = inject(TuiHintDirective);
    this.content = this.hint.component.component === TuiHintUnstyledComponent ? signal("") : this.hint.content;
    this.theme = this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    this.appearance = tuiAppearance(this.hint.appearance);
    inject(TuiPositionService).pipe(takeWhile(() => this.hint.el.isConnected && !!this.hint.el.getBoundingClientRect().height), map((point) => this.vvs.correct(point)), takeUntilDestroyed()).subscribe({
      next: (point) => this.update(...point),
      complete: () => this.hint.toggle(false)
    });
    inject(TuiHoveredService).pipe(takeUntilDestroyed()).subscribe((hover) => this.hover.toggle(hover));
  }
  onClick(target) {
    if (!target.closest(this.el.tagName) && !this.hint.el.contains(target) || tuiIsObscured(this.hint.el)) {
      this.hover.toggle(false);
    }
  }
  apply(top, left, beakTop, beakLeft) {
    this.el.style.setProperty("top", top);
    this.el.style.setProperty("left", left);
    this.el.style.setProperty("--t-top", `${beakTop}%`);
    this.el.style.setProperty("--t-left", `${beakLeft}%`);
    this.el.style.setProperty("--t-rotate", !beakLeft || Math.ceil(beakLeft) === 100 ? "90deg" : "0deg");
  }
  update(left, top) {
    const {
      clientHeight,
      clientWidth
    } = this.el;
    const rect2 = this.accessor.getClientRect();
    if (rect2 === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
      return;
    }
    const viewport = this.viewport.getClientRect();
    const safeLeft = tuiClamp(Math.max(GAP, left), viewport.left + GAP, Math.max(GAP, viewport.width + viewport.left - clientWidth - GAP));
    const startX = Math.round(safeLeft) === Math.round(rect2.left);
    const startY = Math.round(top) === Math.round(rect2.top);
    const endX = Math.round(safeLeft + clientWidth) === Math.round(rect2.right);
    const endY = Math.round(top + clientHeight) === Math.round(rect2.bottom);
    const [beakLeft, beakTop] = this.vvs.correct([rect2.left + rect2.width / 2 - safeLeft, rect2.top + rect2.height / 2 - top]);
    const x = startX ? ARROW_OFFSET : endX ? clientWidth - ARROW_OFFSET : beakLeft;
    const y = startY ? ARROW_OFFSET : endY ? clientHeight - ARROW_OFFSET : beakTop;
    this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(safeLeft)), Math.round(tuiClamp(y, 0, clientHeight) / clientHeight * 100), Math.round(tuiClamp(x, 0, clientWidth) / clientWidth * 100));
  }
  static {
    this.ɵfac = function TuiHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintComponent,
      selectors: [["tui-hint"]],
      hostAttrs: ["role", "tooltip"],
      hostVars: 3,
      hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵattribute("tuiTheme", ctx.theme);
          ɵɵclassProp("_untouchable", ctx.pointer);
        }
      },
      features: [ɵɵProvidersFeature([tuiGetHintProviders(), tuiButtonOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiAppearance, TuiAnimated, TuiActiveZone])],
      ngContentSelectors: _c08,
      decls: 2,
      vars: 2,
      consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
      template: function TuiHintComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.hint.context());
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: [`[_nghost-%COMP%]{position:absolute;max-inline-size:min(20rem,calc(100% - 1rem));padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-typography-body-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--t-left) var(--t-top);--tui-background-elevation-2: var(--tui-background-elevation-3);--tui-scale: .5}.tui-enter[_nghost-%COMP%]{animation:tuiFade var(--tui-duration) var(--tui-curve-expressive-standard),tuiScale var(--tui-duration) var(--tui-curve-expressive-standard) 10ms}.tui-leave[_nghost-%COMP%]{animation:tuiFade calc(var(--tui-duration) / 2) var(--tui-curve-expressive-standard) reverse,tuiScale calc(var(--tui-duration) / 2) var(--tui-curve-expressive-standard) reverse}[_nghost-%COMP%]:before{content:"";position:absolute;inset-block-start:var(--t-top);inset-inline-start:var(--t-left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transition:none;transform:translate(-50%,-50%) rotate(var(--t-rotate))}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]     [tuiTitle]{margin-block-end:.75rem}[_nghost-%COMP%]     [tuiTitle]+footer{margin-block-start:.75rem}[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:right;margin-inline-end:-.25rem}@supports (float: inline-end){[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end}}[_nghost-%COMP%]     img{display:block;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]     footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;max-inline-size:100%;margin:1rem 0 .25rem}`]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
    type: Component,
    args: [{
      selector: "tui-hint",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context()"
            [innerHTML]="text"
        ></span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiGetHintProviders(), tuiButtonOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiAppearance, TuiAnimated, TuiActiveZone],
      host: {
        role: "tooltip",
        "[attr.tuiTheme]": "theme",
        "[class._untouchable]": "pointer",
        "(document:click)": "onClick($event.target)"
      },
      styles: [`:host{position:absolute;max-inline-size:min(20rem,calc(100% - 1rem));padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-typography-body-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--t-left) var(--t-top);--tui-background-elevation-2: var(--tui-background-elevation-3);--tui-scale: .5}:host.tui-enter{animation:tuiFade var(--tui-duration) var(--tui-curve-expressive-standard),tuiScale var(--tui-duration) var(--tui-curve-expressive-standard) 10ms}:host.tui-leave{animation:tuiFade calc(var(--tui-duration) / 2) var(--tui-curve-expressive-standard) reverse,tuiScale calc(var(--tui-duration) / 2) var(--tui-curve-expressive-standard) reverse}:host:before{content:"";position:absolute;inset-block-start:var(--t-top);inset-inline-start:var(--t-left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transition:none;transform:translate(-50%,-50%) rotate(var(--t-rotate))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}:host ::ng-deep [tuiTitle]{margin-block-end:.75rem}:host ::ng-deep [tuiTitle]+footer{margin-block-start:.75rem}:host ::ng-deep [tuiIconButton][data-appearance=icon][data-size=xs]{float:right;margin-inline-end:-.25rem}@supports (float: inline-end){:host ::ng-deep [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end}}:host ::ng-deep img{display:block;border-radius:var(--tui-radius-m)}:host ::ng-deep footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;max-inline-size:100%;margin:1rem 0 .25rem}
`]
    }]
  }], () => [], null);
})();
var TuiHintDescribe = class _TuiHintDescribe extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.element = computed((id = this.id()) => id ? this.doc.querySelector(`#${id}`) || this.el : this.el);
    this.id = input("", {
      alias: "tuiHintDescribe"
    });
    this.type = "hint";
    this.stream$ = toObservable(this.id).pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, "keydown", {
      capture: true
    }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element(), "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
  }
  get focused() {
    return tuiIsFocused(this.element());
  }
  static {
    this.ɵfac = function TuiHintDescribe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDescribe)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDescribe,
      selectors: [["", "tuiHintDescribe", ""]],
      inputs: {
        id: [1, "tuiHintDescribe", "id"]
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintDescribe)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribe, [{
    type: Directive,
    args: [{
      selector: "[tuiHintDescribe]",
      providers: [tuiAsDriver(TuiHintDescribe)]
    }]
  }], () => [], null);
})();
var TuiHintHost = class _TuiHintHost extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.tuiHintHost = input();
    this.type = "hint";
  }
  getClientRect() {
    return this.tuiHintHost()?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintHost_BaseFactory;
      return function TuiHintHost_Factory(__ngFactoryType__) {
        return (ɵTuiHintHost_BaseFactory || (ɵTuiHintHost_BaseFactory = ɵɵgetInheritedFactory(_TuiHintHost)))(__ngFactoryType__ || _TuiHintHost);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHost,
      selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
      inputs: {
        tuiHintHost: [1, "tuiHintHost"]
      },
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintHost)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHost, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintHost]",
      providers: [tuiAsRectAccessor(TuiHintHost)]
    }]
  }], null, null);
})();
var TuiHintManual = class _TuiHintManual extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hover = inject(TuiHintHover);
    this.stream$ = new BehaviorSubject(false);
    this.visible = input(false, {
      alias: "tuiHintManual"
    });
    this.type = "hint";
    this.hover.enabled = false;
  }
  ngOnChanges() {
    this.stream$.next(!!this.visible());
    this.hover.enabled = this.visible() === null;
  }
  static {
    this.ɵfac = function TuiHintManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintManual,
      selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
      inputs: {
        visible: [1, "tuiHintManual", "visible"]
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintManual)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManual, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintManual]",
      providers: [tuiAsDriver(TuiHintManual)]
    }]
  }], () => [], null);
})();
var TuiHintOverflow = class _TuiHintOverflow {
  constructor() {
    this.hint = inject(TuiHintDirective);
    this.content = input("", {
      alias: "tuiHintOverflow"
    });
  }
  onMouseEnter({
    scrollWidth,
    clientWidth,
    textContent
  }) {
    const content = this.content();
    tuiSetSignal(this.hint.content, scrollWidth > clientWidth && content !== null ? content || textContent : "");
  }
  static {
    this.ɵfac = function TuiHintOverflow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOverflow)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOverflow,
      selectors: [["", "tuiHintOverflow", ""]],
      hostBindings: function TuiHintOverflow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function TuiHintOverflow_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter($event.currentTarget);
          });
        }
      },
      inputs: {
        content: [1, "tuiHintOverflow", "content"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOverflow, [{
    type: Directive,
    args: [{
      selector: "[tuiHintOverflow]",
      hostDirectives: [{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance"]
      }],
      host: {
        "(mouseenter)": "onMouseEnter($event.currentTarget)"
      }
    }]
  }], null, null);
})();
var TuiHint = [TuiHintComponent, TuiHintDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer];

// node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver = typeof IntersectionObserver === "undefined" ? class {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
} : IntersectionObserver;
var WA_INTERSECTION_ROOT = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_ROOT]" : "");
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_ROOT_MARGIN]" : "", {
  factory: () => WA_INTERSECTION_ROOT_MARGIN_DEFAULT
});
function rootMarginFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || WA_INTERSECTION_ROOT_MARGIN_DEFAULT;
}
var WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
var WA_INTERSECTION_THRESHOLD = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_THRESHOLD]" : "", {
  factory: () => WA_INTERSECTION_THRESHOLD_DEFAULT
});
function thresholdFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(Number.parseFloat) || WA_INTERSECTION_THRESHOLD_DEFAULT;
}
var WaIntersectionObserverDirective = class _WaIntersectionObserverDirective extends SafeObserver {
  callbacks = /* @__PURE__ */ new Map();
  margin = "";
  threshold = "";
  constructor() {
    const root = inject(WA_INTERSECTION_ROOT, {
      optional: true
    });
    super((entries) => {
      this.callbacks.forEach((callback, element) => {
        const filtered = entries.filter(({
          target
        }) => target === element);
        if (filtered.length) {
          callback(filtered, this);
        }
      });
    }, {
      root: root?.nativeElement,
      rootMargin: rootMarginFactory(),
      threshold: thresholdFactory()
    });
  }
  observe(target, callback = () => {
  }) {
    super.observe(target);
    this.callbacks.set(target, callback);
  }
  unobserve(target) {
    super.unobserve(target);
    this.callbacks.delete(target);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObserverDirective,
    selectors: [["", "waIntersectionObserver", ""]],
    inputs: {
      margin: [0, "waIntersectionRootMargin", "margin"],
      threshold: [0, "waIntersectionThreshold", "threshold"]
    },
    exportAs: ["IntersectionObserver"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[waIntersectionObserver]",
      inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
      exportAs: "IntersectionObserver"
    }]
  }], () => [], null);
})();
var WaIntersectionObserveeService = class _WaIntersectionObserveeService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const observer = inject(WaIntersectionObserverDirective);
    super((subscriber) => {
      observer.observe(nativeElement, (entries) => {
        subscriber.next(entries);
      });
      return () => {
        observer.unobserve(nativeElement);
      };
    });
    return this.pipe(share());
  }
  static ɵfac = function WaIntersectionObserveeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserveeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaIntersectionObserveeService,
    factory: _WaIntersectionObserveeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserveeService, [{
    type: Injectable
  }], () => [], null);
})();
var WaIntersectionObservee = class _WaIntersectionObservee {
  waIntersectionObservee = outputFromObservable(inject(WaIntersectionObserveeService));
  static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObservee)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObservee,
    selectors: [["", "waIntersectionObservee", ""]],
    outputs: {
      waIntersectionObservee: "waIntersectionObservee"
    },
    features: [ɵɵProvidersFeature([WaIntersectionObserveeService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
    type: Directive,
    args: [{
      selector: "[waIntersectionObservee]",
      providers: [WaIntersectionObserveeService]
    }]
  }], null, {
    waIntersectionObservee: [{
      type: Output,
      args: ["waIntersectionObservee"]
    }]
  });
})();
var WaIntersectionRoot = class _WaIntersectionRoot {
  static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionRoot,
    selectors: [["", "waIntersectionRoot", ""]],
    features: [ɵɵProvidersFeature([{
      provide: WA_INTERSECTION_ROOT,
      useExisting: ElementRef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
    type: Directive,
    args: [{
      selector: "[waIntersectionRoot]",
      providers: [{
        provide: WA_INTERSECTION_ROOT,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var WaIntersectionObserver = [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot];
var WaIntersectionObserverService = class _WaIntersectionObserverService extends Observable {
  nativeElement = inject(ElementRef).nativeElement;
  rootMargin = inject(WA_INTERSECTION_ROOT_MARGIN);
  threshold = inject(WA_INTERSECTION_THRESHOLD);
  root = inject(WA_INTERSECTION_ROOT, {
    optional: true
  })?.nativeElement ?? null;
  constructor() {
    super((subscriber) => {
      const observer = new SafeObserver((entries) => {
        subscriber.next(entries);
      }, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      observer.observe(this.nativeElement);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function WaIntersectionObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaIntersectionObserverService,
    factory: _WaIntersectionObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverService, [{
    type: Injectable
  }], () => [], null);
})();
var WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_OBSERVER_SUPPORT]" : "", {
  factory: () => !!inject(WA_WINDOW).IntersectionObserver
});

export {
  tuiClamp,
  tuiInRange,
  tuiNormalizeToIntNumber,
  tuiRound,
  tuiRoundWith,
  tuiToInt,
  tuiIsControlEmpty,
  tuiIsString,
  tuiGenerateId,
  tuiIsNumber,
  tuiIsPresent,
  tuiNullableSame,
  tuiPx,
  tuiSetSignal,
  tuiWithStyles,
  tuiCreateOptions,
  tuiDirectiveBinding,
  tuiProvide,
  coerceBooleanProperty,
  takeUntilDestroyed,
  outputFromObservable,
  toObservable,
  toSignal,
  TuiAccessor,
  TuiPositionAccessor,
  TuiRectAccessor,
  tuiProvideAccessor,
  tuiFallbackAccessor,
  tuiPositionAccessorFor,
  tuiRectAccessorFor,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  TuiVehicle,
  tuiAsVehicle,
  TuiDriver,
  tuiAsDriver,
  TuiDriverDirective,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  CHAR_NO_BREAK_SPACE,
  CHAR_EN_DASH,
  CHAR_HYPHEN,
  TUI_VERSION,
  WA_WINDOW,
  WA_ANIMATION_FRAME,
  WA_CSS,
  WA_PAGE_VISIBILITY,
  tuiContainsOrAfter,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiGetActualTarget,
  tuiInjectElement,
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance,
  tuiExtractI18n,
  tuiCloseWatcher,
  tuiControlValue,
  tuiTypedFromEvent,
  tuiIfMap,
  tuiWatch,
  tuiZonefull,
  tuiZonefree,
  tuiZoneOptimized,
  tuiZonefreeScheduler,
  TUI_REDUCED_MOTION,
  TUI_ANIMATIONS_SPEED,
  TUI_ASSETS_PATH,
  tuiAssetsPathProvider,
  TUI_AUXILIARY,
  tuiAsAuxiliary,
  TUI_MEDIA,
  TUI_BREAKPOINT,
  TUI_COMMON_ICONS,
  tuiCommonIconsProvider,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DARK_MODE,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DATE_FORMAT,
  tuiDateFormatProvider,
  TUI_MONTHS,
  TUI_CLOSE_WORD,
  TUI_BACK_WORD,
  TUI_CLEAR_WORD,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_SPIN_TEXTS,
  TUI_SHORT_WEEK_DAYS,
  TUI_ICON_START,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  tuiIconsProvider,
  TUI_ICON_RESOLVER,
  tuiGetIconMode,
  tuiInjectIconResolver,
  tuiIconResolverProvider,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT,
  tuiNumberFormatProvider,
  TUI_SELECTION_STREAM,
  TUI_TEXTFIELD_VALUE,
  TUI_VALIDATION_ERRORS,
  tuiValidationErrorsProvider,
  TUI_VIEWPORT,
  tuiAsViewport,
  TuiIcons,
  tuiIconStart,
  tuiIconEnd,
  TuiWithIcons,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  tuiButtonOptionsProvider,
  TuiButton,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TuiItemsHandlersDirective,
  TuiWithItemsHandlers,
  TuiItemsHandlersValidator,
  TUI_LEAVE,
  TUI_ANIMATED,
  TuiAnimated,
  WA_IS_IOS,
  WA_IS_MOBILE,
  isSafari,
  SCROLL_REF_SELECTOR,
  TUI_SCROLL_REF,
  TuiScrollRef,
  TuiScrollControlsService,
  TuiScrollbarService,
  TuiScrollbarPosition,
  TuiScrollbarDirective,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_SCROLLBAR_OPTIONS,
  tuiScrollbarOptionsProvider,
  TuiScrollControls,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLLABLE,
  TuiScrollbar,
  TuiScrollIntoView,
  TuiScrollable,
  TuiHovered,
  TUI_LINK_OPTIONS,
  tuiLinkOptionsProvider,
  TuiLink,
  TuiItem,
  WA_INTERSECTION_ROOT,
  WaIntersectionObserverDirective,
  WaIntersectionObservee,
  WaIntersectionRoot,
  WaIntersectionObserver,
  TuiFontSize,
  TUI_FONT_OFFSET,
  tuiEnableFontScaling,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  tuiGetDuration,
  tuiIsEditingKey,
  tuiIsObscured,
  TUI_OPTIONS,
  provideTaiga,
  TUI_LIQUID_GLASS,
  tuiOverrideOptions,
  tuiSizeBigger,
  TUI_CELL_OPTIONS,
  tuiCellOptionsProvider,
  TuiCell,
  TuiCellResponsive,
  TuiCellStretch,
  TuiNativeValidator,
  TUI_RADIO_OPTIONS,
  tuiRadioOptionsProvider,
  TuiRadioComponent,
  TuiRadioDirective,
  TuiRadio,
  TUI_CHECKBOX_OPTIONS,
  tuiCheckboxOptionsProvider,
  TuiCheckbox,
  tuiGetClosestFocusable,
  tuiGetFocused,
  tuiIsFocused,
  tuiMoveFocus,
  injectContext,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet,
  TuiPortal,
  tuiAsPortal,
  TuiPortalDirective,
  TuiPopupService,
  TUI_CDR,
  TuiPopups,
  TuiPopup,
  tuiCheckFixedPosition,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiFallbackValueProvider,
  TUI_PLATFORM,
  TuiActiveZone,
  TuiPositionService,
  TuiVisualViewportService,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  tuiDropdownOptionsProvider,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownAnchor,
  TuiDropdownComponent,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TUI_DROPDOWN_HOST,
  TuiDropdownA11y,
  TuiDropdownDirective,
  TuiDropdownClose,
  TuiDropdownOpen,
  tuiDropdown,
  tuiDropdownEnabled,
  TuiDropdownContent,
  TuiDropdownContext,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  tuiDropdownHoverOptionsProvider,
  TuiDropdownHover,
  TuiDropdownFixed,
  TuiDropdownAuto,
  TuiDropdownManual,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiWithDropdownOpen,
  TuiDropdown,
  TUI_DATA_LIST_HOST,
  tuiAsDataListHost,
  TUI_DATA_LIST_SIZE,
  tuiInjectDataListSize,
  TUI_OPTION_CONTENT,
  tuiAsOptionContent,
  TuiWithOptionContent,
  TuiOptionWithContent,
  TuiOptionWithValue,
  TuiDataListComponent,
  TuiOptGroup,
  TuiOption,
  TuiDataList,
  TUI_IDENTITY_VALUE_TRANSFORMER,
  TuiControl,
  TuiValidationError,
  TuiId,
  TuiExpand,
  TuiIcon,
  TuiIconPipe,
  TuiLabel,
  TUI_BUTTON_X_OPTIONS,
  tuiButtonXOptionsProvider,
  TuiButtonX,
  TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS,
  TUI_FILTER_BY_INPUT_OPTIONS,
  tuiFilterByInputOptionsProvider,
  TuiFilterByInputPipe,
  TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TuiTextfieldOptionsDirective,
  TuiSelectLike,
  TUI_TEXTFIELD_ACCESSOR,
  tuiAsTextfieldAccessor,
  TuiTextfieldComponent,
  TuiTextfieldItemComponent,
  TUI_TEXTFIELD_ITEM,
  TuiTextfieldMultiComponent,
  TuiTextfield,
  tuiInjectAuxiliary,
  TUI_TEXTFIELD_CONTENT,
  tuiAsTextfieldContent,
  TuiTextfieldContent,
  TuiWithNativePicker,
  TuiInputDirective,
  TuiWithInput,
  TuiInput,
  TuiAlertDirective,
  TuiAlertService,
  TuiTitle,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  tuiNotificationOptionsProvider,
  TUI_NOTIFICATION_CONCURRENCY,
  TuiNotificationDirective,
  TuiNotificationComponent,
  TuiNotificationService,
  TuiNotificationTemplate,
  TuiNotification,
  TUI_HINT_COMPONENT,
  TuiHintDriver,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_OPTIONS,
  tuiHintOptionsProvider,
  TuiHintHover,
  TuiHintPosition,
  TuiHintDirective,
  TuiHintPointer,
  TuiHintUnstyledComponent,
  TuiHintUnstyled,
  tuiGetHintProviders,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintHost,
  TuiHintManual,
  TuiHintOverflow,
  TuiHint
};
//# sourceMappingURL=chunk-VAINPROX.js.map
