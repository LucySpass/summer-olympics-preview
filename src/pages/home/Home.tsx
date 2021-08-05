import React, {useEffect, useState} from 'react';
import './home.scss';
import {Footer, Header, Table} from "../../components";
import {FullCountryList} from "../../constants/full-country-list";
import {CountryCodes} from "../../constants/country-codes";
import {CountryInterface} from "../../interfaces/country-interface";
import {Participants} from "../../constants/participants";

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
    <div className='home'>
      <Header/>
      <div className='home__content'>
        <Table headers={['Country', 'Flag', 'Number of participants']}
               data={[...data]}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
