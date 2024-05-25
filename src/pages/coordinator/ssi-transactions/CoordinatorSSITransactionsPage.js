import React, {useState} from 'react'

import StudentBox from "../../../components/coordinator/StudentBox";
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "../CoordinatorHomePage.module.css";
import Header from "../../../components/common/header/Header";

import { Role } from "../../../util/Authorization";

const CoordinatorSSITransactionsPage = () => {
    const [students, setStudents] = React.useState([]);

    return (
        <>
            <NavigationMenu i={4}/>
            <div className={classes.container}>
            <Header titleFn={u => "SSI Transactions"} userNameFn={u => u} userRole={Role.coordinator}/>
                <p className={classes.welcomeMessage}>See all students here</p>

                {students.length === 0 ?
                <div style={{padding:20}}>
                    <p>
                        There is no student !
                    </p>
                </div>
                : students.map((student, index) => {
                    return <StudentBox
                        Name={student.name}
                        Text={student.text}
                        data={student}/>
                })}


            </div>
        </>
    )
}

export default CoordinatorSSITransactionsPage