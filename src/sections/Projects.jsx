import React, { useState } from 'react';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import GradualBlur from '../components/animations/GradualBlur';
import BorderGlow from '../components/BorderGlow';
import AnimatedModal from '../components/animations/AnimatedModal';
import forPal from "../assets/for-pal.png";
import notes from "../assets/notes.png";

// Import desktop app images
import daImg1 from "../assets/desktop-app/menu-utama.png";
import daImg2 from "../assets/desktop-app/data-barang.png";
import daImg3 from "../assets/desktop-app/barang-masuk.png";
import daImg4 from "../assets/desktop-app/barang-terjual.png";
import daImg5 from "../assets/desktop-app/data-karyawan.png";
import daImg6 from "../assets/desktop-app/data-pelanggan.png";
import daImg7 from "../assets/desktop-app/data-penyedia.png";
import daImg8 from "../assets/desktop-app/pengiriman-barang.png";

import faImg1 from "../assets/final-project/data-training.png";
import faImg2 from "../assets/final-project/pohon-keputusan.png";
import faImg3 from "../assets/final-project/langkah-perhitungan.png";
import faImg4 from "../assets/final-project/data-guru.png";
import faImg5 from "../assets/final-project/prediksi.png";
import faImg6 from "../assets/final-project/laporan.png";

import Java from "../assets/icons/java.png";
import NetBeans from "../assets/icons/netbeans.png";
import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JavaScript from "../assets/icons/javascript.png";
import IconReact from "../assets/icons/react.png";

const desktopAppImages = [daImg1, daImg2, daImg3, daImg4, daImg5, daImg6, daImg7, daImg8];
const finalProjectImages = [faImg1, faImg2, faImg3, faImg4, faImg5, faImg6];

const projects = [
  {
    type: 'Desktop Application',
    name: 'Inventory Management App',
    desc: 'A desktop application developed as the final project for the Visual Programming course at Universitas Indraprasta PGRI and implemented during the KKP course (Kuliah Kerja Praktik) for use by a building supply store.',
    tech: [
      { name: 'Java', icon: Java },
      { name: 'NetBeans', icon: NetBeans }
    ],
    icon: desktopAppImages[0],
    images: desktopAppImages,
    link: '',
    glowColors: ['#ff5252', '#d3a3a3', '#ff8a80'],
  },
  {
    type: 'Web Development',
    name: 'Basic Web for Dicoding',
    desc: 'My first responsive web project submitted to the Dicoding platform for the final project of "Belajar Dasar Pemrograman Web"',
    tech: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS }
    ],
    icon: forPal,
    link: 'my-web/index.html',
    glowColors: ['#ff5252', '#ff8a80', '#e6e6e6'],
  },
  {
    type: 'Web Development',
    name: 'Personal Notes Web App Using React',
    desc: 'A final project of "Belajar Membuat Aplikasi Web dengan React" at Dicoding Academy.',
    tech: [
      { name: 'React', icon: IconReact },
      { name: 'HTML', icon: HTML },
      { name: 'CSS', icon: CSS },
      { name: 'JavaScript', icon: JavaScript }
    ],
    icon: notes,
    link: 'notes/index.html',
    glowColors: ['#61dafb', '#ff5252', '#d3a3a3'],
  },
  {
    type: 'Desktop Application',
    name: 'Quran Memorization Prediction System',
    desc: 'A desktop application designed to predict the results of Quran memorization certification at SDIT Arkan Cendekia using the Decision Tree method.',
    tech: [
      { name: 'Java', icon: Java},
      { name: 'NetBeans', icon: NetBeans}
    ],
    icon: finalProjectImages[0],
    images: finalProjectImages,
    link: '',
    glowColors: ['#ff5252', '#d3a3a3', '#ff8a80'],
  }
];

function Projects() {
  const [modalImages, setModalImages] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleCardClick = (proj) => {
    if (proj.images && proj.images.length > 0) {
      setModalImages(proj.images);
      setCurrentImgIndex(0);
    } else if (proj.link) {
      window.open(proj.link, '_blank');
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          <SplitText text="Projects" delay={0.2} />
        </h2>

        <GradualBlur delay={0.4} blurAmount={12}>
          <div className="projects-grid">
            {projects.map((proj, i) => {
              const isClickable = (proj.images && proj.images.length > 0) || proj.link;
              return (
                <FadeUp key={i} delay={0.2 + i * 0.15}>
                  <BorderGlow
                    edgeSensitivity={35}
                    glowColor="0 80 70"
                    backgroundColor="#1a1a1a"
                    borderRadius={16}
                    glowRadius={60}
                    glowIntensity={2}
                    coneSpread={40}
                    colors={proj.glowColors}
                  >
                    <div
                      className="project-card"
                      onClick={() => handleCardClick(proj)}
                      style={{ cursor: isClickable ? 'pointer' : 'default' }}
                    >
                      <div className="project-thumb">
                        {typeof proj.icon === 'string' && !proj.icon.startsWith('/') && !proj.icon.startsWith('.') && !proj.icon.startsWith('data:') && !proj.icon.includes('static/media') && proj.icon.length < 10 ? (
                          <span style={{ fontSize: 48, opacity: 0.4 }}>{proj.icon}</span>
                        ) : (
                          <img src={proj.icon} alt={proj.name} />
                        )}
                      </div>
                      <div className="project-body">
                        <div className="project-type">{proj.type}</div>
                        <h3 className="project-name">{proj.name}</h3>
                        <p className="project-desc">{proj.desc}</p>
                        <div className="project-tech">
                          {proj.tech.map((t, j) => {
                            const isObj = typeof t === 'object' && t !== null;
                            const name = isObj ? t.name : t;
                            const icon = isObj ? t.icon : null;
                            return (
                              <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                {icon && <img src={icon} alt={name} style={{ width: '16px', height: '16px', objectFit: 'contain' }} />}
                                {name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </FadeUp>
              );
            })}
          </div>
        </GradualBlur>
      </div>

      <AnimatedModal isOpen={!!modalImages} onClose={() => setModalImages(null)} className="image-modal-content">
        {modalImages && (
          <>
            <div className="carousel-container">
              <button className="carousel-btn prev-btn" onClick={prevImage}>&#10094;</button>
              <img src={modalImages[currentImgIndex]} alt={`Screenshot ${currentImgIndex + 1}`} className="carousel-image" />
              <button className="carousel-btn next-btn" onClick={nextImage}>&#10095;</button>
            </div>

            <div className="carousel-dots">
              {modalImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentImgIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                ></span>
              ))}
            </div>
          </>
        )}
      </AnimatedModal>
    </section>
  );
}

export default Projects;