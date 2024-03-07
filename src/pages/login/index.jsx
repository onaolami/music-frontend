import React from "react";
import styles from "./styles.module.css";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import AuthHeader from "../../Components/AuthHeader";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import apiInstance from "../../services/apiInstance";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, helpers) => {
    console.log(values);
    apiInstance
      .post("/auth/login", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AuthHeader />

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Form>
            <div className={styles.container}>
              <div>
                <h2>Welcome Back</h2>
                <p>Enter login details to access your songs and playlists</p>
              </div>
              <div className={styles.wrapper}>
                <Field name="email">
                  {({ field }) => (
                    <Input placeholder="Email Address" {...field} />
                  )}
                </Field>

                <Field name="password">
                  {({ field }) => (
                    <Input placeholder="Password" type="password" {...field} />
                  )}
                </Field>
              </div>
              <div className={styles.button}>
                <Button variant="PRIMARY" size="LARGE" type="submit">
                  Login
                </Button>
              </div>
              <div className={styles.text}>
                <p>
                  {" "}
                  Don't have account? <Link to="/signup">Sign up</Link>{" "}
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
