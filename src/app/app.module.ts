import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./shared/_services/script-loader.service";
import { AuthModule } from "./auth/auth.module";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpServiceInterceptor } from './shared/_services/interceptors/http-service-interceptors';
import { LayoutModule } from './layouts/layout.module';
import { LayoutRoutingModule } from './layouts/layout-routing.module';
import { AuthenticationService } from './services/auth/authentication.service';
import { BroadcasterService } from './shared/_services/event/broadcaster.service';
import { TrillPaginatorComponent } from './shared/_components/trill-paginator/trill-paginator.component';
import { SharedModule } from './shared/_modules/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { PopuploginModule } from './shared/_components/popuplogin/popuplogin.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        SharedModule,
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        LayoutRoutingModule,
        AuthModule,
        PopuploginModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-top-center',
            closeButton: true
        }),
        SweetAlert2Module.forRoot({
            buttonsStyling: false,
            customClass: 'modal-content',
            confirmButtonClass: 'btn btn-info',
            cancelButtonClass: 'btn btn-danger'
            // import swal from 'sweetalert2';
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpServiceInterceptor,
            multi: true
        },
        ScriptLoaderService,
        AuthenticationService,
        BroadcasterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }