import React from "react";
import "./Skill.css";
import UI from "../../../src/assets/ui-design.png";
import web from "../../../src/assets/website-design.png";
import app from "../../../src/assets/app-design.png";

function Skill() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <br />
      <span className="skillDesc">
        {" "}
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly website. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML,CSS, and Javascript, as well as design software.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UI} alt="uiDesign" className="skillBarImg" />
          <div className="skillText">
            <h2 className="bold"> UI/UX design</h2>
            <p>With a keen eye for detail and a user-centered approach, I design interfaces that not only captivate but also enhance user interaction. My goal is to transform complex ideas into elegant, user-friendly solutions. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="webImage" className="skillBarImg" />
          <div className="skillText">
            <h2 className="bold">Website design</h2>
            <p>Transforming ideas into dynamic online experiences, I design websites that are not only visually appealing but also optimized for performance and user engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
