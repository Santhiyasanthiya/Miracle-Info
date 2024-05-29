import React from "react";
import { vision } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import "./Whatido.css";

const Whatido = () => {
  return (
    <section className="aboutme" id="whatido">
    
        
    
        <h1 className="title">
        <Fade bottom cascade duration={500}>
       Vision
        </Fade>
      </h1>







        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Fade bottom cascade duration={1500} className="text-container">
              <ul className="list">
                <li>{vision.p1}</li>
                <li>{vision.p2}</li>
                <li>{vision.p3}</li>
                <li>{vision.p4}</li>
              </ul>
            </Fade>
          </div>
          <div className="col-md-4">
            <Fade bottom cascade duration={1500} className="image-container">
              <img style={{marginTop:"-20px", }}
                className="aboutme-img img-fluid"
                src="https://cdn.dribbble.com/users/2221077/screenshots/14110896/media/f6bd29562775b724409df2c851c5b49c.gif"
                alt="profile pic"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatido;