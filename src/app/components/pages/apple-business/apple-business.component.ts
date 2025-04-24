import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-apple-business',
    templateUrl: './apple-business.component.html',
    styleUrls: ['./apple-business.component.scss']
})
export class AppleBusinessComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}