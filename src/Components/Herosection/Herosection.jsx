import React from "react";
import Particle from "../Particle/Particle";
import "../Styles/Herostyle/Herostyle.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
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
          <AnchorLink href="#hire">
            <img src="./contactBtn.svg" alt="img" />
          </AnchorLink>
          <AnchorLink href="#projects">
            <img src="./ProjectsBtn.svg" alt="img" />
          </AnchorLink>
          {/* <button className="contactMeBtn"> Contact me</button> */}
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
  );
};

export default Herosection;
