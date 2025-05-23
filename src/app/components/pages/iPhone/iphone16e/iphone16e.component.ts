import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iphone16e',
  standalone: true,
  imports: [],
  templateUrl: './iphone16e.component.html',
  styleUrl: './iphone16e.component.scss'
})
export class Iphone16eComponent {
  iPhone16eUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPhone16eUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPhone16e/index.html'
    );
  }
}
