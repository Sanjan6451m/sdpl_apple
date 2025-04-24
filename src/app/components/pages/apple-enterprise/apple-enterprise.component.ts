import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-enterprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apple-enterprise.component.html',
  styleUrl: './apple-enterprise.component.scss'
})
export class AppleEnterpriseComponent implements OnInit, AfterViewInit {

  @ViewChild('cardsContainer', { static: false }) cardsContainer!: ElementRef;
  activeIndex = 0;
  isHovered = false;
  cards = [
    { 
      title: 'Always On', 
      description: 'Apple devices ensure maximum uptime, minimal downtime.',
      icon: 'fas fa-power-off'
    },
    { 
      title: 'Seamless Performance', 
      description: 'MacBook Pro and Air deliver smooth multitasking.',
      icon: 'fas fa-tachometer-alt'
    },
    { 
      title: 'Up to 24hrs Battery Life', 
      description: 'Exceptional battery backup for mobile productivity.',
      icon: 'fas fa-battery-full'
    },
    { 
      title: 'Integrated Ecosystem', 
      description: 'Hardware, OS, and apps work in perfect sync.',
      icon: 'fas fa-sync'
    },
    { 
      title: 'Enhanced Protection', 
      description: 'Accessories shield devices from physical wear and tear.',
      icon: 'fas fa-shield-alt'
    },
    { 
      title: 'Complete Coverage', 
      description: 'AppleCare+ and insurance safeguard against accidental damage',
      icon: 'fas fa-umbrella'
    },
    { 
      title: 'Superior Support', 
      description: 'Value-added solutions tailored by Superior Digital experts.',
      icon: 'fas fa-headset'
    }
  ];
  gridItems = [
    { title: 'Seamless Integration', description: 'Our solutions easily integrate with existing enterprise systems and platforms, ensuring a smooth transition and minimal disruption to your operations.', image: 'assets/images/seamless_integration.jpeg' },
    { title: 'Enhanced Security', description: 'Protecting your data is our top priority. We offer advanced security features, including encryption, multi-factor authentication, and remote wipe capabilities, to safeguard sensitive information against cyber threats.', image: 'assets/images/enhance_security.jpeg' },
    { title: 'Customisable Applications', description: 'We provide a range of customisable mobile applications designed to streamline workflows and increase operational efficiency. These applications are intuitive and user friendly, requiring minimal training and support.', image: 'assets/images/custom_application.jpeg' },
    { title: 'Real-time Analytics', description: 'Gain insights into your business operations with real-time data analytics. Our solutions offer detailed reports and analytics to help you make informed decisions and stay ahead of the competition.', image: 'assets/images/realtimeanalysis.jpeg' },
    { title: 'Scalable Solutions', description: 'As your business grows, our mobility solutions can scale to meet your evolving needs. Whether you\'re expanding your workforce or entering new markets, we have the technology and expertise to support your growth.', image: 'assets/images/scalable.jpeg' }
  ];
  slideInterval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startAutoSlide();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }

  startAutoSlide() {
    if (!this.isHovered) {
      this.slideInterval = setInterval(() => {
        this.scrollCards('right');
      }, 3000);
    }
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  onMouseEnter() {
    this.isHovered = true;
    this.stopAutoSlide();
  }

  onMouseLeave() {
    this.isHovered = false;
    this.startAutoSlide();
  }

  scrollCards(direction: 'left' | 'right') {
    const container = this.cardsContainer.nativeElement;
    const cardWidth = container.offsetWidth / 3;
    
    if (direction === 'right') {
      this.activeIndex = (this.activeIndex + 1) % this.cards.length;
    } else {
      this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
    }

    // Calculate the scroll position to center the active card
    const scrollPosition = (this.activeIndex * cardWidth) - (container.offsetWidth / 2) + (cardWidth / 2);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  ngAfterViewInit(): void {
    this.initializeAnimations();
  }

  private initializeAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = element.getAttribute('data-delay') || '0';
          setTimeout(() => {
            element.classList.add('animate');
          }, parseInt(delay));
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.slide-in').forEach(element => {
      observer.observe(element);
    });
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  goToSlide(index: number) {
    this.activeIndex = index;
    const container = this.cardsContainer.nativeElement;
    const cardWidth = container.offsetWidth / 3;
    const scrollPosition = (index * cardWidth) - (container.offsetWidth / 2) + (cardWidth / 2);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

}
