import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../css/index.css';

const Footer = () => {
  const iconStyle = {
    fontSize: '24px',
    transition: 'color 0.3s ease',
  };


  return (
    <footer>
      <div className='Footer-body container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
          <h4>logo</h4>

          <img alt='logo'/>

            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="icon" style={iconStyle} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon mx-3" style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" style={iconStyle} />
            </a>

            <p className="mt-2">All Rights Reserved @ </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
