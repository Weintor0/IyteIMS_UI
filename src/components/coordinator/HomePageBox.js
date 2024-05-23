import React from "react";
import classes from "./HomePageBox.module.css";
import {useNavigate} from "react-router-dom";

const HomePageBox = ({ Title, Message, High, Width, navigateTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    };

    return (
        <div className={classes.boxContainer} style={{height:High, width:Width}} onClick={handleClick} >
            <div>
                <p className={classes.boxTitle}>{Title}</p>
                <p className={classes.boxMessage}>{Message}</p>
            </div>

        </div>
    );
}

export default HomePageBox;

