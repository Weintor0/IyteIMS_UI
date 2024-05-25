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

const NavigationMenu = ({i}) => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className={classes.sideBar}>
            <MenuTabButton selected={i === 0} click={() => navigateTo('/student/home')} condition={false} icon={HomeIcon}/>
            <MenuTabButton selected={i === 1} click={() => navigateTo('/student/view-notifications')} condition={false} icon={NotificationsIcon}/>
            <MenuTabButton selected={i === 2} click={() => navigateTo('/student/internship-offers')} condition={false} icon={OffersIcon}/>
            <MenuTabButton selected={i === 3} click={() => navigateTo('/student/internship-applications')} condition={false} icon={ApplicationsIcon}/>
            <MenuTabButton selected={i === 4} click={() => navigateTo('/student/send-application-form')} condition={false} icon={FormsIcon}/>
            <MenuTabButton selected={i === 5} click={() => navigateTo('/student/ssi-transactions')} condition={false} icon={TransactionsIcon}/>
            <MenuTabButton selected={i === 6} click={() => navigateTo('')} condition={false} icon={ReportsIcon}/>{/*/student/summer-practice-reports*/}
            <MenuTabButton selected={i === 7} click={() => navigateTo('')} condition={false} icon={SurveyIcon}/>{/*/student/survey*/}
            <MenuTabButton selected={i === 8} click={() => navigateTo('')} condition={false} icon={CoordinatorIcon}/>{/*/student/coordinator-announcements*/}
        </div>
    )
};

export default NavigationMenu;