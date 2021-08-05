import {CountryInterface} from '../../../interfaces/country-interface';
import {sortNumbers, sortString} from './sort-functions';

export function SortByHeader(header: string, sortOrder: 'asc' | 'desc', data: CountryInterface[]) {
  let compareFn: any;
  switch (header) {
    case 'Country':
      compareFn = (i: CountryInterface, j: CountryInterface) => {
        return sortString(i.name!, j.name!, sortOrder)
      };
      break;
    case 'Flag':
      compareFn = (i: CountryInterface, j: CountryInterface) => {
        return sortString(i.name!, j.name!, sortOrder)
      };
      break;
    case 'Number of participants':
      compareFn = (i: CountryInterface, j: CountryInterface) => {
        return sortNumbers(i.participants!, j.participants!, sortOrder)
      };
      break;
    default:
      return data
  }
  return data.sort(compareFn);
}
