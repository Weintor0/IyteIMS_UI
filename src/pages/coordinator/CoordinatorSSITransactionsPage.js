import React from 'react'

import ProfileButton from "../../components/coordinator/ProfileButton";
import StudentBox from "../../components/coordinator/StudentBox";

const CoordinatorSSITransactionsPage = () => {
    const [students, setStudents] = React.useState([]);

    return (
        <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
            <div style={{flexDirection:"row", display:"flex", padding:0}}>
                <div style={{flex:1, padding:20}}>
                    <h2 style={{fontSize:35}}>SSI Transactions</h2>
                    <p>See all students here</p>
                </div>

                <div style={{flex:1,margin:"2%"}}>
                    <ProfileButton navigateTo={"/coordinator/profile"} Name={"Coordinator"}/>
                </div>
            </div>
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
    )
}

export default CoordinatorSSITransactionsPage