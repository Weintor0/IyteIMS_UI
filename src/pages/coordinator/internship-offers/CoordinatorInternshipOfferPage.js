// CONNECTED

import React, {useEffect} from 'react';

import OfferBox from "../../../components/coordinator/OfferBox";
import NavigationMenu from "../../../components/coordinator/NavigationMenu";
import classes from "./CoordinatorInternshipOfferPage.module.css";
import Header from "../../../components/common/header/Header";

import { Role } from "../../../util/Authorization";
import { getRequest, putRequest } from '../../../util/Request';

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
        <>
            <NavigationMenu i={3}/>
            <div className={classes.container}>
            <Header titleFn={u => "Internship Offers"} userNameFn={u => u} userRole={Role.coordinator}/>
                <p className={classes.welcomeMessage}>See all recent offers.</p>

                {loaded ? offerList.map((offer, index) => {
                        return <OfferBox
                            offer={offer}
                            currentApproval={false}
                            whenReject={(offer) => whenReject(offer)}
                            whenApprove={(offer) => whenApprove(offer)}/>
                    }) : <div style={{padding:20}}>
                            <p>There is no offer !</p>
                        </div>}
            </div>
        </>
    )
}


export default CoordinatorInternshipOfferPage