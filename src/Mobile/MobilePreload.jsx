import "./MobilePreload.css";
import { motion } from "framer-motion";

const MobilePreload = () => {
  return (
    <motion.div className="Title">
      <div className="centered">
        <span className="web" data-aos="fade-up" data-aos-duration="500">
          WEB{" "}
        </span>
        <span className="wizard" data-aos="fade-up" data-aos-duration="500">
          WIZARD{" "}
        </span>
      </div>
    </motion.div>
  );
};

export default MobilePreload;
