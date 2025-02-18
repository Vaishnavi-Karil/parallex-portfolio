import React from "react";
import { Images } from "../constant/Images.tsx";
// import personImg from "../../public/img/person.png"; 

const Intro = () => {
  return (
    <div className="intro">
      <div className="salute">
        <div className="saluteTextContainer">
          <h1 className="saluteText">Hi</h1>
        </div>
        <div className="saluteImgContainer">
          <img src={Images.person} alt="Person" className="saluteImg" />
        </div>
      </div>
      <div className="nameContainer">
        <h2 className="name">I'm Vaishnavi Karil</h2>
      </div>
      <div className="jobTitleContainer dark">
        <h2 className="jobTitle">a Mern Stack Developer</h2>
      </div>
      <div className="jobTitleContainer purple">
        <h2 className="jobTitle"> & AWS DevOps specialist</h2>
      </div>
    </div>
  );
};

export default Intro;
