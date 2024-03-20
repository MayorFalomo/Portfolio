import React, { useEffect, useRef, useState } from "react";
import "../Styles/AllMyProject/AllMyProjects.css";
import { Parallax } from "react-scroll-parallax";
import { MdLogout } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "../projectModal/ProjectModal";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Project from "./Project";
import keepImg from "./keep.webp";
import AboutModal from "../projectModal/AboutModal";
const AllMyProjects = () => {
  useEffect(() => {
    window.addEventListener("load", function () {
      AOS.init();
    });
  }, []);

  const [projects, setProjects] = useState([
    {
      id: "1",
      projectName: "Keep - A Google Notepad",
      projectImg: "./keep.webp",
      aboutProject:
        "Keep is Full Stack Notepad web app where users can Create notes, set remainders for specific hours(morning, afternoon, evening, next week etc.), add canvas for drawing to your notes, search and send note to others, multi-language notes translate, archive , trash, pin, label your notes for easier organizing, customize your notes using colors and mood images, switch between masonry view or List view, multiple select notes to pin, archive, trash notes etc.",
      skill:
        "Next Js, Typescript, Node Js, MongoDb, Express, Tailwind, CSS, Firebase, PWA ",
      demo: "https://keep-notepad.vercel.app",
      github: "https://github.com/Mayorfalomo/google-keep",
    },
    {
      id: "2",
      projectName: "Tweeks - A Twitter Clone",
      projectImg: "./tweeks.webp",
      aboutProject:
        "Tweeks is a Full-Stack social web app (Twitter clone), Where users can real-time message others (share pictures and videos too), get notifications, follow and unfollow other users, Tailor your TL to see tweets of only those you're following, retweet, like quote and bookmark tweets, post tweets, reply other comments, see a list of those you or other people are following etc.",
      skill:
        "Next Js, Typescript, Node Js, MongoDb, Express, CSS, Firebase, PWA ",
      demo: "https://tweeks.netlify.app",
      github: "https://github.com/MayorFalomo/Twitter-clone",
    },
    {
      id: "3",
      projectName: "Reyna Hair Salon",
      projectImg: "./reyna.webp",
      aboutProject:
        " I freelanced on a Canadian startup's hair salon website, revamping the codebase, updating content, ensuring responsiveness, while preserving the original code integrity.",
      skill: "Javascript, HTML, CSS, and PWA ",
      demo: "http://stage.reyna.ca/",
      github: " ",
    },
    {
      id: "4",
      projectName: "EaseInBiz Automation",
      projectImg: "./easeinbiz.webp",
      aboutProject:
        " Easeinbiz - a startup based in Nigeria that provides automation solutions for businesses, I built the entire page using react, It's responsive and optimized on even the smallest devices.",
      skill: "React, Styled-components",
      demo: "https://easeinbiz.com/",
      github: " ",
    },
    {
      id: "5",
      projectName: "Qcmology",
      projectImg: "./qcmology.webp",
      aboutProject:
        "Qcmology is medical quiz web app project (Freelance), Where students can login to their portal, take tests in different fields of medicine based on their choice and get graded at the end, random information: the codebase was written in french",
      skill: "React JS, Material-UI, CSS, Chart Js",
      demo: "https://qcmology.net/",
      github: " ",
    },
    {
      id: "6",
      projectName: "Lien-Bot",
      projectImg: "./lien-bot.webp",
      aboutProject:
        "Lien bot (FreeLance) is an AI platform where users can chat with a bot and based on your answer to the bots questions it comes up with a lien document which is then sent to your email, I built the entire frontend to interact with the backend and the bot, The frontend is of course based on chatgpt interface",
      skill: "Next 14, Chakra-UI, Tailwind, CSS, AI bot, API",
      demo: "https://lien-bot.vercel.app/",
      github: " ",
    },
    {
      id: "7",
      projectName: "Blogaroo",
      projectImg: "./blogaroo.webp",
      aboutProject:
        " A creative Blog Website i built using the MERN Stack, it has all CRUD functionalities and added features of likes and comments on blog post, editing your profile and making a blog post.",
      skill:
        " MongoDb, Express,Typescript, React, Node Js and Styled-Components",
      demo: "https://blogaroo.netlify.app/register",
      github: "https://github.com/MayorFalomo/Blogaroo-FrontEnd",
    },
    {
      id: "8",
      projectName: "Cinemaflix",
      projectImg: "./cinemaflix.webp",
      aboutProject:
        "A movie hub project using the TMDB API, You can add movies to your watchlist, search for any movie, watch trailers for the series and browse through movies.",
      skill: " React, CSS, API",
      demo: "https://cinema-flix.netlify.app/",
      github: "https://github.com/MayorFalomo/cinemaFlix",
    },

    {
      id: "9",
      projectName: "Quiz App",
      projectImg: "./quiz.webp",
      aboutProject:
        "A Trivial App i built using Next Js, it features a countdown timer, a leaderboard, a real-time chart, and a one-time passwordless login.",
      skill: "Next JS, Redux, Firebase, Chart Js, CSS",
      demo: "https://trivial-quiz-app.netlify.app/",
      github: "https://github.com/MayorFalomo/Quiz-App",
    },
    {
      id: "10",
      projectName: "Nft Dashboard",
      projectImg: "./urban.webp",
      aboutProject:
        " A Single Page Nft Dashboard, It uses local storage to save your dark mode or light mode color.",
      skill: "React, CSS",
      demo: "https://urban-nft-dashboard.netlify.app/",
      github: "https://github.com/MayorFalomo/Urban-Nft-Dashboard",
    },
    {
      id: "11",
      projectName: "Travel Buddy",
      projectImg: "./travelBuddy.webp",
      aboutProject:
        " A Travel Agency website i built using React also uses react router for routing between pages this was my second ever project using React.",
      skill: "React, CSS",
      demo: "https://travelbuddy-agency.netlify.app/",
      github: "https://github.com/MayorFalomo/TravelBuddy",
    },
    {
      id: "12",
      projectName: "Orpheus",
      projectImg: "./orpheus.webp",
      aboutProject: "A single Landing Page using React.",
      skill: "React, CSS",
      demo: "https://orpheus-nft.netlify.app/",
      github: "https://github.com/MayorFalomo/Orpheus-landing-page",
    },
    {
      id: "13",
      projectName: "Google Clone",
      projectImg: "./google.webp",
      aboutProject:
        " A Google clone - A mini Search Engine i built using a search engine API and firebase for authentication, it works just like google.",
      skill: "React JS, CSS, HTML",
      demo: "https://googlebase.netlify.app/",
      github: "https://github.com/MayorFalomo/GoogleBase",
    },
    {
      id: "14",
      projectName: "Swish",
      projectImg: "./swishUpdated.webp",
      aboutProject:
        " Weather app i built using the openweather API and restcountry API, I also added a converter so users can get their temperature to whatever unit they prefer and also an interactive 3d view of the Earth.",
      skill: "React JS, Typescript, Styled-components",
      demo: "https://swish-weather-app.netlify.app",
      github: "https://github.com/MayorFalomo/Swish-Weather-App",
    },
    {
      id: "15",
      projectName: "Medley Games",
      projectImg: "./medleyGames.webp",
      aboutProject:
        " A landing page for a Game website page i built using React and CSS, It uses react-router to route to different pages.",
      skill: "React JS, CSS",
      demo: "https://medley-games.netlify.app/",
      github: "https://github.com/MayorFalomo/Medley-Games",
    },
    {
      id: "16",
      projectName: "Multistep-Form",
      projectImg: "./multistep-form.webp",
      aboutProject:
        "Multistep-Form was a project (Freelance) where potential users can register for a platform using a Flight and your booking number to register for a platform, you can track your progress as you complete each step, I made use of Google's Map API, Now users can search for their addresses on google map and find their exact address on the map to ensure accuracy and the marker switches to that point, and there's also a success message when you successfully complete the form",
      skill: "Next 13 JS, Chakra UI, Framer-Motion, Google map api, CSS",
      demo: "https://netrobe-multistep.vercel.app/",
      github: "https://github.com/MayorFalomo/multistep",
    },
    {
      id: "17",
      projectName: "StoreBay",
      projectImg: "./StoreBay.webp",
      aboutProject:
        "An E-commerce site - I built this using Vue Js and styled it using Tailwind, the fashion products come from an Api, and I added a filter functionality based on a fashion type.",
      skill: "Vue 2 JS, Tailwind, CSS, API",
      demo: "https://store-bay.netlify.app/",
      github: "https://github.com/MayorFalomo/StoreBay",
    },
    {
      id: "18",
      projectName: "Worldly",
      projectImg: "./worldly.webp",
      aboutProject:
        "Worldly is a project i built using Vue Js, Where Users can choose which they would rather answer, Flag or Capital? Each question has 3 attempts, and then fun messages and lottie animation if you get up to 7 correctly, Now! are you ready to test your country knowledge?.",
      skill: "Vue 3 JS, CSS, Lottie Animation, API",
      demo: "https://worldly-pi.vercel.app/",
      github: "https://github.com/MayorFalomo/Worldly",
    },
    {
      id: "19",
      projectName: "Todo",
      projectImg: "./todo.webp",
      aboutProject:
        "A Todo app i built using Vue Js, users can add a todo, delete a todo, edit a todo and set a remainder, neatly organize note based on if they are completed or not....Your Todos are of course all backed up.",
      skill: "Vue 3, CSS",
      demo: "https://vue-todo-app-kohl.vercel.app/",
      github: "https://github.com/MayorFalomo/vue-todo-app",
    },
    {
      id: "20",
      projectName: "Shadcn",
      projectImg: "./shadcn.webp",
      aboutProject:
        "A single practice layout using Next 13 and Shadcn for styling.",
      skill: "Next Js, Shadcn, CSS",
      demo: "https://nextform-shadcn.vercel.app/",
      github: "https://github.com/MayorFalomo/Next-Shadcn",
    },
  ]);

  const [readMore, setReadMore] = useState(160);
  const [readLess, setReadLess] = useState(false);
  const [lineHeight, setLineHeight] = useState(false);
  const keep =
    "Keep is Full Stack Notepad web app where users can Create notes, set remainders, add canvas, search and send note to others, translate notes, archive ,trash, pin, label, customize, masonry layouts, multiple select for notes etc. ";
  const Twinkles =
    "Tweeks is a Full-Stack social web app i built using the MENN Stack and firebase, users can real-time message, get notifications, follow and unfollow others, tailor your tweets,retweet, like quote and bookmark, post tweets, reply comments etc.";

  const keepLength = keep.length;
  const length = Twinkles.length;

  // console.log(length);

  const paragraph = `MY PROJECTS`;

  useEffect(() => {
    if (window.innerWidth < 450) {
      setLineHeight(true);
    }
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [demoLink, setDemoLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const [singleProject, setSingleProject] = useState({
    projectName: "",
    projectImg: "",
    projectSkill: "",
    aboutProject: "",
    demoLink: "",
    githubLink: "",
  });

  return (
    <div id="projects" className="ProjectsContainer">
      <div className="grid">
        {projects.map((project) => {
          return (
            <div className="grid-item" key={project.id}>
              <Project
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                aboutModal={aboutModal}
                setAboutModal={setAboutModal}
                demoLink={demoLink}
                setDemoLink={setDemoLink}
                githubLink={githubLink}
                setGithubLink={setGithubLink}
                setSingleProject={setSingleProject}
              />
            </div>
          );
        })}
      </div>

      {openModal ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              position: "fixed",
              right: "0",
              top: "0",
              width: "0",
              height: "100%",
              x: "100%",
              zIndex: "999999999",
            }}
            animate={{
              position: "fixed",
              // right: "0",
              top: "0",
              width: "80%",
              height: "100%",
              x: "0",
              zIndex: "999999999",
            }}
            exit={{
              position: "fixed",
              right: "-100vw",
              top: "0",
              width: "0%",
              x: "100%",
              height: "100%",
              zIndex: "999999999",
            }}
          >
            {" "}
            <ProjectModal demoLink={demoLink} />{" "}
            <motion.span
              className="timesX"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                zIndex: "9999999999999",
                right: "82%",
                top: "30px",
              }}
              onClick={() => setOpenModal(false)}
            >
              {<FaTimes fontSize="35px" />}{" "}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}

      {aboutModal ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              position: "fixed",
              right: "0",
              top: "0",
              width: "0",
              height: "100%",
              x: "100%",
              zIndex: "999999999",
            }}
            animate={{
              position: "fixed",
              // right: "0",
              top: "0",
              width: "80%",
              height: "100%",
              x: "0",
              zIndex: "999999999",
            }}
            exit={{
              position: "fixed",
              right: "-100vw",
              top: "0",
              width: "0%",
              x: "100%",
              height: "100%",
              zIndex: "999999999",
            }}
            // style={{ position: "relative" }}
          >
            {" "}
            <AboutModal singleProject={singleProject} />{" "}
            <motion.span
              className="timesX"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                zIndex: "9999999999999",
                right: "82%",
                top: "30px",
              }}
              onClick={() => setAboutModal(false)}
            >
              {<FaTimes fontSize="35px" />}{" "}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </div>
  );
};

export default AllMyProjects;
