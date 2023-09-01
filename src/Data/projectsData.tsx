import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faReact, faVuejs, faCss3 } from "@fortawesome/free-brands-svg-icons";

export interface Project {
  title: string;
  description: string;
  technologies: IconDefinition[];
  imageSrc: string;
}

export const projectsData: Project[] = [
  {
    title: "Project 1",
    description: "project 1 desc",
    technologies: [faReact, faCss3],
    imageSrc:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&w=1000&q=80",
  },
  {
    title: "Project 2",
    description: "project 2 desc",
    technologies: [faVuejs, faCss3],
    imageSrc:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&w=1000&q=80",
  },
];
