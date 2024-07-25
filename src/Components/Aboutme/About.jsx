import React, { useEffect, useState } from "react";
import "../Styles/AboutStyle/Aboutstyle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  const paragraph = `About Me`;

  const [lineHeights, setLineHeights] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 450) {
      setLineHeights(true);
    }
  }, [lineHeights]);

  const image = {
    src: "./myPic.webp",
    alt: "About Me",
    width: "100%",
    height: "100%",
  };

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
              alt={image.alt}
              height={image.height}
              src={image.src} // use normal <img> attributes as props
              width={image.width}
              effect="blur"
              // wrapperProps={{
              //   // If you need to, you can tweak the effect transition using the wrapper style.
              //   style: { transitionDelay: "0.5s" },
              // }}
            />

            <h2>A rare picture of me grinning widely.... </h2>
          </div>
          <div className="aboutBio">
            <div className="aboutCard">
              <h1 className="myself">Bio... </h1>

              <p style={{ lineHeight: lineHeights ? "40px" : "45px" }}>
                {" "}
                My name is Mayowa Falomo, I'm a Frontend Developer whose sole
                aim is building modern, intuitive, user accessible, scalable,
                technical and user friendly websites and web-apps, while
                ensuring the site is optimized for best user experience. I am
                passionate about creating unique experiences for users to help
                leave a lasting impression about your company, brand or product.
              </p>

              <p style={{ lineHeight: lineHeights ? "40px" : "45px" }}>
                As my projects show, I've worked actively on several projects,
                building out and selectively picking out the best UI while also
                paying close attention to UX and functionality, I work with
                libraries like React and frontend frameworks like Next J.S, Vue
                and CSS frameworks like Tailwind and Chakra well, I'm also
                interested in Technologies like Firebase, Prisma and I am always
                looking to improve my skillset.{" "}
              </p>

              <p style={{ lineHeight: lineHeights ? "40px" : "45px" }}>
                In my Free time I like to read High Fantasy Novels, Watch a
                movie / series or watch food blogs or you catch me always
                learning something new.{" "}
              </p>
              <p style={{ lineHeight: lineHeights ? "40px" : "45px" }}>
                So whether it's a new project, upgrading an existing one, fresh
                eye for your UI, finding a stubborn bug in your application or
                you just want to say "Hello!", Shoot me a DM, I reply lightening
                fast ⚡.{" "}
              </p>
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
