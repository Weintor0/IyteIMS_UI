// CONNECTED

import React, { useState, useEffect } from 'react';

import Pagination from '../../../components/common/pagination/Pagination';
import NavigationMenu from '../../../components/firm/NavigationMenu';
import Header from '../../../components/common/header/Header';
import classes from './FirmNotifications.module.css';

import { Role } from "../../../util/Authorization";
import { getRequest } from '../../../util/Request';

const FirmNotifications = () => {
    const [loaded, setLoaded] = useState(false);
    const [sliced, setSliced] = useState(false);

    const [notificationList, setNotificationList] = useState(null);
    const [currentNotificationList, setCurrentNotificationList] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;

    useEffect(() => {
        const fetchData = async() => {
        if (!loaded) {
                const url = `/notifications/incoming`;
                const res = await getRequest(url, Role.firm);

                setNotificationList(res.data);
                setLoaded(true);
            }
        }
        
        fetchData().catch((err) => {
            alert("An unknown problem has occurred unexpectedly" + err);
        });
    });

    useEffect(() => {
        if (loaded) {
            setCurrentNotificationList(notificationList.slice(indexOfFirstNotification, indexOfLastNotification));
            setSliced(true);
        }
    }, [loaded]);

    return(
        <>
            <NavigationMenu i={1}/>
            <div className={classes.container}>
                <Header titleFn={u => `Notifications`} userNameFn={u => u} userRole={Role.firm}/>
                <p className={classes.message}>See all your notifications here.</p>
                <div className={classes.boxesContainer}>
                    {sliced ? currentNotificationList.map((notification, index) => (
                        <div key={index} className={classes.notificationBox}>
                            {notification.content}
                        </div>
                    )) : null}
                    
                    {sliced ? <Pagination
                        currentPage={currentPage}
                        notificationsPerPage={notificationsPerPage}
                        totalNotifications={notificationList.length}
                        paginate={setCurrentPage}
                    /> : null}
                </div>
            </div>
        </>
    );
};

export default FirmNotifications;