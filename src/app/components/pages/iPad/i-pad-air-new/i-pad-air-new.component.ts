import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-i-pad-air-new',
  standalone: true,
  imports: [],
  templateUrl: './i-pad-air-new.component.html',
  styleUrl: './i-pad-air-new.component.scss'
})
export class IPadAirNewComponent {

  iPadAirUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPadAirUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPadAir/index.html'
    );
  }

}
