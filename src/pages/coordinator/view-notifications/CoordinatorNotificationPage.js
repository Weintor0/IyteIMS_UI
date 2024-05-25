import React, {useState} from 'react'

import StudentBox from "../../../components/coordinator/StudentBox";
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "../CoordinatorHomePage.module.css";
import Header from "../../../components/common/header/Header";
import NotificationBox from "../../../components/coordinator/NotificationBox";

import { Role } from "../../../util/Authorization";

const CoordinatorNotificationPage = () => {
    const [notifications, setNotifications] = React.useState([]);

    return (
        <>
            <NavigationMenu i={1}/>
            <div className={classes.container}>
                <Header titleFn={u => "Notifications"} userNameFn={u => u} userRole={Role.coordinator}/>
                <p className={classes.welcomeMessage}>See all your notifications here.</p>

                {notifications.length === 0 ?
                    <div style={{padding:20}}>
                        <p>
                            There is no notification !
                        </p>
                        <NotificationBox
                            Content={"heyy"}/>
                        <NotificationBox
                            Content={"heyy"}/>
                    </div>
                    : notifications.map((notification, index) => {
                        return <NotificationBox
                            Content={notification}/>
                    })}


            </div>
        </>
    )
}

export default CoordinatorNotificationPage