import { type ReactNode } from "react";

interface ProjectBoxProps {
  children: ReactNode;
}

export default function ProjectBox({ children }: ProjectBoxProps) {
  return (
    <section className="projects">
      <div className="hero-container">
        <div className="projects__content">{children}</div>
      </div>
    </section>
  );
}
