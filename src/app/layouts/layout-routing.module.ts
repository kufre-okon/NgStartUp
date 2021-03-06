import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/_guards/auth-guard.service';
import { LayoutComponent } from './layout.component';
import { DefaultComponent } from './pages/default.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
    {
        "path": "",
        "component": LayoutComponent,
        "canActivate": [AuthGuardService],
        "canLoad": [AuthGuardService],
        "children": [
            {
                "path": "",
                "component": DefaultComponent,
                "children": [
                    {
                        "path": "index",
                        "loadChildren": "./pages/dashboard/index.module#IndexModule"
                    },
                    {
                        "path": "user",
                        "loadChildren": "./pages/user/user.module#UserModule"
                    },
                    {
                        "path": "profile",
                        "loadChildren": "./pages/profile/profile.module#ProfileModule"
                    },
                    //...
                    {
                        "path": "404",
                        "loadChildren": "./pages/not-found/not-found.module#NotFoundModule"
                    }
                ]
            },
            {
                "path": "**",
                "redirectTo": "404",
                "pathMatch": "full"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }