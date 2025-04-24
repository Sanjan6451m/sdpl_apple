import { Component } from '@angular/core';

@Component({
  selector: 'app-apple-watch',
  standalone: true,
  imports: [],
  templateUrl: './apple-watch.component.html',
  styleUrl: './apple-watch.component.scss'
})
export class AppleWatchComponent {
  selectedImage = 0;

  selectImage(index: number): void {
    this.selectedImage = index;
  }
}
