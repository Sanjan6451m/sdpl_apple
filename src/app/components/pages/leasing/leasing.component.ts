import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leasing',
  standalone: true,
  imports: [],
  templateUrl: './leasing.component.html',
  styleUrl: './leasing.component.scss'
})
export class LeasingComponent implements OnInit {
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
