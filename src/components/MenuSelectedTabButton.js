import React from "react";
import classes from "./MenuSelectedTabButton.module.css";

const MenuSelectedTabButton = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topRadius} />
      <div className={classes.tab} />
      <div className={classes.bottomRadius} />
    </div>
  );
};

export default MenuSelectedTabButton;
