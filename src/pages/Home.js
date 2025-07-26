import React from 'react';
import './Home.css';
import myPhoto from '../assets/profile.jpg'; 

export const Home = () => {
  return (
    <div className="home-container">
      <img src={myPhoto} alt="Nithin Reddy" className="home-photo" />

      <div className="home-text">
        <h1 className="home-name">Nithin Reddy Pemmaka</h1>
        <p className="home-description">
          A passionate Java Full Stack Developer skilled in Java, JSP, Servlets, MySQL & React, focused on building scalable web applications with clean, maintainable code.
        </p>
      </div>
    </div>
  );
};
