import React from 'react';
import javaIcon from '../assets/icons/java.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import netbeansIcon from '../assets/icons/netbeans.png';

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
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <div>
            <h3 className="skills-block-title">Tech Stack</h3>
            <div className="tech-list">
              {techStack.map((tech, i) => (
                <div className="tech-item" key={i}>
                  <span className="tech-icon">
                    <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                  </span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="skills-block-title">Other Abilities</h3>
            <div className="ability-list">
              {otherAbilities.map((ability, i) => (
                <div className="ability-item" key={i}>
                  <span className="ability-dot" />
                  <span className="ability-name">{ability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;