import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import About from './views/About';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute' }}>
          <Particles height='100vh' width='100vw' params={particlesConfig} />
        </div>
        <Home />
      </div>
      <Skills />
      <Projects />
      <About />
    </Router>
  );
};

export default App;
