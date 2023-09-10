import React, { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

const HeroBox: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero__content">{children}</div>
      </div>
    </div>
  );
};

export default HeroBox;
