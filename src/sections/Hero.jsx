import React from 'react';
import profileImg from '../assets/profile.jpg';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import GradualBlur from '../components/animations/GradualBlur';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text">HASBY</div>

      <div className="hero-inner">
        <div className="hero-content">
          <FadeUp delay={0.2} y={30}>
            <span className="hero-tag">Portfolio</span>
          </FadeUp>

          <h1 className="hero-name">
            <SplitText text="Hasby" delay={0.4} />
            <span className="line-accent"><SplitText text="Muhammad" delay={0.5} /></span>
            <SplitText text="Raafi Prasetyo" delay={0.6} />
          </h1>

          <GradualBlur delay={0.8} y={30} blurAmount={8}>
            <p className="hero-desc">
              Informatics Engineering student & Qur'an Learning Teacher.
              Based in Depok, West Java — building things with code and
              nurturing minds with knowledge.
            </p>
          </GradualBlur>

          <FadeUp delay={1} y={30}>
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                View Projects →
              </a>
              <a href="#contact" className="btn-ghost">
                Get in Touch
              </a>
            </div>
          </FadeUp>
        </div>

        <GradualBlur delay={0.6} duration={1} y={50} blurAmount={15} className="hero-image-frame">
          <div className="hero-image-placeholder">
            <img src={profileImg} alt="Hasby Muhammad Raafi Prasetyo" className="hero-profile-img" />
          </div>
        </GradualBlur>
      </div>

    </section>
  );
}

export default Hero;