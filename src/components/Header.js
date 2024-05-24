import React, { useState } from 'react';
import classes from './Header.module.css';

const Header = ({title, userName}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);   /* search logic will be implemented*/
    };

    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerLeftContainer}>
                <h2 className={classes.header}>{title}</h2>
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
                <span className={classes.profileName}>{userName}</span>
            </div>
        </div>
    );
};

export default Header;