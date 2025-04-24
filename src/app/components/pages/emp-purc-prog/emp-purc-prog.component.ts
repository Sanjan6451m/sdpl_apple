import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-purc-prog',
  standalone: true,
  imports: [],
  templateUrl: './emp-purc-prog.component.html',
  styleUrl: './emp-purc-prog.component.scss'
})
export class EmpPurcProgComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe both work steps and benefit cards
    document.querySelectorAll('.animate-step, .animate-card').forEach(element => {
      observer.observe(element);
    });
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
