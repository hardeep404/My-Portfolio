import React, { useState } from "react";
import "../../Component/Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import ContactImg from "../../../src/assets/contact.png"
import Menu from "../../../src/assets/menu.png"
import { Link } from "react-scroll";

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false); 
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to="intro" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className="MenuItems">Home</Link>
        <Link to="skills" activeClass="active" spy={true} smooth={true} offset={-60} duration={500} className="MenuItems">About</Link>
        <Link to="Works" activeClass="active" spy={true} smooth={true} offset={-30} duration={500} className="MenuItems">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('Contacts').scrollIntoView({behavior:'smooth'})
        }}>
        <img src={ContactImg} alt="contactImg" className="desktopMenuImg"  />
        Contact Me
      </button>

      <img src={Menu} alt="menu" className="mobMenu" onClick={()=>{setShowMenu(!showMenu)}} />
      <div className="NavMenu" style={{display:showMenu?'flex':'none'}}>
        <Link to="intro" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className="MenuItems"onClick={()=>{setShowMenu(false)}} >Home</Link>
        <Link to="skills" activeClass="active" spy={true} smooth={true} offset={-60} duration={500} className="MenuItems"onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link to="Works" activeClass="active" spy={true} smooth={true} offset={-30} duration={500} className="MenuItems"onClick={()=>{setShowMenu(false)}}>My Portfolio</Link>
        <Link to="Contacts" activeClass="active" spy={true} smooth={true} offset={-30} duration={500} className="MenuItems" onClick={()=>{setShowMenu(false)}}>Contacts</Link>
        </div>
    </nav>
  );
};

export default Navbar;
