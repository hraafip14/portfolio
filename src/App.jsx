import React, { useEffect, useState } from 'react';
import './App.css';

import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;