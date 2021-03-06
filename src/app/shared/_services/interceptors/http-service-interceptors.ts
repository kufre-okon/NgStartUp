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
import { of } from 'rxjs';


@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

    constructor(private auth: AuthenticationService, @Inject(DOCUMENT) private document: any) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // clone the request and replace the original headers with cloned headers
        const ignoreContentType = req.headers.has('ignore-content-type');
        let authReq = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.auth.getToken(),
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Ignore-401,ignore-content-type',
                'Access-Control-Expose-Headers': 'Ignore-401,ignore-content-type'
            }
        });
        if (!ignoreContentType)
            authReq = authReq.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                }
            });

        // handle the response and check for errors or response status
        return next.handle(authReq).map((event: HttpEvent<any>) => {
            return event;
        }).catch((err: any) => {
            const ignore401 = authReq.headers.has('Ignore-401') && authReq.headers.get('Ignore-401') === 'true';
            if (err instanceof HttpErrorResponse) {
                if (ignore401)
                    return Observable.throwError(err);
                else {
                    if (err.status === 401) {
                        // redirect to the login route
                        const location = this.document.location;
                        location.href = `${location.protocol}//${location.hostname}:${location.port}/login`;
                        // or show a modal
                    } else {
                        return Observable.throwError(err.message);
                    }
                }
            }
        });
    }
}
