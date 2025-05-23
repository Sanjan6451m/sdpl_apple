import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iphone16',
  standalone: true,
  imports: [],
  templateUrl: './iphone16.component.html',
  styleUrl: './iphone16.component.scss'
})
export class Iphone16Component {
  iPhone16Url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPhone16Url = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPhone16/index.html'
    );
  }
}
