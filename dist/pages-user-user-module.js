(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./src/app/layouts/pages/user/create-user/create-user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layouts/pages/user/create-user/create-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent() {
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user',
            template: "\n    <p>\n      create-user works!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/layouts/pages/user/user-details/user-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/pages/user/user-details/user-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: "\n    <p>\n      user-details works!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/pages/user/user-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/pages/user/user-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/layouts/pages/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        "path": '',
        "component": _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/layouts/pages/user/user.component.html":
/*!********************************************************!*\
  !*** ./src/app/layouts/pages/user/user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\">\n  <div class=\"d-flex align-items-center\">\n    <div class=\"mr-auto col-xs-6\">\n      <h3 class=\"m-subheader__title m-subheader__title--separator\">\n        Users\n      </h3>\n      <span class=\"m-section__sub\"> Manage users and permissions </span>\n    </div>\n    <div class=\"text-right col-xs-6\">\n      <button class=\"btn btn-primary\">\n        <i class=\"fa fa-plus\"></i> Create new user</button>\n    </div>\n  </div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\n  <mat-card>\n    <mat-card-content>\n      <form class=\"horizontal-form ng-valid ng-touched ng-dirty\" autocomplete=\"off\" novalidate=\"\">\n        <div class=\"m-form m-form--label-align-right\">\n          <div class=\"row align-items-center m--margin-bottom-10\">\n            <div class=\"col-xl-12\">\n              <div class=\"form-group m-form__group align-items-center\">\n                <div class=\"input-group\">\n                  <input class=\"form-control m-input ng-valid ng-touched ng-dirty\" autofocus=\"\" name=\"filterText\" type=\"text\" placeholder=\"Search...\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"submit\">\n                      <i class=\"flaticon-search-1\" aria-label=\"Search\"></i>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <h2>User List</h2>\n      <table class=\"table table-responsive table-striped table-hovered\">\n        <thead>\n          <th>#</th>\n          <th>Name</th>       \n          <th></th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let project of items\">\n            <td>{{project.Id}}</td>\n            <td>{{project.Name}}</td>          \n            <td>\n              <a title=\"Edit\" class=\"btn btn-xs btn-primary\">\n                <i class=\"glyphicon glyphicon-edit\"></i>\n              </a>\n              <a title=\"Details\" class=\"btn btn-xs btn-info\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </a>              \n              <button title=\"Delete\" class=\"btn btn-xs btn-danger\">\n                <i class=\"glyphicon glyphicon-trash\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <trill-paginator [page]=\"paginator.current_page\" [pageSize]=\"paginator.limit\" [total]=\"paginator.total_count\" \n      [itemEnd]=\"paginator.to\" [itemStart]=\"paginator.from\" (pagingAction)=\"onPageChange($event)\" [pagesCount]=\"paginator.total_pages\" ></trill-paginator>\n      \n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/layouts/pages/user/user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/pages/user/user.component.ts ***!
  \******************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_common_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/common/paginator */ "./src/app/models/common/paginator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.invert = false;
        this.paginator = new _models_common_paginator__WEBPACK_IMPORTED_MODULE_1__["Paginator"]();
        this.items = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 10; i++) {
            var item = {
                Id: (i + 1), Name: "Test " + i.toString()
            };
            this.items.push(item);
        }
        this.paginator.current_page = 1;
        this.paginator.from = 1;
        this.paginator.limit = 10;
        this.paginator.to = 10;
        this.paginator.total_count = 150;
        this.paginator.total_pages = 15;
    };
    UserComponent.prototype.onPageChange = function (evt) {
        console.log(evt);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/layouts/pages/user/user.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/layouts/pages/user/user.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/pages/user/user.module.ts ***!
  \***************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/layouts/pages/user/user.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/layouts/pages/user/create-user/create-user.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/layouts/pages/user/user-details/user-details.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/layouts/pages/user/user-routing.module.ts");
/* harmony import */ var _shared_modules_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/_modules/app-material.module */ "./src/app/shared/_modules/app-material.module.ts");
/* harmony import */ var _shared_components_trill_paginator_trill_paginator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/_components/trill-paginator/trill-paginator.component */ "./src/app/shared/_components/trill-paginator/trill-paginator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"],
                _shared_modules_app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"]
            ],
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateUserComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"],
                _shared_components_trill_paginator_trill_paginator_component__WEBPACK_IMPORTED_MODULE_7__["TrillPaginatorComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/models/common/paginator.ts":
/*!********************************************!*\
  !*** ./src/app/models/common/paginator.ts ***!
  \********************************************/
/*! exports provided: Paginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
var Paginator = /** @class */ (function () {
    function Paginator() {
        this.current_page = 1;
        this.from = 0;
        this.last_page = 0;
        this.limit = 0;
        this.to = 0;
        this.total_count = 0;
        this.total_pages = 0;
    }
    return Paginator;
}());



/***/ }),

/***/ "./src/app/shared/_modules/app-material.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/_modules/app-material.module.ts ***!
  \********************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module.js.map