// CONNECTED

import React, { useState, useEffect } from "react";
import classes from "./StudentSendApplicationLetter.module.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

const StudentSendApplicationLetter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [[keyId, id], [keyToken, token]] = searchParams;

  const [loaded, setLoaded] = useState(null);
  const [offerList, setOfferList] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      if (!loaded) {
        const res = await axios.get("http://localhost:9090/internshipoffer/list?page=0&size=1000", {
          headers: { "Authorization": "Bearer " + token }});
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
              <Link to={{pathname: "/student/send-application-letter2", search: `?id=${id}&token=${token}&offerId=${offer.offerId}`}}>
                <button></button>
                <p>{offer.title}</p>
              </Link>
            </ul>))}
        </div> : null}
      </div>
    </div>
  );
};

export default StudentSendApplicationLetter;
