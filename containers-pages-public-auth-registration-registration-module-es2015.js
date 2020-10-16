(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-pages-public-auth-registration-registration-module"],{

/***/ "./src/app/containers/pages/public/auth/registration/registration-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/containers/pages/public/auth/registration/registration-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: registrationRoutes, RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationRoutes", function() { return registrationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_pages_public_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @containers/pages/public/auth/registration/registration.component */ "./src/app/containers/pages/public/auth/registration/registration.component.ts");





const registrationRoutes = [
    {
        path: '',
        component: _containers_pages_public_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]
    }
];
class RegistrationRoutingModule {
}
RegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationRoutingModule });
RegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationRoutingModule_Factory(t) { return new (t || RegistrationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(registrationRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(registrationRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/pages/public/auth/registration/registration.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/containers/pages/public/auth/registration/registration.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/modules/core/auth/auth.service.ts");
/* harmony import */ var _components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/large-headline/large-headline.component */ "./src/app/components/large-headline/large-headline.component.ts");
/* harmony import */ var _containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @containers/common-layers/forms/registration-form/registration-form.component */ "./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts");







class RegistrationComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.headline = 'Glad to meet you!';
    }
    register(data) {
        this.stream = this.authService.register(data.firstName, data.lastName, data.email, data.password, data.selectedCountry, data.registrationDate)
            .subscribe(() => this.router.navigate(['portal/home']));
    }
    ngOnDestroy() {
        this.stream.unsubscribe();
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 3, vars: 1, consts: [[1, "fade-in"], [3, "headline"], [3, "registerFormSubmit"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-large-headline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-registration-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("registerFormSubmit", function RegistrationComponent_Template_app_registration_form_registerFormSubmit_2_listener($event) { return ctx.register($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headline", ctx.headline);
    } }, directives: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_4__["LargeHeadlineComponent"], _containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZXMvcHVibGljL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/pages/public/auth/registration/registration.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/containers/pages/public/auth/registration/registration.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/large-headline/large-headline.module */ "./src/app/components/large-headline/large-headline.module.ts");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.component */ "./src/app/containers/pages/public/auth/registration/registration.component.ts");
/* harmony import */ var _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @containers/common-layers/forms/registration-form/registration-form.module */ "./src/app/containers/common-layers/forms/registration-form/registration-form.module.ts");
/* harmony import */ var _containers_pages_public_auth_registration_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @containers/pages/public/auth/registration/registration-routing.module */ "./src/app/containers/pages/public/auth/registration/registration-routing.module.ts");







class RegistrationModule {
}
RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationModule });
RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineModule"],
            _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationFormModule"],
            _containers_pages_public_auth_registration_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineModule"],
        _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationFormModule"],
        _containers_pages_public_auth_registration_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationRoutingModule"]], exports: [_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_large_headline_large_headline_module__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineModule"],
                    _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationFormModule"],
                    _containers_pages_public_auth_registration_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationRoutingModule"]
                ],
                exports: [_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=containers-pages-public-auth-registration-registration-module-es2015.js.map