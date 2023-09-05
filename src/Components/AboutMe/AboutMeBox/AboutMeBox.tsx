import React, { ReactNode } from "react";

interface AboutMeProps {
  children: ReactNode;
}

const AboutMeBox: React.FC<AboutMeProps> = ({ children }) => {
  return (
    <div className="about-me">
      <div className="hero-container">
        <div className="about-me__content">{children}</div>
      </div>
    </div>
  );
};

export default AboutMeBox;
