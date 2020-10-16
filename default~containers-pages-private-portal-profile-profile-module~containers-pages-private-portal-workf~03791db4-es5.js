function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~containers-pages-private-portal-profile-profile-module~containers-pages-private-portal-workf~03791db4"], {
  /***/
  "./src/app/components/form-field/form-field.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/form-field/form-field.component.ts ***!
    \***************************************************************/

  /*! exports provided: FormFieldComponent */

  /***/
  function srcAppComponentsFormFieldFormFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function () {
      return FormFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @enums/input-type.enum */
    "./src/app/enums/input-type.enum.ts");
    /* harmony import */


    var _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @enums/icon-class.enum */
    "./src/app/enums/icon-class.enum.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["formIcon"];
    var _c1 = ["formInput"];
    var _c2 = [[["", "slot", "icon"]], "*"];

    var _c3 = function _c3(a0) {
      return {
        "field-label_active": a0
      };
    };

    var _c4 = ["[slot=icon]", "*"];

    var FormFieldComponent =
    /*#__PURE__*/
    function () {
      function FormFieldComponent(eRef) {
        _classCallCheck(this, FormFieldComponent);

        this.eRef = eRef;
        this.faIcon = _enums_icon_class_enum__WEBPACK_IMPORTED_MODULE_2__["iconClass"];
        this.inputType = _enums_input_type_enum__WEBPACK_IMPORTED_MODULE_1__["inputType"];
        this.showPassword = false;
        this.isFocus = false;
      }

      _createClass(FormFieldComponent, [{
        key: "clickOutside",
        value: function clickOutside(event) {
          this.isFocus = this.eRef.nativeElement.contains(event.target);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupField();
        }
      }, {
        key: "toggleFieldType",
        value: function toggleFieldType() {
          this.showPassword = !this.showPassword;

          if (this.showPassword) {
            this.icon.nativeElement.setAttribute('class', this.faIcon.SHOW);
            this.input.nativeElement.setAttribute('type', this.inputType.TEXT);
          } else {
            this.icon.nativeElement.setAttribute('class', this.faIcon.PASSWORD);
            this.input.nativeElement.setAttribute('type', this.inputType.PASSWORD);
          }
        }
      }, {
        key: "setupField",
        value: function setupField() {
          this.type = this.input.nativeElement.getAttribute('name');
          this.isPassword = this.type === this.inputType.PASSWORD;
        }
      }]);

      return FormFieldComponent;
    }();

    FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) {
      return new (t || FormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FormFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormFieldComponent,
      selectors: [["app-form-field"]],
      contentQueries: function FormFieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        }
      },
      hostBindings: function FormFieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFieldComponent_click_HostBindingHandler($event) {
            return ctx.clickOutside($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      ngContentSelectors: _c4,
      decls: 4,
      vars: 3,
      consts: [[1, "field-label", 3, "ngClass"], [1, "icon-container", 3, "click"]],
      template: function FormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFieldComponent_Template_span_click_1_listener() {
            return ctx.isPassword && ctx.toggleFieldType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c3, ctx.isFocus));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bubble {\n  0% {\n    opacity: 0.9;\n    width: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 5px;\n  background-color: #fff;\n  -webkit-border-radius: 5px;\n          border-radius: 5px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  position: relative;\n  border-bottom: 2px solid #f6f6f6;\n}\n.field-label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background-color: #5584ff;\n}\n.field-label[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.field-label_active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n[_nghost-%COMP%]     .form-control {\n  border: 0;\n  font-size: 18px;\n}\n.icon-container[_ngcontent-%COMP%] {\n  width: 25px;\n  margin-right: 15px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 22px;\n  color: #5584ff;\n}\n@media screen and (max-width: 620px) {\n  [_nghost-%COMP%]     .form-control {\n    font-size: 14px;\n  }\n\n  .mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWZpZWxkL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWZpZWxkL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9rZXlmcmFtZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1maWVsZC9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9ybS1maWVsZFxcZm9ybS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWZpZWxkL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUM3REE7RUFDRTtJQUNFLFFBQUE7RUNLRjtFREhBO0lBQ0UsV0FBQTtFQ0tGO0FBQ0Y7QURYQTtFQUNFO0lBQ0UsUUFBQTtFQ0tGO0VESEE7SUFDRSxXQUFBO0VDS0Y7QUFDRjtBREZBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUNJRjtFREZBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDSUY7QUFDRjtBRGRBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUNJRjtFREZBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDSUY7QUFDRjtBRERBO0VBQ0U7SUFDRSw0QkFBQTtZQUFBLG9CQUFBO0VDR0Y7RUREQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNHRjtBQUNGO0FEVEE7RUFDRTtJQUNFLDRCQUFBO1lBQUEsb0JBQUE7RUNHRjtFRERBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxVQUFBO0VDRUY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxVQUFBO0VDRUY7RURBQTtJQUNFLFVBQUE7RUNFRjtBQUNGO0FGdkNBLFdBQUE7QUE2Q0EsWUFBQTtBQVVBLGdCQUFBO0FBTUEsVUFBQTtBRzFEQTtFQUNFLFdBQUE7QUQwQ0Y7QUN2Q0E7RUFDRSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwyQkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCSFZZO0VHV1osMEJBQUE7VUFBQSxrQkFBQTtFQUNBLHdCSDJDVztFRzNDWCxnQkgyQ1c7RUcxQ1gsa0JBQUE7RUFDQSxnQ0FBQTtBRDBDRjtBQ3hDRTtFQ0VBLFdBQUE7RUFDQSx3QkpvQ1c7RUlwQ1gsZ0JKb0NXO0VJbkNYLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx5QkpKOEI7QUU2Q2hDO0FDL0NFO0VBQ0UsV0FBQTtBRGlESjtBQzdDQTtFQUNFLFdBQUE7QURnREY7QUMzQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBRDhDSjtBQzFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtFQUFBLCtCQUFBO01BQUEscUJBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjSHRCdUI7QUVtRXpCO0FDMUNBO0VBSUk7SUFDRSxlQUFBO0VEMENKOztFQ3RDQTtJQUNFLGVBQUE7RUR5Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29sb3JzICovXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGVycm9yOiAjZmY3MzczO1xyXG4kY29tcGxldGU6ICM3OWVkNDk7XHJcblxyXG4kcGxhY2Vob2xkZXI6ICNiMGIwYjA7XHJcbiRmb3JtLWl0ZW0tY29sb3I6ICNiMGIwYjA7XHJcblxyXG4kaW5wdXQtdGV4dDogIzg0OTJhZjtcclxuJGlucHV0LWJvcmRlcjogI2Y2ZjZmNjtcclxuJGlucHV0LWJvcmRlci0taG92ZXI6ICNlZWViZWI7XHJcblxyXG4kYm9yZGVyOiAjZDRkOWUzO1xyXG4kYm9yZGVyLWxpZ2h0OiAjY2NjO1xyXG5cclxuJGJhY2tncm91bmQ6ICNmNmY3ZmE7XHJcblxyXG4kdGhlbWUtY29sb3I6ICMwZTFhMzU7XHJcblxyXG4kdGhlbWUtZGFyay1jb2xvcjogIzExMzU5MztcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXM6ICM1NTg0ZmY7XHJcbiR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zLS1ob3ZlcjogIzU1ODRmZjtcclxuXHJcbiR0aGVtZS1saWdodC1jb2xvcjogIzRjNTBjNjtcclxuJHRoZW1lLWxpZ2h0LWNvbG9yLWl0ZW1zOiAjNGYzOWQ3O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJG5hdi1pdGVtLWNvbG9yOiAjMTIyMTQzO1xyXG5cclxuJGRlY29yLWl0ZW0tLWhvdmVyOiAjM2I1NmRiO1xyXG4kZGVjb3ItaXRlbS0tYWN0aXZlOiAjNTU4NGZmO1xyXG5cclxuJGJ0bjogIzc5OWVmYjtcclxuJGJ0bi1kZWNvcjogIzRjN2JmNjtcclxuJGJ0bi0tZGlzYWJsZWQ6ICNjY2M7XHJcblxyXG4kdGV4dC1zaGFkb3c6ICNiMWMwZTI7XHJcbiR0ZXh0LWNvbG9yOiAjNzY3YmIwO1xyXG4kc3ViLWhlYWRsaW5lLWNvbG9yOiAjODQ5MmFmO1xyXG5cclxuJGhlYWRsaW5lLWNvbG9yOiAjMmY1MGE4O1xyXG5cclxuXHJcbi8qIHNpZGViYXIgKi9cclxuJHNpZGViYXItd2lkdGgteHM6IDEwMCU7XHJcbiRzaWRlYmFyLXdpZHRoLW1kOiAyNjBweDtcclxuJHNpZGViYXItd2lkdGgtbGc6IDMyMHB4O1xyXG5cclxuJHdyYXBwZXItd2lkdGgteHM6IDEwMCU7XHJcbiR3cmFwcGVyLXdpZHRoLW1kOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiR3cmFwcGVyLXdpZHRoLWxnOiBjYWxjKDEwMCUgLSAzMjBweCk7XHJcblxyXG5cclxuLyogdHJhbnNpdGlvbnMgKi9cclxuJHRyYW5zaXRpb246IC40cztcclxuJHNob3J0LXRyYW5zaXRpb246IC4zcztcclxuJGxvbmctdHJhbnNpdGlvbjogLjZzO1xyXG5cclxuXHJcbi8qIGZvbnRzICovXHJcbiRiYXNlLWZvbnRzOiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdPcGVuIFNhbnMnLCAnc2Fucy1zZXJpZicsICdBcmlhbCc7XHJcblxyXG5cclxuIiwiQGtleWZyYW1lcyB3aWR0aCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ1YmJsZSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIiwiLyogY29sb3JzICovXG4vKiBzaWRlYmFyICovXG4vKiB0cmFuc2l0aW9ucyAqL1xuLyogZm9udHMgKi9cbkBrZXlmcmFtZXMgd2lkdGgge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYnViYmxlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y2ZjZmNjtcbn1cbi5maWVsZC1sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTJweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4NGZmO1xufVxuLmZpZWxkLWxhYmVsOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGQtbGFiZWxfYWN0aXZlOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzU1ODRmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5mb3JtLWNvbnRyb2wge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufSIsIkBpbXBvcnQgJ21peGlucyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWVsZC1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkaW5wdXQtYm9yZGVyO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIEBpbmNsdWRlIGZpZWxkLWRlY29yYXRpb24oKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6OmFmdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZpZWxkLWxhYmVsX2FjdGl2ZTo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAkdGhlbWUtZGFyay1jb2xvci1pdGVtcztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIHtcclxuXHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ2tleWZyYW1lcyc7XHJcblxyXG5cclxuQG1peGluIHRhc2stZGVjb3JhdGlvbigkc2l6ZSkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogJHNpemUgKyBweDtcclxuICBoZWlnaHQ6ICRzaXplICsgcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1jb2xvci1pdGVtcztcclxufVxyXG5cclxuQG1peGluIGZpZWxkLWRlY29yYXRpb24oKSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTJweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1kYXJrLWNvbG9yLWl0ZW1zLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3cge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE3cHggLTEycHggcmdiYSgzNyw1NywxMTAsMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTdweCAtMTJweCByZ2JhKDM3LDU3LDExMCwxKTtcclxuICBib3gtc2hhZG93OiAwIDAgMTdweCAtMTJweCByZ2JhKDM3LDU3LDExMCwxKTtcclxufVxyXG5cclxuQG1peGluIGRlY29yYXRpb24tZWxlbWVudCB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWl4aW4gd2lkdGgtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IHdpZHRoICRzaG9ydC10cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG5cclxuQG1peGluIGJ1YmJsZS1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogYnViYmxlICR0cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG5cclxuQG1peGluIHJvdGF0ZS1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBtaXhpbiBmYWRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAkbG9uZy10cmFuc2l0aW9uIGxpbmVhcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form-field',
          templateUrl: './form-field.component.html',
          styleUrls: ['./form-field.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['formIcon', {
            "static": true
          }]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['formInput', {
            "static": true
          }]
        }],
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/form-field/form-field.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/form-field/form-field.module.ts ***!
    \************************************************************/

  /*! exports provided: FormFieldModule */

  /***/
  function srcAppComponentsFormFieldFormFieldModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormFieldModule", function () {
      return FormFieldModule;
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


    var _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @components/form-field/form-field.component */
    "./src/app/components/form-field/form-field.component.ts");

    var FormFieldModule = function FormFieldModule() {
      _classCallCheck(this, FormFieldModule);
    };

    FormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormFieldModule
    });
    FormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormFieldModule_Factory(t) {
        return new (t || FormFieldModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormFieldModule, {
        declarations: [_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
        exports: [_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          exports: [_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/validation-message/validation-message.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/validation-message/validation-message.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ValidationMessageComponent */

  /***/
  function srcAppComponentsValidationMessageValidationMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationMessageComponent", function () {
      return ValidationMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modules_shared_animations_toggle_slide_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @modules/shared/animations/toggle-slide.animation */
    "./src/app/modules/shared/animations/toggle-slide.animation.ts");

    var _c0 = ["*"];

    var ValidationMessageComponent = function ValidationMessageComponent() {
      _classCallCheck(this, ValidationMessageComponent);

      this.invalid = false;
    };

    ValidationMessageComponent.ɵfac = function ValidationMessageComponent_Factory(t) {
      return new (t || ValidationMessageComponent)();
    };

    ValidationMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValidationMessageComponent,
      selectors: [["app-validation-message"]],
      inputs: {
        invalid: "invalid"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[1, "error-message"]],
      template: function ValidationMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx.invalid ? "in" : "out");
        }
      },
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWxpZGF0aW9uLW1lc3NhZ2UvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZhbGlkYXRpb24tbWVzc2FnZVxcdmFsaWRhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"],
      data: {
        animation: [_modules_shared_animations_toggle_slide_animation__WEBPACK_IMPORTED_MODULE_1__["toggleSlideAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-validation-message',
          templateUrl: './validation-message.component.html',
          styleUrls: ['./validation-message.component.scss'],
          animations: [_modules_shared_animations_toggle_slide_animation__WEBPACK_IMPORTED_MODULE_1__["toggleSlideAnimation"]]
        }]
      }], null, {
        invalid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/validation-message/validation-message.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/validation-message/validation-message.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ValidationMessageModule */

  /***/
  function srcAppComponentsValidationMessageValidationMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationMessageModule", function () {
      return ValidationMessageModule;
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


    var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/validation-message/validation-message.component */
    "./src/app/components/validation-message/validation-message.component.ts");

    var ValidationMessageModule = function ValidationMessageModule() {
      _classCallCheck(this, ValidationMessageModule);
    };

    ValidationMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ValidationMessageModule
    });
    ValidationMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ValidationMessageModule_Factory(t) {
        return new (t || ValidationMessageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ValidationMessageModule, {
        declarations: [_components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/enums/icon-class.enum.ts":
  /*!******************************************!*\
    !*** ./src/app/enums/icon-class.enum.ts ***!
    \******************************************/

  /*! exports provided: iconClass */

  /***/
  function srcAppEnumsIconClassEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iconClass", function () {
      return iconClass;
    });

    var iconClass;

    (function (iconClass) {
      iconClass["SHOW"] = "fa fa-eye";
      iconClass["USER"] = "fa fa-user";
      iconClass["TEXT"] = "fa fa-comment";
      iconClass["EMAIL"] = "fa fa-envelope";
      iconClass["PASSWORD"] = "fa fa-lock";
    })(iconClass || (iconClass = {}));
    /***/

  },

  /***/
  "./src/app/enums/input-type.enum.ts":
  /*!******************************************!*\
    !*** ./src/app/enums/input-type.enum.ts ***!
    \******************************************/

  /*! exports provided: inputType */

  /***/
  function srcAppEnumsInputTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "inputType", function () {
      return inputType;
    });

    var inputType;

    (function (inputType) {
      inputType["TEXT"] = "text";
      inputType["NAME"] = "name";
      inputType["EMAIL"] = "email";
      inputType["PASSWORD"] = "password";
    })(inputType || (inputType = {}));
    /***/

  },

  /***/
  "./src/app/modules/shared/animations/toggle-slide.animation.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/shared/animations/toggle-slide.animation.ts ***!
    \*********************************************************************/

  /*! exports provided: toggleSlideAnimation */

  /***/
  function srcAppModulesSharedAnimationsToggleSlideAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleSlideAnimation", function () {
      return toggleSlideAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var toggleSlideAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      maxHeight: '100px',
      opacity: '1'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      maxHeight: '0px',
      opacity: '0'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: '0'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      maxHeight: '0px'
    }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      maxHeight: '100px'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: '1'
    }))])])])];
    /***/
  }
}]);
//# sourceMappingURL=default~containers-pages-private-portal-profile-profile-module~containers-pages-private-portal-workf~03791db4-es5.js.map