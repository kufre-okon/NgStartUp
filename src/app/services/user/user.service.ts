import { Injectable } from '@angular/core';
import { BaseApiService } from '../../shared/_services/base-api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UserCount, UserModel } from '../../models/users/user';
import { IPaginate } from '../../models/common/paginator';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService {

  constructor(private http: HttpClient) {
    super();
  }

  searchUser(searchTerm: string, roleId: any, page: number, pageSize: number, orderBy: string, orderMode: string) {
    return this.invoke<IPaginate<UserModel>>(this.http.get(`${environment.apiPath}user/search`, {
      params: new HttpParams()
        .set('page', page.toString())
        .set('pageSize', pageSize.toString())
        .set('searchTerm', searchTerm)
        .set('roleId', roleId)
        .set('orderBy', orderBy)
        .set('orderMode', orderMode)
    }));
  }

  getUserCount(): Observable<UserCount> {
    return this.invoke<UserCount>(this.http.get(`${environment.apiPath}user/UserCount/`));
  }

  createOrUpdate(arg: UserModel): any {
    if (arg.userID)
      return this.invoke(this.http.put(`${environment.apiPath}user`, arg));
    else
      return this.invoke<UserModel>(this.http.post(`${environment.apiPath}user`, arg));
  }
  getUser(userId: string) {
    return this.invoke<UserModel>(this.http.get(`${environment.apiPath}user/${userId}`));
  }

  activateDeactivateAccount(userId: string, status: boolean) {
    return this.invoke(this.http.post(`${environment.apiPath}user/${userId}/changeStatus`, { status: status }));
  }
}
