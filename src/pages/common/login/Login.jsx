import React, { useState, useEffect } from "react";
import basketImage from "./basket.jpg";
import Card from "../UI/Card/Card";
import classes from "./login.css";
import "./login.css";
import Service from "../../../service/Service";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";
import $ from "jquery";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

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
    setEnteredEmail(()=>event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(()=>event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(()=>enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const login = (e) => {
    e.preventDefault();

    if (enteredEmail != "" && enteredPassword != "") {
      const user = {
        login: enteredEmail,
        password: enteredPassword,
      };

      Service.login(user)
        .then((response) => {
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);

          const decodedToken = jwt_decode(accessToken);

          const sub = decodedToken.sub;

          const arr = sub.split("-");

          signIn({
            token: accessToken,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: { email: enteredEmail },
          });

          if (arr[1] == 1) {
            localStorage.setItem("roleId", arr[1]);
            localStorage.setItem("username", arr[0]);
            navigate("/");
          } else {
            localStorage.setItem("roleId", arr[1]);
            localStorage.setItem("username", arr[0]);
            navigate("/admin");
          }
        })
        .catch((error) => {
          if (error.code == "ERR_BAD_REQUEST")
            $("#mess").text("Account not found!");
          else {
            $("#mess").text("Something went wrong!");
          }
        });
    } else {
      $("#mess").text("Please enter the data correctly!");
    }
  };

  return (
    <div id="flex">
      <Card className={classes.login}>
        <div id="login_inputs">
          <h2>Login</h2>
          <div>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              placeholder="Password"
            />
          </div>
          <div className="actions">
            <button onClick={login}>Login</button>
            <p id="signup">Do You Have an Account?</p>
            <p id="mess"></p>
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
