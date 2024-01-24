import React from 'react';
import { links } from '../portfolio';
import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import {AiFillPhone } from "react-icons/ai";

import "./contact.css"

const Contact = () => {
    return <div className="contact" id="contact">
        <h1 className="contact-title">
            <Fade bottom cascade duration={2500}>Address - Contact</Fade>
        </h1>
<div className='address'>
<h4>Office Address</h4>
<h5>Miracle Infosoft,
  Periyar Street,
  M.G.Nagar,
  Tharamani,
  Chennai-113
</h5>
</div>
        <div className="icon">
            {links.map((link) => <div className="icons"> <SocialIcon url={link} target="_blank"
 /> 
 </div>)}

 <a
              href="tel:+91 8122955225"
              target="_blank"
              rel="noreferrer"
              aria-label="phone"
              className="icon"
            >
              <AiFillPhone className='phone'  />
            </a>
        </div>
        <center>
            <hr className="style-f" />
        </center>
  </div >
}

export default Contact
