import React, { useEffect } from "react";
import "./MobilePreload.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { SplitReveal } from "../Components/SplitText/SplitReveal";

const MobilePreload = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="preload"
        className="Title"
      >
        <div className="centered">
          {/* <SplitReveal>WEB WIZARD</SplitReveal> */}
          <span className="web" data-aos="fade-up" data-aos-duration="500">
            WEB{" "}
          </span>
          <span className="wizard" data-aos="fade-up" data-aos-duration="500">
            WIZARD{" "}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobilePreload;
