import React, { useEffect } from "react";
import "../Styles/Projects/Projects.css";
import { Parallax } from "react-scroll-parallax";
import { MdLogout } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    window.addEventListener("load", function () {
      AOS.init();
    });
  }, []);

  const paragraph = `MY PROJECTS`;

  return (
    <div id="projects" className="ProjectsContainer">
      <Parallax
        translateY={[-80, 30]}
        easing="easeOutQuad"
        className="my-thing"
        speed={-10}
      >
        {/* <h1 id="projectHeader">
          <Paragraph value={paragraph} />
        </h1> */}
        <h1 id="projectHeader">MY PROJECTS</h1>
      </Parallax>

      <div className="projectWrapper">
        <div
          className="subProjectLeft"
          data-aos="fade-up"
          data-aos-duration="500"
          style={{
            backgroundImage: "url(./tweeks.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Tweeks - A Twitter Clone </h1>
            <p>
              Tweeks is a Full-Stack social web app i built using the MENN Stack
              and firebase, users can real-time message, get notifications,
              retweet, like, quote and bookmark tweets, post tweets, like and
              reply comments it has all CRUD functionalities
            </p>
            <span>
              MongoDb, Express, Typescript, Next JS, Node Js, Firebase, PWA and
              Styled-Components{" "}
            </span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://tweeks.netlify.app"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/Twitter-clone"
                rel="noreferrer"
              >
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="subProjectRightCon">
          <div
            className="subProjectRight"
            data-aos="fade-up"
            data-aos-duration="500"
            style={{
              backgroundImage: "url(./reyna.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1> Reyna Hair salon </h1>
              <p>
                Reyna Hair Salon is a hair styling salon website for a Canadian
                based startup, as a freelancer i worked on the entire website,
                revamped the entire messy codebase and changed all the contents,
                I worked on the responsiveness while also maintaining the
                original code so nothing breaks.
              </p>
              <span>Javascript, HTML and CSS</span>
              <div className="flexLink">
                <a
                  className="link"
                  target="_blank"
                  href="http://stage2.reyna.ca/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  className="disable"
                  target="_blank"
                  // href="https://github.com/MayorFalomo/Blogaroo-FrontEnd"
                  rel="noreferrer"
                  // style="pointer: none"
                >
                  {<IoLogoGithub className="githubLink" />} Github{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="subProjectLeft"
          data-aos="fade-up"
          data-aos-duration="500"
          style={{
            backgroundImage: "url(./easeinbiz.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>EaseInBiz Automation </h1>
            <p>
              Easeinbiz - a startup based in Nigeria that provides automation
              solutions for businesses, I built the entire page using react,
              It's responsive on even the smallest devices and optimized on all
              devices.
            </p>
            <span>React, Styled-components</span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://easeinbiz.com"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                className="disable"
                id="black"
                target="_blank"
                // href="https://github.com/MayorFalomo/Twitter-clone"
                rel="noreferrer"
              >
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="subProjectRightCon">
          <div
            className="subProjectRight"
            data-aos="fade-up"
            data-aos-duration="500"
            style={{
              backgroundImage: "url(./blogaroo.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1> Blogaroo</h1>
              <p>
                A creative Blog Website i built using the MERN Stack, it has all
                CRUD functionalities and added features of likes and comments on
                blog post, editing your profile and making a blog post.
              </p>
              <span>
                MongoDb, Express,Typescript, React, Node Js and
                Styled-Components{" "}
              </span>
              <div className="flexLink">
                <a
                  className="link"
                  target="_blank"
                  href="https://blogaroo.netlify.app/register"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/Blogaroo-FrontEnd"
                  rel="noreferrer"
                >
                  {<IoLogoGithub className="githubLink" />} Github{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="subProjectLeft"
          style={{
            backgroundImage: "url(./cinemaflix.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1> CinemaFlix </h1>
            <p>
              A movie hub project using the TMDB API, You can add movies to your
              watchlist, search for any movie, watch trailers for the series and
              browse through movies{" "}
            </p>
            <span>React, CSS, API </span>
            <div className="flexLinks">
              <a
                target="_blank"
                href="https://cinema-flix.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/MayorFalomo/cinemaFlix"
                rel="noreferrer"
              >
                {<IoLogoGithub className="githubLink" />} Github
              </a>
            </div>
          </div>
        </div>

        <div className="subProjectRightCon">
          <div
            className="subProjectRight"
            data-aos="fade-up"
            data-aos-duration="500"
            style={{
              backgroundImage: "url(./medleyGames.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Medley Games </h1>
              <p>
                A landing page for a Game website page i built using React and
                CSS, It uses react-router to route to different pages
              </p>
              <span> React, CSS</span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://medley-games.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/Medley-Games"
                  rel="noreferrer"
                >
                  {<IoLogoGithub className="githubLink" />} Github{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="subProjectLeft"
          style={{
            backgroundImage: "url(./urban.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Nft Dashboard</h1>
            <p>
              A Single Page Nft Dashboard, It uses local storage to save your
              dark mode or light mode color{" "}
            </p>
            <span>React, CSS </span>
            <div className="flexLinks">
              <a
                target="_blank"
                href="https://urban-nft-dashboard.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                target="_blank"
                href="https://github.com/MayorFalomo/Urban-Nft-Dashboard"
                rel="noreferrer"
              >
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="subProjectRightCon">
          <div
            className="subProjectRight"
            style={{
              backgroundImage: "url(./travelBuddy.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Travel Buddy </h1>
              <p>
                A Travel Agency website i built using React also uses react
                router for routing between pages this was my second ever project
                using React{" "}
              </p>
              <span>React, CSS</span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://travelbuddy-agency.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/TravelBuddy"
                  rel="noreferrer"
                >
                  {<IoLogoGithub className="githubLink" />} Github{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="subProjectLeft"
          style={{
            backgroundImage: "url(./orpheus.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Orpheus</h1>
            <p>A single Landing Page using React </p>
            <span>React, SASS</span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://orpheus-nft.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/Orpheus-landing-page"
                rel="noreferrer"
              >
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="subProjectRightCon">
          <div
            className="subProjectRight"
            style={{
              backgroundImage: "url(./google.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Google Clone </h1>
              <p>
                {" "}
                Google clone - A Search Engine i built using the programming
                search engine API and firebase for authentication, it works just
                like google{" "}
              </p>
              <span>HTML, React, CSS, API, Firebase </span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://googlebase.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/GoogleBase"
                  rel="noreferrer"
                >
                  {<IoLogoGithub className="githubLink" />} Github{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="subProjectLeft"
          style={{
            backgroundImage: "url(./swishUpdated.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Swish</h1>
            <p>
              Weather app i built using the openweather API and restcountry API,
              I also added a converter so users can get their temperature to
              whatever unit they prefer and also an interactive 3d view of the
              Earth{" "}
              <a
                target="_blank"
                href="https://github.com/temidayo-falomo"
                rel="noreferrer"
              >
                {" "}
                @Temidayo
              </a>{" "}
              also contributed to the UI{" "}
            </p>
            <span>Next JS, CSS </span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://swish-weather-app.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/Swish-Weather-App"
                rel="noreferrer"
              >
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="subProjectRightCon">
          <div
            className="subProjectRight"
            style={{
              backgroundImage: "url(./quiz.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Quiz App </h1>
              <p>
                A Trivial App i built using Next Js, The inspiration for this
                was to model something after my University CBT app but using
                trivial questions instead{" "}
              </p>
              <span>Next JS, CSS </span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://trivial-quiz-app.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/Quiz-App"
                  rel="noreferrer"
                >
                  {<IoLogoGithub className="githubLink" />} Github{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="subProjectLeft"
          style={{
            backgroundImage: "url(./StoreBay.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>StoreBay</h1>
            <p>
              {" "}
              An E-commerce site - My first Vue Js project, styled using
              Tailwind, the challenge here was using two new technologies for
              the first time and building something with it, the fashion
              products come from escuelajs Api.{" "}
            </p>
            <span>Next JS, CSS </span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://store-bay.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/StoreBay"
                rel="noreferrer"
              >
                {<IoLogoGithub className="githubLink" />} Github{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
