import React, {useState} from "react";
import classes from "./ErrorMessageBox.module.css";
import FeedbackModal from "./FeedbackModal";


const FormBox = ({ studentName, studentNumber, studentEmail, 
                   firmName, firmEmail, offerTitle ,jobTitle, approved,
                   handleApprove, handleReject, handleDownload}) => {

    const [largeBoxVisible, setLargeBoxVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const openModal = () => { setModalVisible(true); };
    const closeModal = () => { setModalVisible(false); };

    const handleSendFeedback = (feedback) => {
        handleReject(feedback);
        setModalVisible(false);
    }

    return (
        <div style={{marginBottom:8}}>
            <FeedbackModal style={{overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(171, 171, 171, 0.8)'
                },}} isOpen={modalVisible} onClose={closeModal} onSend={handleSendFeedback} text="Write your feedback here..." header="Feedback:"/>

            {largeBoxVisible === true ?
                <div style={{
                    height: "fit-content",
                    width: "80%",
                    backgroundColor: "#ffffff",
                    padding: 5,
                    borderRadius: 30,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    marginLeft: 15,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }} onClick={()=>setLargeBoxVisible(false)} >
                    <div>
                        {<p style={{ marginLeft: 20, fontSize: 20, fontWeight: "bold" }}>Application Form</p>}
                        <p style={{ marginTop: 0, marginLeft: 20, fontSize: 13 }}>Student: {studentName}, {studentNumber}, {studentEmail}</p>
                        <p style={{ marginTop: 0, marginLeft: 20, fontSize: 13 }}>Firm: {firmName}, {firmEmail}</p>
                        <p style={{ marginTop: 0, marginLeft: 20, fontSize: 13 }}>Offer: {offerTitle}, {jobTitle}</p>
                        <a style={{
                            display: 'inline-block', textDecoration:"underline",marginLeft: 20, marginTop: 10,
                            padding: '10px 20px', borderRadius: '5px', fontSize: '15px'
                        }} href="javascript:void(0);" onClick={handleDownload} download>
                            Download
                        </a>
                    </div>
                    <div style={{
                        marginBottom: 10,
                        display: "flex",
                        gap: 15,
                        justifyContent: "flex-end",
                        marginRight: 20
                    }}>
                        <div style={{
                            backgroundColor: "red",
                            borderRadius: 30,
                            width: "25%",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }} onClick={openModal}>
                            <p style={{color:"white", fontWeight:"bold"}}>Reject and Send Feedback</p>
                        </div>
                        <div style={{
                            backgroundColor: "green",
                            borderRadius: 30,
                            width:  "25%",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }} onClick={handleApprove}>
                            <p style={{color:"white", fontWeight:"bold"}}>Approve</p>
                        </div>
                    </div>
                </div>

                :

                <div className={classes.errorContainer} style={{height:30, width:"80%"}} onClick={() => setLargeBoxVisible(true)} >
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <p className={classes.errorTitle}>{`${studentName} - ${firmName}`}</p>
                        <p style={{fontSize:15, margin:0,marginRight:"7%"}}>{approved}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default FormBox;