import React, { useState } from 'react';
import classes from './SecretaryNotificationsPage.module.css';
import { useNavigate } from 'react-router-dom';
import MenuSelectedTabButton from '../../components/MenuSelectedTabButton';
import MenuUnselectedTabButton from '../../components/MenuUnselectedTabButton';
import Pagination from '../../components/Pagination';
import { useSearchParams } from "react-router-dom";

const SecretaryNotificationsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    const [currentPage, setCurrentPage] = useState(1);
    const notificationsPerPage = 5;

    const [searchQuery, setSearchQuery] = useState('');
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
        navigate({pathname: path, search: `?id=${id}&token=${token}`});
    };


    return(
        <>
            <div className={classes.sideBar}>
                <MenuUnselectedTabButton click={() => navigateTo('/secretary/home')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/secretary/ssi-transactions')} condition={false}/>
                <MenuSelectedTabButton/>
            </div>

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

export default SecretaryNotificationsPage;