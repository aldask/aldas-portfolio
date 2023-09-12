// Tech stack svg's
import HTML5 from "../Images/Tech/html5.svg";
import CSS3 from "../Images/Tech/css3.svg";
import JS from "../Images/Tech/js.svg";
import ReactIcon from "../Images/Tech/react.svg";
import Sass from "../Images/Tech/sass.svg";
import TS from "../Images/Tech/ts.svg";

// Slides
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe/index";
import Project from "../Components/Projects/index";
import Contacts from "../Components/Contacts/index";

// Projects images
import CarOLanding from "../Images/Projects/CarO.png";
import iron from "../Images/Projects/IronGym.png";

export const slideComponents = [
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
