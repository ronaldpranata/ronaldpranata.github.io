import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../features/portfolio/portfolioSlice';
import './Contact.css';

function Contact() {
  const profile = useSelector(selectProfile);

  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Phone</h3>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>{profile.location}</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        </div>
        <div className="contact-cta">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a href={`mailto:${profile.email}`} className="cta-button">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
