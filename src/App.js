import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveSection } from './features/portfolio/portfolioSlice';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  const activeSection = useSelector(selectActiveSection);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          {renderSection()}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ronald Pranata Kurniawan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
