import React from "react";
import './SkillCard.css';

export const SkillCard = ({name, image }) => {
    return(
        <div className="skill-card">
            <img src={image} alt={name} className="skill-icon" />
            <div className="skill-name">{name}</div>
    </div>
    );
};