import React from 'react';

import MenuSelectedTabButton from './MenuSelectedTabButton';
import MenuUnselectedTabButton from './MenuUnselectedTabButton';

const MenuTabButton = ({selected, ...rest}) => {
    return (
        <>
            {selected ? 
                <MenuSelectedTabButton {...rest}/> 
                : 
                <MenuUnselectedTabButton {...rest}/>}
        </>
    )
}

export default MenuTabButton;