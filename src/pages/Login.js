import React from "react";
import classes from "./Login.module.css";

import axios from 'axios';

const Login = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [emailFormatError, setEmailFormatError] = React.useState(false);
  const [userDoesNotExistError, setUserDoesNotExistError] = React.useState(false);
  const [incorrectPasswordError, setIncorrectPasswordError] = React.useState(false);

  async function loginRequest() {
    setEmailFormatError(false);
    setUserDoesNotExistError(false);
    setIncorrectPasswordError(false);

    try {
      let res = await axios.post("http://localhost:9090/login", {
          "email": emailRef.current.value,
          "password": passwordRef.current.value
      });

      alert("Login successful: " + JSON.stringify(res.headers['authorization']));
    } catch (err) {
      if (err.response.status == 401) {
        setIncorrectPasswordError(true);
      }
      else {
        setUserDoesNotExistError(true);
      }
    }
  }

  return (
    <div className={classes.container}>
      <div>
        <h2>Hello.</h2>
        <p>Sign in to your IMS account.</p>
      </div>
      <div className={classes.inputContainer}>
        <input ref={emailRef} id="email" type="text" placeholder="E-mail" />
        {emailFormatError ? <p>Invalid email format</p> : null}
        {userDoesNotExistError ? <p>The account does not exist.</p> : null}

        <input ref={passwordRef} id="password" type="text" placeholder="Password" />
        {incorrectPasswordError ? <p>Incorrect password</p> : null}

        <a href="/">Forgot your password?</a>
      </div>
      <div className={classes.signInContainer}>
        <div className={classes.signInButton}>
          <button onClick={loginRequest}>Sign in</button>
        </div>
        <a href="/register">Or sign up</a>
      </div>
    </div>
  );
};

export default Login;
