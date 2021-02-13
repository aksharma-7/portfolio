import React from 'react';

const exampl = () => {
  return (
    <div>
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'
        integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay'
        crossorigin='anonymous'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Poppins:200i,300,400&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Raleway:700&display=swap'
        rel='stylesheet'
      />
      {/* // <!-- START NAV --> */}

      <nav id='navbar' className='nav'>
        <ul className='nav-list'>
          <li>
            <a href='#welcome-section'>About</a>
          </li>
          <li>
            <a href='#projects'>Work</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>

      {/* <!-- END NAV --> */}

      {/* <!-- START WELCOME SECTION --> */}

      <section id='welcome-section' className='welcome-section'>
        <h1>Hey I am Mimic</h1>
        <p>a web developer</p>
      </section>

      {/* <!-- END WELCOME SECTION --> */}

      {/* <!-- START PROJECTS SECTION --> */}

      <section id='projects' className='projects-section'>
        <h2 className='projects-section-header'>
          These are some of my projects
        </h2>

        <div className='projects-grid'>
          <a
            href='https://codepen.io/freeCodeCamp/full/zNqgVx'
            target='_blank'
            className='project project-tile'
          >
            <img
              className='project-image'
              src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg'
              alt='project'
            />
            <p className='project-title'>
              <span className='code'>&lt;</span>
              Tribute Page
              <span className='code'>&#47;&gt;</span>
            </p>
          </a>
          <a
            href='https://codepen.io/freeCodeCamp/full/qRZeGZ'
            target='_blank'
            className='project project-tile'
          >
            <img
              className='project-image'
              src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/random-quote-machine.png'
              alt='project'
            />
            <p className='project-title'>
              <span className='code'>&lt;</span>
              Random Quote Machine
              <span className='code'>&#47;&gt;</span>
            </p>
          </a>
          <a
            href='https://codepen.io/freeCodeCamp/full/wgGVVX'
            target='_blank'
            className='project project-tile'
          >
            <img
              className='project-image'
              src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/calc.png'
              alt='project'
            />
            <p className='project-title'>
              <span className='code'>&lt;</span>
              JavaScript Calculator
              <span className='code'>&#47;&gt;</span>
            </p>
          </a>
          <a
            href='https://codepen.io/freeCodeCamp/full/mVEJag'
            target='_blank'
            className='project project-tile'
          >
            <img
              className='project-image'
              src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/map.jpg'
              alt='project'
            />
            <p className='project-title'>
              <span className='code'>&lt;</span>
              Map Data Across the Globe
              <span className='code'>&#47;&gt;</span>
            </p>
          </a>
          <a
            href='https://codepen.io/freeCodeCamp/full/wGqEga'
            target='_blank'
            className='project project-tile'
          >
            <img
              className='project-image'
              src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/wiki.png'
              alt='project'
            />
            <p className='project-title'>
              <span className='code'>&lt;</span>
              Wikipedia Viewer
              <span className='code'>&#47;&gt;</span>
            </p>
          </a>
          <a
            href='https://codepen.io/freeCodeCamp/full/KzXQgy'
            target='_blank'
            className='project project-tile'
          >
            <img
              className='project-image'
              src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tic-tac-toe.png'
              alt='project'
            />
            <p className='project-title'>
              <span className='code'>&lt;</span>
              Tic Tac Toe Game
              <span className='code'>&#47;&gt;</span>
            </p>
          </a>
        </div>

        <a
          href='https://codepen.io/FreeCodeCamp/'
          className='btn btn-show-all'
          target='_blank'
        >
          Show all<i className='fas fa-chevron-right'></i>
        </a>
      </section>

      {/* <!-- END PROJECTS SECTION --> */}

      {/* <!-- START CONTACT SECTION --> */}

      <section id='contact' className='contact-section'>
        <div className='contact-section-header'>
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div className='contact-links'>
          <a
            href='https://facebook.com/freecodecamp'
            target='_blank'
            className='btn contact-details'
          >
            <i className='fab fa-facebook-square'></i> Facebook
          </a>
          <a
            id='profile-link'
            href='https://github.com/freecodecamp'
            target='_blank'
            className='btn contact-details'
          >
            <i className='fab fa-github'></i> GitHub
          </a>
          <a
            href='https://twitter.com/freecodecamp'
            target='_blank'
            className='btn contact-details'
          >
            <i className='fab fa-twitter'></i> Twitter
          </a>
          <a href='mailto:example@example.com' className='btn contact-details'>
            <i className='fas fa-at'></i> Send a mail
          </a>
          <a href='tel:555-555-5555' className='btn contact-details'>
            <i className='fas fa-mobile-alt'></i> Call me
          </a>
        </div>
      </section>

      {/* <!-- END CONTACT SECTION -->

<!-- START FOOTER SECTION --> */}

      <footer>
        <p>
          **This is just a fake portfolio. All the projects and contact details
          given are not real.
        </p>
        <p>
          &copy; Created for
          <a href='https://www.freecodecamp.com/' target='_blank'>
            freeCodeCamp <i className='fab fa-free-code-camp'></i>
          </a>
        </p>
      </footer>

      {/* <!-- END FOOTER SECTION --> */}
    </div>
  );
};

export default exampl;
