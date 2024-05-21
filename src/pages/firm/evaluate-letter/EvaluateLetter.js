import React, { useState } from 'react';
import classes from './EvaluateLetter.module.css';
import { useNavigate } from 'react-router-dom';
import MenuSelectedTabButton from '../../../components/MenuSelectedTabButton';
import MenuUnselectedTabButton from '../../../components/MenuUnselectedTabButton.js';
import Pagination from '../../../components/Pagination';
import { useSearchParams } from "react-router-dom";

const EvaluateLetter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    const [currentPage, setCurrentPage] = useState(1);
    const notificationsPerPage = 5;
    const [expandedNotification, setExpandedNotification] = useState(null);
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

    const handleWaiting = () => {
        alert('Blah');
    };
    
    const handleApproved = () => {
        alert('Blah');
    };

    const handleRejected = () => {
        alert('Blah');
    };

    const handleApprovedSort = () => {
        alert('Blah');
    };

    const handleRejectedSort = () => {
        alert('Blah');
    };

    const handleDownload = () => {
        alert('Blah');
    };

    const handleNotificationClick = (index) => {
        setExpandedNotification(index === expandedNotification ? null : index);
    };
    
    return(
        <>
            <div className={classes.sideBar}>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/home')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/notifications')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/internship-offers')} condition={false}/>
                <MenuSelectedTabButton />
                <MenuUnselectedTabButton click={() => navigateTo('/firm/application-forms')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/student-reports')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/company-reports')} condition={false}/>
            </div>

            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.header}>Internship Applications</h2>
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
                                        <button className={classes.downloadButton} onClick={handleDownload}>Download application letter</button>
                                        <div className={classes.rightButtons}>
                                            <button className={classes.approveButton} onClick={handleApproved}>Approve</button>
                                            <button className={classes.rejectButton} onClick={handleRejected}>Reject</button>
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
                    <div className={classes.sortContainer}>
                        <div className={classes.sortContent}>
                            <p>Sort By:</p>
                            <button onClick={handleWaiting} className={classes.sortButton}>Waiting Applications</button>
                            <button onClick={handleApprovedSort} className={classes.sortButton}>Approved Applications</button>
                            <button onClick={handleRejectedSort} className={classes.sortButton}>Rejected Applicatons</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default EvaluateLetter;