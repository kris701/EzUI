import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  TUI_ANIMATED,
  TUI_BREAKPOINT,
  TUI_BUTTON_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_OPTIONS,
  TUI_ICON_END,
  TUI_ICON_START,
  TUI_LIQUID_GLASS,
  TUI_NOTIFICATION_OPTIONS,
  TUI_PLATFORM,
  TUI_RADIO_OPTIONS,
  TUI_VERSION,
  TuiActiveZone,
  TuiAnimated,
  TuiButton,
  TuiDataList,
  TuiDataListComponent,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownPositionSided,
  TuiExpand,
  TuiHintDirective,
  TuiIcon,
  TuiIcons,
  TuiItem,
  TuiNativeValidator,
  TuiOptGroup,
  TuiPopupService,
  TuiRadioComponent,
  TuiScrollable,
  TuiScrollbar,
  TuiTextfieldComponent,
  TuiTextfieldOptionsDirective,
  TuiWithAppearance,
  TuiWithDropdownOpen,
  TuiWithIcons,
  TuiWithInput,
  WA_CSS,
  WA_IS_MOBILE,
  WA_WINDOW,
  WaIntersectionObserverDirective,
  WaIntersectionRoot,
  injectContext,
  outputFromObservable,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiAppearanceOptionsProvider,
  tuiAsDataListHost,
  tuiButtonOptionsProvider,
  tuiCellOptionsProvider,
  tuiClamp,
  tuiContainsOrAfter,
  tuiControlValue,
  tuiCreateOptions,
  tuiDirectiveBinding,
  tuiDropdown,
  tuiDropdownOptionsProvider,
  tuiExtractI18n,
  tuiGenerateId,
  tuiGetClosestFocusable,
  tuiHintOptionsProvider,
  tuiIconStart,
  tuiInjectElement,
  tuiIsControlEmpty,
  tuiIsElement,
  tuiIsFocused,
  tuiIsHTMLElement,
  tuiLinkOptionsProvider,
  tuiMoveFocus,
  tuiProvide,
  tuiPx,
  tuiSetSignal,
  tuiTextfieldOptionsProvider,
  tuiToInt,
  tuiTypedFromEvent,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-VAINPROX.js";
import {
  RouterLink,
  RouterLinkActive
} from "./chunk-PUCENSUF.js";
import "./chunk-E6W4ZFJZ.js";
import {
  NgControl,
  RadioControlValueAccessor
} from "./chunk-KMBWNSEK.js";
import {
  AsyncPipe,
  NgTemplateOutlet
} from "./chunk-YVPE26PC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Observable,
  Output,
  Subject,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  computed,
  contentChild,
  contentChildren,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  fromEvent,
  inject,
  input,
  map,
  merge,
  model,
  output,
  pairwise,
  setClassMetadata,
  share,
  signal,
  startWith,
  switchMap,
  take,
  tap,
  viewChild,
  viewChildren,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-UIPQSPQU.js";

// node_modules/@ng-web-apis/mutation-observer/fesm2022/ng-web-apis-mutation-observer.mjs
var SafeObserver = typeof MutationObserver === "undefined" ? class {
  observe() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
} : MutationObserver;
var WA_MUTATION_OBSERVER_INIT = new InjectionToken(ngDevMode ? "[WA_MUTATION_OBSERVER_INIT]" : "");
function booleanAttribute(element, attribute) {
  return element.getAttribute(attribute) !== null || void 0;
}
function mutationObserverInitFactory() {
  const {
    nativeElement
  } = inject(ElementRef);
  const attributeFilter = nativeElement.getAttribute("attributeFilter");
  return {
    attributeFilter: attributeFilter?.split(",").map((attr) => attr.trim()),
    attributeOldValue: booleanAttribute(nativeElement, "attributeOldValue"),
    attributes: booleanAttribute(nativeElement, "attributes"),
    characterData: booleanAttribute(nativeElement, "characterData"),
    characterDataOldValue: booleanAttribute(nativeElement, "characterDataOldValue"),
    childList: booleanAttribute(nativeElement, "childList"),
    subtree: booleanAttribute(nativeElement, "subtree")
  };
}
var WaMutationObserver = class _WaMutationObserver extends SafeObserver {
  nativeElement = inject(ElementRef).nativeElement;
  config = inject(WA_MUTATION_OBSERVER_INIT);
  attributeFilter = "";
  attributeOldValue = "";
  attributes = "";
  characterData = "";
  characterDataOldValue = "";
  childList = "";
  subtree = "";
  waMutationObserver = output();
  constructor() {
    super((records) => {
      this.waMutationObserver.emit(records);
    });
    this.observe(this.nativeElement, this.config);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaMutationObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaMutationObserver,
    selectors: [["", "waMutationObserver", ""]],
    inputs: {
      attributeFilter: "attributeFilter",
      attributeOldValue: "attributeOldValue",
      attributes: "attributes",
      characterData: "characterData",
      characterDataOldValue: "characterDataOldValue",
      childList: "childList",
      subtree: "subtree"
    },
    outputs: {
      waMutationObserver: "waMutationObserver"
    },
    exportAs: ["MutationObserver"],
    features: [ɵɵProvidersFeature([{
      provide: WA_MUTATION_OBSERVER_INIT,
      useFactory: mutationObserverInitFactory
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserver, [{
    type: Directive,
    args: [{
      selector: "[waMutationObserver]",
      inputs: ["attributeFilter", "attributeOldValue", "attributes", "characterData", "characterDataOldValue", "childList", "subtree"],
      providers: [{
        provide: WA_MUTATION_OBSERVER_INIT,
        useFactory: mutationObserverInitFactory
      }],
      exportAs: "MutationObserver"
    }]
  }], () => [], {
    waMutationObserver: [{
      type: Output,
      args: ["waMutationObserver"]
    }]
  });
})();
var WaMutationObserverService = class _WaMutationObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const config = inject(WA_MUTATION_OBSERVER_INIT);
    super((subscriber) => {
      const observer = new SafeObserver((records) => {
        subscriber.next(records);
      });
      observer.observe(nativeElement, config);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function WaMutationObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaMutationObserverService,
    factory: _WaMutationObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserverService, [{
    type: Injectable
  }], () => [], null);
})();

// node_modules/@ng-web-apis/resize-observer/fesm2022/ng-web-apis-resize-observer.mjs
var SafeObserver2 = typeof ResizeObserver === "undefined" ? class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
} : ResizeObserver;
var WA_RESIZE_OPTION_BOX_DEFAULT = "content-box";
var WA_RESIZE_OPTION_BOX = new InjectionToken(ngDevMode ? "[WA_RESIZE_OPTION_BOX]" : "", {
  factory: () => WA_RESIZE_OPTION_BOX_DEFAULT
});
var WaResizeObserverService = class _WaResizeObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const box = inject(WA_RESIZE_OPTION_BOX);
    super((subscriber) => {
      const observer = new SafeObserver2((entries) => subscriber.next(entries));
      observer.observe(nativeElement, {
        box
      });
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function WaResizeObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaResizeObserverService,
    factory: _WaResizeObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserverService, [{
    type: Injectable
  }], () => [], null);
})();
var WaResizeObserver = class _WaResizeObserver {
  waResizeObserver = outputFromObservable(inject(WaResizeObserverService));
  waResizeBox = WA_RESIZE_OPTION_BOX_DEFAULT;
  static ɵfac = function WaResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaResizeObserver,
    selectors: [["", "waResizeObserver", ""]],
    inputs: {
      waResizeBox: "waResizeBox"
    },
    outputs: {
      waResizeObserver: "waResizeObserver"
    },
    features: [ɵɵProvidersFeature([WaResizeObserverService, {
      provide: WA_RESIZE_OPTION_BOX,
      useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || WA_RESIZE_OPTION_BOX_DEFAULT
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserver, [{
    type: Directive,
    args: [{
      selector: "[waResizeObserver]",
      inputs: ["waResizeBox"],
      providers: [WaResizeObserverService, {
        provide: WA_RESIZE_OPTION_BOX,
        useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || WA_RESIZE_OPTION_BOX_DEFAULT
      }]
    }]
  }], null, {
    waResizeObserver: [{
      type: Output,
      args: ["waResizeObserver"]
    }]
  });
})();
var WA_RESIZE_OBSERVER_SUPPORT = new InjectionToken(ngDevMode ? "[WA_RESIZE_OBSERVER_SUPPORT]" : "", {
  factory: () => !!inject(WA_WINDOW).ResizeObserver
});

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
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
      exportAs: ["tui-fade-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiFade]:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,[tuiFade]:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n'],
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
      exportAs: `tui-fade-${TUI_VERSION}`,
      styles: ['[tuiFade]:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,[tuiFade]:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n']
    }]
  }], null, null);
})();
var TuiFade = class _TuiFade {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.lineHeight = input(null, {
      alias: "tuiFadeHeight"
    });
    this.size = input("1.5em", {
      alias: "tuiFadeSize"
    });
    this.offset = input("0em", {
      alias: "tuiFadeOffset"
    });
    this.orientation = input("horizontal", {
      alias: "tuiFade"
    });
    const el = tuiInjectElement();
    afterNextRender(() => el.style.setProperty("transition", ""));
    merge(inject(WaResizeObserverService, {
      self: true
    }), inject(WaMutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(filter(() => !!el.scrollWidth), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_end", this.isEnd(el));
      el.classList.toggle("_start", !!Math.floor(el.scrollLeft) || !!Math.floor(el.scrollTop));
    });
  }
  isEnd({
    scrollTop,
    scrollLeft,
    scrollHeight,
    scrollWidth,
    clientHeight,
    clientWidth
  }) {
    return this.orientation() === "vertical" ? Math.round(scrollTop) < scrollHeight - clientHeight - BUFFER : Math.ceil(Math.abs(scrollLeft)) < scrollWidth - clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    scrollHeight > clientHeight + 4 * BUFFER;
  }
  static {
    this.ɵfac = function TuiFade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFade)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFade,
      selectors: [["", "tuiFade", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 11,
      hostBindings: function TuiFade_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation());
          ɵɵstyleProp("--t-fade-offset", ctx.offset())("--t-fade-size", ctx.size())("--t-line-height", ctx.lineHeight())("line-height", ctx.lineHeight())("transition", "none");
        }
      },
      inputs: {
        lineHeight: [1, "tuiFadeHeight", "lineHeight"],
        size: [1, "tuiFadeSize", "size"],
        offset: [1, "tuiFadeOffset", "offset"],
        orientation: [1, "tuiFade", "orientation"]
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      selector: "[tuiFade]",
      providers: [WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-orientation]": "orientation()",
        "[style.--t-fade-offset]": "offset()",
        "[style.--t-fade-size]": "size()",
        "[style.--t-line-height]": "lineHeight()",
        "[style.line-height]": "lineHeight()",
        "[style.transition]": '"none"'
      }
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-app-bar.mjs
function TuiProgressiveBlur_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "span");
  }
  if (rf & 2) {
    const $index_r1 = ctx.$index;
    ɵɵstyleProp("--t-step", $index_r1);
  }
}
var _c0 = ["side"];
var _c1 = [[["", "tuiSlot", "start"]], "*", [["", "tuiSlot", "end"]]];
var _c2 = ["[tuiSlot='start']", "*", "[tuiSlot='end']"];
function TuiAppBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-progressive-blur");
  }
}
var _c3 = ["*"];
var TUI_APP_BAR_PROVIDERS = [WaResizeObserverService, WaMutationObserverService, {
  provide: WA_MUTATION_OBSERVER_INIT,
  useValue: {
    characterData: true,
    childList: true,
    subtree: true
  }
}, tuiButtonOptionsProvider((liquidGlass = inject(TUI_LIQUID_GLASS), platform = inject(TUI_PLATFORM)) => ({
  appearance: liquidGlass && platform === "ios" ? "" : "action",
  size: liquidGlass && platform === "ios" ? "m" : "l"
}))];
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
      exportAs: ["tui-app-bar-button-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){border-radius:2.75rem;margin-inline:1rem;-webkit-backdrop-filter:blur(.25rem) saturate(6) brightness(1.05);backdrop-filter:blur(.25rem) saturate(6) brightness(1.05);box-shadow:0 .5rem 2rem #00000017;overflow:hidden;box-sizing:border-box;background:var(--t-appbar-button-bg);color:var(--tui-text-primary);transition:transform var(--tui-duration) var(--tui-curve-expressive-entrance),background-color calc(var(--tui-duration) / 2) ease,color calc(var(--tui-duration) / 2) ease,box-shadow calc(var(--tui-duration) / 2) ease,backdrop-filter calc(var(--tui-duration) / 2) ease;--t-appbar-button-bg: rgba(255, 255, 255, .7);--t-appbar-glow: var(--tui-background-base);--t-appbar-bevel: linear-gradient(319deg, #fff 4%, #fff 19%, rgba(255, 255, 255, .12) 40%, rgba(255, 255, 255, .02) 45%, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, .02) 55%, rgba(255, 255, 255, .12) 60%, #fff 80%, #fff 96%)}@supports not (backdrop-filter: blur(1px)){[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){background:var(--tui-background-elevation-1)}}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;box-shadow:inset 0 0 .75rem var(--t-appbar-glow)}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;padding:1px;-webkit-mask-image:linear-gradient(#000 0 0),linear-gradient(#000 0 0);mask-image:linear-gradient(#000 0 0),linear-gradient(#000 0 0);-webkit-mask-origin:content-box,border-box;mask-origin:content-box,border-box;mask-clip:content-box,border-box;background:var(--t-appbar-bevel);-webkit-mask-composite:xor;mask-composite:exclude}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):active{transform:scale(1.25);filter:brightness(3)}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"])>[tuiIconButton]{margin:0}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]).tui-enter{--tui-blur: 1rem;animation-name:tuiFade,tuiBlur}[data-platform=ios].tui-liquid-glass [tuiTheme=dark] [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]),[tuiTheme=dark] [data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]),[data-platform=ios][tuiTheme=dark].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){--t-appbar-button-bg: rgba(88, 88, 88, .31);--t-appbar-glow: var(--tui-appbar-background, rgba(31, 31, 31, .8));--t-appbar-bevel: linear-gradient(319deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .12) 19%, rgba(255, 255, 255, .04) 40%, rgba(255, 255, 255, .02) 45%, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, .02) 55%, rgba(255, 255, 255, .04) 60%, rgba(255, 255, 255, .12) 80%, rgba(255, 255, 255, .2) 96%);-webkit-backdrop-filter:blur(.25rem) saturate(4);backdrop-filter:blur(.25rem) saturate(4)}[data-platform=ios].tui-liquid-glass [tuiTheme=dark] [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after,[tuiTheme=dark] [data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after,[data-platform=ios][tuiTheme=dark].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after{filter:brightness(.6)}[data-platform=ios].tui-liquid-glass tui-app-bar[tuiTheme=dark] [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){--t-appbar-bevel: linear-gradient(319deg, #fff 4%, #fff 19%, rgba(255, 255, 255, .12) 40%, rgba(255, 255, 255, .02) 45%, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, .02) 55%, rgba(255, 255, 255, .12) 60%, #fff 80%, #fff 96%)}\n'],
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
      exportAs: `tui-app-bar-button-${TUI_VERSION}`,
      styles: ['[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){border-radius:2.75rem;margin-inline:1rem;-webkit-backdrop-filter:blur(.25rem) saturate(6) brightness(1.05);backdrop-filter:blur(.25rem) saturate(6) brightness(1.05);box-shadow:0 .5rem 2rem #00000017;overflow:hidden;box-sizing:border-box;background:var(--t-appbar-button-bg);color:var(--tui-text-primary);transition:transform var(--tui-duration) var(--tui-curve-expressive-entrance),background-color calc(var(--tui-duration) / 2) ease,color calc(var(--tui-duration) / 2) ease,box-shadow calc(var(--tui-duration) / 2) ease,backdrop-filter calc(var(--tui-duration) / 2) ease;--t-appbar-button-bg: rgba(255, 255, 255, .7);--t-appbar-glow: var(--tui-background-base);--t-appbar-bevel: linear-gradient(319deg, #fff 4%, #fff 19%, rgba(255, 255, 255, .12) 40%, rgba(255, 255, 255, .02) 45%, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, .02) 55%, rgba(255, 255, 255, .12) 60%, #fff 80%, #fff 96%)}@supports not (backdrop-filter: blur(1px)){[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){background:var(--tui-background-elevation-1)}}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;box-shadow:inset 0 0 .75rem var(--t-appbar-glow)}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;padding:1px;-webkit-mask-image:linear-gradient(#000 0 0),linear-gradient(#000 0 0);mask-image:linear-gradient(#000 0 0),linear-gradient(#000 0 0);-webkit-mask-origin:content-box,border-box;mask-origin:content-box,border-box;mask-clip:content-box,border-box;background:var(--t-appbar-bevel);-webkit-mask-composite:xor;mask-composite:exclude}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):active{transform:scale(1.25);filter:brightness(3)}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"])>[tuiIconButton]{margin:0}[data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]).tui-enter{--tui-blur: 1rem;animation-name:tuiFade,tuiBlur}[data-platform=ios].tui-liquid-glass [tuiTheme=dark] [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]),[tuiTheme=dark] [data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]),[data-platform=ios][tuiTheme=dark].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){--t-appbar-button-bg: rgba(88, 88, 88, .31);--t-appbar-glow: var(--tui-appbar-background, rgba(31, 31, 31, .8));--t-appbar-bevel: linear-gradient(319deg, rgba(255, 255, 255, .2), rgba(255, 255, 255, .12) 19%, rgba(255, 255, 255, .04) 40%, rgba(255, 255, 255, .02) 45%, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, .02) 55%, rgba(255, 255, 255, .04) 60%, rgba(255, 255, 255, .12) 80%, rgba(255, 255, 255, .2) 96%);-webkit-backdrop-filter:blur(.25rem) saturate(4);backdrop-filter:blur(.25rem) saturate(4)}[data-platform=ios].tui-liquid-glass [tuiTheme=dark] [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after,[tuiTheme=dark] [data-platform=ios].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after,[data-platform=ios][tuiTheme=dark].tui-liquid-glass [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]):after{filter:brightness(.6)}[data-platform=ios].tui-liquid-glass tui-app-bar[tuiTheme=dark] [tuiAppBarButton]:where(*[data-tui-version="5.15.0"]){--t-appbar-bevel: linear-gradient(319deg, #fff 4%, #fff 19%, rgba(255, 255, 255, .12) 40%, rgba(255, 255, 255, .02) 45%, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, .02) 55%, rgba(255, 255, 255, .12) 60%, #fff 80%, #fff 96%)}\n']
    }]
  }], null, null);
})();
var TuiAppBarButton = class _TuiAppBarButton {
  constructor() {
    this.styles = tuiWithStyles(Styles2);
  }
  static {
    this.ɵfac = function TuiAppBarButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppBarButton,
      selectors: [["", "tuiAppBarButton", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiAppBarButton", ""],
      features: [ɵɵHostDirectivesFeature([TuiAnimated])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarButton, [{
    type: Directive,
    args: [{
      selector: "[tuiAppBarButton]",
      hostDirectives: [TuiAnimated],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiAppBarButton: ""
      }
    }]
  }], null, null);
})();
var TuiProgressiveBlur = class _TuiProgressiveBlur {
  static {
    this.ɵfac = function TuiProgressiveBlur_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressiveBlur)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressiveBlur,
      selectors: [["tui-progressive-blur"]],
      decls: 2,
      vars: 0,
      consts: [[3, "--t-step"]],
      template: function TuiProgressiveBlur_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, TuiProgressiveBlur_For_1_Template, 1, 2, "span", 0, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater("-".repeat(20));
        }
      },
      styles: ['[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity var(--tui-duration) linear}.tui-liquid-glass_blur   [_nghost-%COMP%]{display:block;opacity:1}[_nghost-%COMP%]:before{content:"";position:absolute;inset:0;transition:background-color var(--tui-duration) linear;background:var(--tui-appbar-background, var(--tui-background-base));-webkit-mask-image:linear-gradient(0deg,transparent 0%,rgba(0,0,0,.01) 7%,rgba(0,0,0,.04) 13%,rgba(0,0,0,.08) 20%,rgba(0,0,0,.15) 27%,rgba(0,0,0,.23) 33%,rgba(0,0,0,.33) 40%,rgba(0,0,0,.44) 47%,rgba(0,0,0,.56) 53%,rgba(0,0,0,.67) 60%,rgba(0,0,0,.77) 67%,rgba(0,0,0,.85) 73%,rgba(0,0,0,.92) 80%,rgba(0,0,0,.96) 87%,rgba(0,0,0,.99) 93%,#000 100%);mask-image:linear-gradient(0deg,transparent 0%,rgba(0,0,0,.01) 7%,rgba(0,0,0,.04) 13%,rgba(0,0,0,.08) 20%,rgba(0,0,0,.15) 27%,rgba(0,0,0,.23) 33%,rgba(0,0,0,.33) 40%,rgba(0,0,0,.44) 47%,rgba(0,0,0,.56) 53%,rgba(0,0,0,.67) 60%,rgba(0,0,0,.77) 67%,rgba(0,0,0,.85) 73%,rgba(0,0,0,.92) 80%,rgba(0,0,0,.96) 87%,rgba(0,0,0,.99) 93%,#000 100%)}span[_ngcontent-%COMP%]{position:absolute;z-index:calc(-1 * var(--t-step));inline-size:100%;inset-block-start:0;inset-inline-start:0;block-size:calc(12.5rem - .625rem * var(--t-step));-webkit-backdrop-filter:blur(calc(.00375rem * var(--t-step)));backdrop-filter:blur(calc(.00375rem * var(--t-step)))}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressiveBlur, [{
    type: Component,
    args: [{
      selector: "tui-progressive-blur",
      template: `
        @for (_ of '-'.repeat(20); track $index) {
            <span [style.--t-step]="$index"></span>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [':host{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity var(--tui-duration) linear}:host-context(.tui-liquid-glass_blur) :host{display:block;opacity:1}:host:before{content:"";position:absolute;inset:0;transition:background-color var(--tui-duration) linear;background:var(--tui-appbar-background, var(--tui-background-base));-webkit-mask-image:linear-gradient(0deg,transparent 0%,rgba(0,0,0,.01) 7%,rgba(0,0,0,.04) 13%,rgba(0,0,0,.08) 20%,rgba(0,0,0,.15) 27%,rgba(0,0,0,.23) 33%,rgba(0,0,0,.33) 40%,rgba(0,0,0,.44) 47%,rgba(0,0,0,.56) 53%,rgba(0,0,0,.67) 60%,rgba(0,0,0,.77) 67%,rgba(0,0,0,.85) 73%,rgba(0,0,0,.92) 80%,rgba(0,0,0,.96) 87%,rgba(0,0,0,.99) 93%,#000 100%);mask-image:linear-gradient(0deg,transparent 0%,rgba(0,0,0,.01) 7%,rgba(0,0,0,.04) 13%,rgba(0,0,0,.08) 20%,rgba(0,0,0,.15) 27%,rgba(0,0,0,.23) 33%,rgba(0,0,0,.33) 40%,rgba(0,0,0,.44) 47%,rgba(0,0,0,.56) 53%,rgba(0,0,0,.67) 60%,rgba(0,0,0,.77) 67%,rgba(0,0,0,.85) 73%,rgba(0,0,0,.92) 80%,rgba(0,0,0,.96) 87%,rgba(0,0,0,.99) 93%,#000 100%)}span{position:absolute;z-index:calc(-1 * var(--t-step));inline-size:100%;inset-block-start:0;inset-inline-start:0;block-size:calc(12.5rem - .625rem * var(--t-step));-webkit-backdrop-filter:blur(calc(.00375rem * var(--t-step)));backdrop-filter:blur(calc(.00375rem * var(--t-step)))}\n']
    }]
  }], null, null);
})();
var TuiAppBarComponent = class _TuiAppBarComponent {
  constructor() {
    this.side = viewChildren("side");
    this.el = tuiInjectElement();
    this.liquidGlass = inject(TUI_LIQUID_GLASS) && inject(TUI_PLATFORM) === "ios";
    this.width$ = merge(inject(WaResizeObserverService, {
      self: true
    }), inject(WaMutationObserverService, {
      self: true
    })).pipe(tuiZonefull(), map(() => 2 * Math.max(this.side()[0]?.nativeElement.clientWidth ?? 0, this.side()[this.side().length - 1]?.nativeElement.clientWidth ?? 0)));
    this.size = input("m");
  }
  // TODO: Remove after :has support
  ngAfterViewInit() {
    this.el.closest("tui-dialog")?.classList.add("tui-app-bar");
  }
  static {
    this.ɵfac = function TuiAppBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAppBarComponent,
      selectors: [["tui-app-bar"]],
      viewQuery: function TuiAppBarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.side, _c0, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 1,
      hostBindings: function TuiAppBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature(TUI_APP_BAR_PROVIDERS)],
      ngContentSelectors: _c2,
      decls: 12,
      vars: 5,
      consts: [["side", ""], ["tuiAppBarButton", ""], ["tuiFade", "", 1, "t-content"]],
      template: function TuiAppBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c1);
          ɵɵconditionalCreate(0, TuiAppBarComponent_Conditional_0_Template, 1, 0, "tui-progressive-blur");
          ɵɵelementStart(1, "div", null, 0)(3, "div", 1);
          ɵɵprojection(4);
          ɵɵelementEnd()();
          ɵɵelementStart(5, "div", 2);
          ɵɵpipe(6, "async");
          ɵɵprojection(7, 1);
          ɵɵelementEnd();
          ɵɵelementStart(8, "div", null, 0)(10, "div", 1);
          ɵɵprojection(11, 2);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵconditional(ctx.liquidGlass ? 0 : -1);
          ɵɵadvance(5);
          ɵɵstyleProp("--t-sides", ɵɵpipeBind1(6, 3, ctx.width$), "px");
        }
      },
      dependencies: [AsyncPipe, TuiAppBarButton, TuiFade, TuiProgressiveBlur],
      styles: ['tui-app-bar:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;block-size:2.75rem;align-items:center;justify-content:space-between;box-sizing:border-box;font:var(--tui-typography-body-m);font-weight:700;text-align:center;color:var(--tui-text-primary);background:var(--tui-background-base);background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-app-bar:where(*[data-tui-version="5.15.0"])>.t-content{left:50%;transform:translate(-50%);position:absolute;display:flex;block-size:100%;max-inline-size:calc(100% - var(--t-sides, 0px));inline-size:calc(100% - var(--t-sides, 0px));flex-direction:column;justify-content:center;flex:1;padding:0 .375rem;box-sizing:border-box;text-align:inherit;white-space:nowrap}tui-app-bar:where(*[data-tui-version="5.15.0"])>.t-content progress{margin:auto}tui-app-bar:where(*[data-tui-version="5.15.0"])>:last-child [tuiIconButton]{margin:0 -.375rem}tui-app-bar:where(*[data-tui-version="5.15.0"])>:last-child [tuiIconButton]:last-child{margin-inline-end:0}tui-app-bar:where(*[data-tui-version="5.15.0"])>:last-child [tuiIconButton]:only-child{margin:0}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiButton][data-size=l]{font:var(--tui-typography-body-l);margin:0 -.25rem}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiTitle]{text-align:inherit;font:inherit}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTitle]{line-height:1.2em;gap:0}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l]{block-size:4rem}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l]>:first-child,tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l]>:last-child{margin:0 -1em}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiAppBarBack]{font:var(--tui-typography-body-l)}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiProgressBar]{inline-size:8.75rem}tui-dialog tui-app-bar[data-size=l]:where(*[data-tui-version="5.15.0"]){margin:-3rem 0 2rem}tui-dialog tui-app-bar[data-size=m]:where(*[data-tui-version="5.15.0"]){margin:-1rem -1rem .75rem}tui-sheet-dialog tui-app-bar:where(*[data-tui-version="5.15.0"]){margin:-.75rem -1rem;block-size:3.5rem;background:none;-webkit-backdrop-filter:none;backdrop-filter:none}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarComponent, [{
    type: Component,
    args: [{
      selector: "tui-app-bar",
      imports: [AsyncPipe, TuiAppBarButton, TuiFade, TuiProgressiveBlur],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_APP_BAR_PROVIDERS,
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()"
      },
      template: `@if (liquidGlass) {
    <tui-progressive-blur />
}

<div #side>
    <div tuiAppBarButton>
        <ng-content select="[tuiSlot='start']" />
    </div>
</div>
<div
    tuiFade
    class="t-content"
    [style.--t-sides.px]="width$ | async"
>
    <ng-content />
</div>
<div #side>
    <div tuiAppBarButton>
        <ng-content select="[tuiSlot='end']" />
    </div>
</div>
`,
      styles: ['tui-app-bar:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;block-size:2.75rem;align-items:center;justify-content:space-between;box-sizing:border-box;font:var(--tui-typography-body-m);font-weight:700;text-align:center;color:var(--tui-text-primary);background:var(--tui-background-base);background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-app-bar:where(*[data-tui-version="5.15.0"])>.t-content{left:50%;transform:translate(-50%);position:absolute;display:flex;block-size:100%;max-inline-size:calc(100% - var(--t-sides, 0px));inline-size:calc(100% - var(--t-sides, 0px));flex-direction:column;justify-content:center;flex:1;padding:0 .375rem;box-sizing:border-box;text-align:inherit;white-space:nowrap}tui-app-bar:where(*[data-tui-version="5.15.0"])>.t-content progress{margin:auto}tui-app-bar:where(*[data-tui-version="5.15.0"])>:last-child [tuiIconButton]{margin:0 -.375rem}tui-app-bar:where(*[data-tui-version="5.15.0"])>:last-child [tuiIconButton]:last-child{margin-inline-end:0}tui-app-bar:where(*[data-tui-version="5.15.0"])>:last-child [tuiIconButton]:only-child{margin:0}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiButton][data-size=l]{font:var(--tui-typography-body-l);margin:0 -.25rem}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiTitle]{text-align:inherit;font:inherit}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTitle]{line-height:1.2em;gap:0}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l]{block-size:4rem}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l]>:first-child,tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l]>:last-child{margin:0 -1em}tui-app-bar:where(*[data-tui-version="5.15.0"])[data-size=l] [tuiAppBarBack]{font:var(--tui-typography-body-l)}tui-app-bar:where(*[data-tui-version="5.15.0"]) [tuiProgressBar]{inline-size:8.75rem}tui-dialog tui-app-bar[data-size=l]:where(*[data-tui-version="5.15.0"]){margin:-3rem 0 2rem}tui-dialog tui-app-bar[data-size=m]:where(*[data-tui-version="5.15.0"]){margin:-1rem -1rem .75rem}tui-sheet-dialog tui-app-bar:where(*[data-tui-version="5.15.0"]){margin:-.75rem -1rem;block-size:3.5rem;background:none;-webkit-backdrop-filter:none;backdrop-filter:none}\n']
    }]
  }], null, null);
})();
var TuiAppBarDirective = class _TuiAppBarDirective {
  constructor() {
    this.tuiSlot = input("start");
  }
  static {
    this.ɵfac = function TuiAppBarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppBarDirective,
      selectors: [["", "tuiSlot", ""]],
      inputs: {
        tuiSlot: [1, "tuiSlot"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiSlot]"
    }]
  }], null, null);
})();
var TuiAppBarBack = class _TuiAppBarBack {
  constructor() {
    this.icons = inject(TUI_COMMON_ICONS);
    this.appearance = inject(TUI_LIQUID_GLASS) && inject(TUI_PLATFORM) === "ios" ? "" : "action";
  }
  static {
    this.ɵfac = function TuiAppBarBack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarBack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAppBarBack,
      selectors: [["button", "tuiAppBarBack", ""], ["a", "tuiAppBarBack", ""]],
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(_TuiAppBarBack)]), ɵɵHostDirectivesFeature([TuiWithAppearance])],
      ngContentSelectors: _c3,
      decls: 6,
      vars: 1,
      consts: [["height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", 1, "t-ios"], ["d", "M7.44025 12L14.9826 4.43872C15.5391 3.88083 15.5391 2.97631 14.9826 2.41842C14.4261 1.86053 13.5239 1.86053 12.9674 2.41842L4.41737 10.9898C3.86088 11.5477 3.86088 12.4523 4.41737 13.0102L12.9674 21.5816C13.5239 22.1395 14.4261 22.1395 14.9826 21.5816C15.5391 21.0237 15.5391 20.1192 14.9826 19.5613L7.44025 12Z", "fill", "currentColor"], ["height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", 1, "t-android"], ["d", "M19.6999 11.5899C19.6999 11.0377 19.2522 10.5899 18.6999 10.5899H7.49992L12.3999 5.68995C12.7865 5.30335 12.7865 4.67655 12.3999 4.28995V4.28995C12.0133 3.90335 11.3865 3.90335 10.9999 4.28995L4.40703 10.8828C4.0165 11.2734 4.01651 11.9065 4.40703 12.2971L10.9999 18.89C11.3865 19.2765 12.0133 19.2765 12.3999 18.8899V18.8899C12.7865 18.5034 12.7865 17.8765 12.3999 17.49L7.49992 12.5899H18.6999C19.2522 12.5899 19.6999 12.1422 19.6999 11.5899V11.5899Z", "fill", "currentColor"], [1, "t-web", 3, "icon"]],
      template: function TuiAppBarBack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵnamespaceSVG();
          ɵɵelementStart(0, "svg", 0);
          ɵɵelement(1, "path", 1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "svg", 2);
          ɵɵelement(3, "path", 3);
          ɵɵelementEnd();
          ɵɵnamespaceHTML();
          ɵɵelement(4, "tui-icon", 4);
          ɵɵprojection(5);
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵproperty("icon", ctx.icons.decrement);
        }
      },
      dependencies: [TuiIcon],
      styles: ['[_nghost-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;display:flex;align-items:center;padding:0 1rem 0 0;cursor:pointer}[_nghost-%COMP%]   [data-platform="web"][_ngcontent-%COMP%]   tui-dialog[_nghost-%COMP%], [data-platform="web"]   tui-dialog   [_nghost-%COMP%]{padding:0 .5rem}[_nghost-%COMP%]   [data-platform="android"][_nghost-%COMP%], [data-platform="android"]   [_nghost-%COMP%]{font-size:0;padding:0 1rem}[_nghost-%COMP%]   [data-platform="android"][_nghost-%COMP%]   .t-android[_ngcontent-%COMP%], [data-platform="android"]   [_nghost-%COMP%]   .t-android[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   [data-platform="android"][_nghost-%COMP%]   .t-web[_ngcontent-%COMP%], [data-platform="android"]   [_nghost-%COMP%]   .t-web[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   [data-platform="ios"][_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%], [data-platform="ios"]   [_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%]{display:block;margin-inline-start:.5rem}[_nghost-%COMP%]   [data-platform="ios"][_nghost-%COMP%]   .t-web[_ngcontent-%COMP%], [data-platform="ios"]   [_nghost-%COMP%]   .t-web[_ngcontent-%COMP%]{display:none}[data-platform="ios"].tui-liquid-glass[data-platform="ios"][_nghost-%COMP%], [data-platform="ios"].tui-liquid-glass[data-platform="ios"]   [_nghost-%COMP%], [data-platform="ios"].tui-liquid-glass   [data-platform="ios"][_nghost-%COMP%], [data-platform="ios"].tui-liquid-glass   [data-platform="ios"]   [_nghost-%COMP%], [data-platform="ios"]   [data-platform="ios"].tui-liquid-glass[_nghost-%COMP%], [data-platform="ios"]   [data-platform="ios"].tui-liquid-glass   [_nghost-%COMP%]{display:flex;font-size:0;block-size:2.75rem;inline-size:2.75rem;padding:0;justify-content:center}[data-platform="ios"].tui-liquid-glass[data-platform="ios"][_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%], [data-platform="ios"].tui-liquid-glass[data-platform="ios"]   [_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%], [data-platform="ios"].tui-liquid-glass   [data-platform="ios"][_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%], [data-platform="ios"].tui-liquid-glass   [data-platform="ios"]   [_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%], [data-platform="ios"]   [data-platform="ios"].tui-liquid-glass[_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%], [data-platform="ios"]   [data-platform="ios"].tui-liquid-glass   [_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%]{margin-inline-start:0}.t-web[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-android[_ngcontent-%COMP%], .t-ios[_ngcontent-%COMP%]{display:none}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarBack, [{
    type: Component,
    args: [{
      selector: "button[tuiAppBarBack], a[tuiAppBarBack]",
      imports: [TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TuiAppBarBack)],
      hostDirectives: [TuiWithAppearance],
      template: '<svg\n    height="24"\n    viewBox="0 0 24 24"\n    width="24"\n    xmlns="http://www.w3.org/2000/svg"\n    class="t-ios"\n>\n    <path\n        d="M7.44025 12L14.9826 4.43872C15.5391 3.88083 15.5391 2.97631 14.9826 2.41842C14.4261 1.86053 13.5239 1.86053 12.9674 2.41842L4.41737 10.9898C3.86088 11.5477 3.86088 12.4523 4.41737 13.0102L12.9674 21.5816C13.5239 22.1395 14.4261 22.1395 14.9826 21.5816C15.5391 21.0237 15.5391 20.1192 14.9826 19.5613L7.44025 12Z"\n        fill="currentColor"\n    />\n</svg>\n<svg\n    height="24"\n    viewBox="0 0 24 24"\n    width="24"\n    xmlns="http://www.w3.org/2000/svg"\n    class="t-android"\n>\n    <path\n        d="M19.6999 11.5899C19.6999 11.0377 19.2522 10.5899 18.6999 10.5899H7.49992L12.3999 5.68995C12.7865 5.30335 12.7865 4.67655 12.3999 4.28995V4.28995C12.0133 3.90335 11.3865 3.90335 10.9999 4.28995L4.40703 10.8828C4.0165 11.2734 4.01651 11.9065 4.40703 12.2971L10.9999 18.89C11.3865 19.2765 12.0133 19.2765 12.3999 18.8899V18.8899C12.7865 18.5034 12.7865 17.8765 12.3999 17.49L7.49992 12.5899H18.6999C19.2522 12.5899 19.6999 12.1422 19.6999 11.5899V11.5899Z"\n        fill="currentColor"\n    />\n</svg>\n<tui-icon\n    class="t-web"\n    [icon]="icons.decrement"\n/>\n<ng-content />\n',
      styles: [':host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;display:flex;align-items:center;padding:0 1rem 0 0;cursor:pointer}:host :host-context([data-platform="web"] tui-dialog){padding:0 .5rem}:host :host-context([data-platform="android"]){font-size:0;padding:0 1rem}:host :host-context([data-platform="android"]) .t-android{display:block}:host :host-context([data-platform="android"]) .t-web{display:none}:host :host-context([data-platform="ios"]) .t-ios{display:block;margin-inline-start:.5rem}:host :host-context([data-platform="ios"]) .t-web{display:none}:host-context([data-platform="ios"].tui-liquid-glass) :host :host-context([data-platform="ios"]){display:flex;font-size:0;block-size:2.75rem;inline-size:2.75rem;padding:0;justify-content:center}:host-context([data-platform="ios"].tui-liquid-glass) :host :host-context([data-platform="ios"]) .t-ios{margin-inline-start:0}.t-web{transform:scaleX(var(--tui-inline))}.t-android,.t-ios{display:none}\n']
    }]
  }], null, null);
})();
var TuiAppBarSizeDirective = class _TuiAppBarSizeDirective {
  constructor() {
    this.platform = inject(TUI_PLATFORM);
    this.size = tuiDirectiveBinding(TuiAppBarComponent, "size", computed(() => this.platform === "web" ? "l" : "m"));
  }
  static {
    this.ɵfac = function TuiAppBarSizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarSizeDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppBarSizeDirective,
      selectors: [["tui-app-bar", "tuiAppBarSize", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarSizeDirective, [{
    type: Directive,
    args: [{
      selector: "tui-app-bar[tuiAppBarSize]"
    }]
  }], null, null);
})();
var TuiAppBar = [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBack, TuiAppBarSizeDirective];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-block-details.mjs
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
      exportAs: ["tui-block-details-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]){display:flex;flex-direction:column;align-items:center;font:var(--tui-typography-heading-h3);min-block-size:2rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{text-align:center;font:var(--tui-typography-body-l);gap:0}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiDetailsStatus]{display:flex;align-items:center;gap:.25rem;font:var(--tui-typography-body-m);color:var(--tui-text-secondary);margin-block-start:.25rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]+[tuiSubtitle],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiDetailsStatus]{margin-block-start:1rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiComment]{margin-block-start:1.0625rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAccessory]{display:flex;gap:.5rem;margin-block-start:1.25rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAccessories],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"])>[tuiBadge]{margin-block-start:1.25rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]{display:flex;gap:.5rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAvatar],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin-block-end:1rem}\n'],
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
      exportAs: `tui-block-details-${TUI_VERSION}`,
      styles: ['[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]){display:flex;flex-direction:column;align-items:center;font:var(--tui-typography-heading-h3);min-block-size:2rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{text-align:center;font:var(--tui-typography-body-l);gap:0}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiDetailsStatus]{display:flex;align-items:center;gap:.25rem;font:var(--tui-typography-body-m);color:var(--tui-text-secondary);margin-block-start:.25rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]+[tuiSubtitle],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiDetailsStatus]{margin-block-start:1rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiComment]{margin-block-start:1.0625rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAccessory]{display:flex;gap:.5rem;margin-block-start:1.25rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAccessories],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"])>[tuiBadge]{margin-block-start:1.25rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]{display:flex;gap:.5rem}[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiAvatar],[tuiBlockDetails]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin-block-end:1rem}\n']
    }]
  }], null, null);
})();
var TuiBlockDetails = class _TuiBlockDetails {
  constructor() {
    this.nothing = tuiWithStyles(Styles3);
  }
  static {
    this.ɵfac = function TuiBlockDetails_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockDetails)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlockDetails,
      selectors: [["", "tuiBlockDetails", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockDetails, [{
    type: Directive,
    args: [{
      selector: "[tuiBlockDetails]",
      host: {
        "data-tui-version": TUI_VERSION
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-block-status.mjs
var _c02 = [[["", "tuiSlot", "top"]], [["h1"], ["h2"], ["h3"], ["h4"], ["h5"], ["h6"]], "*", [["a"], ["button"], ["", "tuiSlot", "action"]]];
var _c12 = ["[tuiSlot='top']", "h1,h2,h3,h4,h5,h6", "*", "a,button,[tuiSlot='action']"];
var TuiBlockStatusComponent = class _TuiBlockStatusComponent {
  constructor() {
    this.card = input(false);
    this.size = input("l");
  }
  static {
    this.ɵfac = function TuiBlockStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockStatusComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBlockStatusComponent,
      selectors: [["tui-block-status"]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 3,
      hostBindings: function TuiBlockStatusComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
          ɵɵclassProp("_card", ctx.card());
        }
      },
      inputs: {
        card: [1, "card"],
        size: [1, "size"]
      },
      ngContentSelectors: _c12,
      decls: 7,
      vars: 0,
      consts: [[1, "t-block-image"], [1, "t-block-text"], [1, "t-block-actions"]],
      template: function TuiBlockStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c02);
          ɵɵdomElementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵdomElementEnd();
          ɵɵprojection(2, 1);
          ɵɵdomElementStart(3, "div", 1);
          ɵɵprojection(4, 2);
          ɵɵdomElementEnd();
          ɵɵdomElementStart(5, "div", 2);
          ɵɵprojection(6, 3);
          ɵɵdomElementEnd();
        }
      },
      styles: ['tui-block-status:where(*[data-tui-version="5.15.0"]){display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;overflow:hidden;inline-size:100%;block-size:100%}tui-block-status:where(*[data-tui-version="5.15.0"])._card{border-radius:var(--tui-radius-xl);padding:2rem}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-image:empty,tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-text:empty,tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-actions:empty{display:none}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-image:not(:empty){display:flex;margin-block-end:2rem}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-text:not(:empty){font:var(--tui-typography-body-m);color:var(--tui-text-secondary);white-space:pre-line}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-actions:not(:empty){display:flex;flex-direction:column;align-items:center;inline-size:100%;margin-block-start:2rem}tui-block-status:where(*[data-tui-version="5.15.0"]) h1,tui-block-status:where(*[data-tui-version="5.15.0"]) h2,tui-block-status:where(*[data-tui-version="5.15.0"]) h3,tui-block-status:where(*[data-tui-version="5.15.0"]) h4,tui-block-status:where(*[data-tui-version="5.15.0"]) h5,tui-block-status:where(*[data-tui-version="5.15.0"]) h6{font:var(--tui-typography-heading-h4);margin:0}tui-block-status:where(*[data-tui-version="5.15.0"]) h1~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h2~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h3~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h4~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h5~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h6~.t-block-text:not(:empty){margin-block-start:1rem}tui-block-status:where(*[data-tui-version="5.15.0"]) img{inline-size:9rem;block-size:9rem}tui-block-status:where(*[data-tui-version="5.15.0"]) a:not(:last-child),tui-block-status:where(*[data-tui-version="5.15.0"]) button:not(:last-child){margin-block-end:.75rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h1,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h2,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h3,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h4,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h5,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h6{font:var(--tui-typography-heading-h6);margin-block-start:0}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h1~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h2~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h3~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h4~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h5~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h6~.t-block-text:not(:empty){margin-block-start:.75rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] img{inline-size:6rem;block-size:6rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] .t-block-text:not(:empty){font:var(--tui-typography-body-s)}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] .t-block-actions:not(:empty){margin-block-start:1.5rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] .t-block-image:not(:empty){margin-block-end:1.5rem}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockStatusComponent, [{
    type: Component,
    args: [{
      selector: "tui-block-status",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        "[class._card]": "card()"
      },
      template: `<div class="t-block-image">
    <ng-content select="[tuiSlot='top']" />
</div>

<ng-content select="h1,h2,h3,h4,h5,h6" />

<div class="t-block-text">
    <ng-content />
</div>

<div class="t-block-actions">
    <ng-content select="a,button,[tuiSlot='action']" />
</div>
`,
      styles: ['tui-block-status:where(*[data-tui-version="5.15.0"]){display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;overflow:hidden;inline-size:100%;block-size:100%}tui-block-status:where(*[data-tui-version="5.15.0"])._card{border-radius:var(--tui-radius-xl);padding:2rem}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-image:empty,tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-text:empty,tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-actions:empty{display:none}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-image:not(:empty){display:flex;margin-block-end:2rem}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-text:not(:empty){font:var(--tui-typography-body-m);color:var(--tui-text-secondary);white-space:pre-line}tui-block-status:where(*[data-tui-version="5.15.0"]) .t-block-actions:not(:empty){display:flex;flex-direction:column;align-items:center;inline-size:100%;margin-block-start:2rem}tui-block-status:where(*[data-tui-version="5.15.0"]) h1,tui-block-status:where(*[data-tui-version="5.15.0"]) h2,tui-block-status:where(*[data-tui-version="5.15.0"]) h3,tui-block-status:where(*[data-tui-version="5.15.0"]) h4,tui-block-status:where(*[data-tui-version="5.15.0"]) h5,tui-block-status:where(*[data-tui-version="5.15.0"]) h6{font:var(--tui-typography-heading-h4);margin:0}tui-block-status:where(*[data-tui-version="5.15.0"]) h1~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h2~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h3~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h4~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h5~.t-block-text:not(:empty),tui-block-status:where(*[data-tui-version="5.15.0"]) h6~.t-block-text:not(:empty){margin-block-start:1rem}tui-block-status:where(*[data-tui-version="5.15.0"]) img{inline-size:9rem;block-size:9rem}tui-block-status:where(*[data-tui-version="5.15.0"]) a:not(:last-child),tui-block-status:where(*[data-tui-version="5.15.0"]) button:not(:last-child){margin-block-end:.75rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h1,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h2,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h3,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h4,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h5,[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h6{font:var(--tui-typography-heading-h6);margin-block-start:0}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h1~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h2~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h3~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h4~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h5~.t-block-text:not(:empty),[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] h6~.t-block-text:not(:empty){margin-block-start:.75rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] img{inline-size:6rem;block-size:6rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] .t-block-text:not(:empty){font:var(--tui-typography-body-s)}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] .t-block-actions:not(:empty){margin-block-start:1.5rem}[data-platform=web] tui-block-status:where(*[data-tui-version="5.15.0"])[data-size=m] .t-block-image:not(:empty){margin-block-end:1.5rem}\n']
    }]
  }], null, null);
})();
var TuiBlockStatusDirective = class _TuiBlockStatusDirective {
  constructor() {
    this.tuiSlot = input("top");
  }
  static {
    this.ɵfac = function TuiBlockStatusDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockStatusDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlockStatusDirective,
      selectors: [["", "tuiSlot", ""]],
      inputs: {
        tuiSlot: [1, "tuiSlot"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockStatusDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiSlot]"
    }]
  }], null, null);
})();
var TuiBlockStatus = [TuiBlockStatusComponent, TuiBlockStatusDirective];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-surface.mjs
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
      exportAs: ["tui-surface-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiSurface]:where(*[data-tui-version="5.15.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);--tui-gap: .25rem;position:relative;box-sizing:border-box;background:none no-repeat;background-size:cover;overflow:hidden;isolation:isolate;-webkit-appearance:none;appearance:none;border:0;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform!important}[tuiSurface]:where(*[data-tui-version="5.15.0"]):focus-visible{outline-color:var(--tui-border-focus)}@supports (not (-moz-appearance: none)) and (not (-webkit-hyphens: none)){[tuiSurface]:where(*[data-tui-version="5.15.0"]):before{mix-blend-mode:multiply}}tui-dialog[data-appearance~=taiga] [tuiSurface]:where(*[data-tui-version="5.15.0"]),tui-sheet-dialog [tuiSurface]:where(*[data-tui-version="5.15.0"]){--tui-background-elevation-1: var(--tui-background-elevation-2)}button[tuiSurface]:where(*[data-tui-version="5.15.0"]){cursor:pointer}[tuiSurface]:where(*[data-tui-version="5.15.0"]):before,[tuiSurface]:where(*[data-tui-version="5.15.0"]):after,[data-tui-version="5.15.0"] [tuiSurfaceLayer]:before,[data-tui-version="5.15.0"] [tuiSurfaceLayer]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";z-index:-1;border-radius:inherit;pointer-events:none;background-size:cover;background-repeat:no-repeat;transition-property:opacity,backdrop-filter,transform}[data-tui-version="5.15.0"] [tuiSurfaceLayer]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;position:absolute!important;z-index:-1;object-fit:cover;border-radius:inherit;box-sizing:border-box;transition-property:box-shadow,filter,padding}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]+[tuiSurfaceLayer]{will-change:padding;background-clip:content-box;overflow:clip;overflow-clip-margin:content-box}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:checked+[tuiSurfaceLayer]{padding:var(--tui-gap)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:focus-visible+[tuiSurfaceLayer]{padding:var(--tui-gap)}@media(hover:hover)and (pointer:fine){[tuiSurface]:where(*[data-tui-version="5.15.0"]):hover input[tuiSurfaceLayer]+[tuiSurfaceLayer]{padding:var(--tui-gap)}}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]{color:var(--tui-background-accent-2);-webkit-appearance:none;appearance:none;margin:0;border-radius:inherit;outline:none;box-shadow:inset 0 0,inset 0 0 var(--tui-background-neutral-1)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:checked{box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 var(--tui-background-neutral-1)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:focus-visible{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:checked:focus-visible{filter:brightness(.7);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}@media(hover:hover)and (pointer:fine){[tuiSurface]:where(*[data-tui-version="5.15.0"]):hover input[tuiSurfaceLayer]{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}[tuiSurface]:where(*[data-tui-version="5.15.0"]):hover input[tuiSurfaceLayer]:checked{filter:brightness(.9);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]){background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium)}@media(hover:hover)and (pointer:fine){[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){transform:translate3d(0,-.25rem,0);box-shadow:var(--tui-shadow-medium-hover)}}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"])[data-state=hover]{transform:translate3d(0,-.25rem,0);box-shadow:var(--tui-shadow-medium-hover)}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){transform:scale(.95);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium)}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"])[data-state=active]{transform:scale(.95);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium)}[tuiTheme=dark] [tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]),[tuiTheme=dark][tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]){box-shadow:none!important}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]){background:conic-gradient(var(--tui-background-neutral-1) 0 0),conic-gradient(var(--tui-background-base) 0 0)}[tuiTheme=dark] [tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]),[tuiTheme=dark][tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]){background:var(--tui-background-elevation-1)}@media(hover:hover)and (pointer:fine){[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){transform:scale(1.15)}}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"])[data-state=hover]{transform:scale(1.15)}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){transform:scale(.95)}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"])[data-state=active]{transform:scale(.95)}\n'],
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
      exportAs: `tui-surface-${TUI_VERSION}`,
      styles: ['[tuiSurface]:where(*[data-tui-version="5.15.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);--tui-gap: .25rem;position:relative;box-sizing:border-box;background:none no-repeat;background-size:cover;overflow:hidden;isolation:isolate;-webkit-appearance:none;appearance:none;border:0;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform!important}[tuiSurface]:where(*[data-tui-version="5.15.0"]):focus-visible{outline-color:var(--tui-border-focus)}@supports (not (-moz-appearance: none)) and (not (-webkit-hyphens: none)){[tuiSurface]:where(*[data-tui-version="5.15.0"]):before{mix-blend-mode:multiply}}tui-dialog[data-appearance~=taiga] [tuiSurface]:where(*[data-tui-version="5.15.0"]),tui-sheet-dialog [tuiSurface]:where(*[data-tui-version="5.15.0"]){--tui-background-elevation-1: var(--tui-background-elevation-2)}button[tuiSurface]:where(*[data-tui-version="5.15.0"]){cursor:pointer}[tuiSurface]:where(*[data-tui-version="5.15.0"]):before,[tuiSurface]:where(*[data-tui-version="5.15.0"]):after,[data-tui-version="5.15.0"] [tuiSurfaceLayer]:before,[data-tui-version="5.15.0"] [tuiSurfaceLayer]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";z-index:-1;border-radius:inherit;pointer-events:none;background-size:cover;background-repeat:no-repeat;transition-property:opacity,backdrop-filter,transform}[data-tui-version="5.15.0"] [tuiSurfaceLayer]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;position:absolute!important;z-index:-1;object-fit:cover;border-radius:inherit;box-sizing:border-box;transition-property:box-shadow,filter,padding}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]+[tuiSurfaceLayer]{will-change:padding;background-clip:content-box;overflow:clip;overflow-clip-margin:content-box}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:checked+[tuiSurfaceLayer]{padding:var(--tui-gap)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:focus-visible+[tuiSurfaceLayer]{padding:var(--tui-gap)}@media(hover:hover)and (pointer:fine){[tuiSurface]:where(*[data-tui-version="5.15.0"]):hover input[tuiSurfaceLayer]+[tuiSurfaceLayer]{padding:var(--tui-gap)}}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]{color:var(--tui-background-accent-2);-webkit-appearance:none;appearance:none;margin:0;border-radius:inherit;outline:none;box-shadow:inset 0 0,inset 0 0 var(--tui-background-neutral-1)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:checked{box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 var(--tui-background-neutral-1)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:focus-visible{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}[data-tui-version="5.15.0"] input[tuiSurfaceLayer]:checked:focus-visible{filter:brightness(.7);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}@media(hover:hover)and (pointer:fine){[tuiSurface]:where(*[data-tui-version="5.15.0"]):hover input[tuiSurfaceLayer]{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}[tuiSurface]:where(*[data-tui-version="5.15.0"]):hover input[tuiSurfaceLayer]:checked{filter:brightness(.9);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]){background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium)}@media(hover:hover)and (pointer:fine){[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){transform:translate3d(0,-.25rem,0);box-shadow:var(--tui-shadow-medium-hover)}}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"])[data-state=hover]{transform:translate3d(0,-.25rem,0);box-shadow:var(--tui-shadow-medium-hover)}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){transform:scale(.95);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium)}[tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"])[data-state=active]{transform:scale(.95);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium)}[tuiTheme=dark] [tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]),[tuiTheme=dark][tuiSurface][data-appearance=floating]:where(*[data-tui-version="5.15.0"]){box-shadow:none!important}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]){background:conic-gradient(var(--tui-background-neutral-1) 0 0),conic-gradient(var(--tui-background-base) 0 0)}[tuiTheme=dark] [tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]),[tuiTheme=dark][tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]){background:var(--tui-background-elevation-1)}@media(hover:hover)and (pointer:fine){[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){transform:scale(1.15)}}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"])[data-state=hover]{transform:scale(1.15)}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){transform:scale(.95)}[tuiSurface][data-appearance=neutral]:where(*[data-tui-version="5.15.0"])[data-state=active]{transform:scale(.95)}\n']
    }]
  }], null, null);
})();
var TuiSurface = class _TuiSurface {
  constructor() {
    this.nothing = tuiWithStyles(Styles4);
  }
  static {
    this.ɵfac = function TuiSurface_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSurface)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSurface,
      selectors: [["", "tuiSurface", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiSurface", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSurface, [{
    type: Directive,
    args: [{
      selector: "[tuiSurface]",
      host: {
        "data-tui-version": TUI_VERSION,
        tuiSurface: ""
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c03 = ["*"];
function TuiAvatarLabeled_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const word_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(word_r1);
  }
}
function TuiAvatarLabeled_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, TuiAvatarLabeled_Conditional_1_For_1_Template, 2, 1, "span", 0, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.words());
  }
}
var [TUI_AVATAR_OPTIONS, tuiAvatarOptionsProvider] = tuiCreateOptions({
  appearance: "",
  round: true,
  size: "m"
});
var Styles$1 = class Styles5 {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Styles5)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: Styles5,
      selectors: [["ng-component"]],
      exportAs: ["tui-avatar-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiAvatar]:where(*[data-tui-version="5.15.0"]){--t-size: var(--tui-height-l);--t-radius: .75rem;--t-corner-offset: calc((var(--t-radius) * 1.4142 - var(--t-radius)) * 1 / 1.4142);position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);min-inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;font:var(--tui-typography-body-l);font-weight:700;aspect-ratio:1;opacity:.999}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):before{inline-size:auto;block-size:auto}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):not(._initials):before{position:absolute;inset:0;font-size:calc(var(--t-size) * .6)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-size:.5625rem}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xs]._initials:before{font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=s]._initials:before{font:var(--tui-typography-body-s);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-typography-ui-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=m]._initials:before{font:var(--tui-typography-body-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-typography-heading-h4)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxxl]._initials:before{font:var(--tui-typography-heading-h2)}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):not([data-shape=square]){--t-radius: calc(var(--t-size) / 2) !important}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._initials:before{content:attr(data-icon-start);-webkit-mask-image:none;mask-image:none;background:none;font:var(--tui-typography-heading-h6)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._badge{-webkit-mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-clip:no-clip}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._badge:after{content:"";position:absolute;display:block;inset-block-start:calc(100% - var(--t-corner-offset));inset-inline-start:calc(100% - var(--t-corner-offset));inline-size:.55rem;block-size:.55rem;border-radius:100%;background:var(--t-badge);transform:translate3d(calc(var(--tui-inline) * -50%),-50%,0);zoom:1}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._fallback img,[tuiAvatar]:where(*[data-tui-version="5.15.0"])._fallback video{display:none}[tuiAvatar]:where(*[data-tui-version="5.15.0"]) img,[tuiAvatar]:where(*[data-tui-version="5.15.0"]) video,[tuiAvatar]:where(*[data-tui-version="5.15.0"]) picture{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):has(img,video):not(._fallback){background:none}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$1, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-avatar-${TUI_VERSION}`,
      styles: ['[tuiAvatar]:where(*[data-tui-version="5.15.0"]){--t-size: var(--tui-height-l);--t-radius: .75rem;--t-corner-offset: calc((var(--t-radius) * 1.4142 - var(--t-radius)) * 1 / 1.4142);position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);min-inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;font:var(--tui-typography-body-l);font-weight:700;aspect-ratio:1;opacity:.999}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):before{inline-size:auto;block-size:auto}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):not(._initials):before{position:absolute;inset:0;font-size:calc(var(--t-size) * .6)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-size:.5625rem}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xs]._initials:before{font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=s]._initials:before{font:var(--tui-typography-body-s);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-typography-ui-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=m]._initials:before{font:var(--tui-typography-body-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-typography-heading-h4)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])[data-size=xxxl]._initials:before{font:var(--tui-typography-heading-h2)}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):not([data-shape=square]){--t-radius: calc(var(--t-size) / 2) !important}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._initials:before{content:attr(data-icon-start);-webkit-mask-image:none;mask-image:none;background:none;font:var(--tui-typography-heading-h6)}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._badge{-webkit-mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-clip:no-clip}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._badge:after{content:"";position:absolute;display:block;inset-block-start:calc(100% - var(--t-corner-offset));inset-inline-start:calc(100% - var(--t-corner-offset));inline-size:.55rem;block-size:.55rem;border-radius:100%;background:var(--t-badge);transform:translate3d(calc(var(--tui-inline) * -50%),-50%,0);zoom:1}[tuiAvatar]:where(*[data-tui-version="5.15.0"])._fallback img,[tuiAvatar]:where(*[data-tui-version="5.15.0"])._fallback video{display:none}[tuiAvatar]:where(*[data-tui-version="5.15.0"]) img,[tuiAvatar]:where(*[data-tui-version="5.15.0"]) video,[tuiAvatar]:where(*[data-tui-version="5.15.0"]) picture{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}[tuiAvatar]:where(*[data-tui-version="5.15.0"]):has(img,video):not(._fallback){background:none}\n']
    }]
  }], null, null);
})();
var TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.nothing = tuiWithStyles(Styles$1);
    this.icons = inject(TuiIcons);
    this.fallback = signal(false);
    this.size = input(this.options.size);
    this.round = input(this.options.round);
    this.badge = input("");
  }
  static {
    this.ɵfac = function TuiAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatar)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatar,
      selectors: [["", "tuiAvatar", ""]],
      hostAttrs: ["tuiAvatar", ""],
      hostVars: 10,
      hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("error.capture", function TuiAvatar_error_capture_HostBindingHandler() {
            return ctx.fallback.set(true);
          })("load.capture", function TuiAvatar_load_capture_HostBindingHandler() {
            return ctx.fallback.set(false);
          });
        }
        if (rf & 2) {
          let tmp_5_0;
          ɵɵattribute("data-shape", ctx.round() ? "round" : "square")("data-size", ctx.size());
          ɵɵstyleProp("--t-badge", ctx.badge());
          ɵɵclassProp("_badge", ctx.badge())("_fallback", ctx.fallback())("_initials", ((tmp_5_0 = ctx.icons.iconStart()) == null ? null : tmp_5_0.length) < 3);
        }
      },
      inputs: {
        size: [1, "size"],
        round: [1, "round"],
        badge: [1, "badge"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart", "tuiAvatar"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Directive,
    args: [{
      selector: "[tuiAvatar]",
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart: tuiAvatar"]
      }],
      host: {
        tuiAvatar: "",
        "[attr.data-shape]": 'round() ? "round" : "square"',
        "[attr.data-size]": "size()",
        "[class._badge]": "badge()",
        "[class._fallback]": "fallback()",
        "[class._initials]": "icons.iconStart()?.length < 3",
        "[style.--t-badge]": "badge()",
        "(error.capture)": "fallback.set(true)",
        "(load.capture)": "fallback.set(false)"
      }
    }]
  }], null, null);
})();
var TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = input("");
    this.words = computed(() => this.label().split(" "));
  }
  static {
    this.ɵfac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarLabeled)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarLabeled,
      selectors: [["tui-avatar-labeled"]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      inputs: {
        label: [1, "label"]
      },
      ngContentSelectors: _c03,
      decls: 2,
      vars: 1,
      consts: [["tuiFade", ""]],
      template: function TuiAvatarLabeled_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵconditionalCreate(1, TuiAvatarLabeled_Conditional_1_Template, 2, 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.label().length ? 1 : -1);
        }
      },
      dependencies: [TuiFade],
      styles: ['tui-avatar-labeled:where(*[data-tui-version="5.15.0"]){display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;font:var(--tui-typography-ui-xs);padding:0 .5rem;white-space:nowrap}tui-avatar-labeled:where(*[data-tui-version="5.15.0"]) [tuiAvatar]{margin-block-end:.375rem}tui-avatar-labeled:where(*[data-tui-version="5.15.0"]) [tuiFade]{inline-size:calc(100% + 1rem)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      selector: "tui-avatar-labeled",
      imports: [TuiFade],
      template: `
        <ng-content />
        @if (label().length) {
            @for (word of words(); track $index) {
                <span tuiFade>{{ word }}</span>
            }
        }
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION
      },
      styles: ['tui-avatar-labeled:where(*[data-tui-version="5.15.0"]){display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;font:var(--tui-typography-ui-xs);padding:0 .5rem;white-space:nowrap}tui-avatar-labeled:where(*[data-tui-version="5.15.0"]) [tuiAvatar]{margin-block-end:.375rem}tui-avatar-labeled:where(*[data-tui-version="5.15.0"]) [tuiFade]{inline-size:calc(100% + 1rem)}\n']
    }]
  }], null, null);
})();
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
      exportAs: ["tui-avatar-outline-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template1(rf, ctx) {
      },
      styles: ['[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"]){--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])[data-size=xs],[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])[data-size=s],[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])._outline{-webkit-mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])._outline:after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
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
      exportAs: `tui-avatar-outline-${TUI_VERSION}`,
      styles: ['[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"]){--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])[data-size=xs],[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])[data-size=s],[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])._outline{-webkit-mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]:where(*[data-tui-version="5.15.0"])._outline:after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(Styles6);
    this.value = computed((value = this.tuiAvatarOutline()) => value === "" ? "var(--tui-background-accent-1)" : value);
    this.tuiAvatarOutline = input("");
  }
  static {
    this.ɵfac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutline)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatarOutline,
      selectors: [["", "tuiAvatarOutline", ""]],
      hostVars: 4,
      hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-fill", ctx.value());
          ɵɵclassProp("_outline", ctx.value());
        }
      },
      inputs: {
        tuiAvatarOutline: [1, "tuiAvatarOutline"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      selector: "[tuiAvatarOutline]",
      host: {
        "[class._outline]": "value()",
        "[style.--t-fill]": "value()"
      }
    }]
  }], null, null);
})();
var TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = input("end");
  }
  static {
    this.ɵfac = function TuiAvatarStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarStack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarStack,
      selectors: [["tui-avatar-stack"]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 1,
      hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.direction());
        }
      },
      inputs: {
        direction: [1, "direction"]
      },
      ngContentSelectors: _c03,
      decls: 1,
      vars: 0,
      template: function TuiAvatarStack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['tui-avatar-stack:where(*[data-tui-version="5.15.0"]){display:flex;--t-gap: .125rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]{--t-offset: 2.5rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=l]{--t-offset: 1.5rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=m]{--t-offset: .75rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=s]{--t-offset: .575rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=xs]{--t-offset: .375rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: 1}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]:not(._round),tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      selector: "tui-avatar-stack",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-direction]": "direction()"
      },
      styles: ['tui-avatar-stack:where(*[data-tui-version="5.15.0"]){display:flex;--t-gap: .125rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]{--t-offset: 2.5rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=l]{--t-offset: 1.5rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=m]{--t-offset: .75rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=s]{--t-offset: .575rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar][data-size=xs]{--t-offset: .375rem}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: 1}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=start] [tuiAvatar]:not(._round),tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.15.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack:where(*[data-tui-version="5.15.0"]) [tuiAvatar]:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-card.mjs
var _c04 = "[tuiCardMedium],[tuiCardLarge]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flex;align-items:flex-start;flex-shrink:0;text-decoration:none;overflow:hidden;background:var(--tui-background-elevation-2)}[tuiCardMedium] [tuiTitle],[tuiCardLarge] [tuiTitle],[tuiCardMedium] [tuiSubtitle],[tuiCardLarge] [tuiSubtitle]{max-inline-size:100%}[tuiCardMedium]>*,[tuiCardLarge]>*{scrollbar-width:none;-ms-overflow-style:none}[tuiCardMedium]>*::-webkit-scrollbar,[tuiCardLarge]>*::-webkit-scrollbar,[tuiCardMedium]>*::-webkit-scrollbar-thumb,[tuiCardLarge]>*::-webkit-scrollbar-thumb{display:none}\n";
var Styles$3 = class Styles7 {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Styles7)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: Styles7,
      selectors: [["ng-component"]],
      exportAs: ["tui-card-collapsed-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"]){transition-property:clip-path,margin!important;border-image:radial-gradient(at top,var(--tui-background-neutral-2) 26.5%,transparent 27%) 100% 49% / 0 2rem 2rem / 0 0 2rem}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand{transition-property:grid-template-rows,padding,margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);background:var(--tui-background-neutral-1);border-radius:var(--tui-radius-s);padding:0 1rem;margin:-.25rem 0 calc(-1 * var(--t-space))!important}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand._expanded{padding:.5rem 1rem;margin:0!important}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable]{inline-size:100%}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] th,[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] td{background:none;padding-inline-start:0;padding-inline-end:0;border-inline-start:0;border-inline-end:0}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] thead th{border:none;block-size:1.75rem}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] tr:last-child td{border-block-end:0}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$3, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-card-collapsed-${TUI_VERSION}`,
      styles: ['[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"]){transition-property:clip-path,margin!important;border-image:radial-gradient(at top,var(--tui-background-neutral-2) 26.5%,transparent 27%) 100% 49% / 0 2rem 2rem / 0 0 2rem}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand{transition-property:grid-template-rows,padding,margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);background:var(--tui-background-neutral-1);border-radius:var(--tui-radius-s);padding:0 1rem;margin:-.25rem 0 calc(-1 * var(--t-space))!important}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand._expanded{padding:.5rem 1rem;margin:0!important}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable]{inline-size:100%}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] th,[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] td{background:none;padding-inline-start:0;padding-inline-end:0;border-inline-start:0;border-inline-end:0}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] thead th{border:none;block-size:1.75rem}[tuiCardCollapsed]:where(*[data-tui-version="5.15.0"])>tui-expand [tuiTable] tr:last-child td{border-block-end:0}\n']
    }]
  }], null, null);
})();
var TuiCardCollapsed = class _TuiCardCollapsed {
  constructor() {
    this.nothing = tuiWithStyles(Styles$3);
    this.collapsed = input(false, {
      alias: "tuiCardCollapsed"
    });
  }
  static {
    this.ɵfac = function TuiCardCollapsed_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCardCollapsed)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCardCollapsed,
      selectors: [["", "tuiCardCollapsed", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiCardCollapsed", ""],
      hostVars: 4,
      hostBindings: function TuiCardCollapsed_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("clip-path", ctx.collapsed() ? "inset(-0.75rem)" : "inset(0)")("margin-block-end", ctx.collapsed() ? 0.75 : 0, "rem");
        }
      },
      inputs: {
        collapsed: [1, "tuiCardCollapsed", "collapsed"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCardCollapsed, [{
    type: Directive,
    args: [{
      selector: "[tuiCardCollapsed]",
      host: {
        "data-tui-version": TUI_VERSION,
        tuiCardCollapsed: "",
        "[style.clip-path]": 'collapsed() ? "inset(-0.75rem)" : "inset(0)"',
        "[style.margin-block-end.rem]": "collapsed() ? 0.75 : 0"
      }
    }]
  }], null, null);
})();
var TUI_CARD_DEFAULT_OPTIONS = {
  appearance: "",
  space: "normal"
};
var [TUI_CARD_OPTIONS, tuiCardOptionsProvider] = tuiCreateOptions(TUI_CARD_DEFAULT_OPTIONS);
var Styles$2 = class Styles8 {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Styles8)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: Styles8,
      selectors: [["ng-component"]],
      exportAs: ["tui-card-large-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template1(rf, ctx) {
      },
      styles: ["[tuiCardMedium],[tuiCardLarge]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flex;align-items:flex-start;flex-shrink:0;text-decoration:none;overflow:hidden;background:var(--tui-background-elevation-2)}[tuiCardMedium] [tuiTitle],[tuiCardLarge] [tuiTitle],[tuiCardMedium] [tuiSubtitle],[tuiCardLarge] [tuiSubtitle]{max-inline-size:100%}[tuiCardMedium]>*,[tuiCardLarge]>*{scrollbar-width:none;-ms-overflow-style:none}[tuiCardMedium]>*::-webkit-scrollbar,[tuiCardLarge]>*::-webkit-scrollbar,[tuiCardMedium]>*::-webkit-scrollbar-thumb,[tuiCardLarge]>*::-webkit-scrollbar-thumb{display:none}\n", '[tuiCardLarge]:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-body-m)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]){--t-space: .75rem;--t-radius: var(--tui-radius-l);--t-comp: -.25rem;--t-padding: .75rem;--t-dim: calc(var(--t-padding) + var(--t-comp));padding:var(--t-padding);border-radius:var(--t-radius);box-sizing:border-box;text-align:start}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[data-space=normal]{--t-radius: 1.5rem;--t-padding: 1.5rem;--t-space: 1.5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[data-space=compact]{--t-radius: 1rem;--t-padding: 1.25rem;--t-space: 1.25rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]):not([tuiCell],[tuiHeader],[tuiForm]){flex-direction:column;gap:var(--t-space);align-items:stretch}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]):not([tuiCell],[tuiHeader],[tuiForm])>:last-child:not([tuiCell]){margin-block-start:auto}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader]{padding:var(--t-dim) var(--t-padding)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] [tuiButton]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] [tuiAvatar]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] [tuiSwitch]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] tui-segmented:last-child{margin-inline-end:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader]{margin:var(--t-comp) 0 calc(2 * var(--t-comp))}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] [tuiButton]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] [tuiAvatar]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] [tuiSwitch]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] tui-segmented:last-child{margin-inline-end:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiCell]:not(:where(tui-textfield *)){inline-size:100%;margin:-.5rem -.5rem -.75rem;border-radius:var(--tui-radius-l);--t-pad: .5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiCell]:not(:where(tui-textfield *)):last-of-type{margin-block-end:-.5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiHeader]+[tuiDescription]{margin-block:-.5rem -.25rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiHeader]+[tuiCell]{margin-block-start:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]>[tuiButtonX]{align-self:flex-start;--t-size: 1.5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>footer{margin-block-end:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>footer>[tuiButton],[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>footer>[tuiBlock]{margin-block-end:calc(-1 * var(--t-comp))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$2, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-card-large-${TUI_VERSION}`,
      styles: ["[tuiCardMedium],[tuiCardLarge]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flex;align-items:flex-start;flex-shrink:0;text-decoration:none;overflow:hidden;background:var(--tui-background-elevation-2)}[tuiCardMedium] [tuiTitle],[tuiCardLarge] [tuiTitle],[tuiCardMedium] [tuiSubtitle],[tuiCardLarge] [tuiSubtitle]{max-inline-size:100%}[tuiCardMedium]>*,[tuiCardLarge]>*{scrollbar-width:none;-ms-overflow-style:none}[tuiCardMedium]>*::-webkit-scrollbar,[tuiCardLarge]>*::-webkit-scrollbar,[tuiCardMedium]>*::-webkit-scrollbar-thumb,[tuiCardLarge]>*::-webkit-scrollbar-thumb{display:none}\n", '[tuiCardLarge]:where(*[data-tui-version="5.15.0"]){font:var(--tui-typography-body-m)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]){--t-space: .75rem;--t-radius: var(--tui-radius-l);--t-comp: -.25rem;--t-padding: .75rem;--t-dim: calc(var(--t-padding) + var(--t-comp));padding:var(--t-padding);border-radius:var(--t-radius);box-sizing:border-box;text-align:start}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[data-space=normal]{--t-radius: 1.5rem;--t-padding: 1.5rem;--t-space: 1.5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[data-space=compact]{--t-radius: 1rem;--t-padding: 1.25rem;--t-space: 1.25rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]):not([tuiCell],[tuiHeader],[tuiForm]){flex-direction:column;gap:var(--t-space);align-items:stretch}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]):not([tuiCell],[tuiHeader],[tuiForm])>:last-child:not([tuiCell]){margin-block-start:auto}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader]{padding:var(--t-dim) var(--t-padding)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] [tuiButton]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] [tuiAvatar]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] [tuiSwitch]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])[tuiHeader] tui-segmented:last-child{margin-inline-end:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader]{margin:var(--t-comp) 0 calc(2 * var(--t-comp))}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] [tuiButton]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] [tuiAvatar]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] [tuiSwitch]:last-child,[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>[tuiHeader] tui-segmented:last-child{margin-inline-end:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiCell]:not(:where(tui-textfield *)){inline-size:100%;margin:-.5rem -.5rem -.75rem;border-radius:var(--tui-radius-l);--t-pad: .5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiCell]:not(:where(tui-textfield *)):last-of-type{margin-block-end:-.5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiHeader]+[tuiDescription]{margin-block:-.5rem -.25rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiHeader]+[tuiCell]{margin-block-start:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]>[tuiButtonX]{align-self:flex-start;--t-size: 1.5rem}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>footer{margin-block-end:var(--t-comp)}[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>footer>[tuiButton],[tuiCardLarge][data-space]:where(*[data-tui-version="5.15.0"])>footer>[tuiBlock]{margin-block-end:calc(-1 * var(--t-comp))}\n']
    }]
  }], null, null);
})();
var TuiCardLarge = class _TuiCardLarge {
  constructor() {
    this.options = inject(TUI_CARD_OPTIONS);
    this.nothing = tuiWithStyles(Styles$2);
    this.tuiCardLarge = input(this.options.space);
  }
  static {
    this.ɵfac = function TuiCardLarge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCardLarge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCardLarge,
      selectors: [["", "tuiCardLarge", ""]],
      hostAttrs: ["tuiCardLarge", ""],
      hostVars: 1,
      hostBindings: function TuiCardLarge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-space", ctx.tuiCardLarge() || ctx.options.space);
        }
      },
      inputs: {
        tuiCardLarge: [1, "tuiCardLarge"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_CARD_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiSurface])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCardLarge, [{
    type: Directive,
    args: [{
      selector: "[tuiCardLarge]",
      providers: [tuiAppearanceOptionsProvider(TUI_CARD_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiSurface],
      host: {
        tuiCardLarge: "",
        "[attr.data-space]": "tuiCardLarge() || this.options.space"
      }
    }]
  }], null, null);
})();
var Styles$12 = class Styles9 {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Styles9)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: Styles9,
      selectors: [["ng-component"]],
      exportAs: ["tui-card-medium-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template2(rf, ctx) {
      },
      styles: [_c04, '[tuiCardMedium]:where(*[data-tui-version="5.15.0"]){inline-size:calc(8.75rem * var(--tui-font-scale));block-size:calc(8.75rem * var(--tui-font-scale));flex-direction:column;justify-content:space-between;padding:.75rem;border-radius:var(--tui-radius-l);box-sizing:border-box}[tuiCardMedium]:where(*[data-tui-version="5.15.0"])[tuiTitle]{padding:.625rem .75rem}[tuiCardMedium]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin:-.125rem 0}[tuiCardMedium]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-primary)}[tuiCardMedium]:where(*[data-tui-version="5.15.0"])[tuiTitle],[tuiCardMedium]:where(*[data-tui-version="5.15.0"]) [tuiTitle]:not([tuiCell] *):not([tuiLabel] *){font-weight:700}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$12, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-card-medium-${TUI_VERSION}`,
      styles: ["[tuiCardMedium],[tuiCardLarge]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flex;align-items:flex-start;flex-shrink:0;text-decoration:none;overflow:hidden;background:var(--tui-background-elevation-2)}[tuiCardMedium] [tuiTitle],[tuiCardLarge] [tuiTitle],[tuiCardMedium] [tuiSubtitle],[tuiCardLarge] [tuiSubtitle]{max-inline-size:100%}[tuiCardMedium]>*,[tuiCardLarge]>*{scrollbar-width:none;-ms-overflow-style:none}[tuiCardMedium]>*::-webkit-scrollbar,[tuiCardLarge]>*::-webkit-scrollbar,[tuiCardMedium]>*::-webkit-scrollbar-thumb,[tuiCardLarge]>*::-webkit-scrollbar-thumb{display:none}\n", '[tuiCardMedium]:where(*[data-tui-version="5.15.0"]){inline-size:calc(8.75rem * var(--tui-font-scale));block-size:calc(8.75rem * var(--tui-font-scale));flex-direction:column;justify-content:space-between;padding:.75rem;border-radius:var(--tui-radius-l);box-sizing:border-box}[tuiCardMedium]:where(*[data-tui-version="5.15.0"])[tuiTitle]{padding:.625rem .75rem}[tuiCardMedium]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin:-.125rem 0}[tuiCardMedium]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-primary)}[tuiCardMedium]:where(*[data-tui-version="5.15.0"])[tuiTitle],[tuiCardMedium]:where(*[data-tui-version="5.15.0"]) [tuiTitle]:not([tuiCell] *):not([tuiLabel] *){font-weight:700}\n']
    }]
  }], null, null);
})();
var TuiCardMedium = class _TuiCardMedium {
  constructor() {
    this.nothing = tuiWithStyles(Styles$12);
  }
  static {
    this.ɵfac = function TuiCardMedium_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCardMedium)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCardMedium,
      selectors: [["", "tuiCardMedium", ""]],
      features: [ɵɵProvidersFeature([tuiAvatarOptionsProvider({
        size: "l"
      })]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiSurface])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCardMedium, [{
    type: Directive,
    args: [{
      selector: "[tuiCardMedium]",
      providers: [tuiAvatarOptionsProvider({
        size: "l"
      })],
      hostDirectives: [TuiWithAppearance, TuiSurface]
    }]
  }], null, null);
})();
var Styles10 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-card-row-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template3(rf, ctx) {
      },
      styles: ['[tuiCardRow]:where(*[data-tui-version="5.15.0"]){display:flex;align-items:center;gap:3rem}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) tui-icon{font-size:1rem}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{font:var(--tui-typography-body-s)}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) [tuiTitle]>:not([tuiSubtitle]){display:flex;align-items:center;gap:.25rem}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary);font:var(--tui-typography-body-xs)}[tuiCardRow]:where(*[data-tui-version="5.15.0"])>[tuiButton],[tuiCardRow]:where(*[data-tui-version="5.15.0"])>[tuiIconButton]{margin-inline-start:auto}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles10, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-card-row-${TUI_VERSION}`,
      styles: ['[tuiCardRow]:where(*[data-tui-version="5.15.0"]){display:flex;align-items:center;gap:3rem}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) tui-icon{font-size:1rem}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{font:var(--tui-typography-body-s)}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) [tuiTitle]>:not([tuiSubtitle]){display:flex;align-items:center;gap:.25rem}[tuiCardRow]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary);font:var(--tui-typography-body-xs)}[tuiCardRow]:where(*[data-tui-version="5.15.0"])>[tuiButton],[tuiCardRow]:where(*[data-tui-version="5.15.0"])>[tuiIconButton]{margin-inline-start:auto}\n']
    }]
  }], null, null);
})();
var TuiCardRow = class _TuiCardRow {
  constructor() {
    this.nothing = tuiWithStyles(Styles10);
  }
  static {
    this.ɵfac = function TuiCardRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCardRow)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCardRow,
      selectors: [["", "tuiCardRow", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCardRow, [{
    type: Directive,
    args: [{
      selector: "[tuiCardRow]",
      host: {
        "data-tui-version": TUI_VERSION
      }
    }]
  }], null, null);
})();
var TuiCard = [TuiCardLarge, TuiCardMedium, TuiCardCollapsed, TuiCardRow];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-dynamic-header.mjs
var _c05 = ["*"];
function TuiDynamicHeaderComponent_For_1_Conditional_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate(text_r1);
  }
}
function TuiDynamicHeaderComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtemplate(1, TuiDynamicHeaderComponent_For_1_Conditional_0_div_1_Template, 2, 1, "div", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const header_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", header_r2);
  }
}
function TuiDynamicHeaderComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiDynamicHeaderComponent_For_1_Conditional_0_Template, 2, 1, "div", 0);
  }
  if (rf & 2) {
    const ɵ$index_1_r3 = ctx.$index;
    const ɵ$count_1_r4 = ctx.$count;
    ɵɵconditional(ɵ$index_1_r3 === ɵ$count_1_r4 - 1 ? 0 : -1);
  }
}
function TuiDynamicHeaderComponent_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
var TuiDynamicHeaderContainerDirective = class _TuiDynamicHeaderContainerDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.headers = signal([]);
    this.hiddenHeaders = signal([]);
    this.scrollDir = toSignal(fromEvent(this.el, "scroll").pipe(map(({
      target
    }) => target.scrollTop), pairwise(), map(([prev, next]) => next > prev ? -1 : 1), distinctUntilChanged(), tuiZoneOptimized()));
  }
  register(anchor) {
    this.headers.update((headers) => [...headers, anchor]);
  }
  unregister(anchor) {
    this.headers.update((headers) => headers.filter((h) => h !== anchor));
  }
  update() {
    this.hiddenHeaders.set(this.headers().filter((h) => h.visible()).map((h) => h.templateRef));
  }
  static {
    this.ɵfac = function TuiDynamicHeaderContainerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDynamicHeaderContainerDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDynamicHeaderContainerDirective,
      selectors: [["", "tuiDynamicHeaderContainer", ""]],
      hostAttrs: ["waIntersectionRootMargin", "-44px 0px 1000000% 0px"],
      features: [ɵɵHostDirectivesFeature([WaIntersectionRoot, WaIntersectionObserverDirective])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDynamicHeaderContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDynamicHeaderContainer]",
      hostDirectives: [WaIntersectionRoot, WaIntersectionObserverDirective],
      host: {
        waIntersectionRootMargin: "-44px 0px 1000000% 0px"
      }
    }]
  }], null, null);
})();
var TuiDynamicHeaderComponent = class _TuiDynamicHeaderComponent {
  constructor() {
    this.container = inject(TuiDynamicHeaderContainerDirective);
  }
  static {
    this.ɵfac = function TuiDynamicHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDynamicHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDynamicHeaderComponent,
      selectors: [["", "tuiDynamicHeader", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 2,
      hostBindings: function TuiDynamicHeaderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-dir", ctx.container.scrollDir() || -1);
        }
      },
      ngContentSelectors: _c05,
      decls: 3,
      vars: 1,
      consts: [["tuiAnimated", ""], [4, "polymorpheusOutlet"]],
      template: function TuiDynamicHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵrepeaterCreate(0, TuiDynamicHeaderComponent_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity, false, TuiDynamicHeaderComponent_ForEmpty_2_Template, 2, 0, "div", 0);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.container.hiddenHeaders());
        }
      },
      dependencies: [PolymorpheusOutlet, TuiAnimated],
      styles: ['[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]){display:flex;block-size:100%;align-items:center;justify-content:center}[data-platform=android] [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]){justify-content:start}[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-enter{animation-name:tuiFade,tuiSlide;--tui-from: translateY(calc(-200% * var(--t-dir)))}[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-leave{animation-name:tuiFade,tuiSlide;--tui-from: translateY(calc(200% * var(--t-dir)))}[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-enter:not(:first-of-type),[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-leave:not(:first-of-type){position:absolute}[data-platform=ios].tui-liquid-glass [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]){--t-duration: calc(var(--tui-duration) * 5 / 3)}[data-platform=ios].tui-liquid-glass [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-enter{animation-name:tuiFade,tuiSlide,tuiBlur;--tui-duration: var(--t-duration);--tui-from: translateY(calc(-50% * var(--t-dir)))}[data-platform=ios].tui-liquid-glass [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-leave{animation-name:tuiFade,tuiSlide,tuiBlur;--tui-duration: var(--t-duration);--tui-from: translateY(calc(50% * var(--t-dir)))}[data-tui-version="5.15.0"] [data-platform=ios].tui-liquid-glass [tuiDynamicHeaderContainer] [tuiHeader],[data-tui-version="5.15.0"] [data-platform=ios].tui-liquid-glass [tuiDynamicHeaderContainer] [tuiHeader] [tuiTitle]{transition:opacity var(--tui-duration) linear}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDynamicHeaderComponent, [{
    type: Component,
    args: [{
      selector: "[tuiDynamicHeader]",
      imports: [PolymorpheusOutlet, TuiAnimated],
      template: `
        @for (header of container.hiddenHeaders(); track header) {
            @if ($last) {
                <div tuiAnimated>
                    <div *polymorpheusOutlet="header as text">{{ text }}</div>
                </div>
            }
        } @empty {
            <div tuiAnimated>
                <ng-content />
            </div>
        }
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION,
        "[style.--t-dir]": "container.scrollDir() || -1"
      },
      styles: ['[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]){display:flex;block-size:100%;align-items:center;justify-content:center}[data-platform=android] [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]){justify-content:start}[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-enter{animation-name:tuiFade,tuiSlide;--tui-from: translateY(calc(-200% * var(--t-dir)))}[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-leave{animation-name:tuiFade,tuiSlide;--tui-from: translateY(calc(200% * var(--t-dir)))}[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-enter:not(:first-of-type),[tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-leave:not(:first-of-type){position:absolute}[data-platform=ios].tui-liquid-glass [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]){--t-duration: calc(var(--tui-duration) * 5 / 3)}[data-platform=ios].tui-liquid-glass [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-enter{animation-name:tuiFade,tuiSlide,tuiBlur;--tui-duration: var(--t-duration);--tui-from: translateY(calc(-50% * var(--t-dir)))}[data-platform=ios].tui-liquid-glass [tuiDynamicHeader]:where(*[data-tui-version="5.15.0"]) .tui-leave{animation-name:tuiFade,tuiSlide,tuiBlur;--tui-duration: var(--t-duration);--tui-from: translateY(calc(50% * var(--t-dir)))}[data-tui-version="5.15.0"] [data-platform=ios].tui-liquid-glass [tuiDynamicHeaderContainer] [tuiHeader],[data-tui-version="5.15.0"] [data-platform=ios].tui-liquid-glass [tuiDynamicHeaderContainer] [tuiHeader] [tuiTitle]{transition:opacity var(--tui-duration) linear}\n']
    }]
  }], null, null);
})();
var TuiDynamicHeaderAnchorDirective = class _TuiDynamicHeaderAnchorDirective {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.observer = inject(WaIntersectionObserverDirective);
    this.container = inject(TuiDynamicHeaderContainerDirective);
    this.templateRef = inject(TemplateRef);
    this.view = this.vcr.createEmbeddedView(this.templateRef);
    this.visible = signal(false);
  }
  ngAfterViewInit() {
    this.container.register(this);
    this.observer.observe(this.view.rootNodes[0], ([e]) => {
      const isIntersecting = e?.isIntersecting ?? false;
      const target = e?.target;
      this.visible.set(!isIntersecting);
      if (isIntersecting) {
        target.style.removeProperty("opacity");
      } else {
        target.style.setProperty("opacity", "0");
      }
      this.container.update();
    });
  }
  ngOnDestroy() {
    this.observer.unobserve(this.view.rootNodes[0]);
    this.container.unregister(this);
  }
  static {
    this.ɵfac = function TuiDynamicHeaderAnchorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDynamicHeaderAnchorDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDynamicHeaderAnchorDirective,
      selectors: [["", "tuiDynamicHeaderAnchor", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDynamicHeaderAnchorDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDynamicHeaderAnchor]"
    }]
  }], null, null);
})();
var TuiDynamicHeader = [TuiDynamicHeaderComponent, TuiDynamicHeaderAnchorDirective, TuiDynamicHeaderContainerDirective];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-elastic-container.mjs
var _c06 = ["*"];
var TuiElasticContainerDirective = class _TuiElasticContainerDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.tuiElasticContainer = outputFromObservable(merge(inject(WaResizeObserverService), inject(WaMutationObserverService)).pipe(debounceTime(0), map(() => this.el.clientHeight - 1), distinctUntilChanged()));
  }
  static {
    this.ɵfac = function TuiElasticContainerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElasticContainerDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiElasticContainerDirective,
      selectors: [["", "tuiElasticContainer", ""]],
      outputs: {
        tuiElasticContainer: "tuiElasticContainer"
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElasticContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiElasticContainer]",
      providers: [WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]
    }]
  }], null, null);
})();
var TuiElasticContainer = class _TuiElasticContainer {
  constructor() {
    this.height = signal("");
    this.transitions = signal(0);
  }
  onAnimation(name, count) {
    if (["grid-template-rows", "height"].includes(name)) {
      this.transitions.update((value) => value + count);
    }
  }
  updateHeight(height) {
    this.height.set(tuiPx(height));
  }
  static {
    this.ɵfac = function TuiElasticContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElasticContainer)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiElasticContainer,
      selectors: [["tui-elastic-container"]],
      hostVars: 2,
      hostBindings: function TuiElasticContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("block-size", ctx.transitions() ? "auto" : ctx.height());
        }
      },
      ngContentSelectors: _c06,
      decls: 2,
      vars: 0,
      consts: [[1, "t-wrapper", 3, "transitioncancel", "transitionend", "transitionstart", "tuiElasticContainer"]],
      template: function TuiElasticContainer_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("transitioncancel", function TuiElasticContainer_Template_div_transitioncancel_0_listener($event) {
            return ctx.onAnimation($event.propertyName, -1);
          })("transitionend", function TuiElasticContainer_Template_div_transitionend_0_listener($event) {
            return ctx.onAnimation($event.propertyName, -1);
          })("transitionstart", function TuiElasticContainer_Template_div_transitionstart_0_listener($event) {
            return ctx.onAnimation($event.propertyName, 1);
          })("tuiElasticContainer", function TuiElasticContainer_Template_div_tuiElasticContainer_0_listener($event) {
            return ctx.updateHeight($event);
          });
          ɵɵprojection(1);
          ɵɵelementEnd();
        }
      },
      dependencies: [TuiElasticContainerDirective],
      styles: ['[_nghost-%COMP%]{transition-property:height;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:block;overflow:hidden;flex-direction:inherit;gap:inherit}.t-wrapper[_ngcontent-%COMP%]{display:inherit;padding-block-start:1px;margin-block-start:-1px;flex-direction:inherit;gap:inherit}.t-wrapper[_ngcontent-%COMP%]:before{content:""}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElasticContainer, [{
    type: Component,
    args: [{
      selector: "tui-elastic-container",
      imports: [TuiElasticContainerDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.block-size]": 'transitions() ? "auto" : height()'
      },
      template: '<div\n    class="t-wrapper"\n    (transitioncancel)="onAnimation($event.propertyName, -1)"\n    (transitionend)="onAnimation($event.propertyName, -1)"\n    (transitionstart)="onAnimation($event.propertyName, 1)"\n    (tuiElasticContainer)="updateHeight($event)"\n>\n    <ng-content />\n</div>\n',
      styles: [':host{transition-property:height;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:block;overflow:hidden;flex-direction:inherit;gap:inherit}.t-wrapper{display:inherit;padding-block-start:1px;margin-block-start:-1px;flex-direction:inherit;gap:inherit}.t-wrapper:before{content:""}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-floating-container.mjs
var Styles11 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-floating-container-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]){transition-property:inset-block-end;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:sticky;z-index:1;display:grid;inset-block-end:max(0px,calc(100 * var(--tui-viewport-svh) - var(--tui-viewport-height) - var(--tui-viewport-y)));inset-block-end:max(0px,calc(100svh - var(--tui-viewport-height) - var(--tui-viewport-y)));margin-block-start:1rem;padding-block-end:max(1rem,env(safe-area-inset-bottom));text-align:center;font:var(--tui-typography-ui-s);color:var(--tui-text-secondary)}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]).tui-enter,[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]).tui-leave{animation-name:tuiSlide}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"])>*{grid-area:2 / 1}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"])>*:first-child{grid-row:1;margin-block-end:.5rem}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]):before{inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;z-index:-1;inset-inline-start:-1rem;inset-inline-end:-1rem;background:var(--t-background, var(--tui-background-elevation-1));-webkit-mask-image:linear-gradient(180deg,transparent,black 2.5rem);mask-image:linear-gradient(180deg,transparent,black 2.5rem)}tui-sheet-dialog [tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]){margin-block-end:calc(-1*max(1.5rem,env(safe-area-inset-bottom)))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles11, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-floating-container-${TUI_VERSION}`,
      styles: ['[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]){transition-property:inset-block-end;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:sticky;z-index:1;display:grid;inset-block-end:max(0px,calc(100 * var(--tui-viewport-svh) - var(--tui-viewport-height) - var(--tui-viewport-y)));inset-block-end:max(0px,calc(100svh - var(--tui-viewport-height) - var(--tui-viewport-y)));margin-block-start:1rem;padding-block-end:max(1rem,env(safe-area-inset-bottom));text-align:center;font:var(--tui-typography-ui-s);color:var(--tui-text-secondary)}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]).tui-enter,[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]).tui-leave{animation-name:tuiSlide}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"])>*{grid-area:2 / 1}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"])>*:first-child{grid-row:1;margin-block-end:.5rem}[tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]):before{inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;z-index:-1;inset-inline-start:-1rem;inset-inline-end:-1rem;background:var(--t-background, var(--tui-background-elevation-1));-webkit-mask-image:linear-gradient(180deg,transparent,black 2.5rem);mask-image:linear-gradient(180deg,transparent,black 2.5rem)}tui-sheet-dialog [tuiFloatingContainer]:where(*[data-tui-version="5.15.0"]){margin-block-end:calc(-1*max(1.5rem,env(safe-area-inset-bottom)))}\n']
    }]
  }], null, null);
})();
var TuiFloatingContainer = class _TuiFloatingContainer {
  constructor() {
    this.nothing = tuiWithStyles(Styles11);
    this.background = input("", {
      alias: "tuiFloatingContainer"
    });
  }
  static {
    this.ɵfac = function TuiFloatingContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFloatingContainer)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFloatingContainer,
      selectors: [["", "tuiFloatingContainer", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiFloatingContainer", ""],
      hostVars: 2,
      hostBindings: function TuiFloatingContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-background", ctx.background());
        }
      },
      inputs: {
        background: [1, "tuiFloatingContainer", "background"]
      },
      features: [ɵɵHostDirectivesFeature([TuiAnimated])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFloatingContainer, [{
    type: Directive,
    args: [{
      selector: "[tuiFloatingContainer]",
      hostDirectives: [TuiAnimated],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiFloatingContainer: "",
        "[style.--t-background]": "background()"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-block.mjs
var TUI_BLOCK_DEFAULT_OPTIONS = {
  appearance: "outline-grayscale",
  size: "l"
};
var [TUI_BLOCK_OPTIONS, tuiBlockOptionsProvider] = tuiCreateOptions(TUI_BLOCK_DEFAULT_OPTIONS);
var Styles12 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-block-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiBlock]:where(*[data-tui-version="5.15.0"]){--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;align-items:center;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-typography-body-m);padding:var(--tui-padding-l);isolation:isolate}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s]{gap:.5rem;font:var(--tui-typography-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s]:before,[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{font-size:1rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m]{gap:.625rem;font:var(--tui-typography-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m]:before,[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m]:after{margin:-.125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]:where(*[data-tui-version="5.15.0"])._disabled :focus{visibility:hidden}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-appearance=""]{justify-content:center}[tuiBlock]:where(*[data-tui-version="5.15.0"]) input[tuiBlock]{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;z-index:-1;min-block-size:0;pointer-events:none;border-radius:inherit;padding:0}[tuiBlock]:where(*[data-tui-version="5.15.0"]) input[tuiBlock][type=file]{opacity:0}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiAvatar]{margin:-.25rem}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}[tuiBlock]:where(*[data-tui-version="5.15.0"]):before,[tuiBlock]:where(*[data-tui-version="5.15.0"]):after,[tuiBlock]:where(*[data-tui-version="5.15.0"]) :where(:is(input[type=checkbox],input[type=radio])){align-self:flex-start}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles12, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-block-${TUI_VERSION}`,
      styles: ['[tuiBlock]:where(*[data-tui-version="5.15.0"]){--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;align-items:center;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-typography-body-m);padding:var(--tui-padding-l);isolation:isolate}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s]{gap:.5rem;font:var(--tui-typography-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s]:before,[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{font-size:1rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m]{gap:.625rem;font:var(--tui-typography-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m]:before,[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m]:after{margin:-.125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.15.0"])._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]:where(*[data-tui-version="5.15.0"])._disabled :focus{visibility:hidden}[tuiBlock]:where(*[data-tui-version="5.15.0"])[data-appearance=""]{justify-content:center}[tuiBlock]:where(*[data-tui-version="5.15.0"]) input[tuiBlock]{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;z-index:-1;min-block-size:0;pointer-events:none;border-radius:inherit;padding:0}[tuiBlock]:where(*[data-tui-version="5.15.0"]) input[tuiBlock][type=file]{opacity:0}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiAvatar]{margin:-.25rem}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock]:where(*[data-tui-version="5.15.0"]) [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}[tuiBlock]:where(*[data-tui-version="5.15.0"]):before,[tuiBlock]:where(*[data-tui-version="5.15.0"]):after,[tuiBlock]:where(*[data-tui-version="5.15.0"]) :where(:is(input[type=checkbox],input[type=radio])){align-self:flex-start}\n']
    }]
  }], null, null);
})();
var TuiBlock = class _TuiBlock {
  constructor() {
    this.nothing = tuiWithStyles(Styles12);
    this.options = inject(TUI_BLOCK_OPTIONS);
    this.control = contentChild(NgControl);
    this.size = input(this.options.size, {
      alias: "tuiBlock"
    });
  }
  static {
    this.ɵfac = function TuiBlock_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlock)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlock,
      selectors: [["label", "tuiBlock", ""], ["input", "tuiBlock", ""]],
      contentQueries: function TuiBlock_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.control, NgControl, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["tuiBlock", ""],
      hostVars: 3,
      hostBindings: function TuiBlock_HostBindings(rf, ctx) {
        if (rf & 2) {
          let tmp_1_0;
          ɵɵattribute("data-size", ctx.size() || ctx.options.size || "l");
          ɵɵclassProp("_disabled", !!((tmp_1_0 = ctx.control()) == null ? null : tmp_1_0.disabled));
        }
      },
      inputs: {
        size: [1, "tuiBlock", "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlock, [{
    type: Directive,
    args: [{
      selector: "label[tuiBlock],input[tuiBlock]",
      providers: [tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
      host: {
        tuiBlock: "",
        "[attr.data-size]": 'size() || this.options.size || "l"',
        "[class._disabled]": "!!this.control()?.disabled"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge-notification.mjs
var _c07 = ["*"];
var TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS = {
  size: "m"
};
var [TUI_BADGE_NOTIFICATION_OPTIONS, tuiBadgeNotificationOptionsProvider] = tuiCreateOptions(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
var TuiBadgeNotification = class _TuiBadgeNotification {
  constructor() {
    this.size = input(inject(TUI_BADGE_NOTIFICATION_OPTIONS).size);
  }
  static {
    this.ɵfac = function TuiBadgeNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgeNotification)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgeNotification,
      selectors: [["tui-badge-notification"]],
      hostVars: 1,
      hostBindings: function TuiBadgeNotification_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵHostDirectivesFeature([TuiAnimated])],
      ngContentSelectors: _c07,
      decls: 1,
      vars: 0,
      template: function TuiBadgeNotification_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["[_nghost-%COMP%]{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-ui-s);max-inline-size:100%;padding:.0625rem .3125rem;background:var(--tui-status-negative);block-size:var(--t-size);min-block-size:var(--tui-lh);min-inline-size:max(var(--t-size),var(--tui-lh))}.tui-enter[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}.tui-leave[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) ease-in-out reverse}[data-size=m][_nghost-%COMP%]{--t-size: 1.25rem;padding:.0625rem .25rem}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-ui-xs)}[data-size=xs][_nghost-%COMP%]{--t-size: .375rem;padding:0;font-size:0}[_nghost-%COMP%]   [tuiIconButton][_nghost-%COMP%], [tuiIconButton]   [_nghost-%COMP%]{position:absolute;inset-inline-end:25%;inset-block-start:25%}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeNotification, [{
    type: Component,
    args: [{
      selector: "tui-badge-notification",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated],
      host: {
        "[attr.data-size]": "size()"
      },
      styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-ui-s);max-inline-size:100%;padding:.0625rem .3125rem;background:var(--tui-status-negative);block-size:var(--t-size);min-block-size:var(--tui-lh);min-inline-size:max(var(--t-size),var(--tui-lh))}:host.tui-enter{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}:host.tui-leave{animation:tuiScale var(--tui-duration) ease-in-out reverse}:host[data-size=m]{--t-size: 1.25rem;padding:.0625rem .25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-ui-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;inset-inline-end:25%;inset-block-start:25%}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-segmented.mjs
var _c08 = ["*"];
var TuiSegmentedDirective = class _TuiSegmentedDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.component = inject(TuiSegmented);
    this.el = tuiInjectElement();
    this.links = contentChildren(RouterLinkActive);
    this.elements = contentChildren(RouterLinkActive, {
      read: ElementRef
    });
    this.controls = contentChildren(NgControl, {
      descendants: true
    });
    this.controls$ = toObservable(this.controls);
    this.radios = contentChildren(RadioControlValueAccessor, {
      descendants: true
    });
  }
  ngAfterContentInit() {
    this.controls$.pipe(switchMap(([control]) => control ? tuiControlValue(control) : EMPTY), map((value) => this.radios().findIndex((c) => c.value === value)), takeUntilDestroyed(this.destroyRef)).subscribe((index) => this.component.update(index));
  }
  ngAfterContentChecked() {
    const index = this.links().findIndex(({
      isActive
    }) => isActive);
    if (index !== -1) {
      this.update(this.elements()[index]?.nativeElement || null);
    }
  }
  update(target) {
    this.component.update(Array.from(this.el.children).findIndex((tab) => tab.contains(target)));
  }
  static {
    this.ɵfac = function TuiSegmentedDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmentedDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSegmentedDirective,
      contentQueries: function TuiSegmentedDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.links, RouterLinkActive, 4)(dirIndex, ctx.elements, RouterLinkActive, 4, ElementRef)(dirIndex, ctx.controls, NgControl, 5)(dirIndex, ctx.radios, RadioControlValueAccessor, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(4);
        }
      },
      hostBindings: function TuiSegmentedDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiSegmentedDirective_click_HostBindingHandler($event) {
            return ctx.update($event.target);
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmentedDirective, [{
    type: Directive,
    args: [{
      host: {
        "(click)": "update($event.target)"
      }
    }]
  }], null, null);
})();
var [TUI_SEGMENTED_OPTIONS, tuiSegmentedOptionsProvider] = tuiCreateOptions({
  size: "s"
});
var TuiSegmented = class _TuiSegmented {
  constructor() {
    this.legacy = !inject(WA_CSS).supports("anchor-name", "--t-anchor");
    this.el = tuiInjectElement();
    this.anchorId = `--${tuiGenerateId()}`;
    this.sub = inject(WaResizeObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.size = input(inject(TUI_SEGMENTED_OPTIONS).size);
    this.activeItemIndex = model(0);
    this.disabled = input(false);
  }
  ngOnChanges() {
    this.refresh();
  }
  update(activeItemIndex) {
    if (activeItemIndex === this.activeItemIndex() || activeItemIndex < 0) {
      return;
    }
    this.activeItemIndex.set(activeItemIndex);
    this.refresh();
  }
  refresh() {
    const el = this.el.children.item(this.activeItemIndex());
    if (!tuiIsHTMLElement(el)) {
      return;
    }
    Array.from(this.el.children).forEach((e) => e.classList.remove("tui-segmented_active"));
    el.classList.add("tui-segmented_active");
    if (!this.legacy) {
      return;
    }
    const {
      offsetWidth,
      offsetLeft,
      offsetTop
    } = el;
    this.el.style.setProperty("--t-top", tuiPx(offsetTop));
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmented)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSegmented,
      selectors: [["tui-segmented"]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 4,
      hostBindings: function TuiSegmented_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size())("inert", ctx.disabled() ? "" : null);
          ɵɵstyleProp("--t-anchor", ctx.anchorId);
        }
      },
      inputs: {
        size: [1, "size"],
        activeItemIndex: [1, "activeItemIndex"],
        disabled: [1, "disabled"]
      },
      outputs: {
        activeItemIndex: "activeItemIndexChange"
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiSegmentedDirective]), ɵɵNgOnChangesFeature],
      ngContentSelectors: _c08,
      decls: 1,
      vars: 0,
      template: function TuiSegmented_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['tui-segmented:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;flex-shrink:0;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(#000,#000);mask-image:linear-gradient(#000,#000)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon{font-size:1rem}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-typography-body-l);border-radius:var(--tui-radius-l)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=l]>*:before{block-size:1.25rem}tui-segmented:where(*[data-tui-version="5.15.0"])[inert]{opacity:var(--tui-disabled-opacity);pointer-events:none}tui-segmented:where(*[data-tui-version="5.15.0"])>a,tui-segmented:where(*[data-tui-version="5.15.0"])>button,tui-segmented:where(*[data-tui-version="5.15.0"])>label,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;min-block-size:var(--t-height);block-size:100%;white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented:where(*[data-tui-version="5.15.0"])>a>*,tui-segmented:where(*[data-tui-version="5.15.0"])>button>*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented:where(*[data-tui-version="5.15.0"])>a:focus-visible,tui-segmented:where(*[data-tui-version="5.15.0"])>button:focus-visible,tui-segmented:where(*[data-tui-version="5.15.0"])>label:focus-visible,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media(hover:hover)and (pointer:fine){tui-segmented:where(*[data-tui-version="5.15.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented:where(*[data-tui-version="5.15.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.15.0"])>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}}tui-segmented:where(*[data-tui-version="5.15.0"])>a:active,tui-segmented:where(*[data-tui-version="5.15.0"])>button:active,tui-segmented:where(*[data-tui-version="5.15.0"])>label:active,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):active,tui-segmented:where(*[data-tui-version="5.15.0"])>a:active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>button:active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label:active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>a.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>button.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>label.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>a.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>button.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented:where(*[data-tui-version="5.15.0"])>.tui-segmented_active{anchor-name:var(--t-anchor)}tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]){position:absolute;inset:-.125rem;background:transparent!important}tui-segmented:where(*[data-tui-version="5.15.0"]):before{transition-property:inset,inline-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;inset:var(--t-top) auto auto var(--t-left);inset:anchor(start);position-anchor:var(--t-anchor);block-size:var(--t-height);block-size:anchor-size(block);inline-size:var(--t-width);inline-size:anchor-size(inline);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}@supports not (anchor-name: --t-anchor){[dir=rtl] tui-segmented:where(*[data-tui-version="5.15.0"]):before{inset-inline:auto var(--t-left)}}[tuiTheme=dark] tui-segmented:where(*[data-tui-version="5.15.0"]),tui-segmented[tuiTheme=dark]:where(*[data-tui-version="5.15.0"]){--tui-background-base: var(--tui-background-neutral-1-hover)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmented, [{
    type: Component,
    args: [{
      selector: "tui-segmented",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [WaResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiSegmentedDirective],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        "[attr.inert]": 'disabled() ? "" : null',
        "[style.--t-anchor]": "anchorId"
      },
      styles: ['tui-segmented:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;flex-shrink:0;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(#000,#000);mask-image:linear-gradient(#000,#000)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=s] tui-icon{font-size:1rem}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-typography-body-l);border-radius:var(--tui-radius-l)}tui-segmented:where(*[data-tui-version="5.15.0"])[data-size=l]>*:before{block-size:1.25rem}tui-segmented:where(*[data-tui-version="5.15.0"])[inert]{opacity:var(--tui-disabled-opacity);pointer-events:none}tui-segmented:where(*[data-tui-version="5.15.0"])>a,tui-segmented:where(*[data-tui-version="5.15.0"])>button,tui-segmented:where(*[data-tui-version="5.15.0"])>label,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;min-block-size:var(--t-height);block-size:100%;white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented:where(*[data-tui-version="5.15.0"])>a>*,tui-segmented:where(*[data-tui-version="5.15.0"])>button>*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented:where(*[data-tui-version="5.15.0"])>a:focus-visible,tui-segmented:where(*[data-tui-version="5.15.0"])>button:focus-visible,tui-segmented:where(*[data-tui-version="5.15.0"])>label:focus-visible,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media(hover:hover)and (pointer:fine){tui-segmented:where(*[data-tui-version="5.15.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented:where(*[data-tui-version="5.15.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.15.0"])>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.15.0"])>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}}tui-segmented:where(*[data-tui-version="5.15.0"])>a:active,tui-segmented:where(*[data-tui-version="5.15.0"])>button:active,tui-segmented:where(*[data-tui-version="5.15.0"])>label:active,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):active,tui-segmented:where(*[data-tui-version="5.15.0"])>a:active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>button:active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label:active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]):active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>a.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>button.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>label.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented:where(*[data-tui-version="5.15.0"])>a.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>button.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented:where(*[data-tui-version="5.15.0"])>.tui-segmented_active{anchor-name:var(--t-anchor)}tui-segmented:where(*[data-tui-version="5.15.0"])>label>input:not([tuiRadio]){position:absolute;inset:-.125rem;background:transparent!important}tui-segmented:where(*[data-tui-version="5.15.0"]):before{transition-property:inset,inline-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;inset:var(--t-top) auto auto var(--t-left);inset:anchor(start);position-anchor:var(--t-anchor);block-size:var(--t-height);block-size:anchor-size(block);inline-size:var(--t-width);inline-size:anchor-size(inline);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}@supports not (anchor-name: --t-anchor){[dir=rtl] tui-segmented:where(*[data-tui-version="5.15.0"]):before{inset-inline:auto var(--t-left)}}[tuiTheme=dark] tui-segmented:where(*[data-tui-version="5.15.0"]),tui-segmented[tuiTheme=dark]:where(*[data-tui-version="5.15.0"]){--tui-background-base: var(--tui-background-neutral-1-hover)}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-switch.mjs
var [TUI_SWITCH_OPTIONS, tuiSwitchOptionsProvider] = tuiCreateOptions({
  showIcons: true,
  size: "m",
  icon: () => "@tui.check",
  appearance: ({
    checked
  }) => checked ? "primary" : "secondary"
});
var TuiSwitch = class _TuiSwitch extends TuiRadioComponent {
  constructor() {
    super(...arguments);
    this.native = "switch" in this.el;
    this.icon = tuiIconStart(computed(() => this.showIcons() ? this.options.icon(this.size()) : ""));
    this.showIcons = input(this.options.showIcons);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSwitch_BaseFactory;
      return function TuiSwitch_Factory(__ngFactoryType__) {
        return (ɵTuiSwitch_BaseFactory || (ɵTuiSwitch_BaseFactory = ɵɵgetInheritedFactory(_TuiSwitch)))(__ngFactoryType__ || _TuiSwitch);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSwitch,
      selectors: [["input", "type", "checkbox", "tuiSwitch", ""]],
      hostAttrs: ["role", "switch", "switch", ""],
      hostVars: 2,
      hostBindings: function TuiSwitch_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_native", ctx.native);
        }
      },
      inputs: {
        showIcons: [1, "showIcons"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_RADIO_OPTIONS, TUI_SWITCH_OPTIONS)]), ɵɵHostDirectivesFeature([TuiIcons]), ɵɵInheritDefinitionFeature],
      decls: 0,
      vars: 0,
      template: function TuiSwitch_Template(rf, ctx) {
      },
      styles: ['[tuiSwitch]:where(*[data-tui-version="5.15.0"]){transition-property:background,box-shadow;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:inline-block;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{inline-size:1rem;transform:translate(calc(var(--tui-inline) * -1rem));font-size:.75rem}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inline-size:1rem;box-shadow:calc(var(--tui-inline) * -2.625rem) 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]:checked:after{transform:scale(.375) translate(calc(var(--tui-inline) * 2.625rem))}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):checked:before{transform:none}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):checked:after{transform:scale(.33333) translate(calc(var(--tui-inline) * 4.5rem))}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):disabled._readonly._readonly{opacity:1}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):before,[tuiSwitch]:where(*[data-tui-version="5.15.0"]):after{position:absolute;block-size:100%;inline-size:1.5rem;transition-property:transform;zoom:1}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):before{inset-inline-start:.125rem;font-size:1rem;transform:translate(calc(var(--tui-inline) * -1.5rem))}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):after{display:block;inset-inline-end:0;border-radius:100%;background:none;transform:scale(.33333);box-shadow:calc(var(--tui-inline) * -4.5rem) 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed)}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):not([data-icon-start]):after{outline-offset:20rem}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):invalid:not([data-mode]),[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-mode~=invalid]{color:#fff}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwitch, [{
    type: Component,
    args: [{
      selector: 'input[type="checkbox"][tuiSwitch]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_SWITCH_OPTIONS)],
      hostDirectives: [TuiIcons],
      host: {
        role: "switch",
        switch: "",
        "[class._native]": "native"
      },
      styles: ['[tuiSwitch]:where(*[data-tui-version="5.15.0"]){transition-property:background,box-shadow;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:inline-block;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]:before{inline-size:1rem;transform:translate(calc(var(--tui-inline) * -1rem));font-size:.75rem}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]:after{inline-size:1rem;box-shadow:calc(var(--tui-inline) * -2.625rem) 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-size=s]:checked:after{transform:scale(.375) translate(calc(var(--tui-inline) * 2.625rem))}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):checked:before{transform:none}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):checked:after{transform:scale(.33333) translate(calc(var(--tui-inline) * 4.5rem))}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):disabled._readonly._readonly{opacity:1}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):before,[tuiSwitch]:where(*[data-tui-version="5.15.0"]):after{position:absolute;block-size:100%;inline-size:1.5rem;transition-property:transform;zoom:1}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):before{inset-inline-start:.125rem;font-size:1rem;transform:translate(calc(var(--tui-inline) * -1.5rem))}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):after{display:block;inset-inline-end:0;border-radius:100%;background:none;transform:scale(.33333);box-shadow:calc(var(--tui-inline) * -4.5rem) 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed)}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):not([data-icon-start]):after{outline-offset:20rem}[tuiSwitch]:where(*[data-tui-version="5.15.0"]):invalid:not([data-mode]),[tuiSwitch]:where(*[data-tui-version="5.15.0"])[data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-header.mjs
var [TUI_HEADER_OPTIONS, tuiHeaderOptionsProvider] = tuiCreateOptions({
  size: "h5"
});
var Styles13 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-header-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiHeader]:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;align-items:flex-start;box-sizing:content-box;color:var(--tui-text-primary);margin:0;gap:.5rem 1rem;text-align:start;overflow-wrap:break-word}[tuiHeader]:where(*[data-tui-version="5.15.0"]) p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"]) p:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{max-inline-size:fit-content;flex:1 0 60%;margin:0;margin-inline-end:auto;font:inherit}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiTitle]:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]{display:flex;align-items:center;gap:.75rem;white-space:nowrap}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]:has([tuiLink]){align-items:baseline}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]:before{content:"\\200b";visibility:hidden;margin-inline-end:-.75rem}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiCaption]{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);font-weight:500;text-transform:uppercase;margin:0}[tuiHeader]:where(*[data-tui-version="5.15.0"])+[tuiDescription]{margin-block-start:.5rem;color:var(--tui-text-primary);font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1]{font:var(--tui-typography-heading-h1)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1]+[tuiDescription]{margin-block-start:.75rem}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2]{font:var(--tui-typography-heading-h2)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3]{font:var(--tui-typography-heading-h3)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h4]{font:var(--tui-typography-heading-h4)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h5]{font:var(--tui-typography-heading-h5)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h6]{font:var(--tui-typography-heading-h6)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-l]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-m]{font:var(--tui-typography-ui-l)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s]{font:var(--tui-typography-ui-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s] [tuiTitle]{gap:.125rem}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s]+[tuiDescription]{margin-block-start:.125rem}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-m] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-m] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s] [tuiAccessories] [tuiLink]{font:var(--tui-typography-body-s)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3]+[tuiDescription]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h4] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h5] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h6] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-l] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h4] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h5] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h6] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-l] [tuiAccessories] [tuiLink]{font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size] [tuiTitle]{font-weight:700}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles13, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-header-${TUI_VERSION}`,
      styles: ['[tuiHeader]:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;align-items:flex-start;box-sizing:content-box;color:var(--tui-text-primary);margin:0;gap:.5rem 1rem;text-align:start;overflow-wrap:break-word}[tuiHeader]:where(*[data-tui-version="5.15.0"]) p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"]) p:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiTitle]{max-inline-size:fit-content;flex:1 0 60%;margin:0;margin-inline-end:auto;font:inherit}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiTitle]:empty{display:none}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]{display:flex;align-items:center;gap:.75rem;white-space:nowrap}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]:has([tuiLink]){align-items:baseline}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiAccessories]:before{content:"\\200b";visibility:hidden;margin-inline-end:-.75rem}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiHeader]:where(*[data-tui-version="5.15.0"]) [tuiCaption]{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);font-weight:500;text-transform:uppercase;margin:0}[tuiHeader]:where(*[data-tui-version="5.15.0"])+[tuiDescription]{margin-block-start:.5rem;color:var(--tui-text-primary);font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1]{font:var(--tui-typography-heading-h1)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1]+[tuiDescription]{margin-block-start:.75rem}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2]{font:var(--tui-typography-heading-h2)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3]{font:var(--tui-typography-heading-h3)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h4]{font:var(--tui-typography-heading-h4)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h5]{font:var(--tui-typography-heading-h5)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h6]{font:var(--tui-typography-heading-h6)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-l]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-m]{font:var(--tui-typography-ui-l)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s]{font:var(--tui-typography-ui-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s] [tuiTitle]{gap:.125rem}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s]+[tuiDescription]{margin-block-start:.125rem}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-m] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-m] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-s] [tuiAccessories] [tuiLink]{font:var(--tui-typography-body-s)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h1]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h2]+[tuiDescription],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h3]+[tuiDescription]{font:var(--tui-typography-body-l)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h4] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h5] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h6] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-l] [tuiSubtitle],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h4] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h5] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=h6] [tuiAccessories] [tuiLink],[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size=body-l] [tuiAccessories] [tuiLink]{font:var(--tui-typography-body-m)}[tuiHeader]:where(*[data-tui-version="5.15.0"])[data-size] [tuiTitle]{font-weight:700}\n']
    }]
  }], null, null);
})();
var TuiHeader = class _TuiHeader {
  constructor() {
    this.nothing = tuiWithStyles(Styles13);
    this.options = inject(TUI_HEADER_OPTIONS);
    this.tuiHeader = input(this.options.size);
  }
  static {
    this.ɵfac = function TuiHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHeader)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHeader,
      selectors: [["", "tuiHeader", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiHeader", ""],
      hostVars: 1,
      hostBindings: function TuiHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.tuiHeader() || ctx.options.size || "h5");
        }
      },
      inputs: {
        tuiHeader: [1, "tuiHeader"]
      },
      features: [ɵɵProvidersFeature([tuiAvatarOptionsProvider({
        size: "m"
      }), tuiBadgeNotificationOptionsProvider(() => ({
        size: toBadgeSize(inject(_TuiHeader).tuiHeader())
      })), tuiButtonOptionsProvider(() => ({
        size: toButtonSize(inject(_TuiHeader).tuiHeader())
      }))])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHeader, [{
    type: Directive,
    args: [{
      selector: "[tuiHeader]",
      providers: [tuiAvatarOptionsProvider({
        size: "m"
      }), tuiBadgeNotificationOptionsProvider(() => ({
        size: toBadgeSize(inject(TuiHeader).tuiHeader())
      })), tuiButtonOptionsProvider(() => ({
        size: toButtonSize(inject(TuiHeader).tuiHeader())
      }))],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiHeader: "",
        "[attr.data-size]": 'tuiHeader() || options.size || "h5"'
      }
    }]
  }], null, null);
})();
function toButtonSize(size) {
  switch (size) {
    case "h1":
      return "l";
    case "h2":
    case "h3":
      return "m";
    case "h4":
      return "s";
    default:
      return "xs";
  }
}
function toBadgeSize(size) {
  switch (size) {
    case "body-l":
    case "body-m":
    case "body-s":
    case "h6":
      return "s";
    default:
      return "m";
  }
}

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-form.mjs
var [TUI_FORM_OPTIONS, tuiFormOptionsProvider] = tuiCreateOptions({
  size: "l"
});
var HEADER_SIZE = {
  s: "body-l",
  m: "h6",
  l: "h5"
};
var Styles14 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-form-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['@keyframes safariIsAJoke{to{opacity:.999}}[tuiForm]:where(*[data-tui-version="5.15.0"])[tuiForm]{display:flex;flex-direction:column;align-items:stretch}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s]{gap:.75rem;font:var(--tui-typography-body-s)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-error,[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-elastic-container{margin-block-start:-.75rem}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] legend{font:var(--tui-typography-ui-m)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m]{gap:1rem;font:var(--tui-typography-body-s)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] tui-error,[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] tui-elastic-container{margin-block-start:-1rem}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] legend{font:var(--tui-typography-ui-l)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l]{gap:1.25rem;font:var(--tui-typography-body-m)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l] tui-error,[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l] tui-elastic-container{margin-block-start:-1.25rem}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l] legend{font:var(--tui-typography-ui-l)}[tuiForm]:where(*[data-tui-version="5.15.0"]) fieldset{display:grid;flex-wrap:wrap;gap:inherit;grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));border:none;padding:0;margin:0;animation:safariIsAJoke 1ms}[tuiForm]:where(*[data-tui-version="5.15.0"]) fieldset legend:defined{position:relative;inline-size:100%;padding:.5rem 0 .75rem;font-weight:700}[tuiForm]:where(*[data-tui-version="5.15.0"])>fieldset:first-child>legend{inset-block-start:-.25rem;padding:0 0 .5rem}[tuiForm]:where(*[data-tui-version="5.15.0"])>header{padding-block-end:.25rem}[tuiForm]:where(*[data-tui-version="5.15.0"])>footer{display:flex;gap:.75rem;margin-block-start:.25rem}tui-dialog [tuiForm]:where(*[data-tui-version="5.15.0"])>footer{justify-content:flex-end}[tuiForm]:where(*[data-tui-version="5.15.0"])>button,[tuiForm]:where(*[data-tui-version="5.15.0"])>a{align-self:flex-start}[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container{display:flex}[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container>*>.tui-enter,[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container>*>.tui-leave{animation-name:tuiFade}[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container:not(:has(>*>*:not(.tui-leave))){block-size:0!important}[tuiForm]:where(*[data-tui-version="5.15.0"]) [tuiLabel]:not([data-orientation=vertical]){font:inherit}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip],[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip]{block-size:1.25rem}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles14, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-form-${TUI_VERSION}`,
      styles: ['@keyframes safariIsAJoke{to{opacity:.999}}[tuiForm]:where(*[data-tui-version="5.15.0"])[tuiForm]{display:flex;flex-direction:column;align-items:stretch}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s]{gap:.75rem;font:var(--tui-typography-body-s)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-error,[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] tui-elastic-container{margin-block-start:-.75rem}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] legend{font:var(--tui-typography-ui-m)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m]{gap:1rem;font:var(--tui-typography-body-s)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] tui-error,[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] tui-elastic-container{margin-block-start:-1rem}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] legend{font:var(--tui-typography-ui-l)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l]{gap:1.25rem;font:var(--tui-typography-body-m)}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l] tui-error,[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l] tui-elastic-container{margin-block-start:-1.25rem}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=l] legend{font:var(--tui-typography-ui-l)}[tuiForm]:where(*[data-tui-version="5.15.0"]) fieldset{display:grid;flex-wrap:wrap;gap:inherit;grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));border:none;padding:0;margin:0;animation:safariIsAJoke 1ms}[tuiForm]:where(*[data-tui-version="5.15.0"]) fieldset legend:defined{position:relative;inline-size:100%;padding:.5rem 0 .75rem;font-weight:700}[tuiForm]:where(*[data-tui-version="5.15.0"])>fieldset:first-child>legend{inset-block-start:-.25rem;padding:0 0 .5rem}[tuiForm]:where(*[data-tui-version="5.15.0"])>header{padding-block-end:.25rem}[tuiForm]:where(*[data-tui-version="5.15.0"])>footer{display:flex;gap:.75rem;margin-block-start:.25rem}tui-dialog [tuiForm]:where(*[data-tui-version="5.15.0"])>footer{justify-content:flex-end}[tuiForm]:where(*[data-tui-version="5.15.0"])>button,[tuiForm]:where(*[data-tui-version="5.15.0"])>a{align-self:flex-start}[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container{display:flex}[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container>*>.tui-enter,[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container>*>.tui-leave{animation-name:tuiFade}[tuiForm]:where(*[data-tui-version="5.15.0"]) tui-elastic-container:not(:has(>*>*:not(.tui-leave))){block-size:0!important}[tuiForm]:where(*[data-tui-version="5.15.0"]) [tuiLabel]:not([data-orientation=vertical]){font:inherit}[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=s] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip],[tuiForm]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiLabel]:not([data-orientation=vertical]) [tuiTooltip]{block-size:1.25rem}\n']
    }]
  }], null, null);
})();
var TuiForm = class _TuiForm {
  constructor() {
    this.nothing = tuiWithStyles(Styles14);
    this.options = inject(TUI_FORM_OPTIONS);
    this.size = input(this.options.size, {
      alias: "tuiForm"
    });
  }
  static {
    this.ɵfac = function TuiForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiForm)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiForm,
      selectors: [["", "tuiForm", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiForm", ""],
      hostVars: 1,
      hostBindings: function TuiForm_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size() || ctx.options.size || "l");
        }
      },
      inputs: {
        size: [1, "tuiForm", "size"]
      },
      features: [ɵɵProvidersFeature([projectSize(TUI_BUTTON_OPTIONS, (size) => size), projectSize(TUI_BLOCK_OPTIONS, (size) => size), projectSize(TUI_NOTIFICATION_OPTIONS, (size) => size), projectSize(TUI_HEADER_OPTIONS, (size) => HEADER_SIZE[size || "l"]), projectSize(TUI_SWITCH_OPTIONS, (size) => size === "l" ? "m" : "s"), projectSize(TUI_RADIO_OPTIONS, (size) => size === "l" ? "m" : "s"), projectSize(TUI_CHECKBOX_OPTIONS, (size) => size === "l" ? "m" : "s"), projectSize(TUI_SEGMENTED_OPTIONS, (size) => size === "l" ? "m" : "s")]), ɵɵHostDirectivesFeature([{
        directive: TuiTextfieldOptionsDirective,
        inputs: ["tuiTextfieldAppearance", "textfields", "tuiTextfieldCleaner", "cleaner", "tuiTextfieldSize", "tuiForm"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForm, [{
    type: Directive,
    args: [{
      selector: "[tuiForm]",
      providers: [projectSize(TUI_BUTTON_OPTIONS, (size) => size), projectSize(TUI_BLOCK_OPTIONS, (size) => size), projectSize(TUI_NOTIFICATION_OPTIONS, (size) => size), projectSize(TUI_HEADER_OPTIONS, (size) => HEADER_SIZE[size || "l"]), projectSize(TUI_SWITCH_OPTIONS, (size) => size === "l" ? "m" : "s"), projectSize(TUI_RADIO_OPTIONS, (size) => size === "l" ? "m" : "s"), projectSize(TUI_CHECKBOX_OPTIONS, (size) => size === "l" ? "m" : "s"), projectSize(TUI_SEGMENTED_OPTIONS, (size) => size === "l" ? "m" : "s")],
      hostDirectives: [{
        directive: TuiTextfieldOptionsDirective,
        inputs: ["tuiTextfieldAppearance: textfields", "tuiTextfieldCleaner: cleaner", "tuiTextfieldSize: tuiForm"]
      }],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiForm: "",
        "[attr.data-size]": 'size() || options.size || "l"'
      }
    }]
  }], null, null);
})();
function projectSize(provide, project) {
  return {
    provide,
    useFactory: () => __spreadProps(__spreadValues({}, inject(provide, {
      skipSelf: true
    })), {
      size: project(inject(TuiForm).size() || inject(TUI_FORM_OPTIONS).size || "l")
    })
  };
}

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-tokens.mjs
var LAYOUT_ICONS = {
  filter: "@tui.filter",
  grid: "@tui.layout-grid"
};
var [TUI_LAYOUT_ICONS, tuiLayoutIconsProvider] = tuiCreateOptions(LAYOUT_ICONS);
var TUI_COMMON_ICONS2 = TUI_LAYOUT_ICONS;
var tuiCommonIconsProvider = tuiLayoutIconsProvider;
var TUI_INPUT_SEARCH = new InjectionToken(ngDevMode ? "TUI_INPUT_SEARCH" : "", {
  factory: tuiExtractI18n("inputSearch")
});

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-input-search.mjs
function TuiInputSearchContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TuiInputSearchContent = class _TuiInputSearchContent {
  constructor() {
    this.host = inject(TuiInputSearch);
  }
  static {
    this.ɵfac = function TuiInputSearchContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputSearchContent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputSearchContent,
      selectors: [["tui-input-search-content"]],
      hostAttrs: ["tuiTheme", "dark"],
      hostBindings: function TuiInputSearchContent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiInputSearchContent_focusin_HostBindingHandler($event) {
            return ctx.host.onFocus($event);
          }, ɵɵresolveDocument)("keydown.esc", function TuiInputSearchContent_keydown_esc_HostBindingHandler() {
            return ctx.host.close();
          })("pointerdown.self", function TuiInputSearchContent_pointerdown_self_HostBindingHandler() {
            return ctx.host.close();
          });
        }
      },
      decls: 2,
      vars: 1,
      consts: [[1, "t-content"], [4, "polymorpheusOutlet"]],
      template: function TuiInputSearchContent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiInputSearchContent_ng_container_1_Template, 1, 0, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.host.tuiInputSearch());
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:fixed;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;display:grid;gap:.25rem;grid-template:min-content / minmax(auto,50rem);place-content:start center;padding:.5rem;background:var(--tui-service-backdrop);box-shadow:0 0 0 5rem var(--tui-service-backdrop)}[_nghost-%COMP%]    >tui-textfield{-webkit-backdrop-filter:blur(1rem) brightness(.8);backdrop-filter:blur(1rem) brightness(.8)}.t-content[_ngcontent-%COMP%]{overflow:hidden}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputSearchContent, [{
    type: Component,
    args: [{
      selector: "tui-input-search-content",
      imports: [PolymorpheusOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        tuiTheme: "dark",
        "(document:focusin)": "host.onFocus($event)",
        "(keydown.esc)": "host.close()",
        "(pointerdown.self)": "host.close()"
      },
      template: '<div class="t-content">\n    <ng-container *polymorpheusOutlet="host.tuiInputSearch()" />\n</div>\n',
      styles: [":host{position:fixed;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;display:grid;gap:.25rem;grid-template:min-content / minmax(auto,50rem);place-content:start center;padding:.5rem;background:var(--tui-service-backdrop);box-shadow:0 0 0 5rem var(--tui-service-backdrop)}:host ::ng-deep>tui-textfield{-webkit-backdrop-filter:blur(1rem) brightness(.8);backdrop-filter:blur(1rem) brightness(.8)}.t-content{overflow:hidden}\n"]
    }]
  }], null, null);
})();
var TuiInputSearch = class _TuiInputSearch {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.service = inject(TuiPopupService);
    this.textfield = inject(TuiTextfieldComponent);
    this.i18n = inject(TUI_INPUT_SEARCH);
    this.parent = this.textfield.el.parentElement;
    this.neighbor = this.textfield.el.nextSibling;
    this.placeholder = "";
    this.icon = tuiIconStart(inject(TUI_COMMON_ICONS).search, {});
    this.el = tuiInjectElement();
    this.tuiInputSearch = input();
    this.searchOpen = model(false, {
      alias: "tuiInputSearchOpen"
    });
  }
  ngOnChanges() {
    if (this.searchOpen()) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.ref?.hostView.destroyed === false) {
      return;
    }
    this.placeholder = this.el.placeholder;
    this.parent = this.textfield.el.parentElement;
    this.neighbor = this.textfield.el.nextSibling;
    this.ref = this.service.add(new PolymorpheusComponent(TuiInputSearchContent, this.injector));
    this.ref.location.nativeElement.insertAdjacentElement("afterbegin", this.textfield.el);
    this.el.focus({
      preventScroll: true
    });
    this.el.placeholder = this.i18n()?.placeholder || this.el.placeholder;
    this.searchOpen.set(true);
  }
  close() {
    if (this.ref?.hostView.destroyed !== false) {
      this.searchOpen.set(false);
      return;
    }
    this.el.placeholder = this.placeholder || this.el.placeholder;
    this.parent?.insertBefore(this.textfield.el, this.neighbor);
    this.ref.destroy();
    this.searchOpen.set(false);
  }
  onArrow() {
    const root = this.ref?.location.nativeElement;
    tuiGetClosestFocusable({
      root,
      initial: this.textfield.el.nextElementSibling ?? root
    })?.focus();
  }
  onFocus({
    target
  }) {
    if (target !== this.el && tuiIsElement(target) && !tuiContainsOrAfter(this.ref?.location.nativeElement, target)) {
      this.close();
    }
  }
  static {
    this.ɵfac = function TuiInputSearch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputSearch)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputSearch,
      selectors: [["input", "tuiInputSearch", ""]],
      hostBindings: function TuiInputSearch_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focus", function TuiInputSearch_focus_HostBindingHandler() {
            return ctx.open();
          })("keydown.arrowDown.prevent", function TuiInputSearch_keydown_arrowDown_prevent_HostBindingHandler() {
            return ctx.onArrow();
          })("keydown.tab.prevent", function TuiInputSearch_keydown_tab_prevent_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        tuiInputSearch: [1, "tuiInputSearch"],
        searchOpen: [1, "tuiInputSearchOpen", "searchOpen"]
      },
      outputs: {
        searchOpen: "tuiInputSearchOpenChange"
      },
      features: [ɵɵProvidersFeature([tuiCellOptionsProvider({
        size: "m"
      })]), ɵɵHostDirectivesFeature([TuiWithInput]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputSearch, [{
    type: Directive,
    args: [{
      selector: "input[tuiInputSearch]",
      providers: [tuiCellOptionsProvider({
        size: "m"
      })],
      hostDirectives: [TuiWithInput],
      host: {
        "(focus)": "open()",
        "(keydown.arrowDown.prevent)": "onArrow()",
        "(keydown.tab.prevent)": "0"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-item-group.mjs
var OPTIONS = {
  behavior: "smooth",
  block: "nearest",
  inline: "center"
};
var Styles15 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-item-group-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiItemGroup]:where(*[data-tui-version="5.15.0"]){display:flex;flex-wrap:wrap;--tui-item-margin: .25rem}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])>*:not(tui-items-with-more){margin:0 var(--tui-item-margin) var(--tui-item-margin) 0}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal{scrollbar-width:none;-ms-overflow-style:none;flex-wrap:nowrap;overflow:scroll}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal::-webkit-scrollbar,[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal::-webkit-scrollbar-thumb{display:none}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal>*:not(tui-items-with-more){margin-block-end:0}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._initialized tui-items-with-more .t-item{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:1;transform:scale(1)}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._initialized tui-items-with-more .t-item>*{margin:0 var(--tui-item-margin) var(--tui-item-margin) 0}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._initialized tui-items-with-more .t-item_hidden{opacity:0;transform:scale(.9)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles15, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-item-group-${TUI_VERSION}`,
      styles: ['[tuiItemGroup]:where(*[data-tui-version="5.15.0"]){display:flex;flex-wrap:wrap;--tui-item-margin: .25rem}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])>*:not(tui-items-with-more){margin:0 var(--tui-item-margin) var(--tui-item-margin) 0}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal{scrollbar-width:none;-ms-overflow-style:none;flex-wrap:nowrap;overflow:scroll}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal::-webkit-scrollbar,[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal::-webkit-scrollbar-thumb{display:none}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._horizontal>*:not(tui-items-with-more){margin-block-end:0}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._initialized tui-items-with-more .t-item{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);opacity:1;transform:scale(1)}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._initialized tui-items-with-more .t-item>*{margin:0 var(--tui-item-margin) var(--tui-item-margin) 0}[tuiItemGroup]:where(*[data-tui-version="5.15.0"])._initialized tui-items-with-more .t-item_hidden{opacity:0;transform:scale(.9)}\n']
    }]
  }], null, null);
})();
var TuiItemGroup = class _TuiItemGroup {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(Styles15);
    this.horizontal = input(false);
    this.autoscroll = input(false);
  }
  ngAfterViewInit() {
    this.el.classList.add("_initialized");
  }
  onClick(target) {
    if (this.autoscroll() && this.horizontal()) {
      setTimeout(() => target.scrollIntoView(OPTIONS));
    }
  }
  static {
    this.ɵfac = function TuiItemGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemGroup,
      selectors: [["", "tuiItemGroup", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 2,
      hostBindings: function TuiItemGroup_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiItemGroup_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_horizontal", ctx.horizontal());
        }
      },
      inputs: {
        horizontal: [1, "horizontal"],
        autoscroll: [1, "autoscroll"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemGroup, [{
    type: Directive,
    args: [{
      selector: "[tuiItemGroup]",
      host: {
        "data-tui-version": TUI_VERSION,
        "[class._horizontal]": "horizontal()",
        "(click)": "onClick($event.target)"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-list.mjs
var [TUI_LIST_OPTIONS, tuiListOptionsProvider] = tuiCreateOptions({
  size: "l"
});
var Styles16 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-list-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiList]:where(*[data-tui-version="5.15.0"]){list-style:none;padding:.25rem 0;margin-block:0;counter-reset:item;margin-inline-start:1.5rem}[tuiList]:where(*[data-tui-version="5.15.0"]) [tuiList]{padding:0;margin-inline-start:1.25rem}[tuiList]:where(*[data-tui-version="5.15.0"])>li{counter-increment:item;margin:.5rem 0}[tuiList]:where(*[data-tui-version="5.15.0"])>li:before{content:counters(item,".") ".";display:inline-flex;margin:0 .5625rem 0 -1.5rem}[tuiList]:where(*[data-tui-version="5.15.0"]):is(ul)>li:before{color:transparent;background:radial-gradient(circle .1875rem,var(--tui-list-marker, var(--tui-status-info)) 100%,transparent 101%);inline-size:.75rem;margin-inline-end:.75rem}[tuiList]:where(*[data-tui-version="5.15.0"]):is(ol)>li:before{unicode-bidi:isolate;font-variant-numeric:tabular-nums}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=l]{font:var(--tui-typography-body-l)}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=l]:is(ul)>li:before{inline-size:.875rem;margin:0 .5625rem 0 -1.4375rem}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=m]{font:var(--tui-typography-body-m)}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=s]{font:var(--tui-typography-ui-s)}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=s]>li{margin:.625rem 0}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles16, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-list-${TUI_VERSION}`,
      styles: ['[tuiList]:where(*[data-tui-version="5.15.0"]){list-style:none;padding:.25rem 0;margin-block:0;counter-reset:item;margin-inline-start:1.5rem}[tuiList]:where(*[data-tui-version="5.15.0"]) [tuiList]{padding:0;margin-inline-start:1.25rem}[tuiList]:where(*[data-tui-version="5.15.0"])>li{counter-increment:item;margin:.5rem 0}[tuiList]:where(*[data-tui-version="5.15.0"])>li:before{content:counters(item,".") ".";display:inline-flex;margin:0 .5625rem 0 -1.5rem}[tuiList]:where(*[data-tui-version="5.15.0"]):is(ul)>li:before{color:transparent;background:radial-gradient(circle .1875rem,var(--tui-list-marker, var(--tui-status-info)) 100%,transparent 101%);inline-size:.75rem;margin-inline-end:.75rem}[tuiList]:where(*[data-tui-version="5.15.0"]):is(ol)>li:before{unicode-bidi:isolate;font-variant-numeric:tabular-nums}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=l]{font:var(--tui-typography-body-l)}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=l]:is(ul)>li:before{inline-size:.875rem;margin:0 .5625rem 0 -1.4375rem}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=m]{font:var(--tui-typography-body-m)}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=s]{font:var(--tui-typography-ui-s)}[tuiList]:where(*[data-tui-version="5.15.0"])[data-size=s]>li{margin:.625rem 0}\n']
    }]
  }], null, null);
})();
var TuiList = class _TuiList {
  constructor() {
    this.nothing = tuiWithStyles(Styles16);
    this.options = inject(TUI_LIST_OPTIONS);
    this.size = input(this.options.size, {
      alias: "tuiList"
    });
  }
  static {
    this.ɵfac = function TuiList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiList)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiList,
      selectors: [["ul", "tuiList", ""], ["ol", "tuiList", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 1,
      hostBindings: function TuiList_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size() || ctx.options.size);
        }
      },
      inputs: {
        size: [1, "tuiList", "size"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiList, [{
    type: Directive,
    args: [{
      selector: "ul[tuiList], ol[tuiList]",
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size() || options.size"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-chevron.mjs
var TUI_CHEVRON = new InjectionToken(ngDevMode ? "TUI_CHEVRON" : "", {
  factory: () => "@tui.chevron-down"
});
var Styles17 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-chevron-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):after,tui-icon[tuiChevron]:where(*[data-tui-version="5.15.0"]):before{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);cursor:pointer;font-size:1rem}[tuiButton][data-size=m][tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):after{margin-inline-end:-.125rem}[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"])._chevron-rotated:after,tui-icon[tuiChevron]:where(*[data-tui-version="5.15.0"])._chevron-rotated:before{transform:rotate(180deg)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]){--t-stroke: var(--tui-stroke-width)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):after{transform:rotate(0) scale(calc(2 / 3));font-size:1.5rem;--tui-stroke-width: calc(var(--t-stroke) / 2 * 3)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"])._chevron-rotated:after{transform:rotate(180deg) scale(calc(2 / 3))}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):has(select[tuiSelect]:open):after{transform:rotate(180deg) scale(calc(2 / 3))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles17, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-chevron-${TUI_VERSION}`,
      styles: ['[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):after,tui-icon[tuiChevron]:where(*[data-tui-version="5.15.0"]):before{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);cursor:pointer;font-size:1rem}[tuiButton][data-size=m][tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):after{margin-inline-end:-.125rem}[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"])._chevron-rotated:after,tui-icon[tuiChevron]:where(*[data-tui-version="5.15.0"])._chevron-rotated:before{transform:rotate(180deg)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]){--t-stroke: var(--tui-stroke-width)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):after{transform:rotate(0) scale(calc(2 / 3));font-size:1.5rem;--tui-stroke-width: calc(var(--t-stroke) / 2 * 3)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"])._chevron-rotated:after{transform:rotate(180deg) scale(calc(2 / 3))}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.15.0"]):has(select[tuiSelect]:open):after{transform:rotate(180deg) scale(calc(2 / 3))}\n']
    }]
  }], null, null);
})();
var TuiChevron = class _TuiChevron {
  constructor() {
    this.el = tuiInjectElement();
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.nothing = tuiWithStyles(Styles17);
    this.toggle = effect(() => this.el.classList.toggle("_chevron-rotated", this.rotated() || this.rotated() === "" && !!this.dropdown?.ref()));
    this.rotated = input("", {
      alias: "tuiChevron"
    });
  }
  static {
    this.ɵfac = function TuiChevron_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevron)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChevron,
      selectors: [["", "tuiChevron", ""]],
      hostAttrs: ["tuiChevron", ""],
      inputs: {
        rotated: [1, "tuiChevron", "rotated"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ICON_END, TUI_CHEVRON)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevron, [{
    type: Directive,
    args: [{
      selector: "[tuiChevron]",
      providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
      host: {
        tuiChevron: ""
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge.mjs
var TUI_BADGE_DEFAULT_OPTIONS = {
  appearance: "",
  size: "l"
};
var [TUI_BADGE_OPTIONS, tuiBadgeOptionsProvider] = tuiCreateOptions(TUI_BADGE_DEFAULT_OPTIONS);
var Styles18 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-badge-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiBadge]:where(*[data-tui-version="5.15.0"]){--t-scale: calc(1 + (var(--tui-font-scale) - 1) / 2);--t-icon-size: 1rem;--t-padding: calc(.5rem * var(--t-scale));--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:.0625rem var(--t-padding);block-size:var(--t-size);min-block-size:calc(var(--tui-lh) + .125rem);min-inline-size:max(calc(var(--tui-lh) + .125rem),var(--t-size));inline-size:fit-content;font:var(--tui-typography-ui-s);zoom:1}[tuiBadge]:where(*[data-tui-version="5.15.0"])>img,[tuiBadge]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiAvatar],[tuiBadge]:where(*[data-tui-version="5.15.0"])>tui-badge,[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiBadge],[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiRadio],[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiSwitch],[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiCheckbox],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{margin:var(--t-margin)}@supports not (font-size: 1lh){[tuiBadge]:where(*[data-tui-version="5.15.0"]){--tui-lh: 1.2em}}[tuiBadge]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{font-size:calc(var(--t-icon-size) * var(--t-scale))!important;zoom:1}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=negative]{--t-status: var(--tui-status-negative)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=positive]{--t-status: var(--tui-status-positive)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=warning]{--t-status: var(--tui-status-warning)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=info]{--t-status: var(--tui-status-info)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=neutral]{--t-status: var(--tui-status-neutral)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-padding: calc(.25rem * var(--tui-font-scale) * var(--t-scale));--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.0625rem;font:var(--tui-typography-ui-2xs);gap:.1875rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline:.0625rem -.125rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-padding: calc(.375rem * var(--tui-font-scale));--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=xl]{--t-margin: -.25rem;--t-padding: .75rem;--t-size: var(--tui-height-s);font:var(--tui-typography-ui-m)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=negative],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=positive],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=warning],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=info],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}img[tuiBadge]:where(*[data-tui-version="5.15.0"]),tui-icon[tuiBadge]:where(*[data-tui-version="5.15.0"]){padding:0;inline-size:var(--t-size)}img[tuiBadge]:where(*[data-tui-version="5.15.0"]):before,tui-icon[tuiBadge]:where(*[data-tui-version="5.15.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;--t-margin: 0}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles18, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-badge-${TUI_VERSION}`,
      styles: ['[tuiBadge]:where(*[data-tui-version="5.15.0"]){--t-scale: calc(1 + (var(--tui-font-scale) - 1) / 2);--t-icon-size: 1rem;--t-padding: calc(.5rem * var(--t-scale));--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:.0625rem var(--t-padding);block-size:var(--t-size);min-block-size:calc(var(--tui-lh) + .125rem);min-inline-size:max(calc(var(--tui-lh) + .125rem),var(--t-size));inline-size:fit-content;font:var(--tui-typography-ui-s);zoom:1}[tuiBadge]:where(*[data-tui-version="5.15.0"])>img,[tuiBadge]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiAvatar],[tuiBadge]:where(*[data-tui-version="5.15.0"])>tui-badge,[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiBadge],[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiRadio],[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiSwitch],[tuiBadge]:where(*[data-tui-version="5.15.0"])>[tuiCheckbox],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{margin:var(--t-margin)}@supports not (font-size: 1lh){[tuiBadge]:where(*[data-tui-version="5.15.0"]){--tui-lh: 1.2em}}[tuiBadge]:where(*[data-tui-version="5.15.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{font-size:calc(var(--t-icon-size) * var(--t-scale))!important;zoom:1}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=negative]{--t-status: var(--tui-status-negative)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=positive]{--t-status: var(--tui-status-positive)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=warning]{--t-status: var(--tui-status-warning)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=info]{--t-status: var(--tui-status-info)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-appearance=neutral]{--t-status: var(--tui-status-neutral)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=s]{--t-padding: calc(.25rem * var(--tui-font-scale) * var(--t-scale));--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.0625rem;font:var(--tui-typography-ui-2xs);gap:.1875rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline:.0625rem -.125rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-padding: calc(.375rem * var(--tui-font-scale));--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=xl]{--t-margin: -.25rem;--t-padding: .75rem;--t-size: var(--tui-height-s);font:var(--tui-typography-ui-m)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem}[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=negative],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=positive],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=warning],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=info],[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}[tuiBadge]:where(*[data-tui-version="5.15.0"])[tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}img[tuiBadge]:where(*[data-tui-version="5.15.0"]),tui-icon[tuiBadge]:where(*[data-tui-version="5.15.0"]){padding:0;inline-size:var(--t-size)}img[tuiBadge]:where(*[data-tui-version="5.15.0"]):before,tui-icon[tuiBadge]:where(*[data-tui-version="5.15.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;--t-margin: 0}\n']
    }]
  }], null, null);
})();
var TuiBadge = class _TuiBadge {
  constructor() {
    this.nothing = tuiWithStyles(Styles18);
    this.size = input(inject(TUI_BADGE_OPTIONS).size);
  }
  static {
    this.ɵfac = function TuiBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBadge,
      selectors: [["", "tuiBadge", ""], ["tui-icon", "tuiBadge", ""]],
      hostVars: 1,
      hostBindings: function TuiBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadge, [{
    type: Directive,
    args: [{
      // tui-icon[tuiBadge] is required to avoid double matching of TuiIcons
      selector: "[tuiBadge],tui-icon[tuiBadge]",
      providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-tokens.mjs
var TUI_CONFIRM_WORDS = new InjectionToken(ngDevMode ? "TUI_CONFIRM_WORDS" : "", { factory: tuiExtractI18n("confirm") });
var TUI_CANCEL_WORD = new InjectionToken(ngDevMode ? "TUI_CANCEL_WORD" : "", {
  factory: tuiExtractI18n("cancel")
});
var TUI_DONE_WORD = new InjectionToken(ngDevMode ? "TUI_DONE_WORD" : "", {
  factory: tuiExtractI18n("done")
});
var TUI_MORE_WORD = new InjectionToken(ngDevMode ? "TUI_MORE_WORD" : "", {
  factory: tuiExtractI18n("more")
});
var TUI_HIDE_TEXT = new InjectionToken(ngDevMode ? "TUI_HIDE_TEXT" : "", {
  factory: tuiExtractI18n("hide")
});
var TUI_SHOW_ALL_TEXT = new InjectionToken(ngDevMode ? "TUI_SHOW_ALL_TEXT" : "", { factory: tuiExtractI18n("showAll") });
var TUI_OTHER_DATE_TEXT = new InjectionToken(ngDevMode ? "TUI_OTHER_DATE_TEXT" : "", { factory: tuiExtractI18n("otherDate") });
var TUI_CHOOSE_DAY_OR_RANGE_TEXTS = new InjectionToken(ngDevMode ? "TUI_CHOOSE_DAY_OR_RANGE_TEXTS" : "", { factory: tuiExtractI18n("mobileCalendarTexts") });
var TUI_FROM_TO_TEXTS = new InjectionToken(ngDevMode ? "TUI_FROM_TO_TEXTS" : "", { factory: tuiExtractI18n("range") });
var TUI_PLUS_MINUS_TEXTS = new InjectionToken(ngDevMode ? "TUI_PLUS_MINUS_TEXTS" : "", { factory: tuiExtractI18n("countTexts") });
var TUI_TIME_TEXTS = new InjectionToken(ngDevMode ? "TUI_TIME_TEXTS" : "", {
  factory: tuiExtractI18n("time")
});
var TUI_DATE_TEXTS = new InjectionToken(ngDevMode ? "TUI_DATE_TEXTS" : "", { factory: tuiExtractI18n("dateTexts") });
var TUI_DIGITAL_INFORMATION_UNITS = new InjectionToken(ngDevMode ? "TUI_DIGITAL_INFORMATION_UNITS" : "", { factory: tuiExtractI18n("digitalInformationUnits") });
var TUI_COPY_TEXTS = new InjectionToken(ngDevMode ? "TUI_COPY_TEXTS" : "", {
  factory: tuiExtractI18n("copyTexts")
});
var TUI_PASSWORD_TEXTS = new InjectionToken(ngDevMode ? "TUI_PASSWORD_TEXTS" : "", { factory: tuiExtractI18n("passwordTexts") });
var TUI_CALENDAR_MONTHS = new InjectionToken(ngDevMode ? "TUI_CALENDAR_MONTHS" : "", { factory: tuiExtractI18n("shortCalendarMonths") });
var TUI_FILE_TEXTS = new InjectionToken(ngDevMode ? "TUI_FILE_TEXTS" : "", {
  factory: tuiExtractI18n("fileTexts")
});
var TUI_PAGINATION_TEXTS = new InjectionToken(ngDevMode ? "TUI_PAGINATION_TEXTS" : "", { factory: tuiExtractI18n("pagination") });
var TUI_INPUT_FILE_TEXTS = new InjectionToken(ngDevMode ? "TUI_INPUT_FILE_TEXTS" : "", { factory: tuiExtractI18n("inputFileTexts") });
var TUI_MULTI_SELECT_TEXTS = new InjectionToken(ngDevMode ? "TUI_MULTI_SELECT_TEXTS" : "", { factory: tuiExtractI18n("multiSelectTexts") });
var TUI_COUNTRIES = new InjectionToken(ngDevMode ? "TUI_COUNTRIES" : "", { factory: tuiExtractI18n("countries") });
var TUI_PREVIEW_TEXTS = new InjectionToken(ngDevMode ? "TUI_PREVIEW_TEXTS" : "", { factory: tuiExtractI18n("previewTexts") });
var TUI_PREVIEW_ZOOM_TEXTS = new InjectionToken(ngDevMode ? "TUI_PREVIEW_ZOOM_TEXTS" : "", { factory: tuiExtractI18n("zoomTexts") });
var TUI_INTERNATIONAL_SEARCH = new InjectionToken(ngDevMode ? "TUI_INTERNATIONAL_SEARCH" : "", { factory: tuiExtractI18n("phoneSearch") });
var TUI_DAY_RANGE_PERIODS = new InjectionToken(ngDevMode ? "TUI_DAY_RANGE_PERIODS" : "", { factory: tuiExtractI18n("dayRangePeriods") });

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tabs.mjs
var _c09 = ["*"];
function TuiTabsWithMore_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementContainer(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const item_r2 = ctx_r2.$implicit;
    const $index_r4 = ctx_r2.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("t-overflown", ctx_r4.isOverflown($index_r4));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiTabsWithMore_For_2_Conditional_0_Template, 1, 1, "ng-container", 5)(1, TuiTabsWithMore_For_2_Conditional_1_Template, 2, 3, "div", 6);
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵconditional($index_r4 <= ctx_r4.lastVisibleIndex ? 0 : 1);
  }
}
function TuiTabsWithMore_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r7, " ");
  }
}
function TuiTabsWithMore_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_Conditional_3_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_Conditional_3_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtemplate(1, TuiTabsWithMore_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r8 = ɵɵreference(6);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent() || dropdown_r8);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r4.moreContent());
  }
}
function TuiTabsWithMore_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_Conditional_4_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_Conditional_4_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r8 = ɵɵreference(6);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent() || dropdown_r8);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r4.moreWord(), " ");
  }
}
function TuiTabsWithMore_ng_template_5_For_3_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiTabsWithMore_ng_template_5_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTabsWithMore_ng_template_5_For_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const item_r14 = ɵɵnextContext().$implicit;
    ɵɵproperty("polymorpheusOutlet", item_r14);
  }
}
function TuiTabsWithMore_ng_template_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("tui-tab-activate", function TuiTabsWithMore_ng_template_5_For_3_Template_div_tui_tab_activate_0_listener() {
      const $index_r13 = ɵɵrestoreView(_r12).$index;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onClick($index_r13));
    });
    ɵɵconditionalCreate(1, TuiTabsWithMore_ng_template_5_For_3_Conditional_1_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r13 = ctx.$index;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r4.shouldShow($index_r13) ? 1 : -1);
  }
}
function TuiTabsWithMore_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11, 1);
    ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsWithMore_ng_template_5_Template_div_keydown_arrowDown_prevent_0_listener($event) {
      ɵɵrestoreView(_r10);
      const element_r11 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r11, false));
    })("keydown.arrowUp.prevent", function TuiTabsWithMore_ng_template_5_Template_div_keydown_arrowUp_prevent_0_listener($event) {
      ɵɵrestoreView(_r10);
      const element_r11 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r11, true));
    });
    ɵɵrepeaterCreate(2, TuiTabsWithMore_ng_template_5_For_3_Template, 2, 1, "div", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵattribute("data-size", ctx_r4.size());
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r4.items());
  }
}
var TUI_TAB_ACTIVATE = "tui-tab-activate";
var TuiTab = class _TuiTab {
  constructor() {
    this.el = tuiInjectElement();
    this.rla = inject(RouterLinkActive, {
      optional: true
    });
    this.observer = this.rla && inject(WaMutationObserverService, {
      optional: true
    })?.pipe(filter(() => !!this.rla?.isActive));
    this.sub = merge(this.observer || EMPTY, this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY, this.el.matches("button") ? tuiTypedFromEvent(this.el, "click").pipe(
      // Delaying execution until after all other click callbacks
      switchMap(() => tuiTypedFromEvent(this.el.parentElement, "click").pipe(take(1)))
    ) : EMPTY).pipe(takeUntilDestroyed()).subscribe(() => this.el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, {
      bubbles: true
    })));
  }
  ngOnDestroy() {
    if (tuiIsFocused(this.el)) {
      this.el.blur();
    }
  }
  static {
    this.ɵfac = function TuiTab_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTab)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTab,
      selectors: [["a", "tuiTab", "", 3, "routerLink", ""], ["a", "tuiTab", "", "routerLink", "", "routerLinkActive", ""], ["button", "tuiTab", ""]],
      hostAttrs: ["type", "button"],
      features: [ɵɵHostDirectivesFeature([TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTab, [{
    type: Directive,
    args: [{
      selector: "a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]",
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button"
      }
    }]
  }], null, null);
})();
var TUI_TABS_DEFAULT_OPTIONS = {
  underline: true,
  exposeActive: true,
  itemsLimit: Infinity,
  minMoreWidth: 0,
  size: "l"
};
var [TUI_TABS_OPTIONS, tuiTabsOptionsProvider] = tuiCreateOptions(TUI_TABS_DEFAULT_OPTIONS);
var Styles19 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-tabs-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiTab]:where(*[data-tui-version="5.15.0"]){transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.15.0"]):disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]:where(*[data-tui-version="5.15.0"])._active{color:var(--tui-text-primary);box-shadow:none;anchor-name:--tui-tab-active}[tuiTab]:where(*[data-tui-version="5.15.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}tui-tabs._underline [tuiTab]:where(*[data-tui-version="5.15.0"]):hover:not(._active){box-shadow:inset 0 -.125rem var(--tui-border-normal)}tui-tabs>[tuiTab]:where(*[data-tui-version="5.15.0"]):first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.15.0"]):first-child{margin-inline-start:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.15.0"]):first-child{margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:where(*[data-tui-version="5.15.0"]):empty:after,[tuiTab]:where(*[data-tui-version="5.15.0"]):empty:before{margin:.5rem}@media(hover:hover)and (pointer:fine){[tuiTab]:where(*[data-tui-version="5.15.0"]):hover{color:var(--tui-text-primary)}}tui-tabs:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate;anchor-scope:--tui-tab-active}tui-tabs:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-tabs:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-tabs:where(*[data-tui-version="5.15.0"])[data-size=m]{font:var(--tui-typography-body-s);--tui-tab-margin: 1rem}tui-tabs:where(*[data-tui-version="5.15.0"])[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}tui-tabs:where(*[data-tui-version="5.15.0"])[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}tui-tabs:where(*[data-tui-version="5.15.0"]):before{transition-property:inline-size,inset-inline-start;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:absolute;inset-block-end:0;inset-inline-start:var(--t-left);block-size:.125rem;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms;contain:strict}@supports (anchor-name: --tui-tab-active){tui-tabs:where(*[data-tui-version="5.15.0"]):before{inset-inline-start:anchor(start);inline-size:anchor-size(inline);position-anchor:--tui-tab-active}}tui-tabs:where(*[data-tui-version="5.15.0"])._underline:before{content:""}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]){flex-direction:column;box-shadow:inset calc(-1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;display:block;inset-block-start:0;inset-inline-end:0;block-size:100%;inline-size:.125rem;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]:hover{box-shadow:inset calc(-.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]._active:after{transform:none}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-typography-body-s)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end]{box-shadow:inset calc(1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end] [tuiTab]{text-align:end}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end] [tuiTab]:after{inset-inline:0 auto;transform-origin:left}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end] [tuiTab]:hover{box-shadow:inset calc(.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles19, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-tabs-${TUI_VERSION}`,
      styles: ['[tuiTab]:where(*[data-tui-version="5.15.0"]){transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.15.0"]):disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]:where(*[data-tui-version="5.15.0"])._active{color:var(--tui-text-primary);box-shadow:none;anchor-name:--tui-tab-active}[tuiTab]:where(*[data-tui-version="5.15.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}tui-tabs._underline [tuiTab]:where(*[data-tui-version="5.15.0"]):hover:not(._active){box-shadow:inset 0 -.125rem var(--tui-border-normal)}tui-tabs>[tuiTab]:where(*[data-tui-version="5.15.0"]):first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.15.0"]):first-child{margin-inline-start:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.15.0"]):first-child{margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.15.0"])[tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab]:where(*[data-tui-version="5.15.0"])[tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:where(*[data-tui-version="5.15.0"]):empty:after,[tuiTab]:where(*[data-tui-version="5.15.0"]):empty:before{margin:.5rem}@media(hover:hover)and (pointer:fine){[tuiTab]:where(*[data-tui-version="5.15.0"]):hover{color:var(--tui-text-primary)}}tui-tabs:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate;anchor-scope:--tui-tab-active}tui-tabs:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-tabs:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-tabs:where(*[data-tui-version="5.15.0"])[data-size=m]{font:var(--tui-typography-body-s);--tui-tab-margin: 1rem}tui-tabs:where(*[data-tui-version="5.15.0"])[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}tui-tabs:where(*[data-tui-version="5.15.0"])[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}tui-tabs:where(*[data-tui-version="5.15.0"]):before{transition-property:inline-size,inset-inline-start;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:absolute;inset-block-end:0;inset-inline-start:var(--t-left);block-size:.125rem;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms;contain:strict}@supports (anchor-name: --tui-tab-active){tui-tabs:where(*[data-tui-version="5.15.0"]):before{inset-inline-start:anchor(start);inline-size:anchor-size(inline);position-anchor:--tui-tab-active}}tui-tabs:where(*[data-tui-version="5.15.0"])._underline:before{content:""}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]){flex-direction:column;box-shadow:inset calc(-1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;display:block;inset-block-start:0;inset-inline-end:0;block-size:100%;inline-size:.125rem;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]:hover{box-shadow:inset calc(-.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"]) [tuiTab]._active:after{transform:none}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-typography-body-s)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end]{box-shadow:inset calc(1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end] [tuiTab]{text-align:end}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end] [tuiTab]:after{inset-inline:0 auto;transform-origin:left}tui-tabs[data-vertical]:where(*[data-tui-version="5.15.0"])[data-vertical=end] [tuiTab]:hover{box-shadow:inset calc(.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}\n']
    }]
  }], null, null);
})();
var TuiTabsDirective = class _TuiTabsDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.injector = inject(INJECTOR$1);
    this.nothing = tuiWithStyles(Styles19);
    this.size = input(inject(TUI_TABS_OPTIONS).size);
    this.activeItemIndex = model(0);
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    return this.tabs[this.activeItemIndex()] || null;
  }
  moveFocus(current, step) {
    const {
      tabs
    } = this;
    tuiMoveFocus(tabs.indexOf(current), tabs, step);
  }
  ngAfterViewChecked() {
    afterNextRender(() => {
      this.markTabAsActive();
    }, {
      injector: this.injector
    });
  }
  onActivate(element) {
    this.activeItemIndex.set(this.tabs.findIndex((tab) => tab === element));
  }
  markTabAsActive() {
    const {
      tabs,
      activeElement
    } = this;
    tabs.forEach((nativeElement) => {
      const active = nativeElement === activeElement;
      nativeElement.classList.toggle("_active", active);
      nativeElement.setAttribute("tabIndex", active ? "0" : "-1");
    });
  }
  static {
    this.ɵfac = function TuiTabsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsDirective,
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 1,
      hostBindings: function TuiTabsDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-tab-activate.stop", function TuiTabsDirective_tui_tab_activate_stop_HostBindingHandler($event) {
            return ctx.onActivate($event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"],
        activeItemIndex: [1, "activeItemIndex"]
      },
      outputs: {
        activeItemIndex: "activeItemIndexChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsDirective, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        [`(${TUI_TAB_ACTIVATE}.stop)`]: "onActivate($event.target)"
      }
    }]
  }], null, null);
})();
var TuiTabsHorizontal = class _TuiTabsHorizontal {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_TABS_OPTIONS);
    this.tabs = inject(TuiTabsDirective);
    this.sub = inject(WaMutationObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.underline = input(this.options.underline);
    effect(() => {
      const index = this.tabs.activeItemIndex();
      const element = this.tabs.tabs[index];
      if (!element) {
        return;
      }
      const {
        offsetLeft,
        offsetWidth
      } = element;
      if (offsetLeft < this.el.scrollLeft) {
        this.el.scrollLeft = offsetLeft;
      }
      if (offsetLeft + offsetWidth > this.el.scrollLeft + this.el.offsetWidth) {
        this.el.scrollLeft = offsetLeft + offsetWidth - this.el.offsetWidth;
      }
    });
  }
  ngAfterViewChecked() {
    this.refresh();
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  // TODO: Remove when anchor positioning will be available in all modern browsers: https://caniuse.com/css-anchor-positioning
  refresh() {
    if ("anchorName" in this.el.style) {
      return;
    }
    const {
      activeElement
    } = this.tabs;
    if (activeElement && !activeElement.isConnected) {
      return;
    }
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = activeElement || {};
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiTabsHorizontal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsHorizontal)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsHorizontal,
      selectors: [["tui-tabs", 3, "vertical", ""]],
      hostVars: 4,
      hostBindings: function TuiTabsHorizontal_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationend", function TuiTabsHorizontal_animationend_HostBindingHandler() {
            return ctx.refresh();
          })("keydown.arrowLeft.prevent", function TuiTabsHorizontal_keydown_arrowLeft_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          })("keydown.arrowRight.prevent", function TuiTabsHorizontal_keydown_arrowRight_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-color", ctx.underline() === true ? "var(--tui-background-accent-1)" : ctx.underline());
          ɵɵclassProp("_underline", ctx.underline());
        }
      },
      inputs: {
        underline: [1, "underline"]
      },
      features: [ɵɵProvidersFeature([WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsHorizontal, [{
    type: Directive,
    args: [{
      selector: "tui-tabs:not([vertical])",
      providers: [WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[class._underline]": "underline()",
        "[style.--t-color]": "underline() === true ? 'var(--tui-background-accent-1)' : underline()",
        "(animationend)": "refresh()",
        "(keydown.arrowLeft.prevent)": "onKeyDownArrow($event.target, -1)",
        "(keydown.arrowRight.prevent)": "onKeyDownArrow($event.target, 1)"
      }
    }]
  }], () => [], null);
})();
var TuiTabsVertical = class _TuiTabsVertical {
  constructor() {
    this.tabs = inject(TuiTabsDirective);
    this.vertical = input("start");
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  static {
    this.ɵfac = function TuiTabsVertical_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsVertical)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsVertical,
      selectors: [["tui-tabs", "vertical", ""]],
      hostVars: 1,
      hostBindings: function TuiTabsVertical_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsVertical_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiTabsVertical_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-vertical", ctx.vertical());
        }
      },
      inputs: {
        vertical: [1, "vertical"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsVertical, [{
    type: Directive,
    args: [{
      selector: "tui-tabs[vertical]",
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[attr.data-vertical]": "vertical()",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      }
    }]
  }], null, null);
})();
var TUI_TABS_REFRESH = new InjectionToken(ngDevMode ? "TUI_TABS_REFRESH" : "");
var TUI_TABS_PROVIDERS = [WaResizeObserverService, WaMutationObserverService, tuiDropdownOptionsProvider({
  align: "end"
}), {
  provide: WA_MUTATION_OBSERVER_INIT,
  useValue: {
    childList: true,
    subtree: true,
    characterData: true
  }
}, {
  provide: TUI_TABS_REFRESH,
  deps: [WaResizeObserverService, WaMutationObserverService, DOCUMENT, ElementRef, ChangeDetectorRef],
  useFactory: (resize$, mutations$, {
    body
  }, {
    nativeElement
  }, cdr) => merge(resize$, mutations$.pipe(tap(() => cdr.detectChanges()))).pipe(
    // Ignoring cases when host is detached from DOM
    filter(() => body.contains(nativeElement)),
    debounceTime(0),
    startWith(null),
    takeUntilDestroyed()
  )
}];
var TuiTabsWithMore = class _TuiTabsWithMore {
  constructor() {
    this.moreButton = viewChild(TuiTab, {
      read: ElementRef
    });
    this.dir = viewChild(TuiTabsHorizontal, {
      read: ElementRef
    });
    this.options = inject(TUI_TABS_OPTIONS);
    this.refresh$ = inject(TUI_TABS_REFRESH);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.maxIndex = Infinity;
    this.items = contentChildren(TuiItem, {
      read: TemplateRef
    });
    this.moreWord = inject(TUI_MORE_WORD);
    this.sync = effect(() => {
      this.activeItemIndex();
      this.maxIndex = this.getMaxIndex();
      this.open = false;
    });
    this.open = false;
    this.activeItemIndex = model(0);
    this.size = input(this.options.size);
    this.underline = input(this.options.underline);
    this.itemsLimit = input(this.options.itemsLimit);
    this.moreContent = input();
    this.dropdownContent = input();
  }
  get lastVisibleIndex() {
    if (this.itemsLimit() + 1 >= this.items().length) {
      return this.maxIndex;
    }
    const offset = this.itemsLimit() - 1 > this.activeItemIndex() || !this.options.exposeActive ? 1 : 2;
    return Math.min(this.itemsLimit() - offset, this.maxIndex);
  }
  isOverflown(index) {
    return index !== this.activeItemIndex() || !this.options.exposeActive;
  }
  shouldShow(index) {
    return index > this.lastVisibleIndex && this.isOverflown(index);
  }
  ngAfterViewInit() {
    this.refresh$.pipe(map(() => this.getMaxIndex()), tap(() => this.refresh()), filter((maxIndex) => this.maxIndex !== maxIndex)).subscribe((maxIndex) => {
      this.maxIndex = maxIndex;
      this.cdr.detectChanges();
    });
  }
  ngAfterViewChecked() {
    this.refresh();
  }
  // TODO: Improve performance
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    return this.tabs.find((tab) => tab.classList.contains("_active")) ?? null;
  }
  get isMoreAlone() {
    return this.lastVisibleIndex < 0 && !this.options.exposeActive;
  }
  get isMoreVisible() {
    return this.lastVisibleIndex < this.items().length - 1;
  }
  get isMoreFocusable() {
    return tuiIsFocused(this.moreButton()?.nativeElement);
  }
  get isMoreActive() {
    return this.open || !this.options.exposeActive && this.lastVisibleIndex < this.activeItemIndex();
  }
  onClick(index) {
    this.open = false;
    this.focusMore();
    this.activeItemIndex.set(index);
  }
  onArrowRight(event) {
    if (tuiIsElement(event.target) && tuiIsFocused(event.target)) {
      this.focusMore();
    }
  }
  onArrowLeft() {
    const {
      tabs
    } = this;
    let index = tabs.length - 2;
    while (index >= 0) {
      tabs[index]?.focus();
      if (tuiIsFocused(tabs[index])) {
        return;
      }
      index--;
    }
  }
  onWrapperArrow(event, wrapper, previous) {
    const button = event.target;
    const target = tuiGetClosestFocusable({
      initial: button,
      root: wrapper,
      previous
    });
    if (target) {
      target.focus();
    }
  }
  get margin() {
    return this.size() === "l" ? 24 : 16;
  }
  focusMore() {
    this.moreButton()?.nativeElement.focus();
  }
  getMaxIndex() {
    const {
      tabs,
      activeItemIndex,
      margin
    } = this;
    if (tabs.length < 2) {
      return 0;
    }
    const {
      exposeActive,
      minMoreWidth
    } = this.options;
    const {
      clientWidth
    } = this.el;
    const active = tabs[activeItemIndex()];
    const activeWidth = active?.scrollWidth ?? 0;
    const moreWidth = Math.max(tabs[tabs.length - 1]?.scrollWidth ?? 0, minMoreWidth);
    let maxIndex = tabs.length - 2;
    let total = tabs.reduce((acc, {
      scrollWidth
    }) => acc + scrollWidth, 0) + maxIndex * margin - (tabs[tabs.length - 1]?.scrollWidth ?? 0);
    if (Number.isNaN(total) || total <= clientWidth) {
      return Infinity;
    }
    while (maxIndex) {
      total -= (tabs[maxIndex]?.scrollWidth ?? 0) + margin;
      maxIndex--;
      const activeDisplaced = exposeActive && activeItemIndex() > maxIndex;
      const activeOffset = activeDisplaced ? activeWidth + margin : 0;
      const currentWidth = total + activeOffset + moreWidth + margin;
      const safetyOffset = tuiToInt(this.maxIndex === maxIndex - 1);
      if (currentWidth + safetyOffset < clientWidth) {
        return maxIndex;
      }
    }
    return -1;
  }
  // TODO: Remove when anchor positioning will be available in all modern browsers: https://caniuse.com/css-anchor-positioning
  refresh() {
    if ("anchorName" in this.el.style) {
      return;
    }
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = this.activeElement || {};
    this.dir()?.nativeElement.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.dir()?.nativeElement.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiTabsWithMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsWithMore)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabsWithMore,
      selectors: [["tui-tabs-with-more"]],
      contentQueries: function TuiTabsWithMore_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.items, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      viewQuery: function TuiTabsWithMore_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.moreButton, TuiTab, 5, ElementRef)(ctx.dir, TuiTabsHorizontal, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostVars: 1,
      hostBindings: function TuiTabsWithMore_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        activeItemIndex: [1, "activeItemIndex"],
        size: [1, "size"],
        underline: [1, "underline"],
        itemsLimit: [1, "itemsLimit"],
        moreContent: [1, "moreContent"],
        dropdownContent: [1, "dropdownContent"]
      },
      outputs: {
        activeItemIndex: "activeItemIndexChange"
      },
      features: [ɵɵProvidersFeature(TUI_TABS_PROVIDERS)],
      ngContentSelectors: _c09,
      decls: 8,
      vars: 4,
      consts: [["dropdown", ""], ["element", ""], [1, "t-tabs", 3, "activeItemIndexChange", "keydown.arrowRight", "size", "underline", "activeItemIndex"], ["tuiTab", "", "type", "button", 1, "t-more", 3, "_active", "t-no-margin", "t-overflown", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], ["tuiChevron", "", "tuiTab", "", "type", "button", 1, "t-more", 3, "_active", "t-no-margin", "t-overflown", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [3, "ngTemplateOutlet"], [1, "t-flex", 3, "t-overflown"], [1, "t-flex"], ["tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [4, "polymorpheusOutlet"], ["tuiChevron", "", "tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [1, "t-dropdown", 3, "keydown.arrowDown.prevent", "keydown.arrowUp.prevent"], [1, "t-dropdown-item"], [1, "t-dropdown-item", 3, "tui-tab-activate"]],
      template: function TuiTabsWithMore_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "tui-tabs", 2);
          ɵɵtwoWayListener("activeItemIndexChange", function TuiTabsWithMore_Template_tui_tabs_activeItemIndexChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.activeItemIndex, $event) || (ctx.activeItemIndex = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("keydown.arrowRight", function TuiTabsWithMore_Template_tui_tabs_keydown_arrowRight_0_listener($event) {
            return ctx.onArrowRight($event);
          });
          ɵɵrepeaterCreate(1, TuiTabsWithMore_For_2_Template, 2, 1, null, null, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵconditionalCreate(3, TuiTabsWithMore_Conditional_3_Template, 2, 10, "button", 3)(4, TuiTabsWithMore_Conditional_4_Template, 2, 10, "button", 4);
          ɵɵtemplate(5, TuiTabsWithMore_ng_template_5_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵprojection(7);
        }
        if (rf & 2) {
          ɵɵproperty("size", ctx.size())("underline", ctx.underline());
          ɵɵtwoWayProperty("activeItemIndex", ctx.activeItemIndex);
          ɵɵadvance();
          ɵɵrepeater(ctx.items());
          ɵɵadvance(2);
          ɵɵconditional(ctx.moreContent() ? 3 : 4);
        }
      },
      dependencies: [NgTemplateOutlet, PolymorpheusOutlet, TuiChevron, TuiDropdownDirective, TuiDropdownOpen, TuiTab, TuiTabsHorizontal],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}[data-size=m][_nghost-%COMP%]{font:var(--tui-typography-body-s)}.t-tabs[_ngcontent-%COMP%]{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex[_ngcontent-%COMP%]{display:flex}.t-overflown[_ngcontent-%COMP%]{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);margin-inline-end:-.25rem;vertical-align:bottom}.t-icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.t-dropdown[_ngcontent-%COMP%]{padding:.25rem 0}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;border-radius:var(--tui-radius-s);font:var(--tui-typography-body-m);line-height:1.5rem;color:var(--tui-text-primary)}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:before{display:none}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:hover, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:focus, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m][_ngcontent-%COMP%]     *[tuiTab]{block-size:2.25rem;font:var(--tui-typography-body-s)}.t-dropdown-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.t-no-margin[_ngcontent-%COMP%]{margin-inline-start:0}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsWithMore, [{
    type: Component,
    args: [{
      selector: "tui-tabs-with-more",
      imports: [NgTemplateOutlet, PolymorpheusOutlet, TuiChevron, TuiDropdown, TuiTab, TuiTabsHorizontal],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_TABS_PROVIDERS,
      host: {
        "[attr.data-size]": "size()"
      },
      template: '<tui-tabs\n    class="t-tabs"\n    [size]="size()"\n    [underline]="underline()"\n    [(activeItemIndex)]="activeItemIndex"\n    (keydown.arrowRight)="onArrowRight($event)"\n>\n    @for (item of items(); track item) {\n        @if ($index <= lastVisibleIndex) {\n            <ng-container [ngTemplateOutlet]="item" />\n        } @else {\n            <div\n                class="t-flex"\n                [class.t-overflown]="isOverflown($index)"\n            >\n                <ng-container [ngTemplateOutlet]="item" />\n            </div>\n        }\n    }\n</tui-tabs>\n\n@if (moreContent()) {\n    <button\n        tuiTab\n        type="button"\n        class="t-more"\n        [class._active]="isMoreActive"\n        [class.t-no-margin]="isMoreAlone"\n        [class.t-overflown]="!isMoreVisible"\n        [tabIndex]="isMoreFocusable ? 0 : -1"\n        [tuiDropdown]="dropdownContent() || dropdown"\n        [(tuiDropdownOpen)]="open"\n        (keydown.arrowLeft.prevent)="onArrowLeft()"\n    >\n        <ng-container *polymorpheusOutlet="moreContent() as text">\n            {{ text }}\n        </ng-container>\n    </button>\n} @else {\n    <button\n        tuiChevron\n        tuiTab\n        type="button"\n        class="t-more"\n        [class._active]="isMoreActive"\n        [class.t-no-margin]="isMoreAlone"\n        [class.t-overflown]="!isMoreVisible"\n        [tabIndex]="isMoreFocusable ? 0 : -1"\n        [tuiDropdown]="dropdownContent() || dropdown"\n        [(tuiDropdownOpen)]="open"\n        (keydown.arrowLeft.prevent)="onArrowLeft()"\n    >\n        {{ moreWord() }}\n    </button>\n}\n<ng-template #dropdown>\n    <div\n        #element\n        class="t-dropdown"\n        [attr.data-size]="size()"\n        (keydown.arrowDown.prevent)="onWrapperArrow($event, element, false)"\n        (keydown.arrowUp.prevent)="onWrapperArrow($event, element, true)"\n    >\n        @for (item of items(); track item) {\n            <div\n                class="t-dropdown-item"\n                (tui-tab-activate)="onClick($index)"\n            >\n                @if (shouldShow($index)) {\n                    <ng-container *polymorpheusOutlet="item" />\n                }\n            </div>\n        }\n    </div>\n</ng-template>\n\n<ng-content />\n',
      styles: [":host{position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}:host[data-size=m]{font:var(--tui-typography-body-s)}.t-tabs{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex{display:flex}.t-overflown{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);margin-inline-end:-.25rem;vertical-align:bottom}.t-icon_rotated{transform:rotate(180deg)}.t-dropdown{padding:.25rem 0}.t-dropdown ::ng-deep *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;border-radius:var(--tui-radius-s);font:var(--tui-typography-body-m);line-height:1.5rem;color:var(--tui-text-primary)}.t-dropdown ::ng-deep *[tuiTab]:before{display:none}.t-dropdown ::ng-deep *[tuiTab]:hover,.t-dropdown ::ng-deep *[tuiTab]:focus,.t-dropdown ::ng-deep *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m] ::ng-deep *[tuiTab]{block-size:2.25rem;font:var(--tui-typography-body-s)}.t-dropdown-item{display:flex;flex-direction:column}.t-no-margin{margin-inline-start:0}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-items-with-more.mjs
var _c010 = (a0) => ({
  $implicit: a0
});
function TuiItemsWithMoreComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiItemsWithMoreComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, TuiItemsWithMoreComponent_For_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("t-item_hidden", ctx_r3.isHidden($index_r3));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiItemsWithMoreComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelementContainer(1, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.more() || null)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c010, ctx_r3.lastIndex()));
  }
}
function TuiItemsWithMoreComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiItemsWithMoreComponent_ng_template_4_Conditional_0_Template, 2, 4, "span", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵconditional(!ctx_r3.isMoreHidden() ? 0 : -1);
  }
}
var TuiItemsWithMoreDirective = class _TuiItemsWithMoreDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.itemsLimit = input(Infinity);
    this.required = input(-1);
    this.linesLimit = input(1);
    this.side = input("end");
    this.align = computed(() => this.linesLimit() > 1 ? "end" : this.side());
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  maxWidth() {
    return Math.max(...Array.from(this.el.children, ({
      clientWidth
    }) => clientWidth));
  }
  static {
    this.ɵfac = function TuiItemsWithMoreDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsWithMoreDirective,
      hostVars: 4,
      hostBindings: function TuiItemsWithMoreDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-min-width", ctx.maxWidth(), "px");
          ɵɵclassProp("_multiline", ctx.linesLimit() > 1);
        }
      },
      inputs: {
        itemsLimit: [1, "itemsLimit"],
        required: [1, "required"],
        linesLimit: [1, "linesLimit"],
        side: [1, "side"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreDirective, [{
    type: Directive,
    args: [{
      host: {
        "[class._multiline]": "linesLimit() > 1",
        "[style.--t-min-width.px]": "maxWidth()"
      }
    }]
  }], null, null);
})();
var TuiItemsWithMoreService = class _TuiItemsWithMoreService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.directive = inject(TuiItemsWithMoreDirective);
    this.stream$ = merge(this.directive.change$, inject(WaMutationObserverService, {
      self: true
    }), inject(WaResizeObserverService, {
      self: true
    })).pipe(debounceTime(0, tuiZonefreeScheduler()), map(() => this.directive.linesLimit() > 1 ? this.getOverflowIndexMultiline() : this.getOverflowIndex(Array.from(this.el.children))), distinctUntilChanged(), tuiZoneOptimized(), share());
  }
  getOverflowIndex(children) {
    const {
      align,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const items = Array.from(children, ({
      clientWidth: clientWidth2
    }) => clientWidth2);
    const index = align() === "start" ? 0 : items.length - 1;
    const more = children[index]?.tagName === "SPAN" ? items[index] ?? 0 : 0;
    const total = items.reduce((sum, width) => sum + width, 0) - more;
    if (total <= clientWidth && itemsLimit() >= items.length) {
      return align() === "end" ? itemsLimit() : 0;
    }
    return align() === "start" ? this.getIndexStart(items, total, more) : this.getIndexEnd(items, total, more);
  }
  getIndexStart(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const min = Number.isFinite(itemsLimit()) ? items.length - itemsLimit() - 1 : 0;
    const last = items.length - 1;
    const mandatory = required() === -1 ? last : required();
    for (let i = 1; i < last; i++) {
      if (i === mandatory + 1) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i, mandatory < min ? min + 1 : min, items.length);
      }
    }
    return items.length;
  }
  getIndexEnd(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const max = itemsLimit() > required() ? itemsLimit() - 1 : itemsLimit() - 2;
    const last = items.length - 1;
    const mandatory = required() === -1 ? 0 : required;
    for (let i = last - 1; i > 0; i--) {
      if (i === mandatory) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i - 1, -1, max);
      }
    }
    return -1;
  }
  getOverflowIndexMultiline() {
    const {
      children
    } = this.el;
    const {
      linesLimit,
      itemsLimit
    } = this.directive;
    const items = Array.from(children);
    const rows = new Set(items.map((item) => item.offsetTop));
    const offset = Array.from(rows)[linesLimit() - 1];
    const firstItemLastRow = items.findIndex((i) => i.offsetTop === offset);
    const lastRow = items.slice(firstItemLastRow);
    const index = firstItemLastRow + this.getOverflowIndex(lastRow);
    return Math.min(itemsLimit() - 1, index);
  }
  static {
    this.ɵfac = function TuiItemsWithMoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiItemsWithMoreService,
      factory: _TuiItemsWithMoreService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiMore = class _TuiMore {
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMore)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiMore,
      selectors: [["", "tuiMore", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMore, [{
    type: Directive,
    args: [{
      selector: "[tuiMore]"
    }]
  }], null, null);
})();
var TuiItemsWithMoreComponent = class _TuiItemsWithMoreComponent {
  constructor() {
    this.service = inject(TuiItemsWithMoreService);
    this.directive = inject(TuiItemsWithMoreDirective);
    this.more = contentChild(TuiMore, {
      read: TemplateRef
    });
    this.items = contentChildren(TuiItem, {
      read: TemplateRef,
      descendants: true
    });
    this.isMoreHidden = computed((index = this.lastIndex()) => index >= this.items().length - 1 && this.directive.align() === "end" || !index && this.directive.align() === "start");
    this.lastIndexChange = outputFromObservable(this.service);
    this.lastIndex = toSignal(this.service, {
      initialValue: 0
    });
  }
  isHidden(index) {
    const {
      align,
      required
    } = this.directive;
    return index > this.lastIndex() && index !== required() && align() === "end" || index < this.lastIndex() && index !== required() && align() === "start";
  }
  static {
    this.ɵfac = function TuiItemsWithMoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiItemsWithMoreComponent,
      selectors: [["tui-items-with-more"]],
      contentQueries: function TuiItemsWithMoreComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.more, TuiMore, 5, TemplateRef)(dirIndex, ctx.items, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      outputs: {
        lastIndexChange: "lastIndexChange"
      },
      features: [ɵɵProvidersFeature([WaMutationObserverService, WaResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "itemsLimit", "required", "required", "side", "side", "linesLimit", "linesLimit"]
      }])],
      decls: 6,
      vars: 2,
      consts: [["template", ""], [3, "ngTemplateOutlet"], [1, "t-item", 3, "t-item_hidden"], [1, "t-item"], [4, "ngTemplateOutlet"], [1, "t-item", "t-item_more"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TuiItemsWithMoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiItemsWithMoreComponent_Conditional_0_Template, 1, 1, "ng-container", 1);
          ɵɵrepeaterCreate(1, TuiItemsWithMoreComponent_For_2_Template, 2, 3, "div", 2, ɵɵrepeaterTrackByIdentity);
          ɵɵconditionalCreate(3, TuiItemsWithMoreComponent_Conditional_3_Template, 1, 1, "ng-container", 1);
          ɵɵtemplate(4, TuiItemsWithMoreComponent_ng_template_4_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.directive.side() === "start" ? 0 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.items());
          ɵɵadvance(2);
          ɵɵconditional(ctx.directive.side() === "end" ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap;gap:0!important}._multiline[_nghost-%COMP%]{flex-wrap:wrap}.t-item[_ngcontent-%COMP%]{flex:0 0 auto;max-inline-size:100%}.t-item_hidden[_ngcontent-%COMP%]{position:absolute;inset-block-end:0;visibility:hidden}._multiline[_nghost-%COMP%]   .t-item_more[_ngcontent-%COMP%]:not(:empty){min-inline-size:var(--t-min-width, 0)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreComponent, [{
    type: Component,
    args: [{
      selector: "tui-items-with-more",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [WaMutationObserverService, WaResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "required", "side", "linesLimit"]
      }],
      template: `@if (directive.side() === 'start') {
    <ng-container [ngTemplateOutlet]="template" />
}
@for (item of items(); track item) {
    <div
        class="t-item"
        [class.t-item_hidden]="isHidden($index)"
    >
        <ng-container *ngTemplateOutlet="item" />
    </div>
}
@if (directive.side() === 'end') {
    <ng-container [ngTemplateOutlet]="template" />
}
<ng-template #template>
    @if (!isMoreHidden()) {
        <span class="t-item t-item_more">
            <ng-container
                [ngTemplateOutlet]="more() || null"
                [ngTemplateOutletContext]="{$implicit: lastIndex()}"
            />
        </span>
    }
</ng-template>
`,
      styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap;gap:0!important}:host._multiline{flex-wrap:wrap}.t-item{flex:0 0 auto;max-inline-size:100%}.t-item_hidden{position:absolute;inset-block-end:0;visibility:hidden}:host._multiline .t-item_more:not(:empty){min-inline-size:var(--t-min-width, 0)}\n"]
    }]
  }], null, null);
})();
var TuiItemsWithMore = [TuiItemsWithMoreComponent, TuiItemsWithMoreDirective, TuiMore, TuiItem];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-breadcrumbs.mjs
var _c011 = ["*"];
function TuiBreadcrumbs_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4)(1, 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.items()[0] || null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext(5);
    const separator_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 4);
    ɵɵconditionalCreate(2, TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Conditional_2_Template, 1, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const item_r4 = ctx_r2.$implicit;
    const ɵ$index_9_r5 = ctx_r2.$index;
    const ɵ$count_9_r6 = ctx_r2.$count;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r4);
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_9_r5 === ɵ$count_9_r6 - 1) ? 2 : -1);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Template, 3, 2, "ng-container", 5);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_Template, 1, 0, "ng-container");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(item_r4 !== ctx_r0.items()[0] || ctx_r0.itemsLimit() === 2 ? 0 : -1);
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r7);
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Conditional_0_Template, 2, 1, "span", 9);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const $count_r9 = ctx.$count;
    const index_r10 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional($index_r8 + ctx_r0.offset() && $index_r8 <= index_r10 && item_r7 !== ctx_r0.items()[$count_r9 - 1] ? 0 : -1);
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 8);
    ɵɵrepeaterCreate(1, TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.items());
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6)(1, "button", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainer(3, 4);
    ɵɵelementEnd();
    ɵɵtemplate(4, TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_Template, 3, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const dropdown_r11 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("iconStart", ctx_r0.icons.ellipsis)("tuiDropdown", dropdown_r11);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.more(), " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_Conditional_0_Template, 2, 2);
    ɵɵelementStart(1, "tui-items-with-more", 2);
    ɵɵrepeaterCreate(2, TuiBreadcrumbs_Conditional_0_For_3_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵtemplate(4, TuiBreadcrumbs_Conditional_0_ng_template_4_Template, 6, 4, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.itemsLimit() !== 2 ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("itemsLimit", ctx_r0.itemsLimit() - 2)("required", ctx_r0.items().length + ctx_r0.offset() - 2);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.items());
  }
}
function TuiBreadcrumbs_Conditional_1_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const separator_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
    ɵɵconditionalCreate(1, TuiBreadcrumbs_Conditional_1_For_1_Conditional_1_Template, 1, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ɵ$index_40_r13 = ctx.$index;
    const ɵ$count_40_r14 = ctx.$count;
    ɵɵproperty("ngTemplateOutlet", item_r12);
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_40_r13 === ɵ$count_40_r14 - 1) ? 1 : -1);
  }
}
function TuiBreadcrumbs_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, TuiBreadcrumbs_Conditional_1_For_1_Template, 2, 2, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.items());
  }
}
function TuiBreadcrumbs_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_ng_template_2_Conditional_0_Template, 1, 1, "tui-icon", 10)(1, TuiBreadcrumbs_ng_template_2_Conditional_1_Template, 2, 1, "span", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.options.icon.length > 1 ? 0 : 1);
  }
}
var TUI_BREADCRUMBS_DEFAULT_OPTIONS = {
  icon: "@tui.chevron-right",
  size: "m",
  itemsLimit: 0
};
var [TUI_BREADCRUMBS_OPTIONS, tuiBreadcrumbsOptionsProvider] = tuiCreateOptions(TUI_BREADCRUMBS_DEFAULT_OPTIONS);
var TuiBreadcrumbs = class _TuiBreadcrumbs {
  constructor() {
    this.items = contentChildren(TuiItem, {
      read: TemplateRef
    });
    this.options = inject(TUI_BREADCRUMBS_OPTIONS);
    this.icons = inject(TUI_COMMON_ICONS);
    this.more = inject(TUI_MORE_WORD);
    this.size = input(this.options.size);
    this.itemsLimit = input(this.options.itemsLimit);
    this.offset = computed(() => this.itemsLimit() === 2 ? 1 : 0);
  }
  static {
    this.ɵfac = function TuiBreadcrumbs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBreadcrumbs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBreadcrumbs,
      selectors: [["tui-breadcrumbs"]],
      contentQueries: function TuiBreadcrumbs_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.items, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostVars: 1,
      hostBindings: function TuiBreadcrumbs_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"],
        itemsLimit: [1, "itemsLimit"]
      },
      features: [ɵɵProvidersFeature([tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })])],
      ngContentSelectors: _c011,
      decls: 5,
      vars: 1,
      consts: [["separator", ""], ["dropdown", ""], ["side", "start", 3, "itemsLimit", "required"], ["tuiMore", ""], [3, "ngTemplateOutlet"], [4, "tuiItem"], [1, "t-more"], ["appearance", "flat", "size", "xs", "tuiDropdownAuto", "", "tuiIconButton", "", "type", "button", 3, "iconStart", "tuiDropdown"], ["size", "s"], ["tuiOption", "", 1, "t-option"], [1, "t-icon", 3, "icon"], [1, "t-char"]],
      template: function TuiBreadcrumbs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_Template, 5, 3)(1, TuiBreadcrumbs_Conditional_1_Template, 2, 0);
          ɵɵtemplate(2, TuiBreadcrumbs_ng_template_2_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵprojection(4);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.itemsLimit() > 1 ? 0 : 1);
        }
      },
      dependencies: [NgTemplateOutlet, TuiButton, TuiDataListComponent, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiItemsWithMoreComponent, TuiMore, TuiItem],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}[data-size=m][_nghost-%COMP%]{font:var(--tui-typography-body-s);line-height:1.5rem;block-size:1.5rem}[data-size=l][_nghost-%COMP%]{font:var(--tui-typography-body-m);line-height:2.5rem;block-size:2.5rem}[_nghost-%COMP%]     [tuiLink]{text-decoration:none}.t-more[_ngcontent-%COMP%]{display:flex;align-items:center}.t-option[_ngcontent-%COMP%]    >*{color:var(--tui-text-primary)!important;background:transparent!important;text-decoration:none}.t-icon[_ngcontent-%COMP%]{margin:0 .5rem;font-size:1rem;transform:scaleX(var(--tui-inline))}.t-char[_ngcontent-%COMP%]{margin:0 .375rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "tui-breadcrumbs",
      imports: [NgTemplateOutlet, TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiItemsWithMore],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })],
      host: {
        "[attr.data-size]": "size()"
      },
      template: '@if (itemsLimit() > 1) {\n    @if (itemsLimit() !== 2) {\n        <ng-container [ngTemplateOutlet]="items()[0] || null" />\n        <ng-container [ngTemplateOutlet]="separator" />\n    }\n    <tui-items-with-more\n        side="start"\n        [itemsLimit]="itemsLimit() - 2"\n        [required]="items().length + offset() - 2"\n    >\n        @for (item of items(); track item) {\n            @if (item !== items()[0] || itemsLimit() === 2) {\n                <ng-container *tuiItem>\n                    <ng-container [ngTemplateOutlet]="item" />\n                    @if (!$last) {\n                        <ng-container [ngTemplateOutlet]="separator" />\n                    }\n                </ng-container>\n            }\n        }\n        <ng-template\n            let-index\n            tuiMore\n        >\n            <span class="t-more">\n                <button\n                    appearance="flat"\n                    size="xs"\n                    tuiDropdownAuto\n                    tuiIconButton\n                    type="button"\n                    [iconStart]="icons.ellipsis"\n                    [tuiDropdown]="dropdown"\n                >\n                    {{ more() }}\n                </button>\n                <ng-container [ngTemplateOutlet]="separator" />\n            </span>\n            <ng-template #dropdown>\n                <tui-data-list size="s">\n                    @for (item of items(); track item) {\n                        @if ($index + offset() && $index <= index && item !== items()[$count - 1]) {\n                            <span\n                                tuiOption\n                                class="t-option"\n                            >\n                                <ng-container [ngTemplateOutlet]="item" />\n                            </span>\n                        }\n                    }\n                </tui-data-list>\n            </ng-template>\n        </ng-template>\n    </tui-items-with-more>\n} @else {\n    @for (item of items(); track item) {\n        <ng-container [ngTemplateOutlet]="item" />\n        @if (!$last) {\n            <ng-container [ngTemplateOutlet]="separator" />\n        }\n    }\n}\n<ng-template #separator>\n    @if (options.icon.length > 1) {\n        <tui-icon\n            class="t-icon"\n            [icon]="options.icon"\n        />\n    } @else {\n        <span class="t-char">{{ options.icon }}</span>\n    }\n</ng-template>\n\n<ng-content />\n',
      styles: [":host{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}:host[data-size=m]{font:var(--tui-typography-body-s);line-height:1.5rem;block-size:1.5rem}:host[data-size=l]{font:var(--tui-typography-body-m);line-height:2.5rem;block-size:2.5rem}:host ::ng-deep [tuiLink]{text-decoration:none}.t-more{display:flex;align-items:center}.t-option ::ng-deep>*{color:var(--tui-text-primary)!important;background:transparent!important;text-decoration:none}.t-icon{margin:0 .5rem;font-size:1rem;transform:scaleX(var(--tui-inline))}.t-char{margin:0 .375rem}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-navigation.mjs
var _c012 = [[["header"]], "*", [["footer"]]];
var _c13 = ["header", "*", "footer"];
var _c22 = ["datalist"];
var _c32 = ["*"];
function TuiAsideGroupComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiAsideGroupComponent_ng_template_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiAsideGroupComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list")(1, "tui-opt-group", 5);
    ɵɵtemplate(2, TuiAsideGroupComponent_ng_template_5_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const host_r2 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("label", host_r2.textContent);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r0.template());
  }
}
function TuiDrawerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDrawerDirective_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c4 = [[["", "tuiLink", ""]], [["tui-breadcrumbs"]], [["", "tuiHeader", ""]], "*", [["tui-tabs"], ["", "tuiTabs", ""]]];
var _c5 = ["[tuiLink]", "tui-breadcrumbs", "[tuiHeader]", "*", "tui-tabs,[tuiTabs]"];
var _c6 = ["*", [["tui-tabs"], ["tui-tabs-with-more"]], [["", "tuiButton", ""], ["", "tuiIconButton", ""]]];
var _c7 = ["*", "tui-tabs,tui-tabs-with-more", "[tuiButton],[tuiIconButton]"];
var _c8 = '[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]){z-index:1;inset-block-start:3rem;block-size:var(--tui-height-m);padding-block-start:.25rem;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]):before{content:"";display:block;block-size:100%;border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,transparent 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader{position:absolute;display:flex;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;block-size:inherit;align-items:center;gap:.5rem;font:var(--tui-typography-body-s);white-space:nowrap;overflow:hidden;padding:inherit}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-breadcrumbs{flex:1;overflow:hidden}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs-with-more{margin-inline-start:auto;margin-inline-end:1.5rem;border-inline-start:3rem solid transparent;box-shadow:none}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs:before,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs-with-more:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]){margin-block-start:.875rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]{margin:1rem 0 .5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]:first-child{margin-block-start:0}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiTitle]{max-inline-size:42rem;margin-inline-end:auto}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle] tui-icon{font-size:1rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]+tui-textfield{margin-block-start:.75rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs{margin-block-start:.5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiIconButton]{margin-inline-start:.5rem;align-self:center}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiIconButton]{margin-inline-start:auto}\n';
var TuiAsideComponent = class _TuiAsideComponent {
  constructor() {
    this.expanded = input(false, {
      alias: "tuiNavigationAside"
    });
  }
  static {
    this.ɵfac = function TuiAsideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAsideComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAsideComponent,
      selectors: [["aside", "tuiNavigationAside", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiNavigationAside", "", "tuiTheme", "dark"],
      hostVars: 2,
      hostBindings: function TuiAsideComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_expanded", ctx.expanded());
        }
      },
      inputs: {
        expanded: [1, "tuiNavigationAside", "expanded"]
      },
      features: [ɵɵProvidersFeature([tuiHintOptionsProvider({
        appearance: "floating"
      }), tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation",
        align: "end",
        offset: 12
      })])],
      ngContentSelectors: _c13,
      decls: 5,
      vars: 0,
      consts: [[1, "t-nav-scrollbar"], ["tuiFade", "vertical", "tuiScrollable", "", 1, "t-nav-content"]],
      template: function TuiAsideComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c012);
          ɵɵprojection(0);
          ɵɵelementStart(1, "tui-scrollbar", 0)(2, "div", 1);
          ɵɵprojection(3, 1);
          ɵɵelementEnd()();
          ɵɵprojection(4, 2);
        }
      },
      dependencies: [TuiFade, TuiScrollable, TuiScrollbar],
      styles: ['aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]){transition-property:width;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:sticky;z-index:1;display:flex;inset-block-start:3rem;inset-inline-start:0;inline-size:3rem;min-block-size:0;flex-direction:column;padding:.5rem .5rem .25rem;box-sizing:border-box;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]):before{content:"";position:absolute;z-index:-1;inset-block-start:0;inset-inline-start:100%;block-size:3rem;inline-size:3rem;pointer-events:none;border-top-left-radius:1.25rem;box-shadow:-1.5rem 0 var(--tui-theme-color, #000);transform:scaleX(var(--tui-inline));clip-path:inset(0)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"])._expanded{inline-size:14.375rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"])._expanded+main[tuiNavigationMain]{max-inline-size:calc(100% - 14.375rem)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-scrollbar{margin:0 -.25rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-content{scrollbar-width:none;-ms-overflow-style:none;block-size:100%;padding:0 .25rem;overflow:auto}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-content::-webkit-scrollbar,aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-content::-webkit-scrollbar-thumb{display:none}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) tui-expand [tuiAsideItem]{padding-inline-start:2rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) hr{background:var(--tui-border-normal);block-size:1px;margin:0 0 .25rem;border:none}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) header{padding-block-end:.25rem;box-shadow:inset 0 -1px var(--tui-border-normal);margin-block-end:1rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) footer{display:flex;flex-direction:column;flex:1}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) footer:before{content:"";min-block-size:1.75rem;margin:0 -.5rem;flex:1;-webkit-mask-image:linear-gradient(transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%);mask-image:linear-gradient(transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"])+main[tuiNavigationMain]{max-inline-size:calc(100% - 3rem)}[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"]){inline-size:100%;justify-content:flex-start;gap:.625rem;margin-block-end:.25rem}[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"]):after{border:none!important;margin-inline-start:auto!important;color:var(--tui-text-tertiary)}[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"]).tui-dropdown-open,[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"])._active:not(._chevron-rotated),aside[tuiNavigationAside]:not(._expanded) [tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"])._active{background:var(--tui-background-neutral-1-hover)}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation]{border:none;background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]{margin:0}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._active{background:transparent}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link:not(._custom):after{opacity:0}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link._active:after{opacity:1}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAsideComponent, [{
    type: Component,
    args: [{
      selector: "aside[tuiNavigationAside]",
      imports: [TuiFade, TuiScrollable, TuiScrollbar],
      template: `
        <ng-content select="header" />
        <tui-scrollbar class="t-nav-scrollbar">
            <div
                tuiFade="vertical"
                tuiScrollable
                class="t-nav-content"
            >
                <ng-content />
            </div>
        </tui-scrollbar>
        <ng-content select="footer" />
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiHintOptionsProvider({
        appearance: "floating"
      }), tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation",
        align: "end",
        offset: 12
      })],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiNavigationAside: "",
        tuiTheme: "dark",
        "[class._expanded]": "expanded()"
      },
      styles: ['aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]){transition-property:width;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:sticky;z-index:1;display:flex;inset-block-start:3rem;inset-inline-start:0;inline-size:3rem;min-block-size:0;flex-direction:column;padding:.5rem .5rem .25rem;box-sizing:border-box;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]):before{content:"";position:absolute;z-index:-1;inset-block-start:0;inset-inline-start:100%;block-size:3rem;inline-size:3rem;pointer-events:none;border-top-left-radius:1.25rem;box-shadow:-1.5rem 0 var(--tui-theme-color, #000);transform:scaleX(var(--tui-inline));clip-path:inset(0)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"])._expanded{inline-size:14.375rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"])._expanded+main[tuiNavigationMain]{max-inline-size:calc(100% - 14.375rem)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-scrollbar{margin:0 -.25rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-content{scrollbar-width:none;-ms-overflow-style:none;block-size:100%;padding:0 .25rem;overflow:auto}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-content::-webkit-scrollbar,aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) .t-nav-content::-webkit-scrollbar-thumb{display:none}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) tui-expand [tuiAsideItem]{padding-inline-start:2rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) hr{background:var(--tui-border-normal);block-size:1px;margin:0 0 .25rem;border:none}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) header{padding-block-end:.25rem;box-shadow:inset 0 -1px var(--tui-border-normal);margin-block-end:1rem}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) footer{display:flex;flex-direction:column;flex:1}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"]) footer:before{content:"";min-block-size:1.75rem;margin:0 -.5rem;flex:1;-webkit-mask-image:linear-gradient(transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%);mask-image:linear-gradient(transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%)}aside[tuiNavigationAside]:where(*[data-tui-version="5.15.0"])+main[tuiNavigationMain]{max-inline-size:calc(100% - 3rem)}[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"]){inline-size:100%;justify-content:flex-start;gap:.625rem;margin-block-end:.25rem}[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"]):after{border:none!important;margin-inline-start:auto!important;color:var(--tui-text-tertiary)}[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"]).tui-dropdown-open,[tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"])._active:not(._chevron-rotated),aside[tuiNavigationAside]:not(._expanded) [tuiAsideItem][tuiAsideItem]:where(*[data-tui-version="5.15.0"])._active{background:var(--tui-background-neutral-1-hover)}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation]{border:none;background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]{margin:0}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._active{background:transparent}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link:not(._custom):after{opacity:0}[data-tui-version="5.15.0"] tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link._active:after{opacity:1}\n']
    }]
  }], null, null);
})();
var TuiAsideGroupComponent = class _TuiAsideGroupComponent {
  constructor() {
    this.datalist = viewChild("datalist");
    this.chevron = contentChild(TuiChevron);
    this.aside = inject(TuiAsideComponent);
    this.template = contentChild(TemplateRef);
    this.expanded = computed(() => this.aside.expanded() && this.open());
    this.chevronEffect = effect(() => {
      const chevron = this.chevron();
      if (chevron) {
        tuiSetSignal(chevron.rotated, this.expanded());
      }
    });
    this.binding = tuiDropdown(computed(() => this.aside.expanded() ? null : this.datalist()));
    this.size = "s";
    this.open = model(false);
  }
  toggle() {
    if (this.aside.expanded()) {
      this.open.set(!this.open());
    }
  }
  static {
    this.ɵfac = function TuiAsideGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAsideGroupComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAsideGroupComponent,
      selectors: [["tui-aside-group"]],
      contentQueries: function TuiAsideGroupComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.chevron, TuiChevron, 5)(dirIndex, ctx.template, TemplateRef, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      viewQuery: function TuiAsideGroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.datalist, _c22, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        open: [1, "open"]
      },
      outputs: {
        open: "openChange"
      },
      features: [ɵɵProvidersFeature([tuiAsDataListHost(_TuiAsideGroupComponent)]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiDropdownHover, TuiDropdownPositionSided, TuiDropdownOpen])],
      ngContentSelectors: _c32,
      decls: 7,
      vars: 2,
      consts: [["host", ""], ["datalist", ""], [3, "click"], [3, "expanded"], [4, "polymorpheusOutlet"], [3, "label"]],
      template: function TuiAsideGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 2, 0);
          ɵɵlistener("click", function TuiAsideGroupComponent_Template_div_click_0_listener() {
            return ctx.toggle();
          });
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "tui-expand", 3);
          ɵɵtemplate(4, TuiAsideGroupComponent_ng_container_4_Template, 1, 0, "ng-container", 4);
          ɵɵelementEnd();
          ɵɵtemplate(5, TuiAsideGroupComponent_ng_template_5_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("expanded", ctx.expanded());
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.template());
        }
      },
      dependencies: [PolymorpheusOutlet, TuiDataListComponent, TuiOptGroup, TuiExpand],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAsideGroupComponent, [{
    type: Component,
    args: [{
      selector: "tui-aside-group",
      imports: [PolymorpheusOutlet, TuiDataList, TuiExpand],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListHost(TuiAsideGroupComponent)],
      hostDirectives: [TuiDropdownDirective, TuiDropdownHover, TuiDropdownPositionSided, TuiDropdownOpen],
      template: '<div\n    #host\n    (click)="toggle()"\n>\n    <ng-content />\n</div>\n<tui-expand [expanded]="expanded()">\n    <ng-container *polymorpheusOutlet="template()" />\n</tui-expand>\n<ng-template #datalist>\n    <tui-data-list>\n        <tui-opt-group [label]="host.textContent">\n            <ng-container *polymorpheusOutlet="template()" />\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'
    }]
  }], null, null);
})();
var TuiHintAsideDirective = class _TuiHintAsideDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.aside = inject(TuiAsideComponent);
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.tuiHintAside = input(null);
    this.binding = tuiDirectiveBinding(TuiHintDirective, "content", computed(() => {
      const hint = this.tuiHintAside();
      const expanded = this.aside.expanded();
      return expanded || this.dropdown ? "" : hint || (() => this.el.textContent?.trim());
    }));
  }
  static {
    this.ɵfac = function TuiHintAsideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintAsideDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintAsideDirective,
      selectors: [["", "tuiHintAside", ""]],
      inputs: {
        tuiHintAside: [1, "tuiHintAside"]
      },
      features: [ɵɵProvidersFeature([tuiHintOptionsProvider({
        direction: "end"
      })]), ɵɵHostDirectivesFeature([{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintAsideDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHintAside]",
      providers: [tuiHintOptionsProvider({
        direction: "end"
      })],
      hostDirectives: [{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance"]
      }]
    }]
  }], null, null);
})();
var TuiAsideItemDirective = class _TuiAsideItemDirective {
  constructor() {
    this.icon = inject(TUI_COMMON_ICONS).check;
    this.icons = inject(TuiIcons);
    this.link = inject(RouterLink, {
      self: true,
      optional: true
    });
    this.active = toSignal(inject(RouterLinkActive).isActiveChange);
    this.size = "s";
  }
  static {
    this.ɵfac = function TuiAsideItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAsideItemDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAsideItemDirective,
      selectors: [["", "tuiAsideItem", ""]],
      hostAttrs: ["tuiAsideItem", "", "tuiButton", "", "tuiOption", ""],
      hostVars: 6,
      hostBindings: function TuiAsideItemDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_active", ctx.active())("_custom", ctx.icon !== ctx.icons.iconEnd())("_link", ctx.link);
        }
      },
      features: [ɵɵProvidersFeature([tuiAsDataListHost(_TuiAsideItemDirective), provideIcon(), provideDropdown()]), ɵɵHostDirectivesFeature([{
        directive: TuiHintAsideDirective,
        inputs: ["tuiHintAside", "tuiAsideItem"]
      }, TuiDropdownManual, TuiDropdownPositionSided, TuiButton, {
        directive: RouterLinkActive,
        inputs: ["routerLinkActiveOptions", "routerLinkActiveOptions"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAsideItemDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiAsideItem]",
      providers: [tuiAsDataListHost(TuiAsideItemDirective), provideIcon(), provideDropdown()],
      hostDirectives: [{
        directive: TuiHintAsideDirective,
        inputs: ["tuiHintAside:tuiAsideItem"]
      }, TuiDropdownManual, TuiDropdownPositionSided, TuiButton, {
        directive: RouterLinkActive,
        inputs: ["routerLinkActiveOptions"]
      }],
      host: {
        tuiAsideItem: "",
        tuiButton: "",
        tuiOption: "",
        "[class._active]": "active()",
        "[class._custom]": "icon !== icons.iconEnd()",
        "[class._link]": "link"
      }
    }]
  }], null, null);
})();
function provideIcon() {
  return {
    provide: TUI_ICON_END,
    useFactory: () => {
      if (inject(TuiChevron, {
        optional: true,
        self: true
      })) {
        return inject(TUI_CHEVRON);
      }
      const {
        check,
        more
      } = inject(TUI_COMMON_ICONS);
      const active = inject(TuiDataListComponent, {
        optional: true
      }) && inject(RouterLink, {
        self: true,
        optional: true
      }) ? check : "";
      return inject(TuiDropdownDirective, {
        self: true,
        optional: true
      }) ? more : active;
    }
  };
}
function provideDropdown() {
  return {
    provide: TUI_DROPDOWN_OPTIONS,
    useFactory: () => __spreadProps(__spreadValues({}, inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    })), {
      offset: inject(TuiDataListComponent, {
        optional: true
      }) ? 8 : 12
    })
  };
}
var TuiDrawerComponent = class _TuiDrawerComponent {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    this.top = tuiIsHTMLElement(this.directive.el.offsetParent) && tuiIsHTMLElement(this.directive.el.offsetParent.offsetParent) ? this.directive.el.offsetParent.getBoundingClientRect().bottom - Math.max(this.directive.el.offsetParent.offsetParent.getBoundingClientRect().top, 0) : 0;
  }
  static {
    this.ɵfac = function TuiDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDrawerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDrawerComponent,
      selectors: [["ng-component"]],
      hostAttrs: ["tuiTheme", "dark"],
      hostVars: 2,
      hostBindings: function TuiDrawerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("inset-block-start", ctx.top, "px");
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiActiveZone, TuiAnimated])],
      decls: 2,
      vars: 3,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiDrawerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-scrollbar");
          ɵɵtemplate(1, TuiDrawerComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("height", 100, "%");
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.directive.content());
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{position:fixed;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;background:var(--tui-theme-color, #000);inline-size:14.375rem;color:var(--tui-text-primary);pointer-events:auto;--tui-from: translateX(-100%)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiSlide}[_nghost-%COMP%]     tui-data-list [tuiOption]{justify-content:flex-start;gap:.75rem;margin:0;font:var(--tui-typography-ui-s);font-weight:700}[_nghost-%COMP%]     tui-data-list tui-opt-group:before{font:var(--tui-typography-body-xs);text-transform:uppercase;color:var(--tui-text-tertiary)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDrawerComponent, [{
    type: Component,
    args: [{
      imports: [PolymorpheusOutlet, TuiScrollbar],
      template: `
        <tui-scrollbar [style.height.%]="100">
            <ng-container *polymorpheusOutlet="directive.content()" />
        </tui-scrollbar>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiActiveZone, TuiAnimated],
      host: {
        tuiTheme: "dark",
        "[style.inset-block-start.px]": "top"
      },
      styles: [":host{position:fixed;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;background:var(--tui-theme-color, #000);inline-size:14.375rem;color:var(--tui-text-primary);pointer-events:auto;--tui-from: translateX(-100%)}:host.tui-enter,:host.tui-leave{animation-name:tuiSlide}:host ::ng-deep tui-data-list [tuiOption]{justify-content:flex-start;gap:.75rem;margin:0;font:var(--tui-typography-ui-s);font-weight:700}:host ::ng-deep tui-data-list tui-opt-group:before{font:var(--tui-typography-body-xs);text-transform:uppercase;color:var(--tui-text-tertiary)}\n"]
    }]
  }], null, null);
})();
var TuiDrawerDirective = class _TuiDrawerDirective {
  constructor() {
    this.x = inject(TUI_COMMON_ICONS).close;
    this.dropdown = tuiDropdown(null);
    this.open = inject(TuiDropdownOpen).open;
    this.template = viewChild(TemplateRef);
    this.ef = effect(() => this.dropdown.set(this.template()));
    this.icon = tuiIconStart(computed(() => this.open() ? this.x : ""));
  }
  static {
    this.ɵfac = function TuiDrawerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDrawerDirective)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDrawerDirective,
      selectors: [["", "tuiIconButton", "", "tuiNavigationDrawer", ""]],
      viewQuery: function TuiDrawerDirective_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.template, TemplateRef, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        appearance: "secondary-grayscale"
      }), {
        provide: TUI_ICON_END,
        useFactory: () => inject(TUI_LAYOUT_ICONS).grid
      }, {
        provide: TUI_DROPDOWN_COMPONENT,
        useValue: TuiDrawerComponent
      }]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiWithDropdownOpen])],
      ngContentSelectors: _c32,
      decls: 1,
      vars: 0,
      template: function TuiDrawerDirective_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomTemplate(0, TuiDrawerDirective_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDrawerDirective, [{
    type: Component,
    args: [{
      // TODO: move to host directives
      selector: "[tuiIconButton][tuiNavigationDrawer]",
      template: "<ng-template><ng-content /></ng-template>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        appearance: "secondary-grayscale"
      }), {
        provide: TUI_ICON_END,
        useFactory: () => inject(TUI_LAYOUT_ICONS).grid
      }, {
        provide: TUI_DROPDOWN_COMPONENT,
        useValue: TuiDrawerComponent
      }],
      hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen]
    }]
  }], null, null);
})();
var TuiHeaderComponent = class _TuiHeaderComponent {
  static {
    this.ɵfac = function TuiHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHeaderComponent,
      selectors: [["header", "tuiNavigationHeader", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiTheme", "dark"],
      features: [ɵɵProvidersFeature([tuiAvatarOptionsProvider({
        size: "s",
        appearance: "secondary-grayscale"
      }), tuiBadgeNotificationOptionsProvider({
        size: "xs"
      }), tuiBadgeOptionsProvider({
        size: "m",
        appearance: "primary"
      }), tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation"
      }), tuiTextfieldOptionsProvider({
        size: signal("s")
      }), tuiHintOptionsProvider({
        appearance: "floating"
      })])],
      ngContentSelectors: _c32,
      decls: 1,
      vars: 0,
      template: function TuiHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]){position:sticky;z-index:2;display:flex;inset-block-start:0;inset-inline-start:0;block-size:3rem;inline-size:100vw;align-items:center;gap:.25rem;padding:.5rem;box-sizing:border-box;font:var(--tui-typography-body-s);background:var(--tui-theme-color, #000);color:var(--tui-text-primary);box-shadow:0 -100rem 0 100rem var(--tui-theme-color, #000)}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]):before{content:"";position:absolute;z-index:-1;inset-block-start:100%;inset-inline:0;block-size:3rem;pointer-events:none;box-shadow:0 -1.5rem var(--tui-theme-color, #000);border-radius:1.25rem 1.25rem 0 0;clip-path:inset(0)}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationLogo]{padding:0 .5rem;margin:0 1rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationLogo] tui-icon{font-size:1rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationSegments]{display:flex;gap:.5rem;min-inline-size:12rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationSegments]>*:not(:last-child){flex:1 0 auto}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationSegments]>*:last-child{min-inline-size:3rem;flex:1 1 auto}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiButton],header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiBadge],header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiChip],header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) tui-badge{max-inline-size:12.5rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) hr{flex:1;block-size:calc(100% + 1rem);min-inline-size:4rem;margin:-.5rem 0;border:none;flex-shrink:0;background:transparent;-webkit-mask-image:linear-gradient(to right,transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%);mask-image:linear-gradient(to right,transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%)}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) hr~[tuiButton]{margin-inline-end:.5rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) tui-textfield{inline-size:12rem;margin-inline-end:1.75rem}tui-dropdown[data-appearance=dropdown-navigation]:where(*[data-tui-version="5.15.0"]){border:none;color:var(--tui-text-primary);background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHeaderComponent, [{
    type: Component,
    args: [{
      selector: "header[tuiNavigationHeader]",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAvatarOptionsProvider({
        size: "s",
        appearance: "secondary-grayscale"
      }), tuiBadgeNotificationOptionsProvider({
        size: "xs"
      }), tuiBadgeOptionsProvider({
        size: "m",
        appearance: "primary"
      }), tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation"
      }), tuiTextfieldOptionsProvider({
        size: signal("s")
      }), tuiHintOptionsProvider({
        appearance: "floating"
      })],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiTheme: "dark"
      },
      styles: ['header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]){position:sticky;z-index:2;display:flex;inset-block-start:0;inset-inline-start:0;block-size:3rem;inline-size:100vw;align-items:center;gap:.25rem;padding:.5rem;box-sizing:border-box;font:var(--tui-typography-body-s);background:var(--tui-theme-color, #000);color:var(--tui-text-primary);box-shadow:0 -100rem 0 100rem var(--tui-theme-color, #000)}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]):before{content:"";position:absolute;z-index:-1;inset-block-start:100%;inset-inline:0;block-size:3rem;pointer-events:none;box-shadow:0 -1.5rem var(--tui-theme-color, #000);border-radius:1.25rem 1.25rem 0 0;clip-path:inset(0)}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationLogo]{padding:0 .5rem;margin:0 1rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationLogo] tui-icon{font-size:1rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationSegments]{display:flex;gap:.5rem;min-inline-size:12rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationSegments]>*:not(:last-child){flex:1 0 auto}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiNavigationSegments]>*:last-child{min-inline-size:3rem;flex:1 1 auto}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiButton],header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiBadge],header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) [tuiChip],header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) tui-badge{max-inline-size:12.5rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) hr{flex:1;block-size:calc(100% + 1rem);min-inline-size:4rem;margin:-.5rem 0;border:none;flex-shrink:0;background:transparent;-webkit-mask-image:linear-gradient(to right,transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%);mask-image:linear-gradient(to right,transparent 0,black 3rem,black calc(100% - 3rem),transparent 100%)}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) hr~[tuiButton]{margin-inline-end:.5rem}header[tuiNavigationHeader][tuiNavigationHeader]:where(*[data-tui-version="5.15.0"]) tui-textfield{inline-size:12rem;margin-inline-end:1.75rem}tui-dropdown[data-appearance=dropdown-navigation]:where(*[data-tui-version="5.15.0"]){border:none;color:var(--tui-text-primary);background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}\n']
    }]
  }], null, null);
})();
var TuiLogoComponent = class _TuiLogoComponent {
  static {
    this.ɵfac = function TuiLogoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLogoComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLogoComponent,
      selectors: [["", "tuiNavigationLogo", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      ngContentSelectors: _c32,
      decls: 1,
      vars: 0,
      template: function TuiLogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['[tuiNavigationLogo]:where(*[data-tui-version="5.15.0"]){display:flex;align-items:center;gap:.5rem;overflow:hidden;white-space:nowrap;font-weight:700}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLogoComponent, [{
    type: Component,
    args: [{
      selector: "[tuiNavigationLogo]",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION
      },
      styles: ['[tuiNavigationLogo]:where(*[data-tui-version="5.15.0"]){display:flex;align-items:center;gap:.5rem;overflow:hidden;white-space:nowrap;font-weight:700}\n']
    }]
  }], null, null);
})();
var TuiMainComponent = class _TuiMainComponent {
  static {
    this.ɵfac = function TuiMainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMainComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMainComponent,
      selectors: [["main", "tuiNavigationMain", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiNavigationMain", ""],
      ngContentSelectors: _c32,
      decls: 1,
      vars: 0,
      template: function TuiMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"]){transition-property:max-width;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:relative;display:grid;grid-template-columns:repeat(12,minmax(0,8.5625rem));align-items:start;gap:1rem;place-content:start center;flex:1;border:1.5rem solid transparent;border-block-start:0;isolation:isolate;box-sizing:border-box}main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>*{grid-column:span 12;max-inline-size:100%}main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>nav[tuiNavigationNav]:not(:first-child){border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 100vw;box-shadow:inset 0 -1px var(--tui-border-normal)}main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>a:first-child,main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>button:first-child,main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>tui-breadcrumbs:first-child{block-size:1.25rem;padding:0;margin-block-start:.875rem;justify-self:flex-start}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMainComponent, [{
    type: Component,
    args: [{
      selector: "main[tuiNavigationMain]",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION,
        tuiNavigationMain: ""
      },
      styles: ['main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"]){transition-property:max-width;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);position:relative;display:grid;grid-template-columns:repeat(12,minmax(0,8.5625rem));align-items:start;gap:1rem;place-content:start center;flex:1;border:1.5rem solid transparent;border-block-start:0;isolation:isolate;box-sizing:border-box}main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>*{grid-column:span 12;max-inline-size:100%}main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>nav[tuiNavigationNav]:not(:first-child){border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 100vw;box-shadow:inset 0 -1px var(--tui-border-normal)}main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>a:first-child,main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>button:first-child,main[tuiNavigationMain]:where(*[data-tui-version="5.15.0"])>tui-breadcrumbs:first-child{block-size:1.25rem;padding:0;margin-block-start:.875rem;justify-self:flex-start}\n']
    }]
  }], null, null);
})();
var TuiNavComponent = class _TuiNavComponent {
  static {
    this.ɵfac = function TuiNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNavComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNavComponent,
      selectors: [["nav", "tuiNavigationNav", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      features: [ɵɵProvidersFeature([tuiBadgeOptionsProvider({
        size: "m"
      }), tuiButtonOptionsProvider({
        size: "s"
      }), tuiTabsOptionsProvider({
        size: "m"
      })])],
      ngContentSelectors: _c32,
      decls: 1,
      vars: 0,
      template: function TuiNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]){z-index:1;display:flex;inset-block-start:3rem;min-block-size:3rem;align-items:center;gap:.5rem;padding:.25rem 0 0;box-sizing:border-box;white-space:nowrap;overflow:hidden;font:var(--tui-typography-body-s);color:var(--tui-text-secondary);border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,var(--tui-background-base) 0) fill 0/0/0 100vw}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) [tuiNavigationLogo]{font:var(--tui-typography-body-m);font-weight:700;color:var(--tui-text-primary)}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"])>a{text-decoration:none;color:inherit}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"])>hr{inline-size:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) tui-icon{font-size:1rem;vertical-align:bottom}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) tui-tabs,nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) [tuiTabs]{box-shadow:none;margin-inline-end:1rem}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) tui-tabs:before,nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) [tuiTabs]:before{background:var(--tui-background-accent-opposite-pressed)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNavComponent, [{
    type: Component,
    args: [{
      selector: "nav[tuiNavigationNav]",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiBadgeOptionsProvider({
        size: "m"
      }), tuiButtonOptionsProvider({
        size: "s"
      }), tuiTabsOptionsProvider({
        size: "m"
      })],
      host: {
        "data-tui-version": TUI_VERSION
      },
      styles: ['nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]){z-index:1;display:flex;inset-block-start:3rem;min-block-size:3rem;align-items:center;gap:.5rem;padding:.25rem 0 0;box-sizing:border-box;white-space:nowrap;overflow:hidden;font:var(--tui-typography-body-s);color:var(--tui-text-secondary);border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,var(--tui-background-base) 0) fill 0/0/0 100vw}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) [tuiNavigationLogo]{font:var(--tui-typography-body-m);font-weight:700;color:var(--tui-text-primary)}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"])>a{text-decoration:none;color:inherit}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"])>hr{inline-size:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) tui-icon{font-size:1rem;vertical-align:bottom}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) tui-tabs,nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) [tuiTabs]{box-shadow:none;margin-inline-end:1rem}nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) tui-tabs:before,nav[tuiNavigationNav]:where(*[data-tui-version="5.15.0"]) [tuiTabs]:before{background:var(--tui-background-accent-opposite-pressed)}\n']
    }]
  }], null, null);
})();
var PROVIDERS = [tuiTextfieldOptionsProvider({
  size: signal("s")
}), tuiBreadcrumbsOptionsProvider({
  icon: "/"
}), tuiLinkOptionsProvider({
  appearance: "action-grayscale"
}), tuiTabsOptionsProvider({
  size: "m"
}), tuiDropdownOptionsProvider({
  align: "end"
}), tuiBadgeOptionsProvider({
  size: "m"
})];
var TuiSubheaderComponent = class _TuiSubheaderComponent {
  static {
    this.ɵfac = function TuiSubheaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSubheaderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSubheaderComponent,
      selectors: [["", "tuiSubheader", "", 3, "compact", ""], ["", "tuiNavigationSubheader", "", 3, "compact", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      features: [ɵɵProvidersFeature([PROVIDERS, tuiButtonOptionsProvider({
        appearance: "secondary",
        size: "xs"
      })])],
      ngContentSelectors: _c5,
      decls: 5,
      vars: 0,
      template: function TuiSubheaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c4);
          ɵɵprojection(0);
          ɵɵprojection(1, 1);
          ɵɵprojection(2, 2);
          ɵɵprojection(3, 3);
          ɵɵprojection(4, 4);
        }
      },
      styles: ['[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]){z-index:1;inset-block-start:3rem;block-size:var(--tui-height-m);padding-block-start:.25rem;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]):before{content:"";display:block;block-size:100%;border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,transparent 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader{position:absolute;display:flex;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;block-size:inherit;align-items:center;gap:.5rem;font:var(--tui-typography-body-s);white-space:nowrap;overflow:hidden;padding:inherit}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-breadcrumbs{flex:1;overflow:hidden}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs-with-more{margin-inline-start:auto;margin-inline-end:1.5rem;border-inline-start:3rem solid transparent;box-shadow:none}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs:before,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs-with-more:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]){margin-block-start:.875rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]{margin:1rem 0 .5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]:first-child{margin-block-start:0}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiTitle]{max-inline-size:42rem;margin-inline-end:auto}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle] tui-icon{font-size:1rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]+tui-textfield{margin-block-start:.75rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs{margin-block-start:.5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiIconButton]{margin-inline-start:.5rem;align-self:center}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiIconButton]{margin-inline-start:auto}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSubheaderComponent, [{
    type: Component,
    args: [{
      selector: "[tuiSubheader]:not([compact]),[tuiNavigationSubheader]:not([compact])",
      template: `
        <ng-content select="[tuiLink]" />
        <ng-content select="tui-breadcrumbs" />
        <ng-content select="[tuiHeader]" />
        <ng-content />
        <ng-content select="tui-tabs,[tuiTabs]" />
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [PROVIDERS, tuiButtonOptionsProvider({
        appearance: "secondary",
        size: "xs"
      })],
      host: {
        "data-tui-version": TUI_VERSION
      },
      styles: ['[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]){z-index:1;inset-block-start:3rem;block-size:var(--tui-height-m);padding-block-start:.25rem;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]):before{content:"";display:block;block-size:100%;border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,transparent 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader{position:absolute;display:flex;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;block-size:inherit;align-items:center;gap:.5rem;font:var(--tui-typography-body-s);white-space:nowrap;overflow:hidden;padding:inherit}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-breadcrumbs{flex:1;overflow:hidden}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs-with-more{margin-inline-start:auto;margin-inline-end:1.5rem;border-inline-start:3rem solid transparent;box-shadow:none}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs:before,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs-with-more:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]){margin-block-start:.875rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]{margin:1rem 0 .5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]:first-child{margin-block-start:0}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiTitle]{max-inline-size:42rem;margin-inline-end:auto}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle] tui-icon{font-size:1rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]+tui-textfield{margin-block-start:.75rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs{margin-block-start:.5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiIconButton]{margin-inline-start:.5rem;align-self:center}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiIconButton]{margin-inline-start:auto}\n']
    }]
  }], null, null);
})();
var TuiSubheaderCompactComponent = class _TuiSubheaderCompactComponent {
  static {
    this.ɵfac = function TuiSubheaderCompactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSubheaderCompactComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSubheaderCompactComponent,
      selectors: [["", "tuiSubheader", "", "compact", ""], ["", "tuiNavigationSubheader", "", "compact", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      features: [ɵɵProvidersFeature([PROVIDERS, tuiButtonOptionsProvider({
        size: "s"
      })])],
      ngContentSelectors: _c7,
      decls: 4,
      vars: 0,
      consts: [[1, "t-nav-subheader"]],
      template: function TuiSubheaderCompactComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c6);
          ɵɵdomElementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵprojection(2, 1);
          ɵɵprojection(3, 2);
          ɵɵdomElementEnd();
        }
      },
      styles: [_c8],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSubheaderCompactComponent, [{
    type: Component,
    args: [{
      selector: "[tuiSubheader][compact],[tuiNavigationSubheader][compact]",
      template: `
        <div class="t-nav-subheader">
            <ng-content />
            <ng-content select="tui-tabs,tui-tabs-with-more" />
            <ng-content select="[tuiButton],[tuiIconButton]" />
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [PROVIDERS, tuiButtonOptionsProvider({
        size: "s"
      })],
      host: {
        "data-tui-version": TUI_VERSION
      },
      styles: ['[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]){z-index:1;inset-block-start:3rem;block-size:var(--tui-height-m);padding-block-start:.25rem;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]):before{content:"";display:block;block-size:100%;border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,transparent 0) fill 0/0/0 100vw}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader{position:absolute;display:flex;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;block-size:inherit;align-items:center;gap:.5rem;font:var(--tui-typography-body-s);white-space:nowrap;overflow:hidden;padding:inherit}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-breadcrumbs{flex:1;overflow:hidden}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader>tui-tabs-with-more{margin-inline-start:auto;margin-inline-end:1.5rem;border-inline-start:3rem solid transparent;box-shadow:none}[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs:before,[tuiSubheader][compact]:where(*[data-tui-version="5.15.0"]) .t-nav-subheader tui-tabs-with-more:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]){margin-block-start:.875rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]{margin:1rem 0 .5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]:first-child{margin-block-start:0}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiTitle]{max-inline-size:42rem;margin-inline-end:auto}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader] [tuiSubtitle] tui-icon{font-size:1rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) [tuiHeader]+tui-textfield{margin-block-start:.75rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs{margin-block-start:.5rem}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs:before{background:var(--tui-background-accent-opposite-pressed)}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiIconButton]{margin-inline-start:.5rem;align-self:center}[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiButton],[tuiSubheader]:not([compact]):where(*[data-tui-version="5.15.0"]) tui-tabs [tuiTab]+[tuiIconButton]{margin-inline-start:auto}\n']
    }]
  }], null, null);
})();
var TuiNavigation = [TuiHeaderComponent, TuiLogoComponent, TuiMainComponent, TuiAsideComponent, TuiAsideGroupComponent, TuiAsideItemDirective, TuiNavComponent, TuiHintAsideDirective, TuiDrawerDirective, TuiSubheaderComponent, TuiSubheaderCompactComponent];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-pdf-viewer.mjs
var _c013 = ["*", [["", "tuiTitle", ""]], [["button"]]];
var _c14 = ["*", "[tuiTitle]", "button"];
function TuiPdfViewer_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-app-bar")(1, "button", 6);
    ɵɵlistener("click", function TuiPdfViewer_ng_template_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainer(3, 4);
    ɵɵelementContainerStart(4, 7);
    ɵɵelementContainer(5, 4);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const content_r3 = ɵɵreference(6);
    const actions_r4 = ɵɵreference(8);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.close(), " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", content_r3);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", actions_r4);
  }
}
function TuiPdfViewer_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiPdfViewer_ng_template_3_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("iconStart", ctx_r1.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.close(), " ");
  }
}
function TuiPdfViewer_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 8);
    ɵɵelementContainer(1, 4)(2, 4);
    ɵɵconditionalCreate(3, TuiPdfViewer_ng_template_3_Conditional_3_Template, 2, 2, "button", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const content_r3 = ɵɵreference(6);
    const actions_r4 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", content_r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actions_r4);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.context.closable || ctx_r1.context.closable ? 3 : -1);
  }
}
function TuiPdfViewer_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function TuiPdfViewer_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
var TuiPdfViewer = class _TuiPdfViewer {
  constructor() {
    this.breakpoint = inject(TUI_BREAKPOINT);
    this.isMobile = computed(() => this.breakpoint() === "mobile");
    this.el = tuiInjectElement();
    this.close = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.context = injectContext();
  }
  static {
    this.ɵfac = function TuiPdfViewer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPdfViewer)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPdfViewer,
      selectors: [["tui-pdf-viewer"]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 1,
      hostBindings: function TuiPdfViewer_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("tuiTheme", ctx.isMobile() ? "" : "dark");
        }
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider((mobile = inject(WA_IS_MOBILE)) => ({
        appearance: mobile ? "action" : "",
        size: mobile ? "l" : "s"
      }))])],
      ngContentSelectors: _c14,
      decls: 11,
      vars: 1,
      consts: [["mobile", ""], ["desktop", ""], ["content", ""], ["actions", ""], [3, "ngTemplateOutlet"], [1, "t-content"], ["tuiButton", "", "tuiSlot", "start", "type", "button", 3, "click"], ["tuiSlot", "end"], ["tuiTheme", "dark", 1, "t-header"], ["tuiIconButton", "", "type", "button", 3, "iconStart"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
      template: function TuiPdfViewer_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c013);
          ɵɵelementContainer(0, 4);
          ɵɵtemplate(1, TuiPdfViewer_ng_template_1_Template, 6, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, TuiPdfViewer_ng_template_3_Template, 4, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, TuiPdfViewer_ng_template_5_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor)(7, TuiPdfViewer_ng_template_7_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
          ɵɵelementStart(9, "section", 5);
          ɵɵprojection(10);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const mobile_r6 = ɵɵreference(2);
          const desktop_r7 = ɵɵreference(4);
          ɵɵproperty("ngTemplateOutlet", ctx.isMobile() ? mobile_r6 : desktop_r7);
        }
      },
      dependencies: [NgTemplateOutlet, TuiAppBarComponent, TuiAppBarDirective, TuiButton],
      styles: ['tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){position:relative;z-index:1;display:flex;flex-direction:column;inline-size:100vw;block-size:100%;flex:1;box-sizing:border-box;color:var(--tui-text-primary);--t-header: 3.5rem}tui-root:not(._mobile) tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){background:#000}tui-root:not(._mobile) tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin-inline-end:auto}tui-root:not(._mobile) tui-dialog tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){margin:-6rem calc(-1 * calc(50vw - var(--tui-width) / 2)) -2rem}tui-root._mobile tui-dialog tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){--t-header: 2.5rem;margin:0 -1rem -1rem}tui-root._mobile tui-dialog tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) 0 0}tui-sheet-dialog[data-appearance=fullscreen] tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){--t-header: 4.5rem;margin:0 -1rem -1.5rem}tui-sheet-dialog[data-appearance=fullscreen] tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-app-bar{margin:0}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) .t-header{display:flex;gap:.5rem;align-items:center;block-size:var(--t-header);padding:0 .75rem 0 1rem;justify-content:flex-end}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) .t-content{display:flex;flex:1;overflow:hidden;justify-content:center}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-loader,tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-block-status{inline-size:100%;margin-block-start:calc(-1 * var(--t-header))}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) iframe{inline-size:100%;border:none}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) [tuiButton][data-appearance=""],tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) [tuiIconButton][data-appearance=""]{color:var(--tui-text-primary);background:#4d4d4d;border-radius:5rem}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPdfViewer, [{
    type: Component,
    args: [{
      selector: "tui-pdf-viewer",
      imports: [NgTemplateOutlet, TuiAppBar, TuiButton],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider((mobile = inject(WA_IS_MOBILE)) => ({
        appearance: mobile ? "action" : "",
        size: mobile ? "l" : "s"
      }))],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.tuiTheme]": 'isMobile() ? "" : "dark"'
      },
      template: '<ng-container [ngTemplateOutlet]="isMobile() ? mobile : desktop" />\n\n<ng-template #mobile>\n    <tui-app-bar>\n        <button\n            tuiButton\n            tuiSlot="start"\n            type="button"\n            (click)="context.$implicit.complete()"\n        >\n            {{ close() }}\n        </button>\n        <ng-container [ngTemplateOutlet]="content" />\n        <ng-container tuiSlot="end">\n            <ng-container [ngTemplateOutlet]="actions" />\n        </ng-container>\n    </tui-app-bar>\n</ng-template>\n\n<ng-template #desktop>\n    <header\n        tuiTheme="dark"\n        class="t-header"\n    >\n        <ng-container [ngTemplateOutlet]="content" />\n        <ng-container [ngTemplateOutlet]="actions" />\n        @if ($any(context).closable || context.closable) {\n            <button\n                tuiIconButton\n                type="button"\n                [iconStart]="icons.close"\n                (click)="context.$implicit.complete()"\n            >\n                {{ close() }}\n            </button>\n        }\n    </header>\n</ng-template>\n\n<ng-template #content>\n    <ng-content select="[tuiTitle]" />\n</ng-template>\n\n<ng-template #actions>\n    <ng-content select="button" />\n</ng-template>\n\n<section class="t-content">\n    <ng-content />\n</section>\n',
      styles: ['tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){position:relative;z-index:1;display:flex;flex-direction:column;inline-size:100vw;block-size:100%;flex:1;box-sizing:border-box;color:var(--tui-text-primary);--t-header: 3.5rem}tui-root:not(._mobile) tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){background:#000}tui-root:not(._mobile) tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) [tuiTitle]{margin-inline-end:auto}tui-root:not(._mobile) tui-dialog tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){margin:-6rem calc(-1 * calc(50vw - var(--tui-width) / 2)) -2rem}tui-root._mobile tui-dialog tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){--t-header: 2.5rem;margin:0 -1rem -1rem}tui-root._mobile tui-dialog tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) 0 0}tui-sheet-dialog[data-appearance=fullscreen] tui-pdf-viewer:where(*[data-tui-version="5.15.0"]){--t-header: 4.5rem;margin:0 -1rem -1.5rem}tui-sheet-dialog[data-appearance=fullscreen] tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-app-bar{margin:0}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) .t-header{display:flex;gap:.5rem;align-items:center;block-size:var(--t-header);padding:0 .75rem 0 1rem;justify-content:flex-end}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) .t-content{display:flex;flex:1;overflow:hidden;justify-content:center}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-loader,tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) tui-block-status{inline-size:100%;margin-block-start:calc(-1 * var(--t-header))}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) iframe{inline-size:100%;border:none}tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) [tuiButton][data-appearance=""],tui-pdf-viewer:where(*[data-tui-version="5.15.0"]) [tuiIconButton][data-appearance=""]{color:var(--tui-text-primary);background:#4d4d4d;border-radius:5rem}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-search.mjs
var _c014 = ["*"];
function TuiSearchFilterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c15 = ["rem"];
function TuiSearchFiltersComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const template_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiSearchFiltersComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiSearchFiltersComponent_For_1_Conditional_0_Template, 1, 1, "ng-container", 3);
  }
  if (rf & 2) {
    const $index_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional($index_r2 < ctx_r2.overflown() ? 0 : -1);
  }
}
function TuiSearchFiltersComponent_Conditional_4_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const template_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", template_r5);
  }
}
function TuiSearchFiltersComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiSearchFiltersComponent_Conditional_4_For_5_Conditional_0_Template, 1, 1, "ng-container", 3);
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵconditional($index_r6 >= ctx_r2.overflown() ? 0 : -1);
  }
}
function TuiSearchFiltersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4)(1, "form", 5);
    ɵɵlistener("reset", function TuiSearchFiltersComponent_Conditional_4_Template_form_reset_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onReset());
    });
    ɵɵelementStart(2, "fieldset", 6);
    ɵɵprojection(3);
    ɵɵelementEnd();
    ɵɵrepeaterCreate(4, TuiSearchFiltersComponent_Conditional_4_For_5_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("_active", ctx_r2.enabled());
    ɵɵproperty("size", ctx_r2.size());
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r2.enabled());
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r2.templates());
  }
}
var TuiSearchComponent = class _TuiSearchComponent {
  static {
    this.ɵfac = function TuiSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSearchComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSearchComponent,
      selectors: [["search", "tuiSearch", ""]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "m"
      }), tuiBlockOptionsProvider({
        size: "s"
      }), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiTextfieldOptionsProvider({
        size: signal("m")
      })])],
      ngContentSelectors: _c014,
      decls: 1,
      vars: 0,
      template: function TuiSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form{display:flex;flex-direction:column;gap:.75rem}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form fieldset{display:flex;align-items:center;flex-wrap:wrap;gap:inherit;min-inline-size:0;padding:0;margin:0;border:0;color:var(--tui-text-secondary)}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-items-with-more{min-inline-size:0;flex:1}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-textfield,search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form [tuiSearchField]{flex:1;min-inline-size:11.25rem;max-inline-size:22.5rem}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-textfield:first-child,search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form [tuiSearchField]:first-child{max-inline-size:unset}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form hr{inline-size:1px;block-size:1rem;border:none;margin:0;background:var(--tui-border-normal)}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-filter{white-space:nowrap}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form [tuiLabel]{font:inherit}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSearchComponent, [{
    type: Component,
    args: [{
      selector: "search[tuiSearch]",
      template: "<ng-content/>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "m"
      }), tuiBlockOptionsProvider({
        size: "s"
      }), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiTextfieldOptionsProvider({
        size: signal("m")
      })],
      host: {
        "data-tui-version": TUI_VERSION
      },
      styles: ['search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form{display:flex;flex-direction:column;gap:.75rem}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form fieldset{display:flex;align-items:center;flex-wrap:wrap;gap:inherit;min-inline-size:0;padding:0;margin:0;border:0;color:var(--tui-text-secondary)}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-items-with-more{min-inline-size:0;flex:1}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-textfield,search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form [tuiSearchField]{flex:1;min-inline-size:11.25rem;max-inline-size:22.5rem}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-textfield:first-child,search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form [tuiSearchField]:first-child{max-inline-size:unset}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form hr{inline-size:1px;block-size:1rem;border:none;margin:0;background:var(--tui-border-normal)}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form tui-filter{white-space:nowrap}search[tuiSearch]:where(*[data-tui-version="5.15.0"]) form [tuiLabel]{font:inherit}\n']
    }]
  }], null, null);
})();
var TuiSearchFilterComponent = class _TuiSearchFilterComponent {
  constructor() {
    this.dropdown = tuiDropdown(null);
    this.template = viewChild(TemplateRef);
    this.ef = effect(() => this.dropdown.set(this.template()));
  }
  static {
    this.ɵfac = function TuiSearchFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSearchFilterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSearchFilterComponent,
      selectors: [["button", "tuiSearchFilter", ""]],
      viewQuery: function TuiSearchFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.template, TemplateRef, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({
        align: "end"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS2).filter
      }]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiWithDropdownOpen])],
      ngContentSelectors: _c014,
      decls: 2,
      vars: 0,
      template: function TuiSearchFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomTemplate(0, TuiSearchFilterComponent_ng_template_0_Template, 1, 0, "ng-template");
          ɵɵtext(1, "filters");
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSearchFilterComponent, [{
    type: Component,
    args: [{
      selector: "button[tuiSearchFilter]",
      template: "<ng-template><ng-content /></ng-template>filters",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiDropdownOptionsProvider({
        align: "end"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS2).filter
      }],
      hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen]
    }]
  }], null, null);
})();
var WIDTH = 12;
var TuiSearchFiltersComponent = class _TuiSearchFiltersComponent {
  constructor() {
    this.rem = viewChild("rem");
    this.button = viewChild(TuiButton, {
      read: ElementRef
    });
    this.controls = contentChildren(NgControl, {
      descendants: true
    });
    this.templates = contentChildren(TuiItem, {
      descendants: true,
      read: TemplateRef
    });
    this.overflown = toSignal(inject(WaResizeObserverService, {
      self: true
    }).pipe(map((entry) => {
      const width = entry[0]?.contentRect.width ?? 0;
      return Math.floor((width - this.more) / WIDTH / this.unit);
    }), distinctUntilChanged(), tuiZonefull()), {
      initialValue: 0
    });
    this.enabled = computed(() => this.controls().some(({
      control
    }, index) => control && index >= this.overflown() && !tuiIsControlEmpty(control)));
    this.size = input("m");
  }
  onReset() {
    this.controls().forEach(({
      control
    }, index) => {
      if (control && index >= this.overflown()) {
        control.setValue(null);
      }
    });
  }
  get unit() {
    return this.rem()?.nativeElement.offsetWidth || 16;
  }
  get more() {
    return this.button()?.nativeElement.clientWidth || 0;
  }
  static {
    this.ɵfac = function TuiSearchFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSearchFiltersComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSearchFiltersComponent,
      selectors: [["tui-search-filters"]],
      contentQueries: function TuiSearchFiltersComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.controls, NgControl, 5)(dirIndex, ctx.templates, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      viewQuery: function TuiSearchFiltersComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.rem, _c15, 5)(ctx.button, TuiButton, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, tuiButtonOptionsProvider({
        size: "xs",
        appearance: "flat"
      })]), ɵɵHostDirectivesFeature([{
        directive: TuiTextfieldOptionsDirective,
        inputs: ["tuiTextfieldSize", "size"]
      }])],
      ngContentSelectors: _c014,
      decls: 5,
      vars: 1,
      consts: [["rem", ""], [1, "t-rem"], ["appearance", "secondary", "tuiIconButton", "", "tuiSearchFilter", "", "type", "button", 1, "t-button", 3, "_active", "size"], [3, "ngTemplateOutlet"], ["appearance", "secondary", "tuiIconButton", "", "tuiSearchFilter", "", "type", "button", 1, "t-button", 3, "size"], [1, "t-form", 3, "reset"], [1, "t-header", 3, "disabled"]],
      template: function TuiSearchFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵrepeaterCreate(0, TuiSearchFiltersComponent_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
          ɵɵelement(2, "div", 1, 0);
          ɵɵconditionalCreate(4, TuiSearchFiltersComponent_Conditional_4_Template, 6, 4, "button", 2);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.templates());
          ɵɵadvance(4);
          ɵɵconditional(ctx.overflown() < ctx.templates().length ? 4 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, TuiButton, TuiSearchFilterComponent],
      styles: ['[_nghost-%COMP%]{display:flex;flex:1;gap:inherit;justify-content:flex-end;min-inline-size:0}.t-rem[_ngcontent-%COMP%]{position:absolute;inline-size:1rem}.t-button[_ngcontent-%COMP%]{overflow:visible}.t-button._active[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;inset-block-start:.25rem;inset-inline-end:.25rem;inline-size:.625rem;block-size:.625rem;background:var(--tui-status-warning);transform:translate(50%,-50%);border-radius:100%;margin:0}.t-form[_ngcontent-%COMP%]{display:flex;min-inline-size:25.5rem;max-inline-size:33rem;flex-direction:column;gap:.75rem;padding:0 1.5rem 1.5rem;box-sizing:border-box}.t-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1.25rem 0;margin:0 0 .5rem;border:none;box-shadow:inset 0 -1px var(--tui-border-normal);font:var(--tui-typography-ui-l);font-weight:700}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSearchFiltersComponent, [{
    type: Component,
    args: [{
      selector: "tui-search-filters",
      imports: [NgTemplateOutlet, TuiButton, TuiSearchFilterComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [WaResizeObserverService, tuiButtonOptionsProvider({
        size: "xs",
        appearance: "flat"
      })],
      hostDirectives: [{
        directive: TuiTextfieldOptionsDirective,
        inputs: ["tuiTextfieldSize: size"]
      }],
      template: '@for (template of templates(); track template) {\n    @if ($index < overflown()) {\n        <ng-container [ngTemplateOutlet]="template" />\n    }\n}\n<div\n    #rem\n    class="t-rem"\n></div>\n@if (overflown() < templates().length) {\n    <button\n        appearance="secondary"\n        tuiIconButton\n        tuiSearchFilter\n        type="button"\n        class="t-button"\n        [class._active]="enabled()"\n        [size]="size()"\n    >\n        <form\n            class="t-form"\n            (reset)="onReset()"\n        >\n            <fieldset\n                class="t-header"\n                [disabled]="!enabled()"\n            >\n                <ng-content />\n            </fieldset>\n            @for (template of templates(); track template) {\n                @if ($index >= overflown()) {\n                    <ng-container [ngTemplateOutlet]="template" />\n                }\n            }\n        </form>\n    </button>\n}\n',
      styles: [':host{display:flex;flex:1;gap:inherit;justify-content:flex-end;min-inline-size:0}.t-rem{position:absolute;inline-size:1rem}.t-button{overflow:visible}.t-button._active:after{content:"";position:absolute;display:block;inset-block-start:.25rem;inset-inline-end:.25rem;inline-size:.625rem;block-size:.625rem;background:var(--tui-status-warning);transform:translate(50%,-50%);border-radius:100%;margin:0}.t-form{display:flex;min-inline-size:25.5rem;max-inline-size:33rem;flex-direction:column;gap:.75rem;padding:0 1.5rem 1.5rem;box-sizing:border-box}.t-header{display:flex;justify-content:space-between;padding:1.25rem 0;margin:0 0 .5rem;border:none;box-shadow:inset 0 -1px var(--tui-border-normal);font:var(--tui-typography-ui-l);font-weight:700}\n']
    }]
  }], null, null);
})();
var TuiSearch = [TuiSearchComponent, TuiSearchFiltersComponent, TuiItem];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-slides.mjs
var Styles20 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-slides-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiSlides]:where(*[data-tui-version="5.15.0"]){display:grid!important;isolation:isolate}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="-1"]>*{--tui-from: translateX(-2rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="-1"]>*.tui-leave{--tui-from: translateX(1rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="1"]>*{--tui-from: translateX(2rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="1"]>*.tui-leave{--tui-from: translateX(-1rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])>*{grid-area:1 / 1;align-self:start;mix-blend-mode:plus-lighter;animation-name:tuiFade,tuiSlide;animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;animation-fill-mode:both;--tui-from: translateY(0)}[tuiSlides]:where(*[data-tui-version="5.15.0"])>*.tui-slide:not(.tui-leave){animation-name:none}[tuiSlides]:where(*[data-tui-version="5.15.0"])>*.tui-leave{margin-block-end:-100rem}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles20, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-slides-${TUI_VERSION}`,
      styles: ['[tuiSlides]:where(*[data-tui-version="5.15.0"]){display:grid!important;isolation:isolate}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="-1"]>*{--tui-from: translateX(-2rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="-1"]>*.tui-leave{--tui-from: translateX(1rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="1"]>*{--tui-from: translateX(2rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])[data-direction="1"]>*.tui-leave{--tui-from: translateX(-1rem)}[tuiSlides]:where(*[data-tui-version="5.15.0"])>*{grid-area:1 / 1;align-self:start;mix-blend-mode:plus-lighter;animation-name:tuiFade,tuiSlide;animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;animation-fill-mode:both;--tui-from: translateY(0)}[tuiSlides]:where(*[data-tui-version="5.15.0"])>*.tui-slide:not(.tui-leave){animation-name:none}[tuiSlides]:where(*[data-tui-version="5.15.0"])>*.tui-leave{margin-block-end:-100rem}\n']
    }]
  }], null, null);
})();
var TuiSlides = class _TuiSlides {
  constructor() {
    this.nothing = tuiWithStyles(Styles20);
    this.el = tuiInjectElement();
    this.sign = computed(() => Math.sign(this.direction() || 0));
    this.direction = input("", {
      alias: "tuiSlides"
    });
  }
  onAnimation(target) {
    Array.from(this.el.children).find((element) => element === target)?.classList.add("tui-slide", TUI_ANIMATED);
  }
  static {
    this.ɵfac = function TuiSlides_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSlides)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSlides,
      selectors: [["", "tuiSlides", ""]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiSlides", ""],
      hostVars: 1,
      hostBindings: function TuiSlides_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationend", function TuiSlides_animationend_HostBindingHandler($event) {
            return ctx.onAnimation($event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.sign());
        }
      },
      inputs: {
        direction: [1, "tuiSlides", "direction"]
      },
      features: [ɵɵHostDirectivesFeature([TuiAnimated])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSlides, [{
    type: Directive,
    args: [{
      selector: "[tuiSlides]",
      hostDirectives: [TuiAnimated],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiSlides: "",
        "[attr.data-direction]": "sign()",
        "(animationend)": "onAnimation($event.target)"
      }
    }]
  }], null, null);
})();
export {
  TUI_APP_BAR_PROVIDERS,
  TUI_CARD_DEFAULT_OPTIONS,
  TUI_CARD_OPTIONS,
  TUI_COMMON_ICONS2 as TUI_COMMON_ICONS,
  TUI_FORM_OPTIONS,
  TUI_HEADER_OPTIONS,
  TUI_INPUT_SEARCH,
  TUI_LAYOUT_ICONS,
  TUI_LIST_OPTIONS,
  TuiAppBar,
  TuiAppBarBack,
  TuiAppBarComponent,
  TuiAppBarDirective,
  TuiAppBarSizeDirective,
  TuiAsideComponent,
  TuiAsideGroupComponent,
  TuiAsideItemDirective,
  TuiBlockDetails,
  TuiBlockStatus,
  TuiBlockStatusComponent,
  TuiBlockStatusDirective,
  TuiCard,
  TuiCardCollapsed,
  TuiCardLarge,
  TuiCardMedium,
  TuiCardRow,
  TuiDrawerDirective,
  TuiDynamicHeader,
  TuiDynamicHeaderAnchorDirective,
  TuiDynamicHeaderComponent,
  TuiDynamicHeaderContainerDirective,
  TuiElasticContainer,
  TuiElasticContainerDirective,
  TuiFloatingContainer,
  TuiForm,
  TuiHeader,
  TuiHeaderComponent,
  TuiHintAsideDirective,
  TuiInputSearch,
  TuiItemGroup,
  TuiList,
  TuiLogoComponent,
  TuiMainComponent,
  TuiNavComponent,
  TuiNavigation,
  TuiPdfViewer,
  TuiSearch,
  TuiSearchComponent,
  TuiSearchFiltersComponent,
  TuiSlides,
  TuiSubheaderCompactComponent,
  TuiSubheaderComponent,
  TuiSurface,
  tuiCardOptionsProvider,
  tuiCommonIconsProvider,
  tuiFormOptionsProvider,
  tuiHeaderOptionsProvider,
  tuiLayoutIconsProvider,
  tuiListOptionsProvider
};
//# sourceMappingURL=@taiga-ui_layout.js.map
