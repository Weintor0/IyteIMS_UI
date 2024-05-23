import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import MenuSelectedTabButton from '../../components/MenuSelectedTabButton';
import MenuUnselectedTabButton from '../../components/MenuUnselectedTabButton';
import classes from "./SecretaryHomePage.module.css";

const SecretaryHomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

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

    return (
        <>
            <div className={classes.sideBar}>
                <MenuSelectedTabButton/>
                <MenuUnselectedTabButton click={() => navigateTo('/secretary/ssi-transactions')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/secretary/notifications')} condition={false}/>
            </div>
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.greeting}>Hello, Name.</h2>
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
                <p className={classes.welcomeMessage}>Welcome back!</p>
                <div className={classes.boxesContainer}>
                    <div className={classes.announcementBox}
                         onClick={(e) => navigateTo('/secretary/notifications')}>
                        <>
                            <h3>Notifications</h3>
                            <p>13 unread</p>
                        </>
                    </div>
                    <div className={classes.subBoxContainer}>
                        <div className={classes.blankBox}></div>
                        <div className={classes.infoBox}
                             onClick={(e) => navigateTo('/secretary/ssi-transactions')}>
                            <h3>SSI Transactions</h3>
                            <p>2 unread</p>
                        </div>
                    </div>

                    <div className={classes.applicationBox}></div>
                </div>

            </div>
        </>
    );
};

export default SecretaryHomePage;