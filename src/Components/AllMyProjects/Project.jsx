import React, { useEffect } from "react";
import "../Styles/AllMyProject/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdLogout } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

const Project = (props) => {
  useEffect(() => {
    window.addEventListener("load", function () {
      AOS.init();
    });
  }, []);

  return (
    <div className="projectContain">
      <div className="imgContainer">
        <img
          style={{ width: "100%", borderRadius: "5px" }}
          // className="projectImg"
          src={props.project.projectImg}
        />
        <div className="overLayLeft"></div>
        <div className="Text">
          <div data-aos="fade-up" data-aos-duration="500" className="flexText">
            <p
              onClick={() => {
                props.setOpenModal(true);
                props.setDemoLink(props.project.demo);
              }}
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              {<MdLogout className="netlifyLink" />} Demo
            </p>
            <p
              onClick={() => {
                props.setAboutModal(true);
                props.setSingleProject((prev) => {
                  return {
                    ...prev,
                    projectName: props.project.projectName,
                    projectImg: props.project.projectImg,
                    projectSkill: props.project.skill,
                    aboutProject: props.project.aboutProject,
                    demoLink: props.project.demo,
                    githubLink: props.project.github,
                  };
                });
              }}
            >
              About
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
