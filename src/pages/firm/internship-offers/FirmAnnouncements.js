// CONNECTED

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavigationMenu from "../../../components/firm/NavigationMenu";
import Header from "../../../components/Header";
import classes from "./FirmAnnouncements.module.css";
import { convertHtmlToReact } from '@hedgedoc/html-to-react';

import { auth, Role } from "../../../util/Authorization";
import { getRequest } from "../../../util/Request";

const FirmAnnouncements = () => {
  const [id] = auth(Role.firm);
  const [loaded, setLoaded] = useState(null);
  const [offerList, setOfferList] = useState(null);
  const [expandedNotification, setExpandedNotification] = useState(null);

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/firm/publish-internship-offers");
  };

  const handleNotificationClick = (index) => {
    setExpandedNotification(index === expandedNotification ? null : index);
  };

  useEffect(() => {
    const fetchData = async() => {
      if (!loaded) {
        const url = `/internshipoffer/list?page=0&size=1000`;
        const res = await getRequest(url, Role.firm);

        setOfferList(res.data.content.filter((offer) => offer.firmId === id));
        setLoaded(true);
      }
    }
    
    fetchData().catch((err) => {
      alert("An unknown problem has occurred unexpectedly" + err);
    });
  });

   return (
    <>
      <NavigationMenu i={2}/>
      <div className={classes.container}>
          <Header title={"Internship Offers"}/>
            <div className={classes.bodyContainer}>
                <div className={classes.boxesContainer}>
                  <div className={classes.announcementTable}>
                    {loaded ? 
                      offerList.map((announcement, index) => {
                        if (expandedNotification === index) {
                          return (
                            <div key={announcement.offerId} className={`${classes.announcementRow} ${classes.expanded}`} onClick={() => handleNotificationClick(index)}>
                              <div className={classes.announcementColumn}>{announcement.title}</div>
                              <div className={classes.announcementColumn}>{announcement.jobTitle}</div>
                              <div className={classes.content}> { convertHtmlToReact(announcement.content) } </div>
                            </div>
                          );
                        } else {
                          return (
                            <div key={announcement.offerId} className={classes.announcementRow} onClick={() => handleNotificationClick(index)}>
                              <div className={classes.announcementColumn}>{announcement.title}</div>
                              <div className={classes.announcementColumn}>{announcement.jobTitle}</div>
                            </div>
                          );
                        }
                      }) : null}
                  </div>
                </div>

                <div className={classes.addAnnouncementsButton}>
                    <button onClick={handleAddClick} className={classes.addButton}>
                        Add new internship opportunity
                    </button>
                  </div>
            </div>
      </div>
    </>
  );
};

export default FirmAnnouncements;
