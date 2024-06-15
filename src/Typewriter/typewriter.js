import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <div style={{color:"maroon"}}>
    <Typewriter 
      options={{
        strings: ["A company to connect PEOPLE "],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default TypeWriter;
