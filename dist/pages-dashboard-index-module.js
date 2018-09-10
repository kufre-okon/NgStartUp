(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-index-module"],{

/***/ "./src/app/layouts/pages/dashboard/index.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/pages/dashboard/index.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" >\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tDashboard\n\t\t\t</h3>\n\t\t\t<span class=\"m-section__sub\"> statistics and reports </span>\n\t\t</div>\t\t\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t <!--Begin::Section-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__body\">\n\t\t\t<div class=\"row m-row--col-separator-xl\">\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"jumbotron\">\n\t\t\t\t\t\t<h1>{{appTitle}}</h1>\n\t\t\t\t\t\t<p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes\n\t\t\t\t\t\t\tthe responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n\t\t\t\t\t\t<p>To see the difference between static and fixed top navbars, just scroll.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/pages/dashboard/index.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/pages/dashboard/index.component.ts ***!
  \************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/_services/script-loader.service */ "./src/app/shared/_services/script-loader.service.ts");
/* harmony import */ var _config_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_config/app-settings */ "./src/app/_config/app-settings.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = /** @class */ (function () {
    function IndexComponent(_script, userService) {
        this._script = _script;
        this.userService = userService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.appTitle = _config_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].APP_NAME;
        this.getTotalUsers();
    };
    IndexComponent.prototype.ngAfterViewInit = function () {
        /* this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']); */
    };
    IndexComponent.prototype.getTotalUsers = function () {
        /*  this.userService.getUserCount().subscribe(data => {
             this.totalUsers = data;
         }, err => {
             console.error('Err=>getUserCount:', err);
         }); */
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "page-index",
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/layouts/pages/dashboard/index.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/layouts/pages/dashboard/index.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/pages/dashboard/index.module.ts ***!
  \*********************************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.component */ "./src/app/layouts/pages/dashboard/index.component.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        "path": '',
        "component": _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }
];
var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
            ],
            providers: [
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
            ]
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-index-module.js.map