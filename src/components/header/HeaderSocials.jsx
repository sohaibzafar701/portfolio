import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sohaib-zafar701/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/sohaibzafar701" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/chmsohaib7011" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      <a href="https://sohaib.engineer" target="_blank" rel="noreferrer" ><FiGlobe /></a>
    </div>
  )
}

export default HeaderSocials