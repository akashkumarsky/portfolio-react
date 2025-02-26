import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo or Site Name */}
        <div className="footer-logo">
          {/* Replace 'logo.jpg' with your logo asset or use text */}
          <img src='' alt="sky" />
        </div>

        {/* Footer Navigation Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=100013205868687" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/akash-kumar-sky/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/skylight_akash/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        <a href="https://github.com/akashkumarsky" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Akash Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
