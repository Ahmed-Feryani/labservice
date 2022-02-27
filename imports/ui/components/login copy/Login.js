import Google from "./img/google.png";
import Facebook from "./img/facebook.png";
import Github from "./img/github.png";
import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import React from "react";
const Login = () => {
  //   const google = () => {
  //     window.open("http://localhost:5000/auth/google", "_self");
  //   };

  //   const github = () => {
  //     window.open("http://localhost:5000/auth/github", "_self");
  //   };

  //   const facebook = () => {
  //     window.open("http://localhost:5000/auth/facebook", "_self");
  //   };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, navigate));
  };
  return (
    <div>
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google">
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook">
              <img src={Facebook} alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github">
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <form onSubmit={onSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="loginInput"
                name="email"
                onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
              />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                name="pass"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="submit" onClick={onSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
