import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { UserModel } from '../../../models/users/user';
import { UserService } from '../../../services/user/user.service';
import { AuthenticationService } from '../../../services/auth/authentication.service';

@Injectable()
export class ProfileResolver implements Resolve<UserModel> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserModel | Observable<UserModel> | Promise<UserModel> {
        let userId = this.authSrv.getUser().userId;
        return this.usrv.getUser(userId).map(user => {
           return user;           
        });
    }
    constructor(private usrv: UserService, private router: Router, private authSrv: AuthenticationService) { }

}
