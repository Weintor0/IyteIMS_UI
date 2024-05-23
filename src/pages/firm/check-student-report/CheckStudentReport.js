import React, { useState } from 'react';
import classes from './CheckStudentReport.module.css';
import { useNavigate } from 'react-router-dom';
import MenuSelectedTabButton from '../../../components/MenuSelectedTabButton';
import MenuUnselectedTabButton from '../../../components/MenuUnselectedTabButton.js';
import Pagination from '../../../components/Pagination';

const CheckStudentReport = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const notificationsPerPage = 5;
    const [expandedNotification, setExpandedNotification] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFeedbackPopupVisible, setIsFeedbackPopupVisible] = useState(false);
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();

    const notifications = [
        'Announcement 1', 'Announcement 2', 'Announcement 3', 'Announcement 4', 'Announcement 5',
        'Announcement 6', 'Announcement 7', 'Announcement 8', 'Announcement 9', 'Announcement 10',
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

    const navigateTo = (path) => {
        navigate(path);
    };

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
            <div className={classes.sideBar}>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/home')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/notifications')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/internship-offers')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/evaluate-letter')} condition={false} />
                <MenuUnselectedTabButton click={() => navigateTo('/firm/send-application-form')} condition={false}/>
                <MenuSelectedTabButton/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/send-company-form')} condition={false}/>
            </div>

            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.header}>Student Reports</h2>
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
