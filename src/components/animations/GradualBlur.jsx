import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GradualBlur({ children, delay = 0, duration = 0.8, y = 30, blurAmount = 10, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    gsap.fromTo(ref.current, 
      { y: y, opacity: 0, filter: `blur(${blurAmount}px)` },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: duration,
        ease: 'power3.out',
        delay: delay
      }
    );
  }, [delay, duration, y, blurAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
