import React, { useState } from 'react';
import './DragAndDrop.css';

const DragAndDrop = ({existingFiles, dropHandler}) => {
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState(existingFiles);

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
        const droppedFilesArray = Array.from(droppedFiles);
        setFiles(droppedFilesArray);
        dropHandler && dropHandler(droppedFilesArray);
        console.log('Dropped files:', droppedFiles);
    };

    return (
        <>
            <div
                className={`drag-drop-area ${dragging ? 'highlight' : ''}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
            Drag and drop here...
            </div>

            <div className="file-list">
                {files && files.length > 0 && (
                    <ul>
                    {files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                    ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default DragAndDrop;