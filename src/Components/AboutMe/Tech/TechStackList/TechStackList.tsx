import React from "react";
import TechStackItem from "../TechStackItem/TechStackItem";

interface TechStackListProps {
  techStack: { name: string; icon: string }[];
}

const TechStackList: React.FC<TechStackListProps> = ({ techStack }) => (
  <div className="tech-stack">
    <h2 className="tech-stack__title">My Current Stack</h2>
    <ul className="tech-stack__list">
      {techStack.map((tech, index) => (
        <TechStackItem key={index} name={tech.name} icon={tech.icon} />
      ))}
    </ul>
  </div>
);

export default TechStackList;
