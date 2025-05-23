import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iphone16pro',
  standalone: true,
  imports: [],
  templateUrl: './iphone16pro.component.html',
  styleUrl: './iphone16pro.component.scss'
})
export class Iphone16pro1Component {
  iPhone16proUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPhone16proUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPhone16Pro/index.html'
    );
  }
}
