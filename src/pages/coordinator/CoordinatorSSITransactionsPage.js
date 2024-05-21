import React from 'react'
import ErrorMessageBox from "../../components/coordinator/ErrorMessageBox";
import ProfileButton from "../../components/coordinator/ProfileButton";
import StudentBox from "../../components/coordinator/StudentBox";
import { useSearchParams } from "react-router-dom";

const CoordinatorSSITransactionsPage = () => {
    const [students, setStudents] = React.useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    let Name = "Nurcan";

    return (
        <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
            <div style={{flexDirection:"row", display:"flex", padding:0}}>
                <div style={{flex:1, padding:20}}>
                    <h2 style={{fontSize:35}}>SSI Transactions</h2>
                    <p>See all students here</p>
                </div>

                <div style={{flex:1,margin:"2%"}}>
                    <ProfileButton navigateTo={{pathname: "/coordinator/profile", search: `?id=${id}&token=${token}`}} Name={Name}/>
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