// CONNECTED

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./FirmAnnouncements.module.css";

import { auth, Role } from "../../../util/Authorization";
import { getRequest } from "../../../util/Request";

const FirmAnnouncements = () => {
  const [id] = auth(Role.firm);
  const [loaded, setLoaded] = useState(null);
  const [offerList, setOfferList] = useState(null);

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/firm/publish-internship-offers");
  };

  useEffect(() => {
    const fetchData = async() => {
      if (!loaded) {
        const url = `/internshipoffer/list?page=0&size=1000`;
        const res = await getRequest(url, Role.firm);

        let myOffers = [];
        res.data.content.forEach((offer) => {
          if (offer['firmId'] == id) {
            myOffers.push(offer);
          }
        });

        setOfferList(myOffers);
        setLoaded(true);
      }
    }
    
    fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly" + err));
  });

   return (
    <div className={classes.container}>
        <div className={classes.headercontainer}>
            <div>
            <h2>My Internship Offers </h2>
            <p>See your recent internship offers.</p>
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
                {loaded ? <AnnouncementsTable announcements={offerList} /> : null}
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


const AnnouncementsTable = ({ announcements }) => {
    return (
      <table className={classes.announcementTable}>
        <tbody>
          {announcements.map(announcement => {return (
            <tr key={announcement.offerId} className={classes.announcementRow}>
              <td>{announcement.title}</td>
              <td>{announcement.jobTitle}</td>
              <td>{announcement.content}</td>
            </tr>
          )})}
        </tbody>
      </table>
    );
};

export default FirmAnnouncements;
