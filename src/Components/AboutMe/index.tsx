import React from "react";
import AboutMeContent from "./AboutMeContent/AboutMeContent";
import TechStackList from "./Tech/TechStackList/TechStackList";

import HTML5 from "../../Images/Tech/html5.svg";
import CSS3 from "../../Images/Tech/css3.svg";
import JS from "../../Images/Tech/js.svg";
import ReactIcon from "../../Images/Tech/react.svg";
import Sass from "../../Images/Tech/sass.svg";
import TS from "../../Images/Tech/ts.svg";
import NextIcon from "../../Images/Tech/next.svg";
import Tailwind from "../../Images/Tech/tailwind.svg";
import Dotnet from "../../Images/Tech/dot-net-original.svg";

import AboutMeBox from "./AboutMeBox/AboutMeBox";

const AboutMe: React.FC = () => {
  const techStack = [
    { name: "HTML5", icon: HTML5 },
    { name: "CSS3", icon: CSS3 },
    { name: "JavaScript", icon: JS },
    { name: "React.js", icon: ReactIcon },
    { name: "SASS", icon: Sass },
    { name: "TypeScript", icon: TS },
    { name: "Next.js", icon: NextIcon },
    { name: "Tailwind", icon: Tailwind },
    { name: ".NET", icon: Dotnet },
  ];

  return (
    <AboutMeBox>
      <AboutMeContent />
      <TechStackList techStack={techStack} />
    </AboutMeBox>
  );
};

export default AboutMe;
