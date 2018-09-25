import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../../shared/_modules/app-material.module';
import { SharedModule } from '../../../shared/_modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    'path': '',
    'component': ProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    UserService
  ], exports: [
    RouterModule,
  ]
})
export class ProfileModule { }
