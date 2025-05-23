import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iphone15pro',
  standalone: true,
  imports: [],
  templateUrl: './iphone15pro.component.html',
  styleUrl: './iphone15pro.component.scss'
})
export class Iphone15proComponent {
  iPhone15proUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPhone15proUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPhone15Pro/index.html'
    );
  }
}
