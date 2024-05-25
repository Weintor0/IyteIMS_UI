import React from "react";
import classes from "./UnselectedTabButton.module.css";

const UnselectedTabButton = ({ click, condition }) => {
  return (
    <div
      onClick={click}
      style={!condition ? { marginTop: "30px" } : { marginTop: "0" }}
      className={classes.selectedTabButton}
    />
  );
};

export default UnselectedTabButton;
