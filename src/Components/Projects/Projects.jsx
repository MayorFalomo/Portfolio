import React, { useEffect, useState } from "react";
import "../Styles/Projects/Projects.css";
import { Parallax } from "react-scroll-parallax";
import { MdLogout } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    window.addEventListener("load", function () {
      AOS.init();
    });
  }, []);

  const [readMore, setReadMore] = useState(160);
  const [readLess, setReadLess] = useState(false);
  const [lineHeight, setLineHeight] = useState(false);
  const keep =
    "Keep is Full Stack Notepad web app where users can Create notes, set remainders, add canvas, search and send note to others, translate notes, archive ,trash, pin, label, customize, masonry layouts, multiple select for notes etc. ";
  const Twinkles =
    "Tweeks is a Full-Stack social web app i built using the MENN Stack and firebase, users can real-time message, get notifications, follow and unfollow others, tailor your tweets,retweet, like quote and bookmark, post tweets, reply comments etc.";

  const keepLength = keep.length;
  const length = Twinkles.length;

  // console.log(length);

  const paragraph = `MY PROJECTS`;

  useEffect(() => {
    if (window.innerWidth < 450) {
      setLineHeight(true);
    }
  }, []);

  const [changeTextOnHover, setChangeTextOnHover] = useState(false);

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
            backgroundImage: "url(./keep.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Keep - A Google Notepad </h1>
            <p>
              {keep.slice(0, readMore)}{" "}
              {readLess ? (
                <a
                  onClick={() => {
                    setReadLess(false);
                    setReadMore(150);
                  }}
                >
                  Read less{" "}
                </a>
              ) : (
                <a
                  onClick={() => {
                    setReadMore(keepLength);
                    setReadLess(true);
                  }}
                >
                  ... Read more
                </a>
              )}
            </p>
            <span>
              Next JS, Node Js, MongoDb, Express, Typescript, Firebase, PWA and
              Tailwind and CSS{" "}
            </span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://keep-notepad.vercel.app"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/google-keep"
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
              backgroundImage: "url(./tweeks.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Tweeks - A Twitter Clone</h1>
              <p>
                {Twinkles.slice(0, readMore)}...{" "}
                {readLess ? (
                  <a
                    onClick={() => {
                      setReadLess(false);
                      setReadMore(150);
                    }}
                  >
                    Read less...{" "}
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      setReadMore(length);
                      setReadLess(true);
                    }}
                  >
                    Read more
                  </a>
                )}
              </p>
              <span>
                {" "}
                MongoDb, Express, Typescript, Next JS, Node Js, Firebase, PWA
                and Styled-Components{" "}
              </span>
              <div className="flexLink">
                <a
                  className="link"
                  target="_blank"
                  href="https://tweeks.netlify.app"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  // className="disable"
                  target="_blank"
                  href="https://github.com/MayorFalomo/Twitter-clone"
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
            backgroundImage: "url(./reyna.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Reyna Hair Salon </h1>
            <p>
              I freelanced on a Canadian startup's hair salon website, revamping
              the codebase, updating content, ensuring responsiveness, while
              preserving the original code integrity.
            </p>
            <span>Javascript, HTML and CSS</span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="http://stage.reyna.ca/"
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
              backgroundImage: "url(./easeinbiz.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1> EaseInBiz Automation</h1>
              <p>
                Easeinbiz - a startup based in Nigeria that provides automation
                solutions for businesses, I built the entire page using react,
                It's responsive and optimized on even the smallest devices.
              </p>
              <span>React, Styled-components</span>
              <div className="flexLink">
                <a
                  className="link"
                  target="_blank"
                  href="https://easeinbiz.com"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  // href="https://github.com/MayorFalomo/Blogaroo-FrontEnd"
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
            backgroundImage: "url(./blogaroo.webp)",
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
            <h1> Blogaroo </h1>
            <p>
              A creative Blog Website i built using the MERN Stack, it has all
              CRUD functionalities and added features of likes and comments on
              blog post, editing your profile and making a blog post.
            </p>
            <span>
              {" "}
              MongoDb, Express,Typescript, React, Node Js and Styled-Components
            </span>
            <div className="flexLinks">
              <a
                target="_blank"
                href="https://blogaroo.netlify.app/register"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/MayorFalomo/Blogaroo-FrontEnd"
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
              backgroundImage: "url(./cinemaflix.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Cinemaflix </h1>
              <p>
                A movie hub project using the TMDB API, You can add movies to
                your watchlist, search for any movie, watch trailers for the
                series and browse through movies
              </p>
              <span> React, CSS, API</span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://cinema-flix.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/cinemaFlix"
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
            backgroundImage: "url(./quiz.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Quiz App</h1>
            <p>
              {" "}
              A Trivial App i built using Next Js, it features a countdown
              timer, a leaderboard, a real-time chart, and a one-time
              passwordless login.{" "}
            </p>
            <span>Next JS, Redux, Firebase, Chart Js, CSS </span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://trivial-quiz-app.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/Quiz-App"
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
              backgroundImage: "url(./urban.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Nft Dashboard </h1>
              <p>
                A Single Page Nft Dashboard, It uses local storage to save your
                dark mode or light mode color{" "}
              </p>
              <span>React, CSS</span>
              <div className="flexLink">
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
        </div>

        <div
          className="subProjectLeft"
          style={{
            backgroundImage: "url(./travelBuddy.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Travel Buddy</h1>
            <p>
              {" "}
              A Travel Agency website i built using React also uses react router
              for routing between pages this was my second ever project using
              React{" "}
            </p>
            <span>React, CSS</span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://travelbuddy-agency.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/TravelBuddy"
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
              backgroundImage: "url(./orpheus.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Orpheus </h1>
              <p>A single Landing Page using React</p>
              <span>HTML, React, CSS, API, Firebase </span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://orpheus-nft.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/Orpheus-landing-page"
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
            backgroundImage: "url(./google.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Google Clone</h1>
            <p>
              A Google clone - A mini Search Engine i built using a search
              engine API and firebase for authentication, it works just like
              google.
            </p>
            <span>Next JS, CSS </span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://googlebase.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
                target="_blank"
                href="https://github.com/MayorFalomo/GoogleBase"
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
              backgroundImage: "url(./swishUpdated.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Swish </h1>
              <p>
                Weather app i built using the openweather API and restcountry
                API, I also added a converter so users can get their temperature
                to whatever unit they prefer and also an interactive 3d view of
                the Earth{" "}
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
              <span>Next JS, Typescript, CSS </span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://swish-weather-app.netlify.app"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/Swish-Weather-App"
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
            backgroundImage: "url(./medleyGames.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>Medley Games</h1>
            <p>
              A landing page for a Game website page i built using React and
              CSS, It uses react-router to route to different pages
            </p>
            <span>React, CSS </span>
            <div className="flexLinks">
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

        <div className="subProjectRightCon">
          <div
            className="subProjectRight"
            style={{
              backgroundImage: "url(./StoreBay.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>StoreBay </h1>
              <p>
                An E-commerce site - I built this using Vue Js and styled it
                using Tailwind, the fashion products come from escuelajs Api
                with a filter functionality based on a fashion type.
              </p>
              <span>Vue JS, Tailwind, CSS, API </span>
              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://store-bay.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
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
        <Link style={{ textDecoration: "none" }} to="/project-section">
          <button
            onMouseEnter={() => setChangeTextOnHover(true)}
            onMouseLeave={() => setChangeTextOnHover(false)}
            className="convince"
          >
            {" "}
            {changeTextOnHover ? "Lets go" : "Need more convincing?"}{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
