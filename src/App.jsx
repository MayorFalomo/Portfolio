import { ParallaxProvider } from "react-scroll-parallax";
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
