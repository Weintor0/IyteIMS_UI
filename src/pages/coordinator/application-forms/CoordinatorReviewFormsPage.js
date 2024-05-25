import React, {useState} from 'react'

import FormBox from "../../../components/coordinator/FormBox";
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "../CoordinatorHomePage.module.css";
import Header from "../../../components/common/header/Header";

import { Role } from "../../../util/Authorization";

const CoordinatorReviewFormsPage = () => {
    const [approved, setApproved] = React.useState("");
    const [students, setStudents] = React.useState([]);

    return (
        <>
            <NavigationMenu i={5}/>
            <div className={classes.container}>
            <Header titleFn={u => "Review Application Forms"} userNameFn={u => u} userRole={Role.coordinator}/>
                <p className={classes.welcomeMessage}>See all recent forms.</p>
            {students.length === 0 ?
                <div style={{padding:20}}>
                    <p>
                        There is no form !
                    </p>
                </div>
                : students.map((student, index) => {
                    return <FormBox
                        Name={student.name}
                        Approved={approved}/>
                })}


        </div>
            </>
    )

}

export default CoordinatorReviewFormsPage