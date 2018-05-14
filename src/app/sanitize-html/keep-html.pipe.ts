import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { escape } from 'lodash';

@Pipe({
  name: 'keepHtml'
})
export class KeepHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  transform(content: any): any {
    return escape(content);
  }

}
