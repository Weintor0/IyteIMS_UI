import React, { useState, useEffect } from "react";
import classes from "./StudentViewNotifications.module.css";
import { useSearchParams } from "react-router-dom";

const StudentViewNotifications = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [[keyId, id], [keyToken, token]] = searchParams;

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from your API
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    // Replace 'https://your-api.com/notifications' with your actual API endpoint
    fetch('https://your-api.com/notifications')
      .then(response => response.json())
      .then(data => {
        // Set notifications in state
        setNotifications(data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  };
   return (
    <div className={classes.container}>
      <div className={classes.headercontainer}>
        <div>
          <h2>Notifications</h2>
          <p>See all your notifications here.</p>
        </div>
        <div className={classes.searchContainer}>
            <button type="submit" className="search-button"></button>
        </div>
      </div>
    <div className={classes.bodyContainer}>
      <div className={classes.listContainer}>

        <ul><p><b>Announcement 1, </b></p><p>Announcement...</p></ul>
        
        <ul><p><b>Company Announcement, </b></p> <p>Announcement...</p></ul>
        <ul><p><b>SSITransactions, </b></p> <p>Announcement...</p></ul>


        
      </div>

      </div>
    </div>
  );
};

export default StudentViewNotifications; 

/* {notifications.map(notification => (
  <div key={notification.id}> 
              <ul><p><b>{notification.title}</b></p></ul>
              <ul><p>{notification.message}</p></ul>
            </div>
          ))} */
