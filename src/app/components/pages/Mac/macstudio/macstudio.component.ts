import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-macstudio',
  standalone: true,
  imports: [],
  templateUrl: './macstudio.component.html',
  styleUrl: './macstudio.component.scss'
})
export class MacstudioComponent {

  mbstudioUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mbstudioUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/MBS/mbs.html'
    );
  }
}
