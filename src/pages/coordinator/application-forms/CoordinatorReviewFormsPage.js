import React, {useState, useEffect} from 'react'

import FormBox from "../../../components/coordinator/FormBox";
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "../CoordinatorHomePage.module.css";
import Header from "../../../components/common/header/Header";

import { Role } from "../../../util/Authorization";
import { getRequest, patchRequest, download } from '../../../util/Request';
import InternshipStatus from "../../../util/InternshipStatus";

const CoordinatorReviewFormsPage = () => {
    const [approved, setApproved] = React.useState("");
    const [forms, setForms] = React.useState(null);

    useEffect(() => {
        const fetchData = async() => {
        if (!forms) {
                // Get all internships for which the firm has sent an application form
                const internships = (await getRequest("/internship/get-all", Role.coordinator)).data
                  .filter((internship) => 
                    InternshipStatus.from(internship.internshipStatus).getOrder() >= 
                    InternshipStatus.FirmSentApplicationForm.getOrder()
                );

                console.log(internships);

                // Fetch corresponding students
                const students = await Promise.all(internships.map(
                    async (internship) => (await getRequest(`/student/get/${internship.studentId}`, Role.coordinator)).data)
                );
    
                // Fetch corresponding internship offers
                const offers = await Promise.all(internships.map(
                  async (internship) => (await getRequest(`/internshipoffer/get/${internship.internshipOfferId}`, Role.coordinator)).data)
                );
    
                // Fetch corresponding firms
                const firms = await Promise.all(offers.map(
                    async (offer) => (await getRequest(`/firm/get/${offer.firmId}`, Role.coordinator)).data)
                );

                // Join internship, offer and firm arrays.
                const internshipData = internships.map(
                  (internship, i) => {return {internship, offer: offers[i], firm: firms[i], student: students[i]}}
                )
    
                setForms(internshipData);
            }
        }
        
        fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly " + err));
    });

    const handleError = (err) => {
        for (const error of err.response.data.errors) {
            console.log(error);
      
            if (error.constraint == 'Forbidden') {
                alert(error.message);
            } else {
                alert("Internal system error: " + error); 
            }
        }
    }

    const handleApprove = (internshipId) => {
        const url = `/internship/application-form/evaluate/${internshipId}`;

        (async()=>{
            try {
                await patchRequest(url, {
                    acceptance: true,
                    feedback: ""
                }, Role.coordinator);
            } catch (err) {
                handleError(err);
            }
        })();
    }

    const handleReject = (internshipId, feedback) => {
        const url = `/internship/application-form/evaluate/${internshipId}`;

        (async()=>{
            try {
                await patchRequest(url, {
                    acceptance: false,
                    feedback
                }, Role.coordinator);
            } catch (err) {
                handleError(err);
            }
        })();
    }

    const handleDownload = (internshipId) => {
        const url = `/internship/application-form/download/firm/${internshipId}`;

        (async()=>{
            try {
                await download(url, Role.coordinator);
            } catch (err) {
                handleError(err);
            }
        })();
    }

    return (
        <>
            <NavigationMenu i={5}/>
            <div className={classes.container}>
                <Header titleFn={u => "Review Application Forms"} userNameFn={u => u} userRole={Role.coordinator}/>
                <p className={classes.welcomeMessage}>See all recent forms.</p>

                {!forms || forms.length == 0 ?
                    <div style={{padding:20}}>
                        <p>
                            No firm has filled an application form.
                        </p>
                    </div>

                    : 
                    
                    forms.map((form, index) => {
                        return <FormBox
                            key={index}
                            internshipId={form.internship.internshipId}
                            studentName={`${form.student.name} ${form.student.surname}`}
                            studentNumber={form.student.studentNumber}
                            studentEmail={form.student.user.email}
                            firmName={form.firm.firmName}
                            firmEmail={form.firm.user.email}
                            offerTitle={form.offer.title}
                            jobTitle={form.offer.jobTitle}
                            approved={approved}
                            handleApprove={() => handleApprove(form.internship.internshipId)}
                            handleReject={(feedback) => handleReject(form.internship.internshipId, feedback)}
                            handleDownload={() => handleDownload(form.internship.internshipId)}/>
                    })}
            </div>
        </>
    );
}

export default CoordinatorReviewFormsPage