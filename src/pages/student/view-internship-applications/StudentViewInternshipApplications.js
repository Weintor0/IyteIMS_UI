import React from "react";

import Header from "../../../components/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import classes from "./StudentViewInternshipApplications.module.css";

const StudentViewInternshipApplications = () => {
   return (
    <>
      <NavigationMenu i={3}/>
      <div className={classes.container}>
        <Header title="My Applications" userName="Student Name"/>
        <div className={classes.bodyContainer}>
          <div className={classes.listContainer}>
            <ul><p><b className={classes.left}>Company X,</b></p ><p className={classes.left}>Application...</p><p className={classes.right}> Approved</p></ul>
            <ul><p><b className={classes.left}>Company Y,</b></p ><p className={classes.left}>Unread Announcement</p><p className={classes.right}> Not Approved</p></ul>
          </div>
          </div>
      </div>
    </>
  );
};

export default StudentViewInternshipApplications;
