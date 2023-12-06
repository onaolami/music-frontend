import React from "react";
import styles from "./styles.module.css";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import AuthHeader from "../../Components/AuthHeader";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthHeader />
      <div className={styles.container}>
        <div>
          <h2>Welcome Back</h2>
          <p>Enter login details to access your songs and playlists</p>
        </div>
        <div className={styles.wrapper}>
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
        </div>
        <div className={styles.button}>
          <Button variant="PRIMARY" size="LARGE">
            Login
          </Button>
        </div>
        <div className={styles.text}>
          <p> Don't have account? <Link to="/signup">Sign up</Link>  </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
