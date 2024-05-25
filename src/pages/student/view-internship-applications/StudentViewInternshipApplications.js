import React, { useState, useEffect } from "react";

import Header from "../../../components/common/header/Header";
import NavigationMenu from "../../../components/student/NavigationMenu";
import classes from "./StudentViewInternshipApplications.module.css";

import { Role } from "../../../util/Authorization";
import { getRequest } from "../../../util/Request";

const StudentViewInternshipApplications = () => {
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
    if (!applications) {
            // Get all internships
            const internships = (await getRequest("/internship/get-all", Role.student)).data;

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

            setApplications(internshipData);
        }
    }
    
    fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly " + err));
  });

  function getStatusString(application) {
    switch (application.internship.internshipStatus) {
      case 'StudentSentApplicationLetter': return 'Waiting';
      case 'FirmRejectedApplicationLetter': return 'Rejected';
      default: return 'Accepted';
    }
  }

  return applications && (
    <>
      <NavigationMenu i={3}/>
      <div className={classes.container}>
        <Header titleFn={u => `My Applications`} userNameFn={u => `${u.name} ${u.surname}`} userRole={Role.student}/>
        <div className={classes.bodyContainer}>
          <div className={classes.listContainer}>
            {applications.length && applications.map((application, index) => (
                <ul key={index}>
                  <p><b className={classes.left}>{application.firm.firmName}</b></p>
                  <p className={classes.left}>{application.offer.jobTitle}.</p>
                  <p className={classes.right}>{getStatusString(application)}</p>
                </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentViewInternshipApplications;
