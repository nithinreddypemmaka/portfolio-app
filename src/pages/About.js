import React from "react";
import { SkillCard } from "../components/SkillCard.js";
import './About.css';

import css from '../assets/css.jpg';
import html from '../assets/html.jpg';
import js from '../assets/js.jpg';
import java from '../assets/java.jpg';
import python from '../assets/python.jpg';
import react from '../assets/react.jpg';

import { Certificate } from "../components/Certifications.js";
import javaCert from '../assets/javaCert.jpg';
import sqlCert from '../assets/sqlCert.jpg';
import pythonCert from '../assets/pythonCert.jpg';

export const About = () => {
  return (
    <div style={{color:'white'}} className="about-container">
      <h2>About Me</h2>
      <p>
        I'm Nithin, a recent B.Tech Mechanical Engineering graduate from Madanapalle Institute of Technology and Science, with a strong passion for web development and full-stack technologies.
      </p>
      <p>
        I've gained hands-on experience in building web applications using Java, JDBC, JSP, Servlets, HTML, CSS, and JavaScript. My recent project — an online food ordering system built with Java EE and deployed on AWS — reflects my practical understanding of full-stack development.
      </p>
      <p>
        I'm committed to writing clean, maintainable code and constantly improving my skills. I'm now seeking opportunities to join a dynamic development team and grow as a software engineer.
      </p>
      <h3 style={{ marginTop: '30px' }}> Education</h3>
      <p>
        <strong>Bachelor of Technology (Mechanical Engineering)</strong><br />
        Madanapalle Institute of Technology and Science<br />
        2021 – 2024<br />
        <strong>CGPA:</strong> 8.5
      </p>
      <h3 style={{ marginTop: '30px' }} id = 'skills'> Technical Skills</h3>
      
      <div className="skills-grid" >
        <SkillCard name="Java" image= {java} />
        <SkillCard name="Python" image= {python} />
        <SkillCard name="HTML" image= {html} />
        <SkillCard name="CSS" image= {css} />
        <SkillCard name="JavaScript" image= {js} />
        <SkillCard name="React" image={react} />
      </div>

      <h3 style={{ marginTop: '30px' }} id="certifications"> Certifications</h3>
      <div className="certificates-grid">
        <Certificate name="Java" image={javaCert} />
        <Certificate name="SQL" image={sqlCert} />
        <Certificate name="Python" image={pythonCert} />
      </div>
      
    </div>
  );                
};