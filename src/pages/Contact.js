

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css'; 
import { links } from '../portfolio';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-content">
              <h2>Contact Us</h2>
              <div className='container-contact'>
              <div className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <p>Email: <a
                href="mailto:head@alphaingen.com"
                target="_blank"
             style={{color:"white"}} >
              head@alphaingen.com
              </a></p>
              </div>
              <div className="contact-info">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <p  >Phone: <a
                href="tel:+919445352946"
                target="_blank"
                style={{color:"white"}} >
              +91 9445352946
              </a></p>
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
        

    </footer>
  );
};

export default Footer;

