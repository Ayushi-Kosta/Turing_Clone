import React from "react";
import Star from "../images/star.png";

const Testtile = (props) => {
  return(
    <div className="pass-a-inner-box-content">
      <div className="pass-a-inner-box-content-1">
        <div className="pass-a-inner-box-content-1-star">
          <img className="star-img" src={Star}/>
        </div>
        <div className="pass-a-inner-box-content-1-react">
          <img className="react-img" src={props.img}/>
        </div>
        <div className="pass-a-inner-box-content-1-des">
          <div className="pass-a-inner-box-content-1-des-tech">
            {props.tech}
            <div className="pass-a-inner-box-content-1-des-duration">
              {props.duration}
            </div>
          </div>
        </div>
        <div className="pass-a-inner-box-content-1-des-start">
          Start Test
        </div>
      </div>
    </div>
  )
};

export default Testtile;
