import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    template: `
    <span [attr.class]="size">
        Loading...
    </span>
  `,
    styles: []
})
export class SpinnerComponent implements OnInit {
    @Input() size: string;

    ngOnInit() {

        this.size = `spinner spinner-${this.size}`;
    }
}
