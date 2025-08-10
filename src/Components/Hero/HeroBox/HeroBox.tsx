import type { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

export default function HeroBox({ children }: HeroProps) {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero__content">{children}</div>
      </div>
    </div>
  );
}
