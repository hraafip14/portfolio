import React, { useState } from 'react';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import PixelSwap from '../components/PixelSwap';
import TargetCursor from '../components/TargetCursor';
import ElectricBorder from '../components/ElectricBorder';
import AnimatedModal from '../components/animations/AnimatedModal';
import PixelBlast from '../components/PixelBlast';
import GlassSurface from '../components/GlassSurface';

const educationData = [
  {
    period: '2019 – 2022',
    school: 'MA Nuurul Qur\'an',
    degree: 'MIPA Student',
    activities: [
      'I was a MIPA Student at this school and i learn a lot of things about math, physic, biology, chemistry, and other science subjects. Even though, I was not a top 10 student, but I was a responsible student and I always tried my best to learn new things.',
      'In this school, they also taught us about religion and how to be a good Muslim, including memorizing the Qur\'an. I may not a top 10 student in general subjects, but I got a "Mumtaz" grade for memorizing the Qur\'an Juz 28-26 at that time.',
    ],
  },
  {
    period: '2022 – 2026',
    school: 'Universitas Indraprasta PGRI',
    degree: 'Informatics Engineering Student',
    activities: ['At first, I didn\'t really know anything about programming or anything related to computers. But, I was curious about it and I started to learn about it. And I realized that I loved it.',
      'UNINDRA focuses more on the Java programming language, especially Java OOP or object oriented programming, database, and Desktop based application. My final project was also about Desktop based application using Java with NetBeans and MySQL for database.',
      ''
    ],
  },
];

function EduCard({ edu, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <GlassSurface
      width="100%"
      height="100%"
      borderRadius={16}
      backgroundOpacity={hovered ? 0.13 : 0}
      blur="30px"
      brightness="8%"
      saturation={1}
      distortionScale={0}
      className="edu-card cursor-target"
      style={{ cursor: 'pointer', flex: 1 }}
    >
      <div
        className="edu-card-inner"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onSelect(edu)}
      >
        <span className="edu-period">{edu.period}</span>
        <div className="edu-school">{edu.school}</div>
        <div className="edu-degree">{edu.degree}</div>
      </div>
    </GlassSurface>
  );
}

function About() {
  const [selectedEdu, setSelectedEdu] = useState(null);

  return (
    <section className="section about" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <PixelBlast
          variant="square"
          pixelSize={5}
          color="#ff5252"
          patternScale={8}
          patternDensity={0.5}
          pixelSizeJitter={2}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={1.5}
          edgeFade={0}
          transparent
        />
      </div>

      <AnimatedModal isOpen={!!selectedEdu} onClose={() => setSelectedEdu(null)} className="item">
        {selectedEdu && (
          <div style={{ padding: '0.5rem' }}>
            <h2>{selectedEdu.school}</h2>
            <h3>{selectedEdu.period}</h3>
            {Array.isArray(selectedEdu.activities) ? (
              selectedEdu.activities.map((act, idx) => (
                <p key={idx}>{act}</p>
              ))
            ) : (
              <p>{selectedEdu.activities}</p>
            )}
          </div>
        )}
      </AnimatedModal>

      <TargetCursor
        spinDuration={3}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.5}
        cursorColor="#e6e6e6"
        cursorColorOnTarget="#ff5252"
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">
          <SplitText text="About Me" delay={0.2} />
        </h2>
        <div className="about-grid">
          <FadeUp delay={0.4}>
            <PixelSwap
              className="cursor-target"
              firstContent={
                <div className="click-prompt">
                  <span>Click!</span>
                </div>
              }
              secondContent={
                <div className="found-message">
                  <div className="about-text">
                    <h2 className="section-about-title">
                      <SplitText text="Let me introduce!" delay={0.2} />
                    </h2>
                    <p>
                      Hello, my name is{' '}
                      <span className="about-highlight">
                        Hasby Muhammad Raafi Prasetyo
                      </span>{' '}
                      or you can simply call me <span className="about-highlight">"Hasby"</span>.
                      I am a fresh graduate with a Bachelor of Informatics Engineering from
                      Universitas Indraprasta PGRI, and I am from Depok, West Java.
                    </p>
                    <p>
                      I am a responsible person and as a Muslim, I will never abandon
                      the five times prayer a day. I am extremely looking for a new
                      challenge, because I have great motivation and{' '}
                      <span className="about-highlight">high spirit in work</span>.
                    </p>
                  </div>
                </div>
              }
              pixelSize={48}
              gap={0}
              pixelRadius={0}
              pixelSpin={65}
              pixelScale={0.5}
              duration={800}
              pixelDuration={450}
              pattern="random"
              randomness={0}
              fade
              trigger="click"
            />
          </FadeUp>
          <FadeUp delay={0.6}>
            <div className="edu-grid">
              {educationData.map((edu, i) => (
                <EduCard edu={edu} key={i} onSelect={setSelectedEdu} />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export default About;