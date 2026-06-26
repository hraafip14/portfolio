import React from 'react';

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
        <p className="section-label">Work History</p>
        <h2 className="section-title">Experience</h2>

        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
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
        ))}
      </div>
    </section>
  );
}

export default Experience;