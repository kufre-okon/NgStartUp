import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user/user.service';
import { Patterns } from '../../../_config/patterns';
import { CustomValidators } from '../../../utilities/custom-validators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    .profile-usertitle-name {
      color: #5a7391;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 7px;
  }
  .profile-usertitle-job {
    text-transform: uppercase;
    color: #5b9bd1;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 7px;
}
.user-tab-icon {
  margin-right: 8px;
}
    `],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  infoForm: FormGroup;
  infoLoading = false;
  savingInfo = false;
  infoErrorMsg = null;

  pwdForm: FormGroup;
  savingPwd = false;
  pwdErrorMsg = null;

  constructor(private authSrv: AuthenticationService,
    private _usrv: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService) {
    this.buildInfoForm();
    this.buildPwdForm();
  }

  ngOnInit() {
    let userId = this.authSrv.getUser().userId;
    console.log(userId);
  }

  buildInfoForm() {
    this.infoForm = this.fb.group({
      userID: [{ value: null, disabled: true }],
      dateCreated: [{ value: null, disabled: true }],
      lastLoginDate: [{ value: null, disabled: true }],
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern(Patterns.emailPattern)]],
      lockoutEnabled: [{ value: null, disabled: true }],
      isActive: [{ value: null, disabled: true }],
      isTemporaryPassword: [{ value: null, disabled: true }]
    }, { updateOn: 'submit' });
  }

  buildPwdForm() {
    this.pwdForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
        updateOn: 'submit',
        validator: CustomValidators.Match('newPassword', 'confirmPassword')
      });
  }
  get pwdF() {
    return this.pwdForm.controls;
  }
  get infoF() {
    return this.infoForm.controls;
  }

  changePassword() {
    if (!this.pwdForm.valid) return;
    console.log(this.pwdForm.getRawValue());
  }
}
