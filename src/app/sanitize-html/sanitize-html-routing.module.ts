import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanitizeHtmlComponent } from './sanitize-html.component';
import { KeepHtmlPipe } from './keep-html.pipe';

const routes: Routes = [
  {path: '', component: SanitizeHtmlComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ SanitizeHtmlComponent, KeepHtmlPipe],
  exports: [RouterModule]
})
export class SanitizeHtmlRoutingModule { }
