import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import About from "./Components/Aboutme/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { useEffect, useState } from "react";
import Cursor from "./Components/Cursor/Cursor";
import { AnimatePresence, easeIn } from "framer-motion";
import { motion } from "framer-motion";
import MobilePreload from "./Mobile/MobilePreload";
import Lenis from "@studio-freight/lenis";
import { Route, Routes } from "react-router-dom";
import ProjectSection from "./pages/project-section";
import Home from "./pages/home";

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/project-section" element={<ProjectSection />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
