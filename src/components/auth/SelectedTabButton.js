import React from "react";
import classes from "./SelectedTabButton.module.css";

const SelectedTabButton = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topRadius} />
      <div className={classes.tab} />
      <div className={classes.bottomRadius} />
    </div>
  );
};

export default SelectedTabButton;
