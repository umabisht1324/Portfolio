// src/components/Header.js
import React from 'react';
import './Header.css';

function Header({ setActiveSection }) {
  return (
    <header className="Header">
      <nav>
        <ul className="nav-links">
          <li className="b1" onClick={() => setActiveSection('Home')}>Home</li>
          <li className="b1" onClick={() => setActiveSection('Projects')}>Projects</li>
          <li className="b1" onClick={() => setActiveSection('Education')}>Education</li>
          <li className="b1" onClick={() => setActiveSection('Skills')}>Skills</li>
          <li className="b1" onClick={() => setActiveSection('Achievements')}>Achievements</li>
          <li className="b1" onClick={() => setActiveSection('Contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
