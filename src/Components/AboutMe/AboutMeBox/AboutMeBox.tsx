import { type ReactNode } from "react";

interface AboutMeProps {
  children: ReactNode;
}

export default function AboutMeBox({ children }: AboutMeProps) {
  return (
    <div className="about-me">
      <div className="hero-container">
        <div className="about-me__content">{children}</div>
      </div>
    </div>
  );
}
