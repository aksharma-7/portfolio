import React from 'react';
import Cards from '../components/Cards';

const projectsProp = {
  heading: 'Projects',
  cards: [
    {
      name: 'Porfolio Website',
      link: '/',
      img: 'portfolio',
      description: 'This is a portfolio website',
    },
    {
      name: 'eCommerce Website',
      link: '/https://eshoppingcartapp.herokuapp.com/',
      img: 'proshop',
      description: 'This is a shopping website',
    },
  ],
};
const Projects = () => {
  return (
    <div className='projects'>
      <Cards {...projectsProp} />
    </div>
  );
};

export default Projects;
