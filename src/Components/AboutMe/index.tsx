import AboutMeContent from "./AboutMeContent/AboutMeContent";
import TechStackList from "./Tech/TechStackList/TechStackList";
import {
  HTML5,
  CSS3,
  ReactLogo,
  SASS,
  TS,
  Next,
  Tailwind,
  NET,
  JS,
  Node,
  CSharp,
  NETCore,
} from "../../utils/techStackIcons";

import AboutMeBox from "./AboutMeBox/AboutMeBox";

export default function AboutMe() {
  const techStack = [
    { name: "HTML5", icon: HTML5 },
    { name: "CSS3", icon: CSS3 },
    { name: "SASS", icon: SASS },
    { name: "Tailwind", icon: Tailwind },
    { name: "JavaScript", icon: JS },
    { name: "Node", icon: Node },
    { name: "TypeScript", icon: TS },
    { name: "React.js", icon: ReactLogo },
    { name: "Next.js", icon: Next },
    { name: "C#", icon: CSharp },
    { name: ".NET", icon: NET },
    { name: ".NET Core", icon: NETCore },
  ];

  return (
    <AboutMeBox>
      <AboutMeContent />
      <TechStackList techStack={techStack} />
    </AboutMeBox>
  );
}
