import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id='home-section' className='home-section'>
      <p>Hey there!</p>
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('I am Atul Kumar Sharma')
              .pauseFor(2000)
              .deleteAll()
              .typeString('I am Full Stack Developer')
              .pauseFor(2000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </section>
  );
};

export default Home;
