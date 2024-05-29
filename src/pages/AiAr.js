import React from "react";
import { AIAR } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import "./AiAr.css";

const AiAr = () => {
  return (
    <section className="aboutme" id="aiar">
    <h1 className="title">
      <Fade bottom cascade duration={500}>
      AI and AR
      </Fade>
    </h1>
    <div className="container">
      <div className="row">
      <div className="col-md-4">
        <Fade bottom cascade duration={1500}>
          
            <img style={{marginTop:"-20px"}}
            className="aboutme-img img-fluid"
              height="250"
              width="400"
              src='https://www.psychiatrist.com/wp-content/uploads/2023/06/AI.gif'alt="profile pic"
            />
        
        </Fade>
        </div>
       
          <div className=" col-md-6 ">
          <Fade bottom cascade duration={1500}>
            <ul>
            <li>{AIAR.p1}</li>
            <li>{AIAR.p2}</li>
            <li>{AIAR.p3}</li>
            <li>{AIAR.p4}</li>
          
            </ul>
            </Fade>
          </div>
      
      </div>
    </div>
  </section>
  )
}

export default AiAr