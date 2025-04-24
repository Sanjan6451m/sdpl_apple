import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-home-one',
    standalone: true,
    imports: [CommonModule, CarouselModule, RouterModule, ReactiveFormsModule],
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
    // currentTab: string = 'tab1';
    contactForm: FormGroup;
    message: string = '';
    selectedDevice = ''; 
    // currentTab = 'tab1';
 /*    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
 */
    devices = [
        'MacBook Air',
        'MacBook Pro',
        'iMac',
        'Mac Mini', 
        'Mac Studio', 
        'Mac Pro', 
        'iPad', 
        'iPhone', 
        'Apple Watch', 
        'Airpods', 
        'Other Accessories', 
    ]; 
    customerCount = 0;
    partnerCount = 0;
    deviceCount = 0;
    projectCount = 0;
    animationStarted = false;
    constructor(
        private fb: FormBuilder, 
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router
    ) { 
        this.contactForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            device: ['']
        });
        emailjs.init("PTmfxUAnOlAZlyhRB");
    }

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

    slides = [
        {
            id: 1,
            title: 'Apple Devices for Enterprise',
            description1: 'Empower your workforce with Apple devices, tailored for enterprise needs.',
            description2: 'Get your team working smarter with Apple devices that just work.',
            description3: ' Deploy Macs and iPads at scale with zero-touch setup and enterprise-grade support.',
            img: 'assets/images/enterprise.png',
            alt: 'Apple Devices for Enterprise',
            pageLink: '/apple-enterprise'
        },
        {
            id: 2,
            title: 'MDM Solutions',
            description1: 'Simplify management with industry-leading Mobile Device Management.',
            description2: 'Take control of every device—without leaving your desk.',
            description3: 'Secure, manage, and monitor Apple devices with advanced MDM integration.',
            img: 'assets/images/mdm_banner1.png',
            alt: 'MDM Solutions',
            pageLink: '/mdm'
        },
        {
            id: 3,
            title: 'Audio Video Setup',
            description1: 'Transform your spaces with professional AV solutions for clear communication.',
            description2: 'Make every meeting look and sound amazing.',
            description3: 'Smart AV integrations for seamless presentations and hybrid collaboration.',            
            img: 'assets/images/avsetup_banner_new.png',
            alt: 'Audio Video Setup',
            pageLink: '/avsolution'
        },
        {
            id: 4,
            title: 'Networking Solutions',
            description1: 'Build fast, reliable, and secure networks tailored for your organisation.',
            description2: 'Say goodbye to weak Wi-Fi and tangled cables.',
            description3: 'Enterprise-grade networking built for speed, stability, and scale.',            
            img: 'assets/images/networking_banner.jpeg',
            alt: 'Networking Solutions',
            pageLink: '/networking'
        },
        {
            id: 5,
            title: 'Mobility',
            description1: 'Enable secure and seamless mobile workforces with Apple mobility solutions.',
            description2: 'Work from anywhere—securely and efficiently.',
            description3: 'Drive productivity on the move with mobile-first Apple ecosystem strategies.',            
            img: 'assets/images/mobility_banner_new.jpeg',
            alt: 'Mobility',
            pageLink: '/mobility'
        },
        {
            id: 6,
            title: 'Leasing Services',
            description1: 'Flexible leasing plans to equip your teams without upfront investment.',
            description2: 'Upgrade without the upfront cost—lease the latest tech today.',
            description3: 'Scalable leasing models to stay future-ready and financially agile.',
            img: 'assets/images/leasing_new_bannerimg.png',
            alt: 'Leasing Services',
            pageLink: '/leasing'
        },
        {
            id: 7,
            title: 'Financing Solutions',
            description1: 'Finance your Apple ecosystem with custom plans that fit your budget.',
            description2: 'Get the tech you need—pay the way that works for you.',
            description3: 'Smart financing options for seamless IT expansion and upgrades.',
            img: 'assets/images/financing_b1.png',
            alt: 'Financing Solutions',
            pageLink: '/apple-financing'
        }
    ];

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
        
        // Add intersection observer for animation
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animationStarted) {
                    this.animationStarted = true;
                    this.startCountingAnimation();
                }
            });
        });

        const statsElement = document.querySelector('.stats-card');
        if (statsElement) {
            observer.observe(statsElement);
        }
    }

    startCountingAnimation() {
        const duration = 3000; // 3 seconds
        const steps = 100;
        const interval = duration / steps;

        // Customer count
        const customerStep = 1000 / steps;
        const customerInterval = setInterval(() => {
            this.customerCount = Math.min(Math.ceil(this.customerCount + customerStep), 1000);
            if (this.customerCount >= 1000) {
                clearInterval(customerInterval);
            }
        }, interval);

        // Partner count
        const partnerStep = 60 / steps;
        const partnerInterval = setInterval(() => {
            this.partnerCount = Math.min(Math.ceil(this.partnerCount + partnerStep), 60);
            if (this.partnerCount >= 60) {
                clearInterval(partnerInterval);
            }
        }, interval);

        // Device count
        const deviceStep = 300000 / steps;
        const deviceInterval = setInterval(() => {
            this.deviceCount = Math.min(Math.ceil(this.deviceCount + deviceStep), 300000);
            if (this.deviceCount >= 300000) {
                clearInterval(deviceInterval);
            }
        }, interval);

        // Project count
        const projectStep = 700 / steps;
        const projectInterval = setInterval(() => {
            this.projectCount = Math.min(Math.ceil(this.projectCount + projectStep), 700);
            if (this.projectCount >= 700) {
                clearInterval(projectInterval);
            }
        }, interval);
    }

    teamSlides: OwlOptions = {
		loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }
    clientWrap: OwlOptions = {
		loop:true,
		margin:30,
		nav:false,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 5000,
		autoplayHoverPause: true,
		center: false,
		responsive:{
			0:{
				items:1,
				margin: 10,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
				margin: 20,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			}
		}
    }

    // Accordion
    accordionItems = [
        {
            title: 'Great Understanding',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        },
        {
            title: 'Update Technology',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        },
        {
            title: 'Experienced Team',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        },
        {
            title: 'Best Quality Service',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        }
    ];
    selectedItem : any = null;
    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }
    
    // Tabs
 

    

  customOptions1: OwlOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  };

  onSubmit() {
    if (this.contactForm.valid) {
        this.message = 'Sending message...';
        
        emailjs.send("service_kuiothp", "template_g8fkwgh", {
            to_name: "SDPL",
            from_name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            phone: this.contactForm.value.phone,
            device: this.contactForm.value.device,
            message: this.contactForm.value.message,
            reply_to: this.contactForm.value.email
        })
        .then((response) => {
            this.message = 'Message sent successfully!';
            this.contactForm.reset();
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            this.message = 'Error sending message. Please try again later.';
            console.error('FAILED...', error);
        });
    } else {
        this.message = 'Please fill in all required fields correctly.';
    }
}

// Tabs
currentTab = 'tab1';
switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
}

// Video Popup
isOpen = false;
openPopup(): void {
    this.isOpen = true;
}
closePopup(): void {
    this.isOpen = false;
}

}