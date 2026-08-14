import React, { useEffect } from 'react';
import profileImg from '../assets/profile2.png';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import GradualBlur from '../components/animations/GradualBlur';
import { animate } from 'animejs';

function Hero() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isHidden = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroElement = document.getElementById('hero');
      const heroHeight = heroElement ? heroElement.offsetHeight : window.innerHeight;
      const triggerThreshold = heroHeight * 0.7;

      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        // Scrolling down
        if (!isHidden) {
          animate('.hero-image-placeholder', {
            rotate: '0.5turn',
            duration: 1500,
            easing: 'easeOutQuart',
            x: "40rem",
          });
          animate('.hero-content', {
            opacity: 0,
            translateY: 50,
            duration: 1800,
            easing: 'easeOutQuart'
          });
          isHidden = true;
        }
      } else if (currentScrollY <= triggerThreshold) {
        // Scrolling up and reached within the top 70% of hero section
        if (isHidden) {
          animate('.hero-image-placeholder', {
            rotate: '0turn',
            duration: 1500,
            easing: 'easeOutQuart',
            x: 0
          });
          animate('.hero-content', {
            opacity: 1,
            translateY: 0,
            duration: 1500,
            easing: 'easeOutQuart'
          });
          isHidden = false;
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text">HASBY</div>

      <div className="hero-inner">
        <div className="hero-image-placeholder">
          <img src={profileImg} alt="Hasby Muhammad Raafi Prasetyo" className="hero-profile-img" />
        </div>
        
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
              Bachelor of Informatics Engineering Student who could do coding with write once, run anywhere,
              and obviously a vibe coder 😁🤙
            </p>
          </GradualBlur>

        </div>

      </div>

    </section>
  );
}

export default Hero;