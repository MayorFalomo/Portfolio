import React from "react";
import "../Styles/Skills/Skillstyle.css";

const Skill = ({ skill }) => {
  return (
    <div className="mainSkill" data-scroll-section>
      <div className="skillImg">
        <img src={skill.logo} width={"100%"} height={"100%"} alt="skill" />
      </div>
      <p>{skill.name} </p>
    </div>
  );
};

export default Skill;
