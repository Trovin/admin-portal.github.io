(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/large-headline/large-headline.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/large-headline/large-headline.component.ts ***!
  \***********************************************************************/
/*! exports provided: LargeHeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeHeadlineComponent", function() { return LargeHeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LargeHeadlineComponent {
    ngOnChanges() {
        const text = this.headline.split(' ');
        this.decoratedText = text.pop();
        this.text = text.join(' ');
    }
}
LargeHeadlineComponent.ɵfac = function LargeHeadlineComponent_Factory(t) { return new (t || LargeHeadlineComponent)(); };
LargeHeadlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LargeHeadlineComponent, selectors: [["app-large-headline"]], inputs: { headline: "headline" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "large-headline"], [1, "theme-text"]], template: function LargeHeadlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.decoratedText);
    } }, styles: [".large-headline[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 46px;\n  font-weight: 300;\n  color: #2f50a8;\n  margin-bottom: 60px;\n}\n.auth-body[_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%], .auth-body   [_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n@media screen and (max-width: 768px) {\n  .large-headline[_ngcontent-%COMP%], .auth-body[_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%], .auth-body   [_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%] {\n    font-size: 36px;\n    margin-bottom: 30px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .large-headline[_ngcontent-%COMP%], .auth-body[_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%], .auth-body   [_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXJnZS1oZWFkbGluZS9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFyZ2UtaGVhZGxpbmUvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhcmdlLWhlYWRsaW5lXFxsYXJnZS1oZWFkbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXJnZS1oZWFkbGluZS9sYXJnZS1oZWFkbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUMzREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNEb0NlO0VDbkNmLG1CQUFBO0FDR0Y7QURBQTtFQUNFLG1CQUFBO0FDR0Y7QURBQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0U7SUFDRSxlQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFyZ2UtaGVhZGxpbmUvbGFyZ2UtaGVhZGxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb2xvcnMgKi9cclxuJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kYmxhY2stY29sb3I6ICMwMDA7XHJcblxyXG4kZXJyb3I6ICNmZjczNzM7XHJcbiRjb21wbGV0ZTogIzc5ZWQ0OTtcclxuXHJcbiRwbGFjZWhvbGRlcjogI2IwYjBiMDtcclxuJGZvcm0taXRlbS1jb2xvcjogI2IwYjBiMDtcclxuXHJcbiRpbnB1dC10ZXh0OiAjODQ5MmFmO1xyXG4kaW5wdXQtYm9yZGVyOiAjZjZmNmY2O1xyXG4kaW5wdXQtYm9yZGVyLS1ob3ZlcjogI2VlZWJlYjtcclxuXHJcbiRib3JkZXI6ICNkNGQ5ZTM7XHJcbiRib3JkZXItbGlnaHQ6ICNjY2M7XHJcblxyXG4kYmFja2dyb3VuZDogI2Y2ZjdmYTtcclxuXHJcbiR0aGVtZS1jb2xvcjogIzBlMWEzNTtcclxuXHJcbiR0aGVtZS1kYXJrLWNvbG9yOiAjMTEzNTkzO1xyXG4kdGhlbWUtZGFyay1jb2xvci1pdGVtczogIzU1ODRmZjtcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJHRoZW1lLWxpZ2h0LWNvbG9yOiAjNGM1MGM2O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXM6ICM0ZjM5ZDc7XHJcbiR0aGVtZS1saWdodC1jb2xvci1pdGVtcy0taG92ZXI6ICM1NTg0ZmY7XHJcblxyXG4kbmF2LWl0ZW0tY29sb3I6ICMxMjIxNDM7XHJcblxyXG4kZGVjb3ItaXRlbS0taG92ZXI6ICMzYjU2ZGI7XHJcbiRkZWNvci1pdGVtLS1hY3RpdmU6ICM1NTg0ZmY7XHJcblxyXG4kYnRuOiAjNzk5ZWZiO1xyXG4kYnRuLWRlY29yOiAjNGM3YmY2O1xyXG4kYnRuLS1kaXNhYmxlZDogI2NjYztcclxuXHJcbiR0ZXh0LXNoYWRvdzogI2IxYzBlMjtcclxuJHRleHQtY29sb3I6ICM3NjdiYjA7XHJcbiRzdWItaGVhZGxpbmUtY29sb3I6ICM4NDkyYWY7XHJcblxyXG4kaGVhZGxpbmUtY29sb3I6ICMyZjUwYTg7XHJcblxyXG5cclxuLyogc2lkZWJhciAqL1xyXG4kc2lkZWJhci13aWR0aC14czogMTAwJTtcclxuJHNpZGViYXItd2lkdGgtbWQ6IDI2MHB4O1xyXG4kc2lkZWJhci13aWR0aC1sZzogMzIwcHg7XHJcblxyXG4kd3JhcHBlci13aWR0aC14czogMTAwJTtcclxuJHdyYXBwZXItd2lkdGgtbWQ6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuJHdyYXBwZXItd2lkdGgtbGc6IGNhbGMoMTAwJSAtIDMyMHB4KTtcclxuXHJcblxyXG4vKiB0cmFuc2l0aW9ucyAqL1xyXG4kdHJhbnNpdGlvbjogLjRzO1xyXG4kc2hvcnQtdHJhbnNpdGlvbjogLjNzO1xyXG4kbG9uZy10cmFuc2l0aW9uOiAuNnM7XHJcblxyXG5cclxuLyogZm9udHMgKi9cclxuJGJhc2UtZm9udHM6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ09wZW4gU2FucycsICdzYW5zLXNlcmlmJywgJ0FyaWFsJztcclxuXHJcblxyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLmxhcmdlLWhlYWRsaW5lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICRoZWFkbGluZS1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5hdXRoLWJvZHkpIC5sYXJnZS1oZWFkbGluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubGFyZ2UtaGVhZGxpbmUsIDpob3N0LWNvbnRleHQoLmF1dGgtYm9keSkgLmxhcmdlLWhlYWRsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gIC5sYXJnZS1oZWFkbGluZSwgOmhvc3QtY29udGV4dCguYXV0aC1ib2R5KSAubGFyZ2UtaGVhZGxpbmUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG4iLCIvKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuLmxhcmdlLWhlYWRsaW5lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMmY1MGE4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5hdXRoLWJvZHkpIC5sYXJnZS1oZWFkbGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sYXJnZS1oZWFkbGluZSwgOmhvc3QtY29udGV4dCguYXV0aC1ib2R5KSAubGFyZ2UtaGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAubGFyZ2UtaGVhZGxpbmUsIDpob3N0LWNvbnRleHQoLmF1dGgtYm9keSkgLmxhcmdlLWhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LargeHeadlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-large-headline',
                templateUrl: './large-headline.component.html',
                styleUrls: ['./large-headline.component.scss']
            }]
    }], null, { headline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/large-headline/large-headline.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/large-headline/large-headline.module.ts ***!
  \********************************************************************/
/*! exports provided: LargeHeadlineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeHeadlineModule", function() { return LargeHeadlineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/large-headline/large-headline.component */ "./src/app/components/large-headline/large-headline.component.ts");




class LargeHeadlineModule {
}
LargeHeadlineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LargeHeadlineModule });
LargeHeadlineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LargeHeadlineModule_Factory(t) { return new (t || LargeHeadlineModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LargeHeadlineModule, { declarations: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LargeHeadlineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mocks/portal-users.ts":
/*!***************************************!*\
  !*** ./src/app/mocks/portal-users.ts ***!
  \***************************************/
/*! exports provided: PORTAL_USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTAL_USERS", function() { return PORTAL_USERS; });
const PORTAL_USERS = [
    {
        firstName: 'Jon',
        lastName: 'Snow',
        email: 'jon@gmail.com',
        selectedCountry: 'AF',
        registrationDate: Date.now()
    },
    {
        email: 'alex@gmail.com',
        firstName: 'Alex',
        lastName: 'Snow',
        selectedCountry: 'DZ',
        registrationDate: Date.now()
    },
    {
        email: 'tom@gmail.com',
        firstName: 'Tom',
        lastName: 'Snow',
        selectedCountry: 'AR',
        registrationDate: Date.now()
    },
    {
        email: 'siri@gmail.com',
        firstName: 'Siri',
        lastName: 'Snow',
        selectedCountry: 'AZ',
        registrationDate: Date.now()
    },
    {
        email: 'albert@gmail.com',
        firstName: 'Albert',
        lastName: 'Snow',
        selectedCountry: 'CA',
        registrationDate: Date.now()
    },
    {
        email: 'trish@gmail.com',
        firstName: 'Trish',
        lastName: 'Snow',
        selectedCountry: 'CA',
        registrationDate: Date.now()
    },
    {
        email: 'lada@gmail.com',
        firstName: 'Lada',
        lastName: 'Snow',
        selectedCountry: 'CA',
        registrationDate: Date.now()
    },
    {
        email: 'omar@gmail.com',
        firstName: 'Omar',
        lastName: 'Snow',
        selectedCountry: 'CA',
        registrationDate: Date.now()
    },
    {
        email: 'julia@gmail.com',
        firstName: 'Julia',
        lastName: 'Snow',
        selectedCountry: 'CA',
        registrationDate: Date.now()
    },
    {
        email: 'artem@gmail.com',
        firstName: 'Artem',
        lastName: 'Snow',
        selectedCountry: 'CA',
        registrationDate: Date.now()
    }
];


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map