import ProjectBox from "./ProjectsBox/ProjectBox";
import ProjectCard from "./ProjectCard/ProjectCard";

export interface ProjectProps {
  projectTitle: string;
  projectImg: string;
  projectDescription: string;
  projectTech: string[];
  projectGithub: string;
  projectDemo?: string;
}

export default function Project({ ...projectCardProps }: ProjectProps) {
  return (
    <ProjectBox>
      <ProjectCard {...projectCardProps} />
    </ProjectBox>
  );
}
