(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"./pages/dashboard/index.module": [
		"./src/app/layouts/pages/dashboard/index.module.ts",
		"pages-dashboard-index-module"
	],
	"./pages/not-found/not-found.module": [
		"./src/app/layouts/pages/not-found/not-found.module.ts",
		"pages-not-found-not-found-module"
	],
	"./pages/user/user.module": [
		"./src/app/layouts/pages/user/user.module.ts",
		"pages-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_config/app-settings.ts":
/*!*****************************************!*\
  !*** ./src/app/_config/app-settings.ts ***!
  \*****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.APP_NAME = 'AppStartUp';
    AppSettings.CLIENT_ID = "ngStartupApp";
    AppSettings.PAGINATION = {
        DEFAULT_PAGE_SIZE: 10,
        DEFAULT_PAGE_RANGES: ['10', '20', '50', '100']
    };
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule', data: { hideAsideChatNav: true } },
    { path: 'logout', component: _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"], data: { hideAsideChatNav: true } },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\n<div class=\"m-page-loader m-page-loader--base m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\n\t<div class=\"m-blockui\">\n\t\t<span>\n\t\t\tPlease wait...\n\t\t</span>\n\t\t<span>\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\n\t\t</span>\n\t</div>\n</div>\n<!-- end::Page loader -->\n<!-- begin:: Page -->\n<router-outlet></router-outlet>\n<!-- end:: Page -->\n<app-quick-sidebar></app-quick-sidebar>\n<app-scroll-top></app-scroll-top>\n<app-aside-chat-nav></app-aside-chat-nav>\n<!--begin::Base Scripts -->             \t    \t \t\t    \t \t\t\t\t<!--end::Base Scripts -->                       <!--begin::Page Vendors -->                                   <!--end::Page Vendors -->                                                              <!--begin::Page Snippets -->                                   <!--end::Page Snippets -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/_services/script-loader.service */ "./src/app/shared/_services/script-loader.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_interceptors_http_service_interceptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/_services/interceptors/http-service-interceptors */ "./src/app/shared/_services/interceptors/http-service-interceptors.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/layout.module */ "./src/app/layouts/layout.module.ts");
/* harmony import */ var _layouts_layout_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/layout-routing.module */ "./src/app/layouts/layout-routing.module.ts");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _shared_services_event_broadcaster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/_services/event/broadcaster.service */ "./src/app/shared/_services/event/broadcaster.service.ts");
/* harmony import */ var _shared_components_trill_paginator_trill_paginator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/_components/trill-paginator/trill-paginator.component */ "./src/app/shared/_components/trill-paginator/trill-paginator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_components_trill_paginator_trill_paginator_component__WEBPACK_IMPORTED_MODULE_13__["TrillPaginatorComponent"],
            ],
            imports: [
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _layouts_layout_routing_module__WEBPACK_IMPORTED_MODULE_10__["LayoutRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_interceptors_http_service_interceptors__WEBPACK_IMPORTED_MODULE_8__["HttpServiceInterceptor"],
                    multi: true
                },
                _shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_5__["ScriptLoaderService"],
                _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _shared_services_event_broadcaster_service__WEBPACK_IMPORTED_MODULE_12__["BroadcasterService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/auth-routing.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/_services/script-loader.service */ "./src/app/shared/_services/script-loader.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/_services/alert.service */ "./src/app/shared/_services/alert.service.ts");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/_components/alert/alert.component */ "./src/app/shared/_components/alert/alert.component.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _utilities_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/form.service */ "./src/app/utilities/form.service.ts");
/* harmony import */ var _shared_services_event_broadcaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/_services/event/broadcaster.service */ "./src/app/shared/_services/event/broadcaster.service.ts");
/* harmony import */ var _shared_services_event_event_types_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/_services/event/event-types.enum */ "./src/app/shared/_services/event/event-types.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, fb, fs, _broadcaster, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.fb = fb;
        this.fs = fs;
        this._broadcaster = _broadcaster;
        this.cfr = cfr;
        this.loading = false;
        this.revealPassword = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.buildSignInForm();
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl']
            || this._authService.redirectUrl || '/';
        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/app/base/scripts.bundle.js'
        ], true).then(function () {
            _helpers__WEBPACK_IMPORTED_MODULE_3__["Helpers"].setLoading(false);
            // this.handleSignUpFormSubmit();
            // this.handleForgetPasswordFormSubmit();
        });
    };
    AuthComponent.prototype.buildSignInForm = function () {
        var _this = this;
        this.signInForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: true })
        }, { updateOn: 'submit' });
        this.signInFormErrors = {
            username: '',
            password: ''
        };
        // on each value change we call the validateForm function
        // We only validate form controls that are dirty, meaning they are touched
        // the result is passed to the signInFormErrors object
        this.signInForm.valueChanges.subscribe(function (data) {
            _this.signInFormErrors = _this.fs.validateForm(_this.signInForm, _this.signInFormErrors, true);
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        // mark all fields as touched
        this.fs.markFormGroupTouched(this.signInForm);
        if (this.signInForm.valid) {
            this.loading = true;
            this._authService.login(this.signInForm.get('username').value, this.signInForm.get('password').value).subscribe(function (data) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this._authService.setUser(JSON.stringify(data));
                _this._authService.setToken(data.token);
                _this._router.navigate([_this.returnUrl]);
                _this._broadcaster.broadcast(_shared_services_event_event_types_enum__WEBPACK_IMPORTED_MODULE_11__["EventTypes"].USERSIGNIN, data);
            }, function (error) {
                _this.showAlert('alertSignin');
                _this._alertService.error(error);
                _this.loading = false;
            });
        }
        else {
            this.signInFormErrors = this.fs.validateForm(this.signInForm, this.signInFormErrors, true);
        }
    };
    AuthComponent.prototype.signup = function () {
        /*  this.loading = true;
         this._userService.create(this.signUpModel).subscribe(
             data => {
                 this.showAlert('alertSignin');
                 this._alertService.success(
                     'Thank you. To complete your registration please check your email.',
                     true);
                 this.loading = false;
                 this.displaySignInForm();
                 this.signUpModel = new UserModel();
             },
             error => {
                 this.showAlert('alertSignup');
                 this._alertService.error(error);
                 this.loading = false;
             });
     */ 
    };
    AuthComponent.prototype.forgotPass = function () {
        /*  this.loading = true;
         this._userService.forgotPassword(this.model.email).subscribe(
             data => {
                 this.showAlert('alertSignin');
                 this._alertService.success(
                     'Cool! Password recovery instruction has been sent to your email.',
                     true);
                 this.loading = false;
                 this.displaySignInForm();
                 this.model = {};
             },
             error => {
                 this.showAlert('alertForgotPass');
                 this._alertService.error(error);
                 this.loading = false;
             });
      */
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    AuthComponent.prototype.displaySignUpForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.addClass(login, 'm-login--signup');
        mUtil.animateClass(login.getElementsByClassName('m-login__signup')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displaySignInForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        mUtil.addClass(login, 'm-login--signin');
        mUtil.animateClass(login.getElementsByClassName('m-login__signin')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displayForgetPasswordForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.removeClass(login, 'm-login--signup');
        mUtil.addClass(login, 'm-login--forget-password');
        mUtil.animateClass(login.getElementsByClassName('m-login__forget-password')[0], 'flipInX animated');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignin', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertForgotPass', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _utilities_form_service__WEBPACK_IMPORTED_MODULE_9__["FormService"],
            _shared_services_event_broadcaster_service__WEBPACK_IMPORTED_MODULE_10__["BroadcasterService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_routing_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.routing */ "./src/app/auth/auth-routing.routing.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/_components/alert/alert.component */ "./src/app/shared/_components/alert/alert.component.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/_services/alert.service */ "./src/app/shared/_services/alert.service.ts");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/_guards/auth-guard.service */ "./src/app/shared/_guards/auth-guard.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
                _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _auth_routing_routing__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]
            ],
            providers: [
                _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"],
                _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
            ],
            entryComponents: [_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/auth/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin\"\n id=\"m_login\">\n\t<div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\n\t\t<div class=\"m-stack m-stack--hor m-stack--desktop\">\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid\">\n\t\t\t\t<div class=\"m-login__wrapper\" style=\"padding:5% 2rem 2rem 2rem\">\n\t\t\t\t\t<div class=\"m-login__logo\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//logos/logo-2.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-login__signin\">\n\t\t\t\t\t\t<form (ngSubmit)=\"signin()\" [formGroup]=\"signInForm\" class=\"m-login__form m-form\" action=\"\">\n\t\t\t\t\t\t\t<ng-template #alertSignin></ng-template>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Username or Email\" formControlName=\"username\" required>\n\t\t\t\t\t\t\t\t<mat-error align=\"start\" *ngIf=\"signInFormErrors.username\" class=\"form__error\">{{ signInFormErrors.username }}</mat-error>\n\t\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Password\" [type]=\"revealPassword ? 'text' : 'password'\" formControlName=\"password\" required>\n\t\t\t\t\t\t\t\t<mat-icon matSuffix (click)=\"revealPassword = !revealPassword\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa\" [ngClass]=\"{'fa-eye-slash':revealPassword, 'fa-eye':!revealPassword}\"></i>\n\t\t\t\t\t\t\t\t</mat-icon>\n\t\t\t\t\t\t\t\t<mat-error align=\"start\" *ngIf=\"signInFormErrors.password\" class=\"form__error\">{{ signInFormErrors.password }}</mat-error>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<div class=\"row m-login__form-sub\">\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\n\t\t\t\t\t\t\t\t\t<mat-checkbox formControlName=\"remember\">Remember me</mat-checkbox>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"displayForgetPasswordForm()\" class=\"m-link\">\n\t\t\t\t\t\t\t\t\t\tForget Password ?\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n\t\t\t\t\t\t\t\t\tSign In\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"m-login__signup\">\n\t\t\t\t\t\t<div class=\"m-login__head\">\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\n\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\n\t\t\t\t\t\t\t\tEnter your details to create your account:\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\n\t\t\t\t\t\t\t<ng-template #alertSignup></ng-template>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Username\" name=\"Username\" [(ngModel)]=\"signUpModel.Username\" #Username=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"First Name\" name=\"FirstName\" [(ngModel)]=\"signUpModel.FirstName\" #FirstName=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Last Name\" name=\"LastName\" [(ngModel)]=\"signUpModel.LastName\" #LastName=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Phone Number\" name=\"PhoneNumber\" [(ngModel)]=\"signUpModel.PhoneNumber\" #PhoneNumber=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"Email\" [(ngModel)]=\"signUpModel.Email\" #Email=\"ngModel\" autocomplete=\"off\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"password\" placeholder=\"Password\" name=\"Password\" [(ngModel)]=\"signUpModel.Password\" #Password=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Confirm Password\" name=\"ConfirmPassword\" [(ngModel)]=\"signUpModel.ConfirmPassword\">\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signup_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n\t\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" type=\"button\" (click)=\"displaySignInForm()\" class=\"btn btn-outline-focus  m-btn m-btn--pill m-btn--custom\">\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<!-- <div class=\"m-login__forget-password\">\n\t\t\t\t\t\t<div class=\"m-login__head\">\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\n\t\t\t\t\t\t\t\tForgotten Password ?\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\n\t\t\t\t\t\t\t\tEnter your email to reset your password:\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\n\t\t\t\t\t\t\t<ng-template #alertForgotPass></ng-template>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\" autocomplete=\"off\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_forget_password_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n\t\t\t\t\t\t\t\t\tRequest\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" (click)=\"displaySignInForm()\" class=\"btn btn-outline-focus m-btn m-btn--pill m-btn--custom\">\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"m-stack__item m-stack__item--center\">\n\t\t\t\t<div class=\"m-login__account\">\n\t\t\t\t\t<span class=\"m-login__account-msg\">\n\t\t\t\t\t\tDon't have an account yet ?\n\t\t\t\t\t</span>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t\t<a href=\"javascript:;\" (click)=\"displaySignUpForm()\" class=\"m-link m-link--focus m-login__account-link\">\n\t\t\t\t\t\tSign Up\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\"\n\t style=\"background-image: url(./assets/app/media/img//bg/bg-4.jpg)\">\n\t\t<div class=\"m-grid__item m-grid__item--middle\">\n\t\t\t<h3 class=\"m-login__welcome\">\n\t\t\t\tJoin Our Community\n\t\t\t</h3>\n\t\t\t<p class=\"m-login__msg\">\n\t\t\t\tLorem ipsum dolor sit amet, coectetuer adipiscing\n\t\t\t\t<br> elit sed diam nonummy et nibh euismod\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            jquery__WEBPACK_IMPORTED_MODULE_0__["each"](src, function (k, s) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__breadcrumbs');
        if (jquery__WEBPACK_IMPORTED_MODULE_0__(ul).length === 0) {
            ul = jquery__WEBPACK_IMPORTED_MODULE_0__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(ul).find('li:not(:first-child)').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0__["each"](breadcrumbs, function (k, v) {
            var li = jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<span/>').addClass('m-nav__link-text').text(v.text)));
            jquery__WEBPACK_IMPORTED_MODULE_0__(ul).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = jquery__WEBPACK_IMPORTED_MODULE_0__('body');
        if (enable) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).addClass('m-page--loading-non-block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/layouts/aside-chat-nav/aside-chat-nav.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/aside-chat-nav/aside-chat-nav.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"m-nav-sticky\" *ngIf=\"show\" style=\"margin-top: 30px;\">\t\n\t<li style=\"cursor:pointer\" class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Chat\" data-placement=\"left\">\n\t\t<span class=\"text-info\"><i class=\"fa fa-wechat\"></i></span>\n\t</li>\t\n</ul>\n"

/***/ }),

/***/ "./src/app/layouts/aside-chat-nav/aside-chat-nav.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/aside-chat-nav/aside-chat-nav.component.ts ***!
  \********************************************************************/
/*! exports provided: AsideChatNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideChatNavComponent", function() { return AsideChatNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsideChatNavComponent = /** @class */ (function () {
    function AsideChatNavComponent(router, route) {
        var _this = this;
        this.show = true;
        router.events
            .filter(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })
            .forEach(function (e) {
            var page_data = route.root.firstChild.snapshot.data;
            _this.show = !page_data['hideAsideChatNav'];
        });
    }
    AsideChatNavComponent.prototype.ngOnInit = function () {
    };
    AsideChatNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-aside-chat-nav",
            template: __webpack_require__(/*! ./aside-chat-nav.component.html */ "./src/app/layouts/aside-chat-nav/aside-chat-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AsideChatNavComponent);
    return AsideChatNavComponent;
}());



/***/ }),

/***/ "./src/app/layouts/aside-nav/aside-nav.component.html":
/*!************************************************************!*\
  !*** ./src/app/layouts/aside-nav/aside-nav.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" >\n\t<i class=\"la la-close\"></i>\n</button>\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\n\t<!-- BEGIN: Aside Menu -->\n\t<div id=\"m_ver_menu\" class=\"m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark mCustomScrollbar\" m-menu-vertical=\"1\" m-menu-scrollable=\"1\"\n\t m-menu-dropdown-timeout=\"500\">\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\n\t\t\t<li class=\"m-menu__item  \" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\n\t\t\t\t<a [routerLink]=\"['/index']\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\tDashboard\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\n\t\t\t\t<a [routerLink]=\"['/organizationunit']\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tOrganization Units\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t aria-haspopup=\"true\" m-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a [routerLink]=\"['/role']\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-suitcase\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tRoles\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t aria-haspopup=\"true\">\n\t\t\t\t<a [routerLink]=\"['/user']\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-users\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tUsers\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t aria-haspopup=\"true\">\n\t\t\t\t<a [routerLink]=\"['/audit']\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-folder-1\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t aria-haspopup=\"true\">\n\t\t\t\t<a [routerLink]=\"['/setting']\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-settings\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tSettings\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<!-- END: Aside Menu -->\n</div>\n<!-- END: Left Aside -->"

/***/ }),

/***/ "./src/app/layouts/aside-nav/aside-nav.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/aside-nav/aside-nav.component.ts ***!
  \**********************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
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

var AsideNavComponent = /** @class */ (function () {
    function AsideNavComponent() {
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    AsideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-aside-nav",
            template: __webpack_require__(/*! ./aside-nav.component.html */ "./src/app/layouts/aside-nav/aside-nav.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\n<footer class=\"m-grid__item\t\tm-footer\">\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\n\t\t\t\t<span class=\"m-footer__copyright\">\n\t\t\t\t\t2017 &copy; Metronic theme by\n\t\t\t\t\t<a href=\"https://keenthemes.com\" class=\"m-link\">\n\t\t\t\t\t\tKeenthemes\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\n\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\"  class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tPrivacy\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tT&C\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tPurchase\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\" title=\"Support Center\" data-placement=\"left\">\n\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!-- end::Footer -->\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layouts/footer/footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header-nav/header-nav.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/header-nav/header-nav.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\n<header id=\"m_header\" class=\"m-grid__item m-header\" m-minimize-offset=\"200\" m-minimize-mobile-offset=\"200\">\n\t<div class=\"m-container m-container--fluid m-container--full-height\">\n\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\n\t\t\t<!-- BEGIN: Brand -->\n\t\t\t<div class=\"m-stack__item m-brand  m-brand--skin-dark\">\n\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\">\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\n\t\t\t\t\t\t<a [routerLink]=\"['/index']\" class=\"m-brand__logo-wrapper text-uppercase text-white\">\n\t\t\t\t\t\t\t<h4>AppStartUp</h4>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\n\t\t\t\t\t\t<!-- BEGIN: Left Aside Minimize Toggle -->\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Responsive Aside Left Menu Toggler -->\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Responsive Header Menu Toggler -->\n\t\t\t\t\t\t<a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\n\t\t\t\t\t\t<a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- END: Brand -->\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\n\t\t\t\t<!-- BEGIN: Horizontal Menu -->\n\t\t\t\t<button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\" id=\"m_aside_header_menu_mobile_close_btn\">\n\t\t\t\t\t<i class=\"la la-close\"></i>\n\t\t\t\t</button>\n\t\t\t\t<div id=\"m_header_menu\" class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\">\n\t\t\t\t\t<ul class=\"m-menu__nav  m-menu__nav--submenu-arrow\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t\t\t\t m-menu-submenu-toggle=\"click\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCreate New Post\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-diagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t\t\t\t\t\t\t m-menu-submenu-toggle=\"hover\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tManage Orders\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLatest Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPending Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProcessed Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomers\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t\t\t\t\t\t\t m-menu-submenu-toggle=\"hover\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupplier Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReviewed Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tResolved Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFeedback Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRegister Member\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\n\t\t\t\t\t\t m-menu-submenu-toggle=\"click\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tReports\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<div class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__content\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnnual Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPO Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Margins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRevenue Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- END: Horizontal Menu -->\n\t\t\t\t<!-- BEGIN: Topbar -->\n\t\t\t\t<div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid\">\n\t\t\t\t\t<div class=\"m-stack__item m-topbar__nav-wrapper\">\n\t\t\t\t\t\t<ul class=\"m-topbar__nav m-nav m-nav--inline\">\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"\n\t\t\t\t\t\t\t m-dropdown-toggle=\"click\" id=\"m_quicksearch\" m-quicksearch-mode=\"dropdown\" m-dropdown-persistent=\"1\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header\">\n\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-list-search__form\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-search__form-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\" name=\"q\" class=\"m-list-search__form-input\" value=\"\" placeholder=\"Search...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-icon-close\" id=\"m_quicksearch_close\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__scrollable m-scrollable\" data-scrollable=\"true\" data-max-height=\"300\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\"\n\t\t\t\t\t\t\t m-dropdown-toggle=\"click\" m-dropdown-persistent=\"1\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#topbar_notifications_notifications\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAlerts\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_events\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEvents\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_logs\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"topbar_notifications_notifications\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_events\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_logs\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\" style=\"min-height: 180px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br> No new logs.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"\n\t\t\t\t\t\t\t m-dropdown-toggle=\"click\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body m-dropdown__body--paddingless\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"data\" data=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid m-nav-grid--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-time\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-folder\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\n\t\t\t\t\t\t\t m-dropdown-toggle=\"click\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username m--font-primary\">\n\t\t\t\t\t\t\t\t\t\t{{topBarName}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user m-card-user--skin-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__pic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__details\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{topBarFullName}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{topBarEmail}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/snippets/pages/user/login-1\" class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t routerLink=\"/logout\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- END: Topbar -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n<!-- END: Header -->"

/***/ }),

/***/ "./src/app/layouts/header-nav/header-nav.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/header-nav/header-nav.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_event_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/_services/event/broadcaster.service */ "./src/app/shared/_services/event/broadcaster.service.ts");
/* harmony import */ var _shared_services_event_event_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/event/event-types.enum */ "./src/app/shared/_services/event/event-types.enum.ts");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent(broadcaster, authService) {
        this.broadcaster = broadcaster;
        this.authService = authService;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            this.setCurrentUser(this.authService.getUser());
        }
        this.loginSubscription = this.broadcaster.on(_shared_services_event_event_types_enum__WEBPACK_IMPORTED_MODULE_2__["EventTypes"].USERSIGNIN).subscribe(function (data) {
            /*    this.setCurrentUser(data); */
            console.log(data);
        });
    };
    HeaderNavComponent.prototype.setCurrentUser = function (user) {
        this.topBarEmail = user.email;
        this.topBarFullName = user.fullName;
        this.topBarName = user.username;
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent.prototype.ngOnDestroy = function () {
        this.loginSubscription.unsubscribe();
    };
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header-nav",
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/layouts/header-nav/header-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        }),
        __metadata("design:paramtypes", [_shared_services_event_broadcaster_service__WEBPACK_IMPORTED_MODULE_1__["BroadcasterService"], _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layout-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/layout-routing.module.ts ***!
  \**************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/_guards/auth-guard.service */ "./src/app/shared/_guards/auth-guard.service.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layouts/layout.component.ts");
/* harmony import */ var _pages_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/default.component */ "./src/app/layouts/pages/default.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        "path": "",
        "component": _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        "canActivate": [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        "children": [
            {
                "path": "",
                "component": _pages_default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
                "children": [
                    {
                        "path": "index",
                        "loadChildren": "./pages/dashboard/index.module#IndexModule"
                    },
                    {
                        "path": "user",
                        "loadChildren": "./pages/user/user.module#UserModule"
                    },
                    //...
                    {
                        "path": "404",
                        "loadChildren": "./pages/not-found/not-found.module#NotFoundModule"
                    }
                ]
            },
            {
                "path": "**",
                "redirectTo": "404",
                "pathMatch": "full"
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layouts/layout.component.html":
/*!***********************************************!*\
  !*** ./src/app/layouts/layout.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\n<!-- begin::Body -->\n<router-outlet></router-outlet>\n<!-- end:: Body -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layouts/layout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/_services/script-loader.service */ "./src/app/shared/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/app/base/scripts.bundle.js'], true)
            .then(function (result) {
            _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            // optional js to be loaded once
            // this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                mApp.scrollTop();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // init required js
                mApp.init();
                mUtil.init();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layouts/layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_shared_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layout.module.ts":
/*!******************************************!*\
  !*** ./src/app/layouts/layout.module.ts ***!
  \******************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ "./src/app/layouts/layout.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quick-sidebar/quick-sidebar.component */ "./src/app/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ "./src/app/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aside_chat_nav_aside_chat_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aside-chat-nav/aside-chat-nav.component */ "./src/app/layouts/aside-chat-nav/aside-chat-nav.component.ts");
/* harmony import */ var _shared_directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/_directives/href-prevent-default.directive */ "./src/app/shared/_directives/href-prevent-default.directive.ts");
/* harmony import */ var _shared_directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/_directives/unwrap-tag.directive */ "./src/app/shared/_directives/unwrap-tag.directive.ts");
/* harmony import */ var _pages_default_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/default.module */ "./src/app/layouts/pages/default.module.ts");
/* harmony import */ var _pages_default_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/default.component */ "./src/app/layouts/pages/default.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
                _pages_default_component__WEBPACK_IMPORTED_MODULE_12__["DefaultComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["QuickSidebarComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__["ScrollTopComponent"],
                _aside_chat_nav_aside_chat_nav_component__WEBPACK_IMPORTED_MODULE_8__["AsideChatNavComponent"],
                _shared_directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_9__["HrefPreventDefaultDirective"],
                _shared_directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_10__["UnwrapTagDirective"],
            ],
            exports: [
                _layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
                _pages_default_component__WEBPACK_IMPORTED_MODULE_12__["DefaultComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["QuickSidebarComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__["ScrollTopComponent"],
                _aside_chat_nav_aside_chat_nav_component__WEBPACK_IMPORTED_MODULE_8__["AsideChatNavComponent"],
                _shared_directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_9__["HrefPreventDefaultDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _pages_default_module__WEBPACK_IMPORTED_MODULE_11__["DefaultModule"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/pages/default.component.html":
/*!******************************************************!*\
  !*** ./src/app/layouts/pages/default.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\">\n\t<!-- Begin Sidebar -->\n\t<app-aside-nav></app-aside-nav>\n\t<!-- End Sidebar -->\n\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/layouts/pages/default.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/pages/default.component.ts ***!
  \****************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
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

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-inner-page-wrapper",
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layouts/pages/default.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/layouts/pages/default.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layouts/pages/default.module.ts ***!
  \*************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aside-nav/aside-nav.component */ "./src/app/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideNavComponent"],
            ],
            exports: [
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideNavComponent"]
            ]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "./src/app/layouts/quick-sidebar/quick-sidebar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layouts/quick-sidebar/quick-sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\">\n\t<div class=\"m-quick-sidebar__content m--hide\">\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\n\t\t\t<i class=\"la la-close\"></i>\n\t\t</span>\n\t\t<ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">\n\t\t\t\t\tMessages\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" \t\tdata-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">\n\t\t\t\t\tSettings\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">\n\t\t\t\t\tLogs\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"tab-content\">\n\t\t\t<div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\n\t\t\t\t\t<div class=\"m-messenger__messages\">\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tHi Bob. What time will be the meeting ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tHi Megan. It's at 2.30PM\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tWill the development team be joining ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tYes sure. I invited them as well\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t2:30PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tNoted. For the Coca-Cola Mobile App project as well ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tYes, sure.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tPlease also prepare the quotation for the Loop CRM project as well.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t3:15PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-no-pic m--bg-fill-danger\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tM\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tNoted. I will prepare it.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tThanks Megan. I will see you later.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tSure. See you in the meeting soon.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-messenger__seperator\"></div>\n\t\t\t\t\t<div class=\"m-messenger__form\">\n\t\t\t\t\t\t<div class=\"m-messenger__form-controls\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__form-tools\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"m-messenger__form-attachment\">\n\t\t\t\t\t\t\t\t<i class=\"la la-paperclip\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-settings\">\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tGeneral Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tEmail Notifications\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSite Tracking\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSMS Alerts\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Storage\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tSystem Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tError Reporting\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Servers\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-timeline\">\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--warning m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\timportant\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tresolved\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\turgent\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoices received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tServer Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1117 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- end::Quick Sidebar -->\n"

/***/ }),

/***/ "./src/app/layouts/quick-sidebar/quick-sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/quick-sidebar/quick-sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: QuickSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSidebarComponent", function() { return QuickSidebarComponent; });
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

var QuickSidebarComponent = /** @class */ (function () {
    function QuickSidebarComponent() {
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
    };
    QuickSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quick-sidebar",
            template: __webpack_require__(/*! ./quick-sidebar.component.html */ "./src/app/layouts/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/scroll-top/scroll-top.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/scroll-top/scroll-top.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\n<div id=\"m_scroll_top\" class=\"m-scroll-top\">\n\t<i class=\"la la-arrow-up\"></i>\n</div>\n<!-- end::Scroll Top -->\n"

/***/ }),

/***/ "./src/app/layouts/scroll-top/scroll-top.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/scroll-top/scroll-top.component.ts ***!
  \************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
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

var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-scroll-top",
            template: __webpack_require__(/*! ./scroll-top.component.html */ "./src/app/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/auth/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _shared_services_base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/base-api.service */ "./src/app/shared/_services/base-api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _config_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_config/app-settings */ "./src/app/_config/app-settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    AuthenticationService.prototype.login = function (usernameOrEmail, password) {
        var data = JSON.stringify({ clientId: _config_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CLIENT_ID, username: usernameOrEmail, password: password });
        return this.invoke(this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPath + "account/Login/", data));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // remove authentication token
        localStorage.removeItem('token');
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthenticationService.prototype.setUser = function (user) {
        localStorage.setItem('currentUser', user);
    };
    AuthenticationService.prototype.getUser = function () {
        var user = localStorage.getItem('currentUser');
        if (!user)
            return null;
        else
            return JSON.parse(user);
    };
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var _token = this.getToken();
        return (_token && _token.length > 0);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}(_shared_services_base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseApiService"]));



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/_services/base-api.service */ "./src/app/shared/_services/base-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.getUserCount = function () {
        return this.invoke(this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPath + "user/UserCount/"));
    };
    UserService.prototype.create = function (arg) {
        return this.invoke(this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPath + "user", arg));
    };
    UserService.prototype.update = function (arg) {
        return this.invoke(this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPath + "user", arg));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}(_shared_services_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]));



/***/ }),

/***/ "./src/app/shared/_components/alert/alert.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/_components/alert/alert.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/_components/alert/alert.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/_components/alert/alert.component.ts ***!
  \*************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/shared/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/_components/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/_components/trill-paginator/trill-paginator.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/_components/trill-paginator/trill-paginator.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TrillPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrillPaginatorComponent", function() { return TrillPaginatorComponent; });
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




var TrillPaginatorComponent = /** @class */ (function () {
    function TrillPaginatorComponent() {
        this.page = 0;
        this.pageSize = 1;
        this.total = 0;
        this.disabled = false;
        this.dots = '...';
        this.ulClass = 'pagination text-bold';
        this.activeClass = 'active';
        this.disabledClass = 'disabled';
        this.adjacent = 2;
        this.pagingAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textFirst = '<<';
        this.textLast = '>>';
        this.textNext = '>';
        this.textPrev = '<';
        this.textFirstClass = '';
        this.textLastClass = '';
        this.textNextClass = '';
        this.textPrevClass = '';
        this.textTitlePage = 'Page {page} of {pagesCount}';
        this.textTitleFirst = 'Goto First Page';
        this.textTitleLast = 'Goto Last Page';
        this.textTitleNext = 'Next Page';
        this.textTitlePrev = 'Previous Page';
        this.hideIfEmpty = false;
        this.showPrevNext = true;
        this.showFirstLast = true;
        /**
          * The regex expression to use for any replace methods
          * Feel free to tweak / fork values for your application
          */
        this.regex = /\{page\}/g;
        this.regex2 = /\{pagesCount\}/g;
        this.List = [];
        this.Hide = false;
    }
    TrillPaginatorComponent.prototype.ngOnChanges = function (changes) {
        if (changes['page'] || changes['pageSize'] || changes['total']) {
            console.log('Change detected' + changes);
            this.build();
        }
    };
    /**
       * The main build function used to determine the paging logic
       * Feel free to tweak / fork values for your application
       *
       */
    TrillPaginatorComponent.prototype.build = function () {
        this.List = [];
        // Block divide by 0 and empty page size
        if (!this.pageSize || this.pageSize <= 0) {
            this.pageSize = 1;
        }
        // Determine the last page or total page count
        var pageCount = Math.ceil(this.total / this.pageSize);
        // Validate the scope values to protect against strange states
        this.validateScopeValues(pageCount);
        // Create the beginning and end page values
        var start, finish;
        // Calculate the full adjacency value
        var fullAdjacentSize = (this.adjacent * 2) + 2;
        // Add the Next and Previous buttons to our list
        this.addPrevNext(pageCount, 'prev');
        // If the page count is less than the full adjacnet size
        // Then we simply display all the pages, Otherwise we calculate the proper paging display
        if (pageCount <= (fullAdjacentSize + 2)) {
            start = 1;
            this.addRange(start, pageCount);
        }
        else {
            // Determine if we are showing the beginning of the paging list
            // We know it is the beginning if the page - adjacent is <= 2
            if (this.page - this.adjacent <= 2) {
                start = 1;
                finish = 1 + fullAdjacentSize;
                this.addRange(start, finish);
                this.addLast(pageCount, finish);
            }
            else if (this.page < pageCount - (this.adjacent + 2)) {
                start = this.page - this.adjacent;
                finish = this.page + this.adjacent;
                this.addFirst(start);
                this.addRange(start, finish);
                this.addLast(pageCount, finish);
            }
            else {
                start = pageCount - fullAdjacentSize;
                finish = pageCount;
                this.addFirst(start);
                this.addRange(start, finish);
            }
        }
        // Add the next and last buttons to our paging list
        this.addPrevNext(pageCount, 'next');
    };
    /**
     * Validate and clean up any scope values
     * This happens after we have set the scope values
     *
     * @param {int} pageCount - The last page number or total page count
     */
    TrillPaginatorComponent.prototype.validateScopeValues = function (pageCount) {
        // Block where the page is larger than the pageCount
        if (this.page > pageCount) {
            this.page = pageCount;
        }
        // Block where the page is less than 0
        if (this.page <= 0) {
            this.page = 1;
        }
        // Block where adjacent value is 0 or below
        if (this.adjacent <= 0) {
            this.adjacent = 2;
        }
        // Hide from page if we have 1 or less pages
        // if directed to hide empty
        if (pageCount < 1) {
            this.Hide = this.hideIfEmpty;
        }
    };
    /**
       * Assign the method action to take when a page is clicked
       *
       * @param {Object} scope - The local directive scope object
       * @param {int} page - The current page of interest
       */
    TrillPaginatorComponent.prototype.internalAction = function (page, pageSizeChanged) {
        // Block clicks we try to load the active page
        if (!pageSizeChanged && this.page === page) {
            return;
        }
        // Block if we are forcing disabled
        if (this.disabled) {
            return;
        }
        // Update the page in scope
        this.page = page;
        // Pass our parameters to the paging action
        this.pagingAction.emit({
            page: this.page,
            pageSize: this.pageSize,
            total: this.total
        });
    };
    /**
     * Add the first, previous, next, and last buttons if desired
     * The logic is defined by the mode of interest
     * This method will simply return if the scope.showPrevNext is false
     * This method will simply return if there are no pages to display
     *
     * @param {int} pageCount - The last page number or total page count
     * @param {string} mode - The mode of interest either prev or last
     */
    TrillPaginatorComponent.prototype.addPrevNext = function (pageCount, mode) {
        // Ignore if we are not showing
        // or there are no pages to display
        if ((!this.showPrevNext && !this.showFirstLast) || pageCount < 1) {
            return;
        }
        // Local variables to help determine logic
        var disabled, alpha, beta;
        // Determine logic based on the mode of interest
        // Calculate the previous / next page and if the click actions are allowed
        if (mode === 'prev') {
            disabled = this.page - 1 <= 0;
            var prevPage = this.page - 1 <= 0 ? 1 : this.page - 1;
            if (this.showFirstLast) {
                alpha = {
                    value: this.textFirst,
                    title: this.textTitleFirst,
                    aClass: this.textFirstClass,
                    page: 1
                };
            }
            if (this.showPrevNext) {
                beta = {
                    value: this.textPrev,
                    title: this.textTitlePrev,
                    aClass: this.textPrevClass,
                    page: prevPage
                };
            }
        }
        else {
            disabled = this.page + 1 > pageCount;
            var nextPage = this.page + 1 >= pageCount ? pageCount : this.page + 1;
            if (this.showPrevNext) {
                alpha = {
                    value: this.textNext,
                    title: this.textTitleNext,
                    aClass: this.textNextClass,
                    page: nextPage
                };
            }
            if (this.showFirstLast) {
                beta = {
                    value: this.textLast,
                    title: this.textTitleLast,
                    aClass: this.textLastClass,
                    page: pageCount
                };
            }
        }
        // Add alpha items
        if (alpha) {
            // tslint:disable-next-line:prefer-const
            var alphaItem = this.buildItem(alpha, disabled);
            this.List.push(alphaItem);
        }
        // Add beta items
        if (beta) {
            // tslint:disable-next-line:prefer-const
            var betaItem = this.buildItem(beta, disabled);
            this.List.push(betaItem);
        }
    };
    /**
     * Add the first or beginning items in our paging list
     * We leverage the 'next' parameter to determine if the dots are required
     * @param {int} next - the next page number in the paging sequence
     */
    TrillPaginatorComponent.prototype.addFirst = function (next) {
        this.addRange(1, 2);
        // We ignore dots if the next value is 3
        // ie: 1 2 [...] 3 4 5 becomes just 1 2 3 4 5
        if (next !== 3) {
            this.addDots();
        }
    };
    /**
     * Add the last or end items in our paging list
     * We leverage the 'prev' parameter to determine if the dots are required
     *
     * @param {int} pageCount - The last page number or total page count
     * @param {int} prev - the previous page number in the paging sequence
     */
    TrillPaginatorComponent.prototype.addLast = function (pageCount, prev) {
        // We ignore dots if the previous value is one less than our start range
        // ie: 1 2 3 4 [...] 5 6  becomes just 1 2 3 4 5 6
        if (prev !== pageCount - 2) {
            this.addDots();
        }
        this.addRange(pageCount - 1, pageCount);
    };
    /**
         * Adds a range of numbers to our list
         * The range is dependent on the start and finish parameters
         *
         * @param {int} start - The start of the range to add to the paging list
         * @param {int} finish - The end of the range to add to the paging list
         */
    TrillPaginatorComponent.prototype.addRange = function (start, finish) {
        var _loop_1 = function (i) {
            liClass = this_1.page === i ? this_1.activeClass : '';
            // Handle items that are affected by disabled
            if (this_1.disabled) {
                liClass = this_1.disabledClass;
            }
            var _this = this_1;
            this_1.List.push({
                value: i.toString(),
                title: this_1.textTitlePage.replace(this_1.regex, i.toString()).replace(this_1.regex2, this_1.pagesCount.toString()),
                liClass: liClass,
                action: function () {
                    _this.internalAction(i, false);
                },
                data: i
            });
        };
        var this_1 = this, liClass;
        // Add our items where i is the page number
        for (var i = start; i <= finish; i++) {
            _loop_1(i);
        }
    };
    /**
     * Add Dots ie: 1 2 [...] 10 11 12 [...] 56 57
     * This is my favorite function not going to lie
     */
    TrillPaginatorComponent.prototype.addDots = function () {
        this.List.push({
            value: this.dots,
            liClass: this.disabledClass
        });
    };
    // Create the Add Item Function
    TrillPaginatorComponent.prototype.buildItem = function (item, disabled) {
        var _this = this;
        return {
            title: item.title,
            aClass: item.aClass,
            value: item.aClass ? '' : item.value,
            liClass: disabled ? this.disabledClass : '',
            action: function () {
                if (!disabled) {
                    _this.internalAction(item.page, false);
                }
            }
        };
    };
    TrillPaginatorComponent.prototype.ngOnInit = function () {
    };
    TrillPaginatorComponent.prototype.pageSizeChange = function (evt) {
        this.pageSize = +evt;
        this.internalAction(1, true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "total", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TrillPaginatorComponent.prototype, "itemEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TrillPaginatorComponent.prototype, "itemStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TrillPaginatorComponent.prototype, "pagesCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TrillPaginatorComponent.prototype, "pageSizeOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "dots", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "ulClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "activeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "disabledClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "adjacent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "pagingAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textFirst", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textLast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textPrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textFirstClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textLastClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textNextClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textPrevClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textTitlePage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textTitleFirst", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textTitleLast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textTitleNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "textTitlePrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "hideIfEmpty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "showPrevNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrillPaginatorComponent.prototype, "showFirstLast", void 0);
    TrillPaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trill-paginator',
            template: "\n  <div class=\"pagination-container\" [hidden]=\"Hide\">\n  <div class=\"pagination-info visible-lg visible-md\" style=\"margin:10px 0 0 0\">\n    <span>Showing {{itemStart}}-{{itemEnd}} of {{total}} items</span>\n  </div>\n  <div class=\"pagination-menus\">\n    <ul [class]=\"ulClass\" style=\"padding-left: 20px;\">\n      <li *ngFor=\"let item of List\" [class]=\"item.liClass\">\n        <a title=\"{{item.title}}\" [class]=\"item.aClass\" (click)=\"item.action()\" [innerHtml]=\"item.value\"></a>\n      </li>\n    </ul>\n    <div class=\"pager-size-wrapper\" style=\"margin:5px 10px\">\n      <select (ngModelChange)=\"pageSizeChange($event)\" class=\"pager-size\" [(ngModel)]=\"pageSize\">\n        <option *ngFor=\"let c of pageSizeRanges\" value=\"{{c.id}}\">{{c.name}}</option>\n      </select>\n      <span>&nbsp;items per page</span>\n    </div>\n  </div>\n  <div class=\"pagination-info-center visible-xs visible-sm\">\n    <span>Showing {{itemStart}}-{{itemEnd}} of {{total}} items</span>\n  </div>\n</div>",
            styles: [
                ".pagination {\n      margin: 5px 0 !important;\n  }\n  \n  .pagination > .active > a,\n  .pagination > .active > span,\n  .pagination > .active > a:hover,\n  .pagination > .active > span:hover,\n  .pagination > .active > a:focus,\n  .pagination > .active > span:focus {\n      border-color: #337ab7 !important;\n      background-color: #337ab7 !important;\n      color: white;\n  }\n  \n  .pagination li {\n      font-size: 12px !important;\n  }\n  \n  .pagination li:not(.disabled):not(.active) a {\n      cursor: pointer;\n  }\n  \n  .pager-size-wrapper {\n      display: inline-block;\n      vertical-align: top;\n  }\n  \n  .pager-size-wrapper .pager-size {\n      color: #788590;\n      border: 1px solid #ccc;\n      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n      -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n      -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n      height: 30px;\n      padding: 5px 10px;\n      font-size: 12px;\n      border-radius: 3px;\n      width: 67px;\n  }\n  \n  .pagination-container {\n      width: 100%;\n      padding: 10px 10px;\n      text-align: center;\n  }\n  \n  .pagination-menus {\n      width: 100%;\n      margin: 0 auto;\n      padding: 0;\n  }\n  \n  .pagination-info {\n      float: right;\n  }\n  "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TrillPaginatorComponent);
    return TrillPaginatorComponent;
}());



/***/ }),

/***/ "./src/app/shared/_directives/href-prevent-default.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/_directives/href-prevent-default.directive.ts ***!
  \**********************************************************************/
/*! exports provided: HrefPreventDefaultDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrefPreventDefaultDirective", function() { return HrefPreventDefaultDirective; });
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

var HrefPreventDefaultDirective = /** @class */ (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "./src/app/shared/_directives/unwrap-tag.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/_directives/unwrap-tag.directive.ts ***!
  \************************************************************/
/*! exports provided: UnwrapTagDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnwrapTagDirective", function() { return UnwrapTagDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = /** @class */ (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        _helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "./src/app/shared/_guards/auth-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/_guards/auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/_services/alert.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/_services/alert.service.ts ***!
  \***************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/_services/base-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/_services/base-api.service.ts ***!
  \******************************************************/
/*! exports provided: BaseApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiService", function() { return BaseApiService; });
var BaseApiService = /** @class */ (function () {
    function BaseApiService() {
    }
    BaseApiService.prototype.invoke = function (obj) {
        var _this = this;
        return obj.map(function (resp) { return _this.handleApiResponse(resp); });
    };
    BaseApiService.prototype.handleApiResponse = function (body) {
        if (body['status']) {
            return body['payload'];
        }
        else {
            //  console.log(body['message']);      
            throw body['message'];
        }
    };
    return BaseApiService;
}());



/***/ }),

/***/ "./src/app/shared/_services/event/broadcaster.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/_services/event/broadcaster.service.ts ***!
  \***************************************************************/
/*! exports provided: BroadcasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcasterService", function() { return BroadcasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BroadcasterService = /** @class */ (function () {
    function BroadcasterService() {
        this._eventBus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    BroadcasterService.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    BroadcasterService.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === key; })
            .map(function (event) { return event.data; });
    };
    BroadcasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BroadcasterService);
    return BroadcasterService;
}());



/***/ }),

/***/ "./src/app/shared/_services/event/event-types.enum.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/_services/event/event-types.enum.ts ***!
  \************************************************************/
/*! exports provided: EventTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTypes", function() { return EventTypes; });
/**
 * Used to register all event types in the system for consistency.
 * To emit any event, it must be register here
*/
var EventTypes;
(function (EventTypes) {
    /** Emit after user had signIn successfully. @param<LoginResponse> */
    EventTypes["USERSIGNIN"] = "UserSignIn";
})(EventTypes || (EventTypes = {}));


/***/ }),

/***/ "./src/app/shared/_services/interceptors/http-service-interceptors.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/_services/interceptors/http-service-interceptors.ts ***!
  \****************************************************************************/
/*! exports provided: HttpServiceInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceInterceptor", function() { return HttpServiceInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var HttpServiceInterceptor = /** @class */ (function () {
    function HttpServiceInterceptor(auth, document) {
        this.auth = auth;
        this.document = document;
    }
    HttpServiceInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // clone the request and replace the original headers with cloned headers
        var authReq = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.auth.getToken(),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        // handle the response and check for errors or response status
        return next.handle(authReq).map(function (event) {
            return event;
        }).catch(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    // redirect to the login route
                    var location_1 = _this.document.location;
                    location_1.href = location_1.protocol + "//" + location_1.hostname + ":" + location_1.port + "/login";
                    // or show a modal
                }
                else {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].throwError(err.message);
                }
            }
        });
    };
    HttpServiceInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], Object])
    ], HttpServiceInterceptor);
    return HttpServiceInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/_services/script-loader.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/_services/script-loader.service.ts ***!
  \***********************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/utilities/form.service.ts":
/*!*******************************************!*\
  !*** ./src/app/utilities/form.service.ts ***!
  \*******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
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

var FormService = /** @class */ (function () {
    function FormService() {
    }
    // get all values of the formGroup, loop over them
    // then mark each field as touched
    FormService.prototype.markFormGroupTouched = function (formGroup) {
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            /*   if (control.controls) {
                  control.controls.forEach(c => this.markFormGroupTouched(c));
              } */
        });
    };
    // return list of error messages
    FormService.prototype.validationMessages = function () {
        var messages = {
            required: 'This field is required',
            email: 'This email address is invalid',
            invalid_characters: function (matches) {
                var matchedCharacters = matches;
                matchedCharacters = matchedCharacters.reduce(function (characterString, character, index) {
                    var string = characterString;
                    string += character;
                    if (matchedCharacters.length !== index + 1) {
                        string += ', ';
                    }
                    return string;
                }, '');
                return "These characters are not allowed: " + matchedCharacters;
            },
        };
        return messages;
    };
    // Validate form instance
    // check_dirty true will only emit errors if the field is touched
    // check_dirty false will check all fields independent of
    // being touched or not. Use this as the last check before submitting
    FormService.prototype.validateForm = function (formToValidate, formErrors, checkDirty) {
        var form = formToValidate;
        for (var field in formErrors) {
            if (field) {
                formErrors[field] = '';
                var control = form.get(field);
                var messages = this.validationMessages();
                if (control && !control.valid) {
                    if (!checkDirty || (control.dirty || control.touched)) {
                        for (var key in control.errors) {
                            if (key && key !== 'invalid_characters') {
                                formErrors[field] = formErrors[field] || messages[key];
                            }
                            else {
                                formErrors[field] = formErrors[field] || messages[key](control.errors[key]);
                            }
                        }
                    }
                }
            }
        }
        return formErrors;
    };
    FormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiPath: 'http://localhost:59782/api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MetronicStartup\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map