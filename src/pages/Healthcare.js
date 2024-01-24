import React from "react";
import { HealthCare } from "../portfolio";
import Fade from "react-reveal/Fade";
import "./Healthcare.css";


const Healthcare = () => {
  return (
    <section className="aboutme" id="healthcare">
    <h1 className="title">
      <Fade bottom cascade>
      Health - care
      </Fade>
    </h1>
    <div className="fluid-container">
      <div className="row">
        <Fade left cascade duration={1500}>
          <div className="col-lg-5 col-md-5 image">
            <img
              className="aboutme-img"
            
              width="450"
              src='https://miro.medium.com/v2/resize:fit:1358/1*1SJ2s8i1lRglrGRR8z7dpw.gif'alt="profile pic"
            />
          </div>
        </Fade>
        <Fade bottom cascade duration={1500}>
          <div className="col-lg-7 col-md-7 text">
           
            <ul>
            <li>{HealthCare.p1}</li>
            <li>{HealthCare.p2}</li>
            <li>{HealthCare.p3}</li>
            <li>{HealthCare.p4}</li>
            <li>{HealthCare.p5}</li>
            </ul>
         
         
          </div>
        </Fade>
      </div>
    </div>
  </section>
  )
}

export default Healthcare