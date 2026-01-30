import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-i-pad-pro-m5',
  standalone: true,
  imports: [],
  templateUrl: './i-pad-pro-m5.component.html',
  styleUrl: './i-pad-pro-m5.component.scss'
})
export class IPadProM5Component {
  iPadProM5Url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPadProM5Url = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPadProM5/index.html'
    );
  }
}
