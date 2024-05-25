// CONNECTED

import React from "react";
import classes from "./RegisterFirm.module.css";

import axios from "axios";
import { requestUrl } from "../../util/Request";

const RegisterFirm = () => {
  const firmNameRef = React.useRef(null);
  const registrationDateRef = React.useRef(null);
  const businessRegistrationNumberRef = React.useRef(null);
  const typeOfBusinessRef = React.useRef(null);
  const legalStructureRef = React.useRef(null);
  const phoneNumberRef = React.useRef(null);
  const addressRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [privacyAgreementChecked, setPrivacyAgreementChecked] = React.useState(false);
  const [firmNameUniqunessError, setFirmNameUniqunessError] = React.useState(false);
  const [registrationDateFormatError, setRegistrationDateFormatError] = React.useState(false);
  const [registrationNumberUniquenessError, setRegistrationNumberUniquenessError] = React.useState(false);
  const [emailUniquenessError, setEmailUniquenessError] = React.useState(false);
  const [emailFormatError, setEmailFormatError] = React.useState(false);

  const [emailNotBlankError, setEmailNotBlankError] = React.useState(false);
  const [registerDateNotNullError, setRegisterDateNotNullError] = React.useState(false);
  const [typeOfBusinessNotBlankError, setTypeOfBusinessNotBlankError] = React.useState(false);
  const [businessRegistrationNumberNotBlankError, setBusinessRegistrationNumberNotBlankError] = React.useState(false);
  const [legalStructureNotBlankError, setLegalStructureNotBlankError] = React.useState(false);
  const [phoneNumberNotBlankError, setPhoneNumberNotBlankError] = React.useState(false);
  const [passwordNotBlankError, setPasswordNotBlankError] = React.useState(false);
  const [firmNameNotBlankError, setFirmNameNotBlankError] = React.useState(false);
  const [addressNotBlankError, setAddressNotBlankError] = React.useState(false);

  async function registerRequest() {
    setFirmNameUniqunessError(false);
    setRegistrationDateFormatError(false);
    setRegistrationNumberUniquenessError(false);
    setEmailUniquenessError(false);
    setEmailFormatError(false);

    setEmailNotBlankError(false);
    setRegisterDateNotNullError(false);
    setTypeOfBusinessNotBlankError(false);
    setBusinessRegistrationNumberNotBlankError(false);
    setLegalStructureNotBlankError(false);
    setPhoneNumberNotBlankError(false);
    setPasswordNotBlankError(false);
    setFirmNameNotBlankError(false);
    setAddressNotBlankError(false);

    try {
      if (!privacyAgreementChecked) {
        alert(
          "Registration failed. You must agree to the terms of Privacy Policy."
        );
      } else {
        await axios.post(requestUrl("/auth/register/firm"), {
          registerDate: registrationDateRef.current.value,
          firmName: firmNameRef.current.value,
          typeOfBusiness: typeOfBusinessRef.current.value,
          businessRegistrationNumber: businessRegistrationNumberRef.current.value,
          legalStructure: legalStructureRef.current.value,
          phoneNumber: phoneNumberRef.current.value,
          address: addressRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
        });

        //alert("Register sucessful. Your user ID: " + JSON.stringify(res.data));
        window.location.href="/login";
      }
    } catch (err) {
      try {
        if (err.response.data === undefined) {
          throw new Error();
        }

        for (const error of err.response.data.errors) {
          console.log(error);

          if (error.entity === "User" && error.attribute === "email" && error.constraint === "Unique") {
            setEmailUniquenessError(true);
          } 
          else if (error.entity === "Firm" && error.attribute === "firmName" && error.constraint === "Unique") {
            setFirmNameUniqunessError(true);
          }
          else if (error.entity === "Firm" && error.attribute === "businessRegistrationNumber" && error.constraint === "Unique") {
            setRegistrationNumberUniquenessError(true);
          } 
          else if (error.entity === "Firm" &&error.attribute === "registerDate" && error.constraint === "Format") {
            setRegistrationDateFormatError(true);
          } 
          else if ( error.entity === "Firm" && error.attribute === "email" && error.constraint === "Email") {
            setEmailFormatError(true);
          }
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'email') {
            setEmailNotBlankError(true);
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotNull' && error.attribute === 'registerDate') {
            setRegisterDateNotNullError(true)
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'typeOfBusiness') {
            setTypeOfBusinessNotBlankError(true);
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'businessRegistrationNumber') {
            setBusinessRegistrationNumberNotBlankError(true);
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'legalStructure') {
            setLegalStructureNotBlankError(true);
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'phoneNumber') {
            setPhoneNumberNotBlankError(true);
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'password') {
            setPasswordNotBlankError(true);
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'firmName') {
            setFirmNameNotBlankError(true);
          } 
          else if (error.entity === "Firm" && error.constraint === 'NotBlank' && error.attribute === 'address') {
            setAddressNotBlankError(true);
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
        <p>Firm register page.</p>
      </div>
      <div className={classes.inputContainer}>
        <input ref={firmNameRef} id="name" type="text" placeholder="Firm name" />
        {firmNameUniqunessError ? (<p>A firm with this firm name is already registered.</p>) : null}
        {firmNameNotBlankError ? <p>Firm name cannot be blank.</p> : null}

        <input ref={registrationDateRef} id="registrationDate" type="text" placeholder="Registration Date"/>
        {registrationDateFormatError ? <p>Invalid date format</p> : null}
        {registerDateNotNullError ? <p>Registration date cannot be blank.</p> : null}

        <input ref={businessRegistrationNumberRef} id="businessRegistrationNumber" type="text" placeholder="Business registration number"/>
        {registrationNumberUniquenessError ? (<p>A firm with this registration number is already registered.</p>) : null}
        {businessRegistrationNumberNotBlankError ? <p>Business registration number cannot be blank.</p> : null}

        <input ref={typeOfBusinessRef} id="typeOfBusiness" type="text" placeholder="Type of business" />
        {typeOfBusinessNotBlankError ? <p>Type of business cannot be blank.</p> : null}

        <input ref={legalStructureRef} id="legalStructure" type="text" placeholder="Legal Structure" />
        {legalStructureNotBlankError ? <p>Legal structure cannot be blank.</p> : null}

        <input ref={phoneNumberRef} id="phoneNumber" type="text" placeholder="Phone Number" />
        {phoneNumberNotBlankError ? <p>Phone number cannot be blank.</p> : null}

        <input ref={addressRef} id="address" type="text" placeholder="Address" />
        {addressNotBlankError ? <p>Address cannot be blank.</p> : null}

        <input ref={emailRef} id="email" type="text" placeholder="E-mail" />
        {emailUniquenessError ? (<p>A user with this email is already registered.</p>) : null}
        {emailFormatError ? <p>Invalid email format</p> : null}
        {emailNotBlankError ? <p>Email cannot be blank.</p> : null}
        
        <input ref={passwordRef} id="password" type="text" placeholder="Password" />
        {passwordNotBlankError ? <p>Password cannot be blank.</p> : null}

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

export default RegisterFirm;
