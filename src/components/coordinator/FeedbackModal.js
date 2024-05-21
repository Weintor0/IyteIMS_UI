import React, {useState} from 'react';

const FeedbackModal = ({ isOpen, onClose, onSend, header }) => {

    const [inputText, setInputText] = useState("")
    const closeAndClean = ()=>{
        onClose();
        setInputText("")
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);  // Update the state to the current value of textarea
    };
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{
                backgroundColor: 'white', padding: '20px', borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '600px'
            }}>
                <h2 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>{header}</h2>
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    style={{
                    width: '100%', height: '100px', padding: '10px', fontSize: '16px',
                    boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ccc'
                }} placeholder="Write your feedback here...">
                </textarea>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <button onClick={closeAndClean} style={{
                        width: "45%", backgroundColor: 'red', border: 'none',
                        borderRadius: '20px', color: 'white', padding: '10px 20px',
                        cursor: 'pointer'
                    }}>Cancel</button>
                    <button onClick={() => onSend(inputText)} style={{
                        width: "45%", backgroundColor: 'green', border: 'none',
                        borderRadius: '20px', color: 'white', padding: '10px 20px',
                        cursor: 'pointer'
                    }}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;

