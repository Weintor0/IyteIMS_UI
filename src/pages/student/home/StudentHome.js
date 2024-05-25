// CONNECTED

import { React } from "react";

import NavigationMenu from "../../../components/student/NavigationMenu";
import Header from "../../../components/common/header/Header";
import classes from "./StudentHome.module.css";

import { Role } from "../../../util/Authorization";

const StudentHomePage = () => {
    return (
        <>
            <NavigationMenu i={0}/>
            <div className={classes.container}>
                <Header titleFn={u => `Hello, ${u.name}.`} userNameFn={u => `${u.name} ${u.surname}`} userRole={Role.student}/>
                <p className={classes.welcomeMessage}>Welcome back!</p>
                <div className={classes.boxesContainer}>
                    <div className={classes.announcementBox}>
                        <>
                            <h3>Notifications</h3>
                            <p>13 unread</p>
                        </>
                    </div>
                    <div className={classes.subBoxContainer}>
                        <div className={classes.blankBox}/>
                        <div className={classes.infoBox}>
                            <h3>Application Forms</h3>
                        </div>
                    </div>

                    <div className={classes.applicationBox}>
                        <>
                            <h3>Internship Applications</h3>
                            <p>11 unread</p>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentHomePage;
