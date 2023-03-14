import React from "react";
import "../Styles/AboutStyle/Aboutstyle.css";


const About = () => {
  return (
    <div className="AboutContainer" data-scroll-section>
      <section className="aboutSection">
        <div className="about-title">
          <h2 id="about">About Me </h2>
        </div>

        <div className="myNotes">
          <div className="aboutCardImg">
            <div className="AboutmeImg">
              <img src="./meImage.svg" alt="img" />
            </div>
            <h2>A rare picture of me grinning widely.... </h2>
          </div>
          <div className="aboutBio">
            <div className="aboutCard">
              <h1 className="myself">Bio... </h1>
              <p>
                {" "}
                My name is Mayowa Falomo a self taught Frontend Developer based
                in Nigeria and a student of the Federal University of Technology
                Akure (FUTA) , My sole aim is building modern, accessible,
                scalable, user friendly sites while also making sure the site is
                optimized for best user experience.
              </p>
              <p>
                With less than a year of intensive coding and As my projects
                show, i've worked on several projects, building out and
                selectively picking out the best Ui while also paying close
                attention to functionality, I work with frameworks like React
                and Typescript also CSS frameworks like SASS and Styled
                components well, i'm also interested in Technologies like
                Firebase and i am always looking to keep improving my skillset.{" "}
              </p>
              <p>
                In my Free time i like to read Fantasy Novels, Watch a new movie
                / series or Learning a new Technology.{" "}
              </p>
              <p>I am currently available for New Oppurtunities... </p>
            </div>
          </div>
          {/* <div className="aboutCard">
            <p>Let's find out shall we??........</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
