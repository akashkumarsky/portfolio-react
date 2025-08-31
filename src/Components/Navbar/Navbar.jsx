import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Docplanner Group' className="logo" />
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <AnchorLink
            href="#home"
            className={menu === "home" ? "active" : ""}
            onClick={() => { setMenu("home"); if (isMobileMenuOpen) toggleMobileMenu(); }}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#about"
            className={menu === "about" ? "active" : ""}
            onClick={() => { setMenu("about"); if (isMobileMenuOpen) toggleMobileMenu(); }}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#projects"
            className={menu === "projects" ? "active" : ""}
            onClick={() => { setMenu("projects"); if (isMobileMenuOpen) toggleMobileMenu(); }}
          >
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact"
            className={menu === "contact" ? "active" : ""}
            onClick={() => { setMenu("contact"); if (isMobileMenuOpen) toggleMobileMenu(); }}
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