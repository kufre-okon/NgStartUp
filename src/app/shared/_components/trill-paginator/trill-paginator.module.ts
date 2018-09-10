import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrillPaginatorComponent } from './trill-paginator.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule
  ],
  declarations: [
    TrillPaginatorComponent
  ],
  exports:[
    TrillPaginatorComponent
  ]
})
export class TrillPaginatorModule { }
