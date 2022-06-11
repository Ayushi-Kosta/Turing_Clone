import React from "react";
import Search from "./search_bar"
import Iimage from "../images/letter-i.png";
import Skilltag from "./skilltag";
import Testtile from "./testtile";
import Android from "../images/android.png";
import Cplus from "../images/c-.png";
import Csharp from "../images/c_sharp.png";
import Css from "../images/css.png";
import Data_analysis from "../images/data_analysis.png";
import Data_eng from "../images/data_engineer.png";
import Git from "../images/git.png";
import Google from "../images/google.png";
import Html from "../images/html-5.png";
import Ml from "../images/machine_learning.png";
// import Android from "../images/android.png";


const Takerelevanttests = () => {
  return (
    <div>
    <div className="head">Take relevant tests</div>
    <div className="take-a-relevant-test-des">Are you interested in using these skills? This is our way of knowing which jobs to match you with. Please take tests for the skills you want to continue using in your next career. Based on your Profile, we marked your top skills with a star</div>
    <div className="take-a-relevant-test-tip">
      <div className="take-a-relevant-test-tip-img"><img src={Iimage}/></div>
      <div className="take-a-relevant-test-tip-tip">Tip:</div>
      <div className="take-a-relevant-test-tip-des">If you’re afraid of failing a test, don’t worry. You’ll be allowed to retake them after 3 months.</div>
    </div>
    <div className="take-a-relevant-test-skill-type">Skill type</div>
    <div className="skill-tag-div-main">
    <div className="skill-tag-div">
    <Skilltag domain="Skill-based"/>
    <Skilltag domain="Backend"/>
    <Skilltag domain="Containers"/>
    <Skilltag domain="Data Engineer"/>
    <Skilltag domain="Database"/>
    <Skilltag domain="DevOps"/>
    <Skilltag domain="Frontend"/>
    <Skilltag domain="Hybrid mobile"/>
    <Skilltag domain="Infrastructure"/>
    <Skilltag domain="Java"/>
    <Skilltag domain="Microsoft"/>
    <Skilltag domain="React"/>
    <Skilltag domain="PHP"/>
    <Skilltag domain="Python"/>
    <Skilltag domain="Soft Skill"/>
    </div>
    <div className="search-div">
      <Search/>
    </div>
    </div>


    <div>
      <Testtile img={Android} tech="Android" duration="45 min"/>
      <Testtile img={Cplus} tech="C++" duration="50 min"/>
      <Testtile img={Csharp} tech="C#" duration="40 min"/>
      <Testtile img={Css} tech="Css" duration="30 min"/>
      <Testtile img={Data_analysis} tech="Data Analysis" duration="40 min"/>
      <Testtile img={Data_eng} tech="Data Engineer" duration="40 min"/>
      <Testtile img={Git} tech="Git" duration="45 min"/>
      <Testtile img={Google} tech="Google Cloud" duration="30 min"/>
      <Testtile img={Html} tech="HTML" duration="40 min"/>
      <Testtile img={Ml} tech="Machine Learning" duration="45 min"/>
      <Testtile img={Android} tech="Android" duration="45 min"/>
      <Testtile img={Cplus} tech="C++" duration="50 min"/>
      <Testtile img={Csharp} tech="C#" duration="40 min"/>
      <Testtile img={Css} tech="Css" duration="30 min"/>
      <Testtile img={Data_analysis} tech="Data Analysis" duration="40 min"/>
      <Testtile img={Data_eng} tech="Data Engineer" duration="40 min"/>
      <Testtile img={Git} tech="Git" duration="45 min"/>
      <Testtile img={Google} tech="Google Cloud" duration="30 min"/>
      <Testtile img={Html} tech="HTML" duration="40 min"/>
      <Testtile img={Ml} tech="Machine Learning" duration="45 min"/>
      <Testtile img={Android} tech="Android" duration="45 min"/>
      <Testtile img={Cplus} tech="C++" duration="50 min"/>
      <Testtile img={Csharp} tech="C#" duration="40 min"/>
      <Testtile img={Css} tech="Css" duration="30 min"/>
      <Testtile img={Data_analysis} tech="Data Analysis" duration="40 min"/>
      <Testtile img={Data_eng} tech="Data Engineer" duration="40 min"/>
      <Testtile img={Git} tech="Git" duration="45 min"/>
      <Testtile img={Google} tech="Google Cloud" duration="30 min"/>
      <Testtile img={Html} tech="HTML" duration="40 min"/>
      <Testtile img={Ml} tech="Machine Learning" duration="45 min"/>
    </div>
  </div>);
};

export default Takerelevanttests;
