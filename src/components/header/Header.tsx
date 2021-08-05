import React from 'react';
import './header.scss';
import {ReactComponent as OlympicsLogo} from "../../static/logos/olympics-simple-logo-color.svg";

function Header() {

  return (
    <div className='header'>
      <h1>
        2020 Summer Olympics Preview
      </h1>
      <a href='https://olympics.com/en/'
         rel="noreferrer"
         target='_blank'>
        <OlympicsLogo/>
      </a>
    </div>
  );
}

export default Header;
