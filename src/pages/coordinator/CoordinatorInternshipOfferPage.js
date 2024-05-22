// CONNECTED

import React, { useState, useEffect } from 'react';
import ErrorMessageBox from "../../components/coordinator/ErrorMessageBox";
import ProfileButton from "../../components/coordinator/ProfileButton";
import FormBox from "../../components/coordinator/FormBox";
import OfferBox from "../../components/coordinator/OfferBox";
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

const CoordinatorInternshipOfferPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    const [offerList, setOfferList] = React.useState(null);
    const [loaded, setLoaded] = React.useState(null);

    const navigate = useNavigate();

    let Name = "Nurcan";

    useEffect(() => {
        const fetchData = async() => {
        if (!loaded) {
                const res = await axios.get("http://localhost:9090/internshipoffer/list?page=0&size=1000", 
                    {headers: { "Authorization": "Bearer " + token }});
                setOfferList(res.data.content);
                setLoaded(true);
            }
        }
        
        fetchData().catch((error) => alert("An unknown problem has occurred unexpectedly: " + error));
    });

    const whenApprove = (offer) => {
        axios.put("http://localhost:9090/internshipoffer/update/" + offer.offerId, {
          jobTitle: offer.jobTitle,
          title: offer.title,
          content: offer.content,
          isAccepted: true
        }, {headers: { "Authorization": "Bearer " + token }})
        .then((success) => { alert("Internship offer accepted."); })
        .catch((error) => { alert("An unknown problem has occurred unexpectedly: " + error); });
    }

    const whenReject = (offer) => {
        axios.put("http://localhost:9090/internshipoffer/update/" + offer.offerId, {
          jobTitle: offer.jobTitle,
          title: offer.title,
          content: offer.content,
          isAccepted: false
        }, {headers: { "Authorization": "Bearer " + token }})
        .then((success) => { alert("Internship offer rejected."); })
        .catch((error) => { alert("An unknown problem has occurred unexpectedly: " + error); });
    }

    return (
        <div style={{display:"flex",width:"100%",height:"100%",flexDirection:"column",margin:"5%"}}>
            <div style={{flexDirection:"row", display:"flex", padding:0}}>
                <div style={{flex:1, padding:20}}>
                    <h2 style={{fontSize:35}}>Internship Offers</h2>
                    <p>See all recent offers.</p>
                </div>
                <div style={{flex:1,margin:"2%"}}>
                    <ProfileButton navigateTo={{pathname: "/coordinator/profile", search: `?id=${id}&token=${token}`}} Name={Name}/>
                </div>
            </div>

            {loaded ? offerList.map((offer, index) => {
                    return <OfferBox
                        offer={offer}
                        currentApproval={false}
                        whenReject={(offer) => whenReject(offer)}
                        whenApprove={(offer) => whenApprove(offer)}/>
                }) : <div style={{padding:20}}><p>There is no offer !</p>
            </div>}
        </div>
    )
}


export default CoordinatorInternshipOfferPage