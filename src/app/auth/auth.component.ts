import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../shared/_services/script-loader.service';
import { Helpers } from '../helpers';
import { UserService } from '../services/user/user.service';
import { UserModel } from '../models/users/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/auth/authentication.service';
import { BroadcasterService } from '../shared/_services/event/broadcaster.service';
import { EventTypes } from '../shared/_services/event/event-types.enum';

declare let $: any;
declare let mUtil: any;

@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class AuthComponent implements OnInit {

    signInMsg: string;
    signInForm: FormGroup;

    signUpForm: FormGroup;
    forgetPaswordForm: FormGroup;

    loading = false;
    revealPassword = false;
    returnUrl: string;

    constructor(
        private _router: Router,
        private _script: ScriptLoaderService,
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _authService: AuthenticationService,
        private fb: FormBuilder,
        private _broadcaster: BroadcasterService,
        private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.buildSignInForm();

        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl']
            || this._authService.redirectUrl || '/';

        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/app/base/scripts.bundle.js'], true).then(() => {
                Helpers.setLoading(false);
                // this.handleSignUpFormSubmit();
                // this.handleForgetPasswordFormSubmit();
            });
    }

    get f() { return this.signInForm.controls; }
    
    buildSignInForm() {
        this.signInForm = this.fb.group({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            remember: new FormControl({ value: true })
        }, { updateOn: 'submit' });
    }


    signin() {
        this.signInMsg = null;
        if (this.signInForm.valid) {
            this.loading = true;
            this._authService.login(this.signInForm.get('username').value, this.signInForm.get('password').value).subscribe(
                data => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this._authService.handleSignIn(data);
                    this._router.navigate([this.returnUrl]);
                    this._broadcaster.broadcast(EventTypes.USERSIGNIN, data);
                },
                error => {
                    this.signInMsg = error;
                    this.loading = false;
                });
        }
    }

    signup() {
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
    */ }

    forgotPass() {
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
    }

    displaySignUpForm() {
        let login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signin');

        mUtil.addClass(login, 'm-login--signup');
        mUtil.animateClass(login.getElementsByClassName('m-login__signup')[0], 'flipInX animated');
    }

    displaySignInForm() {
        let login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signup');
        try {
            $('form').data('validator').resetForm();
        } catch (e) {
        }

        mUtil.addClass(login, 'm-login--signin');
        mUtil.animateClass(login.getElementsByClassName('m-login__signin')[0], 'flipInX animated');
    }

    displayForgetPasswordForm() {
        let login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.removeClass(login, 'm-login--signup');

        mUtil.addClass(login, 'm-login--forget-password');
        mUtil.animateClass(login.getElementsByClassName('m-login__forget-password')[0], 'flipInX animated');
    }

    /*
       handleSignUpFormSubmit() {
           $('#m_login_signup_submit').click((e) => {
               let form = $(e.target).closest('form');
               form.validate({
                   rules: {
                       Username: {
                           required: true,
                       },
                       FirstName: {
                           required: true,
                       },
                       LastName: {
                           required: true,
                       },
                       Email: {
                           required: true,
                           email: true,
                       },
                       PhoneNumber: {
                           required: true,
                       },
                       Password: {
                           required: true,
                       },
                       ConfirmPassword: {
                           required: true,
                           equalTo: "#Password",
                       },
                       remember: {
                           required: true,
                       },
                   },
               });
               if (!form.valid()) {
                   e.preventDefault();
                   return;
               }
           });
       }
   
       handleForgetPasswordFormSubmit() {
           $('#m_login_forget_password_submit').click((e) => {
               let btn = $(e.target);
               let form = $(e.target).closest('form');
               form.validate({
                   rules: {
                       email: {
                           required: true,
                           email: true,
                       },
                   },
               });
               if (!form.valid()) {
                   e.preventDefault();
                   return;
               }
           });
       } */

}