import React from "react";

const Project = ({ title, description, image, screenImage, type }) => {
  return (
    <div className="project">
      <div className={type}>
        <img src={image} alt={title} />
        <div className={`${type}Screen`}>
          <img src={screenImage} alt={`${title} App`} className={`${type}App`} />
        </div>
      </div>
      <div className="projectDetail">
        <h1 className="projectTitle">{title}</h1>
        <p className="projectDesc">{description}</p>
        <button className="projectButton">Learn More</button>
      </div>
    </div>
  );
};

export default Project;
