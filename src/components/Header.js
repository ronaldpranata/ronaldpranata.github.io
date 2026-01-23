import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfile, selectActiveSection, setActiveSection } from '../features/portfolio/portfolioSlice';
import './Header.css';

function Header() {
  const profile = useSelector(selectProfile);
  const activeSection = useSelector(selectActiveSection);
  const dispatch = useDispatch();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-info">
          <h1 className="header-name">{profile.name}</h1>
          <p className="header-title">{profile.title}</p>
        </div>
        <nav className="header-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => dispatch(setActiveSection(item.id))}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
