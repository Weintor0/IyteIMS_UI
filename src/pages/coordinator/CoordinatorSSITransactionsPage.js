import React from 'react'
import ErrorMessageBox from "../../components/coordinator/ErrorMessageBox";
import ProfileButton from "../../components/coordinator/ProfileButton";

const CoordinatorSSITransactionsPage = () => {

    let Name = "Nurcan";

    return (
        <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
            <div style={{flexDirection:"row", display:"flex", padding:0}}>
                <div style={{flex:1, padding:20}}>
                    <h2 style={{fontSize:35}}>SSI Transactions</h2>
                    <p>See all students here</p>
                </div>
                <div style={{flex:1,margin:"5%"}}>
                    <ErrorMessageBox Title="Search Component"/>
                </div>
                <div style={{flex:1,margin:"2%"}}>
                    <ProfileButton navigateTo="/coordinatorprofile" Name={Name}/>
                </div>
            </div>
            <ErrorMessageBox navigateTo="/s" High={30} Width={"80%"} Title="Student-1"/>


        </div>
    )
}

export default CoordinatorSSITransactionsPage