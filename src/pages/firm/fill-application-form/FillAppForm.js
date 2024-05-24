import React, { useState } from 'react';
import classes from './FillAppForm.module.css';
import Pagination from '../../../components/Pagination';
import NavigationMenu from '../../../components/firm/NavigationMenu';

const FillAppForm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedNotification, setExpandedNotification] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const notifications = [
        'Student form 1', 'Student form 2', 'Student form 3', 'Student form 4', 'Student form 5',
        'Student form 6', 'Student form 7', 'Student form 8', 'Student form 9', 'Student form 10',
    ];

    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
    const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);   /* search logic will be implemented */
    };

    const handleUpdate = () => {
        alert('Blah');
    };

    const handleCancel = () => {
        setExpandedNotification(null);
    };

    const handleDownload = () => {
        alert('Blah');
    };

    const handleNotificationClick = (index) => {
        setExpandedNotification(index === expandedNotification ? null : index);
    };

    return(
        <>
            <NavigationMenu i={4}/>
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.header}>Application Forms</h2>
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
                <p className={classes.message}>Summer Practice Application Forms sent by students.</p>
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
                                        <div className={classes.leftActions}>
                                            <button className={classes.downloadButton} onClick={handleDownload}>Download application form</button>
                                            <button className={classes.updateButton} onClick={handleUpdate}>Update</button>
                                            <button className={classes.cancelButton} onClick={handleCancel}>Cancel</button>
                                        </div>
                                        <div className={classes.uploadContainer}>
                                            <div className={classes.uploadBox}>
                                                Drag and drop the new form here...
                                            </div>
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
        </>
    );
};

export default FillAppForm;
