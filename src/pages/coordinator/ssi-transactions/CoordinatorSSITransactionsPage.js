import React, {useState, useEffect} from 'react'

import StudentBox from "../../../components/coordinator/StudentBox";
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "../CoordinatorHomePage.module.css";
import Header from "../../../components/common/header/Header";

import { Role } from "../../../util/Authorization";
import { getRequest, patchRequest } from '../../../util/Request';
import InternshipStatus from "../../../util/InternshipStatus";

const CoordinatorSSITransactionsPage = () => {
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

    const handleWithout = (internshipId) => {
        const url = `/internship/ssi/set-no-insurance/${internshipId}`;

        (async()=>{
            try {
                await patchRequest(url, {}, Role.coordinator);
                alert("The student is not going to have SGK. Successfuly recorded.");
                window.location.reload();
            } catch (err) {
                handleError(err);
            }
        })();
    }

    const handleWith = (internshipId) => {
        const url = `/internship/ssi/set-handler-to-department-secretary/${internshipId}`;

        (async()=>{
            try {
                await patchRequest(url, {}, Role.coordinator);
                alert("The transactions have been successfully delegated to the department secretary.");
                window.location.reload();
            } catch (err) {
                handleError(err);
            }
        })();
    }

    return (
        <>
            <NavigationMenu i={4}/>
            <div className={classes.container}>
            <Header titleFn={u => "SSI Transactions"} userNameFn={u => u} userRole={Role.coordinator}/>
            <p className={classes.welcomeMessage}>See all students here</p>
                <div style={{marginTop: "5%"}}>
                    {!forms || forms.length === 0 ?
                    <div style={{padding:20}}>
                        <p>
                            There is no student !
                        </p>
                    </div>

                    : 
                    
                    forms.map((form, index) => {
                        return <StudentBox
                            title={`${form.student.name} ${form.student.surname}`}
                            text={`${form.student.name} ${form.student.surname} - ${form.firm.firmName}`}
                            handleWithout={() => handleWithout(form.internship.internshipId)}
                            handleWith={() => handleWith(form.internship.internshipId)}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default CoordinatorSSITransactionsPage