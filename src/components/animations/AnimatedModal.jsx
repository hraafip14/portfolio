import React, { useState, useEffect } from 'react';
import './AnimatedModal.css';

const AnimatedModal = ({ isOpen, onClose, children, className = '' }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;
    let renderTimeoutId;
    if (isOpen) {
      setShouldRender(true);
      // Wait a tiny bit to allow the DOM to update before triggering the animation
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      setIsAnimating(false);
      // Wait for the exit animation (500ms) before unmounting
      renderTimeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 500); 
    }
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(renderTimeoutId);
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className={`animated-overlay ${isAnimating ? 'show' : ''}`} onClick={onClose}>
      <div 
        className={`animated-content ${className} ${isAnimating ? 'show' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default AnimatedModal;
