import React from "react";
import { Images } from "../constant/Images.tsx";
import { TypeAnimation } from "react-type-animation";
// import personImg from "../../public/img/person.png"; 

const Intro = () => {
  return (
    <div className="intro">
      <div className="salute">
        <div className="saluteTextContainer">
          <h1 className="saluteText"
          >Hi</h1>


        </div>
        <div className="saluteImgContainer">
          <img src={Images.person} alt="Person" className="saluteImg" />
        </div>
      </div>
      <div className="nameContainer">
        <TypeAnimation className="name" wrapper="h2" sequence={[
          "I'm Vaishnavi Karil",
          1000,
          " ",
          1000
        ]}

          speed={30}
          repeat={Infinity} />
      </div>

      <div className="jobTitleContainer dark">
        <TypeAnimation
          className="jobTitle"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'I am Mern Stack Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'I am React JS Developer',
            1000,
            'I am AWS DevOps Specialist',
            1000,
            'I am Node.js Developer',
            1000,
            'I am Pern Developer',
            1000,
            'I am Frontend Developer',
            1000, 
            'I am Software Developer'
          ]}
          wrapper="span"
          speed={20}
          style={{ fontSize: '7vm', display: 'inline-block', color: "rgb(12, 189, 2)", lineHeight: "100vh", cursor: "default", textAlign: "center" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Intro;
