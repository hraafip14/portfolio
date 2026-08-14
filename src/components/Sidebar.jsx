import React, { useState, useEffect, useCallback, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'Intro', id: 'hero' },
  { label: 'About Me', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isClickScrolling = useRef(false);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      let current = 0;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportHeight * 0.4) {
            current = i;
            break;
          }
        }
      }

      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = useCallback((index) => {
    const section = document.getElementById(NAV_ITEMS[index].id);
    if (section) {
      isClickScrolling.current = true;
      setActiveIndex(index);
      section.scrollIntoView({ behavior: 'smooth' });

      // Re-enable scroll tracking after scroll animation finishes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  }, []);

  return (
    <aside
      className={`sidebar ${hovered ? 'sidebar--expanded' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setHoveredIndex(null); }}
    >
      <div className="sidebar-track">
        {/* Progress line */}
        <div className="sidebar-line">
          <div
            className="sidebar-line-fill"
            style={{
              height: `${(activeIndex / (NAV_ITEMS.length - 1)) * 100}%`
            }}
          />
        </div>

        {/* Dots */}
        {NAV_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`sidebar-dot-wrapper ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="sidebar-dot" />

            {/* Tooltip */}
            <div className={`sidebar-tooltip ${hoveredIndex === index || (hovered && index === activeIndex) ? 'visible' : ''}`}>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
