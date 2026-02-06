import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile, selectCompetencies } from '../features/portfolio/portfolioSlice';
import './About.css';

// Helper function to parse markdown-style bold text
const parseText = (text) => {
  if (!text) return null;
  
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

function About() {
  const profile = useSelector(selectProfile);
  const competencies = useSelector(selectCompetencies);

  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="about-avatar">
          <img 
            src={`${process.env.PUBLIC_URL}/photo.jpeg`} 
            alt={profile.name}
            className="avatar-image"
          />
        </div>
        <div className="about-intro">
          <h2>Profile</h2>
          <p className="about-summary">{parseText(profile.summary)}</p>
        </div>
      </div>

      <div className="competencies">
        <h3 className="section-title">Areas of Expertise</h3>
        <div className="competencies-grid">
          {competencies.map((comp, index) => (
            <div key={index} className="competency-card">
              <div className="competency-icon">
                <span>{index + 1}</span>
              </div>
              <h4>{comp.title}</h4>
              <p>{comp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
