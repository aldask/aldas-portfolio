import React from "react";
import { Project } from "../../../Data/projectsData";
import ProjectCard from "../ProjectCard/ProjectCard";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="projects__content">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
