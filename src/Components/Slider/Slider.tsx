import { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Navbar from "../Nav/Navbar";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slideComponents = [<Hero />, <About />, <Projects />, <Contacts />];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideComponents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + slideComponents.length) % slideComponents.length
    );
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        nextSlide();
        setScrollDirection(1);
      } else {
        prevSlide();
        setScrollDirection(-1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 37) {
        prevSlide();
        setScrollDirection(-1);
      } else if (event.keyCode === 39) {
        nextSlide();
        setScrollDirection(1);
      }
    };

    const sliderElement = document.querySelector(".slider") as HTMLElement;

    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleScroll);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        sliderElement.removeEventListener("wheel", handleScroll);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  function setBackgroundGradient(mousePosition: { x: number; y: number }) {
    const centerX = (mousePosition.x / window.innerWidth) * 100;
    const centerY = (mousePosition.y / window.innerHeight) * 100;

    return `radial-gradient(circle at ${centerX}% ${centerY}%, #7c88ff, #7681f2, #707be5, #6a74d8, #646ecb)`;
  }

  return (
    <div
      className="slider"
      style={{ background: setBackgroundGradient(mousePosition) }}
    >
      <div className="slider__top">
        <div className="slider__top__button">
          <h1>
            <span className="logo-color">&#123; &#125; </span>Aldas.dev
          </h1>
        </div>
        <div className="slider__top__dots">
          {slideComponents.map((_, index) => (
            <div
              key={index}
              className={`slider__top__dots--dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="slider__container">
        {slideComponents.map((slide, index) => (
          <div
            key={index}
            className={`slider__container--slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              animation:
                scrollDirection === 1
                  ? "slide-in 1s ease-in-out"
                  : "slide-in-reverse 1s ease-in-out",
            }}
          >
            {slide}
          </div>
        ))}
        {/* <Navbar slideNum={currentSlide} /> */}
      </div>
    </div>
  );
}

export default Slider;
