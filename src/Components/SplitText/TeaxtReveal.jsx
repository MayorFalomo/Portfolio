import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TextReveal = ({ children, threshold = 0.5 }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  const [lineHeights, setLineHeights] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 450) {
      setLineHeights(true);
    }
  }, [lineHeights]);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        if (isVisible) {
          controls.start((i) => ({
            y: "0%",
            transition: {
              delay: i * 0.1,
              duration: 0.6,
              ease: "easeOut",
            },
          }));
        } else {
          controls.start((i) => ({
            y: "100%",
            transition: {
              delay: i * 0.1,
              duration: 0.6,
              ease: "easeOut",
            },
          }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={(i) => ({ y: "100%" })}
      animate={controls}
      style={{
        overflow: "hidden",
        display: "inline-block",
        marginRight: "0.25em",
      }}
    >
      {children.split(" ").map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          style={{
            display: "inline-block",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
