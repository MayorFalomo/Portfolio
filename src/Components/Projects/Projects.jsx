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
    "Tweeks is a Full-Stack social web app with over 500+ registered users, users can real-time message, get notifications, follow and unfollow others, switch between tweets (see tweets from only your following and tweets for you),retweet, like quote and bookmark, post tweets, reply comments etc.";

  const multistep =
    "Multistep-Form is a (Freelance) project where users fill a multistep form with information like Flight, Iban, email etc. which are all validated before moving to the next step, I made use of Google Map's API, So users can search for their addresses and find their exact address on the map and the marker switches to that point.";
  const ema =
    "EMA Screener (Freelance) is a technical analysis tool where investors can identify potential trends in the stock market and quickly pinpoint stocks that have crossed above or below their EMA, providing valuable insights for making informed investment decisions, Working with Bloombyte Software Agency, I built the frontend from scratch working hand in hand with the backend, testing unit and devops unit, also utilized web-sockets for instant updates.";
  const bankHotel =
    "A creative visual website I built for a mock Hotel called BankHotel, Guests can book hotel rooms with custom specified preferences, Payment integration using Paystack API, an option to download a generated pdf copy containing all your booking Info. I paid particular attention to the performance, code reusability, UI while maintaining a seamless engaging user experience";

  const keepLength = keep.length;
  const tweeks = Twinkles.length;
  const multi = multistep.length;
  const emaLength = ema.length;
  const bankHotelLength = bankHotel.length;

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
                      setReadMore(tweeks);
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
            backgroundImage: "url(./ema.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overLayLeft"></div>
          <div className="parallaxText">
            <h1>EMA Screener </h1>
            <p>
              {ema.slice(0, readMore)}{" "}
              {readLess ? (
                <a
                  onClick={() => {
                    setReadLess(false);
                    setReadMore(160);
                  }}
                >
                  Read less{" "}
                </a>
              ) : (
                <a
                  onClick={() => {
                    setReadMore(emaLength);
                    setReadLess(true);
                  }}
                >
                  ... Read more
                </a>
              )}
            </p>
            {/* <p>
              I freelanced on a Canadian startup's hair salon website, revamping
              the codebase, updating content, ensuring responsiveness, while
              preserving the original code integrity.
            </p> */}
            <span>Next 14 JS, Chakra UI, Tailwind, Framer-Motion, CSS</span>
            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://trend-catcher.netlify.app/"
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
              backgroundImage: "url(./bankHotel.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Bank Hotel</h1>
              <p>
                {" "}
                {bankHotel.slice(0, readMore)}{" "}
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
                      setReadMore(bankHotelLength);
                      setReadLess(true);
                    }}
                  >
                    ... Read more
                  </a>
                )}{" "}
              </p>
              <span>
                Next 14, Typescript, Redux,React Hook form, zod, Node Js,
                MongoDb, Express{" "}
              </span>
              <div className="flexLink">
                <a
                  className="link"
                  target="_blank"
                  href="https://bankhotel-ng.netlify.app"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/BankHotel"
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
            backgroundImage: "url(./lien-bot.webp)",
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
            <h1> Lien-Bot </h1>
            <p>
              Lien bot (FreeLance) is an AI platform where users can chat with a
              bot and based on your answer to the bots questions it comes up
              with a lien document, I built the entire frontend to interact with
              the backend and the bot, The frontend is of course based on
              chatGPT interface.
            </p>
            <span> Next Js, Chakra UI, Tailwind, CSS, AI Bot, API</span>
            <div className="flexLinks">
              <a
                target="_blank"
                href="https://lien-bot.vercel.app"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo
              </a>
              <a target="_blank" href="#" rel="noreferrer">
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
              backgroundImage: "url(./multistep-form.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="overLayRight"></div>
            <div id="parallax">
              <h1>Multistep-Form</h1>

              <p>
                {multistep.slice(0, readMore)}{" "}
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
                      setReadMore(multi);
                      setReadLess(true);
                    }}
                  >
                    ... Read more
                  </a>
                )}
              </p>
              <span>
                Next Js, Chakra UI, Framer-Motion, Google Map API, CSS{" "}
              </span>

              <div className="flexLink">
                <a
                  target="_blank"
                  href="https://netrobe-multistep.netlify.app/"
                  rel="noreferrer"
                >
                  {<MdLogout className="netlifyLink" />} Demo{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/MayorFalomo/multistep"
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
            <h1>Nft Dashboard </h1>
            <p>
              A Single Page Nft Dashboard, It uses local storage to save your
              dark mode or light mode color{" "}
            </p>
            <span>React, CSS</span>

            <div className="flexLinks">
              <a
                id="black"
                target="_blank"
                href="https://urban-nft-dashboard.netlify.app/"
                rel="noreferrer"
              >
                {<MdLogout className="netlifyLink" />} Demo{" "}
              </a>
              <a
                id="black"
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
              <span>React, SASS </span>
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
            <span>HTML, React, CSS, API, Firebase </span>
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
