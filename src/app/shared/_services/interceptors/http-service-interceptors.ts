import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { AuthenticationService } from '../../../services/auth/authentication.service';


@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

    constructor(private auth: AuthenticationService, @Inject(DOCUMENT) private document: any) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // clone the request and replace the original headers with cloned headers
        const authReq = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.auth.getToken(),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        // handle the response and check for errors or response status
        return next.handle(authReq).map((event: HttpEvent<any>) => {
            return event;
        }).catch((err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    // redirect to the login route
                    const location = this.document.location;
                     location.href = `${location.protocol}//${location.hostname}:${location.port}/login`;
                    // or show a modal
                } else {
                    return Observable.throwError(err.message);
                }
            }
        });
    }
}
