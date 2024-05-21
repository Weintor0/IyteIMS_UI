import React from "react";
import classes from "./ErrorMessageBox.module.css";
import {useNavigate} from "react-router-dom";


const ErrorMessageBox = ({ Title, Message, High, Width,navigateTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    };
    return (
        <div className={classes.errorContainer} style={{height:High, width:Width}} onClick={handleClick} >
            <div>
                <p className={classes.errorTitle}>{Title}</p>
                <p className={classes.errorMessage}>{Message}</p>
            </div>

        </div>
    );
}

export default ErrorMessageBox;

