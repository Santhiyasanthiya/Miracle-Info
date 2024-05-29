import React from "react";
import { aboutme } from "../../portfolio";
import Fade from "react-reveal/Fade";
import "../Aboutme.css";



const Project = () => {

    return (
        <section className="aboutme" id="aboutme">
          <h1 className="title">
            <Fade bottom cascade duration={500}>
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
                    src='https://qph.cf2.quoracdn.net/main-qimg-0bb67725803fc9271e8d670af7d65f19'
                    alt="profile pic"
                  />
                </div>
              </Fade>
              <Fade bottom cascade duration={1500}>
                <div className="col-lg-7 col-md-7 text">
                  <p>{aboutme.p1}</p>
                  <ul>
                  <li>{aboutme.p2}</li>
                  <li>{aboutme.p3}</li>
                  <li>{aboutme.p4}</li>
                  <li>{aboutme.p5}</li>
                  
                  </ul>
               
                  <p>{aboutme.p8}</p>
                </div>
              </Fade>
    
            
            </div>
          </div>
        </section>
      );

  
}

export default Project