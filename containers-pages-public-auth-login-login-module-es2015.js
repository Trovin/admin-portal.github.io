(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-pages-public-auth-login-login-module"],{

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js ***!
  \***************************************************************************/
/*! exports provided: MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MatSnackBar, MatSnackBarConfig, MatSnackBarContainer, MatSnackBarModule, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function() { return MAT_SNACK_BAR_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function() { return MAT_SNACK_BAR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function() { return MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBar", function() { return MatSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function() { return MatSnackBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function() { return MatSnackBarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function() { return MatSnackBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function() { return MatSnackBarRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function() { return SimpleSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function() { return matSnackBarAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");












/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/snack-bar-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event that is emitted when a snack bar is dismissed.
 * @record
 */








function SimpleSnackBar_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r63.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r62.data.action);
} }
function MatSnackBarContainer_ng_template_0_Template(rf, ctx) { }
function MatSnackBarDismiss() { }
if (false) {}
/**
 * Maximum amount of milliseconds that can be passed into setTimeout.
 * @type {?}
 */
const MAX_TIMEOUT = Math.pow(2, 31) - 1;
/**
 * Reference to a snack bar dispatched from the snack bar service.
 * @template T
 */
class MatSnackBarRef {
    /**
     * @param {?} containerInstance
     * @param {?} _overlayRef
     */
    constructor(containerInstance, _overlayRef) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the snack bar has been dismissed.
         */
        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the snack bar has opened and appeared.
         */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the snack bar action was called.
         */
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Whether the snack bar was dismissed using the action button.
         */
        this._dismissedByAction = false;
        this.containerInstance = containerInstance;
        // Dismiss snackbar on action.
        this.onAction().subscribe((/**
         * @return {?}
         */
        () => this.dismiss()));
        containerInstance._onExit.subscribe((/**
         * @return {?}
         */
        () => this._finishDismiss()));
    }
    /**
     * Dismisses the snack bar.
     * @return {?}
     */
    dismiss() {
        if (!this._afterDismissed.closed) {
            this.containerInstance.exit();
        }
        clearTimeout(this._durationTimeoutId);
    }
    /**
     * Marks the snackbar action clicked.
     * @return {?}
     */
    dismissWithAction() {
        if (!this._onAction.closed) {
            this._dismissedByAction = true;
            this._onAction.next();
            this._onAction.complete();
        }
    }
    /**
     * Marks the snackbar action clicked.
     * @deprecated Use `dismissWithAction` instead.
     * \@breaking-change 8.0.0
     * @return {?}
     */
    closeWithAction() {
        this.dismissWithAction();
    }
    /**
     * Dismisses the snack bar after some duration
     * @param {?} duration
     * @return {?}
     */
    _dismissAfter(duration) {
        // Note that we need to cap the duration to the maximum value for setTimeout, because
        // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
        this._durationTimeoutId = setTimeout((/**
         * @return {?}
         */
        () => this.dismiss()), Math.min(duration, MAX_TIMEOUT));
    }
    /**
     * Marks the snackbar as opened
     * @return {?}
     */
    _open() {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    }
    /**
     * Cleans up the DOM after closing.
     * @private
     * @return {?}
     */
    _finishDismiss() {
        this._overlayRef.dispose();
        if (!this._onAction.closed) {
            this._onAction.complete();
        }
        this._afterDismissed.next({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.complete();
        this._dismissedByAction = false;
    }
    /**
     * Gets an observable that is notified when the snack bar is finished closing.
     * @return {?}
     */
    afterDismissed() {
        return this._afterDismissed.asObservable();
    }
    /**
     * Gets an observable that is notified when the snack bar has opened and appeared.
     * @return {?}
     */
    afterOpened() {
        return this.containerInstance._onEnter;
    }
    /**
     * Gets an observable that is notified when the snack bar action is called.
     * @return {?}
     */
    onAction() {
        return this._onAction.asObservable();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/snack-bar-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to access the data that was passed in to a snack bar.
 * @type {?}
 */
const MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatSnackBarData');
/**
 * Configuration used when opening a snack-bar.
 * @template D
 */
class MatSnackBarConfig {
    constructor() {
        /**
         * The politeness level for the MatAriaLiveAnnouncer announcement.
         */
        this.politeness = 'assertive';
        /**
         * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
         * component or template, the announcement message will default to the specified message.
         */
        this.announcementMessage = '';
        /**
         * The length of time in milliseconds to wait before automatically dismissing the snack bar.
         */
        this.duration = 0;
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * The horizontal position to place the snack bar.
         */
        this.horizontalPosition = 'center';
        /**
         * The vertical position to place the snack bar.
         */
        this.verticalPosition = 'bottom';
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/simple-snack-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */
class SimpleSnackBar {
    /**
     * @param {?} snackBarRef
     * @param {?} data
     */
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    /**
     * Performs the action on the snack bar.
     * @return {?}
     */
    action() {
        this.snackBarRef.dismissWithAction();
    }
    /**
     * If the action button should be shown.
     * @return {?}
     */
    get hasAction() {
        return !!this.data.action;
    }
}
SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) { return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA)); };
SimpleSnackBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SimpleSnackBar, selectors: [["simple-snack-bar"]], hostAttrs: [1, "mat-simple-snackbar"], decls: 3, vars: 2, consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]], template: function SimpleSnackBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasAction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
SimpleSnackBar.ctorParameters = () => [
    { type: MatSnackBarRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_SNACK_BAR_DATA,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SimpleSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'simple-snack-bar',
                template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'class': 'mat-simple-snackbar'
                },
                styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatSnackBarRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/snack-bar-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material snack bar.
 * \@docs-private
 * @type {?}
 */
const matSnackBarAnimations = {
    /**
     * Animation that shows and hides a snack bar.
     */
    snackBarState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(0.8)',
            opacity: 0,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(1)',
            opacity: 1,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0
        }))),
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/snack-bar-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Internal component that wraps user-provided snack bar content.
 * \@docs-private
 */
class MatSnackBarContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    /**
     * @param {?} _ngZone
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} snackBarConfig
     */
    constructor(_ngZone, _elementRef, _changeDetectorRef, snackBarConfig) {
        super();
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.snackBarConfig = snackBarConfig;
        /**
         * Whether the component has been destroyed.
         */
        this._destroyed = false;
        /**
         * Subject for notifying that the snack bar has exited from view.
         */
        this._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying that the snack bar has finished entering the view.
         */
        this._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * The state of the snack bar animations.
         */
        this._animationState = 'void';
        /**
         * Attaches a DOM portal to the snack bar container.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */
        this.attachDomPortal = (/**
         * @param {?} portal
         * @return {?}
         */
        (portal) => {
            this._assertNotAttached();
            this._applySnackBarClasses();
            return this._portalOutlet.attachDomPortal(portal);
        });
        // Based on the ARIA spec, `alert` and `status` roles have an
        // implicit `assertive` and `polite` politeness respectively.
        if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
            this._role = 'alert';
        }
        else if (snackBarConfig.politeness === 'off') {
            this._role = null;
        }
        else {
            this._role = 'status';
        }
    }
    /**
     * Attach a component portal as content to this snack bar container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    attachComponentPortal(portal) {
        this._assertNotAttached();
        this._applySnackBarClasses();
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a template portal as content to this snack bar container.
     * @template C
     * @param {?} portal
     * @return {?}
     */
    attachTemplatePortal(portal) {
        this._assertNotAttached();
        this._applySnackBarClasses();
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /**
     * Handle end of animations, updating the state of the snackbar.
     * @param {?} event
     * @return {?}
     */
    onAnimationEnd(event) {
        const { fromState, toState } = event;
        if ((toState === 'void' && fromState !== 'void') || toState === 'hidden') {
            this._completeExit();
        }
        if (toState === 'visible') {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.
            /** @type {?} */
            const onEnter = this._onEnter;
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                onEnter.next();
                onEnter.complete();
            }));
        }
    }
    /**
     * Begin animation of snack bar entrance into view.
     * @return {?}
     */
    enter() {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Begin animation of the snack bar exiting from view.
     * @return {?}
     */
    exit() {
        // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
        // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
        // `MatSnackBar.open`).
        this._animationState = 'hidden';
        // Mark this element with an 'exit' attribute to indicate that the snackbar has
        // been dismissed and will soon be removed from the DOM. This is used by the snackbar
        // test harness.
        this._elementRef.nativeElement.setAttribute('mat-exit', '');
        return this._onExit;
    }
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed = true;
        this._completeExit();
    }
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     * @private
     * @return {?}
     */
    _completeExit() {
        this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this._onExit.next();
            this._onExit.complete();
        }));
    }
    /**
     * Applies the various positioning and user-configured CSS classes to the snack bar.
     * @private
     * @return {?}
     */
    _applySnackBarClasses() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        const panelClasses = this.snackBarConfig.panelClass;
        if (panelClasses) {
            if (Array.isArray(panelClasses)) {
                // Note that we can't use a spread here, because IE doesn't support multiple arguments.
                panelClasses.forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                cssClass => element.classList.add(cssClass)));
            }
            else {
                element.classList.add(panelClasses);
            }
        }
        if (this.snackBarConfig.horizontalPosition === 'center') {
            element.classList.add('mat-snack-bar-center');
        }
        if (this.snackBarConfig.verticalPosition === 'top') {
            element.classList.add('mat-snack-bar-top');
        }
    }
    /**
     * Asserts that no content is already attached to the container.
     * @private
     * @return {?}
     */
    _assertNotAttached() {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach snack bar content after content is already attached');
        }
    }
}
MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(t) { return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarConfig)); };
MatSnackBarContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatSnackBarContainer, selectors: [["snack-bar-container"]], viewQuery: function MatSnackBarContainer_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: [1, "mat-snack-bar-container"], hostVars: 2, hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentHostSyntheticListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) { return ctx.onAnimationEnd($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx._role);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵupdateSyntheticHostBinding"]("@state", ctx._animationState);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatSnackBarContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatSnackBarContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"], encapsulation: 2, data: { animation: [matSnackBarAnimations.snackBarState] } });
/** @nocollapse */
MatSnackBarContainer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: MatSnackBarConfig }
];
MatSnackBarContainer.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'snack-bar-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                // In Ivy embedded views will be change detected from their declaration place, rather than
                // where they were stamped out. This means that we can't have the snack bar container be OnPush,
                // because it might cause snack bars that were opened from a template not to be out of date.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                animations: [matSnackBarAnimations.snackBarState],
                host: {
                    '[attr.role]': '_role',
                    'class': 'mat-snack-bar-container',
                    '[@state]': '_animationState',
                    '(@state.done)': 'onAnimationEnd($event)'
                },
                styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: MatSnackBarConfig }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/snack-bar-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatSnackBarModule {
}
MatSnackBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatSnackBarModule });
MatSnackBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MatSnackBarModule_Factory(t) { return new (t || MatSnackBarModule)(); }, imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
        ],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatSnackBarModule, { declarations: function () { return [MatSnackBarContainer,
        SimpleSnackBar]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; }, exports: function () { return [MatSnackBarContainer,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                ],
                exports: [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
                declarations: [MatSnackBarContainer, SimpleSnackBar],
                entryComponents: [MatSnackBarContainer, SimpleSnackBar]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/snack-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify default snack bar.
 * @type {?}
 */
const MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-snack-bar-default-options', {
    providedIn: 'root',
    factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
    return new MatSnackBarConfig();
}
/**
 * Service to dispatch Material Design snack bar messages.
 */
class MatSnackBar {
    /**
     * @param {?} _overlay
     * @param {?} _live
     * @param {?} _injector
     * @param {?} _breakpointObserver
     * @param {?} _parentSnackBar
     * @param {?} _defaultConfig
     */
    constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
        this._overlay = _overlay;
        this._live = _live;
        this._injector = _injector;
        this._breakpointObserver = _breakpointObserver;
        this._parentSnackBar = _parentSnackBar;
        this._defaultConfig = _defaultConfig;
        /**
         * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
         * If there is a parent snack-bar service, all operations should delegate to that parent
         * via `_openedSnackBarRef`.
         */
        this._snackBarRefAtThisLevel = null;
    }
    /**
     * Reference to the currently opened snackbar at *any* level.
     * @return {?}
     */
    get _openedSnackBarRef() {
        /** @type {?} */
        const parent = this._parentSnackBar;
        return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _openedSnackBarRef(value) {
        if (this._parentSnackBar) {
            this._parentSnackBar._openedSnackBarRef = value;
        }
        else {
            this._snackBarRefAtThisLevel = value;
        }
    }
    /**
     * Creates and dispatches a snack bar with a custom component for the content, removing any
     * currently opened snack bars.
     *
     * @template T
     * @param {?} component Component to be instantiated.
     * @param {?=} config Extra configuration for the snack bar.
     * @return {?}
     */
    openFromComponent(component, config) {
        return (/** @type {?} */ (this._attach(component, config)));
    }
    /**
     * Creates and dispatches a snack bar with a custom template for the content, removing any
     * currently opened snack bars.
     *
     * @param {?} template Template to be instantiated.
     * @param {?=} config Extra configuration for the snack bar.
     * @return {?}
     */
    openFromTemplate(template, config) {
        return this._attach(template, config);
    }
    /**
     * Opens a snackbar with a message and an optional action.
     * @param {?} message The message to show in the snackbar.
     * @param {?=} action The label for the snackbar action.
     * @param {?=} config Additional configuration options for the snackbar.
     * @return {?}
     */
    open(message, action = '', config) {
        /** @type {?} */
        const _config = Object.assign(Object.assign({}, this._defaultConfig), config);
        // Since the user doesn't have access to the component, we can
        // override the data to pass in our own message and action.
        _config.data = { message, action };
        if (!_config.announcementMessage) {
            _config.announcementMessage = message;
        }
        return this.openFromComponent(SimpleSnackBar, _config);
    }
    /**
     * Dismisses the currently-visible snack bar.
     * @return {?}
     */
    dismiss() {
        if (this._openedSnackBarRef) {
            this._openedSnackBarRef.dismiss();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Only dismiss the snack bar at the current level on destroy.
        if (this._snackBarRefAtThisLevel) {
            this._snackBarRefAtThisLevel.dismiss();
        }
    }
    /**
     * Attaches the snack bar container component to the overlay.
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    _attachSnackBarContainer(overlayRef, config) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([
            [MatSnackBarConfig, config]
        ]));
        /** @type {?} */
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatSnackBarContainer, config.viewContainerRef, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.snackBarConfig = config;
        return containerRef.instance;
    }
    /**
     * Places a new component or a template as the content of the snack bar container.
     * @private
     * @template T
     * @param {?} content
     * @param {?=} userConfig
     * @return {?}
     */
    _attach(content, userConfig) {
        /** @type {?} */
        const config = Object.assign(Object.assign(Object.assign({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
        /** @type {?} */
        const overlayRef = this._createOverlay(config);
        /** @type {?} */
        const container = this._attachSnackBarContainer(overlayRef, config);
        /** @type {?} */
        const snackBarRef = new MatSnackBarRef(container, overlayRef);
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]) {
            /** @type {?} */
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](content, (/** @type {?} */ (null)), (/** @type {?} */ ({
                $implicit: config.data,
                snackBarRef
            })));
            snackBarRef.instance = container.attachTemplatePortal(portal);
        }
        else {
            /** @type {?} */
            const injector = this._createInjector(config, snackBarRef);
            /** @type {?} */
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](content, undefined, injector);
            /** @type {?} */
            const contentRef = container.attachComponentPortal(portal);
            // We can't pass this via the injector, because the injector is created earlier.
            snackBarRef.instance = contentRef.instance;
        }
        // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
        // appropriate. This class is applied to the overlay element because the overlay must expand to
        // fill the width of the screen for full width snackbars.
        this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["Breakpoints"].HandsetPortrait).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(overlayRef.detachments())).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            /** @type {?} */
            const classList = overlayRef.overlayElement.classList;
            /** @type {?} */
            const className = 'mat-snack-bar-handset';
            state.matches ? classList.add(className) : classList.remove(className);
        }));
        this._animateSnackBar(snackBarRef, config);
        this._openedSnackBarRef = snackBarRef;
        return this._openedSnackBarRef;
    }
    /**
     * Animates the old snack bar out and the new one in.
     * @private
     * @param {?} snackBarRef
     * @param {?} config
     * @return {?}
     */
    _animateSnackBar(snackBarRef, config) {
        // When the snackbar is dismissed, clear the reference to it.
        snackBarRef.afterDismissed().subscribe((/**
         * @return {?}
         */
        () => {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (this._openedSnackBarRef == snackBarRef) {
                this._openedSnackBarRef = null;
            }
            if (config.announcementMessage) {
                this._live.clear();
            }
        }));
        if (this._openedSnackBarRef) {
            // If a snack bar is already in view, dismiss it and enter the
            // new snack bar after exit animation is complete.
            this._openedSnackBarRef.afterDismissed().subscribe((/**
             * @return {?}
             */
            () => {
                snackBarRef.containerInstance.enter();
            }));
            this._openedSnackBarRef.dismiss();
        }
        else {
            // If no snack bar is in view, enter the new snack bar.
            snackBarRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
        if (config.duration && config.duration > 0) {
            snackBarRef.afterOpened().subscribe((/**
             * @return {?}
             */
            () => snackBarRef._dismissAfter((/** @type {?} */ (config.duration)))));
        }
        if (config.announcementMessage) {
            this._live.announce(config.announcementMessage, config.politeness);
        }
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @private
     * @param {?} config The user-specified snack bar config.
     * @return {?}
     */
    _createOverlay(config) {
        /** @type {?} */
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]();
        overlayConfig.direction = config.direction;
        /** @type {?} */
        let positionStrategy = this._overlay.position().global();
        // Set horizontal position.
        /** @type {?} */
        const isRtl = config.direction === 'rtl';
        /** @type {?} */
        const isLeft = (config.horizontalPosition === 'left' ||
            (config.horizontalPosition === 'start' && !isRtl) ||
            (config.horizontalPosition === 'end' && isRtl));
        /** @type {?} */
        const isRight = !isLeft && config.horizontalPosition !== 'center';
        if (isLeft) {
            positionStrategy.left('0');
        }
        else if (isRight) {
            positionStrategy.right('0');
        }
        else {
            positionStrategy.centerHorizontally();
        }
        // Set horizontal position.
        if (config.verticalPosition === 'top') {
            positionStrategy.top('0');
        }
        else {
            positionStrategy.bottom('0');
        }
        overlayConfig.positionStrategy = positionStrategy;
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an injector to be used inside of a snack bar component.
     * @private
     * @template T
     * @param {?} config Config that was used to create the snack bar.
     * @param {?} snackBarRef Reference to the snack bar.
     * @return {?}
     */
    _createInjector(config, snackBarRef) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([
            [MatSnackBarRef, snackBarRef],
            [MAT_SNACK_BAR_DATA, config.data]
        ]));
    }
}
MatSnackBar.ɵfac = function MatSnackBar_Factory(t) { return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS)); };
/** @nocollapse */
MatSnackBar.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"] },
    { type: MatSnackBar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
    { type: MatSnackBarConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
];
/** @nocollapse */ MatSnackBar.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function MatSnackBar_Factory() { return new MatSnackBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MatSnackBar, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: MatSnackBar, providedIn: MatSnackBarModule });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{ providedIn: MatSnackBarModule }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"] }, { type: MatSnackBar, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }] }, { type: MatSnackBarConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=snack-bar.js.map

/***/ }),

/***/ "./src/app/containers/common-layers/forms/login-form/login-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/common-layers/forms/login-form/login-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/icon-class.enum */ "./src/app/enums/icon-class.enum.ts");
/* harmony import */ var _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/form-field/form-field.component */ "./src/app/components/form-field/form-field.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/validation-message/validation-message.component */ "./src/app/components/validation-message/validation-message.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/button/button.component */ "./src/app/components/button/button.component.ts");









class LoginFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.loginFormSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faIcon = _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_2__["iconClass"];
    }
    ngOnInit() {
        this.initForm();
    }
    get form() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.loginFormSubmit.emit({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        });
    }
    initForm() {
        this.loginForm = this.formBuilder.group({
            email: ['test@gmail.com', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
                ]
            ],
            password: ['@Test10', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,24}')
                ]
            ]
        });
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], outputs: { loginFormSubmit: "loginFormSubmit" }, decls: 16, vars: 6, consts: [["novalidate", "", 1, "form", 3, "formGroup", "ngSubmit"], ["type", "email", "name", "email", "placeholder", "Email", "autocomplete", "on", "formControlName", "email", 1, "form-control"], ["formInput", ""], ["slot", "icon", "aria-hidden", "true", 3, "ngClass"], ["formIcon", ""], [3, "invalid"], ["slot", "input", "type", "password", "name", "password", "placeholder", "Password", "autocomplete", "on", "formControlName", "password", 1, "form-control"], ["context", "Login", "className", "btn_submit", 3, "state"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Email is invalid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " * Must contain: lowercase, uppercase, numbers, special characters and have length in range 8 - 24 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.EMAIL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["email"].invalid && ctx.form["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.PASSWORD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["password"].invalid && ctx.form["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { loginFormSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/common-layers/forms/login-form/login-form.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/containers/common-layers/forms/login-form/login-form.module.ts ***!
  \********************************************************************************/
/*! exports provided: LoginFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/form-field/form-field.module */ "./src/app/components/form-field/form-field.module.ts");
/* harmony import */ var _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/validation-message/validation-message.module */ "./src/app/components/validation-message/validation-message.module.ts");
/* harmony import */ var _containers_common_layers_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @containers/common-layers/forms/login-form/login-form.component */ "./src/app/containers/common-layers/forms/login-form/login-form.component.ts");









class LoginFormModule {
}
LoginFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginFormModule });
LoginFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginFormModule_Factory(t) { return new (t || LoginFormModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginFormModule, { declarations: [_containers_common_layers_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
        _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]], exports: [_containers_common_layers_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_common_layers_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                    _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]
                ],
                exports: [_containers_common_layers_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/pages/public/auth/login/login-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/containers/pages/public/auth/login/login-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: loginRoutes, LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRoutes", function() { return loginRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_pages_public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @containers/pages/public/auth/login/login.component */ "./src/app/containers/pages/public/auth/login/login.component.ts");





const loginRoutes = [
    {
        path: '',
        component: _containers_pages_public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(loginRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(loginRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/pages/public/auth/login/login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/pages/public/auth/login/login.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");
/* harmony import */ var _components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/large-headline/large-headline.component */ "./src/app/components/large-headline/large-headline.component.ts");
/* harmony import */ var _containers_common_layers_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @containers/common-layers/forms/login-form/login-form.component */ "./src/app/containers/common-layers/forms/login-form/login-form.component.ts");








class LoginComponent {
    constructor(router, snackBar, authService) {
        this.router = router;
        this.snackBar = snackBar;
        this.authService = authService;
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.headline = 'Welcome back!';
    }
    login(data) {
        this.stream = this.authService.login(data.email, data.password)
            .subscribe(() => this.router.navigate(['portal/home']), () => this.snackBar.open('User is not registered', 'Ok', {
            duration: 4000,
            panelClass: ['snackbar'],
            horizontalPosition: 'end'
        }));
    }
    ngOnDestroy() {
        this.stream.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 1, consts: [[1, "fade-in"], [3, "headline"], [3, "loginFormSubmit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-large-headline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-login-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginFormSubmit", function LoginComponent_Template_app_login_form_loginFormSubmit_2_listener($event) { return ctx.login($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headline", ctx.headline);
    } }, directives: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_5__["LargeHeadlineComponent"], _containers_common_layers_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"]], styles: [".login-headline[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 48px;\n  font-weight: 300;\n  color: #2f50a8;\n  margin-bottom: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wdWJsaWMvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZXMvcHVibGljL2F1dGgvbG9naW4vQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXHBhZ2VzXFxwdWJsaWNcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wdWJsaWMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUMzREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNEb0NlO0VDbkNmLG9CQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3BhZ2VzL3B1YmxpYy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29sb3JzICovXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGVycm9yOiAjZmY3MzczO1xyXG4kY29tcGxldGU6ICM3OWVkNDk7XHJcblxyXG4kcGxhY2Vob2xkZXI6ICNiMGIwYjA7XHJcbiRmb3JtLWl0ZW0tY29sb3I6ICNiMGIwYjA7XHJcblxyXG4kaW5wdXQtdGV4dDogIzg0OTJhZjtcclxuJGlucHV0LWJvcmRlcjogI2Y2ZjZmNjtcclxuJGlucHV0LWJvcmRlci0taG92ZXI6ICNlZWViZWI7XHJcblxyXG4kYm9yZGVyOiAjZDRkOWUzO1xyXG4kYm9yZGVyLWxpZ2h0OiAjY2NjO1xyXG5cclxuJGJhY2tncm91bmQ6ICNmNmY3ZmE7XHJcblxyXG4kdGhlbWUtY29sb3I6ICMwZTFhMzU7XHJcblxyXG4kdGhlbWUtZGFyay1jb2xvcjogIzExMzU5MztcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXM6ICM1NTg0ZmY7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiR0aGVtZS1saWdodC1jb2xvcjogIzRjNTBjNjtcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zOiAjNGYzOWQ3O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJG5hdi1pdGVtLWNvbG9yOiAjMTIyMTQzO1xyXG5cclxuJGRlY29yLWl0ZW0tLWhvdmVyOiAjM2I1NmRiO1xyXG4kZGVjb3ItaXRlbS0tYWN0aXZlOiAjNTU4NGZmO1xyXG5cclxuJGJ0bjogIzc5OWVmYjtcclxuJGJ0bi1kZWNvcjogIzRjN2JmNjtcclxuJGJ0bi0tZGlzYWJsZWQ6ICNjY2M7XHJcblxyXG4kdGV4dC1zaGFkb3c6ICNiMWMwZTI7XHJcbiR0ZXh0LWNvbG9yOiAjNzY3YmIwO1xyXG4kc3ViLWhlYWRsaW5lLWNvbG9yOiAjODQ5MmFmO1xyXG5cclxuJGhlYWRsaW5lLWNvbG9yOiAjMmY1MGE4O1xyXG5cclxuXHJcbi8qIHNpZGViYXIgKi9cclxuJHNpZGViYXItd2lkdGgteHM6IDEwMCU7XHJcbiRzaWRlYmFyLXdpZHRoLW1kOiAyNjBweDtcclxuJHNpZGViYXItd2lkdGgtbGc6IDMyMHB4O1xyXG5cclxuJHdyYXBwZXItd2lkdGgteHM6IDEwMCU7XHJcbiR3cmFwcGVyLXdpZHRoLW1kOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiR3cmFwcGVyLXdpZHRoLWxnOiBjYWxjKDEwMCUgLSAzMjBweCk7XHJcblxyXG5cclxuLyogdHJhbnNpdGlvbnMgKi9cclxuJHRyYW5zaXRpb246IC40cztcclxuJHNob3J0LXRyYW5zaXRpb246IC4zcztcclxuJGxvbmctdHJhbnNpdGlvbjogLjZzO1xyXG5cclxuXHJcbi8qIGZvbnRzICovXHJcbiRiYXNlLWZvbnRzOiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdPcGVuIFNhbnMnLCAnc2Fucy1zZXJpZicsICdBcmlhbCc7XHJcblxyXG5cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5sb2dpbi1oZWFkbGluZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAkaGVhZGxpbmUtY29sb3I7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XHJcbn1cclxuIiwiLyogY29sb3JzICovXG4vKiBzaWRlYmFyICovXG4vKiB0cmFuc2l0aW9ucyAqL1xuLyogZm9udHMgKi9cbi5sb2dpbi1oZWFkbGluZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzJmNTBhODtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/pages/public/auth/login/login.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/containers/pages/public/auth/login/login.module.ts ***!
  \********************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/large-headline/large-headline.module */ "./src/app/components/large-headline/large-headline.module.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _containers_pages_public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @containers/pages/public/auth/login/login.component */ "./src/app/containers/pages/public/auth/login/login.component.ts");
/* harmony import */ var _containers_common_layers_forms_login_form_login_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @containers/common-layers/forms/login-form/login-form.module */ "./src/app/containers/common-layers/forms/login-form/login-form.module.ts");
/* harmony import */ var _containers_pages_public_auth_login_login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @containers/pages/public/auth/login/login-routing.module */ "./src/app/containers/pages/public/auth/login/login-routing.module.ts");









class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _containers_common_layers_forms_login_form_login_form_module__WEBPACK_IMPORTED_MODULE_6__["LoginFormModule"],
            _containers_pages_public_auth_login_login_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoginRoutingModule"],
            _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_3__["LargeHeadlineModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_containers_pages_public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _containers_common_layers_forms_login_form_login_form_module__WEBPACK_IMPORTED_MODULE_6__["LoginFormModule"],
        _containers_pages_public_auth_login_login_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoginRoutingModule"],
        _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_3__["LargeHeadlineModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]], exports: [_containers_pages_public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_pages_public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _containers_common_layers_forms_login_form_login_form_module__WEBPACK_IMPORTED_MODULE_6__["LoginFormModule"],
                    _containers_pages_public_auth_login_login_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoginRoutingModule"],
                    _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_3__["LargeHeadlineModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]
                ],
                exports: [_containers_pages_public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=containers-pages-public-auth-login-login-module-es2015.js.map