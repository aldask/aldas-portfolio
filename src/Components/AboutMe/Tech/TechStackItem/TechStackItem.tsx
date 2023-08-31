import React from "react";

interface TechStackItemProps {
  name: string;
  icon: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon }) => (
  <li className="tech-stack__item">
    <img src={icon} alt={name} className="tech-stack__icon" />
  </li>
);

export default TechStackItem;
