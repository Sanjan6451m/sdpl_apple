import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarComponent implements OnInit {
    location: any;
    navbarClass: any;
    isMobile: boolean = false;

    classApplied = false;
    isSticky = false;
    isSuperiorVisible = true;

    toggleClass() {
        this.classApplied = !this.classApplied;
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    activeIndex: number | null = null;
    subActiveIndex: number | null = null;
    
    toggleMenu(index: number) {
      this.activeIndex = this.activeIndex === index ? null : index;
      this.subActiveIndex = null; // Close submenus when switching main menu
    }
    
    toggleSubMenu(index: number) {
      this.subActiveIndex = this.subActiveIndex === index ? null : index;
    }
    
 /*    closeMenu() {
      this.activeIndex = null;
      this.subActiveIndex = null;
    } */

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/home-three'){
                    this.navbarClass = 'navbar-area three';
                } else {
                    this.navbarClass = 'navbar-area';
                }
                this.classApplied = false;
            }
        });
        this.checkScreenSize();
    }

    // Navbar Sticky
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }
    onWindowScroll() {
        if (window.pageYOffset > 50) {
          this.isSticky = true;
          this.isSuperiorVisible = false;
        } else {
          this.isSticky = false;
          this.isSuperiorVisible = true;
        }
      }
    // Check screen size for mobile view
    @HostListener('window:resize', ['$event'])
    checkScreenSize() {
        this.isMobile = window.innerWidth <= 991;
    }

    // Toggle dropdown on mobile
    toggleDropdown(event: Event, item: HTMLElement) {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
            
            // Remove show class from all other items
            const allItems = document.querySelectorAll('.nav-item');
            allItems.forEach(navItem => {
                if (navItem !== item && navItem.classList.contains('show')) {
                    navItem.classList.remove('show');
                }
            });
            
            // Toggle show class on clicked item
            item.classList.toggle('show');
        }
    }

    closeMenu() {
        this.classApplied = false;
        // Close all dropdowns when closing menu
        const allItems = document.querySelectorAll('.nav-item');
        allItems.forEach(item => item.classList.remove('show'));
    }
}