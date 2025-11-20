import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optimizeImage',
  standalone: true
})
export class ImageOptimizationPipe implements PipeTransform {

  transform(value: string, width?: number, quality: number = 80): string {
    if (!value) return '';
    
    // Check WebP support
    const supportsWebP = this.checkWebPSupport();
    
    if (supportsWebP) {
      // Try WebP version
      return value.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    
    return value;
  }

  private checkWebPSupport(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
}
