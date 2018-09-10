import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { AppMaterialModule } from '../../../shared/_modules/app-material.module';
import { TrillPaginatorModule } from '../../../shared/_components/trill-paginator/trill-paginator.module';
import { SharedModule } from '../../../shared/_modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    TrillPaginatorModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  declarations: [
    UserComponent,
    CreateUserComponent,
    UserDetailsComponent
  ],
  providers:[
    UserService
  ],
  entryComponents: [
    CreateUserComponent
  ]
})
export class UserModule { }
