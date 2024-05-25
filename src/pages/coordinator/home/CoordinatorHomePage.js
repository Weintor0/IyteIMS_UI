// CONNECTED

import React from "react";

import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import Header from "../../../components/common/header/Header";
import classes from "../CoordinatorHomePage.module.css";
import {useNavigate} from "react-router-dom";

import { Role } from "../../../util/Authorization";

const CoordinatorHomePage = () => {
    const navigate = useNavigate();
    const handleClick = (navigateTo) => {
        navigate(navigateTo);
    };

    return (
        <>
            <NavigationMenu i={0}/>
            <div className={classes.container}>
                <Header titleFn={u => `Hello, ${u}`} userNameFn={u => u} userRole={Role.coordinator}/>
                <p className={classes.welcomeMessage}>Welcome back!</p>
                <div className={classes.boxesContainer}>
                    <div className={classes.announcementBox}
                         onClick={()=>handleClick("/coordinator/internship-offers")}>
                        <>
                            <h3>Internship Offers</h3>
                            <p>13 unread</p>
                        </>
                    </div>
                    <div className={classes.subBoxContainer}>
                        <div className={classes.blankBox}
                             onClick={()=>handleClick("/coordinator/announcements")}>
                            <h3>Coordinator Announcements</h3>
                            <p>Click to see Coordinator Announcements</p>
                        </div>
                        <div className={classes.rightContainer}>
                            <div className={classes.infoBox3}
                                 onClick={()=>handleClick("/coordinator/reviewforms")}>
                                <h3 style={{color:"white"}}>Review the completed forms</h3>
                            </div>
                            <div className={classes.infoBox2}
                                 onClick={()=>handleClick("/coordinator/ssi-transactions")}>
                                <h3>SSI Transaction</h3>
                            </div>
                        </div>
                    </div>

                    <div className={classes.applicationBox}
                         onClick={()=>handleClick("/coordinator/surveyresult")}>
                        <>
                            <h3>Survey Results</h3>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoordinatorHomePage;