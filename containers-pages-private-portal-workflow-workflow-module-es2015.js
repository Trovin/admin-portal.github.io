(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-pages-private-portal-workflow-workflow-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
  \**********************************************************************/
/*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");









/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-styling.ts
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
 * Extended CSSStyleDeclaration that includes a couple of drag-related
 * properties that aren't in the built-in TS typings.
 * @record
 */



function DragCSSStyleDeclaration() { }
if (false) {}
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    const userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/transition-duration.ts
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
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    const computedStyle = getComputedStyle(element);
    /** @type {?} */
    const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    const property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    prop => prop === 'transform' || prop === 'all'));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    const propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    const value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    part => part.trim()));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/client-rect.ts
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
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    const clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    const { top, bottom, left, right } = clientRect;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param {?} rect ClientRect to check against.
 * @param {?} threshold Threshold around the ClientRect.
 * @param {?} pointerX Coordinates along the X axis.
 * @param {?} pointerY Coordinates along the Y axis.
 * @return {?}
 */
function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
    const { top, right, bottom, left, width, height } = rect;
    /** @type {?} */
    const xThreshold = width * threshold;
    /** @type {?} */
    const yThreshold = height * threshold;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
        pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/parent-position-tracker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object holding the scroll position of something.
 * @record
 */
function ScrollPosition() { }
if (false) {}
/**
 * Keeps track of the scroll position and dimensions of the parents of an element.
 */
class ParentPositionTracker {
    /**
     * @param {?} _document
     * @param {?} _viewportRuler
     */
    constructor(_document, _viewportRuler) {
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /**
         * Cached positions of the scrollable parent elements.
         */
        this.positions = new Map();
    }
    /**
     * Clears the cached positions.
     * @return {?}
     */
    clear() {
        this.positions.clear();
    }
    /**
     * Caches the positions. Should be called at the beginning of a drag sequence.
     * @param {?} elements
     * @return {?}
     */
    cache(elements) {
        this.clear();
        this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition(),
        });
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.positions.set(element, {
                scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
                clientRect: getMutableClientRect(element)
            });
        }));
    }
    /**
     * Handles scrolling while a drag is taking place.
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        /** @type {?} */
        const cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
            return null;
        }
        // Used when figuring out whether an element is inside the scroll parent. If the scrolled
        // parent is the `document`, we use the `documentElement`, because IE doesn't support
        // `contains` on the `document`.
        /** @type {?} */
        const scrolledParentNode = target === this._document ? target.documentElement : target;
        /** @type {?} */
        const scrollPosition = cachedPosition.scrollPosition;
        /** @type {?} */
        let newTop;
        /** @type {?} */
        let newLeft;
        if (target === this._document) {
            /** @type {?} */
            const viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
        }
        else {
            newTop = ((/** @type {?} */ (target))).scrollTop;
            newLeft = ((/** @type {?} */ (target))).scrollLeft;
        }
        /** @type {?} */
        const topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        const leftDifference = scrollPosition.left - newLeft;
        // Go through and update the cached positions of the scroll
        // parents that are inside the element that was scrolled.
        this.positions.forEach((/**
         * @param {?} position
         * @param {?} node
         * @return {?}
         */
        (position, node) => {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object that can be used to configure the behavior of DragRef.
 * @record
 */
function DragRefConfig() { }
if (false) {}
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
const activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Internal compile-time-only representation of a `DragRef`.
 * Used to avoid circular import issues between the `DragRef` and the `DropListRef`.
 * \@docs-private
 * @record
 */
function DragRefInternal() { }
/**
 * Template that can be used to create a drag helper element (e.g. a preview or a placeholder).
 * @record
 * @template T
 */
function DragHelperTemplate() { }
if (false) {}
/**
 * Template that can be used to create a drag preview element.
 * @record
 * @template T
 */
function DragPreviewTemplate() { }
if (false) {}
/**
 * Point on the page or within an element.
 * @record
 */
function Point() { }
if (false) {}
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * @template T
 */
class DragRef {
    /**
     * @param {?} element
     * @param {?} _config
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (this._handles.length) {
                /** @type {?} */
                const targetHandle = this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => {
                    /** @type {?} */
                    const target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
                    this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!this.disabled) {
                this._initializeDragSequence(this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();
            /** @type {?} */
            const pointerPosition = this._getPointerPositionOnPage(event);
            if (!this._hasStartedDragging) {
                /** @type {?} */
                const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
                /** @type {?} */
                const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
                /** @type {?} */
                const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
                    if (!isDelayElapsed) {
                        this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!this._dropContainer || !this._dropContainer.isDragging()) {
                        this._hasStartedDragging = true;
                        this._ngZone.run((/**
                         * @return {?}
                         */
                        () => this._startDragSequence(event)));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!this._previewRect || (!this._previewRect.width && !this._previewRect.height)) {
                    this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
            this._hasMoved = true;
            this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (this._dropContainer) {
                this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                const activeTransform = this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;
                this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;
                    this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (this._moveEvents.observers.length) {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    this._moveEvents.next({
                        source: this,
                        pointerPosition: constrainedPointerPosition,
                        event,
                        distance: this._getDragDistance(constrainedPointerPosition),
                        delta: this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._endDragSequence(event);
        });
        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        _dragDropRegistry.registerDragItem(this);
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._toggleNativeDragInteractions();
        }
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._placeholder;
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._rootElement;
    }
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     * @return {?}
     */
    getVisibleElement() {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    }
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    withHandles(handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        handle => Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle)));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => toggleNativeDragInteractions(handle, false)));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    withPreviewTemplate(template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    withPlaceholderTemplate(template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    withRootElement(rootElement) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            (/** @type {?} */ (this))._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            }));
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    withBoundaryElement(boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            () => (/** @type {?} */ (this))._containInsideBoundaryOnResize()));
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
        }
        removeNode(this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._resizeSubscription.unsubscribe();
        this._parentPositions.clear();
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._anchor = (/** @type {?} */ (null));
    }
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    }
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    disableHandle(handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    }
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    enableHandle(handle) {
        this._disabledHandles.delete(handle);
    }
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    _withDropContainer(container) {
        this._dropContainer = container;
    }
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        /** @type {?} */
        const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    setFreeDragPosition(value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    _sortFromLastPointerPosition() {
        /** @type {?} */
        const position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position));
        }
    }
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    _removeSubscriptions() {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    }
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPreview() {
        if (this._preview) {
            removeNode(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    }
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPlaceholder() {
        if (this._placeholder) {
            removeNode(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    }
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    _endDragSequence(event) {
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            () => {
                this._cleanupDragArtifacts(event);
                this._cleanupCachedDimensions();
                this._dragDropRegistry.stopDragging(this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this.ended.next({
                    source: this,
                    distance: this._getDragDistance(this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    }
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    _startDragSequence(event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        /** @type {?} */
        const dropContainer = this._dropContainer;
        if (dropContainer) {
            /** @type {?} */
            const element = this._rootElement;
            /** @type {?} */
            const parent = (/** @type {?} */ (element.parentNode));
            /** @type {?} */
            const preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            const placeholder = this._placeholder = this._createPlaceholderElement();
            /** @type {?} */
            const anchor = this._anchor = this._anchor || this._document.createComment('');
            // Insert an anchor node so that we can restore the element's position in the DOM.
            parent.insertBefore(anchor, element);
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild(parent.replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
        }
        else {
            this._initialContainer = this._initialIndex = (/** @type {?} */ (undefined));
        }
        // Important to run after we've called `start` on the parent container
        // so that it has had time to resolve its scrollable parents.
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    }
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    _initializeDragSequence(referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        const isDragging = this.isDragging();
        /** @type {?} */
        const isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        const isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        const rootElement = this._rootElement;
        /** @type {?} */
        const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @param {?} scrollEvent
         * @return {?}
         */
        scrollEvent => {
            this._updateOnScroll(scrollEvent);
        }));
        if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        // If we have a custom preview we can't know ahead of time how large it'll be so we position
        // it next to the cursor. The exception is when the consumer has opted into making the preview
        // the same size as the root element, in which case we do know the size.
        /** @type {?} */
        const previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template &&
            !previewTemplate.matchSize ? { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        const pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    }
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    _cleanupDragArtifacts(event) {
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        (/** @type {?} */ (this._anchor.parentNode)).replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = (/** @type {?} */ (this._dropContainer));
            /** @type {?} */
            const currentIndex = container.getItemIndex(this);
            /** @type {?} */
            const pointerPosition = this._getPointerPositionOnPage(event);
            /** @type {?} */
            const distance = this._getDragDistance(this._getPointerPositionOnPage(event));
            /** @type {?} */
            const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            this.ended.next({ source: this, distance });
            this.dropped.next({
                item: this,
                currentIndex,
                previousIndex: this._initialIndex,
                container: container,
                previousContainer: this._initialContainer,
                isPointerOverContainer,
                distance
            });
            container.drop(this, currentIndex, this._initialContainer, isPointerOverContainer, distance, this._initialIndex);
            this._dropContainer = this._initialContainer;
        }));
    }
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    _updateActiveDropContainer({ x, y }) {
        // Drop container that draggable has been moved into.
        /** @type {?} */
        let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                // Notify the old container that the item has left.
                this.exited.next({ item: this, container: (/** @type {?} */ (this._dropContainer)) });
                (/** @type {?} */ (this._dropContainer)).exit(this);
                // Notify the new container that the item has entered.
                this._dropContainer = (/** @type {?} */ (newContainer));
                this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
                    // If we're re-entering the initial container and sorting is disabled,
                    // put item the into its starting index to begin with.
                    newContainer.sortingDisabled ? this._initialIndex : undefined);
                this.entered.next({
                    item: this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    _createPreviewElement() {
        /** @type {?} */
        const previewConfig = this._previewTemplate;
        /** @type {?} */
        const previewClass = this.previewClass;
        /** @type {?} */
        const previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        let preview;
        if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.
            /** @type {?} */
            const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            /** @type {?} */
            const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            if (previewConfig.matchSize) {
                matchElementSize(preview, (/** @type {?} */ (rootRect)));
            }
            else {
                preview.style.transform =
                    getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
        }
        else {
            /** @type {?} */
            const element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element.getBoundingClientRect());
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: `${this._config.zIndex || 1000}`
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        if (previewClass) {
            if (Array.isArray(previewClass)) {
                previewClass.forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => preview.classList.add(className)));
            }
            else {
                preview.classList.add(previewClass);
            }
        }
        return preview;
    }
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    _animatePreviewToPlaceholder() {
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        const placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        const duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                /** @type {?} */
                const handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (!event || (event.target === this._preview && event.propertyName === 'transform')) {
                        this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                const timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                this._preview.addEventListener('transitionend', handler);
            }));
        }));
    }
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    _createPlaceholderElement() {
        /** @type {?} */
        const placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        let placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            this._placeholderRef.detectChanges();
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    }
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    _getPointerPositionInElement(referenceElement, event) {
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        const handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        const point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        const scrollPosition = this._getViewportScrollPosition();
        /** @type {?} */
        const x = point.pageX - referenceRect.left - scrollPosition.left;
        /** @type {?} */
        const y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    }
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        const point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        /** @type {?} */
        const scrollPosition = this._getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} point
     * @return {?}
     */
    _getConstrainedPointerPosition(point) {
        /** @type {?} */
        const constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            const { x: pickupX, y: pickupY } = this._pickupPositionInElement;
            /** @type {?} */
            const boundaryRect = this._boundaryRect;
            /** @type {?} */
            const previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            const minY = boundaryRect.top + pickupY;
            /** @type {?} */
            const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            const minX = boundaryRect.left + pickupX;
            /** @type {?} */
            const maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    }
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    _updatePointerDirectionDelta(pointerPositionOnPage) {
        const { x, y } = pointerPositionOnPage;
        /** @type {?} */
        const delta = this._pointerDirectionDelta;
        /** @type {?} */
        const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        const changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        const changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    }
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        const shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    }
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _removeRootElementListeners(element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    }
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    _applyRootElementTransform(x, y) {
        /** @type {?} */
        const transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    }
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    _getDragDistance(currentPosition) {
        /** @type {?} */
        const pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    }
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = undefined;
        this._parentPositions.clear();
    }
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    _containInsideBoundaryOnResize() {
        let { x, y } = this._passiveTransform;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        const boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        // It's possible that the element got hidden away after dragging (e.g. by switching to a
        // different tab). Don't do anything in this case so we don't clear the user's position.
        if ((boundaryRect.width === 0 && boundaryRect.height === 0) ||
            (elementRect.width === 0 && elementRect.height === 0)) {
            return;
        }
        /** @type {?} */
        const leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        const rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        const topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y, x });
        }
    }
    /**
     * Gets the drag start delay, based on the event type.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getDragStartDelay(event) {
        /** @type {?} */
        const value = this.dragStartDelay;
        if (typeof value === 'number') {
            return value;
        }
        else if (isTouchEvent(event)) {
            return value.touch;
        }
        return value ? value.mouse : 0;
    }
    /**
     * Updates the internal state of the draggable element when scrolling has occurred.
     * @private
     * @param {?} event
     * @return {?}
     */
    _updateOnScroll(event) {
        /** @type {?} */
        const scrollDifference = this._parentPositions.handleScroll(event);
        // ClientRect dimensions are based on the page's scroll position so
        // we have to update the cached boundary ClientRect if the user has scrolled.
        if (this._boundaryRect && scrollDifference) {
            adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
        }
    }
    /**
     * Gets the scroll position of the viewport.
     * @private
     * @return {?}
     */
    _getViewportScrollPosition() {
        /** @type {?} */
        const cachedPosition = this._parentPositions.positions.get(this._document);
        return cachedPosition ? cachedPosition.scrollPosition :
            this._viewportRuler.getViewportScrollPosition();
    }
}
if (false) {}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    const clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    const descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    const descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (let i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        const cloneCanvases = clone.querySelectorAll('canvas');
        for (let i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            const correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param {?} node Node to be removed.
 * @return {?}
 */
function removeNode(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    const rootNodes = viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return (/** @type {?} */ (rootNodes[0]));
    }
    /** @type {?} */
    const wrapper = _document.createElement('div');
    rootNodes.forEach((/**
     * @param {?} node
     * @return {?}
     */
    node => wrapper.appendChild(node)));
    return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param {?} target Element that needs to be resized.
 * @param {?} sourceRect Dimensions of the source element.
 * @return {?}
 */
function matchElementSize(target, sourceRect) {
    target.style.width = `${sourceRect.width}px`;
    target.style.height = `${sourceRect.height}px`;
    target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-utils.ts
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
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    const from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    const to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    const target = array[from];
    /** @type {?} */
    const delta = to < from ? -1 : 1;
    for (let i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drop-list-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const AUTO_SCROLL_STEP = 2;
/**
 * Entry in the position cache for draggable items.
 * \@docs-private
 * @record
 */
function CachedItemPosition() { }
if (false) {}
/** @enum {number} */
const AutoScrollVerticalDirection = {
    NONE: 0, UP: 1, DOWN: 2,
};
/** @enum {number} */
const AutoScrollHorizontalDirection = {
    NONE: 0, LEFT: 1, RIGHT: 2,
};
/**
 * Internal compile-time-only representation of a `DropListRef`.
 * Used to avoid circular import issues between the `DropListRef` and the `DragRef`.
 * \@docs-private
 * @record
 */
function DropListRefInternal() { }
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * @template T
 */
class DropListRef {
    /**
     * @param {?} element
     * @param {?} _dragDropRegistry
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     */
    constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly.
         */
        this._cachedShadowRoot = null;
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        () => {
            this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const node = this._scrollNode;
                if (this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
        this._document = _document;
        this.withScrollableParents([this.element]);
        _dragDropRegistry.registerDropContainer(this);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
    }
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._viewportScrollSubscription.unsubscribe();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._parentPositions.clear();
        this._dragDropRegistry.removeDropContainer(this);
    }
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._isDragging;
    }
    /**
     * Starts dragging an item.
     * @return {?}
     */
    start() {
        /** @type {?} */
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        this.beforeStarted.next();
        this._isDragging = true;
        // We need to disable scroll snapping while the user is dragging, because it breaks automatic
        // scrolling. The browser seems to round the value based on the snapping points which means
        // that we can't increment/decrement the scroll position.
        this._initialScrollSnap = styles.msScrollSnapType || ((/** @type {?} */ (styles))).scrollSnapType || '';
        ((/** @type {?} */ (styles))).scrollSnapType = styles.msScrollSnapType = 'none';
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._startReceiving(this)));
        this._viewportScrollSubscription.unsubscribe();
        this._listenToScrollEvents();
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?=} index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     * @return {?}
     */
    enter(item, pointerX, pointerY, index) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        let newIndex;
        if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
            if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
        }
        else {
            newIndex = index;
        }
        /** @type {?} */
        const activeDraggables = this._activeDraggables;
        /** @type {?} */
        const currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        const placeholder = item.getPlaceholderElement();
        /** @type {?} */
        let newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            const element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            /** @type {?} */
            const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
            if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
                element.insertBefore(placeholder, activeDraggables[0].getRootElement());
                activeDraggables.unshift(item);
            }
            else {
                element.appendChild(placeholder);
                activeDraggables.push(item);
            }
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed and also parent rects.
        this._cacheItemPositions();
        this._cacheParentPositions();
        this.entered.next({ item, container: this, currentIndex: this.getItemIndex(item) });
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._reset();
        this.exited.next({ item, container: this });
    }
    /**
     * Drops an item into this container.
     * \@breaking-change 11.0.0 `previousIndex` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?} distance Distance the user has dragged since the start of the dragging sequence.
     * @param {?=} previousIndex Index of the item when dragging started.
     *
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
        this._reset();
        // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.
        if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
        }
        this.dropped.next({ item,
            currentIndex,
            previousIndex,
            container: this,
            previousContainer,
            isPointerOverContainer,
            distance
        });
    }
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    withItems(items) {
        /** @type {?} */
        const previousItems = (/** @type {?} */ (this))._draggables;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item._withDropContainer((/** @type {?} */ (this)))));
        if ((/** @type {?} */ (this)).isDragging()) {
            /** @type {?} */
            const draggedItems = previousItems.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.isDragging()));
            // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.
            if (draggedItems.every((/**
             * @param {?} item
             * @return {?}
             */
            item => items.indexOf(item) === -1))) {
                (/** @type {?} */ (this))._reset();
            }
            else {
                (/** @type {?} */ (this))._cacheItems();
            }
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    connectedTo(connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    withOrientation(orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @template THIS
     * @this {THIS}
     * @param {?} elements Elements that can be scrolled.
     * @return {THIS}
     */
    withScrollableParents(elements) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])((/** @type {?} */ (this)).element);
        // We always allow the current element to be scrollable
        // so we need to ensure that it's in the array.
        (/** @type {?} */ (this))._scrollableElements =
            elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
        return (/** @type {?} */ (this));
    }
    /**
     * Gets the scrollable parents that are registered with this drop container.
     * @return {?}
     */
    getScrollableParents() {
        return this._scrollableElements;
    }
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        const items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
    }
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    isReceiving() {
        return this._activeSiblings.size > 0;
    }
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    _sortItem(item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled ||
            !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        const siblings = this._itemPositions;
        /** @type {?} */
        const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
        /** @type {?} */
        const siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        const delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        const oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        (sibling, index) => {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            const isDraggedItem = sibling.drag === item;
            /** @type {?} */
            const offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            const elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = `translate3d(${Math.round(sibling.offset)}px, 0, 0)`;
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = `translate3d(0, ${Math.round(sibling.offset)}px, 0)`;
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    }
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    _startScrollingIfNecessary(pointerX, pointerY) {
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        let scrollNode;
        /** @type {?} */
        let verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        let horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling any of the parent containers.
        this._parentPositions.positions.forEach((/**
         * @param {?} position
         * @param {?} element
         * @return {?}
         */
        (position, element) => {
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === this._document || !position.clientRect || scrollNode) {
                return;
            }
            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections((/** @type {?} */ (element)), position.clientRect, pointerX, pointerY);
                if (verticalScrollDirection || horizontalScrollDirection) {
                    scrollNode = (/** @type {?} */ (element));
                }
            }
        }));
        // Otherwise check if we can start scrolling the viewport.
        if (!verticalScrollDirection && !horizontalScrollDirection) {
            const { width, height } = this._viewportRuler.getViewportSize();
            /** @type {?} */
            const clientRect = { width, height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
            }
            else {
                this._stopScrolling();
            }
        }
    }
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    _stopScrolling() {
        this._stopScrollTimers.next();
    }
    /**
     * Caches the positions of the configured scrollable parents.
     * @private
     * @return {?}
     */
    _cacheParentPositions() {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        this._parentPositions.cache(this._scrollableElements);
        // The list element is always in the `scrollableElements`
        // so we can take advantage of the cached `ClientRect`.
        this._clientRect = (/** @type {?} */ ((/** @type {?} */ (this._parentPositions.positions.get(element))).clientRect));
    }
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    _cacheItemPositions() {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        drag => {
            /** @type {?} */
            const elementToMeasure = drag.getVisibleElement();
            return { drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    }
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    _reset() {
        this._isDragging = false;
        /** @type {?} */
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        ((/** @type {?} */ (styles))).scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const rootElement = item.getRootElement();
            if (rootElement) {
                rootElement.style.transform = '';
            }
        }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._stopReceiving(this)));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._viewportScrollSubscription.unsubscribe();
        this._parentPositions.clear();
    }
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getSiblingOffsetPx(currentIndex, siblings, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            const start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            const end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    }
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getItemOffsetPx(currentPosition, newPosition, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        let itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    }
    /**
     * Checks if pointer is entering in the first position
     * @private
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @return {?}
     */
    _shouldEnterAsFirstChild(pointerX, pointerY) {
        if (!this._activeDraggables.length) {
            return false;
        }
        /** @type {?} */
        const itemPositions = this._itemPositions;
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
        // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
        /** @type {?} */
        const reversed = itemPositions[0].drag !== this._activeDraggables[0];
        if (reversed) {
            /** @type {?} */
            const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
        }
        else {
            /** @type {?} */
            const firstItemRect = itemPositions[0].clientRect;
            return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
        }
    }
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        ({ drag, clientRect }, _, array) => {
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                const direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === this._previousSwap.drag && direction === this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
        }));
    }
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    _cacheItems() {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheParentPositions();
    }
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    _isOverContainer(x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    }
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _getSiblingContainerFromPosition(item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._canReceive(item, x, y)));
    }
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _canReceive(item, x, y) {
        if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
        }
        /** @type {?} */
        const elementFromPoint = (/** @type {?} */ (this._getShadowRoot().elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    }
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    _startReceiving(sibling) {
        /** @type {?} */
        const activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheParentPositions();
            this._listenToScrollEvents();
        }
    }
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    _stopReceiving(sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    }
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    _listenToScrollEvents() {
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.isDragging()) {
                /** @type {?} */
                const scrollDifference = this._parentPositions.handleScroll(event);
                if (scrollDifference) {
                    // Since we know the amount that the user has scrolled we can shift all of the
                    // client rectangles ourselves. This is cheaper than re-measuring everything and
                    // we can avoid inconsistent behavior where we might be measuring the element before
                    // its position has changed.
                    this._itemPositions.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ clientRect }) => {
                        adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                    }));
                    // We need two loops for this, because we want all of the cached
                    // positions to be up-to-date before we re-sort the item.
                    this._itemPositions.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ drag }) => {
                        if (this._dragDropRegistry.isDragging(drag)) {
                            // We need to re-sort the item manually, because the pointer move
                            // events won't be dispatched while the user is scrolling.
                            drag._sortFromLastPointerPosition();
                        }
                    }));
                }
            }
            else if (this.isReceiving()) {
                this._cacheParentPositions();
            }
        }));
    }
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     * @private
     * @return {?}
     */
    _getShadowRoot() {
        if (!this._cachedShadowRoot) {
            /** @type {?} */
            const shadowRoot = (/** @type {?} */ (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element))));
            this._cachedShadowRoot = shadowRoot || this._document;
        }
        return this._cachedShadowRoot;
    }
}
if (false) {}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    const { top, bottom, height } = clientRect;
    /** @type {?} */
    const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    const { left, right, width } = clientRect;
    /** @type {?} */
    const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    let verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    let horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        const scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        const scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-registry.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
const activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
class DragDropRegistry {
    /**
     * @param {?} _ngZone
     * @param {?} _document
     */
    constructor(_ngZone, _document) {
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    registerDropContainer(drop) {
        if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
        }
    }
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    registerDragItem(drag) {
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                this._document.addEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    }
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    removeDropContainer(drop) {
        this._dropInstances.delete(drop);
    }
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    removeDragItem(drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    startDragging(drag, event) {
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            const isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerMove.next((/** @type {?} */ (e)))),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerUp.next((/** @type {?} */ (e)))),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.scroll.next(e)),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                (config, name) => {
                    this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    }
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    stopDragging(drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    }
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    isDragging(drag) {
        return this._activeDragInstances.has(drag);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDragItem(instance)));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDropContainer(instance)));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    }
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    _clearGlobalListeners() {
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        (config, name) => {
            this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    }
}
DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) { return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
/** @nocollapse */
DragDropRegistry.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
/** @nocollapse */ DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
const DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
    /**
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    createDrag(element, config = DEFAULT_CONFIG) {
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    createDropList(element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
}
DragDrop.ɵfac = function DragDrop_Factory(t) { return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry)); };
/** @nocollapse */
DragDrop.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] },
    { type: DragDropRegistry }
];
/** @nocollapse */ DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] }, { type: DragDropRegistry }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-events.ts
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
 * Event emitted when the user starts dragging a draggable.
 * @record
 * @template T
 */
function CdkDragStart() { }
if (false) {}
/**
 * Event emitted when the user releases an item, before any animations have started.
 * @record
 * @template T
 */
function CdkDragRelease() { }
if (false) {}
/**
 * Event emitted when the user stops dragging a draggable.
 * @record
 * @template T
 */
function CdkDragEnd() { }
if (false) {}
/**
 * Event emitted when the user moves an item into a new drop container.
 * @record
 * @template T, I
 */
function CdkDragEnter() { }
if (false) {}
/**
 * Event emitted when the user removes an item from a
 * drop container by moving it into another one.
 * @record
 * @template T, I
 */
function CdkDragExit() { }
if (false) {}
/**
 * Event emitted when the user drops a draggable item inside a drop container.
 * @record
 * @template T, O
 */
function CdkDragDrop() { }
if (false) {}
/**
 * Event emitted as the user is dragging a draggable item.
 * @record
 * @template T
 */
function CdkDragMove() { }
if (false) {}
/**
 * Event emitted when the user swaps the position of two drag items.
 * @record
 * @template T, I
 */
function CdkDragSortEvent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-parent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-handle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
class CdkDragHandle {
    /**
     * @param {?} element
     * @param {?=} parentDrag
     */
    constructor(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    /**
     * Whether starting to drag through this handle is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._stateChanges.next(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) { return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8)); };
CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragHandle, selectors: [["", "cdkDragHandle", ""]], hostAttrs: [1, "cdk-drag-handle"], inputs: { disabled: ["cdkDragHandleDisabled", "disabled"] } });
/** @nocollapse */
CdkDragHandle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
CdkDragHandle.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragHandleDisabled',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDragHandle]',
                host: {
                    'class': 'cdk-drag-handle'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_PARENT]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-placeholder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
class CdkDragPlaceholder {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) { return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPlaceholder, selectors: [["ng-template", "cdkDragPlaceholder", ""]], inputs: { data: "data" } });
/** @nocollapse */
CdkDragPlaceholder.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPlaceholder.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPlaceholder]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-preview.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
class CdkDragPreview {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    /**
     * Whether the preview should preserve the same size as the item that is being dragged.
     * @return {?}
     */
    get matchSize() { return this._matchSize; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matchSize(value) { this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
}
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) { return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPreview, selectors: [["ng-template", "cdkDragPreview", ""]], inputs: { matchSize: "matchSize", data: "data" } });
/** @nocollapse */
CdkDragPreview.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPreview.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    matchSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPreview]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 * @type {?}
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
/**
 * Object that can be used to configure the drag
 * items and drop lists within a module or a component.
 * @record
 */
function DragDropConfig() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
class CdkDrag {
    /**
     * @param {?} element
     * @param {?} dropContainer
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewContainerRef
     * @param {?} config
     * @param {?} _dir
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     */
    constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const subscription = this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            movedEvent => ({
                source: this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            })))).subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ?
                config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ?
                config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
        });
        this._dragRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.
        if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);
            dropContainer.addItem(this);
        }
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (this.dropContainer && this.dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._dragRef.getRootElement();
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._updateRootElement();
            // Listen for any newly-added handles.
            this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                /** @type {?} */
                const childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle._parentDrag === this))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle.element));
                this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                return (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })))));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            handleInstance => {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                const dragRef = this._dragRef;
                /** @type {?} */
                const handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (this.freeDragPosition) {
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        const positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dropContainer) {
            this.dropContainer.removeItem(this);
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    }
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    _updateRootElement() {
        /** @type {?} */
        const element = this.element.nativeElement;
        /** @type {?} */
        const rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error(`cdkDrag must be attached to an element node. ` +
                `Currently attached to "${rootElement.nodeName}".`);
        }
        this._dragRef.withRootElement(rootElement || element);
    }
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    _getBoundaryElement() {
        /** @type {?} */
        const boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    }
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _syncInputs(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            if (!ref.isDragging()) {
                /** @type {?} */
                const dir = this._dir;
                /** @type {?} */
                const dragStartDelay = this.dragStartDelay;
                /** @type {?} */
                const placeholder = this._placeholderTemplate ? {
                    template: this._placeholderTemplate.templateRef,
                    context: this._placeholderTemplate.data,
                    viewContainer: this._viewContainerRef
                } : null;
                /** @type {?} */
                const preview = this._previewTemplate ? {
                    template: this._previewTemplate.templateRef,
                    context: this._previewTemplate.data,
                    matchSize: this._previewTemplate.matchSize,
                    viewContainer: this._viewContainerRef
                } : null;
                ref.disabled = this.disabled;
                ref.lockAxis = this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = this.constrainPosition;
                ref.previewClass = this.previewClass;
                ref
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    }
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.started.subscribe((/**
         * @return {?}
         */
        () => {
            this.started.emit({ source: this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        () => {
            this.released.emit({ source: this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.ended.emit({ source: this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: event.container.data,
                item: this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: event.container.data,
                item: this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: this,
                distance: event.distance
            });
        }));
    }
    /**
     * Assigns the default input values based on a provided config object.
     * @private
     * @param {?} config
     * @return {?}
     */
    _assignDefaults(config) {
        const { lockAxis, dragStartDelay, constrainPosition, previewClass, boundaryElement, draggingDisabled, rootElementSelector } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.dragStartDelay = dragStartDelay || 0;
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
        if (constrainPosition) {
            this.constrainPosition = constrainPosition;
        }
        if (previewClass) {
            this.previewClass = previewClass;
        }
        if (boundaryElement) {
            this.boundaryElement = boundaryElement;
        }
        if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
        }
    }
}
CdkDrag.ɵfac = function CdkDrag_Factory(t) { return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDrag, selectors: [["", "cdkDrag", ""]], contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    } }, hostAttrs: [1, "cdk-drag"], hostVars: 4, hostBindings: function CdkDrag_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    } }, inputs: { disabled: ["cdkDragDisabled", "disabled"], dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"], lockAxis: ["cdkDragLockAxis", "lockAxis"], constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"], previewClass: ["cdkDragPreviewClass", "previewClass"], boundaryElement: ["cdkDragBoundary", "boundaryElement"], rootElementSelector: ["cdkDragRootElement", "rootElementSelector"], data: ["cdkDragData", "data"], freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"] }, outputs: { started: "cdkDragStarted", released: "cdkDragReleased", ended: "cdkDragEnded", entered: "cdkDragEntered", exited: "cdkDragExited", dropped: "cdkDragDropped", moved: "cdkDragMoved" }, exportAs: ["cdkDrag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
CdkDrag.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
CdkDrag.propDecorators = {
    _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
    _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPreview,] }],
    _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPlaceholder,] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragData',] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragLockAxis',] }],
    rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragRootElement',] }],
    boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragBoundary',] }],
    dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragStartDelay',] }],
    freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragFreeDragPosition',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragDisabled',] }],
    constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragConstrainPosition',] }],
    previewClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragPreviewClass',] }],
    started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragStarted',] }],
    released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragReleased',] }],
    ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEnded',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragExited',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragDropped',] }],
    moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragMoved',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': 'cdk-drag',
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DROP_LIST]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
        }], released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
        }], ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
        }], moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
        }], dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
        }], constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
        }], previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
        }], boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
        }], rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
        }], _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CdkDragHandle, { descendants: true }]
        }], _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPreview]
        }], _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkDragPlaceholder]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
        }], freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
        }] }); })();
if (false) {}
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    let currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drop-list-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
class CdkDropListGroup {
    constructor() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    /**
     * Whether starting a dragging sequence from inside this group is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._items.clear();
    }
}
CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) { return new (t || CdkDropListGroup)(); };
CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropListGroup, selectors: [["", "cdkDropListGroup", ""]], inputs: { disabled: ["cdkDropListGroupDisabled", "disabled"] }, exportAs: ["cdkDropListGroup"] });
CdkDropListGroup.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListGroupDisabled',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropListGroup]',
                exportAs: 'cdkDropListGroup'
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drop-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Internal compile-time-only representation of a `CdkDropList`.
 * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
 * \@docs-private
 * @record
 */
function CdkDropListInternal() { }
const ɵ0 = undefined;
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
class CdkDropList {
    /**
     * @param {?} element
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     * @param {?=} _dir
     * @param {?=} _group
     * @param {?=} _scrollDispatcher
     * @param {?=} config
     */
    constructor(element, dragDrop, _changeDetectorRef, _dir, _group, _scrollDispatcher, config) {
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */
        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        (drag, drop) => {
            return this.enterPredicate(drag.data, drop.data);
        });
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    /**
     * Whether starting a dragging sequence from this container is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (!!this._group && this._group.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        // Usually we sync the directive and ref state right before dragging starts, in order to have
        // a single point of failure and to avoid having to use setters for everything. `disabled` is
        // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
        // the user in a disabled state, so we also need to sync it as it's being set.
        this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * Registers an items with the drop list.
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /**
     * Removes an item from the drop list.
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /**
     * Gets the registered items in the list, sorted by their position in the DOM.
     * @return {?}
     */
    getSortedItems() {
        return Array.from(this._unsortedItems).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    start() {
        this._dropListRef.start();
    }
    /**
     * Drops an item into this container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     *
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, { x: 0, y: 0 });
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    enter(item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._dropListRef.exit(item._dragRef);
    }
    /**
     * Figures out the index of an item in the container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    }
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _setupInputSyncSubscription(ref) {
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => ref.withDirection(value)));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            drop => {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    list => list.id === drop)))) : drop;
            }));
            if (this._group) {
                this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                drop => {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
            if (!this._scrollableParentsResolved && this._scrollDispatcher) {
                /** @type {?} */
                const scrollableParents = this._scrollDispatcher
                    .getAncestorScrollContainers(this.element)
                    .map((/**
                 * @param {?} scrollable
                 * @return {?}
                 */
                scrollable => scrollable.getElementRef().nativeElement));
                this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                this._scrollableParentsResolved = true;
            }
            ref.disabled = this.disabled;
            ref.lockAxis = this.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.autoScrollDisabled);
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            drop => drop && drop !== this)).map((/**
             * @param {?} list
             * @return {?}
             */
            list => list._dropListRef)))
                .withOrientation(this.orientation);
        }));
    }
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            this._syncItemsWithRef();
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: this,
                item: event.item.data
            });
            this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * Assigns the default input values based on a provided config object.
     * @private
     * @param {?} config
     * @return {?}
     */
    _assignDefaults(config) {
        const { lockAxis, draggingDisabled, sortingDisabled, listAutoScrollDisabled, listOrientation } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    }
    /**
     * Syncs up the registered drag items with underlying drop list ref.
     * @private
     * @return {?}
     */
    _syncItemsWithRef() {
        this._dropListRef.withItems(this.getSortedItems().map((/**
         * @param {?} item
         * @return {?}
         */
        item => item._dragRef)));
    }
}
CdkDropList.ɵfac = function CdkDropList_Factory(t) { return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkDropListGroup, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8)); };
CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropList, selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]], hostAttrs: [1, "cdk-drop-list"], hostVars: 7, hostBindings: function CdkDropList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    } }, inputs: { connectedTo: ["cdkDropListConnectedTo", "connectedTo"], id: "id", enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"], disabled: ["cdkDropListDisabled", "disabled"], sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"], autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"], orientation: ["cdkDropListOrientation", "orientation"], lockAxis: ["cdkDropListLockAxis", "lockAxis"], data: ["cdkDropListData", "data"] }, outputs: { dropped: "cdkDropListDropped", entered: "cdkDropListEntered", exited: "cdkDropListExited", sorted: "cdkDropListSorted" }, exportAs: ["cdkDropList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Prevent child drop lists from picking up the same group as their parent.
            { provide: CdkDropListGroup, useValue: ɵ0 },
            { provide: CDK_DROP_LIST, useExisting: CdkDropList },
        ])] });
/**
 * Keeps track of the drop lists that are currently on the page.
 */
CdkDropList._dropLists = [];
/** @nocollapse */
CdkDropList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] }
];
CdkDropList.propDecorators = {
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListConnectedTo',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListData',] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListOrientation',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListLockAxis',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListDisabled',] }],
    sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListSortingDisabled',] }],
    enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListEnterPredicate',] }],
    autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListDropped',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListExited',] }],
    sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListSorted',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropList], cdk-drop-list',
                exportAs: 'cdkDropList',
                providers: [
                    // Prevent child drop lists from picking up the same group as their parent.
                    { provide: CdkDropListGroup, useValue: ɵ0 },
                    { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                ],
                host: {
                    'class': 'cdk-drop-list',
                    '[id]': 'id',
                    '[class.cdk-drop-list-disabled]': 'disabled',
                    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: CdkDropListGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }]; }, { connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
        }], sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
        }], sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
        }], autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDropModule {
}
DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DragDropModule });
DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DragDropModule_Factory(t) { return new (t || DragDropModule)(); }, providers: [
        DragDrop,
    ], imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, { declarations: function () { return [CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
        CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=drag-drop.js.map

/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \************************************************************************/
/*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");












/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-config.ts
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
 * Possible overrides for a dialog's position.
 * @record
 */






function MatDialogContainer_ng_template_0_Template(rf, ctx) { }
function DialogPosition() { }
if (false) {}
/**
 * Configuration for opening a modal dialog with the MatDialog service.
 * @template D
 */
class MatDialogConfig {
    constructor() {
        /**
         * The ARIA role of the dialog element.
         */
        this.role = 'dialog';
        /**
         * Custom class for the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Custom class for the backdrop.
         */
        this.backdropClass = '';
        /**
         * Whether the user can use escape or clicking on the backdrop to close the modal.
         */
        this.disableClose = false;
        /**
         * Width of the dialog.
         */
        this.width = '';
        /**
         * Height of the dialog.
         */
        this.height = '';
        /**
         * Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw.
         */
        this.maxWidth = '80vw';
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * ID of the element that describes the dialog.
         */
        this.ariaDescribedBy = null;
        /**
         * ID of the element that labels the dialog.
         */
        this.ariaLabelledBy = null;
        /**
         * Aria label to assign to the dialog element.
         */
        this.ariaLabel = null;
        /**
         * Whether the dialog should focus the first focusable element on open.
         */
        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by MatDialog.
 * \@docs-private
 * @type {?}
 */
const matDialogAnimations = {
    /**
     * Animation that is applied on the dialog container by defalt.
     */
    dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('dialogContainer', [
        // Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ transform: 'none' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ transform: 'none', opacity: 1 }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0 }))),
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * \@docs-private
 * @return {?}
 */
function throwMatDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * \@docs-private
 */
class MatDialogContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     * @param {?} _changeDetectorRef
     * @param {?} _document
     * @param {?} _config
     */
    constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        super();
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._changeDetectorRef = _changeDetectorRef;
        this._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */
        this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */
        this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */
        this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */
        this.attachDomPortal = (/**
         * @param {?} portal
         * @return {?}
         */
        (portal) => {
            if (this._portalOutlet.hasAttached()) {
                throwMatDialogContentAlreadyAttachedError();
            }
            this._setupFocusTrap();
            return this._portalOutlet.attachDomPortal(portal);
        });
        this._ariaLabelledBy = _config.ariaLabelledBy || null;
        this._document = _document;
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._setupFocusTrap();
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @template C
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._setupFocusTrap();
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /**
     * Moves focus back into the dialog if it was moved out.
     * @return {?}
     */
    _recaptureFocus() {
        if (!this._containsFocus()) {
            /** @type {?} */
            const focusWasTrapped = this._focusTrap.focusInitialElement();
            if (!focusWasTrapped) {
                this._elementRef.nativeElement.focus();
            }
        }
    }
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    _trapFocus() {
        // If we were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
        else if (!this._containsFocus()) {
            // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.
            this._elementRef.nativeElement.focus();
        }
    }
    /**
     * Restores focus to the element that was focused before the dialog opened.
     * @private
     * @return {?}
     */
    _restoreFocus() {
        /** @type {?} */
        const toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            const activeElement = this._document.activeElement;
            /** @type {?} */
            const element = this._elementRef.nativeElement;
            // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.
            if (!activeElement || activeElement === this._document.body || activeElement === element ||
                element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
    /**
     * Sets up the focus trand and saves a reference to the
     * element that was focused before the dialog was opened.
     * @private
     * @return {?}
     */
    _setupFocusTrap() {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this._document.activeElement));
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the dialog immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this._elementRef.nativeElement.focus()));
            }
        }
    }
    /**
     * Returns whether focus is inside the dialog.
     * @private
     * @return {?}
     */
    _containsFocus() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        const activeElement = this._document.activeElement;
        return element === activeElement || element.contains(activeElement);
    }
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    _onAnimationDone(event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else if (event.toState === 'exit') {
            this._restoreFocus();
        }
        this._animationStateChanged.emit(event);
    }
    /**
     * Callback, invoked when an animation on the host starts.
     * @param {?} event
     * @return {?}
     */
    _onAnimationStart(event) {
        this._animationStateChanged.emit(event);
    }
    /**
     * Starts the dialog exit animation.
     * @return {?}
     */
    _startExitAnimation() {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    }
}
MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) { return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig)); };
MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatDialogContainer, selectors: [["mat-dialog-container"]], viewQuery: function MatDialogContainer_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"], hostVars: 6, hostBindings: function MatDialogContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) { return ctx._onAnimationStart($event); })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) { return ctx._onAnimationDone($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._id)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@dialogContainer", ctx._state);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatDialogContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matDialogAnimations.dialogContainer] } });
/** @nocollapse */
MatDialogContainer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: MatDialogConfig }
];
MatDialogContainer.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-dialog-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                animations: [matDialogAnimations.dialogContainer],
                host: {
                    'class': 'mat-dialog-container',
                    'tabindex': '-1',
                    'aria-modal': 'true',
                    '[attr.id]': '_id',
                    '[attr.role]': '_config.role',
                    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
                    '[attr.aria-label]': '_config.ariaLabel',
                    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
                    '[@dialogContainer]': '_state',
                    '(@dialogContainer.start)': '_onAnimationStart($event)',
                    '(@dialogContainer.done)': '_onAnimationDone($event)'
                },
                styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: MatDialogConfig }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.
/** @type {?} */
let uniqueId = 0;
/** @enum {number} */
const MatDialogState = {
    OPEN: 0, CLOSING: 1, CLOSED: 2,
};
/**
 * Reference to a dialog opened via the MatDialog service.
 * @template T, R
 */
class MatDialogRef {
    /**
     * @param {?} _overlayRef
     * @param {?} _containerInstance
     * @param {?=} id
     */
    constructor(_overlayRef, _containerInstance, id = `mat-dialog-${uniqueId++}`) {
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */
        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */
        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Current state of the dialog.
         */
        this._state = 0 /* OPEN */;
        // Pass the id along to the container.
        _containerInstance._id = id;
        // Emit when opening animation completes
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'enter')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._afterOpened.next();
            this._afterOpened.complete();
        }));
        // Dispose overlay when closing animation is complete
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'exit')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((/**
         * @return {?}
         */
        () => {
            clearTimeout(this._closeFallbackTimeout);
            this._finishDialogClose();
        }));
        _overlayRef.detachments().subscribe((/**
         * @return {?}
         */
        () => {
            this._beforeClosed.next(this._result);
            this._beforeClosed.complete();
            this._afterClosed.next(this._result);
            this._afterClosed.complete();
            this.componentInstance = (/** @type {?} */ (null));
            this._overlayRef.dispose();
        }));
        _overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !this.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.preventDefault();
            this.close();
        }));
        _overlayRef.backdropClick().subscribe((/**
         * @return {?}
         */
        () => {
            if (this.disableClose) {
                this._containerInstance._recaptureFocus();
            }
            else {
                this.close();
            }
        }));
    }
    /**
     * Close the dialog.
     * @param {?=} dialogResult Optional result to return to the dialog opener.
     * @return {?}
     */
    close(dialogResult) {
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'start')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this._beforeClosed.next(dialogResult);
            this._beforeClosed.complete();
            this._overlayRef.detachBackdrop();
            // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.
            this._closeFallbackTimeout = setTimeout((/**
             * @return {?}
             */
            () => this._finishDialogClose()), event.totalTime + 100);
        }));
        this._containerInstance._startExitAnimation();
        this._state = 1 /* CLOSING */;
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @return {?}
     */
    afterOpened() {
        return this._afterOpened.asObservable();
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     * @return {?}
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     * @return {?}
     */
    beforeClosed() {
        return this._beforeClosed.asObservable();
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @template THIS
     * @this {THIS}
     * @param {?=} position New dialog position.
     * @return {THIS}
     */
    updatePosition(position) {
        /** @type {?} */
        let strategy = (/** @type {?} */ (this))._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        (/** @type {?} */ (this))._overlayRef.updatePosition();
        return (/** @type {?} */ (this));
    }
    /**
     * Updates the dialog's width and height.
     * @template THIS
     * @this {THIS}
     * @param {?=} width New width of the dialog.
     * @param {?=} height New height of the dialog.
     * @return {THIS}
     */
    updateSize(width = '', height = '') {
        (/** @type {?} */ (this))._getPositionStrategy().width(width).height(height);
        (/** @type {?} */ (this))._overlayRef.updatePosition();
        return (/** @type {?} */ (this));
    }
    /**
     * Add a CSS class or an array of classes to the overlay pane.
     * @template THIS
     * @this {THIS}
     * @param {?} classes
     * @return {THIS}
     */
    addPanelClass(classes) {
        (/** @type {?} */ (this))._overlayRef.addPanelClass(classes);
        return (/** @type {?} */ (this));
    }
    /**
     * Remove a CSS class or an array of classes from the overlay pane.
     * @template THIS
     * @this {THIS}
     * @param {?} classes
     * @return {THIS}
     */
    removePanelClass(classes) {
        (/** @type {?} */ (this))._overlayRef.removePanelClass(classes);
        return (/** @type {?} */ (this));
    }
    /**
     * Gets the current state of the dialog's lifecycle.
     * @return {?}
     */
    getState() {
        return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     * @private
     * @return {?}
     */
    _finishDialogClose() {
        this._state = 2 /* CLOSED */;
        this._overlayRef.dispose();
    }
    /**
     * Fetches the position strategy object from the overlay ref.
     * @private
     * @return {?}
     */
    _getPositionStrategy() {
        return (/** @type {?} */ (this._overlayRef.getConfig().positionStrategy));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to access the data that was passed in to a dialog.
 * @type {?}
 */
const MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
/**
 * Injection token that can be used to specify default dialog options.
 * @type {?}
 */
const MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 * @type {?}
 */
const MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.block());
}
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.block());
}
/**
 * \@docs-private
 * @type {?}
 */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Service to open Material Design modal dialogs.
 */
class MatDialog {
    /**
     * @param {?} _overlay
     * @param {?} _injector
     * @param {?} _location
     * @param {?} _defaultOptions
     * @param {?} scrollStrategy
     * @param {?} _parentDialog
     * @param {?} _overlayContainer
     */
    constructor(_overlay, _injector, 
    /**
     * @deprecated `_location` parameter to be removed.
     * @breaking-change 10.0.0
     */
    _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._ariaHiddenElements = new Map();
        // TODO (jelbourn): tighten the typing right-hand side of this expression.
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])((/**
         * @return {?}
         */
        () => this.openDialogs.length ?
            this._afterAllClosed :
            this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined))))));
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * Keeps track of the currently-open dialogs.
     * @return {?}
     */
    get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /**
     * Stream that emits when a dialog has been opened.
     * @return {?}
     */
    get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    /**
     * @return {?}
     */
    get _afterAllClosed() {
        /** @type {?} */
        const parent = this._parentDialog;
        return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
    }
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @return {?} Reference to the newly-opened dialog.
     */
    open(componentOrTemplateRef, config) {
        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
        if (config.id && this.getDialogById(config.id)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        /** @type {?} */
        const overlayRef = this._createOverlay(config);
        /** @type {?} */
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        /** @type {?} */
        const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        // If this is the first dialog that we're opening, hide all the non-overlay content.
        if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        () => this._removeOpenDialog(dialogRef)));
        this.afterOpened.next(dialogRef);
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    closeAll() {
        this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param {?} id ID to use when looking up the dialog.
     * @return {?}
     */
    getDialogById(id) {
        return this.openDialogs.find((/**
         * @param {?} dialog
         * @return {?}
         */
        dialog => dialog.id === id));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Only close the dialogs at this level on destroy
        // since the parent service may still be active.
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @private
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the OverlayRef for the created overlay.
     */
    _createOverlay(config) {
        /** @type {?} */
        const overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an overlay config from a dialog config.
     * @private
     * @param {?} dialogConfig The dialog configuration.
     * @return {?} The overlay configuration.
     */
    _getOverlayConfig(dialogConfig) {
        /** @type {?} */
        const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    }
    /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @private
     * @param {?} overlay Reference to the dialog's underlying overlay.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to a ComponentRef for the attached container.
     */
    _attachDialogContainer(overlay, config) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [{ provide: MatDialogConfig, useValue: config }]
        });
        /** @type {?} */
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
        /** @type {?} */
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
     * @param {?} overlayRef Reference to the overlay in which the dialog resides.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
     */
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        /** @type {?} */
        const dialogRef = new MatDialogRef(overlayRef, dialogContainer, config.id);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({ $implicit: config.data, dialogRef }))));
        }
        else {
            /** @type {?} */
            const injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */
            const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @private
     * @template T
     * @param {?} config Config object that is used to construct the dialog.
     * @param {?} dialogRef Reference to the dialog.
     * @param {?} dialogContainer
     * @return {?} The custom injector that can be used inside the dialog.
     */
    _createInjector(config, dialogRef, dialogContainer) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
        // content are created out of the same ViewContainerRef and as such, are siblings for injector
        // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
        // added to the injection tokens.
        /** @type {?} */
        const providers = [
            { provide: MatDialogContainer, useValue: dialogContainer },
            { provide: MAT_DIALOG_DATA, useValue: config.data },
            { provide: MatDialogRef, useValue: dialogRef }
        ];
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
            providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                useValue: { value: config.direction, change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])() }
            });
        }
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({ parent: userInjector || this._injector, providers });
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @private
     * @param {?} dialogRef Dialog to be removed.
     * @return {?}
     */
    _removeOpenDialog(dialogRef) {
        /** @type {?} */
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach((/**
                 * @param {?} previousValue
                 * @param {?} element
                 * @return {?}
                 */
                (previousValue, element) => {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                }));
                this._ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     * @private
     * @return {?}
     */
    _hideNonDialogContentFromAssistiveTechnology() {
        /** @type {?} */
        const overlayContainer = this._overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            /** @type {?} */
            const siblings = overlayContainer.parentElement.children;
            for (let i = siblings.length - 1; i > -1; i--) {
                /** @type {?} */
                let sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    }
    /**
     * Closes all of the dialogs in an array.
     * @private
     * @param {?} dialogs
     * @return {?}
     */
    _closeDialogs(dialogs) {
        /** @type {?} */
        let i = dialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
        }
    }
}
MatDialog.ɵfac = function MatDialog_Factory(t) { return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"])); };
MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MatDialog, factory: MatDialog.ɵfac });
/** @nocollapse */
MatDialog.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: MatDialogConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_SCROLL_STRATEGY,] }] },
    { type: MatDialog, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: MatDialogConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_DIALOG_SCROLL_STRATEGY]
            }] }, { type: MatDialog, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }]; }, null); })();
if (false) {}
/**
 * Applies default options to the dialog config.
 * @param {?=} config Config to be modified.
 * @param {?=} defaultOptions Default options provided.
 * @return {?} The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-content-directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique IDs for dialog elements.
 * @type {?}
 */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
class MatDialogClose {
    /**
     * @param {?} dialogRef
     * @param {?} _elementRef
     * @param {?} _dialog
     */
    constructor(dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Default to "button" to prevents accidental form submits.
         */
        this.type = 'button';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = (/** @type {?} */ (getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
}
MatDialogClose.ɵfac = function MatDialogClose_Factory(t) { return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogClose, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function MatDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    } }, inputs: { type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], ariaLabel: ["aria-label", "ariaLabel"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MatDialogClose.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatDialog }
];
MatDialogClose.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dialogResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-dialog-close',] }],
    _matDialogClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matDialogClose',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[mat-dialog-close], [matDialogClose]',
                exportAs: 'matDialogClose',
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.type]': 'type'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: MatDialog }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mat-dialog-close']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matDialogClose']
        }] }); })();
if (false) {}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
class MatDialogTitle {
    /**
     * @param {?} _dialogRef
     * @param {?} _elementRef
     * @param {?} _dialog
     */
    constructor(_dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = `mat-dialog-title-${dialogElementUid++}`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._dialogRef) {
            this._dialogRef = (/** @type {?} */ (getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
        if (this._dialogRef) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const container = this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = this.id;
                }
            }));
        }
    }
}
MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) { return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogTitle, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-dialog-title"], hostVars: 1, hostBindings: function MatDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
    } }, inputs: { id: "id" }, exportAs: ["matDialogTitle"] });
/** @nocollapse */
MatDialogTitle.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatDialog }
];
MatDialogTitle.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[mat-dialog-title], [matDialogTitle]',
                exportAs: 'matDialogTitle',
                host: {
                    'class': 'mat-dialog-title',
                    '[id]': 'id'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: MatDialog }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}
/**
 * Scrollable content container of a dialog.
 */
class MatDialogContent {
}
MatDialogContent.ɵfac = function MatDialogContent_Factory(t) { return new (t || MatDialogContent)(); };
MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogContent, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-dialog-content"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
                host: { 'class': 'mat-dialog-content' }
            }]
    }], null, null); })();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
class MatDialogActions {
}
MatDialogActions.ɵfac = function MatDialogActions_Factory(t) { return new (t || MatDialogActions)(); };
MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogActions, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-dialog-actions"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
                host: { 'class': 'mat-dialog-actions' }
            }]
    }], null, null); })();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param {?} element Element relative to which to look for a dialog.
 * @param {?} openDialogs References to the currently-open dialogs.
 * @return {?}
 */
function getClosestDialog(element, openDialogs) {
    /** @type {?} */
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find((/**
     * @param {?} dialog
     * @return {?}
     */
    dialog => dialog.id === (/** @type {?} */ (parent)).id)) : null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatDialogModule {
}
MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatDialogModule });
MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MatDialogModule_Factory(t) { return new (t || MatDialogModule)(); }, providers: [
        MatDialog,
        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, { declarations: function () { return [MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogContent,
                    MatDialogActions,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                declarations: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogActions,
                    MatDialogContent,
                ],
                providers: [
                    MatDialog,
                    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [MatDialogContainer]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "./src/app/components/select/select.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






function SelectComponent_mat_form_field_0_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.viewValue, " ");
} }
function SelectComponent_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SelectComponent_mat_form_field_0_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectedChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_mat_form_field_0_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.items);
} }
class SelectComponent {
    constructor() {
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.selectedItem) {
            this.selectedValue = this.items.find(item => item.value === this.selectedItem).value;
            this.selectedChange.emit(this.selectedValue);
        }
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { label: "label", items: "items", selectedItem: "selectedItem" }, outputs: { selectedChange: "selectedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "select-wrapper", "appearance", "fill", "floatLabel", "never", 4, "ngIf"], ["appearance", "fill", "floatLabel", "never", 1, "select-wrapper"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectComponent_mat_form_field_0_Template, 5, 3, "mat-form-field", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.select-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlbGVjdFxcc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWxlY3Qtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlbGVjdC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss']
            }]
    }], null, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/select/select.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/select/select.module.ts ***!
  \****************************************************/
/*! exports provided: SelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return SelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/select/select.component */ "./src/app/components/select/select.component.ts");






class SelectModule {
}
SelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SelectModule });
SelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SelectModule_Factory(t) { return new (t || SelectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectModule, { declarations: [_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]], exports: [_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                ],
                exports: [_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/task-status-menu/task-status-menu.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/task-status-menu/task-status-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: TaskStatusMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusMenuComponent", function() { return TaskStatusMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mocks_task_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mocks/task-menu-items */ "./src/app/mocks/task-menu-items.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TaskStatusMenuComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskStatusMenuComponent_ng_container_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.processTaskStatus(item_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r60.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r60.iconClass);
} }
function TaskStatusMenuComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskStatusMenuComponent_ng_container_7_div_1_Template, 3, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r60.list !== ctx_r59.currentList);
} }
class TaskStatusMenuComponent {
    constructor() {
        this.addNewTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeTaskItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateTaskStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleTaskPriority = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.items = _mocks_task_menu_items__WEBPACK_IMPORTED_MODULE_1__["TASK_MENU_ITEMS"];
    }
    changePriority() {
        this.item.isPriority = !this.item.isPriority;
        this.toggleTaskPriority.emit(this.item);
    }
    removeSelectedTask() {
        this.removeTaskItem.emit(this.getSelectedItemData());
    }
    processTaskStatus(item) {
        const data = this.getSelectedItemData(item);
        this.item.status = item.status;
        this.item.list = data.toList;
        this.updateTaskStatus.emit(this.getSelectedItemData(item));
    }
    getSelectedItemData(item) {
        var _a;
        return {
            fromList: this.currentList,
            toList: (_a = item) === null || _a === void 0 ? void 0 : _a.list,
            itemId: Number(this.item.id)
        };
    }
}
TaskStatusMenuComponent.ɵfac = function TaskStatusMenuComponent_Factory(t) { return new (t || TaskStatusMenuComponent)(); };
TaskStatusMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskStatusMenuComponent, selectors: [["app-task-status-menu"]], inputs: { item: "item", currentList: "currentList" }, outputs: { addNewTask: "addNewTask", removeTaskItem: "removeTaskItem", updateTaskStatus: "updateTaskStatus", toggleTaskPriority: "toggleTaskPriority" }, decls: 17, vars: 2, consts: [["mat-button", "", 3, "matMenuTriggerFor"], [1, "task-menu"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "black", 1, "task-menu__icon"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"], [1, "dropped-menu"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], [1, "task-menu__item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-star"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], ["class", "task-menu__item", 3, "click", 4, "ngIf"], ["aria-hidden", "true"]], template: function TaskStatusMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskStatusMenuComponent_ng_container_7_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskStatusMenuComponent_Template_div_click_8_listener() { return ctx.changePriority(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Change priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskStatusMenuComponent_Template_div_click_11_listener() { return ctx.addNewTask.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Add new task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskStatusMenuComponent_Template_div_click_14_listener() { return ctx.removeSelectedTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Remove task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".task-menu[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 5px;\n  cursor: pointer;\n  background-color: transparent;\n}\n.task-menu__icon[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.task-menu__item[_ngcontent-%COMP%] {\n  width: 160px;\n  padding: 10px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.task-menu__item[_ngcontent-%COMP%]:hover {\n  background-color: #3b56db;\n}\n.dropped-menu[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrLXN0YXR1cy1tZW51L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90YXNrLXN0YXR1cy1tZW51L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0YXNrLXN0YXR1cy1tZW51XFx0YXNrLXN0YXR1cy1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rhc2stc3RhdHVzLW1lbnUvdGFzay1zdGF0dXMtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUMzREE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0dGO0FEREU7RUFDRSxXQUFBO0FDR0o7QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDJCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLHdCRHVDZTtFQ3ZDZixnQkR1Q2U7RUN0Q2YseUJBQUE7RUFBQSxzQ0FBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7QUNFSjtBREFJO0VBQ0UseUJEU2M7QUVQcEI7QURHQTtFQUNFLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO0VBQUEsOEJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rhc2stc3RhdHVzLW1lbnUvdGFzay1zdGF0dXMtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbG9ycyAqL1xyXG4kd2hpdGUtY29sb3I6ICNmZmY7XHJcbiRibGFjay1jb2xvcjogIzAwMDtcclxuXHJcbiRlcnJvcjogI2ZmNzM3MztcclxuJGNvbXBsZXRlOiAjNzllZDQ5O1xyXG5cclxuJHBsYWNlaG9sZGVyOiAjYjBiMGIwO1xyXG4kZm9ybS1pdGVtLWNvbG9yOiAjYjBiMGIwO1xyXG5cclxuJGlucHV0LXRleHQ6ICM4NDkyYWY7XHJcbiRpbnB1dC1ib3JkZXI6ICNmNmY2ZjY7XHJcbiRpbnB1dC1ib3JkZXItLWhvdmVyOiAjZWVlYmViO1xyXG5cclxuJGJvcmRlcjogI2Q0ZDllMztcclxuJGJvcmRlci1saWdodDogI2NjYztcclxuXHJcbiRiYWNrZ3JvdW5kOiAjZjZmN2ZhO1xyXG5cclxuJHRoZW1lLWNvbG9yOiAjMGUxYTM1O1xyXG5cclxuJHRoZW1lLWRhcmstY29sb3I6ICMxMTM1OTM7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zOiAjNTU4NGZmO1xyXG4kdGhlbWUtZGFyay1jb2xvci1pdGVtcy0taG92ZXI6ICM1NTg0ZmY7XHJcblxyXG4kdGhlbWUtbGlnaHQtY29sb3I6ICM0YzUwYzY7XHJcbiR0aGVtZS1saWdodC1jb2xvci1pdGVtczogIzRmMzlkNztcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiRuYXYtaXRlbS1jb2xvcjogIzEyMjE0MztcclxuXHJcbiRkZWNvci1pdGVtLS1ob3ZlcjogIzNiNTZkYjtcclxuJGRlY29yLWl0ZW0tLWFjdGl2ZTogIzU1ODRmZjtcclxuXHJcbiRidG46ICM3OTllZmI7XHJcbiRidG4tZGVjb3I6ICM0YzdiZjY7XHJcbiRidG4tLWRpc2FibGVkOiAjY2NjO1xyXG5cclxuJHRleHQtc2hhZG93OiAjYjFjMGUyO1xyXG4kdGV4dC1jb2xvcjogIzc2N2JiMDtcclxuJHN1Yi1oZWFkbGluZS1jb2xvcjogIzg0OTJhZjtcclxuXHJcbiRoZWFkbGluZS1jb2xvcjogIzJmNTBhODtcclxuXHJcblxyXG4vKiBzaWRlYmFyICovXHJcbiRzaWRlYmFyLXdpZHRoLXhzOiAxMDAlO1xyXG4kc2lkZWJhci13aWR0aC1tZDogMjYwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWxnOiAzMjBweDtcclxuXHJcbiR3cmFwcGVyLXdpZHRoLXhzOiAxMDAlO1xyXG4kd3JhcHBlci13aWR0aC1tZDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4kd3JhcHBlci13aWR0aC1sZzogY2FsYygxMDAlIC0gMzIwcHgpO1xyXG5cclxuXHJcbi8qIHRyYW5zaXRpb25zICovXHJcbiR0cmFuc2l0aW9uOiAuNHM7XHJcbiRzaG9ydC10cmFuc2l0aW9uOiAuM3M7XHJcbiRsb25nLXRyYW5zaXRpb246IC42cztcclxuXHJcblxyXG4vKiBmb250cyAqL1xyXG4kYmFzZS1mb250czogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnT3BlbiBTYW5zJywgJ3NhbnMtc2VyaWYnLCAnQXJpYWwnO1xyXG5cclxuXHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4udGFzay1tZW51IHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJl9faWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogJHNob3J0LXRyYW5zaXRpb247XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWNvci1pdGVtLS1ob3ZlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kcm9wcGVkLW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iLCIvKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuLnRhc2stbWVudSB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnRhc2stbWVudV9faWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xufVxuLnRhc2stbWVudV9faXRlbSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udGFzay1tZW51X19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTZkYjtcbn1cblxuLmRyb3BwZWQtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskStatusMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-status-menu',
                templateUrl: './task-status-menu.component.html',
                styleUrls: ['./task-status-menu.component.scss']
            }]
    }], null, { addNewTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeTaskItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateTaskStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], toggleTaskPriority: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/task-status-menu/task-status-menu.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/task-status-menu/task-status-menu.module.ts ***!
  \************************************************************************/
/*! exports provided: TaskStatusMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusMenuModule", function() { return TaskStatusMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _task_status_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-status-menu.component */ "./src/app/components/task-status-menu/task-status-menu.component.ts");





class TaskStatusMenuModule {
}
TaskStatusMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskStatusMenuModule });
TaskStatusMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskStatusMenuModule_Factory(t) { return new (t || TaskStatusMenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskStatusMenuModule, { declarations: [_task_status_menu_component__WEBPACK_IMPORTED_MODULE_3__["TaskStatusMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]], exports: [_task_status_menu_component__WEBPACK_IMPORTED_MODULE_3__["TaskStatusMenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskStatusMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_task_status_menu_component__WEBPACK_IMPORTED_MODULE_3__["TaskStatusMenuComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
                ],
                exports: [_task_status_menu_component__WEBPACK_IMPORTED_MODULE_3__["TaskStatusMenuComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/workflow-content/workflow-content.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/workflow-content/workflow-content.component.ts ***!
  \***************************************************************************/
/*! exports provided: WorkflowContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowContentComponent", function() { return WorkflowContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function WorkflowContentComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} }
const _c0 = function (a1) { return ["workflow-subscription", a1]; };
const _c1 = ["*"];
class WorkflowContentComponent {
    constructor() {
        this.className = '';
    }
}
WorkflowContentComponent.ɵfac = function WorkflowContentComponent_Factory(t) { return new (t || WorkflowContentComponent)(); };
WorkflowContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowContentComponent, selectors: [["app-workflow-content"]], inputs: { item: "item", className: "className" }, ngContentSelectors: _c1, decls: 9, vars: 6, consts: [[1, "workflow-content"], [1, "workflow-decoration"], [1, "workflow-title"], ["class", "fa fa-star task-icon", "aria-hidden", "true", 4, "ngIf"], [3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-star", "task-icon"]], template: function WorkflowContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkflowContentComponent_i_5_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.value.charAt(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.isPriority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.className));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n\n\n.workflow-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.workflow-decoration[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 45px;\n  height: 45px;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  margin-right: 10px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  font-size: 22px;\n  color: #fff;\n  background-color: #5584ff;\n}\n.workflow-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.workflow-subscription[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #767bb0;\n}\n.workflow-subscription_completed[_ngcontent-%COMP%] {\n  color: #79ed49;\n}\n@media screen and (max-width: 1180px) {\n  .workflow-decoration[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .workflow-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrZmxvdy1jb250ZW50L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3JrZmxvdy1jb250ZW50L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9rZXlmcmFtZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3JrZmxvdy1jb250ZW50L3dvcmtmbG93LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd29ya2Zsb3ctY29udGVudC9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFwcFxcY29tcG9uZW50c1xcd29ya2Zsb3ctY29udGVudFxcd29ya2Zsb3ctY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3JrZmxvdy1jb250ZW50L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUM3REE7RUFDRTtJQUNFLFFBQUE7RUNLRjtFREhBO0lBQ0UsV0FBQTtFQ0tGO0FBQ0Y7QURYQTtFQUNFO0lBQ0UsUUFBQTtFQ0tGO0VESEE7SUFDRSxXQUFBO0VDS0Y7QUFDRjtBREZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUNJRjtFREZBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDSUY7QUFDRjtBRGRBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUNJRjtFREZBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDSUY7QUFDRjtBRERBO0VBQ0U7SUFDRSw0QkFBQTtZQUFBLG9CQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNHRjtBQUNGO0FEVEE7RUFDRTtJQUNFLDRCQUFBO1lBQUEsb0JBQUE7RUNHRjtFRERBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0VDRUY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxVQUFBO0VDRUY7RURBQTtJQUNFLFVBQUE7RUNFRjtBQUNGO0FGdkNBLFdBQUE7QUE2Q0EsWUFBQTtBQVVBLGdCQUFBO0FBTUEsVUFBQTtBRzFEQTtFQUNFLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7QUQwQ0Y7QUN2Q0E7RUNIRSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwyQkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLCtCQUFBO01BQUEscUJBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7TUFBQSxvQkFBQTtVQUFBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0paWTtFSWFaLHlCSlF1QjtBRXNDekI7QUNqREE7RUFDRSxlQUFBO0FEb0RGO0FDakRBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0hxQlc7QUUrQmI7QUNsREU7RUFDRSxjSGhCTztBRW9FWDtBQ2hEQTtFQUVFO0lBQ0UsYUFBQTtFRGtERjtBQUNGO0FDL0NBO0VBRUU7SUFDRSxlQUFBO0VEZ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmtmbG93LWNvbnRlbnQvd29ya2Zsb3ctY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbG9ycyAqL1xyXG4kd2hpdGUtY29sb3I6ICNmZmY7XHJcbiRibGFjay1jb2xvcjogIzAwMDtcclxuXHJcbiRlcnJvcjogI2ZmNzM3MztcclxuJGNvbXBsZXRlOiAjNzllZDQ5O1xyXG5cclxuJHBsYWNlaG9sZGVyOiAjYjBiMGIwO1xyXG4kZm9ybS1pdGVtLWNvbG9yOiAjYjBiMGIwO1xyXG5cclxuJGlucHV0LXRleHQ6ICM4NDkyYWY7XHJcbiRpbnB1dC1ib3JkZXI6ICNmNmY2ZjY7XHJcbiRpbnB1dC1ib3JkZXItLWhvdmVyOiAjZWVlYmViO1xyXG5cclxuJGJvcmRlcjogI2Q0ZDllMztcclxuJGJvcmRlci1saWdodDogI2NjYztcclxuXHJcbiRiYWNrZ3JvdW5kOiAjZjZmN2ZhO1xyXG5cclxuJHRoZW1lLWNvbG9yOiAjMGUxYTM1O1xyXG5cclxuJHRoZW1lLWRhcmstY29sb3I6ICMxMTM1OTM7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zOiAjNTU4NGZmO1xyXG4kdGhlbWUtZGFyay1jb2xvci1pdGVtcy0taG92ZXI6ICM1NTg0ZmY7XHJcblxyXG4kdGhlbWUtbGlnaHQtY29sb3I6ICM0YzUwYzY7XHJcbiR0aGVtZS1saWdodC1jb2xvci1pdGVtczogIzRmMzlkNztcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiRuYXYtaXRlbS1jb2xvcjogIzEyMjE0MztcclxuXHJcbiRkZWNvci1pdGVtLS1ob3ZlcjogIzNiNTZkYjtcclxuJGRlY29yLWl0ZW0tLWFjdGl2ZTogIzU1ODRmZjtcclxuXHJcbiRidG46ICM3OTllZmI7XHJcbiRidG4tZGVjb3I6ICM0YzdiZjY7XHJcbiRidG4tLWRpc2FibGVkOiAjY2NjO1xyXG5cclxuJHRleHQtc2hhZG93OiAjYjFjMGUyO1xyXG4kdGV4dC1jb2xvcjogIzc2N2JiMDtcclxuJHN1Yi1oZWFkbGluZS1jb2xvcjogIzg0OTJhZjtcclxuXHJcbiRoZWFkbGluZS1jb2xvcjogIzJmNTBhODtcclxuXHJcblxyXG4vKiBzaWRlYmFyICovXHJcbiRzaWRlYmFyLXdpZHRoLXhzOiAxMDAlO1xyXG4kc2lkZWJhci13aWR0aC1tZDogMjYwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLWxnOiAzMjBweDtcclxuXHJcbiR3cmFwcGVyLXdpZHRoLXhzOiAxMDAlO1xyXG4kd3JhcHBlci13aWR0aC1tZDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4kd3JhcHBlci13aWR0aC1sZzogY2FsYygxMDAlIC0gMzIwcHgpO1xyXG5cclxuXHJcbi8qIHRyYW5zaXRpb25zICovXHJcbiR0cmFuc2l0aW9uOiAuNHM7XHJcbiRzaG9ydC10cmFuc2l0aW9uOiAuM3M7XHJcbiRsb25nLXRyYW5zaXRpb246IC42cztcclxuXHJcblxyXG4vKiBmb250cyAqL1xyXG4kYmFzZS1mb250czogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnT3BlbiBTYW5zJywgJ3NhbnMtc2VyaWYnLCAnQXJpYWwnO1xyXG5cclxuXHJcbiIsIkBrZXlmcmFtZXMgd2lkdGgge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidWJibGUge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGNvbG9ycyAqL1xuLyogc2lkZWJhciAqL1xuLyogdHJhbnNpdGlvbnMgKi9cbi8qIGZvbnRzICovXG5Aa2V5ZnJhbWVzIHdpZHRoIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1YmJsZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogY29sb3JzICovXG4vKiBzaWRlYmFyICovXG4vKiB0cmFuc2l0aW9ucyAqL1xuLyogZm9udHMgKi9cbi53b3JrZmxvdy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLndvcmtmbG93LWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4NGZmO1xufVxuXG4ud29ya2Zsb3ctdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53b3JrZmxvdy1zdWJzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNzY3YmIwO1xufVxuLndvcmtmbG93LXN1YnNjcmlwdGlvbl9jb21wbGV0ZWQge1xuICBjb2xvcjogIzc5ZWQ0OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4MHB4KSB7XG4gIC53b3JrZmxvdy1kZWNvcmF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLndvcmtmbG93LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iLCJAaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLndvcmtmbG93LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53b3JrZmxvdy1kZWNvcmF0aW9uIHtcclxuICBAaW5jbHVkZSB0YXNrLWRlY29yYXRpb24oNDUpO1xyXG59XHJcblxyXG4ud29ya2Zsb3ctdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLndvcmtmbG93LXN1YnNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG5cclxuICAmX2NvbXBsZXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbXBsZXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE4MHB4KSB7XHJcblxyXG4gIC53b3JrZmxvdy1kZWNvcmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgLndvcmtmbG93LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAna2V5ZnJhbWVzJztcclxuXHJcbkBtaXhpbiB0YXNrLWRlY29yYXRpb24oJHNpemUpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6ICRzaXplICsgcHg7XHJcbiAgaGVpZ2h0OiAkc2l6ZSArIHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmstY29sb3ItaXRlbXM7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93IHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxN3B4IC0xMnB4IHJnYmEoMzcsNTcsMTEwLDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDE3cHggLTEycHggcmdiYSgzNyw1NywxMTAsMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE3cHggLTEycHggcmdiYSgzNyw1NywxMTAsMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBkZWNvcmF0aW9uLWVsZW1lbnQge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1peGluIHdpZHRoLWFuaW1hdGlvbiB7XHJcbiAgYW5pbWF0aW9uOiB3aWR0aCAkc2hvcnQtdHJhbnNpdGlvbiBsaW5lYXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidWJibGUtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IGJ1YmJsZSAkdHJhbnNpdGlvbiBsaW5lYXI7XHJcbn1cclxuXHJcbkBtaXhpbiByb3RhdGUtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxMHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG5AbWl4aW4gZmFkZS1pbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gJGxvbmctdHJhbnNpdGlvbiBsaW5lYXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workflow-content',
                templateUrl: './workflow-content.component.html',
                styleUrls: ['./workflow-content.component.scss']
            }]
    }], null, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/workflow-content/workflow-content.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/workflow-content/workflow-content.module.ts ***!
  \************************************************************************/
/*! exports provided: WorkflowContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowContentModule", function() { return WorkflowContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _workflow_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow-content.component */ "./src/app/components/workflow-content/workflow-content.component.ts");




class WorkflowContentModule {
}
WorkflowContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkflowContentModule });
WorkflowContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkflowContentModule_Factory(t) { return new (t || WorkflowContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkflowContentModule, { declarations: [_workflow_content_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_workflow_content_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowContentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_workflow_content_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowContentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_workflow_content_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowContentComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/common-layers/forms/task-modal-from/task-modal-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/containers/common-layers/forms/task-modal-from/task-modal-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TaskModalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModalFormComponent", function() { return TaskModalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @enums/icon-class.enum */ "./src/app/enums/icon-class.enum.ts");
/* harmony import */ var _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/task-status-type.enum */ "./src/app/enums/task-status-type.enum.ts");
/* harmony import */ var _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/task-category-list.enum */ "./src/app/enums/task-category-list.enum.ts");
/* harmony import */ var _mocks_task_form_select_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mocks/task-form-select-items */ "./src/app/mocks/task-form-select-items.ts");
/* harmony import */ var _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/form-field/form-field.component */ "./src/app/components/form-field/form-field.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/validation-message/validation-message.component */ "./src/app/components/validation-message/validation-message.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















class TaskModalFormComponent {
    constructor(formBuilder, data, dialogRef) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.dialogRef = dialogRef;
        this.faIcon = _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_3__["iconClass"];
        this.statusType = _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_4__["taskStatusType"];
        this.categoryList = _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_5__["taskCategoryList"];
        this.selectAnswers = _mocks_task_form_select_items__WEBPACK_IMPORTED_MODULE_6__["TASK_FORM_SELECT_ITEMS"];
        this.selectedItemValue = _mocks_task_form_select_items__WEBPACK_IMPORTED_MODULE_6__["TASK_FORM_SELECT_ITEMS"][0].value;
    }
    ngOnInit() {
        this.initForm();
    }
    get form() {
        return this.taskForm.controls;
    }
    cancel() {
        this.dialogRef.close();
    }
    setData(data) {
        this.form.status.setValue(this.statusType[data]);
        this.form.list.setValue(this.categoryList[data]);
    }
    initForm() {
        this.taskForm = this.formBuilder.group({
            value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            list: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            isPriority: [false]
        });
    }
}
TaskModalFormComponent.ɵfac = function TaskModalFormComponent_Factory(t) { return new (t || TaskModalFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
TaskModalFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskModalFormComponent, selectors: [["app-task-modal-form"]], decls: 20, vars: 7, consts: [["mat-dialog-title", ""], ["novalidate", "", 1, "form", 3, "formGroup"], ["type", "text", "name", "text", "placeholder", "Description", "formControlName", "value", 1, "form-control"], ["formInput", ""], ["slot", "icon", "aria-hidden", "true", 3, "ngClass"], ["formIcon", ""], [3, "invalid"], ["label", "Task status type", 3, "items", "selectedItem", "selectedChange"], [1, "example-section"], ["formControlName", "isPriority", 1, "example-margin", 3, "change"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "mat-dialog-close", "disabled"]], template: function TaskModalFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create new task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Required field ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " (min length 3 character) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function TaskModalFormComponent_Template_app_select_selectedChange_12_listener($event) { return ctx.setData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskModalFormComponent_Template_mat_checkbox_change_14_listener($event) { return ctx.data.isPriority = $event.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Mark as priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskModalFormComponent_Template_button_click_16_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.taskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.USER);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["value"].invalid && ctx.form["value"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.selectAnswers)("selectedItem", ctx.selectedItemValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.taskForm.value)("disabled", ctx.taskForm.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_9__["ValidationMessageComponent"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".example-section[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.task-modal-actions[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9jb21tb24tbGF5ZXJzL2Zvcm1zL3Rhc2stbW9kYWwtZnJvbS9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFwcFxcY29udGFpbmVyc1xcY29tbW9uLWxheWVyc1xcZm9ybXNcXHRhc2stbW9kYWwtZnJvbVxcdGFzay1tb2RhbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL2NvbW1vbi1sYXllcnMvZm9ybXMvdGFzay1tb2RhbC1mcm9tL3Rhc2stbW9kYWwtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFBQSxpQ0FBQTtNQUFBLGtCQUFBO1VBQUEseUJBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9jb21tb24tbGF5ZXJzL2Zvcm1zL3Rhc2stbW9kYWwtZnJvbS90YXNrLW1vZGFsLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrLW1vZGFsLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiIsIi5leGFtcGxlLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50YXNrLW1vZGFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModalFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-modal-form',
                templateUrl: 'task-modal-form.component.html',
                styleUrls: ['./task-modal-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/common-layers/forms/task-modal-from/task-modal-form.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/containers/common-layers/forms/task-modal-from/task-modal-form.module.ts ***!
  \******************************************************************************************/
/*! exports provided: TaskModalFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModalFormModule", function() { return TaskModalFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _components_select_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/select/select.module */ "./src/app/components/select/select.module.ts");
/* harmony import */ var _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/form-field/form-field.module */ "./src/app/components/form-field/form-field.module.ts");
/* harmony import */ var _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/validation-message/validation-message.module */ "./src/app/components/validation-message/validation-message.module.ts");
/* harmony import */ var _containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @containers/common-layers/forms/task-modal-from/task-modal-form.component */ "./src/app/containers/common-layers/forms/task-modal-from/task-modal-form.component.ts");













class TaskModalFormModule {
}
TaskModalFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskModalFormModule });
TaskModalFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskModalFormModule_Factory(t) { return new (t || TaskModalFormModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _components_select_select_module__WEBPACK_IMPORTED_MODULE_8__["SelectModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_10__["ValidationMessageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskModalFormModule, { declarations: [_containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_11__["TaskModalFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _components_select_select_module__WEBPACK_IMPORTED_MODULE_8__["SelectModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_10__["ValidationMessageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], exports: [_containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_11__["TaskModalFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModalFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_11__["TaskModalFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _components_select_select_module__WEBPACK_IMPORTED_MODULE_8__["SelectModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_10__["ValidationMessageModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                exports: [_containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_11__["TaskModalFormComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/pages/private/portal/workflow/workflow-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/containers/pages/private/portal/workflow/workflow-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: workflowRoutes, WorkflowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workflowRoutes", function() { return workflowRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowRoutingModule", function() { return WorkflowRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_pages_private_portal_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @containers/pages/private/portal/workflow/workflow.component */ "./src/app/containers/pages/private/portal/workflow/workflow.component.ts");





const workflowRoutes = [
    {
        path: '',
        component: _containers_pages_private_portal_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowComponent"]
    }
];
class WorkflowRoutingModule {
}
WorkflowRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkflowRoutingModule });
WorkflowRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkflowRoutingModule_Factory(t) { return new (t || WorkflowRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(workflowRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkflowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(workflowRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/pages/private/portal/workflow/workflow.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/containers/pages/private/portal/workflow/workflow.component.ts ***!
  \********************************************************************************/
/*! exports provided: WorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowComponent", function() { return WorkflowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/task-status-type.enum */ "./src/app/enums/task-status-type.enum.ts");
/* harmony import */ var _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/task-category-list.enum */ "./src/app/enums/task-category-list.enum.ts");
/* harmony import */ var _containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @containers/common-layers/forms/task-modal-from/task-modal-form.component */ "./src/app/containers/common-layers/forms/task-modal-from/task-modal-form.component.ts");
/* harmony import */ var _modules_shared_animations_move_from_bottom_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/shared/animations/move-from-bottom.animation */ "./src/app/modules/shared/animations/move-from-bottom.animation.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_task_service_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/task-service/task.service */ "./src/app/modules/services/task-service/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_workflow_content_workflow_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/workflow-content/workflow-content.component */ "./src/app/components/workflow-content/workflow-content.component.ts");
/* harmony import */ var _components_task_status_menu_task_status_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/task-status-menu/task-status-menu.component */ "./src/app/components/task-status-menu/task-status-menu.component.ts");
















function WorkflowComponent_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function WorkflowComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
const _c0 = function (a0) { return { time: a0 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function WorkflowComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-workflow-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " to do ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-task-status-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addNewTask", function WorkflowComponent_div_8_Template_app_task_status_menu_addNewTask_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.createTask(); })("removeTaskItem", function WorkflowComponent_div_8_Template_app_task_status_menu_removeTaskItem_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.deleteTask($event); })("updateTaskStatus", function WorkflowComponent_div_8_Template_app_task_status_menu_updateTaskStatus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.changeTaskList($event); })("toggleTaskPriority", function WorkflowComponent_div_8_Template_app_task_status_menu_toggleTaskPriority_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    const i_r78 = ctx.index;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r77.id)("@moveFromBottom", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, !ctx_r70.animationState ? "out" : "in", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, i_r78 / 5 + "s")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r77)("currentList", ctx_r70.categoryList.TO_DO);
} }
function WorkflowComponent_mat_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function WorkflowComponent_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function WorkflowComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-workflow-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " in progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-task-status-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addNewTask", function WorkflowComponent_div_16_Template_app_task_status_menu_addNewTask_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.createTask(); })("removeTaskItem", function WorkflowComponent_div_16_Template_app_task_status_menu_removeTaskItem_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.deleteTask($event); })("updateTaskStatus", function WorkflowComponent_div_16_Template_app_task_status_menu_updateTaskStatus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.changeTaskList($event); })("toggleTaskPriority", function WorkflowComponent_div_16_Template_app_task_status_menu_toggleTaskPriority_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    const i_r85 = ctx.index;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r84.id)("@moveFromBottom", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, !ctx_r74.animationState ? "out" : "in", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, i_r85 / 5 + "s")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r84)("currentList", ctx_r74.categoryList.IN_PROGRESS);
} }
function WorkflowComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-workflow-content", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " completed! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-task-status-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addNewTask", function WorkflowComponent_div_22_Template_app_task_status_menu_addNewTask_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.createTask(); })("removeTaskItem", function WorkflowComponent_div_22_Template_app_task_status_menu_removeTaskItem_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.deleteTask($event); })("updateTaskStatus", function WorkflowComponent_div_22_Template_app_task_status_menu_updateTaskStatus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.changeTaskList($event); })("toggleTaskPriority", function WorkflowComponent_div_22_Template_app_task_status_menu_toggleTaskPriority_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r91 = ctx.$implicit;
    const i_r92 = ctx.index;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r91.id)("@moveFromBottom", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, !ctx_r76.animationState ? "out" : "in", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, i_r92 / 5 + "s")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "workflow-subscription_completed")("item", item_r91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r91)("currentList", ctx_r76.categoryList.COMPLETED);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
const dialogData = {
    value: '',
    list: '',
    status: '',
    isPriority: false
};
class WorkflowComponent {
    constructor(dialog, taskService) {
        this.dialog = dialog;
        this.taskService = taskService;
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.loading = true;
        this.animationState = false;
        this.statusType = _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_4__["taskStatusType"];
        this.categoryList = _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_5__["taskCategoryList"];
        this.toDoList = [];
        this.inProgressList = [];
        this.completedList = [];
    }
    ngOnInit() {
        const tasksStream = this.taskService.getTasksByLists()
            .subscribe(tasks => {
            this.sortTasksByList(tasks);
            this.changeAnimationState();
            this.loading = false;
        });
        this.stream.add(tasksStream);
    }
    ngOnDestroy() {
        this.stream.unsubscribe();
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        const container = event.container;
        this.updateTasksListsAfterDrop({
            fromList: container.id,
            toList: container.element.nativeElement.id,
            status: container.element.nativeElement.getAttribute('data-status'),
            itemId: Number(event.item.element.nativeElement.id)
        });
    }
    createTask() {
        const dialogRef = this.dialog.open(_containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_6__["TaskModalFormComponent"], {
            width: '300px',
            data: dialogData
        });
        const modalStream = dialogRef.afterClosed();
        const tasks = modalStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => data ? this.taskService.createTask(data) : []));
        const tasksStream = tasks.subscribe(tasks => this.sortTasksByList(tasks));
        this.stream.add(tasksStream);
    }
    deleteTask(data) {
        const tasksStream = this.taskService.deleteTaskById(data.itemId)
            .subscribe(tasks => this.sortTasksByList(tasks));
        this.stream.add(tasksStream);
    }
    updateTask(task) {
        const tasksStream = this.taskService.updateTaskById(task.id, task)
            .subscribe(tasks => this.sortTasksByList(tasks));
        this.stream.add(tasksStream);
    }
    changeTaskList(data) {
        const item = this[data.fromList].find(item => item.id === data.itemId);
        this[data.fromList] = this[data.fromList].filter(item => item.id !== data.itemId);
        this[data.toList].unshift(item);
        this.updateTasksLists();
    }
    updateTasksListsAfterDrop(data) {
        this[data.fromList].forEach(item => {
            if (item.id === data.itemId) {
                item.list = data.toList;
                item.status = data.status;
            }
        });
        this.updateTasksLists();
    }
    updateTasksLists() {
        const tasksStream = this.taskService.updateTasksLists({
            toDoList: this.toDoList,
            inProgressList: this.inProgressList,
            completedList: this.completedList
        }).subscribe(tasks => this.sortTasksByList(tasks));
        this.stream.add(tasksStream);
    }
    changeAnimationState() {
        setTimeout(() => this.animationState = true, 0);
    }
    sortTasksByList(tasks) {
        this.toDoList = tasks[this.categoryList.TO_DO];
        this.inProgressList = tasks[this.categoryList.IN_PROGRESS];
        this.completedList = tasks[this.categoryList.COMPLETED];
    }
}
WorkflowComponent.ɵfac = function WorkflowComponent_Factory(t) { return new (t || WorkflowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"])); };
WorkflowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowComponent, selectors: [["app-workflow"]], decls: 23, vars: 28, consts: [[1, "workflow"], [1, "workflow-container"], [1, "headline"], ["class", "spinner-icon", 3, "diameter", 4, "ngIf"], ["class", "fa fa-angle-right workflow-icon fade-in", "aria-hidden", "true", 4, "ngIf"], ["cdkDropList", "", 1, "workflow-list", 3, "id", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["cdkDrag", "", "class", "workflow-box", 3, "id", 4, "ngFor", "ngForOf"], ["progressList", "cdkDropList"], ["completeList", "cdkDropList"], [1, "spinner-icon", 3, "diameter"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "workflow-icon", "fade-in"], ["cdkDrag", "", 1, "workflow-box", 3, "id"], [3, "item"], ["aria-hidden", "true", 1, "fa", "fa-external-link"], [3, "item", "currentList", "addNewTask", "removeTaskItem", "updateTaskStatus", "toggleTaskPriority"], ["aria-hidden", "true", 1, "fa", "fa-spinner"], [3, "className", "item"], ["aria-hidden", "true", 1, "fa", "fa-check-circle-o"]], template: function WorkflowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To Do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkflowComponent_mat_spinner_4_Template, 1, 1, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkflowComponent_i_5_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function WorkflowComponent_Template_div_cdkDropListDropped_6_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkflowComponent_div_8_Template, 5, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorkflowComponent_mat_spinner_12_Template, 1, 1, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkflowComponent_i_13_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function WorkflowComponent_Template_div_cdkDropListDropped_14_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WorkflowComponent_div_16_Template, 5, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function WorkflowComponent_Template_div_cdkDropListDropped_20_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WorkflowComponent_div_22_Template, 5, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.categoryList.TO_DO)("cdkDropListData", ctx.toDoList)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c2, _r73, _r75));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-status", ctx.statusType.TO_DO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toDoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.categoryList.IN_PROGRESS)("cdkDropListData", ctx.inProgressList)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c2, _r69, _r75));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-status", ctx.statusType.IN_PROGRESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inProgressList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.categoryList.COMPLETED)("cdkDropListData", ctx.completedList)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c2, _r69, _r73));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-status", ctx.statusType.COMPLETED);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.completedList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _components_workflow_content_workflow_content_component__WEBPACK_IMPORTED_MODULE_12__["WorkflowContentComponent"], _components_task_status_menu_task_status_menu_component__WEBPACK_IMPORTED_MODULE_13__["TaskStatusMenuComponent"]], styles: ["@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n\n\n.workflow[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.workflow[_ngcontent-%COMP%]   .workflow-container[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n.workflow-container[_ngcontent-%COMP%] {\n  width: 33.33333%;\n  max-width: 100%;\n  margin-bottom: 25px;\n  display: inline-block;\n  vertical-align: top;\n}\n.workflow-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: #2f50a8;\n}\n.workflow-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.workflow-list[_ngcontent-%COMP%]   .workflow-box[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.workflow-box[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #2f50a8;\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.workflow-box[_ngcontent-%COMP%]:hover {\n  color: #113593;\n  background-color: #f6f7fa;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n@media screen and (max-width: 920px) {\n  .workflow[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .workflow[_ngcontent-%COMP%]   .workflow-container[_ngcontent-%COMP%], .workflow[_ngcontent-%COMP%]   .workflow-container[_ngcontent-%COMP%]:nth-child(2) {\n    width: 100%;\n    margin: 0 0 50px;\n  }\n  .workflow[_ngcontent-%COMP%]   .workflow-list[_ngcontent-%COMP%] {\n    max-height: 260px;\n    overflow-y: auto;\n    border-bottom: 5px solid #4c50c6;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wcml2YXRlL3BvcnRhbC93b3JrZmxvdy9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZXMvcHJpdmF0ZS9wb3J0YWwvd29ya2Zsb3cvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcX2tleWZyYW1lcy5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3BhZ2VzL3ByaXZhdGUvcG9ydGFsL3dvcmtmbG93L3dvcmtmbG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3BhZ2VzL3ByaXZhdGUvcG9ydGFsL3dvcmtmbG93L0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXBwXFxjb250YWluZXJzXFxwYWdlc1xccHJpdmF0ZVxccG9ydGFsXFx3b3JrZmxvd1xcd29ya2Zsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQTZDQSxZQUFBO0FBVUEsZ0JBQUE7QUFNQSxVQUFBO0FDN0RBO0VBQ0U7SUFDRSxRQUFBO0VDS0Y7RURIQTtJQUNFLFdBQUE7RUNLRjtBQUNGO0FEWEE7RUFDRTtJQUNFLFFBQUE7RUNLRjtFREhBO0lBQ0UsV0FBQTtFQ0tGO0FBQ0Y7QURGQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDSUY7RURGQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ0lGO0FBQ0Y7QURkQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDSUY7RURGQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ0lGO0FBQ0Y7QUREQTtFQUNFO0lBQ0UsNEJBQUE7WUFBQSxvQkFBQTtFQ0dGO0VEREE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDR0Y7QUFDRjtBRFRBO0VBQ0U7SUFDRSw0QkFBQTtZQUFBLG9CQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRTtJQUNFLFVBQUE7RUNFRjtFREFBO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURSQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0VDRUY7QUFDRjtBRnZDQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUcxREE7RUFDRSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSxzQ0FBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7QUQwQ0Y7QUN4Q0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FEMENKO0FDdENBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FEeUNGO0FDdENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0hrQmU7QUV1QmpCO0FDdENBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRHlDRjtBQ3ZDRTtFQUNFLGdCQUFBO0FEeUNKO0FDckNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO0VBQUEsMkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7RUFBQSwyQkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUFBLHNDQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEd0NGO0FDdENFO0VBQ0UsY0hsQ2U7RUdtQ2YseUJIdkNTO0FFK0ViO0FDcENBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7RUFDQSw2SEFBQTtVQUFBLHFIQUFBO0FEdUNGO0FDbENBO0VBQ0UsVUFBQTtBRHFDRjtBQ2xDQTtFQUNFLHNFQUFBO0VBQUEsOERBQUE7RUFBQSxzREFBQTtFQUFBLDBHQUFBO0FEcUNGO0FDbENBO0VBQ0UsWUFBQTtBRHFDRjtBQ2xDQTtFQUNFLHNFQUFBO0VBQUEsOERBQUE7RUFBQSxzREFBQTtFQUFBLDBHQUFBO0FEcUNGO0FDbENBO0VBRUU7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO0lBQUEsOEJBQUE7UUFBQSwwQkFBQTtZQUFBLHNCQUFBO0VEb0NGO0VDbENFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VEb0NKO0VDakNFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdDQUFBO0VEbUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3BhZ2VzL3ByaXZhdGUvcG9ydGFsL3dvcmtmbG93L3dvcmtmbG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29sb3JzICovXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGVycm9yOiAjZmY3MzczO1xyXG4kY29tcGxldGU6ICM3OWVkNDk7XHJcblxyXG4kcGxhY2Vob2xkZXI6ICNiMGIwYjA7XHJcbiRmb3JtLWl0ZW0tY29sb3I6ICNiMGIwYjA7XHJcblxyXG4kaW5wdXQtdGV4dDogIzg0OTJhZjtcclxuJGlucHV0LWJvcmRlcjogI2Y2ZjZmNjtcclxuJGlucHV0LWJvcmRlci0taG92ZXI6ICNlZWViZWI7XHJcblxyXG4kYm9yZGVyOiAjZDRkOWUzO1xyXG4kYm9yZGVyLWxpZ2h0OiAjY2NjO1xyXG5cclxuJGJhY2tncm91bmQ6ICNmNmY3ZmE7XHJcblxyXG4kdGhlbWUtY29sb3I6ICMwZTFhMzU7XHJcblxyXG4kdGhlbWUtZGFyay1jb2xvcjogIzExMzU5MztcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXM6ICM1NTg0ZmY7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiR0aGVtZS1saWdodC1jb2xvcjogIzRjNTBjNjtcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zOiAjNGYzOWQ3O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJG5hdi1pdGVtLWNvbG9yOiAjMTIyMTQzO1xyXG5cclxuJGRlY29yLWl0ZW0tLWhvdmVyOiAjM2I1NmRiO1xyXG4kZGVjb3ItaXRlbS0tYWN0aXZlOiAjNTU4NGZmO1xyXG5cclxuJGJ0bjogIzc5OWVmYjtcclxuJGJ0bi1kZWNvcjogIzRjN2JmNjtcclxuJGJ0bi0tZGlzYWJsZWQ6ICNjY2M7XHJcblxyXG4kdGV4dC1zaGFkb3c6ICNiMWMwZTI7XHJcbiR0ZXh0LWNvbG9yOiAjNzY3YmIwO1xyXG4kc3ViLWhlYWRsaW5lLWNvbG9yOiAjODQ5MmFmO1xyXG5cclxuJGhlYWRsaW5lLWNvbG9yOiAjMmY1MGE4O1xyXG5cclxuXHJcbi8qIHNpZGViYXIgKi9cclxuJHNpZGViYXItd2lkdGgteHM6IDEwMCU7XHJcbiRzaWRlYmFyLXdpZHRoLW1kOiAyNjBweDtcclxuJHNpZGViYXItd2lkdGgtbGc6IDMyMHB4O1xyXG5cclxuJHdyYXBwZXItd2lkdGgteHM6IDEwMCU7XHJcbiR3cmFwcGVyLXdpZHRoLW1kOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiR3cmFwcGVyLXdpZHRoLWxnOiBjYWxjKDEwMCUgLSAzMjBweCk7XHJcblxyXG5cclxuLyogdHJhbnNpdGlvbnMgKi9cclxuJHRyYW5zaXRpb246IC40cztcclxuJHNob3J0LXRyYW5zaXRpb246IC4zcztcclxuJGxvbmctdHJhbnNpdGlvbjogLjZzO1xyXG5cclxuXHJcbi8qIGZvbnRzICovXHJcbiRiYXNlLWZvbnRzOiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdPcGVuIFNhbnMnLCAnc2Fucy1zZXJpZicsICdBcmlhbCc7XHJcblxyXG5cclxuIiwiQGtleWZyYW1lcyB3aWR0aCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ1YmJsZSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIiwiLyogY29sb3JzICovXG4vKiBzaWRlYmFyICovXG4vKiB0cmFuc2l0aW9ucyAqL1xuLyogZm9udHMgKi9cbkBrZXlmcmFtZXMgd2lkdGgge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYnViYmxlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuLndvcmtmbG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLndvcmtmbG93IC53b3JrZmxvdy1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLndvcmtmbG93LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMy4zMzMzMyU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ud29ya2Zsb3ctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmY1MGE4O1xufVxuXG4ud29ya2Zsb3ctbGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndvcmtmbG93LWxpc3QgLndvcmtmbG93LWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLndvcmtmbG93LWJveCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJmNTBhODtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud29ya2Zsb3ctYm94OmhvdmVyIHtcbiAgY29sb3I6ICMxMTM1OTM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZmE7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkge1xuICAud29ya2Zsb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLndvcmtmbG93IC53b3JrZmxvdy1jb250YWluZXIsIC53b3JrZmxvdyAud29ya2Zsb3ctY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgNTBweDtcbiAgfVxuICAud29ya2Zsb3cgLndvcmtmbG93LWxpc3Qge1xuICAgIG1heC1oZWlnaHQ6IDI2MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM0YzUwYzY7XG4gIH1cbn0iLCJAaW1wb3J0ICdtaXhpbnMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLndvcmtmbG93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLndvcmtmbG93LWNvbnRhaW5lcjpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ud29ya2Zsb3ctY29udGFpbmVyIHtcclxuICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ud29ya2Zsb3ctaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAkaGVhZGxpbmUtY29sb3I7XHJcbn1cclxuXHJcbi53b3JrZmxvdy1saXN0IHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAkYm9yZGVyLWxpZ2h0O1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIC53b3JrZmxvdy1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLndvcmtmbG93LWJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICRoZWFkbGluZS1jb2xvcjtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRib3JkZXItbGlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHRoZW1lLWRhcmstY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkge1xyXG5cclxuICAud29ya2Zsb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAud29ya2Zsb3ctY29udGFpbmVyLCAud29ya2Zsb3ctY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgMCA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC53b3JrZmxvdy1saXN0IHtcclxuICAgICAgbWF4LWhlaWdodDogMjYwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkdGhlbWUtbGlnaHQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [_modules_shared_animations_move_from_bottom_animation__WEBPACK_IMPORTED_MODULE_7__["moveFromBottomAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workflow',
                templateUrl: './workflow.component.html',
                styleUrls: ['./workflow.component.scss'],
                animations: [_modules_shared_animations_move_from_bottom_animation__WEBPACK_IMPORTED_MODULE_7__["moveFromBottomAnimation"]],
                entryComponents: [_containers_common_layers_forms_task_modal_from_task_modal_form_component__WEBPACK_IMPORTED_MODULE_6__["TaskModalFormComponent"]]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _services_task_service_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/pages/private/portal/workflow/workflow.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/pages/private/portal/workflow/workflow.module.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowModule", function() { return WorkflowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _containers_common_layers_forms_task_modal_from_task_modal_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @containers/common-layers/forms/task-modal-from/task-modal-form.module */ "./src/app/containers/common-layers/forms/task-modal-from/task-modal-form.module.ts");
/* harmony import */ var _components_task_status_menu_task_status_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/task-status-menu/task-status-menu.module */ "./src/app/components/task-status-menu/task-status-menu.module.ts");
/* harmony import */ var _components_workflow_content_workflow_content_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/workflow-content/workflow-content.module */ "./src/app/components/workflow-content/workflow-content.module.ts");
/* harmony import */ var _containers_pages_private_portal_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @containers/pages/private/portal/workflow/workflow.component */ "./src/app/containers/pages/private/portal/workflow/workflow.component.ts");
/* harmony import */ var _containers_pages_private_portal_workflow_workflow_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @containers/pages/private/portal/workflow/workflow-routing.module */ "./src/app/containers/pages/private/portal/workflow/workflow-routing.module.ts");














class WorkflowModule {
}
WorkflowModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkflowModule });
WorkflowModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkflowModule_Factory(t) { return new (t || WorkflowModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _containers_common_layers_forms_task_modal_from_task_modal_form_module__WEBPACK_IMPORTED_MODULE_8__["TaskModalFormModule"],
            _components_task_status_menu_task_status_menu_module__WEBPACK_IMPORTED_MODULE_9__["TaskStatusMenuModule"],
            _containers_pages_private_portal_workflow_workflow_routing_module__WEBPACK_IMPORTED_MODULE_12__["WorkflowRoutingModule"],
            _components_workflow_content_workflow_content_module__WEBPACK_IMPORTED_MODULE_10__["WorkflowContentModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkflowModule, { declarations: [_containers_pages_private_portal_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_11__["WorkflowComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _containers_common_layers_forms_task_modal_from_task_modal_form_module__WEBPACK_IMPORTED_MODULE_8__["TaskModalFormModule"],
        _components_task_status_menu_task_status_menu_module__WEBPACK_IMPORTED_MODULE_9__["TaskStatusMenuModule"],
        _containers_pages_private_portal_workflow_workflow_routing_module__WEBPACK_IMPORTED_MODULE_12__["WorkflowRoutingModule"],
        _components_workflow_content_workflow_content_module__WEBPACK_IMPORTED_MODULE_10__["WorkflowContentModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]], exports: [_containers_pages_private_portal_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_11__["WorkflowComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_pages_private_portal_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_11__["WorkflowComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _containers_common_layers_forms_task_modal_from_task_modal_form_module__WEBPACK_IMPORTED_MODULE_8__["TaskModalFormModule"],
                    _components_task_status_menu_task_status_menu_module__WEBPACK_IMPORTED_MODULE_9__["TaskStatusMenuModule"],
                    _containers_pages_private_portal_workflow_workflow_routing_module__WEBPACK_IMPORTED_MODULE_12__["WorkflowRoutingModule"],
                    _components_workflow_content_workflow_content_module__WEBPACK_IMPORTED_MODULE_10__["WorkflowContentModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
                ],
                exports: [_containers_pages_private_portal_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_11__["WorkflowComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mocks/task-form-select-items.ts":
/*!*************************************************!*\
  !*** ./src/app/mocks/task-form-select-items.ts ***!
  \*************************************************/
/*! exports provided: TASK_FORM_SELECT_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_FORM_SELECT_ITEMS", function() { return TASK_FORM_SELECT_ITEMS; });
const TASK_FORM_SELECT_ITEMS = [
    {
        value: 'TO_DO',
        viewValue: 'To do'
    },
    {
        value: 'IN_PROGRESS',
        viewValue: 'In progress'
    },
    {
        value: 'COMPLETED',
        viewValue: 'Completed'
    }
];


/***/ }),

/***/ "./src/app/mocks/task-menu-items.ts":
/*!******************************************!*\
  !*** ./src/app/mocks/task-menu-items.ts ***!
  \******************************************/
/*! exports provided: TASK_MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_MENU_ITEMS", function() { return TASK_MENU_ITEMS; });
/* harmony import */ var _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/task-status-type.enum */ "./src/app/enums/task-status-type.enum.ts");
/* harmony import */ var _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/task-category-list.enum */ "./src/app/enums/task-category-list.enum.ts");


const TASK_MENU_ITEMS = [
    {
        list: _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_1__["taskCategoryList"].TO_DO,
        status: _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_0__["taskStatusType"].TO_DO,
        iconClass: 'fa fa-external-link-square'
    },
    {
        list: _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_1__["taskCategoryList"].IN_PROGRESS,
        status: _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_0__["taskStatusType"].IN_PROGRESS,
        iconClass: 'fa fa-spinner'
    },
    {
        list: _enums_task_category_list_enum__WEBPACK_IMPORTED_MODULE_1__["taskCategoryList"].COMPLETED,
        status: _enums_task_status_type_enum__WEBPACK_IMPORTED_MODULE_0__["taskStatusType"].COMPLETED,
        iconClass: 'fa fa-check'
    }
];


/***/ }),

/***/ "./src/app/modules/shared/animations/move-from-bottom.animation.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/animations/move-from-bottom.animation.ts ***!
  \*************************************************************************/
/*! exports provided: moveFromBottomAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveFromBottomAnimation", function() { return moveFromBottomAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const moveFromBottomAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveFromBottom', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translate(0, 0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'translate(0, 80px)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }} ease-in-out'))
]);


/***/ })

}]);
//# sourceMappingURL=containers-pages-private-portal-workflow-workflow-module-es2015.js.map