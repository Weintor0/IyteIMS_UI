import React, { useState } from 'react';

import NavigationMenu from "../../components/secretary/NavigationMenu";
import Header from "../../components/Header";
import Pagination from '../../components/Pagination';
import classes from './SecretaryNotificationsPage.module.css';

import { Role } from "../../util/Authorization";

const SecretaryNotificationsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const notifications = [
        'Announcement 1', 'Announcement 2', 'Announcement 3', 'Announcement 4', 'Announcement 5',
        'Announcement 6', 'Announcement 7', 'Announcement 8', 'Announcement 9', 'Announcement 10',
    ];

    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
    const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

    return(
        <>
            <NavigationMenu i={1}/>
            <div className={classes.container}>
                <Header titleFn={u => `Notifications`} userNameFn={u => u} userRole={Role.secretary}/>
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

export default SecretaryNotificationsPage;