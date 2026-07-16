import {
  CHAR_EN_DASH,
  CHAR_HYPHEN,
  CHAR_NO_BREAK_SPACE,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  SCROLL_REF_SELECTOR,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_SPEED,
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  TUI_ASSETS_PATH,
  TUI_AUXILIARY,
  TUI_BACK_WORD,
  TUI_BREAKPOINT,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  TUI_BUTTON_X_OPTIONS,
  TUI_CDR,
  TUI_CELL_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_CLEAR_WORD,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DARK_MODE,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DATA_LIST_HOST,
  TUI_DATA_LIST_SIZE,
  TUI_DATE_FORMAT,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOST,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  TUI_FALSE_HANDLER,
  TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS,
  TUI_FILTER_BY_INPUT_OPTIONS,
  TUI_FONT_OFFSET,
  TUI_HINT_COMPONENT,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_OPTIONS,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  TUI_ICON_RESOLVER,
  TUI_ICON_START,
  TUI_IDENTITY_VALUE_TRANSFORMER,
  TUI_ITEMS_HANDLERS,
  TUI_LEAVE,
  TUI_LINK_OPTIONS,
  TUI_LIQUID_GLASS,
  TUI_MEDIA,
  TUI_MONTHS,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_NOTIFICATION_CONCURRENCY,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  TUI_NUMBER_FORMAT,
  TUI_OPTIONS,
  TUI_OPTION_CONTENT,
  TUI_PLATFORM,
  TUI_RADIO_OPTIONS,
  TUI_REDUCED_MOTION,
  TUI_SCROLLABLE,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_TEXTS,
  TUI_TEXTFIELD_ACCESSOR,
  TUI_TEXTFIELD_CONTENT,
  TUI_TEXTFIELD_ITEM,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TEXTFIELD_VALUE,
  TUI_TRUE_HANDLER,
  TUI_VALIDATION_ERRORS,
  TUI_VERSION,
  TUI_VIEWPORT,
  TuiAccessor,
  TuiActiveZone,
  TuiAlertDirective,
  TuiAlertService,
  TuiAnimated,
  TuiAppearance,
  TuiButton,
  TuiButtonX,
  TuiCell,
  TuiCellResponsive,
  TuiCellStretch,
  TuiCheckbox,
  TuiControl,
  TuiDataList,
  TuiDataListComponent,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdown,
  TuiDropdownA11y,
  TuiDropdownAnchor,
  TuiDropdownAuto,
  TuiDropdownClose,
  TuiDropdownComponent,
  TuiDropdownContent,
  TuiDropdownContext,
  TuiDropdownDirective,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TuiDropdownFixed,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiExpand,
  TuiFilterByInputPipe,
  TuiFontSize,
  TuiHint,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintDriver,
  TuiHintHost,
  TuiHintHover,
  TuiHintManual,
  TuiHintOverflow,
  TuiHintPointer,
  TuiHintPosition,
  TuiHintUnstyled,
  TuiHintUnstyledComponent,
  TuiHovered,
  TuiIcon,
  TuiIconPipe,
  TuiIcons,
  TuiId,
  TuiInput,
  TuiInputDirective,
  TuiItem,
  TuiItemsHandlersDirective,
  TuiItemsHandlersValidator,
  TuiLabel,
  TuiLink,
  TuiNotification,
  TuiNotificationComponent,
  TuiNotificationDirective,
  TuiNotificationService,
  TuiNotificationTemplate,
  TuiOptGroup,
  TuiOption,
  TuiOptionWithContent,
  TuiOptionWithValue,
  TuiPopup,
  TuiPopupService,
  TuiPopups,
  TuiPortal,
  TuiPortalDirective,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRadio,
  TuiRadioComponent,
  TuiRadioDirective,
  TuiRectAccessor,
  TuiScrollControls,
  TuiScrollControlsService,
  TuiScrollIntoView,
  TuiScrollRef,
  TuiScrollable,
  TuiScrollbar,
  TuiScrollbarDirective,
  TuiScrollbarPosition,
  TuiScrollbarService,
  TuiSelectLike,
  TuiTextfield,
  TuiTextfieldComponent,
  TuiTextfieldContent,
  TuiTextfieldItemComponent,
  TuiTextfieldMultiComponent,
  TuiTextfieldOptionsDirective,
  TuiTitle,
  TuiValidationError,
  TuiVehicle,
  TuiVisualViewportService,
  TuiWithAppearance,
  TuiWithDropdownOpen,
  TuiWithIcons,
  TuiWithInput,
  TuiWithItemsHandlers,
  TuiWithNativePicker,
  TuiWithOptionContent,
  WA_ANIMATION_FRAME,
  WA_INTERSECTION_ROOT,
  WA_IS_IOS,
  WA_IS_MOBILE,
  WA_PAGE_VISIBILITY,
  WA_WINDOW,
  WaIntersectionObservee,
  WaIntersectionObserver,
  WaIntersectionObserverDirective,
  coerceBooleanProperty,
  injectContext,
  isSafari,
  provideTaiga,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiAsAuxiliary,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsOptionContent,
  tuiAsPortal,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  tuiAsTextfieldAccessor,
  tuiAsTextfieldContent,
  tuiAsVehicle,
  tuiAsViewport,
  tuiAssetsPathProvider,
  tuiButtonOptionsProvider,
  tuiButtonXOptionsProvider,
  tuiCellOptionsProvider,
  tuiCheckFixedPosition,
  tuiCheckboxOptionsProvider,
  tuiClamp,
  tuiCloseWatcher,
  tuiCommonIconsProvider,
  tuiContainsOrAfter,
  tuiControlValue,
  tuiCreateOptions,
  tuiDateFormatProvider,
  tuiDirectiveBinding,
  tuiDropdown,
  tuiDropdownEnabled,
  tuiDropdownHoverOptionsProvider,
  tuiDropdownOptionsProvider,
  tuiEnableFontScaling,
  tuiFallbackAccessor,
  tuiFallbackValueProvider,
  tuiFilterByInputOptionsProvider,
  tuiGetActualTarget,
  tuiGetClosestFocusable,
  tuiGetDuration,
  tuiGetFocused,
  tuiGetHintProviders,
  tuiGetIconMode,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiHintOptionsProvider,
  tuiIconEnd,
  tuiIconResolverProvider,
  tuiIconStart,
  tuiIconsProvider,
  tuiIfMap,
  tuiInRange,
  tuiInjectAuxiliary,
  tuiInjectDataListSize,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsEditingKey,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsNumber,
  tuiIsObscured,
  tuiIsPresent,
  tuiIsString,
  tuiItemsHandlersProvider,
  tuiLinkOptionsProvider,
  tuiNormalizeToIntNumber,
  tuiNotificationOptionsProvider,
  tuiNullableSame,
  tuiNumberFormatProvider,
  tuiOverrideOptions,
  tuiPositionAccessorFor,
  tuiProvide,
  tuiProvideAccessor,
  tuiPx,
  tuiRadioOptionsProvider,
  tuiRectAccessorFor,
  tuiRound,
  tuiRoundWith,
  tuiScrollbarOptionsProvider,
  tuiSetSignal,
  tuiSizeBigger,
  tuiTextfieldOptionsProvider,
  tuiTypedFromEvent,
  tuiValidationErrorsProvider,
  tuiWatch,
  tuiWithStyles,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-VAINPROX.js";
import {
  ActivationStart,
  Router
} from "./chunk-PUCENSUF.js";
import "./chunk-E6W4ZFJZ.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel
} from "./chunk-KMBWNSEK.js";
import {
  AsyncPipe,
  NgTemplateOutlet
} from "./chunk-YVPE26PC.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  NgZone,
  Observable,
  Pipe,
  Renderer2,
  Subject,
  TemplateRef,
  VERSION,
  ViewEncapsulation,
  __objRest,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  combineLatest,
  computed,
  contentChild,
  debounceTime,
  distinctUntilChanged,
  effect,
  exhaustMap,
  filter,
  fromEvent,
  inject,
  input,
  isObservable,
  isSignal,
  linkedSignal,
  map,
  merge,
  model,
  of,
  output,
  race,
  setClassMetadata,
  shareReplay,
  signal,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeWhile,
  tap,
  throttleTime,
  timer,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
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
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UIPQSPQU.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-date-time.mjs
var DAYS_IN_WEEK = 7;
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var MAX_DISPLAYED_YEAR = 2099;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TuiDayOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};
var TuiMonthNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from, to) {
    return to.year - from.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({ year }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({ year }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({ year }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({ year }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({ year }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({ year = 0 }) {
    ngDevMode && console.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && console.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && console.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && console.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.November:
      case TuiMonthNumber.September:
        return 30;
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from, to) {
    const absoluteFrom = from.month + from.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({ year = 0, month = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = new Date(this.year, this.month);
    date.setFullYear(this.year);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  /**
   * @param year
   * @param month (starting with 0)
   * @param day
   */
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && console.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "dd/mm/yyyy") {
    ngDevMode && console.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "mm/dd/yyyy":
        return {
          day: Number.parseInt(date.slice(3, 5), 10),
          month: Number.parseInt(date.slice(0, 2), 10) - 1,
          year: Number.parseInt(date.slice(6, 10), 10)
        };
      case "yyyy/mm/dd":
        return {
          day: Number.parseInt(date.slice(8, 10), 10),
          month: Number.parseInt(date.slice(5, 7), 10) - 1,
          year: Number.parseInt(date.slice(0, 4), 10)
        };
      case "dd/mm/yyyy":
      default:
        return {
          day: Number.parseInt(date.slice(0, 2), 10),
          month: Number.parseInt(date.slice(3, 5), 10) - 1,
          year: Number.parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (dd/mm/yyyy | mm/dd/yyyy | yyyy/mm/dd)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "dd/mm/yyyy") {
    const { day, month, year } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param ymdString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(ymdString) {
    const { day, month, year } = this.parseRawDateString(ymdString, "yyyy/mm/dd");
    if (!TuiMonth.isValidMonth(year, month) || !Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(year, month, day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equal to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    return max !== null && this.dayAfter(max) ? max : this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({ year = 0, month = 0, day = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    const monthDaysCount = TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    const currentMonthDaysCount = TuiMonth.getMonthDaysCount(this.month, TuiYear.isLeapYear(years));
    let days = day;
    if (this.day >= monthDaysCount) {
      days += this.day - (currentMonthDaysCount - monthDaysCount);
    } else if (currentMonthDaysCount < monthDaysCount && this.day === currentMonthDaysCount) {
      days += this.day + (monthDaysCount - currentMonthDaysCount);
    } else {
      days += this.day;
    }
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && console.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "mm/dd/yyyy":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "yyyy/mm/dd":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "dd/mm/yyyy":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "dd/mm/yyyy", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = super.toLocalNativeDate();
    date.setDate(this.day);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiInvalidDayException = class extends Error {
  constructor(year, month, day) {
    super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : "");
  }
};
var TuiMonthRange = class _TuiMonthRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new _TuiMonthRange(month1, month2) : new _TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  monthInRange(month) {
    return this.from.monthSameOrBefore(month) && this.to.monthSameOrAfter(month);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
};
var TuiDayRange = class _TuiDayRange extends TuiMonthRange {
  constructor(from, to) {
    super(from, to);
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new _TuiDayRange(day1, day2) : new _TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd/mm/yyyy - dd/mm/yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = "dd/mm/yyyy") {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    return rangeString.length < DATE_RANGE_FILLER_LENGTH ? new _TuiDayRange(leftDay, leftDay) : _TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  dayInRange(day) {
    return this.from.daySameOrBefore(day) && this.to.daySameOrAfter(day);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new _TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = "dd/mm/yyyy", dateSeparator = ".") {
    return this.getFormattedDayRange(dateFormat, dateSeparator);
  }
  toArray() {
    const { from, to } = this;
    const arr = [];
    for (const day = from.toUtcNativeDate(); day <= to.toUtcNativeDate(); day.setDate(day.getDate() + 1)) {
      arr.push(TuiDay.fromLocalNativeDate(day));
    }
    return arr;
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TUI_LAST_DISPLAYED_DAY = new TuiDay(MAX_DISPLAYED_YEAR, MAX_MONTH, 31);

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static {
    this.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMapperPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMapper",
      type: _TuiMapperPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      name: "tuiMapper"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-spin-button.mjs
var _c0 = ["*"];
function TuiSpinButton_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 0);
    ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 1);
    ɵɵprojection(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 2);
    ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightClick());
    });
    ɵɵtext(5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.leftDisabled());
    ɵɵproperty("iconStart", ctx_r1.icons.decrement)("tabIndex", ctx_r1.focusable() ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[0], " ");
    ɵɵadvance(3);
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.rightDisabled());
    ɵɵproperty("iconStart", ctx_r1.icons.increment)("tabIndex", ctx_r1.focusable() ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[1], " ");
  }
}
var TuiSpinButton = class _TuiSpinButton {
  constructor() {
    this.icons = inject(TUI_COMMON_ICONS);
    this.spinTexts = inject(TUI_SPIN_TEXTS);
    this.focusable = input(true);
    this.disabled = input(false);
    this.leftDisabled = input(false);
    this.rightDisabled = input(false);
    this.leftClick = output();
    this.rightClick = output();
  }
  onLeftClick() {
    if (!this.disabled() && !this.leftDisabled()) {
      this.leftClick.emit();
    }
  }
  onRightClick() {
    if (!this.disabled() && !this.rightDisabled()) {
      this.rightClick.emit();
    }
  }
  static {
    this.ɵfac = function TuiSpinButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSpinButton)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSpinButton,
      selectors: [["tui-spin-button"]],
      hostBindings: function TuiSpinButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft.prevent", function TuiSpinButton_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.onLeftClick();
          })("keydown.arrowRight.prevent", function TuiSpinButton_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.onRightClick();
          })("mousedown.zoneless.prevent", function TuiSpinButton_mousedown_zoneless_prevent_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        focusable: [1, "focusable"],
        disabled: [1, "disabled"],
        leftDisabled: [1, "leftDisabled"],
        rightDisabled: [1, "rightDisabled"]
      },
      outputs: {
        leftClick: "leftClick",
        rightClick: "rightClick"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [["appearance", "flat", "automation-id", "tui-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"]],
      template: function TuiSpinButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, TuiSpinButton_Conditional_0_Template, 6, 10);
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ctx.spinTexts()) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [TuiButton],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-typography-body-l);text-align:center;font-weight:700}.t-button[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-button_hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSpinButton, [{
    type: Component,
    args: [{
      selector: "tui-spin-button",
      imports: [TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(keydown.arrowLeft.prevent)": "onLeftClick()",
        "(keydown.arrowRight.prevent)": "onRightClick()",
        "(mousedown.zoneless.prevent)": "(0)"
      },
      template: '@if (spinTexts(); as texts) {\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__left"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled() || leftDisabled()"\n        [iconStart]="icons.decrement"\n        [tabIndex]="focusable() ? 0 : -1"\n        (click)="onLeftClick()"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class="t-content t-calendar-title">\n        <ng-content />\n    </span>\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__right"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled() || rightDisabled()"\n        [iconStart]="icons.increment"\n        [tabIndex]="focusable() ? 0 : -1"\n        (click)="onRightClick()"\n    >\n        {{ texts[1] }}\n    </button>\n}\n',
      styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-typography-body-l);text-align:center;font-weight:700}.t-button{transform:scaleX(var(--tui-inline))}.t-button_hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-calendar.mjs
var _c02 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function TuiCalendarSheet_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵproperty("textContent", day_r1);
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
  if (rf & 2) {
    const markers_r5 = ɵɵnextContext();
    ɵɵstyleProp("background", (markers_r5 == null ? null : markers_r5[1]) || "");
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "div", 6);
    ɵɵconditionalCreate(2, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template, 1, 2, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const markers_r5 = ctx;
    ɵɵadvance();
    ɵɵstyleProp("background", markers_r5 == null ? null : markers_r5[0]);
    ɵɵadvance();
    ɵɵconditional(markers_r5.length > 1 ? 2 : -1);
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵpipe(1, "tuiMapper");
    ɵɵlistener("click", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      ɵɵnextContext();
      const item_r3 = ɵɵreadContextLet(0);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.dayClick.emit(item_r3));
    })("tuiHoveredChange", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_tuiHoveredChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      ɵɵnextContext();
      const item_r3 = ɵɵreadContextLet(0);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onItemHovered($event && item_r3));
    });
    ɵɵtext(2);
    ɵɵconditionalCreate(3, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template, 3, 3, "div", 5);
    ɵɵpipe(4, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_30_0;
    ɵɵnextContext();
    const item_r3 = ɵɵreadContextLet(0);
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("t-cell_disabled", ctx_r3.disabledItemHandler()(item_r3))("t-cell_today", ctx_r3.itemIsToday(item_r3))("t-cell_unavailable", ctx_r3.itemIsUnavailable(item_r3));
    ɵɵattribute("data-range", ctx_r3.getItemRange(item_r3))("data-type", ɵɵpipeBind2(1, 10, item_r3, ctx_r3.dayType));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r3.day, " ");
    ɵɵadvance();
    ɵɵconditional((tmp_30_0 = ɵɵpipeBindV(4, 13, ɵɵpureFunction5(19, _c02, item_r3, ctx_r3.toMarkers, ctx_r3.itemIsToday(item_r3), ctx_r3.getItemRange(item_r3), ctx_r3.markerHandler()))) ? 3 : -1, tmp_30_0);
  }
}
function TuiCalendarSheet_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵconditionalCreate(1, TuiCalendarSheet_For_9_For_3_Conditional_1_Template, 5, 25, "div", 3);
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    ɵɵnextContext();
    const rowIndex_r7 = ɵɵreadContextLet(0);
    const ctx_r3 = ɵɵnextContext();
    const sheet_r8 = ɵɵreadContextLet(5);
    const item_r9 = ɵɵstoreLet(sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7][$index_r6]);
    ɵɵadvance();
    ɵɵconditional(item_r9 && (!ctx_r3.itemIsUnavailable(item_r9) || ctx_r3.showAdjacent()) ? 1 : -1);
  }
}
function TuiCalendarSheet_For_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵrepeaterCreate(2, TuiCalendarSheet_For_9_For_3_Template, 2, 2, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r10 = ctx.$index;
    ɵɵnextContext();
    const sheet_r8 = ɵɵreadContextLet(5);
    const rowIndex_r11 = ɵɵstoreLet($index_r10);
    ɵɵadvance(2);
    ɵɵrepeater("-".repeat((sheet_r8[rowIndex_r11] == null ? null : sheet_r8[rowIndex_r11].length) ?? 0));
  }
}
function TuiCalendarSpin_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.value().formattedYear, " ");
  }
}
function TuiCalendarSpin_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function TuiCalendarSpin_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.yearClick.emit(ctx_r0.value()));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.value().formattedYear, " ");
  }
}
function TuiCalendarYear_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("click", function TuiCalendarYear_For_1_For_3_Template_div_click_1_listener() {
      ɵɵrestoreView(_r1);
      const item_r2 = ɵɵreadContextLet(0);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.yearClick.emit(item_r2));
    })("tuiHoveredChange", function TuiCalendarYear_For_1_For_3_Template_div_tuiHoveredChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const item_r2 = ɵɵreadContextLet(0);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemHovered($event, item_r2));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    ɵɵnextContext();
    const rowIndex_r5 = ɵɵreadContextLet(0);
    const ctx_r2 = ɵɵnextContext();
    const item_r6 = ɵɵstoreLet(ctx_r2.getItem(rowIndex_r5, $index_r4));
    ɵɵadvance();
    ɵɵclassProp("t-cell_disabled", ctx_r2.isDisabled(item_r6))("t-cell_today", ctx_r2.itemIsToday(item_r6));
    ɵɵproperty("tuiScrollIntoView", ctx_r2.scrollItemIntoView(item_r6));
    ɵɵattribute("data-range", ctx_r2.getItemRange(item_r6));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r6, " ");
  }
}
function TuiCalendarYear_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 0);
    ɵɵrepeaterCreate(2, TuiCalendarYear_For_1_For_3_Template, 3, 8, "div", 1, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r7 = ctx.$index;
    ɵɵstoreLet($index_r7);
    ɵɵadvance(2);
    ɵɵrepeater("-".repeat(4));
  }
}
function TuiCalendar_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 0)(1, "tui-calendar-year", 1);
    ɵɵlistener("yearClick", function TuiCalendar_Conditional_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.month().year)("max", ctx_r1.max().year)("min", ctx_r1.min().year)("rangeMode", ctx_r1.options.rangeMode)("value", ctx_r1.value());
  }
}
function TuiCalendar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-spin", 2);
    ɵɵlistener("valueChange", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationValueChange($event));
    })("yearClick", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_yearClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.view.set("year"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-calendar-sheet", 3);
    ɵɵpipe(2, "tuiMapper");
    ɵɵlistener("dayClick", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_dayClick_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDayClick($event));
    })("hoveredItemChange", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_hoveredItemChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHoveredItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.computedMaxViewedMonth())("min", ctx_r1.computedMinViewedMonth())("value", ctx_r1.month());
    ɵɵadvance();
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler(), ctx_r1.disabledItemHandlerMapper, ctx_r1.min(), ctx_r1.max()))("hoveredItem", ctx_r1.hoveredItem())("markerHandler", ctx_r1.markerHandler())("month", ctx_r1.month())("showAdjacent", ctx_r1.showAdjacent())("value", ctx_r1.value());
  }
}
var AbstractTuiCalendar = class _AbstractTuiCalendar {
  constructor() {
    this.month = model(TuiMonth.currentLocal());
    this.value = model(null);
    this.min = input(TUI_FIRST_DAY, {
      transform: (x) => x ?? TUI_FIRST_DAY
    });
    this.max = input(TUI_LAST_DAY, {
      transform: (x) => x ?? TUI_LAST_DAY
    });
    this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
  }
  static {
    this.ɵfac = function AbstractTuiCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiCalendar)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiCalendar,
      inputs: {
        month: [1, "month"],
        value: [1, "value"],
        min: [1, "min"],
        max: [1, "max"],
        disabledItemHandler: [1, "disabledItemHandler"]
      },
      outputs: {
        month: "monthChange",
        value: "valueChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiCalendar, [{
    type: Directive
  }], null, null);
})();
var TUI_CALENDAR_DEFAULT_OPTIONS = {
  dayType: (day) => day.isWeekend ? "weekend" : "weekday",
  weekStart: signal(TuiDayOfWeek.Monday)
};
var [TUI_CALENDAR_OPTIONS, tuiCalendarOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_DEFAULT_OPTIONS);
var TUI_CALENDAR_SHEET_DEFAULT_OPTIONS = {
  rangeMode: false
};
var [TUI_CALENDAR_SHEET_OPTIONS, tuiCalendarSheetOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class _TuiCalendarSheetPipe {
  constructor() {
    this.options = inject(TUI_CALENDAR_OPTIONS);
    this.currentMonth = null;
    this.currentSheet = [];
  }
  transform(month, showAdjacentDays = false) {
    if (this.currentMonth?.monthSame(month)) {
      return this.currentSheet;
    }
    const sheet = [];
    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.options.weekStart()
        });
        const isPrevMonthDay = (day2, relativeToMonth = month) => day2.year < relativeToMonth.year || day2.month < relativeToMonth.month;
        const isNextMonthDay = (day2, relativeToMonth = month) => day2.year > relativeToMonth.year || day2.month > relativeToMonth.month;
        if (isPrevMonthDay(day) && !showAdjacentDays) {
          continue;
        }
        if (isNextMonthDay(day) && !showAdjacentDays) {
          break;
        }
        row.push(day);
      }
      sheet.push(row);
    }
    this.currentSheet = sheet.filter((row) => row.length);
    this.currentMonth = month;
    return this.currentSheet;
  }
  static {
    this.ɵfac = function TuiCalendarSheetPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheetPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiCalendarSheet",
      type: _TuiCalendarSheetPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
    type: Pipe,
    args: [{
      name: "tuiCalendarSheet"
    }]
  }], null, null);
})();
function getMonthStartDaysOffset(month, firstDayOfWeek) {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
}
function getDayFromMonthRowCol({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) {
  ngDevMode && console.assert(Number.isInteger(rowIndex));
  ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
  ngDevMode && console.assert(Number.isInteger(colIndex));
  ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
  let day = rowIndex * DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new TuiDay(month.year, month.month, day);
}
function convertToSundayFirstWeekFormat(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex] || "", ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class _TuiOrderWeekDaysPipe {
  constructor() {
    this.options = inject(TUI_CALENDAR_OPTIONS);
  }
  transform(mondayFirstWeekDays$) {
    return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [...weekDays.slice(this.options.weekStart()), ...weekDays.slice(0, this.options.weekStart())]));
  }
  static {
    this.ɵfac = function TuiOrderWeekDaysPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOrderWeekDaysPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiOrderWeekDays",
      type: _TuiOrderWeekDaysPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
    type: Pipe,
    args: [{
      name: "tuiOrderWeekDays"
    }]
  }], null, null);
})();
var TuiCalendarSheet = class _TuiCalendarSheet {
  constructor() {
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.today = TuiDay.currentLocal();
    this.unorderedWeekDays$ = toObservable(inject(TUI_SHORT_WEEK_DAYS));
    this.dayType = inject(TUI_CALENDAR_OPTIONS).dayType;
    this.month = input(TuiMonth.currentLocal());
    this.disabledItemHandler = input(TUI_FALSE_HANDLER);
    this.markerHandler = input(null);
    this.value = input(null);
    this.showAdjacent = input(true);
    this.hoveredItem = model(null);
    this.dayClick = output();
    this.toMarkers = (day, today, range, markerHandler) => {
      if (today || ["active", "end", "start"].includes(range || "")) {
        return null;
      }
      const markers = markerHandler?.(day);
      return markers?.length ? markers : null;
    };
  }
  onItemHovered(item) {
    this.updateHoveredItem(item || null);
  }
  getItemRange(item) {
    const value = this.value();
    if (!value) {
      return null;
    }
    if (value instanceof TuiDay && !this.computedRangeMode) {
      return value.daySame(item) ? "active" : null;
    }
    if (value instanceof TuiDayRange && value.isSingleDay) {
      return value.from.daySame(item) ? "active" : null;
    }
    if (!(value instanceof TuiDay) && !(value instanceof TuiDayRange)) {
      return value.find((day) => day.daySame(item)) ? "active" : null;
    }
    const range = this.getRange(value, this.hoveredItem());
    if (range.isSingleDay && range.from.daySame(item)) {
      return "active";
    }
    if (range.from.daySame(item)) {
      return "start";
    }
    if (range.to.daySame(item)) {
      return "end";
    }
    return range.from.dayBefore(item) && range.to.dayAfter(item) ? "middle" : null;
  }
  get computedRangeMode() {
    return this.options.rangeMode;
  }
  get isRangePicking() {
    return this.options.rangeMode && this.value() instanceof TuiDay;
  }
  itemIsToday(item) {
    return this.today.daySame(item);
  }
  itemIsUnavailable(item) {
    return !this.month().monthSame(item);
  }
  getRange(value, hoveredItem) {
    if (value instanceof TuiDay) {
      return TuiDayRange.sort(value, hoveredItem ?? value);
    }
    return value.isSingleDay ? TuiDayRange.sort(value.from, hoveredItem ?? value.to) : value;
  }
  updateHoveredItem(day) {
    if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem.set(day);
  }
  static {
    this.ɵfac = function TuiCalendarSheet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSheet,
      selectors: [["tui-calendar-sheet"]],
      hostVars: 2,
      hostBindings: function TuiCalendarSheet_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking);
        }
      },
      inputs: {
        month: [1, "month"],
        disabledItemHandler: [1, "disabledItemHandler"],
        markerHandler: [1, "markerHandler"],
        value: [1, "value"],
        showAdjacent: [1, "showAdjacent"],
        hoveredItem: [1, "hoveredItem"]
      },
      outputs: {
        hoveredItem: "hoveredItemChange",
        dayClick: "dayClick"
      },
      decls: 10,
      vars: 8,
      consts: [[1, "t-row", "t-row_weekday"], [1, "t-cell", 3, "textContent"], ["automation-id", "tui-calendar-sheet__row", 1, "t-row"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "t-cell_disabled", "t-cell_today", "t-cell_unavailable"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "click", "tuiHoveredChange"], [1, "t-dots"], [1, "t-dot"], [1, "t-dot", 3, "background"]],
      template: function TuiCalendarSheet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, TuiCalendarSheet_For_2_Template, 1, 1, "div", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵpipe(3, "tuiOrderWeekDays");
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
          ɵɵdeclareLet(5);
          ɵɵpipe(6, "tuiCalendarSheet");
          ɵɵelementStart(7, "div");
          ɵɵrepeaterCreate(8, TuiCalendarSheet_For_9_Template, 4, 1, "div", 2, ɵɵrepeaterTrackByIndex);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵrepeater(ɵɵpipeBind1(4, 2, ɵɵpipeBind1(3, 0, ctx.unorderedWeekDays$)));
          ɵɵadvance(4);
          const sheet_r12 = ɵɵstoreLet(ɵɵpipeBind2(6, 4, ctx.month(), true));
          ɵɵadvance(3);
          ɵɵrepeater("-".repeat(sheet_r12.length));
        }
      },
      dependencies: [AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiMapperPipe, TuiOrderWeekDaysPipe],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(var(--tui-inline))}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(calc(var(--tui-inline) * -1))}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell[_ngcontent-%COMP%]{inline-size:calc(100% / 7)}[data-type=weekday][_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-type=weekend][_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}`]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheet, [{
    type: Component,
    args: [{
      selector: "tui-calendar-sheet",
      imports: [AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiMapperPipe, TuiOrderWeekDaysPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isRangePicking"
      },
      template: `<div class="t-row t-row_weekday">
    @for (day of unorderedWeekDays$ | tuiOrderWeekDays | async; track day) {
        <div
            class="t-cell"
            [textContent]="day"
        ></div>
    }
</div>
@let sheet = month() | tuiCalendarSheet: true;
<div>
    @for (_ of '-'.repeat(sheet.length); track $index) {
        @let rowIndex = $index;
        <div
            automation-id="tui-calendar-sheet__row"
            class="t-row"
        >
            @for (_ of '-'.repeat(sheet[rowIndex]?.length ?? 0); track $index) {
                @let item = sheet[rowIndex]?.[$index];
                @if (item && (!itemIsUnavailable(item) || showAdjacent())) {
                    <div
                        automation-id="tui-calendar-sheet__cell"
                        class="t-cell"
                        [attr.data-range]="getItemRange(item)"
                        [attr.data-type]="item | tuiMapper: dayType"
                        [class.t-cell_disabled]="disabledItemHandler()(item)"
                        [class.t-cell_today]="itemIsToday(item)"
                        [class.t-cell_unavailable]="itemIsUnavailable(item)"
                        (click)="dayClick.emit(item)"
                        (tuiHoveredChange)="onItemHovered($event && item)"
                    >
                        {{ item.day }}
                        @if (
                            item | tuiMapper: toMarkers : itemIsToday(item) : getItemRange(item) : markerHandler();
                            as markers
                        ) {
                            <div class="t-dots">
                                <div
                                    class="t-dot"
                                    [style.background]="markers?.[0]"
                                ></div>
                                @if (markers.length > 1) {
                                    <div
                                        class="t-dot"
                                        [style.background]="markers?.[1] || ''"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                }
            }
        </div>
    }
</div>
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1);transform:scaleX(var(--tui-inline))}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(calc(var(--tui-inline) * -1))}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:calc(100% / 7)}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}
`]
    }]
  }], null, null);
})();
var TuiCalendarSpin = class _TuiCalendarSpin {
  constructor() {
    this.months = inject(TUI_MONTHS);
    this.value = model(TuiMonth.currentLocal());
    this.min = input(TUI_FIRST_DAY);
    this.max = input(TUI_LAST_DAY);
    this.yearClick = output();
  }
  append(date) {
    const value = this.value().append(date);
    const min = this.min();
    const max = this.max();
    if (min.monthSameOrAfter(value)) {
      this.updateValue(min);
    } else {
      this.updateValue(max.monthSameOrBefore(value) ? max : value);
    }
  }
  updateValue(value) {
    if (this.value().monthSame(value)) {
      return;
    }
    this.value.set(value);
  }
  static {
    this.ɵfac = function TuiCalendarSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSpin)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSpin,
      selectors: [["tui-calendar-spin"]],
      inputs: {
        value: [1, "value"],
        min: [1, "min"],
        max: [1, "max"]
      },
      outputs: {
        value: "valueChange",
        yearClick: "yearClick"
      },
      decls: 4,
      vars: 5,
      consts: [[3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], ["tabIndex", "-1", "tuiLink", "", "type", "button"], ["tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiCalendarSpin_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-spin-button", 0);
          ɵɵlistener("leftClick", function TuiCalendarSpin_Template_tui_spin_button_leftClick_0_listener() {
            return ctx.append({
              month: -1
            });
          })("rightClick", function TuiCalendarSpin_Template_tui_spin_button_rightClick_0_listener() {
            return ctx.append({
              month: 1
            });
          });
          ɵɵtext(1);
          ɵɵconditionalCreate(2, TuiCalendarSpin_Conditional_2_Template, 1, 1)(3, TuiCalendarSpin_Conditional_3_Template, 2, 1, "button", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("focusable", false)("leftDisabled", ctx.value().monthSameOrBefore(ctx.min()))("rightDisabled", ctx.value().monthSameOrAfter(ctx.max()));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.months()[ctx.value().month], " ");
          ɵɵadvance();
          ɵɵconditional(ctx.min().year === ctx.max().year ? 2 : 3);
        }
      },
      dependencies: [TuiLink, TuiSpinButton],
      styles: ["[_nghost-%COMP%]{display:block}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSpin, [{
    type: Component,
    args: [{
      selector: "tui-calendar-spin",
      imports: [TuiLink, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-spin-button\n    [focusable]="false"\n    [leftDisabled]="value().monthSameOrBefore(min())"\n    [rightDisabled]="value().monthSameOrAfter(max())"\n    (leftClick)="append({month: -1})"\n    (rightClick)="append({month: 1})"\n>\n    {{ months()[value().month] }}\n    @if (min().year === max().year) {\n        {{ value().formattedYear }}\n    } @else {\n        <button\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="yearClick.emit(value())"\n        >\n            {{ value().formattedYear }}\n        </button>\n    }\n</tui-spin-button>\n',
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var CURRENT_YEAR = TuiMonth.currentLocal().year;
var TuiCalendarYear = class _TuiCalendarYear {
  constructor() {
    this.hoveredItem = signal(null);
    this.calculatedMin = computed(() => {
      const initial = this.initialItem() - LIMIT;
      const min = this.min() ?? MIN_YEAR;
      return min > initial ? min : initial;
    });
    this.calculatedMax = computed(() => {
      const initial = this.initialItem() + LIMIT;
      const max = this.max() ?? MAX_YEAR;
      return max < initial ? max + 1 : initial;
    });
    this.isRangePicking = computed((x = this.value()) => this.rangeMode() && (x instanceof TuiDay || x instanceof TuiMonth));
    this.rows = computed(() => Math.ceil((this.calculatedMax() - this.calculatedMin()) / ITEMS_IN_ROW));
    this.rangeMode = input(false);
    this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
    this.value = input(null);
    this.min = input(MIN_YEAR, {
      transform: (x) => x ?? MIN_YEAR
    });
    this.max = input(MAX_YEAR, {
      transform: (x) => x ?? MAX_YEAR
    });
    this.initialItem = input(CURRENT_YEAR, {
      transform: (x) => x ?? CURRENT_YEAR
    });
    this.yearClick = output();
  }
  isDisabled(item) {
    return this.max() && this.max() < item || this.min() && this.min() > item || this.disabledItemHandler()(item);
  }
  getItemRange(item) {
    const value = this.value();
    const hoveredItem = this.hoveredItem();
    if (value instanceof TuiYear && value.year === item) {
      return "active";
    }
    if (tuiIsNumber(value)) {
      return value === item ? "active" : null;
    }
    if (!(value instanceof TuiMonthRange) && !(value instanceof TuiYear)) {
      return value?.find((day) => day.year === item) ? "active" : null;
    }
    const hovered = this.isRangePicking() ? hoveredItem : null;
    const from = "from" in value ? value.from?.year : value.year;
    const to = "from" in value ? value.to.year : value.year;
    const min = Math.min(from, hovered ?? to);
    const max = Math.max(from, hovered ?? to);
    if (min === max && from === to && from === item) {
      return "active";
    }
    if (min === item) {
      return "start";
    }
    if (max === item) {
      return "end";
    }
    return min < item && item < max ? "middle" : null;
  }
  onItemHovered(hovered, item) {
    this.hoveredItem.set(hovered ? item : null);
  }
  scrollItemIntoView(item) {
    return this.initialItem() === item;
  }
  getItem(rowIndex, colIndex) {
    return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin();
  }
  itemIsToday(item) {
    return CURRENT_YEAR === item;
  }
  static {
    this.ɵfac = function TuiCalendarYear_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarYear)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarYear,
      selectors: [["tui-calendar-year"]],
      hostVars: 2,
      hostBindings: function TuiCalendarYear_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking());
        }
      },
      inputs: {
        rangeMode: [1, "rangeMode"],
        disabledItemHandler: [1, "disabledItemHandler"],
        value: [1, "value"],
        min: [1, "min"],
        max: [1, "max"],
        initialItem: [1, "initialItem"]
      },
      outputs: {
        yearClick: "yearClick"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendarYear)])],
      decls: 2,
      vars: 0,
      consts: [["automation-id", "tui-calendar-year__row", 1, "t-row"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "t-cell_disabled", "t-cell_today", "tuiScrollIntoView"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiScrollIntoView"]],
      template: function TuiCalendarYear_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, TuiCalendarYear_For_1_Template, 4, 1, "div", 0, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater("-".repeat(ctx.rows()));
        }
      },
      dependencies: [TuiHovered, TuiScrollIntoView],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(var(--tui-inline))}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(calc(var(--tui-inline) * -1))}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell[_ngcontent-%COMP%]{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}`]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarYear, [{
    type: Component,
    args: [{
      selector: "tui-calendar-year",
      imports: [TuiHovered, TuiScrollIntoView],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendarYear)],
      host: {
        "[class._picking]": "isRangePicking()"
      },
      template: `@for (_ of '-'.repeat(rows()); track $index) {
    @let rowIndex = $index;
    <div
        automation-id="tui-calendar-year__row"
        class="t-row"
    >
        @for (_ of '-'.repeat(4); track $index) {
            @let item = getItem(rowIndex, $index);
            <div
                automation-id="tui-calendar-year__cell"
                class="t-cell"
                [attr.data-range]="getItemRange(item)"
                [class.t-cell_disabled]="isDisabled(item)"
                [class.t-cell_today]="itemIsToday(item)"
                [tuiScrollIntoView]="scrollItemIntoView(item)"
                (click)="yearClick.emit(item)"
                (tuiHoveredChange)="onItemHovered($event, item)"
            >
                {{ item }}
            </div>
        }
    </div>
}
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1);transform:scaleX(var(--tui-inline))}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(calc(var(--tui-inline) * -1))}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}
`]
    }]
  }], null, null);
})();
var TuiCalendar = class _TuiCalendar extends AbstractTuiCalendar {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.minViewedMonth = input(TUI_FIRST_DAY);
    this.maxViewedMonth = input(TUI_LAST_DAY);
    this.showAdjacent = input(true);
    this.markerHandler = input(null);
    this.initialView = input("month");
    this.hoveredItem = model(null);
    this.dayClick = output();
    this.computedMinViewedMonth = computed(() => {
      const min = this.min();
      const minViewed = this.minViewedMonth() ?? TUI_FIRST_DAY;
      return minViewed.monthSameOrAfter(min) ? minViewed : min;
    });
    this.computedMaxViewedMonth = computed(() => {
      const max = this.max();
      const maxViewed = this.maxViewedMonth() ?? TUI_LAST_DAY;
      return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    });
    this.view = linkedSignal(() => this.initialView());
    this.syncMonthFromValue = effect(() => {
      const value = this.value();
      if (this.showAdjacent() && value instanceof TuiDay && value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) {
        this.month.set(value);
      }
    });
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
  }
  onPaginationValueChange(month) {
    this.updateViewedMonth(month);
  }
  onDayClick(day) {
    this.dayClick.emit(day);
    this.value.set(day);
  }
  onHoveredItemChange(day) {
    this.updateHoveredDay(day);
  }
  onPickerYearClick(year) {
    this.view.set("month");
    this.updateViewedMonth(new TuiMonth(year, this.month().month));
  }
  updateViewedMonth(month) {
    if (this.month().monthSame(month)) {
      return;
    }
    this.month.set(month);
  }
  updateHoveredDay(day) {
    if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem.set(day);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiCalendar_BaseFactory;
      return function TuiCalendar_Factory(__ngFactoryType__) {
        return (ɵTuiCalendar_BaseFactory || (ɵTuiCalendar_BaseFactory = ɵɵgetInheritedFactory(_TuiCalendar)))(__ngFactoryType__ || _TuiCalendar);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendar,
      selectors: [["tui-calendar", 3, "new", ""]],
      hostBindings: function TuiCalendar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown.prevent.zoneless", function TuiCalendar_mousedown_prevent_zoneless_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        minViewedMonth: [1, "minViewedMonth"],
        maxViewedMonth: [1, "maxViewedMonth"],
        showAdjacent: [1, "showAdjacent"],
        markerHandler: [1, "markerHandler"],
        initialView: [1, "initialView"],
        hoveredItem: [1, "hoveredItem"]
      },
      outputs: {
        hoveredItem: "hoveredItemChange",
        dayClick: "dayClick"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendar), tuiProvide(AbstractTuiCalendar, _TuiCalendar)]), ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 1,
      consts: [["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "yearClick", "initialItem", "max", "min", "rangeMode", "value"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "valueChange", "yearClick", "max", "min", "value"], ["automation-id", "tui-calendar__calendar", 3, "dayClick", "hoveredItemChange", "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value"]],
      template: function TuiCalendar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiCalendar_Conditional_0_Template, 2, 5, "tui-scrollbar", 0)(1, TuiCalendar_Conditional_1_Template, 3, 14);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.view() === "year" ? 0 : 1);
        }
      },
      dependencies: [TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}tui-sheet-dialog[_nghost-%COMP%], tui-sheet-dialog   [_nghost-%COMP%]{inline-size:100%}tui-calendar-year[_ngcontent-%COMP%]{padding:0}.t-scrollbar[_ngcontent-%COMP%]{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination[_ngcontent-%COMP%]{margin-block-end:1rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendar, [{
    type: Component,
    args: [{
      selector: "tui-calendar:not([new])",
      imports: [TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendar), tuiProvide(AbstractTuiCalendar, TuiCalendar)],
      host: {
        "(mousedown.prevent.zoneless)": "0"
      },
      template: `@if (view() === 'year') {
    <tui-scrollbar
        automation-id="tui-calendar__scrollbar"
        class="t-scrollbar"
    >
        <tui-calendar-year
            automation-id="tui-calendar__year"
            [initialItem]="month().year"
            [max]="max().year"
            [min]="min().year"
            [rangeMode]="options.rangeMode"
            [value]="value()"
            (yearClick)="onPickerYearClick($event)"
        />
    </tui-scrollbar>
} @else {
    <tui-calendar-spin
        automation-id="tui-calendar__pagination"
        class="t-pagination"
        [max]="computedMaxViewedMonth()"
        [min]="computedMinViewedMonth()"
        [value]="month()"
        (valueChange)="onPaginationValueChange($event)"
        (yearClick)="view.set('year')"
    />
    <tui-calendar-sheet
        automation-id="tui-calendar__calendar"
        [disabledItemHandler]="disabledItemHandler() | tuiMapper: disabledItemHandlerMapper : min() : max()"
        [hoveredItem]="hoveredItem()"
        [markerHandler]="markerHandler()"
        [month]="month()"
        [showAdjacent]="showAdjacent()"
        [value]="value()"
        (dayClick)="onDayClick($event)"
        (hoveredItemChange)="onHoveredItemChange($event)"
    />
}
`,
      styles: [":host{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}:host-context(tui-sheet-dialog){inline-size:100%}tui-calendar-year{padding:0}.t-scrollbar{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination{margin-block-end:1rem}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-carousel.mjs
var _c03 = (a0) => ({
  $implicit: a0
});
function TuiCarouselComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiCarouselComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiCarouselComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, TuiCarouselComponent_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementStart(2, "span", 2);
    ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Conditional_4_Template_span_waIntersectionObservee_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSlide($event[0]));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c03, ctx_r1.index()));
  }
}
function TuiCarouselComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiCarouselComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, TuiCarouselComponent_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementStart(2, "span", 2);
    ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Conditional_5_Template_span_waIntersectionObservee_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSlide($event[0]));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 3);
    ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Conditional_5_Template_span_waIntersectionObservee_3_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onIntersection(!!($event[0] == null ? null : $event[0].isIntersecting), 1));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c03, ctx_r1.math.min(ctx_r1.index() + 1, ctx_r1.max())));
  }
}
var TuiCarouselComponent = class _TuiCarouselComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.win = inject(WA_WINDOW);
    this.behavior = inject(TUI_REDUCED_MOTION) ? "auto" : "smooth";
    this.math = Math;
    this.template = contentChild.required(TuiItem, {
      read: TemplateRef
    });
    this.height = signal(Number.NaN);
    this.skipHydration = Number.parseInt(VERSION.major, 10) < 20 ? "" : null;
    this.index = model(0);
    this.min = input(-Infinity);
    this.max = input(Infinity);
    fromEvent(this.el, "scroll").pipe(debounceTime(100), filter(() => this.fallback)).subscribe(() => {
      this.onIntersection(true, 1);
    });
  }
  ngAfterViewInit() {
    if (this.index() > this.min()) {
      this.el.scrollLeft = this.d * this.el.clientWidth;
    }
  }
  next() {
    this.el.scrollTo({
      left: this.d * this.el.scrollWidth,
      behavior: this.behavior
    });
  }
  prev() {
    this.el.scrollTo({
      left: 0,
      behavior: this.behavior
    });
  }
  onIntersection(isIntersecting, step) {
    const index = tuiClamp(this.index() + step, this.min(), this.max());
    if (isIntersecting) {
      if (index !== this.index()) {
        this.el.style.overflow = "hidden";
      }
      this.index.set(index);
      requestAnimationFrame(() => {
        this.el.style.overflow = "";
        if (this.index() > this.min() && this.index() < this.max()) {
          this.el.scrollLeft = this.d * this.el.clientWidth;
        }
      });
    }
  }
  onSlide(entry) {
    if (entry?.isIntersecting) {
      this.height.set(entry.target.parentElement?.clientHeight ?? Number.NaN);
    }
  }
  get d() {
    return this.el.matches('[dir="rtl"] :scope') ? -1 : 1;
  }
  get fallback() {
    return !!(this.win.devicePixelRatio * 100 % 1) && this.el.scrollWidth - this.el.clientWidth - Math.abs(this.el.scrollLeft) < 1;
  }
  static {
    this.ɵfac = function TuiCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCarouselComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCarouselComponent,
      selectors: [["tui-carousel"]],
      contentQueries: function TuiCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.template, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["waIntersectionThreshold", "0.5"],
      hostVars: 3,
      hostBindings: function TuiCarouselComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("ngSkipHydration", ctx.skipHydration);
          ɵɵstyleProp("max-block-size", ctx.height(), "px");
        }
      },
      inputs: {
        index: [1, "index"],
        min: [1, "min"],
        max: [1, "max"]
      },
      outputs: {
        index: "indexChange"
      },
      features: [ɵɵProvidersFeature([tuiProvide(WA_INTERSECTION_ROOT, ElementRef)]), ɵɵHostDirectivesFeature([WaIntersectionObserverDirective])],
      decls: 6,
      vars: 6,
      consts: [[1, "t-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "t-observer", 3, "waIntersectionObservee"], ["waIntersectionObserver", "", "waIntersectionThreshold", "1", 1, "t-bumper", 3, "waIntersectionObservee"]],
      template: function TuiCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 0);
          ɵɵtemplate(1, TuiCarouselComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          ɵɵelementStart(2, "span", 2);
          ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Template_span_waIntersectionObservee_2_listener($event) {
            return ctx.onSlide($event[0]);
          });
          ɵɵelementEnd();
          ɵɵelementStart(3, "span", 3);
          ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_Template_span_waIntersectionObservee_3_listener($event) {
            return ctx.onIntersection(!!($event[0] == null ? null : $event[0].isIntersecting), -1);
          });
          ɵɵelementEnd()();
          ɵɵconditionalCreate(4, TuiCarouselComponent_Conditional_4_Template, 3, 4, "span", 0);
          ɵɵconditionalCreate(5, TuiCarouselComponent_Conditional_5_Template, 4, 4, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", ctx.template())("ngTemplateOutletContext", ɵɵpureFunction1(4, _c03, ctx.math.max(ctx.index() - 1, ctx.min())));
          ɵɵadvance(3);
          ɵɵconditional(ctx.index() !== ctx.min() && ctx.index() !== ctx.max() ? 4 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.min() !== ctx.max() ? 5 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, WaIntersectionObserverDirective, WaIntersectionObservee],
      styles: ["[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;transition-property:max-block-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);display:flex;max-inline-size:100%;overscroll-behavior-x:none;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:active   .t-item[_ngcontent-%COMP%]{padding-block-start:1px;margin-block-start:-1px}.t-item[_ngcontent-%COMP%]{position:relative;display:flex;min-inline-size:100%;block-size:100%;box-sizing:content-box;align-items:center;justify-content:center;scroll-snap-align:start;scroll-snap-stop:always}.t-item[_ngcontent-%COMP%]:first-child   .t-bumper[_ngcontent-%COMP%]{inset-inline-start:0}.t-item[_ngcontent-%COMP%]:last-child   .t-bumper[_ngcontent-%COMP%]{inset-inline-end:0}.t-bumper[_ngcontent-%COMP%], .t-observer[_ngcontent-%COMP%]{position:absolute;inset-block-start:.125rem;block-size:.125rem;inline-size:25%;pointer-events:none}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselComponent, [{
    type: Component,
    args: [{
      selector: "tui-carousel",
      imports: [NgTemplateOutlet, WaIntersectionObserver, WaIntersectionObserverDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(WA_INTERSECTION_ROOT, ElementRef)],
      hostDirectives: [WaIntersectionObserverDirective],
      host: {
        waIntersectionThreshold: "0.5",
        "[attr.ngSkipHydration]": "skipHydration",
        "[style.max-block-size.px]": "height()"
      },
      template: '<span class="t-item">\n    <ng-container *ngTemplateOutlet="template(); context: {$implicit: math.max(index() - 1, min())}" />\n    <span\n        class="t-observer"\n        (waIntersectionObservee)="onSlide($event[0])"\n    ></span>\n    <span\n        waIntersectionObserver\n        waIntersectionThreshold="1"\n        class="t-bumper"\n        (waIntersectionObservee)="onIntersection(!!$event[0]?.isIntersecting, -1)"\n    ></span>\n</span>\n@if (index() !== min() && index() !== max()) {\n    <span class="t-item">\n        <ng-container *ngTemplateOutlet="template(); context: {$implicit: index()}" />\n        <span\n            class="t-observer"\n            (waIntersectionObservee)="onSlide($event[0])"\n        ></span>\n    </span>\n}\n@if (min() !== max()) {\n    <span class="t-item">\n        <ng-container *ngTemplateOutlet="template(); context: {$implicit: math.min(index() + 1, max())}" />\n        <span\n            class="t-observer"\n            (waIntersectionObservee)="onSlide($event[0])"\n        ></span>\n        <span\n            waIntersectionObserver\n            waIntersectionThreshold="1"\n            class="t-bumper"\n            (waIntersectionObservee)="onIntersection(!!$event[0]?.isIntersecting, 1)"\n        ></span>\n    </span>\n}\n',
      styles: [":host{scrollbar-width:none;-ms-overflow-style:none;transition-property:max-block-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);display:flex;max-inline-size:100%;overscroll-behavior-x:none;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:active .t-item{padding-block-start:1px;margin-block-start:-1px}.t-item{position:relative;display:flex;min-inline-size:100%;block-size:100%;box-sizing:content-box;align-items:center;justify-content:center;scroll-snap-align:start;scroll-snap-stop:always}.t-item:first-child .t-bumper{inset-inline-start:0}.t-item:last-child .t-bumper{inset-inline-end:0}.t-bumper,.t-observer{position:absolute;inset-block-start:.125rem;block-size:.125rem;inline-size:25%;pointer-events:none}\n"]
    }]
  }], () => [], null);
})();
var TuiCarouselDirective = class _TuiCarouselDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.carousel = inject(TuiCarouselComponent);
    this.running$ = merge(fromEvent(this.el, "mouseenter").pipe(map(TUI_FALSE_HANDLER)), fromEvent(this.el, "touchstart").pipe(map(TUI_FALSE_HANDLER)), fromEvent(this.el, "touchend").pipe(map(TUI_TRUE_HANDLER)), fromEvent(this.el, "mouseleave").pipe(map(TUI_TRUE_HANDLER)), inject(WA_PAGE_VISIBILITY));
    this.duration = input(0);
    this.progress = toSignal(combineLatest([toObservable(this.duration), toObservable(this.carousel.index)]).pipe(switchMap(([duration]) => this.running$.pipe(tuiIfMap(() => timer(0, 100).pipe(map((i) => Math.min(100, i * 100 / duration * 100)), takeWhile((percent) => percent < 100, true)))))), {
      initialValue: 0
    });
    this.sync = effect(() => {
      if (this.progress() === 100) {
        this.carousel.next();
      }
    });
  }
  static {
    this.ɵfac = function TuiCarouselDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCarouselDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCarouselDirective,
      selectors: [["tui-carousel", "duration", ""]],
      inputs: {
        duration: [1, "duration"]
      },
      exportAs: ["tuiCarousel"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselDirective, [{
    type: Directive,
    args: [{
      selector: "tui-carousel[duration]",
      exportAs: "tuiCarousel"
    }]
  }], null, null);
})();
var TuiCarousel = [TuiCarouselComponent, TuiCarouselDirective, TuiItem];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-error.mjs
var _c04 = () => ({});
function TuiErrorComponent_Conditional_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
function TuiErrorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, TuiErrorComponent_Conditional_0_span_1_Template, 1, 1, "span", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", error_r2.message || ctx_r2.default())("polymorpheusOutletContext", error_r2.context || ɵɵpureFunction0(2, _c04));
  }
}
var TuiErrorComponent = class _TuiErrorComponent {
  constructor() {
    this.default = inject(TUI_DEFAULT_ERROR_MESSAGE);
    this.content = computed((error = this.error()) => tuiIsString(error) ? new TuiValidationError(error) : error);
    this.error = input(null);
  }
  static {
    this.ɵfac = function TuiErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiErrorComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiErrorComponent,
      selectors: [["tui-error"]],
      hostVars: 2,
      hostBindings: function TuiErrorComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_error", ctx.content());
        }
      },
      inputs: {
        error: [1, "error"]
      },
      decls: 1,
      vars: 1,
      consts: [["tuiAnimated", "", 1, "t-message-text"], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
      template: function TuiErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiErrorComponent_Conditional_0_Template, 2, 3, "span", 0);
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ctx.content()) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiAnimated],
      styles: ['[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:grid;font:var(--tui-typography-body-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}._error[_nghost-%COMP%]{grid-template-rows:1fr;transition-duration:var(--tui-duration)}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line;grid-area:1 / 1 / span 2}.t-message-text.tui-enter[_ngcontent-%COMP%]{animation-name:tuiFade}.t-message-text.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade;animation-duration:calc(var(--tui-duration) / 2)}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:calc(24 / 14);vertical-align:bottom}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorComponent, [{
    type: Component,
    args: [{
      selector: "tui-error",
      imports: [PolymorpheusOutlet, TuiAnimated],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._error]": "content()"
      },
      template: '@if (content(); as error) {\n    <span\n        tuiAnimated\n        class="t-message-text"\n    >\n        <span\n            *polymorpheusOutlet="error.message || default() as text; context: error.context || {}"\n            [innerHTML]="text"\n        ></span>\n    </span>\n}\n',
      styles: [':host{transition-property:grid-template-rows;transition-duration:calc(var(--tui-duration) / 2);transition-timing-function:var(--tui-curve-productive-standard);display:grid;font:var(--tui-typography-body-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}:host._error{grid-template-rows:1fr;transition-duration:var(--tui-duration)}.t-message-text{white-space:pre-line;grid-area:1 / 1 / span 2}.t-message-text.tui-enter{animation-name:tuiFade}.t-message-text.tui-leave{animation-name:tuiFade;animation-duration:calc(var(--tui-duration) / 2)}.t-message-text:before{content:"";line-height:calc(24 / 14);vertical-align:bottom}\n']
    }]
  }], null, null);
})();
var TuiErrorDirective = class _TuiErrorDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.content = inject(TUI_VALIDATION_ERRORS);
    this.control = new BehaviorSubject(null);
    this.errors = toSignal(this.control.pipe(filter(Boolean), distinctUntilChanged(), switchMap((control) => control.events.pipe(startWith(null), map(() => !control.disabled && control.touched && control.errors)))));
    this.key = computed((errors = this.errors() || {}) => this.order().find((id) => errors[id]) || Object.keys(errors)[0] || "");
    this.order = input([]);
    this.error = tuiDirectiveBinding(TuiErrorComponent, "error", computed((errors = this.errors() || null) => errors && this.getError(errors[this.key()], this.content[this.key()])), {
      self: true,
      optional: true
    });
  }
  registerOnChange() {
  }
  registerOnTouched() {
  }
  writeValue() {
  }
  validate(control) {
    this.control.next(control);
    return null;
  }
  onValidator(validator) {
    if (this.control.value && validator.control === this.control.value) {
      validator.id = this.el.id;
    }
  }
  getError(context, content) {
    context = isSignal(context) ? context() : context;
    if (context instanceof TuiValidationError) {
      return context;
    }
    if (content === void 0 && isContent(context)) {
      return getError(context);
    }
    if (isSignal(content)) {
      return getError(content(), context);
    }
    if (content instanceof Function) {
      const message = content(context);
      return getError(isSignal(message) ? message() : message, context);
    }
    return getError(content, context);
  }
  static {
    this.ɵfac = function TuiErrorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiErrorDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiErrorDirective,
      selectors: [["tui-error", "ngModel", ""], ["tui-error", "formControlName", ""], ["tui-error", "formControl", ""], ["tui-error", "formGroup", ""], ["tui-error", "formGroupName", ""], ["tui-error", "formArrayName", ""], ["tui-error", "formArray", ""]],
      hostAttrs: ["aria-live", "polite"],
      hostBindings: function TuiErrorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-validator.zoneless", function TuiErrorDirective_tui_validator_zoneless_HostBindingHandler($event) {
            return ctx.onValidator($event.detail);
          }, ɵɵresolveDocument);
        }
      },
      inputs: {
        order: [1, "order"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALUE_ACCESSOR, _TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, _TuiErrorDirective, true)]), ɵɵHostDirectivesFeature([TuiId])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorDirective, [{
    type: Directive,
    args: [{
      selector: "tui-error[ngModel], tui-error[formControlName], tui-error[formControl], tui-error[formGroup], tui-error[formGroupName], tui-error[formArrayName], tui-error[formArray]",
      providers: [tuiProvide(NG_VALUE_ACCESSOR, TuiErrorDirective, true), tuiProvide(NG_VALIDATORS, TuiErrorDirective, true)],
      hostDirectives: [TuiId],
      host: {
        "aria-live": "polite",
        "(document:tui-validator.zoneless)": "onValidator($event.detail)"
      }
    }]
  }], null, null);
})();
function getError(content = "", context) {
  return new TuiValidationError(content, context);
}
function isContent(value) {
  return tuiIsString(value) || value instanceof TemplateRef || value instanceof PolymorpheusTemplate || value instanceof PolymorpheusComponent;
}
var TuiErrorPipe = class _TuiErrorPipe {
  constructor() {
    this.control = inject(NgControl);
    this.directive = new TuiErrorDirective();
  }
  transform(order) {
    untracked(() => {
      this.directive.validate(this.control.control);
      tuiSetSignal(this.directive.order, order);
    });
    const error = this.directive.error();
    if (!error) {
      return "";
    }
    return typeof error.message === "function" ? error.message(error.context) : error.message;
  }
  static {
    this.ɵfac = function TuiErrorPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiErrorPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiError",
      type: _TuiErrorPipe,
      pure: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorPipe, [{
    type: Pipe,
    args: [{
      name: "tuiError",
      pure: false
    }]
  }], null, null);
})();
var TuiError = [TuiErrorComponent, TuiErrorDirective, TuiErrorPipe];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-loader.mjs
var _c05 = ["*"];
function TuiLoader_Conditional_2_Conditional_3_ng_container_1_Template(rf, ctx) {
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
function TuiLoader_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiLoader_Conditional_2_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent());
  }
}
function TuiLoader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "circle", 4);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, TuiLoader_Conditional_2_Conditional_3_Template, 2, 1, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-loader_inherit-color", ctx_r1.inheritColor());
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.textContent() ? 3 : -1);
  }
}
var TUI_LOADER_DEFAULT_OPTIONS = {
  size: "m",
  inheritColor: false,
  overlay: false
};
var [TUI_LOADER_OPTIONS, tuiLoaderOptionsProvider] = tuiCreateOptions(TUI_LOADER_DEFAULT_OPTIONS);
var TuiLoader = class _TuiLoader {
  constructor() {
    this.options = inject(TUI_LOADER_OPTIONS);
    this.isApple = isSafari(tuiInjectElement()) || inject(WA_IS_IOS);
    this.size = input(this.options.size);
    this.inheritColor = input(this.options.inheritColor);
    this.overlay = input(this.options.overlay);
    this.textContent = input();
    this.loading = input(true);
  }
  static {
    this.ɵfac = function TuiLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLoader)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLoader,
      selectors: [["tui-loader"]],
      hostVars: 3,
      hostBindings: function TuiLoader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
          ɵɵclassProp("_loading", ctx.loading());
        }
      },
      inputs: {
        size: [1, "size"],
        inheritColor: [1, "inheritColor"],
        overlay: [1, "overlay"],
        textContent: [1, "textContent"],
        loading: [1, "loading"]
      },
      ngContentSelectors: _c05,
      decls: 3,
      vars: 7,
      consts: [[1, "t-content", 3, "disabled"], [1, "t-loader", 3, "t-loader_inherit-color"], [1, "t-loader"], ["height", "100%", "width", "100%", 1, "t-icon"], [1, "t-circle"], [1, "t-text"], [4, "polymorpheusOutlet"]],
      template: function TuiLoader_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "fieldset", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵconditionalCreate(2, TuiLoader_Conditional_2_Template, 4, 3, "div", 1);
        }
        if (rf & 2) {
          ɵɵstyleProp("opacity", ctx.overlay() && ctx.loading() ? 0.3 : null)("pointer-events", ctx.loading() ? "none" : null);
          ɵɵproperty("disabled", ctx.loading() && !ctx.isApple);
          ɵɵattribute("inert", ctx.loading() || null);
          ɵɵadvance(2);
          ɵɵconditional(ctx.loading() ? 2 : -1);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:grid;flex-shrink:0;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{grid-area:1 / 1;padding:0;margin:0;border:none;isolation:inherit;min-inline-size:0;min-block-size:0}.t-loader[_ngcontent-%COMP%]{position:relative;display:flex;grid-area:1 / 1;flex-direction:column;gap:1rem;align-items:center;justify-content:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);font-size:1rem}[data-size=xs][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-typography-body-s);color:inherit;max-inline-size:100%;text-align:center}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{inline-size:var(--t-diameter);block-size:var(--t-diameter);animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));cx:50%;cy:50%;stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoader, [{
    type: Component,
    args: [{
      selector: "tui-loader",
      imports: [PolymorpheusOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size()",
        "[class._loading]": "loading()"
      },
      template: `<fieldset
    class="t-content"
    [attr.inert]="loading() || null"
    [disabled]="loading() && !isApple"
    [style.opacity]="overlay() && loading() ? 0.3 : null"
    [style.pointer-events]="loading() ? 'none' : null"
>
    <ng-content />
</fieldset>

@if (loading()) {
    <div
        class="t-loader"
        [class.t-loader_inherit-color]="inheritColor()"
    >
        <svg
            height="100%"
            width="100%"
            class="t-icon"
        >
            <circle class="t-circle" />
        </svg>
        @if (textContent()) {
            <div class="t-text">
                <ng-container *polymorpheusOutlet="textContent() as text">
                    {{ text }}
                </ng-container>
            </div>
        }
    </div>
}
`,
      styles: [":host{position:relative;display:grid;flex-shrink:0;--tui-thickness: calc(var(--t-diameter) / 12)}:host._loading{overflow:hidden}:host[data-size=xs]{--t-diameter: .75em}:host[data-size=s]{--t-diameter: 1em}:host[data-size=m]{--t-diameter: 1.5em}:host[data-size=l]{--t-diameter: 2.5em}:host[data-size=xl]{--t-diameter: 3.5em}:host[data-size=xxl]{--t-diameter: 5em}.t-content{grid-area:1 / 1;padding:0;margin:0;border:none;isolation:inherit;min-inline-size:0;min-block-size:0}.t-loader{position:relative;display:flex;grid-area:1 / 1;flex-direction:column;gap:1rem;align-items:center;justify-content:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);font-size:1rem}:host[data-size=xs] .t-loader,:host[data-size=s] .t-loader{flex-direction:row}.t-loader.t-loader_inherit-color{color:inherit;stroke:currentColor}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-typography-body-s);color:inherit;max-inline-size:100%;text-align:center}@keyframes tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon{inline-size:var(--t-diameter);block-size:var(--t-diameter);animation:tuiLoaderRotate 4s linear infinite}@keyframes tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));cx:50%;cy:50%;stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:tuiLoaderDashOffset 4s linear infinite}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = input(inject(TUI_PLATFORM, {
      skipSelf: true
    }));
  }
  static {
    this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPlatform)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPlatform,
      selectors: [["", "tuiPlatform", ""]],
      hostVars: 1,
      hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-platform", ctx.tuiPlatform());
        }
      },
      inputs: {
        tuiPlatform: [1, "tuiPlatform"]
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_PLATFORM,
        useFactory: () => inject(_TuiPlatform).tuiPlatform()
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform()
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform()"
      }
    }]
  }], null, null);
})();

// node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var WaScreenOrientationService = class _WaScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  screen = this.win.screen;
  // SSR
  stream$ = (this.screen ? fromEvent(this.screen.orientation, "change").pipe(startWith(null), map(() => (
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
     * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
     *
     * Browser compatibility:
     * Safari 16.4+, Chrome 38+, Firefox 43+
     */
    this.win.screen.orientation.type
  ))) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
    const angle = Number.parseInt(this.win.orientation, 10);
    switch (angle) {
      case -90:
        return "landscape-secondary";
      case 180:
        return "portrait-secondary";
      case 90:
        return "landscape-primary";
      case 0:
      default:
        return "portrait-primary";
    }
  }))).pipe(shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function WaScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaScreenOrientationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaScreenOrientationService,
    factory: _WaScreenOrientationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var WaViewportService = class _WaViewportService extends Observable {
  visualViewport = inject(WA_WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function WaViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaViewportService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaViewportService,
    factory: _WaViewportService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.minInnerHeight = Infinity;
    this.$ = inject(WaViewportService).pipe(takeUntilDestroyed()).subscribe(({
      offsetLeft,
      offsetTop,
      height,
      width,
      scale
    }) => {
      this.minInnerHeight = Math.min(this.minInnerHeight, this.w.innerHeight);
      this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
      this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
      this.style.setProperty("--tui-viewport-height", tuiPx(height));
      this.style.setProperty("--tui-viewport-width", tuiPx(width));
      this.style.setProperty("--tui-viewport-scale", String(scale));
      this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
      this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
      this.style.setProperty("--tui-viewport-svh", tuiPx(this.minInnerHeight / 100));
    });
  }
  static {
    this.ɵfac = function TuiVisualViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewport)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVisualViewport,
      selectors: [["", "tuiVisualViewport", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
    type: Directive,
    args: [{
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c06 = ["*", [["tuiOverContent"]]];
var _c1 = ["*", "tuiOverContent"];
function TuiRoot_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 1);
  }
}
function TuiRoot_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiRoot_Conditional_2_Conditional_0_Template, 1, 0, "tui-scroll-controls", 1);
    ɵɵelementStart(1, "tui-popups");
    ɵɵprojection(2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.scrollbars ? 0 : -1);
  }
}
var TuiRoot = class _TuiRoot {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.child = !!inject(_TuiRoot, {
      optional: true,
      skipSelf: true
    });
    this.reducedMotion = inject(TUI_REDUCED_MOTION);
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    this.top = signal(this.parent);
    this.breakpoint = inject(TUI_BREAKPOINT);
    this.liquidGlass = inject(TUI_LIQUID_GLASS);
    this.scrollbars = !inject(WA_IS_MOBILE) && !this.child && inject(TUI_SCROLLBAR_OPTIONS).mode !== "native" && inject(TUI_OPTIONS).scrollbars !== "native";
  }
  get parent() {
    return this.doc.fullscreenElement ? this.doc.fullscreenElement === this.el : !this.child;
  }
  static {
    this.ɵfac = function TuiRoot_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRoot)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRoot,
      selectors: [["tui-root"]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 8,
      hostBindings: function TuiRoot_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("fullscreenchange", function TuiRoot_fullscreenchange_HostBindingHandler() {
            return ctx.top.set(ctx.parent);
          }, ɵɵresolveDocument)("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--tui-duration", ctx.duration, "ms")("--tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
          ɵɵclassProp("_mobile", ctx.breakpoint() === "mobile")("tui-liquid-glass", ctx.liquidGlass);
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiPlatform, TuiVisualViewport, TuiFontSize])],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 1,
      consts: [[1, "t-root-content"], [1, "t-root-scrollbar"]],
      template: function TuiRoot_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c06);
          ɵɵelementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵconditionalCreate(2, TuiRoot_Conditional_2_Template, 3, 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ctx.top() ? 2 : -1);
        }
      },
      dependencies: [TuiPopups, TuiScrollControls],
      styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}@keyframes tuiBlur{0%{filter:blur(var(--tui-blur, .25rem))}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:var(--tui-curve-productive-entrance);pointer-events:none}.tui-leave{animation-direction:reverse;animation-timing-function:var(--tui-curve-productive-exit)}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-typography-body-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root:has(>tui-popups tui-modal)>.t-root-content{interactivity:inert}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"],
      encapsulation: 2,
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
    type: Component,
    args: [{
      selector: "tui-root",
      imports: [TuiPopups, TuiScrollControls],
      template: `
        <div class="t-root-content"><ng-content /></div>
        @if (top()) {
            @if (scrollbars) {
                <tui-scroll-controls class="t-root-scrollbar" />
            }
            <tui-popups><ng-content select="tuiOverContent" /></tui-popups>
        }
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
      host: {
        "data-tui-version": TUI_VERSION,
        "[class._mobile]": 'breakpoint() === "mobile"',
        "[class.tui-liquid-glass]": "liquidGlass",
        "[style.--tui-duration.ms]": "duration",
        "[style.--tui-scroll-behavior]": 'reducedMotion ? "auto" : "smooth"',
        "(document:fullscreenchange)": "top.set(parent)",
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        "(touchstart.passive.zoneless)": "0"
      },
      styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}@keyframes tuiBlur{0%{filter:blur(var(--tui-blur, .25rem))}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:var(--tui-curve-productive-entrance);pointer-events:none}.tui-leave{animation-direction:reverse;animation-timing-function:var(--tui-curve-productive-exit)}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-typography-body-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root:has(>tui-popups tui-modal)>.t-root-content{interactivity:inert}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-slider.mjs
var _c07 = ["*", [["input", "type", "range"]]];
var _c12 = ["*", "input[type=range]"];
function TuiSliderThumbLabel_Conditional_0_Template(rf, ctx) {
}
var TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
  const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
  const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
  const upperStep = keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1] || [0, 0];
  return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
  const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
  const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
  return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
  const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
  return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
function tuiCreateKeyStepsTransformer(keySteps) {
  return new class {
    fromControlValue(controlValue) {
      return tuiKeyStepValueToPercentage(controlValue, keySteps) / 100;
    }
    toControlValue(ratio) {
      return tuiPercentageToKeyStepValue(ratio * 100, keySteps);
    }
  }();
}
var TuiSliderComponent = class _TuiSliderComponent {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.ticksGradient = computed((segments = this.segments()) => this.getTicksGradient(segments));
    this.segments = input([1], {
      alias: "segments",
      transform: (x) => tuiIsNumber(x) ? Array.from({
        length: x
      }, (_, i) => i / x) : x
    });
    this.el = tuiInjectElement();
    this.keySteps = inject(TuiSliderKeyStepsBase, {
      self: true,
      optional: true
    });
    if (this.control instanceof NgModel) {
      this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
    }
  }
  get valueRatio() {
    return (this.value - this.min) / (this.max - this.min) || 0;
  }
  get min() {
    return Number(this.el.min);
  }
  set min(x) {
    this.el.min = String(x);
  }
  get max() {
    return Number(this.el.max || 100);
  }
  set max(x) {
    this.el.max = String(x);
  }
  get step() {
    if (!this.el.step) {
      return 1;
    }
    return this.el.step === "any" ? 0 : Number(this.el.step);
  }
  set step(x) {
    this.el.step = String(x);
  }
  get value() {
    if (this.control instanceof NgModel) {
      const transformer = this.keySteps?.transformer();
      const value = this.keySteps && transformer ? this.keySteps.toSliderValue(transformer.fromControlValue(this.control.value)) : this.control.viewModel;
      return this.step ? tuiRound(Math.round(value / this.step) * this.step, TUI_FLOATING_PRECISION) : value;
    }
    return Number(this.el.value) || 0;
  }
  set value(newValue) {
    this.el.value = `${newValue}`;
  }
  getTicksGradient(segments) {
    if (segments.length <= 1) {
      return "linear-gradient(to right, transparent 0 100%)";
    }
    const percentages = segments.filter((segment) => segment > 0 && segment < 1).map((segment) => segment * 100);
    return percentages.reduce((acc, segment, index) => `${acc}
                var(--tui-text-tertiary) ${segment}% calc(${segment}% + var(--t-tick-thickness)),
                transparent ${segment}% ${percentages[index + 1] ?? 100}%${percentages[index + 1] ? "," : ")"}
                `, `linear-gradient(to right, transparent 0 ${percentages[0]}%,`);
  }
  static {
    this.ɵfac = function TuiSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderComponent,
      selectors: [["input", "type", "range", "tuiSlider", ""]],
      hostVars: 4,
      hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSliderComponent_input_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--tui-slider-fill-ratio", ctx.valueRatio)("--tui-ticks-gradient", ctx.ticksGradient());
        }
      },
      inputs: {
        segments: [1, "segments"]
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiSliderComponent)])],
      decls: 0,
      vars: 0,
      template: function TuiSliderComponent_Template(rf, ctx) {
      },
      styles: ['[_nghost-%COMP%]{--t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:max(var(--tui-thumb-size, .75rem),1rem);padding:calc((max(var(--tui-thumb-size, .75rem),1rem) - max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem))/2) 0;box-sizing:border-box;outline:none;border-radius:1rem/3rem;background:var(--tui-ticks-gradient) no-repeat calc((var(--tui-thumb-size, .75rem) - var(--t-tick-thickness)) / 2) / calc(100% - var(--tui-thumb-size, .75rem)),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio))),var(--tui-background-neutral-2);background-clip:content-box}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[_nghost-%COMP%]:before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;inset-block-start:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2);inset-inline-start:var(--t-left);inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));background:currentColor;opacity:0;--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * var(--tui-thumb-size, .75rem))}[_nghost-%COMP%]:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]:focus-visible::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]::-webkit-slider-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}[_nghost-%COMP%]::-moz-range-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}[_nghost-%COMP%]::-moz-range-progress{opacity:0}tui-textfield   [type="range"][_nghost-%COMP%]{position:absolute;inset:100% var(--t-padding) 0;inline-size:auto;margin:calc(-.5*max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem)) 0 0;transform:translateY(-50%);background-color:transparent;pointer-events:auto}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderComponent, [{
    type: Component,
    args: [{
      selector: "input[type=range][tuiSlider]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiSliderComponent)],
      host: {
        "[style.--tui-slider-fill-ratio]": "valueRatio",
        "[style.--tui-ticks-gradient]": "ticksGradient()",
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        "(input)": "0"
      },
      styles: [':host{--t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:max(var(--tui-thumb-size, .75rem),1rem);padding:calc((max(var(--tui-thumb-size, .75rem),1rem) - max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem))/2) 0;box-sizing:border-box;outline:none;border-radius:1rem/3rem;background:var(--tui-ticks-gradient) no-repeat calc((var(--tui-thumb-size, .75rem) - var(--t-tick-thickness)) / 2) / calc(100% - var(--tui-thumb-size, .75rem)),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio))),var(--tui-background-neutral-2);background-clip:content-box}:host:active{cursor:ew-resize}:host:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host:before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:absolute;inset-block-start:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2);inset-inline-start:var(--t-left);inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));background:currentColor;opacity:0;--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * var(--tui-thumb-size, .75rem))}:host:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host:focus-visible::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-webkit-slider-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host::-webkit-slider-thumb:hover,:active:not(:disabled):host::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:host::-moz-range-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host::-moz-range-thumb:hover,:active:not(:disabled):host::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:host::-moz-range-progress{opacity:0}:host-context(tui-textfield) :host([type="range"]){position:absolute;inset:100% var(--t-padding) 0;inline-size:auto;margin:calc(-.5*max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem)) 0 0;transform:translateY(-50%);background-color:transparent;pointer-events:auto}\n']
    }]
  }], () => [], null);
})();
var TuiSliderKeyStepsBase = class _TuiSliderKeyStepsBase {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.min = signal(void 0);
    this.max = signal(void 0);
    this.sync = effect(() => {
      const steps = this.keySteps();
      this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps));
      this.min.set(steps?.[0][1]);
      this.max.set(steps?.[steps.length - 1]?.[1]);
    });
    this.step = input(1);
    this.keySteps = input();
    this.transformer = signal(void 0);
    this.controlValue = toSignal(timer(0).pipe(switchMap(() => tuiControlValue(this.control))));
    this.totalSteps = computed(() => (
      /**
       * Not-integer amount of steps is invalid usage of native sliders
       * ```html
       * <input type="range" [max]="100" [step]="3.33" />
       * ```
       * (impossible to select 100; 99.9 is max allowed value)
       */
      Math.round(100 / this.step())
    ));
  }
  ngOnInit() {
    this.slider = this.injector.get(TuiSliderComponent);
  }
  takeStep(coefficient) {
    const newValue = this.slider.value + coefficient;
    return this.transformer()?.toControlValue((this.slider.value + coefficient) / this.totalSteps()) ?? newValue;
  }
  toSliderValue(fraction) {
    return this.transformer() ? fraction * this.totalSteps() : fraction;
  }
  setControlValue(controlValue) {
    const fraction = this.transformer()?.fromControlValue(controlValue) ?? controlValue;
    this.slider.value = this.toSliderValue(fraction);
  }
  getControlValue() {
    const {
      value
    } = this.slider;
    return this.transformer()?.toControlValue(value / this.totalSteps()) ?? value;
  }
  static {
    this.ɵfac = function TuiSliderKeyStepsBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderKeyStepsBase)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeyStepsBase,
      selectors: [["input", "tuiSlider", "", "keySteps", ""]],
      hostVars: 6,
      hostBindings: function TuiSliderKeyStepsBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-valuemax", ctx.max())("aria-valuemin", ctx.min())("aria-valuenow", ctx.controlValue())("max", ctx.transformer() ? ctx.totalSteps() : ctx.slider == null ? null : ctx.slider.max)("min", ctx.transformer() ? 0 : ctx.slider == null ? null : ctx.slider.min)("step", ctx.transformer() ? 1 : ctx.step());
        }
      },
      inputs: {
        step: [1, "step"],
        keySteps: [1, "keySteps"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeyStepsBase, [{
    type: Directive,
    args: [{
      selector: "input[tuiSlider][keySteps]",
      host: {
        "[attr.aria-valuemax]": "max()",
        "[attr.aria-valuemin]": "min()",
        "[attr.aria-valuenow]": "controlValue()",
        "[attr.max]": "transformer() ? totalSteps() : slider?.max",
        "[attr.min]": "transformer() ? 0 : slider?.min",
        "[attr.step]": "transformer() ? 1 : step()"
      }
    }]
  }], null, null);
})();
var TuiSliderKeySteps = class _TuiSliderKeySteps extends TuiControl {
  constructor() {
    super(...arguments);
    this.base = inject(TuiSliderKeyStepsBase);
  }
  set keySteps(steps) {
    this.transformer = steps ? tuiCreateKeyStepsTransformer(steps) : TUI_IDENTITY_VALUE_TRANSFORMER;
  }
  setValue(sliderValue) {
    this.onChange(this.base.transformer() ? sliderValue / this.base.totalSteps() : sliderValue);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSliderKeySteps_BaseFactory;
      return function TuiSliderKeySteps_Factory(__ngFactoryType__) {
        return (ɵTuiSliderKeySteps_BaseFactory || (ɵTuiSliderKeySteps_BaseFactory = ɵɵgetInheritedFactory(_TuiSliderKeySteps)))(__ngFactoryType__ || _TuiSliderKeySteps);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeySteps,
      selectors: [["input", "tuiSlider", "", "keySteps", "", "ngModel", ""], ["input", "tuiSlider", "", "keySteps", "", "formControl", ""], ["input", "tuiSlider", "", "keySteps", "", "formControlName", ""]],
      hostVars: 2,
      hostBindings: function TuiSliderKeySteps_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function TuiSliderKeySteps_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("change", function TuiSliderKeySteps_change_HostBindingHandler($event) {
            return ctx.setValue($event.target.value);
          })("input", function TuiSliderKeySteps_input_HostBindingHandler($event) {
            return ctx.setValue($event.target.value);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.disabled())("value", ctx.base.toSliderValue(ctx.value()));
        }
      },
      inputs: {
        keySteps: "keySteps"
      },
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider(0)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeySteps, [{
    type: Directive,
    args: [{
      selector: "input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControlName]",
      inputs: ["keySteps"],
      providers: [tuiFallbackValueProvider(0)],
      host: {
        "[disabled]": "disabled()",
        "[value]": "base.toSliderValue(value())",
        "(blur)": "onTouched()",
        "(change)": "setValue($event.target.value)",
        "(input)": "setValue($event.target.value)"
      }
    }]
  }], null, null);
})();
var SLIDER_INTERACTION_KEYS = /* @__PURE__ */ new Set(["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"]);
var TuiSliderReadonly = class _TuiSliderReadonly {
  constructor() {
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.readonly = input(true, {
      transform: coerceBooleanProperty
    });
    const touchStart$ = tuiTypedFromEvent(this.el, "touchstart", {
      passive: false
    });
    const touchMove$ = tuiTypedFromEvent(this.doc, "touchmove", {
      passive: false
    });
    const touchEnd$ = tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    });
    const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
    combineLatest([touchMove$, shouldPreventMove$]).pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed()).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
  }
  preventEvent(event) {
    if (event.cancelable && this.readonly()) {
      event.preventDefault();
    }
  }
  preventKeyboardInteraction(event) {
    if (SLIDER_INTERACTION_KEYS.has(event.key)) {
      this.preventEvent(event);
    }
  }
  static {
    this.ɵfac = function TuiSliderReadonly_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderReadonly)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderReadonly,
      selectors: [["input", "tuiSlider", "", "readonly", ""]],
      hostBindings: function TuiSliderReadonly_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function TuiSliderReadonly_keydown_HostBindingHandler($event) {
            return ctx.preventKeyboardInteraction($event);
          })("mousedown", function TuiSliderReadonly_mousedown_HostBindingHandler($event) {
            return ctx.preventEvent($event);
          });
        }
      },
      inputs: {
        readonly: [1, "readonly"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderReadonly, [{
    type: Directive,
    args: [{
      selector: "input[tuiSlider][readonly]",
      host: {
        "(keydown)": "preventKeyboardInteraction($event)",
        "(mousedown)": "preventEvent($event)"
      }
    }]
  }], () => [], null);
})();
var TuiSliderThumbLabel = class _TuiSliderThumbLabel {
  constructor() {
    this.slider = contentChild(TuiSliderComponent);
    this.control = contentChild(NgControl);
  }
  ngAfterContentInit() {
    ngDevMode && console.assert(Boolean(this.control()?.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName for correct work.');
  }
  get ratio() {
    return this.slider()?.valueRatio || 0;
  }
  get ghostStart() {
    return this.ratio * (this.slider()?.el.offsetWidth || 0);
  }
  static {
    this.ɵfac = function TuiSliderThumbLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderThumbLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderThumbLabel,
      selectors: [["", "tuiSliderThumbLabel", ""]],
      contentQueries: function TuiSliderThumbLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.slider, TuiSliderComponent, 5)(dirIndex, ctx.control, NgControl, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      features: [ɵɵProvidersFeature([tuiHintOptionsProvider({
        direction: "top",
        appearance: "floating"
      })])],
      ngContentSelectors: _c12,
      decls: 5,
      vars: 7,
      consts: [[1, "t-ghost"]],
      template: function TuiSliderThumbLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c07);
          ɵɵconditionalCreate(0, TuiSliderThumbLabel_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵdomElementStart(2, "div", 0);
          ɵɵprojection(3);
          ɵɵdomElementEnd();
          ɵɵprojection(4, 1);
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional(ɵɵpipeBind1(1, 5, (tmp_0_0 = ctx.control()) == null ? null : tmp_0_0.valueChanges) ? 0 : -1);
          ɵɵadvance(2);
          ɵɵstyleProp("--tui-slider-thumb-ratio", ctx.ratio)("inset-inline-start", ctx.ghostStart, "px");
        }
      },
      dependencies: [AsyncPipe],
      styles: ['[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;display:grid;inset-block:0;margin:auto;border-radius:50%;pointer-events:none;inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);transform:translate(calc(var(--tui-slider-thumb-ratio) * var(--tui-thumb-size, .75rem) * -1 * var(--tui-inline)))}[dir="rtl"][_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%]{inset-inline-start:unset!important}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderThumbLabel, [{
    type: Component,
    args: [{
      selector: "[tuiSliderThumbLabel]",
      imports: [AsyncPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiHintOptionsProvider({
        direction: "top",
        appearance: "floating"
      })],
      template: '@if (control()?.valueChanges | async) {}\n\n<div\n    class="t-ghost"\n    [style.--tui-slider-thumb-ratio]="ratio"\n    [style.inset-inline-start.px]="ghostStart"\n>\n    <ng-content />\n</div>\n\n<ng-content select="input[type=range]" />\n',
      styles: [':host{position:relative}.t-ghost{position:absolute;display:grid;inset-block:0;margin:auto;border-radius:50%;pointer-events:none;inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);transform:translate(calc(var(--tui-slider-thumb-ratio) * var(--tui-thumb-size, .75rem) * -1 * var(--tui-inline)))}:host-context([dir="rtl"]) .t-ghost{inset-inline-start:unset!important}\n']
    }]
  }], null, null);
})();
var TuiSlider = [TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeyStepsBase, TuiSliderKeySteps, TuiSliderReadonly];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-date-format.mjs
var TuiDateFormat = class _TuiDateFormat {
  constructor() {
    this.tuiDateFormat = input.required();
  }
  static {
    this.ɵfac = function TuiDateFormat_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDateFormat)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDateFormat,
      selectors: [["", "tuiDateFormat", ""]],
      inputs: {
        tuiDateFormat: [1, "tuiDateFormat"]
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_DATE_FORMAT,
        useFactory: () => {
          const parent = inject(TUI_DATE_FORMAT, {
            skipSelf: true
          });
          const format = inject(_TuiDateFormat).tuiDateFormat;
          return computed(() => __spreadValues(__spreadValues({}, parent()), format()));
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDateFormat, [{
    type: Directive,
    args: [{
      selector: "[tuiDateFormat]",
      providers: [{
        provide: TUI_DATE_FORMAT,
        useFactory: () => {
          const parent = inject(TUI_DATE_FORMAT, {
            skipSelf: true
          });
          const format = inject(TuiDateFormat).tuiDateFormat;
          return computed(() => __spreadValues(__spreadValues({}, parent()), format()));
        }
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-group.mjs
var TUI_GROUP_DEFAULT_OPTIONS = {
  size: "l",
  collapsed: false,
  rounded: true,
  orientation: "horizontal"
};
var [TUI_GROUP_OPTIONS, tuiGroupOptionsProvider] = tuiCreateOptions(TUI_GROUP_DEFAULT_OPTIONS);
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
      exportAs: ["tui-group-5.15.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiGroup]:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;transform:translateZ(0);--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask-image:var(--t-group-mask);mask-image:var(--t-group-mask);mask-clip:no-clip}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:disabled,[tuiGroup]:where(*[data-tui-version="5.15.0"])>*._disabled{z-index:0}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:invalid:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.15.0"])>*[data-mode~=invalid]{z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has(:invalid:not([data-mode])),[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has([data-mode~=invalid]){z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has(:focus-visible){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has([data-focus=true]){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:checked:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.15.0"])>*[data-mode~=checked]{z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has([tuiBlock]:checked){z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:not(:last-child){margin-inline-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:nth-child(n){border-radius:0}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:first-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:last-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])>*:first-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])>*:last-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-size=s],[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}\n'],
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
      exportAs: `tui-group-${TUI_VERSION}`,
      styles: ['[tuiGroup]:where(*[data-tui-version="5.15.0"]){position:relative;display:flex;transform:translateZ(0);--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask-image:var(--t-group-mask);mask-image:var(--t-group-mask);mask-clip:no-clip}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:disabled,[tuiGroup]:where(*[data-tui-version="5.15.0"])>*._disabled{z-index:0}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:invalid:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.15.0"])>*[data-mode~=invalid]{z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has(:invalid:not([data-mode])),[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has([data-mode~=invalid]){z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has(:focus-visible){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has([data-focus=true]){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:checked:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.15.0"])>*[data-mode~=checked]{z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:has([tuiBlock]:checked){z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:not(:last-child){margin-inline-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:nth-child(n){border-radius:0}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:first-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:last-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[tuiGroup]:where(*[data-tui-version="5.15.0"])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])>*:first-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])>*:last-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.15.0"]):not([data-orientation=vertical])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-size=s],[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup]:where(*[data-tui-version="5.15.0"])[data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}\n']
    }]
  }], null, null);
})();
var TuiGroup = class _TuiGroup {
  constructor() {
    this.options = inject(TUI_GROUP_OPTIONS);
    this.nothing = tuiWithStyles(Styles);
    this.orientation = input(this.options.orientation);
    this.collapsed = input(this.options.collapsed);
    this.rounded = input(this.options.rounded);
    this.size = input(this.options.size);
  }
  static {
    this.ɵfac = function TuiGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiGroup,
      selectors: [["", "tuiGroup", "", 5, "ng-container"]],
      hostAttrs: ["data-tui-version", "5.15.0", "tuiGroup", ""],
      hostVars: 12,
      hostBindings: function TuiGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation())("data-size", ctx.size());
          ɵɵstyleProp("--t-group-margin", ctx.collapsed() ? null : 0.125, "rem")("--t-group-mask-end", ctx.collapsed() ? null : "none")("--t-group-mask-start", ctx.collapsed() ? null : "none")("--t-group-mask", ctx.collapsed() ? null : "none")("--t-group-radius", ctx.rounded() ? null : 0);
        }
      },
      inputs: {
        orientation: [1, "orientation"],
        collapsed: [1, "collapsed"],
        rounded: [1, "rounded"],
        size: [1, "size"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroup, [{
    type: Directive,
    args: [{
      selector: "[tuiGroup]:not(ng-container)",
      host: {
        "data-tui-version": TUI_VERSION,
        tuiGroup: "",
        "[attr.data-orientation]": "orientation()",
        "[attr.data-size]": "size()",
        "[style.--t-group-margin.rem]": "collapsed() ? null : 0.125",
        "[style.--t-group-mask-end]": 'collapsed() ? null : "none"',
        "[style.--t-group-mask-start]": 'collapsed() ? null : "none"',
        "[style.--t-group-mask]": 'collapsed() ? null : "none"',
        "[style.--t-group-radius]": "rounded() ? null : 0"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-number-format.mjs
var TuiNumberFormat = class _TuiNumberFormat {
  constructor() {
    this.tuiNumberFormat = input.required();
  }
  static {
    this.ɵfac = function TuiNumberFormat_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNumberFormat)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNumberFormat,
      selectors: [["", "tuiNumberFormat", ""]],
      inputs: {
        tuiNumberFormat: [1, "tuiNumberFormat"]
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_NUMBER_FORMAT,
        useFactory: () => {
          const parent = inject(TUI_NUMBER_FORMAT, {
            skipSelf: true
          });
          const format = inject(_TuiNumberFormat).tuiNumberFormat;
          return computed(() => __spreadValues(__spreadValues({}, parent()), format()));
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNumberFormat, [{
    type: Directive,
    args: [{
      selector: "[tuiNumberFormat]",
      providers: [{
        provide: TUI_NUMBER_FORMAT,
        useFactory: () => {
          const parent = inject(TUI_NUMBER_FORMAT, {
            skipSelf: true
          });
          const format = inject(TuiNumberFormat).tuiNumberFormat;
          return computed(() => __spreadValues(__spreadValues({}, parent()), format()));
        }
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-format.mjs
function tuiNumberToStringWithoutExp(value) {
  const valueAsString = String(value);
  const [numberPart, expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart = ""] = numberPart?.split(".") ?? [];
    const decimalDigits = Number(expPart) + (fractionalPart?.length || 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function tuiGetFractionPartPadded(value, precision) {
  const [, fractionPartPadded = ""] = tuiNumberToStringWithoutExp(value).split(".");
  return tuiIsNumber(precision) ? fractionPartPadded.slice(0, Math.max(0, precision)) : fractionPartPadded;
}
function tuiFormatNumber(value, settings = {}) {
  const { precision, decimalSeparator, thousandSeparator, decimalMode, rounding } = __spreadValues(__spreadProps(__spreadValues({}, TUI_DEFAULT_NUMBER_FORMAT), {
    decimalMode: "always",
    precision: Infinity
  }), settings);
  const rounded = Number.isFinite(precision) ? tuiRoundWith({ value, precision, method: rounding }) : value;
  const integerPartString = String(Math.floor(Math.abs(rounded)));
  let fractionPartPadded = tuiGetFractionPartPadded(rounded, precision);
  const hasFraction = Number(fractionPartPadded) > 0;
  if (Number.isFinite(precision)) {
    if (decimalMode === "always" || hasFraction && decimalMode === "pad") {
      const zeroPaddingSize = Math.max(precision - fractionPartPadded.length, 0);
      const zeroPartString = "0".repeat(zeroPaddingSize);
      fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
    } else {
      fractionPartPadded = fractionPartPadded.replace(/0*$/, "");
    }
  }
  const remainder = integerPartString.length % 3;
  const sign = value < 0 ? CHAR_HYPHEN : "";
  let result = `${sign}${integerPartString.charAt(0)}`;
  for (let i = 1; i < integerPartString.length; i++) {
    if (i % 3 === remainder && integerPartString.length > 3) {
      result += thousandSeparator;
    }
    result += integerPartString.charAt(i);
  }
  return fractionPartPadded ? `${result}${decimalSeparator}${fractionPartPadded}` : result;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-number.mjs
var TuiFormatNumberPipe = class _TuiFormatNumberPipe {
  constructor() {
    this.format = inject(TUI_NUMBER_FORMAT);
    this.value = signal(Number.NaN);
    this.settings = signal({});
    this.formatted = computed(() => tuiFormatNumber(this.value(), __spreadValues(__spreadProps(__spreadValues({}, this.format()), {
      precision: Number.isNaN(this.format().precision) ? Infinity : this.format().precision
    }), this.settings())));
  }
  /**
   * Formats number adding a thousand separators and correct decimal separator
   * padding decimal part with zeroes to given length
   * @param value number
   * @param settings See {@link TuiNumberFormatSettings}
   */
  transform(value, settings = {}) {
    untracked(() => {
      this.value.set(value);
      this.settings.set(settings);
    });
    return this.formatted();
  }
  static {
    this.ɵfac = function TuiFormatNumberPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatNumberPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatNumber",
      type: _TuiFormatNumberPipe,
      pure: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatNumberPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFormatNumber",
      pure: false
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    return this.el.nativeElement.querySelector(this.options.query) ?? this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return Number.parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: Number.NaN,
  // NaN = no delay/sync
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, WA_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
    this.autoFocus = input(void 0, {
      alias: "tuiAutoFocus",
      transform: coerceBooleanProperty
    });
  }
  ngAfterViewInit() {
    if (this.autoFocus()) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
  static {
    this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoFocus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAutoFocus,
      selectors: [["", "tuiAutoFocus", ""]],
      inputs: {
        autoFocus: [1, "tuiAutoFocus", "autoFocus"]
      },
      features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = null;
    this.initialized = false;
    Promise.resolve().then(() => {
      this.initialized = true;
      this.activeElement = tuiGetFocused(this.doc);
      this.el.focus();
    });
  }
  ngOnDestroy() {
    this.initialized = false;
    if (tuiIsHTMLElement(this.activeElement)) {
      this.activeElement.focus();
    }
  }
  onFocusIn(node) {
    const {
      firstElementChild
    } = this.el;
    if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
      tuiGetClosestFocusable({
        initial: firstElementChild,
        root: this.el
      })?.focus();
    }
  }
  static {
    this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFocusTrap)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFocusTrap,
      selectors: [["", "tuiFocusTrap", ""]],
      hostAttrs: ["tabIndex", "0"],
      hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown", function TuiFocusTrap_pointerdown_HostBindingHandler($event) {
            return $event.currentTarget == null ? null : $event.currentTarget.removeAttribute("tabindex");
          })("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
            return ctx.initialized && ctx.onFocusIn($event.target);
          }, ɵɵresolveWindow);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(pointerdown)": '$event.currentTarget?.removeAttribute("tabindex")',
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)"
      }
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-modal.mjs
function TuiModalComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TuiModalComponent = class _TuiModalComponent {
  constructor() {
    this.current = inject(TuiActiveZone);
    this.parent = findActive(inject(TuiActiveZone, {
      skipSelf: true
    }), tuiGetFocused(inject(DOCUMENT)));
    this.context = injectContext();
    this.component = signal(null);
  }
  ngOnInit() {
    this.current.tuiActiveZoneParentSetter = this.parent;
  }
  ngOnDestroy() {
    this.current.tuiActiveZoneParentSetter = null;
  }
  static {
    this.ɵfac = function TuiModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiModalComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiModalComponent,
      selectors: [["tui-modal"]],
      hostAttrs: ["aria-modal", "true", "data-tui-version", "5.15.0", "role", "dialog", 1, "tui-enter"],
      hostVars: 1,
      hostBindings: function TuiModalComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationend.self", function TuiModalComponent_animationend_self_HostBindingHandler($event) {
            return $event.target.classList.remove("tui-enter");
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-labelledby", ctx.context.id);
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiActiveZone, TuiFocusTrap])],
      decls: 3,
      vars: 2,
      consts: [["tuiScrollRef", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
      template: function TuiModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiModalComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          ɵɵelement(2, "tui-scroll-controls", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.component())("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollControls, TuiScrollRef],
      styles: ['@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--t-root-top))}tui-modal:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.15.0"]):not(:last-of-type){interactivity:inert}tui-modal:where(*[data-tui-version="5.15.0"]).tui-enter,tui-modal:where(*[data-tui-version="5.15.0"]).tui-leave{animation-name:tuiDummy}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version="5.15.0"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.15.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.15.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version="5.15.0"]):before{transition-property:backdrop-filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version="5.15.0"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n'],
      encapsulation: 2,
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalComponent, [{
    type: Component,
    args: [{
      selector: "tui-modal",
      imports: [PolymorpheusOutlet, TuiScrollControls, TuiScrollRef],
      template: `
        <div tuiScrollRef>
            <ng-container *polymorpheusOutlet="component(); context: context" />
            <tui-scroll-controls class="t-scrollbars" />
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiActiveZone, TuiFocusTrap],
      host: {
        "aria-modal": "true",
        "data-tui-version": TUI_VERSION,
        role: "dialog",
        class: "tui-enter",
        "[attr.aria-labelledby]": "context.id",
        "(animationend.self)": '$event.target.classList.remove("tui-enter")'
      },
      styles: ['@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version="5.15.0"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--t-root-top))}tui-modal:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.15.0"])::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.15.0"]):not(:last-of-type){interactivity:inert}tui-modal:where(*[data-tui-version="5.15.0"]).tui-enter,tui-modal:where(*[data-tui-version="5.15.0"]).tui-leave{animation-name:tuiDummy}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version="5.15.0"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version="5.15.0"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.15.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.15.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version="5.15.0"]):before{transition-property:backdrop-filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:var(--tui-curve-productive-standard);content:"";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version="5.15.0"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version="5.15.0"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n']
    }]
  }], null, null);
})();
function findActive(zone, el) {
  if (!el || !zone.contains(el)) {
    return null;
  }
  const active = zone.children.find((child) => !child["el"].matches("[tuiActiveZoneAdapter]") && child.contains(el));
  return active ? findActive(active, el) : zone;
}
var TuiModalService = class _TuiModalService extends TuiPortal {
  constructor() {
    super(inject(TuiPopupService));
    this.component = TuiModalComponent;
  }
  add(component) {
    const ref = this.service.add(component);
    const el = ref.location.nativeElement;
    el.closest("tui-root")?.firstElementChild?.setAttribute("inert", "");
    ref.instance.component.set(new PolymorpheusComponent(this.content));
    return () => {
      ref.instance.component.set(null);
      ref.changeDetectorRef.detectChanges();
      el.classList.add(TUI_LEAVE);
      Promise.allSettled(getAnimations(el)).then(async () => Promise.allSettled(getAnimations(el.firstElementChild?.firstElementChild))).then(() => {
        el.closest("tui-root")?.firstElementChild?.removeAttribute("inert");
        ref.destroy();
        el.remove();
      });
    };
  }
  static {
    this.ɵfac = function TuiModalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiModalService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiModalService,
      factory: _TuiModalService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalService, [{
    type: Injectable
  }], () => [], null);
})();
function getAnimations(el) {
  return el?.getAnimations?.().map(async ({
    finished
  }) => finished) || [];
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dialog.mjs
function TuiDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function TuiDialogComponent_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close$.next());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("appearance", ctx_r1.context.appearance.includes("fullscreen") ? "action" : "neutral");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.close(), " ");
  }
}
function TuiDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header")(1, "hgroup", 3);
    ɵɵelement(2, "h2", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, ɵɵsanitizeHtml);
  }
}
function TuiDialogComponent_ng_container_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "footer")(1, "button", 6);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_2_Conditional_5_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.context.data || "OK", " ");
  }
}
function TuiDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "header")(2, "hgroup", 3);
    ɵɵelement(3, "h2", 4)(4, "p", 5);
    ɵɵelementEnd()();
    ɵɵconditionalCreate(5, TuiDialogComponent_ng_container_2_Conditional_5_Template, 3, 1, "footer");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.context.closable || ctx_r1.context.dismissible ? 5 : -1);
  }
}
var TUI_DIALOGS_CLOSE = new InjectionToken(ngDevMode ? "TUI_DIALOGS_CLOSE" : "", {
  factory: () => inject(Router).events.pipe(filter((e) => e instanceof ActivationStart))
});
var TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$, tuiCloseWatcher().pipe(tuiZonefull())).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return (
        // @ts-ignore
        typeof CloseWatcher === "undefined" && event.key?.toLowerCase() === "escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target))
      );
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => (
      // Scrollbars
      tuiGetViewportWidth(this.win) - event.clientX > 17 && this.isOutside(tuiGetActualTarget(event))
    )), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && !tuiContainsOrAfter(this.el, target);
  }
  static {
    this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogCloseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogCloseService,
      factory: _TuiDialogCloseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], () => [], null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable2(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.close$ = new Subject();
    this.close = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.context = injectContext();
    this.primitive = typeof this.context.content === "function" || Object(this.context.content) !== this.context.content;
    this.sub = merge(this.close$.pipe(switchMap(() => toObservable2(this.context.closable))), inject(TuiDialogCloseService).pipe(exhaustMap(() => toObservable2(this.context.dismissible).pipe(take(1)))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      if (this.context.required) {
        this.context.$implicit.error(REQUIRED_ERROR);
      } else {
        this.context.$implicit.complete();
      }
    });
  }
  static {
    this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogComponent,
      selectors: [["tui-dialog"]],
      hostAttrs: ["data-tui-version", "5.15.0"],
      hostVars: 6,
      hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.context.size);
          ɵɵclassProp("_closable", ctx.context.closable)("tui-backdrop-hidden", ctx.context.appearance.includes("fullscreen"));
        }
      },
      features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵHostDirectivesFeature([TuiAnimated])],
      decls: 3,
      vars: 4,
      consts: [["tabindex", "0", "tuiButtonX", "", 3, "appearance"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tabindex", "0", "tuiButtonX", "", 3, "click", "appearance"], ["tuiTitle", ""], [3, "id", "innerHTML"], [3, "innerHTML"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"]],
      template: function TuiDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiDialogComponent_Conditional_0_Template, 2, 2, "button", 0);
          ɵɵconditionalCreate(1, TuiDialogComponent_Conditional_1_Template, 3, 2, "header");
          ɵɵtemplate(2, TuiDialogComponent_ng_container_2_Template, 6, 4, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.context.closable ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.primitive && ctx.context.label ? 1 : -1);
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiAutoFocus, TuiButton, TuiButtonX, TuiTitle],
      styles: ['tui-dialog:where(*[data-tui-version="5.15.0"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--tui-typography-body-m);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-popup)}tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])>header,tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.15.0"])>header [tuiTitle],tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version="5.15.0"])>header p,tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}tui-dialog:where(*[data-tui-version="5.15.0"])>header p:empty,tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version="5.15.0"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--tui-background-base);box-shadow:none;--tui-width: min(45rem, calc(100vw - 2rem) );--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--tui-typography-body-l)!important;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:"";block-size:1.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--tui-width) / 2) solid transparent;margin:0 calc(var(--tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--tui-width) / 2);margin:0 calc(var(--tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n'],
      encapsulation: 2,
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      selector: "tui-dialog",
      imports: [PolymorpheusOutlet, TuiAutoFocus, TuiButton, TuiButtonX, TuiTitle],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      hostDirectives: [TuiAnimated],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "context.size",
        "[class._closable]": "context.closable",
        "[class.tui-backdrop-hidden]": 'context.appearance.includes("fullscreen")'
      },
      template: `@if (context.closable) {
    <button
        tabindex="0"
        tuiButtonX
        [appearance]="context.appearance.includes('fullscreen') ? 'action' : 'neutral'"
        (click)="close$.next()"
    >
        {{ close() }}
    </button>
}

@if (!primitive && context.label) {
    <header>
        <hgroup tuiTitle>
            <h2
                [id]="context.id"
                [innerHTML]="context.label"
            ></h2>
        </hgroup>
    </header>
}

<ng-container *polymorpheusOutlet="context.content as text; context: context">
    <header>
        <hgroup tuiTitle>
            <h2
                [id]="context.id"
                [innerHTML]="context.label"
            ></h2>
            <p [innerHTML]="text"></p>
        </hgroup>
    </header>
    @if (context.closable || context.dismissible) {
        <footer>
            <button
                size="m"
                tuiAutoFocus
                tuiButton
                type="button"
                (click)="context.$implicit.complete()"
            >
                {{ context.data || 'OK' }}
            </button>
        </footer>
    }
</ng-container>
`,
      styles: ['tui-dialog:where(*[data-tui-version="5.15.0"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--tui-typography-body-m);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-popup)}tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version="5.15.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])>header,tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.15.0"])>header [tuiTitle],tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version="5.15.0"])>header p,tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}tui-dialog:where(*[data-tui-version="5.15.0"])>header p:empty,tui-dialog:where(*[data-tui-version="5.15.0"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version="5.15.0"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--tui-background-base);box-shadow:none;--tui-width: min(45rem, calc(100vw - 2rem) );--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--tui-typography-body-l)!important;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:"";block-size:1.5rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--tui-width) / 2) solid transparent;margin:0 calc(var(--tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--tui-width) / 2);margin:0 calc(var(--tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version="5.15.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n']
    }]
  }], null, null);
})();
var [TUI_DIALOG_OPTIONS, tuiDialogOptionsProvider] = tuiCreateOptions({
  appearance: "taiga",
  size: "m",
  required: false,
  closable: true,
  dismissible: true,
  label: "",
  data: void 0
});
var TuiDialogService = class _TuiDialogService extends TuiModalService {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DIALOG_OPTIONS);
    this.content = TuiDialogComponent;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialogService_BaseFactory;
      return function TuiDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogService,
      factory: _TuiDialogService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiDialog = class _TuiDialog {
  constructor() {
    this.tuiDialogOptions = input({});
  }
  static {
    this.ɵfac = function TuiDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialog)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDialog,
      selectors: [["ng-template", "tuiDialog", ""]],
      inputs: {
        tuiDialogOptions: [1, "tuiDialogOptions"]
      },
      features: [ɵɵProvidersFeature([tuiAsPortal(TuiDialogService)]), ɵɵHostDirectivesFeature([{
        directive: TuiPortalDirective,
        inputs: ["options", "tuiDialogOptions", "open", "tuiDialog"],
        outputs: ["openChange", "tuiDialogChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDialog]",
      providers: [tuiAsPortal(TuiDialogService)],
      hostDirectives: [{
        directive: TuiPortalDirective,
        inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
        outputs: ["openChange: tuiDialogChange"]
      }]
    }]
  }], null, null);
})();
function tuiDialog(component, _a = {}) {
  var _b = _a, {
    injector
  } = _b, options = __objRest(_b, [
    "injector"
  ]);
  if (!injector) {
    assertInInjectionContext(tuiDialog);
    injector = inject(INJECTOR$1);
  }
  const dialogService = injector.get(TuiDialogService);
  return (data) => dialogService.open(new PolymorpheusComponent(component, injector), __spreadProps(__spreadValues({}, options), {
    data
  }));
}
export {
  AbstractTuiCalendar,
  SCROLL_REF_SELECTOR,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_SPEED,
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  TUI_ASSETS_PATH,
  TUI_AUXILIARY,
  TUI_BACK_WORD,
  TUI_BREAKPOINT,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  TUI_BUTTON_X_OPTIONS,
  TUI_CALENDAR_DEFAULT_OPTIONS,
  TUI_CALENDAR_OPTIONS,
  TUI_CALENDAR_SHEET_DEFAULT_OPTIONS,
  TUI_CALENDAR_SHEET_OPTIONS,
  TUI_CDR,
  TUI_CELL_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_CLEAR_WORD,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DARK_MODE,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DATA_LIST_HOST,
  TUI_DATA_LIST_SIZE,
  TUI_DATE_FORMAT,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_OPTIONS,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOST,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS,
  TUI_FILTER_BY_INPUT_OPTIONS,
  TUI_FLOATING_PRECISION,
  TUI_FONT_OFFSET,
  TUI_GROUP_DEFAULT_OPTIONS,
  TUI_GROUP_OPTIONS,
  TUI_HINT_COMPONENT,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_OPTIONS,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  TUI_ICON_RESOLVER,
  TUI_ICON_START,
  TUI_ITEMS_HANDLERS,
  TUI_LINK_OPTIONS,
  TUI_LIQUID_GLASS,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  TUI_MEDIA,
  TUI_MONTHS,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_NOTIFICATION_CONCURRENCY,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  TUI_NUMBER_FORMAT,
  TUI_OPTIONS,
  TUI_OPTION_CONTENT,
  TUI_RADIO_OPTIONS,
  TUI_REDUCED_MOTION,
  TUI_SCROLLABLE,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_TEXTS,
  TUI_TEXTFIELD_ACCESSOR,
  TUI_TEXTFIELD_CONTENT,
  TUI_TEXTFIELD_ITEM,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TEXTFIELD_VALUE,
  TUI_VALIDATION_ERRORS,
  TUI_VIEWPORT,
  TuiAccessor,
  TuiAlertDirective,
  TuiAlertService,
  TuiAppearance,
  TuiButton,
  TuiButtonX,
  TuiCalendar,
  TuiCalendarSheet,
  TuiCalendarSheetPipe,
  TuiCalendarSpin,
  TuiCalendarYear,
  TuiCarousel,
  TuiCarouselComponent,
  TuiCarouselDirective,
  TuiCell,
  TuiCellResponsive,
  TuiCellStretch,
  TuiCheckbox,
  TuiDataList,
  TuiDataListComponent,
  TuiDateFormat,
  TuiDialog,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogService,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdown,
  TuiDropdownA11y,
  TuiDropdownAnchor,
  TuiDropdownAuto,
  TuiDropdownClose,
  TuiDropdownComponent,
  TuiDropdownContent,
  TuiDropdownContext,
  TuiDropdownDirective,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TuiDropdownFixed,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiError,
  TuiErrorComponent,
  TuiErrorDirective,
  TuiErrorPipe,
  TuiExpand,
  TuiFilterByInputPipe,
  TuiFormatNumberPipe,
  TuiGroup,
  TuiHint,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintDriver,
  TuiHintHost,
  TuiHintHover,
  TuiHintManual,
  TuiHintOverflow,
  TuiHintPointer,
  TuiHintPosition,
  TuiHintUnstyled,
  TuiHintUnstyledComponent,
  TuiIcon,
  TuiIconPipe,
  TuiIcons,
  TuiInput,
  TuiInputDirective,
  TuiItemsHandlersDirective,
  TuiItemsHandlersValidator,
  TuiLabel,
  TuiLink,
  TuiLoader,
  TuiModalComponent,
  TuiModalService,
  TuiNotification,
  TuiNotificationComponent,
  TuiNotificationDirective,
  TuiNotificationService,
  TuiNotificationTemplate,
  TuiNumberFormat,
  TuiOptGroup,
  TuiOption,
  TuiOptionWithContent,
  TuiOptionWithValue,
  TuiOrderWeekDaysPipe,
  TuiPopup,
  TuiPopupService,
  TuiPopups,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRadio,
  TuiRadioComponent,
  TuiRadioDirective,
  TuiRectAccessor,
  TuiRoot,
  TuiScrollControls,
  TuiScrollControlsService,
  TuiScrollIntoView,
  TuiScrollRef,
  TuiScrollable,
  TuiScrollbar,
  TuiScrollbarDirective,
  TuiScrollbarPosition,
  TuiScrollbarService,
  TuiSelectLike,
  TuiSlider,
  TuiSliderComponent,
  TuiSliderKeySteps,
  TuiSliderKeyStepsBase,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiSpinButton,
  TuiTextfield,
  TuiTextfieldComponent,
  TuiTextfieldContent,
  TuiTextfieldItemComponent,
  TuiTextfieldMultiComponent,
  TuiTextfieldOptionsDirective,
  TuiTitle,
  TuiVehicle,
  TuiVisualViewportService,
  TuiWithAppearance,
  TuiWithDropdownOpen,
  TuiWithIcons,
  TuiWithInput,
  TuiWithItemsHandlers,
  TuiWithNativePicker,
  TuiWithOptionContent,
  provideTaiga,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiAsAuxiliary,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsOptionContent,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  tuiAsTextfieldAccessor,
  tuiAsTextfieldContent,
  tuiAsVehicle,
  tuiAsViewport,
  tuiAssetsPathProvider,
  tuiButtonOptionsProvider,
  tuiButtonXOptionsProvider,
  tuiCalendarOptionsProvider,
  tuiCalendarSheetOptionsProvider,
  tuiCellOptionsProvider,
  tuiCheckFixedPosition,
  tuiCheckboxOptionsProvider,
  tuiCommonIconsProvider,
  tuiCreateKeyStepsTransformer,
  tuiDateFormatProvider,
  tuiDialog,
  tuiDialogOptionsProvider,
  tuiDropdown,
  tuiDropdownEnabled,
  tuiDropdownHoverOptionsProvider,
  tuiDropdownOptionsProvider,
  tuiEnableFontScaling,
  tuiFallbackAccessor,
  tuiFilterByInputOptionsProvider,
  tuiFormatNumber,
  tuiGetDuration,
  tuiGetFractionPartPadded,
  tuiGetHintProviders,
  tuiGetIconMode,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiGroupOptionsProvider,
  tuiHintOptionsProvider,
  tuiIconEnd,
  tuiIconResolverProvider,
  tuiIconStart,
  tuiIconsProvider,
  tuiInjectAuxiliary,
  tuiInjectDataListSize,
  tuiInjectIconResolver,
  tuiIsEditingKey,
  tuiIsObscured,
  tuiItemsHandlersProvider,
  tuiKeyStepValueToPercentage,
  tuiLinkOptionsProvider,
  tuiLoaderOptionsProvider,
  tuiNotificationOptionsProvider,
  tuiNumberFormatProvider,
  tuiNumberToStringWithoutExp,
  tuiOverrideOptions,
  tuiPercentageToKeyStepValue,
  tuiPositionAccessorFor,
  tuiProvideAccessor,
  tuiRadioOptionsProvider,
  tuiRectAccessorFor,
  tuiScrollbarOptionsProvider,
  tuiSizeBigger,
  tuiTextfieldOptionsProvider,
  tuiValidationErrorsProvider
};
//# sourceMappingURL=@taiga-ui_core.js.map
