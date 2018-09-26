import { Component, OnInit, Inject, Input } from '@angular/core';
import { UserModel } from '../../../../models/users/user';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { UserService } from '../../../../services/user/user.service';
import { DISABLED } from '@angular/forms/src/model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { map, finalize } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from '../../../../services/role/role.service';
import { RoleLightWeight } from '../../../../models/role/role-light-weight';
import { ToastrService } from 'ngx-toastr';
import { Patterns } from '../../../../_config/patterns';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnInit {

  @Input() userId: string;

  userForm: FormGroup;

  loading = false;
  saving = false;
  revealPassword = false;
  errorMsg = null;
  roles = Array<RoleLightWeight>();

  constructor(private _usrv: UserService, private _roleSrv: RoleService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal) {

    this.buildForm();
    this.loadRoles();
  }

  ngOnInit() {
    this.getUser();
  }

  loadRoles() {
    this._roleSrv.getLightWeightList().subscribe((data) => {
      this.roles = data;

      let fg = <FormGroup>this.userForm.get('roles');
      this.roles.forEach(r => fg.addControl(r.id, new FormControl(false)));
    })
  }

  getUser() {
    if (!this.userId) return;
    this.loading = true;
    this._usrv.getUser(this.userId)
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        this.userForm.patchValue({
          userID: data.userID,
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          password: data.password,
          sendActivationEmail: data.sendActivationEmail,
          lockoutEnabled: data.lockoutEnabled,
          isActive: data.isActive,
          dateCreated: data.dateCreated,
          lastLoginDate: data.lastLoginDate,
          isTemporaryPassword: data.isTemporaryPassword
        });
        let ctrls = (<FormGroup>this.userForm.get('roles')).controls;
        data.roles.forEach(r => ctrls[r.id] && ctrls[r.id].setValue(true));
      }, err => {
        this.errorMsg = err.error || err;
      });
  }

  buildForm() {
    this.userForm = this.fb.group({
      userID: new FormControl({ value: null, disabled: true }),
      dateCreated: new FormControl({ value: null, disabled: true }),
      lastLoginDate: new FormControl({ value: null, disabled: true }),
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.pattern(Patterns.emailPattern)]),
      password: new FormControl('', [Validators.required]),
      sendActivationEmail: new FormControl(false),
      lockoutEnabled: new FormControl(false),
      isActive: new FormControl(true),
      isTemporaryPassword: new FormControl(true),
      roles: new FormGroup({})
    }, { updateOn: 'submit' });
  }

  // convenient way of getting form controls
  get f() { return this.userForm.controls; }

  save() {
    this.errorMsg = null;

    if (this.userForm.valid) {
      this.saving = true;
      let selectedRoles = [];
      this.roles.forEach(r => {
        if (this.userForm.value.roles[r.id]) selectedRoles.push(r);
      })
      var user = <UserModel>this.userForm.getRawValue();
      user.roles = selectedRoles;
      this._usrv.createOrUpdate(user)
        .pipe(finalize(() => this.saving = false))
        .subscribe(() => {
          this.activeModal.close(true);
          this.toastr.success(`User details ${user.userID ? 'updated' : 'saved'} successfully!`, 'Success!');
        }, err => this.errorMsg = err.error || err)
    }
  }
}
