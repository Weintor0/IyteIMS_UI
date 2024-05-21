import React, { useState } from "react";
import classes from "./StudentSendApplicationLetter2.module.css";
import Vector from "./images/Vector.png";
import PlusSign from "./images/+.png";
import Modal from "../../../components/student/Modal";

const StudentSendApplicationLetter2 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <div>
          <h2>Internship Opportunities</h2>
          <p>See all your documents here.</p>
        </div>
        <div className={classes.blackBox}>
          <button>
            <img src={Vector} alt="icon" />
          </button>
          <p>Name S.</p>
        </div>
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.header1}>
          <ul className={classes.firstul}>
            <button>
              <img src={Vector} alt="icon" />
            </button>
            <p>Internship Advert of Firm A</p>
          </ul>
          <div className={classes.secondrow}>
            <div>
              <ul className={classes.secondul}>
                <button className={classes.plusSign} onClick={handleOpen}>
                  <img src={PlusSign} alt="icon" />
                </button>
                <p>Add summer practice application letter</p>
              </ul>
            </div>
            <div className={classes.downloadbutton}>
              <button>Download Template</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal showModal={showModal} handleClose={handleClose} />}
    </div>
  );
};

export default StudentSendApplicationLetter2;
