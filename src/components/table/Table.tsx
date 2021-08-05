import React, {useEffect, useState} from 'react';
import './table.scss';
import {CountryInterface} from "../../interfaces/country-interface";
import {SearchBar} from "../index";
import {TableHeader} from "./components";
import TableRow from "./components/table-row/TableRow";

interface TablePropsInterface {
  headers: string[];
  data: CountryInterface[];
}

function Table({headers, data}: TablePropsInterface) {
  const [filteredData, setFilteredData] = useState<CountryInterface[]>(data)

  useEffect(() => {
    setData(data)
  }, [data])

  function filterDataByKeyword(keyword: string) {
    setFilteredData(data.filter((country: CountryInterface) => country.name.toLocaleLowerCase()
      .includes(keyword.toLocaleLowerCase())))
  }

  function setData(data: CountryInterface[]) {
    setFilteredData([...data])
  }

  return (
    <div className='table-container'>
      <SearchBar fetchData={filterDataByKeyword}/>
      <table className='table'>
        <TableHeader headers={headers}
                     setData={setData}
                     data={filteredData}/>
        <tbody>
        {filteredData.map((countryInfo: CountryInterface) =>
          <TableRow countryInfo={countryInfo}
                    key={'table-item-' + countryInfo.name}/>
        )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;


