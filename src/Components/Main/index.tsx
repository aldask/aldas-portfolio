import { useState, useEffect } from "react";
import FlyingObject from "./FlyingObject/FlyingObject";
import Slide from "./Slide/Slide";

function Main() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function setBackgroundGradient(mousePosition: { x: number; y: number }) {
    const centerX = (mousePosition.x / window.innerWidth) * 100;
    const centerY = (mousePosition.y / window.innerHeight) * 100;

    return `
      radial-gradient(circle at ${centerX}% ${centerY}%, #3282b8, #0f4c75)
    `;
  }

  return (
    <div
      className="main"
      style={{ background: setBackgroundGradient(mousePosition) }}
    >
      <FlyingObject objectSizeMin={400} objectSizeMax={800} color="#3498db" />
      <FlyingObject objectSizeMin={50} objectSizeMax={300} color="blue" />
      <div className="main__top">
        <div className="main__top__left">
          <h1>
            <span className="logo-color">&#123; &#125; </span>Aldas.dev
          </h1>
        </div>
        <div className="main__top__right">
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="main__bottom">
        <Slide />
      </div>
    </div>
  );
}

export default Main;
