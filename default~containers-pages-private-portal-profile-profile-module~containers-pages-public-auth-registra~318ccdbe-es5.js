function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~containers-pages-private-portal-profile-profile-module~containers-pages-public-auth-registra~318ccdbe"], {
  /***/
  "./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: RegistrationFormComponent */

  /***/
  function srcAppContainersCommonLayersFormsRegistrationFormRegistrationFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function () {
      return RegistrationFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @enums/icon-class.enum */
    "./src/app/enums/icon-class.enum.ts");
    /* harmony import */


    var _modules_shared_validations_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/shared/validations/must-match.validator */
    "./src/app/modules/shared/validations/must-match.validator.ts");
    /* harmony import */


    var _mocks_register_form_select_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @mocks/register-form-select-items */
    "./src/app/mocks/register-form-select-items.ts");
    /* harmony import */


    var _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @components/form-field/form-field.component */
    "./src/app/components/form-field/form-field.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @components/validation-message/validation-message.component */
    "./src/app/components/validation-message/validation-message.component.ts");
    /* harmony import */


    var _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @components/select/select.component */
    "./src/app/components/select/select.component.ts");
    /* harmony import */


    var _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @components/button/button.component */
    "./src/app/components/button/button.component.ts");

    var RegistrationFormComponent =
    /*#__PURE__*/
    function () {
      function RegistrationFormComponent(formBuilder) {
        _classCallCheck(this, RegistrationFormComponent);

        this.formBuilder = formBuilder;
        this.registerFormSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.email = '';
        this.password = '';
        this.lastName = '';
        this.firstName = '';
        this.selectedItemValue = '';
        this.btnContext = 'Register';
        this.faIcon = _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_2__["iconClass"];
        this.selectAnswers = _mocks_register_form_select_items__WEBPACK_IMPORTED_MODULE_4__["REGISTER_FORM_SELECT_ITEMS"];
      }

      _createClass(RegistrationFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.registerFormSubmit.emit({
            email: this.registerForm.value.email,
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            password: this.registerForm.value.password,
            selectedAnswer: this.registerForm.value.selectedAnswer || ''
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.registerForm = this.formBuilder.group({
            firstName: [this.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^\\S*$)')]],
            lastName: [this.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^\\S*$)')]],
            email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: [this.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,24}')]],
            confirmPassword: [''],
            selectedAnswer: [this.selectedItemValue]
          }, {
            validator: Object(_modules_shared_validations_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MatchValues"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "form",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegistrationFormComponent;
    }();

    RegistrationFormComponent.ɵfac = function RegistrationFormComponent_Factory(t) {
      return new (t || RegistrationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationFormComponent,
      selectors: [["app-registration-form"]],
      inputs: {
        email: "email",
        password: "password",
        lastName: "lastName",
        firstName: "firstName",
        selectedItemValue: "selectedItemValue",
        btnContext: "btnContext"
      },
      outputs: {
        registerFormSubmit: "registerFormSubmit"
      },
      decls: 38,
      vars: 15,
      consts: [["novalidate", "", 1, "form", 3, "formGroup", "ngSubmit"], ["type", "text", "name", "user", "placeholder", "First name", "autocomplete", "on", "formControlName", "firstName", 1, "form-control"], ["formInput", ""], ["slot", "icon", "aria-hidden", "true", 3, "ngClass"], ["formIcon", ""], [3, "invalid"], ["type", "text", "name", "user", "placeholder", "Last name", "autocomplete", "on", "formControlName", "lastName", 1, "form-control"], ["type", "text", "name", "email", "placeholder", "Email", "autocomplete", "on", "formControlName", "email", 1, "form-control"], ["type", "password", "name", "password", "placeholder", "Password", "autocomplete", "on", "formControlName", "password", 1, "form-control"], ["type", "password", "name", "password", "placeholder", "Confirm password", "autocomplete", "on", "formControlName", "confirmPassword", 1, "form-control"], ["label", "How did you hear about us ?", 3, "items", "selectedItem", "selectedChange"], ["className", "btn_submit", 3, "context", "state"]],
      template: function RegistrationFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-validation-message", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " * Must match: characters length in range 3 - 12, no trailing spaces ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-validation-message", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " * Must match: characters length in range 3 - 12, no trailing spaces ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-validation-message", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Email is invalid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-validation-message", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " * Must contain: lowercase, uppercase, numbers, special characters and have length in range 8 - 24 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 9, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-validation-message", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " * Passwords must match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function RegistrationFormComponent_Template_app_select_selectedChange_36_listener($event) {
            return ctx.form["selectedAnswer"].setValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("context", ctx.btnContext)("state", ctx.registerForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_5__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_7__["ValidationMessageComponent"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__["SelectComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration-form',
          templateUrl: './registration-form.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        registerFormSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        password: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedItemValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        btnContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/containers/common-layers/forms/registration-form/registration-form.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/containers/common-layers/forms/registration-form/registration-form.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: RegistrationFormModule */

  /***/
  function srcAppContainersCommonLayersFormsRegistrationFormRegistrationFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationFormModule", function () {
      return RegistrationFormModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @components/button/button.module */
    "./src/app/components/button/button.module.ts");
    /* harmony import */


    var _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @components/select/select.module */
    "./src/app/components/select/select.module.ts");
    /* harmony import */


    var _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @components/form-field/form-field.module */
    "./src/app/components/form-field/form-field.module.ts");
    /* harmony import */


    var _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @components/validation-message/validation-message.module */
    "./src/app/components/validation-message/validation-message.module.ts");
    /* harmony import */


    var _containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @containers/common-layers/forms/registration-form/registration-form.component */
    "./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts");

    var RegistrationFormModule = function RegistrationFormModule() {
      _classCallCheck(this, RegistrationFormModule);
    };

    RegistrationFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegistrationFormModule
    });
    RegistrationFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegistrationFormModule_Factory(t) {
        return new (t || RegistrationFormModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"], _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationFormModule, {
        declarations: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"], _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]],
        exports: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], _components_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"], _components_form_field_form_field_module__WEBPACK_IMPORTED_MODULE_5__["FormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _components_validation_message_validation_message_module__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageModule"]],
          exports: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/mocks/register-form-select-items.ts":
  /*!*****************************************************!*\
    !*** ./src/app/mocks/register-form-select-items.ts ***!
    \*****************************************************/

  /*! exports provided: REGISTER_FORM_SELECT_ITEMS */

  /***/
  function srcAppMocksRegisterFormSelectItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REGISTER_FORM_SELECT_ITEMS", function () {
      return REGISTER_FORM_SELECT_ITEMS;
    });

    var REGISTER_FORM_SELECT_ITEMS = [{
      value: 'Web',
      viewValue: 'From web source'
    }, {
      value: 'Social',
      viewValue: 'From friends or social'
    }, {
      value: 'Randomly',
      viewValue: 'Actually, found randomly'
    }];
    /***/
  },

  /***/
  "./src/app/modules/shared/validations/must-match.validator.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/shared/validations/must-match.validator.ts ***!
    \********************************************************************/

  /*! exports provided: MatchValues */

  /***/
  function srcAppModulesSharedValidationsMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchValues", function () {
      return MatchValues;
    });

    function MatchValues(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  }
}]);
//# sourceMappingURL=default~containers-pages-private-portal-profile-profile-module~containers-pages-public-auth-registra~318ccdbe-es5.js.map