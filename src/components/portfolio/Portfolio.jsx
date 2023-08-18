import React from 'react';

import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'PUBG Tournaments',
      img: IMG2,
      description: 'PUBG Tournaments platform to provide facility of organizing tournaments worldwide',
      technologies: 'HTML, CSS, JS | PHP , SQL',
      link: '',
      github: '',
    },
    {
      id: 2,
      title: 'Car Insurance Website',
      img: IMG3,
      description:
        'Fully responsive interactive Car Insurance Website for client on fiverr',
      technologies: 'HTML, CSS, JS | PHP , SQL',
      link: '',
      github: '',
    },
    {
      id: 3,
      title: 'E-Commerce Website',
      img: IMG3,
      description:
        'E-Commerce Website with very low developing budget Website for client on fiverr',
      technologies: 'MERN Stack',
      link: '',
      github: '',
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
