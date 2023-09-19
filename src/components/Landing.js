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
        Hi, I’m a software developer and a content creator posting regularly
        about my daily life and projects.
      </h1>

      <section className="land-sec">
        <img className="back" src={back} alt=""></img>
        <img className="back" src={noback} alt=""></img>
        <img className="back" src={poback} alt=""></img>
        <img className="back" src={cyback} alt=""></img>
        <img className="back" src={artback} alt=""></img>
        <img className="back" src={cenback} alt=""></img>
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
