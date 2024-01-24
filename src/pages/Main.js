import React from "react";
import Coder from "../components/Animation/Coder";
import Zoom from "react-reveal/Zoom";
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
                Miracle info Soft
                  <h3 className="type-writer"><TypeWriter /></h3>
                </h1>
                <h1 className="main-title d">{main.doamin}</h1>
              
              </div>
            </div>
            <div className="col-lg-5 ani">
            <Coder />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Main;
