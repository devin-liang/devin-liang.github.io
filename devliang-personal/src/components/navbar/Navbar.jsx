import React from 'react'
import "./navbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Email';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    // if menuOpen prop is true, add the active class, false by default
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="item-container">
            <PersonIcon className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="item-container">
            <MailIcon className="icon" />
            <span>dev@dev.com</span>
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
