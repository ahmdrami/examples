import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
    selector: 'app-elements',
    templateUrl: './elements.component.html',
    styleUrls: ['./elements.component.sass'],
    animations: [
      trigger('buttonZoom', [
            state('inactive', style({
                backgroundColor: '#ccc',
                transform: 'scale(1)'
            })),

            state('active', style({
                backgroundColor: 'pink',
                transform: 'scale(1.2)'
            })),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
              ]),
              transition('* => void', [
                animate(100, style({transform: 'translateX(100%)'}))
              ]),
            transition('inactive <=> active', animate('300ms ease'))

      ])
    ]
})
export class ElementsComponent implements OnInit {
    state = 'inactive';
    constructor() {}

    ngOnInit() {}

    toggleState(): void {
        this.state = (this.state === 'inactive') ? 'active' : 'inactive';
    }
}
