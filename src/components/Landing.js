import React from "react";
import back from "../images/4th guy.png";
// import noback from "../images/";
import poback from "../images/—Pngtree—romantic blue wings 3d elements_5492965.png";
import cyback from "../images/—Pngtree—double spiral abstract geometric figure_5852277.png";
// import artback from "../images/Default_artwork_of_tshirt_graphic_design_flat_design_of_one_re_2_ea30a55a-f99b-4631-9102-c2f85a25b052_1.jpg";
// import cenback from "../images/Default_centered_isometric_vector_tshirt_art_ready_to_print_hi_0_acaea9ee-b566-43a9-8ca1-26cd252f47e7_1.jpg";
// import firstback from "../images/first noback.png";
import Footer from "./Footer";
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
      <section className="land-sec">
        <div className="web-design grid">
          <span>
            <h2 className="h1-head">Web Design</h2>
            <p className="p-text">
              As a skilled web designer, I have a keen eye for aesthetics and a
              strong understanding of user experience. I specialize in creating
              visually appealing and user-friendly websites that effectively
              communicate my clients’ brand and message. I am proficient in
              HTML, CSS, and JavaScript, allowing me to bring designs to life
              with interactive elements and smooth animations.
            </p>
            <button>View Project</button>
          </span>
          <img className="back" src={back} alt=""></img>
        </div>

        <div className="app-development grid">
          <img className="back" src={back} alt=""></img>
          <span>
            <h2 className="h1-head">App Development</h2>
            <p className="p-text">
              In the fast-paced world of mobile apps, I offer my expertise in
              app development to create seamless and intuitive user experiences.
              I have a strong foundation in mobile app development frameworks,
              such as React Native and Flutter, allowing me to build
              cross-platform apps efficiently
            </p>
            <button>View Project</button>
          </span>
        </div>

        <div className="animation grid">
          <span>
            <h2 className="h1-head">Animation</h2>
            <p className="p-text">
              Animation brings ideas to life in a captivating and engaging way.
              With my animation skills, I can add that extra touch of magic to
              various projects.
            </p>
            <button>View Project</button>
          </span>
          <img className="back" src={poback} alt=""></img>
        </div>

        <div className="logo-design grid">
          <img className="back" src={cyback} alt=""></img>
          <span>
            <h2 className="h1-head">Logo Design</h2>
            <p className="p-text">
              Logo design is both an art and a science, and I excel in creating
              memorable and impactful logos. I understand the importance of a
              strong brand identity, and my designs reflect that understanding.
            </p>
            <button>View Project</button>
          </span>
        </div>

        {/* <img className="back" src={back} alt=""></img>
        <img className="back" src={noback} alt=""></img>
        <img className="back" src={poback} alt=""></img>
        <img className="back" src={cyback} alt=""></img>
        <img className="back" src={artback} alt=""></img>
        <img className="back" src={cenback} alt=""></img> */}
      </section>

      {/* <section className="land-sec-text">
        <p className="land-text">
          Recently, I have been working on a side project called OneMenu. It’s a
          menu bar app for the Mac.
        </p>
      </section> */}

      <Footer />
    </div>
  );
}

export default Landing;
