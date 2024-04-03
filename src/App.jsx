import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Routes, useLocation } from "react-router-dom";
import ProjectSection from "./pages/project-section";
import Home from "./pages/home";
import Template from "./template";
import { AnimatePresence } from "framer-motion";
import { LocationProvider } from "./Location";

function App() {
  const location = useLocation();

  // console.log(location, "location");
  return (
    <ParallaxProvider>
      <LocationProvider>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/project-section" element={<ProjectSection />} />
        </Routes>
      </LocationProvider>
    </ParallaxProvider>
  );
}

export default App;
