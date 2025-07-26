import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href='#skills'>Skills</a>
        <a href='#certifications'>Certifications</a>
        <a href="#contact">Contact</a>

      </nav>
    </header>
  );
};
