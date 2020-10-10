function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-pages-private-portal-statistics-statistics-module"], {
  /***/
  "./src/app/containers/pages/private/portal/statistics/statistics-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/statistics/statistics-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: statisticsRoutes, StatisticsRoutingModule */

  /***/
  function srcAppContainersPagesPrivatePortalStatisticsStatisticsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "statisticsRoutes", function () {
      return statisticsRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsRoutingModule", function () {
      return StatisticsRoutingModule;
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


    var _containers_pages_private_portal_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @containers/pages/private/portal/statistics/statistics.component */
    "./src/app/containers/pages/private/portal/statistics/statistics.component.ts");

    var statisticsRoutes = [{
      path: '',
      component: _containers_pages_private_portal_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"]
    }];

    var StatisticsRoutingModule = function StatisticsRoutingModule() {
      _classCallCheck(this, StatisticsRoutingModule);
    };

    StatisticsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StatisticsRoutingModule
    });
    StatisticsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StatisticsRoutingModule_Factory(t) {
        return new (t || StatisticsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(statisticsRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatisticsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(statisticsRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/pages/private/portal/statistics/statistics.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/statistics/statistics.component.ts ***!
    \************************************************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppContainersPagesPrivatePortalStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
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


    var _enums_safe_chart_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @enums/safe-chart-type.enum */
    "./src/app/enums/safe-chart-type.enum.ts");
    /* harmony import */


    var _services_task_service_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services/task-service/task.service */
    "./src/app/modules/services/task-service/task.service.ts");
    /* harmony import */


    var _services_compose_chart_service_compose_chart_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services/compose-chart-service/compose-chart-data.service */
    "./src/app/modules/services/compose-chart-service/compose-chart-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../components/chart/chart.component */
    "./src/app/components/chart/chart.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function StatisticsComponent_mat_spinner_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 26);
      }
    }

    var StatisticsComponent =
    /*#__PURE__*/
    function () {
      function StatisticsComponent(taskService, chartDataService) {
        _classCallCheck(this, StatisticsComponent);

        this.taskService = taskService;
        this.chartDataService = chartDataService;
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.chartStats = {
          text: '',
          values: [],
          labels: [],
          colors: []
        };
        this.loading = true;
        this.chartType = _enums_safe_chart_type_enum__WEBPACK_IMPORTED_MODULE_2__["safeChartType"];
      }

      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.stream = this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.loading = false;
            _this.chartStats = _this.chartDataService.composeData(tasks);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stream.unsubscribe();
        }
      }]);

      return StatisticsComponent;
    }();

    StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) {
      return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_compose_chart_service_compose_chart_data_service__WEBPACK_IMPORTED_MODULE_4__["ComposeChartDataService"]));
    };

    StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatisticsComponent,
      selectors: [["app-statistics"]],
      decls: 13,
      vars: 21,
      consts: [[1, "headline"], ["class", "spinner-icon", 3, "diameter", 4, "ngIf"], [1, "grid-container"], [1, "item-card"], ["idKey", "1", 3, "type", "text", "values", "labels", "colors"], ["idKey", "2", 3, "type", "text", "values", "labels", "colors"], ["idKey", "3", 3, "type", "text", "values", "labels", "colors"], ["idKey", "4", 3, "type", "text", "values", "labels", "colors"], [1, "spinner-icon", 3, "diameter"]],
      template: function StatisticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Common statistics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatisticsComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-chart", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-chart", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-chart", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-chart", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chartType.BAR)("text", ctx.chartStats.text)("values", ctx.chartStats.values)("labels", ctx.chartStats.labels)("colors", ctx.chartStats.colors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chartType.LINE)("text", ctx.chartStats.text)("values", ctx.chartStats.values)("labels", ctx.chartStats.labels)("colors", ctx.chartStats.colors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chartType.RADAR)("text", ctx.chartStats.text)("values", ctx.chartStats.values)("labels", ctx.chartStats.labels)("colors", ctx.chartStats.colors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chartType.POLAR_AREA)("text", ctx.chartStats.text)("values", ctx.chartStats.values)("labels", ctx.chartStats.labels)("colors", ctx.chartStats.colors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__["ChartComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]],
      styles: ["@media screen and (max-width: 860px) {\n  .item-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .grid-container[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wYWdlcy9wcml2YXRlL3BvcnRhbC9zdGF0aXN0aWNzL0M6XFxVc2Vyc1xcd2VidHJcXERlc2t0b3BcXGFuZ3VsYXIgcHJvamVjdHNcXE1WUF9OXFxtZXJrdXJ5L3NyY1xcYXBwXFxjb250YWluZXJzXFxwYWdlc1xccHJpdmF0ZVxccG9ydGFsXFxzdGF0aXN0aWNzXFxzdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3BhZ2VzL3ByaXZhdGUvcG9ydGFsL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFO0lBQ0UsV0FBQTtFQ0FGOztFREdBO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtJQUFBLDhCQUFBO1FBQUEsMEJBQUE7WUFBQSxzQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3BhZ2VzL3ByaXZhdGUvcG9ydGFsL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XHJcblxyXG4gIC5pdGVtLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcbiAgLml0ZW0tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statistics',
          templateUrl: './statistics.component.html',
          styleUrls: ['./statistics.component.scss']
        }]
      }], function () {
        return [{
          type: _services_task_service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
        }, {
          type: _services_compose_chart_service_compose_chart_data_service__WEBPACK_IMPORTED_MODULE_4__["ComposeChartDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/containers/pages/private/portal/statistics/statistics.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/containers/pages/private/portal/statistics/statistics.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: StatisticsModule */

  /***/
  function srcAppContainersPagesPrivatePortalStatisticsStatisticsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsModule", function () {
      return StatisticsModule;
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


    var _components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/chart/chart.module */
    "./src/app/components/chart/chart.module.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _containers_pages_private_portal_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @containers/pages/private/portal/statistics/statistics.component */
    "./src/app/containers/pages/private/portal/statistics/statistics.component.ts");
    /* harmony import */


    var _containers_pages_private_portal_statistics_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @containers/pages/private/portal/statistics/statistics-routing.module */
    "./src/app/containers/pages/private/portal/statistics/statistics-routing.module.ts");

    var StatisticsModule = function StatisticsModule() {
      _classCallCheck(this, StatisticsModule);
    };

    StatisticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StatisticsModule
    });
    StatisticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StatisticsModule_Factory(t) {
        return new (t || StatisticsModule)();
      },
      imports: [[_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_pages_private_portal_statistics_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsRoutingModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatisticsModule, {
        declarations: [_containers_pages_private_portal_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]],
        imports: [_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_pages_private_portal_statistics_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsRoutingModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]],
        exports: [_containers_pages_private_portal_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers_pages_private_portal_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]],
          imports: [_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _containers_pages_private_portal_statistics_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsRoutingModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]],
          exports: [_containers_pages_private_portal_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=containers-pages-private-portal-statistics-statistics-module-es5.js.map