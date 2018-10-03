import { FormGroup, AbstractControl } from "@angular/forms";

export class FormUtility {
    static resetForm(formGroup: FormGroup) {
        let control: AbstractControl = null;
        formGroup.reset();
        formGroup.markAsUntouched();
        // lets mark the form as invalid since the form is still valid even though its fields have been cleared
        formGroup.setErrors({ 'invalid': true });
        Object.keys(formGroup.controls).forEach((name) => {
          control = formGroup.controls[name];
          control.setErrors(null);
        });
      }

}
