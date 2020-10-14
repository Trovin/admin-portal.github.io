function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-pages-private-portal-portal-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
    \**********************************************************************/

  /*! exports provided: MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, _MatMenu, _MatMenuBase, _MatMenuDirectivesModule, fadeInItems, matMenuAnimations, transformMenu, ɵangular_material_src_material_menu_menu_a, ɵangular_material_src_material_menu_menu_b, ɵangular_material_src_material_menu_menu_c */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015MenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
      return MAT_MENU_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
      return MAT_MENU_PANEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
      return MAT_MENU_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
      return MatMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
      return MatMenuContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
      return MatMenuItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
      return MatMenuModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
      return MatMenuTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenu", function () {
      return _MatMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
      return _MatMenuBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
      return _MatMenuDirectivesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
      return fadeInItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
      return matMenuAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
      return transformMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_a", function () {
      return MAT_MENU_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_b", function () {
      return MAT_MENU_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_c", function () {
      return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the mat-menu component.
     * Animation duration and timing values are based on:
     * https://material.io/guidelines/components/menus.html#menus-usage
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["mat-menu-item", ""];
    var _c1 = ["*"];

    function _MatMenu_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function _MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r33._handleKeydown($event);
        })("click", function _MatMenu_ng_template_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r35.closed.emit("click");
        })("@transformMenu.start", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r36._onAnimationStart($event);
        })("@transformMenu.done", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r37._onAnimationDone($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r32.panelId)("ngClass", ctx_r32._classList)("@transformMenu", ctx_r32._panelAnimationState);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r32.ariaLabel || null)("aria-labelledby", ctx_r32.ariaLabelledby || null)("aria-describedby", ctx_r32.ariaDescribedby || null);
      }
    }

    var matMenuAnimations = {
      /**
       * This animation controls the menu panel's entry and exit from the page.
       *
       * When the menu panel is added to the DOM, it scales in and fades in its border.
       *
       * When the menu panel is removed from the DOM, it simply fades out after a brief
       * delay to display the ripple.
       */
      transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformMenu', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0,
        transform: 'scale(0.8)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('.mat-menu-content, .mat-mdc-menu-content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        transform: 'scale(1)'
      }))])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      })))]),

      /**
       * This animation fades in the background color and content of the menu panel
       * after its containing element is scaled in.
       */
      fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
      // now. Remove next time we do breaking changes.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var fadeInItems = matMenuAnimations.fadeInItems;
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var transformMenu = matMenuAnimations.transformMenu;
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Menu content that will be rendered lazily once the menu is opened.
     */

    var MatMenuContent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _template
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _injector
       * @param {?} _viewContainerRef
       * @param {?} _document
       * @param {?=} _changeDetectorRef
       */
      function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        _classCallCheck(this, MatMenuContent);

        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when the menu content has been attached.
         */

        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * Attaches the content with a particular context.
       * \@docs-private
       * @param {?=} context
       * @return {?}
       */


      _createClass(MatMenuContent, [{
        key: "attach",
        value: function attach() {
          var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this._template, this._viewContainerRef);
          }

          this.detach();

          if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
          }
          /** @type {?} */


          var element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
          // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
          // risk it staying attached to a pane that's no longer in the DOM.

          /** @type {?} */
          element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
          // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
          // by Angular. This causes the `@ContentChildren` for menu items within the menu to
          // not be updated by Angular. By explicitly marking for check here, we tell Angular that
          // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
          // @breaking-change 9.0.0 Make change detector ref required

          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }

          this._portal.attach(this._outlet, context);

          this._attached.next();
        }
        /**
         * Detaches the content.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this._portal.isAttached) {
            this._portal.detach();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._outlet) {
            this._outlet.dispose();
          }
        }
      }]);

      return MatMenuContent;
    }();

    MatMenuContent.ɵfac = function MatMenuContent_Factory(t) {
      return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    MatMenuContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatMenuContent,
      selectors: [["ng-template", "matMenuContent", ""]]
    });
    /** @nocollapse */

    MatMenuContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'ng-template[matMenuContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-errors.ts
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
     * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuMissingError() {
      throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
    }
    /**
     * Throws an exception for the case when menu's x-position value isn't valid.
     * In other words, it doesn't match 'before' or 'after'.
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuInvalidPositionX() {
      throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
    }
    /**
     * Throws an exception for the case when menu's y-position value isn't valid.
     * In other words, it doesn't match 'above' or 'below'.
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuInvalidPositionY() {
      throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-panel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide the parent menu to menu-specific components.
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');
    /**
     * Interface for a custom menu panel that can be used with `matMenuTriggerFor`.
     * \@docs-private
     * @record
     * @template T
     */

    function MatMenuPanel() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-item.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatMenuItem.

    /**
     * \@docs-private
     */


    var MatMenuItemBase = function MatMenuItemBase() {
      _classCallCheck(this, MatMenuItemBase);
    };
    /** @type {?} */


    var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(MatMenuItemBase));
    /**
     * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
     */


    var MatMenuItem =
    /*#__PURE__*/
    function (_MatMenuItemMixinBase2) {
      _inherits(MatMenuItem, _MatMenuItemMixinBase2);

      var _super = _createSuper(MatMenuItem);

      /**
       * @param {?} _elementRef
       * @param {?=} document
       * @param {?=} _focusMonitor
       * @param {?=} _parentMenu
       */
      function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this;

        _classCallCheck(this, MatMenuItem);

        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        _this = _super.call(this);
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._parentMenu = _parentMenu;
        /**
         * ARIA role for the menu item.
         */

        _this.role = 'menuitem';
        /**
         * Stream that emits when the menu item is hovered.
         */

        _this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Stream that emits when the menu item is focused.
         */

        _this._focused = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Whether the menu item is highlighted.
         */

        _this._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */

        _this._triggersSubmenu = false;

        if (_focusMonitor) {
          // Start monitoring the element so it gets the appropriate focused classes. We want
          // to show the focus style for menu items only when the focus was not caused by a
          // mouse or touch interaction.
          _focusMonitor.monitor(_this._elementRef, false);
        }

        if (_parentMenu && _parentMenu.addItem) {
          _parentMenu.addItem(_assertThisInitialized(_this));
        }

        _this._document = document;
        return _this;
      }
      /**
       * Focuses the menu item.
       * @param {?=} origin
       * @param {?=} options
       * @return {?}
       */


      _createClass(MatMenuItem, [{
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
          } else {
            this._getHostElement().focus(options);
          }

          this._focused.next(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }

          if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
          }

          this._hovered.complete();

          this._focused.complete();
        }
        /**
         * Used to set the `tabindex`.
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex() {
          return this.disabled ? '-1' : '0';
        }
        /**
         * Returns the host DOM element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * Prevents the default element actions if it is disabled.
         * @param {?} event
         * @return {?}
         */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

      }, {
        key: "_checkDisabled",
        value: function _checkDisabled(event) {
          if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
        /**
         * Emits to the hover stream.
         * @return {?}
         */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

      }, {
        key: "_handleMouseEnter",
        value: function _handleMouseEnter() {
          this._hovered.next(this);
        }
        /**
         * Gets the label to be used when determining whether the option should be focused.
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var textNodeType = this._document ? this._document.TEXT_NODE : 3;
          /** @type {?} */

          var output = '';

          if (element.childNodes) {
            /** @type {?} */
            var length = element.childNodes.length; // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.

            for (var i = 0; i < length; i++) {
              if (element.childNodes[i].nodeType === textNodeType) {
                output += element.childNodes[i].textContent;
              }
            }
          }

          return output.trim();
        }
      }]);

      return MatMenuItem;
    }(_MatMenuItemMixinBase);

    MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
      return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8));
    };

    MatMenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatMenuItem,
      selectors: [["", "mat-menu-item", ""]],
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 10,
      hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
            return ctx._checkDisabled($event);
          })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
            return ctx._handleMouseEnter();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        role: "role"
      },
      exportAs: ["matMenuItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 2,
      vars: 2,
      consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]],
      template: function MatMenuItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatMenuItem.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_PANEL]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    MatMenuItem.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _checkDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }],
      _handleMouseEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mouseenter']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: '[mat-menu-item]',
          exportAs: 'matMenuItem',
          inputs: ['disabled', 'disableRipple'],
          host: {
            '[attr.role]': 'role',
            '[class.mat-menu-item]': 'true',
            '[class.mat-menu-item-highlighted]': '_highlighted',
            '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
            '[attr.tabindex]': '_getTabIndex()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.disabled]': 'disabled || null',
            'class': 'mat-focus-indicator'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_PANEL]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _checkDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }],
        _handleMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseenter']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default `mat-menu` options that can be overridden.
     * @record
     */


    function MatMenuDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-menu`.
     * @type {?}
     */


    var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
      providedIn: 'root',
      factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
      return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop'
      };
    }
    /**
     * Start elevation for the menu panel.
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_BASE_ELEVATION = 4;
    /** @type {?} */

    var menuPanelUid = 0;
    /**
     * Base class with all of the `MatMenu` functionality.
     */
    // tslint:disable-next-line:class-name

    var _MatMenuBase =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} _defaultOptions
       */
      function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
        _classCallCheck(this, _MatMenuBase);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Only the direct descendant menu items.
         */

        this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        /**
         * Subscription to tab events on the menu panel
         */

        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */

        this._classList = {};
        /**
         * Current state of the panel animation.
         */

        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */

        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Class to be added to the backdrop element.
         */

        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 8.0.0
         */

        this.close = this.closed;
        this.panelId = "mat-menu-panel-".concat(menuPanelUid++);
      }
      /**
       * Position of the menu in the X axis.
       * @return {?}
       */


      _createClass(_MatMenuBase, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.setPositionClasses();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          this._updateDirectDescendants();

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._directDescendantItems).withWrap().withTypeAhead();
          this._tabSubscription = this._keyManager.tabOut.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this2.closed.emit('tab');
          }); // If a user manually (programatically) focuses a menu item, we need to reflect that focus
          // change back to the key manager. Note that we don't need to unsubscribe here because _focused
          // is internal and we know that it gets completed on destroy.

          this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._focused;
            })));
          })).subscribe(
          /**
          * @param {?} focusedItem
          * @return {?}
          */
          function (focusedItem) {
            return _this2._keyManager.updateActiveItem(focusedItem);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._directDescendantItems.destroy();

          this._tabSubscription.unsubscribe();

          this.closed.complete();
        }
        /**
         * Stream that emits whenever the hovered menu item changes.
         * @return {?}
         */

      }, {
        key: "_hovered",
        value: function _hovered() {
          // Coerce the `changes` property because Angular types it as `Observable<any>`

          /** @type {?} */
          var itemChanges =
          /** @type {?} */
          this._directDescendantItems.changes;
          return (
            /** @type {?} */
            itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(
            /**
            * @param {?} items
            * @return {?}
            */
            function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item._hovered;
              })));
            }))
          );
        }
        /*
           * Registers a menu item with the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        /**
         * @param {?} _item
         * @return {?}
         */

      }, {
        key: "addItem",
        value: function addItem(_item) {}
        /**
         * Removes an item from the menu.
         * \@docs-private
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 9.0.0
         * @param {?} _item
         * @return {?}
         */

      }, {
        key: "removeItem",
        value: function removeItem(_item) {}
        /**
         * Handle a keyboard event from the menu, delegating to the appropriate action.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                event.preventDefault();
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"]:
              if (this.parentMenu && this.direction === 'ltr') {
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"]:
              if (this.parentMenu && this.direction === 'rtl') {
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["HOME"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["END"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
              }

              break;

            default:
              if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
                manager.setFocusOrigin('keyboard');
              }

              manager.onKeydown(event);
          }
        }
        /**
         * Focus the first item in the menu.
         * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
         * @return {?}
         */

      }, {
        key: "focusFirstItem",
        value: function focusFirstItem() {
          var _this3 = this;

          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';

          // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
          if (this.lazyContent) {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this3._focusFirstItem(origin);
            });
          } else {
            this._focusFirstItem(origin);
          }
        }
        /**
         * Actual implementation that focuses the first item. Needs to be separated
         * out so we don't repeat the same logic in the public `focusFirstItem` method.
         * @private
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_focusFirstItem",
        value: function _focusFirstItem(origin) {
          /** @type {?} */
          var manager = this._keyManager;
          manager.setFocusOrigin(origin).setFirstItemActive(); // If there's no active item at this point, it means that all the items are disabled.
          // Move focus to the menu panel so keyboard events like Escape still work. Also this will
          // give _some_ feedback to screen readers.

          if (!manager.activeItem && this._directDescendantItems.length) {
            /** @type {?} */
            var element = this._directDescendantItems.first._getHostElement().parentElement; // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
            // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
            // because the panel is inside an `ng-template`. We work around it by starting from one of
            // the items and walking up the DOM.


            while (element) {
              if (element.getAttribute('role') === 'menu') {
                element.focus();
                break;
              } else {
                element = element.parentElement;
              }
            }
          }
        }
        /**
         * Resets the active item in the menu. This is used when the menu is opened, allowing
         * the user to start from the first option when pressing the down arrow.
         * @return {?}
         */

      }, {
        key: "resetActiveItem",
        value: function resetActiveItem() {
          this._keyManager.setActiveItem(-1);
        }
        /**
         * Sets the menu panel elevation.
         * @param {?} depth Number of parent menus that come before the menu.
         * @return {?}
         */

      }, {
        key: "setElevation",
        value: function setElevation(depth) {
          // The elevation starts at the base and increases by one for each level.
          // Capped at 24 because that's the maximum elevation defined in the Material design spec.

          /** @type {?} */
          var elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
          /** @type {?} */

          var newElevation = "mat-elevation-z".concat(elevation);
          /** @type {?} */

          var customElevation = Object.keys(this._classList).find(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return c.startsWith('mat-elevation-z');
          });

          if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
              this._classList[this._previousElevation] = false;
            }

            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
          }
        }
        /**
         * Adds classes to the menu panel based on its position. Can be used by
         * consumers to add specific styling based on the position.
         * \@docs-private
         * @param {?=} posX Position of the menu along the x axis.
         * @param {?=} posY Position of the menu along the y axis.
         * @return {?}
         */

      }, {
        key: "setPositionClasses",
        value: function setPositionClasses() {
          var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.xPosition;
          var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPosition;

          /** @type {?} */
          var classes = this._classList;
          classes['mat-menu-before'] = posX === 'before';
          classes['mat-menu-after'] = posX === 'after';
          classes['mat-menu-above'] = posY === 'above';
          classes['mat-menu-below'] = posY === 'below';
        }
        /**
         * Starts the enter animation.
         * @return {?}
         */

      }, {
        key: "_startAnimation",
        value: function _startAnimation() {
          // @breaking-change 8.0.0 Combine with _resetAnimation.
          this._panelAnimationState = 'enter';
        }
        /**
         * Resets the panel animation to its initial state.
         * @return {?}
         */

      }, {
        key: "_resetAnimation",
        value: function _resetAnimation() {
          // @breaking-change 8.0.0 Combine with _startAnimation.
          this._panelAnimationState = 'void';
        }
        /**
         * Callback that is invoked when the panel animation completes.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          this._animationDone.next(event);

          this._isAnimating = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
          // because we move focus to the first item while it's still being animated, which can throw
          // the browser off when it determines the scroll position. Alternatively we can move focus
          // when the animation is done, however moving focus asynchronously will interrupt screen
          // readers which are in the process of reading out the menu already. We take the `element`
          // from the `event` since we can't use a `ViewChild` to access the pane.

          if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
          }
        }
        /**
         * Sets up a stream that will keep track of any newly-added menu items and will update the list
         * of direct descendants. We collect the descendants this way, because `_allItems` can include
         * items that are part of child menus, and using a custom way of registering items is unreliable
         * when it comes to maintaining the item order.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateDirectDescendants",
        value: function _updateDirectDescendants() {
          var _this4 = this;

          this._allItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._allItems)).subscribe(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            _this4._directDescendantItems.reset(items.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._parentMenu === _this4;
            }));

            _this4._directDescendantItems.notifyOnChanges();
          });
        }
      }, {
        key: "xPosition",
        get: function get() {
          return this._xPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== 'before' && value !== 'after') {
            throwMatMenuInvalidPositionX();
          }

          this._xPosition = value;
          this.setPositionClasses();
        }
        /**
         * Position of the menu in the Y axis.
         * @return {?}
         */

      }, {
        key: "yPosition",
        get: function get() {
          return this._yPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== 'above' && value !== 'below') {
            throwMatMenuInvalidPositionY();
          }

          this._yPosition = value;
          this.setPositionClasses();
        }
        /**
         * Whether the menu should overlap its trigger.
         * @return {?}
         */

      }, {
        key: "overlapTrigger",
        get: function get() {
          return this._overlapTrigger;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the menu has a backdrop.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param {?} classes list of class names
         * @return {?}
         */

      }, {
        key: "panelClass",
        set: function set(classes) {
          var _this5 = this;

          /** @type {?} */
          var previousPanelClass = this._previousPanelClass;

          if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(' ').forEach(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              _this5._classList[className] = false;
            });
          }

          this._previousPanelClass = classes;

          if (classes && classes.length) {
            classes.split(' ').forEach(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              _this5._classList[className] = true;
            });
            this._elementRef.nativeElement.className = '';
          }
        }
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "classList",
        get: function get() {
          return this.panelClass;
        }
        /**
         * @param {?} classes
         * @return {?}
         */
        ,
        set: function set(classes) {
          this.panelClass = classes;
        }
      }]);

      return _MatMenuBase;
    }();

    _MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) {
      return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
    };

    _MatMenuBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: _MatMenuBase,
      contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuContent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
        }
      },
      viewQuery: function _MatMenuBase_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
        }
      },
      inputs: {
        backdropClass: "backdropClass",
        xPosition: "xPosition",
        yPosition: "yPosition",
        overlapTrigger: "overlapTrigger",
        hasBackdrop: "hasBackdrop",
        panelClass: ["class", "panelClass"],
        classList: "classList",
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
      },
      outputs: {
        closed: "closed",
        close: "close"
      }
    });
    /** @nocollapse */

    _MatMenuBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_DEFAULT_OPTIONS]
        }]
      }];
    };

    _MatMenuBase.propDecorators = {
      _allItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatMenuItem, {
          descendants: true
        }]
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-labelledby']
      }],
      ariaDescribedby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-describedby']
      }],
      xPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      yPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      templateRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatMenuItem, {
          descendants: false
        }]
      }],
      lazyContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatMenuContent]
      }],
      overlapTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['class']
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      close: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        overlapTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['class']
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _allItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: true
          }]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-describedby']
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: false
          }]
        }],
        lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatMenuContent]
        }]
      });
    })();

    if (false) {}
    /**
     * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
     */


    var MatMenu =
    /*#__PURE__*/
    function (_MatMenuBase2) {
      _inherits(MatMenu, _MatMenuBase2);

      var _super2 = _createSuper(MatMenu);

      function MatMenu() {
        _classCallCheck(this, MatMenu);

        return _super2.apply(this, arguments);
      }

      return MatMenu;
    }(_MatMenuBase);

    MatMenu.ɵfac = function MatMenu_Factory(t) {
      return ɵMatMenu_BaseFactory(t || MatMenu);
    };

    MatMenu.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatMenu,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatMenu_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatMenu);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
      }], null, null);
    })(); // Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
    // extend `MatMenu`, however keeping a reference to it will cause the inlined template and styles
    // to be retained as well. The MDC menu also has to provide itself as a `MatMenu` in order for
    // queries and DI to work correctly, while still not referencing the actual menu class.
    // Class responsibility is split up as follows:
    // * _MatMenuBase - provides all the functionality without any of the Angular metadata.
    // * MatMenu - keeps the same name symbol name as the current menu and
    // is used as a provider for DI and query purposes.
    // * _MatMenu - the actual menu component implementation with the Angular metadata that should
    // be tree shaken away for MDC.

    /**
     * \@docs-public MatMenu
     */
    // tslint:disable-next-line:class-name


    var _MatMenu =
    /*#__PURE__*/
    function (_MatMenu2) {
      _inherits(_MatMenu, _MatMenu2);

      var _super3 = _createSuper(_MatMenu);

      /**
       * @param {?} elementRef
       * @param {?} ngZone
       * @param {?} defaultOptions
       */
      function _MatMenu(elementRef, ngZone, defaultOptions) {
        _classCallCheck(this, _MatMenu);

        return _super3.call(this, elementRef, ngZone, defaultOptions);
      }

      return _MatMenu;
    }(MatMenu);

    _MatMenu.ɵfac = function _MatMenu_Factory(t) {
      return new (t || _MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
    };

    _MatMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: _MatMenu,
      selectors: [["mat-menu"]],
      exportAs: ["matMenu"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }, {
        provide: MatMenu,
        useExisting: _MatMenu
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
      template: function _MatMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, _MatMenu_ng_template_0_Template, 3, 6, "ng-template");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
      styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    _MatMenu.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_DEFAULT_OPTIONS]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-menu',
          template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          exportAs: 'matMenu',
          animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
          providers: [{
            provide: MAT_MENU_PANEL,
            useExisting: MatMenu
          }, {
            provide: MatMenu,
            useExisting: _MatMenu
          }],
          styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-trigger.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that determines the scroll handling while the menu is open.
     * @type {?}
     */


    var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_MENU_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
      useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Default top padding of the menu panel.
     * @type {?}
     */

    var MENU_PANEL_TOP_PADDING = 8;
    /**
     * Options for binding a passive event listener.
     * @type {?}
     */

    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({
      passive: true
    }); // TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors

    /**
     * Directive applied to an element that should trigger a `mat-menu`.
     */

    var MatMenuTrigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _element
       * @param {?} _viewContainerRef
       * @param {?} scrollStrategy
       * @param {?} _parentMenu
       * @param {?} _menuItemInstance
       * @param {?} _dir
       * @param {?=} _focusMonitor
       */
      function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        var _this6 = this;

        _classCallCheck(this, MatMenuTrigger);

        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */

        this._handleTouchStart =
        /**
        * @return {?}
        */
        function () {
          return _this6._openedBy = 'touch';
        }; // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard


        this._openedBy = null;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */

        this.restoreFocus = true;
        /**
         * Event emitted when the associated menu is opened.
         */

        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */

        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onMenuClose = this.menuClosed;

        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

        if (_menuItemInstance) {
          _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }

        this._scrollStrategy = scrollStrategy;
      }
      /**
       * @deprecated
       * \@breaking-change 8.0.0
       * @return {?}
       */


      _createClass(MatMenuTrigger, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._checkMenu();

          this._handleHover();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._overlayRef = null;
          }

          this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

          this._menuCloseSubscription.unsubscribe();

          this._closingActionsSubscription.unsubscribe();

          this._hoverSubscription.unsubscribe();
        }
        /**
         * Whether the menu is open.
         * @return {?}
         */

      }, {
        key: "triggersSubmenu",

        /**
         * Whether the menu triggers a sub-menu or a top-level one.
         * @return {?}
         */
        value: function triggersSubmenu() {
          return !!(this._menuItemInstance && this._parentMenu);
        }
        /**
         * Toggles the menu between the open and closed states.
         * @return {?}
         */

      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          return this._menuOpen ? this.closeMenu() : this.openMenu();
        }
        /**
         * Opens the menu.
         * @return {?}
         */

      }, {
        key: "openMenu",
        value: function openMenu() {
          var _this7 = this;

          if (this._menuOpen) {
            return;
          }

          this._checkMenu();
          /** @type {?} */


          var overlayRef = this._createOverlay();
          /** @type {?} */


          var overlayConfig = overlayRef.getConfig();

          this._setPosition(
          /** @type {?} */
          overlayConfig.positionStrategy);

          overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
          overlayRef.attach(this._getPortal());

          if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
          }

          this._closingActionsSubscription = this._menuClosingActions().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this7.closeMenu();
          });

          this._initMenu();

          if (this.menu instanceof MatMenu) {
            this.menu._startAnimation();
          }
        }
        /**
         * Closes the menu.
         * @return {?}
         */

      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.menu.close.emit();
        }
        /**
         * Focuses the menu trigger.
         * @param {?=} origin Source of the menu trigger's focus.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._element, origin, options);
          } else {
            this._element.nativeElement.focus(options);
          }
        }
        /**
         * Closes the menu and does the necessary cleanup.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyMenu",
        value: function _destroyMenu() {
          var _this8 = this;

          if (!this._overlayRef || !this.menuOpen) {
            return;
          }
          /** @type {?} */


          var menu = this.menu;

          this._closingActionsSubscription.unsubscribe();

          this._overlayRef.detach();

          this._restoreFocus();

          if (menu instanceof MatMenu) {
            menu._resetAnimation();

            if (menu.lazyContent) {
              // Wait for the exit animation to finish before detaching the content.
              menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return event.toState === 'void';
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Interrupt if the content got re-attached.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(menu.lazyContent._attached)).subscribe({
                next:
                /**
                * @return {?}
                */
                function next() {
                  return (
                    /** @type {?} */
                    menu.lazyContent.detach()
                  );
                },
                // No matter whether the content got re-attached, reset the menu.
                complete:
                /**
                * @return {?}
                */
                function complete() {
                  return _this8._setIsMenuOpen(false);
                }
              });
            } else {
              this._setIsMenuOpen(false);
            }
          } else {
            this._setIsMenuOpen(false);

            if (menu.lazyContent) {
              menu.lazyContent.detach();
            }
          }
        }
        /**
         * This method sets the menu state to open and focuses the first item if
         * the menu was opened via the keyboard.
         * @private
         * @return {?}
         */

      }, {
        key: "_initMenu",
        value: function _initMenu() {
          this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
          this.menu.direction = this.dir;

          this._setMenuElevation();

          this._setIsMenuOpen(true);

          this.menu.focusFirstItem(this._openedBy || 'program');
        }
        /**
         * Updates the menu elevation based on the amount of parent menus that it has.
         * @private
         * @return {?}
         */

      }, {
        key: "_setMenuElevation",
        value: function _setMenuElevation() {
          if (this.menu.setElevation) {
            /** @type {?} */
            var depth = 0;
            /** @type {?} */

            var parentMenu = this.menu.parentMenu;

            while (parentMenu) {
              depth++;
              parentMenu = parentMenu.parentMenu;
            }

            this.menu.setElevation(depth);
          }
        }
        /**
         * Restores focus to the element that was focused before the menu was open.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          // We should reset focus if the user is navigating using a keyboard or
          // if we have a top-level trigger which might cause focus to be lost
          // when clicking on the backdrop.
          if (this.restoreFocus) {
            if (!this._openedBy) {
              // Note that the focus style will show up both for `program` and
              // `keyboard` so we don't have to specify which one it is.
              this.focus();
            } else if (!this.triggersSubmenu()) {
              this.focus(this._openedBy);
            }
          }

          this._openedBy = null;
        } // set state rather than toggle to support triggers sharing a menu

        /**
         * @private
         * @param {?} isOpen
         * @return {?}
         */

      }, {
        key: "_setIsMenuOpen",
        value: function _setIsMenuOpen(isOpen) {
          this._menuOpen = isOpen;
          this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

          if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
          }
        }
        /**
         * This method checks that a valid instance of MatMenu has been passed into
         * matMenuTriggerFor. If not, an exception is thrown.
         * @private
         * @return {?}
         */

      }, {
        key: "_checkMenu",
        value: function _checkMenu() {
          if (!this.menu) {
            throwMatMenuMissingError();
          }
        }
        /**
         * This method creates the overlay from the provided menu's template and saves its
         * OverlayRef so that it can be attached to the DOM when openMenu is called.
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          if (!this._overlayRef) {
            /** @type {?} */
            var config = this._getOverlayConfig();

            this._subscribeToPositions(
            /** @type {?} */
            config.positionStrategy);

            this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.

            this._overlayRef.keydownEvents().subscribe();
          }

          return this._overlayRef;
        }
        /**
         * This method builds the configuration object needed to create the overlay, the OverlayState.
         * @private
         * @return {?} OverlayConfig
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
            positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
          });
        }
        /**
         * Listens to changes in the position of the overlay and sets the correct classes
         * on the menu based on the new position. This ensures the animation origin is always
         * correct, even if a fallback position is used for the overlay.
         * @private
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_subscribeToPositions",
        value: function _subscribeToPositions(position) {
          var _this9 = this;

          if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              /** @type {?} */
              var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
              /** @type {?} */

              var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

              /** @type {?} */
              _this9.menu.setPositionClasses(posX, posY);
            });
          }
        }
        /**
         * Sets the appropriate positions on a position strategy
         * so the overlay connects with the trigger correctly.
         * @private
         * @param {?} positionStrategy Strategy whose position to update.
         * @return {?}
         */

      }, {
        key: "_setPosition",
        value: function _setPosition(positionStrategy) {
          var _ref = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
              _ref2 = _slicedToArray(_ref, 2),
              originX = _ref2[0],
              originFallbackX = _ref2[1];

          var _ref3 = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
              _ref4 = _slicedToArray(_ref3, 2),
              overlayY = _ref4[0],
              overlayFallbackY = _ref4[1];

          var originY = overlayY,
              originFallbackY = overlayFallbackY;
          var overlayX = originX,
              overlayFallbackX = originFallbackX;
          /** @type {?} */

          var offsetY = 0;

          if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
          } else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
          }

          positionStrategy.withPositions([{
            originX: originX,
            originY: originY,
            overlayX: overlayX,
            overlayY: overlayY,
            offsetY: offsetY
          }, {
            originX: originFallbackX,
            originY: originY,
            overlayX: overlayFallbackX,
            overlayY: overlayY,
            offsetY: offsetY
          }, {
            originX: originX,
            originY: originFallbackY,
            overlayX: overlayX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }, {
            originX: originFallbackX,
            originY: originFallbackY,
            overlayX: overlayFallbackX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }]);
        }
        /**
         * Returns a stream that emits whenever an action that should close the menu occurs.
         * @private
         * @return {?}
         */

      }, {
        key: "_menuClosingActions",
        value: function _menuClosingActions() {
          var _this10 = this;

          /** @type {?} */
          var backdrop =
          /** @type {?} */
          this._overlayRef.backdropClick();
          /** @type {?} */


          var detachments =
          /** @type {?} */
          this._overlayRef.detachments();
          /** @type {?} */


          var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
          /** @type {?} */

          var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
          /**
          * @param {?} active
          * @return {?}
          */
          function (active) {
            return active !== _this10._menuItemInstance;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this10._menuOpen;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
        }
        /**
         * Handles mouse presses on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleMousedown",
        value: function _handleMousedown(event) {
          if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeMousedownFromScreenReader"])(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : null; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.

            if (this.triggersSubmenu()) {
              event.preventDefault();
            }
          }
        }
        /**
         * Handles key presses on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;

          if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.dir === 'rtl')) {
            this.openMenu();
          }
        }
        /**
         * Handles click events on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(event) {
          if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
          } else {
            this.toggleMenu();
          }
        }
        /**
         * Handles the cases where the user hovers over the trigger.
         * @private
         * @return {?}
         */

      }, {
        key: "_handleHover",
        value: function _handleHover() {
          var _this11 = this;

          // Subscribe to changes in the hovered item in order to toggle the panel.
          if (!this.triggersSubmenu()) {
            return;
          }

          this._hoverSubscription = this._parentMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
          // with different data and triggers), we have to delay it by a tick to ensure that
          // it won't be closed immediately after it is opened.
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
          /**
          * @param {?} active
          * @return {?}
          */
          function (active) {
            return active === _this11._menuItemInstance && !active.disabled;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"])).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this11._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.

            if (_this11.menu instanceof MatMenu && _this11.menu._isAnimating) {
              // We need the `delay(0)` here in order to avoid
              // 'changed after checked' errors in some cases. See #12194.
              _this11.menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this11._parentMenu._hovered())).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this11.openMenu();
              });
            } else {
              _this11.openMenu();
            }
          });
        }
        /**
         * Gets the portal that should be attached to the overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPortal",
        value: function _getPortal() {
          // Note that we can avoid this check by keeping the portal on the menu panel.
          // While it would be cleaner, we'd have to introduce another required method on
          // `MatMenuPanel`, making it harder to consume.
          if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
          }

          return this._portal;
        }
      }, {
        key: "_deprecatedMatMenuTriggerFor",
        get: function get() {
          return this.menu;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this.menu = v;
        }
        /**
         * References the menu instance that the trigger is associated with.
         * @return {?}
         */

      }, {
        key: "menu",
        get: function get() {
          return this._menu;
        }
        /**
         * @param {?} menu
         * @return {?}
         */
        ,
        set: function set(menu) {
          var _this12 = this;

          if (menu === this._menu) {
            return;
          }

          this._menu = menu;

          this._menuCloseSubscription.unsubscribe();

          if (menu) {
            this._menuCloseSubscription = menu.close.asObservable().subscribe(
            /**
            * @param {?} reason
            * @return {?}
            */
            function (reason) {
              _this12._destroyMenu(); // If a click closed the menu, we should close the entire chain of nested menus.


              if ((reason === 'click' || reason === 'tab') && _this12._parentMenu) {
                _this12._parentMenu.closed.emit(reason);
              }
            });
          }
        }
      }, {
        key: "menuOpen",
        get: function get() {
          return this._menuOpen;
        }
        /**
         * The text direction of the containing app.
         * @return {?}
         */

      }, {
        key: "dir",
        get: function get() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
      }]);

      return MatMenuTrigger;
    }();

    MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) {
      return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenu, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]));
    };

    MatMenuTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatMenuTrigger,
      selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
      hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"],
      hostVars: 2,
      hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
            return ctx._handleMousedown($event);
          })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("click", function MatMenuTrigger_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
        }
      },
      inputs: {
        restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"],
        _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
        menu: ["matMenuTriggerFor", "menu"],
        menuData: ["matMenuTriggerData", "menuData"]
      },
      outputs: {
        menuOpened: "menuOpened",
        onMenuOpen: "onMenuOpen",
        menuClosed: "menuClosed",
        onMenuClose: "onMenuClose"
      },
      exportAs: ["matMenuTrigger"]
    });
    /** @nocollapse */

    MatMenuTrigger.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_SCROLL_STRATEGY]
        }]
      }, {
        type: MatMenu,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: MatMenuItem,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }];
    };

    MatMenuTrigger.propDecorators = {
      _deprecatedMatMenuTriggerFor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['mat-menu-trigger-for']
      }],
      menu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerFor']
      }],
      menuData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerData']
      }],
      restoreFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerRestoreFocus']
      }],
      menuOpened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onMenuOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      menuClosed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onMenuClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
          host: {
            'class': 'mat-menu-trigger',
            'aria-haspopup': 'true',
            '[attr.aria-expanded]': 'menuOpen || null',
            '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
            '(mousedown)': '_handleMousedown($event)',
            '(keydown)': '_handleKeydown($event)',
            '(click)': '_handleClick($event)'
          },
          exportAs: 'matMenuTrigger'
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_SCROLL_STRATEGY]
          }]
        }, {
          type: MatMenu,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: MatMenuItem,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }];
      }, {
        restoreFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerRestoreFocus']
        }],
        menuOpened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        menuClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _deprecatedMatMenuTriggerFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['mat-menu-trigger-for']
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerFor']
        }],
        menuData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerData']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
     * to declare the menu-related directives.
     */
    // tslint:disable-next-line:class-name


    var _MatMenuDirectivesModule = function _MatMenuDirectivesModule() {
      _classCallCheck(this, _MatMenuDirectivesModule);
    };

    _MatMenuDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: _MatMenuDirectivesModule
    });
    _MatMenuDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function _MatMenuDirectivesModule_Factory(t) {
        return new (t || _MatMenuDirectivesModule)();
      },
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, {
        declarations: function declarations() {
          return [MatMenuTrigger, MatMenuContent];
        },
        exports: function exports() {
          return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
          declarations: [MatMenuTrigger, MatMenuContent],
          providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();

    var MatMenuModule = function MatMenuModule() {
      _classCallCheck(this, MatMenuModule);
    };

    MatMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatMenuModule
    });
    MatMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatMenuModule_Factory(t) {
        return new (t || MatMenuModule)();
      },
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenuDirectivesModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatMenuModule, {
        declarations: function declarations() {
          return [_MatMenu, MatMenuItem];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule];
        },
        exports: function exports() {
          return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenu, MatMenuItem, _MatMenuDirectivesModule];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenu, MatMenuItem, _MatMenuDirectivesModule],
          declarations: [_MatMenu, MatMenuItem],
          providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-positions.ts
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
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=menu.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
    \******************************************************************************/

  /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SlideToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
      return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
      return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
      return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
      return MatSlideToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
      return MatSlideToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
      return MatSlideToggleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
      return MatSlideToggleRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
      return _MatSlideToggleRequiredValidatorModule;
    });
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default `mat-slide-toggle` options that can be overridden.
     * @record
     */


    var _c0 = ["thumbContainer"];
    var _c1 = ["toggleBar"];
    var _c2 = ["input"];

    var _c3 = function _c3() {
      return {
        enterDuration: 150
      };
    };

    var _c4 = ["*"];

    function MatSlideToggleDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-slide-toggle`.
     * @type {?}
     */


    var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        return {
          disableToggleValue: false
        };
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Increasing integer for generating unique ids for slide-toggle components.

    /** @type {?} */

    var nextUniqueId = 0;
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggle;
      }),
      multi: true
    };
    /**
     * Change event object emitted by a MatSlideToggle.
     */

    var MatSlideToggleChange =
    /**
     * @param {?} source
     * @param {?} checked
     */
    function MatSlideToggleChange(source, checked) {
      _classCallCheck(this, MatSlideToggleChange);

      this.source = source;
      this.checked = checked;
    };

    if (false) {} // Boilerplate for applying mixins to MatSlideToggle.

    /**
     * \@docs-private
     */


    var MatSlideToggleBase =
    /**
     * @param {?} _elementRef
     */
    function MatSlideToggleBase(_elementRef) {
      _classCallCheck(this, MatSlideToggleBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
    /**
     * Represents a slidable "switch" toggle that can be moved between on and off.
     */


    var MatSlideToggle =
    /*#__PURE__*/
    function (_MatSlideToggleMixinB) {
      _inherits(MatSlideToggle, _MatSlideToggleMixinB);

      var _super4 = _createSuper(MatSlideToggle);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} tabIndex
       * @param {?} _ngZone
       * @param {?} defaults
       * @param {?=} _animationMode
       * @param {?=} _dir
       */
      function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex,
      /**
       * @deprecated `_ngZone` and `_dir` parameters to be removed.
       * @breaking-change 10.0.0
       */
      _ngZone, defaults, _animationMode, _dir) {
        var _this13;

        _classCallCheck(this, MatSlideToggle);

        _this13 = _super4.call(this, elementRef);
        _this13._focusMonitor = _focusMonitor;
        _this13._changeDetectorRef = _changeDetectorRef;
        _this13.defaults = defaults;
        _this13._animationMode = _animationMode;

        _this13._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        _this13._onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this13._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
        _this13._required = false;
        _this13._checked = false;
        /**
         * Name value will be applied to the input element if present.
         */

        _this13.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */

        _this13.id = _this13._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
         */

        _this13.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */

        _this13.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */

        _this13.ariaLabelledby = null;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */

        _this13.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */

        _this13.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle is dragged.
         * This event is always emitted when the user drags the slide toggle to make a change greater
         * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
         * the user toggles the slide toggle to change its value.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         */

        _this13.dragChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this13.tabIndex = parseInt(tabIndex) || 0;
        return _this13;
      }
      /**
       * Whether the slide-toggle is required.
       * @return {?}
       */


      _createClass(MatSlideToggle, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this14 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
              _this14._inputElement.nativeElement.focus();
            } else if (!focusOrigin) {
              // When a focused element becomes disabled, the browser *immediately* fires a blur event.
              // Angular does not expect events to be raised during change detection, so any state
              // change (such as a form control's 'ng-touched') will cause a changed-after-checked
              // error. See https://github.com/angular/angular/issues/17793. To work around this,
              // we defer telling the form control it has been touched until the next tick.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this14._onTouched();
              });
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Method being called whenever the underlying input emits a change event.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onChangeEvent",
        value: function _onChangeEvent(event) {
          // We always have to stop propagation on the change event.
          // Otherwise the change event, from the input element, will bubble up and
          // emit its event object to the component's `change` output.
          event.stopPropagation();
          this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
          // `disableToggleValue: true`, the slide toggle's value does not change, and the
          // checked state of the underlying input needs to be changed back.

          if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
          } // Sync the value from the underlying input element with the component instance.


          this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
          // there is no change event, when the checked state changes programmatically.

          this._emitChangeEvent();
        }
        /**
         * Method being called whenever the slide-toggle has been clicked.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInputClick",
        value: function _onInputClick(event) {
          // We have to stop propagation for click events on the visual hidden input element.
          // By default, when a user clicks on a label element, a generated click event will be
          // dispatched on the associated input element. Since we are using a label element as our
          // root container, the click event on the `slide-toggle` will be executed twice.
          // The real click event will bubble up, and the generated click event also tries to bubble up.
          // This will lead to multiple click events.
          // Preventing bubbling for the second event will solve that issue.
          event.stopPropagation();
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.checked = !!value;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the slide-toggle.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
        }
        /**
         * Toggles the checked state of the slide-toggle.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.checked = !this.checked;

          this._onChange(this.checked);
        }
        /**
         * Emits a change event on the `change` output. Also notifies the FormControl about the change.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._onChange(this.checked);

          this.change.emit(new MatSlideToggleChange(this, this.checked));
        }
        /**
         * Method being called whenever the label text changes.
         * @return {?}
         */

      }, {
        key: "_onLabelTextChange",
        value: function _onLabelTextChange() {
          // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
          // slide-toggle component will be only marked for check, but no actual change detection runs
          // automatically. Instead of going back into the zone in order to trigger a change detection
          // which causes *all* components to be checked (if explicitly marked or not using OnPush),
          // we only trigger an explicit change detection for the slide-toggle view and its children.
          this._changeDetectorRef.detectChanges();
        }
      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the slide-toggle element is checked or not.
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */

      }, {
        key: "inputId",
        get: function get() {
          return "".concat(this.id || this._uniqueId, "-input");
        }
      }]);

      return MatSlideToggle;
    }(_MatSlideToggleMixinBase);

    MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
      return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8));
    };

    MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSlideToggle,
      selectors: [["mat-slide-toggle"]],
      viewQuery: function MatSlideToggle_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        }
      },
      hostAttrs: [1, "mat-slide-toggle"],
      hostVars: 12,
      hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0 - 1)("aria-label", null)("aria-labelledby", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color",
        tabIndex: "tabIndex",
        name: "name",
        id: "id",
        labelPosition: "labelPosition",
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        required: "required",
        checked: "checked"
      },
      outputs: {
        change: "change",
        toggleChange: "toggleChange",
        dragChange: "dragChange"
      },
      exportAs: ["matSlideToggle"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c4,
      decls: 16,
      vars: 18,
      consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
      template: function MatSlideToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
            return ctx._onChangeEvent($event);
          })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
            return ctx._onInputClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
            return ctx._onLabelTextChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r42.textContent || !_r42.textContent.trim());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r38)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
      styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSlideToggle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSlideToggle.propDecorators = {
      _thumbEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['thumbContainer']
      }],
      _thumbBarEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['toggleBar']
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-labelledby']
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      toggleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['input']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-slide-toggle',
          exportAs: 'matSlideToggle',
          host: {
            'class': 'mat-slide-toggle',
            '[id]': 'id',
            // Needs to be `-1` so it can still receive programmatic focus.
            '[attr.tabindex]': 'disabled ? null : -1',
            '[attr.aria-label]': 'null',
            '[attr.aria-labelledby]': 'null',
            '[class.mat-checked]': 'checked',
            '[class.mat-disabled]': 'disabled',
            '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
          providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
          inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggleRequiredValidator;
      }),
      multi: true
    };
    /**
     * Validator for Material slide-toggle components with the required attribute in a
     * template-driven form. The default validator for required form controls asserts
     * that the control value is not undefined but that is not appropriate for a slide-toggle
     * where the value is always defined.
     *
     * Required slide-toggle form controls are valid when checked.
     */

    var MatSlideToggleRequiredValidator =
    /*#__PURE__*/
    function (_angular_forms__WEBPA) {
      _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

      var _super5 = _createSuper(MatSlideToggleRequiredValidator);

      function MatSlideToggleRequiredValidator() {
        _classCallCheck(this, MatSlideToggleRequiredValidator);

        return _super5.apply(this, arguments);
      }

      return MatSlideToggleRequiredValidator;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"]);

    MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) {
      return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator);
    };

    MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatSlideToggleRequiredValidator,
      selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
          providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This module is used by both original and MDC-based slide-toggle implementations.
     */
    // tslint:disable-next-line:class-name


    var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
      _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
    };

    _MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: _MatSlideToggleRequiredValidatorModule
    });
    _MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) {
        return new (t || _MatSlideToggleRequiredValidatorModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, {
        declarations: [MatSlideToggleRequiredValidator],
        exports: [MatSlideToggleRequiredValidator]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [MatSlideToggleRequiredValidator],
          declarations: [MatSlideToggleRequiredValidator]
        }]
      }], null, null);
    })();

    var MatSlideToggleModule = function MatSlideToggleModule() {
      _classCallCheck(this, MatSlideToggleModule);
    };

    MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSlideToggleModule
    });
    MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatSlideToggleModule_Factory(t) {
        return new (t || MatSlideToggleModule)();
      },
      imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, {
        declarations: function declarations() {
          return [MatSlideToggle];
        },
        imports: function imports() {
          return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
        },
        exports: function exports() {
          return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
          exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlideToggle]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=slide-toggle.js.map

    /***/

  },

  /***/
  "./src/app/components/toggled-menu/toggled-menu.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/toggled-menu/toggled-menu.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ToggledMenuComponent */

  /***/
  function srcAppComponentsToggledMenuToggledMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggledMenuComponent", function () {
      return ToggledMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "is-active": a0
      };
    };

    var ToggledMenuComponent = function ToggledMenuComponent() {
      _classCallCheck(this, ToggledMenuComponent);

      this.isActive = true;
    };

    ToggledMenuComponent.ɵfac = function ToggledMenuComponent_Factory(t) {
      return new (t || ToggledMenuComponent)();
    };

    ToggledMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToggledMenuComponent,
      selectors: [["app-toggled-menu"]],
      inputs: {
        isActive: "isActive"
      },
      decls: 3,
      vars: 3,
      consts: [["type", "button", 1, "hamburger", "hamburger--spin", 3, "ngClass", "click"], [1, "hamburger-box"], [1, "hamburger-inner"]],
      template: function ToggledMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggledMenuComponent_Template_button_click_0_listener() {
            return ctx.isActive = !ctx.isActive;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isActive));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlZC1tZW51L3RvZ2dsZWQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggledMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toggled-menu',
          templateUrl: './toggled-menu.component.html',
          styleUrls: ['./toggled-menu.component.scss']
        }]
      }], null, {
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/toggled-menu/toggled-menu.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/toggled-menu/toggled-menu.module.ts ***!
    \****************************************************************/

  /*! exports provided: ToggledMenuModule */

  /***/
  function srcAppComponentsToggledMenuToggledMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggledMenuModule", function () {
      return ToggledMenuModule;
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


    var _components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/toggled-menu/toggled-menu.component */
    "./src/app/components/toggled-menu/toggled-menu.component.ts");

    var ToggledMenuModule = function ToggledMenuModule() {
      _classCallCheck(this, ToggledMenuModule);
    };

    ToggledMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToggledMenuModule
    });
    ToggledMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ToggledMenuModule_Factory(t) {
        return new (t || ToggledMenuModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToggledMenuModule, {
        declarations: [_components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_2__["ToggledMenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_2__["ToggledMenuComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggledMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_2__["ToggledMenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_2__["ToggledMenuComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-mat-menu/user-mat-menu.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/user-mat-menu/user-mat-menu.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UserMatMenuComponent */

  /***/
  function srcAppComponentsUserMatMenuUserMatMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMatMenuComponent", function () {
      return UserMatMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["profile"];
    };

    var _c1 = function _c1(a0) {
      return {
        "mat-menu-item_dark": a0
      };
    };

    var UserMatMenuComponent = function UserMatMenuComponent() {
      _classCallCheck(this, UserMatMenuComponent);

      this.userLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    UserMatMenuComponent.ɵfac = function UserMatMenuComponent_Factory(t) {
      return new (t || UserMatMenuComponent)();
    };

    UserMatMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserMatMenuComponent,
      selectors: [["app-user-mat-menu"]],
      inputs: {
        isDarkMode: "isDarkMode"
      },
      outputs: {
        userLogout: "userLogout"
      },
      decls: 12,
      vars: 9,
      consts: [["mat-button", "", 1, "flex-wrapper", 3, "matMenuTriggerFor"], [1, "user-menu"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["aria-hidden", "true", 1, "fa", "fa-caret-down", "user-menu__icon"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-cog"], ["mat-menu-item", "", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"]],
      template: function UserMatMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserMatMenuComponent_Template_span_click_9_listener() {
            return ctx.userLogout.emit(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isDarkMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.isDarkMode));
        }
      },
      directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".flex-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.user-menu[_ngcontent-%COMP%] {\n  border: 0;\n  cursor: pointer;\n  margin-right: 4px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 16px;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: #fff;\n  background-color: #113593;\n}\n.user-menu__icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  background-color: #4c50c6;\n}\n.mat-menu-item_dark[_ngcontent-%COMP%] {\n  background-color: #113593;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLW1hdC1tZW51L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLW1hdC1tZW51L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLW1hdC1tZW51XFx1c2VyLW1hdC1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXItbWF0LW1lbnUvdXNlci1tYXQtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUMzREE7RUFDRSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQUEsMkJBQUE7TUFBQSxzQkFBQTtVQUFBLG1CQUFBO0FDR0Y7QURBQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQUEsMkJBQUE7TUFBQSxzQkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSwrQkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7RUFDQSx3QkRxQ1c7RUNyQ1gsZ0JEcUNXO0VDcENYLFdEbkJZO0VDb0JaLHlCQUFBO0FDR0Y7QURERTtFQUNFLGVBQUE7QUNHSjtBRENBO0VBQ0Usd0JEMkJXO0VDM0JYLGdCRDJCVztFQzFCWCxrQkFBQTtFQUNBLFdEOUJZO0VDK0JaLGlCQUFBO0VBQ0EseUJEUmtCO0FFVXBCO0FEQUU7RUFDRSx5QkRmZTtBRWlCbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItbWF0LW1lbnUvdXNlci1tYXQtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbG9ycyAqL1xyXG4kd2hpdGUtY29sb3I6ICNmZmY7XHJcbiRibGFjay1jb2xvcjogIzAwMDtcclxuXHJcbiRlcnJvcjogI2ZmNzM3MztcclxuJGNvbXBsZXRlOiAjNzllZDQ5O1xyXG5cclxuJHBsYWNlaG9sZGVyOiAjYjBiMGIwO1xyXG4kZm9ybS1pdGVtLWNvbG9yOiAjYjBiMGIwO1xyXG5cclxuJGlucHV0LXRleHQ6ICM4NDkyYWY7XHJcbiRpbnB1dC1ib3JkZXI6ICNmNmY2ZjY7XHJcbiRpbnB1dC1ib3JkZXItLWhvdmVyOiAjZWVlYmViO1xyXG5cclxuJGJvcmRlcjogI2Q0ZDllMztcclxuJGJvcmRlci1saWdodDogI2NjYztcclxuXHJcbiRiYWNrZ3JvdW5kOiAjZjZmN2ZhO1xyXG5cclxuJHRoZW1lLWNvbG9yOiAjMGUxYTM1O1xyXG5cclxuJHRoZW1lLWRhcmstY29sb3I6ICMxMTM1OTM7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zOiAjNTU4NGZmO1xyXG4kdGhlbWUtZGFyay1jb2xvci1pdGVtcy0taG92ZXI6ICM1NTg0ZmY7XHJcblxyXG4kdGhlbWUtbGlnaHQtY29sb3I6ICM0YzUwYzY7XHJcbiR0aGVtZS1saWdodC1jb2xvci1pdGVtczogIzRmMzlkNztcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiRuYXYtaXRlbS1jb2xvcjogIzEyMjE0MztcclxuXHJcbiRkZWNvci1pdGVtLS1ob3ZlcjogIzNiNTZkYjtcclxuJGRlY29yLWl0ZW0tLWFjdGl2ZTogIzU1ODRmZjtcclxuXHJcbiRidG46ICM3OTllZmI7XHJcbiRidG4tZGVjb3I6ICM0YzdiZjY7XHJcbiRidG4tLWRpc2FibGVkOiAjY2NjO1xyXG5cclxuJHRleHQtc2hhZG93OiAjYjFjMGUyO1xyXG4kdGV4dC1jb2xvcjogIzc2N2JiMDtcclxuJHN1Yi1oZWFkbGluZS1jb2xvcjogIzg0OTJhZjtcclxuXHJcbiRoZWFkbGluZS1jb2xvcjogIzJmNTBhODtcclxuXHJcblxyXG4vKiBzaWRlYmFyICovXHJcbiRzaWRlYmFyLXdpZHRoLXhzOiAxMDAlO1xyXG4kc2lkZWJhci13aWR0aC1tZDogMjYwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWxnOiAzMjBweDtcclxuXHJcbiR3cmFwcGVyLXdpZHRoLXhzOiAxMDAlO1xyXG4kd3JhcHBlci13aWR0aC1tZDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4kd3JhcHBlci13aWR0aC1sZzogY2FsYygxMDAlIC0gMzIwcHgpO1xyXG5cclxuXHJcbi8qIHRyYW5zaXRpb25zICovXHJcbiR0cmFuc2l0aW9uOiAuNHM7XHJcbiRzaG9ydC10cmFuc2l0aW9uOiAuM3M7XHJcbiRsb25nLXRyYW5zaXRpb246IC42cztcclxuXHJcblxyXG4vKiBmb250cyAqL1xyXG4kYmFzZS1mb250czogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnT3BlbiBTYW5zJywgJ3NhbnMtc2VyaWYnLCAnQXJpYWwnO1xyXG5cclxuXHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uZmxleC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udXNlci1tZW51IHtcclxuICBib3JkZXI6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1kYXJrLWNvbG9yO1xyXG5cclxuICAmX19pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQtY29sb3I7XHJcblxyXG4gICZfZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbiIsIi8qIGNvbG9ycyAqL1xuLyogc2lkZWJhciAqL1xuLyogdHJhbnNpdGlvbnMgKi9cbi8qIGZvbnRzICovXG4uZmxleC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXNlci1tZW51IHtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzNTkzO1xufVxuLnVzZXItbWVudV9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNTBjNjtcbn1cbi5tYXQtbWVudS1pdGVtX2Rhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzNTkzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMatMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-mat-menu',
          templateUrl: './user-mat-menu.component.html',
          styleUrls: ['./user-mat-menu.component.scss']
        }]
      }], null, {
        userLogout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        isDarkMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-mat-menu/user-mat-menu.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/user-mat-menu/user-mat-menu.module.ts ***!
    \******************************************************************/

  /*! exports provided: UserMatMenuModule */

  /***/
  function srcAppComponentsUserMatMenuUserMatMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMatMenuModule", function () {
      return UserMatMenuModule;
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


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_mat_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-mat-menu.component */
    "./src/app/components/user-mat-menu/user-mat-menu.component.ts");

    var UserMatMenuModule = function UserMatMenuModule() {
      _classCallCheck(this, UserMatMenuModule);
    };

    UserMatMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserMatMenuModule
    });
    UserMatMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserMatMenuModule_Factory(t) {
        return new (t || UserMatMenuModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserMatMenuModule, {
        declarations: [_user_mat_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMatMenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_user_mat_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMatMenuComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMatMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_mat_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMatMenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_user_mat_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMatMenuComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/page-layers/header/header.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/containers/page-layers/header/header.component.ts ***!
    \*******************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppContainersPageLayersHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/auth/auth.service */
    "./src/app/modules/core/auth/auth.service.ts");
    /* harmony import */


    var _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services/app-settings-service/app-settings.service */
    "./src/app/modules/services/app-settings-service/app-settings.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @components/toggled-menu/toggled-menu.component */
    "./src/app/components/toggled-menu/toggled-menu.component.ts");
    /* harmony import */


    var _components_user_mat_menu_user_mat_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/user-mat-menu/user-mat-menu.component */
    "./src/app/components/user-mat-menu/user-mat-menu.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "header_light-theme": a0
      };
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router, authService, settingsService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.authService = authService;
        this.settingsService = settingsService;
        this.toggleSidebarState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.sidebar = true;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var settingsServiceStream = this.settingsService.sidebar.subscribe(function (state) {
            return _this15.sidebar = state;
          });
          this.stream.add(settingsServiceStream);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stream.unsubscribe();
        }
      }, {
        key: "changeSidebarState",
        value: function changeSidebarState(event) {
          this.toggleSidebarState.emit(event.returnValue);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this16 = this;

          var logoutStream = this.authService.logout().subscribe(function () {
            return _this16.router.navigate(['auth/login']);
          });
          this.stream.add(logoutStream);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        darkMode: "darkMode"
      },
      outputs: {
        toggleSidebarState: "toggleSidebarState"
      },
      decls: 3,
      vars: 5,
      consts: [[1, "header", "inner-wrapper", 3, "ngClass"], [3, "isActive", "click"], [3, "isDarkMode", "userLogout"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-toggled-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_app_toggled_menu_click_1_listener($event) {
            return ctx.changeSidebarState($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-user-mat-menu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userLogout", function HeaderComponent_Template_app_user_mat_menu_userLogout_2_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx.darkMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.sidebar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDarkMode", ctx.darkMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_6__["ToggledMenuComponent"], _components_user_mat_menu_user_mat_menu_component__WEBPACK_IMPORTED_MODULE_7__["UserMatMenuComponent"]],
      styles: ["@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  font-size: 34px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: 0 0 17px -12px #25396e;\n  box-shadow: 0 0 17px -12px #25396e;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wYWdlLWxheWVycy9oZWFkZXIvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3BhZ2UtbGF5ZXJzL2hlYWRlci9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfa2V5ZnJhbWVzLnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZS1sYXllcnMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9wYWdlLWxheWVycy9oZWFkZXIvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXHBhZ2UtbGF5ZXJzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9wYWdlLWxheWVycy9oZWFkZXIvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUE2Q0EsWUFBQTtBQVVBLGdCQUFBO0FBTUEsVUFBQTtBQzdEQTtFQUNFO0lBQ0UsUUFBQTtFQ0tGO0VESEE7SUFDRSxXQUFBO0VDS0Y7QUFDRjtBRFhBO0VBQ0U7SUFDRSxRQUFBO0VDS0Y7RURIQTtJQUNFLFdBQUE7RUNLRjtBQUNGO0FERkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtFQ0lGO0VERkE7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNJRjtBQUNGO0FEZEE7RUFDRTtJQUNFLFlBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtFQ0lGO0VERkE7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNJRjtBQUNGO0FEREE7RUFDRTtJQUNFLDRCQUFBO1lBQUEsb0JBQUE7RUNHRjtFRERBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0dGO0FBQ0Y7QURUQTtFQUNFO0lBQ0UsNEJBQUE7WUFBQSxvQkFBQTtFQ0dGO0VEREE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0U7SUFDRSxVQUFBO0VDRUY7RURBQTtJQUNFLFVBQUE7RUNFRjtBQUNGO0FEUkE7RUFDRTtJQUNFLFVBQUE7RUNFRjtFREFBO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QUZ2Q0EsV0FBQTtBQTZDQSxZQUFBO0FBVUEsZ0JBQUE7QUFNQSxVQUFBO0FHMURBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDJCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQ1lBLDBDQUFBO0VBRUEsa0NBQUE7RURaQSx3QkhnRFc7RUdoRFgsZ0JIZ0RXO0VHL0NYLHlCQUFBO0VBQUEsc0NBQUE7TUFBQSxzQkFBQTtVQUFBLDhCQUFBO0FENENGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9wYWdlLWxheWVycy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29sb3JzICovXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGVycm9yOiAjZmY3MzczO1xyXG4kY29tcGxldGU6ICM3OWVkNDk7XHJcblxyXG4kcGxhY2Vob2xkZXI6ICNiMGIwYjA7XHJcbiRmb3JtLWl0ZW0tY29sb3I6ICNiMGIwYjA7XHJcblxyXG4kaW5wdXQtdGV4dDogIzg0OTJhZjtcclxuJGlucHV0LWJvcmRlcjogI2Y2ZjZmNjtcclxuJGlucHV0LWJvcmRlci0taG92ZXI6ICNlZWViZWI7XHJcblxyXG4kYm9yZGVyOiAjZDRkOWUzO1xyXG4kYm9yZGVyLWxpZ2h0OiAjY2NjO1xyXG5cclxuJGJhY2tncm91bmQ6ICNmNmY3ZmE7XHJcblxyXG4kdGhlbWUtY29sb3I6ICMwZTFhMzU7XHJcblxyXG4kdGhlbWUtZGFyay1jb2xvcjogIzExMzU5MztcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXM6ICM1NTg0ZmY7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiR0aGVtZS1saWdodC1jb2xvcjogIzRjNTBjNjtcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zOiAjNGYzOWQ3O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJG5hdi1pdGVtLWNvbG9yOiAjMTIyMTQzO1xyXG5cclxuJGRlY29yLWl0ZW0tLWhvdmVyOiAjM2I1NmRiO1xyXG4kZGVjb3ItaXRlbS0tYWN0aXZlOiAjNTU4NGZmO1xyXG5cclxuJGJ0bjogIzc5OWVmYjtcclxuJGJ0bi1kZWNvcjogIzRjN2JmNjtcclxuJGJ0bi0tZGlzYWJsZWQ6ICNjY2M7XHJcblxyXG4kdGV4dC1zaGFkb3c6ICNiMWMwZTI7XHJcbiR0ZXh0LWNvbG9yOiAjNzY3YmIwO1xyXG4kc3ViLWhlYWRsaW5lLWNvbG9yOiAjODQ5MmFmO1xyXG5cclxuJGhlYWRsaW5lLWNvbG9yOiAjMmY1MGE4O1xyXG5cclxuXHJcbi8qIHNpZGViYXIgKi9cclxuJHNpZGViYXItd2lkdGgteHM6IDEwMCU7XHJcbiRzaWRlYmFyLXdpZHRoLW1kOiAyNjBweDtcclxuJHNpZGViYXItd2lkdGgtbGc6IDMyMHB4O1xyXG5cclxuJHdyYXBwZXItd2lkdGgteHM6IDEwMCU7XHJcbiR3cmFwcGVyLXdpZHRoLW1kOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiR3cmFwcGVyLXdpZHRoLWxnOiBjYWxjKDEwMCUgLSAzMjBweCk7XHJcblxyXG5cclxuLyogdHJhbnNpdGlvbnMgKi9cclxuJHRyYW5zaXRpb246IC40cztcclxuJHNob3J0LXRyYW5zaXRpb246IC4zcztcclxuJGxvbmctdHJhbnNpdGlvbjogLjZzO1xyXG5cclxuXHJcbi8qIGZvbnRzICovXHJcbiRiYXNlLWZvbnRzOiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdPcGVuIFNhbnMnLCAnc2Fucy1zZXJpZicsICdBcmlhbCc7XHJcblxyXG5cclxuIiwiQGtleWZyYW1lcyB3aWR0aCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ1YmJsZSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIiwiLyogY29sb3JzICovXG4vKiBzaWRlYmFyICovXG4vKiB0cmFuc2l0aW9ucyAqL1xuLyogZm9udHMgKi9cbkBrZXlmcmFtZXMgd2lkdGgge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYnViYmxlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTdweCAtMTJweCAjMjUzOTZlO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxN3B4IC0xMnB4ICMyNTM5NmU7XG4gIGJveC1zaGFkb3c6IDAgMCAxN3B4IC0xMnB4ICMyNTM5NmU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iLCJAaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAaW5jbHVkZSBib3gtc2hhZG93O1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdrZXlmcmFtZXMnO1xyXG5cclxuQG1peGluIHRhc2stZGVjb3JhdGlvbigkc2l6ZSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogJHNpemUgKyBweDtcclxuICBoZWlnaHQ6ICRzaXplICsgcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1jb2xvci1pdGVtcztcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3cge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE3cHggLTEycHggcmdiYSgzNyw1NywxMTAsMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTdweCAtMTJweCByZ2JhKDM3LDU3LDExMCwxKTtcclxuICBib3gtc2hhZG93OiAwIDAgMTdweCAtMTJweCByZ2JhKDM3LDU3LDExMCwxKTtcclxufVxyXG5cclxuQG1peGluIGRlY29yYXRpb24tZWxlbWVudCB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWl4aW4gd2lkdGgtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IHdpZHRoICRzaG9ydC10cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG5cclxuQG1peGluIGJ1YmJsZS1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogYnViYmxlICR0cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG5cclxuQG1peGluIHJvdGF0ZS1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBtaXhpbiBmYWRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAkbG9uZy10cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"]
        }];
      }, {
        toggleSidebarState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        darkMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/containers/page-layers/header/header.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/containers/page-layers/header/header.module.ts ***!
    \****************************************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppContainersPageLayersHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
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


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _components_user_mat_menu_user_mat_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @components/user-mat-menu/user-mat-menu.module */
    "./src/app/components/user-mat-menu/user-mat-menu.module.ts");
    /* harmony import */


    var _containers_page_layers_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @containers/page-layers/header/header.component */
    "./src/app/containers/page-layers/header/header.component.ts");
    /* harmony import */


    var _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @components/toggled-menu/toggled-menu.module */
    "./src/app/components/toggled-menu/toggled-menu.module.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeaderModule
    });
    HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeaderModule_Factory(t) {
        return new (t || HeaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_6__["ToggledMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenuDirectivesModule"], _components_user_mat_menu_user_mat_menu_module__WEBPACK_IMPORTED_MODULE_4__["UserMatMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, {
        declarations: [_containers_page_layers_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_6__["ToggledMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenuDirectivesModule"], _components_user_mat_menu_user_mat_menu_module__WEBPACK_IMPORTED_MODULE_4__["UserMatMenuModule"]],
        exports: [_containers_page_layers_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers_page_layers_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_6__["ToggledMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenuDirectivesModule"], _components_user_mat_menu_user_mat_menu_module__WEBPACK_IMPORTED_MODULE_4__["UserMatMenuModule"]],
          exports: [_containers_page_layers_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/page-layers/sidebar/sidebar.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/containers/page-layers/sidebar/sidebar.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppContainersPageLayersSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @enums/breakpoint.enum */
    "./src/app/enums/breakpoint.enum.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _mocks_main_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @mocks/main-menu-items */
    "./src/app/mocks/main-menu-items.ts");
    /* harmony import */


    var _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services/app-settings-service/app-settings.service */
    "./src/app/modules/services/app-settings-service/app-settings.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @components/toggled-menu/toggled-menu.component */
    "./src/app/components/toggled-menu/toggled-menu.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    var _c1 = function _c1(a1) {
      return ["sidebar-item__icon", a1];
    };

    function SidebarComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.closeSidebar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r23.routing));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, item_r23.iconClass));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r23.viewValue, " ");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "left": a0
      };
    };

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(render, settingsService) {
        _classCallCheck(this, SidebarComponent);

        this.render = render;
        this.settingsService = settingsService;
        this.toggleColorMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.menuItems = _mocks_main_menu_items__WEBPACK_IMPORTED_MODULE_3__["MAIN_MENU_ITEMS"];
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          var breakpoint = this.settingsService.screenSizeObserver.subscribe(function (value) {
            return _this17.smallScreen = value === _enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].SM;
          });
          var modeSettingStream = this.settingsService.isDarkMode.subscribe(function (value) {
            return _this17.isDarkMode = value;
          });
          var sidebarSettingStream = this.settingsService.sidebar.subscribe(function (state) {
            _this17.sidebar = state;

            _this17.changeBodyClass();
          });
          this.stream.add(breakpoint);
          this.stream.add(modeSettingStream);
          this.stream.add(sidebarSettingStream);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stream.unsubscribe();
        }
      }, {
        key: "closeSidebar",
        value: function closeSidebar() {
          if (this.smallScreen) {
            this.settingsService.sidebar.next(false);
          }
        }
      }, {
        key: "changeColorMode",
        value: function changeColorMode(event) {
          this.toggleColorMode.emit(event.checked);
        }
      }, {
        key: "setSidebarState",
        value: function setSidebarState(state) {
          this.settingsService.sidebar.next(state.returnValue);
        }
      }, {
        key: "changeBodyClass",
        value: function changeBodyClass() {
          if (this.smallScreen && this.sidebar) {
            this.render.addClass(document.body, 'hidden-content');
          } else {
            this.render.removeClass(document.body, 'hidden-content');
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      inputs: {
        darkMode: "darkMode"
      },
      outputs: {
        toggleColorMode: "toggleColorMode"
      },
      decls: 10,
      vars: 8,
      consts: [[1, "sidebar", 3, "ngStyle", "ngClass"], [1, "sidebar-top"], [1, "sidebar-toggler", 3, "isActive", "click"], [1, "sidebar-nav"], [4, "ngFor", "ngForOf"], [1, "theme-toggler"], [3, "checked", "change"], ["routerLinkActive", "sidebar-item_active", 1, "sidebar-item", 3, "routerLink", "click"], [1, "sidebar-item__inner"], ["aria-hidden", "true", 3, "ngClass"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-toggled-menu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_app_toggled_menu_click_3_listener($event) {
            return ctx.setSidebarState($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_6_Template, 5, 7, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-slide-toggle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_mat_slide_toggle_change_8_listener($event) {
            return ctx.changeColorMode($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.sidebar ? "0" : "-100%"))("ngClass", ctx.darkMode ? "sidebar_dark-theme" : "sidebar_light-theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.sidebar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isDarkMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.darkMode ? "Dark" : "Light", " theme ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _components_toggled_menu_toggled_menu_component__WEBPACK_IMPORTED_MODULE_7__["ToggledMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"]],
      styles: ["@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n\n\n.sidebar-top[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-right: 20px;\n}\n.sidebar-toggler[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.sidebar_light-theme[_ngcontent-%COMP%] {\n  background-color: #4c50c6;\n}\n.sidebar_light-theme[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%]:after {\n  background-color: #4f39d7;\n}\n.sidebar_light-theme[_ngcontent-%COMP%]   .sidebar-item__icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.sidebar_dark-theme[_ngcontent-%COMP%] {\n  background-color: #0e1a35;\n}\n.sidebar-item[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: block;\n  position: relative;\n  font-size: 24px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  text-transform: capitalize;\n}\n.sidebar-item__inner[_ngcontent-%COMP%] {\n  z-index: 2;\n  color: #fff;\n  position: relative;\n}\n.sidebar-item[_ngcontent-%COMP%]:before {\n  width: 10px;\n  height: 0;\n  z-index: 2;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.sidebar-item[_ngcontent-%COMP%]:after {\n  width: 0;\n  height: 100%;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  background-color: #122143;\n}\n.sidebar-item[_ngcontent-%COMP%]:hover:not(.sidebar-item_active) {\n  letter-spacing: 2px;\n}\n.sidebar-item[_ngcontent-%COMP%]:hover:not(.sidebar-item_active):before {\n  height: 100%;\n  background-color: #3b56db;\n}\n.sidebar-item[_ngcontent-%COMP%]:hover:not(.sidebar-item_active):after {\n  width: 100%;\n  -webkit-animation: width 0.3s linear;\n          animation: width 0.3s linear;\n}\n.sidebar-item__icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #5584ff;\n}\n.sidebar-item_active[_ngcontent-%COMP%]:before {\n  height: 100%;\n  background-color: #5584ff;\n}\n.sidebar-item_active[_ngcontent-%COMP%]:after {\n  width: 100%;\n}\n.theme-toggler[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  margin-top: 20px;\n  padding-left: 30px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 320px;\n  min-height: 100%;\n  left: -100%;\n  top: 0;\n  z-index: 2;\n  padding-bottom: 50px;\n  position: absolute;\n  overflow: hidden;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.sidebar-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@media screen and (max-width: 1180px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n@media screen and (max-width: 620px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    overflow-y: auto;\n  }\n\n  .sidebar-toggler[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wYWdlLWxheWVycy9zaWRlYmFyL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9wYWdlLWxheWVycy9zaWRlYmFyL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9rZXlmcmFtZXMuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9wYWdlLWxheWVycy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZS1sYXllcnMvc2lkZWJhci9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFwcFxcY29udGFpbmVyc1xccGFnZS1sYXllcnNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZS1sYXllcnMvc2lkZWJhci9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTZDQSxZQUFBO0FBVUEsZ0JBQUE7QUFNQSxVQUFBO0FDN0RBO0VBQ0U7SUFDRSxRQUFBO0VDS0Y7RURIQTtJQUNFLFdBQUE7RUNLRjtBQUNGO0FEWEE7RUFDRTtJQUNFLFFBQUE7RUNLRjtFREhBO0lBQ0UsV0FBQTtFQ0tGO0FBQ0Y7QURGQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDSUY7RURGQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ0lGO0FBQ0Y7QURkQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDSUY7RURGQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ0lGO0FBQ0Y7QUREQTtFQUNFO0lBQ0UsNEJBQUE7WUFBQSxvQkFBQTtFQ0dGO0VEREE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDR0Y7QUFDRjtBRFRBO0VBQ0U7SUFDRSw0QkFBQTtZQUFBLG9CQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRTtJQUNFLFVBQUE7RUNFRjtFREFBO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURSQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0VDRUY7QUFDRjtBRnZDQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUcxREE7RUFDRSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwyQkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUFBLHNDQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO0FEMENGO0FDdkNBO0VBQ0UsYUFBQTtBRDBDRjtBQ3RDQSxnQkFBQTtBQUNBO0VBQ0UseUJIUWtCO0FFaUNwQjtBQ3ZDRTtFQUNFLHlCSE1zQjtBRW1DMUI7QUN0Q0U7RUFDRSxXSHZCVTtBRStEZDtBQ3BDQSxlQUFBO0FBQ0E7RUFDRSx5QkhYWTtBRWtEZDtBQ25DQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JIaUJXO0VHakJYLGdCSGlCVztFR2hCWCwwQkFBQTtBRHNDRjtBQ3BDRTtFQUNFLFVBQUE7RUFDQSxXSDNDVTtFRzRDVixrQkFBQTtBRHNDSjtBQ25DRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQzNCRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUR5QkUsd0JIR1M7RUdIVCxnQkhHUztBRXNDYjtBQ3RDRTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VDbENGLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFRGdDRSx3QkhKUztFR0lULGdCSEpTO0VHS1QseUJIaENhO0FFNEVqQjtBQ3pDRTtFQUNFLG1CQUFBO0FEMkNKO0FDekNJO0VBQ0UsWUFBQTtFQUNBLHlCSHRDYztBRWlGcEI7QUN4Q0k7RUFDRSxXQUFBO0VDekNKLG9DQUFBO1VBQUEsNEJBQUE7QUZvRkY7QUNyQ0E7RUFDRSxrQkFBQTtFQUNBLGNIM0R1QjtBRW1HekI7QUNuQ0U7RUFDRSxZQUFBO0VBQ0EseUJIeERpQjtBRThGckI7QUNuQ0U7RUFDRSxXQUFBO0FEcUNKO0FDakNBO0VBQ0UsV0hoR1k7RUdpR1osZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURvQ0Y7QUNqQ0E7RUFDRSxZSHhEaUI7RUd5RGpCLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JIeERXO0VHd0RYLGdCSHhEVztBRTRGYjtBQ2xDRTtFQUNFLFdIbEhVO0FFc0pkO0FDaENBO0VBRUU7SUFDRSxZSDNFZTtFRTZHakI7QUFDRjtBQy9CQTtFQUVFO0lBQ0UsV0huRmU7SUdvRmYsYUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFRGdDRjs7RUM3QkE7SUFDRSxjQUFBO0VEZ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3BhZ2UtbGF5ZXJzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbG9ycyAqL1xyXG4kd2hpdGUtY29sb3I6ICNmZmY7XHJcbiRibGFjay1jb2xvcjogIzAwMDtcclxuXHJcbiRlcnJvcjogI2ZmNzM3MztcclxuJGNvbXBsZXRlOiAjNzllZDQ5O1xyXG5cclxuJHBsYWNlaG9sZGVyOiAjYjBiMGIwO1xyXG4kZm9ybS1pdGVtLWNvbG9yOiAjYjBiMGIwO1xyXG5cclxuJGlucHV0LXRleHQ6ICM4NDkyYWY7XHJcbiRpbnB1dC1ib3JkZXI6ICNmNmY2ZjY7XHJcbiRpbnB1dC1ib3JkZXItLWhvdmVyOiAjZWVlYmViO1xyXG5cclxuJGJvcmRlcjogI2Q0ZDllMztcclxuJGJvcmRlci1saWdodDogI2NjYztcclxuXHJcbiRiYWNrZ3JvdW5kOiAjZjZmN2ZhO1xyXG5cclxuJHRoZW1lLWNvbG9yOiAjMGUxYTM1O1xyXG5cclxuJHRoZW1lLWRhcmstY29sb3I6ICMxMTM1OTM7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zOiAjNTU4NGZmO1xyXG4kdGhlbWUtZGFyay1jb2xvci1pdGVtcy0taG92ZXI6ICM1NTg0ZmY7XHJcblxyXG4kdGhlbWUtbGlnaHQtY29sb3I6ICM0YzUwYzY7XHJcbiR0aGVtZS1saWdodC1jb2xvci1pdGVtczogIzRmMzlkNztcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiRuYXYtaXRlbS1jb2xvcjogIzEyMjE0MztcclxuXHJcbiRkZWNvci1pdGVtLS1ob3ZlcjogIzNiNTZkYjtcclxuJGRlY29yLWl0ZW0tLWFjdGl2ZTogIzU1ODRmZjtcclxuXHJcbiRidG46ICM3OTllZmI7XHJcbiRidG4tZGVjb3I6ICM0YzdiZjY7XHJcbiRidG4tLWRpc2FibGVkOiAjY2NjO1xyXG5cclxuJHRleHQtc2hhZG93OiAjYjFjMGUyO1xyXG4kdGV4dC1jb2xvcjogIzc2N2JiMDtcclxuJHN1Yi1oZWFkbGluZS1jb2xvcjogIzg0OTJhZjtcclxuXHJcbiRoZWFkbGluZS1jb2xvcjogIzJmNTBhODtcclxuXHJcblxyXG4vKiBzaWRlYmFyICovXHJcbiRzaWRlYmFyLXdpZHRoLXhzOiAxMDAlO1xyXG4kc2lkZWJhci13aWR0aC1tZDogMjYwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWxnOiAzMjBweDtcclxuXHJcbiR3cmFwcGVyLXdpZHRoLXhzOiAxMDAlO1xyXG4kd3JhcHBlci13aWR0aC1tZDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4kd3JhcHBlci13aWR0aC1sZzogY2FsYygxMDAlIC0gMzIwcHgpO1xyXG5cclxuXHJcbi8qIHRyYW5zaXRpb25zICovXHJcbiR0cmFuc2l0aW9uOiAuNHM7XHJcbiRzaG9ydC10cmFuc2l0aW9uOiAuM3M7XHJcbiRsb25nLXRyYW5zaXRpb246IC42cztcclxuXHJcblxyXG4vKiBmb250cyAqL1xyXG4kYmFzZS1mb250czogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnT3BlbiBTYW5zJywgJ3NhbnMtc2VyaWYnLCAnQXJpYWwnO1xyXG5cclxuXHJcbiIsIkBrZXlmcmFtZXMgd2lkdGgge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidWJibGUge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGNvbG9ycyAqL1xuLyogc2lkZWJhciAqL1xuLyogdHJhbnNpdGlvbnMgKi9cbi8qIGZvbnRzICovXG5Aa2V5ZnJhbWVzIHdpZHRoIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1YmJsZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogY29sb3JzICovXG4vKiBzaWRlYmFyICovXG4vKiB0cmFuc2l0aW9ucyAqL1xuLyogZm9udHMgKi9cbi5zaWRlYmFyLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnNpZGViYXItdG9nZ2xlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIGxpZ2h0IHRoZW1lICovXG4uc2lkZWJhcl9saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzUwYzY7XG59XG4uc2lkZWJhcl9saWdodC10aGVtZSAuc2lkZWJhci1pdGVtOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmMzlkNztcbn1cbi5zaWRlYmFyX2xpZ2h0LXRoZW1lIC5zaWRlYmFyLWl0ZW1fX2ljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogZGFyayB0aGVtZSAqL1xuLnNpZGViYXJfZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTFhMzU7XG59XG5cbi5zaWRlYmFyLWl0ZW0ge1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnNpZGViYXItaXRlbV9faW5uZXIge1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNpZGViYXItaXRlbTpiZWZvcmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uc2lkZWJhci1pdGVtOmFmdGVyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyMTQzO1xufVxuLnNpZGViYXItaXRlbTpob3Zlcjpub3QoLnNpZGViYXItaXRlbV9hY3RpdmUpIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5zaWRlYmFyLWl0ZW06aG92ZXI6bm90KC5zaWRlYmFyLWl0ZW1fYWN0aXZlKTpiZWZvcmUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU2ZGI7XG59XG4uc2lkZWJhci1pdGVtOmhvdmVyOm5vdCguc2lkZWJhci1pdGVtX2FjdGl2ZSk6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiB3aWR0aCAwLjNzIGxpbmVhcjtcbn1cblxuLnNpZGViYXItaXRlbV9faWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICM1NTg0ZmY7XG59XG5cbi5zaWRlYmFyLWl0ZW1fYWN0aXZlOmJlZm9yZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODRmZjtcbn1cbi5zaWRlYmFyLWl0ZW1fYWN0aXZlOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aGVtZS10b2dnbGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbGVmdDogLTEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5zaWRlYmFyLWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4MHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgLnNpZGViYXItdG9nZ2xlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCJAaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnNpZGViYXItdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXRvZ2dsZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBsaWdodCB0aGVtZSAqL1xyXG4uc2lkZWJhcl9saWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0LWNvbG9yO1xyXG5cclxuICAuc2lkZWJhci1pdGVtOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodC1jb2xvci1pdGVtcztcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLWl0ZW1fX2ljb24ge1xyXG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi8qIGRhcmsgdGhlbWUgKi9cclxuLnNpZGViYXJfZGFyay10aGVtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXItaXRlbSB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICAmX19pbm5lciB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIEBpbmNsdWRlIGRlY29yYXRpb24tZWxlbWVudDtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIEBpbmNsdWRlIGRlY29yYXRpb24tZWxlbWVudDtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1pdGVtLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJjpob3Zlcjpub3QoLnNpZGViYXItaXRlbV9hY3RpdmUpIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWNvci1pdGVtLS1ob3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIEBpbmNsdWRlIHdpZHRoLWFuaW1hdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW1fX2ljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjb2xvcjogJHRoZW1lLWRhcmstY29sb3ItaXRlbXM7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW1fYWN0aXZlIHtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRlY29yLWl0ZW0tLWFjdGl2ZTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGhlbWUtdG9nZ2xlciB7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICB3aWR0aDogJHNpZGViYXItd2lkdGgtbGc7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuXHJcbiAgJi1saW5rIHtcclxuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpIHtcclxuXHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoLW1kO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuXHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoLXhzO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci10b2dnbGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdrZXlmcmFtZXMnO1xyXG5cclxuQG1peGluIHRhc2stZGVjb3JhdGlvbigkc2l6ZSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogJHNpemUgKyBweDtcclxuICBoZWlnaHQ6ICRzaXplICsgcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1jb2xvci1pdGVtcztcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3cge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE3cHggLTEycHggcmdiYSgzNyw1NywxMTAsMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTdweCAtMTJweCByZ2JhKDM3LDU3LDExMCwxKTtcclxuICBib3gtc2hhZG93OiAwIDAgMTdweCAtMTJweCByZ2JhKDM3LDU3LDExMCwxKTtcclxufVxyXG5cclxuQG1peGluIGRlY29yYXRpb24tZWxlbWVudCB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWl4aW4gd2lkdGgtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IHdpZHRoICRzaG9ydC10cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG5cclxuQG1peGluIGJ1YmJsZS1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogYnViYmxlICR0cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG5cclxuQG1peGluIHJvdGF0ZS1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBtaXhpbiBmYWRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAkbG9uZy10cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"]
        }];
      }, {
        toggleColorMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        darkMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/containers/page-layers/sidebar/sidebar.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/containers/page-layers/sidebar/sidebar.module.ts ***!
    \******************************************************************/

  /*! exports provided: SidebarModule */

  /***/
  function srcAppContainersPageLayersSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
      return SidebarModule;
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


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_logo_logo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @components/logo/logo.module */
    "./src/app/components/logo/logo.module.ts");
    /* harmony import */


    var _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @components/toggled-menu/toggled-menu.module */
    "./src/app/components/toggled-menu/toggled-menu.module.ts");
    /* harmony import */


    var _containers_page_layers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @containers/page-layers/sidebar/sidebar.component */
    "./src/app/containers/page-layers/sidebar/sidebar.component.ts");

    var SidebarModule = function SidebarModule() {
      _classCallCheck(this, SidebarModule);
    };

    SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SidebarModule
    });
    SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SidebarModule_Factory(t) {
        return new (t || SidebarModule)();
      },
      imports: [[_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_4__["LogoModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_5__["ToggledMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarModule, {
        declarations: [_containers_page_layers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
        imports: [_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_4__["LogoModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_5__["ToggledMenuModule"]],
        exports: [_containers_page_layers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers_page_layers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
          imports: [_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_4__["LogoModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _components_toggled_menu_toggled_menu_module__WEBPACK_IMPORTED_MODULE_5__["ToggledMenuModule"]],
          exports: [_containers_page_layers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/pages/private/portal/portal-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/portal-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: portalRoutes, PortalRoutingModule */

  /***/
  function srcAppContainersPagesPrivatePortalPortalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "portalRoutes", function () {
      return portalRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalRoutingModule", function () {
      return PortalRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _containers_pages_private_portal_portal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @containers/pages/private/portal/portal.component */
    "./src/app/containers/pages/private/portal/portal.component.ts");

    var portalRoutes = [{
      path: '',
      component: _containers_pages_private_portal_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"],
      children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | containers-pages-private-portal-home-home-module */
          [__webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-profile-pro~ca41f942"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-profile-pro~62e1b398"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-statistics-~e8376ccd"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-workflow-wo~f38fcec6"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-workflow-wo~3b67d6c3"), __webpack_require__.e("common"), __webpack_require__.e("containers-pages-private-portal-home-home-module")]).then(__webpack_require__.bind(null,
          /*! @containers/pages/private/portal/home/home.module */
          "./src/app/containers/pages/private/portal/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'workflow',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | containers-pages-private-portal-workflow-workflow-module */
          [__webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-profile-pro~ca41f942"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-profile-pro~62e1b398"), __webpack_require__.e("default~containers-pages-private-portal-profile-profile-module~containers-pages-private-portal-workf~03791db4"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-statistics-~e8376ccd"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-workflow-wo~f38fcec6"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-workflow-wo~3b67d6c3"), __webpack_require__.e("default~containers-pages-private-portal-workflow-workflow-module~containers-pages-public-auth-login-~a2715d51"), __webpack_require__.e("containers-pages-private-portal-workflow-workflow-module")]).then(__webpack_require__.bind(null,
          /*! @containers/pages/private/portal/workflow/workflow.module */
          "./src/app/containers/pages/private/portal/workflow/workflow.module.ts")).then(function (m) {
            return m.WorkflowModule;
          });
        }
      }, {
        path: 'statistics',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | containers-pages-private-portal-statistics-statistics-module */
          [__webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-statistics-~e8376ccd"), __webpack_require__.e("common"), __webpack_require__.e("containers-pages-private-portal-statistics-statistics-module")]).then(__webpack_require__.bind(null,
          /*! @containers/pages/private/portal/statistics/statistics.module */
          "./src/app/containers/pages/private/portal/statistics/statistics.module.ts")).then(function (m) {
            return m.StatisticsModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | containers-pages-private-portal-profile-profile-module */
          [__webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-profile-pro~ca41f942"), __webpack_require__.e("default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-profile-pro~62e1b398"), __webpack_require__.e("default~containers-pages-private-portal-profile-profile-module~containers-pages-private-portal-workf~03791db4"), __webpack_require__.e("default~containers-pages-private-portal-profile-profile-module~containers-pages-public-auth-login-lo~2713dda1"), __webpack_require__.e("default~containers-pages-private-portal-profile-profile-module~containers-pages-public-auth-registra~318ccdbe"), __webpack_require__.e("containers-pages-private-portal-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! @containers/pages/private/portal/profile/profile.module */
          "./src/app/containers/pages/private/portal/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        }
      }]
    }];

    var PortalRoutingModule = function PortalRoutingModule() {
      _classCallCheck(this, PortalRoutingModule);
    };

    PortalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalRoutingModule
    });
    PortalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalRoutingModule_Factory(t) {
        return new (t || PortalRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(portalRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(portalRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/pages/private/portal/portal.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/portal.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PortalComponent */

  /***/
  function srcAppContainersPagesPrivatePortalPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalComponent", function () {
      return PortalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/app-settings-service/app-settings.service */
    "./src/app/modules/services/app-settings-service/app-settings.service.ts");
    /* harmony import */


    var _containers_page_layers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @containers/page-layers/sidebar/sidebar.component */
    "./src/app/containers/page-layers/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _containers_page_layers_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @containers/page-layers/header/header.component */
    "./src/app/containers/page-layers/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "wrapper_with-offset": a0
      };
    };

    var PortalComponent =
    /*#__PURE__*/
    function () {
      function PortalComponent(settingsService) {
        _classCallCheck(this, PortalComponent);

        this.settingsService = settingsService;
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(PortalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          var modeSetting = this.settingsService.isDarkMode.subscribe(function (state) {
            return _this18.isDarkMode = state;
          });
          var sidebarSetting = this.settingsService.sidebar.subscribe(function (state) {
            return _this18.sidebar = state;
          });
          this.stream.add(modeSetting);
          this.stream.add(sidebarSetting);
        }
      }, {
        key: "setColorMode",
        value: function setColorMode(state) {
          this.settingsService.isDarkMode.next(state);
        }
      }, {
        key: "setSidebarState",
        value: function setSidebarState(state) {
          this.settingsService.sidebar.next(state);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stream.unsubscribe();
        }
      }]);

      return PortalComponent;
    }();

    PortalComponent.ɵfac = function PortalComponent_Factory(t) {
      return new (t || PortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_2__["AppSettingsService"]));
    };

    PortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortalComponent,
      selectors: [["app-portal"]],
      decls: 6,
      vars: 5,
      consts: [[1, "portal"], [3, "darkMode", "toggleColorMode"], [1, "wrapper", 3, "ngClass"], [3, "darkMode", "toggleSidebarState"], [1, "content-wrapper"]],
      template: function PortalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-sidebar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleColorMode", function PortalComponent_Template_app_sidebar_toggleColorMode_1_listener($event) {
            return ctx.setColorMode($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebarState", function PortalComponent_Template_app_header_toggleSidebarState_3_listener($event) {
            return ctx.setSidebarState($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkMode", ctx.isDarkMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.sidebar));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkMode", ctx.isDarkMode);
        }
      },
      directives: [_containers_page_layers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _containers_page_layers_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: [".portal[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  left: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.wrapper_with-offset[_ngcontent-%COMP%] {\n  left: 320px;\n  width: -webkit-calc(100% - 320px);\n  width: calc(100% - 320px);\n}\n@media screen and (max-width: 1180px) {\n  .wrapper_with-offset[_ngcontent-%COMP%] {\n    left: 260px;\n    width: -webkit-calc(100% - 260px);\n    width: calc(100% - 260px);\n  }\n}\n@media screen and (max-width: 620px) {\n  .wrapper_with-offset[_ngcontent-%COMP%] {\n    left: 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wcml2YXRlL3BvcnRhbC9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZXMvcHJpdmF0ZS9wb3J0YWwvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXHBhZ2VzXFxwcml2YXRlXFxwb3J0YWxcXHBvcnRhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wcml2YXRlL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTZDQSxZQUFBO0FBVUEsZ0JBQUE7QUFNQSxVQUFBO0FDM0RBO0VBQ0Usb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHRjtBREFBO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkQyQ1c7RUMzQ1gsZ0JEMkNXO0VDMUNYLDRCQUFBO0VBQUEsNkJBQUE7RUFBQSw4QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUNHRjtBREFBO0VBQ0UsV0Q4QmlCO0VDN0JqQixpQ0RpQ2lCO0VDakNqQix5QkRpQ2lCO0FFOUJuQjtBREFBO0VBRUU7SUFDRSxXRHNCZTtJQ3JCZixpQ0R5QmU7SUN6QmYseUJEeUJlO0VFdkJqQjtBQUNGO0FEQ0E7RUFFRTtJQUNFLE9BQUE7SUFDQSxXRGdCZTtFRWhCakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZXMvcHJpdmF0ZS9wb3J0YWwvcG9ydGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29sb3JzICovXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGVycm9yOiAjZmY3MzczO1xyXG4kY29tcGxldGU6ICM3OWVkNDk7XHJcblxyXG4kcGxhY2Vob2xkZXI6ICNiMGIwYjA7XHJcbiRmb3JtLWl0ZW0tY29sb3I6ICNiMGIwYjA7XHJcblxyXG4kaW5wdXQtdGV4dDogIzg0OTJhZjtcclxuJGlucHV0LWJvcmRlcjogI2Y2ZjZmNjtcclxuJGlucHV0LWJvcmRlci0taG92ZXI6ICNlZWViZWI7XHJcblxyXG4kYm9yZGVyOiAjZDRkOWUzO1xyXG4kYm9yZGVyLWxpZ2h0OiAjY2NjO1xyXG5cclxuJGJhY2tncm91bmQ6ICNmNmY3ZmE7XHJcblxyXG4kdGhlbWUtY29sb3I6ICMwZTFhMzU7XHJcblxyXG4kdGhlbWUtZGFyay1jb2xvcjogIzExMzU5MztcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXM6ICM1NTg0ZmY7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiR0aGVtZS1saWdodC1jb2xvcjogIzRjNTBjNjtcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zOiAjNGYzOWQ3O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJG5hdi1pdGVtLWNvbG9yOiAjMTIyMTQzO1xyXG5cclxuJGRlY29yLWl0ZW0tLWhvdmVyOiAjM2I1NmRiO1xyXG4kZGVjb3ItaXRlbS0tYWN0aXZlOiAjNTU4NGZmO1xyXG5cclxuJGJ0bjogIzc5OWVmYjtcclxuJGJ0bi1kZWNvcjogIzRjN2JmNjtcclxuJGJ0bi0tZGlzYWJsZWQ6ICNjY2M7XHJcblxyXG4kdGV4dC1zaGFkb3c6ICNiMWMwZTI7XHJcbiR0ZXh0LWNvbG9yOiAjNzY3YmIwO1xyXG4kc3ViLWhlYWRsaW5lLWNvbG9yOiAjODQ5MmFmO1xyXG5cclxuJGhlYWRsaW5lLWNvbG9yOiAjMmY1MGE4O1xyXG5cclxuXHJcbi8qIHNpZGViYXIgKi9cclxuJHNpZGViYXItd2lkdGgteHM6IDEwMCU7XHJcbiRzaWRlYmFyLXdpZHRoLW1kOiAyNjBweDtcclxuJHNpZGViYXItd2lkdGgtbGc6IDMyMHB4O1xyXG5cclxuJHdyYXBwZXItd2lkdGgteHM6IDEwMCU7XHJcbiR3cmFwcGVyLXdpZHRoLW1kOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiR3cmFwcGVyLXdpZHRoLWxnOiBjYWxjKDEwMCUgLSAzMjBweCk7XHJcblxyXG5cclxuLyogdHJhbnNpdGlvbnMgKi9cclxuJHRyYW5zaXRpb246IC40cztcclxuJHNob3J0LXRyYW5zaXRpb246IC4zcztcclxuJGxvbmctdHJhbnNpdGlvbjogLjZzO1xyXG5cclxuXHJcbi8qIGZvbnRzICovXHJcbiRiYXNlLWZvbnRzOiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdPcGVuIFNhbnMnLCAnc2Fucy1zZXJpZicsICdBcmlhbCc7XHJcblxyXG5cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5wb3J0YWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ud3JhcHBlcl93aXRoLW9mZnNldCB7XHJcbiAgbGVmdDogJHNpZGViYXItd2lkdGgtbGc7XHJcbiAgd2lkdGg6ICR3cmFwcGVyLXdpZHRoLWxnO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpIHtcclxuXHJcbiAgLndyYXBwZXJfd2l0aC1vZmZzZXQge1xyXG4gICAgbGVmdDogJHNpZGViYXItd2lkdGgtbWQ7XHJcbiAgICB3aWR0aDogJHdyYXBwZXItd2lkdGgtbWQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG5cclxuICAud3JhcHBlcl93aXRoLW9mZnNldCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6ICR3cmFwcGVyLXdpZHRoLXhzO1xyXG4gIH1cclxufVxyXG4iLCIvKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuLnBvcnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndyYXBwZXJfd2l0aC1vZmZzZXQge1xuICBsZWZ0OiAzMjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMyMHB4KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4MHB4KSB7XG4gIC53cmFwcGVyX3dpdGgtb2Zmc2V0IHtcbiAgICBsZWZ0OiAyNjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xuICAud3JhcHBlcl93aXRoLW9mZnNldCB7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portal',
          templateUrl: './portal.component.html',
          styleUrls: ['./portal.component.scss']
        }]
      }], function () {
        return [{
          type: _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_2__["AppSettingsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/pages/private/portal/portal.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/portal.module.ts ***!
    \******************************************************************/

  /*! exports provided: PortalModule */

  /***/
  function srcAppContainersPagesPrivatePortalPortalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
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


    var _containers_page_layers_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @containers/page-layers/header/header.module */
    "./src/app/containers/page-layers/header/header.module.ts");
    /* harmony import */


    var _containers_page_layers_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @containers/page-layers/sidebar/sidebar.module */
    "./src/app/containers/page-layers/sidebar/sidebar.module.ts");
    /* harmony import */


    var _containers_pages_private_portal_portal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @containers/pages/private/portal/portal.component */
    "./src/app/containers/pages/private/portal/portal.component.ts");
    /* harmony import */


    var _containers_pages_private_portal_portal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @containers/pages/private/portal/portal-routing.module */
    "./src/app/containers/pages/private/portal/portal-routing.module.ts");

    var PortalModule = function PortalModule() {
      _classCallCheck(this, PortalModule);
    };

    PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalModule_Factory(t) {
        return new (t || PortalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_page_layers_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], _containers_page_layers_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"], _containers_pages_private_portal_portal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortalRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
        declarations: [_containers_pages_private_portal_portal_component__WEBPACK_IMPORTED_MODULE_4__["PortalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_page_layers_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], _containers_page_layers_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"], _containers_pages_private_portal_portal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortalRoutingModule"]],
        exports: [_containers_pages_private_portal_portal_component__WEBPACK_IMPORTED_MODULE_4__["PortalComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers_pages_private_portal_portal_component__WEBPACK_IMPORTED_MODULE_4__["PortalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_page_layers_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], _containers_page_layers_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"], _containers_pages_private_portal_portal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortalRoutingModule"]],
          exports: [_containers_pages_private_portal_portal_component__WEBPACK_IMPORTED_MODULE_4__["PortalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/enums/breakpoint.enum.ts":
  /*!******************************************!*\
    !*** ./src/app/enums/breakpoint.enum.ts ***!
    \******************************************/

  /*! exports provided: Breakpoint */

  /***/
  function srcAppEnumsBreakpointEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breakpoint", function () {
      return Breakpoint;
    });

    var Breakpoint;

    (function (Breakpoint) {
      Breakpoint["SM"] = "sm";
      Breakpoint["MD"] = "md";
      Breakpoint["LG"] = "lg";
    })(Breakpoint || (Breakpoint = {}));
    /***/

  },

  /***/
  "./src/app/mocks/main-menu-items.ts":
  /*!******************************************!*\
    !*** ./src/app/mocks/main-menu-items.ts ***!
    \******************************************/

  /*! exports provided: MAIN_MENU_ITEMS */

  /***/
  function srcAppMocksMainMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAIN_MENU_ITEMS", function () {
      return MAIN_MENU_ITEMS;
    });

    var MAIN_MENU_ITEMS = [{
      routing: 'home',
      viewValue: 'home',
      iconClass: 'fa fa-home'
    }, {
      routing: 'workflow',
      viewValue: 'workflow',
      iconClass: 'fa fa-area-chart'
    }, {
      routing: 'statistics',
      viewValue: 'statistics',
      iconClass: 'fa fa-line-chart'
    }, {
      routing: 'profile',
      viewValue: 'my profile',
      iconClass: 'fa fa-cogs'
    }];
    /***/
  },

  /***/
  "./src/app/modules/services/app-settings-service/app-settings.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/services/app-settings-service/app-settings.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: AppSettingsService */

  /***/
  function srcAppModulesServicesAppSettingsServiceAppSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettingsService", function () {
      return AppSettingsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @enums/breakpoint.enum */
    "./src/app/enums/breakpoint.enum.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");

    var AppSettingsService =
    /*#__PURE__*/
    function () {
      function AppSettingsService(breakpointObserver) {
        _classCallCheck(this, AppSettingsService);

        this.breakpointObserver = breakpointObserver;
        this.small = ['(min-width: 320px) and (max-width:620px)'];
        this.medium = ['(min-width: 621px) and (max-width: 1180px)'];
        this.large = ['(min-width: 1181px)'];
        this.sidebar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.isDarkMode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.screenSizeObserver = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["Breakpoint"].SM);
        this.initObservers();
      }

      _createClass(AppSettingsService, [{
        key: "initObservers",
        value: function initObservers() {
          var _this19 = this;

          this.breakpointObserver.observe(this.small).subscribe(function (state) {
            if (state.matches) {
              _this19.screenSizeObserver.next(_enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["Breakpoint"].SM);

              _this19.sidebar.next(false);
            }
          });
          this.breakpointObserver.observe(this.medium).subscribe(function (state) {
            if (state.matches) {
              _this19.screenSizeObserver.next(_enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["Breakpoint"].MD);
            }
          });
          this.breakpointObserver.observe(this.large).subscribe(function (state) {
            if (state.matches) {
              _this19.screenSizeObserver.next(_enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["Breakpoint"].LG);
            }
          });
        }
      }]);

      return AppSettingsService;
    }();

    AppSettingsService.ɵfac = function AppSettingsService_Factory(t) {
      return new (t || AppSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]));
    };

    AppSettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppSettingsService,
      factory: AppSettingsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=containers-pages-private-portal-portal-module-es5.js.map