import React, {useEffect, useState} from 'react';
import './country.scss';
import {Link} from "react-router-dom";
import {CountriesData, CountryData} from "../../constants/countries-data";
import {CountryTable} from "./components";

function Country() {
  const [data, setData] = useState<CountryData | null>(null)
  useEffect(() => {
    setData(CountriesData)
  }, [])

  return (<>
      {data && <div className='country'>
        <div className='country__header'>
          <Link to={'/home'}>
            <i className="material-icons">
              arrow_back
            </i>
          </Link>
          <h1>{data.name}</h1>
          <img width={48}
               height={48}
               alt={`country-code-HK`}
               src={`https://www.countryflags.io/HK/flat/48.png`}/>
        </div>
        <div className='country__content'>
          <div className='country__content__sports'>
            <CountryTable headers={['Sports', 'Total participants']}
                          data={data.sports}/>
          </div>
          <div className='country__content__medals'>
            <CountryTable headers={['Medal type', 'Sports', 'Total medals']}
                          data={data.medals}/>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Country;

