import React from 'react';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <FadeUp delay={0.1}>
          <p className="section-label">About Me</p>
        </FadeUp>
        <h2 className="section-title">
          <SplitText text="Let me introduce!" delay={0.2} />
        </h2>

        <div className="about-grid">
          <FadeUp delay={0.4}>
            <div className="about-text">
            <p>
              Hello, my name is{' '}
              <span className="about-highlight">
                Hasby Muhammad Raafi Prasetyo
              </span>{' '}
              or you can simply call me <span className="about-highlight">"Hasby"</span>.
              I am currently a fourth year Informatics Engineering student at
              Universitas Indraprasta, and I am from Depok, West Java.
            </p>
            <p>
              I am a responsible person and as a Muslim, I will never abandon
              the five times prayer a day. I am extremely looking for a new
              challenge, because I have great motivation and{' '}
              <span className="about-highlight">high spirit in work</span>.
            </p>
            </div>
          </FadeUp>

          <div className="about-stats">
            <FadeUp delay={0.5}>
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Teaching</div>
              </div>
            </FadeUp>
            <FadeUp delay={0.6}>
              <div className="stat-card">
                <div className="stat-number">S1</div>
                <div className="stat-label">Informatics Engineering (on going)</div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;