import React from "react";
import firstback from "../images/first noback.png";

function Hero() {
  return (
    <div className="foot">
      <section className="land-hero">
        <h1 className="land-head">
          Hi, I’m a software developer and a content creator posting regularly
          about my daily life and projects.
        </h1>
        <button className="hero-btn">Learn More</button>
      </section>
      <img className="hero-img" src={firstback} alt=""></img>
    </div>
  );
}

export default Hero;
