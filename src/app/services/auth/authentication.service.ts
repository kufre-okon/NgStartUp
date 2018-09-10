import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import "rxjs/add/operator/map";
import { BaseApiService } from "../../shared/_services/base-api.service";
import { CurrentUser } from "../../models/authentication/login-response";
import { environment } from "../../../environments/environment";
import { AppSettings } from "../../_config/app-settings";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthenticationService extends BaseApiService {

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: HttpClient) {
        super();
    }

    login(usernameOrEmail: string, password: string): Observable<CurrentUser> {
        const data = JSON.stringify({ clientId: AppSettings.CLIENT_ID, username: usernameOrEmail, password: password });
        return this.invoke<CurrentUser>(this.http.post(`${environment.apiPath}account/Login/`, data));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // remove authentication token
        localStorage.removeItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    setUser(user: string) {
        localStorage.setItem('currentUser', user);
    }

    getUser(): CurrentUser {
        const user = localStorage.getItem('currentUser');
        if (!user)
            return null;
        else
            return JSON.parse(user);
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    isAuthenticated(): boolean {
        var _token = this.getToken();
        return (_token && _token.length > 0);
    }
}