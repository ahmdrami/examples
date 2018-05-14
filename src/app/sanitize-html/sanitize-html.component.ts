import { Component, OnInit } from '@angular/core';
import { KeepHtmlPipe } from './keep-html.pipe';

@Component({
  selector: 'app-sanitize-html',
  templateUrl: './sanitize-html.component.html'
})
export class SanitizeHtmlComponent implements OnInit {

  code = '<div>Hello</div>';
  constructor() { }

  ngOnInit() {
  }

}
