import React from "react";
import {useNavigate} from "react-router-dom";


const ProfileButton = ({ Name, navigateTo }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(navigateTo);
    };

    return (
        <div style={{justifyContent:"center",gap:10,alignItems:"center",display:"flex", flexDirection:"row"}} onClick={handleClick} >
            <div style={{background:"gray", borderRadius:20, width:50,height:50}}>
            </div>
            <div>
                <p style={{fontSize:20}}>{Name}</p>
            </div>

        </div>
    );
}

export default ProfileButton;