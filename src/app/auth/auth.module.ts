import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthRoutingModule } from './auth-routing.routing';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';
import { AlertComponent } from '../shared/_components/alert/alert.component';
import { AlertService } from '../shared/_services/alert.service';
import { AuthGuardService } from '../shared/_guards/auth-guard.service';
import { UserService } from '../services/user/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/_modules/app-material.module';

@NgModule({
    declarations: [
        AuthComponent,
        AlertComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        AuthRoutingModule,
        AppMaterialModule
    ],
    providers: [
        AuthGuardService,
        AlertService,
        UserService
    ],
    entryComponents: [AlertComponent]
})

export class AuthModule {
}