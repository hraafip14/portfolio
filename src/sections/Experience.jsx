import React from 'react';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';

const experiences = [
  {
    period: '2022 – 2026',
    place: 'SDIT Arkan Cendekia',
    title: 'Qur\'an Learning Teacher',
    desc: 'I have experience as a Qur\'an Learning Teacher for four years, been a Class Teacher for one year, and also working as an Islamic Team at School for planning future Qur\'an Learning Programs.',
    tags: ['Teaching', 'Curriculum Planning', 'Islamic Studies', 'Class Management'],
  },
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <FadeUp delay={0.1}>
          <p className="section-label">Work History</p>
        </FadeUp>
        <h2 className="section-title">
          <SplitText text="Experience" delay={0.2} />
        </h2>

        {experiences.map((exp, i) => (
          <FadeUp delay={0.4 + (i * 0.2)} key={i}>
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-place">{exp.place}</div>
            </div>
            <div className="exp-detail">
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tags">
                {exp.tags.map((tag, j) => (
                  <span className="exp-tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export default Experience;