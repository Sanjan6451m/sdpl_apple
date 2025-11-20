import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnInit {
  @Input() appLazyImage: string = '';
  @Input() fallback: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.loadImage();
  }

  private loadImage() {
    const img = this.el.nativeElement;
    
    // Set loading attribute for native lazy loading
    this.renderer.setAttribute(img, 'loading', 'lazy');
    
    // Check if browser supports WebP
    const supportsWebP = this.checkWebPSupport();
    
    if (supportsWebP && this.appLazyImage) {
      // Try WebP first
      const webpSrc = this.appLazyImage.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      this.renderer.setAttribute(img, 'src', webpSrc);
      
      // Fallback to original if WebP fails
      img.onerror = () => {
        this.renderer.setAttribute(img, 'src', this.appLazyImage);
      };
    } else if (this.appLazyImage) {
      this.renderer.setAttribute(img, 'src', this.appLazyImage);
    }
    
    // Set fallback if provided
    if (this.fallback) {
      img.onerror = () => {
        this.renderer.setAttribute(img, 'src', this.fallback);
      };
    }
  }

  private checkWebPSupport(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
}
