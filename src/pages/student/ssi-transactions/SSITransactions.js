import React, { useState } from "react";
import classes from "./SSITransactions.module.css";
import { useSearchParams } from "react-router-dom";

const SSITransactions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [[keyId, id], [keyToken, token]] = searchParams;

   return (
    <div className={classes.container}>
      <div className={classes.headercontainer}>
        <div>
          <h2>SSI Transacions </h2>
          <p>See all your applications here.</p>
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
      <div className={classes.listContainer}>
        <ul>
            <h2>Application</h2>
            <hr></hr>
            <p>Transactions have not yet finished. Dean Office is currenty handling</p>
        </ul>
 
        <ul><h2></h2>
            <p>blank</p></ul>
      </div>
     
      </div>
    </div>
  );
};

export default SSITransactions;
