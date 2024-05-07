import React from "react";
import classes from "./RegisterFirm.module.css";

import axios from "axios";

const RegisterFirm = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2>Register.</h2>
        <p>Firm register page.</p>
      </div>
      <div className={classes.inputContainer}>
        <input id="name" type="text" placeholder="Firm name" />
        <input
          id="businessRegisterationNumber"
          type="text"
          placeholder="Business registeration number"
        />

        <input id="typeOfBusiness" type="text" placeholder="Type of business" />
        <input id="legalStructure" type="text" placeholder="Legal Structure" />
        <input
          id="contactInformation"
          type="text"
          placeholder="ContactInformation"
        />

        <input id="password" type="text" placeholder="Password" />

        <label>
          <input type="checkbox"></input>I agree the terms of privacy policy.
        </label>
      </div>
      <div className={classes.signInContainer}>
        <div className={classes.signInButton}>
          <button>Register</button>
        </div>
        <a href="/login">Or sign in</a>
      </div>
    </div>
  );
};

export default RegisterFirm;
