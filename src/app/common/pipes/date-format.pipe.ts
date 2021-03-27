import { Pipe, PipeTransform } from '@angular/core';
import { format as formatFn } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(date: Date | string, format: string = 'dd-MM-yyyy'): string {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return date ? formatFn(date, format) : '';
  }
}
