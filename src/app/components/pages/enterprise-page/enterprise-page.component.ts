import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-enterprise-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './enterprise-page.component.html',
  styleUrl: './enterprise-page.component.scss'
})
export class EnterprisePageComponent {
  customerCount = 0;
  partnerCount = 0;
  deviceCount = 0;
  projectCount = 0;
  animationStarted = false;
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
      event.preventDefault();
      this.currentTab = tab;
  }
 /*  offerings = [
    {
      title: 'IT Infrastructure & Services',
      description: 'Building robust IT infrastructure with scalable solutions for businesses.',
      icon: 'assets/icons/it-infrastructure.svg'  // Replace with actual icon path
    },
    {
      title: 'Workplace Solutions',
      description: 'Providing modern tools and strategies for optimized workplace efficiency.',
      icon: 'assets/icons/workplace-solutions.svg'  // Replace with actual icon path
    },
    {
      title: 'Cloud & Data Services',
      description: 'Secure and flexible cloud services that scale with your business.',
      icon: 'assets/icons/cloud-services.svg'  // Replace with actual icon path
    },
    {
      title: 'Enterprise Mobility',
      description: 'Mobile-first strategies that empower employees to work from anywhere.',
      icon: 'assets/icons/enterprise-mobility.svg'  // Replace with actual icon path
    },
    {
      title: 'Security & Compliance',
      description: 'Comprehensive security measures to ensure your business remains compliant.',
      icon: 'assets/icons/security-compliance.svg'  // Replace with actual icon path
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with the latest digital solutions and innovations.',
      icon: 'assets/icons/digital-transformation.svg'  // Replace with actual icon path
    }
  ];
 */
  // Mock data for "Why Choose Us" section
  reasons = [
    {
      title: '24/7 Support',
      description: 'Our team is available around the clock to ensure your business operates smoothly.',
      icon: 'assets/icons/support.svg'  // Replace with actual icon path
    },
    {
      title: 'Certified Experts',
      description: 'Work with certified professionals who are experts in their fields.',
      icon: 'assets/icons/certified-experts.svg'  // Replace with actual icon path
    },
    {
      title: 'Strategic Partnerships',
      description: 'We collaborate with industry leaders to deliver the best solutions.',
      icon: 'assets/icons/partnerships.svg'  // Replace with actual icon path
    },
    {
      title: 'Global Reach',
      description: 'Serving enterprises across the globe with customized solutions.',
      icon: 'assets/icons/global-reach.svg'  // Replace with actual icon path
    }
  ];

  // Mock data for testimonials / client success stories
  testimonials = [
    {
      client: 'XYZ Corporation',
      summary: 'We have increased our operational efficiency by 40% after partnering with this team.'
    },
    {
      client: 'ABC Ltd.',
      summary: 'Their cloud solutions have completely transformed our IT infrastructure and saved us time and costs.'
    },
    {
      client: 'TechHub Enterprises',
      summary: 'Professional, reliable, and cutting-edge solutions that keep our business ahead of the curve.'
    }
  ];

  // Mock data for strategic partnerships
  partners = [
    { name: 'Microsoft', logo: 'assets/logos/microsoft.png' },  // Replace with actual logos
    { name: 'Apple', logo: 'assets/logos/apple.png' },
    { name: 'Dell', logo: 'assets/logos/dell.png' },
    { name: 'Cisco', logo: 'assets/logos/cisco.png' }
  ];

  caseStudies = [
    {
      link: '/essilor',
      image: 'assets/images/case/ca6.png',
      title: "Essilor's Digital Transformation",
      description: "The integration of iPads has significantly improved the efficiency and effectiveness of Essilor's sales strategies."
    },
    {
      link: '/remidio',
      image: 'assets/images/case/ca1.png',
      title: 'Remidio',
      description: "The deployment of iPhones ensured consistent performance, with seamless post-sales support and guaranteeing uninterrupted operation."
    },
    {
      link: '/westpharma',
      image: 'assets/images/case/ca2.png',
      title: 'WestPharma',
      description: "The introduction of iPads and iPhones led to a 30% increase in sales interactions. The technology enhanced communication, improved workflows."
    },
    {
      link: '/msrit',
      image: 'assets/images/case/ca3.png',
      title: 'MSRIT',
      description: "The establishment of the MacLab led to a significant increase in student engagement and productivity."
    },
    {
      link: '/jain',
      image: 'assets/images/case/ca4.png',
      title: 'Jain University',
      description: "The installation was completed within the scheduled timeframe, with all iMacs fully operational."
    },
    {
      link: '/sowparnika',
      image: 'assets/images/case/ca5.png',
      title: 'Sowparnika Homes',
      description: "The adoption of digital tools, including the use of iPads for immersive presentations, resulted in improved operational efficiency."
    }
  ];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
) { 
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
}
