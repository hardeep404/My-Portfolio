import React, { useRef } from "react";
import "./Contacts.css";
import InstagramIcon from "../../../src/assets/instagram.png";
import LinkedinIcon from "../../../src/assets/linkedinIcon.png";
import GitHub from "../../../src/assets/github.png"

import emailjs from "@emailjs/browser";
import conf from "../../../conf";




const Contacts = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${conf.serviceKey}`, `${conf.templateKey}`, form.current, {
        publicKey:`${conf.publicKey}`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sended");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="Contacts">
      <h2 className="contactTitle">Contact Me </h2>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Your Name "
          className="name"
          name="to_name"
        />
        <input
          type="email"
          className="contactEmail"
          placeholder="Enter Your Email"
          name="from_email"
        />
        <textarea
          name="message"
          className="contactMsg"
          placeholder="Your massage"
          rows="4"
        ></textarea>
        <button className="SubmitBtn" type="submit">
          Submit
        </button>
      </form>
      <div className="MediaLinks">
     <a href="https://www.instagram.com/sainihardeep00786?igsh=MWh1MmcydmdnZjZuZg==" target="_blank"> <img src={InstagramIcon} alt="Icon" className="link" /></a>
     <a href="https://www.linkedin.com/in/hardeep-saini-7a51b1327" target="_blank"><img src={LinkedinIcon} alt="Icon" className="link" /></a>
     <a href="https://github.com/hardeep404" target="_blank"> <img src={GitHub} alt="Icon" className="link" /></a>
      </div>
    </section>
  );
};

export default Contacts;
