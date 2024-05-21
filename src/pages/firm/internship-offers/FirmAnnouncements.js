import React, { useState, useEffect } from "react";
import classes from "./FirmAnnouncements.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const FirmAnnouncements = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [[keyId, id], [keyToken, token]] = searchParams;

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate({pathname: "/firm/publish-internship-offers", search: `?id=${id}&token=${token}`});
  };

  const [loaded, setLoaded] = useState(null);
  const [offerList, setOfferList] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      if (!loaded) {
        const res = await axios.get("http://localhost:9090/internshipoffer/list?page=0&size=10", {
          headers: { "Authorization": "Bearer " + token }});
        const offers = res.data.content;

        /*let result = [];
        for (let i = 0; i < offers.length; i++) {
          const offer = offer[i];

        }*/

  
        setOfferList(offers);
        setLoaded(true);
      }
    }
    
    fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly"));
  });

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
              <td>{announcement.firmId}</td>
              <td>{announcement.title}</td>
              <td>{announcement.content}</td>
            </tr>
          )})}
        </tbody>
      </table>
    );
};

export default FirmAnnouncements;
