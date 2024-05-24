// CONNECTED

import React, { useEffect } from 'react';

import ProfileButton from "../../components/coordinator/ProfileButton";
import OfferBox from "../../components/coordinator/OfferBox";

import { Role } from "../../util/Authorization";
import { getRequest, putRequest } from '../../util/Request';

const CoordinatorInternshipOfferPage = () => {
    const [offerList, setOfferList] = React.useState(null);
    const [loaded, setLoaded] = React.useState(null);

    useEffect(() => {
        const fetchData = async() => {
        if (!loaded) {
                const url = `/internshipoffer/list?page=0&size=1000`;
                const res = await getRequest(url, Role.coordinator);

                setOfferList(res.data.content);
                setLoaded(true);
            }
        }
        
        fetchData().catch((error) => alert("An unknown problem has occurred unexpectedly: " + error));
    });

    const whenApprove = (offer) => {
        const url = `/internshipoffer/update/${offer.offerId}`;
        const data = {
            jobTitle: offer.jobTitle,
            title: offer.title,
            content: offer.content,
            isAccepted: true
        };

        putRequest(url, data, Role.coordinator)
            .then(() => { alert("Internship offer accepted."); })
            .catch((error) => { alert("An unknown problem has occurred unexpectedly: " + error); });
    }

    const whenReject = (offer) => {
        const url = `/internshipoffer/update/${offer.offerId}`;
        const data = {
            jobTitle: offer.jobTitle,
            title: offer.title,
            content: offer.content,
            isAccepted: false
        };

        putRequest(url, data, Role.coordinator)
            .then(() => { alert("Internship offer rejected."); })
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
                    <ProfileButton navigateTo={"/coordinator/profile"} Name={"Coordinator"}/>
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