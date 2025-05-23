import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-i-pad-pro-new',
  standalone: true,
  imports: [],
  templateUrl: './i-pad-pro-new.component.html',
  styleUrl: './i-pad-pro-new.component.scss'
})
export class IPadProNewComponent {

  iPadProUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPadProUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPadPro/index.html'
    );
  }
}
