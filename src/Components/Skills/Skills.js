import React from "react";
import "../Styles/Skills/Skillstyle.css";
import html from "./HtmlLogo.svg";
import css from "./cssLogo.svg";
import js from "./jsLogo.svg";
import sass from "./Sass.svg";
import NextJs from "./nextjs.svg";
import vue from "./vue.svg"
import typescript from "./typescript.svg";
import Reacts from "./ReactLogo.svg";
import Skill from "./Skill";
import { Parallax } from "react-scroll-parallax";
import figma from "./figma.svg";
import atom from './atom.png'

const Skills = () => {
  const Logos = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "JAVASCRIPT",
    },
    {
      id: 4,
      logo: sass,
      name: "SASS",
    },
    {
      id: 5,
      logo: Reacts,
      name: "REACT JS",
    },
    {
      id: 6,
      logo: typescript,
      name: "TYPESCRIPT",
    },
    {
      id: 7,
      logo: NextJs,
      name: "Next JS",
    },
    {
      id: 8,
      logo: vue,
      name: "Vue JS",
    },
    {
      id: 9,
      logo: figma,
      name: "FIGMA",
    },
    {
      id: 10,
      logo: "./firebase.svg",
      name: "FIREBASE",
    },
    {
      id: 11,
      logo: "./github.svg",
      name: "GITHUB",
    },
    {
      id: 12,
      logo: "./git.svg",
      name: "GIT",
    },
  ];

  return (
    <div className="SkillContainer" id="skills" data-scroll-section>
      <h1> CORE SKILLS</h1>
      <Parallax
        easing="easeOutQuad"
        translateX={[-50, 30]}
        className="my-thing"
      >
        <div className="skillCard">
          {Logos.map((skill) => {
            return (
              <div key={skill.id} className="skill-logos">
                <Skill skill={skill} />
              </div>
            );
          })}
        <img className="atom" src={atom} alt="" />
        </div>
      </Parallax>
    </div>
  );
};

export default Skills;
