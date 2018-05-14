import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ],
  declarations: [ElementsComponent]
})
export class AnimationsModule { }
