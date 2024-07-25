import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export function SplitReveal({
  children,
  delay = 0.2,
  threshold = 0.1,
  ...rest
}) {
  const [lineHeights, setLineHeights] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 450) {
      setLineHeights(true);
    }
  }, [lineHeights]);

  const [ref, inView] = useInView({
    threshold: 0.05, // Trigger the animation when 50% of the element is in view
    // triggerOnce: true, // Only trigger the animation once
  });

  const controls = useAnimation();

  useEffect(() => {
    // console.log(inView, "inview");
    if (inView) {
      controls.start("visible");
    } else {
      controls.set("hidden");
    }
  }, [inView, controls]);

  let words = children.split(" ");

  return (
    <div>
      {words.map((word, i) => {
        return (
          <div
            ref={ref}
            key={children + i}
            style={{
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            <motion.p
              {...rest}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { y: "100%" },
                visible: (i) => ({
                  y: 0,
                  transition: {
                    delay: i * 0.2,
                  },
                }),
              }}
              style={{
                display: "inline-block",
                willChange: "transform",
                // border: "2px green solid",
              }}
              custom={i}
            >
              {word + (i !== words.length - 1 ? "\u00A0" : "")}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
