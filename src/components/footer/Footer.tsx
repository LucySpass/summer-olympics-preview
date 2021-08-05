import React from 'react';
import './footer.scss';

function Footer() {

  return (
    <div className='footer'>
      Made by Ivana Begovic
      <a href="mailto:ivana.begovic@yahoo.com"
         rel="noreferrer"
         target='_blank'>
        <i className="material-icons">
          mail
        </i>
      </a>
      <a href='https://www.linkedin.com/in/ivana-begovic/'
         rel="noreferrer"
         target='_blank'>
        <i className="material-icons">
          person
        </i>
      </a>
    </div>
  );
}

export default Footer;

