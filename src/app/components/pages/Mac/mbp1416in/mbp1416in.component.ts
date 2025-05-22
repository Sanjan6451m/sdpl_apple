import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mbp1416in',
  standalone: true,
  imports: [],
  templateUrl: './mbp1416in.component.html',
  styleUrl: './mbp1416in.component.scss'
})
export class MBP1416inComponent {
  mbProUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mbProUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/MBP/mbp_pro.html'
    );
  }
}
