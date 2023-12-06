import { Icon } from "@iconify/react";
import Button from "../Button";
import styles from "./style.module.css";

const SuccessBody = () => {
  return (
    <div className={styles.body}>
      <Icon
        className={styles.icon}
        icon="solar:upload-track-bold-duotone"
        width="140"
        height="140"
        style={{ color: "#d81159" }}
      />
      <h3 className={styles.text}>Uploaded Successfully</h3>
      <p className={styles.paragraph}>
        Your song has been uploaded successfully,click button to view
      </p>
      <div className={styles.btn}>
        <Button className={styles.button} size="LARGE" variant="PRIMARY">
          View song
        </Button>
      </div>
    </div>
  );
};

export default SuccessBody;
