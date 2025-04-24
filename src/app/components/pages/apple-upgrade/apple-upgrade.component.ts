import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-upgrade',
  standalone: true,
  imports: [],
  templateUrl: './apple-upgrade.component.html',
  styleUrl: './apple-upgrade.component.scss'
})
export class AppleUpgradeComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
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
  
  }
  


