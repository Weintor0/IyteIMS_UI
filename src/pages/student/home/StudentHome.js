import React from "react"
import classes from "./StudentHome.module.css"
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const StudentHome = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;
    
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
                    <Link to={{pathname: "/student/send-application-letter", search: `?id=${id}&token=${token}`}}>
                    <ul className={classes.topfirst}>Internship Offers<p>
                        13 unread</p></ul>
                        </Link>
                        <Link to={{pathname: "/student-fill-out-the-survey", search: `?id=${id}&token=${token}`}}>
                        <ul className={classes.topsecond}>Fill Out The Survey</ul>
                        </Link>
                    </div>
                    <div className={classes.body}>
                        <div className={classes.bodyfirst}>
                            <Link to={{pathname: "/student/view-notifications", search: `?id=${id}&token=${token}`}}>
                            <ul>Notifications</ul>
                            </Link>
                        </div>
                        <div className={classes.bottom}>
                        <Link to={{pathname: "/student/send-application-form", search: `?id=${id}&token=${token}`}}>
                            <ul className={classes.bottomfirst} >Send application form <p>Send application form </p> </ul>
                        </Link>
                    <Link to={{pathname: "/student/ssi-transactions", search: `?id=${id}&token=${token}`}} >
                        <ul className={classes.bottomsecond}>SSI Transactions</ul>
                        </Link>
                </div>                  
                    </div>
   
                <div className={classes.lastListItem}>
                    <Link to={{pathname: "/student/internship-applications", search: `?id=${id}&token=${token}`}} >
                    <ul>My Internship Applications<p>
                        11 unread</p></ul>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentHome