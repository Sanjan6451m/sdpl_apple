import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  
  statistics = [
    { value: 13, text: 'Years of Excellence' },
    { value: 1000, text: 'Enterprise Customers', prefix: '+' },
    { value: 60, text: 'Partners', prefix: '+' },
    { value: 300000, text: 'Devices Deployed', prefix: '+' },
    // { value: 1000, text: 'Happy Customers', prefix: '+' },
    { value: 700, text: 'Projects', prefix: '+' }
  ];

  displayedValues: number[] = [];

  ngOnInit() {
    this.initializeCounters();
  }

  initializeCounters() {
    this.statistics.forEach((stat, index) => {
      this.displayedValues[index] = 0;
      this.animateValue(index, 0, stat.value, 3000);
    });
  }

  animateValue(index: number, start: number, end: number, duration: number) {
    const range = end - start;
    const minTimer = 50;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = Math.max(stepTime, minTimer);
    const startTime = new Date().getTime();
    const endTime = startTime + duration;

    const run = () => {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(end - (remaining * range));
      this.displayedValues[index] = value;

      if (value < end) {
        setTimeout(run, timer);
      }
    };

    setTimeout(run, timer);
  }

}
