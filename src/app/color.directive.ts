import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === 'ArrowUp') {
      this.el.nativeElement.style.color = 'red';
    }
    if (event.key === 'ArrowRight') {
      this.el.nativeElement.style.color = 'green';
    }

    if (event.key === 'ArrowDown') {
      this.el.nativeElement.style.color = 'blue';
    }
    if (event.key === 'ArrowLeft') {
      this.el.nativeElement.style.color = 'purple';
    }
  }
}
