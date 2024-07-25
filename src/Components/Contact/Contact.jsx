import React from "react";
import "../Styles/Contact/Contactstyles.css";
import { SplitReveal } from "../SplitText/SplitReveal";
import { useScramble } from "use-scramble";
const Contact = () => {
  const paragraph = `-LET'S WORK TOGETHER-`;
  // hook returns a ref
  const { ref, replay } = useScramble({
    text: "-LET'S WORK TOGETHER-",
    speed: 0.4,
    tick: 0.5,
    step: 1,
    scramble: 4,
    seed: 0,
  });
  return (
    <div id="contact" className="ContactContainer">
      <div className="work">
        <div className="content">
          <h1> CONTACT </h1>
          <h1> CONTACT </h1>
          <p ref={ref} onMouseOver={replay} />
          {/* <p>-LET'S WORK TOGETHER- </p> */}
          <div className="email">
            <p>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:mayorfalomo@gmail.com"
              >
                {" "}
                mayorfalomo@gmail.com
              </a>{" "}
            </p>{" "}
          </div>
        </div>
      </div>
      <footer id="hire">
        <ul>
          <li className="hover-underline-animation">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/mayowafalomo1"
            >
              Twitter
            </a>
          </li>

          <li className="hover-underline-animation">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mayowa-falomo-908875178/"
            >
              LinkedIn
            </a>
          </li>

          <li className="hover-underline-animation">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MayorFalomo"
            >
              GitHub
            </a>
          </li>

          <li className="hover-underline-animation">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:mayorfalomo@gmail.com"
            >
              Gmail
            </a>
          </li>

          <li className="hover-underline-animation">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=08178152952"
            >
              Whatsapp
            </a>
          </li>
        </ul>
        <SplitReveal>Designed and Developed By Mayowa &copy; 2022</SplitReveal>
        {/* <p>Designed and Developed By Mayowa &copy; 2022</p> */}
      </footer>
    </div>
  );
};

export default Contact;
