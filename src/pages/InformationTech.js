import React from "react";
import { InformationAI } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import "./InformationTech.css";

const InformationTech = () => {
  return (
    <section className="aboutme" id="infotech">
      <h1 className="title text-align-center">
        <Fade bottom cascade>
          Information Technology
        </Fade>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Fade bottom cascade duration={1500}>
              <ul className="list">
                <li>{InformationAI.p1}</li>
                <li>{InformationAI.p2}</li>
                <li>{InformationAI.p3}</li>
              </ul>
            </Fade>
          </div>

      
            <div className="col-md-4">
            <Fade left cascade duration={1500}>
              <img style={{marginTop:"-20px", }}
                className="aboutme-img"
                height="300"
                width="400"
                src="https://qph.cf2.quoracdn.net/main-qimg-a569c70550883dc678dfdf65d4561277"
                alt="profile pic"
              />
        
          </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationTech;
