(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkdocker_jenkins_angular"] = self["webpackChunkdocker_jenkins_angular"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    7446:
    /*!******************************************************************!*\
      !*** ./src/app/_components/check-boxes/check-boxes.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckBoxesComponent": function CheckBoxesComponent() {
          return (
            /* binding */
            _CheckBoxesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/checkbox */
      4058);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function CheckBoxesComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckBoxesComponent_li_9_Template_mat_checkbox_ngModelChange_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var subtask_r1 = restoredCtx.$implicit;
            return subtask_r1.completed = $event;
          })("ngModelChange", function CheckBoxesComponent_li_9_Template_mat_checkbox_ngModelChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.updateAllComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subtask_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", subtask_r1.completed)("color", subtask_r1.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subtask_r1.name, " ");
        }
      }

      var _CheckBoxesComponent = /*#__PURE__*/function () {
        function _CheckBoxesComponent() {
          _classCallCheck(this, _CheckBoxesComponent);

          this.checked = false;
          this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [{
              name: 'Primary',
              completed: false,
              color: 'primary'
            }, {
              name: 'Accent',
              completed: false,
              color: 'accent'
            }, {
              name: 'Warn',
              completed: false,
              color: 'warn'
            }]
          };
          this.allComplete = false;
        }

        _createClass(_CheckBoxesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateAllComplete",
          value: function updateAllComplete() {
            this.allComplete = this.task.subtasks != null && this.task.subtasks.every(function (t) {
              return t.completed;
            });
          }
        }, {
          key: "someComplete",
          value: function someComplete() {
            if (this.task.subtasks == null) {
              return false;
            }

            return this.task.subtasks.filter(function (t) {
              return t.completed;
            }).length > 0 && !this.allComplete;
          }
        }, {
          key: "setAll",
          value: function setAll(completed) {
            this.allComplete = completed;

            if (this.task.subtasks == null) {
              return;
            }

            this.task.subtasks.forEach(function (t) {
              return t.completed = completed;
            });
          }
        }]);

        return _CheckBoxesComponent;
      }();

      _CheckBoxesComponent.ɵfac = function CheckBoxesComponent_Factory(t) {
        return new (t || _CheckBoxesComponent)();
      };

      _CheckBoxesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CheckBoxesComponent,
        selectors: [["app-check-boxes"]],
        decls: 10,
        vars: 5,
        consts: [[1, "example-section"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "color", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]],
        template: function CheckBoxesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check-boxes practice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckBoxesComponent_Template_mat_checkbox_change_5_listener($event) {
              return ctx.setAll($event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckBoxesComponent_li_9_Template, 3, 3, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.task.subtasks);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3hlcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    9301:
    /*!********************************************************************!*\
      !*** ./src/app/_components/date-pickers/date-pickers.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DatePickersComponent": function DatePickersComponent() {
          return (
            /* binding */
            _DatePickersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      4742);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/datepicker */
      2937);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      781);

      var _DatePickersComponent = /*#__PURE__*/function () {
        function _DatePickersComponent() {
          _classCallCheck(this, _DatePickersComponent);

          var today = new Date();
          var month = today.getMonth();
          var year = today.getFullYear();
          this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(new Date(year, month, 13)),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(new Date(year, month, 16))
          });
          this.campaignTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(new Date(year, month, 15)),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(new Date(year, month, 19))
          });
        }

        _createClass(_DatePickersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DatePickersComponent;
      }();

      _DatePickersComponent.ɵfac = function DatePickersComponent_Factory(t) {
        return new (t || _DatePickersComponent)();
      };

      _DatePickersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DatePickersComponent,
        selectors: [["app-date-pickers"]],
        decls: 28,
        vars: 4,
        consts: [["appearance", "fill", 1, "example-form-field"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["rangePicker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", ""]],
        template: function DatePickersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-datepicker", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-datepicker-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Enter a date range");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-date-range-input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-datepicker-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-date-range-picker", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-date-range-picker-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerApply, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDateRangePicker],
        styles: [".example-form-field[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n  }\r\n\r\n  mat-card[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcGlja2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJkYXRlLXBpY2tlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfSAgIl19 */"]
      });
      /***/
    },

    /***/
    496:
    /*!****************************************************************!*\
      !*** ./src/app/_components/drop-downs/drop-downs.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropDownsComponent": function DropDownsComponent() {
          return (
            /* binding */
            _DropDownsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/select */
      7007);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      4742);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      2220);

      function DropDownsComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var food_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r2.viewValue, " ");
        }
      }

      function DropDownsComponent_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var car_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", car_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", car_r3.viewValue, " ");
        }
      }

      var _DropDownsComponent = /*#__PURE__*/function () {
        function _DropDownsComponent() {
          _classCallCheck(this, _DropDownsComponent);

          this.foods = [{
            value: 'steak-0',
            viewValue: 'Steak'
          }, {
            value: 'pizza-1',
            viewValue: 'Pizza'
          }, {
            value: 'tacos-2',
            viewValue: 'Tacos'
          }];
          this.cars = [{
            value: 'ford',
            viewValue: 'Ford'
          }, {
            value: 'volvo',
            viewValue: 'Volvo'
          }, {
            value: 'saab',
            viewValue: 'Saab'
          }, {
            value: 'mercedes',
            viewValue: 'Mercedes'
          }];
        }

        _createClass(_DropDownsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DropDownsComponent;
      }();

      _DropDownsComponent.ɵfac = function DropDownsComponent_Factory(t) {
        return new (t || _DropDownsComponent)();
      };

      _DropDownsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DropDownsComponent,
        selectors: [["app-drop-downs"]],
        decls: 21,
        vars: 6,
        consts: [["appearance", "fill"], ["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]],
        template: function DropDownsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Favorite food");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DropDownsComponent_Template_mat_select_ngModelChange_7_listener($event) {
              return ctx.selectedValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DropDownsComponent_mat_option_8_Template, 2, 2, "mat-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "native html select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Favorite car");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DropDownsComponent_Template_select_ngModelChange_16_listener($event) {
              return ctx.selectedCar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DropDownsComponent_option_18_Template, 2, 2, "option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foods);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Selected food: ", ctx.selectedValue, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cars);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Selected car: ", ctx.selectedCar, " ");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wLWRvd25zLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    6948:
    /*!****************************************************************!*\
      !*** ./src/app/_components/end-to-end/end-to-end.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EndToEndComponent": function EndToEndComponent() {
          return (
            /* binding */
            _EndToEndComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EndToEndComponent = /*#__PURE__*/function () {
        function _EndToEndComponent() {
          _classCallCheck(this, _EndToEndComponent);
        }

        _createClass(_EndToEndComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _EndToEndComponent;
      }();

      _EndToEndComponent.ɵfac = function EndToEndComponent_Factory(t) {
        return new (t || _EndToEndComponent)();
      };

      _EndToEndComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EndToEndComponent,
        selectors: [["app-end-to-end"]],
        decls: 2,
        vars: 0,
        template: function EndToEndComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "end-to-end works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmQtdG8tZW5kLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    6488:
    /*!********************************************************!*\
      !*** ./src/app/_components/footer/footer.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/global-events-manager.service */
      9779);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      4106);

      function FooterComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " 18+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Created by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Kostiantyn Teltov");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contact Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Skype:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" for training purposes. ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 4, ctx_r0.createdYear, "yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 7, ctx_r0.yearNow, "yyyy"), " @NON-COMMERCIAL USE PERMITTED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.email, "; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.skype, ". ");
        }
      }

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent(globalEventsManager) {
          var _this = this;

          _classCallCheck(this, _FooterComponent);

          this.globalEventsManager = globalEventsManager;
          this.createdYear = new Date(2019, 8, 6);
          this.yearNow = new Date();
          this.email = 'dneprokos@gmail.com';
          this.skype = 'dneprokos';
          this.globalEventsManager.showNavBarEmitter.subscribe(function (mode) {
            _this.isComponentShown = mode;
          });
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_0__.GlobalEventsManagerService));
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["footer"]],
        decls: 1,
        vars: 1,
        consts: [["class", "toolbar", 4, "ngIf"], [1, "toolbar"], ["color", "primary"], [1, "text"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 18, 10, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isComponentShown);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        styles: [".text[_ngcontent-%COMP%] {\r\n    padding-left: 60%;\r\n    font-size: 12px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n    background-color: aqua;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    1440:
    /*!****************************************************!*\
      !*** ./src/app/_components/home/home.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/grid-list */
      5937);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      2118);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent() {
          _classCallCheck(this, _HomeComponent);

          this.dockerText = "Docker is a set of coupled software-as-a-service and platform-as-a-service products that \n  use operating-system-level virtualization to develop and deliver software in packages called containers.\n  The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc. \n  The service has both free and premium tiers. Containers are isolated from one another and bundle their own software, libraries \n  and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single \n  operating-system kernel and are thus more lightweight than virtual machines. Containers are created from images that specify their \n  precise contents. Images are often created by combining and modifying standard images downloaded from public repositories. \n  Docker is developed primarily for Linux, where it uses the resource isolation features of the Linux kernel such as cgroups and \n  kernel namespaces, and a union-capable file system such as OverlayFS and others[28] to allow independent containers to run within \n  a single Linux instance, avoiding the overhead of starting and maintaining virtual machines (VMs).[29] The Linux kernel's support \n  for namespaces mostly[30] isolates an application's view of the operating environment, including process trees, network, user IDs \n  and mounted file systems, while the kernel's cgroups provide resource limiting for memory and CPU.[31] Since version 0.9, \n  Docker includes the libcontainer library as its own way to directly use virtualization facilities provided by the Linux kernel, \n  in addition to using abstracted virtualization interfaces via libvirt, LXC and systemd-nspawn.";
          this.jenkinsText = "Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part \n  of the software development process, with continuous integration and facilitating technical aspects of continuous delivery. \n  It is a server-based system that runs in servlet containers such as Apache Tomcat.\n    \nIt supports version control tools, including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, TD/OMS, ClearCase and RTC, \n  and can execute Apache Ant, Apache Maven and sbt based projects as well as arbitrary shell scripts and Windows batch commands. \n  The creator of Jenkins is Kohsuke Kawaguchi. Released under the MIT License, Jenkins is free software. Builds can be triggered by \n  various means, for example by commit in a version control system, by scheduling via a cron-like mechanism and by requesting a \n  specific build URL. It can also be triggered after the other builds in the queue have completed. Jenkins functionality can be extended \n  with plugins.\n\n  The Jenkins project was originally named Hudson, and was renamed after a dispute with Oracle, which had forked the project and \n  claimed rights to the project name. The Oracle fork, Hudson, continued to be developed for a time before being donated to the Eclipse Foundation. \n  Oracle's Hudson is no longer maintained and was announced as obsolete in February 2017.";
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["home"]],
        decls: 19,
        vars: 14,
        consts: [[1, "material-icons"], ["cols", "4", "rowHeight", "2:2", "gutterSize", "20px"], [3, "colspan", "rowspan"], ["mat-card-image", "", "width", "80%", "height", "80%", "src", "../../../assets/images/homePage/Docker1.png", "alt", "Docker1 photo", 2, "padding", "30px"], ["mat-card-image", "", "width", "100%", "height", "80%", "src", "../../../assets/images/homePage/Docker2.png", "alt", "Docker2 photo", 1, "image"], ["mat-card-image", "", "width", "80%", "height", "80%", "src", "../../../assets/images/homePage/Jenkins1.png", "alt", "Jenkins1 photo", 2, "padding", "30px"], ["mat-card-image", "", "width", "100%", "height", "80%", "src", "../../../assets/images/homePage/Jenkins2.jpg", "alt", "Jenkins2 photo", 1, "longImage"], [1, "text"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Test website designed for the automation practice. I know, site design is painful. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sentiment_very_satisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2)("rowspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dockerText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2)("rowspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jenkinsText);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridTile, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage],
        styles: ["mat-grid-tile[_ngcontent-%COMP%] {\r\n    background: lightblue;\r\n    justify-content: flex-start !important ;\r\n    align-items: flex-start !important;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    padding-top: 30px;\r\n    font-size: 17px;\r\n    vertical-align: baseline;\r\n}\r\n\r\nmat-card-image[_ngcontent-%COMP%] {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    background-size: cover;\r\n    align-content: center;\r\n    align-self: center;\r\n    align-items: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.longImage[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    padding-left: 1px;\r\n}\r\n\r\n.material-icons[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudCA7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWltYWdlIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubG9uZ0ltYWdlIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    7780:
    /*!********************************************************************!*\
      !*** ./src/app/_components/input-fields/input-fields.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InputFieldsComponent": function InputFieldsComponent() {
          return (
            /* binding */
            _InputFieldsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      4742);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      781);

      var _InputFieldsComponent = /*#__PURE__*/function () {
        function _InputFieldsComponent() {
          _classCallCheck(this, _InputFieldsComponent);
        }

        _createClass(_InputFieldsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "print",
          value: function print() {
            this.shortResume = null;
            console.log(this.firstName);
            console.log(this.lastName);
            this.shortResume = "\n      Here is a short Candidate resume:\n      \tFirst Name: ".concat(this.firstName, "\n      \tLast Name: ").concat(this.lastName, "\n      \tPrimary programming language: ").concat(this.primaryProgrammingLanguage, "\n      \tOther programming languages: ").concat(this.otherProgrammingLenguages, "\n      \tTotal years of experience in QA area: ").concat(this.yearsExperience, "\n      \tLiving in: ").concat(this.city, "  \n    ");
          }
        }]);

        return _InputFieldsComponent;
      }();

      _InputFieldsComponent.ɵfac = function InputFieldsComponent_Factory(t) {
        return new (t || _InputFieldsComponent)();
      };

      _InputFieldsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _InputFieldsComponent,
        selectors: [["app-input-fields"]],
        decls: 50,
        vars: 7,
        consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "disabled", "", "value", "QA Automation"], ["cellspacing", "0", 1, "example-full-width"], ["name", "firstName", "matInput", "", "id", "firstName", 3, "ngModel", "ngModelChange"], ["name", "lastName", "matInput", "", "id", "lastName", 3, "ngModel", "ngModelChange"], ["name", "primaryProgrammingLanguage", "matInput", "", "placeholder", "C#", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "otherProgrammingLenguages", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "yearsExperience", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "city", 3, "ngModel", "ngModelChange"], ["id", "print", "mat-raised-button", "", "color", "primary", 3, "click"], ["appearance", "fill", 1, "resume-text"], ["disabled", "", "matInput", "", "name", "shortResume", 3, "ngModel", "ngModelChange"]],
        template: function InputFieldsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "input-fields works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Role (disabled)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldsComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Long Last Name That Will Be Truncated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldsComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Prefered language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldsComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.primaryProgrammingLanguage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Other programming languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldsComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.otherProgrammingLenguages = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total years experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldsComponent_Template_input_ngModelChange_36_listener($event) {
              return ctx.yearsExperience = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldsComponent_Template_input_ngModelChange_41_listener($event) {
              return ctx.city = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputFieldsComponent_Template_button_click_43_listener() {
              return ctx.print();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Print details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Data will be prineted here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "textarea", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFieldsComponent_Template_textarea_ngModelChange_49_listener($event) {
              return ctx.shortResume = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.primaryProgrammingLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otherProgrammingLenguages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yearsExperience);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.shortResume);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
        styles: [".resume-text[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 600px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWZpZWxkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoiaW5wdXQtZmllbGRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lLXRleHQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    162:
    /*!****************************************************************!*\
      !*** ./src/app/_components/list-boxes/list-boxes.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListBoxesComponent": function ListBoxesComponent() {
          return (
            /* binding */
            _ListBoxesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ListBoxesComponent = /*#__PURE__*/function () {
        function _ListBoxesComponent() {
          _classCallCheck(this, _ListBoxesComponent);
        }

        _createClass(_ListBoxesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ListBoxesComponent;
      }();

      _ListBoxesComponent.ɵfac = function ListBoxesComponent_Factory(t) {
        return new (t || _ListBoxesComponent)();
      };

      _ListBoxesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ListBoxesComponent,
        selectors: [["app-list-boxes"]],
        decls: 2,
        vars: 0,
        template: function ListBoxesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list-boxes works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWJveGVzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    2577:
    /*!******************************************************!*\
      !*** ./src/app/_components/login/login.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/authService/auth-service.service */
      7431);
      /* harmony import */


      var src_app_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/global-events-manager.service */
      9779);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      4742);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tooltip */
      298);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      181);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      781);

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(router, authService, globalEventsManager) {
          _classCallCheck(this, _LoginComponent);

          this.router = router;
          this.authService = authService;
          this.globalEventsManager = globalEventsManager;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.globalEventsManager.showNavBar(false);
          }
        }, {
          key: "login",
          value: function login() {
            var result = this.authService.login(this.username, this.password);

            if (result) {
              this.globalEventsManager.showNavBar(true);
              this.router.navigate(['home']);
              this.globalEventsManager.updateUserName(true);
            } else alert("Invalid credentials");
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_1__.GlobalEventsManagerService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["login"]],
        decls: 20,
        vars: 4,
        consts: [[1, "main-div"], ["layout", "row", "layout-align", "center center", 1, "example-card"], [1, "example-form"], ["cellspacing", "0", 1, "example-full-width"], [1, "example-full-width"], ["id", "login", "matTooltip", "Use 'test@test.com' as user", "matInput", "", "placeholder", "Username", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["id", "password", "matTooltip", "Use 'test' as password", "matInput", "", "placeholder", "Password", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["id", "loginBtn", "mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showSpinner ? "block" : "none");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatSpinner, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
        styles: [".main-div[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdntcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    3493:
    /*!**********************************************************!*\
      !*** ./src/app/_components/nav-bar/nav-bar.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavBarComponent": function NavBarComponent() {
          return (
            /* binding */
            _NavBarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/global-events-manager.service */
      9779);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/authService/auth-service.service */
      7431);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      4106);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      2529);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      221);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);

      function NavBarComponent_div_0_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_div_0_ng_template_50_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r4.SignOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Log off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "work_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NavBarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-toolbar-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "DockerJenkinsAngular");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Check-boxes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "text_fields");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Input fields ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "arrow_drop_down_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Drop-downs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "radio_button_checked");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Radio-buttons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "table_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Table ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "share");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Toggles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "date_range");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Date pickers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "trending_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " E2E scenario ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "trending_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-menu", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, NavBarComponent_div_0_ng_template_50_Template, 8, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-toolbar-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Simple website designed for Docker practice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "check-box");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "input");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "drop-down");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "radio-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "toggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "date-picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "end-to-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.userName);
        }
      }

      var _NavBarComponent = /*#__PURE__*/function () {
        function _NavBarComponent(globalEventsManager, router, authService) {
          var _this2 = this;

          _classCallCheck(this, _NavBarComponent);

          this.globalEventsManager = globalEventsManager;
          this.router = router;
          this.authService = authService;
          this.globalEventsManager.showNavBarEmitter.subscribe(function (mode) {
            _this2.isComponentShown = mode;
          });
          globalEventsManager.showUserNameEmitter.subscribe(function (mode) {
            if (mode) _this2.userName = _this2.authService.getCurrentUser();
          });
        }

        _createClass(_NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.globalEventsManager.showNavBar(true);
            this.userName = this.authService.getCurrentUser();
          }
        }, {
          key: "SignOut",
          value: function SignOut() {
            this.performSignOut();
          }
        }, {
          key: "performSignOut",
          value: function performSignOut() {
            this.router.navigate(['login']);
            this.globalEventsManager.showNavBar(false);
            this.authService.logout();
            this.userName = undefined;
          }
        }]);

        return _NavBarComponent;
      }();

      _NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || _NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_0__.GlobalEventsManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
      };

      _NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _NavBarComponent,
        selectors: [["nav-bar"]],
        decls: 1,
        vars: 1,
        consts: [["class", "toolbar", 4, "ngIf"], [1, "toolbar"], ["color", "primary"], [1, "content"], ["fxShow", "true", "fxHide.lt-md", "true"], [1, "example-spacer"], ["mat-button", "", 3, "routerLink"], [1, "account"], ["appMenu", "matMenu"], ["matMenuContent", ""], ["id", "appMenu", "mat-icon-button", "", 3, "matMenuTriggerFor"], ["md-36", ""], [2, "font-size", "12px"], ["mat-menu-item", "", "id", "settingsBtn"], ["mat-menu-item", "", "id", "signOutBtn", 3, "click"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavBarComponent_div_0_Template, 59, 11, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isComponentShown);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem],
        styles: [".account[_ngcontent-%COMP%] {\r\n    padding: 100px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    padding-left: 15%;\r\n    padding-right: 15%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n }\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 100%;    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQge1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIH1cclxuXHJcbi50b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbn0gIl19 */"]
      });
      /***/
    },

    /***/
    8817:
    /*!**********************************************************************!*\
      !*** ./src/app/_components/radio-buttons/radio-buttons.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RadioButtonsComponent": function RadioButtonsComponent() {
          return (
            /* binding */
            _RadioButtonsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/radio */
      5644);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function RadioButtonsComponent_mat_radio_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var season_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", season_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", season_r1, " ");
        }
      }

      var _RadioButtonsComponent = /*#__PURE__*/function () {
        function _RadioButtonsComponent() {
          _classCallCheck(this, _RadioButtonsComponent);

          this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        }

        _createClass(_RadioButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _RadioButtonsComponent;
      }();

      _RadioButtonsComponent.ɵfac = function RadioButtonsComponent_Factory(t) {
        return new (t || _RadioButtonsComponent)();
      };

      _RadioButtonsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _RadioButtonsComponent,
        selectors: [["app-radio-buttons"]],
        decls: 7,
        vars: 3,
        consts: [["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value"]],
        template: function RadioButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pick your favorite season");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RadioButtonsComponent_Template_mat_radio_group_ngModelChange_3_listener($event) {
              return ctx.favoriteSeason = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RadioButtonsComponent_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.favoriteSeason);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seasons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your favorite season is: ", ctx.favoriteSeason, "");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioButton],
        styles: [".example-radio-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 15px 0;\r\n  }\r\n  \r\n  .example-radio-button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJyYWRpby1idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    4065:
    /*!****************************************************************!*\
      !*** ./src/app/_components/table-page/table-page.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablePageComponent": function TablePageComponent() {
          return (
            /* binding */
            _TablePageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      8021);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      5381);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      4302);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      5788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      4742);

      function TablePageComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TablePageComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12.id, " ");
        }
      }

      function TablePageComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Progress ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TablePageComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13.progress, "% ");
        }
      }

      function TablePageComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TablePageComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r14.name, " ");
        }
      }

      function TablePageComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fruit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TablePageComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r15.fruit, " ");
        }
      }

      function TablePageComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
        }
      }

      function TablePageComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
        }
      }

      function TablePageComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };
      /** Constants used to fill up our data base. */


      var FRUITS = ['blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'];
      var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

      var _TablePageComponent = /*#__PURE__*/function () {
        function _TablePageComponent() {
          _classCallCheck(this, _TablePageComponent);

          this.displayedColumns = ['id', 'name', 'progress', 'fruit']; // Create 100 users

          var users = Array.from({
            length: 100
          }, function (_, k) {
            return createNewUser(k + 1);
          }); // Assign the data to the data source for the table to render

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(users);
        }

        _createClass(_TablePageComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          }
        }]);

        return _TablePageComponent;
      }();

      _TablePageComponent.ɵfac = function TablePageComponent_Factory(t) {
        return new (t || _TablePageComponent)();
      };

      _TablePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TablePageComponent,
        selectors: [["app-table-page"]],
        viewQuery: function TablePageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 24,
        vars: 5,
        consts: [["appearance", "standard"], [1, "filter"], ["matInput", "", "placeholder", "Ex. Mia", 1, "filter", "input", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "fruit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
        template: function TablePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TablePageComponent_Template_input_keyup_4_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TablePageComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TablePageComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TablePageComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TablePageComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TablePageComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TablePageComponent_td_16_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TablePageComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TablePageComponent_td_19_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TablePageComponent_tr_20_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TablePageComponent_tr_21_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TablePageComponent_tr_22_Template, 3, 1, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
        styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    \r\n  }\r\n \r\n  div.mat-elevation-z8[_ngcontent-%COMP%] {\r\n    border-radius:15px\r\n  }\r\n \r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n \r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n \r\n  .filter[_ngcontent-%COMP%] {\r\n    background-color:darkgray;\r\n    margin-bottom: 5px;\r\n    border-radius:15px\r\n  }\r\n \r\n  .filter.input[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n  }\r\n \r\n  mat-label[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0VBRWI7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoidGFibGUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICB9XHJcbiBcclxuICBkaXYubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHhcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrZ3JheTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweFxyXG4gIH1cclxuXHJcbiAgLmZpbHRlci5pbnB1dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtbGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfSJdfQ== */"]
      });
      /** Builds and returns a new User. */

      function createNewUser(id) {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
          id: id.toString(),
          name: name,
          progress: Math.round(Math.random() * 100).toString(),
          fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
        };
      }
      /***/

    },

    /***/
    4950:
    /*!**********************************************************!*\
      !*** ./src/app/_components/toggles/toggles.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TogglesComponent": function TogglesComponent() {
          return (
            /* binding */
            _TogglesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/radio */
      5644);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      4058);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      2080);

      var _TogglesComponent = /*#__PURE__*/function () {
        function _TogglesComponent() {
          _classCallCheck(this, _TogglesComponent);

          this.color = 'accent';
          this.checked = false;
          this.disabled = false;
        }

        _createClass(_TogglesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TogglesComponent;
      }();

      _TogglesComponent.ɵfac = function TogglesComponent_Factory(t) {
        return new (t || _TogglesComponent)();
      };

      _TogglesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TogglesComponent,
        selectors: [["app-toggles"]],
        decls: 27,
        vars: 6,
        consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "result"], [1, "example-margin", 3, "color", "checked", "disabled"]],
        template: function TogglesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Slider configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Color:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TogglesComponent_Template_mat_radio_group_ngModelChange_7_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Primary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Accent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Warn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TogglesComponent_Template_mat_checkbox_ngModelChange_15_listener($event) {
              return ctx.checked = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Checked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TogglesComponent_Template_mat_checkbox_ngModelChange_18_listener($event) {
              return ctx.disabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slide-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Slide me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle],
        styles: [".example-h2[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\r\n  \r\n  .example-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n  }\r\n  \r\n  .example-margin[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJ0b2dnbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oMiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    8282:
    /*!******************************************!*\
      !*** ./src/app/_core/material.module.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomMaterialModule": function CustomMaterialModule() {
          return (
            /* binding */
            _CustomMaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      781);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      2213);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      4742);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      4302);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      4106);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      2529);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      181);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sidenav */
      6608);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/list */
      8417);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/grid-list */
      5937);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      298);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      4058);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      7007);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/radio */
      5644);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      8021);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      2080);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      2937);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      2220);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CustomMaterialModule = function _CustomMaterialModule() {
        _classCallCheck(this, _CustomMaterialModule);
      };

      _CustomMaterialModule.ɵfac = function CustomMaterialModule_Factory(t) {
        return new (t || _CustomMaterialModule)();
      };

      _CustomMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CustomMaterialModule
      });
      _CustomMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule], _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CustomMaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule]
        });
      })();
      /***/

    },

    /***/
    6660:
    /*!*************************************************!*\
      !*** ./src/app/_services/auth-guard.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuardService": function AuthGuardService() {
          return (
            /* binding */
            _AuthGuardService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _authService_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authService/auth-service.service */
      7431);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AuthGuardService = /*#__PURE__*/function () {
        function _AuthGuardService(authService, router) {
          _classCallCheck(this, _AuthGuardService);

          this.authService = authService;
          this.router = router;
        }

        _createClass(_AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            var result = this.authService.isUserLogged();
            if (result) return true;
            this.router.navigate(["login"]);
            return false;
          }
        }]);

        return _AuthGuardService;
      }();

      _AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || _AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuardService,
        factory: _AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7431:
    /*!***************************************************************!*\
      !*** ./src/app/_services/authService/auth-service.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthServiceService": function AuthServiceService() {
          return (
            /* binding */
            _AuthServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AuthServiceService = /*#__PURE__*/function () {
        function _AuthServiceService() {
          _classCallCheck(this, _AuthServiceService);

          this.expectedCredentials = {
            userName: 'test@test.com',
            password: 'test'
          };
        }

        _createClass(_AuthServiceService, [{
          key: "login",
          value: function login(userName, password) {
            console.log(userName, password);

            if (userName.toLocaleLowerCase() === this.expectedCredentials.userName && password === this.expectedCredentials.password) {
              sessionStorage.setItem('user', 'admin');
              return true;
            } else return false;
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.removeItem('user');
          }
        }, {
          key: "isUserLogged",
          value: function isUserLogged() {
            var userName = this.getCurrentUser();
            if (userName && userName === 'admin') return true;
            return false;
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return sessionStorage.getItem('user');
          }
        }]);

        return _AuthServiceService;
      }();

      _AuthServiceService.ɵfac = function AuthServiceService_Factory(t) {
        return new (t || _AuthServiceService)();
      };

      _AuthServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AuthServiceService,
        factory: _AuthServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9779:
    /*!************************************************************!*\
      !*** ./src/app/_services/global-events-manager.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalEventsManagerService": function GlobalEventsManagerService() {
          return (
            /* binding */
            _GlobalEventsManagerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _GlobalEventsManagerService = /*#__PURE__*/function () {
        function _GlobalEventsManagerService() {
          _classCallCheck(this, _GlobalEventsManagerService);

          this._showNavBar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.showNavBarEmitter = this._showNavBar.asObservable();
          this._showUserName = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.showUserNameEmitter = this._showUserName.asObservable();
        }

        _createClass(_GlobalEventsManagerService, [{
          key: "showNavBar",
          value: function showNavBar(ifShow) {
            this._showNavBar.next(ifShow);
          }
        }, {
          key: "updateUserName",
          value: function updateUserName(isUserUpdate) {
            this._showUserName.next(isUserUpdate);
          }
        }]);

        return _GlobalEventsManagerService;
      }();

      _GlobalEventsManagerService.ɵfac = function GlobalEventsManagerService_Factory(t) {
        return new (t || _GlobalEventsManagerService)();
      };

      _GlobalEventsManagerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _GlobalEventsManagerService,
        factory: _GlobalEventsManagerService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_components/login/login.component */
      2577);
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_components/home/home.component */
      1440);
      /* harmony import */


      var _components_check_boxes_check_boxes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_components/check-boxes/check-boxes.component */
      7446);
      /* harmony import */


      var _components_input_fields_input_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./_components/input-fields/input-fields.component */
      7780);
      /* harmony import */


      var _components_drop_downs_drop_downs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./_components/drop-downs/drop-downs.component */
      496);
      /* harmony import */


      var _components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./_components/radio-buttons/radio-buttons.component */
      8817);
      /* harmony import */


      var _components_toggles_toggles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_components/toggles/toggles.component */
      4950);
      /* harmony import */


      var _components_date_pickers_date_pickers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_components/date-pickers/date-pickers.component */
      9301);
      /* harmony import */


      var _components_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./_components/table-page/table-page.component */
      4065);
      /* harmony import */


      var _components_end_to_end_end_to_end_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./_components/end-to-end/end-to-end.component */
      6948);
      /* harmony import */


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./_services/auth-guard.service */
      6660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }, {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'check-box',
        component: _components_check_boxes_check_boxes_component__WEBPACK_IMPORTED_MODULE_2__.CheckBoxesComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'input',
        component: _components_input_fields_input_fields_component__WEBPACK_IMPORTED_MODULE_3__.InputFieldsComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'drop-down',
        component: _components_drop_downs_drop_downs_component__WEBPACK_IMPORTED_MODULE_4__.DropDownsComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'radio-button',
        component: _components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_5__.RadioButtonsComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'table',
        component: _components_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_8__.TablePageComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'toggle',
        component: _components_toggles_toggles_component__WEBPACK_IMPORTED_MODULE_6__.TogglesComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'date-picker',
        component: _components_date_pickers_date_pickers_component__WEBPACK_IMPORTED_MODULE_7__.DatePickersComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }, {
        path: 'end-to-end',
        component: _components_end_to_end_end_to_end_component__WEBPACK_IMPORTED_MODULE_9__.EndToEndComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuardService]
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_services/authService/auth-service.service */
      7431);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_components/nav-bar/nav-bar.component */
      3493);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_components/footer/footer.component */
      6488);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(authService, router) {
          _classCallCheck(this, _AppComponent);

          this.authService = authService;
          this.router = router;
          this.title = 'DockerJenkinsAngular';
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.navigateUserToStartPage();
          }
        }, {
          key: "navigateUserToStartPage",
          value: function navigateUserToStartPage() {
            var isUserLoggedIn = this.authService.isUserLogged();
            if (isUserLoggedIn) this.router.navigate(['home']);else this.router.navigate(['login']);
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 0,
        consts: [[1, "mainConteiner"], [1, "navigation"], [1, "content"], [1, "footer"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nav-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
        styles: [".content[_ngcontent-%COMP%]{\r\n    padding-left: 20%;\r\n    padding-right: 20%;\r\n    padding-top: 7%;\r\n    padding-bottom: 2%;\r\n    background-image: url('anderson-rian-unsplash.jpg');\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1EQUFvRTtJQUNwRSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2FuZGVyc29uLXJpYW4tdW5zcGxhc2guanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var _core_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_core/material.module */
      8282);
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./_components/login/login.component */
      2577);
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./_components/home/home.component */
      1440);
      /* harmony import */


      var _services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./_services/authService/auth-service.service */
      7431);
      /* harmony import */


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_services/auth-guard.service */
      6660);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_components/nav-bar/nav-bar.component */
      3493);
      /* harmony import */


      var _services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./_services/global-events-manager.service */
      9779);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./_components/footer/footer.component */
      6488);
      /* harmony import */


      var _components_check_boxes_check_boxes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./_components/check-boxes/check-boxes.component */
      7446);
      /* harmony import */


      var _components_input_fields_input_fields_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./_components/input-fields/input-fields.component */
      7780);
      /* harmony import */


      var _components_drop_downs_drop_downs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./_components/drop-downs/drop-downs.component */
      496);
      /* harmony import */


      var _components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./_components/radio-buttons/radio-buttons.component */
      8817);
      /* harmony import */


      var _components_list_boxes_list_boxes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./_components/list-boxes/list-boxes.component */
      162);
      /* harmony import */


      var _components_toggles_toggles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./_components/toggles/toggles.component */
      4950);
      /* harmony import */


      var _components_date_pickers_date_pickers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./_components/date-pickers/date-pickers.component */
      9301);
      /* harmony import */


      var _components_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./_components/table-page/table-page.component */
      4065);
      /* harmony import */


      var _components_end_to_end_end_to_end_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./_components/end-to-end/end-to-end.component */
      6948);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        providers: [_services_authService_auth_service_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceService, _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuardService, _services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_8__.GlobalEventsManagerService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _core_material_module__WEBPACK_IMPORTED_MODULE_2__.CustomMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__.NavBarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent, _components_check_boxes_check_boxes_component__WEBPACK_IMPORTED_MODULE_10__.CheckBoxesComponent, _components_input_fields_input_fields_component__WEBPACK_IMPORTED_MODULE_11__.InputFieldsComponent, _components_drop_downs_drop_downs_component__WEBPACK_IMPORTED_MODULE_12__.DropDownsComponent, _components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_13__.RadioButtonsComponent, _components_list_boxes_list_boxes_component__WEBPACK_IMPORTED_MODULE_14__.ListBoxesComponent, _components_toggles_toggles_component__WEBPACK_IMPORTED_MODULE_15__.TogglesComponent, _components_date_pickers_date_pickers_component__WEBPACK_IMPORTED_MODULE_16__.DatePickersComponent, _components_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_17__.TablePageComponent, _components_end_to_end_end_to_end_component__WEBPACK_IMPORTED_MODULE_18__.EndToEndComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _core_material_module__WEBPACK_IMPORTED_MODULE_2__.CustomMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule]
        });
      })();
      /***/

    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map