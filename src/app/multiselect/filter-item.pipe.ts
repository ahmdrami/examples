import { Pipe, PipeTransform } from '@angular/core';
import { DataModel } from './data.model';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {

  transform(options: DataModel[], query): DataModel[] {
    if (!query) {
        return options;
    }
    return options.filter(item => item.name.toLowerCase().indexOf(query) > -1);
  }

}
