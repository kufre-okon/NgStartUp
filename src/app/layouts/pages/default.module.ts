import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from '../aside-nav/aside-nav.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AsideNavComponent,
  ],
  exports: [
    AsideNavComponent
  ]
})

export class DefaultModule { }
