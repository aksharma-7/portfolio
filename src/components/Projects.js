import React from 'react';
import shoppingCartImage from '../assets/shoppingCart.png';
import covidTrackerImage from '../assets/covidTracker.jpeg';
import chatRoomImage from '../assets/chatRoom.jpeg';
import portfolioImage from '../assets/portfolio.jpg';

const projects = [
  {
    projectName: 'Shopping Cart',
    projectLink: 'https://eshoppingcartapp.herokuapp.com/',
    projectImage: shoppingCartImage,
  },
  {
    projectName: 'Portfolio',
    projectLink: '/',
    projectImage: portfolioImage,
  },
  {
    projectName: 'COVID19 Tracker',
    projectLink: 'https://covidtrackerapplication.netlify.app/',
    projectImage: chatRoomImage,
  },
  {
    projectName: 'Chat Room',
    projectLink: 'https://chatroomapp.netlify.app/',
    projectImage: covidTrackerImage,
  },
];

const Projects = () => {
  return (
    <section id='projects' className='projects-section'>
      <h2 className='projects-section-header'>Projects that I've worked on</h2>

      <div className='projects-grid'>
        {projects.map((project) => (
          <a
            href={project.projectLink}
            target='_blank'
            className='project project-tile'
          >
            <img
              className='project-image'
              src={project.projectImage}
              alt='project'
            />
            <p className='project-title'>
              <span className='code'>&lt;</span>
              {project.projectName}
              <span className='code'>&#47;&gt;</span>
            </p>
          </a>
        ))}
      </div>

      {projects.length > 6 ? (
        <a
          href='https://github.com/aksharma-7?tab=repositories'
          className='btn btn-show-all'
          target='_blank'
        >
          Show all
        </a>
      ) : null}
    </section>
  );
};

export default Projects;
