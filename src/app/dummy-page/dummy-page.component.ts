import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dummy-page',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.scss']
})
export class DummyPageComponent implements OnInit, OnDestroy {
  bannerImages = [
    {
      src: 'assets/images/enterprise.png',
      text: 'Buy Mac – Refresh after 3 years',
      subtext: 'Enjoy hassle‑free upgrades with our 3‑year refresh guarantee.',
      btnText: 'Start Your Upgrade'
    },
    {
      src: 'assets/images/enterprise.png',
      text: 'Experience Mac Firsthand – Get a POC Today',
      subtext: 'Request a free POC unit and evaluate Mac performance in your environment.',
      btnText: 'Request Your Free POC'
    }
  ];
  currentIndex = 0;
  private intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoLoop();
  }

  ngOnDestroy() {
    this.clearAutoLoop();
  }

  startAutoLoop() {
    this.clearAutoLoop();
    this.intervalId = setInterval(() => {
      this.showNext();
    }, 5000);
  }

  clearAutoLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  showPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.bannerImages.length) % this.bannerImages.length;
    this.startAutoLoop();
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length;
    this.startAutoLoop();
  }

  goToImage(idx: number) {
    this.currentIndex = idx;
    this.startAutoLoop();
  }

  get imageCount() {
    return this.bannerImages.length;
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
