import { Component } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {
    location: any;
    routerSubscription: any;
    showHeaderFooter: boolean = true;

    constructor(
        private router: Router
    ) {}

    ngOnInit(){
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            // Hide header and footer for login page and landing page
            const noHeaderFooterRoutes = ['/login', '/', '/landing-page', '/thank-you'];
            this.showHeaderFooter = !noHeaderFooterRoutes.includes(this.location);
            window.scrollTo(0, 0);
        });
    }
}