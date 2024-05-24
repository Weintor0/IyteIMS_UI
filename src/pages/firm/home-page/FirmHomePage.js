// CONNECTED

import React, {useState} from "react";

import NavigationMenu from "../../../components/firm/NavigationMenu";
import classes from "./FirmHomePage.module.css";

const FirmHomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {setSearchQuery(event.target.value);};
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);   /* search logic will be implemented*/
    };

    return (
        <>
            <NavigationMenu i={0}/>
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
                    <div className={classes.announcementBox}>
                        <>
                            <h3>My internship announcements</h3>
                            <p>13 unread</p>
                        </>
                    </div>
                    <div className={classes.subBoxContainer}>
                        <div className={classes.blankBox}></div>
                        <div className={classes.infoBox}>
                            <h3>SPAF filled out by student</h3>
                        </div>
                    </div>

                    <div className={classes.applicationBox}>
                        <>
                            <h3>Internship applications</h3>
                            <p>11 unread</p>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirmHomePage;
