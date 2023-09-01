import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faVuejs, faCss3 } from "@fortawesome/free-brands-svg-icons";

export interface Project {
  title: string;
  description: string;
  technologies: any[];
  imageSrc: string;
}

export const projectsData: Project[] = [
  {
    title: "Project 1",
    description: "project 1 desc",
    technologies: [
      <FontAwesomeIcon icon={faReact} />,
      <FontAwesomeIcon icon={faCss3} />,
    ], // Include icons within an array
    imageSrc:
      "https://images.unsplash.com/photo-1566577845537-fb986565aad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyYXNzJTIwbGFuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    title: "Project 2",
    description: "project 2 desc",
    technologies: [
      <FontAwesomeIcon icon={faVuejs} />,
      <FontAwesomeIcon icon={faCss3} />,
    ], // Include icons within an array
    imageSrc:
      "https://images.unsplash.com/photo-1566577845537-fb986565aad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyYXNzJTIwbGFuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
];
