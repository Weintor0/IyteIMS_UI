import React, { useState } from "react";
import classes from "./StudentViewInternshipApplications.module.css";


const StudentViewInternshipApplications = () => {

   return (
    <div className={classes.container}>
      <div className={classes.headercontainer}>
        <div>
          <h2>My Internship Applications</h2>
          <p>See your applications.</p>
        </div>
      </div>
    <div className={classes.bodyContainer}>
      <div className={classes.listContainer}>
        <ul><p><b className={classes.left}>Company X,</b></p ><p className={classes.left}>Application...</p><p className={classes.right}> Approved</p></ul>
        <ul><p><b className={classes.left}>Company Y,</b></p ><p className={classes.left}>Unread Announcement</p><p className={classes.right}> Not Approved</p></ul>

      </div>

      </div>
    </div>
  );
};

export default StudentViewInternshipApplications;
