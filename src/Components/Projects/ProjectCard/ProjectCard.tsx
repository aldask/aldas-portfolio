import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export interface ProjectCardProps {
  projectTitle: string;
  projectImg: string;
  projectDescription: string;
  projectTech: string[];
  projectGithub: string;
  projectDemo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectImg,
  projectDescription,
  projectTech,
  projectGithub,
  projectDemo,
}) => {
  return (
    <div className="project-card">
      <div>
        <img src={projectImg} alt={projectTitle} />
      </div>
      <div className="project-card__project-info">
        <div className="project-card__project-info--info-box">
          <h3 className="project-card__project-info--info-box--title">
            {projectTitle}
          </h3>
          <p className="project-card__project-info--info-box--desc">
            {projectDescription}
          </p>
          <div className="project-card__project-info--info-box--pic-box">
            <h3>Build stack:</h3>
            {projectTech.map((icon) => (
              <div
                key={icon}
                className="project-card__project-info--info-box--pic-box--icon-container"
              >
                <img src={icon} alt={icon} />
              </div>
            ))}
          </div>
          <div className="project-card__project-info--info-box__bottom">
            <a href={projectGithub} target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href={projectDemo} target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
