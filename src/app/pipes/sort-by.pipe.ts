import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Array<any>, campo: string): Array<any> {
    if (!value) return [];

    return _.sortBy(value, function(lista){ return lista[campo]});
  }

}
