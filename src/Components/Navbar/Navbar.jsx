import React, { useEffect, useState } from "react";
import "../Styles/Navstyle/Navbar.css";
import { CgLoadbarSound } from "react-icons/cg";
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

  // function useMenuAnimation(isOpen) {
  //   const [scope, animate] = useAnimate();

  //   useEffect(() => {
  //     const menuAnimations = isOpen
  //       ? [
  //           [
  //             "ul",
  //             { transform: "translateX(0%)" },
  //             { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
  //           ],
  //           [
  //             "li",
  //             { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
  //             { delay: stagger(0.09), at: "-0.1" },
  //           ],
  //         ]
  //       : [
  //           [
  //             "li",
  //             { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
  //             { delay: stagger(0.09, { from: "last" }), at: "<" },
  //           ],
  //           ["ul", { transform: "translateX(100%)" }, { at: "-0.1" }],
  //         ];

  //     animate([...menuAnimations]);
  //   }, [isOpen]);

  //   return scope;
  // }

  // const scope = useMenuAnimation(isOpen);

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
            <AnchorLink href="#about">
              <li
                style={{
                  display:
                    route.pathname == "/project-section" ? "none" : "flex",
                }}
                className="hover-underline-animation"
              >
                ABOUT ME
              </li>
            </AnchorLink>
            <AnchorLink href="#skills">
              <li
                style={{
                  display:
                    route.pathname == "/project-section" ? "none" : "flex",
                }}
                className="hover-underline-animation"
              >
                SKILLS{" "}
              </li>
            </AnchorLink>
            {/* <Link to="/">
              <li
                style={{
                  display: route.pathname == "/" ? "none" : "flex",
                }}
                className="hover-underline-animation"
              >
                HOME{" "}
              </li>
            </Link> */}
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
            <AnchorLink href="#contact">
              <li className="hover-underline-animation">CONTACT </li>
            </AnchorLink>
            <a
              href="https://drive.google.com/file/d/1JrOKcSVtY5d2_wszlEDM0HQEd38MkPM9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <li className="bidBtn">
                <button className="bidBtn">RESUME </button>
              </li>
            </a>
          </ul>
        </div>

        <ul className="closedMenu">
          {/* <AnchorLink to="/">
            <li id="firstChild" className="hover-underline-animation">
              Home{" "}
            </li>
          </AnchorLink> */}
          <AnchorLink href="#about">
            <li
              style={{
                display: route.pathname == "/project-section" ? "none" : "flex",
              }}
              className="hover-underline-animation"
            >
              ABOUT ME
            </li>
          </AnchorLink>
          <AnchorLink href="#skills">
            <li
              style={{
                display: route.pathname == "/project-section" ? "none" : "flex",
              }}
              className="hover-underline-animation"
            >
              SKILLS{" "}
            </li>
          </AnchorLink>
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
          <AnchorLink href="#contact">
            <li className="hover-underline-animation">CONTACT </li>
          </AnchorLink>
          <a
            href="https://drive.google.com/file/d/1JrOKcSVtY5d2_wszlEDM0HQEd38MkPM9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <li className="bidBtn">
              <button className="bidBtn">RESUME </button>
            </li>
          </a>
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
      <Tippy className="playSound" content="Play Sound">
        <div className="sound">
          {playSound ? (
            <p
              onClick={() => {
                handleClick();
                stop();
              }}
            >
              {<CgLoadbarSound className="playIcon" />}
            </p>
          ) : (
            <p
              onClick={() => {
                handleClick();
                play();
              }}
            >
              {<GiSoundOff className="stopIcon" />}
            </p>
          )}
        </div>
      </Tippy>
    </nav>
  );
};

export default Navbar;
