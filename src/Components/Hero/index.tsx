import React from "react";
import HeroBox from "./HeroBox/HeroBox";
import HeroContent from "./HeroContent/HeroContent";

const Hero: React.FC = () => {
  return (
    <HeroBox>
      <HeroContent />
    </HeroBox>
  );
};

export default Hero;
