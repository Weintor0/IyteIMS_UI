import React, {useState} from "react";
import classes from "./ErrorMessageBox.module.css";

const NotificationBox = ({ Content}) => {


    const [content, setContent] = useState(Content);


    return (
        <div style={{marginBottom:8}}>
                <div className={classes.errorContainer} style={{height:30, width:"65%"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <p className={classes.errorTitle}>{content}</p>
                    </div>

                </div>
        </div>
    );
}

export default NotificationBox;