import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../../shared/_modules/app-material.module';
import { SharedModule } from '../../../shared/_modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolver } from './profile-resolver';
import { ngfModule, ngf } from "angular-file";

const routes: Routes = [
  {
    'path': '',
    'component': ProfileComponent, resolve: { user: ProfileResolver }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    ngfModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    UserService,
    ProfileResolver
  ], exports: [
    RouterModule,
  ]
})
export class ProfileModule { }
