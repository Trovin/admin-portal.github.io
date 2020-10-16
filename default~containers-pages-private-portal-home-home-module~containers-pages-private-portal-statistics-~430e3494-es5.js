function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-statistics-~430e3494"], {
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

  },

  /***/
  "./src/app/modules/services/task-rest-service/task-rest.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/services/task-rest-service/task-rest.service.ts ***!
    \*************************************************************************/

  /*! exports provided: TaskRestService */

  /***/
  function srcAppModulesServicesTaskRestServiceTaskRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskRestService", function () {
      return TaskRestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TaskRestService =
    /*#__PURE__*/
    function () {
      function TaskRestService(http) {
        _classCallCheck(this, TaskRestService);

        this.http = http;
      }

      _createClass(TaskRestService, [{
        key: "createTask",
        value: function createTask(newTask) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tasks/create"), newTask);
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tasks"));
        }
      }, {
        key: "getTasksByLists",
        value: function getTasksByLists() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tasks/list"));
        }
      }, {
        key: "getPriorityTasks",
        value: function getPriorityTasks() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tasks/?isPriority=true"));
        }
      }, {
        key: "updateTaskById",
        value: function updateTaskById(id, task) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tasks/update/").concat(id), task);
        }
      }, {
        key: "updateTasksLists",
        value: function updateTasksLists(data) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tasks/lists"), data);
        }
      }, {
        key: "deleteTaskById",
        value: function deleteTaskById(id) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/tasks/delete/").concat(id));
        }
      }]);

      return TaskRestService;
    }();

    TaskRestService.ɵfac = function TaskRestService_Factory(t) {
      return new (t || TaskRestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TaskRestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskRestService,
      factory: TaskRestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskRestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~containers-pages-private-portal-home-home-module~containers-pages-private-portal-statistics-~430e3494-es5.js.map