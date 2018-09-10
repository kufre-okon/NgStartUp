import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
    selector: "app-aside-chat-nav",
    templateUrl: "./aside-chat-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideChatNavComponent implements OnInit {

    show = true;

    constructor(router: Router, route: ActivatedRoute) {
        router.events
            .filter(e => e instanceof NavigationEnd)
            .forEach(e => {
                const page_data = route.root.firstChild.snapshot.data;
                this.show = !<boolean>page_data['hideAsideChatNav'];
            });
    }
    ngOnInit() {

    }

}