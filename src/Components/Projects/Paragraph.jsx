import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import "../Styles/AboutStyle/Aboutstyle.css";
const Paragraph = ({ value }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  //   console.log(value, "Value present");

  const words = value.split(" ");

  //   console.log(words, "Words present");

  return (
    <p ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            range={[start, end]}
            word={word}
            progress={scrollYProgress}
          >
            {word}{" "}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress, word }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const characters = word.split("");
  //   const characters = String(children).split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;
  return (
    <span className="word">
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        // console.log([start, end]);
        return (
          <Character
            character={character}
            key={i}
            range={[start, end]}
            progress={progress}
          >
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="shadow">{children} </span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
export default Paragraph;
