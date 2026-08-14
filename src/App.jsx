import React, { useEffect, useState } from 'react';
import './App.css';
import AnimatedBackground from './components/animations/AnimatedBackground';

import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <AnimatedBackground />
      {/* <Navbar scrolled={scrolled} /> */}
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Certificates /> */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
