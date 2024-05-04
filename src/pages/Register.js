import React from "react";
import classes from "./Register.module.css";

import axios from 'axios';

const Register = () => {
  const nameRef = React.useRef(null);
  const surnameRef = React.useRef(null);
  const birthDateRef = React.useRef(null);
  const studentNumberRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  async function registerRequest() {
    try {
      let res = await axios.post("http://localhost:9090/register/student", {
        "studentNumber": studentNumberRef.current.value,
        "birthDate": birthDateRef.current.value,
        "name": nameRef.current.value,
        "surname": surnameRef.current.value,
        "email": emailRef.current.value,
        "password": passwordRef.current.value
      });

      console.log("Response: " + JSON.stringify(res.data));
    } catch (err) {
      console.log("Error Code: " + err.response.status);
      console.log("Error Data: " + JSON.stringify(err.response.data));
    }
  }

  return (
    <div className={classes.container}>
      <div>
        <h2>Register.</h2>
        <p>You don't have an account? Sign up.</p>
      </div>
      <div className={classes.inputContainer}>
        <input ref={nameRef} id="name" type="text" placeholder="Name" />
        <input ref={surnameRef} id="surname" type="text" placeholder="Surname" />
        <input ref={birthDateRef} id="birthDate" type="text" placeholder="Birth Date" />
        <input ref={studentNumberRef} id="studentNumber" type="text" placeholder="Student Number" />
        <input ref={emailRef} id="email" type="text" placeholder="E-mail" />
        <input ref={passwordRef} id="password" type="text" placeholder="Password" />
        
        <label>
          <input type = "checkbox"></input>
          I agree the terms of privacy policy.
          </label>
      </div>
      <div className={classes.signInContainer}>
        <div className={classes.signInButton}>
          <button onClick={registerRequest}>Register</button>
        </div>
        <a href="/login">Or sign in</a>
      </div>
    </div>
  );
};

export default Register;
