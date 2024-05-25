import React, { useState } from "react";

import Modal from "../../../components/common/upload/UploadModal"
import Header from "../../../components/common/header/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import classes from "./StudentSummerPracticeReports.module.css";

import { Role } from "../../../util/Authorization";

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
        <Header titleFn={u => `Summer Practice Reports`} userNameFn={u => `${u.name} ${u.surname}`} userRole={Role.student}/>
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
