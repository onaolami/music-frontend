import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.css";
const Body = () => {
  return (
    <div className={styles.container}>
      <h2>Create Account</h2>
      <p>Join Stream to enjoy free and premium sounds across</p>
      <p>Africa</p>
      <div className={styles.wrapper}>
        <Input placeholder="Full Name" />

        <Input placeholder="Email Address" />

        <Input placeholder="Password" />

        <div className={styles.button}>
          <Button variant="PRIMARY" size="LARGE">
            Signup
          </Button>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Body;
