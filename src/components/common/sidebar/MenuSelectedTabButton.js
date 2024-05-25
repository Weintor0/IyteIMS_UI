import React from "react";
import classes from "./MenuSelectedTabButton.module.css";

const MenuSelectedTabButton = ({icon}) => {
  return (
    <div className={classes.container}>
      <div className={classes.topRadius}/>
      <div className={classes.tab}>
        <img width="32px" height="32px" src={icon} alt="icon" className={classes.icon}/>
      </div>
      <div className={classes.bottomRadius} />
    </div>
  );
};

export default MenuSelectedTabButton;
