import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const Iconify = () => {
  return (
    <div className={styles.icon}>
      <div className={styles.iconic}>
        <Icon icon="ph:heart" width="24" height="24" />
        <p className={styles.text}>663 Likes</p>
      </div>
      <div className={styles.iconic}>
        <Icon icon="lucide:reply" />
        <p>Reply</p>
      </div>
    </div>
  );
};

export default Iconify;
