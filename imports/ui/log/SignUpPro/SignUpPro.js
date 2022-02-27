import React, { useEffect, useState } from "react";
//import EntryText from "../../Entry/EntryText";
import { Form, Formik } from "formik";
import { Accounts } from "meteor/accounts-base";
import * as Yup from "yup";
import EntryText from "../../components/Entry/EntryText/EntryText";
import EntrySelect from "../../components/Entry/EntrySelect/EntrySelect";
import { options } from "./options";
import "./styles.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import snackBar from "../../../libs/snackBar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
const INITIAL_STATE = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  specialty: "",
};

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Enter valid password"),
  confirmPassword: Yup.string()
    .required("Enter valid password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

  specialty: Yup.string().required("specialty is required"),
});

const SignUpPro = () => {
  const navigate = useNavigate();
  const [showPass, setshowPass] = useState(false);
  const handleClickShowPassword = () => {
    setshowPass(!showPass);
  };
  const handleSubmit = (values, resetForm) => {
    console.log(values);
    Accounts.createUser(
      { email: values.email, password: values.password },

      (err) => {
        if (err) {
          snackBar.set("snackbar", {
            open: true,
            msg: err.reason,
            severity: "error",
          });
        } else {
          Meteor.users.update(
            { _id: Meteor.user()._id },
            {
              $set: {
                profile: {
                  bio: "",
                  name: values.name,
                  lastName: values.lastName,
                  experience: ["one", "tow"],
                  location: "sousse",
                  professionalSpecialty: values.specialty,
                  skills: [],
                  isProvider: true,
                  isAdmin: false,
                  isClient: false,
                },
              },
            },
            (err) => {
              if (err) {
                console.log(err);
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
    <div className="signUpPro">
      <Formik
        initialValues={{ ...INITIAL_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {({ isValid, dirty }) => {
          return (
            <Form>
              <div className="signUpPro__entry">
                <EntrySelect
                  name="specialty"
                  label="Professional Specialty"
                  options={options}
                ></EntrySelect>
              </div>
              <div className="signUpPro__entry">
                <EntryText
                  name="name"
                  label="Name"
                  variant="outlined"
                  placeholder="Enter your Name"
                ></EntryText>
              </div>
              <div className="signUpPro__entry">
                <EntryText
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter your last name"
                ></EntryText>
              </div>
              <div className="signUpPro__entry">
                <EntryText
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  placeholder="Enter your Password Address"
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
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPass ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                ></EntryText>
              </div>
              <div className="signUpPro__entry">
                <EntryText
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  placeholder="confirm your Password Address"
                  type={showPass ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPass ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                ></EntryText>
              </div>

              <div className="login-btn">
                <Button
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
    </div>
  );
};

export default SignUpPro;
