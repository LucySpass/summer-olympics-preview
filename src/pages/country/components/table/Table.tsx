import React from 'react';
import './table.scss';

interface TablePropsInterface {
  headers: string[];
  data: any[];
}

function Table({headers, data}: TablePropsInterface) {
  return (
    <table className='country-table'>
      <thead>
      <tr>
        {headers.map((header) =>
          <td key={'table-header-' + header}>
            {header}
          </td>
        )}
      </tr>
      </thead>
      <tbody>
      {data.map((rowData: any) =>
        <tr key={'table-item-' + rowData.name}>
          {Object.values(rowData).map((data) =>
            <td>
              {Array.isArray(data) ?
                <>
                  {data.map((item) =>
                    <>
                      {item}
                      <br/>
                    </>
                  )}
                </>
                : <>
                  {data as string}
                </>
              }
            </td>
          )}
        </tr>
      )}
      </tbody>
    </table>
  );
}

export default Table;


