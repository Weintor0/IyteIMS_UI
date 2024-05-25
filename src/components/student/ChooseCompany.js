// ChooseCompany.js
import React, { useState } from 'react';
import './ChooseCompany.css';

const ChooseCompany = ({ onClose, onContinue, internships }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleChange = (e) => {
    setSelectedId(e.target.value);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Choose Company</h2>
        <select onChange={handleChange}>
          <option>Select a company with active application...</option>
          {internships && internships.length && internships.map((internship,index) => (
              <option value={internship.internship.internshipId} key={index}>
                {internship.firm.firmName}
              </option>
          ))}
        </select>
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={() => onContinue(selectedId)} className="continue-button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseCompany;
