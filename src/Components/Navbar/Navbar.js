import React, { useState } from "react";
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

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const [playSound, setPlaySound] = useState(false);
  const [play, { stop }] = useSound(got);
  const handleClick = () => {
    setPlaySound(!playSound);
  };

  return (
    <nav data-scroll-section>
      <div className="navbar">
        <div className="namesLogo">
          {menuBtn ? (
            <h2 className="activeMayor">Mayowa. </h2>
          ) : (
            <h2 className="inactive">Falomo. </h2>
          )}
        </div>
        <ul className={menuBtn ? "activeMenu" : "closedMenu"}>
          <AnchorLink href="#about">
            <li id="firstChild" className="hover-underline-animation">
              ABOUT ME
            </li>
          </AnchorLink>
          <AnchorLink href="#skills">
            <li className="hover-underline-animation">SKILLS </li>
          </AnchorLink>
          <AnchorLink href="#projects">
            <li className="hover-underline-animation">PROJECTS </li>
          </AnchorLink>
          <AnchorLink href="#hire">
            <li className="bidBtn">
              <button className="bidBtn">HIRE ME </button>
            </li>{" "}
          </AnchorLink>
        </ul>
        <div className="MenuDiv">
          {menuBtn ? (
            <li onClick={() => setMenuBtn(!menuBtn)}>
              {<FaTimes className="times" />}{" "}
            </li>
          ) : (
            <li onClick={() => setMenuBtn(!menuBtn)} className="burger">
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
              {<GiSoundOff className="stopIcon" />} {/* </Tippy> */}
            </p>
          )}
        </div>
      </Tippy>
    </nav>
  );
};

export default Navbar;
