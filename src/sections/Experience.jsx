import React, { useState } from 'react';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';

const experiences = [
  {
    period: '2026 – present',
    place: 'Ruangguru',
    location: 'Depok',
    title: 'Master Teacher Kalananti',
    tags: ['Part Time Teacher', 'Design a lesson plan', 'Hybrid session class', 'Teaching Coding with ScratchJr, Scratch, MIT App Inventor, and Python.'],
  },
  {
    period: '2025 – 2026',
    place: 'Toko Bangunan Dinda Jaya',
    location: 'Tambun, Bekasi',
    title: 'Kuliah Kerja Praktik',
    tags: ['Built Inventory Management Desktop App with NetBeans using Java and MySQL for database management.', 'Assigned as the lead programmer for the application development', 'Assisting with the writing of the documentation and practical report'],
  },
  {
    period: '2022 – 2026',
    place: 'SDIT Arkan Cendekia',
    location: 'Mustika Jaya, Bekasi',
    title: 'Qur\'an Learning Teacher',
    tags: ['Full time Class Teacher', 'Teaching how to read a Qur\'an with Iqro Method', 'Teaching how to memorize Qur\'an', 'Worked as an Islamic Team at school for planning future Qur\'an Learning Programs.'],
  }
];

function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const activeExp = experiences[activeTab];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <FadeUp delay={0.1}>
          <p className="section-label">Work History</p>
        </FadeUp>
        <h2 className="section-title">
          <SplitText text="Experience" delay={0.2} />
        </h2>

        <FadeUp delay={0.4}>
          <div className="experience-layout">
            {/* Tabs List */}
            <div className="exp-tabs-container">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  className={`exp-tab-btn ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  <span className="tab-indicator"></span>
                  {exp.place}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="exp-content-container edu-card cursor-target">
              <div className="edu-card-inner">
                <h3 className="exp-active-title">
                  {activeExp.title}
                </h3>
                <div className="exp-active-meta">
                  <span className="exp-active-period">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"></path></svg>
                    {activeExp.period}
                  </span>
                  <span className="exp-active-location">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
                    {activeExp.location}
                  </span>
                </div>
                <div className="exp-active-tags">
                  {activeExp.tags.map((tag, j) => (
                    <div className="exp-active-tag" key={j}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default Experience;