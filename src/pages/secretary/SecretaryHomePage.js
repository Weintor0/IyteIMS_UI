import React from "react";
import { useNavigate } from 'react-router-dom';

import NavigationMenu from "../../components/secretary/NavigationMenu";
import Header from "../../components/Header";
import classes from "./SecretaryHomePage.module.css";

const SecretaryHomePage = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <>
            <NavigationMenu i={0}/>
            <div className={classes.container}>
                <Header title="Hello, Secretary" userName="Department Secretary"/>
                <p className={classes.welcomeMessage}>Welcome back!</p>
                <div className={classes.boxesContainer}>
                    <div className={classes.announcementBox}
                         onClick={(e) => navigateTo('/secretary/view-notifications')}>
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