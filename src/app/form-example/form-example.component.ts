import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { person } from './person';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.sass']
})
export class FormExampleComponent implements OnInit {
    person;
    constructor() {
    }

    ngOnInit() {
        this.person = person;
    }

}
