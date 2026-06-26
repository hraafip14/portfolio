import React from 'react';
import profileImg from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text">HASBY</div>

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-tag">Portfolio</span>

          <h1 className="hero-name">
            Hasby
            <span className="line-accent">Muhammad</span>
            Raafi Prasetyo
          </h1>

          <p className="hero-desc">
            Informatics Engineering student & Qur'an Learning Teacher.
            Based in Depok, West Java — building things with code and
            nurturing minds with knowledge.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-image-frame">
          <div className="hero-image-placeholder">
            <img src={profileImg} alt="Hasby Muhammad Raafi Prasetyo" className="hero-profile-img" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;