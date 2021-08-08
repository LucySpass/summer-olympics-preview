import React from 'react';
import './table-row.scss';
import {ReactComponent as BlankFlag} from "../../../../../../static/logos/blank-flag.svg";
import {CountryInterface} from "../../../../../../interfaces/country-interface";

interface TableRowPropsInterface {
  countryInfo: CountryInterface;
  onRowClick: (countryInfo: CountryInterface) => void;
}

function TableRow({countryInfo, onRowClick}: TableRowPropsInterface) {
  return (
    <tr className='table-row'
        key={'table-item-' + countryInfo.name}
        onClick={() => onRowClick(countryInfo)}>
      <td>
        {countryInfo.name}
      </td>
      <td>
        {countryInfo.code ?
          <img width={32}
               height={32}
               alt={`country-code-${countryInfo.name}`}
               src={`https://www.countryflags.io/${countryInfo.code}/flat/32.png`}/> :
          <BlankFlag width={32}
                     height={32}/>}
      </td>
      <td>
        {countryInfo.participants}
      </td>
    </tr>
  );
}

export default TableRow;
