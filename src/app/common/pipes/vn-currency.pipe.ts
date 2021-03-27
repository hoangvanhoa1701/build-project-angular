import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({ name: 'vnCurrency' })
export class VnCurrencyPipe extends CurrencyPipe implements PipeTransform {
  constructor() {
    super('vn', 'VND');
  }
  transform(
    value: any,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    digitsInfo?: string,
    locale?: string
  ): string | null {
    if (value) {
      // @ts-ignore
      return super
        .transform(value, currencyCode || 'VND', display || '', digitsInfo, locale || 'en-US')
        .replace(/,/g, '.');
    }
    return null;
  }
}
