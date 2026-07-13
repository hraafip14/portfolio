import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import GradualBlur from '../components/animations/GradualBlur';
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

const desktopAppImages = [daImg1, daImg2, daImg3, daImg4, daImg5, daImg6, daImg7, daImg8];

const projects = [
  {
    type: 'Desktop Application',
    name: 'Project Desktop App',
    desc: 'A desktop application built as part of informatics engineering coursework, exploring GUI development and application logic.',
    tech: ['Java', 'NetBeans'],
    icon: desktopAppImages[0],
    images: desktopAppImages,
    link: '',
  },
  {
    type: 'Web Development',
    name: 'Basic Web for Dicoding',
    desc: 'A responsive web project submitted to the Dicoding platform for the final project of "Belajar Dasar Pemrograman Web"',
    tech: ['HTML', 'CSS'],
    icon: forPal,
    link: 'my-web/index.html',
  },
  {
    type: 'Web Development',
    name: 'Personal Notes Web App Using React',
    desc: 'A final project of "Belajar Membuat Aplikasi Web dengan React" at Dicoding Academy.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    icon: notes,
    link: 'my-personal-notes/index.html',
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
        <Swiper 
          modules={[Navigation]} 
          navigation 
          spaceBetween={24} 
          slidesPerView={1} 
          breakpoints={{
            768: { slidesPerView: 2 }
          }}
          className="projects-swiper"
        >
          {projects.map((proj, i) => {
            const isClickable = (proj.images && proj.images.length > 0) || proj.link;
            return (
              <SwiperSlide key={i} style={{ height: 'auto' }}>
                <div
                  className="project-card"
                  onClick={() => handleCardClick(proj)}
                  style={{ cursor: isClickable ? 'pointer' : 'default', height: '100%' }}
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
                    {proj.tech.map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </div>
                </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </GradualBlur>
      </div>

      {modalImages && (
        <div className="modal-overlay" onClick={() => setModalImages(null)}>
          <div className="modal-content image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalImages(null)}>×</button>

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

          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;