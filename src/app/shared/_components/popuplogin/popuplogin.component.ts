import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormService } from '../../../utilities/form.service';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { finalize } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popuplogin',
  templateUrl: './popuplogin.component.html',
  styles: [`
  .modal-header{
    display:flex !important;
    justify-content:center !important;
 
    background-color: #ddd;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 22px;
    font-weight: 400; 
}
.modal-body{
  background-color: #eee;
}
.modal-footer{
  display:flex !important;
  justify-content:center !important;

  background-color: #ddd;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 22px;
  font-weight: 400; 
}
.m-login__form-action .btn {
  font-weight: 600;
  padding: 10px;
}

.lock-bottom a {
  font-size: 14px;
  font-weight: 400;
}
  `]
})
export class PopupLoginComponent implements OnInit {

  signInForm: FormGroup;
  signInFormErrors: any;

  loading = false;
  revealPassword = false;
  errorMsg = null;

  title = "Your login session has expired!";
  username = "";
  fullname = "";

  constructor(private _authService: AuthenticationService, private fb: FormBuilder,
    private fs: FormService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.buildSignInForm();
    let user = this._authService.getUser();
    this.username = user.username;
    this.fullname = user.fullName;
  }

  buildSignInForm() {
    this.signInForm = this.fb.group({
      password: new FormControl('', [Validators.required]),
    }, { updateOn: 'submit' });
    this.signInFormErrors = {
      password: ''
    }
    this.signInForm.valueChanges.subscribe((data) => {
      this.signInFormErrors = this.fs.validateForm(this.signInForm, this.signInFormErrors, true)
    });
  }


  signin() {
    this.fs.markFormGroupTouched(this.signInForm);

    if (this.signInForm.valid) {

      this.loading = true;
      this._authService.login(this.username, this.signInForm.get('password').value)
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          data => {
            this._authService.handleSignIn(data);
            this.activeModal.close(true);
          },
          err => {
            this.errorMsg = err.error || err;
          });
    } else {
      this.signInFormErrors = this.fs.validateForm(this.signInForm, this.signInFormErrors, true);
    }
  }


}
