
import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/common/header/Header";
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "./AddAnnouncementBox.module.css";
import Editor from '../../firm/internship-offers/Editor';

import { Role } from "../../../util/Authorization";

const AddAnnouncementBox = () => {
    const navigate = useNavigate();

    const titleRef = React.useRef(null);
    const jobTitleRef = React.useRef(null);

    const handleSave = (content) => {
        console.log(content)
    };

    return (
        <>
            <NavigationMenu i={2}/>
            <div className={classes.container}>
                <Header titleFn={u => "Coordinator Announcements"} userNameFn={u => u} userRole={Role.coordinator}/>
                <div className={classes.bodyContainer}>
                    <div className={classes.addContainer}>
                        <input type="text" ref={titleRef} placeholder="Announcement Title"/>
                        <input type="text" ref={jobTitleRef} placeholder="Subject"/>
                        <Editor handleSave={(content) => handleSave(content)}/>
                    </div>
                </div>
            </div>
        </>
    );
};


export default AddAnnouncementBox;