import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  // Counter properties
  serviceLocations: number = 0;
  happyCustomers: number = 0;
  salesSupport: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCountUp('serviceLocations', 30);
    this.startCountUp('happyCustomers', 1000);
    this.startCountUp('salesSupport', 150);
  }

  /**
   * Starts a count-up animation for the specified property
   * @param property - The property to animate
   * @param target - The target value to count up to
   */
  private startCountUp(property: 'serviceLocations' | 'happyCustomers' | 'salesSupport', target: number): void {
    let count = 0;
    const duration = 3000; // Animation duration in milliseconds
    const intervalTime = duration / target;

    const interval = setInterval(() => {
      if (count < target) {
        count++;
        (this[property] as number) = count;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
  }
}