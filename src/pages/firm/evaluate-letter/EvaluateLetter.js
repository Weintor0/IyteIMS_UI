// CONNECTED (INCOMPLETE)

import React, { useState, useEffect } from 'react';

import NavigationMenu from '../../../components/firm/NavigationMenu.js';
import Header from '../../../components/common/header/Header.js';
import Pagination from '../../../components/common/pagination/Pagination';
import classes from './EvaluateLetter.module.css';

import { Role } from "../../../util/Authorization";
import { getRequest, patchRequest, download } from '../../../util/Request.js';

const EvaluateLetter = () => {
    const [letterList, setLetterList] = useState(null);
    const [currentLetterList, setCurrentLetterList] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedNotification, setExpandedNotification] = useState(null);
    
    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;

    useEffect(() => {
        const fetchData = async() => {
        if (!letterList) {
                const internshipList = (await getRequest("/internship/get-all", Role.firm)).data;
                const studentList = await Promise.all(internshipList.map(
                    async (internship) => (await getRequest(`/student/get/${internship.studentId}`, Role.firm)).data));
                const letterList = internshipList.map((internship,i) => {return {internship, student: studentList[i]}});
                setLetterList(letterList);
            }
        }
        
        fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly " + err));
    });

    useEffect(() => {
        if (letterList) {
            setCurrentLetterList(letterList.slice(
                indexOfFirstNotification, indexOfLastNotification));
        }
    }, [letterList]);
    
    const handleApproved = (internshipId) => {
        const url = `/internship/application-letter/evaluate/${internshipId}`;
        const data = {
            acceptance: true,
            feedback: "Feedback feature is currently unavailable."
        };

        patchRequest(url, data, Role.firm)
            .then(() => { 
                alert("Application letter accepted."); 
            })
            .catch((err) => {
                for (const error of err.response.data.errors) {
                    console.log(error);

                    if (error.constraint == 'Forbidden') {
                        alert(error.message);
                    } else {
                        alert("Internal system error: " + error); 
                    }
                }
            });
    };

    const handleRejected = (internshipId) => {
        const url = `/internship/application-letter/evaluate/${internshipId}`;
        const data = {
            acceptance: false,
            feedback: "Feedback feature is currently unavailable."
        }

        patchRequest(url, data, Role.firm)
            .then(() => { 
                alert("Application letter rejected."); 
            })
            .catch((err) => { 
                for (const error of err.response.data.errors) {
                    console.log(error);

                    if (error.constraint == 'Forbidden') {
                        alert(error.message);
                    } else {
                        alert("Internal system error: " + error); 
                    }
                }
            });
    };

    const handleDownload = (internshipId) => {
        const url = `/internship/application-letter/download/${internshipId}`;
        download(url, Role.firm);
    };

    const handleWaiting = () => { alert('Blah'); };
    const handleApprovedSort = () => { alert('Blah'); };
    const handleRejectedSort = () => { alert('Blah'); };
    const handleNotificationClick = (index) => {
        setExpandedNotification(index === expandedNotification ? null : index);
    };

    return(
        <>
            <NavigationMenu i={3}/>
            <div className={classes.container}>
                <Header titleFn={u => `Internship Applications`} userNameFn={u => u} userRole={Role.firm}/>
                <p className={classes.message}>See all application letter that have been sent your firm here.</p>
                <div className={classes.body}>
                    <div className={classes.boxesContainer}>
                        {currentLetterList && currentLetterList.map((letter, index) => {
                            if (expandedNotification !== index) {
                                // Unexpanded Entry
                                return (
                                    <div key={index} className={classes.notificationBox} onClick={() => handleNotificationClick(index)}>
                                        <div style={{display: 'iblock'}} className={classes.notificationMessage}>
                                            <ApplicationTitle letter={letter}/>
                                        </div>
                                    </div>
                                );
                            } else {
                                // Expanded Entry
                                return (
                                    <div key={index} className={`${classes.notificationBox} ${classes.expanded}`} onClick={() => handleNotificationClick(index)}>
                                        <div style={{display: 'iblock'}} className={`${classes.notificationMessage} ${classes.expanded}`}>
                                            <ApplicationTitle letter={letter}/>
                                        </div>
                                        <ApplicationContents letter={letter}/>
                                        <div className={classes.actions}>
                                            <button className={classes.downloadButton} onClick={() => handleDownload(letter.internship.internshipId)}>Download application letter</button>
                                            <div className={classes.rightButtons}>
                                                <button className={classes.approveButton} onClick={() => handleApproved(letter.internship.internshipId)}>Approve</button>
                                                <button className={classes.rejectButton} onClick={() => handleRejected(letter.internship.internshipId)}>Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}

                        {currentLetterList ? <Pagination currentPage={currentPage} notificationsPerPage={notificationsPerPage} totalNotifications={letterList.length} paginate={setCurrentPage}/> : null}
                    </div>
                
                    <div className={classes.sortContainer}>
                        <div className={classes.sortContent}>
                            <p>Sort By:</p>
                            <button onClick={handleWaiting} className={classes.sortButton}>Waiting Applications</button>
                            <button onClick={handleApprovedSort} className={classes.sortButton}>Approved Applications</button>
                            <button onClick={handleRejectedSort} className={classes.sortButton}>Rejected Applicatons</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ApplicationTitle = ({letter}) => {
    return (
        <div>
            {letter.student.name} {letter.student.surname}
        </div>
    );
}

const ApplicationContents = ({letter}) => {
    return (
        <div className={classes.content}>
            <p>Student Number: {letter.student.studentNumber}</p>
            <p>Birth Date: {letter.student.birthDate}</p>
            <p>Email: {letter.student.user.email}</p>
        </div>
    );
}

export default EvaluateLetter;