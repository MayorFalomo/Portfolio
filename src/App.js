import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import About from "./Components/Aboutme/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { useEffect, useState } from "react";
import Preload from "./Components/Preload/Preload";
import Cursor from "./Components/Cursor/Cursor";
import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion'
import MobilePreload from "./Mobile/MobilePreload";
import Lenis from "@studio-freight/lenis";

function App() {
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
      height: window.innerHeight
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
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
    const lenis = new Lenis()
    
    function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  }, [])
 
    

  return (
    <AnimatePresence mode="wait" >
      <ParallaxProvider>
             {completed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="App" data-scroll-container>
              <Cursor />
              <Navbar />
              <Herosection />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </div>
          </motion.div>
        ) : (
          <>
            {isMobile ? (
              <MobilePreload />
            ) : (
              <MobilePreload />
            )}
          </>
        )}
      </ParallaxProvider> 
      </AnimatePresence>
  );
}

export default App;
