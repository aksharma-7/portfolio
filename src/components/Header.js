import React from 'react';

const Header = () => {
  return (
    <nav id='navbar' className='nav'>
      <ul className='nav-list'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
