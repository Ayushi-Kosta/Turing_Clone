import React from "react";
import Progress from "./Progress";
import Test from "./PassaTest";
import Takerelevanttests from "./takerelevanttests";
import Qlogo from "../images/question-mark.png";

const Dashboard = () => {
  return (
    <div id="maind" className="progress-div">
      <div className="progress-div-outer">
        <div className="progress-div-outer-upper"><div className="progress-div-outer-text">Welcome to the Turing Tests</div></div>
        <div className="progress-div-inner">
          <div className="progress-div-inner-head">Test Progress<span className="progress-div-inner-head-no">50%</span></div>
          <Progress/>
        </div>
      </div>


      <div>
        <div className="head">Pass a tech stack</div>
        <div className="pass-a-des"><small>Become eligible for Jobs by passing the tests below.</small></div>
        <div className="pass-a-inner-box">
          <Test/>
        </div>
      </div>


      <Takerelevanttests/>
      <div className="help"><button className="help-button"><img className="qlogo" src={Qlogo}/>Help</button></div>
      <div className="footer">© 2022 Turing Enterprises, Inc.</div>
    </div>
  );
};

export default Dashboard;
