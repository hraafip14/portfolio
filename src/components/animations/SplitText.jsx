import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplitText({ text, className = '', delay = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.split-word-inner');
    
    gsap.fromTo(elements, 
      { y: '100%', opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
        delay: delay
      }
    );
  }, [delay]);

  return (
    <span ref={containerRef} className={className} style={{ display: 'inline-block' }}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="split-word" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em' }}>
          <span className="split-word-inner" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>{word}</span>
        </span>
      ))}
    </span>
  );
}
