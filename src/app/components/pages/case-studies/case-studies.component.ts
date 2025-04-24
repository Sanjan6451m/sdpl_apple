import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-case-studies',
    templateUrl: './case-studies.component.html',
    styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {}
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    navigateToHome(): void {
        this.router.navigate(['/']);
      }
}