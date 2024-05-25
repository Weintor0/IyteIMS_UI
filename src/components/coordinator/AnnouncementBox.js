import React, {useState} from "react";
import classes from "./ErrorMessageBox.module.css";

const AnnouncementBox = ({ announcement }) => {

    const [largeBoxVisible, setLargeBoxVisible] = useState(false)
    const [Announcement, setAnnouncement] = useState(announcement)

    const handleCancel = () => {
        setLargeBoxVisible(false);
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
                        <p style={{ marginLeft: 20, fontSize: 25, fontWeight: "bold" }}>{Announcement.title}</p>
                        <p style={{ marginTop: 0, marginLeft: 20, fontSize: 20 }}>{Announcement.subject}</p>
                        <p style={{ marginTop: 0, marginLeft: 20, fontSize: 20 }}>{Announcement.content}</p>
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
                        }} onClick={handleCancel}>
                            {<p style={{color:"white", fontWeight:"bold"}}>Cancel</p>}
                        </div>

                    </div>
                </div>

                :

                <div className={classes.errorContainer} style={{height:30, width:"65%"}} onClick={() => setLargeBoxVisible(true)} >
                    <div style={{display:"flex",gap:20,alignItems:"center"}}>
                        <p style={{margin:0}} className={classes.errorTitle}>{Announcement.title}</p>
                        <p style={{margin:0}}>{Announcement.subject}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default AnnouncementBox;