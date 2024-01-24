import React from "react";
import { aboutme } from "../portfolio";
import Fade from "react-reveal/Fade";
import "./Aboutme.css";


function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <h1 className="title">
        <Fade bottom cascade>
          About Us
        </Fade>
      </h1>
      <div className="fluid-container">
        <div className="row">
          <Fade left cascade duration={1500}>
            <div className="col-lg-5 col-md-5 image">
              <img
                className="aboutme-img"
                height="300"
                width="400"
                src='https://i.pinimg.com/originals/12/e8/a6/12e8a6a547e317524121f7a5d6084036.gif'alt="profile pic"
              />
            </div>
          </Fade>
          <Fade bottom cascade duration={1500}>
            <div className="col-lg-7 col-md-7 text">
             
              <ul>
              <li>{aboutme.p1}</li>
              <li>{aboutme.p2}</li>
              <li>{aboutme.p3}</li>
              <li>{aboutme.p4}</li>
            
              </ul>
           
              <p>{aboutme.p8}</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
