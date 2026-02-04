import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';

import { Router, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  standalone: true,
   imports: [CarouselModule, CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
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
    margin: 15,
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
    autoplayTimeout: 30000,
    autoplayHoverPause: true
  };

  gridItems = [
    {
      image: 'assets/images/landingPage/12.png',
      title: 'Apple Pre-Sales Expertise & Proof of Concept',
      description: 'Get expert guidance to choose the right Apple devices for your business and budget—no overspending. Experience Apple in action with live demos and tailored proof of concepts.'
    },
    {
      image: 'assets/icons/tradein_serv.png',
      title: 'Apple Device Trade-In Program',
      description: 'Easily upgrade with our Apple Trade-In program—get value for old devices toward new ones. Secure, eco-friendly, and seamless for single or fleet replacements.'
    },
    {
      image: 'assets/icons/expert_onsite_ser.png',
      title: 'Apple Services with Expert Onsite Support',
      description: 'Get expert Apple support onsite or remotely—from setup to troubleshooting. Certified engineers ensure smooth performance, tailored to your team`s needs.'
    },
    {
      image: 'assets/icons/apple_pp.png',
      title: 'Tailored Apple Purchase Programs with Financing & Flexible Payment Plans',
      description: 'Every business is unique—so are our Apple plans, with flexible leasing, volume pricing, and financing. Equip your team with the latest Apple tech through predictable costs and hassle-free upgrades.'
    },
    {
      image: 'assets/icons/seamlessdeploy_serv.png',
      title: 'Seamless Apple Deployment & Integration',
      description: 'Zero-touch Apple deployment with MDM and Apple Business Manager—fast, secure, and seamless. Ideal for startups to enterprise scale-ups, with expert setup and minimal downtime.'
    },
    {
      image: 'assets/icons/support_serv.png',
      title: 'Comprehensive Apple Maintenance & Support',
      description: 'End-to-end Apple support from certified engineers—onsite or remote. For updates, repairs, and more, we keep your Apple setup running smoothly.'
    },
    {
      image: 'assets/icons/training_serv.png',
      title: 'Custom Apple Training & Enablement',
      description: 'Boost productivity with tailored Apple training for users, creatives, and IT teams. Onsite or online, learn to create, collaborate, and troubleshoot like a pro.'
    },
    {
      image: 'assets/icons/apple_program_serv.png',
      title: 'Exclusive Apple Programs',
      description: 'Unlock exclusive Apple benefits for business and education through an authorised partner. Access tools, pricing, and support to grow and achieve more.'
    },
    {
      image: 'assets/icons/ecosystem_serv.png',
      title: 'Apple Ecosystem Consulting',
      description: 'Align Apple devices, apps, and workflows with your business goals. From planning to deployment, we deliver secure, scalable solutions that work.'
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

  bannerImages = [
    {
      src: '../assets/images/landingPage/12.png',
      text: 'Enterprise',
      subtext: 'Hardware Solutions.',
      subtext1: 'Powered by apple.',
      // btnText: 'Talk to an Apple Expert'
    },
    {
      src: 'assets/images/appleent_new.png',
      text: 'Buy Mac – Refresh after 3 years',
      subtext: 'Enjoy hassle‑free upgrades with our 3‑year refresh guarantee.',
       subtext1: 'Powered by apple.',
      // btnText: 'Start Your Upgrade'
    },
    {
      src: 'assets/images/appleent_new.png',
      text: 'Experience Mac Firsthand – Get a POC Today',
      subtext: 'Request a free POC unit and evaluate Mac performance in your environment.',
       subtext1: 'Powered by apple.',
      // btnText: 'Request Your Free POC'
    }
  ];
  currentIndex = 0;
  private intervalId: any;


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
    this.startAutoLoop();
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


  ngOnDestroy() {
    this.clearAutoLoop();
  }

  startAutoLoop() {
    this.clearAutoLoop();
    this.intervalId = setInterval(() => {
      this.showNext();
    }, 5000);
  }

  clearAutoLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  showPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.bannerImages.length) % this.bannerImages.length;
    this.startAutoLoop();
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length;
    this.startAutoLoop();
  }

  goToImage(idx: number) {
    this.currentIndex = idx;
    this.startAutoLoop();
  }

  get imageCount() {
    return this.bannerImages.length;
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
