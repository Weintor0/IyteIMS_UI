import React, { useState } from 'react';
import './UploadModal.css';

import { upload } from '../../util/Request';
import { Role } from '../../util/Authorization';

const Modal = ({ showModal, handleClose, url, title }) => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const droppedFiles = e.dataTransfer.files;
    setFiles(Array.from(droppedFiles));
    console.log('Dropped files:', droppedFiles);
  };

  const handleSend = async () => {
    if (files.length === 0) {
      alert('Please upload a file first.');
      return;
    }

    setUploading(true);

    try {
      const response = await upload(url, files, Role.student);
      console.log('File uploaded successfully:', response.data);
      alert('File uploaded successfully');
      handleClose();
    }
    catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } 
    finally {
      setUploading(false);
    }
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <h2>{title}</h2>
        <div
          className={`drag-drop-area ${dragging ? 'highlight' : ''}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          Drag and drop here...
        </div>
        <div className="file-list">
          {files.length > 0 && (
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={handleClose}>Cancel</button>
          <button className="send-btn" onClick={handleSend} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
