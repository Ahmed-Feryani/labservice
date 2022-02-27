import React, { useEffect, useState } from "react";
//import EntryText from "../../Entry/EntryText";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import EntryText from "../components/Entry/EntryText/EntryText";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import snackBar from "../../libs/snackBar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
const INITIAL_STATE = {
  email: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email("Enter a valid email").required("Is required"),
  password: Yup.string().required("Enter valid password"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPass, setshowPass] = useState(false);
  const handleClickShowPassword = () => {
    setshowPass(!showPass);
  };
  const handleSubmit = (values, resetForm) => {
    Meteor.loginWithPassword(
      { email: values.email },
      values.password,
      (err) => {
        if (err) {
          snackBar.set("snackbar", {
            open: true,
            msg: err.reason,
            severity: "error",
          });
        } else {
          snackBar.set("snackbar", {
            open: true,
            msg: `hello ${Meteor.user()?.profile?.name}`,
            severity: "success",
          });
          resetForm();
        }
      }
    );
  };
  useEffect(() => {
    if (Meteor.userId()) {
      navigate("/", { replace: true });
    }
  }, [Meteor.userId()]);
  return (
    <Formik
      initialValues={{ ...INITIAL_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {({ isValid, dirty }) => {
        return (
          <Form>
            <div className="signUpPro__entry">
              <EntryText
                name="email"
                label="Email Address"
                variant="outlined"
                placeholder="Enter your Email Address"
              ></EntryText>
            </div>
            <div className="signUpPro__entry">
              <EntryText
                name="password"
                label="Password"
                variant="outlined"
                placeholder="Enter your Password Address"
                type={showPass ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></EntryText>
            </div>

            <div className="login-btn">
              <Button
                className="login-btn"
                variant="contained"
                type="submit"
                disabled={!(isValid && dirty)}
              >
                click
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
