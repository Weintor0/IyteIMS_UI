import React, { useState } from "react";
import classes from "./AddAnnouncements.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const AddAnnouncements = () => {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    const titleRef = React.useRef(null);
    const jobTitleRef = React.useRef(null);
    const contentRef = React.useRef(null);

    async function sendInternshipOffer() {
        try {
            let res = await axios.post("http://localhost:9090/internshipoffer/createinternship", {
                "jobTitle": titleRef.current.value,
                "title": jobTitleRef.current.value,
                "content": contentRef.current.value
            }, 
            { 
                headers: {
                    "Authorization": "Bearer " + token
            }});

            return res;
        } catch (e) {
            alert("An unknown problem has occurred unexpectedly");
        }
    }

    const handleSave = () => {
        sendInternshipOffer().then((result) => {
            navigate({pathname: "/firm/home", search: `?id=${id}&token=${token}`});
        });
    };

   return (
    <div className={classes.container}>
        <div className={classes.headercontainer}>
            <div>
            <h2>My Internship Announcements </h2>
            <p>See your recent announcements.</p>
            </div>
            <div className={classes.searchContainer}>
            <form action="/search" method="get">
                <input
                type="text"
                name="searchQuery"
                id="searchQuery"
                placeholder="Search..."
                />
            </form>
                <button type="submit" className="search-button"></button>
            </div>
        </div>
        <div className={classes.bodyContainer}>
            <div className={classes.addContainer}>
                <input type="text" ref={titleRef} placeholder="Title"/>
                <input type="text" ref={jobTitleRef} placeholder="Job Title"/>
                <input type="text" ref={contentRef} placeholder="Content"/>
                <div className={classes.saveContainer}>
                    <button onClick={handleSave} className={classes.saveButton}>Save and Send</button>
                </div>
            </div>
        </div>
    </div>
  );
};


export default AddAnnouncements;
