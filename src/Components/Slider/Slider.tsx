import { useState, useEffect } from "react";
import Test1 from "../Test1";
import Test2 from "../Test2";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);

  const slideComponents = [
    <Test1 />,
    <Test2 />,
    <Test1 />,
    <Test2 />,
    <Test1 />,
    <Test2 />,
    <Test1 />,
  ];

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
        setScrollDirection(1); // down
      } else {
        prevSlide();
        setScrollDirection(-1); // up
      }
    };

    const sliderElement = document.querySelector(".slider");

    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleScroll as EventListener);

      return () => {
        sliderElement.removeEventListener(
          "wheel",
          handleScroll as EventListener
        );
      };
    }
  }, []);

  return (
    <div className="slider">
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
      </div>
      <div className="slider__dots">
        {slideComponents.map((_, index) => (
          <div
            key={index}
            className={`slider__dots--dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
