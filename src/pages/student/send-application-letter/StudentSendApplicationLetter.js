import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom";

import Header from "../../../components/common/header/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import Vector from "./images/Vector.png"
import PlusSign from "./images/+.png"
import Modal from "../../../components/common/upload/UploadModal"
import classes from "./StudentSendApplicationLetter.module.css"
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Role } from "../../../util/Authorization";
import { getRequest } from "../../../util/Request";

const StudentSendApplicationLetter = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const offerId = urlParams.get('offerId');
  const quill = useRef();

  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      if (!loaded) {
        const url = `/internshipoffer/list?page=0&size=1000`;
        const res = await getRequest(url, Role.student);
        
        setOffer(res.data.content.filter((offer) => offer.offerId === offerId)[0]);
        setLoaded(true);
      }
    }
    
    fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly" + err));
  });

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavigationMenu i={2}/>
      <div className={classes.container}>
        <Header titleFn={u => `Internship Offers`} userNameFn={u => `${u.name} ${u.surname}`} userRole={Role.student}/>
        <div className={classes.bodyContainer}>
          <div className={classes.header}>
            <ul className={classes.firstul}>
              <button>
                <Link to={"/student/internship-offers"}>
                <img src={Vector} alt="icon" />
                </Link>
              </button>
              <p>Internship Advert of Firm A</p>
            </ul>

            <ul className={classes.secondul}>
              <div className={classes.addLetterDiv}>
                <button className={classes.plusSign} onClick={handleOpen}>
                  <img src={PlusSign} alt="icon" />
                </button>
                <p className={classes.addLetterLabel}>Add summer practice application letter</p>
              </div>
            
              <div className={classes.downloadbutton}>
                <button>Download Template</button>
              </div>
            </ul>

            {loaded && 
            <>
              <div className={classes.viewer}>
                <h3>Title: {offer.title}</h3>
                <h4>Job Title: {offer.jobTitle}</h4>
                <QuillEditor
                  ref={(el) => (quill.current = el)}
                  theme="snow"
                  value={offer.content}
                  readOnly={true}/>
              </div>
            </>
            }
          </div>
        </div>

        {showModal && <Modal 
          showModal={showModal} 
          handleClose={handleClose} 
          url={`/internship/application-letter/send/${offerId}`}
          title="Add summer practice application letter"/>
        }
      </div>
    </>
  );
};

export default StudentSendApplicationLetter;
