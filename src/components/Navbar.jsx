import React, { useState, useEffect } from 'react';

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        H<span>.</span>
      </a>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Overlay always rendered, visibility controlled by CSS class */}
      <div
        className={`nav-overlay ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about"        onClick={handleLinkClick}>About</a></li>
        <li><a href="#education"    onClick={handleLinkClick}>Education</a></li>
        <li><a href="#experience"   onClick={handleLinkClick}>Experience</a></li>
        <li><a href="#skills"       onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#certificates" onClick={handleLinkClick}>Certificates</a></li>
        <li><a href="#projects"     onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#contact"      onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;