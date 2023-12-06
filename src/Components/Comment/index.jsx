import Iconify from "../Iconify";
import styles from "./styles.module.css";

const Comment = () => {
  return (
    <div className={styles.flex}>
      <div>
        <img className={styles.images} src="/Images/comment.jpeg" alt="" />
      </div>

      <div className={styles.right}>
        <div className={styles.user}>
          <div>
            <h1 className={styles.text}>Johnny Drille</h1>
          </div>
          <div className={styles.circle}></div>
          <div>
            <p className={styles.paragraph}>34 minutes ago</p>
          </div>
        </div>

        <h5 className={styles.comments}>
          Sed suscipit in eros in elementum. Proin sodales gravida eros et
          dapibus. Donec blandit, mi quis vehicula tempus, mauris arcu finibus
          velit, eget pulvinar nisl ipsum et dolor
        </h5>

        <Iconify />
      </div>
    </div>
  );
};

export default Comment;
