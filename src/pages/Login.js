import React from "react";
import classes from "./Login.module.css";

import axios from 'axios';

const Login = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [userDoesNotExistError, setUserDoesNotExistError] = React.useState(false);
  const [incorrectPasswordError, setIncorrectPasswordError] = React.useState(false);
  const [emailBlankError, setEmailBlankError] = React.useState(false);
  const [emailNotWellFormedError, setEmailNotWellFormedError] = React.useState(false);
  const [passwordBlankError, setPasswordBlankError] = React.useState(false);

  async function loginRequest() {
    setUserDoesNotExistError(false);
    setIncorrectPasswordError(false);
    setEmailBlankError(false);
    setEmailNotWellFormedError(false);
    setPasswordBlankError(false);

    try {
      let res = await axios.post("http://localhost:9090/auth/login", {
          "email": emailRef.current.value,
          "password": passwordRef.current.value
      });

      alert("Login successful: " + JSON.stringify(res.headers['authorization']));
    } catch (err) {
      try {
        if (err.response.data == undefined) {
          throw new Error();
        }
        
        for (const error of err.response.data.errors) {
          console.log(error);

          if (error.constraint == 'PasswordMismatch') {
            setIncorrectPasswordError(true);
          }
          else if (error.constraint == 'AccountMissing') {
            setUserDoesNotExistError(true);
          }
          else if (error.constraint == 'NotBlank' && error.attribute == 'email') {
            setEmailBlankError(true);
          }
          else if (error.constraint == 'Email' && error.attribute == 'email') {
            setEmailNotWellFormedError(true);
          }
          else if (error.constraint == 'NotBlank' && error.attribute == 'password') {
            setPasswordBlankError(true);
          }
          else {
            throw new Error();
          }
        }
      } catch (e) {
        alert("An internal system error has occured.");
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
        {userDoesNotExistError ? <p>The account does not exist.</p> : null}
        {emailBlankError ? <p>Email cannot be blank.</p> : null}
        {emailNotWellFormedError ? <p>Email must be well formed.</p> : null}

        <input ref={passwordRef} id="password" type="text" placeholder="Password" />
        {incorrectPasswordError ? <p>Incorrect password</p> : null}
        {passwordBlankError ? <p>Password cannot be blank.</p> : null}

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
