import { useNavigate } from "react-router-dom";

import { Accounts } from "meteor/accounts-base";
import Simple from "simpl-schema";
import React, { useEffect, useState } from "react";
import profile from "./profile";
const Schema = new Simple({
  email: {
    type: String,
    regEx: Simple.RegEx.Email,
  },
  password: {
    type: String,
    min: 5,
  },
});

const Register = (props) => {
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      Schema.validate({
        email,
        password,
      });
    } catch (err) {
      if (err) {
        seterror(err.message);
        return;
      }
    }
    Accounts.createUser({ email, password }, (logerr) => {
      if (logerr) {
        seterror(logerr.reason);
      } else {
        seterror("");
        Meteor.users.update({ _id: Meteor.user()._id }, { $set: { ...profile } });
      }
    });
  };
  useEffect(() => {
    if (props.ok) {
      navigate("/", { replace: true });
    }
  }, [props.ok]);
  return (
    <div>
      <div className="login">
        <h1 className="loginTitle">Choose a register Method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google">
              <img src="/login/img/google.png" alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook">
              <img src="/login/img/facebook.png" alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github">
              <img src="/login/img/github.png" alt="" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <form noValidate onSubmit={submitHandler}>
              <input
                type="email"
                placeholder="Email"
                className="loginInput"
                name="email"
              />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                name="password"
              />
              <button className="submit">register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
