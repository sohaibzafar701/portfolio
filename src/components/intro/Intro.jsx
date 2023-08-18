import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>
          <p>I've excelled in HTML, CSS, and JavaScript for crafting landing pages. I built a dynamic car insurance site with HTML, CSS, JavaScript, PHP, MySQL, and used Python for data analysis. I'm skilled in React.js, Express.js, Node.js, TypeScript, Tailwind CSS for responsive solutions. I know MongoDB, C, C++ for apps, and implement CI/CD pipelines. I've added animations and 3D elements with Framer Motion and Three.js.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}


export default Intro