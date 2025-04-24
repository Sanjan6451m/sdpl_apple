import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-deployment',
  standalone: true,
  imports: [],
  templateUrl: './apple-deployment.component.html',
  styleUrl: './apple-deployment.component.scss'
})
export class AppleDeploymentComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
