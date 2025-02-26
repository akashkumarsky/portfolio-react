import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={logo} alt='Docplanner Group' className="logo" />
      <ul className='nav-menu'>
        <li>
          <AnchorLink
            href="#home"
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#about"
            className={menu === "about" ? "active" : ""}
            onClick={() => setMenu("about")}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#projects"
            className={menu === "projects" ? "active" : ""}
            onClick={() => setMenu("projects")}
          >
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact"
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      
        <AnchorLink href="#contact" onClick={() => setMenu("contact")} className="nav-connect">
          Connect With Me
        </AnchorLink>
      
    </div>
  );
};

export default Navbar;
