/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 00:26:33
 * @modify date 2021-10-04 00:26:33
 * @desc [description]
 */
import {isEmpty} from 'lodash';

export function currencyFormat(value: number, currencyUnit: any) {
  if (value !== undefined) {
    return (
      value?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
      `${currencyUnit}`
    );
  } else {
    return `0 ${currencyUnit}`;
  }
}

export function numberFormat(string: any) {
  return isEmpty(string) ? 0 : Number(string?.replace(/\./g, ''));
}
