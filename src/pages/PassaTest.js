import React from "react";
import Testtile from "./testtile";
import Rlogo from "../images/physics.png";

const Test = () => {
  return <div>
  <div className="pass-a-inner-box-bar">
    <div className="pass-a-inner-box-bar-1">
      ReactJS + ReactJS 16.8++
      <div className="pass-a-inner-box-bar-1-line"></div>
    </div>
    <div className="pass-a-inner-box-bar-2">
      Change my tech stack
    </div>
  </div>
    <Testtile img={Rlogo} tech="ReactJS 16.8++" duration="40 min"/>
    <Testtile img={Rlogo} tech="ReactJS" duration="45 min"/>

  </div>;
};

export default Test;
