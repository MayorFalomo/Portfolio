import React from "react";
import "../Styles/Contact/Contactstyles.css";

const Contact = () => {
  return (
    <div className="ContactContainer">
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
          <a href="https://twitter.com/mayowafalomo1">
            <li className="hover-underline-animation">Twitter </li>
          </a>
          <a href="https://www.linkedin.com/in/mayowa-falomo-908875178/">
            <li className="hover-underline-animation">LinkedIn </li>
          </a>
          <a href="https://github.com/MayorFalomo">
            <li className="hover-underline-animation">GitHub </li>
          </a>
          <a href="mailto:mayorfalomo@gmail.com">
            <li className="hover-underline-animation">Gmail </li>
          </a>
          <a href="https://api.whatsapp.com/send?phone=08178152952">
            <li className="hover-underline-animation">Whatsapp </li>
          </a>
        </ul>
        <p>Designed and Developed By Mayowa &copy; 2022</p>
      </footer>
    </div>
  );
};

export default Contact;
