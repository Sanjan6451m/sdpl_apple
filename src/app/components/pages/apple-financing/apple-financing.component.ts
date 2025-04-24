import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apple-financing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apple-financing.component.html',
  styleUrls: ['./apple-financing.component.scss']
})
export class AppleFinancingComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
