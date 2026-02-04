import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

const CLASS_REVEAL = 'scroll-reveal';
const CLASS_IN_VIEW = 'scroll-in-view';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, CLASS_REVEAL);
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(this.el.nativeElement, CLASS_IN_VIEW);
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, CLASS_IN_VIEW);
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
