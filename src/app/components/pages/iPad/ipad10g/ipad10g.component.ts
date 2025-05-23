import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ipad10g',
  standalone: true,
  imports: [],
  templateUrl: './ipad10g.component.html',
  styleUrl: './ipad10g.component.scss'
})
export class Ipad10gComponent {

  iPad10gUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iPad10gUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/embedded/iPad10g/index.html'
    );
  }
}
