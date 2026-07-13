import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FadeUp({ children, delay = 0, duration = 0.8, y = 50, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    gsap.fromTo(ref.current, 
      { y: y, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 0,
        opacity: 1,
        duration: duration,
        ease: 'power3.out',
        delay: delay
      }
    );
  }, [delay, duration, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
