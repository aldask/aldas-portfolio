import React from "react";
import { Project } from "../../../Data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

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
            <h3 className="project-card__image__overlay__project-info--project-title">
              {project.title}
            </h3>
            <p className="project-card__image__overlay__project-info--project-description">
              {project.description}
            </p>
            <p className="project-card__image__overlay__project-info--project-technologies">
              Technologies:{" "}
              {project.technologies.map(
                (icon: IconDefinition, index: number) => (
                  <FontAwesomeIcon key={index} icon={icon} />
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
