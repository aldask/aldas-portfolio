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
            <div className="project-card__image__overlay__project-info--title">
              <h3 className="project-card__image__overlay__project-info--project-title">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="project-card__image__overlay__project-info--project-title--github-url"
                >
                  {project.title}
                  <img
                    src="github"
                    alt="GitHub Logo"
                    className="project-card__image__overlay__project-info--project-title--github-url--github-logo"
                  />
                </a>
              </h3>
            </div>
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
