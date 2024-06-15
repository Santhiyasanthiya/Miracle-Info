import React from "react";
import { InformationAI } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import "./InformationTech.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using Font Awesome for icons
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using Font Awesome for icons


const InformationTech = () => {
  return (
    <section className="aboutme" id="infotech">
    <div className="row">
     
          
        
     <div className="container"> 
     <Fade bottom cascade duration={800}>
     <h1 className="title text-center"> Information Technology</h1> 
     </Fade>
     </div>
     
          
      
        </div>
  
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
