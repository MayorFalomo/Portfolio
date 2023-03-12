import React, { useEffect, useRef } from "react";
import "../Styles/Projects/Projects.css";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { MdLogout } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

const Projects = () => {
  const ref = useRef(null);
  const isView = useInView(ref);
  const anime = useAnimation();
  // const animation = useAnimation();

  useEffect(() => {
    if (isView) {
      anime.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          stiffness: 70,
        },
      });
    } else {
      anime.start({ x: "-100vw" });
    }
  }, [isView]);

  return (
    <div id="projects" className="ProjectsContainer">
      <Parallax
        translateY={[-80, 30]}
        easing="easeOutQuad"
        className="my-thing"
        speed={-10}
      >
        <h1 id="projectHeader">MY PROJECTS</h1>
      </Parallax>
      <div ref={ref} className="wrapper">
        <motion.div ref={ref} className="projectImg" animate={anime}>
          <motion.a
            animate={anime}
            className="projectImgLink"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.3 }}
            href="https://cinema-flix.netlify.app/"
            target="_blank"
          >
            <img src="./cinemaflix.png" alt="img" />
          </motion.a>
          <div id="parallax">
            <h1> CinemaFlix</h1>
            <p>A Movie Site </p>
            <div className="flexLink">
              <motion.a
                className="link"
                target="_blank"
                href="https://cinema-flix.netlify.app/"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </motion.a>
              <motion.a target="_blank" href="https://github.com/MayorFalomo/cinemaFlix">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div id="evenImg" className="test" animate={anime}>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://medley-games.netlify.app/"
          >
            <img src="./medleyGames.jpg" alt="img" />
          </motion.a>

          <div className="parallaxText">
            <h1>Medley Games </h1>
            <p>A Game Company Website </p>
            <div className="flexLinks">
              <a target="_blank" href="https://medley-games.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo
              </a>
              <a target="_blank" href="https://github.com/MayorFalomo/Medley-Games">
                {<IoLogoGithub className="githubLink" />} Github
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="projectImg" animate={anime}>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://urban-nft-dashboard.netlify.app/"
          >
            <img src="./urban.jpg" alt="img" />
          </motion.a>

          <div id="parallax">
            <h1>Nft Dashboard </h1>
            <p>A Single Page Nft Dashboard </p>
            <div className="flexLink">
              <a target="_blank" href="https://urban-nft-dashboard.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a target="_blank" href="https://github.com/MayorFalomo/Urban-Nft-Dashboard">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div id="evenImg" className="test" animate={anime}>
          <motion.a
            whileTap={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            href="https://travelbuddy-agency.netlify.app/"
            target="_blank"
          >
            <img src="./travelBuddy.jpg" alt="img" />
          </motion.a>
          <div className="parallaxText">
            <h1>Travel Buddy</h1>
            <p>A Travel Agency Site </p>
            <div className="flexLinks">
              <a target="_blank" href="https://travelbuddy-agency.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a target="_blank" href="https://github.com/MayorFalomo/TravelBuddy">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="projectImg" animate={anime}>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            href="https://orpheus-nft.netlify.app/"
            target="_blank"
          >
            <img src="./orpheus.png" alt="img" />
          </motion.a>

          <div id="parallax">
            <h1>Orpheus </h1>
            <p> Landing Page </p>
            <div className="flexLink">
              <a target="_blank" href="https://orpheus-nft.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a target="_blank" href="https://github.com/MayorFalomo/Orpheus-landing-page">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div id="evenImg" className="test" animate={anime}>
          <motion.a
            whileTap={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            href="https://googlebase.netlify.app/"
            target="_blank"
          >
            <img src="./google.png" alt="img" />
          </motion.a>
          <div className="parallaxText">
            <h1>Google Clone</h1>
            <p>A Search Engine </p>
            <div className="flexLinks">
              <a id="black" target="_blank" href="https://googlebase.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a id="black" target="_blank" href="https://github.com/MayorFalomo/GoogleBase">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="projectImg" animate={anime}>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            href="https://swish-weather-app.netlify.app/"
            target="_blank"
          >
            <img src="./swishUpdated.png" alt="img" />
          </motion.a>

          <div id="parallax">
            <h1>Swish </h1>
            <p> Weather App(Typescript) </p>
<p className="techBro">Contributor: <span ><a  target="_blank" href="https://github.com/temidayo-falomo">  @Temidayo</a></span> </p>
            <div className="flexLink">
              <a target="_blank" href="https://swish-weather-app.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a target="_blank" href="https://github.com/MayorFalomo/Swish-Weather-App">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>

         <motion.div id="evenImg" className="test" animate={anime}>
          <motion.a
            whileTap={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://trivial-quiz-app.netlify.app/"
          >
            <img src="./quiz.png" alt="img" />
          </motion.a>
          <div className="parallaxText">
            <h1>Quiz App</h1>
            <p>A Trivial App(Next Js) </p>
            <div className="flexLinks">
              <a id="black" target="_blank" href="https://trivial-quiz-app.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a id="black" target="_blank" href="https://github.com/MayorFalomo/Quiz-App">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="projectImg" animate={anime}>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://store-bay.netlify.app/"
          >
            <img src="./StoreBay.png" alt="img" />
          </motion.a>

          <div id="parallax">
            <h1>StoreBay </h1>
            <p> Store page (Vue JS) </p>
            <div className="flexLink">
              <a target="_blank" href="https://store-bay.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a target="_blank" href="https://github.com/MayorFalomo/StoreBay">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div id="evenImg" className="test" animate={anime}>
          <motion.a
            whileTap={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href="https://blogaroo.netlify.app/register"
          >
            <img src="./blogaroo.png" alt="img" />
          </motion.a>
          <div className="parallaxText">
            <h1>Blogaroo</h1>
            <p>A Blog Website(MERN project) </p>
            <div className="flexLinks">
              <a id="black" target="_blank" href="https://blogaroo.netlify.app/register">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a id="black" target="_blank" href="https://github.com/MayorFalomo/Quiz-App">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
