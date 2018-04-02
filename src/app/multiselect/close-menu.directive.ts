import { Directive, ElementRef, Renderer2, HostListener, HostBinding, ViewChild, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appCloseMenu]'
})
export class CloseMenuDirective {
    @Output() hideOptions = new EventEmitter<boolean>();
    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) { }

    @HostListener('mouseleave') onMouseLeave() {
        const par = this.el;
        this.hideOptions.emit();
    }

}
