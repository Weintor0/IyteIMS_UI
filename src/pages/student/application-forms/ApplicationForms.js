import React, { useState } from "react";

import classes from "./ApplicationForms.module.css";

const ApplicationForms = () => {
   return (
    <div className={classes.container}>
      <div className={classes.headercontainer}>
        <div>
          <h2>Application Forms</h2>
          <p>All application forms that have sent so far.</p>
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
        <ul><p><b>Firm A</b></p><p>Date a.b.c</p><a href="Download">Download</a></ul>
        <ul><p><b>Firm B</b></p> <p>Date x.y.z</p><a href="Download">Download</a></ul>
        <ul>blank</ul>
      </div>
      <div className={classes.buttons}>
        <button type="button">Upload New Form</button>
        <button type="button">Download Template</button>
      </div>
      </div>
    </div>
  );
};

export default ApplicationForms;
