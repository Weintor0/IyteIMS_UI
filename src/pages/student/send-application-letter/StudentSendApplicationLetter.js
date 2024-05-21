import React, { useState } from "react";
import classes from "./StudentSendApplicationLetter.module.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const StudentSendApplicationLetter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [[keyId, id], [keyToken, token]] = searchParams;

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
      <div className={classes.listContainer}>
        <ul><Link to={{pathname: "/student/send-application-letter2", search: `?id=${id}&token=${token}`}}><button></button><p>Company 1</p></Link></ul>
        <ul><Link to={{pathname: "/student/send-application-letter2", search: `?id=${id}&token=${token}`}}><button></button><p>Company 2</p></Link></ul>
      </div>
      </div>
    </div>
  );
};

export default StudentSendApplicationLetter;
