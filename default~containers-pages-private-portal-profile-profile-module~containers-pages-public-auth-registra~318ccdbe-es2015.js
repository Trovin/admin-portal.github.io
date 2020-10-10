(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~containers-pages-private-portal-profile-profile-module~containers-pages-public-auth-registra~318ccdbe"],{

/***/ "./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_shared_validations_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/shared/validations/must-match.validator */ "./src/app/modules/shared/validations/must-match.validator.ts");
/* harmony import */ var _modules_shared_validations_update_form_values_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/shared/validations/update-form-values.validator */ "./src/app/modules/shared/validations/update-form-values.validator.ts");
/* harmony import */ var _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/icon-class.enum */ "./src/app/enums/icon-class.enum.ts");
/* harmony import */ var _mocks_register_form_select_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mocks/register-form-select-items */ "./src/app/mocks/register-form-select-items.ts");
/* harmony import */ var _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/form-field/form-field.component */ "./src/app/components/form-field/form-field.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/validation-message/validation-message.component */ "./src/app/components/validation-message/validation-message.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/button/button.component */ "./src/app/components/button/button.component.ts");













const _c0 = ["formElement"];
class RegistrationFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.registerFormSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.email = '';
        this.password = '';
        this.lastName = '';
        this.firstName = '';
        this.selectedItemValue = '';
        this.btnContext = 'Register';
        this.isUpdateForm = false;
        this.faIcon = _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_4__["iconClass"];
        this.selectAnswers = _mocks_register_form_select_items__WEBPACK_IMPORTED_MODULE_5__["REGISTER_FORM_SELECT_ITEMS"];
        this.isFocusForm = false;
    }
    onGlobalClick(event) {
        this.isFocusForm = this.formRef.nativeElement.contains(event.target);
    }
    ngOnInit() {
        this.initForm();
    }
    get showUpdateValidationError() {
        return this.isFocusForm && this.isUpdateForm;
    }
    get form() {
        return this.registerForm.controls;
    }
    onSubmit() {
        this.registerFormSubmit.emit({
            email: this.registerForm.value.email,
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            password: this.registerForm.value.password,
            selectedAnswer: this.registerForm.value.selectedAnswer
        });
        this.isFocusForm = true;
        this.registerForm.controls.isUpdateFormValuesValidator.setErrors({ mustContainUpdateValues: true });
    }
    initForm() {
        this.registerForm = this.formBuilder.group({
            firstName: [this.firstName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^\\S*$)')
                ]
            ],
            lastName: [this.lastName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^\\S*$)')
                ]
            ],
            email: [this.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
                ]
            ],
            password: [this.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,24}')
                ]
            ],
            confirmPassword: [this.password],
            selectedAnswer: [this.selectedItemValue],
            isUpdateFormValuesValidator: [],
        }, {
            validator: [
                Object(_modules_shared_validations_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MatchValuesValidator"])('password', 'confirmPassword'),
                Object(_modules_shared_validations_update_form_values_validator__WEBPACK_IMPORTED_MODULE_3__["UpdateFormValuesValidator"])([this.firstName, this.lastName, this.email, this.password, this.selectedItemValue], ['firstName', 'lastName', 'email', 'password', 'selectedAnswer'])
            ]
        });
    }
}
RegistrationFormComponent.ɵfac = function RegistrationFormComponent_Factory(t) { return new (t || RegistrationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationFormComponent, selectors: [["app-registration-form"]], viewQuery: function RegistrationFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formRef = _t.first);
    } }, hostBindings: function RegistrationFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function RegistrationFormComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { email: "email", password: "password", lastName: "lastName", firstName: "firstName", selectedItemValue: "selectedItemValue", btnContext: "btnContext", isUpdateForm: "isUpdateForm" }, outputs: { registerFormSubmit: "registerFormSubmit" }, decls: 41, vars: 16, consts: [["novalidate", "", 1, "form", 3, "formGroup", "ngSubmit"], ["formElement", ""], ["type", "text", "name", "user", "placeholder", "First name", "autocomplete", "on", "formControlName", "firstName", 1, "form-control"], ["formInput", ""], ["slot", "icon", "aria-hidden", "true", 3, "ngClass"], ["formIcon", ""], [3, "invalid"], ["type", "text", "name", "user", "placeholder", "Last name", "autocomplete", "on", "formControlName", "lastName", 1, "form-control"], ["type", "text", "name", "email", "placeholder", "Email", "autocomplete", "on", "formControlName", "email", 1, "form-control"], ["type", "password", "name", "password", "placeholder", "Password", "autocomplete", "on", "formControlName", "password", 1, "form-control"], ["type", "password", "name", "password", "placeholder", "Confirm password", "autocomplete", "on", "formControlName", "confirmPassword", 1, "form-control"], ["label", "How did you hear about us ?", 3, "items", "selectedItem", "selectedChange"], ["className", "btn_submit", 3, "context", "state"]], template: function RegistrationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " * Must match: characters length in range 3 - 12, no trailing spaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " * Must match: characters length in range 3 - 12, no trailing spaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Email is invalid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " * Must contain: lowercase, uppercase, numbers, special characters and have length in range 8 - 24 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 10, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " * Passwords must match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function RegistrationFormComponent_Template_app_select_selectedChange_37_listener($event) { return ctx.form["selectedAnswer"].setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " * Values on form must updates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.USER);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["firstName"].invalid && ctx.form["firstName"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.USER);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["lastName"].invalid && ctx.form["lastName"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.EMAIL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["email"].invalid && ctx.form["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.PASSWORD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["password"].invalid && ctx.form["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.faIcon.PASSWORD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.form["confirmPassword"].invalid && ctx.form["confirmPassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.selectAnswers)("selectedItem", ctx.selectedItemValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invalid", ctx.showUpdateValidationError && ctx.form["isUpdateFormValuesValidator"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("context", ctx.btnContext)("state", ctx.registerForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_6__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__["ValidationMessageComponent"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-form',
                templateUrl: './registration-form.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { formRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formElement']
        }], registerFormSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedItemValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isUpdateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onGlobalClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousedown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/common-layers/forms/registration-form/registration-form.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/containers/common-layers/forms/registration-form/registration-form.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: RegistrationFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormModule", function() { return RegistrationFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/select/select.module */ "./src/app/components/select/select.module.ts");
/* harmony import */ var _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/form-field/form-field.module */ "./src/app/components/form-field/form-field.module.ts");
/* harmony import */ var _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/validation-message/validation-message.module */ "./src/app/components/validation-message/validation-message.module.ts");
/* harmony import */ var _containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @containers/common-layers/forms/registration-form/registration-form.component */ "./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts");









class RegistrationFormModule {
}
RegistrationFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationFormModule });
RegistrationFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationFormModule_Factory(t) { return new (t || RegistrationFormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
            _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationFormModule, { declarations: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
        _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]], exports: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
                    _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]
                ],
                exports: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mocks/register-form-select-items.ts":
/*!*****************************************************!*\
  !*** ./src/app/mocks/register-form-select-items.ts ***!
  \*****************************************************/
/*! exports provided: REGISTER_FORM_SELECT_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FORM_SELECT_ITEMS", function() { return REGISTER_FORM_SELECT_ITEMS; });
const REGISTER_FORM_SELECT_ITEMS = [
    {
        value: 'Web',
        viewValue: 'From web source'
    },
    {
        value: 'Social',
        viewValue: 'From friends or social'
    },
    {
        value: 'Randomly',
        viewValue: 'Actually, found randomly'
    }
];


/***/ }),

/***/ "./src/app/modules/shared/validations/must-match.validator.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/validations/must-match.validator.ts ***!
  \********************************************************************/
/*! exports provided: MatchValuesValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchValuesValidator", function() { return MatchValuesValidator; });
function MatchValuesValidator(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/modules/shared/validations/update-form-values.validator.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/validations/update-form-values.validator.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateFormValuesValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFormValuesValidator", function() { return UpdateFormValuesValidator; });
function UpdateFormValuesValidator(defaultValues, controls) {
    return (formGroup) => {
        const matchingControl = formGroup.controls.isUpdateFormValuesValidator;
        let isUpdate = false;
        controls.forEach((controlName, index) => {
            const control = formGroup.controls[controlName];
            if (control.value !== defaultValues[index]) {
                isUpdate = true;
            }
        });
        isUpdate ? matchingControl.setErrors(null) : matchingControl.setErrors({ mustContainUpdateValues: true });
    };
}


/***/ })

}]);
//# sourceMappingURL=default~containers-pages-private-portal-profile-profile-module~containers-pages-public-auth-registra~318ccdbe-es2015.js.map