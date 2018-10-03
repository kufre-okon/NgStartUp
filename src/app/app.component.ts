import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from "./helpers";
import { AuthenticationService } from './services/auth/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupLoginComponent } from './shared/_components/popuplogin/popuplogin.component';
import { BroadcasterService } from './shared/_services/event/broadcaster.service';
import { Subscription } from 'rxjs';
import { CurrentUser } from './models/authentication/login-response';
import { EventTypes } from './shared/_services/event/event-types.enum';
import { IdleDectorService } from './services/auth/idle-dector.service';
import * as moment from "moment"

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

    private loginSubscription: Subscription;
    private logoutSubscription: Subscription;

    popupLoginOpened = false;

    title = 'app';
    globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';

    constructor(
        private _router: Router,
        private authService: AuthenticationService,
        private modalSrv: NgbModal,
        private broadcaster: BroadcasterService,
        private idleDector: IdleDectorService) {
    }

    subscribeEvents() {
        this.authService.onShowPopUpLogin.subscribe(() => this.showPopLogin());
        this.idleDector.onRefreshToken.subscribe(() => this.authService.refreshToken());
        this.idleDector.onUserIdle.subscribe(() => {
            console.info('=> USR IDLE');
            this.authService.checkSession();
            // lets pause idle detector so that refreshing of token will stop
            this.idleDector.pause();
        })
        this.idleDector.onUserWakeup.subscribe(() => {
            console.info('=> USR WKUP');
            // lets resume idle detector so that refreshing of token can be attepted
            if (!this.idleDector.isActive())
                this.idleDector.resume();
            this.authService.checkSession();
        })
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                Helpers.setLoading(true);
                Helpers.bodyClass(this.globalBodyClass);
            }
            if (route instanceof NavigationEnd) {
                Helpers.setLoading(false);
            }
        });
        this.loginSubscription = this.broadcaster.on<any>(EventTypes.IDLETIMEOUTCHANGED)
            .subscribe(() => {
                this.startIdleDector();
                this.setIdleDectorTimeout();
                // lets clear this flag in-case the user navigated away to the login page from the popuplogin
                this.popupLoginOpened = false;
            });
        this.logoutSubscription = this.broadcaster.on<any>(EventTypes.USERSIGNOUT)
            .subscribe(() =>
                this.idleDector.pause()
            );
    }
    
    ngOnInit() {

        this.subscribeEvents();
        this.startIdleDector();
        this.setIdleDectorTimeout();
    }

    private startIdleDector() {
        if (this.authService.isAuthenticated() && !this.idleDector.isActive()) {
            this.idleDector.init(null);
        }
    }

    private setIdleDectorTimeout() {
        if (!this.authService.isAuthenticated()) return;
        const tokenExpiryDate = this.authService.getTokenExpires();
        const tokenIssuedDate = this.authService.getTokenIssued();

        this.idleDector.resume();
        let _timeout = Math.abs(moment(new Date(tokenExpiryDate)).diff(moment(new Date(tokenIssuedDate)), 'seconds'));
        this.idleDector.setIdleDuration(_timeout);
        this.idleDector.setAutoRefreshTokenTimeOut(_timeout);
    }

    showPopLogin() {
        if (!this.popupLoginOpened) {
            this.idleDector.pause();
            this.popupLoginOpened = true;
            const dialogRef = this.modalSrv.open(PopupLoginComponent, {
                windowClass: 'login-modal',
                backdropClass: 'login-overlay',
                backdrop: "static",
                centered: true,
                keyboard: false
            });
            dialogRef.result.then(result => {
                this.popupLoginOpened = false;
            }).catch(() => {
                this.popupLoginOpened = false;
            });
        }
    }

    ngOnDestroy(): void {
        this.loginSubscription.unsubscribe();
        this.logoutSubscription.unsubscribe();
    }
}