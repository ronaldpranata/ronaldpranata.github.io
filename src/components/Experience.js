import React from 'react';
import { useSelector } from 'react-redux';
import { selectExperience } from '../features/portfolio/portfolioSlice';
import './Experience.css';

function Experience() {
  const experience = useSelector(selectExperience);

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
                {job.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
