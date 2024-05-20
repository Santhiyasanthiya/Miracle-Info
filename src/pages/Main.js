import React from "react";
import Coder from "../components/Animation/Coder";
import { Zoom } from "react-awesome-reveal"
import { main } from "../portfolio";
import TypeWriter from "../Typewriter/typewriter";
import "./Main.css";

function Main() {
  return (
    <section className="mainX" id="main">
      <div className="fluid-container">
        <Zoom duration={1000}>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="mobile">
                <h1 className="main-title n" id="name">
              <span style={{color:"orange"}}>Alphaingen</span>  <span style={{color:"white"}}>Technology</span>

              <h3 className="type-writer"><TypeWriter /></h3>
              </h1>

              
              </div>
              <Coder />
            </div>
          
            <div className="col-lg-5 ani">
          
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Main;
