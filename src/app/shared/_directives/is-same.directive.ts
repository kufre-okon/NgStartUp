import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[is-equal]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsSameDirective, multi: true }]
})
export class IsSameDirective implements Validator {

  constructor(@Attribute('is-equal') public comparer: string,
    @Attribute('reverse') public reverse: string) { }

  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    let e = c.root.get(this.comparer);

    // value not equal in verify control
    if (e && c.value !== e.value && !this.isReverse) {
      return { "equal": true };
    }

    // user typing in password and match
    if (e && c.value === e.value && this.isReverse) {
      delete e.errors['equal'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // user typing in password and mismatch
    if (e && c.value !== e.value && this.isReverse) {
      e.setErrors({ "equal": true });
    }
  }
}