import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-training',
  standalone: true,
  imports: [],
  templateUrl: './apple-training.component.html',
  styleUrl: './apple-training.component.scss'
})
export class AppleTrainingComponent implements OnInit {
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
