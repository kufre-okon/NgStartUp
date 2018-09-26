import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthRoutingModule } from './auth-routing.routing';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from '../shared/_guards/auth-guard.service';
import { UserService } from '../services/user/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/_modules/app-material.module';
import { SharedModule } from '../shared/_modules/shared.module';

@NgModule({
    declarations: [
        AuthComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        HttpModule,
        AuthRoutingModule,
        AppMaterialModule
    ],
    providers: [
        AuthGuardService,
        UserService
    ],
})

export class AuthModule {
}