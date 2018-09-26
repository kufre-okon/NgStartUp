import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    /**
   * Match two controls if they are the same
   * @param firstControlName
   * @param secondControlName
   * @returns {(AC: AbstractControl) => any}
   * @constructor
   */
    static Match(firstControlName, secondControlName) {
        return (AC: AbstractControl) => {
            let firstCtrl = AC.get(firstControlName);
            let secCtrl = AC.get(secondControlName);

            if (firstCtrl.value != secCtrl.value) {
                secCtrl.setErrors({ matchFields: true });
            } else {
                if (secCtrl.errors && secCtrl.errors['matchFields']) {
                    delete secCtrl.errors['matchFields'];
                    secCtrl.setErrors(null);
                }              
                return null
            }
        };
    }
}
