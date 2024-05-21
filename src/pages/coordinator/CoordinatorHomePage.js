import React from 'react'
import ErrorMessageBox from "../components/ErroxBox";
import ProfileButton from "../components/ProfileButton";

const CoordinatorHomePage = (navigation) => {
    let Name="Nurcan Y.";
    let numberOfUnread = "8 unread"
    return (
        <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
            <div style={{flexDirection:"row", display:"flex", padding:0}}>
                <div style={{flex:1, padding:20}}>
                    <h2 style={{fontSize:35}}>Hello, {Name}</h2>
                    <p>Welcome back !</p>
                </div>
                <div style={{flex:1,margin:"5%"}}>
                    <ErrorMessageBox Title="Search Component"/>
                </div>
                <div style={{flex:1,margin:"2%"}}>
                    <ProfileButton navigateTo="/coordinatorprofile" Name={Name}/>
                </div>

            </div>
            <div style={{ flex:7}}>
                <div style={{marginBottom:10}} >
                    <ErrorMessageBox navigateTo="/internshipannouncements" Message={numberOfUnread} Title="Internship Announcements"/>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{}}>
                        <ErrorMessageBox navigateTo="/coordinatorannouncements" High="85%" Message="Click to see Coordinator Announcements" Title="Coordinator Announcements"/>

                    </div>
                    <div style={{display:"flex", flexDirection:"column",gap:10}}>
                        <ErrorMessageBox navigateTo="/coordinatorreviewforms"  Title="Review the completed forms"/>
                        <ErrorMessageBox navigateTo="/coordinatorssitransactions"  Title="SSI Transactions"/>
                    </div>
                </div>
                <div style={{marginTop:"1.5%"}}>
                    <ErrorMessageBox navigateTo="/surveyresult" Title="Survey Results"/>

                </div>


            </div>

        </div>
    )
}

export default CoordinatorHomePage