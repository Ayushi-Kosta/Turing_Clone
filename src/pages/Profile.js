import React from "react";
import Skilltag from "./skilltag";
import Qlogo from "../images/question-mark.png";
import Doc from "../images/google-docs.png";
import Pencil from "../images/pencil.png";
import Moon from "../images/new-moon.png";
import Email from "../images/email.png";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import Phone from "../images/phone-call.png";


const Profile = () => {
  return <div id="maind">
    <div className="main-profile">
      Turing
    <div className="resume">
      <div className="resume-head">
        <img className="resume-logo" src={Doc}/>Upload your resume
      </div>
      <div class="image-upload">
        <label for="file-input">
          <img className = "pencil" src={Pencil}/>
        </label>
        <input id="file-input" type="file" />
      </div>

    </div>


<div className="line"> </div>


    <div className="name">
      <div class="name-head">
  <div class="img"><img className="moon" src={Moon}/></div>
  <div class="text-name">
    <p>Ayushi Kosta</p>
  </div>
  <div class="image-upload">
      <img className = "pencil2" src={Pencil}/>
  </div>
</div>
    </div>

    <div>
    <div class="container-big">
    <div class="container2">
      <div class="img"><img className="pencil" src={Email}/></div>
      <div class="text">
        <p>abcd@gmail.com</p>
      </div>
    </div>
    </div>
    <div class="container-big">
    <div class="container2">
      <div class="img"><img className="pencil" src={Phone}/></div>
      <div class="text">
        <p>+919387462</p>
      </div>
    </div>
    </div>
    <div class="container-big">
    <div class="container2">
      <div class="img"><img className="pencil" src={Linkedin}/></div>
      <div class="text">
        <p>name.surname</p>
      </div>
    </div>
    </div>
    <div class="container-big">
    <div class="container2">
      <div class="img"><img className="pencil" src={Github}/></div>
      <div class="text">
        <p>name-surname</p>
      </div>
    </div>
    </div>


<div className="line"> </div>

    <div className="resume">
      <div className="resume-head">
        <img className="resume-logo" src={Doc}/>Overall Experience
      </div>
      <div className="exp-des">
        1 year/9 year remote
      </div>
      <div class="image-upload">
          <img className = "pencil" src={Pencil}/>
      </div>

    </div>


<div className="line"> </div>


    <div className="resume">
      <div className="resume-head">
        <img className="resume-logo" src={Doc}/>Availability
      </div>
      <div className="av-des">
        Part Time
      </div>
      <div class="image-upload">
          <img className = "pencil" src={Pencil}/>
      </div>

    </div>


<div className="line"> </div>



    <div className="resume">
      <div className="resume-head">
        <img className="resume-logo" src={Doc}/>Role
      </div>
      <div className="role-des">
        Frontend Web
      </div>
      <div class="image-upload">
          <img className = "pencil" src={Pencil}/>
      </div>

    </div>

<div className="line"> </div>


    <div className="skills">
      <div className="skill-head">Skills</div>
      <div class="image-upload">
          <img className = "pencil-skill" src={Pencil}/>
      </div>
      <div className="level">
        <div className="skill-level">Advanced</div>
        <Skilltag domain="HTML5"/>
        <Skilltag domain="CSS3"/>
        <Skilltag domain="C++"/>
      </div>
      <div className="level">
        <div className="skill-level">Intermediate</div>
        <Skilltag domain="React"/>
        <Skilltag domain="Bootstrap"/>
        <Skilltag domain="CSS"/>
      </div>
      <div className="level">
        <div className="skill-level">Beginner</div>
        <Skilltag domain="JavaScript"/>
        <Skilltag domain="Machine Learning"/>
        <Skilltag domain="Flask"/>
        <Skilltag domain="React"/>
        <Skilltag domain="Bootstrap"/>
        <Skilltag domain="CSS"/>
      </div>
    </div>



    </div>
    </div>
    <div className="help"><button className="help-button"><img className="qlogo" src={Qlogo}/>Help</button></div>
    <div className="footer">© 2022 Turing Enterprises, Inc.</div>
  </div>;
};

export default Profile;
