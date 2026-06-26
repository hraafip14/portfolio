import React from 'react';

const educationData = [
  {
    period: '2019 – 2022',
    school: 'MA Nuurul Qur\'an',
    degree: 'MIPA Student',
    icon: '🕌',
  },
  {
    period: '2022 – Now',
    school: 'Universitas Indraprasta',
    degree: 'Informatics Engineering Student',
    icon: '🎓',
  },
];

function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>

        <div className="edu-grid">
          {educationData.map((edu, i) => (
            <div className="edu-card" key={i}>
              <span className="edu-period">{edu.period}</span>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-degree">{edu.degree}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;