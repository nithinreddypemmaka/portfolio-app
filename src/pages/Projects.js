import React from "react";
import './Projects.css';

export const Projects =() => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            {/*Project 1*/}
            <div className="project-card">
                <h2>Online Food Ordering System</h2>
                    <p className="tech-stack">
                <strong>Technologies:</strong> Java, JSP, Servlets, JDBC, MySQL, HTML/CSS, ReactJS, Tomcat, AWS Elastic Beanstalk
                </p>
                <ul>
                <li>Engineered a secure, end-to-end online food ordering platform with user authentication, dynamic restaurant/menu browsing, and responsive cart functionality.</li>
                <li>Designed a smooth checkout workflow and comprehensive order confirmation with real-time calculations.</li>
                <li>Integrated MySQL for robust data storage and retrieval; deployed on AWS Elastic Beanstalk for high availability.</li>
                <li>Utilized ReactJS for mobile-responsive user experience and reusable frontend components.</li>
                <li>Ensured adherence to best practices for performance and security throughout the application lifecycle.</li>
                </ul>
            </div>
        {/* Project 2 */}
        <div className="project-card">
            <h2>ML-Based Optimization of Machining AISI1045 Steel</h2>
            <p className="tech-stack">
            <strong>Duration:</strong> January 2024 – May 2024
            </p>
            <ul>
            <li>Developed a machine learning model to optimize machining parameters such as cutting speed, feed, and depth of cut for steel processing.</li>
            <li>Employed Minitab for design of experiments (DOE) and regression analysis to maximize material removal and minimize surface roughness.</li>
            <li>Demonstrated strong skills in process optimization, data analysis, and statistical modelling.</li>
            <li>Delivered measurable improvements in productivity and product quality for manufacturing processes.</li>
            </ul>
        </div>
    </div>
    );
};