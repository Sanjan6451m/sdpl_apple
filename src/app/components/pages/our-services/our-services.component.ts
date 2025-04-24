import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-services',
  // standalone: true,
  // imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent implements OnInit {
  currentTab: string = 'tab1';

  // customOptions: OwlOptions = {
  //   loop: true,
  //   margin: 30,
  //   nav: true,
  //   dots: true,
  //   autoplay: true,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     576: {
  //       items: 2
  //     },
  //     768: {
  //       items: 2
  //     },
  //     992: {
  //       items: 3
  //     }
  //   }
  // };

  constructor() { }

  ngOnInit(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }

  // Tabs
  switchTab(event: MouseEvent, tab: string) {
      event.preventDefault();
      this.currentTab = tab;
  }
}
