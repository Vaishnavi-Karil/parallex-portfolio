import React from "react";
import Intro from "./component/Intro.tsx";
import Projects from "./component/Projects.tsx";
import Github from "./component/Github.tsx";

// import "./styles/style.css";

function App() {
  return (
    <div className="container">
      <Intro />
      <Projects />
      <Github />
    </div>
  );
}

export default App;
