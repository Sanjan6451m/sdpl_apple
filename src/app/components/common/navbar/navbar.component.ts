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
    isMobileMenuOpen = false;
    lastScrollTop = 0;

    toggleClass() {
        this.classApplied = !this.classApplied;
    }
    ngOnInit(): void {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(link);
        // Initialize component
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
            if (event instanceof NavigationEnd) {
                this.location = this.router.url;
                if (this.location == '/home-three') {
                    this.navbarClass = 'navbar-area three';
                } else {
                    this.navbarClass = 'navbar-area';
                }
                this.classApplied = false;
                // Close mobile menu on navigation
                this.isMobileMenuOpen = false;
                document.body.style.overflow = '';
            }
        });
        this.checkScreenSize();
    }

    // Navbar Sticky
    @HostListener('window:scroll', ['$event'])
    onScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Handle superior navbar visibility
        if (scrollTop > 100) {
            this.isSuperiorVisible = false;
        } else {
            this.isSuperiorVisible = true;
        }

        // Handle sticky navbar
        if (scrollTop > 200) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }

        this.lastScrollTop = scrollTop;
    }

    // Check screen size for mobile view
    @HostListener('window:resize', ['$event'])
    checkScreenSize() {
        this.isMobile = window.innerWidth <= 1024;
        // Close mobile menu when switching to desktop view
        if (!this.isMobile) {
            this.isMobileMenuOpen = false;
            document.body.style.overflow = '';
        }
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

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    }

    toggleSubmenu(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        
        const target = event.currentTarget as HTMLElement;
        const parent = target.parentElement;
        
        if (parent) {
            const submenu = parent.querySelector('.mobile-submenu');
            if (submenu) {
                parent.classList.toggle('active');
                submenu.classList.toggle('active');
            }
        }
    }

    // Close mobile menu when clicking outside
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const hamburgerButton = document.querySelector('.hamburger-menu');
        
        if (this.isMobileMenuOpen && 
            mobileMenu && 
            hamburgerButton && 
            !mobileMenu.contains(event.target as Node) && 
            !hamburgerButton.contains(event.target as Node)) {
            this.toggleMobileMenu();
        }
    }
}