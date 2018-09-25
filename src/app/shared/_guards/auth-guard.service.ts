import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad, Route,
  ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/auth/authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>
    | Promise<boolean> {
    const url = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login'], { queryParams: { 'returnUrl': url } });
    return false;
  }

}
