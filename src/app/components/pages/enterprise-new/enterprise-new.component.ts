import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';

import { Router, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-enterprise-new',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterModule],
  templateUrl: './enterprise-new.component.html',
  styleUrl: './enterprise-new.component.scss'
})
export class EnterpriseNewComponent {
  @ViewChild('gridCarousel') gridCarousel: CarouselComponent;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        740: {
            items: 1
        },
        940: {
            items: 1
        }
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
}

  gridCarouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      '0': { items: 1 },
      '576': { items: 2 },
      '768': { items: 3 },
      '992': { items: 4 }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };

  gridItems = [
    {
      image: 'assets/images/demopoc.png',
      title: 'Apple Pre-Sales Expertise & Proof of Concept',
      description: 'Get expert guidance to choose the right Apple devices for your business and budget—no overspending. Experience Apple in action with live demos and tailored proof of concepts.'
    },
    {
      image: 'assets/images/apple_device_tradein.png',
      title: 'Apple Device Trade-In Program',
      description: 'Easily upgrade with our Apple Trade-In program—get value for old devices toward new ones. Secure, eco-friendly, and seamless for single or fleet replacements.'
    },
    {
      image: 'assets/images/appleservice.png',
      title: 'Apple Services with Expert Onsite Supportt',
      description: 'Get expert Apple support onsite or remotely—from setup to troubleshooting. Certified engineers ensure smooth performance, tailored to your team`s needs.'
    },
    {
      image: 'assets/images/financeflexi.png',
      title: 'Tailored Apple Purchase Programs with Financing & Flexible Payment Plans',
      description: 'Every business is unique—so are our Apple purchase plans, with flexible leasing, volume pricing, and financing suited to your needs. Empower your team with the latest Apple technology through predictable costs and easy, stress-free upgrades..'
    },
    {
      image: 'assets/images/delpoy_new.png',
      title: 'Seamless Apple Deployment & Integration',
      description: 'Zero-touch Apple deployment with MDM and Apple Business Manager—fast, secure, and seamless. Ideal for startups to enterprise scale-ups, with expert setup and minimal downtime.'
    },
    {
      image: 'assets/images/compresup.png',
      title: 'Comprehensive Apple Maintenance & Support',
      description: 'End-to-end Apple support from certified engineers—onsite or remote. For updates, repairs, and more, we keep your Apple setup running smoothly.'
    },
    {
      image: 'assets/images/appletraining.png',
      title: 'Custom Apple Training & Enablement',
      description: 'Boost productivity with tailored Apple training for users, creatives, and IT teams. Onsite or online, learn to create, collaborate, and troubleshoot like a pro.'
    },
    {
      image: 'assets/images/ecosystem1.png',
      title: 'Apple Ecosystem Consulting',
      description: 'Align Apple devices, apps, and workflows with your business goals. From planning to deployment, we deliver secure, scalable solutions that work.'
    },
    {
      image: 'assets/images/appleprog.png',
      title: 'Exclusive Apple Programs',
      description: 'Unlock exclusive Apple benefits for business and education through an authorised partner. Access tools, pricing, and support to grow and achieve more.'
    }
  ];

  customOptions1 = {
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  currentTab: string = 'tab3';
  mbAirUrl: SafeResourceUrl;

  constructor(private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.mbAirUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/MBA/mba_air.html'
    );
  }

  switchTab(event: Event, tab: string): void {
    event.preventDefault();
    this.currentTab = tab;
  }

  navigateToAppleEnterprise() {
    this.router.navigate(['/enterprise-new']);
  }

  scrollToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  ngOnInit(): void {
    // Handle both initial navigation and subsequent fragment changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          // Add a small delay to ensure the DOM is ready
          setTimeout(() => {
            this.scrollToSection(fragment);
          }, 100);
        }
      });
    });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }

  nextSlide() {
    this.gridCarousel.next();
  }

  prevSlide() {
    this.gridCarousel.prev();
  }
}
