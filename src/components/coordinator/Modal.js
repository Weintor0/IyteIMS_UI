import React from 'react';

const Modal = ({ isOpen, onClose, onContinue, header, text}) => {
    if (!isOpen) return null;

    return (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '300px' }}>
                <h2>{header}</h2>
                <p>{text}</p>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <button onClick={onClose} style={{ width:"45%", backgroundColor: 'red', border: 'none', borderRadius: '20px', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Cancel</button>
                    <button onClick={onContinue} style={{width:"45%", backgroundColor: 'green', border: 'none', borderRadius: '20px', color: 'white', padding: '10px 20px', cursor: 'pointer' }}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
