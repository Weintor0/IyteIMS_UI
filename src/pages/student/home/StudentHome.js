import React from "react"
import classes from "./StudentHome.module.css"
import { Link } from "react-router-dom";

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
                    <Link to="/MyInternshipAnnouncements">
                    <ul className={classes.topfirst}>My Internship Announcements<p>
                        13 unread</p></ul>
                        </Link>
                        <Link to= "/FillOutTheSurvey">
                        <ul className={classes.topsecond}>Fill Out The Survey</ul>
                        </Link>

                    </div>
                    <div className={classes.body}>
                        <div className={classes.bodyfirst}>
                            <Link to="/StudentAnnouncements">
                            <ul>Coordinator Announcements</ul>
                            </Link>
                        </div>
                        <div className={classes.bottom}>
                        <Link to="/SummerPracticeReports">

                    <ul className={classes.bottomfirst} >Summer Practice Reports <p>See your Summer 
                        Practice project</p> </ul>
                    </Link>
                    <Link to="/SSITransactions" >
                        <ul className={classes.bottomsecond}>SSITransactions</ul>
                        </Link>
                </div>                  
                    </div>
   
                <div className={classes.lastListItem}>
                    <Link to="/InternshipApplications" >
                    <ul>My Internship Applications<p>
                        11 unread</p></ul>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentHome