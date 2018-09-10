import { Component, OnInit, ViewEncapsulation } from '@angular/core';

let  BlockUIDemo:any;

@Component({
    selector: "app-inner-page-wrapper",
    templateUrl: "./default.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DefaultComponent implements OnInit {
   
    constructor() {

    }
    ngOnInit() {
    }

}