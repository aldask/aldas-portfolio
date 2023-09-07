// Slides
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/index";
import Project from "../Projects/index";
import Contacts from "../Contacts/index";

// Tech stack
import HTML5 from "../../Images/Tech/html5.svg";
import CSS3 from "../../Images/Tech/css3.svg";
import JS from "../../Images/Tech/js.svg";
import ReactIcon from "../../Images/Tech/react.svg";
import Sass from "../../Images/Tech/sass.svg";
import TS from "../../Images/Tech/ts.svg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

//Needs to be sorted

import { useState, useEffect } from "react";

// import { IconDefinition } from "@fortawesome/fontawesome-common-types";
// import { faReact, faVuejs, faCss3 } from "@fortawesome/free-brands-svg-icons";
import CarOLanding from "../../Images/Projects/CarO.png";
import iron from "../../Images/Projects/IronGym.png";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slideComponents = [
    <Hero />,
    <AboutMe />,
    <Project
      title="Project 1"
      projectTitle="CarO"
      projectImg={CarOLanding}
      projectDescription="A CarO website is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price."
      projectTech={[ReactIcon, TS, CSS3]}
      projectGithub="https://github.com/aldask/car-rental"
      projectDemo="https://car-rental-pied.vercel.app/"
    />,
    <Project
      title="Project 2"
      projectTitle="Iron Gym"
      projectImg={iron}
      projectDescription="The Iron Gym Inclusive Fitness Experience repository, where fitness innovation meets inclusivity. This project showcases a forward-thinking approach to fitness technology, emphasizing interactive features and responsive design principles that cater to the diverse needs of every user."
      projectTech={[ReactIcon, TS, Sass]}
      projectGithub="https://github.com/aldask/gym"
      projectDemo="https://gym-flax.vercel.app/"
    />,
    <Contacts />,
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

  const handleButton = () => {
    setCurrentSlide(0);
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
        <div className="slider__top__button" onClick={handleButton}>
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
      </div>
    </div>
  );
}

export default Slider;
