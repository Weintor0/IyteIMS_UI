import React, { useState, useEffect } from 'react';

import Pagination from '../../../components/common/pagination/Pagination';
import NavigationMenu from '../../../components/firm/NavigationMenu';
import Header from '../../../components/common/header/Header.js';
import classes from './FillAppForm.module.css';

import { Role } from "../../../util/Authorization";
import { getRequest, upload, download } from '../../../util/Request.js';
import InternshipStatus from "../../../util/InternshipStatus"
import DragAndDrop from '../../../components/common/upload/DragAndDrop.js';

const FillAppForm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedNotification, setExpandedNotification] = useState(null);
    const [internships, setInternships] = useState(null);
    const [forms, setForms] = useState(null);
    const [slicedForms, setSlicedForms] = useState(null);
    const [files, setFiles] = useState(null);

    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;

    useEffect(() => {
        const fetchData = async() => {
            if (!forms) {
                // Get all internships for which an application letter has been accepted.
                const internships = (await getRequest("/internship/get-all", Role.firm)).data
                  .filter((internship) => 
                    InternshipStatus.from(internship.internshipStatus).getOrder() >= 
                    InternshipStatus.FirmAcceptedApplicationLetter.getOrder()
                );
    
                // Fetch corresponding students
                const student = await Promise.all(internships.map(
                    async (internship) => (await getRequest(`/student/get/${internship.studentId}`, Role.firm)).data)
                );
    
                // Join internship, offer and firm arrays.
                const internshipData = internships.map(
                  (internship, i) => {return {internship, student: student[i]}}
                );
    
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

    useEffect(() => {
        if (internships) {
            setSlicedForms(forms.slice(indexOfFirstNotification, indexOfLastNotification));
        }
    }, [internships]);

    const handleDownload = (internshipId) => {
        download(`/internship/application-form/download/student/${internshipId}`, Role.firm);
    };

    const handleUpdate = (internshipId) => { 
        if (files === null || files.length === 0) {
            alert('Please upload a file first.');
            return;
        }

        (async () => {
            try {
                const url = `/internship/application-form/send/${internshipId}`;
                await upload(url, files, Role.firm);

                alert('Form updated successfully');
                window.location.reload();
            } catch (err) {
                for (const error of err.response.data.errors) {
                    console.log(error);
        
                    if (error.constraint == 'Forbidden') {
                        alert(error.message);
                    } else {
                        alert("Internal system error: " + error); 
                    }
                }
            }
        })();
    };

    const handleCancel = () => { 
        setExpandedNotification(null); 
    };

    const handleNotificationClick = (index) => {
        setExpandedNotification(index === expandedNotification ? null : index);
    };

    return(
        <>
            <NavigationMenu i={4}/>
            <div className={classes.container}>
            <Header titleFn={u => `Application Forms`} userNameFn={u => u} userRole={Role.firm}/>
                <p className={classes.message}>Summer Practice Application Forms sent by students.</p>
                <div className={classes.body}>
                    <div className={classes.boxesContainer}>
                        {slicedForms && slicedForms.length && slicedForms.map((form, index) => (
                            <div
                                key={index}
                                className={`${classes.notificationBox} ${expandedNotification === index ? classes.expanded : ''}`}
                                onClick={() => handleNotificationClick(index)}>
                                <div className={`${classes.notificationMessage} ${expandedNotification === index ? classes.expanded : ''}`}>
                                    {`${form.student.name} ${form.student.surname}, ${form.student.studentNumber}, ${form.student.user.email}`}
                                </div>

                                {expandedNotification === index && (
                                    <div className={classes.actions}>
                                        <div className={classes.leftActions}>
                                            <button className={classes.downloadButton} onClick={() => handleDownload(form.internship.internshipId)}>Download application form</button>
                                            <button className={classes.updateButton} onClick={() => handleUpdate(form.internship.internshipId)}>Update</button>
                                            <button className={classes.cancelButton} onClick={() => handleCancel()}>Cancel</button>
                                        </div>
                                        
                                        <div className={classes.uploadContainer}>
                                            <DragAndDrop existingFiles={files} dropHandler={(files) => {setFiles(files)}}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        {slicedForms && slicedForms.length && <Pagination
                            currentPage={currentPage}
                            notificationsPerPage={notificationsPerPage}
                            totalNotifications={forms.length}
                            paginate={setCurrentPage}
                        />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FillAppForm;
