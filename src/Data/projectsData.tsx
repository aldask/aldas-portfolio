import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faReact, faVuejs, faCss3 } from "@fortawesome/free-brands-svg-icons";
import CarOLanding from "../Images/Projects/CarO.png";
import IronGym from "../Images/Projects/IronGym.png"

export interface Project {
  title: string;
  githubLink: string;
  description: string;
  technologies: IconDefinition[];
  imageSrc: string;
}

export const projectsData: Project[] = [
  {
    title: "CarO",
    githubLink: "https://github.com/aldask/aldas-portfolio",
    description: "CarO.",
    technologies: [faReact, faCss3],
    imageSrc: CarOLanding,
  },
  // {
  //   title: "Project 2",
  //   githubLink: "https://github.com/aldask/aldas-portfolio",
  //   description: "project 2 desc",
  //   technologies: [faVuejs, faCss3],
  //   imageSrc:
  //     IronGym,
  // },
];
