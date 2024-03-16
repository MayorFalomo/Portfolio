import React from "react";
import "./AboutProject.css";
import { IoLogoGithub } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
const AboutModal = (props) => {
  return (
    <div className="aboutModalCon">
      <div className="projectImage">
        <img
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          src={props.singleProject.projectImg}
          alt="img"
        />
      </div>
      <div className="aboutProject">
        <p className="projectName">
          Name: <span>{props.singleProject.projectName}</span>{" "}
        </p>
        <h2 className="" style={{ textAlign: "center", color: "#292f3dde" }}>
          Skills{" "}
        </h2>
        <p className="aboutText">{props.singleProject.projectSkill} </p>
        <h2 style={{ textAlign: "center", color: "#292f3dde" }}> About</h2>

        <p className="aboutText">{props.singleProject.aboutProject} </p>
        <h2 style={{ textAlign: "center", color: "#292f3dde" }}>Links </h2>

        <div className="links">
          <p className="aboutLinks">
            {" "}
            {<MdLogout className="netlifyLink" />}
            Demo:
            <a
              target="_blank"
              href={`${props.singleProject.demoLink}`}
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              {props.singleProject.demoLink}{" "}
            </a>{" "}
          </p>
          <p className="aboutLinks">
            {<IoLogoGithub className="githubLink" />} Github:{" "}
            <a
              target="_blank"
              href={`${props.singleProject.githubLink}`}
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              {props.singleProject.githubLink}{" "}
            </a>{" "}
          </p>
        </div>
        <p className="lastIntro">
          Built by{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            <a
              target="_blank"
              href="https://github.com/Mayorfalomo"
              rel="noreferrer"
            >
              Mayowa Falomo{" "}
            </a>
          </span>{" "}
          A.K.A <span className="codeName"> Web Wizard </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
