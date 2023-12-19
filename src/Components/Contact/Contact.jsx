import React from "react";
import "../Styles/Contact/Contactstyles.css";

const Contact = () => {
  const paragraph = `-LET'S WORK TOGETHER-`;
  return (
    <div id="contact" className="ContactContainer">
      <div className="work">
        <div className="content">
          <h1> CONTACT </h1>
          <h1> CONTACT </h1>
          <p>-LET'S WORK TOGETHER- </p>
          <div className="email">
            <p>mayorfalomo@gmail.com </p>{" "}
          </div>
        </div>
      </div>
      <footer id="hire">
        <ul>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mayowafalomo1"
          >
            <li className="hover-underline-animation">Twitter </li>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mayowa-falomo-908875178/"
          >
            <li className="hover-underline-animation">LinkedIn </li>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MayorFalomo"
          >
            <li className="hover-underline-animation">GitHub </li>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:mayorfalomo@gmail.com"
          >
            <li className="hover-underline-animation">Gmail </li>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=08178152952"
          >
            <li className="hover-underline-animation">Whatsapp </li>
          </a>
        </ul>
        <p>Designed and Developed By Mayowa &copy; 2022</p>
      </footer>
    </div>
  );
};

export default Contact;
