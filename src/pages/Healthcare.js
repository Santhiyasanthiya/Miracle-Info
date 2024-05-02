import React from "react";
import { HealthCare } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import "./Healthcare.css";


const Healthcare = () => {
  return (
    <section className="aboutme" id="healthcare">
    <h1 className="title">
      <Fade bottom cascade>
      HEALTHCARE
      </Fade>
    </h1>
    <div class="container">
    <div class="row">

    <div className="col-md-4">
    <Fade bottom cascade duration={1500} >
      <img style={{marginTop:"-20px", }}
        className="aboutme-img img-fluid"
        src="https://miro.medium.com/v2/resize:fit:1358/1*1SJ2s8i1lRglrGRR8z7dpw.gif"
        alt="profile pic"
      />
    </Fade>
  </div>
    <div class="col-md-6">
        <Fade bottom cascade duration={1500} className="text-container">
  
            <ul class="text">
                <li>{HealthCare.p1}</li>
                <li>{HealthCare.p2}</li>
                <li>{HealthCare.p3}</li>
                <li>{HealthCare.p4}</li>
                <li>{HealthCare.p5}</li>
            </ul>
            </Fade>
        </div>
    </div>
</div>
  </section>
  )
}

export default Healthcare