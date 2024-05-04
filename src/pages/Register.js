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

  const [studentNumberUniquenessError, setStudentNumberUniqunessError] = React.useState(false);
  const [emailUniquenessError, setEmailUniquenessError] = React.useState(false);
  const [birthDateFormatError, setBirthDateFormatError] = React.useState(false);
  const [emailFormatError, setEmailFormatError] = React.useState(false);

  async function registerRequest() {
    setStudentNumberUniqunessError(false);
    setEmailUniquenessError(false);
    setBirthDateFormatError(false);
    setEmailFormatError(false);

    try {
      let res = await axios.post("http://localhost:9090/register/student", {
        "studentNumber": studentNumberRef.current.value,
        "birthDate": birthDateRef.current.value,
        "name": nameRef.current.value,
        "surname": surnameRef.current.value,
        "email": emailRef.current.value,
        "password": passwordRef.current.value
      });

      alert("Register sucessful. Your user ID: " + JSON.stringify(res.data));
    } catch (err) {
      try {
        if (err.response.data == undefined) {
          throw new Error();
        }
        
        for (const error of err.response.data.errors) {
          console.log(error);

          if (error.entity == 'User' && error.attribute == 'email' && error.constraint == 'Unique') {
            setEmailUniquenessError(true);
          }
          else if (error.entity == 'Student' && error.attribute == 'studentNumber' && error.constraint == 'Unique') {
            setStudentNumberUniqunessError(true);
          }
          else if (error.entity == 'Student' && error.attribute == 'birthDate' && error.constraint == 'Format') {
            setBirthDateFormatError(true);
          }
          else if (error.entity == 'User' && error.attribute == 'email' && error.constraint == 'Email') {
            setEmailFormatError(true);
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
        <h2>Register.</h2>
        <p>You don't have an account? Sign up.</p>
      </div>
      <div className={classes.inputContainer}>
        <input ref={nameRef} id="name" type="text" placeholder="Name" />
        <input ref={surnameRef} id="surname" type="text" placeholder="Surname" />

        <input ref={birthDateRef} id="birthDate" type="text" placeholder="Birth Date" />
        {birthDateFormatError ? <p>Invalid date format</p> : null}

        <input ref={studentNumberRef} id="studentNumber" type="text" placeholder="Student Number" />
        {studentNumberUniquenessError ? <p>A user with this student number is already registered.</p> : null}

        <input ref={emailRef} id="email" type="text" placeholder="E-mail" />
        {emailUniquenessError ? <p>A user with this email is already registered.</p> : null}
        {emailFormatError ? <p>Invalid email format</p> : null}

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
