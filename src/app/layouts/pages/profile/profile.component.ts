import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user/user.service';
import { Patterns } from '../../../_config/patterns';
import { CustomValidators } from '../../../utilities/custom-validators';
import { finalize } from 'rxjs/operators';
import { FormUtility } from '../../../utilities/form-utility';
import { UserModel } from '../../../models/users/user';
import { ActivatedRoute } from '@angular/router';
import { BroadcasterService } from '../../../shared/_services/event/broadcaster.service';
import { EventTypes } from '../../../shared/_services/event/event-types.enum';
import { HttpHeaders, HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  infoForm: FormGroup;
  savingInfo = false;
  infoErrorMsg = null;

  pwdForm: FormGroup;
  savingPwd = false;
  pwdErrorMsg = null;

  user: UserModel;
  maxSize = 1048576; // in bytes 
  userFile: File;
  uploadProgress = 0;
  uploading = false;
  uploadErrorMsg = null;

  constructor(private authSrv: AuthenticationService,
    private _usrv: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _broadcaster: BroadcasterService,
    private route: ActivatedRoute) {
    this.buildInfoForm();
    this.buildPwdForm();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: UserModel }) => {
      this.user = data.user;
      this.user.profilePictureUrl = this.user.profilePictureUrl + '?v=' + Date.now(); // reload cache
      this.infoForm.setValue({
        userID: this.user.userID,
        username: this.user.username,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email,
        password: this.user.password,
        lockoutEnabled: this.user.lockoutEnabled,
        isActive: this.user.isActive,
        dateCreated: this.user.dateCreated,
        lastLoginDate: this.user.lastLoginDate,
        isTemporaryPassword: this.user.isTemporaryPassword
      });
    });
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
      password: [{ value: null, disabled: true }],
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

  resetPwdForm() {
    FormUtility.resetForm(this.pwdForm);
  }

  changePassword() {
    this.pwdErrorMsg = null;
    if (!this.pwdForm.valid) return;
    this.savingPwd = true;
    this._usrv.changePassword(this.pwdForm.value)
      .pipe(finalize(() => this.savingPwd = false))
      .subscribe(() => {
        this.resetPwdForm();
        this.toastr.success(`Password changed successfully!`, 'Success!');
      }, err => this.pwdErrorMsg = err.error || err)
  }

  resetInfoForm() {
    FormUtility.resetForm(this.infoForm);
  }

  save() {
    this.infoErrorMsg = null;
    if (this.infoForm.valid) {
      this.savingInfo = true;
      let user = <UserModel>this.infoForm.getRawValue();
      this._usrv.createOrUpdate(user)
        .pipe(finalize(() => this.savingInfo = false))
        .subscribe(() => {
          this.user = user;
          this.user.fullName = this.user.firstName + ' ' + this.user.lastName;
          this._broadcaster.broadcast(EventTypes.USERPROFILEUPDATED, this.user);
          this.toastr.success('Personal info updated successfully!', 'Success!');
        }, err => this.infoErrorMsg = err.error || err)
    }
  }

  saveProfilePicture() {
    if (this.uploading) return;
    this.uploadErrorMsg = null;
    this.uploadProgress = 0;
    this.uploading = true;
    let fileSize = this.userFile.size / 1024;
    this._usrv.uploadProfilePicture(this.userFile, this.user.username).subscribe((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.uploadProgress =  Math.round((Math.round(event.loaded / 1024) / fileSize) * 100);;
          break;
        case HttpEventType.Response:
          console.info('😺 Done!', event.body);
          this.uploading = false;
          let resData: any = event.body;
          if (resData.status) {
            this.user.profilePictureUrl = resData.payload.localFilePath + '?v=' + Date.now(); // to force reloading browser cache
            this._broadcaster.broadcast(EventTypes.USERPROFILEUPDATED, this.user);
            this.toastr.success('Profile avater updated successfully!', 'Success!');
            this.userFile = null;
          } else {
            this.uploadErrorMsg = resData.message;
          }
      }
    }, err => {
      this.uploadErrorMsg = err.error || err;
      this.uploading = false;
    });
  }
}
