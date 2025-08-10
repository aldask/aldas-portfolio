// Slides
import Hero from "../Components/Hero/index";
import AboutMe from "../Components/AboutMe/index";
import Project from "../Components/Projects/index";
import Contacts from "../Components/Contacts/index";

// Projects images
import {
  CarO,
  Iron,
  BooksLib,
  Groups,
  Gallery,
  TVorNoTV,
  TaxCalc,
  TaxSummary,
} from "../utils/projectImgs";

import {
  ReactLogo,
  TS,
  CSS3,
  SASS,
  Tailwind,
  NETCore,
  Vite,
} from "../utils/techStackIcons";

export const slideComponents = [
  <Hero />,
  <AboutMe />,
  <Project
    projectTitle="CarO"
    projectImg={CarO}
    projectDescription="A CarO website is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price."
    projectTech={[ReactLogo, TS, CSS3]}
    projectGithub="https://github.com/aldask/car-rental"
    projectDemo="https://car-rental-pied.vercel.app/"
  />,
  <Project
    projectTitle="Iron Gym"
    projectImg={Iron}
    projectDescription="The Iron Gym Inclusive Fitness Experience repository, where fitness innovation meets inclusivity. This project showcases a forward-thinking approach to fitness technology, emphasizing interactive features and responsive design principles that cater to the diverse needs of every user."
    projectTech={[ReactLogo, TS, SASS]}
    projectGithub="https://github.com/aldask/gym"
    projectDemo="https://gym-flax.vercel.app/"
  />,
  <Project
    projectTitle="Books Library"
    projectImg={BooksLib}
    projectDescription="Library Reservation App lets users browse, search, and reserve books or audiobooks online.
Pricing, discounts, and fees are calculated in an ASP.NET Core backend.
The React + Tailwind frontend offers a clean, responsive user experience."
    projectTech={[ReactLogo, TS, Tailwind, NETCore]}
    projectGithub="https://github.com/aldask/BooksLibraryFE"
    projectDemo="https://books-library-fe.vercel.app/"
  />,
  <Project
    projectTitle="Groups Expense Tracker"
    projectImg={Groups}
    projectDescription="Group Expense Splitter is a Vite powered React app with TypeScript and Tailwind CSS that helps users manage groups and split expenses easily.
The ASP.NET Core backend handles all calculations and data storage using an EF Core in-memory database.
It features flexible transaction splitting options and a clean, responsive interface."
    projectTech={[ReactLogo, Vite, TS, Tailwind, NETCore]}
    projectGithub="https://github.com/aldask/GroupsExpenses_FE"
    projectDemo="https://groups-task-fe.vercel.app/"
  />,
  <Project
    projectTitle="TV or No TV"
    projectImg={TVorNoTV}
    projectDescription="TV or No TV is a responsive React and TypeScript app styled with Tailwind CSS that lets users browse, filter, sort, and favorite TV shows from the TVMaze API.
It supports dark and light themes and includes fun hidden Easter eggs for a playful user experience.
Favorites are saved locally for persistence, and the app is fully optimized for mobile and desktop."
    projectTech={[ReactLogo, Vite, Tailwind, TS]}
    projectGithub="https://github.com/aldask/tv-or-no-tv"
    projectDemo="https://tv-or-no-tv.vercel.app/"
  />,
  <Project
    projectTitle="VAT Rate Finder"
    projectImg={TaxCalc}
    projectDescription="A simple C# console application that calculates VAT based on seller and buyer countries using predefined EU and non-EU tax rates.
It supports dynamic input for price and countries, then outputs the tax amount and total price.
Designed for easy tax rate lookup and calculation in cross-border transactions."
    projectTech={[NETCore]}
    projectGithub="https://github.com/aldask/Tax-calculator"
  />,
  <Project
    projectTitle="Company Tax Summary Tool"
    projectImg={TaxSummary}
    projectDescription="A C# console application that reads company tax data from a CSV file, calculates total taxes per company per month, and writes the summarized results to a new CSV.
It uses CsvHelper for easy CSV parsing and writing, and groups taxes by company and month with date formatting.
Designed for quick aggregation and export of tax data in a simple, efficient workflow."
    projectTech={[NETCore]}
    projectGithub="https://github.com/aldask/TotalTaxesCalculator"
  />,
  <Project
    projectTitle="Infinite Gallery"
    projectImg={Gallery}
    projectDescription="A sleek React + TypeScript gallery that fetches images from the Pexels API with infinite scrolling and favorites saved locally.
Styled with CSS Modules, it features fully typed, reusable components and includes basic tests for reliability."
    projectTech={[ReactLogo, Vite, CSS3, TS]}
    projectGithub="https://github.com/aldask/infinite-gallery-app"
    projectDemo="https://infinite-gallery-indol.vercel.app/"
  />,
  <Contacts />,
];
