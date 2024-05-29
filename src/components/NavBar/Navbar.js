import React, { useState } from 'react';
import { navbar_name } from '../../portfolio';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import './Agustina.woff'


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setClick(false);
  }

  return (
    <div>
      <nav className="navbarX sticky">
        <a href="" className="navbar-logoX" onClick={closeMobileMenu}>
        <img className='nav-logo' src={navbar_name} /> 
        </a>
        <div className="menu-iconX" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menuX activeX" : "nav-menuX"}>
          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#main")}
            >
              Home
            </Link>
          </li>
       
        

   
          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#whatido")}
            >
              Vision
            </Link>
          </li>

          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#healthcare")}
            >
             HealthCare
            </Link>
          </li>

          <li className="nav-itemX">
            <Link
              to="/"
              className="nav-linksX"
              onClick={() => closeMobileMenu("#infotech")}
            >
             InfoTech
            </Link>
          </li>

          <li className="nav-itemX">
          <Link
            to="/"
            className="nav-linksX"
            onClick={() => closeMobileMenu("#aiar")}
          >
           AI&AR
          </Link>
        </li>

        <li className="nav-itemX">
        <Link
          to="/"
          className="nav-linksX"
          onClick={() => closeMobileMenu("#aboutme")}
        >
          About
        </Link>
      </li>

      <li className="nav-itemX">
      <Link
        to="/contact"
        className="nav-linksX"
        onClick={() => closeMobileMenu("#Contact")}
      >
        Contact
      </Link>
    </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
