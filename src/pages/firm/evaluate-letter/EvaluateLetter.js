// CONNECTED (INCOMPLETE)

import React, { useState, useEffect } from 'react';

import NavigationMenu from '../../../components/firm/NavigationMenu.js';
import Header from '../../../components/Header.js';
import Pagination from '../../../components/Pagination';
import classes from './EvaluateLetter.module.css';

import { Role } from "../../../util/Authorization";
import { getRequest, patchRequest } from '../../../util/Request.js';

const EvaluateLetter = () => {
    const [loaded, setLoaded] = useState(null);
    const [sliced, setSliced] = useState(null);
    const [letterList, setLetterList] = useState([]);
    const [currentLetterList, setCurrentLetterList] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedNotification, setExpandedNotification] = useState(null);
    
    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;

    useEffect(() => {
        const fetchData = async() => {
        if (!loaded) {
                const res = await getRequest("/internship/get-all", Role.firm);

                setLetterList(res.data);
                setLoaded(true);
            }
        }
        
        fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly " + err));
    });

    useEffect(() => {
        setCurrentLetterList(letterList.slice(indexOfFirstNotification, indexOfLastNotification));
        setSliced(true);
    }, [loaded]);
    
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
            .catch((error) => { 
                alert("An unknown problem has occurred unexpectedly: " + error); 
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
            .catch((error) => { 
                alert("An unknown problem has occurred unexpectedly: " + error); 
            });
    };

    const handleDownload = (internshipId) => {
        const url = `/internship/application-letter/download/${internshipId}`;

        getRequest(url, Role.firm).then(
            (file) => {
                const element = document.createElement("a");
                const blob = new Blob(file, { type: "application/octet-stream" });
                element.href = URL.createObjectURL(blob);
                element.download = "file";
                document.body.appendChild(element);
                element.click();
            }
        );
    };

    const handleWaiting = () => {
        alert('Blah');
    };

    const handleApprovedSort = () => {
        alert('Blah');
    };

    const handleRejectedSort = () => {
        alert('Blah');
    };

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
                        {sliced ? currentLetterList.map((letter, index) => {
                            console.log(letter);
                            if (expandedNotification !== index) {
                                // Unexpanded Entry
                                return (
                                    <div key={index} className={classes.notificationBox} onClick={() => handleNotificationClick(index)}>
                                        <div style={{display: 'iblock'}} className={classes.notificationMessage}>
                                            {letter.internshipId}
                                        </div>
                                    </div>
                                );
                            } else {
                                // Expanded Entry
                                return (
                                    <div key={index} className={`${classes.notificationBox} ${classes.expanded}`} onClick={() => handleNotificationClick(index)}>
                                        <div style={{display: 'iblock'}} className={`${classes.notificationMessage} ${classes.expanded}`}>
                                            {letter.internshipId}
                                        </div>

                                        <div className={classes.actions}>
                                            <button className={classes.downloadButton} onClick={() => handleDownload(letter.internshipId)}>Download application letter</button>
                                            <div className={classes.rightButtons}>
                                                <button className={classes.approveButton} onClick={() => handleApproved(letter.internshipId)}>Approve</button>
                                                <button className={classes.rejectButton} onClick={() => handleRejected(letter.internshipId)}>Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        }) : null}

                        {sliced ? <Pagination currentPage={currentPage} notificationsPerPage={notificationsPerPage} totalNotifications={letterList.length} paginate={setCurrentPage}/> : null}
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

export default EvaluateLetter;