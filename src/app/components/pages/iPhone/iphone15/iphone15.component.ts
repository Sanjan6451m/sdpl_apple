import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iphone15',
  standalone: true,
  imports: [],
  templateUrl: './iphone15.component.html',
  styleUrl: './iphone15.component.scss'
})
export class Iphone15Component {
  iPhone15Url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPhone15Url = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPhone15/index.html'
    );
  }
}
