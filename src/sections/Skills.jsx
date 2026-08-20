import React from 'react';
import javaIcon from '../assets/icons/java.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import netbeansIcon from '../assets/icons/netbeans.png';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import DotField from '../components/DotField';

const techStack = [
  { name: 'HTML',       icon: htmlIcon },
  { name: 'CSS',        icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React',      icon: reactIcon },
  { name: 'Java',       icon: javaIcon },
  { name: 'NetBeans',   icon: netbeansIcon },
];

const otherAbilities = [
  'Bahasa Indonesia',
  'Basic English',
  'Teaching',
  'Editing Video',
  'Microsoft Office',
];

function Skills() {
  return (
    <section className="section skills" id="skills" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DotField
          dotRadius={5}
          dotSpacing={45}
          bulgeStrength={150}
          glowRadius={50}
          sparkle
          waveAmplitude={0}
          cursorRadius={100}
          cursorForce={0}
          gradientFrom="#ff5252"
          gradientTo="#ff5252"
          glowColor="#ff5252"
        />
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <h2 className="section-title">
            <SplitText text="Skills" delay={0.2} />
          </h2>

          <div className="skills-grid">
            <div>
              <FadeUp delay={0.3}>
                <h3 className="skills-block-title">Tech Stack</h3>
              </FadeUp>
              <div className="tech-list">
                {techStack.map((tech, i) => (
                  <FadeUp delay={0.4 + (i * 0.1)} key={i}>
                  <div className="tech-item cursor-target">
                    <span className="tech-icon">
                      <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                    </span>
                    {tech.name}
                  </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <div>
              <FadeUp delay={0.3}>
                <h3 className="skills-block-title">Other Abilities</h3>
              </FadeUp>
              <div className="ability-list">
                {otherAbilities.map((ability, i) => (
                  <FadeUp delay={0.4 + (i * 0.1)} key={i}>
                  <div className="ability-item cursor-target">
                    <span className="ability-dot" />
                    <span className="ability-name">{ability}</span>
                  </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;