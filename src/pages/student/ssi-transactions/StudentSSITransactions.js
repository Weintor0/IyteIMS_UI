import React, { useState } from "react";

import Header from "../../../components/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import classes from "./StudentSSITransactions.module.css";

const SSITransactions = () => {
   return (
    <>
      <NavigationMenu i={5}/>
      <div className={classes.container}>
        <Header title="SSI Transactions" userName="Student Name"/>
        <div className={classes.bodyContainer}>
          <div className={classes.listContainer}>
            <ul>
                <h2>Application</h2>
                <hr></hr>
                <p>Transactions have not yet finished. Dean Office is currenty handling</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SSITransactions;
