import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import your Footer.css file
import navbar_name from "../Assets/AlphaingenLogo.png";

const Footer = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setClick(false);
  };

  return (
    <div className="footer-container">
      <div className="container">
        <div className="row align-items-center">
       
        <img src={navbar_name} alt="Logo" className='text-center' style={{height:"120px", maxWidth:"55%", margin:"0px auto"}}/>
      
        <br />
      <div className="row mt-4">
      <br />
      <div className="col-lg-6 md-6">
      <div className="footer-links">
        <h2>Explore</h2>
        <ul className="list-unstyled">
          <li>
            <Link to="/" onClick={() => closeMobileMenu("#main")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => closeMobileMenu("#whatido")}>
              Vision
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => closeMobileMenu("#healthcare")}>
              HealthCare
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => closeMobileMenu("#infotech")}>
              InfoTech
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => closeMobileMenu("#aiar")}>
              AI&AR
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => closeMobileMenu("#aboutme")}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className=" col-lg-6">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul className="list-unstyled">
          <li>
            <a href="tel:+91 9445352946" target="_blank" rel="noopener noreferrer">
              +91 9445352946
            </a>
          </li>
          <li>
            <a href="mailto:head@alphaingen.com" target="_blank" rel="noopener noreferrer">
              head@alphaingen.com
            </a>
          </li>
        </ul>
      </div>
    </div>
      </div>
        </div>
      </div>
      <p className="text-center mt-4" style={{color:"maroon"}}>©2024. | Alphaingen | All rights reserved.</p>
    </div>
  );
};

export default Footer;
