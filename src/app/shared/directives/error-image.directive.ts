import { Directive, ElementRef, HostListener } from '@angular/core';

import { IMAGE_DEFAULT } from '../constants/images';

@Directive({
  selector: '[errorImage]'
})
export class ErrorImageDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  loadImageDefault() {
    const element = this.elementRef.nativeElement;
    element.src = IMAGE_DEFAULT;
  }

}
