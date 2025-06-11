
import { Component, OnInit } from '@angular/core';

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
export class HomepageComponent implements OnInit {
  
  statistics = [
    { value: 10, text: 'Years of Excellence' },
    { value: 480, text: 'Enterprise Customers', prefix: '+' },
    { value: 40, text: 'Partners', prefix: '+' },
    { value: 30000, text: 'Devices Deployed', prefix: '+' },
    // { value: 1000, text: 'Happy Customers', prefix: '+' },
    { value: 700, text: 'Projects', prefix: '+' }
  ];
  contactForm: FormGroup;
  message: string = '';
  displayedValues: number[] = [];
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

  ngOnInit() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
    this.initializeCounters();
  }

  initializeCounters() {
    this.statistics.forEach((stat, index) => {
      this.displayedValues[index] = 0;
      this.animateValue(index, 0, stat.value, 3000);
    });
  }

  animateValue(index: number, start: number, end: number, duration: number) {
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
