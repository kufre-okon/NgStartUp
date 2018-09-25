import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from '../aside-nav/aside-nav.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

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
