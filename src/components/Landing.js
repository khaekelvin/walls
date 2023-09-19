import React from "react";
import back from "../images/Default_A_detailed_illustration_a_Dead_Skull_wearing_trendy_su_0_911ddbe9-2dee-4f31-a929-0622b2c9d505_1.jpg";
import noback from "../images/Default_Artwork_for_t_shirt_graphic_of_majestic_vibrant_color_0_a14d9b4a-efa3-4bc2-be74-9ed2c62fea83_1.jpg";
import poback from "../images/Default_Character_portrait_of_Albert_Einstein_standing_on_stage_side_2_55f6a8db-484c-4b2e-ac6b-249185fd3e09_1.jpg";
import cyback from "../images/Default_Dirty_cyberpunk_Alien_monster_load_wire_perfect_propor_1_f04f5142-b45e-40db-b568-376cc5b26cbd_1.jpg";
import artback from "../images/Default_artwork_of_tshirt_graphic_design_flat_design_of_one_re_2_ea30a55a-f99b-4631-9102-c2f85a25b052_1.jpg";
import cenback from "../images/Default_centered_isometric_vector_tshirt_art_ready_to_print_hi_0_acaea9ee-b566-43a9-8ca1-26cd252f47e7_1.jpg";
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
      <h1 className="land-head">
        Hi, I’m a software developer and a <br /> content creator posting
        regularly about <br /> my daily life and projects.
      </h1>

      <section className="land-sec">
        <div className="web-design grid">
          <span>
            <h2>Web Design</h2>
            <p>
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
            <h2>App Development</h2>
            <p>
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
            <h2>Animation</h2>
            <p>
              Animation brings ideas to life in a captivating and engaging way.
              With my animation skills, I can add that extra touch of magic to
              various projects.
            </p>
            <button>View Project</button>
          </span>
          <img className="back" src={back} alt=""></img>
        </div>

        <div className="logo-design grid">
          <img className="back" src={back} alt=""></img>
          <span>
            <h2>Logo Design</h2>
            <p>
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

      <section className="land-sec-text">
        <p className="land-text">
          Recently, I have been working on a side project called OneMenu. It’s a
          menu bar app for the Mac.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
