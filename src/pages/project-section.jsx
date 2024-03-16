import React, { useEffect } from "react";
import Projects from "../Components/Projects/Projects";
import Cursor from "../Components/Cursor/Cursor";
import Navbar from "../Components/Navbar/Navbar";
import Lenis from "@studio-freight/lenis";
import AllMyProjects from "../Components/AllMyProjects/AllMyProjects";
import "../project-section.css";
import GoToTop from "../Components/GoToTop";

const ProjectSection = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="App">
      <Cursor />

      <div className="Project-hero">
        <h1>EXPLORE MY PROJECTS </h1>
      </div>
      <Navbar />
      <AllMyProjects />
      <GoToTop />
    </div>
  );
};

export default ProjectSection;
