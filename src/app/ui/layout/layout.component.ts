import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
    <div class="main-container">
        <app-header></app-header>
        <app-main></app-main>
    </div>
  `,
    styles: []
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
