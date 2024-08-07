import React from "react";
import "../Styles/Skills/Skillstyle.css";
import html from "./HtmlLogo.svg";
import css from "./cssLogo.svg";
import js from "./jsLogo.svg";
import sass from "./Sass.svg";
import NextJs from "./nextjs.svg";
import vue from "./vue.svg";
import typescript from "./typescript.svg";
import Reacts from "./ReactLogo.svg";
import figma from "./figma.svg";
import styledComponents from "./atom.webp";
import tailwind from "../Skills/tailwind.svg";
import mongodb from "../Skills/mongodb.svg";
import express from "../Skills/express.svg";
import node from "../Skills/nodeJs.svg";
import redux from "../Skills/redux.svg";
import chakra from "../Skills/chakra.svg";
import Skill from "./Skill";
import materialUI from "../Skills/material-ui.svg";
import shad from "../Skills/shad.svg";
import graphql from "../Skills/graphql.svg";
import apollo from "../Skills/apollo.svg";
import { Parallax } from "react-scroll-parallax";
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
    // {
    //   id: 11,
    //   logo: "./github.svg",
    //   name: "GITHUB",
    // },
    {
      id: 12,
      logo: "./git.svg",
      name: "GIT",
    },
    {
      id: 13,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 14,
      logo: mongodb,
      name: "MongoDb",
    },
    {
      id: 15,
      logo: express,
      name: "Express",
    },
    {
      id: 16,
      logo: node,
      name: "NodeJs",
    },
    {
      id: 17,
      logo: redux,
      name: "Redux",
    },
    {
      id: 18,
      logo: chakra,
      name: "Chakra UI",
    },
    {
      id: 19,
      logo: materialUI,
      name: "Material UI",
    },
    {
      id: 20,
      logo: shad,
      name: "ShadCn",
    },
    {
      id: 21,
      logo: graphql,
      name: "GraphQl",
    },
    {
      id: 22,
      logo: apollo,
      name: "Apollo",
    },
  ];

  // const skills = `CORE SKILLS`;
  return (
    <div className="SkillContainer" id="skills" data-scroll-section>
      <h1>
        {/* <Paragraph value={skills} />{" "} */}
        CORE SKILLS
      </h1>
      <Parallax
        easing="ease"
        // easing="easeOutQuad"
        translateX={[-100, 30]}
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
          <div className="atom">
            <img
              className="styled"
              width={"100%"}
              height={"100%"}
              style={{ width: "80px" }}
              src={styledComponents}
              alt=""
            />
            <p>Styled Components </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Skills;
