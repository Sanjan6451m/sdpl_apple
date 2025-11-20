import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageOptimizationService {

  constructor() { }

  /**
   * Get optimized image URL with WebP support
   * @param originalSrc - Original image source
   * @param width - Desired width (optional)
   * @param quality - Quality percentage (optional, default 80)
   * @returns Optimized image URL
   */
  getOptimizedImageUrl(originalSrc: string, width?: number, quality: number = 80): string {
    if (!originalSrc) return '';
    
    // Check if it's already a WebP image
    if (originalSrc.includes('.webp')) {
      return originalSrc;
    }
    
    // For local assets, we'll use the original path
    // In production, you might want to use a CDN or image optimization service
    if (originalSrc.startsWith('assets/')) {
      // Try WebP version first
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return webpSrc;
    }
    
    return originalSrc;
  }

  /**
   * Preload critical images
   * @param imageUrls - Array of image URLs to preload
   */
  preloadImages(imageUrls: string[]): void {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  /**
   * Check if WebP is supported
   * @returns boolean indicating WebP support
   */
  isWebPSupported(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  /**
   * Get responsive image sources for different screen sizes
   * @param baseSrc - Base image source
   * @param sizes - Array of sizes [mobile, tablet, desktop]
   * @returns Object with srcSet and sizes
   */
  getResponsiveImageSources(baseSrc: string, sizes: number[] = [480, 768, 1200]): { srcSet: string, sizes: string } {
    const srcSet = sizes.map(size => {
      const webpSrc = this.getOptimizedImageUrl(baseSrc);
      return `${webpSrc}?w=${size} ${size}w`;
    }).join(', ');

    const sizesAttr = '(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px';

    return { srcSet, sizes: sizesAttr };
  }
}
