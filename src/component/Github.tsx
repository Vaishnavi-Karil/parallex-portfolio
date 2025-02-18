import React from "react";
import { Images } from "../constant/Images.tsx";
// import githubImg from "../img/github.png";
// import githubImg from "../../public/img/github.png";

const Github = () => {
  return (
    <div className="githubContainer">
      <h1 className="githubTitle">Want to see all projects?</h1>
      <div className="githubChart">
        <div className="dates">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
            (month, index) => (
              <span key={index}>{month}</span>
            )
          )}
        </div>
        <div className="boxContainer"></div>
        <h1 className="githubTitle">ON GITHUB</h1>
      </div>
      <div className="githubSm">
        <a href="https://github.com">
          <img src={Images.github} alt="GitHub" />
        </a>
        <h2>Find Me on Github</h2>
      </div>
    </div>
  );
};

export default Github;
