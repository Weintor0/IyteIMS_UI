import React, { useState } from "react";

import ChooseCompany from "../../../components/student/ChooseCompany";
import Modal from "../../../components/student/Modal";
import classes from "./StudentSendApplicationForm.module.css";

const StudentSendApplicationForm = () => {
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const handleUploadClick = () => {
    setFirstModalOpen(true);
  };

  const handleContinueClick = () => {
    setFirstModalOpen(false);
    setSecondModalOpen(true);
  };

  const handleCancelClick = () => {
    setFirstModalOpen(false);
    setSecondModalOpen(false);
  };

  const handleSendClick = () => {
    alert('Form Sent!');
    setSecondModalOpen(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headercontainer}>
        <div>
          <h2>Application Forms</h2>
          <p>All application forms that have been sent so far</p>
        </div>
        <div className={classes.searchContainer}>
          <button type="submit" className="search-button"></button>
          <p>Name B.</p>
        </div>
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.listContainer}>
          <ul>
            <p><b className={classes.left}>Firm A</b></p>
            <p className={classes.left}>Date a.b.c</p>
            <a className={classes.right} href="Download">Download</a>
          </ul>
          <ul>
            <p><b className={classes.left}>Firm A</b></p>
            <p className={classes.left}>Date a.b.c</p>
            <a className={classes.right} href="Download">Download</a>
          </ul>
          <ul>
            <p><b className={classes.left}>Firm A</b></p>
            <p className={classes.left}>Date a.b.c</p>
            <a className={classes.right} href="Download">Download</a>
          </ul>
        </div>
        <div className={classes.buttons}>
          <button type="button" className={classes.uploadForm} onClick={handleUploadClick}>
            Upload New Form
          </button>
          {isFirstModalOpen && (
            <ChooseCompany onClose={handleCancelClick} onContinue={handleContinueClick} />
          )}
          {isSecondModalOpen && (
            <Modal showModal={isSecondModalOpen} handleClose={handleCancelClick} />
          )}
          <button type="button" className={classes.uploadForm}>
            Download Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSendApplicationForm;
