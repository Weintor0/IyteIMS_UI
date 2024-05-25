import React, { useState, useEffect } from 'react';
import classes from './Header.module.css';

import { getUserName } from "../../../util/Profile";

const Header = ({titleFn, userNameFn, userRole}) => {
    const [userName, setUserName] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);   /* search logic will be implemented*/
    };

    useEffect(() => {
        const fetchData = async() => {
            if (!userName) { setUserName(await getUserName(userRole)); }
        }
        fetchData().catch((err) => {
            alert("An unknown problem has occurred unexpectedly: " + err);
        });
    });

    return userName && (
        <div className={classes.headerContainer}>
            <div className={classes.headerLeftContainer}>
                <h2 className={classes.header}>{titleFn(userName)}</h2>
                <form className={classes.form} onSubmit={handleSearchSubmit}>
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
                <span className={classes.profileName}>{userNameFn(userName)}</span>
            </div>
        </div>
    );
};

export default Header;