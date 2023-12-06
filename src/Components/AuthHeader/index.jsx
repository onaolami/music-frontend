import Button from "../Button";
import styles from "./styles.module.css";

const AuthHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className="logo">
        <img src="/Images/Logo.svg" alt="" />
      </div>

      <div className={styles.text}>
        <p>New Realeases</p>
        <Button variant="DEFAULT" size="SMALL">
          Login
        </Button>
        <Button variant="PRIMARY" size="SMALL">
          Create account
        </Button>
      </div>
    </div>
  );
};

export default AuthHeader;
