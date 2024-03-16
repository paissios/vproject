import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import loginIcon from "../../assets/images/login-icon.svg";
import classes from "./LoginForm.module.scss";
import { useNavigate } from "react-router";

const LoginForm: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();

  const submitHandler = async (values: any, { setSubmitting }: any) => {
    console.log(values);

    // To simulate a delay in the form submission
    setTimeout(() => {
      setSubmitting(false);
    }, 400);

    // Simulating a successful login
    localStorage.setItem("token", "1234567890");
    navigate("/");
  };

  return (
    <div className={classes.loginFormWrapper}>
      <div className={classes.loginForm}>
        <div className={classes.formHeader}>
          <img src={loginIcon} alt="Login Icon" />
          <h5>Login</h5>
          <p>Enter your details to login.</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
          validateOnMount
        >
          {({ isSubmitting, isValid }) => (
            <Form className={classes.form}>
              <div className={classes.field}>
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <Field
                  className={classes.email}
                  type="email"
                  name="email"
                  placeholder="test@test.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={classes.errorMessage}
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="password">
                  Password<span>*</span>
                </label>
                <Field
                  className={classes.password}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={classes.errorMessage}
                />
              </div>

              <button
                className={classes.submitButton}
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
