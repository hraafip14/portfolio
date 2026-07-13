import React from 'react';
import SplitText from '../components/animations/SplitText';
import FadeUp from '../components/animations/FadeUp';
import waIcon from '../assets/icons/whatsapp.png';
import instagramIcon from '../assets/icons/instagram.png';
import emailIcon from '../assets/icons/gmail.png';

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

function Contact() {
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
            <FadeUp delay={0.4 + (i * 0.1)} key={i}>
            <a
              className="contact-link"
              href={link.href}
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
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;