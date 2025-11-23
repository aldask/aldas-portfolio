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
    projectDescription="A CarO website is an online platform where users can rent cars for personal or business use, offering an easy interface to search, compare, and reserve from a wide selection of vehicles by make, model, size, and price."
    projectTech={[ReactLogo, TS, CSS3]}
    projectGithub="https://github.com/aldask/car-rental"
    projectDemo="https://car-rental-pied.vercel.app/"
  />,
  <Project
    projectTitle="Iron Gym"
    projectImg={Iron}
    projectDescription="The Iron Gym Inclusive Fitness Experience repository combines fitness innovation with inclusivity, showcasing interactive features and responsive design that meet the diverse needs of all users."
    projectTech={[ReactLogo, TS, SASS]}
    projectGithub="https://github.com/aldask/gym"
    projectDemo="https://gym-flax.vercel.app/"
  />,
  <Project
    projectTitle="Books Library"
    projectImg={BooksLib}
    projectDescription="Library Reservation App allows users to browse, search, and reserve books or audiobooks online. Pricing, discounts, and fees are handled by an ASP.NET Core backend, while the React + Tailwind frontend delivers a clean, responsive experience."
    projectTech={[ReactLogo, TS, Tailwind, NETCore]}
    projectGithub="https://github.com/aldask/BooksLibraryFE"
    projectDemo="https://books-library-fe.vercel.app/"
  />,
  <Project
    projectTitle="Groups Expense Tracker"
    projectImg={Groups}
    projectDescription="Group Expense Splitter is a Vite powered React with TypeScript and Tailwind CSS that simplifies group management and expense splitting. The ASP.NET Core backend handles calculations and data storage with an EF Core in-memory database, offering flexible transaction options and a clean, responsive interface."
    projectTech={[ReactLogo, Vite, TS, Tailwind, NETCore]}
    projectGithub="https://github.com/aldask/GroupsExpenses_FE"
    projectDemo="https://groups-task-fe.vercel.app/"
  />,
  <Project
    projectTitle="TV or No TV"
    projectImg={TVorNoTV}
    projectDescription="TV or No TV is a responsive React and TypeScript app styled with Tailwind CSS that lets users browse, filter, sort, and favorite TV shows from the TVMaze API. It supports dark and light themes, includes hidden Easter eggs, saves favorites locally, and is optimized for both mobile and desktop."
    projectTech={[ReactLogo, Vite, Tailwind, TS]}
    projectGithub="https://github.com/aldask/tv-or-no-tv"
    projectDemo="https://tv-or-no-tv.vercel.app/"
  />,
  <Project
    projectTitle="VAT Rate Finder"
    projectImg={TaxCalc}
    projectDescription="A simple C# console app that calculates VAT based on seller and buyer countries using predefined EU and non-EU rates. It supports dynamic input for price and countries, then outputs the tax amount and total price designed for easy tax lookup in cross border transactions."
    projectTech={[NETCore]}
    projectGithub="https://github.com/aldask/Tax-calculator"
  />,
  <Project
    projectTitle="Company Tax Summary Tool"
    projectImg={TaxSummary}
    projectDescription="A C# console app that reads company tax data from a CSV, calculates total taxes per company per month, and writes the summary to a new CSV. It uses CsvHelper for easy parsing and grouping by company and month, enabling quick tax data aggregation and export."
    projectTech={[NETCore]}
    projectGithub="https://github.com/aldask/TotalTaxesCalculator"
  />,
  <Contacts />,
];
