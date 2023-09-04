import React, { ReactNode } from "react";

interface ProjectBoxProps {
  children: ReactNode;
  title: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ children, title }) => {
  return (
    <section className="projects">
      <div className="hero-container">
        <h1>{title}</h1>
        <div className="projects__content">{children}</div>
      </div>
    </section>
  );
};

export default ProjectBox;
