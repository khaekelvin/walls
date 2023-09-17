import React from "react";
import back from "../images/3rd no back.png";
import back from "../images/3rd no back.png";
import back from "../images/3rd no back.png";
import back from "../images/3rd no back.png";
import back from "../images/3rd no back.png";
import back from "../images/3rd no back.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   // faHouse,
//   // faPaperPlane,
//   faGraduationCap,
//   faChalkboardUser,
//   faCheckToSlot,
//   // faBars,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Landing() {
  return (
    <div className="land">
      <h1 className="land-head">
        Hi, I’m a software engineer and a content creator posting regularly
        about my daily life and projects.
      </h1>

      <section>
        <img className="back" src={back} alt=""></img>
        <img className="back" src={back} alt=""></img>
        <img className="back" src={back} alt=""></img>
        <img className="back" src={back} alt=""></img>
        <img className="back" src={back} alt=""></img>
        <img className="back" src={back} alt=""></img>
      </section>

      <section>
        <p>
          Recently, I have been working on a side project called OneMenu. It’s a
          menu bar app for the Mac.
        </p>
      </section>
    </div>
  );
}

export default Landing;
