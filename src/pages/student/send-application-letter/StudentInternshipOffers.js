// CONNECTED

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
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
    <>
      <NavigationMenu i={2}/>
      <div className={classes.container}>
      <Header titleFn={u => `Internship Offers`} userNameFn={u => `${u.name} ${u.surname}`} userRole={Role.student}/>
        <div className={classes.bodyContainer}>
          {loaded ? 
            <div className={classes.listContainer}>
              {offerList.map((offer) => (
                <ul>
                  <Link className={classes.link} to={{pathname: "/student/send-application-letter", search: `?offerId=${offer.offerId}`}}>
                    <button></button>
                    <p>{offer.title}</p>
                  </Link>
                </ul>))}
            </div> : null}
          </div>
      </div>
    </>
  );
};

export default StudentInternshipOffers;
