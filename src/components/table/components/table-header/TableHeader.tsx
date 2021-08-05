import React, {useState} from 'react';
import './table-header.scss';
import {CountryInterface} from '../../../../interfaces/country-interface';
import {SortByHeader} from '../../utils/sort-by-header';
import {TableLabel} from '../index';

interface TableHeaderPropsInterface {
  headers: string[];
  setData: (data: CountryInterface[]) => void;
  data: CountryInterface[];
}

function TableHeader({headers, setData, data}: TableHeaderPropsInterface) {
  const [sortBy, setSortBy] = useState<string>('Country')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  function requestSort(header: string) {
    let newOrder: 'asc' | 'desc' = 'asc';

    if (header === sortBy) {
      newOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    }
    setSortOrder(newOrder);
    setSortBy(header);
    setData(SortByHeader(header, newOrder, data));
  }

  return (
    <thead>
    <tr>
      {headers.map((header) =>
        <td key={'table-header-' + header}>
          <TableLabel active={sortBy === header}
                      direction={sortOrder}
                      onClick={() => requestSort(header)}>
            {header}
          </TableLabel>
        </td>
      )}
    </tr>
    </thead>

  );
}

export default TableHeader;
