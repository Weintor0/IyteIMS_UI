// CONNECTED

import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import NavigationMenu from "../../../components/firm/NavigationMenu";
import classes from "./AddAnnouncements.module.css";
import Editor from './Editor';

import { Role } from "../../../util/Authorization";
import { postRequest } from "../../../util/Request";

const AddAnnouncements = () => {
    const navigate = useNavigate();

    const titleRef = React.useRef(null);
    const jobTitleRef = React.useRef(null);

    async function sendInternshipOffer(content) {
        try {
            const url = `/internshipoffer/createinternship`;
            const data = {
                "jobTitle": titleRef.current.value,
                "title": jobTitleRef.current.value,
                "content": content
            };

            return postRequest(url, data, Role.firm);
        } catch (e) {
            alert("An unknown problem has occurred unexpectedly");
        }
    }

    const handleSave = (content) => {
        sendInternshipOffer(content).then(() => {
            navigate("/firm/home");
        });
    };

   return (
    <>
        <NavigationMenu i={2}/>
        <div className={classes.container}>
            <Header titleFn={u => `My Internship Offers`} userNameFn={u => u} userRole={Role.firm}/>
            <div className={classes.bodyContainer}>
                <div className={classes.addContainer}>
                    <input type="text" ref={titleRef} placeholder="Title"/>
                    <input type="text" ref={jobTitleRef} placeholder="Job Title"/>
                    <Editor handleSave={(content) => handleSave(content)}/>
                </div>
            </div>
        </div>
    </>
  );
};


export default AddAnnouncements;
