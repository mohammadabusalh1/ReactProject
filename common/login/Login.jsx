import React, { useState, useEffect } from "react";
import basketImage from "./basket.jpg";
import Card from "../UI/Card/Card";
import classes from "./login.css";
import Button from "../UI/Button/Button";
import "./login.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log("Checking Validity !!");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    // cleanup function
    // runs before render, except first render
    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div id="flex">
      <Card className={classes.login}>
        <div id="login_inputs">
          <h2>Login</h2>
          <div id="form">
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              placeholder="Your Email"
            />
          </div>
          <div id="form">
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              placeholder="Your Password"
            />
          </div>
          <div className="actions">
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
            <p id="signup">Do You Have an Account?</p>
          </div>
        </div>
      </Card>

      <div>
        <img src={basketImage} alt="basket" id="loginImage" />
      </div>
    </div>
  );
};

export default Login;
