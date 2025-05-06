import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superior-enterprise',
  standalone: true,
  imports: [],
  templateUrl: './superior-enterprise.component.html',
  styleUrl: './superior-enterprise.component.scss'
})
export class SuperiorEnterpriseComponent implements OnInit {
  constructor(private router: Router) {}

  navigateToAppleEnterprise() {
    this.router.navigate(['/enterprise-new']);
  }
  ngOnInit(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }
}
