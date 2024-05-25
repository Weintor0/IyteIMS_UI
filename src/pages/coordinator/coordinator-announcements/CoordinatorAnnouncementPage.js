
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import Header from "../../../components/common/header/Header";
import classes from "./CoordinatorAnnouncementPage.module.css";
import AnnouncementBox from "../../../components/coordinator/AnnouncementBox";

import { Role } from "../../../util/Authorization";

const CoordinatorAnnouncementPage = () => {
    const [announcementsList, setAnnouncementsList] = useState([{title:"fsdf", subject:"x",content:"s"}]);
    const [expandedNotification, setExpandedNotification] = useState(null);

    const navigate = useNavigate();
    const handleAddClick = () => {
        navigate("/coordinator/publish-announcement");
    };

    return (
        <>
            <NavigationMenu i={2}/>
            <div className={classes.container}>
            <Header titleFn={u => "Coordinator Announcements"} userNameFn={u => u} userRole={Role.coordinator}/>
                <div className={classes.bodyContainer}>
                    <div className={classes.boxesContainer}>
                        <div className={classes.announcementTable}>
                            {
                                announcementsList.length > 0 ? (
                                    announcementsList.map((announcement, index) => (
                                        <AnnouncementBox
                                            key={index}
                                            announcement={announcement}
                                        />
                                    ))
                                ) : (
                                    <p>Empty!</p>
                                )
                            }
                        </div>
                    </div>

                    <div className={classes.addAnnouncementsButton}>
                        <button onClick={handleAddClick} className={classes.addButton}>
                            Add new announcement
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default CoordinatorAnnouncementPage