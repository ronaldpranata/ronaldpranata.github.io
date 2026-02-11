import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProjects } from '../features/portfolio/portfolioSlice';
import './Projects.css';

function Projects() {
  const projects = useSelector(selectProjects);
  const [selectedImage, setSelectedImage] = useState(null);

  const personalProjects = projects ? projects.filter(p => p.type === 'personal') : [];
  const dentsuProjects = projects ? projects.filter(p => p.type === 'dentsu') : [];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">
      <div className="project-image-container" onClick={() => openModal(project.image)}>
        <img src={project.image} alt={project.name} className="project-image" />
        <div className="project-overlay">
          <button className="view-project-btn">
            <span className="icon">🔍</span> View Image
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header">
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.name}</h3>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        {project.link && project.link !== '#' && (
          <a href={project.link} className="visit-site-btn" target="_blank" rel="noopener noreferrer">
            Visit Website ➜
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section className="projects-section">
      <h2 className="section-title">Portfolio Projects</h2>

      {/* Personal Projects Section */}
      {personalProjects.length > 0 && (
        <div className="project-group">
          <h3 className="group-title">Personal Projects</h3>
          <div className="projects-grid">
            {personalProjects.map(renderProjectCard)}
          </div>
        </div>
      )}

      {/* Dentsu Projects Section */}
      {dentsuProjects.length > 0 && (
        <div className="project-group">
          <h3 className="group-title">Dentsu Projects</h3>
          <div className="projects-grid">
            {dentsuProjects.map(renderProjectCard)}
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img src={selectedImage} alt="Project Full Size" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
