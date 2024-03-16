import "../App.css";
import Lenis from "@studio-freight/lenis";
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Cursor from "../Components/Cursor/Cursor";
import Navbar from "../Components/Navbar/Navbar";
import Herosection from "../Components/Herosection/Herosection";
import About from "../Components/Aboutme/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import MobilePreload from "../Mobile/MobilePreload";

const Home = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [completed, setCompleted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 2000);
  }, []);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  useEffect(() => {
    handleResize(); // Check window.innerWidth initially
  }, [screenSize]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCompleted(true);
  //   }, 2000);
  // }, []);

  const handleResize = () => {
    if (screenSize.width < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // const location = useLocation();
  return (
    <ParallaxProvider>
      {completed ? (
        <div>
          <div className="App">
            <Cursor />
            <Navbar />
            <Herosection />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      ) : (
        <div>
          <MobilePreload />
        </div>
      )}
    </ParallaxProvider>
  );
};

export default Home;
