import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdDirective]'
})
export class AdDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
