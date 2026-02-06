import React from 'react';
import { useSelector } from 'react-redux';
import { selectExperience } from '../features/portfolio/portfolioSlice';
import './Experience.css';

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

function Experience() {
  const experience = useSelector(selectExperience);

  const renderAchievement = (achievement, idx) => {
    // If achievement has a title with subItems (nested structure)
    if (achievement.title && achievement.subItems) {
      return (
        <li key={idx} className="achievement-with-subitems">
          <span className="achievement-title">{parseText(achievement.title)}</span>
          <ul className="sub-achievements">
            {achievement.subItems.map((subItem, subIdx) => (
              <li key={subIdx} className="sub-achievement">
                {parseText(subItem)}
              </li>
            ))}
          </ul>
        </li>
      );
    }
    
    // Regular achievement with text
    if (achievement.text) {
      return (
        <li key={idx}>{parseText(achievement.text)}</li>
      );
    }
    
    // Fallback for simple string achievements (backward compatibility)
    if (typeof achievement === 'string') {
      return <li key={idx}>{parseText(achievement)}</li>;
    }
    
    return null;
  };

  return (
    <section className="experience-section">
      <h2 className="section-title">Employment History</h2>
      <div className="timeline">
        {experience.map((job, index) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="job-header">
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company} • {job.location}</p>
                </div>
                <span className="job-period">{job.period}</span>
              </div>
              <ul className="achievements-list">
                {job.achievements.map((achievement, idx) => 
                  renderAchievement(achievement, idx)
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
