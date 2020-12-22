import { Directive, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDialogOverlay]',
})
export class DialogOverlayDirective implements AfterViewInit {
  dialog: HTMLElement;
  listener: () => void;
  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.getDialogElement();
    this.listener = this.renderer.listen(this.dialog, 'click', (e: any) => {
      if (
        e.target['className'].includes('dialog-overlay') ||
        e.target['className'].includes('button-negative')
      ) {
        this.listener();
        this.renderer.removeChild(Document, this.dialog);
      }
    });
  }

  getDialogElement(): void {
    this.dialog = this.el.nativeElement['parentNode'];
  }
}
