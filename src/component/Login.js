import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

import "./loginstyles.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "admin",
      password: "admin",
    },
    {
      username: "admin1",
      password: "admin1",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handlesubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const redirect = (
    <Routes>
      <Route exact path="/dashboard" component={<Dashboard/>}></Route>
    </Routes>
  );

  return (
    // isSubmitted ? <Dashboard/> : renderForm
    <div className="app">
      <div className="login-form">
        <div>{isSubmitted ? <Dashboard/> : renderForm}</div>
      </div>
    </div>
  );
}

export default Login;
