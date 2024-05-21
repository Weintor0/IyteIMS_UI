import React, { useState } from "react";
import classes from "./AddAnnouncements.module.css";


const AddAnnouncements = () => {

   return (
    <div className={classes.container}>
        <div className={classes.headercontainer}>
            <div>
            <h2>My Internship Announcements </h2>
            <p>See your recent announcements.</p>
            </div>
            <div className={classes.searchContainer}>
            <form action="/search" method="get">
                <input
                type="text"
                name="searchQuery"
                id="searchQuery"
                placeholder="Search..."
                />
            </form>
                <button type="submit" className="search-button"></button>
            </div>
        </div>
        <div className={classes.bodyContainer}>
            <div className={classes.addContainer}>
                <input type="text" placeholder="New Announcement"/>
                <input type="text" placeholder="To"/>
                <input type="text" placeholder="Subject"/>
                <div className={classes.saveContainer}>
                    <button onClick={handleSave} className={classes.saveButton}>Save and Send</button>
                </div>
            </div>
        </div>
    </div>
  );
};

const handleSave = () => {
    alert('Save');
};


export default AddAnnouncements;
