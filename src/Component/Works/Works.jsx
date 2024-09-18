import React from "react";
import "./Works.css";
import port from "../../../src/assets/portfolio-1.png";
import port1 from "../../../src/assets/portfolio-2.png";
import port2 from "../../../src/assets/portfolio-3.png";

const Works = () => {
  return (
    <section id="Works">
      <h2 className="WorksTitle"> My portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel prefect. I am excited to being my skills and
        experience tp help businesses achieve their goals and crete a strong
        online presence.
      </span>
      <div className="WorksImages">
        <img src={port} alt="image" className="WorkImage" />
        <img src={port1} alt="image" className="WorkImage" />
        <img src={port2} alt="image" className="WorkImage" />
      </div>
      
    </section>
  );
};

export default Works;
