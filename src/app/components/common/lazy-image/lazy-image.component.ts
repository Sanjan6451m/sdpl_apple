import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img 
      [src]="optimizedSrc" 
      [alt]="alt"
      [loading]="'lazy'"
      [width]="width"
      [height]="height"
      (error)="onError()"
      class="lazy-image"
    />
  `,
  styles: [`
    .lazy-image {
      transition: opacity 0.3s ease;
    }
    .lazy-image[loading="lazy"] {
      opacity: 0;
    }
    .lazy-image:not([loading="lazy"]) {
      opacity: 1;
    }
  `]
})
export class LazyImageComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width?: number;
  @Input() height?: number;
  @Input() fallback: string = '';

  optimizedSrc: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.optimizeImage();
  }

  private optimizeImage() {
    if (!this.src) return;
    
    // Check WebP support
    const supportsWebP = this.checkWebPSupport();
    
    if (supportsWebP) {
      // Try WebP version
      this.optimizedSrc = this.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    } else {
      this.optimizedSrc = this.src;
    }
  }

  onError() {
    if (this.fallback) {
      this.optimizedSrc = this.fallback;
    } else {
      // Fallback to original if WebP fails
      this.optimizedSrc = this.src;
    }
  }

  private checkWebPSupport(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
}
