// CONNECTED (INCOMPLETE)

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuSelectedTabButton from '../../../components/MenuSelectedTabButton';
import MenuUnselectedTabButton from '../../../components/MenuUnselectedTabButton.js';
import Pagination from '../../../components/Pagination';
import classes from './EvaluateLetter.module.css';

import { Role } from "../../../util/Authorization";
import { getRequest, patchRequest } from '../../../util/Request.js';

const EvaluateLetter = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedNotification, setExpandedNotification] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    
    const notificationsPerPage = 5;
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;

    const [loaded, setLoaded] = useState(null);
    const [letterList, setLetterList] = useState([]);
    const [currentLetterList, setCurrentLetterList] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
        if (!loaded) {
                const res = await getRequest("/internship/get-all", Role.firm);

                let waitingLetters = [];
                res.data.forEach((internship) => {
                    if (internship['internshipStatus'] == 'StudentSentApplicationLetter') {
                        letterList.push(internship);
                    }
                });

                setLoaded(true);
                setLetterList(waitingLetters);
                setCurrentLetterList(letterList.slice(indexOfFirstNotification, indexOfLastNotification));
            }
        }
        
        fetchData().catch((err) => alert("An unknown problem has occurred unexpectedly " + err));
    });

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);   /* search logic will be implemented*/
    };

    const navigateTo = (path) => {
        navigate(path);
    };

    const handleWaiting = () => {
        alert('Blah');
    };
    
    const handleApproved = (internshipId) => {
        const url = `/internship/application-letter/evaluate/${internshipId}`;
        const data = {
            acceptance: true,
            feedback: "Feedback feature is currently unavailable."
        };

        patchRequest(url, data, Role.firm)
            .then((success) => { alert("Application letter accepted."); })
            .catch((error) => { alert("An unknown problem has occurred unexpectedly: " + error); });
    };

    const handleRejected = (internshipId) => {
        const url = `/internship/application-letter/evaluate/${internshipId}`;
        const data = {
            acceptance: false,
            feedback: "Feedback feature is currently unavailable."
        }

        patchRequest(url, data, Role.firm)
            .then((success) => { alert("Application letter rejected."); })
            .catch((error) => { alert("An unknown problem has occurred unexpectedly: " + error); });
    };

    const handleApprovedSort = () => {
        alert('Blah');
    };

    const handleRejectedSort = () => {
        alert('Blah');
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

    const handleNotificationClick = (index) => {
        setExpandedNotification(index === expandedNotification ? null : index);
    };

    return(
        <>
            <div className={classes.sideBar}>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/home')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/notifications')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/internship-offers')} condition={false}/>
                <MenuUnselectedTabButton click={() => navigateTo('/firm/application-forms')} condition={false}/>
                <MenuSelectedTabButton />
            </div>

            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.header}>Internship Applications</h2>
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                className={classes.searchInput}
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </form>
                    </div>
                    <div className={classes.profileContainer}>
                        <button className={classes.profileButton}></button>
                        <span className={classes.profileName}>Name, S.</span>
                    </div>
                </div>
                <p className={classes.message}>See all application letter that have been sent your firm here.</p>
                <div className={classes.body}>
                    <div className={classes.boxesContainer}>
                        {loaded ? currentLetterList.map((letter, index) => (
                            <div key={index} className={`${classes.notificationBox} ${expandedNotification === index ? classes.expanded : ''}`} onClick={() => handleNotificationClick(index)}>
                                <div style={{display: 'iblock'}} className={`${classes.notificationMessage} ${expandedNotification === index ? classes.expanded : ''}`}>
                                    {letter.internshipId}
                                </div>

                                {expandedNotification === index && 
                                    (
                                        <div className={classes.actions}>
                                            <button className={classes.downloadButton} onClick={() => handleDownload(letter.internshipId)}>Download application letter</button>
                                            <div className={classes.rightButtons}>
                                                <button className={classes.approveButton} onClick={() => handleApproved(letter.internshipId)}>Approve</button>
                                                <button className={classes.rejectButton} onClick={() => handleRejected(letter.internshipId)}>Reject</button>
                                            </div>
                                        </div>
                                    )
                                }    
                            </div>
                        )) : null}

                        {loaded ? 
                            <Pagination 
                                currentPage={currentPage} 
                                notificationsPerPage={notificationsPerPage} 
                                totalNotifications={letterList.length} 
                                paginate={setCurrentPage}/>
                        : null}
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