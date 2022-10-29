import React, { useEffect, useRef, useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { animate, motion, useAnimation, useInView } from "framer-motion";
// import "../Styles/Projects/Projects.css";
const Project = () => {
  //   const [isView, setIsView] = useState(false);

  const ref = useRef();
  const isView = useInView(ref);
  const anime = useAnimation();

  // useEffect(() => {
  //   if (isView) {
  //     anime.start({
  //       x: 0,
  //       transition: {
  //         type: "spring",
  //         duration: 1,
  //         bounce: 0.3,
  //       },

  //     });
  //   } else {
  //     anime.start({ x: "-100vw" });
  //   }
  // }, [isView]);

  // useEffect(() => {
  //   console.log("Element is in view", isView);
  // });

  return (
    <div className="ProjectsContainer">
      <h1 id="projectHeader">PROJECTS</h1>
      <div ref={ref} className="wrapper">
        <motion.div ref={ref} className="projectImg" animate={anime}>
          {" "}
          <motion.a
            className="projectImg"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            href="https://urban-nft-dashboard.netlify.app/"
          >
            <img src="./cinemaflix.png" alt="img" />
            <div className="parallax">
              <h1>CinemaFlix</h1>
              <p>A Movie Site </p>
              <div className="flexLink">
                <a href="https://urban-nft-dashboard.netlify.app/">
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a href="https://github.com/MayorFalomo/Urban-Nft-Dashboard">
                  {<IoLogoGithub className="githubLink" />} Github{" "}
                </a>
              </div>
            </div>
          </motion.a>
        </motion.div>

        <motion.div id="evenImg" animate={anime}>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            href="https://urban-nft-dashboard.netlify.app/"
          >
            <img src="./medleyGames.jpg" alt="img" />
            <div className="parallaxText">
              <h1>Medley Games </h1>
              <p>A Game Company Website </p>
              <div className="flexLink">
                <a href="https://urban-nft-dashboard.netlify.app/">
                  {<MdLogout className="netlifyLink" />} Demo
                </a>
                <a href="https://github.com/MayorFalomo/Urban-Nft-Dashboard">
                  {<IoLogoGithub className="githubLink" />} Github
                </a>
              </div>
            </div>
          </motion.a>
        </motion.div>
        <motion.div className="projectImg" animate={anime}>
          <img src="./urban.jpg" alt="img" />
          <div className="parallax">
            <h1>Nft Dashboard </h1>
            <p>A Single Page Nft Dashboard </p>
            <div className="flexLink">
              <a href="https://urban-nft-dashboard.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a href="https://github.com/MayorFalomo/Urban-Nft-Dashboard">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div id="evenImg" className="projectImg" animate={anime}>
          <img src="./travelBuddy.jpg" alt="img" />
          <div className="parallaxText">
            <h1>Travel Buddy</h1>
            <p>A Travel Agency Site </p>
            <div className="flexLink">
              <a href="https://urban-nft-dashboard.netlify.app/">
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a href="https://github.com/MayorFalomo/Urban-Nft-Dashboard">
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
