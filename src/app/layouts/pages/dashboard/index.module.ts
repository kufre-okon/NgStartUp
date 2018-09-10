import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { DefaultComponent } from '../default.component';
import { UserService } from '../../../services/user/user.service';

const routes: Routes = [
    {
        "path": '',
        "component": IndexComponent
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
    ], 
    exports: [
        RouterModule
    ], 
    declarations: [
        IndexComponent
    ], 
    providers: [
        UserService
    ]
})
export class IndexModule {



}