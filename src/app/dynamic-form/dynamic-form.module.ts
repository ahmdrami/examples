import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
