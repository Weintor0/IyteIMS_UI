import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2>Hello.</h2>
        <p>Sign in to your IMS account.</p>
      </div>
      <div className={classes.inputContainer}>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Password" />
        <a href="/">Forgot your password?</a>
      </div>
      <div className={classes.signInContainer}>
        <div className={classes.signInButton}>
          <button>Sign in</button>
        </div>
        <a href="/register">Or sign up</a>
      </div>
    </div>
  );
};

export default Login;
