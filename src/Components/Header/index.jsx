import Button from "../Button";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.display}>
        <Button size="SMALL" variant="PRIMARY">
          Upload
        </Button>
        <div>
          <img className={styles.image} src="/Images/head.jpeg" alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
