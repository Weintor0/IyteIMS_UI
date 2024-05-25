import React, {useState} from "react";
import classes from "./ErrorMessageBox.module.css";

const SurveyBox = ({ Name, SurveyDetails}) => {

    const [largeBoxVisible, setLargeBoxVisible] = useState(false);

    const [surveyName, setFormName] = useState("Survey 1");
    const [surveyDetails, setSurveyDetails] = useState();
    const [fileUrl, setFileUrl] = useState();


    const clickDownload = () => {
        //handle click
    }

    return (
        <div style={{marginBottom:8}}>

            {largeBoxVisible === true ?
                <div style={{
                    height: 300,
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
                        <p style={{ marginLeft: 20, fontSize: 20, fontWeight: "bold" }}>{surveyName}</p>
                        <p style={{ marginTop: 0, marginLeft: 20, fontSize: 15 }}>Student: {surveyDetails}</p>
                        <a href={fileUrl} style={{
                            display: 'inline-block', textDecoration:"underline",marginLeft: 20, marginTop: 10,
                            padding: '10px 20px', borderRadius: '5px', fontSize: '15px'
                        }} download>
                            Download
                        </a>

                    </div>
                </div>
                :
                <div className={classes.errorContainer} style={{height:30, width:"65%"}} onClick={() => setLargeBoxVisible(true)} >
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <p className={classes.errorTitle}>{Name}</p>
                    </div>

                </div>
            }
        </div>
    );
}

export default SurveyBox;