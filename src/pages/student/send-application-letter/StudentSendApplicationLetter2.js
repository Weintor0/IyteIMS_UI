import React, { useState } from "react"
import classes from "./StudentSendApplicationLetter2.module.css"
import Vector from "./images/Vector.png"
import PlusSign from "./images/+.png"
import Modal from "../../../components/student/Modal"
import ChooseCompany from "../../../components/student/ChooseCompany";
import AddFormModal from "../../../components/student/AddFormModal";

const StudentSendApplicationLetter2 = () => {
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
        <div className={classes.container} >
            <div className={classes.headerContainer}>
                <div>
                    <h2>Internship Oppurtunities</h2>
                    <p>See all your documents here.</p>
                </div>
                <div className={classes.blackBox}>
                    <button>

                    </button>
                    <p>Name S.</p>
                </div>
            </div>
            <div className={classes.bodyContainer}>
            <div className={classes.header1}>
                <ul className={classes.firstul}>
                    <button>
                    <img src={Vector}></img>

                    </button>
                <p>Internship Advert of Firm A</p>
                </ul>
                <div className={classes.secondrow}>
                <div>
                <ul className={classes.secondul}>
                <button className={classes.plusSign} onClick={handleUploadClick} >
                    <img src={PlusSign}></img>
                </button>
                {isFirstModalOpen && (
        <ChooseCompany onClose={handleCancelClick} onContinue={handleContinueClick} />
    )}
      {isSecondModalOpen && (
        <AddFormModal onClose={handleCancelClick} onSend={handleSendClick} />

      )}
                <p>Add summer practice application letter</p>

                </ul>                  
                </div>
            
                <div className={classes.downloadbutton}>
                <button>Download Template</button>

                </div>
                </div>
   

            </div>

            </div>
        </div>
    )
}

export default StudentSendApplicationLetter2;