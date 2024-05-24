import React, { useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

import Vector from "./images/Vector.png"
import PlusSign from "./images/+.png"
import Modal from "../../../components/student/Modal"
import classes from "./StudentSendApplicationLetter2.module.css"

import { auth } from "../../../util/Authorization";

const StudentSendApplicationLetter2 = () => {
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);

  const [id, token] = auth();

  const urlParams = new URLSearchParams(window.location.search);
  const offerId = urlParams.get('offerId');

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
              <Link to={"/student/send-application-letter"}>
              <img src={Vector} alt="icon" />
              </Link>
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
      {showModal && <Modal 
        showModal={showModal} 
        handleClose={handleClose} 
        url={`/internship/application-letter/send/${offerId}`}
        authorization={token}
        />}
    </div>
  );
};

export default StudentSendApplicationLetter2;
