import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface ProjectCardProps {
  projectTitle: string;
  projectImg: string;
  projectDescription: string;
  projectTech: IconDefinition[];
  projectGithub: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectImg,
  projectDescription,
  projectTech,
  projectGithub,
}) => {
  return (
    <div className="projects__content">
      <div className="project-card">
        <a href={projectGithub} target="_blank" rel="noopener noreferrer">
          <img src={projectImg} alt={projectTitle} />
        </a>
        <div className="project-info">
          <div className="info-box">
            <h3>{projectTitle}</h3>
            <p>{projectDescription}</p>
            {projectTech.map((icon: IconDefinition, index: number) => (
              <FontAwesomeIcon key={index} icon={icon} />
            ))}
            <p>
              <a href={projectGithub} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
