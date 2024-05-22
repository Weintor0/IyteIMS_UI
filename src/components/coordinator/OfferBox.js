import React, {useState} from "react";
import classes from "./ErrorMessageBox.module.css";
import Modal from "./Modal";

const OfferBox = ({ offer, currentApproval, whenApprove, whenReject }) => {
    const [largeBoxVisible, setLargeBoxVisible] = useState(false)

    const fnApprove = () => {
        whenApprove(offer);
    };

    const fnReject = () => {
        setLargeBoxVisible(false);
        whenReject(offer);
    };

    return (
        <div style={{marginBottom:8}}>
        {largeBoxVisible === true ?
            <div style={{
                height: 250,
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
                    <p style={{ marginLeft: 20, fontSize: 25, fontWeight: "bold" }}>{offer.title}</p>
                    <p style={{ marginTop: 0, marginLeft: 20, fontSize: 20 }}>{offer.jobTitle}</p>
                    <p style={{ marginTop: 0, marginLeft: 20, fontSize: 20 }}>{offer.content}</p>
                    <p style={{ marginTop: 0, marginLeft: 20, fontSize: 20 }}>{currentApproval}</p>
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
                    }} onClick={fnReject}>
                        {<p style={{color:"white", fontWeight:"bold"}}>Cancel</p>}
                    </div>
                    <div style={{
                        backgroundColor: "green",
                        borderRadius: 30,
                        width:  "40%",
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} onClick={fnApprove}>
                        {<p style={{color:"white", fontWeight:"bold"}}>Approve and Redirect</p>}
                    </div>
                </div>
            </div>

            :

            <div className={classes.errorContainer} style={{height:30, width:"65%"}} onClick={() => setLargeBoxVisible(true)} >
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p style={{margin:0}} className={classes.errorTitle}>{offer.title}</p>
                    <p style={{margin:0}}>{offer.jobTitle}</p>
                    <p style={{margin:0,marginRight:20}}>{offer.content}</p>
                </div>
            </div>
        }
        </div>
    );
}

export default OfferBox;