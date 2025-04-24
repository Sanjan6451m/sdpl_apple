import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presales-support',
  standalone: true,
  imports: [],
  templateUrl: './presales-support.component.html',
  styleUrl: './presales-support.component.scss'
})
export class PresalesSupportComponent implements OnInit {
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
