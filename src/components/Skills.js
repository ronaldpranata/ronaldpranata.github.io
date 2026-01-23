import React from 'react';
import { useSelector } from 'react-redux';
import { selectSkills } from '../features/portfolio/portfolioSlice';
import './Skills.css';

function Skills() {
  const skills = useSelector(selectSkills);

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skills-tags">
              {skillCategory.items.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
