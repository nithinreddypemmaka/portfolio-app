import React from "react";
import './Certificate.css';
import { useState } from "react";

export const Certificate = ({name, image }) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className="certificate" onClick={() => setIsOpen(true)}>
            <img src={image} alt={name} className="certificate-icon" />
            <div className="certificate-name">{name}</div>
       </div>
        {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content">
            <img src={image} alt={name} className="modal-image" />
          </div>
        </div>
      )}
      </>
    );
};
