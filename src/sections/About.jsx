import React from 'react';

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Let me introduce!</h2>

        <div className="about-grid">
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

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Teaching</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">S1</div>
              <div className="stat-label">Informatics Engineering (on going)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;