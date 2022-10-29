import React, { useEffect } from "react";
import Particle from "../Particle/Particle";
// import "../Styles/Herostyle/Herostyle.css";
import "../Styles/Herostyle/Herostyle.css";
import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Herosection = () => {
  return (
    <div className="HeroContainer" data-scroll-section>
      <div className="HeroCard">
        <p> Hello! , my name is</p>
        <div id="header-text">
          <h1 className="name">Mayowa Falomo.</h1>
          <h1 className="spans">
            {" "}
            <span>&lt;Frontend-Developer/&gt;</span>{" "}
          </h1>
          <em>and...aspiring genius.</em>
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
