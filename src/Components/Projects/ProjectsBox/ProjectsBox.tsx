import React, { ReactNode } from "react";

interface ProjectsBoxProps {
  children: ReactNode;
}

const ProjectsBox: React.FC<ProjectsBoxProps> = ({ children }) => {
  return (
    <section className="projects">
      <div className="hero-container">{children}</div>
    </section>
  );
};

export default ProjectsBox;
