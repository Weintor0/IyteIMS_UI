// CONNECTED

import React, { useState, useEffect } from 'react';
import classes from './FirmNotifications.module.css';
import { useNavigate } from 'react-router-dom';
import MenuSelectedTabButton from '../../../components/MenuSelectedTabButton';
import MenuUnselectedTabButton from '../../../components/MenuUnselectedTabButton';
import Pagination from '../../../components/Pagination';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

const FirmNotifications = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    const [currentPage, setCurrentPage] = useState(1);
    const notificationsPerPage = 5;

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;

    const [loaded, setLoaded] = useState(null);
    const [notificationList, setNotificationList] = useState([]);
    const [currentNotificationList, setCurrentNotificationList] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
        if (!loaded) {
                const res = await axios.get("http://localhost:9090/internship/get-all", {
                    headers: { "Authorization": "Bearer " + token }});

                setNotificationList(res.data);
                setCurrentNotificationList(notificationList.slice(indexOfFirstNotification, indexOfLastNotification));
                setLoaded(true);
            }
        }
        
        fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly"));
    });

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
                <MenuUnselectedTabButton click={() => navigateTo('/firm/Home')} condition={false}/>
                <MenuSelectedTabButton/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/internship-offers')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/application-forms')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/evaluate-letter')} condition={false}/>
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
                    {loaded ? currentNotificationList.map((notification, index) => (
                        <div key={index} className={classes.notificationBox}>
                            {notification}
                        </div>
                    )) : null}
                    {loaded ? <Pagination
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