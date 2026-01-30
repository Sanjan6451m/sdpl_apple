import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-i-phone-air',
  standalone: true,
  imports: [],
  templateUrl: './i-phone-air.component.html',
  styleUrl: './i-phone-air.component.scss'
})
export class IPhoneAirComponent {
iPhoneAirUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPhoneAirUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPhoneAir/index.html'
    );
  }
}
