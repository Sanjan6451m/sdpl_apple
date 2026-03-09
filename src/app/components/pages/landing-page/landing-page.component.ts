import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { Router, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterModule, ScrollRevealDirective, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('gridCarousel') gridCarousel: CarouselComponent;
  @ViewChild('statsSection') statsSectionRef: ElementRef<HTMLElement>;
  @ViewChild('heroVideo') heroVideoRef: ElementRef<HTMLVideoElement>;

  private videoPlayAttempted = false;

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

  mobileBannerImages = [
    { src: 'assets/images/landingPage/mobile_banner1.png' },
    { src: 'assets/images/landingPage/mobilebanner2.png' },
    { src: 'assets/images/landingPage/mobilebanner3.png' },
    { src: 'assets/images/landingPage/mobilebanner4.png' },
    { src: 'assets/images/landingPage/mobilebanner5.png' }
  ];
  mobileCurrentIndex = 0;
  private mobileIntervalId: any;

  bannerImages = [
    {
      src: '../assets/images/landingPage/banner1.png',
      // text: 'Empower Your Workforce with Scalable Apple Solutions',
      // subtext: 'Empower Your Workforce with Scalable Apple Solutions',
      // subtext1: 'Empower Your Workforce with Scalable Apple Solutions',
      // subtext2: 'Empower Your Workforce with Scalable Apple Solutions',
      // btnText: 'Talk to an Apple Expert'
    },
    {
      src: '../assets/images/landingPage/banner2.png',
      /* text: 'Enterprise',
      subtext: 'Hardware Solutions.',
      subtext1: 'Powered by apple.',
      subtext2: 'Apple Business Partner delivering reliable enterprise solutions across India.', */
      // btnText: 'Start Your Upgrade'
    },
    {
      src: '../assets/images/landingPage/banner3.png',
     /*  text: 'Enterprise',
      subtext: 'Hardware Solutions.',
      subtext1: 'Powered by apple.',
      subtext2: 'Apple Business Partner delivering reliable enterprise solutions across India.', */
      // btnText: 'Request Your Free POC'
    },
    {
      src: '../assets/images/landingPage/banner4.png',
    },
    {
      src: '../assets/images/landingPage/banner5.png',
    }
  ];
  currentIndex = 0;
  private intervalId: any;

  // Stats count-up on scroll: target value, suffix (e.g. '+', 'K+'), label
  stats = [
    { target: 10, suffix: '', label: 'Years of Excellence' },
    { target: 500, suffix: '+', label: 'Enterprise Customers' },
    { target: 40, suffix: '+', label: 'Technology Partners' },
    { target: 100, suffix: 'K+', label: 'Devices Deployed' },
    { target: 16, suffix: '', label: 'Pan-India Covered States' }
  ];
  statDisplayValues: number[] = [0, 0, 0, 0, 0];
  private statsSectionInView = false;
  private statsObserver: IntersectionObserver | null = null;

  contactForm: FormGroup;
  showContactDialog = false;
  message = '';

  private disallowedEmailDomains = ['gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.co.uk', 'outlook.com', 'hotmail.com', 'hotmail.co.uk', 'live.com', 'msn.com'];

  disallowedEmailDomainsValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const email = (control.value || '').trim().toLowerCase();
    if (!email) return null;
    const domain = email.split('@')[1];
    if (!domain) return null;
    const isDisallowed = this.disallowedEmailDomains.some(d => domain === d || domain.endsWith('.' + d));
    return isDisallowed ? { disallowedEmailDomain: true } : null;
  };

  private readonly EMAILJS_PUBLIC_KEY = 'PTmfxUAnOlAZlyhRB';
  private readonly EMAILJS_SERVICE_ID = 'service_kuiothp';
  private readonly EMAILJS_TEMPLATE_ID = 'template_g8fkwgh';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.mbAirUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/MBA/mba_air.html'
    );
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      company: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, this.disallowedEmailDomainsValidator]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  switchTab(event: Event, tab: string): void {
    event.preventDefault();
    this.currentTab = tab;
  }

  navigateToAppleEnterprise() {
    this.router.navigate(['/enterprise-new']);
  }

  navigateToContactSection(event: Event): void {
    event.preventDefault();
    this.scrollToSection('contact-us');
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

  ngAfterViewInit(): void {
    if (this.statsSectionRef?.nativeElement) {
      this.statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const nowInView = entry.isIntersecting;
            if (nowInView && !this.statsSectionInView) {
              this.statsSectionInView = true;
              this.resetStatsAndAnimate();
            } else if (!nowInView) {
              this.statsSectionInView = false;
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px' }
      );
      this.statsObserver.observe(this.statsSectionRef.nativeElement);
    }
  }

  ngOnInit(): void {
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
    this.startAutoLoop();
    this.startMobileAutoLoop();
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


  ngOnDestroy(): void {
    this.clearAutoLoop();
    this.clearMobileAutoLoop();
    this.statsObserver?.disconnect();
  }

  private resetStatsAndAnimate(): void {
    this.statDisplayValues = [0, 0, 0, 0, 0];
    this.cdr.detectChanges();
    this.animateStats();
  }

  private animateStats(): void {
    const duration = 2000;
    const startTime = performance.now();

    const easeOutQuart = (t: number) => 1 - (1 - t) ** 4;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);

      this.stats.forEach((stat, i) => {
        const target = stat.target;
        this.statDisplayValues[i] = typeof target === 'number' ? Math.round(target * eased) : 0;
      });
      this.cdr.detectChanges();

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        this.stats.forEach((_, i) => {
          const target = this.stats[i].target;
          this.statDisplayValues[i] = typeof target === 'number' ? target : 0;
        });
        this.cdr.detectChanges();
      }
    };
    requestAnimationFrame(tick);
  }

  getStatDisplay(index: number): string {
    const stat = this.stats[index];
    const target = stat?.target;
    if (target == null) {
      return '';
    }
    const value = this.statDisplayValues[index] ?? 0;
    const suffix = stat?.suffix ?? '';
    return `${value}${suffix}`;
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

  startMobileAutoLoop() {
    this.clearMobileAutoLoop();
    this.mobileIntervalId = setInterval(() => {
      this.showNextMobile();
    }, 5000);
  }

  clearMobileAutoLoop() {
    if (this.mobileIntervalId) {
      clearInterval(this.mobileIntervalId);
      this.mobileIntervalId = null;
    }
  }

  showPrevMobile() {
    this.mobileCurrentIndex = (this.mobileCurrentIndex - 1 + this.mobileBannerImages.length) % this.mobileBannerImages.length;
    this.startMobileAutoLoop();
  }

  showNextMobile() {
    this.mobileCurrentIndex = (this.mobileCurrentIndex + 1) % this.mobileBannerImages.length;
    this.startMobileAutoLoop();
  }

  goToMobileImage(idx: number) {
    this.mobileCurrentIndex = idx;
    this.startMobileAutoLoop();
  }

  get imageCount() {
    return this.bannerImages.length;
  }

  get currentBannerIsVideo(): boolean {
    const src = this.bannerImages[this.currentIndex]?.src ?? '';
    return src.toLowerCase().endsWith('.mp4');
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  onContactSubmit(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      this.message = 'Sending message...';
      this.cdr.detectChanges();

      const templateParams = {
        to_email: 'superiordigital4@gmail.com',
        to_name: 'SDPL',
        from_name: this.contactForm.value.name,
        company: this.contactForm.value.company,
        device: this.contactForm.value.company,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message,
        reply_to: this.contactForm.value.email
      };

      emailjs
        .send(
          this.EMAILJS_SERVICE_ID,
          this.EMAILJS_TEMPLATE_ID,
          templateParams,
          { publicKey: this.EMAILJS_PUBLIC_KEY }
        )
        .then(
          (response) => {
            this.message = 'Message sent successfully!';
            this.contactForm.reset();
            this.cdr.detectChanges();
            this.router.navigate(['/thank-you']);
          },
          (error) => {
            this.message = 'Error sending message. Please try again later.';
            console.error('EmailJS failed:', error?.status, error?.text ?? error);
            this.cdr.detectChanges();
          }
        )
        .catch((err) => {
          this.message = 'Error sending message. Please try again later.';
          console.error('EmailJS error:', err);
          this.cdr.detectChanges();
        });
    } else {
      this.message = 'Please fill in all required fields correctly.';
      this.cdr.detectChanges();
    }
  }

  closeContactDialog(): void {
    this.showContactDialog = false;
  }

  /** Ensures video plays on mobile where autoplay is often blocked. Call play() when ready. */
  onVideoReady(event: Event): void {
    const video = event?.target as HTMLVideoElement;
    if (video && video.paused) {
      video.muted = true; // Ensure muted for autoplay policies
      video.play().catch(() => {
        // Autoplay blocked - will retry on first user interaction
      });
    }
  }

  /** Retry video play on first user interaction (mobile often blocks autoplay until then). */
  @HostListener('document:touchstart')
  @HostListener('document:click')
  onFirstUserInteraction(): void {
    if (this.videoPlayAttempted || !this.currentBannerIsVideo) return;
    const video = this.heroVideoRef?.nativeElement;
    if (video && video.paused) {
      this.videoPlayAttempted = true;
      video.muted = true;
      video.play().catch(() => {});
    }
  }
}
