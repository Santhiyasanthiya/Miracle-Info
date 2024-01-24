import React from "react";
import { AIAR } from "../portfolio";
import Fade from "react-reveal/Fade";
import "./AiAr.css";

const AiAr = () => {
  return (
    <section className="aboutme" id="aiar">
    <h1 className="title">
      <Fade bottom cascade>
      AI and AR
      </Fade>
    </h1>
    <div className="fluid-container">
      <div className="row">
        <Fade left cascade duration={1500}>
          <div className="col-lg-5 col-md-5 image">
            <img
              className="aboutme-img"
              // height="250"
              width="400"
              src='https://www.psychiatrist.com/wp-content/uploads/2023/06/AI.gif'alt="profile pic"
            />
          </div>
        </Fade>
        <Fade bottom cascade duration={1500}>
          <div className="col-lg-7 col-md-7 text">
           
            <ul>
            <li>{AIAR.p1}</li>
            <li>{AIAR.p2}</li>
            <li>{AIAR.p3}</li>
            <li>{AIAR.p4}</li>
          
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  </section>
  )
}

export default AiAr