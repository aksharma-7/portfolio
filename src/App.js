import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
