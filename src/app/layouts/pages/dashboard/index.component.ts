import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../shared/_services/script-loader.service';
import { AppSettings } from '../../../_config/app-settings';
import { UserService } from '../../../services/user/user.service';
import { UserCount } from '../../../models/users/user';

@Component({
    selector: "page-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {

    appTitle: string;
    totalUsers: UserCount;

    constructor(private _script: ScriptLoaderService, private userService: UserService) {

    }

    ngOnInit() {
        this.appTitle = AppSettings.APP_NAME;
        this.getTotalUsers();
    }
    ngAfterViewInit() {
        /* this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']); */

    }

    getTotalUsers() {
       /*  this.userService.getUserCount().subscribe(data => {
            this.totalUsers = data;
        }, err => {
            console.error('Err=>getUserCount:', err);
        }); */
    }
}