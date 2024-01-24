import React from "react";
import { vision } from "../portfolio";
import Fade from "react-reveal/Fade";
import "./Whatido.css";

const Whatido = () => {
  return (
    <section className="aboutme" id="whatido">
      <h1 className="title">
        <Fade bottom cascade>
          Vision
        </Fade>
      </h1>
      <div className="fluid-container">
        <div className="row">
         
          <Fade bottom cascade duration={1500}>
            <div className="col-lg-7 col-md-7 text">
             
              <ul className="unorder">
              <li>{vision.p1}</li>
              <li>{vision.p2}</li>
              <li>{vision.p3}</li>
              <li>{vision.p4}</li>
            
              </ul>
           
             
            </div>
          </Fade>

          <Fade left cascade duration={1500}>
          <div className="col-lg-5 col-md-5 image">
            <img
              className="aboutme-img"
              height="300"
              width="400"
              src='https://cdn.dribbble.com/users/2221077/screenshots/14110896/media/f6bd29562775b724409df2c851c5b49c.gif'  alt="profile pic"
            />
          </div>
        </Fade>
        </div>
      </div>
    </section>
  );
};

export default Whatido;
