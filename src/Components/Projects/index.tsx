import React from "react";
import ProjectBox from "./ProjectsBox/ProjectBox";
import ProjectCard from "./ProjectCard/ProjectCard";
import test1 from "../../../Images/Tech/css3.svg"
import test2 from "../../../Images/Tech/js.svg"
import test3 from "../../../Images/Tech/html5.svg"


export interface ProjectProps {
  title: string;
  projectTitle: string;
  projectImg: string;
  projectDescription: string;
  projectTech: string[];
  projectGithub: string;
}

const Project: React.FC<ProjectProps> = ({ title, ...projectCardProps }) => (
  <ProjectBox title={title}>
    <ProjectCard {...projectCardProps} />
  </ProjectBox>
);

export default Project;