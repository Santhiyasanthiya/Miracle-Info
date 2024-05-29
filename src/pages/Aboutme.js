import React from "react";
import { aboutme } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import "./Aboutme.css";

function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <h1 className="title">
        <Fade bottom cascade duration={500}>
          About Us
        </Fade>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Fade left cascade duration={1500}> 
              <img
                style={{ marginLeft: "1px" }}
                className="aboutme-img img-fluid"
                height="300"
                width="400"
                src='https://i.pinimg.com/originals/12/e8/a6/12e8a6a547e317524121f7a5d6084036.gif'
                alt="profile pic"
              />
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade bottom cascade duration={1500}>
              <ul>
                <li>{aboutme.p1}</li>
                <li>{aboutme.p2}</li>
                <li>{aboutme.p3}</li>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
