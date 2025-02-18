// import React from "react";

// const Project = ({ title, description, video, screenVideo, type }) => {
//   return (
//     <div className="project">
//       <div className={type}>
//         <video src={video} alt={title} controls onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} />
//         <div className={`${type}Screen`}>
//           <video src={screenVideo} alt={`${title} App`} className={`${type}App`} controls />
//         </div>
//       </div>
//       <div className="projectDetail">
//         <h1 className="projectTitle">{title}</h1>
//         <p className="projectDesc">{description}</p>
//         <button className="projectButton">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default Project;



import React from "react";

const Project = ({ title, description, video, screenVideo, type }) => {
  const handleMouseOver = (e) => {
    if (e.target.paused) {
      e.target.play();
    }
  };

  const handleMouseOut = (e) => {
    if (!e.target.paused) {
      e.target.pause();
    }
  };

  return (
    <div className="project">
      <div className={type}>
      
        <div className={`${type}Screen`}>
          {/* <video controls width="250">
            <source src={screenVideo} type="video/webm" />
            <source src={screenVideo} type="video/mp4" />
            Download the
            <a href={screenVideo}>WEBM</a>
            or
            <a href={screenVideo}>MP4</a>
            video.
          </video> */}

<VideoPlayer src="/video/parallex_portfolio_video.mp4" />
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






interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "400px",
  height = "360px",
  controls = true,
  autoPlay = false,
  loop = false,
}) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <video
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


