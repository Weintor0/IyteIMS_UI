// CONNECTED

import React, { useState } from "react";
import classes from "./Register.module.css";
import SelectedTabButton from "../../components/auth/SelectedTabButton";

import RegisterStudent from "./RegisterStudent";
import UnselectedTabButton from "../../components/auth/UnselectedTabButton";
import RegisterFirm from "./RegisterFirm";

const Register = () => {
  const [studentSelected, setStudentSelected] = useState(true);

  function handleClick() {
    setStudentSelected((state) => !state);
  }

  return (
    <>
      <div className={classes.container}>
        {studentSelected ? (
          <>
            <div className={classes.tabButtonContainer}>
              <SelectedTabButton />
              <UnselectedTabButton
                condition={studentSelected}
                click={() => handleClick()}
              />
              {console.log(studentSelected)}
            </div>
            <RegisterStudent />
          </>
        ) : (
          <>
            <div className={classes.tabButtonContainer}>
              <UnselectedTabButton
                condition={studentSelected}
                click={() => handleClick()}
              />
              <SelectedTabButton />
            </div>
            <RegisterFirm />
          </>
        )}
      </div>
    </>
  );
};

export default Register;
