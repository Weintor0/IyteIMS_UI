import React from 'react';
import classes from "./NavigationMenu.css";
import { useNavigate } from 'react-router-dom';

import MenuTabButton from '../MenuTabButton';

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
            <MenuTabButton selected={i === 6} click={() => navigateTo('/student/summer-practice-reports')} condition={false} icon={ReportsIcon}/>
            <MenuTabButton selected={i === 7} click={() => navigateTo('/student/survey')} condition={false} icon={SurveyIcon}/>
            <MenuTabButton selected={i === 8} click={() => navigateTo('/student/coordinator-announcements')} condition={false} icon={CoordinatorIcon}/>
        </div>
    )
};

export default NavigationMenu;