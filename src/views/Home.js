import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h2>Hey there!</h2>
      <h1>
        I am
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Atul Sharma')
              .pauseFor(2000)
              .deleteAll()
              .typeString('a full stack Web Developer')
              .pauseFor(2000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};

export default Home;
