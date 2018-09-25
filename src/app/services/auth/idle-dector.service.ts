import { Injectable, Output, EventEmitter } from '@angular/core';
import * as ifvisible from "ifvisible.js/src/ifvisible.js";

@Injectable({
  providedIn: 'root'
})
export class IdleDectorService {

  @Output() onUserIdle = new EventEmitter<any>();
  @Output() onUserWakeup = new EventEmitter<any>();
  @Output() onRefreshToken = new EventEmitter<any>();

  constructor() { }

  private paused: boolean;
  private _timer: any;
  private _isActive = false;

  init(_timeout: number) {
    if ('undefined' == typeof ifvisible) {
      console.error("ifvisible is not loaded...");
      return;
    }
    let self = this;
    self._isActive = true;
    ifvisible.idle(() => {
      var res = ifvisible.getIdleInfo();
      if (res.isIdle && !self.paused)
        self.onUserIdle.emit();
    });
    ifvisible.wakeup(() => {
      self.onUserWakeup.emit();
    });
    if (_timeout > 0)
      self.setIdleDuration(_timeout);
  }

  onEvery(seconds: number, resetTimer: boolean, callback: any) {
    let self = this;
    if (resetTimer)
      this.stopTimer();
    if (typeof callback === 'function') {
      self._timer = setInterval(function () {
        if (self.paused === false) {
          return callback();
        }
      }, seconds * 1000);
    }
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  setAutoRefreshTokenTimeOut(timeout: number) {
    let self = this;
    // this below code runs every {timeout-10) seconds to refresh bearer token while the user is working and stops once the user is idle
    this.onEvery(timeout - 10, true, () => {
      if (!self.paused) {
        self.onRefreshToken.emit();
      }
    });
  }

  setIdleDuration(timeout: number) {
    ifvisible.setIdleDuration(timeout);
  }

  isActive() {
    return this._isActive;
  }
  status(): boolean {
    return !this.paused;
  }
  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }
}
