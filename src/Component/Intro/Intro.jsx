import React from "react";
import "../../Component/Intro/Intro.css";
import bg from "../../../src/assets/image.png"
import btn from "../../../src/assets/hireme.png"
import { Link } from "react-scroll";


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Hardeep</span><br /> Website Designer
        </span>
        <span className="skillText">
          I am a skilled and passionate wed designer with experience in creating<br></br>
          visually appealing and user-friendly websites
        </span>
      </div>
      <img src={bg} className="bg" alt="profile" />
    </section>
  );
};

export default Intro;
