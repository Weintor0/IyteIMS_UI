import React from 'react';
import classes from "./NavigationMenu.css";
import { useNavigate } from 'react-router-dom';

import HomeIcon from "../../icons/homepage.png";
import NotificationsIcon from "../../icons/messages.png";
import OffersIcon from "../../icons/jobs.png";
import ApplicationsIcon from "../../icons/applications.png";
import FormsIcon from "../../icons/forms.png"
import StudentReportIcon from "../../icons/reports.png"
import CompanyFormIcon from "../../icons/companyform.png"
import CoordinatorIcon from "../../icons/coordinator.png";
import MenuTabButton from '../MenuTabButton';

const NavigationMenu = ({i}) => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className={classes.sideBar}>
            <MenuTabButton selected={i == 0} click={() => navigateTo('/firm/home')} condition={false} icon={HomeIcon}/>
            <MenuTabButton selected={i == 1} click={() => navigateTo('/firm/notifications')} condition={false} icon={NotificationsIcon}/>
            <MenuTabButton selected={i == 2} click={() => navigateTo('/firm/internship-offers')} condition={false} icon={OffersIcon}/>
            <MenuTabButton selected={i == 3} click={() => navigateTo('/firm/evaluate-letter')} condition={false} icon={ApplicationsIcon}/>
            <MenuTabButton selected={i == 4} click={() => navigateTo('/firm/send-application-form')} condition={false} icon={FormsIcon}/>
            <MenuTabButton selected={i == 5} click={() => navigateTo('/firm/check-student-report')} condition={false} icon={StudentReportIcon}/>
            <MenuTabButton selected={i == 6} click={() => navigateTo('/firm/send-company-form')} condition={false} icon={CompanyFormIcon}/>
            <MenuTabButton selected={i == 7} click={() => navigateTo('/firm/coordinator-announcements')} condition={false} icon={CoordinatorIcon}/>
        </div>
    )
};

export default NavigationMenu;