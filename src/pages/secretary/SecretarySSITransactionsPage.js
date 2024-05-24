import React, {useState} from "react";

import Modal from "../../components/UploadModal"
import NavigationMenu from "../../components/secretary/NavigationMenu";
import Header from "../../components/Header";
import classes from "./SecretaryHomePage.module.css";

const SecretarySSITransactionsPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(false);

    const students = [
        'Student-1', 
        'Student-2', 
        'Student-3'
    ];

    const handleStudentClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleOpen = () => {
        setShowModal(true);
    };
    
    const handleClose = () => {
        setShowModal(false);
    };

    const handleDownloadClick = (e, student) => {
        e.stopPropagation();
        alert(student);
    }

    const handleUploadClick = (e) => {
        e.stopPropagation();
        handleOpen();
    }

    return (
        <>
            <NavigationMenu i={2}/>
            <div className={classes.container}>
                <Header title="SSI Transactions" userName="Department Secretary"/>
                <p className={classes.welcomeMessage}>See all students with SGK requirement.</p>
                <div className={classes.boxesContainer}>
                    {students.map((student, index) => (
                        <div key={index} 
                             className={expandedIndex === index ? classes.expandedStudentBox : classes.studentBox}
                             onClick={() => handleStudentClick(index)}>

                            <h3 style={{cursor:'pointer'}}
                                className={classes.studentName}>
                                {student}    
                            </h3>

                            {expandedIndex === index && (
                                <div className={classes.buttonBox}>
                                    <button onClick={(e) => handleDownloadClick(e,student)} className={classes.tabButton}>Download Application Form</button>
                                    <button onClick={(e) => handleUploadClick(e, student)} className={classes.tabButton}>Upload Employment Doc.</button>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

                {showModal && <Modal 
                    showModal={showModal} 
                    handleClose={handleClose} 
                    url={``}
                    title="Add employment document"/>
                };
            </div>
        </>
    );
};

export default SecretarySSITransactionsPage;