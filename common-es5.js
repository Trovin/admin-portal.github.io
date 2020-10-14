function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/components/chart/chart.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/chart/chart.component.ts ***!
    \*****************************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppComponentsChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _enums_safe_chart_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @enums/safe-chart-type.enum */
    "./src/app/enums/safe-chart-type.enum.ts");
    /* harmony import */


    var _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services/app-settings-service/app-settings.service */
    "./src/app/modules/services/app-settings-service/app-settings.service.ts");

    var _c0 = ["canvas"];

    var ChartComponent =
    /*#__PURE__*/
    function () {
      function ChartComponent(settingsService) {
        var _this = this;

        _classCallCheck(this, ChartComponent);

        this.settingsService = settingsService;
        this.chartType = _enums_safe_chart_type_enum__WEBPACK_IMPORTED_MODULE_4__["safeChartType"];
        this.type = this.chartType.DOUGHNUT;
        this.text = '';
        this.idKey = '1';
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.largeScreen = true;
        this.labelColor = '#8492af';
        this.innerTextColor = '#a5afc4';
        this.mainChartColor = 'rgba(47, 80, 168, .7)';
        this.composeTitlePlugin = {
          id: 'innerText',
          beforeDraw: function beforeDraw(chart) {
            var ctx = chart.chart.ctx;
            var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
            var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
            var text = _this.text;
            var ident = _this.text.length > 1 ? 10 : 5;
            ctx.restore();
            ctx.font = 'bold 28px Roboto';
            ctx.fillStyle = _this.innerTextColor;
            ctx.textBaseline = 'middle';
            ctx.fillText(text, centerX - ident, centerY);
            ctx.save();
          }
        };
      }

      _createClass(ChartComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this2 = this;

          this.renderChart();
          this.composeTitle();
          this.stream = this.settingsService.screenSizeObserver.subscribe(function (value) {
            _this2.largeScreen = value !== _enums_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["Breakpoint"].SM;

            _this2.renderChart();
          });
        }
      }, {
        key: "renderChart",
        value: function renderChart() {
          var _a;

          (_a = this.chart) === null || _a === void 0 ? void 0 : _a.destroy();
          this.composeChart();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stream.unsubscribe();
          chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].pluginService.unregister(this.composeTitlePlugin);
        }
      }, {
        key: "composeChart",
        value: function composeChart() {
          this.currentId = 'canvas' + this.idKey;
          this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.chartRef.nativeElement.getContext('2d'), {
            type: this.type,
            data: {
              labels: this.labels,
              datasets: [{
                data: this.values,
                borderWidth: 2,
                borderColor: this.mainChartColor,
                backgroundColor: this.backgroundColor
              }]
            },
            options: {
              plugins: {
                innerText: this.showText
              },
              title: {
                display: false
              },
              legend: {
                display: this.showLabels,
                labels: {
                  boxWidth: 8,
                  padding: 15,
                  fontSize: 18,
                  fontStyle: '300',
                  fontColor: this.labelColor,
                  usePointStyle: true,
                  fontFamily: 'Roboto'
                },
                align: 'center',
                position: 'right'
              }
            }
          });
        }
      }, {
        key: "composeTitle",
        value: function composeTitle() {
          chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"].pluginService.register(this.composeTitlePlugin);
        }
      }, {
        key: "isDoughnutChart",
        get: function get() {
          return this.type === this.chartType.DOUGHNUT;
        }
      }, {
        key: "showText",
        get: function get() {
          return this.isDoughnutChart && !!this.text;
        }
      }, {
        key: "showLabels",
        get: function get() {
          return this.isDoughnutChart && this.largeScreen;
        }
      }, {
        key: "backgroundColor",
        get: function get() {
          return this.isDoughnutChart ? this.colors : this.mainChartColor;
        }
      }]);

      return ChartComponent;
    }();

    ChartComponent.ɵfac = function ChartComponent_Factory(t) {
      return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"]));
    };

    ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartComponent,
      selectors: [["app-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartRef = _t.first);
        }
      },
      inputs: {
        type: "type",
        text: "text",
        idKey: "idKey",
        labels: "labels",
        values: "values",
        colors: "colors",
        itemsCount: "itemsCount"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 1,
      consts: [[3, "hidden"], ["id", "currentId"], ["canvas", ""]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.chart);
        }
      },
      styles: [".home[_nghost-%COMP%]   canvas[_ngcontent-%COMP%], .home   [_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydC9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhcnRcXGNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5ob21lKSBjYW52YXMge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuIiwiOmhvc3QtY29udGV4dCguaG9tZSkgY2FudmFzIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chart',
          templateUrl: './chart.component.html',
          styleUrls: ['./chart.component.scss']
        }]
      }], function () {
        return [{
          type: _services_app_settings_service_app_settings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"]
        }];
      }, {
        chartRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas', {
            "static": true
          }]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        values: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemsCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chart/chart.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/chart/chart.module.ts ***!
    \**************************************************/

  /*! exports provided: ChartModule */

  /***/
  function srcAppComponentsChartChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartModule", function () {
      return ChartModule;
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


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chart.component */
    "./src/app/components/chart/chart.component.ts");

    var ChartModule = function ChartModule() {
      _classCallCheck(this, ChartModule);
    };

    ChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChartModule
    });
    ChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChartModule_Factory(t) {
        return new (t || ChartModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartModule, {
        declarations: [_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"]],
        exports: [_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"]],
          exports: [_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/large-headline/large-headline.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/large-headline/large-headline.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LargeHeadlineComponent */

  /***/
  function srcAppComponentsLargeHeadlineLargeHeadlineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LargeHeadlineComponent", function () {
      return LargeHeadlineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LargeHeadlineComponent =
    /*#__PURE__*/
    function () {
      function LargeHeadlineComponent() {
        _classCallCheck(this, LargeHeadlineComponent);
      }

      _createClass(LargeHeadlineComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var text = this.headline.split(' ');
          this.decoratedText = text.pop();
          this.text = text.join(' ');
        }
      }]);

      return LargeHeadlineComponent;
    }();

    LargeHeadlineComponent.ɵfac = function LargeHeadlineComponent_Factory(t) {
      return new (t || LargeHeadlineComponent)();
    };

    LargeHeadlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LargeHeadlineComponent,
      selectors: [["app-large-headline"]],
      inputs: {
        headline: "headline"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 2,
      consts: [[1, "large-headline"], [1, "theme-text"]],
      template: function LargeHeadlineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.decoratedText);
        }
      },
      styles: [".large-headline[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 46px;\n  font-weight: 300;\n  color: #2f50a8;\n  margin-bottom: 60px;\n}\n.auth-body[_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%], .auth-body   [_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n@media screen and (max-width: 768px) {\n  .large-headline[_ngcontent-%COMP%], .auth-body[_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%], .auth-body   [_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%] {\n    font-size: 36px;\n    margin-bottom: 30px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .large-headline[_ngcontent-%COMP%], .auth-body[_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%], .auth-body   [_nghost-%COMP%]   .large-headline[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXJnZS1oZWFkbGluZS9DOlxcVXNlcnNcXHdlYnRyXFxEZXNrdG9wXFxhbmd1bGFyIHByb2plY3RzXFxNVlBfTlxcbWVya3VyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFyZ2UtaGVhZGxpbmUvQzpcXFVzZXJzXFx3ZWJ0clxcRGVza3RvcFxcYW5ndWxhciBwcm9qZWN0c1xcTVZQX05cXG1lcmt1cnkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhcmdlLWhlYWRsaW5lXFxsYXJnZS1oZWFkbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXJnZS1oZWFkbGluZS9sYXJnZS1oZWFkbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBNkNBLFlBQUE7QUFVQSxnQkFBQTtBQU1BLFVBQUE7QUMzREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNEb0NlO0VDbkNmLG1CQUFBO0FDR0Y7QURBQTtFQUNFLG1CQUFBO0FDR0Y7QURBQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0U7SUFDRSxlQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFyZ2UtaGVhZGxpbmUvbGFyZ2UtaGVhZGxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb2xvcnMgKi9cclxuJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kYmxhY2stY29sb3I6ICMwMDA7XHJcblxyXG4kZXJyb3I6ICNmZjczNzM7XHJcbiRjb21wbGV0ZTogIzc5ZWQ0OTtcclxuXHJcbiRwbGFjZWhvbGRlcjogI2IwYjBiMDtcclxuJGZvcm0taXRlbS1jb2xvcjogI2IwYjBiMDtcclxuXHJcbiRpbnB1dC10ZXh0OiAjODQ5MmFmO1xyXG4kaW5wdXQtYm9yZGVyOiAjZjZmNmY2O1xyXG4kaW5wdXQtYm9yZGVyLS1ob3ZlcjogI2VlZWJlYjtcclxuXHJcbiRib3JkZXI6ICNkNGQ5ZTM7XHJcbiRib3JkZXItbGlnaHQ6ICNjY2M7XHJcblxyXG4kYmFja2dyb3VuZDogI2Y2ZjdmYTtcclxuXHJcbiR0aGVtZS1jb2xvcjogIzBlMWEzNTtcclxuXHJcbiR0aGVtZS1kYXJrLWNvbG9yOiAjMTEzNTkzO1xyXG4kdGhlbWUtZGFyay1jb2xvci1pdGVtczogIzU1ODRmZjtcclxuJHRoZW1lLWRhcmstY29sb3ItaXRlbXMtLWhvdmVyOiAjNTU4NGZmO1xyXG5cclxuJHRoZW1lLWxpZ2h0LWNvbG9yOiAjNGM1MGM2O1xyXG4kdGhlbWUtbGlnaHQtY29sb3ItaXRlbXM6ICM0ZjM5ZDc7XHJcbiR0aGVtZS1saWdodC1jb2xvci1pdGVtcy0taG92ZXI6ICM1NTg0ZmY7XHJcblxyXG4kbmF2LWl0ZW0tY29sb3I6ICMxMjIxNDM7XHJcblxyXG4kZGVjb3ItaXRlbS0taG92ZXI6ICMzYjU2ZGI7XHJcbiRkZWNvci1pdGVtLS1hY3RpdmU6ICM1NTg0ZmY7XHJcblxyXG4kYnRuOiAjNzk5ZWZiO1xyXG4kYnRuLWRlY29yOiAjNGM3YmY2O1xyXG4kYnRuLS1kaXNhYmxlZDogI2NjYztcclxuXHJcbiR0ZXh0LXNoYWRvdzogI2IxYzBlMjtcclxuJHRleHQtY29sb3I6ICM3NjdiYjA7XHJcbiRzdWItaGVhZGxpbmUtY29sb3I6ICM4NDkyYWY7XHJcblxyXG4kaGVhZGxpbmUtY29sb3I6ICMyZjUwYTg7XHJcblxyXG5cclxuLyogc2lkZWJhciAqL1xyXG4kc2lkZWJhci13aWR0aC14czogMTAwJTtcclxuJHNpZGViYXItd2lkdGgtbWQ6IDI2MHB4O1xyXG4kc2lkZWJhci13aWR0aC1sZzogMzIwcHg7XHJcblxyXG4kd3JhcHBlci13aWR0aC14czogMTAwJTtcclxuJHdyYXBwZXItd2lkdGgtbWQ6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuJHdyYXBwZXItd2lkdGgtbGc6IGNhbGMoMTAwJSAtIDMyMHB4KTtcclxuXHJcblxyXG4vKiB0cmFuc2l0aW9ucyAqL1xyXG4kdHJhbnNpdGlvbjogLjRzO1xyXG4kc2hvcnQtdHJhbnNpdGlvbjogLjNzO1xyXG4kbG9uZy10cmFuc2l0aW9uOiAuNnM7XHJcblxyXG5cclxuLyogZm9udHMgKi9cclxuJGJhc2UtZm9udHM6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ09wZW4gU2FucycsICdzYW5zLXNlcmlmJywgJ0FyaWFsJztcclxuXHJcblxyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLmxhcmdlLWhlYWRsaW5lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICRoZWFkbGluZS1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5hdXRoLWJvZHkpIC5sYXJnZS1oZWFkbGluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubGFyZ2UtaGVhZGxpbmUsIDpob3N0LWNvbnRleHQoLmF1dGgtYm9keSkgLmxhcmdlLWhlYWRsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gIC5sYXJnZS1oZWFkbGluZSwgOmhvc3QtY29udGV4dCguYXV0aC1ib2R5KSAubGFyZ2UtaGVhZGxpbmUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG4iLCIvKiBjb2xvcnMgKi9cbi8qIHNpZGViYXIgKi9cbi8qIHRyYW5zaXRpb25zICovXG4vKiBmb250cyAqL1xuLmxhcmdlLWhlYWRsaW5lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMmY1MGE4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5hdXRoLWJvZHkpIC5sYXJnZS1oZWFkbGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sYXJnZS1oZWFkbGluZSwgOmhvc3QtY29udGV4dCguYXV0aC1ib2R5KSAubGFyZ2UtaGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAubGFyZ2UtaGVhZGxpbmUsIDpob3N0LWNvbnRleHQoLmF1dGgtYm9keSkgLmxhcmdlLWhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LargeHeadlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-large-headline',
          templateUrl: './large-headline.component.html',
          styleUrls: ['./large-headline.component.scss']
        }]
      }], null, {
        headline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/large-headline/large-headline.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/large-headline/large-headline.module.ts ***!
    \********************************************************************/

  /*! exports provided: LargeHeadlineModule */

  /***/
  function srcAppComponentsLargeHeadlineLargeHeadlineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LargeHeadlineModule", function () {
      return LargeHeadlineModule;
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


    var _components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/large-headline/large-headline.component */
    "./src/app/components/large-headline/large-headline.component.ts");

    var LargeHeadlineModule = function LargeHeadlineModule() {
      _classCallCheck(this, LargeHeadlineModule);
    };

    LargeHeadlineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LargeHeadlineModule
    });
    LargeHeadlineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LargeHeadlineModule_Factory(t) {
        return new (t || LargeHeadlineModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LargeHeadlineModule, {
        declarations: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LargeHeadlineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_components_large_headline_large_headline_component__WEBPACK_IMPORTED_MODULE_2__["LargeHeadlineComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/enums/safe-chart-type.enum.ts":
  /*!***********************************************!*\
    !*** ./src/app/enums/safe-chart-type.enum.ts ***!
    \***********************************************/

  /*! exports provided: safeChartType */

  /***/
  function srcAppEnumsSafeChartTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "safeChartType", function () {
      return safeChartType;
    });
    /* declared types of custom tuned charts */


    var safeChartType;

    (function (safeChartType) {
      safeChartType["PIE"] = "pie";
      safeChartType["BAR"] = "bar";
      safeChartType["LINE"] = "line";
      safeChartType["RADAR"] = "radar";
      safeChartType["DOUGHNUT"] = "doughnut";
      safeChartType["POLAR_AREA"] = "polarArea";
    })(safeChartType || (safeChartType = {}));
    /***/

  },

  /***/
  "./src/app/modules/services/compose-chart-service/compose-chart-data.service.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/services/compose-chart-service/compose-chart-data.service.ts ***!
    \**************************************************************************************/

  /*! exports provided: ComposeChartDataService */

  /***/
  function srcAppModulesServicesComposeChartServiceComposeChartDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComposeChartDataService", function () {
      return ComposeChartDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ComposeChartDataService =
    /*#__PURE__*/
    function () {
      function ComposeChartDataService() {
        _classCallCheck(this, ComposeChartDataService);

        this.defaultColors = ['#25396e', '#3755a4', '#4164c2', '#4163c2', '#4162c2'];
      }

      _createClass(ComposeChartDataService, [{
        key: "composeData",
        value: function composeData(items) {
          var newStats = {
            text: '',
            values: [],
            labels: [],
            colors: []
          };

          if (items.length) {
            newStats.text = String(items.length);
            newStats.colors = this.defaultColors;
            var labelsSet = new Set();
            items.forEach(function (item) {
              return labelsSet.add(item.status);
            });
            newStats.labels = Array.from(labelsSet);
            items.forEach(function (item) {
              var index = newStats.labels.indexOf(item.status);
              newStats.values[index] = newStats.values[index] ? newStats.values[index] + 1 : 1;
            });
          }

          return newStats;
        }
      }]);

      return ComposeChartDataService;
    }();

    ComposeChartDataService.ɵfac = function ComposeChartDataService_Factory(t) {
      return new (t || ComposeChartDataService)();
    };

    ComposeChartDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ComposeChartDataService,
      factory: ComposeChartDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComposeChartDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map