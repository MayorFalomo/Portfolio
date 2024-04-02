import React, { useEffect } from "react";
import Projects from "../Components/Projects/Projects";
import Cursor from "../Components/Cursor/Cursor";
import Navbar from "../Components/Navbar/Navbar";
import Lenis from "@studio-freight/lenis";
import AllMyProjects from "../Components/AllMyProjects/AllMyProjects";
import "../project-section.css";
import GoToTop from "../Components/GoToTop";
import Contact from "../Components/Contact/Contact";
import { motion } from "framer-motion";
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="App"
    >
      <Cursor />
      <Navbar />
      <div className="Project-hero">
        <h1>EXPLORE MY PROJECTS </h1>
      </div>
      <AllMyProjects />
      <Contact />
      <GoToTop />
    </motion.div>
  );
};

export default ProjectSection;
