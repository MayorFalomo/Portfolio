import React from "react";
import "../Styles/AboutStyle/Aboutstyle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="AboutContainer" data-scroll-section>
      <section className="aboutSection">
        <div className="about-title">
          <h2 id="about">About Me </h2>
        </div>

        <div className="myNotes">
          <div className="aboutCardImg">
            <LazyLoadImage
              style={{ backgroundImage: `url(./photo.jpg)` }}
              className="AboutmeImg">
              {/* <img src="./meImage.svg" alt="img" loading="lazy" /> */}
            </LazyLoadImage>
            <h2>A rare picture of me grinning widely.... </h2>
          </div>
          <div className="aboutBio">
            <div className="aboutCard">
              <h1 className="myself">Bio... </h1>
              <motion.p variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0, type: 'spring' },
              }}
                transition={{ duration: 0.4 }}
                initial='hidden'
                animate='visible' >
                {" "}
                My name is Mayowa Falomo a MERN Stack and FrontEnd Developer based
                in Nigeria , My sole aim is building modern, intuitive, accessible,
                scalable, technical and user friendly sites while also making sure the site is
                optimized for best user experience. I am passionate about creating unique site experiences for users to help leave a lasting impression about your company, brand or product.
              </motion.p>
              <motion.p variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
                transition={{ duration: 0.4 }}
                initial='hidden'
                animate='visible' >
                As my projects
                show, i've worked on several projects, building out and
                selectively picking out the best Ui while also paying close
                attention to UX and functionality, I work with libraries like React and frameworks like Next J.S,
                Typescript and CSS frameworks like SASS and Styled
                components well, i'm also interested in Technologies like
                Firebase and i am always looking to keep improving my skillset.{" "}
              </motion.p>

              
              <motion.p variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
                transition={{ duration: 0.4 }}
                initial='hidden'
                animate='visible' >
                In my Free time i like to read High Fantasy Novels, Watch a movie
                / series or sometimes videos of food i can only imagine, or I Learn a new Technology.{" "}
              </motion.p>
              <motion.p variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
                transition={{ duration: 0.4 }}
                initial='hidden'
                animate='visible' >I am currently available for New Opportunities... </motion.p>
            </div>
          </div>
          {/* <div className="aboutCards">
            <h1>Technologies i am interested in........</h1>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
