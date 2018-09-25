import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user/user.service';
import { FormService } from '../../../utilities/form.service';

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
  infoFormErrors: any;
  infoLoading = false;
  savingInfo = false;
  infoErrorMsg = null;
  
  pwdForm: FormGroup;
  pwdFormErrors: any;
  savingPwd = false;
  pwdErrorMsg = null;

  constructor(private authSrv: AuthenticationService,
    private _usrv: UserService,
    private fb: FormBuilder,
    private fsrv: FormService,
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
      userID: new FormControl({ value: null, disabled: true }),
      dateCreated: new FormControl({ value: null, disabled: true }),
      lastLoginDate: new FormControl({ value: null, disabled: true }),
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      lockoutEnabled: new FormControl({ value: null, disabled: true }),
      isActive: new FormControl({ value: null, disabled: true }),
      isTemporaryPassword: new FormControl({ value: null, disabled: true }),
    }, { updateOn: 'submit' });
    this.infoFormErrors = {
      username: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    }  
    this.infoForm.valueChanges.subscribe((data) => {
      this.infoFormErrors = this.fsrv.validateForm(this.infoForm, this.infoFormErrors, true)
    });
  }

  buildPwdForm() {
    this.pwdForm = this.fb.group({     
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])      
    }, { updateOn: 'submit' });
    this.pwdFormErrors = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }  
    this.pwdForm.valueChanges.subscribe((data) => {
      this.pwdFormErrors = this.fsrv.validateForm(this.pwdForm, this.pwdFormErrors, true)
    });
  }
}
