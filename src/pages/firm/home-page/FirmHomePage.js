// CONNECTED

import React from "react";

import Header from "../../../components/common/header/Header";
import NavigationMenu from "../../../components/firm/NavigationMenu";
import classes from "./FirmHomePage.module.css";

import { Role } from "../../../util/Authorization";

const FirmHomePage = () => {
    return (
        <>
            <NavigationMenu i={0}/>
            <div className={classes.container}>
            <Header titleFn={u => `Hello, ${u}`} userNameFn={u => u} userRole={Role.firm}/>
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
