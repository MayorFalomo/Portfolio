import React from "react";
import "./ProjectModal.css";

const ProjectModal = (props) => {
  return (
    <div className="projectModalCon">
      <iframe
        src={`${props.demoLink}`}
        width="100%"
        height="100%"
        allowFullScreen
      >
        <p>
          <a href="https://mayowa-falomo.netlify.app">
            Fallback link for browsers that don't support iframes
          </a>
        </p>
      </iframe>
    </div>
  );
};

export default ProjectModal;
