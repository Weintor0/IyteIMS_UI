// CONNECTED

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./StudentInternshipOffers.module.css";

import { Role } from "../../../util/Authorization";
import { getRequest } from "../../../util/Request";

const StudentInternshipOffers = () => {
  const [loaded, setLoaded] = useState(null);
  const [offerList, setOfferList] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      if (!loaded) {
        const url = `/internshipoffer/list?page=0&size=1000`;
        const res = await getRequest(url, Role.student);
        
        setOfferList(res.data.content);
        setLoaded(true);
      }
    }
    
    fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly" + err));
  });

   return (
    <div className={classes.container}>
      <div className={classes.headercontainer}>
        <div>
          <h2>Internship Oppurtunities</h2>
          <p>See all your documents here.</p>
        </div>
        <div className={classes.searchContainer}>
            <button type="submit" className="search-button"></button>
        </div>
      </div>
    <div className={classes.bodyContainer}>
      {loaded ? 
        <div className={classes.listContainer}>
          {offerList.map((offer) => (
            <ul>
              <Link to={{pathname: "/student/send-application-letter2", search: `?offerId=${offer.offerId}`}}>
                <button></button>
                <p>{offer.title}</p>
              </Link>
            </ul>))}
        </div> : null}
      </div>
    </div>
  );
};

export default StudentInternshipOffers;
