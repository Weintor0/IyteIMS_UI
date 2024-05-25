import React, { useState, useEffect } from "react";

import Header from "../../../components/common/header/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import ChooseCompany from "../../../components/student/ChooseCompany";
import Modal from "../../../components/common/upload/UploadModal";
import classes from "./StudentSendApplicationForm.module.css";

import { Role } from "../../../util/Authorization";
import { getRequest, download } from "../../../util/Request";
import InternshipStatus from "../../../util/InternshipStatus";

const StudentSendApplicationForm = () => {
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [internships, setInternships] = useState(null);
  const [forms, setForms] = useState(null);
  const [selectedInternshipId, setSelectedInternshipId] = useState(null);

  const handleUploadClick = () => {
    setFirstModalOpen(true);
  };

  const handleContinueClick = (internshipId) => {
    setFirstModalOpen(false);
    setSecondModalOpen(true);
    setSelectedInternshipId(internshipId);
  };

  const handleCancelClick = () => {
    setFirstModalOpen(false);
    setSecondModalOpen(false);
  };

  const handleSuccess = () => {
    alert('File uploaded successfully');
    window.location.reload();
  }

  const handleFailure = (err) => {
    for (const error of err.response.data.errors) {
      console.log(error);

      if (error.constraint == 'Forbidden') {
          alert(error.message);
      } else {
          alert("Internal system error: " + error); 
      }
    }
  }

  const downloadStudentsVersion = (form) => {
    download(`/internship/application-form/download/student/${form.internship.internshipId}`, Role.student);
  }

  const downloadFirmsVersion = (form) => {
    download(`/internship/application-form/download/firm/${form.internship.internshipId}`, Role.student);
  }

  useEffect(() => {
    const fetchData = async() => {
    if (!forms) {
            // Get all internships for which an application letter has been accepted.
            const internships = (await getRequest("/internship/get-all", Role.student)).data
              .filter((internship) => 
                InternshipStatus.from(internship.internshipStatus).getOrder() >= 
                InternshipStatus.FirmAcceptedApplicationLetter.getOrder()
            );

            // Fetch corresponding internship offers
            const offers = await Promise.all(internships.map(
              async (internship) => (await getRequest(`/internshipoffer/get/${internship.internshipOfferId}`, Role.student)).data)
            );

            // Fetch corresponding firms
            const firms = await Promise.all(offers.map(
                async (offer) => (await getRequest(`/firm/get-public/${offer.firmId}`, Role.student)).data)
            );

            // Join internship, offer and firm arrays.
            const internshipData = internships.map(
              (internship, i) => {return {internship, offer: offers[i], firm: firms[i]}}
            )

            // Filter out the internships for which an application form has not been sent by the student.
            const internshipsWithForm = internshipData
              .filter((internship) => 
                InternshipStatus.from(internship.internship.internshipStatus).getOrder() >=
                InternshipStatus.StudentSentApplicationForm.getOrder()
            );

            setForms(internshipsWithForm);
            setInternships(internshipData);
        }
    }
    
    fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly " + err));
  });

  return (
    <>
      <NavigationMenu i={4}/>
      <div className={classes.container}>
        <Header titleFn={u => `Application Forms`} userNameFn={u => `${u.name} ${u.surname}`} userRole={Role.student}/>
        <div className={classes.bodyContainer}>
          <div className={classes.listContainer}>
            {forms && forms.map((form, index) => (
                <ul key={index}>
                <p><b className={classes.left}>{form.firm.firmName}</b></p>
                {InternshipStatus.from(form.internship.internshipStatus).getOrder() >= 
                  InternshipStatus.StudentSentApplicationForm.getOrder() &&
                    <a href="javascript:void(0);" onClick={() => downloadStudentsVersion(form)}>Download Student's Version</a>
                }
                {InternshipStatus.from(form.internship.internshipStatus).getOrder() >= 
                  InternshipStatus.FirmSentApplicationForm.getOrder() &&
                    <a href="javascript:void(0);" onClick={() => downloadFirmsVersion(form)}>Download Firm's Version</a>
                }
              </ul>
            ))}
          </div>

          <div className={classes.buttons}>
            <button type="button" className={classes.button} onClick={handleUploadClick}>
              Upload New Form
            </button>

            {isFirstModalOpen && (
              <ChooseCompany 
              onClose={handleCancelClick} 
              onContinue={handleContinueClick}
              internships={internships}
            />)}
            
            {isSecondModalOpen && (
              <Modal 
                showModal={isSecondModalOpen}
                handleClose={handleCancelClick} 
                handleSuccess={handleSuccess}
                handleFailure={handleFailure}
                url={`/internship/application-form/send/${selectedInternshipId}`}
                title="Add your application form"
            />)}

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
