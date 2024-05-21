import React, { useState } from "react";
import classes from "./FirmAnnouncements.module.css";


const FirmAnnouncements = () => {
  
  const handleAddClick = () => {
    window.location.href = "/AddAnnouncements";
  };

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
            <div className={classes.announcementTableContainer}>
                <AnnouncementsTable announcements={announcements} />
            </div>
            <div className={classes.addAnnouncementsButton}>
            <button onClick={handleAddClick} className={classes.addButton}>
                Add new internship opportunity
            </button>
            </div>
        </div>
    </div>
  );
};

const announcements = [
    { id: 1, company: 'Company X', status: 'Unread announcement' },
    { id: 2, company: 'Company Y', status: 'Unread announcement' },
];
  
const AnnouncementsTable = ({ announcements }) => {
    return (
      <table className={classes.announcementTable}>
        <tbody>
          {announcements.map(announcement => (
            <tr key={announcement.id} className={classes.announcementRow}>
              <td>{announcement.company}</td>
              <td>{announcement.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default FirmAnnouncements;
