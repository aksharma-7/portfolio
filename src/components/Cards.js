import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './Cards.css';

const Cards = ({ cards, heading }) => {
  return (
    <div className='cards'>
      <div className='cards__textContainer'>
        {/* <h2>{projects.name}</h2> */}
        <h1>{heading}</h1>
        {/* <p>{projecdescription}</p> */}
      </div>
      <div className='cards__cardContainer'>
        {cards.map((card) => (
          <Link to={card.link}>
            <div className='cards__card'>
              <div className='cards__card__iconContainer'>
                <IconContext.Provider
                  value={{ className: 'cards__card__iconContainer__icon' }}
                >
                  {card.img}
                </IconContext.Provider>
              </div>
              <div className='cards__card__textContainer'>{card.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
