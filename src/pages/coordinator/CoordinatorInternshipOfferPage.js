import React from 'react'
import ErrorMessageBox from "../../components/coordinator/ErrorMessageBox";
import ProfileButton from "../../components/coordinator/ProfileButton";
import FormBox from "../../components/coordinator/FormBox";
import StudentBox from "../../components/coordinator/StudentBox";
import { useSearchParams } from "react-router-dom";


const CoordinatorInternshipOfferPage = () => {
    const [approved, setApproved] = React.useState("");
    const [offers, setOffers] = React.useState([]);

    let Name = "Nurcan";

    return (
        <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
            <div style={{flexDirection:"row", display:"flex", padding:0}}>
                <div style={{flex:1, padding:20}}>
                    <h2 style={{fontSize:35}}>Internship Offers</h2>
                    <p>See all recent offers.</p>
                </div>
                <div style={{flex:1,margin:"2%"}}>
                    <ProfileButton navigateTo="/coordinator/profile" Name={Name}/>
                </div>
            </div>
            {offers.length === 0 ?
                <div style={{padding:20}}>
                    <p>
                        There is no offer !
                    </p>
                </div>
                : offers.map((offer, index) => {
                    return <StudentBox
                        Name={offer.company}
                        readStatus={offer.read}
                        data={offer}
                        Approved={approved}
                        offerOrNot={true}/>
                })}


        </div>
    )
}


export default CoordinatorInternshipOfferPage