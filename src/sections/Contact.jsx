import React from 'react';
import waIcon from '../assets/icons/whatsapp.png';
import instagramIcon from '../assets/icons/instagram.png';
import emailIcon from '../assets/icons/gmail.png';

const contactLinks = [
  {
    icon: waIcon,
    label: 'Phone / WhatsApp',
    value: '+62 896 6560 6322',
    href: 'tel:+6289665606322',
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

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Thank You
        </h2>
        <p className="contact-tagline">
          I'm open to new opportunities, collaborations, or just a friendly
          conversation. Feel free to reach out!
        </p>

        <div className="contact-links">
          {contactLinks.map((link, i) => (
            <a
              className="contact-link"
              href={link.href}
              key={i}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-link-icon">
                <img src={link.icon} alt={link.label} className="contact-link-icon-img" />
              </span>
              <div>
                <div>{link.label}</div>
                <div className="contact-link-value">{link.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;