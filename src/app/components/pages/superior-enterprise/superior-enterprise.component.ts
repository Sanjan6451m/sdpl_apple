import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superior-enterprise',
  standalone: true,
  imports: [],
  templateUrl: './superior-enterprise.component.html',
  styleUrl: './superior-enterprise.component.scss'
})
export class SuperiorEnterpriseComponent {
  constructor(private router: Router) {}

  navigateToAppleEnterprise() {
    this.router.navigate(['/enterprise-new']);
  }
}
