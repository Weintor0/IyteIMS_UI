import React from "react";
import classes from "./RegisterStudent.module.css";

import axios from "axios";

const RegisterStudent = () => {
  const nameRef = React.useRef(null);
  const surnameRef = React.useRef(null);
  const birthDateRef = React.useRef(null);
  const studentNumberRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [privacyAgreementChecked, setPrivacyAgreementChecked] = React.useState(false);
  const [studentNumberUniquenessError, setStudentNumberUniqunessError] = React.useState(false);
  const [emailUniquenessError, setEmailUniquenessError] = React.useState(false);
  const [birthDateFormatError, setBirthDateFormatError] = React.useState(false);
  const [emailFormatError, setEmailFormatError] = React.useState(false);

  const [passwordBlankError, setPasswordBlankError] = React.useState(false);
  const [emailBlankError, setEmailBlankError] = React.useState(false);
  const [surnameBlankError, setSurnameBlankError] = React.useState(false);
  const [nameBlankError, setNameBlankError] = React.useState(false);
  const [studentNumberBlankError, setStudentNumberBlankError] = React.useState(false);
  const [birthDateNullError, setBirthDateNullError] = React.useState(false);

  async function registerRequest() {
    setStudentNumberUniqunessError(false);
    setEmailUniquenessError(false);
    setBirthDateFormatError(false);
    setEmailFormatError(false);

    setPasswordBlankError(false);
    setEmailBlankError(false);
    setSurnameBlankError(false);
    setNameBlankError(false);
    setStudentNumberBlankError(false);
    setBirthDateNullError(false);

    try {
      if (!privacyAgreementChecked) {
        alert(
          "Registration failed. You must agree to the terms of Privacy Policy."
        );
      } else {
        let res = await axios.post("http://localhost:9090/auth/register/student", {
          studentNumber: studentNumberRef.current.value,
          birthDate: birthDateRef.current.value,
          name: nameRef.current.value,
          surname: surnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });

        //alert("Register sucessful. Your user ID: " + JSON.stringify(res.data));
        window.location.href="/login";
      }
    } catch (err) {
      try {
        if (err.response.data == undefined) {
          throw new Error();
        }

        for (const error of err.response.data.errors) {
          console.log(error);

          if (error.entity == "User" && error.attribute == "email" && error.constraint == "Unique") {
            setEmailUniquenessError(true);
          }
          else if (error.entity == "Student" && error.attribute == "studentNumber" && error.constraint == "Unique") {
            setStudentNumberUniqunessError(true);
          } 
          else if (error.entity == "Student" && error.attribute == "birthDate" && error.constraint == "Format") {
            setBirthDateFormatError(true);
          }
          else if (error.entity == 'Student' && error.attribute == 'birthDate' && error.constraint == 'NotNull') {
            setBirthDateNullError(true);
          }
          else if (error.entity == "Student" && error.attribute == "email" && error.constraint == "Email") {
            setEmailFormatError(true);
          } 
          else if (error.entity == 'Student' && error.attribute == 'password' && error.constraint == 'NotBlank') {
            setPasswordBlankError(true);
          }
          else if (error.entity == 'Student' && error.attribute == 'email' && error.constraint == 'NotBlank') {
            setEmailBlankError(true);
          }
          else if (error.entity == 'Student' && error.attribute == 'surname' && error.constraint == 'NotBlank') {
            setSurnameBlankError(true);
          }
          else if (error.entity == 'Student' && error.attribute == 'name' && error.constraint == 'NotBlank') {
            setNameBlankError(true);
          }    
          else if (error.entity == 'Student' && error.attribute == 'studentNumber' && error.constraint == 'NotBlank') {
            setStudentNumberBlankError(true);
          }      
          else {
            throw new Error();
          }
        }
      } catch (e) {
        alert("An internal system error has occured." + e);
      }
    }
  }

  return (
    <div className={classes.container}>
      <div>
        <h2>Register.</h2>
        <p>Student register page.</p>
      </div>
      <div className={classes.inputContainer}>
        <input ref={nameRef} id="name" type="text" placeholder="Name" />
        {nameBlankError ? <p>Name cannot be blank.</p> : null}

        <input ref={surnameRef} id="surname" type="text" placeholder="Surname" />
        {surnameBlankError ? <p>Surname cannot be blank.</p> : null}

        <input ref={birthDateRef} id="birthDate" type="text" placeholder="Birth Date"/>
        {birthDateFormatError ? <p>Invalid date format</p> : null}
        {birthDateNullError ? <p>Birth date cannot be blank.</p> : null}

        <input ref={studentNumberRef} id="studentNumber" type="text" placeholder="Student Number"/>
        {studentNumberUniquenessError ? (<p>A user with this student number is already registered.</p>) : null}
        {studentNumberBlankError ? <p>Student number cannot be blank.</p> : null}

        <input ref={emailRef} id="email" type="text" placeholder="E-mail" />
        {emailUniquenessError ? (<p>A user with this email is already registered.</p>) : null}
        {emailFormatError ? <p>Invalid email format</p> : null}
        {emailBlankError ? <p>Email cannot be blank</p> : null}

        <input ref={passwordRef} id="password" type="text" placeholder="Password"/>
        {passwordBlankError ? <p>Password cannot be blank.</p> : null}

        <label>
          <input type="checkbox" checked={privacyAgreementChecked} onChange={() => setPrivacyAgreementChecked((state) => !state)}></input>
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

export default RegisterStudent;
