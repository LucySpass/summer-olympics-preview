import React from 'react';
import './table-header.scss';
import {TableLabel} from '../index';

interface TableHeaderPropsInterface {
  headers: string[];
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  requestSort: (header: string) => void
}

function TableHeader({headers, sortBy, sortOrder, requestSort}: TableHeaderPropsInterface) {
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
