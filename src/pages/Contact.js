// import React from 'react';
// import { links } from '../portfolio';
// import { SocialIcon } from 'react-social-icons';
// import { Fade } from "react-awesome-reveal";
// import {AiFillPhone } from "react-icons/ai";

// import "./contact.css"

// const Contact = () => {
//     return <div className="contact" id="contact">
//         <h1 className="contact-title">
//             <Fade bottom cascade duration={2500}>Contact</Fade>
//         </h1>
// <div className='address'>

// </div>
// <div className="icon">
// {links.map((link) => <div className="icons"> <SocialIcon url={link} target="_blank"
// /> 
// </div>)}

// <a
//   href="tel:+91 8122955225"
//   target="_blank"
//   rel="noreferrer"
//   aria-label="phone"
//   className="icon"
// >
//   <AiFillPhone className='phone'  />
// </a>
// </div>
//         <center>
//             <hr className="style-f" />
//         </center>
//   </div >
// }

// export default Contact








import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css'; // Import your CSS file for custom styling
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
                href="mailto:miracle@infosoft.com"
                target="_blank"
              >
              miracle@infosoft.com
              </a></p>
              </div>
              <div className="contact-info">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <p>Phone: <a
                href="tel:+918122955225"
                target="_blank"
              >
              +918122955225
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

