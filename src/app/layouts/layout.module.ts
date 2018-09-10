import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsideChatNavComponent } from './aside-chat-nav/aside-chat-nav.component';
import { HrefPreventDefaultDirective } from '../shared/_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../shared/_directives/unwrap-tag.directive';
import { DefaultModule } from './pages/default.module';
import { DefaultComponent } from './pages/default.component';

@NgModule({
    declarations: [
        LayoutComponent,
        DefaultComponent,
        HeaderNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        AsideChatNavComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
    ],
    exports: [
        LayoutComponent,
        DefaultComponent,
        HeaderNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        AsideChatNavComponent,
        HrefPreventDefaultDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        DefaultModule,
    ]
})
export class LayoutModule {
}