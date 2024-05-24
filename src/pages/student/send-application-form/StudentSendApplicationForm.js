import React, { useState } from "react";

import Header from "../../../components/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import ChooseCompany from "../../../components/student/ChooseCompany";
import Modal from "../../../components/UploadModal";
import classes from "./StudentSendApplicationForm.module.css";

import { Role } from "../../../util/Authorization";

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

  return (
    <>
      <NavigationMenu i={4}/>
      <div className={classes.container}>
        <Header titleFn={u => `Application Forms`} userNameFn={u => `${u.name} ${u.surname}`} userRole={Role.student}/>
        <div className={classes.bodyContainer}>
          <div className={classes.listContainer}>
            <ul>
              <p><b className={classes.left}>Firm A</b></p>
              <p className={classes.left}>Date a.b.c</p>
              <a href="Download">Download</a>
            </ul>
            <ul>
              <p><b className={classes.left}>Firm A</b></p>
              <p className={classes.left}>Date a.b.c</p>
              <a href="Download">Download</a>
            </ul>
            <ul>
              <p><b className={classes.left}>Firm A</b></p>
              <p className={classes.left}>Date a.b.c</p>
              <a href="Download">Download</a>
            </ul>
          </div>

          <div className={classes.buttons}>
            <button type="button" className={classes.button} onClick={handleUploadClick}>
              Upload New Form
            </button>

            {isFirstModalOpen && (<ChooseCompany onClose={handleCancelClick} onContinue={handleContinueClick} />)}
            {isSecondModalOpen && (
              <Modal 
                showModal={isSecondModalOpen}
                handleClose={handleCancelClick} 
                url={``}
                title="Add your application form"
                />
              )
            }

            <button type="button" className={classes.button}>
              Download Template
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSendApplicationForm;
