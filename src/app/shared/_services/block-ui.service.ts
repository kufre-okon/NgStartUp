import { Injectable } from '@angular/core';

declare let mApp: any;

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {

  constructor() { }

  /**
   * Show loading or spining icon on the page
   * @param(message) - the message to be displayed, [message='Please wait...'] if type is 'loader'
   * @param(state) - "success" or "primary" [state='primary'] this determine the spinner color
   * @param(type) - "spinner" or "loader" [type='loader']
   * @param(size) - "lg", "md", "sm" [size='lg'] Note: only application to type='loader'
   */
  public blockPage(message: any, state: any = 'primary', type: string = 'loader', size: any = 'lg') {
    (<any>mApp).blockPage({
      type: type,
      state: state,
      message: message || (type === 'loader' ? 'Please wait...' : ''),
      size: size
    });

  }

  /**
   * Show loading or spining icon on the page
   * @param(selector) - elementId or any other selector e.g '.modal', '#modal' or jquery Object
   * @param(message) - the message to be displayed, [message='Please wait...'] if type is 'loader'
   * @param(state) - "success", "primary", "danger", "warning" [state='primary'] this determine the spinner color
   * @param(type) - "spinner" or "loader" [type='loader']
   * @param(size) - "lg", "md", "sm" [size='lg'] Note: only application to type='loader'
   */
  public block(selector: any, message: any = '', state: any = 'primary', type: string = 'loader', size: any = 'lg') {
    (<any>mApp).block(selector, {
      type: type,
      state: state,
      message: message,
      size: size
    });
  }

  /**
   * Show "Please wait..." loading notification
   * @param(selector) - elementId or any other selector e.g '.modal', '#modal'
   * @param(state) - "success", "primary", "danger", "warning" [state='primary'] this determine the spinner color
   * @param(size) - "lg", "md", "sm" [size='lg'] Note: only application to type='loader'
   */
  public blockWait(selector: string, state: any = 'primary', size: any = 'lg') {
    (<any>mApp).block(selector, {
      type: 'loader',
      state: state,
      message: 'Please wait...',
      size: size
    });
  }

  /**
   * 
   * @param(selector) - elementId or any other selector e.g '.modal', '#modal' or jquery object
    */
  public unblock(selector: any) {
    (<any>mApp).unblock(selector);
  }

  public unblockPage() {
    (<any>mApp).unblockPage();
  }
}
