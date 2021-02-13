import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
