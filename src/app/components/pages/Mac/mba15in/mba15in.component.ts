import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-mba15in',
  standalone: true,
  imports: [],
  templateUrl: './mba15in.component.html',
  styleUrl: './mba15in.component.scss'
})
export class MBA15inComponent {
  mbAirUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mbAirUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/MBA/mba_air.html'
    );
  }
}
