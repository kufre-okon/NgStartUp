import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { TrillLoaderDirective } from '../_directives/trill-loader.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModalModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule.forRoot(),
    NgbAlertModule.forRoot(),
    PerfectScrollbarModule 
  ],
  declarations: [
    TrillLoaderDirective
  ],
  providers: [
    // PERFECT_SCROLLBAR_CONFIG    
  ],
  exports: [
    NgbModalModule, // using NgbModal instead of Mat-Dialog because of responsiveness issues currently with mat-dialog
    PerfectScrollbarModule,
    TrillLoaderDirective,
    NgSelectModule,
    NgbAlertModule
  ]
})
export class SharedModule { }
