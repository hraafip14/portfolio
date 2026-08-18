import React, { useEffect, useState, useRef } from 'react';
import { Popover, ConfigProvider } from 'antd';
import profileImg from '../assets/profile2.png';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import GradualBlur from '../components/animations/GradualBlur';
import { animate } from 'animejs';

function Hero() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [greeting, setGreeting] = useState("Hello!");
  const timerRef = useRef(null);

  const greetings = [
    "Hello!", 
    "Nice to meet you! 😄", 
    "You wanna know about me? 👀", 
    "Hi there! 👋", 
    "Welcome to my portfolio!",
    "What's your fav song?",
    "What's your fav movie?",
    "You should listen to Fluorescent Adolescence by Arctic Monkeys!",
    "I love Marvel movies!"
  ];

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (timerRef.current) clearTimeout(timerRef.current);
    
    let newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    if (newGreeting === greeting) {
      newGreeting = greetings[(greetings.indexOf(greeting) + 1) % greetings.length];
    }
    
    setGreeting(newGreeting);
    setPopoverOpen(true);
    
    timerRef.current = setTimeout(() => {
      setPopoverOpen(false);
    }, 3000);
  };

  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      setPopoverOpen(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isHidden = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroElement = document.getElementById('hero');
      const heroHeight = heroElement ? heroElement.offsetHeight : window.innerHeight;
      const triggerThreshold = heroHeight * 0.7;

      const isMobile = window.matchMedia('(max-width: 428px)').matches;

      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        // Scrolling down
        if (!isHidden) {
          animate('.hero-image-placeholder', {
            rotate: '0.5turn',
            duration: 1500,
            easing: 'easeOutQuart',
            ...(isMobile ? { y: '20rem', x: 0 } : { x: '40rem', y: 0 }),
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
            x: 0,
            y: 0,
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
          <ConfigProvider
            theme={{
              components: {
                Popover: {
                  colorBgElevated: '#ff5252',
                  colorText: '#ffffff',
                },
              },
            }}
          >
            <Popover 
              content={<div className="fun-greeting">{greeting}</div>} 
              trigger="click" 
              open={popoverOpen}
              onOpenChange={handleOpenChange}
              placement="top"
              overlayClassName="fun-popover"
            >
              <img 
                src={profileImg} 
                alt="Hasby Muhammad Raafi Prasetyo" 
                className="hero-profile-img" 
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
              />
            </Popover>
          </ConfigProvider>
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

            <p className="hero-desc">
              Bachelor of Informatics Engineering Student who could do coding with write once, run anywhere,
              and obviously a vibe coder 😁🤙
            </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;