import React from 'react';
import classes from "./NavigationMenu.css";
import { useNavigate } from 'react-router-dom';

import MenuTabButton from '../common/sidebar/MenuTabButton';

import HomeIcon from "../../icons/homepage.png";
import NotificationsIcon from "../../icons/messages.png";
import OffersIcon from "../../icons/jobs.png";
import ApplicationsIcon from "../../icons/applications.png";
import FormsIcon from "../../icons/forms.png"
import TransactionsIcon from "../../icons/transactions.png"
import ReportsIcon from "../../icons/reports.png";
import SurveyIcon from "../../icons/survey.png";
import CoordinatorIcon from "../../icons/coordinator.png"
import CompanyForm from "../../icons/companyform.png"

const NavigationMenu = ({i}) => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className={classes.sideBar}>
            <MenuTabButton selected={i === 0} click={() => navigateTo('/coordinator/home')} condition={false} icon={HomeIcon}/>
            <MenuTabButton selected={i === 1} click={() => navigateTo('/coordinator/view-notifications')} condition={false} icon={NotificationsIcon}/>
            <MenuTabButton selected={i === 2} click={() => navigateTo('/coordinator/announcements')} condition={false} icon={CoordinatorIcon}/>
            <MenuTabButton selected={i === 3} click={() => navigateTo('/coordinator/internship-offers')} condition={false} icon={OffersIcon}/>
            <MenuTabButton selected={i === 4} click={() => navigateTo('/coordinator/ssi-transactions')} condition={false} icon={TransactionsIcon}/>
            <MenuTabButton selected={i === 5} click={() => navigateTo('/coordinator/review-forms')} condition={false} icon={FormsIcon}/>
            <MenuTabButton selected={i === 6} click={() => navigateTo('')} condition={false} icon={CompanyForm}/>{/*/coordinator/company-forms*/}
            <MenuTabButton selected={i === 7} click={() => navigateTo('')} condition={false} icon={ReportsIcon}/>{/*/coordinator/review-reports*/}
            <MenuTabButton selected={i === 8} click={() => navigateTo('/coordinator/surveyresult')} condition={false} icon={SurveyIcon}/>
        </div>
    )
};

export default NavigationMenu;