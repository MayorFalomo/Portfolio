import React, { useEffect, useState } from "react";
import "../Styles/AboutStyle/Aboutstyle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimatePresence, motion } from "framer-motion";
import Paragraph from "./Paragraph";
import { SplitReveal } from "../SplitText/SplitReveal";
import TextReveal from "../SplitText/TeaxtReveal";

const About = () => {
  const paragraph = `About Me`;

  const [lineHeights, setLineHeights] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 450) {
      setLineHeights(true);
    }
  }, [lineHeights]);

  return (
    <div className="AboutContainer">
      <section id="about" className="aboutSection">
        <div className="about-title">
          {/* <h2 id="about">
            <Paragraph value={paragraph} />
          </h2> */}
          {/* <h2 id="about">About Me </h2> */}
          {/* <SplitReveal>About Me </SplitReveal> */}
          <h2 id="shimmer">About Me </h2>
        </div>

        <div className="myNotes">
          <div className="aboutCardImg">
            <LazyLoadImage
              style={{ backgroundImage: `url(./MeImage.webp)` }}
              className="AboutmeImg"
            >
              {/* <img src="./meImage.svg" alt="img" loading="lazy" /> */}
            </LazyLoadImage>
            <h2>A rare picture of me grinning widely.... </h2>
          </div>
          <div className="aboutBio">
            <div className="aboutCard">
              <h1 className="myself">Bio... </h1>

              <p style={{ lineHeight: lineHeights ? "40px" : "45px" }}>
                {" "}
                My name is Mayowa Falomo a Full Stack Developer based in Nigeria
                , My sole aim is building modern, intuitive, accessible,
                scalable, technical and user friendly sites while also making
                sure the site is optimized for best user experience. I am
                passionate about creating unique site experiences for users to
                help leave a lasting impression about your company, brand or
                product.
              </p>

              <p style={{ lineHeight: lineHeights ? "40px" : "45px" }}>
                As my projects show, i've worked on several projects, building
                out and selectively picking out the best Ui while also paying
                close attention to UX and functionality, I work with libraries
                like React and frameworks like Next J.S, Typescript and CSS
                frameworks like SASS and Styled components well, i'm also
                interested in Technologies like Firebase and i am always looking
                to improve my skillset.{" "}
              </p>

              <p style={{ lineHeight: lineHeights ? "40px" : "45px" }}>
                In my Free time i like to read High Fantasy Novels, Watch a
                movie / series or sometimes videos of food i can only imagine,
                or I learn a new Technology.{" "}
              </p>
              <p>I am currently available for New Opportunities... </p>
            </div>
          </div>
          {/* <div className="aboutCards">
            <h1>Experience</h1>
            <div style={{ marginTop: "10px" }}>
              <p>
                EaseInBiz Automation: Built the entire web page, maintained the
                codebase and ensured responsiveness across all screens.
              </p>
              <p>
                Reyna Hair Salon: Worked as a freelancer, Revamped their entire
                codebase: made it cleaner and more readable{" "}
              </p>
              <p>
                Personal Projects: I have worked on a hosts of personal projects
                spanning a wide spectrum, with real-life use and scenarios for
                the user specifically in mind.
              </p>
            </div>
           
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;

{
  /* <div className="interests">
              <h4>Technologies i'm interested in</h4>
              <div className="tech">
                <span> Three Js</span>
                <span>Python </span>
                <span>Supabase </span>
                <span>Prisma </span>
              </div>
            </div> */
}
