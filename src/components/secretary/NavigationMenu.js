import React from 'react';
import classes from "./NavigationMenu.css";
import { useNavigate } from 'react-router-dom';

import MenuTabButton from '../common/sidebar/MenuTabButton';

import HomeIcon from "../../icons/homepage.png";
import NotificationsIcon from "../../icons/messages.png";
import TransactionsIcon from "../../icons/transactions.png"

const NavigationMenu = ({i}) => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className={classes.sideBar}>
            <MenuTabButton selected={i === 0} click={() => navigateTo('/secretary/home')} condition={false} icon={HomeIcon}/>
            <MenuTabButton selected={i === 1} click={() => navigateTo('/secretary/view-notifications')} condition={false} icon={NotificationsIcon}/>
            <MenuTabButton selected={i === 2} click={() => navigateTo('/secretary/ssi-transactions')} condition={false} icon={TransactionsIcon}/>
        </div>
    )
};

export default NavigationMenu;