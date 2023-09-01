import React from "react";
import { Project } from "../../../Data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={project.imageSrc} alt={project.title} />
        <div className="project-card__image__overlay">
          <div className="project-card__image__overlay__project-info">
            <h3 className="project-card__image__overlay__project-info--project-title">{project.title}</h3>
            <p className="project-card__image__overlay__project-info--project-description">{project.description}</p>
            <p className="project-card__image__overlay__project-info--project-technologies">
              Technologies: {project.technologies.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
