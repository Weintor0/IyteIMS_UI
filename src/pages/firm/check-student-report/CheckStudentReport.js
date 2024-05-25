import React, { useState } from 'react';
import classes from './CheckStudentReport.module.css';

import Pagination from '../../../components/common/pagination/Pagination';
import NavigationMenu from '../../../components/firm/NavigationMenu';
import Header from "../../../components/common/header/Header";

import { Role } from "../../../util/Authorization";

const CheckStudentReport = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedNotification, setExpandedNotification] = useState(null);
    const [isFeedbackPopupVisible, setIsFeedbackPopupVisible] = useState(false);
    const [feedback, setFeedback] = useState('');

    const notifications = [
        'Announcement 1', 'Announcement 2', 'Announcement 3', 'Announcement 4', 'Announcement 5',
        'Announcement 6', 'Announcement 7', 'Announcement 8', 'Announcement 9', 'Announcement 10',
    ];

    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
    const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

    const handleDownload = () => {
        alert('Blah');
    };

    const handleNotificationClick = (index) => {
        setExpandedNotification(index === expandedNotification ? null : index);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleRejectButtonClick = () => {
        setIsFeedbackPopupVisible(true);
    };

    const handleFeedbackSubmit = () => {
        alert(`Feedback submitted: ${feedback}`);
        setIsFeedbackPopupVisible(false);
        setFeedback('');
    };

    const handleFeedbackCancel = () => {
        setIsFeedbackPopupVisible(false);
        setFeedback('');
    };

    return (
        <>
            <NavigationMenu i={5}/>
            <div className={classes.container}>
                <Header titleFn={u => `Student Reports`} userNameFn={u => u} userRole={Role.firm}/>
                <p className={classes.message}>All student reports that have been sent.</p>
                <div className={classes.body}>
                    <div className={classes.boxesContainer}>
                        {currentNotifications.map((notification, index) => (
                            <div
                            key={index}
                            className={`${classes.notificationBox} ${expandedNotification === index ? classes.expanded : ''}`}
                            onClick={() => handleNotificationClick(index)}>
                                <div className={`${classes.notificationMessage} ${expandedNotification === index ? classes.expanded : ''}`}>
                                    {notification}
                                </div>
                                {expandedNotification === index && (
                                    <div className={classes.actions}>
                                        <button className={classes.downloadButton} onClick={handleDownload}>Download</button>
                                        <div className={classes.rightButtons}>
                                            <button className={classes.rejectButton} onClick={handleRejectButtonClick}>Reject and Give Feedback</button>
                                            <button className={classes.approveButton} onClick={() => alert('Approved')}>Approve</button>                                            
                                        </div>
                                    </div>
                                )}    
                            </div>
                        ))}

                        <Pagination
                            currentPage={currentPage}
                            notificationsPerPage={notificationsPerPage}
                            totalNotifications={notifications.length}
                            paginate={setCurrentPage}
                        />
                    </div>
                </div>
            </div>

            {isFeedbackPopupVisible && (
                <div className={classes.feedbackPopupOverlay}>
                    <div className={classes.feedbackPopup}>
                        <h3>Feedback:</h3>
                        <textarea
                            className={classes.feedbackInput}
                            value={feedback}
                            onChange={handleFeedbackChange}
                            placeholder='Write your feedback here...'
                        />
                        <div className={classes.feedbackButtons}>
                            <button className={classes.feedbackCancel} onClick={handleFeedbackCancel}>Cancel</button>
                            <button className={classes.feedbackSend} onClick={handleFeedbackSubmit}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CheckStudentReport;
