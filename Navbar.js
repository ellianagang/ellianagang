// sr// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a></li> {/* New Resume link */}
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
