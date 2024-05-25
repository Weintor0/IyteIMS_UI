import React, { useState } from 'react';
import classes from './UploadFirmReport.module.css';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../components/common/pagination/Pagination';
import NavigationMenu from '../../../components/firm/NavigationMenu.js';

const UploadFirmReport = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const notificationsPerPage = 5;

    const [searchQuery, setSearchQuery] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showSecondPopup, setShowSecondPopup] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState('');
    const navigate = useNavigate();

    const notifications = [
        'Announcement 1', 'Announcement 2', 'Announcement 3', 'Announcement 4', 'Announcement 5',
        'Announcement 6', 'Announcement 7', 'Announcement 8', 'Announcement 9', 'Announcement 10',
    ];

    const students = [
        'Student A', 'Student B', 'Student C', 'Student D'
    ];

    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
    const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);   /* search logic will be implemented*/
    };

    const handleAddClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setShowSecondPopup(false);
    };

    const handleStudentChange = (event) => {
        setSelectedStudent(event.target.value);
    };

    const handleContinueClick = () => {
        if (selectedStudent) {
            console.log('Selected student:', selectedStudent);
            // Logic to handle the continue action
            setShowPopup(false);
            setShowSecondPopup(true);
        }
    };

    return (
        <>
            <NavigationMenu i={6} />
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.header}>Company Reports</h2>
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                className={classes.searchInput}
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </form>
                    </div>
                    <div className={classes.profileContainer}>
                        <button className={classes.profileButton}></button>
                        <span className={classes.profileName}>Name, S.</span>
                    </div>
                </div>
                <p className={classes.message}>See all reports you have sent so far.</p>
                <div className={classes.body}>
                    <div className={classes.boxesContainer}>
                        {currentNotifications.map((notification, index) => (
                            <div key={index} className={classes.notificationBox}>
                                {notification}
                            </div>
                        ))}
                        <Pagination
                            currentPage={currentPage}
                            notificationsPerPage={notificationsPerPage}
                            totalNotifications={notifications.length}
                            paginate={setCurrentPage}
                        />
                    </div>
                    <div className={classes.addAnnouncementsButton}>
                        <button onClick={handleAddClick} className={classes.addButton}>
                            Upload Company Report
                        </button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className={classes.popupOverlay}>
                    <div className={classes.popup}>
                        <h3>Choose a student</h3>
                        <select value={selectedStudent} onChange={handleStudentChange}>
                            <option value="" disabled>Select a student with an active internship...</option>
                            {students.map((student, index) => (
                                <option key={index} value={student}>{student}</option>
                            ))}
                        </select>
                        <div className={classes.popupButtons}>
                            <button className={classes.cancelButton} onClick={handleClosePopup}>Cancel</button>
                            <button className={classes.continueButton} onClick={handleContinueClick} disabled={!selectedStudent}>Continue</button>
                        </div>
                    </div>
                </div>
            )}
            {showSecondPopup && (
                <div className={classes.popupOverlay}>
                    <div className={classes.popup}>
                        <h3>Add Company Form</h3>
                        <div className={classes.uploadContainer}>
                            <p>Drag and drop here...</p>
                        </div>
                        <div className={classes.popupButtons}>
                            <button className={classes.cancelButton} onClick={handleClosePopup}>Cancel</button>
                            <button className={classes.continueButton}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UploadFirmReport;
