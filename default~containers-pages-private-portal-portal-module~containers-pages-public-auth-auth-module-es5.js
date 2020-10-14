function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~containers-pages-private-portal-portal-module~containers-pages-public-auth-auth-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
    \*******************************************************************/

  /*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015LayoutJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function () {
      return BreakpointObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breakpoints", function () {
      return Breakpoints;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaMatcher", function () {
      return MediaMatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/layout-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/media-matcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Global registry for all dynamically-created, injected media queries.
     * @type {?}
     */


    var mediaQueriesForWebkitCompatibility = new Set();
    /**
     * Style tag that holds all of the dynamically-created media queries.
     * @type {?}
     */

    var mediaQueryStyleNode;
    /**
     * A utility for calling matchMedia queries.
     */

    var MediaMatcher =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _platform
       */
      function MediaMatcher(_platform) {
        _classCallCheck(this, MediaMatcher);

        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
        // call it from a different scope.
        window.matchMedia.bind(window) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       * @param {?} query
       * @return {?}
       */


      _createClass(MediaMatcher, [{
        key: "matchMedia",
        value: function matchMedia(query) {
          if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
          }

          return this._matchMedia(query);
        }
      }]);

      return MediaMatcher;
    }();

    MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
      return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
    };
    /** @nocollapse */


    MediaMatcher.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }];
    };
    /** @nocollapse */


    MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaMatcher_Factory() {
        return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      },
      token: MediaMatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * For Webkit engines that only trigger the MediaQueryListListener when
     * there is at least one CSS selector for the respective media query.
     * @param {?} query
     * @return {?}
     */


    function createEmptyStyleRule(query) {
      if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
      }

      try {
        if (!mediaQueryStyleNode) {
          mediaQueryStyleNode = document.createElement('style');
          mediaQueryStyleNode.setAttribute('type', 'text/css');

          /** @type {?} */
          document.head.appendChild(mediaQueryStyleNode);
        }

        if (mediaQueryStyleNode.sheet) {
          /** @type {?} */
          mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
          mediaQueriesForWebkitCompatibility.add(query);
        }
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * No-op matchMedia replacement for non-browser platforms.
     * @param {?} query
     * @return {?}
     */


    function noopMatchMedia(query) {
      // Use `as any` here to avoid adding additional necessary properties for
      // the noop matcher.
      return (
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {}
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints-observer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function BreakpointState() {}

    if (false) {}
    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function InternalBreakpointState() {}

    if (false) {}
    /**
     * @record
     */


    function Query() {}

    if (false) {}
    /**
     * Utility for checking the matching state of \@media queries.
     */


    var BreakpointObserver =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _mediaMatcher
       * @param {?} _zone
       */
      function BreakpointObserver(_mediaMatcher, _zone) {
        _classCallCheck(this, BreakpointObserver);

        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */

        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */

        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Completes the active subject, signalling to all other observables to complete.
       * @return {?}
       */


      _createClass(BreakpointObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject.next();

          this._destroySubject.complete();
        }
        /**
         * Whether one or more media queries match the current viewport size.
         * @param {?} value One or more media queries to check.
         * @return {?} Whether any of the media queries match.
         */

      }, {
        key: "isMatched",
        value: function isMatched(value) {
          var _this = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          return queries.some(
          /**
          * @param {?} mediaQuery
          * @return {?}
          */
          function (mediaQuery) {
            return _this._registerQuery(mediaQuery).mql.matches;
          });
        }
        /**
         * Gets an observable of results for the given queries that will emit new results for any changes
         * in matching of the given queries.
         * @param {?} value One or more media queries to check.
         * @return {?} A stream of matches for the given queries.
         */

      }, {
        key: "observe",
        value: function observe(value) {
          var _this2 = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          /** @type {?} */

          var observables = queries.map(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            return _this2._registerQuery(query).observable;
          });
          /** @type {?} */

          var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

          stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
          return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} breakpointStates
          * @return {?}
          */
          function (breakpointStates) {
            /** @type {?} */
            var response = {
              matches: false,
              breakpoints: {}
            };
            breakpointStates.forEach(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              response.matches = response.matches || state.matches;
              response.breakpoints[state.query] = state.matches;
            });
            return response;
          }));
        }
        /**
         * Registers a specific query to be listened for.
         * @private
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "_registerQuery",
        value: function _registerQuery(query) {
          var _this3 = this;

          // Only set up a new MediaQueryList if it is not already being listened for.
          if (this._queries.has(query)) {
            return (
              /** @type {?} */
              this._queries.get(query)
            );
          }
          /** @type {?} */


          var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.

          /** @type {?} */


          var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.

            /** @type {?} */
            var handler =
            /**
            * @param {?} e
            * @return {?}
            */
            function handler(e) {
              return _this3._zone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(e);
              });
            };

            mql.addListener(handler);
            return (
              /**
              * @return {?}
              */
              function () {
                mql.removeListener(handler);
              }
            );
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} nextMql
          * @return {?}
          */
          function (nextMql) {
            return {
              query: query,
              matches: nextMql.matches
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject)); // Add the MediaQueryList to the set of queries.

          /** @type {?} */

          var output = {
            observable: queryObservable,
            mql: mql
          };

          this._queries.set(query, output);

          return output;
        }
      }]);

      return BreakpointObserver;
    }();

    BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
      return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };
    /** @nocollapse */


    BreakpointObserver.ctorParameters = function () {
      return [{
        type: MediaMatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function BreakpointObserver_Factory() {
        return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: BreakpointObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MediaMatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Split each query string into separate query strings if two queries are provided as comma
     * separated.
     * @param {?} queries
     * @return {?}
     */


    function splitQueries(queries) {
      return queries.map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.split(',');
      }).reduce(
      /**
      * @param {?} a1
      * @param {?} a2
      * @return {?}
      */
      function (a1, a2) {
        return a1.concat(a2);
      }).map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // PascalCase is being used as Breakpoints is used like an enum.
    // tslint:disable-next-line:variable-name

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */


    var Breakpoints = {
      XSmall: '(max-width: 599.99px)',
      Small: '(min-width: 600px) and (max-width: 959.99px)',
      Medium: '(min-width: 960px) and (max-width: 1279.99px)',
      Large: '(min-width: 1280px) and (max-width: 1919.99px)',
      XLarge: '(min-width: 1920px)',
      Handset: '(max-width: 599.99px) and (orientation: portrait), ' + '(max-width: 959.99px) and (orientation: landscape)',
      Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
      HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
      TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
      WebPortrait: '(min-width: 840px) and (orientation: portrait)',
      HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
      TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=layout.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
    \*********************************************************************/

  /*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PlatformJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Platform", function () {
      return Platform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
      return PlatformModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function () {
      return _getShadowRoot;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
      return _supportsShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
      return getRtlScrollAxisType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
      return getSupportedInputTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
      return normalizePassiveListenerOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
      return supportsPassiveEventListeners;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
      return supportsScrollBehavior;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/platform.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.

    /** @type {?} */


    var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      hasV8BreakIterator = typeof Intl !== 'undefined' &&
      /** @type {?} */
      Intl.v8BreakIterator;
    } catch (_a) {
      hasV8BreakIterator = false;
    }
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */


    var Platform =
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    function Platform(_platformId) {
      _classCallCheck(this, Platform);

      this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention

      /**
       * Whether the Angular application is being rendered in the browser.
       */

      this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
      /**
       * Whether the current browser is Microsoft Edge.
       */

      this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /**
       * Whether the current rendering engine is Microsoft Trident.
       */

      this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

      /**
       * Whether the current rendering engine is Blink.
       */

      this.BLINK = this.isBrowser && !!(
      /** @type {?} */
      window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.

      /**
       * Whether the current rendering engine is WebKit.
       */

      this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /**
       * Whether the current platform is Apple iOS.
       */

      this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.

      /**
       * Whether the current browser is Firefox.
       */

      this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /**
       * Whether the current platform is Android.
       */
      // Trident on mobile adds the android platform to the userAgent to trick detections.

      this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.

      /**
       * Whether the current browser is Safari.
       */

      this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    };

    Platform.ɵfac = function Platform_Factory(t) {
      return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
    };
    /** @nocollapse */


    Platform.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /** @nocollapse */


    Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Platform_Factory() {
        return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
      },
      token: Platform,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/platform-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PlatformModule = function PlatformModule() {
      _classCallCheck(this, PlatformModule);
    };

    PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlatformModule
    });
    PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlatformModule_Factory(t) {
        return new (t || PlatformModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/input-types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Cached result Set of input types support by the current browser.
     * @type {?}
     */


    var supportedInputTypes;
    /**
     * Types of `<input>` that *might* be supported.
     * @type {?}
     */

    var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
    /**
     * @return {?} The input types supported by this browser.
     */

    function getSupportedInputTypes() {
      // Result is cached.
      if (supportedInputTypes) {
        return supportedInputTypes;
      } // We can't check if an input type is not supported until we're on the browser, so say that
      // everything is supported when not on the browser. We don't use `Platform` here since it's
      // just a helper function and can't inject it.


      if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
      }
      /** @type {?} */


      var featureTestInput = document.createElement('input');
      supportedInputTypes = new Set(candidateInputTypes.filter(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
      }));
      return supportedInputTypes;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/passive-listeners.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Cached result of whether the user's browser supports passive event listeners.
     * @type {?}
     */


    var supportsPassiveEvents;
    /**
     * Checks whether the user's browser supports passive event listeners.
     * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     * @return {?}
     */

    function supportsPassiveEventListeners() {
      if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
          window.addEventListener('test',
          /** @type {?} */
          null, Object.defineProperty({}, 'passive', {
            get:
            /**
            * @return {?}
            */
            function get() {
              return supportsPassiveEvents = true;
            }
          }));
        } finally {
          supportsPassiveEvents = supportsPassiveEvents || false;
        }
      }

      return supportsPassiveEvents;
    }
    /**
     * Normalizes an `AddEventListener` object to something that can be passed
     * to `addEventListener` on any browser, no matter whether it supports the
     * `options` parameter.
     * @param {?} options Object to be normalized.
     * @return {?}
     */


    function normalizePassiveListenerOptions(options) {
      return supportsPassiveEventListeners() ? options : !!options.capture;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/scrolling.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @enum {number} */


    var RtlScrollAxisType = {
      /**
       * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
       * all the way right.
       */
      NORMAL: 0,

      /**
       * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      NEGATED: 1,

      /**
       * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      INVERTED: 2
    };
    /**
     * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
     * @type {?}
     */

    var rtlScrollAxisType;
    /**
     * Check whether the browser supports scroll behaviors.
     * @return {?}
     */

    function supportsScrollBehavior() {
      return !!(typeof document == 'object' && 'scrollBehavior' in
      /** @type {?} */
      document.documentElement.style);
    }
    /**
     * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
     * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
     * @return {?}
     */


    function getRtlScrollAxisType() {
      // We can't check unless we're on the browser. Just assume 'normal' if we're not.
      if (typeof document !== 'object' || !document) {
        return 0
        /* NORMAL */
        ;
      }

      if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.

        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */

        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */

        var content = document.createElement('div');
        /** @type {?} */

        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0
        /* NORMAL */
        ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.

        if (scrollContainer.scrollLeft === 0) {
          // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
          // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
          // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
          // return 0 when we read it again.
          scrollContainer.scrollLeft = 1;
          rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
          /* NEGATED */
          : 2
          /* INVERTED */
          ;
        }

        /** @type {?} */
        scrollContainer.parentNode.removeChild(scrollContainer);
      }

      return rtlScrollAxisType;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/features/shadow-dom.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var shadowDomIsSupported;
    /**
     * Checks whether the user's browser support Shadow DOM.
     * @return {?}
     */

    function _supportsShadowDom() {
      if (shadowDomIsSupported == null) {
        /** @type {?} */
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (
        /** @type {?} */
        head.createShadowRoot || head.attachShadow));
      }

      return shadowDomIsSupported;
    }
    /**
     * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
     * @param {?} element
     * @return {?}
     */


    function _getShadowRoot(element) {
      if (_supportsShadowDom()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.

        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
          return rootNode;
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/platform/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=platform.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/fesm2015/coercion.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
    \********************************************************/

  /*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty */

  /***/
  function node_modulesAngularCdkFesm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a data-bound value (typically a string) to a boolean. */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceNumberProperty(value) {
      var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * @docs-private
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a value to a CSS pixel value. */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./src/app/components/logo/logo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/logo/logo.component.ts ***!
    \***************************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppComponentsLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_logo_size_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @enums/logo-size.enum */
    "./src/app/enums/logo-size.enum.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var LogoComponent = function LogoComponent() {
      _classCallCheck(this, LogoComponent);

      this.size = _enums_logo_size_enum__WEBPACK_IMPORTED_MODULE_1__["logoSize"].MEDIUM;
    };

    LogoComponent.ɵfac = function LogoComponent_Factory(t) {
      return new (t || LogoComponent)();
    };

    LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoComponent,
      selectors: [["app-logo"]],
      inputs: {
        size: "size"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "logo-wrapper", 3, "ngClass"], ["src", "./assets/images/common/logo-image.png", "alt", "logo-image", 1, "logo-image"], [1, "slogan"]],
      template: function LogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Monday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngClass", "logo-wrapper_", ctx.size, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.logo-wrapper_small[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  max-width: 25px;\n}\n.logo-wrapper_small[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.logo-wrapper_medium[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  max-width: 45px;\n}\n.logo-wrapper_medium[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.logo-wrapper_large[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.logo-wrapper_large[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.logo-image[_ngcontent-%COMP%] {\n  margin: 20px;\n  -webkit-animation: rotate 10s infinite linear;\n          animation: rotate 10s infinite linear;\n}\n.slogan[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 400;\n  letter-spacing: 1px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9rZXlmcmFtZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9nb1xcbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUM3REE7RUFDRTtJQUNFLFFBQUE7RUNLRjtFREhBO0lBQ0UsV0FBQTtFQ0tGO0FBQ0Y7QURYQTtFQUNFO0lBQ0UsUUFBQTtFQ0tGO0VESEE7SUFDRSxXQUFBO0VDS0Y7QUFDRjtBREZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUNJRjtFREZBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDSUY7QUFDRjtBRGRBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUNJRjtFREZBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDSUY7QUFDRjtBRERBO0VBQ0U7SUFDRSw0QkFBQTtZQUFBLG9CQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNHRjtBQUNGO0FEVEE7RUFDRTtJQUNFLDRCQUFBO1lBQUEsb0JBQUE7RUNHRjtFRERBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0VDRUY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxVQUFBO0VDRUY7RURBQTtJQUNFLFVBQUE7RUNFRjtBQUNGO0FGdkNBLFdBQUE7QUE2Q0EsWUFBQTtBQVVBLGdCQUFBO0FBTUEsVUFBQTtBRzFEQTtFQUNFLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDJCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtBRDBDRjtBQ3ZDSTtFQUNFLGVBQUE7QUR5Q047QUN0Q0k7RUFDRSxlQUFBO0FEd0NOO0FDbkNJO0VBQ0UsZUFBQTtBRHFDTjtBQ2xDSTtFQUNFLGVBQUE7QURvQ047QUMvQkk7RUFDRSxnQkFBQTtBRGlDTjtBQzlCSTtFQUNFLGVBQUE7QURnQ047QUMzQkE7RUFDRSxZQUFBO0VDQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBRjhCRjtBQzNCQTtFQUNFLFdIM0NZO0VHNENaLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FEOEJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb2xvcnMgKi9cclxuJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kYmxhY2stY29sb3I6ICMwMDA7XHJcblxyXG4kZXJyb3I6ICNmZjczNzM7XHJcbiRjb21wbGV0ZTogIzc5ZWQ0OTtcclxuXHJcbiRwbGFjZWhvbGRlcjogI2IwYjBiMDtcclxuJGZvcm0taXRlbS1jb2xvcjogI2IwYjBiMDtcclxuXHJcbiRpbnB1dC10ZXh0OiAjODQ5MmFmO1xyXG4kaW5wdXQtYm9yZGVyOiAjZjZmNmY2O1xyXG4kaW5wdXQtYm9yZGVyLS1ob3ZlcjogI2VlZWJlYjtcclxuXHJcbiRib3JkZXI6ICNkNGQ5ZTM7XHJcbiRib3JkZXItbGlnaHQ6ICNjY2M7XHJcblxyXG4kYmFja2dyb3VuZDogI2Y2ZjdmYTtcclxuXHJcbiR0aGVtZS1jb2xvcjogIzBlMWEzNTtcclxuXHJcbiR0aGVtZS1kYXJrLWNvbG9yOiAjMTEzNTkzO1xyXG4kdGhlbWUtZGFyay1jb2xvci1pdGVtczogIzU1ODRmZjtcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJHRoZW1lLWxpZ2h0LWNvbG9yOiAjNGM1MGM2O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXM6ICM0ZjM5ZDc7XHJcbiR0aGVtZS1saWdodC1jb2xvci1pdGVtcy0taG92ZXI6ICM1NTg0ZmY7XHJcblxyXG4kbmF2LWl0ZW0tY29sb3I6ICMxMjIxNDM7XHJcblxyXG4kZGVjb3ItaXRlbS0taG92ZXI6ICMzYjU2ZGI7XHJcbiRkZWNvci1pdGVtLS1hY3RpdmU6ICM1NTg0ZmY7XHJcblxyXG4kYnRuOiAjNzk5ZWZiO1xyXG4kYnRuLWRlY29yOiAjNGM3YmY2O1xyXG4kYnRuLS1kaXNhYmxlZDogI2NjYztcclxuXHJcbiR0ZXh0LXNoYWRvdzogI2IxYzBlMjtcclxuJHRleHQtY29sb3I6ICM3NjdiYjA7XHJcbiRzdWItaGVhZGxpbmUtY29sb3I6ICM4NDkyYWY7XHJcblxyXG4kaGVhZGxpbmUtY29sb3I6ICMyZjUwYTg7XHJcblxyXG5cclxuLyogc2lkZWJhciAqL1xyXG4kc2lkZWJhci13aWR0aC14czogMTAwJTtcclxuJHNpZGViYXItd2lkdGgtbWQ6IDI2MHB4O1xyXG4kc2lkZWJhci13aWR0aC1sZzogMzIwcHg7XHJcblxyXG4kd3JhcHBlci13aWR0aC14czogMTAwJTtcclxuJHdyYXBwZXItd2lkdGgtbWQ6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuJHdyYXBwZXItd2lkdGgtbGc6IGNhbGMoMTAwJSAtIDMyMHB4KTtcclxuXHJcblxyXG4vKiB0cmFuc2l0aW9ucyAqL1xyXG4kdHJhbnNpdGlvbjogLjRzO1xyXG4kc2hvcnQtdHJhbnNpdGlvbjogLjNzO1xyXG4kbG9uZy10cmFuc2l0aW9uOiAuNnM7XHJcblxyXG5cclxuLyogZm9udHMgKi9cclxuJGJhc2UtZm9udHM6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ09wZW4gU2FucycsICdzYW5zLXNlcmlmJywgJ0FyaWFsJztcclxuXHJcblxyXG4iLCJAa2V5ZnJhbWVzIHdpZHRoIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnViYmxlIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iLCIvKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuQGtleWZyYW1lcyB3aWR0aCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBidWJibGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIGNvbG9ycyAqL1xuLyogc2lkZWJhciAqL1xuLyogdHJhbnNpdGlvbnMgKi9cbi8qIGZvbnRzICovXG4ubG9nby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dvLXdyYXBwZXJfc21hbGwgLmxvZ28taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDI1cHg7XG59XG4ubG9nby13cmFwcGVyX3NtYWxsIC5zbG9nYW4ge1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubG9nby13cmFwcGVyX21lZGl1bSAubG9nby1pbWFnZSB7XG4gIG1heC13aWR0aDogNDVweDtcbn1cbi5sb2dvLXdyYXBwZXJfbWVkaXVtIC5zbG9nYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubG9nby13cmFwcGVyX2xhcmdlIC5sb2dvLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbi5sb2dvLXdyYXBwZXJfbGFyZ2UgLnNsb2dhbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICBtYXJnaW46IDIwcHg7XG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5zbG9nYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luOiAwO1xufSIsIkBpbXBvcnQgJ21peGlucyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4ubG9nby13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICZfc21hbGwge1xyXG4gICAgLmxvZ28taW1hZ2Uge1xyXG4gICAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsb2dhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfbWVkaXVtIHtcclxuICAgIC5sb2dvLWltYWdlIHtcclxuICAgICAgbWF4LXdpZHRoOiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbG9nYW4ge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX2xhcmdlIHtcclxuICAgIC5sb2dvLWltYWdlIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xvZ2FuIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvZ28taW1hZ2Uge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBAaW5jbHVkZSByb3RhdGUtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4uc2xvZ2FuIHtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAna2V5ZnJhbWVzJztcclxuXHJcbkBtaXhpbiB0YXNrLWRlY29yYXRpb24oJHNpemUpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6ICRzaXplICsgcHg7XHJcbiAgaGVpZ2h0OiAkc2l6ZSArIHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmstY29sb3ItaXRlbXM7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93IHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxN3B4IC0xMnB4IHJnYmEoMzcsNTcsMTEwLDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDE3cHggLTEycHggcmdiYSgzNyw1NywxMTAsMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE3cHggLTEycHggcmdiYSgzNyw1NywxMTAsMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBkZWNvcmF0aW9uLWVsZW1lbnQge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1peGluIHdpZHRoLWFuaW1hdGlvbiB7XHJcbiAgYW5pbWF0aW9uOiB3aWR0aCAkc2hvcnQtdHJhbnNpdGlvbiBsaW5lYXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidWJibGUtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IGJ1YmJsZSAkdHJhbnNpdGlvbiBsaW5lYXI7XHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxMHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5AbWl4aW4gZmFkZS1pbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gJGxvbmctdHJhbnNpdGlvbiBsaW5lYXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logo',
          templateUrl: './logo.component.html',
          styleUrls: ['./logo.component.scss']
        }]
      }], null, {
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/logo/logo.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/logo/logo.module.ts ***!
    \************************************************/

  /*! exports provided: LogoModule */

  /***/
  function srcAppComponentsLogoLogoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoModule", function () {
      return LogoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");

    var LogoModule = function LogoModule() {
      _classCallCheck(this, LogoModule);
    };

    LogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LogoModule
    });
    LogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LogoModule_Factory(t) {
        return new (t || LogoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogoModule, {
        declarations: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/enums/logo-size.enum.ts":
  /*!*****************************************!*\
    !*** ./src/app/enums/logo-size.enum.ts ***!
    \*****************************************/

  /*! exports provided: logoSize */

  /***/
  function srcAppEnumsLogoSizeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logoSize", function () {
      return logoSize;
    });

    var logoSize;

    (function (logoSize) {
      logoSize["SMALL"] = "small";
      logoSize["MEDIUM"] = "medium";
      logoSize["LARGE"] = "large";
    })(logoSize || (logoSize = {}));
    /***/

  }
}]);
//# sourceMappingURL=default~containers-pages-private-portal-portal-module~containers-pages-public-auth-auth-module-es5.js.map