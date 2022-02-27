import React from "react";
//import EntryText from "../../Entry/EntryText";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import EntryText from "../../Entry/EntryText";

const INITIAL_STATE = {
  title: "",
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required("title is required"),
});

const Login = () => {
  const handleSubmit = (values, resetForm) => {
    console.log(values);
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ ...INITIAL_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {({ isValid, dirty }) => {
          return (
            <Form>
              <EntryText
                id="outlined-basic"
                name="title"
                label="Outlined"
                variant="outlined"
              ></EntryText>

              <div className="film-form__action">
                <button
                  className="film-form__add"
                  variant="contained"
                  type="submit"
                  disabled={!(isValid && dirty)}
                >
                  click
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
