
import React from "react";
import '../index.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { FaArrowRight } from 'react-icons/fa';


const Navbar = ({ onChange, checked, isMediumScreen, isSmallScreen, windowSize, windowWidth }) => {

  return (
    <nav className="navColour navStuff navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        {windowWidth >= 990 && <div className="navbar-brand mb-4 mb-md-0 mb-lg-0"></div>}
        <div>
          <a href="#home" className="link nav-phone">
            Home
          </a>
          <a href="#AboutMe" className="link nav-phone displayNoneForNav">
            About
          </a>
          <a href="#skills" className="link nav-phone ">
            Skills
          </a>
          <a href="#experience" className="link nav-phone">
            Experience
          </a>
          <a href="#projects" className="link nav-phone">
            Projects
          </a>
          <a href="#contact" className="link">
            Contact
          </a>

        </div><div></div>
        <div className='ModeColour displayNoneForNav' style={{ position: "absolute", right: "65px", fontSize: "18px", color: "#3edd8e" }}>Toggle <FaArrowRight style={{ color: "#3edd8e" }} />&nbsp;&nbsp;</div>
        {windowWidth > 768 && <DarkModeSwitch
          style={{ position: "absolute", right: "17px", top: "17px" }}
          checked={checked}
          onChange={onChange}
          size={40}
          sunColor='#3edd8e'
          moonColor="#3edd8e"
        />}
        {windowWidth <= 768 && <DarkModeSwitch
          style={{ position: "absolute", right: "17px", top: "17px" }}
          checked={checked}
          onChange={onChange}
          size={30}
          sunColor='#3edd8e'
          moonColor="#3edd8e"
        />}
      </div>
      <style>
        {`
          .resume-btn{
            font-weight: 700;
          }
          .btn-success {
            color: #fff;
            background-color: #3edd8e;
            border-color: #3edd8e;
          }
          .btn-success:hover {
            color: #3edd8e;
            background-color: white;
            border-color: #3edd8e;
          }
        `}
      </style>
    </nav>
  );
};


export default Navbar;
