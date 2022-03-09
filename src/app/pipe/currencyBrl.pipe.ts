import { Pipe, PipeTransform } from '@angular/core';

declare const window:any;

@Pipe({
  name: 'currencyBrl'
})
export class CurrencyBrlPipe implements PipeTransform {


  transform(str: any, args: any): any {
    if(str === undefined) {
        return;
    }

    // Bug Fix no toFixed
    str = parseFloat(str)

    let currency_format = '';

    if(args === true || args === 'true') {
      currency_format = window.currency ? window.currency + ' ' : 'R$ '
    }

    return currency_format + str.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
  }

}
