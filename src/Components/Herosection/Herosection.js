import React from "react";
import Particle from "../Particle/Particle";
import "../Styles/Herostyle/Herostyle.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";

const Herosection = () => {

  return (
    <div className="HeroContainer" data-scroll-section>
      <div className="HeroCard">
        <p> Hello! , my name is</p>
        <div id="header-text">
          <motion.h1 variants={{
        hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, type: 'spring' },
          }}
        transition={{duration: 0.4}}
        initial='hidden'
        animate='visible' className="name">Mayowa Falomo.</motion.h1>
          <motion.h1 variants={{
        hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
        transition={{duration: 0.4}}
        initial='hidden'
        animate='visible' className="spans">
            {" "}
            <span>&lt;MERN Stack Developer/&gt;</span>{" "}
          </motion.h1>
          <em>and...Web Wizard.</em>
        </div>

        <div className="imgBtn">
          <AnchorLink href="#hire">
            <img src="./contactBtn.svg" alt="img" />
          </AnchorLink>
          <AnchorLink href="#projects">
            <img src="./projectsBtn.svg" alt="img" />
          </AnchorLink>
        </div>
      </div>
      <div className="leftLight">
        <img src="./leftLight.svg" alt="img" />{" "}
      </div>
      <Particle />

      <div className="leftLightening">
        <img src="./EllipseLight.svg" alt="img" />{" "}
      </div>
    </div>
  );
};

export default Herosection;
