function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-pages-private-portal-profile-profile-module"], {
  /***/
  "./src/app/containers/pages/private/portal/profile/profile-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/profile/profile-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: profileRoutes, ProfileRoutingModule */

  /***/
  function srcAppContainersPagesPrivatePortalProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "profileRoutes", function () {
      return profileRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
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


    var _containers_pages_private_portal_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @containers/pages/private/portal/profile/profile.component */
    "./src/app/containers/pages/private/portal/profile/profile.component.ts");

    var profileRoutes = [{
      path: '',
      component: _containers_pages_private_portal_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(profileRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(profileRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/pages/private/portal/profile/profile.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/profile/profile.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppContainersPagesPrivatePortalProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/auth/auth.service */
    "./src/app/modules/core/auth/auth.service.ts");
    /* harmony import */


    var _containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @containers/common-layers/forms/registration-form/registration-form.component */
    "./src/app/containers/common-layers/forms/registration-form/registration-form.component.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(snackBar, authService) {
        _classCallCheck(this, ProfileComponent);

        this.snackBar = snackBar;
        this.authService = authService;
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.userValue;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stream.unsubscribe();
        }
      }, {
        key: "update",
        value: function update(data) {
          var _this = this;

          this.stream = this.authService.update(this.user.id, data.firstName, data.lastName, data.email, data.password, data.selectedCountry, data.registrationDate).subscribe(function (user) {
            _this.snackBar.open('Update profile data is completed', 'Ok', {
              duration: 4000,
              panelClass: ['snackbar'],
              horizontalPosition: 'end'
            });

            _this.user = user;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-settings"]],
      decls: 4,
      vars: 6,
      consts: [[1, "profile"], [1, "headline"], ["btnContext", "Update", 1, "form", 3, "email", "password", "lastName", "firstName", "isUpdateForm", "selectedCountry", "registerFormSubmit"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-registration-form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("registerFormSubmit", function ProfileComponent_Template_app_registration_form_registerFormSubmit_3_listener($event) {
            return ctx.update($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", ctx.user.email)("password", ctx.user.password)("lastName", ctx.user.lastName)("firstName", ctx.user.firstName)("isUpdateForm", true)("selectedCountry", ctx.user.selectedCountry);
        }
      },
      directives: [_containers_common_layers_forms_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationFormComponent"]],
      styles: [".profile[_ngcontent-%COMP%] {\n  width: 450px;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.headline[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wcml2YXRlL3BvcnRhbC9wcm9maWxlL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wcml2YXRlL3BvcnRhbC9wcm9maWxlL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXBwXFxjb250YWluZXJzXFxwYWdlc1xccHJpdmF0ZVxccG9ydGFsXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3BhZ2VzL3ByaXZhdGUvcG9ydGFsL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUMzREE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHRjtBREFBO0VBQ0Usd0JBQUE7RUFBQSwrQkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZXMvcHJpdmF0ZS9wb3J0YWwvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29sb3JzICovXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGVycm9yOiAjZmY3MzczO1xyXG4kY29tcGxldGU6ICM3OWVkNDk7XHJcblxyXG4kcGxhY2Vob2xkZXI6ICNiMGIwYjA7XHJcbiRmb3JtLWl0ZW0tY29sb3I6ICNiMGIwYjA7XHJcblxyXG4kaW5wdXQtdGV4dDogIzg0OTJhZjtcclxuJGlucHV0LWJvcmRlcjogI2Y2ZjZmNjtcclxuJGlucHV0LWJvcmRlci0taG92ZXI6ICNlZWViZWI7XHJcblxyXG4kYm9yZGVyOiAjZDRkOWUzO1xyXG4kYm9yZGVyLWxpZ2h0OiAjY2NjO1xyXG5cclxuJGJhY2tncm91bmQ6ICNmNmY3ZmE7XHJcblxyXG4kdGhlbWUtY29sb3I6ICMwZTFhMzU7XHJcblxyXG4kdGhlbWUtZGFyay1jb2xvcjogIzExMzU5MztcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXM6ICM1NTg0ZmY7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiR0aGVtZS1saWdodC1jb2xvcjogIzRjNTBjNjtcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zOiAjNGYzOWQ3O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJG5hdi1pdGVtLWNvbG9yOiAjMTIyMTQzO1xyXG5cclxuJGRlY29yLWl0ZW0tLWhvdmVyOiAjM2I1NmRiO1xyXG4kZGVjb3ItaXRlbS0tYWN0aXZlOiAjNTU4NGZmO1xyXG5cclxuJGJ0bjogIzc5OWVmYjtcclxuJGJ0bi1kZWNvcjogIzRjN2JmNjtcclxuJGJ0bi0tZGlzYWJsZWQ6ICNjY2M7XHJcblxyXG4kdGV4dC1zaGFkb3c6ICNiMWMwZTI7XHJcbiR0ZXh0LWNvbG9yOiAjNzY3YmIwO1xyXG4kc3ViLWhlYWRsaW5lLWNvbG9yOiAjODQ5MmFmO1xyXG5cclxuJGhlYWRsaW5lLWNvbG9yOiAjMmY1MGE4O1xyXG5cclxuXHJcbi8qIHNpZGViYXIgKi9cclxuJHNpZGViYXItd2lkdGgteHM6IDEwMCU7XHJcbiRzaWRlYmFyLXdpZHRoLW1kOiAyNjBweDtcclxuJHNpZGViYXItd2lkdGgtbGc6IDMyMHB4O1xyXG5cclxuJHdyYXBwZXItd2lkdGgteHM6IDEwMCU7XHJcbiR3cmFwcGVyLXdpZHRoLW1kOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiR3cmFwcGVyLXdpZHRoLWxnOiBjYWxjKDEwMCUgLSAzMjBweCk7XHJcblxyXG5cclxuLyogdHJhbnNpdGlvbnMgKi9cclxuJHRyYW5zaXRpb246IC40cztcclxuJHNob3J0LXRyYW5zaXRpb246IC4zcztcclxuJGxvbmctdHJhbnNpdGlvbjogLjZzO1xyXG5cclxuXHJcbi8qIGZvbnRzICovXHJcbiRiYXNlLWZvbnRzOiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdPcGVuIFNhbnMnLCAnc2Fucy1zZXJpZicsICdBcmlhbCc7XHJcblxyXG5cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5wcm9maWxlIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGxpbmUge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiIsIi8qIGNvbG9ycyAqL1xuLyogc2lkZWJhciAqL1xuLyogdHJhbnNpdGlvbnMgKi9cbi8qIGZvbnRzICovXG4ucHJvZmlsZSB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRsaW5lIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/pages/private/portal/profile/profile.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/profile/profile.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppContainersPagesPrivatePortalProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
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


    var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/containers/pages/private/portal/profile/profile.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _containers_pages_private_portal_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @containers/pages/private/portal/profile/profile-routing.module */
    "./src/app/containers/pages/private/portal/profile/profile-routing.module.ts");
    /* harmony import */


    var _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @containers/common-layers/forms/registration-form/registration-form.module */
    "./src/app/containers/common-layers/forms/registration-form/registration-form.module.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _containers_pages_private_portal_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"], _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationFormModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _containers_pages_private_portal_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"], _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationFormModule"]],
        exports: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _containers_pages_private_portal_profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"], _containers_common_layers_forms_registration_form_registration_form_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationFormModule"]],
          exports: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=containers-pages-private-portal-profile-profile-module-es5.js.map