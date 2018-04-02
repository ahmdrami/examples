import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExampleComponent } from './form-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormExampleComponent, DynamicFormComponent],
  exports: [FormExampleComponent, DynamicFormComponent]
})
export class FormExampleModule { }
