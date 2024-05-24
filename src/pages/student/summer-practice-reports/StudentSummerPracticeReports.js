import React, { useState } from "react";

import Modal from "../../../components/student/UploadModal"
import Header from "../../../components/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import classes from "./StudentSummerPracticeReports.module.css";

const SummerPracticeReports = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

   return (
    <>
      <NavigationMenu i={6}/>
      <div className={classes.container}>
        <Header title="Summer Practice Reports" userName="Student Name"/>
        <div className={classes.bodyContainer}>
          <div className={classes.listContainer}>
            <ul><p><b>Firm A</b></p><p>Date a.b.c</p><a href="Download">Download</a></ul>
            <ul><p><b>Firm B</b></p> <p>Date x.y.z</p><a href="Download">Download</a></ul>
          </div>
          <div className={classes.buttons}>
            <button className={classes.button} type="button" onClick={handleOpen}>Upload Report</button>
            <button className={classes.button} type="button">Download Template</button>
          </div>
        </div>

        {showModal && <Modal 
          showModal={showModal} 
          handleClose={handleClose} 
          url={``}
          title="Add your summer practice report"/>
        }
    </div>
  </>
  );
};

export default SummerPracticeReports;
