import React from "react"
import { Link } from "react-router-dom";

import classes from "./StudentHome.module.css"

const StudentHome = () => {
    return (
        <div className={classes.container} >
            <div className={classes.headerContainer}>
                <div>
                    <h2>Hello, Name.</h2>
                    <p>Welcome back!</p>
                </div>
                <div className={classes.blackBox}>
                    <button>A</button>
                    <p>Name S.</p>
                </div>
            </div>
            <div className={classes.bodyContainer}>
                    <div className={classes.top}>
                    <Link to={"/student/send-application-letter"}>
                    <ul className={classes.topfirst}>Internship Offers<p>
                        13 unread</p></ul>
                        </Link>
                        <Link to={"/student-fill-out-the-survey"}>
                        <ul className={classes.topsecond}>Fill Out The Survey</ul>
                        </Link>
                    </div>
                    <div className={classes.body}>
                        <div className={classes.bodyfirst}>
                            <Link to={"/student/view-notifications"}>
                            <ul>Notifications</ul>
                            </Link>
                        </div>
                        <div className={classes.bottom}>
                        <Link to={"/student/send-application-form"}>
                            <ul className={classes.bottomfirst} >Send application form <p>Send application form </p> </ul>
                        </Link>
                    <Link to={"/student/ssi-transactions"}>
                        <ul className={classes.bottomsecond}>SSI Transactions</ul>
                        </Link>
                </div>                  
                    </div>
   
                <div className={classes.lastListItem}>
                    <Link to={"/student/internship-applications"}>
                    <ul>My Internship Applications<p>
                        11 unread</p></ul>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentHome