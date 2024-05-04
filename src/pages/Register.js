import React from "react";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2>Register.</h2>
        <p>You don't have an account? Sign up.</p>
      </div>
      <div className={classes.inputContainer}>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Password" />
        <label>
          <input type = "checkbox"></input>
          I agree the terms of privacy policy.
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

export default Register;
