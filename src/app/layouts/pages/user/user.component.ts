import { Component, OnInit, ElementRef, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { PaginateInfo } from '../../../models/common/paginator';
import { TrillPaginatorComponent } from '../../../shared/_components/trill-paginator/trill-paginator.component';
import { UserService } from '../../../services/user/user.service';
import { GenericDataSource } from '../../../models/common/generic-data-source';
import { UserModel } from '../../../models/users/user';
import { finalize, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { BlockUIService } from '../../../shared/_services/block-ui.service';
import { MatSort } from '@angular/material';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RoleService } from '../../../services/role/role.service';
import { NgOption } from '@ng-select/ng-select';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';


@Component({
  selector: 'page-user',
  templateUrl: "./user.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit, AfterViewInit {

  @ViewChild('userpaginator') paginator: TrillPaginatorComponent;
  @ViewChild(MatSort) sort: MatSort;

  filterForm: FormGroup;
  roles: NgOption[];

  pagingInfo: PaginateInfo = new PaginateInfo();
  displayedColumns = ["username", "firstName", "lastName", "email", "roles", "isActive", "dateCreated", "actions"];
  userDataSource: GenericDataSource<UserModel>;

  loading = false;

  constructor(private _userSrv: UserService, private _roleSrv: RoleService, private modalSrv: NgbModal, private fb: FormBuilder, private _blockUI: BlockUIService) { }

  ngAfterViewInit(): void {
    // server-side search
    /* fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.page = 1;
          this.loadUsers();
        })
      )
      .subscribe();
 */
    this.paginator.onPageChanged.subscribe(() => {
      this.loadUsers();
    })

    this.sort.sortChange.subscribe(() => {
      // reset paginator after sorting
      this.paginator.page = 1;
      this.loadUsers();
    })
  }

  applyFilter() {
    this.paginator.page = 1;
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this._userSrv.searchUser(
      this.filterForm.get('searchTerm').value || '',
      this.filterForm.get('roleId').value || '',
      this.paginator.page,
      this.paginator.pageSize,
      this.sort.active || '',
      this.sort.direction)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.pagingInfo.currentPage = res.pageNumber;
        this.pagingInfo.from = res.itemStart;
        this.pagingInfo.to = res.itemEnd;
        this.pagingInfo.pageSize = res.pageSize;
        this.pagingInfo.totalCount = res.totalItemCount;
        this.pagingInfo.totalPages = res.pageCount;

        this.userDataSource = new GenericDataSource<UserModel>(res.items);
      })
  }

  ngOnInit() {
    this.buildSearchForm();
    this.loadRoles();
    this.loadUsers();
  }

  buildSearchForm() {
    this.filterForm = this.fb.group({
      searchTerm: new FormControl(''),
      roleId: new FormControl('', ),
    });
  }

  loadRoles() {
    this._roleSrv.getLightWeightList().subscribe((data) => {
      this.roles = data;
    })
  }

  edit(row) {
    this.createUser((<UserModel>row).userID);
  }

  activateUser(user, evt) {
    if (evt) {
      this.loading = true;
      this._userSrv.activateDeactivateAccount(user.userID, true)
        .pipe(finalize(() => this.loading = false))
        .subscribe(() => user.isActive = true);
    }
  }

  deactivateUser(user, evt) {
    if (evt) {
      this.loading = true;
      this._userSrv.activateDeactivateAccount(user.userID, false)
        .pipe(finalize(() => this.loading = false))
        .subscribe(() => user.isActive = false);
    }
  }

  createUser(userId: any) {
    const dialogRef = this.modalSrv.open(CreateUserComponent, { windowClass: 'm-modal m-modal--md' });
    dialogRef.componentInstance.userId = userId;
    dialogRef.result.then(result => {
      if (result)
        this.loadUsers();
    }).catch(() => { });
  }
}
