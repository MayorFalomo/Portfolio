import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import About from "./Components/Aboutme/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { useEffect, useState } from "react";
import useLocoScroll from "./Components/Scroll/LocoScroll";
import Preload from "./Components/Preload/Preload";
import Cursor from "./Components/Cursor/Cursor";
function App() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  useLocoScroll();

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  }, []);
  return (
    <ParallaxProvider>
      {!completed ? (
        <div className="contain">
          {!loading ? (
            <div className="loader">
              <Preload />
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
            <div className="App" data-scroll-container>
           <Cursor/>
            <Navbar />
            <Herosection />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </ParallaxProvider> 
  );
}

export default App;
