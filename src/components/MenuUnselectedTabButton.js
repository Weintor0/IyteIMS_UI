import React from "react";
import classes from "./MenuUnselectedTabButton.module.css";

const MenuUnselectedTabButton = ({ click, condition, icon }) => {
  return (
    <div
      onClick={click}
      style={{marginTop: (!condition ? "15px" : "0px")}}
      className={classes.selectedTabButton}
    >
      <img width="32px" height="32px" src={icon} alt="icon" className={classes.icon}/>
    </div>
  );
};

export default MenuUnselectedTabButton;
