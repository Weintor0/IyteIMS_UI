import React from 'react'
import ErrorMessageBox from "../../components/coordinator/ErrorMessageBox";
import ProfileButton from "../../components/coordinator/ProfileButton";
import { useSearchParams } from "react-router-dom";

const CoordinatorHomePage = (navigation) => {
    let Name="Nurcan Y.";
    let numberOfUnread = "8 unread"

    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;
    
    return (
        <div style={{display:"flex",width:"98%",borderRadius:30,flexDirection:"column",margin:"5%",backgroundColor:"white"}}>
            <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
                <div style={{flexDirection:"row", display:"flex", padding:0}}>
                    <div style={{flex:1, padding:20}}>
                        <h2 style={{fontSize:35}}>Hello, {Name}</h2>
                        <p>Welcome back !</p>
                    </div>
                    <div style={{flex:1,margin:"2%"}}>
                        <ProfileButton navigateTo={{pathname: "/coordinator/profile", search: `?id=${id}&token=${token}`}} Name={Name}/>
                    </div>
                </div>
                <div style={{ flex:7}}>
                    <div style={{marginBottom:10}} >
                        <ErrorMessageBox navigateTo={{pathname: "/coordinator/internship-offers", search: `?id=${id}&token=${token}`}} Message={numberOfUnread} Title="Internship Offers"/>
                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{}}>
                            <ErrorMessageBox navigateTo={{pathname: "/coordinator/announcements",  search: `?id=${id}&token=${token}`}} High="85%" Message="Click to see Coordinator Announcements" Title="Coordinator Announcements"/>

                        </div>
                        <div style={{display:"flex", flexDirection:"column",gap:10}}>
                            <ErrorMessageBox navigateTo={{pathname: "/coordinator/reviewforms", search: `?id=${id}&token=${token}`}}  Title="Review the completed forms"/>
                            <ErrorMessageBox navigateTo={{pathname: "/coordinator/ssi-transactions", search: `?id=${id}&token=${token}`}}  Title="SSI Transactions"/>
                        </div>
                    </div>
                    <div style={{marginTop:"1.5%"}}>
                        <ErrorMessageBox navigateTo={{pathname:"/coordinator/surveyresult", search: `?id=${id}&token=${token}`}} Title="Survey Results"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoordinatorHomePage