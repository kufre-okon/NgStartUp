import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';

declare let mApp: any;

@Directive({
  selector: '[trillLoader]'
})
export class TrillLoaderDirective {

  @Input() loading: any;
  @Input() showMessage: boolean = false;
  @Input() opacity = 0.03;
  @Input() overlayColor = '#000000';

  isLoading = false;

  constructor(private el: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['loading']) {
      this.showLoading();
    }
  }

  showLoading() {
    var par = $(this.el.nativeElement).parent();
    if (this.loading) {
      this.block(par);
      this.isLoading = true;
    } else if (this.isLoading) {
      this.unblock(par);
      this.isLoading = false;
    }
  }

  private block(selector: any) {
    (<any>mApp).block(selector, {
      type: 'loader',
      state: 'primary',//"success", "primary", "danger", "warning" [state='primary'] this determine the spinner color
      message: this.showMessage ? 'Please wait...' : '',
      size: 'lg',
      opacity: this.opacity,
      overlayColor: this.overlayColor
    });
  }

  private unblock(selector: any) {
    (<any>mApp).unblock(selector);
  }
}
