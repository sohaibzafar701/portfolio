import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Sohaib-Zafar</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sohaib-zafar701/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/sohaibzafar701" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/chmsohaib7011" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      <a href="https://sohaib.engineer" target="_blank" rel="noreferrer" ><FiGlobe /></a>
    </div>
      <div className="footer__copyright">
        <small>&copy; Sohaib Zafar {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
