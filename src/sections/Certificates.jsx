import React, { useState } from 'react';

import cert1 from '../assets/certificates/Dicoding Academy Certificate - Belajar Dasar Pemrogaraman Javascript.pdf';
import cert2 from '../assets/certificates/Dicoding Academy Certificate - Belajar Dasar Pemrograman Web.pdf';
import cert3 from '../assets/certificates/Dicoding Academy Certificate - Belajar Membuat Front-End Web untuk Pemula.pdf';
import cert4 from '../assets/certificates/Dicoding Academy Certificate - Belajar Membuat Aplikasi Web dengan React.pdf';
import cert5 from '../assets/certificates/Dicoding Academy Certificate - Memulai Pemrograman dengan Java.pdf';
import cert6 from '../assets/certificates/Udemy Certificate - Java Foundations Bootcamp Learn by Coding and Quizzes 2026.pdf';
import cert7 from '../assets/certificates/Udemy Certificate - Java OOP (Object Oriented Programming) with Excercises 2026.pdf';

const certificates = [
  { id: 1, title: 'Belajar Dasar Pemrograman Web', provider: 'Dicoding Academy', file: cert2 },
  { id: 2, title: 'Belajar Dasar Pemrograman Javascript', provider: 'Dicoding Academy', file: cert1 },
  { id: 3, title: 'Belajar Membuat Front-End Web untuk Pemula', provider: 'Dicoding Academy', file: cert3 },
  { id: 4, title: 'Belajar Membuat Aplikasi Web dengan React', provider: 'Dicoding Academy', file: cert4 },
  { id: 5, title: 'Memulai Pemrograman dengan Java', provider: 'Dicoding Academy', file: cert5 },
  { id: 6, title: 'Java Foundations Bootcamp Learn by Coding and Quizzes 2026', provider: 'Udemy', file: cert6 },
  { id: 7, title: 'Java OOP (Object Oriented Programming) with Excercises 2026', provider: 'Udemy', file: cert7 },
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="section certificates" id="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div 
              className="certificate-card" 
              key={cert.id}
              onClick={() => setSelectedCert(cert.file)}
            >
              <div className="certificate-info">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-provider">{cert.provider}</p>
              </div>
              <div className="certificate-view-btn">View Certificate &rarr;</div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>×</button>
            <iframe 
              src={selectedCert} 
              title="Certificate Preview" 
              className="certificate-preview"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
