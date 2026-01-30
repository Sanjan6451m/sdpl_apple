import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iphone17',
  standalone: true,
  imports: [],
  templateUrl: './iphone17.component.html',
  styleUrl: './iphone17.component.scss'
})
export class Iphone17Component {
iPhone17Url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPhone17Url = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPhone17/index.html'
    );
  }
}
