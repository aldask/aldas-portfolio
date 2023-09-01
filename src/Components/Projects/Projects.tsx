import React from "react";
import { projectsData } from "../../Data/projectsData";
import ProjectsList from "./ProjectsList/ProjectsList";
import ProjectsBox from "./ProjectsBox/ProjectsBox";

const Projects: React.FC = () => {
  return (
    <ProjectsBox>
      <ProjectsList projects={projectsData} />
    </ProjectsBox>
  );
};

export default Projects;
