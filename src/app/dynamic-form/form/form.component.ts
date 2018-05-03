import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class DynamicFormComponent implements OnInit {

    dataObj = Person;
    objectProps;
    form: FormGroup;
    constructor() { }

    ngOnInit() {
        this.objectProps = Object.keys(this.dataObj)
            .map(prop => {
                return Object.assign({}, { key: prop}, this.dataObj[prop] );
        });
        const formGroup = {};
        for (let prop of Object.keys(this.dataObj)) {
            formGroup[prop] = new FormControl(this.dataObj[prop].value || '', this.mapValidators(this.dataObj[prop].validation));
        }

        this.form = new FormGroup(formGroup);
    }

    private mapValidators(validators) {
        const formValidators = [];

        if (validators) {
          for (const validation of Object.keys(validators)) {
            if (validation === 'required') {
              formValidators.push(Validators.required);
            } else if (validation === 'min') {
              formValidators.push(Validators.min(validators[validation]));
            }
          }
        }

        return formValidators;
      }
}
