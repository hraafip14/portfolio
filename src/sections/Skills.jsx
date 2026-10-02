import React, { useState } from 'react';
import javaIcon from '../assets/icons/java.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import netbeansIcon from '../assets/icons/netbeans.png';
import intellijIcon from '../assets/icons/intellij.png';
import pythonIcon from '../assets/icons/python.png';
import phpIcon from '../assets/icons/php.png';
import vscodeIcon from '../assets/icons/vscode.png';
import antigravityIcon from '../assets/icons/antigravity-color.svg';
import excelIcon from '../assets/icons/excel.png';
import wordIcon from '../assets/icons/word.png';
import powerpointIcon from '../assets/icons/powerpoint.png';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import DotField from '../components/DotField';

const languages = [
  { name: 'HTML',       icon: htmlIcon, level:'Intermediate'  },
  { name: 'CSS',        icon: cssIcon, level:'Intermediate'  },
  { name: 'JavaScript', icon: jsIcon, level:'Intermediate'  },
  { name: 'React',      icon: reactIcon, level:'Intermediate'  },
  { name: 'Java',       icon: javaIcon, level:'Advanced'  },
  { name: 'Python',     icon: pythonIcon, level:'Beginner'  },
  { name: 'PHP',        icon: phpIcon, level:'Beginner'  }
];

const tools = [
  { name: 'IntelliJ',   icon: intellijIcon, level:'Intermediate'  },
  { name: 'NetBeans',   icon: netbeansIcon, level:'Advanced'  },
  { name: 'VS Code',    icon: vscodeIcon, level:'Intermediate'  },
  { name: 'AntiGravity',icon: antigravityIcon, level:'Intermediate'  }
];

const productivity = [
  { name: 'Excel',      icon: excelIcon, level:'Advanced'  },
  { name: 'Word',       icon: wordIcon, level:'Advanced'  },
  { name: 'PowerPoint', icon: powerpointIcon, level:'Intermediate'  }
]

const otherAbilities = [
  { name: 'Bahasa Indonesia', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
  { name: 'Teaching', level: 'Advanced' },
  { name: 'Video Editing', level: 'Intermediate' },
  { name: 'Photography', level: 'Advanced' },
];

const getLevelIndex = (level) => {
  if (level === 'Beginner') return 1;
  if (level === 'Intermediate') return 2;
  if (level === 'Advanced') return 3;
  if (level === 'Native' || level === 'Expert') return 4;
  return 0;
};

const getLevelColor = (level) => {
  if (level === 'Beginner') return '#ffeb3b';
  if (level === 'Intermediate') return '#4caf50';
  if (level === 'Advanced') return '#00bcd4';
  if (level === 'Native' || level === 'Expert') return '#2196f3';
  return '#ffffff';
};

const LevelIndicator = ({ level }) => {
  const levelIdx = getLevelIndex(level);
  return (
    <div className="level-indicator">
      <div className={`level-bar ${levelIdx >= 1 ? 'lvl-1' : ''}`}></div>
      <div className={`level-bar ${levelIdx >= 2 ? 'lvl-2' : ''}`}></div>
      <div className={`level-bar ${levelIdx >= 3 ? 'lvl-3' : ''}`}></div>
      <div className={`level-bar ${levelIdx >= 4 ? 'lvl-4' : ''}`}></div>
    </div>
  );
};

function Skills() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="section skills" id="skills" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DotField
          dotRadius={2}
          dotSpacing={25}
          bulgeStrength={100}
          glowRadius={50}
          sparkle
          waveAmplitude={0}
          cursorRadius={100}
          cursorForce={0}
          gradientFrom="#4caf50"
          gradientTo="#2196f3"
          glowColor="#ff5252"
        />
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <div className="skills-header">
            <h2 className="section-title">
              <SplitText text="Skills" delay={0.2} />
            </h2>
            <div className="skills-tabs">
              <button className={`skill-tab-btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>1</button>
              <button className={`skill-tab-btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>2</button>
              <button className={`skill-tab-btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>3</button>
              <button className={`skill-tab-btn ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>4</button>
            </div>
          </div>

          <div className="skills-grid">
            <div className={`skills-category ${activeTab === 1 ? 'active' : ''}`}>
              <FadeUp delay={0.3} triggerSelector="#skills">
                <h3 className="skills-block-title">Languages & Frameworks</h3>
              </FadeUp>
              <div className="tech-list">
                {languages.map((tech, i) => (
                  <FadeUp delay={0.4 + (i * 0.1)} key={i} triggerSelector="#skills">
                  <div className="tech-item cursor-target">
                    <div className="skill-popover" style={{ color: getLevelColor(tech.level) }}>
                      <span>{tech.level}</span>
                    </div>
                    <div className="tech-item-content">
                      <span className="tech-icon">
                        <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                      </span>
                      {tech.name}
                    </div>
                    <LevelIndicator level={tech.level} />
                  </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <div className={`skills-category ${activeTab === 2 ? 'active' : ''}`}>
              <FadeUp delay={0.3} triggerSelector="#skills">
                <h3 className="skills-block-title">Software & Tools</h3>
              </FadeUp>
              <div className="tech-list">
                {tools.map((tech, i) => (
                  <FadeUp delay={0.4 + (i * 0.1)} key={i} triggerSelector="#skills">
                  <div className="tech-item cursor-target">
                    <div className="skill-popover" style={{ color: getLevelColor(tech.level) }}>
                      <span>{tech.level}</span>
                    </div>
                    <div className="tech-item-content">
                      <span className="tech-icon">
                        <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                      </span>
                      {tech.name}
                    </div>
                    <LevelIndicator level={tech.level} />
                  </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <div className={`skills-category ${activeTab === 3 ? 'active' : ''}`}>
              <FadeUp delay={0.3} triggerSelector="#skills">
                <h3 className="skills-block-title">Productivity</h3>
              </FadeUp>
              <div className="tech-list">
                {productivity.map((tech, i) => (
                  <FadeUp delay={0.4 + (i * 0.1)} key={i} triggerSelector="#skills">
                  <div className="tech-item cursor-target">
                    <div className="skill-popover" style={{ color: getLevelColor(tech.level) }}>
                      <span>{tech.level}</span>
                    </div>
                    <div className="tech-item-content">
                      <span className="tech-icon">
                        <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                      </span>
                      {tech.name}
                    </div>
                    <LevelIndicator level={tech.level} />
                  </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>

          <div className={`other-abilities-container skills-category ${activeTab === 4 ? 'active' : ''}`} style={{ marginTop: '40px' }}>
            <FadeUp delay={0.3} triggerSelector="#skills">
              <h3 className="skills-block-title">Other Abilities</h3>
            </FadeUp>
            <div className="ability-list">
              {otherAbilities.map((ability, i) => (
                <FadeUp triggerSelector="#skills" delay={0.4 + (i * 0.1)} key={i}>
                <div className="ability-item cursor-target">
                  <div className="skill-popover" style={{ color: getLevelColor(ability.level) }}>
                    <span>{ability.level}</span>
                  </div>
                  <div className="ability-item-content">
                    <span className="ability-dot" />
                    <span className="ability-name">{ability.name}</span>
                  </div>
                  <LevelIndicator level={ability.level} />
                </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;