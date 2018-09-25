import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { BroadcasterService } from '../../shared/_services/event/broadcaster.service';
import { Subscription } from 'rxjs';
import { EventTypes } from '../../shared/_services/event/event-types.enum';
import { CurrentUser } from '../../models/authentication/login-response';
import { AuthenticationService } from '../../services/auth/authentication.service';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.Emulated,
})

export class HeaderNavComponent implements OnInit, AfterViewInit {

    private loginSubscription: Subscription;

    topBarName: string;
    topBarFullName: string;
    topBarEmail: string;

    constructor(private broadcaster: BroadcasterService, private authService: AuthenticationService, ) { }

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.setCurrentUser(this.authService.getUser());
        }
        this.loginSubscription = this.broadcaster.on<CurrentUser>(EventTypes.USERSIGNIN).subscribe(data => {
            /*    this.setCurrentUser(data); */
            if(data){
            console.log(data);
            }
        })
    }

    setCurrentUser(user: CurrentUser) {
        this.topBarEmail = user.email;
        this.topBarFullName = user.fullName;
        this.topBarName = user.username;
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

    ngOnDestroy(): void {
        this.loginSubscription.unsubscribe();
    }
}