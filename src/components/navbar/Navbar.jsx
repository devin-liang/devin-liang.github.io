import React from 'react'
import "./navbar.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Email';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    // if menuOpen prop is true, add the active class, false by default
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            devin liang.
          </a>
          <div className="item-container">
            <a href="https://github.com/devin-liang" target="_blank">
              <GitHubIcon className="icon" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="item-container">
            <a href="https://www.linkedin.com/in/devliang/" target="_blank">
              <LinkedInIcon className="icon" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="item-container">
            <MailIcon className="icon" />
            <span>devliang@umich.edu</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
