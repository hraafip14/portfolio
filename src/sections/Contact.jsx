import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import TextLoop from '../components/animations/TextLoop';
import AnimatedModal from '../components/animations/AnimatedModal';
import GlassSurface from '../components/GlassSurface';

import waIcon from '../assets/icons/whatsapp.png';
import instagramIcon from '../assets/icons/instagram.png';
import emailIcon from '../assets/icons/gmail.png';

import cert1 from '../assets/certificates/Dicoding Academy Certificate - Belajar Dasar Pemrogaraman Javascript.pdf';
import cert2 from '../assets/certificates/Dicoding Academy Certificate - Belajar Dasar Pemrograman Web.pdf';
import cert3 from '../assets/certificates/Dicoding Academy Certificate - Belajar Membuat Front-End Web untuk Pemula.pdf';
import cert4 from '../assets/certificates/Dicoding Academy Certificate - Belajar Membuat Aplikasi Web dengan React.pdf';
import cert5 from '../assets/certificates/Dicoding Academy Certificate - Memulai Pemrograman dengan Java.pdf';
import cert6 from '../assets/certificates/Udemy Certificate - Java Foundations Bootcamp Learn by Coding and Quizzes 2026.pdf';
import cert7 from '../assets/certificates/Udemy Certificate - Java OOP (Object Oriented Programming) with Excercises 2026.pdf';

const contactLinks = [
  {
    icon: waIcon,
    label: 'Phone / WhatsApp',
    value: '+62 896 6560 6322',
    href: 'https://wa.me/6289665606322',
  },
  {
    icon: instagramIcon,
    label: 'Instagram',
    value: '@hraafip',
    href: 'https://instagram.com/hraafip',
  },
  {
    icon: emailIcon,
    label: 'Email',
    value: 'hraafip14@gmail.com',
    href: 'mailto:hraafip14@gmail.com',
  },
];

const certificates = [
  { id: 1, title: 'Belajar Dasar Pemrograman Web', provider: 'Dicoding Academy', file: cert2 },
  { id: 2, title: 'Belajar Dasar Pemrograman Javascript', provider: 'Dicoding Academy', file: cert1 },
  { id: 3, title: 'Belajar Membuat Front-End Web untuk Pemula', provider: 'Dicoding Academy', file: cert3 },
  { id: 4, title: 'Belajar Membuat Aplikasi Web dengan React', provider: 'Dicoding Academy', file: cert4 },
  { id: 5, title: 'Memulai Pemrograman dengan Java', provider: 'Dicoding Academy', file: cert5 },
  { id: 6, title: 'Java Foundations Bootcamp Learn by Coding and Quizzes 2026', provider: 'Udemy', file: cert6 },
  { id: 7, title: 'Java OOP (Object Oriented Programming) with Excercises 2026', provider: 'Udemy', file: cert7 },
];

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(certificates[0].file);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <FadeUp delay={0.1}>
          <p className="section-label">Let's Connect</p>
        </FadeUp>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          <SplitText text="Thank You" delay={0.2} />
        </h2>
        <FadeUp delay={0.3}>
          <p className="contact-tagline">
            I'm open to new opportunities, collaborations, or just a friendly
            conversation. Feel free to reach out!
          </p>
        </FadeUp>

        <div className="contact-links">
          {contactLinks.map((link, i) => (
            <FadeUp key={i}>
              <div className="contact-link-wrapper">
                <a
                  className="contact-link-anchor"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                >
                  <GlassSurface
                    width={48}
                    height={48}
                    borderRadius={24}
                    brightness="12%"
                    blur="20px"
                    backgroundOpacity={0}
                    distortionScale={0}
                    className="contact-glass-btn cursor-target"
                  >
                    <span className="contact-link-icon">
                      <img src={link.icon} alt={link.label} className="contact-link-icon-img" />
                    </span>
                  </GlassSurface>
                </a>
                <span className="contact-tooltip">{link.value}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '42px' }}>
            <button
              className="cert-modal-btn"
              onClick={handleOpenModal}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
            >
              <GlassSurface
                width="auto"
                height={46}
                borderRadius={23}
                brightness="12%"
                blur="20px"
                backgroundOpacity={0}
                distortionScale={0}
                className="contact-glass-btn cert-glass-btn cursor-target"
                style={{ padding: '0 24px' }}
              >
                <span className="cert-btn-text">View Certificates</span>
              </GlassSurface>
            </button>
          </div>
        </FadeUp>
      </div>

      <TextLoop
        text="Build with vibe coding"
        shape="wave"
        speed={90}
        direction="forward"
        separator="✦"
        curviness={30}
        fontSize={24}
        fontWeight={800}
        letterSpacing={6}
        uppercase
        color="var(--white)"
        ribbon
        ribbonColor="var(--accent)"
        ribbonWidth={48}
        pauseOnHover={false}
      />

      <AnimatedModal isOpen={isModalOpen} onClose={handleCloseModal} className="modal-content">
        <iframe
          src={selectedCert}
          title="Certificate Preview"
          className="certificate-preview"
          style={{ marginBottom: '24px' }}
        ></iframe>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={16}
          slidesPerView={1}
          className="certificates-swiper"
          onSlideChange={(swiper) => setSelectedCert(certificates[swiper.realIndex].file)}
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                style={{ maxWidth: 'calc(100% - 90px)', margin: '0 auto' }}
              >
                <GlassSurface
                  width="auto"
                  height="auto"
                  borderRadius={12}
                  brightness="12%"
                  blur="20px"
                  backgroundOpacity={selectedCert === cert.file ? 0.2 : 0}
                  distortionScale={0}
                  className={`modal-cert-glass-card ${selectedCert === cert.file ? 'active-cert' : ''}`}
                  style={{
                    border: selectedCert === cert.file ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: selectedCert === cert.file ? '0 0 16px rgba(255, 82, 82, 0.35)' : 'none',
                    padding: '8px 16px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div className="certificate-info" style={{ width: '100%', maxWidth: '100%', textAlign: 'center' }}>
                    <h3 className="certificate-title" style={{ fontSize: '13px', marginBottom: '2px', whiteSpace: 'normal', wordBreak: 'break-word', overflowWrap: 'break-word', lineHeight: '1.3' }}>{cert.title}</h3>
                    <p className="certificate-provider" style={{ fontSize: '11px' }}>{cert.provider}</p>
                  </div>
                </GlassSurface>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedModal>
    </section>
  );
}

export default Contact;