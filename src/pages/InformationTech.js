import React from "react";
import { InformationAI } from "../portfolio";
import Fade from "react-reveal/Fade";
import "./InformationTech.css";

const InformationTech = () => {
  return (
    <section className="aboutme" id="infotech">
    <h1 className="title">
      <Fade bottom cascade>
      Information Technology
      </Fade>
    </h1>
    <div className="fluid-container">
      <div className="row">
        
        <Fade bottom cascade duration={1500}>
          <div className="col-lg-7 col-md-7 text">
           
            <ul className="list">
            <li>{InformationAI.p1}</li>
            <li>{InformationAI.p2}</li>
            <li>{InformationAI.p3}</li>
          
          
            </ul>
         
          </div>
        </Fade>

        <Fade left cascade duration={1500}>
          <div className="col-lg-5 col-md-5 image">
            <img
              className="aboutme-img"
              height="300"
              width="400"
              src='https://qph.cf2.quoracdn.net/main-qimg-a569c70550883dc678dfdf65d4561277'alt="profile pic"
            />
          </div>
        </Fade>
      </div>
    </div>
  </section>
  )
}

export default InformationTech