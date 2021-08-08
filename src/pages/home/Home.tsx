import React, {useEffect, useState} from 'react';
import './home.scss';
import {FullCountryList} from "../../constants/full-country-list";
import {CountryCodes} from "../../constants/country-codes";
import {CountryInterface} from "../../interfaces/country-interface";
import {Participants} from "../../constants/participants";
import {CountriesTable} from "./components";

function Home() {
  const [data, setData] = useState<CountryInterface[]>([])

  useEffect(() => {
    setData(FullCountryList.map((country, index) => {
      const tempCountryCode = CountryCodes.find((code: any) => country === code.Name.split(',')[0])
      console.log()
      return {
        name: country,
        code: typeof tempCountryCode !== 'undefined' ? tempCountryCode!.Code : null,
        participants: Participants[index]
      }
    }))
  }, [])

  return (
    <CountriesTable headers={['Country', 'Flag', 'Number of participants']}
                    data={[...data]}/>
  );
}

export default Home;
