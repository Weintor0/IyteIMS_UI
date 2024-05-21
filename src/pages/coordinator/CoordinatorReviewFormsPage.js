import React from 'react'
import ProfileButton from "../../components/coordinator/ProfileButton";
import FormBox from "../../components/coordinator/FormBox";
import { useSearchParams } from "react-router-dom";

const CoordinatorReviewFormsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    const [approved, setApproved] = React.useState("");
    const [students, setStudents] = React.useState([]);

    let Name = "Nurcan";

    return (
        <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
            <div style={{flexDirection:"row", display:"flex", padding:0}}>
                <div style={{flex:1, padding:20}}>
                    <h2 style={{fontSize:35}}>Review Application Forms</h2>
                    <p>See all recent forms.</p>
                </div>
                <div style={{flex:1,margin:"2%"}}>
                    <ProfileButton navigateTo="/coordinatorprofile" Name={Name}/>
                </div>
            </div>
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
    )

}

export default CoordinatorReviewFormsPage