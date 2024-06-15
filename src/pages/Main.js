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
            

              
              </div>
          
            </div>
          
            <div className="col-lg-6  ani">
            <Coder />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Main;
