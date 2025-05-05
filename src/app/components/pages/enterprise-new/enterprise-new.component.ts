import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-enterprise-new',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './enterprise-new.component.html',
  styleUrl: './enterprise-new.component.scss'
})
export class EnterpriseNewComponent {
  customOptions1 = {
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
}
