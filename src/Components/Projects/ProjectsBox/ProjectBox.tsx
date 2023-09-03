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
        {children}
      </div>
    </section>
  );
};

export default ProjectBox;
