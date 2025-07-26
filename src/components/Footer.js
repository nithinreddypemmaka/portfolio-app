import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Nithin Reddy. All rights reserved.</p>
      <div className="footer-buttons">
        <a href="mailto:nithinreddypemmakaofficial@gmail.com" className="footer-btn">Email Me</a>
        <a href="tel: 6302163916" className="footer-btn">Call Me</a>
        <a href="https://www.linkedin.com/in/nithinreddypemmaka/" target="_blank" rel="noreferrer" className="footer-btn">LinkedIn</a>
      </div>
    </footer>
  );
};
