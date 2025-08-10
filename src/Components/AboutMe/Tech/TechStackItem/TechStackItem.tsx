interface TechStackItemProps {
  name: string;
  icon: string;
}

export default function TechStackItem({ name, icon }: TechStackItemProps) {
  return (
    <li className="tech-stack__item">
      <img src={icon} alt={name} className="tech-stack__icon" />
    </li>
  );
}
