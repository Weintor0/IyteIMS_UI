import React, {useState} from 'react'
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "../CoordinatorHomePage.module.css";
import Header from "../../../components/common/header/Header";
import FormBox from "../../../components/coordinator/FormBox";
import SurveyBox from "../../../components/coordinator/SurveyBox";

import { Role } from "../../../util/Authorization";

const CoordinatorSurveyResultsPage = () => {
    const [surveys, setSurveys] = React.useState([]);

    return (
        <>
            <NavigationMenu i={8}/>
            <div className={classes.container}>
                <Header titleFn={u => "Survey Results"} userNameFn={u => u} userRole={Role.coordinator}/>
                <p className={classes.welcomeMessage}>See all survey results here.</p>
                {surveys.length === 0 ?
                <div style={{padding:25}}>
                    <p>
                        There is no survey.
                    </p>
                </div>
                : surveys.map((survey, index) => {
                    return <SurveyBox
                        Name={survey.name}/>
                })}
            </div>
        </>
    )
}

export default CoordinatorSurveyResultsPage