import { Injectable } from '@angular/core';
import { BaseApiService } from '../../shared/_services/base-api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IPaginate } from '../../models/common/paginator';
import { HttpParams } from '@angular/common/http';
import { RoleLightWeight } from '../../models/role/role-light-weight';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseApiService {

  constructor(private http: HttpClient) {
    super();
  }

  getLightWeightList(): Observable<Array<RoleLightWeight>> {
    return this.invoke<Array<RoleLightWeight>>(this.http.get(`${environment.apiPath}role/listlightweight/`));
  }

  /* create(arg: UserModel) {
    return this.invoke<UserModel>(this.http.post(`${environment.apiPath}user`, arg));
  }
  update(arg: UserModel): any {
    return this.invoke(this.http.put(`${environment.apiPath}user`, arg));
  }
  getUser(userId:string){
    return this.invoke<UserModel>(this.http.get(`${environment.apiPath}user/${userId}`));
  } */
}
