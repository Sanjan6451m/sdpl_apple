import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mbp-m5',
  standalone: true,
  imports: [],
  templateUrl: './mbp-m5.component.html',
  styleUrl: './mbp-m5.component.scss'
})
export class MbpM5Component {
mbpProM5Url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mbpProM5Url = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/MBPM5/index.html'
    );
  }
}
