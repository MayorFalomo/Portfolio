import React, { useEffect, useRef } from "react";
import Projects from "../Components/Projects/Projects";
import Cursor from "../Components/Cursor/Cursor";
import Navbar from "../Components/Navbar/Navbar";
import Lenis from "@studio-freight/lenis";
import AllMyProjects from "../Components/AllMyProjects/AllMyProjects";
import "../project-section.css";
import GoToTop from "../Components/GoToTop";
import Contact from "../Components/Contact/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { SplitReveal } from "../Components/SplitText/SplitReveal";
const ProjectSection = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const routeVariants = {
    initial: {
      y: "100vh",
      opacity: 0,
    },
    final: {
      y: "0vh",
      opacity: 1,
    },
  };

  const textRef = useRef(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="App"
      >
        <Cursor />
        <Navbar />
        <div className="Project-hero">
          {/* <h1 className="reveal" ref={textRef}>
          EXPLORE MY PROJECTS{" "}
        </h1> */}
          <SplitReveal
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.1,
                },
              }),
            }}
          >
            EXPLORE MY PROJECTS
          </SplitReveal>
        </div>
        <AllMyProjects />
        <div className="rightLight">
          <img src="./leftLight.svg" alt="img" />{" "}
        </div>
        <div className="leftLightening">
          <img src="./EllipseLight.svg" alt="img" />{" "}
        </div>
        <Contact />
        <GoToTop />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectSection;
