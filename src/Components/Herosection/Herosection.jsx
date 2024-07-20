import React from "react";
// import Particle from "../Particle/Particle";
import "../Styles/Herostyle/Herostyle.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
const Herosection = () => {
  return (
    <AnimatePresence>
      <div className="HeroContainer">
        <div className="HeroCard">
          <p> Hello! , my name is</p>
          <div id="header-text">
            <h1 className="name">Mayowa Falomo.</h1>
            <h1 className="spans">
              {" "}
              <span>&lt;Full Stack Developer/&gt;</span>{" "}
            </h1>
            <em>and...Web Wizard.</em>
          </div>

          <div className="imgBtn">
            {/* <AnchorLink href="#hire">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src="./contactBtn.svg"
                alt="img"
              />
            </AnchorLink> */}
            {/* <AnchorLink href="#projects">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src="./ProjectsBtn.svg"
                alt="img"
              />
            </AnchorLink> */}
            <AnchorLink href="#hire">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="contactMeBtn"
              >
                <span>CONTACT ME</span>{" "}
              </motion.button>
            </AnchorLink>
            <AnchorLink href="#projects">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="GoToMyProjectsBtn"
              >
                <span>PROJECTS</span>{" "}
                <span>
                  <FaAngleDown className="projectsIconDown" />{" "}
                </span>
              </motion.button>
            </AnchorLink>
          </div>
        </div>
        <div className="leftLight">
          <img src="./leftLight.svg" alt="img" />{" "}
        </div>
        {/* <Particle /> */}

        <div className="leftLightening">
          <img src="./EllipseLight.svg" alt="img" />{" "}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Herosection;
