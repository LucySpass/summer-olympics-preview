import React, {useEffect, useState} from 'react';
import './table.scss';
import {CountryInterface} from "../../../../interfaces/country-interface";
import {SearchBar} from "../../../../components";
import {TableHeader} from "./components";
import TableRow from "./components/table-row/TableRow";
import {SortByHeader} from "./utils/sort-by-header";
import {useHistory} from "react-router-dom";

interface TablePropsInterface {
  headers: string[];
  data: CountryInterface[];
}

function Table({headers, data}: TablePropsInterface) {
  const [filteredData, setFilteredData] = useState<CountryInterface[]>(data)
  const [sortBy, setSortBy] = useState<string>('Country')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const history = useHistory();

  useEffect(() => {
    setData(data)
  }, [data])

  function setData(data: CountryInterface[]) {
    setFilteredData([...data])
  }

  function filterDataByKeyword(keyword: string) {
    setData(
      SortByHeader(sortBy, sortOrder,
        data.filter((country: CountryInterface) => country.name.toLocaleLowerCase()
          .includes(keyword.toLocaleLowerCase()))
      )
    )
  }

  function requestSort(header: string) {
    let newOrder: 'asc' | 'desc' = 'asc';

    if (header === sortBy) {
      newOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    }
    setSortOrder(newOrder);
    setSortBy(header);
    setData(SortByHeader(header, newOrder, data));
  }

  function onRowClick(countryInfo: CountryInterface) {
    history.push('/country/' + countryInfo.code);
  }

  return (
    <>
      <SearchBar fetchData={filterDataByKeyword}/>
      <table className='table'>
        <TableHeader headers={headers}
                     sortBy={sortBy}
                     sortOrder={sortOrder}
                     requestSort={requestSort}/>
        <tbody>
        {filteredData.map((countryInfo: CountryInterface) =>
          <TableRow countryInfo={countryInfo}
                    onRowClick={onRowClick}
                    key={'table-item-' + countryInfo.name}/>
        )}
        </tbody>
      </table>
    </>
  );
}

export default Table;


