import React, { useState } from 'react';

import NavigationMenu from '../../../components/student/NavigationMenu';
import Pagination from '../../../components/Pagination';
import classes from './StudentViewNotifications.module.css';

const StudentNotificationsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    
    const notificationsPerPage = 5;
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

    return(
        <>
            <NavigationMenu i={1}/>
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.header}>Notifications</h2>
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
                <p className={classes.message}>See all your notifications here.</p>
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
            </div>


        </>
    );
};

export default StudentNotificationsPage;