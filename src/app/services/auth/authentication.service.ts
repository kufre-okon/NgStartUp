import { Injectable, EventEmitter, Output } from "@angular/core";
import { Response } from "@angular/http";
import "rxjs/add/operator/map";
import { BaseApiService } from "../../shared/_services/base-api.service";
import { CurrentUser } from "../../models/authentication/login-response";
import { environment } from "../../../environments/environment";
import { AppSettings } from "../../_config/app-settings";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import * as moment from "moment"
import { BroadcasterService } from "../../shared/_services/event/broadcaster.service";
import { EventTypes } from "../../shared/_services/event/event-types.enum";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService extends BaseApiService {

    @Output() onShowPopUpLogin = new EventEmitter<any>();

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: HttpClient, private _broadcaster: BroadcasterService) {
        super();
    }

    login(usernameOrEmail: string, password: string): Observable<CurrentUser> {
        const data = JSON.stringify({ clientId: AppSettings.CLIENT_ID, username: usernameOrEmail, password: password });
        return this.invoke<CurrentUser>(this.http.post(`${environment.apiPath}account/Login/`, data));
    }

    refreshToken() {
        let self = this;
        const request = JSON.stringify({
            clientId: AppSettings.CLIENT_ID,
            token: this.getToken(),
            refreshToken: this.getRefreshToken()
        });

        let handleError = function (error) {
            if (error && error.indexOf('Token Error') >= 0) {
                self.onShowPopUpLogin.emit();
            } else {
                console.error("=> Err ref token: " + error);
            }
        }
        let hdrs = new HttpHeaders({ 'Ignore-401': 'true' });
        this.http.post(`${environment.apiPath}account/refreshToken/`, request, { headers: hdrs })
            .subscribe((data: any) => {
                if (data.status) {
                    self.setToken(data.payload.token);
                    self.setRefreshToken(data.payload.refreshToken);
                    self.setTokenIssued(data.payload.tokenIssued);
                    self.setTokenExpires(data.payload.tokenExpires);
                    this._broadcaster.broadcast(EventTypes.IDLETIMEOUTCHANGED);
                } else {
                    handleError(data.message);
                }
            }, err => {
                if ((err.status && err.status === 401) || (err.statusText && err.statusText === 'Unauthorized')) {
                    self.onShowPopUpLogin.emit();
                } else {
                    const error = err.data ? (err.data.message ? err.data.message : err.data) : err.statusText ? err.statusText : (err.message ? err.message : err);
                    handleError(error);
                }
            });
    }

    checkSession(): any {

        let self = this;
        let hdrs = new HttpHeaders({ 'Ignore-401': 'true' });
        this.http.get(`${environment.apiPath}account/checkToken/`, { headers: hdrs })
            .subscribe((data: any) => {/* do nothing if successful */ },
                err => {
                    if ((err.status && err.status === 401) || (err.statusText && err.statusText === 'Unauthorized')) {
                        self.onShowPopUpLogin.emit();
                    } else {
                        const error = err.data ? (err.data.message ? err.data.message : err.data) : err.statusText ? err.statusText : (err.message ? err.message : err);
                        console.error('Err chk Token:' + error);
                    }
                });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // remove authentication token
        localStorage.removeItem('token');
        this._broadcaster.broadcast(EventTypes.USERSIGNOUT);
    }

    handleSignIn(data: any): any {
        this.setToken(data.token);
        this.setRefreshToken(data.refreshToken);
        this.setTokenExpires(data.tokenExpires);
        this.setTokenIssued(data.tokenIssued);
        this._broadcaster.broadcast(EventTypes.IDLETIMEOUTCHANGED);
        // lets clear the following to reduce the storage size
        data.token = null;
        data.refreshToken = null;
        data.permissions = null;
        this.setUser(JSON.stringify(data));
    }

    getToken() {
        return localStorage.getItem('token');
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    setUser(user: string) {
        localStorage.setItem('currentUser', user);
    }

    getUser(): CurrentUser {
        const user = localStorage.getItem('currentUser');
        if (!user || user === 'undefined')
            return null;
        else
            return JSON.parse(user);
    }

    private getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }
    setRefreshToken(token: string) {
        localStorage.setItem('refreshToken', token);
    }

    getTokenExpires(): Date {
        var item = localStorage.getItem('tokenExpires');
        if (item !== 'undefined')
            return JSON.parse(item);
        return null;
    }
    setTokenExpires(date: Date) {
        localStorage.setItem('tokenExpires', JSON.stringify(date));
    }

    getTokenIssued(): Date {
        var item = localStorage.getItem('tokenIssued');
        if (item !== 'undefined')
            return JSON.parse(item);
        return null;
    }
    setTokenIssued(date: Date) {
        localStorage.setItem('tokenIssued', JSON.stringify(date));
    }

    isAuthenticated(): boolean {
        var _token = this.getToken();
        let result = _token && _token.length > 0;
        if (result) {
            var _date = this.getTokenExpires();
            if (!_date)
                return false;
            else {
                // lets check for authentication token expiration               
                if (moment(_date).isSameOrBefore(moment().utc()))
                    return false;
                else
                    return true;
            }
        } else
            return false;
    }
}