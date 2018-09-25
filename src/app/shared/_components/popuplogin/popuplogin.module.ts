import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupLoginComponent } from './popuplogin.component';
import { SharedModule } from '../../_modules/shared.module';
import { AppMaterialModule } from '../../_modules/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [PopupLoginComponent],
  entryComponents: [
    PopupLoginComponent
  ]
})
export class PopuploginModule { }
