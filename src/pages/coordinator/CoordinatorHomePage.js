import React from 'react'

import HomePageBox from "../../components/coordinator/HomePageBox";
import ProfileButton from "../../components/coordinator/ProfileButton";

const CoordinatorHomePage = () => {
    let numberOfUnread = "0 unread"
    
    return (
        <div style={{display:"flex",width:"98%",borderRadius:30,flexDirection:"column",margin:"5%",backgroundColor:"white"}}>
            <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
                <div style={{flexDirection:"row", display:"flex", padding:0}}>
                    <div style={{flex:1, padding:20}}>
                        <h2 style={{fontSize:35}}>Hello, {"Internship Coordinator"}</h2>
                        <p>Welcome back !</p>
                    </div>
                    <div style={{flex:1,margin:"2%"}}>
                        <ProfileButton navigateTo={"/coordinator/profile"} Name={"Coordinator"}/>
                    </div>
                </div>
                <div style={{ flex:7}}>
                    <div style={{marginBottom:10}} >
                        <HomePageBox navigateTo={"/coordinator/internship-offers"} Message={numberOfUnread} Title="Internship Offers"/>
                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{}}>
                            <HomePageBox navigateTo={"/coordinator/announcements"} High="85%" Message="Click to see Coordinator Announcements" Title="Coordinator Announcements"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column",gap:10}}>
                            <HomePageBox navigateTo={"/coordinator/reviewforms"}  Title="Review the completed forms"/>
                            <HomePageBox navigateTo={"/coordinator/ssi-transactions"}  Title="SSI Transactions"/>
                        </div>
                    </div>
                    <div style={{marginTop:"1.5%"}}>
                        <HomePageBox navigateTo={"/coordinator/surveyresult"} Title="Survey Results"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoordinatorHomePage