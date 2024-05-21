// ChooseCompany.js
import React from 'react';
import './ChooseCompany.css';

const ChooseCompany = ({ onClose, onContinue }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Choose Company</h2>
        <select>
          <option>Select a company with active application...</option>
          {/* Add options here */}
        </select>
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={onContinue} className="continue-button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseCompany;
