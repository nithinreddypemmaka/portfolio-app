import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'; // 👈 Import icons

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <p>© 2025 Nithin Reddy. All rights reserved.</p>
      <div className="footer-buttons">
        <a href="mailto:nithinreddypemmakaofficial@gmail.com" className="footer-btn" title="Email Me">
          <FaEnvelope size={20} />
        </a>
        <a href="tel:6302163916" className="footer-btn" title="Call Me">
          <FaPhone size={20} />
        </a>
        <a href="https://www.linkedin.com/in/nithinreddypemmaka/" target="_blank" rel="noreferrer" className="footer-btn" title="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/nithinreddypemmaka" target="_blank" rel="noreferrer" className="footer-btn" title="GitHub">
          <FaGithub size={20} />
        </a>
      </div>
    </footer>
  );
};
