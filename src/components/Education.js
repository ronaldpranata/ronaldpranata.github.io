import React from 'react';
import { useSelector } from 'react-redux';
import { selectEducation } from '../features/portfolio/portfolioSlice';
import './Education.css';

function Education() {
  const education = useSelector(selectEducation);

  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-icon">🎓</div>
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="edu-location">{edu.location}</p>
            <p className="edu-period">{edu.period}</p>
            <ul className="edu-details">
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
