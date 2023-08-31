import React from "react";
import TechStackList from "../Tech/TechStackList/TechStackList";
import AboutMeContent from "../AboutMeContent/AboutMeContent";

import HTML5 from "../../../Images/Tech/html5.svg";
import CSS3 from "../../../Images/Tech/css3.svg";
import JS from "../../../Images/Tech/js.svg";
import ReactIcon from "../../../Images/Tech/react.svg";
import Sass from "../../../Images/Tech/sass.svg";
import TS from "../../../Images/Tech/ts.svg";

const AboutMe: React.FC = () => {
  const techStack = [
    { name: "HTML5", icon: HTML5 },
    { name: "CSS3", icon: CSS3 },
    { name: "JavaScript", icon: JS },
    { name: "React", icon: ReactIcon },
    { name: "SASS", icon: Sass },
    { name: "TypeScript", icon: TS },
  ];

  return (
    <div className="about-me">
      <div className="hero-container">
        <AboutMeContent />
        <TechStackList techStack={techStack} />
      </div>
    </div>
  );
};

export default AboutMe;
