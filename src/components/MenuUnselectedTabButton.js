import React from "react";
import classes from "./MenuUnselectedTabButton.module.css";

const MenuUnselectedTabButton = ({ click, condition }) => {
  return (
    <div
      onClick={click}
      style={!condition ? { marginTop: "15px" } : { marginTop: "0" }}
      className={classes.selectedTabButton}
    />
  );
};

export default MenuUnselectedTabButton;
