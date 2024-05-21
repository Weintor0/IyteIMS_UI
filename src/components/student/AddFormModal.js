// AddFormModal.js
import React from 'react';
import './AddFormModal.css';

const AddFormModal = ({ onClose, onSend }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Summer Practice Application Form</h2>
        <div className="drop-area">
          <p>Drag and drop here...</p>
          {/* Add drag and drop functionality here */}
        </div>
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={onSend} className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default AddFormModal;
