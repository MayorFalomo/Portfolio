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
import { motion, } from "framer-motion";
import { useAnimate, stagger } from "framer-motion";

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);

//   function useMenuAnimation(menuBtn) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     const menuAnimations = menuBtn
//       ? [
//           [
//             "nav",
//             { transform: "translateX(0%)" },
//             { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
//           ],
//           [
//             "li",
//             { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
//             { delay: stagger(0.05), at: "-0.1" }
//           ]
//         ]
//       : [
//           [
//             "li",
//             { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
//             { delay: stagger(0.05, { from: "last" }), at: "<" }
//           ],
//           ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
//         ];

//     animate([...menuAnimations]);
//   }, [menuBtn]);

//   return scope;
// }

//   const scope = useMenuAnimation(menuBtn);


  const variant = {
    open: {
      transition: {
        type: 'spring',
          bounce: 0.25,
        duration: 0.4,
      staggerChildren: 0.07,
      delayChildren: 0.2
      }
  },
  closed: {
    transition: {
        type: 'spring',
        bounce: 0.25,
        duration: 0.4,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
  
  const listItem = {
  open: {
    y: 0,
      opacity: 1,
    scale: 1,
    transition: {
      y: {
                type: 'spring',
        stiffness: 1000,
        velocity: -100
      }
    }
  },
  closed: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      y: {
                type: 'spring',
        stiffness: 1000
      }
    }
  }
};

  const [playSound, setPlaySound] = useState(false);

  const [play, { stop }] = useSound(got);
  const handleClick = () => {
    setPlaySound(!playSound);
  };

  
  return (
    <motion.nav  >
      <motion.div  className="navbar">
        <div className="namesLogo">
          {menuBtn ? (
            <h2 className="activeMayor">Mayowa. </h2>
          ) : (
            <h2 className="inactive">Falomo. </h2>
          )}
        </div>
        <motion.ul
           animate={menuBtn ? "open" : "closed"}
          variants={variant}
          className={menuBtn ? "activeMenu" : "closedMenu"}>
          <AnchorLink href="#about">
            <motion.li
              variants={listItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }} id="firstChild" className="hover-underline-animation">
              ABOUT ME
            </motion.li>
          </AnchorLink>
          <AnchorLink href="#skills">
            <motion.li variants={listItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }} className="hover-underline-animation">SKILLS </motion.li>
          </AnchorLink>
          <AnchorLink href="#projects">
            <motion.li  variants={listItem}  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover-underline-animation">PROJECTS </motion.li>
          </AnchorLink>
          <AnchorLink href="#contact">
            <motion.li  variants={listItem}  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover-underline-animation">CONTACT </motion.li>
          </AnchorLink>
          <a href="https://docs.google.com/document/d/1WcObxVqfzXWQDnYsSRrD8-xWxRTj9K3WITGLP47oa9k/edit?usp=sharing" target='_blank' rel="noreferrer" >
            <motion.li  variants={listItem}  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} className="bidBtn">
              <button className="bidBtn">RESUME </button>
          </motion.li>
          </a>
        </motion.ul>
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
      </motion.div>
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
    </motion.nav>
  );
};

export default Navbar;
