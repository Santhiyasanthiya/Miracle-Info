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
         
          <div className=" col-md-4 ">
            <Fade left cascade duration={1500} className="image-container">
              <img
                style={{ marginTop: "-15px"}}
                className="aboutme-img img-fluid"
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
