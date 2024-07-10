import React, { useEffect, useState } from "react";
import "../Styles/Navstyle/Navbar.css";
import { GiSoundOff } from "react-icons/gi";
import useSound from "use-sound";
import got from "./got.mp3";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [playSound, setPlaySound] = useState(false);

  const [play, { stop }] = useSound(got);

  const handleClick = () => {
    setPlaySound(!playSound);
  };

  const route = useLocation();

  return (
    <nav>
      <div className="navbar">
        <div className="namesLogo">
          {isOpen ? (
            <h2 className="activeMayor">Mayowa. </h2>
          ) : (
            <h2 className="inactive">Falomo. </h2>
          )}
        </div>

        <div>
          <ul className={isOpen ? "navActive" : "inActiveNav"}>
            <li
              style={{
                display: route.pathname == "/project-section" ? "none" : "flex",
              }}
              className="hover-underline-animation"
            >
              <AnchorLink href="#about">ABOUT ME</AnchorLink>
            </li>
            <li
              style={{
                display: route.pathname == "/project-section" ? "none" : "flex",
              }}
              className="hover-underline-animation"
            >
              <AnchorLink href="#skills">SKILLS </AnchorLink>
            </li>

            <li
              style={{
                display: route.pathname == "/" ? "none" : "flex",
              }}
              className="hover-underline-animation"
            >
              <Link to="/">HOME</Link>
            </li>
            <li className="hover-underline-animation">
              <Link to="/project-section">PROJECTS</Link>
            </li>
            <li className="hover-underline-animation">
              <AnchorLink href="#contact">CONTACT</AnchorLink>
            </li>
            <li className="bidBtn">
              <a
                href="https://drive.google.com/file/d/1CJGtFzpka_IFwGS3l9AW7iGhOnbQI4UG/view?usp=sharing"
                // href="https://drive.google.com/file/d/1JrOKcSVtY5d2_wszlEDM0HQEd38MkPM9/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bidBtn">RESUME </button>
              </a>
            </li>
          </ul>
        </div>

        <ul className="closedMenu">
          <li
            style={{
              display: route.pathname == "/project-section" ? "none" : "flex",
            }}
            className="hover-underline-animation"
          >
            <AnchorLink href="#about">ABOUT ME</AnchorLink>
          </li>
          <li
            style={{
              display: route.pathname == "/project-section" ? "none" : "flex",
            }}
            className="hover-underline-animation"
          >
            <AnchorLink href="#skills">SKILLS </AnchorLink>
          </li>
          <Link
            style={{
              display: route.pathname == "/" ? "none" : "flex",
            }}
            to="/"
          >
            <li className="hover-underline-animation">HOME </li>
          </Link>
          <Link to="/project-section">
            <li className="hover-underline-animation">PROJECTS </li>
          </Link>
          <li className="hover-underline-animation">
            <AnchorLink href="#contact">CONTACT</AnchorLink>
          </li>

          <li className="bidBtn">
            <a
              href="https://drive.google.com/file/d/1CJGtFzpka_IFwGS3l9AW7iGhOnbQI4UG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bidBtn">RESUME </button>
            </a>
          </li>
        </ul>
        <div className="MenuDiv">
          {isOpen ? (
            <li className="times" onClick={() => setIsOpen(false)}>
              {<FaTimes />}{" "}
            </li>
          ) : (
            <li onClick={() => setIsOpen(true)} className="burger">
              {<RiMenu3Fill />}{" "}
            </li>
          )}
        </div>
      </div>
      <div className="sound">
        {playSound ? (
          <Tippy placement="bottom" content="Stop playing">
            <p
              onClick={() => {
                handleClick();
                stop();
              }}
              className="playing"
            >
              <i className="gg-loadbar-sound"></i>
              {/* {<CgLoadbarSound className="playIcon" />} */}
            </p>
          </Tippy>
        ) : (
          <Tippy placement="bottom" content="Play Sound">
            <p
              onClick={() => {
                handleClick();
                play();
              }}
            >
              {<GiSoundOff className="stopIcon" />}
            </p>
          </Tippy>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
