import React from "react";
import ProjectBox from "./ProjectsBox/ProjectBox";
import ProjectCard from "./ProjectCard/ProjectCard";

export interface ProjectProps {
  title: string;
  projectTitle: string;
  projectImg: string;
  projectDescription: string;
  projectTech: string[];
  projectGithub: string;
  projectDemo: string;
}

const Project: React.FC<ProjectProps> = ({ title, ...projectCardProps }) => (
  <ProjectBox title={title}>
    <ProjectCard {...projectCardProps} />
  </ProjectBox>
);

export default Project;
