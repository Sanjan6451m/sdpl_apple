import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSectionRef: ElementRef<HTMLElement>;

  statistics = [
    { value: 10, text: 'Years of Excellence' },
    { value: 500, text: 'Enterprise Customers', prefix: '+' },
    { value: 40, text: 'Partners', prefix: '+' },
    { value: 100000, text: 'Devices Deployed', prefix: '+' },
    // { value: 1000, text: 'Happy Customers', prefix: '+' },
    { value: 1000, text: 'Projects', prefix: '+' }
  ];
  contactForm: FormGroup;
  message: string = '';
  displayedValues: number[] = [0, 0, 0, 0, 0];
  private statsSectionInView = false;
  private statsObserver: IntersectionObserver | null = null;

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

newsEvents = [
  {
    title: 'Free MacBook Health Check at MNC',
    date: new Date('2025-04-15'),
    summary: 'Superior Digital conducted a free Apple MacBook diagnostic session at a leading corporation.',
  },
  {
    title: 'Team Collaboration Workshop',
    date: new Date('2025-04-20'),
    summary: 'Sales and Pre-Sales teams aligned to enhance delivery and collaboration.',
  },
  {
    title: 'Optimizing Apple Ecosystems',
    date: new Date('2025-04-25'),
    summary: 'Strategies shared to deliver seamless Apple device and MDM deployment.',
  },
];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
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

  ngOnInit() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
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

  ngOnDestroy(): void {
    this.statsObserver?.disconnect();
  }

  private resetStatsAndAnimate(): void {
    this.displayedValues = this.statistics.map(() => 0);
    this.cdr.detectChanges();
    this.statistics.forEach((stat, index) => {
      this.animateValue(index, 0, stat.value, 2000);
    });
  }

  private animateValue(index: number, start: number, end: number, duration: number): void {
    const range = end - start;
    const minTimer = 50;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = Math.max(stepTime, minTimer);
    const startTime = new Date().getTime();
    const endTime = startTime + duration;

    const run = () => {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(end - (remaining * range));
      this.displayedValues[index] = value;
      this.cdr.detectChanges();

      if (value < end) {
        setTimeout(run, timer);
      }
    };

    setTimeout(run, timer);
  }

  onSubmit() {
    if (this.contactForm.valid) {
        this.message = 'Sending message...';
        
        emailjs.send("service_kuiothp", "template_g8fkwgh", {
            to_email: "superiordigital4@gmail.com",
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
            this.router.navigate(['/thank-you']);
        }, (error) => {
            this.message = 'Error sending message. Please try again later.';
            console.error('FAILED...', error);
        });
    } else {
        this.message = 'Please fill in all required fields correctly.';
    }
}

}
